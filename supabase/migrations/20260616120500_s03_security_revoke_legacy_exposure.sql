-- Sprint 03 security: neutralize legacy (archived Next.js schema) objects that
-- Supabase advisors flagged as exposed. These views/functions reference the
-- legacy `certificates`/`profiles`/`org_members`/`user_progress` tables and are
-- NOT used by this (karatou_*) app. Revoking public access closes the exposure
-- without dropping the legacy objects (triggers still fire as the table owner).

-- SECURITY DEFINER views exposing auth.users / PII to anon.
revoke all on public.certificate_status_view from anon, authenticated;
revoke all on public.org_member_progress_view from anon, authenticated;

-- Trigger / maintenance functions should not be callable as public RPCs.
revoke all on function public.handle_new_user() from public, anon, authenticated;
revoke all on function public.update_expired_certificates() from public, anon, authenticated;
