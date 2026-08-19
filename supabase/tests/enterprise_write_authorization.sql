-- Run with `supabase test db`. This regression exercises RLS as an authenticated
-- learner who belongs to the organization but is not its administrator.
begin;
select plan(6);

insert into public.karatou_organizations (
  id, slug, name, industry, country, plan, seats_total, status
) values (
  'test-write-authorization-org', 'test-write-authorization-org',
  'Write authorization test organization', 'Test', 'NE', 'Enterprise', 10, 'active'
);

insert into public.karatou_org_memberships (
  organization_id, email, role, status
) values (
  'test-write-authorization-org', 'learner-write-test@karatou.test', 'learner', 'active'
);

insert into public.karatou_enterprise_members (
  id, organization_id, name, email, role, progress, certificates, last_activity, status
) values (
  'test-write-authorization-member', 'test-write-authorization-org',
  'Protected learner', 'protected-write-test@karatou.test', 'learner', 0, 0, 'Created for RLS test', 'not_started'
);

insert into public.karatou_scholarships (
  id, organization_id, code, status, expires_at, expires_at_date
) values (
  'test-write-authorization-scholarship', 'test-write-authorization-org',
  'TEST-WRITE-AUTHORIZATION', 'pending', '31 dec 2026', date '2026-12-31'
);

set local role authenticated;
select set_config(
  'request.jwt.claims',
  '{"sub":"00000000-0000-0000-0000-000000000501","email":"learner-write-test@karatou.test","app_metadata":{"role":"learner"}}',
  true
);

select throws_ok(
  $$insert into public.karatou_enterprise_members (
      organization_id, name, email, role, progress, certificates, last_activity, status
    ) values (
      'test-write-authorization-org', 'Unauthorized member', 'unauthorized-member@karatou.test',
      'learner', 0, 0, 'Unauthorized', 'not_started'
    )$$,
  '42501',
  'an organization learner cannot create enterprise members'
);

select is(
  (select count(*) from (
    update public.karatou_enterprise_members
    set name = 'Tampered member'
    where id = 'test-write-authorization-member'
    returning id
  ) attempted),
  0::bigint,
  'an organization learner cannot update enterprise members'
);

select is(
  (select count(*) from (
    delete from public.karatou_enterprise_members
    where id = 'test-write-authorization-member'
    returning id
  ) attempted),
  0::bigint,
  'an organization learner cannot delete enterprise members'
);

select throws_ok(
  $$insert into public.karatou_scholarships (
      organization_id, code, status, expires_at, expires_at_date
    ) values (
      'test-write-authorization-org', 'TEST-WRITE-AUTHORIZATION-NEW',
      'pending', '31 dec 2026', date '2026-12-31'
    )$$,
  '42501',
  'an organization learner cannot create scholarships'
);

select is(
  (select count(*) from (
    update public.karatou_scholarships
    set status = 'expired'
    where id = 'test-write-authorization-scholarship'
    returning id
  ) attempted),
  0::bigint,
  'an organization learner cannot update scholarships'
);

select is(
  (select count(*) from (
    delete from public.karatou_scholarships
    where id = 'test-write-authorization-scholarship'
    returning id
  ) attempted),
  0::bigint,
  'an organization learner cannot delete scholarships'
);

select * from finish();
rollback;