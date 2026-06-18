create or replace function app_private.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function app_private.create_karatou_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
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

revoke all on function app_private.set_updated_at() from public, anon, authenticated;
revoke all on function app_private.create_karatou_profile_for_new_user() from public, anon, authenticated;

create index if not exists karatou_rubriques_created_by_idx on public.karatou_rubriques(created_by);
create index if not exists karatou_modules_created_by_idx on public.karatou_modules(created_by);
create index if not exists karatou_courses_created_by_idx on public.karatou_courses(created_by);

drop policy if exists "Karatou public can read published rubriques" on public.karatou_rubriques;
create policy "Karatou public can read published rubriques"
on public.karatou_rubriques
for select
to anon, authenticated
using (
  status = 'published'
  or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage rubriques" on public.karatou_rubriques;
drop policy if exists "Karatou admins can insert rubriques" on public.karatou_rubriques;
create policy "Karatou admins can insert rubriques"
on public.karatou_rubriques
for insert
to authenticated
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can update rubriques" on public.karatou_rubriques;
create policy "Karatou admins can update rubriques"
on public.karatou_rubriques
for update
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can delete rubriques" on public.karatou_rubriques;
create policy "Karatou admins can delete rubriques"
on public.karatou_rubriques
for delete
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou public can read published modules" on public.karatou_modules;
create policy "Karatou public can read published modules"
on public.karatou_modules
for select
to anon, authenticated
using (
  status = 'published'
  or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage modules" on public.karatou_modules;
drop policy if exists "Karatou admins can insert modules" on public.karatou_modules;
create policy "Karatou admins can insert modules"
on public.karatou_modules
for insert
to authenticated
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can update modules" on public.karatou_modules;
create policy "Karatou admins can update modules"
on public.karatou_modules
for update
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can delete modules" on public.karatou_modules;
create policy "Karatou admins can delete modules"
on public.karatou_modules
for delete
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
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
  or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage courses" on public.karatou_courses;
drop policy if exists "Karatou admins can insert courses" on public.karatou_courses;
create policy "Karatou admins can insert courses"
on public.karatou_courses
for insert
to authenticated
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can update courses" on public.karatou_courses;
create policy "Karatou admins can update courses"
on public.karatou_courses
for update
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can delete courses" on public.karatou_courses;
create policy "Karatou admins can delete courses"
on public.karatou_courses
for delete
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou admins can manage imports" on public.karatou_content_imports;
create policy "Karatou admins can manage imports"
on public.karatou_content_imports
for all
to authenticated
using (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
)
with check (
  coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou users can read own learner progress" on public.karatou_learner_progress;
create policy "Karatou users can read own learner progress"
on public.karatou_learner_progress
for select
to authenticated
using (
  user_id = (select auth.uid())
  or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);

drop policy if exists "Karatou users can read own certificates" on public.karatou_certificates;
create policy "Karatou users can read own certificates"
on public.karatou_certificates
for select
to authenticated
using (
  user_id = (select auth.uid())
  or status in ('active', 'expired')
  or coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '') in ('admin', 'enterprise_admin', 'org_admin')
);
