-- S01-03 organization data model:
-- Scope enterprise members and bourses by organization.

create table if not exists public.karatou_organizations (
  id text primary key default gen_random_uuid()::text,
  slug text not null unique,
  name text not null,
  industry text not null default '',
  country text not null default 'NE',
  plan text not null default 'Enterprise',
  seats_total integer not null default 0 check (seats_total >= 0),
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.karatou_org_memberships (
  id text primary key default gen_random_uuid()::text,
  organization_id text not null references public.karatou_organizations(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  email text not null,
  role text not null default 'learner' check (role in ('learner', 'enterprise_admin')),
  status text not null default 'active' check (status in ('active', 'invited', 'suspended')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint karatou_org_memberships_org_email_unique unique (organization_id, email)
);

create unique index if not exists karatou_org_memberships_org_user_unique
on public.karatou_org_memberships(organization_id, user_id)
where user_id is not null;

create index if not exists karatou_org_memberships_user_id_idx
on public.karatou_org_memberships(user_id);

create index if not exists karatou_org_memberships_email_idx
on public.karatou_org_memberships(lower(email));

create index if not exists karatou_org_memberships_org_role_idx
on public.karatou_org_memberships(organization_id, role);

alter table public.karatou_enterprise_members
add column if not exists organization_id text;

alter table public.karatou_scholarships
add column if not exists organization_id text;

insert into public.karatou_organizations (id, slug, name, industry, country, plan, seats_total, status)
values (
  'org-pnud-niger',
  'pnud-niger',
  'PNUD Niger',
  'Organisation internationale',
  'NE',
  'Enterprise',
  50,
  'active'
)
on conflict (id) do update set
  slug = excluded.slug,
  name = excluded.name,
  industry = excluded.industry,
  country = excluded.country,
  plan = excluded.plan,
  seats_total = excluded.seats_total,
  status = excluded.status,
  updated_at = now();

update public.karatou_enterprise_members
set organization_id = 'org-pnud-niger'
where organization_id is null;

update public.karatou_scholarships
set organization_id = 'org-pnud-niger'
where organization_id is null;

insert into public.karatou_org_memberships (organization_id, user_id, email, role, status)
select
  'org-pnud-niger',
  users.id,
  lower(users.email),
  case
    when coalesce(users.raw_app_meta_data ->> 'role', '') in ('enterprise_admin', 'org_admin') then 'enterprise_admin'
    else 'learner'
  end,
  'active'
from auth.users
as users
where users.email is not null
  and coalesce(users.raw_app_meta_data ->> 'role', '') in ('enterprise_admin', 'org_admin')
on conflict (organization_id, email) do update set
  user_id = excluded.user_id,
  role = excluded.role,
  status = 'active',
  updated_at = now();

insert into public.karatou_org_memberships (organization_id, email, role, status)
select
  organization_id,
  lower(email),
  role,
  'active'
from public.karatou_enterprise_members
where email is not null
on conflict (organization_id, email) do update set
  role = excluded.role,
  status = 'active',
  updated_at = now();

alter table public.karatou_enterprise_members
alter column organization_id set not null;

alter table public.karatou_scholarships
alter column organization_id set not null;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'karatou_enterprise_members_organization_id_fkey'
      and conrelid = 'public.karatou_enterprise_members'::regclass
  ) then
    alter table public.karatou_enterprise_members
    add constraint karatou_enterprise_members_organization_id_fkey
    foreign key (organization_id) references public.karatou_organizations(id) on delete cascade;
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'karatou_scholarships_organization_id_fkey'
      and conrelid = 'public.karatou_scholarships'::regclass
  ) then
    alter table public.karatou_scholarships
    add constraint karatou_scholarships_organization_id_fkey
    foreign key (organization_id) references public.karatou_organizations(id) on delete cascade;
  end if;
end $$;

alter table public.karatou_enterprise_members
drop constraint if exists karatou_enterprise_members_email_unique;
drop index if exists karatou_enterprise_members_email_unique;

create unique index if not exists karatou_enterprise_members_org_email_unique
on public.karatou_enterprise_members(organization_id, email);

create index if not exists karatou_enterprise_members_org_status_idx
on public.karatou_enterprise_members(organization_id, status);

create index if not exists karatou_scholarships_org_status_idx
on public.karatou_scholarships(organization_id, status);

create index if not exists karatou_scholarships_org_created_at_idx
on public.karatou_scholarships(organization_id, created_at desc);

drop trigger if exists set_karatou_organizations_updated_at on public.karatou_organizations;
create trigger set_karatou_organizations_updated_at
before update on public.karatou_organizations
for each row execute function app_private.set_updated_at();

drop trigger if exists set_karatou_org_memberships_updated_at on public.karatou_org_memberships;
create trigger set_karatou_org_memberships_updated_at
before update on public.karatou_org_memberships
for each row execute function app_private.set_updated_at();

create or replace function app_private.karatou_is_org_member(org_id text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.karatou_org_memberships
    where karatou_org_memberships.organization_id = org_id
      and karatou_org_memberships.status = 'active'
      and (
        karatou_org_memberships.user_id = (select auth.uid())
        or lower(karatou_org_memberships.email) = lower(coalesce((select auth.jwt()) ->> 'email', ''))
      )
  );
$$;

revoke all on function app_private.karatou_is_org_member(text) from public, anon;
grant execute on function app_private.karatou_is_org_member(text) to authenticated;

alter table public.karatou_organizations enable row level security;
alter table public.karatou_org_memberships enable row level security;
alter table public.karatou_enterprise_members enable row level security;
alter table public.karatou_scholarships enable row level security;

revoke all on public.karatou_organizations from anon;
revoke all on public.karatou_org_memberships from anon;
revoke all on public.karatou_enterprise_members from anon;
revoke all on public.karatou_scholarships from anon;

grant select, insert, update, delete on public.karatou_organizations to authenticated, service_role;
grant select, insert, update, delete on public.karatou_org_memberships to authenticated, service_role;
grant select, insert, update, delete on public.karatou_enterprise_members to authenticated, service_role;
grant select, insert, update, delete on public.karatou_scholarships to authenticated, service_role;

drop policy if exists "Karatou users can read organizations" on public.karatou_organizations;
create policy "Karatou users can read organizations"
on public.karatou_organizations
for select
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_member(id))
);

