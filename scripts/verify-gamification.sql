-- Vérifie la gamification (B2) et les correctifs de certificats (B3, B4) sur
-- une vraie base Postgres/Supabase où les migrations sont appliquées.
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f scripts/verify-gamification.sql
--
-- À lancer en propriétaire de la base (postgres) : le script bascule lui-même
-- sur les rôles `authenticated` / `anon`, ce qui fait jouer la RLS.
--
-- Tout se déroule dans UNE transaction annulée à la fin (ROLLBACK) : aucune
-- ligne ne reste, même en cas d'échec (une erreur interrompt psql, la
-- transaction est alors abandonnée). Le script crée néanmoins des comptes
-- auth.users éphémères : le lancer en local ou en staging, pas en production.
--
-- Couvre :
--   1. idempotence : 3 envois de la même tentative = un seul XP ;
--   2. correction serveur du quiz (échec, quiz manquant, version périmée) ;
--   3. plafonds anti-triche (compteurs, rejeu 1×/jour, date hors ligne 72 h) ;
--   4. niveaux ;
--   5. série : jours consécutifs, trou, gel gagné et consommé ;
--   6. série sur changement de fuseau (est et ouest) ;
--   7. quêtes du jour déterministes, badges, accueil ;
--   8. certificat : +100 XP, badge, brouillon ignoré (B3), vérification
--      publique sans user_id (B4) ;
--   9. classements : ligue (pas d'user_id, profil masqué), organisation
--      (réservée à ses membres) ;
--  10. révision Leitner idempotente ;
--  11. clôture de semaine de ligue (promotions, relégations, badges) ;
--  12. isolation RLS et privilèges (anon, autre apprenant, écritures directes) ;
--  13. suppression d'un compte (B5) : cascade sur toutes les tables.

begin;

-- ---------------------------------------------------------------- outils ----
create function pg_temp.act_as(p_user uuid) returns void language plpgsql as $$
begin
  perform set_config('role', session_user, true);
  if p_user is null then
    perform set_config('request.jwt.claims', '{"role":"anon"}', true);
    perform set_config('role', 'anon', true);
  else
    perform set_config('request.jwt.claims',
      json_build_object('sub', p_user, 'role', 'authenticated', 'email', p_user || '@gami.probe',
                        'app_metadata', json_build_object())::text, true);
    perform set_config('role', 'authenticated', true);
  end if;
end $$;

create function pg_temp.as_owner() returns void language plpgsql as $$
begin
  perform set_config('role', session_user, true);
  perform set_config('request.jwt.claims', '', true);
end $$;

create function pg_temp.ok(p_cond boolean, p_message text) returns void language plpgsql as $$
begin
  if p_cond is not true then
    raise exception 'ÉCHEC : %', p_message;
  end if;
end $$;

create function pg_temp.attempt(p_id text, p_course text, p_extra jsonb default '{}'::jsonb)
returns jsonb language sql as $$
  select public.karatou_record_lesson_attempt(
    jsonb_build_object(
      'attempt_id', p_id, 'module_slug', 'gami-probe-mod', 'course_id', p_course,
      'language', 'fr', 'platform', 'android',
      'graded_steps', 4, 'correct_first_try', 3, 'correct_after_retry', 1,
      'video_watched', true, 'quiz_answers', jsonb_build_array('A', 'B')
    ) || p_extra);
$$;

grant execute on all functions in schema pg_temp to anon, authenticated;

-- ------------------------------------------------------------- données ----
-- A, B : apprenants ; C : membre de l'organisation sonde ; D : série (appels
-- directs au moteur) ; E : fuseaux.
insert into auth.users (id, email, raw_user_meta_data) values
  ('00000000-0000-4000-9000-00000000000a', 'a@gami.probe', '{"full_name":"Aïcha Moussa Diallo"}'),
  ('00000000-0000-4000-9000-00000000000b', 'b@gami.probe', '{"full_name":"Bello Issa"}'),
  ('00000000-0000-4000-9000-00000000000c', 'c@gami.probe', '{"full_name":"Chaibou Garba"}'),
  ('00000000-0000-4000-9000-00000000000d', 'd@gami.probe', '{}'),
  ('00000000-0000-4000-9000-00000000000e', 'e@gami.probe', '{}');
