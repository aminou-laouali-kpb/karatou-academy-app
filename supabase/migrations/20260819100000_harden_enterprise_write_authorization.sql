-- Enterprise write authorization hardening:
-- A valid enterprise membership and a matching JWT role are both required.
-- Platform administrators keep their cross-organization authority.

create or replace function app_private.karatou_is_org_admin(org_id text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select (select app_private.karatou_is_platform_admin())
    or (
      (select app_private.karatou_current_app_role()) in ('enterprise_admin', 'org_admin')
      and exists (
        select 1
        from public.karatou_org_memberships
        where karatou_org_memberships.organization_id = org_id
          and karatou_org_memberships.status = 'active'
          and karatou_org_memberships.role = 'enterprise_admin'
          and (
            karatou_org_memberships.user_id = (select auth.uid())
            or lower(karatou_org_memberships.email) = lower(coalesce((select auth.jwt()) ->> 'email', ''))
          )
      )
    );
$$;

revoke all on function app_private.karatou_is_org_admin(text) from public, anon;
grant execute on function app_private.karatou_is_org_admin(text) to authenticated;

drop policy if exists "Karatou admins can manage enterprise members" on public.karatou_enterprise_members;
create policy "Karatou admins can manage enterprise members"
on public.karatou_enterprise_members
for all
to authenticated
using ((select app_private.karatou_is_org_admin(organization_id)))
with check ((select app_private.karatou_is_org_admin(organization_id)));

drop policy if exists "Karatou admins can manage scholarships" on public.karatou_scholarships;
create policy "Karatou admins can manage scholarships"
on public.karatou_scholarships
for all
to authenticated
using ((select app_private.karatou_is_org_admin(organization_id)))
with check ((select app_private.karatou_is_org_admin(organization_id)));