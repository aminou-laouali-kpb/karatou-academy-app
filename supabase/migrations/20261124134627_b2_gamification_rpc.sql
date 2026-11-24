-- B2 (fiche app mobile §8.4) : RPC de la gamification appelées par le mobile
-- (et par le web pour karatou_get_learner_home, cf. B7).
--
-- Toutes : SECURITY DEFINER, search_path vide, auth.uid() obligatoire,
-- EXECUTE retiré à PUBLIC et anon, accordé à authenticated seulement.
-- Aucune ne renvoie d'user_id d'un autre apprenant.

-- ---------------------------------------------------------------------------
-- Morceaux de réponse partagés (app_private, non exposés).
-- ---------------------------------------------------------------------------

-- XP du jour local, hors XP des quêtes (mêmes règles que la quête « objectif »).
create or replace function app_private.karatou_day_xp(p_user uuid, p_date date)
returns integer
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(sum(e.amount), 0)::integer
  from public.karatou_xp_events e
  where e.user_id = p_user and e.local_date = p_date
    and e.reason not in ('quest', 'quest_all');
$$;

create or replace function app_private.karatou_stats_json(p_user uuid)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select jsonb_build_object(
    'total_xp', s.total_xp,
    'level', s.level,
    'level_floor_xp', app_private.karatou_xp_for_level(s.level),
    'next_level_xp', app_private.karatou_xp_for_level(s.level + 1),
    'daily_goal_xp', s.daily_goal_xp,
    'timezone', s.timezone,
    'show_in_leaderboards', s.show_in_leaderboards,
    'league_tier', s.league_tier,
    'onboarding', s.onboarding
  )
  from public.karatou_learner_stats s
  where s.user_id = p_user;
$$;

-- État de la série, calculé paresseusement (§7.3) :
--   active  : jour actif aujourd'hui ;
--   at_risk : rien aujourd'hui, mais la série tient encore (hier actif, ou les
--             jours manqués seront couverts par les gels) ;
--   broken  : la série est perdue (current affiché à 0) ;
--   none    : aucune activité enregistrée.
create or replace function app_private.karatou_streak_json(p_user uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  v_stats public.karatou_learner_stats;
  v_today date;
  v_status text;
  v_missed integer;
begin
  select * into v_stats from public.karatou_learner_stats s where s.user_id = p_user;
  v_today := (now() at time zone coalesce(v_stats.timezone, 'Africa/Niamey'))::date;

  if v_stats.last_active_date is null then
    v_status := 'none';
  elsif v_stats.last_active_date >= v_today then
    v_status := 'active';
  else
    v_missed := v_today - v_stats.last_active_date - 1;  -- jours déjà manqués avant aujourd'hui
    v_status := case when v_missed <= v_stats.streak_freezes then 'at_risk' else 'broken' end;
  end if;

  return jsonb_build_object(
    'status', v_status,
    'current', case when v_status in ('broken', 'none') then 0 else coalesce(v_stats.current_streak, 0) end,
    'longest', coalesce(v_stats.longest_streak, 0),
    'freezes', coalesce(v_stats.streak_freezes, 0),
    'last_active_date', v_stats.last_active_date,
    'today', v_today
  );
end;
$$;

create or replace function app_private.karatou_quests_json(p_user uuid, p_date date)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform app_private.karatou_ensure_daily_quests(p_user, p_date);
  return coalesce((
    select jsonb_agg(jsonb_build_object(
             'key', q.quest_key,
             'target', q.target,
             'progress', q.progress,
             'completed', q.completed_at is not null
           ) order by q.quest_key)
    from public.karatou_daily_quests q
    where q.user_id = p_user and q.quest_date = p_date
  ), '[]'::jsonb);
end;
$$;

create or replace function app_private.karatou_daily_goal_json(p_user uuid, p_date date)
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select jsonb_build_object(
    'date', p_date,
    'target', s.daily_goal_xp,
    'earned', app_private.karatou_day_xp(p_user, p_date),
    'reached', app_private.karatou_day_xp(p_user, p_date) >= s.daily_goal_xp
  )
  from public.karatou_learner_stats s
  where s.user_id = p_user;
$$;

-- Toutes les leçons publiées du module sont terminées.
create or replace function app_private.karatou_module_completed(p_user uuid, p_module_slug text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.karatou_modules m
    where m.slug = p_module_slug and m.status = 'published'
      and exists (select 1 from public.karatou_courses c where c.module_id = m.id and c.status = 'published')
      and not exists (
        select 1 from public.karatou_courses c
        where c.module_id = m.id and c.status = 'published'
          and not exists (
            select 1 from public.karatou_learner_progress lp
            where lp.user_id = p_user and lp.module_slug = m.slug and lp.course_id = c.id
          )
      )
  );
$$;

create or replace function app_private.karatou_badges_json(p_user uuid, p_keys text[])
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
           'key', b.key, 'name', b.name, 'description', b.description,
           'icon', b.icon, 'category', b.category
         ) order by b.display_order), '[]'::jsonb)
  from public.karatou_badges b
  where b.key = any(coalesce(p_keys, '{}'::text[]));
