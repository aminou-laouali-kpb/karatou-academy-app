-- S1 étape 2 (audit du 22/11/2026) : notation des quiz par le serveur.
--
-- Jusqu'ici, la progression était écrite directement par le navigateur dans
-- karatou_learner_progress : un seul appel REST pouvait marquer toutes les
-- leçons d'un module comme terminées, puis obtenir un vrai certificat signé.
-- Désormais :
--   * une leçon n'est terminée que par karatou_submit_quiz, qui corrige les
--     réponses côté serveur (≥ 70 %) avec des corrigés hors de l'API ;
--   * le navigateur ne peut plus écrire dans karatou_learner_progress ;
--   * un certificat ne s'obtient que pour un module publié, sur ses leçons
--     publiées, et ne se ré-émet pas après une révocation ;
--   * un administrateur plateforme peut révoquer un certificat
--     (karatou_revoke_certificate), comme les CGU le prévoient.
--
-- ⚠️ À appliquer EN MÊME TEMPS que la republication du front correspondant :
-- l'ancien front écrit directement la progression et ne pourrait plus
-- enregistrer de leçon terminée.

-- ---------------------------------------------------------------------------
-- Corrigés et tentatives (schéma app_private : jamais exposé par l'API).
-- ---------------------------------------------------------------------------
create table if not exists app_private.karatou_quiz_keys (
  module_slug text not null,
  course_id text not null,
  -- 'bundle' : leçons livrées avec l'application (un corrigé pour les trois
  -- langues, cf. src/data/quizKeys.test.ts) ; 'cms' : leçon publiée depuis
  -- /admin/lecons, un corrigé par langue présente.
  source text not null check (source in ('bundle', 'cms')),
  lang text not null default '*' check (lang in ('*', 'fr', 'en', 'ha')),
  answers text[] not null check (cardinality(answers) <= 50),
  updated_at timestamptz not null default now(),
  primary key (module_slug, course_id, source, lang)
);
revoke all on app_private.karatou_quiz_keys from public, anon, authenticated;

create table if not exists app_private.karatou_quiz_attempts (
  user_id uuid not null,
  module_slug text not null,
  course_id text not null,
  correct integer not null,
  total integer not null,
  passed boolean not null,
  attempted_at timestamptz not null default now()
);
create index if not exists karatou_quiz_attempts_user_course_idx
  on app_private.karatou_quiz_attempts (user_id, module_slug, course_id, attempted_at desc);
revoke all on app_private.karatou_quiz_attempts from public, anon, authenticated;

-- Les leçons publiées depuis le CMS portent leur propre quiz : leurs corrigés
-- suivent chaque enregistrement de lesson_content.
create or replace function app_private.karatou_sync_cms_quiz_keys()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_slug text;
  v_lang text;
  v_quiz jsonb;
begin
  delete from app_private.karatou_quiz_keys k
  where k.course_id = new.id and k.source = 'cms';

  select m.slug into v_slug from public.karatou_modules m where m.id = new.module_id;
  if v_slug is null or new.lesson_content is null then
    return new;
  end if;

  foreach v_lang in array array['fr', 'en', 'ha'] loop
    if jsonb_typeof(new.lesson_content -> v_lang) = 'object' then
      v_quiz := new.lesson_content -> v_lang -> 'quiz';
      if jsonb_typeof(v_quiz) is distinct from 'array' then
        v_quiz := '[]'::jsonb;
      end if;
      insert into app_private.karatou_quiz_keys (module_slug, course_id, source, lang, answers)
      values (
        v_slug, new.id, 'cms', v_lang,
        coalesce(
          (select array_agg(upper(coalesce(q.value ->> 'answer', '')) order by q.ordinality)
           from jsonb_array_elements(v_quiz) with ordinality as q(value, ordinality)),
          '{}'::text[]
        )
      );
    end if;
  end loop;
  return new;
end;
$$;
revoke all on function app_private.karatou_sync_cms_quiz_keys() from public, anon, authenticated;

drop trigger if exists karatou_courses_sync_quiz_keys on public.karatou_courses;
create trigger karatou_courses_sync_quiz_keys
  after insert or update of lesson_content, module_id on public.karatou_courses
  for each row execute function app_private.karatou_sync_cms_quiz_keys();

-- Corrigés des leçons déjà publiées depuis le CMS.
update public.karatou_courses set lesson_content = lesson_content where lesson_content is not null;

