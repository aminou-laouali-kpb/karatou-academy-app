-- Attestation archive (registry of every bulk attestation signed by an admin).
--
-- This migration back-fills into the repository a table that was created
-- directly on the production project on 2026-08-19 (recorded there as
-- `20260819164745_attestation_archive`). It is written idempotently so that
-- `supabase db push` is a no-op on production and creates the table on a fresh
-- project.
--
-- Why the table exists: attestations used to be pure HMAC payloads. A signature
-- proved the document had been signed by the server, but nothing recorded that
-- it had actually been issued, and nothing could withdraw it. The archive makes
-- verification authoritative (`attestation-verify` requires a matching row) and
-- makes revocation possible (`attestation-sign`, action `revoke`).
--
-- Writes happen only through those Edge Functions, with the service-role key.
-- No client-facing insert/update/delete policy exists, so a revocation (or an
-- issuance) can never be forged from a browser.

create table if not exists public.karatou_attestations (
  id text primary key check (id ~ '^KA-ATT-[0-9]{4}-[A-F0-9]{10}$'),
  recipient_name text not null check (char_length(recipient_name) between 1 and 240),
  issued_at date not null,
  expires_at date not null,
  signature text not null check (signature ~ '^[a-f0-9]{64}$'),
  issued_by uuid not null references auth.users (id) on delete restrict,
  issued_on timestamptz not null default now(),
  status text not null default 'active' check (status in ('active', 'expired', 'revoked')),
  revoked_at timestamptz,
  revoked_by uuid references auth.users (id) on delete restrict,
  revocation_reason text,
  check (expires_at >= issued_at),
  check (
    (status <> 'revoked' and revoked_at is null and revoked_by is null)
    or (status = 'revoked' and revoked_at is not null and revoked_by is not null)
  )
);

comment on table public.karatou_attestations is
  'Authoritative registry of signed attestations. Written only by the attestation-sign / attestation-verify Edge Functions (service role); read by platform admins.';

create index if not exists karatou_attestations_issued_on_idx
  on public.karatou_attestations (issued_on desc);
create index if not exists karatou_attestations_recipient_name_idx
  on public.karatou_attestations (lower(recipient_name));
create index if not exists karatou_attestations_status_idx
  on public.karatou_attestations (status);

alter table public.karatou_attestations enable row level security;

-- The read policy for platform admins is added by the launch-hardening
-- migration that follows (it also clears the "RLS enabled, no policy" advisor
-- notice on the production project, where this table predates the repository).
