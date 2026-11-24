-- B2 (fiche app mobile §7.6) : clôture hebdomadaire des ligues.
--
-- app_private.karatou_close_league_week() clôt la semaine précédente :
--   * rang final de chaque membre (XP de la semaine, puis ordre d'arrivée) ;
--   * groupe d'au moins 10 membres (et au moins 10 actifs au total cette
--     semaine-là) : top 5 promus, 3 derniers relégués ; sinon tout le monde
--     reste (simple « classement de la semaine ») ;
--   * badges « Podium » (top 3 d'un groupe d'au moins 5 membres, XP > 0) et
--     « Promu·e ».
-- Idempotente : un groupe déjà clos n'est pas retraité.
--
-- Elle vit dans app_private et n'est exécutable par aucun client.
--
-- ⚠️ PLANIFICATION NON ACTIVÉE PAR CETTE MIGRATION. Après application en
-- production, un opérateur active pg_cron (Dashboard › Database › Extensions)
-- puis exécute une seule fois, dans l'éditeur SQL :
--
--   select cron.schedule(
--     'karatou-close-league-week',
--     '5 0 * * 1',  -- lundi 00:05 UTC
--     $cron$select app_private.karatou_close_league_week()$cron$
--   );
--
-- Vérification : select * from cron.job where jobname = 'karatou-close-league-week';
-- Désactivation : select cron.unschedule('karatou-close-league-week');

create or replace function app_private.karatou_close_league_week(p_week_start date default null)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_week date := coalesce(p_week_start, app_private.karatou_league_week(now()) - 7);
  v_total_active integer;
  v_group record;
  v_size integer;
  v_closed integer := 0;
begin
  if extract(isodow from v_week) <> 1 then
    raise exception 'week_start must be a Monday' using errcode = '22023';
  end if;
  if v_week >= app_private.karatou_league_week(now()) then
    raise exception 'week % is not over yet', v_week using errcode = '22023';
  end if;

  select count(*) into v_total_active
  from public.karatou_league_members lm
  where lm.week_start = v_week and lm.weekly_xp > 0;

  for v_group in
    select g.id from public.karatou_league_groups g
    where g.week_start = v_week and g.closed_at is null
    order by g.id
    for update
  loop
    select count(*) into v_size from public.karatou_league_members lm where lm.group_id = v_group.id;

    with ranked as (
      select lm.user_id,
             row_number() over (order by lm.weekly_xp desc, lm.joined_at, lm.user_id) as rnk
      from public.karatou_league_members lm
      where lm.group_id = v_group.id
    )
    update public.karatou_league_members lm
    set final_rank = r.rnk,
        outcome = case
          when v_size >= 10 and v_total_active >= 10 and r.rnk <= 5 and lm.weekly_xp > 0 and lm.tier < 5
            then 'promoted'
          when v_size >= 10 and v_total_active >= 10 and r.rnk > v_size - 3 and lm.tier > 1
            then 'demoted'
          else 'stayed'
        end
    from ranked r
    where lm.group_id = v_group.id and lm.user_id = r.user_id;

    update public.karatou_learner_stats s
    set league_tier = case lm.outcome when 'promoted' then lm.tier + 1 else lm.tier - 1 end,
        updated_at = now()
    from public.karatou_league_members lm
    where lm.group_id = v_group.id and lm.user_id = s.user_id and lm.outcome in ('promoted', 'demoted');

    insert into public.karatou_user_badges (user_id, badge_key)
    select lm.user_id, 'promoted'
    from public.karatou_league_members lm
    where lm.group_id = v_group.id and lm.outcome = 'promoted'
    on conflict do nothing;

    if v_size >= 5 then
      insert into public.karatou_user_badges (user_id, badge_key)
      select lm.user_id, 'podium'
      from public.karatou_league_members lm
      where lm.group_id = v_group.id and lm.final_rank <= 3 and lm.weekly_xp > 0
      on conflict do nothing;
    end if;

    update public.karatou_league_groups g set closed_at = now() where g.id = v_group.id;
    v_closed := v_closed + 1;
  end loop;

  return v_closed;
end;
$$;

revoke all on function app_private.karatou_close_league_week(date) from public, anon, authenticated;