-- ---------------------------------------------------------------------------
-- Correction d'un quiz. Seul chemin pour terminer une leçon.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_submit_quiz(
  input_module_slug text,
  input_course_id text,
  input_lang text,
  input_answers text[],
  input_completed_at timestamptz default null
)
returns table (status text, correct integer, total integer)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_answers text[] := coalesce(input_answers, '{}'::text[]);
  v_key text[];
  v_found boolean := false;
  v_candidate record;
  v_correct integer := 0;
  v_total integer;
  v_passed boolean;
  v_recent integer;
  v_completed_at timestamptz;
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;

  -- The lesson must be one the learner can see: published, in a published
  -- module (platform admins may also complete drafts while reviewing them).
  if not exists (
    select 1
    from public.karatou_courses c
    join public.karatou_modules m on m.id = c.module_id
    where c.id = input_course_id
      and m.slug = input_module_slug
      and ((c.status = 'published' and m.status = 'published')
           or (select app_private.karatou_is_platform_admin()))
  ) then
    raise exception 'lesson not found' using errcode = 'P0002';
  end if;

  if cardinality(v_answers) > 50 then
    raise exception 'too many answers' using errcode = '22023';
  end if;

  -- 30 attempts per lesson per hour: retrying is part of learning, brute force is not.
  select count(*) into v_recent
  from app_private.karatou_quiz_attempts a
  where a.user_id = v_user
    and a.module_slug = input_module_slug
    and a.course_id = input_course_id
    and a.attempted_at > now() - interval '1 hour';
  if v_recent >= 30 then
    return query select 'rate_limited'::text, 0, 0;
    return;
  end if;

  -- The key of the version the learner saw: the CMS lesson in their language,
  -- else the bundled lesson. A course with neither runs the app's generated
  -- two-question template (LessonPlayer buildLesson: B, A).
  for v_candidate in
    select k.answers
    from app_private.karatou_quiz_keys k
    where k.module_slug = input_module_slug
      and k.course_id = input_course_id
      and ((k.source = 'cms' and k.lang = input_lang) or k.source = 'bundle')
    order by case k.source when 'cms' then 0 else 1 end
  loop
    v_found := true;
    if cardinality(v_candidate.answers) = cardinality(v_answers)
       or (cardinality(v_candidate.answers) = 0 and cardinality(v_answers) = 0) then
      v_key := v_candidate.answers;
      exit;
    end if;
  end loop;
  if not v_found then
    v_key := array['B', 'A'];
  end if;

  if v_key is null or coalesce(cardinality(v_key), 0) <> coalesce(cardinality(v_answers), 0) then
    -- The app shows another version of the quiz than the server knows
    -- (outdated app, or lesson edited meanwhile): ask for a reload.
    return query select 'mismatch'::text, 0, coalesce(cardinality(v_key), 0);
    return;
  end if;

  v_total := coalesce(cardinality(v_key), 0);
  if v_total > 0 then
    select count(*) into v_correct
    from generate_subscripts(v_key, 1) as i
    where upper(trim(coalesce(v_answers[i], ''))) = v_key[i];
  end if;
  v_passed := v_total = 0 or v_correct * 10 >= v_total * 7;

  insert into app_private.karatou_quiz_attempts (user_id, module_slug, course_id, correct, total, passed)
  values (v_user, input_module_slug, input_course_id, v_correct, v_total, v_passed);

  if v_passed then
    -- An offline completion keeps the date it happened, within the last 30 days.
    v_completed_at := greatest(now() - interval '30 days', least(now(), coalesce(input_completed_at, now())));
    insert into public.karatou_learner_progress (user_id, module_slug, course_id, completed_at)
    values (v_user, input_module_slug, input_course_id, v_completed_at)
    on conflict (user_id, module_slug, course_id) do nothing;
  end if;

  return query select case when v_passed then 'passed' else 'failed' end, v_correct, v_total;
end;
$$;
revoke all on function public.karatou_submit_quiz(text, text, text, text[], timestamptz) from public, anon;
grant execute on function public.karatou_submit_quiz(text, text, text, text[], timestamptz) to authenticated;

-- ---------------------------------------------------------------------------
-- Le navigateur n'écrit plus la progression.
-- ---------------------------------------------------------------------------
drop policy if exists "Karatou users can complete own lessons" on public.karatou_learner_progress;
drop policy if exists "Karatou users can update own lesson completions" on public.karatou_learner_progress;
revoke insert, update, delete, truncate, references, trigger on public.karatou_learner_progress from anon, authenticated;

