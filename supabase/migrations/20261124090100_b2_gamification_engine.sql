-- B2 (fiche app mobile §7, §8.4) : moteur de la gamification.
--
-- Point d'entrée unique : app_private.karatou_apply_xp(user, amount, reason,
-- ref, at). Il insère l'événement d'XP (idempotent grâce à l'unicité
-- (user_id, reason, ref)), puis met à jour les statistiques (total, niveau,
-- série, gels), l'XP de ligue de la semaine, les quêtes du jour et les badges.
--
-- Deux triggers branchent le web sans le modifier :
--   * AFTER INSERT sur karatou_learner_progress → +20 XP « lesson_completed » ;
--   * AFTER INSERT sur karatou_certificates     → +100 XP « certificate_earned ».
-- Un échec de la gamification n'empêche JAMAIS de terminer une leçon ou
-- d'obtenir un certificat : les triggers journalisent l'erreur (WARNING) et
-- laissent passer l'écriture principale.
--
-- Toutes ces fonctions vivent dans app_private (schéma non exposé par l'API) et
-- ne sont exécutables ni par anon ni par authenticated.

-- ---------------------------------------------------------------------------
-- Utilitaires purs.
-- ---------------------------------------------------------------------------

-- Niveau n atteint à 25 × n × (n − 1) XP cumulés (§7.2) : N2 = 50, N3 = 150,
-- N5 = 500, N10 = 2 250.
create or replace function app_private.karatou_level_for_xp(p_xp integer)
returns integer
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_level integer;
begin
  if p_xp is null or p_xp < 50 then
    return 1;
  end if;
  v_level := floor((1 + sqrt(1 + 4.0 * p_xp / 25)) / 2)::integer;
  -- Garde-fous contre l'arrondi flottant.
  while 25 * (v_level + 1) * v_level <= p_xp loop
    v_level := v_level + 1;
  end loop;
  while v_level > 1 and 25 * v_level * (v_level - 1) > p_xp loop
    v_level := v_level - 1;
  end loop;
  return v_level;
end;
$$;

-- XP cumulés requis pour atteindre un niveau.
create or replace function app_private.karatou_xp_for_level(p_level integer)
returns integer
language sql
immutable
set search_path = ''
as $$
  select 25 * greatest(p_level, 1) * (greatest(p_level, 1) - 1);
$$;

-- « Prénom N. » pour les classements (§7.6) : jamais le nom complet.
create or replace function app_private.karatou_public_display_name(p_full_name text)
returns text
language plpgsql
immutable
set search_path = ''
as $$
declare
  v_parts text[];
begin
  v_parts := regexp_split_to_array(btrim(coalesce(p_full_name, '')), '\s+');
  if coalesce(v_parts[1], '') = '' then
    return null;
  end if;
  if cardinality(v_parts) = 1 then
    return left(v_parts[1], 40);
  end if;
  return left(v_parts[1], 40) || ' ' || upper(left(v_parts[cardinality(v_parts)], 1)) || '.';
end;
$$;

-- Date d'une activité (§7.3, « Hors ligne ») : celle du client si elle a moins
-- de 72 h et n'est pas dans le futur (5 min de tolérance d'horloge, ramenées à
-- maintenant) ; sinon celle du serveur.
create or replace function app_private.karatou_activity_time(p_client timestamptz)
returns timestamptz
language sql
stable
set search_path = ''
as $$
  select case
    when p_client is null then now()
    when p_client > now() + interval '5 minutes' then now()
    when p_client < now() - interval '72 hours' then now()
    else least(p_client, now())
  end;
$$;

-- Lundi (UTC) de la semaine de ligue courante (§7.6).
create or replace function app_private.karatou_league_week(p_at timestamptz default now())
returns date
language sql
stable
set search_path = ''
as $$
  select date_trunc('week', p_at at time zone 'UTC')::date;
$$;

