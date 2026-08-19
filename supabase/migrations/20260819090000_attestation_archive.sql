-- Issued mass attestations are an authoritative server-side register. The
-- client only receives a signed payload after this insert succeeds.
create table if not exists public.karatou_attestations (
  id text primary key check (id ~ '^KA-ATT-[0-9]{4}-[A-F0-9]{10}$'),
  recipient_name text not null check (char_length(recipient_name) between 1 and 240),
  issued_at date not null,
  expires_at date not null check (expires_at >= issued_at),
  signature text not null check (signature ~ '^[a-f0-9]{64}$'),
  issued_by uuid not null references auth.users(id) on delete restrict,
  issued_on timestamptz not null default now(),
  status text not null default 'active' check (status in ('active', 'expired', 'revoked')),
  revoked_at timestamptz,
  revoked_by uuid references auth.users(id) on delete restrict,
  revocation_reason text,
  check (
    (status <> 'revoked' and revoked_at is null and revoked_by is null)
    or (status = 'revoked' and revoked_at is not null and revoked_by is not null)
  )
);

create index if not exists karatou_attestations_issued_on_idx
  on public.karatou_attestations (issued_on desc);
create index if not exists karatou_attestations_recipient_name_idx
  on public.karatou_attestations (lower(recipient_name));
create index if not exists karatou_attestations_status_idx
  on public.karatou_attestations (status);

alter table public.karatou_attestations enable row level security;
revoke all on table public.karatou_attestations from anon, authenticated;