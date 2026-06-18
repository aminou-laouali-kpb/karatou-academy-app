create extension if not exists pgcrypto;

create schema if not exists app_private;

create or replace function app_private.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.karatou_rubriques (
  id text primary key default gen_random_uuid()::text,
  slug text not null unique,
  name text not null,
  description text not null default '',
  icon text not null default '📚',
  color text not null default 'from-blue-700 to-blue-500',
  display_order integer not null default 0,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.karatou_modules (
  id text primary key default gen_random_uuid()::text,
  rubrique_id text references public.karatou_rubriques(id) on delete set null,
  slug text not null unique,
  title text not null,
  subtitle text not null default '',
  description text not null default '',
  emoji text not null default '📚',
  color text not null default 'from-blue-700 to-blue-500',
  duration text not null default '0 min',
  level text not null default 'Debutant',
  enrolled integer not null default 0 check (enrolled >= 0),
  rating numeric(3, 2) not null default 0 check (rating >= 0 and rating <= 5),
  is_free boolean not null default true,
  display_order integer not null default 0,
  status text not null default 'draft' check (status in ('draft', 'published')),
  translations jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.karatou_courses (
  id text primary key default gen_random_uuid()::text,
  module_id text not null references public.karatou_modules(id) on delete cascade,
  title text not null,
  duration text not null default '10 min',
  description text not null default '',
  display_order integer not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  translations jsonb not null default '{}'::jsonb,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.karatou_content_imports (
  id text primary key default gen_random_uuid()::text,
  file_name text not null,
  file_type text not null check (file_type in ('json', 'pdf', 'docx', 'other')),
  status text not null default 'queued' check (status in ('queued', 'imported', 'failed')),
  message text not null default '',
  storage_path text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists public.karatou_learner_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  module_slug text not null,
  course_id text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, module_slug, course_id)
);

create table if not exists public.karatou_certificates (
  id text primary key default gen_random_uuid()::text,
  uid text not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  user_name text not null,
  module_slug text not null,
  module_name text not null,
  issued_at timestamptz not null default now(),
  expires_at timestamptz not null,
  status text not null default 'active' check (status in ('active', 'expired', 'revoked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists karatou_rubriques_status_order_idx on public.karatou_rubriques(status, display_order);
create index if not exists karatou_modules_rubrique_order_idx on public.karatou_modules(rubrique_id, display_order);
create index if not exists karatou_modules_status_order_idx on public.karatou_modules(status, display_order);
create index if not exists karatou_courses_module_order_idx on public.karatou_courses(module_id, display_order);
create index if not exists karatou_courses_status_order_idx on public.karatou_courses(status, display_order);
create index if not exists karatou_content_imports_created_by_idx on public.karatou_content_imports(created_by, created_at desc);
create index if not exists karatou_learner_progress_user_module_idx on public.karatou_learner_progress(user_id, module_slug);
create index if not exists karatou_certificates_user_status_idx on public.karatou_certificates(user_id, status);
create index if not exists karatou_certificates_uid_idx on public.karatou_certificates(uid);
create unique index if not exists karatou_certificates_user_module_active_idx
on public.karatou_certificates(user_id, module_slug)
where status = 'active';

drop trigger if exists set_karatou_rubriques_updated_at on public.karatou_rubriques;
create trigger set_karatou_rubriques_updated_at
before update on public.karatou_rubriques
for each row execute function app_private.set_updated_at();

drop trigger if exists set_karatou_modules_updated_at on public.karatou_modules;
create trigger set_karatou_modules_updated_at
before update on public.karatou_modules
for each row execute function app_private.set_updated_at();

drop trigger if exists set_karatou_courses_updated_at on public.karatou_courses;
create trigger set_karatou_courses_updated_at
before update on public.karatou_courses
for each row execute function app_private.set_updated_at();

drop trigger if exists set_karatou_certificates_updated_at on public.karatou_certificates;
create trigger set_karatou_certificates_updated_at
before update on public.karatou_certificates
for each row execute function app_private.set_updated_at();

create or replace function app_private.create_karatou_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, country)
  values (
    new.id,
    nullif(coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'), ''),
    coalesce(nullif(new.raw_user_meta_data ->> 'country', ''), 'NE')
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists create_karatou_profile_for_new_user on auth.users;
create trigger create_karatou_profile_for_new_user
after insert on auth.users
for each row execute function app_private.create_karatou_profile_for_new_user();

alter table public.karatou_rubriques enable row level security;
alter table public.karatou_modules enable row level security;
alter table public.karatou_courses enable row level security;
alter table public.karatou_content_imports enable row level security;
alter table public.karatou_learner_progress enable row level security;
alter table public.karatou_certificates enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.karatou_rubriques, public.karatou_modules, public.karatou_courses to anon, authenticated;
grant select, insert, update, delete on public.karatou_rubriques, public.karatou_modules, public.karatou_courses, public.karatou_content_imports to authenticated;
grant select, insert, update, delete on public.karatou_learner_progress to authenticated;
grant select, insert, update on public.karatou_certificates to authenticated;
grant select on public.karatou_certificates to anon;
grant insert(id, full_name, country) on public.profiles to authenticated;

drop policy if exists "Karatou public can read published rubriques" on public.karatou_rubriques;
create policy "Karatou public can read published rubriques"
on public.karatou_rubriques
for select
to anon, authenticated
using (
  status = 'published'
  or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage rubriques" on public.karatou_rubriques;
create policy "Karatou admins can manage rubriques"
on public.karatou_rubriques
for all
to authenticated
using (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou public can read published modules" on public.karatou_modules;
create policy "Karatou public can read published modules"
on public.karatou_modules
for select
to anon, authenticated
using (
  status = 'published'
  or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage modules" on public.karatou_modules;
create policy "Karatou admins can manage modules"
on public.karatou_modules
for all
to authenticated
using (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou public can read published courses" on public.karatou_courses;
create policy "Karatou public can read published courses"
on public.karatou_courses
for select
to anon, authenticated
using (
  (
    status = 'published'
    and exists (
      select 1 from public.karatou_modules
      where karatou_modules.id = karatou_courses.module_id
        and karatou_modules.status = 'published'
    )
  )
  or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage courses" on public.karatou_courses;
create policy "Karatou admins can manage courses"
on public.karatou_courses
for all
to authenticated
using (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage imports" on public.karatou_content_imports;
create policy "Karatou admins can manage imports"
on public.karatou_content_imports
for all
to authenticated
using (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou users can insert own profile" on public.profiles;
create policy "Karatou users can insert own profile"
on public.profiles
for insert
to authenticated
with check (id = (select auth.uid()));

drop policy if exists "Karatou users can read own learner progress" on public.karatou_learner_progress;
create policy "Karatou users can read own learner progress"
on public.karatou_learner_progress
for select
to authenticated
using (
  user_id = (select auth.uid())
  or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou users can complete own lessons" on public.karatou_learner_progress;
create policy "Karatou users can complete own lessons"
on public.karatou_learner_progress
for insert
to authenticated
with check (user_id = (select auth.uid()));

drop policy if exists "Karatou users can update own lesson completions" on public.karatou_learner_progress;
create policy "Karatou users can update own lesson completions"
on public.karatou_learner_progress
for update
to authenticated
using (user_id = (select auth.uid()))
with check (user_id = (select auth.uid()));

drop policy if exists "Karatou users can read own certificates" on public.karatou_certificates;
create policy "Karatou users can read own certificates"
on public.karatou_certificates
for select
to authenticated
using (
  user_id = (select auth.uid())
  or status in ('active', 'expired')
  or coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou public can verify certificates" on public.karatou_certificates;
create policy "Karatou public can verify certificates"
on public.karatou_certificates
for select
to anon
using (status in ('active', 'expired'));

drop policy if exists "Karatou users can issue own certificates" on public.karatou_certificates;
create policy "Karatou users can issue own certificates"
on public.karatou_certificates
for insert
to authenticated
with check (user_id = (select auth.uid()));

drop policy if exists "Karatou users can refresh own certificates" on public.karatou_certificates;
create policy "Karatou users can refresh own certificates"
on public.karatou_certificates
for update
to authenticated
using (user_id = (select auth.uid()))
with check (user_id = (select auth.uid()));
