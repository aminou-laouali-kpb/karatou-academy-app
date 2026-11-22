-- Rapatrié depuis l'historique de production (appliqué le 23/09/2026, absent du dépôt).
-- Activation is durable and serialized with issuance. Never infer the active
-- signer from whether a certificate of a given version happens to exist.
create table public.karatou_attestation_signing_policy (
  id boolean primary key default true check (id),
  active_key_id text not null default 'archive-v1'
    check (active_key_id in ('archive-v1', 'hmac-v2'))
);
insert into public.karatou_attestation_signing_policy (id, active_key_id)
values (true, 'archive-v1');
alter table public.karatou_attestation_signing_policy enable row level security;
revoke all on public.karatou_attestation_signing_policy from public, anon, authenticated;

create function public.karatou_enforce_attestation_signing_policy()
returns trigger language plpgsql security invoker as $$
declare active_version text;
begin
  select active_key_id into active_version
  from public.karatou_attestation_signing_policy where id = true for share;
  if active_version is null or new.signing_key_id <> active_version then
    raise exception 'attestation signing key version is not active';
  end if;
  return new;
end;
$$;
create trigger karatou_attestation_signing_policy_guard
before insert on public.karatou_attestations
for each row execute function public.karatou_enforce_attestation_signing_policy();

-- A single SQL statement sees a consistent snapshot of both registries.
-- Only the service role may call it; the result contains recipient PII.
create function public.karatou_attestation_registry_snapshot()
returns jsonb language sql stable security invoker
as $$
  select jsonb_build_object(
    'format', 1,
    'karatou_attestations', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.id)
       from public.karatou_attestations a), '[]'::jsonb),
    'karatou_legacy_attestations', coalesce(
      (select jsonb_agg(to_jsonb(l) order by l.id)
       from public.karatou_legacy_attestations l), '[]'::jsonb)
  );
$$;
revoke all on function public.karatou_attestation_registry_snapshot() from public, anon, authenticated;
grant execute on function public.karatou_attestation_registry_snapshot() to service_role;
