-- Newsletter subscribers (ported from the Replit production-UI work).
-- Public visitors subscribe via the landing popup; certified participants are
-- added by the admin attestation flow. Only platform admins can read/manage.
-- The client (newsletterService) mirrors to localStorage and best-effort upserts
-- here; if this table/RLS is absent the feature degrades to localStorage only.

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  phone text,
  source text not null default 'popup' check (source in ('attestation', 'popup', 'manual')),
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

-- Public signup: anyone (anon or authenticated) may insert a subscription.
-- Insert-only; the client normalises email to lowercase and upserts with
-- on-conflict-do-nothing, so no update path is exposed.
drop policy if exists "newsletter public subscribe" on public.newsletter_subscribers;
create policy "newsletter public subscribe" on public.newsletter_subscribers
  for insert to anon, authenticated
  with check (true);

-- Only platform admins can read the subscriber list.
drop policy if exists "newsletter admin read" on public.newsletter_subscribers;
create policy "newsletter admin read" on public.newsletter_subscribers
  for select to authenticated
  using ((select app_private.karatou_is_platform_admin()));

-- Only platform admins can remove subscribers.
drop policy if exists "newsletter admin delete" on public.newsletter_subscribers;
create policy "newsletter admin delete" on public.newsletter_subscribers
  for delete to authenticated
  using ((select app_private.karatou_is_platform_admin()));