$$;

revoke all on function app_private.karatou_day_xp(uuid, date) from public, anon, authenticated;
revoke all on function app_private.karatou_stats_json(uuid) from public, anon, authenticated;
revoke all on function app_private.karatou_streak_json(uuid) from public, anon, authenticated;
revoke all on function app_private.karatou_quests_json(uuid, date) from public, anon, authenticated;
revoke all on function app_private.karatou_daily_goal_json(uuid, date) from public, anon, authenticated;
revoke all on function app_private.karatou_module_completed(uuid, text) from public, anon, authenticated;
revoke all on function app_private.karatou_badges_json(uuid, text[]) from public, anon, authenticated;

-- ---------------------------------------------------------------------------
-- karatou_record_lesson_attempt(payload) — fin de leçon envoyée par le mobile.
--
-- payload = {
--   "attempt_id": uuid (clé d'idempotence, générée par le client),
--   "module_slug": text, "course_id": text,
--   "language": "fr"|"en"|"ha", "platform": "ios"|"android"|"web",
--   "started_at": timestamptz?, "finished_at": timestamptz?,
--   "graded_steps": int, "correct_first_try": int, "correct_after_retry": int,
--   "video_watched": bool, "duration_seconds": int?, "step_results": [...]?,
--   "quiz_answers": ["B","A",...]?  -- réponse finale à chaque question du quiz,
--                                   -- dans l'ordre de lesson_content.quiz
-- }
--
-- La 1re complétion passe par la correction serveur du quiz
-- (public.karatou_submit_quiz, migration 20261124134222) : c'est elle qui
-- écrit karatou_learner_progress, ce qui déclenche les +20 XP. Une leçon déjà
-- terminée (web ou mobile) est un « rejeu ».
--
-- Statuts (lesson_status) :
--   completed      1re complétion : progression écrite, bonus crédités ;
--   replayed       leçon déjà terminée : 25 % du bonus, une fois par jour ;
--   failed         quiz < 70 % : tentative enregistrée, aucun XP ;
--   quiz_required  1re complétion sans quiz_answers : rien n'est enregistré ;
--   mismatch       le quiz envoyé ne correspond pas au corrigé (contenu
--                  périmé côté client) : rien n'est enregistré ;
--   rate_limited   trop d'envois : rien n'est enregistré, réessayer plus tard
--                  avec le même attempt_id.
-- Un renvoi d'une tentative enregistrée renvoie son résultat (replayed_request
-- = true) sans rien créditer de plus.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_record_lesson_attempt(payload jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_id uuid;
  v_slug text;
  v_course text;
  v_lang text;
  v_platform text;
  v_started timestamptz;
  v_finished timestamptz;
  v_at timestamptz;
  v_graded integer;
  v_first integer;
  v_after integer;
  v_video boolean;
  v_duration integer;
  v_steps jsonb;
  v_answers text[];
  v_existing public.karatou_lesson_attempts;
  v_before public.karatou_learner_stats;
  v_after_stats public.karatou_learner_stats;
  v_badges_before text[];
  v_new_badges text[];
  v_last_event bigint;
  v_outcome text;
  v_quiz record;
  v_quiz_json jsonb := null;
  v_bonus integer;
  v_granted integer := 0;
  v_breakdown jsonb;
  v_today date;
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;
  if payload is null or jsonb_typeof(payload) <> 'object' then
    raise exception 'payload must be a JSON object' using errcode = '22023';
  end if;
  if octet_length(payload::text) > 30000 then
    raise exception 'payload too large' using errcode = '22023';
  end if;

  begin
    v_id := (payload ->> 'attempt_id')::uuid;
    v_started := (payload ->> 'started_at')::timestamptz;
    v_finished := (payload ->> 'finished_at')::timestamptz;
    v_graded := coalesce((payload ->> 'graded_steps')::integer, 0);
    v_first := coalesce((payload ->> 'correct_first_try')::integer, 0);
    v_after := coalesce((payload ->> 'correct_after_retry')::integer, 0);
    v_video := coalesce((payload ->> 'video_watched')::boolean, false);
    v_duration := (payload ->> 'duration_seconds')::integer;
  exception when invalid_text_representation or datetime_field_overflow
                 or invalid_datetime_format or numeric_value_out_of_range then
    raise exception 'invalid payload field: %', sqlerrm using errcode = '22023';
  end;

  v_slug := payload ->> 'module_slug';
  v_course := payload ->> 'course_id';
  v_lang := coalesce(payload ->> 'language', 'fr');
  v_platform := payload ->> 'platform';
  v_steps := coalesce(payload -> 'step_results', '[]'::jsonb);

  if v_id is null or v_slug is null or v_course is null then
    raise exception 'attempt_id, module_slug and course_id are required' using errcode = '22023';
  end if;
  if v_lang not in ('fr', 'en', 'ha') then
    raise exception 'invalid language' using errcode = '22023';
  end if;
  if v_platform is null or v_platform not in ('ios', 'android', 'web') then
    raise exception 'invalid platform' using errcode = '22023';
  end if;
  if jsonb_typeof(v_steps) not in ('array', 'object') or octet_length(v_steps::text) > 20000 then
    raise exception 'invalid step_results' using errcode = '22023';
  end if;
  if payload ? 'quiz_answers' then
    if jsonb_typeof(payload -> 'quiz_answers') <> 'array' or jsonb_array_length(payload -> 'quiz_answers') > 50 then
      raise exception 'invalid quiz_answers' using errcode = '22023';
    end if;
    v_answers := array(select jsonb_array_elements_text(payload -> 'quiz_answers'));
  end if;

  -- Une même tentative envoyée deux fois en parallèle n'est traitée qu'une fois.
  perform pg_advisory_xact_lock(hashtextextended('karatou_attempt:' || v_id::text, 0));

  select * into v_existing from public.karatou_lesson_attempts a where a.id = v_id;
  if found then
    if v_existing.user_id <> v_user then
      raise exception 'attempt_id already used' using errcode = '23505';
    end if;
    v_today := app_private.karatou_local_date(v_user, now());
    return jsonb_build_object(
      'attempt_id', v_id,
      'lesson_status', v_existing.outcome,
      'recorded', true,
      'replayed_request', true,
      'xp_breakdown', v_existing.xp_breakdown,
      'xp_gained', 0,
      'total_xp', (select s.total_xp from public.karatou_learner_stats s where s.user_id = v_user),
      'level', (select s.level from public.karatou_learner_stats s where s.user_id = v_user),
      'level_up', false,
      'streak', app_private.karatou_streak_json(v_user),
      'streak_extended', false,
      'daily_goal', app_private.karatou_daily_goal_json(v_user, v_today),
      'quests', app_private.karatou_quests_json(v_user, v_today),
      'new_badges', '[]'::jsonb,
      'module_completed', app_private.karatou_module_completed(v_user, v_existing.module_slug)
    );
  end if;

  -- Leçon visible par l'apprenant : publiée, dans un module publié (un admin
  -- plateforme peut aussi jouer un brouillon, comme karatou_submit_quiz).
  if not exists (
    select 1
    from public.karatou_courses c
    join public.karatou_modules m on m.id = c.module_id
    where c.id = v_course and m.slug = v_slug
      and ((c.status = 'published' and m.status = 'published')
           or (select app_private.karatou_is_platform_admin()))
  ) then
    raise exception 'lesson not found' using errcode = 'P0002';
  end if;

  -- Anti-triche (§7.7) : bonnes réponses ≤ étapes notées ≤ 30.
  v_graded := least(30, greatest(0, v_graded));
  v_first := least(v_graded, greatest(0, v_first));
  v_after := least(v_graded - v_first, greatest(0, v_after));
  v_duration := case when v_duration is null then null else least(86400, greatest(0, v_duration)) end;
  v_at := app_private.karatou_activity_time(v_finished);

  -- 60 tentatives par heure suffisent largement à un humain.
  if (select count(*) from public.karatou_lesson_attempts a
      where a.user_id = v_user and a.created_at > now() - interval '1 hour') >= 60 then
    return jsonb_build_object('attempt_id', v_id, 'lesson_status', 'rate_limited', 'recorded', false);
  end if;

  perform app_private.karatou_ensure_stats(v_user);
  select * into v_before from public.karatou_learner_stats s where s.user_id = v_user;
  select coalesce(max(e.id), 0) into v_last_event from public.karatou_xp_events e where e.user_id = v_user;
  select coalesce(array_agg(ub.badge_key), '{}'::text[]) into v_badges_before
  from public.karatou_user_badges ub where ub.user_id = v_user;

  if exists (
    select 1 from public.karatou_learner_progress lp
    where lp.user_id = v_user and lp.module_slug = v_slug and lp.course_id = v_course
  ) then
    v_outcome := 'replayed';
  elsif v_answers is not null then
    select * into v_quiz from public.karatou_submit_quiz(v_slug, v_course, v_lang, v_answers, v_at);
    v_quiz_json := jsonb_build_object('correct', v_quiz.correct, 'total', v_quiz.total);
    v_outcome := case v_quiz.status when 'passed' then 'completed' else v_quiz.status end;
  else
    v_outcome := 'quiz_required';
  end if;

  if v_outcome in ('quiz_required', 'mismatch', 'rate_limited') then
    return jsonb_build_object(
      'attempt_id', v_id, 'lesson_status', v_outcome, 'recorded', false, 'quiz', v_quiz_json
    );
  end if;

  insert into public.karatou_lesson_attempts (
    id, user_id, module_slug, course_id, language, platform, started_at, finished_at,
    graded_steps, correct_first_try, correct_after_retry, video_watched, duration_seconds,
    step_results, outcome
  ) values (
    v_id, v_user, v_slug, v_course, v_lang, v_platform, v_started, v_at,
    v_graded, v_first, v_after, v_video, v_duration, v_steps, v_outcome
  );

  -- Bonus (§7.1) : 2 XP par étape juste du premier coup, 1 XP après une
  -- seconde chance, +10 si tout est juste du premier coup, +5 pour la vidéo.
  v_bonus := 2 * v_first + v_after
           + case when v_graded > 0 and v_first = v_graded then 10 else 0 end
           + case when v_video then 5 else 0 end;

  if v_outcome = 'completed' then
    -- Une seule fois par leçon (ref = leçon). La quête « terminer des leçons »
    -- a déjà avancé par le trigger de karatou_learner_progress.
    perform app_private.karatou_apply_xp(
      v_user, v_bonus, 'lesson_bonus', v_slug || '/' || v_course, v_at);
    v_granted := 1;
  elsif v_outcome = 'replayed' then
    -- 25 % du bonus, pas les 20 XP, une seule fois par leçon et par jour local.
    perform app_private.karatou_apply_xp(
      v_user, round(v_bonus * 0.25)::integer, 'lesson_replay',
      v_slug || '/' || v_course || '@' || app_private.karatou_local_date(v_user, v_at)::text, v_at);
    -- Seul le premier rejeu du jour de cette leçon compte (l'événement, même
    -- à 0 XP, vient d'être créé par cet appel).
    v_granted := case when exists (
      select 1 from public.karatou_xp_events e
      where e.user_id = v_user and e.id > v_last_event and e.reason = 'lesson_replay'
    ) then 1 else 0 end;
    if v_granted > 0 then
      perform app_private.karatou_bump_quest(v_user, 'lessons', 1, v_at);
    end if;
  end if;

  if v_granted > 0 then
    perform app_private.karatou_bump_quest(v_user, 'first_try', v_first, v_at);
    if v_video then
      perform app_private.karatou_bump_quest(v_user, 'video', 1, v_at);
    end if;
  end if;

  select coalesce(jsonb_agg(jsonb_build_object('reason', e.reason, 'amount', e.amount) order by e.id), '[]'::jsonb)
  into v_breakdown
  from public.karatou_xp_events e
  where e.user_id = v_user and e.id > v_last_event and e.amount > 0;

  update public.karatou_lesson_attempts a set xp_breakdown = v_breakdown where a.id = v_id;

  select * into v_after_stats from public.karatou_learner_stats s where s.user_id = v_user;
  select coalesce(array_agg(ub.badge_key), '{}'::text[]) into v_new_badges
  from public.karatou_user_badges ub
  where ub.user_id = v_user and not (ub.badge_key = any(v_badges_before));

  v_today := app_private.karatou_local_date(v_user, now());

  return jsonb_build_object(
    'attempt_id', v_id,
    'lesson_status', v_outcome,
    'recorded', true,
    'replayed_request', false,
    'quiz', v_quiz_json,
    'xp_breakdown', v_breakdown,
    'xp_gained', v_after_stats.total_xp - v_before.total_xp,
    'total_xp', v_after_stats.total_xp,
    'level', v_after_stats.level,
    'level_up', v_after_stats.level > v_before.level,
    'streak', app_private.karatou_streak_json(v_user),
    'streak_extended', v_after_stats.last_active_date is distinct from v_before.last_active_date
                       and v_after_stats.current_streak > 0,
    'daily_goal', app_private.karatou_daily_goal_json(v_user, v_today),
    'quests', app_private.karatou_quests_json(v_user, v_today),
    'new_badges', app_private.karatou_badges_json(v_user, v_new_badges),
    'module_completed', app_private.karatou_module_completed(v_user, v_slug)
  );
end;
$$;
revoke all on function public.karatou_record_lesson_attempt(jsonb) from public, anon;
grant execute on function public.karatou_record_lesson_attempt(jsonb) to authenticated;

-- ---------------------------------------------------------------------------
-- karatou_get_learner_home() — écran d'accueil (mobile) et tableau de bord (web).
-- Crée les quêtes du jour à la volée : la fonction n'est donc pas STABLE.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_get_learner_home()
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_today date;
  v_week date := app_private.karatou_league_week(now());
  v_member public.karatou_league_members;
  v_rank integer;
  v_size integer;
  v_lessons integer;
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;

  perform app_private.karatou_ensure_stats(v_user);
  v_today := app_private.karatou_local_date(v_user, now());

  select count(*) into v_lessons from public.karatou_learner_progress lp where lp.user_id = v_user;
  select * into v_member from public.karatou_league_members lm
  where lm.user_id = v_user and lm.week_start = v_week;
  if found then
    select count(*) + 1 into v_rank
    from public.karatou_league_members lm
    where lm.group_id = v_member.group_id and lm.weekly_xp > v_member.weekly_xp;
    select count(*) into v_size from public.karatou_league_members lm where lm.group_id = v_member.group_id;
  end if;

  return jsonb_build_object(
    'stats', app_private.karatou_stats_json(v_user),
    'streak', app_private.karatou_streak_json(v_user),
    'daily_goal', app_private.karatou_daily_goal_json(v_user, v_today),
    'quests', app_private.karatou_quests_json(v_user, v_today),
    'lessons_completed', v_lessons,
    'league', jsonb_build_object(
      'unlocked', v_lessons >= 3,
      'joined', v_member.group_id is not null,
      'week_start', v_week,
      'tier', coalesce(v_member.tier, (select s.league_tier from public.karatou_learner_stats s where s.user_id = v_user)),
      'rank', v_rank,
      'group_size', v_size,
      'weekly_xp', coalesce(v_member.weekly_xp, 0)
    ),
    'reviews_due', (select count(*) from public.karatou_review_items r
                    where r.user_id = v_user and r.due_date <= v_today),
    'badges', jsonb_build_object(
      'earned', (select count(*) from public.karatou_user_badges ub where ub.user_id = v_user),
      'total', (select count(*) from public.karatou_badges)
    )
  );
end;
$$;
revoke all on function public.karatou_get_learner_home() from public, anon;
grant execute on function public.karatou_get_learner_home() to authenticated;

-- ---------------------------------------------------------------------------
-- karatou_get_streak_calendar(month) — jours actifs et gelés d'un mois.
-- SECURITY INVOKER : la RLS de karatou_xp_events limite déjà à soi-même.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_get_streak_calendar(month date)
returns table (day date, active boolean, frozen boolean, xp integer)
language sql
stable
security invoker
set search_path = ''
as $$
  select e.local_date,
         bool_or(e.reason in ('lesson_completed', 'lesson_bonus', 'lesson_replay', 'review_session')),
         bool_or(e.reason = 'streak_freeze'),
         sum(e.amount)::integer
  from public.karatou_xp_events e
  where e.user_id = (select auth.uid())
    and e.local_date >= date_trunc('month', month)::date
    and e.local_date < (date_trunc('month', month) + interval '1 month')::date
  group by e.local_date
  order by e.local_date;
$$;
revoke all on function public.karatou_get_streak_calendar(date) from public, anon;
grant execute on function public.karatou_get_streak_calendar(date) to authenticated;

-- ---------------------------------------------------------------------------
-- karatou_get_league() — classement de mon groupe de la semaine.
-- Champs publics limités : « Prénom N. », avatar, pays ; rien pour un profil
-- masqué ; jamais d'user_id.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_get_league()
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_week date := app_private.karatou_league_week(now());
  v_member public.karatou_league_members;
  v_size integer;
  v_lessons integer;
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;

  select count(*) into v_lessons from public.karatou_learner_progress lp where lp.user_id = v_user;
  select * into v_member from public.karatou_league_members lm
  where lm.user_id = v_user and lm.week_start = v_week;

  if not found then
    return jsonb_build_object(
      'unlocked', v_lessons >= 3,
      'joined', false,
      'week_start', v_week,
      'ends_at', (v_week + 7)::timestamp at time zone 'UTC',
      'tier', coalesce((select s.league_tier from public.karatou_learner_stats s where s.user_id = v_user), 1),
      'members', '[]'::jsonb
    );
  end if;

  select count(*) into v_size from public.karatou_league_members lm where lm.group_id = v_member.group_id;

  return jsonb_build_object(
    'unlocked', true,
    'joined', true,
    'week_start', v_week,
    'ends_at', (v_week + 7)::timestamp at time zone 'UTC',
    'tier', (select g.tier from public.karatou_league_groups g where g.id = v_member.group_id),
    'group_size', v_size,
    -- Moins de 10 membres : simple classement de la semaine, sans zones.
    'zones_active', v_size >= 10,
    'members', (
      select coalesce(jsonb_agg(jsonb_build_object(
               'rank', r.rnk,
               'display_name', case when r.visible then app_private.karatou_public_display_name(r.full_name) end,
               'avatar_url', case when r.visible then r.avatar_url end,
               'country', case when r.visible then r.country end,
               'hidden', not r.visible,
               'weekly_xp', r.weekly_xp,
               'is_me', r.is_me,
               'zone', case
                 when v_size < 10 then 'stay'
                 when r.rnk <= 5 and r.tier < 5 then 'promotion'
                 when r.rnk > v_size - 3 and r.tier > 1 then 'demotion'
                 else 'stay' end
             ) order by r.rnk), '[]'::jsonb)
      from (
        select lm.weekly_xp, lm.tier,
               row_number() over (order by lm.weekly_xp desc, lm.joined_at, lm.user_id) as rnk,
               lm.user_id = v_user as is_me,
               (lm.user_id = v_user or coalesce(s.show_in_leaderboards, true)) as visible,
               p.full_name, p.avatar_url, p.country
        from public.karatou_league_members lm
        left join public.karatou_learner_stats s on s.user_id = lm.user_id
        left join public.profiles p on p.id = lm.user_id
        where lm.group_id = v_member.group_id
      ) r
    )
  );
end;
$$;
revoke all on function public.karatou_get_league() from public, anon;
grant execute on function public.karatou_get_league() to authenticated;

-- ---------------------------------------------------------------------------
-- karatou_get_org_leaderboard(org_id) — classement hebdomadaire des membres
-- actifs d'une organisation (karatou_org_memberships). Réservé aux membres
-- actifs de cette organisation, à ses admins et aux admins plateforme.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_get_org_leaderboard(org_id text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_week date := app_private.karatou_league_week(now());
  v_since timestamptz := v_week::timestamp at time zone 'UTC';
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;
  if not ((select app_private.karatou_is_org_member(org_id))
          or (select app_private.karatou_is_org_admin(org_id))) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  return jsonb_build_object(
    'organization_id', org_id,
    'week_start', v_week,
    'members', (
      select coalesce(jsonb_agg(jsonb_build_object(
               'rank', r.rnk,
               'display_name', case when r.visible then app_private.karatou_public_display_name(r.full_name) end,
               'avatar_url', case when r.visible then r.avatar_url end,
               'country', case when r.visible then r.country end,
               'hidden', not r.visible,
               'weekly_xp', r.weekly_xp,
               'is_me', r.is_me
             ) order by r.rnk), '[]'::jsonb)
      from (
        select x.weekly_xp,
               row_number() over (order by x.weekly_xp desc, x.user_id) as rnk,
               x.user_id = v_user as is_me,
               (x.user_id = v_user or coalesce(s.show_in_leaderboards, true)) as visible,
               p.full_name, p.avatar_url, p.country
        from (
          select om.user_id,
                 coalesce((select sum(e.amount) from public.karatou_xp_events e
                           where e.user_id = om.user_id and e.occurred_at >= v_since), 0)::integer as weekly_xp
          from (select distinct m.user_id
                from public.karatou_org_memberships m
                where m.organization_id = org_id and m.status = 'active' and m.user_id is not null) om
        ) x
        left join public.karatou_learner_stats s on s.user_id = x.user_id
        left join public.profiles p on p.id = x.user_id
        order by x.weekly_xp desc
        limit 200
      ) r
    )
  );
end;
$$;
revoke all on function public.karatou_get_org_leaderboard(text) from public, anon;
grant execute on function public.karatou_get_org_leaderboard(text) to authenticated;

-- ---------------------------------------------------------------------------
-- karatou_update_learning_prefs(prefs) — objectif, fuseau, visibilité,
-- réponses d'onboarding. Clés inconnues refusées.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_update_learning_prefs(prefs jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_key text;
  v_stats public.karatou_learner_stats;
  v_goal integer;
  v_tz text;
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;
  if prefs is null or jsonb_typeof(prefs) <> 'object' then
    raise exception 'prefs must be a JSON object' using errcode = '22023';
  end if;
  for v_key in select jsonb_object_keys(prefs) loop
    if v_key not in ('daily_goal_xp', 'timezone', 'show_in_leaderboards', 'onboarding') then
      raise exception 'unknown preference: %', v_key using errcode = '22023';
    end if;
  end loop;

  perform app_private.karatou_ensure_stats(v_user);
  select * into v_stats from public.karatou_learner_stats s where s.user_id = v_user for update;

  if prefs ? 'daily_goal_xp' then
    begin
      v_goal := (prefs ->> 'daily_goal_xp')::integer;
    exception when invalid_text_representation then
      v_goal := null;
    end;
    if v_goal is null or v_goal not in (30, 60, 100) then
      raise exception 'daily_goal_xp must be 30, 60 or 100' using errcode = '22023';
    end if;
    v_stats.daily_goal_xp := v_goal;
  end if;

  if prefs ? 'timezone' then
    v_tz := prefs ->> 'timezone';
    if v_tz is null or not exists (select 1 from pg_catalog.pg_timezone_names t where t.name = v_tz) then
      raise exception 'unknown timezone' using errcode = '22023';
    end if;
    if v_tz <> v_stats.timezone then
      v_stats.previous_timezone := v_stats.timezone;
      v_stats.timezone_changed_at := now();
      v_stats.timezone := v_tz;
    end if;
  end if;

  if prefs ? 'show_in_leaderboards' then
    if jsonb_typeof(prefs -> 'show_in_leaderboards') <> 'boolean' then
      raise exception 'show_in_leaderboards must be a boolean' using errcode = '22023';
    end if;
    v_stats.show_in_leaderboards := (prefs ->> 'show_in_leaderboards')::boolean;
  end if;

  if prefs ? 'onboarding' then
    if jsonb_typeof(prefs -> 'onboarding') <> 'object' or octet_length((prefs -> 'onboarding')::text) > 4000 then
      raise exception 'onboarding must be an object of at most 4 kB' using errcode = '22023';
    end if;
    v_stats.onboarding := prefs -> 'onboarding';
  end if;

  update public.karatou_learner_stats s
  set daily_goal_xp = v_stats.daily_goal_xp,
      timezone = v_stats.timezone,
      previous_timezone = v_stats.previous_timezone,
      timezone_changed_at = v_stats.timezone_changed_at,
      show_in_leaderboards = v_stats.show_in_leaderboards,
      onboarding = v_stats.onboarding,
      updated_at = now()
  where s.user_id = v_user;

  return app_private.karatou_stats_json(v_user);
end;
$$;
revoke all on function public.karatou_update_learning_prefs(jsonb) from public, anon;
grant execute on function public.karatou_update_learning_prefs(jsonb) to authenticated;

-- ---------------------------------------------------------------------------
-- karatou_record_review(results) — session de révision (Leitner).
--
-- results = {
--   "session_id": uuid (idempotence),
--   "finished_at": timestamptz?,
--   "items": [{"item_key","module_slug","course_id","kind","correct": bool|null}]  (1 à 50)
-- }
-- correct = null : la carte entre dans le paquet (boîte 1, à revoir demain).
-- Une carte juste monte d'une boîte, une carte fausse revient en boîte 1 ;
-- prochaine révision dans 1, 2, 4, 8 ou 16 jours selon la boîte.
-- 10 XP si la session couvre 10 cartes (ou toutes les cartes dues s'il y en
-- avait moins), au plus 3 sessions récompensées par jour.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_record_review(results jsonb)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_session uuid;
  v_finished timestamptz;
  v_at timestamptz;
  v_today date;
  v_item jsonb;
  v_correct boolean;
  v_graded integer := 0;
  v_due_before integer;
  v_rewarded_today integer;
  v_amount integer := 0;
  v_before integer;
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;
  if results is null or jsonb_typeof(results) <> 'object'
     or jsonb_typeof(results -> 'items') <> 'array'
     or jsonb_array_length(results -> 'items') not between 1 and 50 then
    raise exception 'results must be {session_id, items: [1..50]}' using errcode = '22023';
  end if;

  begin
    v_session := (results ->> 'session_id')::uuid;
    v_finished := (results ->> 'finished_at')::timestamptz;
  exception when invalid_text_representation or invalid_datetime_format or datetime_field_overflow then
    raise exception 'invalid payload field: %', sqlerrm using errcode = '22023';
  end;
  if v_session is null then
    raise exception 'session_id is required' using errcode = '22023';
  end if;

  perform pg_advisory_xact_lock(hashtextextended('karatou_review:' || v_session::text, 0));
  perform app_private.karatou_ensure_stats(v_user);
  select s.total_xp into v_before from public.karatou_learner_stats s where s.user_id = v_user;

  if exists (
    select 1 from public.karatou_xp_events e
    where e.user_id = v_user and e.reason = 'review_session' and e.ref = v_session::text
  ) then
    return jsonb_build_object(
      'session_id', v_session, 'recorded', true, 'replayed_request', true, 'xp_gained', 0,
      'total_xp', v_before,
      'reviews_due', (select count(*) from public.karatou_review_items r
                      where r.user_id = v_user and r.due_date <= app_private.karatou_local_date(v_user, now()))
    );
  end if;

  v_at := app_private.karatou_activity_time(v_finished);
  v_today := app_private.karatou_local_date(v_user, v_at);

  select count(*) into v_due_before
  from public.karatou_review_items r where r.user_id = v_user and r.due_date <= v_today;

  for v_item in select value from jsonb_array_elements(results -> 'items') loop
    if jsonb_typeof(v_item) <> 'object'
       or (v_item ? 'correct' and jsonb_typeof(v_item -> 'correct') not in ('boolean', 'null')) then
      raise exception 'invalid review item' using errcode = '22023';
    end if;
    if not exists (
      select 1 from public.karatou_courses c
      join public.karatou_modules m on m.id = c.module_id
      where c.id = v_item ->> 'course_id' and m.slug = v_item ->> 'module_slug'
        and c.status = 'published' and m.status = 'published'
    ) then
      raise exception 'lesson not found for review item %', v_item ->> 'item_key' using errcode = 'P0002';
    end if;

    v_correct := case when jsonb_typeof(v_item -> 'correct') = 'boolean'
                      then (v_item ->> 'correct')::boolean end;

    if v_correct is null then
      insert into public.karatou_review_items (user_id, item_key, module_slug, course_id, kind, box, due_date)
      values (v_user, v_item ->> 'item_key', v_item ->> 'module_slug', v_item ->> 'course_id',
              v_item ->> 'kind', 1, v_today + 1)
      on conflict (user_id, item_key) do nothing;
    else
      v_graded := v_graded + 1;
      insert into public.karatou_review_items as r
        (user_id, item_key, module_slug, course_id, kind, box, due_date, last_result, last_reviewed_at)
      values (v_user, v_item ->> 'item_key', v_item ->> 'module_slug', v_item ->> 'course_id',
              v_item ->> 'kind',
              case when v_correct then 2 else 1 end,
              v_today + case when v_correct then 2 else 1 end,
              case when v_correct then 'correct' else 'wrong' end, v_at)
      on conflict (user_id, item_key) do update set
        box = case when v_correct then least(5, r.box + 1) else 1 end,
        due_date = v_today + (power(2, (case when v_correct then least(5, r.box + 1) else 1 end) - 1))::integer,
        last_result = excluded.last_result,
        last_reviewed_at = excluded.last_reviewed_at;
    end if;
  end loop;

  if v_graded > 0 then
    select count(*) into v_rewarded_today
    from public.karatou_xp_events e
    where e.user_id = v_user and e.reason = 'review_session' and e.amount > 0 and e.local_date = v_today;

    if v_graded >= least(10, greatest(v_due_before, 1)) and v_rewarded_today < 3 then
      v_amount := 10;
    end if;
    -- L'événement (même à 0 XP) marque la session comme traitée et fait du
    -- jour un jour actif.
    perform app_private.karatou_apply_xp(v_user, v_amount, 'review_session', v_session::text, v_at);
    if v_amount > 0 then
      perform app_private.karatou_bump_quest(v_user, 'review', 1, v_at);
    end if;
  end if;

  return jsonb_build_object(
    'session_id', v_session,
    'recorded', v_graded > 0,
    'replayed_request', false,
    'reviewed', v_graded,
    'xp_gained', (select s.total_xp from public.karatou_learner_stats s where s.user_id = v_user) - v_before,
    'total_xp', (select s.total_xp from public.karatou_learner_stats s where s.user_id = v_user),
    'streak', app_private.karatou_streak_json(v_user),
    'reviews_due', (select count(*) from public.karatou_review_items r
                    where r.user_id = v_user and r.due_date <= app_private.karatou_local_date(v_user, now()))
  );
end;
$$;
revoke all on function public.karatou_record_review(jsonb) from public, anon;
grant execute on function public.karatou_record_review(jsonb) to authenticated;
