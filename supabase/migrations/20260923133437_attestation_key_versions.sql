-- Rapatrié depuis l'historique de production (appliqué le 23/09/2026, absent du dépôt).
-- Existing server-issued attestations remain authoritative by their exact
-- archived payload, even when their original signing key is rotated or lost.
-- New key versions are explicitly marked so verification never guesses a key.
alter table public.karatou_attestations
  add column if not exists signing_key_id text not null default 'archive-v1';

alter table public.karatou_attestations
  add constraint karatou_attestations_signing_key_id_check
  check (signing_key_id in ('archive-v1', 'hmac-v2'));

create index if not exists karatou_attestations_signing_key_id_idx
  on public.karatou_attestations (signing_key_id);