create or replace function app_private.karatou_quest_family(p_key text)
returns text
language sql
immutable
set search_path = ''
as $$
  select case
    when p_key in ('earn_xp_30', 'earn_xp_50') then 'xp'
    when p_key in ('complete_lessons_1', 'complete_lessons_2') then 'lessons'
    when p_key = 'correct_first_try_5' then 'first_try'
    when p_key = 'watch_video' then 'video'
    when p_key = 'review_session' then 'review'
    when p_key = 'daily_goal' then 'goal'
  end;
$$;

-- ---------------------------------------------------------------------------
-- Statistiques : création à la volée et date locale.
-- ---------------------------------------------------------------------------
create or replace function app_private.karatou_ensure_stats(p_user uuid)
returns void
language sql
security definer
set search_path = ''
as $$
  insert into public.karatou_learner_stats (user_id) values (p_user)
  on conflict (user_id) do nothing;
$$;

create or replace function app_private.karatou_local_date(p_user uuid, p_at timestamptz default now())
returns date
language sql
stable
security definer
set search_path = ''
as $$
  select (coalesce(p_at, now()) at time zone coalesce(
    (select s.timezone from public.karatou_learner_stats s where s.user_id = p_user),
    'Africa/Niamey'))::date;
$$;

-- ---------------------------------------------------------------------------
-- Quêtes du jour (§7.4) : 3 quêtes de familles différentes, tirées de façon
-- déterministe (hash utilisateur + date), créées à la première lecture ou au
-- premier gain de la journée.
-- ---------------------------------------------------------------------------
create or replace function app_private.karatou_ensure_daily_quests(p_user uuid, p_date date)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_goal integer;
begin
  if exists (
    select 1 from public.karatou_daily_quests q
    where q.user_id = p_user and q.quest_date = p_date
  ) then
    return;
  end if;

  select s.daily_goal_xp into v_goal from public.karatou_learner_stats s where s.user_id = p_user;
  v_goal := coalesce(v_goal, 30);

  insert into public.karatou_daily_quests (user_id, quest_date, quest_key, target)
  select p_user, p_date,
         f.keys[1 + get_byte(decode(f.h, 'hex'), 0) % cardinality(f.keys)],
         f.targets[1 + get_byte(decode(f.h, 'hex'), 0) % cardinality(f.keys)]
  from (
    select fam.keys, fam.targets,
           md5(p_user::text || ':' || p_date::text || ':' || fam.family) as h
    from (values
      ('xp',        array['earn_xp_30', 'earn_xp_50'],                 array[30, 50]),
      ('lessons',   array['complete_lessons_1', 'complete_lessons_2'], array[1, 2]),
      ('first_try', array['correct_first_try_5'],                      array[5]),
      ('video',     array['watch_video'],                              array[1]),
      ('review',    array['review_session'],                           array[1]),
      ('goal',      array['daily_goal'],                               array[v_goal])
    ) as fam(family, keys, targets)
    order by h
    limit 3
  ) as f
  on conflict do nothing;
end;
$$;

