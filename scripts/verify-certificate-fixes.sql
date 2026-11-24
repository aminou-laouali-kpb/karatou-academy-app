-- Non-régression des correctifs de certificats demandés par la fiche app
-- mobile (§8.5) :
--   B3 — karatou_issue_certificate ne compte que les leçons publiées d'un
--        module publié (corrigé par 20261124134222_server_quiz_grading.sql) ;
--   B4 — karatou_verify_certificate ne renvoie plus user_id aux anonymes
--        (corrigé par 20261122170000_b2b_member_stats_and_scholarship_hardening.sql).
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f scripts/verify-certificate-fixes.sql
--
-- Transaction annulée à la fin : rien ne reste. Crée un compte auth.users
-- éphémère : à lancer en local ou en staging.

begin;

insert into auth.users (id, email) values ('00000000-0000-4000-9000-0000000000f1', 'cert@b3.probe');
insert into public.profiles (id, full_name) values ('00000000-0000-4000-9000-0000000000f1', 'Fatima Sani')
on conflict (id) do nothing;
insert into public.karatou_modules (id, slug, title, status) values
  ('b3-probe-mod', 'b3-probe-mod', 'Module B3', 'published'),
  ('b3-probe-draft', 'b3-probe-draft', 'Module brouillon', 'draft');
insert into public.karatou_courses (id, module_id, title, status) values
  ('b3p1', 'b3-probe-mod', 'Publiée 1', 'published'),
  ('b3p2', 'b3-probe-mod', 'Publiée 2', 'published'),
  ('b3d1', 'b3-probe-mod', 'Brouillon', 'draft'),
  ('b3x1', 'b3-probe-draft', 'Dans un module brouillon', 'published');
insert into public.karatou_learner_progress (user_id, module_slug, course_id) values
  ('00000000-0000-4000-9000-0000000000f1', 'b3-probe-mod', 'b3p1'),
  ('00000000-0000-4000-9000-0000000000f1', 'b3-probe-mod', 'b3p2'),
  ('00000000-0000-4000-9000-0000000000f1', 'b3-probe-draft', 'b3x1');

do $test$
declare
  v_uid text;
  v_row jsonb;
begin
  perform set_config('request.jwt.claims',
    '{"sub":"00000000-0000-4000-9000-0000000000f1","role":"authenticated","app_metadata":{}}', true);
  perform set_config('role', 'authenticated', true);

  -- B3 : la leçon brouillon b3d1 n'est pas exigée.
  select c.uid into v_uid from public.karatou_issue_certificate('b3-probe-mod') c;
  if v_uid is null then
    raise exception 'ÉCHEC B3 : certificat refusé alors que toutes les leçons publiées sont terminées';
  end if;

  -- B3 : un module brouillon ne délivre rien.
  begin
    perform public.karatou_issue_certificate('b3-probe-draft');
    raise exception 'ÉCHEC B3 : certificat émis pour un module brouillon';
  exception when no_data_found then null;
  end;

  -- B4 : vérification publique sans user_id.
  perform set_config('role', session_user, true);
  perform set_config('request.jwt.claims', '{"role":"anon"}', true);
  perform set_config('role', 'anon', true);
  select to_jsonb(v) into v_row from public.karatou_verify_certificate(v_uid) v;
  if v_row is null or v_row ->> 'uid' <> v_uid or v_row ->> 'user_name' is null then
    raise exception 'ÉCHEC B4 : vérification publique inopérante : %', v_row;
  end if;
  if v_row ? 'user_id' then
    raise exception 'ÉCHEC B4 : user_id renvoyé aux anonymes';
  end if;

  perform set_config('role', session_user, true);
  raise notice 'certificats B3/B4 : PASS';
end
$test$;

rollback;