insert into public.profiles (id, full_name)
select u.id, u.raw_user_meta_data ->> 'full_name' from auth.users u where u.email like '%@gami.probe'
on conflict (id) do nothing;

insert into public.karatou_rubriques (id, slug, name, status) values ('gami-probe-rub', 'gami-probe-rub', 'Sonde', 'published');
insert into public.karatou_modules (id, slug, title, status, rubrique_id)
values ('gami-probe-mod', 'gami-probe-mod', 'Module sonde', 'published', 'gami-probe-rub');
insert into public.karatou_courses (id, module_id, title, status, display_order) values
  ('gp1', 'gami-probe-mod', 'Leçon 1', 'published', 1),
  ('gp2', 'gami-probe-mod', 'Leçon 2', 'published', 2),
  ('gp3', 'gami-probe-mod', 'Leçon 3', 'published', 3),
  ('gp4', 'gami-probe-mod', 'Leçon brouillon', 'draft', 4);
insert into app_private.karatou_quiz_keys (module_slug, course_id, source, lang, answers)
select 'gami-probe-mod', c, 'bundle', '*', '{A,B}' from unnest(array['gp1', 'gp2', 'gp3', 'gp4']) c;

insert into public.karatou_organizations (id, slug, name, industry, country, seats_total)
values ('gami-probe-org', 'gami-probe-org', 'Sonde', 'Test', 'NE', 5);
insert into public.karatou_org_memberships (organization_id, user_id, email, role, status) values
  ('gami-probe-org', '00000000-0000-4000-9000-00000000000a', 'a@gami.probe', 'learner', 'active'),
  ('gami-probe-org', '00000000-0000-4000-9000-00000000000c', 'c@gami.probe', 'learner', 'active');

do $test$
declare
  a constant uuid := '00000000-0000-4000-9000-00000000000a';
  b constant uuid := '00000000-0000-4000-9000-00000000000b';
  c constant uuid := '00000000-0000-4000-9000-00000000000c';
  d constant uuid := '00000000-0000-4000-9000-00000000000d';
  e constant uuid := '00000000-0000-4000-9000-00000000000e';
  r jsonb;
  r2 jsonb;
  r3 jsonb;
  v_xp integer;
  v_int integer;
  v_base date;
  v_at timestamptz;
  v_uid text;
  v_week date;
  v_group bigint;
  v_stats public.karatou_learner_stats;
  v_text text;
