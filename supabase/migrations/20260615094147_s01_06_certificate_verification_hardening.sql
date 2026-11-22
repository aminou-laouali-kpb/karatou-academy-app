-- S01-06 certificate verification hardening:
-- - keep certificate UIDs unique even if casing differs
-- - mark old active certificates as expired
-- - allow public verifiers to see revoked status instead of a misleading
--   "not found" result

update public.karatou_certificates
set status = 'expired'
where status = 'active'
  and expires_at < now();

create unique index if not exists karatou_certificates_uid_upper_unique
on public.karatou_certificates (upper(uid));

drop policy if exists "Karatou users can read own certificates" on public.karatou_certificates;
create policy "Karatou users can read own certificates"
on public.karatou_certificates
for select
to authenticated
using (
  user_id = (select auth.uid())
  or status in ('active', 'expired', 'revoked')
  or (select app_private.karatou_can_manage_enterprise())
);

drop policy if exists "Karatou public can verify certificates" on public.karatou_certificates;
create policy "Karatou public can verify certificates"
on public.karatou_certificates
for select
to anon
using (status in ('active', 'expired', 'revoked'));
