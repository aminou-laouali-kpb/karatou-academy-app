-- Sprint 02 S02-03: server-authoritative certificate issuance.
-- Client INSERT on karatou_certificates was revoked (forgery fix, S03-04), so
-- issuance happens through this SECURITY DEFINER RPC, which verifies the caller
-- actually completed every course of the module and generates the UID server-side.

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

  select count(distinct lp.course_id) into v_completed
  from public.karatou_learner_progress lp
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

revoke all on function public.karatou_issue_certificate(text) from public;
grant execute on function public.karatou_issue_certificate(text) to authenticated;
