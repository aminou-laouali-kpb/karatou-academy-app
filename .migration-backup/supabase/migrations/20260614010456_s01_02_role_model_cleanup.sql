-- S01-02 role cleanup:
-- - platform_admin owns platform CMS access
-- - enterprise_admin owns enterprise portal access
-- - legacy admin/org_admin values remain readable during migration

create or replace function app_private.karatou_current_app_role()
returns text
language sql
stable
set search_path = ''
as $$
  select coalesce(((select auth.jwt()) -> 'app_metadata' ->> 'role'), '');
$$;

create or replace function app_private.karatou_is_platform_admin()
returns boolean
language sql
stable
set search_path = ''
as $$
  select app_private.karatou_current_app_role() in ('platform_admin', 'admin');
$$;

create or replace function app_private.karatou_can_manage_enterprise()
returns boolean
language sql
stable
set search_path = ''
as $$
  select app_private.karatou_current_app_role() in ('platform_admin', 'enterprise_admin', 'admin', 'org_admin');
$$;

grant usage on schema app_private to anon, authenticated;
grant execute on function app_private.karatou_current_app_role() to anon, authenticated;
grant execute on function app_private.karatou_is_platform_admin() to anon, authenticated;
grant execute on function app_private.karatou_can_manage_enterprise() to authenticated;

alter table public.karatou_enterprise_members
drop constraint if exists karatou_enterprise_members_role_check;

update public.karatou_enterprise_members
set role = 'enterprise_admin'
where role in ('admin', 'org_admin');

alter table public.karatou_enterprise_members
add constraint karatou_enterprise_members_role_check
check (role in ('learner', 'enterprise_admin'));

drop policy if exists "Karatou public can read published rubriques" on public.karatou_rubriques;
create policy "Karatou public can read published rubriques"
on public.karatou_rubriques
for select
to anon, authenticated
using (status = 'published' or (select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can manage rubriques" on public.karatou_rubriques;
drop policy if exists "Karatou admins can insert rubriques" on public.karatou_rubriques;
create policy "Karatou admins can insert rubriques"
on public.karatou_rubriques
for insert
to authenticated
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can update rubriques" on public.karatou_rubriques;
create policy "Karatou admins can update rubriques"
on public.karatou_rubriques
for update
to authenticated
using ((select app_private.karatou_is_platform_admin()))
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can delete rubriques" on public.karatou_rubriques;
create policy "Karatou admins can delete rubriques"
on public.karatou_rubriques
for delete
to authenticated
using ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou public can read published modules" on public.karatou_modules;
create policy "Karatou public can read published modules"
on public.karatou_modules
for select
to anon, authenticated
using (status = 'published' or (select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can manage modules" on public.karatou_modules;
drop policy if exists "Karatou admins can insert modules" on public.karatou_modules;
create policy "Karatou admins can insert modules"
on public.karatou_modules
for insert
to authenticated
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can update modules" on public.karatou_modules;
create policy "Karatou admins can update modules"
on public.karatou_modules
for update
to authenticated
using ((select app_private.karatou_is_platform_admin()))
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can delete modules" on public.karatou_modules;
create policy "Karatou admins can delete modules"
on public.karatou_modules
for delete
to authenticated
using ((select app_private.karatou_is_platform_admin()));

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
  or (select app_private.karatou_is_platform_admin())
);

drop policy if exists "Karatou admins can manage courses" on public.karatou_courses;
drop policy if exists "Karatou admins can insert courses" on public.karatou_courses;
create policy "Karatou admins can insert courses"
on public.karatou_courses
for insert
to authenticated
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can update courses" on public.karatou_courses;
create policy "Karatou admins can update courses"
on public.karatou_courses
for update
to authenticated
using ((select app_private.karatou_is_platform_admin()))
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can delete courses" on public.karatou_courses;
create policy "Karatou admins can delete courses"
on public.karatou_courses
for delete
to authenticated
using ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou admins can manage imports" on public.karatou_content_imports;
create policy "Karatou admins can manage imports"
on public.karatou_content_imports
for all
to authenticated
using ((select app_private.karatou_is_platform_admin()))
with check ((select app_private.karatou_is_platform_admin()));

drop policy if exists "Karatou users can read own learner progress" on public.karatou_learner_progress;
create policy "Karatou users can read own learner progress"
on public.karatou_learner_progress
for select
to authenticated
using (user_id = (select auth.uid()) or (select app_private.karatou_can_manage_enterprise()));

drop policy if exists "Karatou users can read own certificates" on public.karatou_certificates;
create policy "Karatou users can read own certificates"
on public.karatou_certificates
for select
to authenticated
using (
  user_id = (select auth.uid())
  or status in ('active', 'expired')
  or (select app_private.karatou_can_manage_enterprise())
);

drop policy if exists "Karatou admins can manage enterprise members" on public.karatou_enterprise_members;
create policy "Karatou admins can manage enterprise members"
on public.karatou_enterprise_members
for all
to authenticated
using ((select app_private.karatou_can_manage_enterprise()))
with check ((select app_private.karatou_can_manage_enterprise()));

drop policy if exists "Karatou admins can manage scholarships" on public.karatou_scholarships;
create policy "Karatou admins can manage scholarships"
on public.karatou_scholarships
for all
to authenticated
using ((select app_private.karatou_can_manage_enterprise()))
with check ((select app_private.karatou_can_manage_enterprise()));
