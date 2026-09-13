-- Cross-organization RLS isolation test (sprint item S02-05).
--
-- Proves, against a real Postgres with RLS on, that:
--   1. an enterprise admin sees ONLY their own organization, members and bourses;
--   2. an enterprise admin cannot read another organization's learner progress;
--   3. a learner with no organization sees none of it;
--   4. an anonymous caller has no access at all (denied at the grant level,
--      before RLS even applies).
--
-- It is a single self-contained statement: it seeds two throwaway organizations,
-- asserts, then deletes them (also on failure). It raises an exception on the
-- first leak, so it can run in CI, in psql, or through the Supabase SQL editor:
--
--     psql "$DATABASE_URL" -f scripts/verify-cross-org-rls.sql
--
-- Run it as the database owner (postgres): the test switches to the
-- `authenticated` / `anon` roles itself, which is what makes RLS apply.
--
-- Last run: 2026-09-03 against the production project (pqcovsnomouclkdjhjig) —
-- passed, no rows left behind.

do $rls_test$
declare
  owner_role text := session_user;
  admin_a_claims text := '{"sub":"00000000-0000-0000-0000-0000000000aa","email":"admin-a@rls.probe","app_metadata":{"role":"enterprise_admin"}}';
  admin_b_claims text := '{"sub":"00000000-0000-0000-0000-0000000000bb","email":"admin-b@rls.probe","app_metadata":{"role":"enterprise_admin"}}';
  learner_claims text := '{"sub":"00000000-0000-0000-0000-0000000000cc","email":"learner-nowhere@rls.probe","app_metadata":{}}';
  seen text;
  progress_rows bigint;
begin
  -- ---------------------------------------------------------------- seed ----
  insert into public.karatou_organizations (id, slug, name, industry, country, seats_total)
  values ('rls-probe-a', 'rls-probe-a', 'RLS Probe A', 'Test', 'NE', 5),
         ('rls-probe-b', 'rls-probe-b', 'RLS Probe B', 'Test', 'NE', 5);

  -- user_id stays null on purpose: org admins are also resolved by their JWT
  -- email, so the test needs no auth.users rows.
  insert into public.karatou_org_memberships (organization_id, email, role, status)
  values ('rls-probe-a', 'admin-a@rls.probe', 'enterprise_admin', 'active'),
         ('rls-probe-b', 'admin-b@rls.probe', 'enterprise_admin', 'active');

  insert into public.karatou_enterprise_members (organization_id, name, email)
  values ('rls-probe-a', 'Learner A', 'learner-a@rls.probe'),
         ('rls-probe-b', 'Learner B', 'learner-b@rls.probe');

  insert into public.karatou_scholarships (organization_id, code)
  values ('rls-probe-a', 'RLS-PROBE-A'),
         ('rls-probe-b', 'RLS-PROBE-B');

  -- ------------------------------------------- 1. org A's enterprise admin ----
  perform set_config('request.jwt.claims', admin_a_claims, true);
  perform set_config('role', 'authenticated', true);

  select coalesce(string_agg(id, ',' order by id), '(none)') into seen
    from public.karatou_organizations;
  if seen <> 'rls-probe-a' then
    raise exception 'cross-org leak: org A admin sees organizations [%]', seen;
  end if;

  select coalesce(string_agg(email, ',' order by email), '(none)') into seen
    from public.karatou_enterprise_members;
  if seen <> 'learner-a@rls.probe' then
    raise exception 'cross-org leak: org A admin sees members [%]', seen;
  end if;

  select coalesce(string_agg(code, ',' order by code), '(none)') into seen
    from public.karatou_scholarships;
  if seen <> 'RLS-PROBE-A' then
    raise exception 'cross-org leak: org A admin sees bourses [%]', seen;
  end if;

  -- 2. Learner progress belongs to learners of other organizations (or to none):
  --    an org A admin must not see a single row.
  select count(*) into progress_rows from public.karatou_learner_progress;
  if progress_rows <> 0 then
    raise exception 'cross-org leak: org A admin sees % learner progress row(s)', progress_rows;
  end if;

  select count(*) into progress_rows from public.karatou_certificates;
  if progress_rows <> 0 then
    raise exception 'cross-org leak: org A admin sees % certificate(s)', progress_rows;
  end if;

  -- ------------------------------------------- 3. org B's enterprise admin ----
  perform set_config('role', owner_role, true);
  perform set_config('request.jwt.claims', admin_b_claims, true);
  perform set_config('role', 'authenticated', true);

  select coalesce(string_agg(id, ',' order by id), '(none)') into seen
    from public.karatou_organizations;
  if seen <> 'rls-probe-b' then
    raise exception 'cross-org leak: org B admin sees organizations [%]', seen;
  end if;

  select coalesce(string_agg(code, ',' order by code), '(none)') into seen
    from public.karatou_scholarships;
  if seen <> 'RLS-PROBE-B' then
    raise exception 'cross-org leak: org B admin sees bourses [%]', seen;
  end if;

  -- ------------------------------------- 4. learner without an organization ----
  perform set_config('role', owner_role, true);
  perform set_config('request.jwt.claims', learner_claims, true);
  perform set_config('role', 'authenticated', true);

  select coalesce(string_agg(id, ',' order by id), '(none)') into seen
    from public.karatou_organizations;
  if seen <> '(none)' then
    raise exception 'leak: an unaffiliated learner sees organizations [%]', seen;
  end if;

  select coalesce(string_agg(email, ',' order by email), '(none)') into seen
    from public.karatou_enterprise_members;
  if seen <> '(none)' then
    raise exception 'leak: an unaffiliated learner sees members [%]', seen;
  end if;

  -- ------------------------------------------------- 5. anonymous caller ----
  perform set_config('role', owner_role, true);
  perform set_config('request.jwt.claims', '{"role":"anon"}', true);
  perform set_config('role', 'anon', true);

  begin
    perform 1 from public.karatou_organizations limit 1;
    raise exception 'leak: anon can read karatou_organizations';
  exception
    when insufficient_privilege then null;  -- expected: no grant for anon
  end;

  begin
    perform 1 from public.karatou_enterprise_members limit 1;
    raise exception 'leak: anon can read karatou_enterprise_members';
  exception
    when insufficient_privilege then null;
  end;

  -- --------------------------------------------------------------- clean ----
  perform set_config('role', owner_role, true);
  delete from public.karatou_organizations where id in ('rls-probe-a', 'rls-probe-b');

  raise notice 'cross-org RLS isolation: PASS (probe organizations removed)';
exception
  when others then
    -- Never leave probe rows behind, even when an assertion fails.
    perform set_config('role', owner_role, true);
    delete from public.karatou_organizations where id in ('rls-probe-a', 'rls-probe-b');
    raise;
end
$rls_test$;
