-- Integrity hardening: certificates are now genuinely infalsifiable [KPB-29].
--
-- Before this migration, a learner could insert arbitrary (course_id,
-- module_slug) rows into karatou_learner_progress as long as user_id matched
-- their auth.uid(). The issuance RPC then just counted distinct course_ids and
-- compared with the module's course count, so a learner could fabricate
-- progress and earn a real, server-signed certificate without doing the work.
--
-- Defense in depth:
--   (1) Tighten the INSERT/UPDATE RLS to require that course_id actually
--       belongs to the module identified by module_slug — no more rogue rows
--       getting in.
--   (2) Replace the issuance RPC's "count(distinct course_id)" with a JOIN on
--       karatou_courses, so any pre-existing rogue rows (from before this
--       migration) don't count toward completion either.

-- ---------------------------------------------------------------------------
-- (1) INSERT / UPDATE policies — verify (module_slug, course_id) coherence.
-- ---------------------------------------------------------------------------

drop policy if exists "Karatou users can complete own lessons" on public.karatou_learner_progress;
create policy "Karatou users can complete own lessons"
  on public.karatou_learner_progress
  for insert
  to authenticated
  with check (
    user_id = (select auth.uid())
    and exists (
      select 1
      from public.karatou_courses c
      inner join public.karatou_modules m on m.id = c.module_id
      where c.id = karatou_learner_progress.course_id
        and m.slug = karatou_learner_progress.module_slug
    )
  );

drop policy if exists "Karatou users can update own lesson completions" on public.karatou_learner_progress;
create policy "Karatou users can update own lesson completions"
  on public.karatou_learner_progress
  for update
  to authenticated
  using (user_id = (select auth.uid()))
  with check (
    user_id = (select auth.uid())
    and exists (
      select 1
      from public.karatou_courses c
      inner join public.karatou_modules m on m.id = c.module_id
      where c.id = karatou_learner_progress.course_id
        and m.slug = karatou_learner_progress.module_slug
    )
  );

-- ---------------------------------------------------------------------------
-- (2) Issuance RPC — JOIN on karatou_courses so only real course rows count.
--     Identical signature/behavior to 20260616114717, except the completion
--     query is JOINed; pre-existing rogue progress rows no longer count.
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
  where m.slug = input_module_slug
  limit 1;

  if v_module_id is null then
    raise exception 'module not found: %', input_module_slug using errcode = 'P0002';
  end if;

  -- Idempotent: return the existing active certificate if there is one.
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

  select count(*) into v_required
  from public.karatou_courses where module_id = v_module_id;

  -- JOIN on karatou_courses: only progress rows whose course actually belongs
  -- to this module count. This is the defense-in-depth fix — even rogue rows
  -- inserted before the tightened RLS above no longer satisfy issuance.
  select count(distinct lp.course_id) into v_completed
  from public.karatou_learner_progress lp
  inner join public.karatou_courses c
    on c.id = lp.course_id and c.module_id = v_module_id
  where lp.user_id = v_user;

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

revoke all on function public.karatou_issue_certificate(text) from public;
grant execute on function public.karatou_issue_certificate(text) to authenticated;