begin
  -- ===================================================== 1. idempotence ====
  perform pg_temp.act_as(a);
  r := pg_temp.attempt('11111111-1111-4111-8111-000000000001', 'gp1');
  perform pg_temp.ok(r ->> 'lesson_status' = 'completed', '1re complétion attendue, obtenu ' || r::text);
  perform pg_temp.ok((r -> 'xp_breakdown') @> '[{"reason":"lesson_completed","amount":20}]', '+20 XP de complétion absents');
  -- bonus = 2×3 + 1 + vidéo 5 = 12 (pas parfait : 3/4 du premier coup)
  perform pg_temp.ok((r -> 'xp_breakdown') @> '[{"reason":"lesson_bonus","amount":12}]', 'bonus attendu 12 : ' || (r -> 'xp_breakdown')::text);
  perform pg_temp.ok((r -> 'new_badges') @> '[{"key":"first_lesson"}]', 'badge Premier pas attendu');
  perform pg_temp.ok((r ->> 'streak_extended')::boolean and (r -> 'streak' ->> 'current')::int = 1, 'série 1 attendue');
  v_xp := (r ->> 'total_xp')::int;

  r2 := pg_temp.attempt('11111111-1111-4111-8111-000000000001', 'gp1');
  r3 := pg_temp.attempt('11111111-1111-4111-8111-000000000001', 'gp1');
  perform pg_temp.ok((r2 ->> 'replayed_request')::boolean and (r3 ->> 'replayed_request')::boolean, 'renvoi non reconnu');
  perform pg_temp.ok((r3 ->> 'total_xp')::int = v_xp and (r3 ->> 'xp_gained')::int = 0, 'un renvoi a crédité de l''XP');
  perform pg_temp.ok((select count(*) from public.karatou_xp_events
                      where user_id = a and reason = 'lesson_completed') = 1, 'XP de complétion crédités plusieurs fois');
  perform pg_temp.ok((select count(*) from public.karatou_lesson_attempts where user_id = a) = 1, 'tentative dupliquée');

  -- Un autre apprenant ne peut pas réutiliser l'identifiant de tentative.
  perform pg_temp.act_as(b);
  begin
    r := pg_temp.attempt('11111111-1111-4111-8111-000000000001', 'gp1');
    raise exception 'ÉCHEC : identifiant de tentative d''autrui accepté';
  exception when unique_violation then null;
  end;

  -- =========================================== 2. correction du quiz ====
  r := pg_temp.attempt('22222222-2222-4222-8222-000000000001', 'gp1', '{"quiz_answers":["C","C"]}');
  perform pg_temp.ok(r ->> 'lesson_status' = 'failed' and (r ->> 'xp_gained')::int = 0, 'quiz raté crédité : ' || r::text);
  r := pg_temp.attempt('22222222-2222-4222-8222-000000000002', 'gp1', '{"quiz_answers":["A"]}');
  perform pg_temp.ok(r ->> 'lesson_status' = 'mismatch' and not (r ->> 'recorded')::boolean, 'quiz périmé non détecté');
  r := public.karatou_record_lesson_attempt(jsonb_build_object(
    'attempt_id', '22222222-2222-4222-8222-000000000003', 'module_slug', 'gami-probe-mod',
    'course_id', 'gp1', 'language', 'fr', 'platform', 'ios'));
  perform pg_temp.ok(r ->> 'lesson_status' = 'quiz_required', '1re complétion sans quiz acceptée');
  perform pg_temp.ok(not exists (select 1 from public.karatou_learner_progress where user_id = b), 'progression écrite sans quiz réussi');
  begin
    r := pg_temp.attempt('22222222-2222-4222-8222-000000000004', 'gp4');
    raise exception 'ÉCHEC : leçon brouillon acceptée';
  exception when no_data_found then null;
  end;

  -- ============================================== 3. plafonds anti-triche ====
  perform pg_temp.act_as(a);
  r := pg_temp.attempt('33333333-3333-4333-8333-000000000001', 'gp2',
    jsonb_build_object('graded_steps', 999, 'correct_first_try', 999, 'correct_after_retry', 50,
                       'finished_at', now() - interval '10 days', 'duration_seconds', -5));
  -- 30 étapes max, tout juste du premier coup : 2×30 + parfait 10 + vidéo 5 = 75
  perform pg_temp.ok((r -> 'xp_breakdown') @> '[{"reason":"lesson_bonus","amount":75}]', 'plafond du bonus : ' || (r -> 'xp_breakdown')::text);
  perform pg_temp.ok(exists (select 1 from public.karatou_lesson_attempts
                             where id = '33333333-3333-4333-8333-000000000001'
                               and graded_steps = 30 and correct_first_try = 30 and correct_after_retry = 0
                               and duration_seconds = 0 and finished_at = now()),
                     'compteurs ou date hors ligne non plafonnés');

  -- Rejeu : 25 % du bonus (round(12 × 0,25) = 3), une seule fois par jour.
  r := pg_temp.attempt('33333333-3333-4333-8333-000000000002', 'gp1');
  perform pg_temp.ok(r ->> 'lesson_status' = 'replayed', 'rejeu attendu');
  perform pg_temp.ok((r -> 'xp_breakdown') @> '[{"reason":"lesson_replay","amount":3}]'
                     and not ((r -> 'xp_breakdown') @> '[{"reason":"lesson_completed"}]'), 'rejeu mal crédité : ' || r::text);
  r := pg_temp.attempt('33333333-3333-4333-8333-000000000003', 'gp1');
  perform pg_temp.ok(not ((r -> 'xp_breakdown') @> '[{"reason":"lesson_replay"}]'), '2e rejeu du jour crédité');

  -- ============================================================ 4. niveaux ====
  perform pg_temp.as_owner();
  perform pg_temp.ok(app_private.karatou_level_for_xp(0) = 1 and app_private.karatou_level_for_xp(49) = 1
    and app_private.karatou_level_for_xp(50) = 2 and app_private.karatou_level_for_xp(149) = 2
    and app_private.karatou_level_for_xp(150) = 3 and app_private.karatou_level_for_xp(500) = 5
    and app_private.karatou_level_for_xp(2249) = 9 and app_private.karatou_level_for_xp(2250) = 10,
    'courbe de niveaux 25 × n × (n − 1)');
  select * into v_stats from public.karatou_learner_stats where user_id = a;
  perform pg_temp.ok(v_stats.level = app_private.karatou_level_for_xp(v_stats.total_xp)
                     and v_stats.total_xp = (select sum(amount) from public.karatou_xp_events where user_id = a),
                     'total ou niveau incohérent');

  -- ============================================================ 5. série ====
  -- Appels directs au moteur avec des dates simulées (fuseau Africa/Niamey).
  v_base := (now() at time zone 'Africa/Niamey')::date - 30;
  for v_int in 0..6 loop  -- 7 jours consécutifs
    perform app_private.karatou_apply_xp(d, 10, 'review_session', 'streak-' || v_int,
      ((v_base + v_int)::timestamp + time '10:00') at time zone 'Africa/Niamey');
  end loop;
  select * into v_stats from public.karatou_learner_stats where user_id = d;
  perform pg_temp.ok(v_stats.current_streak = 7 and v_stats.streak_freezes = 1, format('7 jours → série 7 et 1 gel, obtenu %s / %s', v_stats.current_streak, v_stats.streak_freezes));
  -- Deux activités le même jour : pas de double compte.
  perform app_private.karatou_apply_xp(d, 10, 'review_session', 'streak-6b',
    ((v_base + 6)::timestamp + time '18:00') at time zone 'Africa/Niamey');
  perform pg_temp.ok((select current_streak from public.karatou_learner_stats where user_id = d) = 7, 'même jour compté deux fois');
  -- Un jour manqué (J+7), activité J+8 : le gel couvre, la série continue.
  perform app_private.karatou_apply_xp(d, 10, 'review_session', 'streak-8',
    ((v_base + 8)::timestamp + time '10:00') at time zone 'Africa/Niamey');
  select * into v_stats from public.karatou_learner_stats where user_id = d;
  perform pg_temp.ok(v_stats.current_streak = 8 and v_stats.streak_freezes = 0, format('gel non consommé : %s / %s', v_stats.current_streak, v_stats.streak_freezes));
  perform pg_temp.ok(exists (select 1 from public.karatou_xp_events where user_id = d and reason = 'streak_freeze'
                             and local_date = v_base + 7), 'jour gelé absent du calendrier');
  -- Deux jours manqués sans gel : la série repart à 1.
  perform app_private.karatou_apply_xp(d, 10, 'review_session', 'streak-11',
    ((v_base + 11)::timestamp + time '10:00') at time zone 'Africa/Niamey');
  select * into v_stats from public.karatou_learner_stats where user_id = d;
  perform pg_temp.ok(v_stats.current_streak = 1 and v_stats.longest_streak = 8, 'série non remise à 1 après un trou');
  -- Une activité hors ligne antérieure ne change rien.
  perform app_private.karatou_apply_xp(d, 10, 'review_session', 'streak-10',
    ((v_base + 10)::timestamp + time '10:00') at time zone 'Africa/Niamey');
  perform pg_temp.ok((select current_streak from public.karatou_learner_stats where user_id = d) = 1, 'activité antérieure a modifié la série');
  -- Les quêtes et l'XP sans activité (quête) ne font pas un jour actif.
  perform app_private.karatou_apply_xp(d, 10, 'quest', 'not-activity',
    ((v_base + 12)::timestamp + time '10:00') at time zone 'Africa/Niamey');
  perform pg_temp.ok((select last_active_date from public.karatou_learner_stats where user_id = d) = v_base + 11, 'une quête a compté comme jour actif');

  -- ============================================ 6. changement de fuseau ====
  -- E est actif le jour J à 23:00 à Niamey (UTC+1)…
  v_base := (now() at time zone 'Africa/Niamey')::date - 5;
  v_at := (v_base::timestamp + time '23:00') at time zone 'Africa/Niamey';
  perform app_private.karatou_apply_xp(e, 10, 'review_session', 'tz-1', v_at);
  -- …puis passe à Kiritimati (UTC+14) par la RPC de préférences.
  perform pg_temp.act_as(e);
  r := public.karatou_update_learning_prefs('{"timezone":"Pacific/Kiritimati"}');
  perform pg_temp.ok(r ->> 'timezone' = 'Pacific/Kiritimati', 'fuseau non enregistré');
  perform pg_temp.as_owner();
  update public.karatou_learner_stats set timezone_changed_at = v_at + interval '1 hour' where user_id = e;
  -- 13 h plus tard : J+2 à Kiritimati, mais J+1 à Niamey → la série continue.
  perform app_private.karatou_apply_xp(e, 10, 'review_session', 'tz-2', v_at + interval '13 hours');
  select * into v_stats from public.karatou_learner_stats where user_id = e;
  perform pg_temp.ok(v_stats.current_streak = 2, format('voyage vers l''est : série cassée (%s)', v_stats.current_streak));
  -- Vers l'ouest (Pago Pago, UTC−11) : la date locale recule, pas de double compte.
  update public.karatou_learner_stats
  set previous_timezone = timezone, timezone = 'Pacific/Pago_Pago', timezone_changed_at = v_at + interval '14 hours'
  where user_id = e;
  perform app_private.karatou_apply_xp(e, 10, 'review_session', 'tz-3', v_at + interval '15 hours');
  select * into v_stats from public.karatou_learner_stats where user_id = e;
  perform pg_temp.ok(v_stats.current_streak = 2, format('voyage vers l''ouest : série modifiée (%s)', v_stats.current_streak));
  -- Fuseau inconnu et clé inconnue refusés.
  perform pg_temp.act_as(e);
  begin
    r := public.karatou_update_learning_prefs('{"timezone":"Mars/Olympus"}');
    raise exception 'ÉCHEC : fuseau inconnu accepté';
  exception when invalid_parameter_value then null;
  end;
  begin
    r := public.karatou_update_learning_prefs('{"total_xp":99999}');
    raise exception 'ÉCHEC : préférence inconnue acceptée';
  exception when invalid_parameter_value then null;
  end;
  begin
    r := public.karatou_update_learning_prefs('{"daily_goal_xp":45}');
    raise exception 'ÉCHEC : objectif quotidien hors liste accepté';
  exception when invalid_parameter_value then null;
  end;

  -- ======================================= 7. accueil, quêtes, badges ====
  perform pg_temp.act_as(a);
  r := public.karatou_get_learner_home();
  r2 := public.karatou_get_learner_home();
  perform pg_temp.ok(jsonb_array_length(r -> 'quests') = 3, '3 quêtes attendues');
  perform pg_temp.ok((select count(distinct regexp_replace(q ->> 'key', '_[0-9]+$', ''))
                      from jsonb_array_elements(r -> 'quests') q) = 3, '3 familles de quêtes différentes attendues');
  perform pg_temp.ok((r -> 'quests') = (r2 -> 'quests'), 'quêtes non déterministes');
  perform pg_temp.ok((r -> 'stats' ->> 'total_xp')::int > 0 and r -> 'streak' ->> 'status' = 'active', 'accueil incohérent : ' || r::text);
  perform pg_temp.ok((r -> 'badges' ->> 'total')::int = 17, '17 badges attendus au catalogue');

  -- ================================== 8. certificat, B3 et B4 ====
  r := pg_temp.attempt('44444444-4444-4444-8444-000000000001', 'gp3');
  perform pg_temp.ok((r ->> 'module_completed')::boolean, 'module terminé non signalé (la leçon brouillon ne compte pas)');
  perform pg_temp.ok((r -> 'new_badges') @> '[{"key":"module_complete"}]', 'badge Module bouclé attendu');
  v_xp := (r ->> 'total_xp')::int;
  -- B3 : la leçon brouillon gp4 n'empêche pas la certification.
  select uid into v_uid from public.karatou_issue_certificate('gami-probe-mod');
  perform pg_temp.ok(v_uid is not null, 'certificat non émis');
  perform pg_temp.ok((select total_xp from public.karatou_learner_stats where user_id = a) >= v_xp + 100, '+100 XP du certificat absents');
  perform pg_temp.ok(exists (select 1 from public.karatou_user_badges where user_id = a and badge_key = 'certified'), 'badge Certifié·e absent');
  -- B4 : la vérification publique ne renvoie pas d'user_id.
  perform pg_temp.act_as(null);
  select to_jsonb(v) into r from public.karatou_verify_certificate(v_uid) v;
  perform pg_temp.ok(r ->> 'uid' = v_uid and not (r ? 'user_id'), 'B4 : user_id exposé aux anonymes : ' || coalesce(r::text, 'null'));

  -- ==================================================== 9. classements ====
  -- A a terminé 3 leçons : la ligue est déverrouillée et il a rejoint un groupe.
  perform pg_temp.act_as(a);
  r := public.karatou_get_league();
  perform pg_temp.ok((r ->> 'joined')::boolean, 'ligue non rejointe après 3 leçons : ' || r::text);
  perform pg_temp.ok(not exists (select 1 from jsonb_array_elements(r -> 'members') m where m ? 'user_id'), 'user_id exposé dans la ligue');
  perform pg_temp.ok(exists (select 1 from jsonb_array_elements(r -> 'members') m
                             where (m ->> 'is_me')::boolean and m ->> 'display_name' = 'Aïcha D.'), 'nom abrégé « Prénom N. » attendu');
  -- Masquer son profil : les autres ne voient plus nom, avatar ni pays.
  r := public.karatou_update_learning_prefs('{"show_in_leaderboards":false}');
  perform pg_temp.act_as(c);
  r := public.karatou_get_org_leaderboard('gami-probe-org');
  perform pg_temp.ok(jsonb_array_length(r -> 'members') = 2, 'classement d''organisation : 2 membres attendus');
  perform pg_temp.ok(exists (select 1 from jsonb_array_elements(r -> 'members') m
                             where (m ->> 'hidden')::boolean and m ->> 'display_name' is null and m ->> 'country' is null
                               and (m ->> 'weekly_xp')::int > 0), 'profil masqué encore visible');
  perform pg_temp.ok(not exists (select 1 from jsonb_array_elements(r -> 'members') m where m ? 'user_id'), 'user_id exposé (organisation)');
  perform pg_temp.act_as(b);
  begin
    r := public.karatou_get_org_leaderboard('gami-probe-org');
    raise exception 'ÉCHEC : un non-membre lit le classement de l''organisation';
  exception when insufficient_privilege then null;
  end;

  -- ===================================================== 10. révision ====
  perform pg_temp.act_as(a);
  r := public.karatou_record_review(jsonb_build_object(
    'session_id', '55555555-5555-4555-8555-000000000001',
    'items', jsonb_build_array(
      jsonb_build_object('item_key', 'gloss:gp1:IA', 'module_slug', 'gami-probe-mod', 'course_id', 'gp1', 'kind', 'glossary', 'correct', true),
      jsonb_build_object('item_key', 'q:gp1:1', 'module_slug', 'gami-probe-mod', 'course_id', 'gp1', 'kind', 'quiz', 'correct', false))));
  perform pg_temp.ok((r ->> 'xp_gained')::int >= 10, 'XP de révision absents : ' || r::text);
  v_xp := (r ->> 'total_xp')::int;
  r := public.karatou_record_review(jsonb_build_object(
    'session_id', '55555555-5555-4555-8555-000000000001',
    'items', jsonb_build_array(
      jsonb_build_object('item_key', 'gloss:gp1:IA', 'module_slug', 'gami-probe-mod', 'course_id', 'gp1', 'kind', 'glossary', 'correct', true))));
  perform pg_temp.ok((r ->> 'replayed_request')::boolean and (r ->> 'total_xp')::int = v_xp, 'session de révision rejouée');
  perform pg_temp.ok((select box from public.karatou_review_items where user_id = a and item_key = 'gloss:gp1:IA') = 2
                     and (select box from public.karatou_review_items where user_id = a and item_key = 'q:gp1:1') = 1,
                     'boîtes Leitner incorrectes');

  -- ===================================== 11. clôture de semaine de ligue ====
  perform pg_temp.as_owner();
  v_week := app_private.karatou_league_week(now()) - 7;
  insert into auth.users (id, email)
  select ('00000000-0000-4000-9000-0000000001' || lpad(i::text, 2, '0'))::uuid, 'league' || i || '@gami.probe'
  from generate_series(1, 12) i;
  insert into public.karatou_learner_stats (user_id, league_tier)
  select ('00000000-0000-4000-9000-0000000001' || lpad(i::text, 2, '0'))::uuid, 2 from generate_series(1, 12) i;
  insert into public.karatou_league_groups (week_start, tier) values (v_week, 2) returning id into v_group;
  insert into public.karatou_league_members (group_id, user_id, week_start, tier, weekly_xp)
  select v_group, ('00000000-0000-4000-9000-0000000001' || lpad(i::text, 2, '0'))::uuid, v_week, 2, 200 - i * 10
  from generate_series(1, 12) i;

  perform app_private.karatou_close_league_week(v_week);
  perform pg_temp.ok((select count(*) from public.karatou_league_members where group_id = v_group and outcome = 'promoted') = 5
                     and (select count(*) from public.karatou_league_members where group_id = v_group and outcome = 'demoted') = 3,
                     'promotions / relégations incorrectes');
  perform pg_temp.ok((select league_tier from public.karatou_learner_stats where user_id = '00000000-0000-4000-9000-000000000101') = 3
                     and (select league_tier from public.karatou_learner_stats where user_id = '00000000-0000-4000-9000-000000000112') = 1,
                     'tiers non mis à jour');
  perform pg_temp.ok((select count(*) from public.karatou_user_badges ub
                      join public.karatou_league_members lm on lm.user_id = ub.user_id and lm.group_id = v_group
                      where ub.badge_key = 'podium') = 3, 'badges Podium incorrects');
  perform app_private.karatou_close_league_week(v_week);  -- idempotente
  perform pg_temp.ok((select league_tier from public.karatou_learner_stats where user_id = '00000000-0000-4000-9000-000000000101') = 3,
                     'clôture appliquée deux fois');
  begin
    perform app_private.karatou_close_league_week(app_private.karatou_league_week(now()));
    raise exception 'ÉCHEC : semaine en cours clôturée';
  exception when invalid_parameter_value then null;
  end;

  -- ============================================ 12. RLS et privilèges ====
  perform pg_temp.act_as(b);
  perform pg_temp.ok(not exists (select 1 from public.karatou_learner_stats where user_id <> b), 'B lit les stats d''autrui');
  perform pg_temp.ok(not exists (select 1 from public.karatou_xp_events where user_id <> b), 'B lit l''XP d''autrui');
  perform pg_temp.ok(not exists (select 1 from public.karatou_lesson_attempts where user_id <> b), 'B lit les tentatives d''autrui');
  perform pg_temp.ok(not exists (select 1 from public.karatou_daily_quests where user_id <> b), 'B lit les quêtes d''autrui');
  perform pg_temp.ok(not exists (select 1 from public.karatou_user_badges where user_id <> b), 'B lit les badges d''autrui');
  perform pg_temp.ok(not exists (select 1 from public.karatou_review_items where user_id <> b), 'B lit les révisions d''autrui');
  perform pg_temp.ok((select count(*) from public.karatou_get_streak_calendar(current_date)) = 0, 'B voit des jours actifs qui ne sont pas les siens');

  begin
    insert into public.karatou_xp_events (user_id, amount, reason, ref, local_date, occurred_at)
    values (b, 1000, 'quest', 'cheat', current_date, now());
    raise exception 'ÉCHEC : écriture directe dans karatou_xp_events';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.karatou_learner_stats set total_xp = 99999 where user_id = b;
    raise exception 'ÉCHEC : écriture directe dans karatou_learner_stats';
  exception when insufficient_privilege then null;
  end;
  begin
    insert into public.karatou_user_badges (user_id, badge_key) values (b, 'streak_100');
    raise exception 'ÉCHEC : badge auto-attribué';
  exception when insufficient_privilege then null;
  end;
  begin
    perform 1 from public.karatou_league_members limit 1;
    raise exception 'ÉCHEC : lecture directe des membres de ligue';
  exception when insufficient_privilege then null;
  end;
  begin
    perform app_private.karatou_apply_xp(b, 1000, 'quest', 'cheat', now());
    raise exception 'ÉCHEC : authenticated exécute karatou_apply_xp';
  exception when insufficient_privilege then null;
  end;
  begin
    perform app_private.karatou_close_league_week(null);
    raise exception 'ÉCHEC : authenticated exécute karatou_close_league_week';
  exception when insufficient_privilege then null;
  end;
  begin
    update public.karatou_courses set interactive_steps = '{}' where id = 'gp1';
    get diagnostics v_int = row_count;
    perform pg_temp.ok(v_int = 0, 'un apprenant modifie interactive_steps');
  end;

  perform pg_temp.act_as(null);
  perform pg_temp.ok((select count(*) from public.karatou_badges) >= 17, 'catalogue de badges illisible pour anon');
  begin
    perform 1 from public.karatou_learner_stats limit 1;
    raise exception 'ÉCHEC : anon lit karatou_learner_stats';
  exception when insufficient_privilege then null;
  end;
  begin
    perform 1 from public.karatou_xp_events limit 1;
    raise exception 'ÉCHEC : anon lit karatou_xp_events';
  exception when insufficient_privilege then null;
  end;
  begin
    r := public.karatou_get_learner_home();
    raise exception 'ÉCHEC : anon exécute karatou_get_learner_home';
  exception when insufficient_privilege then null;
  end;
  begin
    r := pg_temp.attempt('66666666-6666-4666-8666-000000000001', 'gp1');
    raise exception 'ÉCHEC : anon exécute karatou_record_lesson_attempt';
  exception when insufficient_privilege then null;
  end;

  -- Taille de interactive_steps plafonnée à 400 ko.
  perform pg_temp.as_owner();
  begin
    update public.karatou_courses set interactive_steps = jsonb_build_object('fr', repeat('x', 400001)) where id = 'gp1';
    raise exception 'ÉCHEC : interactive_steps > 400 ko accepté';
  exception when check_violation then null;
  end;

  -- ================= 13. suppression de compte (B5) : tout part en cascade ====
  perform pg_temp.as_owner();
  delete from auth.users where id = a;
  perform pg_temp.ok(not exists (select 1 from public.karatou_learner_stats where user_id = a)
    and not exists (select 1 from public.karatou_xp_events where user_id = a)
    and not exists (select 1 from public.karatou_lesson_attempts where user_id = a)
    and not exists (select 1 from public.karatou_daily_quests where user_id = a)
    and not exists (select 1 from public.karatou_user_badges where user_id = a)
    and not exists (select 1 from public.karatou_league_members where user_id = a)
    and not exists (select 1 from public.karatou_review_items where user_id = a)
    and not exists (select 1 from public.karatou_certificates where user_id = a),
    'données de gamification restantes après suppression du compte');

  perform pg_temp.as_owner();
  raise notice 'gamification B2/B3/B4 : PASS';
end
$test$;

rollback;