-- Fait avancer une famille de quêtes. p_set = true : la progression vaut p_value
-- (XP du jour) ; sinon elle augmente de p_value. Une quête atteinte rapporte
-- 10 XP, les trois quêtes du jour +20 XP.
create or replace function app_private.karatou_bump_quest(
  p_user uuid,
  p_family text,
  p_value integer,
  p_at timestamptz,
  p_set boolean default false
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_date date := app_private.karatou_local_date(p_user, p_at);
  v_done record;
begin
  if coalesce(p_value, 0) <= 0 then
    return;
  end if;
  perform app_private.karatou_ensure_daily_quests(p_user, v_date);

  for v_done in
    update public.karatou_daily_quests q
    set progress = least(q.target, case when p_set then p_value else q.progress + p_value end),
        completed_at = case
          when q.completed_at is null
               and (case when p_set then p_value else q.progress + p_value end) >= q.target
          then now() else q.completed_at end
    where q.user_id = p_user
      and q.quest_date = v_date
      and app_private.karatou_quest_family(q.quest_key) = p_family
      and q.completed_at is null
    returning q.quest_key, q.completed_at
  loop
    if v_done.completed_at is not null then
      perform app_private.karatou_apply_xp(p_user, 10, 'quest', v_date::text || ':' || v_done.quest_key, p_at);
    end if;
  end loop;

  if (select count(*) from public.karatou_daily_quests q
      where q.user_id = p_user and q.quest_date = v_date and q.completed_at is not null) >= 3 then
    perform app_private.karatou_apply_xp(p_user, 20, 'quest_all', v_date::text, p_at);
  end if;
end;
$$;

-- ---------------------------------------------------------------------------
-- Badges (§7.5). Chaque critère est recalculé depuis les données ; un badge
-- gagné l'est pour toujours.
-- ---------------------------------------------------------------------------
create or replace function app_private.karatou_award_badge(p_user uuid, p_key text)
returns void
language sql
security definer
set search_path = ''
as $$
  insert into public.karatou_user_badges (user_id, badge_key)
  select p_user, b.key from public.karatou_badges b where b.key = p_key
  on conflict do nothing;
$$;

create or replace function app_private.karatou_evaluate_badges(
  p_user uuid,
  p_reason text,
  p_at timestamptz
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_stats public.karatou_learner_stats;
  v_local timestamp;
  v_lessons integer;
  v_rubriques integer;
  v_rubriques_done integer;
begin
  select * into v_stats from public.karatou_learner_stats s where s.user_id = p_user;
  v_local := coalesce(p_at, now()) at time zone coalesce(v_stats.timezone, 'Africa/Niamey');

  select count(*) into v_lessons from public.karatou_learner_progress lp where lp.user_id = p_user;
  if v_lessons >= 1 then perform app_private.karatou_award_badge(p_user, 'first_lesson'); end if;
  if v_lessons >= 10 then perform app_private.karatou_award_badge(p_user, 'lessons_10'); end if;
  if v_lessons >= 50 then perform app_private.karatou_award_badge(p_user, 'lessons_50'); end if;

  if v_stats.current_streak >= 3 then perform app_private.karatou_award_badge(p_user, 'streak_3'); end if;
  if v_stats.current_streak >= 7 then perform app_private.karatou_award_badge(p_user, 'streak_7'); end if;
  if v_stats.current_streak >= 30 then perform app_private.karatou_award_badge(p_user, 'streak_30'); end if;
  if v_stats.current_streak >= 100 then perform app_private.karatou_award_badge(p_user, 'streak_100'); end if;

  if p_reason in ('lesson_completed', 'lesson_bonus', 'lesson_replay') then
    if extract(hour from v_local) < 7 then
      perform app_private.karatou_award_badge(p_user, 'early_bird');
    elsif extract(hour from v_local) >= 22 then
      perform app_private.karatou_award_badge(p_user, 'night_owl');
    end if;
  end if;

  if (select count(*) from public.karatou_xp_events e
      where e.user_id = p_user and e.reason = 'lesson_completed'
        and e.local_date = v_local::date) >= 5 then
    perform app_private.karatou_award_badge(p_user, 'marathon');
  end if;

  if (select count(distinct (a.module_slug, a.course_id)) from public.karatou_lesson_attempts a
      where a.user_id = p_user and a.outcome in ('completed', 'replayed')
        and a.graded_steps > 0 and a.correct_first_try = a.graded_steps) >= 5 then
    perform app_private.karatou_award_badge(p_user, 'flawless');
  end if;

  if (select count(distinct a.language) from public.karatou_lesson_attempts a
      where a.user_id = p_user and a.outcome in ('completed', 'replayed')) >= 2 then
    perform app_private.karatou_award_badge(p_user, 'polyglot');
  end if;

  -- Module bouclé : toutes les leçons publiées d'un module publié.
  if exists (
    select 1
    from public.karatou_modules m
    where m.status = 'published'
      and exists (select 1 from public.karatou_courses c where c.module_id = m.id and c.status = 'published')
      and not exists (
        select 1 from public.karatou_courses c
        where c.module_id = m.id and c.status = 'published'
          and not exists (
            select 1 from public.karatou_learner_progress lp
            where lp.user_id = p_user and lp.module_slug = m.slug and lp.course_id = c.id
          )
      )
  ) then
    perform app_private.karatou_award_badge(p_user, 'module_complete');
  end if;

  if exists (select 1 from public.karatou_certificates c where c.user_id = p_user and c.status = 'active') then
    perform app_private.karatou_award_badge(p_user, 'certified');
  end if;

  -- Explorateur·rice : une leçon terminée dans chaque rubrique publiée qui a
  -- au moins une leçon publiée.
  with rubriques as (
    select distinct r.id
    from public.karatou_rubriques r
    join public.karatou_modules m on m.rubrique_id = r.id and m.status = 'published'
    join public.karatou_courses c on c.module_id = m.id and c.status = 'published'
    where r.status = 'published'
  )
  select count(*),
         count(*) filter (where exists (
           select 1
           from public.karatou_modules m
           join public.karatou_learner_progress lp on lp.module_slug = m.slug and lp.user_id = p_user
           where m.rubrique_id = rubriques.id and m.status = 'published'
         ))
  into v_rubriques, v_rubriques_done
  from rubriques;
  if v_rubriques > 0 and v_rubriques_done = v_rubriques then
    perform app_private.karatou_award_badge(p_user, 'explorer');
  end if;
end;
$$;

-- ---------------------------------------------------------------------------
-- Ligues (§7.6). Groupes de 20 apprenants du même tier, formés à la 1re XP de
-- la semaine, après 3 leçons terminées. Faible population : un apprenant
-- sans groupe ouvert dans son tier rejoint un groupe d'un tier voisin qui a
-- moins de 5 membres, avant d'en créer un nouveau.
-- ---------------------------------------------------------------------------
create or replace function app_private.karatou_league_add_xp(p_user uuid, p_amount integer)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_week date := app_private.karatou_league_week(now());
  v_tier smallint;
  v_group bigint;
begin
  if coalesce(p_amount, 0) <= 0 then
    return;
  end if;

  if not exists (
    select 1 from public.karatou_league_members lm
    where lm.user_id = p_user and lm.week_start = v_week
  ) then
    if (select count(*) from public.karatou_learner_progress lp where lp.user_id = p_user) < 3 then
      return;
    end if;

    -- Une formation de groupe à la fois par semaine : pas de groupe de 21.
    perform pg_advisory_xact_lock(hashtextextended('karatou_league:' || v_week::text, 0));

    if not exists (
      select 1 from public.karatou_league_members lm
      where lm.user_id = p_user and lm.week_start = v_week
    ) then
      select s.league_tier into v_tier from public.karatou_learner_stats s where s.user_id = p_user;
      v_tier := coalesce(v_tier, 1);

      select g.id into v_group
      from public.karatou_league_groups g
      where g.week_start = v_week and g.tier = v_tier and g.closed_at is null
        and (select count(*) from public.karatou_league_members lm where lm.group_id = g.id) < 20
      order by g.id
      limit 1;

      if v_group is null then
        select g.id into v_group
        from public.karatou_league_groups g
        where g.week_start = v_week and abs(g.tier - v_tier) = 1 and g.closed_at is null
          and (select count(*) from public.karatou_league_members lm where lm.group_id = g.id) < 5
        order by g.id
        limit 1;
      end if;

      if v_group is null then
        insert into public.karatou_league_groups (week_start, tier)
        values (v_week, v_tier)
        returning id into v_group;
      end if;

      insert into public.karatou_league_members (group_id, user_id, week_start, tier)
      values (v_group, p_user, v_week, v_tier)
      on conflict (user_id, week_start) do nothing;
    end if;
  end if;

  update public.karatou_league_members lm
  set weekly_xp = lm.weekly_xp + p_amount
  where lm.user_id = p_user and lm.week_start = v_week;
end;
$$;

-- ---------------------------------------------------------------------------
-- Point d'entrée unique.
-- Renvoie l'XP réellement crédité (0 si l'événement existait déjà).
-- ---------------------------------------------------------------------------
create or replace function app_private.karatou_apply_xp(
  p_user uuid,
  p_amount integer,
  p_reason text,
  p_ref text,
  p_at timestamptz default now()
)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_at timestamptz := coalesce(p_at, now());
  v_stats public.karatou_learner_stats;
  v_local date;
  v_prev_local date;
  v_event bigint;
  v_gap integer;
  v_streak integer;
  v_freezes integer;
  v_last date;
  v_total integer;
  v_day_xp integer;
  v_activity boolean := p_reason in ('lesson_completed', 'lesson_bonus', 'lesson_replay', 'review_session');
begin
  if p_user is null or p_reason is null or p_ref is null then
    raise exception 'karatou_apply_xp: user, reason and ref are required' using errcode = '22004';
  end if;
  if p_amount is null or p_amount < 0 or p_amount > 1000 then
    raise exception 'karatou_apply_xp: invalid amount %', p_amount using errcode = '22023';
  end if;

  perform app_private.karatou_ensure_stats(p_user);
  select * into v_stats from public.karatou_learner_stats s where s.user_id = p_user for update;
  v_local := (v_at at time zone v_stats.timezone)::date;

  insert into public.karatou_xp_events (user_id, amount, reason, ref, local_date, occurred_at)
  values (p_user, p_amount, p_reason, p_ref, v_local, v_at)
  on conflict (user_id, reason, ref) do nothing
  returning id into v_event;

  if v_event is null then
    return 0;  -- déjà crédité : idempotence
  end if;

  -- Série (§7.3), calcul paresseux : on compare au dernier jour actif.
  v_streak := v_stats.current_streak;
  v_freezes := v_stats.streak_freezes;
  v_last := v_stats.last_active_date;

  if v_activity then
    if v_last is null then
      v_streak := 1;
      v_last := v_local;
    elsif v_local > v_last then
      v_gap := v_local - v_last - 1;  -- jours manqués

      -- Changement de fuseau récent : on prend l'écart le plus favorable des
      -- deux fuseaux, pour qu'un voyage vers l'est ne fasse pas « sauter » un
      -- jour (et qu'un voyage vers l'ouest ne compte pas deux fois le même jour :
      -- une date locale antérieure ou égale ne change rien).
      if v_gap > 0
         and v_stats.previous_timezone is not null
         and v_stats.timezone_changed_at > v_at - interval '48 hours' then
        v_prev_local := (v_at at time zone v_stats.previous_timezone)::date;
        v_gap := greatest(0, least(v_gap, v_prev_local - v_last - 1));
      end if;

      if v_gap = 0 then
        v_streak := v_streak + 1;
      elsif v_gap <= v_freezes and v_streak > 0 then
        -- Gel consommé automatiquement pour chaque jour manqué (trace à 0 XP
        -- pour le calendrier).
        insert into public.karatou_xp_events (user_id, amount, reason, ref, local_date, occurred_at)
        select p_user, 0, 'streak_freeze', 'freeze:' || d::date::text, d::date, v_at
        from generate_series(v_last + 1, v_local - 1, interval '1 day') as d
        on conflict (user_id, reason, ref) do nothing;
        v_freezes := v_freezes - v_gap;
        v_streak := v_streak + 1;
      else
        v_streak := 1;
      end if;

      -- 1 gel gagné tous les 7 jours de série, 2 en stock au maximum.
      if v_streak > v_stats.current_streak and v_streak % 7 = 0 then
        v_freezes := least(2, v_freezes + 1);
      end if;
      v_last := v_local;
    end if;
    -- v_local <= v_last : même jour, ou activité hors ligne antérieure : la
    -- série ne bouge pas.
  end if;

  v_total := v_stats.total_xp + p_amount;

  update public.karatou_learner_stats s
  set total_xp = v_total,
      level = app_private.karatou_level_for_xp(v_total),
      current_streak = v_streak,
      longest_streak = greatest(s.longest_streak, v_streak),
      streak_freezes = v_freezes,
      last_active_date = v_last,
      updated_at = now()
  where s.user_id = p_user;

  -- Ligue de la semaine.
  perform app_private.karatou_league_add_xp(p_user, p_amount);

  -- Quêtes fondées sur l'XP du jour (hors XP des quêtes elles-mêmes).
  if p_reason not in ('quest', 'quest_all') and p_amount > 0 then
    select coalesce(sum(e.amount), 0) into v_day_xp
    from public.karatou_xp_events e
    where e.user_id = p_user and e.local_date = v_local
      and e.reason not in ('quest', 'quest_all');
    perform app_private.karatou_bump_quest(p_user, 'xp', v_day_xp, v_at, true);
    perform app_private.karatou_bump_quest(p_user, 'goal', v_day_xp, v_at, true);
  end if;

  if p_reason in ('lesson_completed', 'lesson_bonus', 'lesson_replay', 'review_session', 'certificate_earned') then
    perform app_private.karatou_evaluate_badges(p_user, p_reason, v_at);
  end if;

  return p_amount;
end;
$$;

-- ---------------------------------------------------------------------------
-- Triggers : le web gagne de l'XP sans modification.
-- ---------------------------------------------------------------------------
create or replace function app_private.karatou_on_lesson_completed()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_at timestamptz := app_private.karatou_activity_time(new.completed_at);
begin
  begin
    if app_private.karatou_apply_xp(
         new.user_id, 20, 'lesson_completed', new.module_slug || '/' || new.course_id, v_at) > 0 then
      perform app_private.karatou_bump_quest(new.user_id, 'lessons', 1, v_at);
    end if;
  exception when others then
    raise warning 'karatou gamification (lesson %/% for %): % %',
      new.module_slug, new.course_id, new.user_id, sqlstate, sqlerrm;
  end;
  return null;
end;
$$;

drop trigger if exists karatou_learner_progress_award_xp on public.karatou_learner_progress;
create trigger karatou_learner_progress_award_xp
  after insert on public.karatou_learner_progress
  for each row execute function app_private.karatou_on_lesson_completed();

create or replace function app_private.karatou_on_certificate_issued()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  begin
    -- ref = module : un certificat ré-émis après expiration ne rapporte rien de plus.
    perform app_private.karatou_apply_xp(new.user_id, 100, 'certificate_earned', new.module_slug, now());
    perform app_private.karatou_award_badge(new.user_id, 'certified');
  exception when others then
    raise warning 'karatou gamification (certificate % for %): % %',
      new.uid, new.user_id, sqlstate, sqlerrm;
  end;
  return null;
end;
$$;

drop trigger if exists karatou_certificates_award_xp on public.karatou_certificates;
create trigger karatou_certificates_award_xp
  after insert on public.karatou_certificates
  for each row
  when (new.status = 'active')
  execute function app_private.karatou_on_certificate_issued();

-- ---------------------------------------------------------------------------
-- Aucun client n'exécute ces fonctions (PUBLIC a EXECUTE par défaut).
-- ---------------------------------------------------------------------------
revoke all on function app_private.karatou_level_for_xp(integer) from public, anon, authenticated;
revoke all on function app_private.karatou_xp_for_level(integer) from public, anon, authenticated;
revoke all on function app_private.karatou_public_display_name(text) from public, anon, authenticated;
revoke all on function app_private.karatou_activity_time(timestamptz) from public, anon, authenticated;
revoke all on function app_private.karatou_league_week(timestamptz) from public, anon, authenticated;
revoke all on function app_private.karatou_quest_family(text) from public, anon, authenticated;
revoke all on function app_private.karatou_ensure_stats(uuid) from public, anon, authenticated;
revoke all on function app_private.karatou_local_date(uuid, timestamptz) from public, anon, authenticated;
revoke all on function app_private.karatou_ensure_daily_quests(uuid, date) from public, anon, authenticated;
revoke all on function app_private.karatou_bump_quest(uuid, text, integer, timestamptz, boolean) from public, anon, authenticated;
revoke all on function app_private.karatou_award_badge(uuid, text) from public, anon, authenticated;
revoke all on function app_private.karatou_evaluate_badges(uuid, text, timestamptz) from public, anon, authenticated;
revoke all on function app_private.karatou_league_add_xp(uuid, integer) from public, anon, authenticated;
revoke all on function app_private.karatou_apply_xp(uuid, integer, text, text, timestamptz) from public, anon, authenticated;
revoke all on function app_private.karatou_on_lesson_completed() from public, anon, authenticated;
revoke all on function app_private.karatou_on_certificate_issued() from public, anon, authenticated;
