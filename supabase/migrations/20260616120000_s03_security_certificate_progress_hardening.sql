-- Sprint 03 security hardening (code-review P0/P1):
--  B1 certificate confidentiality, B2 certificate integrity, B4 cross-org progress.

-- B1: certificates are no longer world-readable. Drop the blanket anon/status
-- read; public verification now goes through a SECURITY DEFINER RPC by UID.
drop policy if exists "Karatou public can verify certificates" on public.karatou_certificates;
drop policy if exists "Karatou users can read own certificates" on public.karatou_certificates;

create policy "Karatou users can read own certificates"
  on public.karatou_certificates
  for select
  to authenticated
  using (
    user_id = (select auth.uid())
    or (select app_private.karatou_is_platform_admin())
    or exists (
      select 1
      from public.karatou_enterprise_members m
      where m.user_id = public.karatou_certificates.user_id
        and (select app_private.karatou_is_org_admin(m.organization_id))
    )
  );

-- B2: certificates can no longer be issued or altered directly by the client
-- (this prevented self-issued / forged certificates). Issuance must become
-- server-authoritative (Sprint 02 S02-03 / future RPC).
drop policy if exists "Karatou users can issue own certificates" on public.karatou_certificates;
drop policy if exists "Karatou users can refresh own certificates" on public.karatou_certificates;

-- B1: public verification function. SECURITY DEFINER so a verifier can read a
-- single certificate by UID without any access to the rest of the table.
create or replace function public.karatou_verify_certificate(input_uid text)
returns table (
  id text,
  uid text,
  user_id uuid,
  user_name text,
  module_slug text,
  module_name text,
  issued_at timestamptz,
  expires_at timestamptz,
  status text
)
language sql
security definer
set search_path = ''
as $$
  select c.id, c.uid, c.user_id, c.user_name, c.module_slug, c.module_name,
         c.issued_at, c.expires_at, c.status
  from public.karatou_certificates c
  where upper(c.uid) = upper(trim(input_uid))
  limit 1;
$$;

revoke all on function public.karatou_verify_certificate(text) from public;
grant execute on function public.karatou_verify_certificate(text) to anon, authenticated;

-- B4: enterprise admins can read learner progress only for learners in an
-- organization they administer (previously any enterprise admin, globally).
drop policy if exists "Karatou users can read own learner progress" on public.karatou_learner_progress;

create policy "Karatou users can read own learner progress"
  on public.karatou_learner_progress
  for select
  to authenticated
  using (
    user_id = (select auth.uid())
    or (select app_private.karatou_is_platform_admin())
    or exists (
      select 1
      from public.karatou_enterprise_members m
      where m.user_id = public.karatou_learner_progress.user_id
        and (select app_private.karatou_is_org_admin(m.organization_id))
    )
  );