drop policy if exists "Karatou platform admins can manage organizations" on public.karatou_organizations;
drop policy if exists "Karatou platform admins can insert organizations" on public.karatou_organizations;
create policy "Karatou platform admins can insert organizations"
on public.karatou_organizations
for insert
to authenticated
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou platform admins can update organizations" on public.karatou_organizations;
create policy "Karatou platform admins can update organizations"
on public.karatou_organizations
for update
to authenticated
using ((select app_private.karatou_is_platform_admin()))
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou platform admins can delete organizations" on public.karatou_organizations;
create policy "Karatou platform admins can delete organizations"
on public.karatou_organizations
for delete
to authenticated
using ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou users can read org memberships" on public.karatou_org_memberships;
create policy "Karatou users can read org memberships"
on public.karatou_org_memberships
for select
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_member(organization_id))
);

drop policy if exists "Karatou platform admins can manage org memberships" on public.karatou_org_memberships;
drop policy if exists "Karatou platform admins can insert org memberships" on public.karatou_org_memberships;
create policy "Karatou platform admins can insert org memberships"
on public.karatou_org_memberships
for insert
to authenticated
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou platform admins can update org memberships" on public.karatou_org_memberships;
create policy "Karatou platform admins can update org memberships"
on public.karatou_org_memberships
for update
to authenticated
using ((select app_private.karatou_is_platform_admin()))
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou platform admins can delete org memberships" on public.karatou_org_memberships;
create policy "Karatou platform admins can delete org memberships"
on public.karatou_org_memberships
for delete
to authenticated
using ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can manage enterprise members" on public.karatou_enterprise_members;
create policy "Karatou admins can manage enterprise members"
on public.karatou_enterprise_members
for all
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_member(organization_id))
)
with check (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_member(organization_id))
);

drop policy if exists "Karatou admins can manage scholarships" on public.karatou_scholarships;
create policy "Karatou admins can manage scholarships"
on public.karatou_scholarships
for all
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_member(organization_id))
)
with check (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_member(organization_id))
);
