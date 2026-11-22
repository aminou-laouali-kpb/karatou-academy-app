-- Rapatrié depuis l'historique de production (appliqué le 23/09/2026, absent du dépôt).
-- Official exports from the old browser issuer have no signing key available.
-- Keep them in a separate, allowlisted archive: only exact QR payloads in a
-- reviewed export can be verified, and they can still be revoked.
create table if not exists public.karatou_legacy_attestations (
  id text primary key check (id ~ '^KA-ATT-[0-9]{4}-[A-F0-9]{12}$'),
  recipient_name text not null check (char_length(recipient_name) between 1 and 240),
  issued_at date not null,
  expires_at date not null,
  signature text not null check (signature ~ '^[a-f0-9]{64}$'),
  source_sha256 text not null check (source_sha256 ~ '^[a-f0-9]{64}$'),
  imported_at timestamptz not null default now(),
  status text not null default 'active' check (status in ('active', 'revoked')),
  revoked_at timestamptz,
  revoked_by uuid references auth.users (id) on delete restrict,
  revocation_reason text,
  check (expires_at >= issued_at),
  check ((status = 'active' and revoked_at is null and revoked_by is null)
    or (status = 'revoked' and revoked_at is not null and revoked_by is not null))
);

create index if not exists karatou_legacy_attestations_name_idx
  on public.karatou_legacy_attestations (lower(recipient_name));
alter table public.karatou_legacy_attestations enable row level security;
-- No browser-facing policy: only the service-role Edge Functions can read/write.