-- ---------------------------------------------------------------------------
-- Émission : module publié, leçons publiées, pas de ré-émission après révocation.
-- Même signature et même forme de retour que 20260622124807.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_issue_certificate(input_module_slug text)
returns table (
  id text, uid text, user_id uuid, user_name text, module_slug text,
  module_name text, issued_at timestamptz, expires_at timestamptz, status text
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_module_id text;
  v_module_title text;
  v_required int;
  v_completed int;
  v_uid text;
  v_id text;
  v_name text;
  v_issued timestamptz := now();
  v_expires timestamptz := now() + interval '1 year';
begin
  if v_user is null then
    raise exception 'auth required' using errcode = '28000';
  end if;

  select m.id, m.title into v_module_id, v_module_title
  from public.karatou_modules m
  where m.slug = input_module_slug and m.status = 'published'
  limit 1;

  if v_module_id is null then
    raise exception 'module not found: %', input_module_slug using errcode = 'P0002';
  end if;

  if exists (
    select 1 from public.karatou_certificates c
    where c.user_id = v_user and c.module_slug = input_module_slug and c.status = 'active'
  ) then
    return query
      select c.id, c.uid, c.user_id, c.user_name, c.module_slug, c.module_name,
             c.issued_at, c.expires_at, c.status
      from public.karatou_certificates c
      where c.user_id = v_user and c.module_slug = input_module_slug and c.status = 'active'
      limit 1;
    return;
  end if;

  -- A revoked certificate is final: completing the lessons again does not
  -- bring it back (a platform admin decides).
  if exists (
    select 1 from public.karatou_certificates c
    where c.user_id = v_user and c.module_slug = input_module_slug and c.status = 'revoked'
  ) then
    raise exception 'certificate revoked' using errcode = 'P0001';
  end if;

  select count(*) into v_required
  from public.karatou_courses c
  where c.module_id = v_module_id and c.status = 'published';

  select count(distinct lp.course_id) into v_completed
  from public.karatou_learner_progress lp
  join public.karatou_courses c
    on c.id = lp.course_id and c.module_id = v_module_id and c.status = 'published'
  where lp.user_id = v_user and lp.module_slug = input_module_slug;

  if v_required = 0 or v_completed < v_required then
    raise exception 'module not completed (% / %)', v_completed, v_required using errcode = 'P0001';
  end if;

  select coalesce(p.full_name, 'Karatou Learner') into v_name
  from public.profiles p where p.id = v_user;
  v_name := coalesce(v_name, 'Karatou Learner');

  v_uid := 'KA-' || to_char(v_issued, 'YYYY') || '-'
    || upper(substr(regexp_replace(input_module_slug, '[^a-zA-Z0-9]', '', 'g'), 1, 3)) || '-'
    || upper(substr(md5(gen_random_uuid()::text), 1, 6));
  v_id := 'cert-' || substr(md5(gen_random_uuid()::text), 1, 12);

  insert into public.karatou_certificates
    (id, uid, user_id, user_name, module_slug, module_name, issued_at, expires_at, status)
  values
    (v_id, v_uid, v_user, v_name, input_module_slug, v_module_title, v_issued, v_expires, 'active');

  return query
    select v_id, v_uid, v_user, v_name, input_module_slug, v_module_title,
           v_issued, v_expires, 'active'::text;
end;
$$;
revoke all on function public.karatou_issue_certificate(text) from public, anon;
grant execute on function public.karatou_issue_certificate(text) to authenticated;

-- ---------------------------------------------------------------------------
-- Révocation (CGU : « Karatou peut révoquer un certificat obtenu par fraude »).
-- ---------------------------------------------------------------------------
create or replace function public.karatou_revoke_certificate(input_uid text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_uid text;
begin
  if not (select app_private.karatou_is_platform_admin()) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  update public.karatou_certificates c
  set status = 'revoked', updated_at = now()
  where upper(c.uid) = upper(trim(input_uid))
  returning c.uid into v_uid;

  if v_uid is null then
    raise exception 'certificate not found' using errcode = 'P0002';
  end if;
  return v_uid;
end;
$$;
revoke all on function public.karatou_revoke_certificate(text) from public, anon;
grant execute on function public.karatou_revoke_certificate(text) to authenticated;

-- Les certificats ne s'écrivent que par les fonctions ci-dessus.
revoke insert, update, delete, truncate on public.karatou_certificates from anon, authenticated;

-- Generated by scripts/quiz-keys-sql.mjs from supabase/quiz-keys.json — do not edit by hand.
-- Answer keys of the lessons bundled with the app (52 lessons).
delete from app_private.karatou_quiz_keys where source = 'bundle';
insert into app_private.karatou_quiz_keys (module_slug, course_id, source, lang, answers) values
  ('creer-agents-ia', 'ag1', 'bundle', '*', '{B,A,C,B,D}'),
  ('creer-agents-ia', 'ag2', 'bundle', '*', '{B,C,A,D,C}'),
  ('creer-agents-ia', 'ag3', 'bundle', '*', '{B,A,D,C,B}'),
  ('creer-agents-ia', 'ag4', 'bundle', '*', '{C,A,B,D,B}'),
  ('creer-agents-ia', 'ag5', 'bundle', '*', '{B,C,A,D,A}'),
  ('creer-agents-ia', 'ag6', 'bundle', '*', '{B,D,A,C,D}'),
  ('creer-agents-ia', 'ag7', 'bundle', '*', '{B,C,D,A,B}'),
  ('creer-agents-ia', 'ag8', 'bundle', '*', '{C,A,B,C,B,A,D,B,A,D}'),
  ('data-analysis', 'd1', 'bundle', '*', '{A,C,B,D,A}'),
  ('data-analysis', 'd2', 'bundle', '*', '{B,C,B,B,A}'),
  ('data-analysis', 'd3', 'bundle', '*', '{B,C,B,A,D}'),
  ('data-analysis', 'd4', 'bundle', '*', '{A,B,C,B,C}'),
  ('data-analysis', 'd5', 'bundle', '*', '{B,C,D,B,B}'),
  ('data-analysis', 'd6', 'bundle', '*', '{B,C,B,A,D}'),
  ('gestion-projet', 'p1', 'bundle', '*', '{B,C,A,D,C}'),
  ('gestion-projet', 'p2', 'bundle', '*', '{B,C,A,C,A}'),
  ('gestion-projet', 'p3', 'bundle', '*', '{B,A,C,B,A}'),
  ('gestion-projet', 'p4', 'bundle', '*', '{B,A,C,B,A}'),
  ('gestion-projet', 'p5', 'bundle', '*', '{B,C,A,D,A}'),
  ('ia-administration', 'ad1', 'bundle', '*', '{C,A,B,D,B}'),
  ('ia-administration', 'ad2', 'bundle', '*', '{B,C,A,D,B}'),
  ('ia-administration', 'ad3', 'bundle', '*', '{A,B,C,D,B}'),
  ('ia-administration', 'ad4', 'bundle', '*', '{B,C,D,A,B}'),
  ('ia-administration', 'ad5', 'bundle', '*', '{C,B,C,A,D}'),
  ('ia-expliquee-simplement', 'is1', 'bundle', '*', '{B,C,A,D,C}'),
  ('ia-expliquee-simplement', 'is2', 'bundle', '*', '{C,A,D,A,B}'),
  ('ia-expliquee-simplement', 'is3', 'bundle', '*', '{C,A,D,B,A}'),
  ('ia-expliquee-simplement', 'is4', 'bundle', '*', '{B,D,A,C,B}'),
  ('ia-expliquee-simplement', 'is5', 'bundle', '*', '{B,A,C,D,B}'),
  ('ia-expliquee-simplement', 'is6', 'bundle', '*', '{C,B,A,D,C}'),
  ('ia-expliquee-simplement', 'is7', 'bundle', '*', '{C,A,D,B,B,A,D,C}'),
  ('intelligence-artificielle', 'c1', 'bundle', '*', '{B,D,C,A,C}'),
  ('intelligence-artificielle', 'c2', 'bundle', '*', '{B,C,C,D,B}'),
  ('intelligence-artificielle', 'c3', 'bundle', '*', '{B,C,D,A,C}'),
  ('intelligence-artificielle', 'c4', 'bundle', '*', '{C,D,B,A,C}'),
  ('intelligence-artificielle', 'c5', 'bundle', '*', '{C,D,B,C,C}'),
  ('intelligence-artificielle', 'c6', 'bundle', '*', '{B,C,C,C,B}'),
  ('intelligence-artificielle', 'c7', 'bundle', '*', '{C,D,B,C,B}'),
  ('intelligence-artificielle', 'c8', 'bundle', '*', '{B,B,C,D,B,B,C,B,C}'),
  ('introduction-claude-ai', 'cl1', 'bundle', '*', '{B,B,C}'),
  ('introduction-claude-ai', 'cl2', 'bundle', '*', '{B,B,C}'),
  ('introduction-claude-ai', 'cl3', 'bundle', '*', '{B,B,B}'),
  ('introduction-claude-ai', 'cl4', 'bundle', '*', '{B,B,B}'),
  ('introduction-claude-ai', 'cl5', 'bundle', '*', '{B,C,B}'),
  ('introduction-claude-ai', 'cl6', 'bundle', '*', '{B,B,A,B,B,B,B,B,C,B}'),
  ('outils-ia-gratuits', 'og1', 'bundle', '*', '{B,C,A,D,B}'),
  ('outils-ia-gratuits', 'og2', 'bundle', '*', '{B,C,A,C,A}'),
  ('outils-ia-gratuits', 'og3', 'bundle', '*', '{B,A,C,D,A}'),
  ('outils-ia-gratuits', 'og4', 'bundle', '*', '{B,C,D,A,C}'),
  ('outils-ia-gratuits', 'og5', 'bundle', '*', '{B,C,A,D,C}'),
  ('outils-ia-gratuits', 'og6', 'bundle', '*', '{B,D,A,C,B}'),
  ('outils-ia-gratuits', 'og7', 'bundle', '*', '{B,C,A,D,B,D,A,C}');
