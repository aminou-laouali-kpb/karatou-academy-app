create table if not exists public.karatou_enterprise_members (
  id text primary key default gen_random_uuid()::text,
  name text not null,
  email text not null,
  role text not null default 'learner' check (role in ('learner', 'admin')),
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  certificates integer not null default 0 check (certificates >= 0),
  certificate_uid text,
  last_activity text not null default 'Invitation envoyee aujourd''hui',
  status text not null default 'not_started' check (status in ('certified', 'in_progress', 'not_started')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint karatou_enterprise_members_email_unique unique (email)
);

create table if not exists public.karatou_scholarships (
  id text primary key default gen_random_uuid()::text,
  code text not null unique,
  status text not null default 'pending' check (status in ('claimed', 'pending')),
  claimed_by text,
  expires_at text not null default '31 dec 2026',
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists karatou_enterprise_members_status_idx
on public.karatou_enterprise_members(status);

create index if not exists karatou_enterprise_members_created_by_idx
on public.karatou_enterprise_members(created_by);

create index if not exists karatou_scholarships_status_idx
on public.karatou_scholarships(status);

create index if not exists karatou_scholarships_created_by_idx
on public.karatou_scholarships(created_by);

drop trigger if exists set_karatou_enterprise_members_updated_at on public.karatou_enterprise_members;
create trigger set_karatou_enterprise_members_updated_at
before update on public.karatou_enterprise_members
for each row execute function app_private.set_updated_at();

drop trigger if exists set_karatou_scholarships_updated_at on public.karatou_scholarships;
create trigger set_karatou_scholarships_updated_at
before update on public.karatou_scholarships
for each row execute function app_private.set_updated_at();

alter table public.karatou_enterprise_members enable row level security;
alter table public.karatou_scholarships enable row level security;

grant select, insert, update, delete on public.karatou_enterprise_members to authenticated, service_role;
grant select, insert, update, delete on public.karatou_scholarships to authenticated, service_role;

drop policy if exists "Karatou admins can manage enterprise members" on public.karatou_enterprise_members;
create policy "Karatou admins can manage enterprise members"
on public.karatou_enterprise_members
for all
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage scholarships" on public.karatou_scholarships;
create policy "Karatou admins can manage scholarships"
on public.karatou_scholarships
for all
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);
