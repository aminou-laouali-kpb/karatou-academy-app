-- Sprint 05 — public-launch hardening. Closes the Supabase advisor findings
-- that concern this app (the karatou_* namespace, the newsletter, and the two
-- legacy SECURITY DEFINER functions), without touching the archived Next.js
-- tables that still live in the same project.

-- 1. Attestation registry: give the table an explicit read policy for platform
--    admins. Writes stay service-role only (Edge Functions), so a revocation
--    cannot be forged from a browser.
--    Advisor: rls_enabled_no_policy (public.karatou_attestations).
drop policy if exists "Karatou platform admins can read attestations" on public.karatou_attestations;
create policy "Karatou platform admins can read attestations"
  on public.karatou_attestations
  for select
  to authenticated
  using ((select app_private.karatou_is_platform_admin()));

-- 2. Certificate issuance is a signed-in learner action: anonymous callers have
--    no business reaching the RPC at all. The function already refuses them
--    (it needs auth.uid()), this removes the surface.
--    Advisor: anon_security_definer_function_executable.
revoke execute on function public.karatou_issue_certificate(text) from anon;

-- 3. Legacy SECURITY DEFINER functions with a mutable search_path.
--    Advisor: function_search_path_mutable.
--    `handle_new_user` is an orphan (the live auth.users trigger is
--    app_private.create_karatou_profile_for_new_user); it already qualifies its
--    target, so pinning an empty search_path is enough.
alter function public.handle_new_user() set search_path = '';

--    `update_expired_certificates` referenced `certificates` unqualified, so it
--    is rewritten with a qualified target before its search_path is pinned.
create or replace function public.update_expired_certificates()
returns void
language plpgsql
security definer
set search_path = ''
as $function$
begin
  update public.certificates
  set status = 'expired'
  where status = 'active'
    and expires_at < now();
end;
$function$;

-- 4. Newsletter: the admin policy resolved the admin through the legacy
--    `profiles.role` column and re-evaluated auth.uid() per row, and its FOR ALL
--    scope overlapped the public subscribe policy on INSERT. Align it with the
--    rest of the app (role read from the JWT, one policy per action).
--    Advisors: auth_rls_initplan, multiple_permissive_policies.
drop policy if exists admins_manage_newsletter on public.newsletter_subscribers;

create policy admins_read_newsletter
  on public.newsletter_subscribers
  for select
  to authenticated
  using ((select app_private.karatou_is_platform_admin()));

create policy admins_update_newsletter
  on public.newsletter_subscribers
  for update
  to authenticated
  using ((select app_private.karatou_is_platform_admin()))
  with check ((select app_private.karatou_is_platform_admin()));

create policy admins_delete_newsletter
  on public.newsletter_subscribers
  for delete
  to authenticated
  using ((select app_private.karatou_is_platform_admin()));

-- 5. Covering indexes for the foreign keys of the karatou_* namespace.
--    Advisor: unindexed_foreign_keys.
create index if not exists karatou_attestations_issued_by_idx
  on public.karatou_attestations (issued_by);
create index if not exists karatou_attestations_revoked_by_idx
  on public.karatou_attestations (revoked_by);
create index if not exists karatou_org_memberships_created_by_idx
  on public.karatou_org_memberships (created_by);
create index if not exists karatou_organizations_created_by_idx
  on public.karatou_organizations (created_by);
