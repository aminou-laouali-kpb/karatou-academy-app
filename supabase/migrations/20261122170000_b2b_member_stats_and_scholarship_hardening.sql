-- B2B : tableau de bord entreprise réel et durcissement des bourses
-- (audit du 22/11/2026 : U2, S3, S6).
--
-- ⚠️ À appliquer EN MÊME TEMPS que le déploiement du front correspondant
-- (`npm run supabase:push` puis republication Replit) : les anciens builds
-- écrivent directement karatou_scholarships et envoient user_id dans
-- karatou_enterprise_members, ce que cette migration interdit.

-- ---------------------------------------------------------------------------
-- U2. Statistiques réelles des membres d'une organisation.
-- Les colonnes progress / certificates / status de karatou_enterprise_members
-- n'étaient jamais mises à jour après le rachat d'une bourse : un sponsor
-- voyait 0 % pour toujours. Elles sont désormais calculées à la lecture.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_org_member_stats(input_organization_id text)
returns table (
  member_id text,
  progress integer,
  certificates integer,
  certificate_uid text,
  status text,
  last_activity_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  with allowed as (
    select (select app_private.karatou_is_platform_admin())
        or (select app_private.karatou_is_org_admin(input_organization_id)) as ok
  ),
  members as (
    select m.id, m.user_id
    from public.karatou_enterprise_members m, allowed
    where allowed.ok and m.organization_id = input_organization_id
  ),
  published as (
    select mo.slug, c.id as course_id
    from public.karatou_courses c
    join public.karatou_modules mo on mo.id = c.module_id
    where c.status = 'published' and mo.status = 'published'
  ),
  module_totals as (
    select slug, count(*) as total from published group by slug
  ),
  done as (
    select lp.user_id, lp.module_slug, count(distinct lp.course_id) as completed, max(lp.completed_at) as last_at
    from public.karatou_learner_progress lp
    join published p on p.slug = lp.module_slug and p.course_id = lp.course_id
    where lp.user_id in (select user_id from members where user_id is not null)
    group by lp.user_id, lp.module_slug
  ),
  best as (
    -- Progress toward the next certificate: the most advanced module.
    select d.user_id,
           max(round(100.0 * d.completed / t.total))::integer as best_progress,
           max(d.last_at) as last_at,
           sum(d.completed) as total_completed
    from done d
    join module_totals t on t.slug = d.module_slug
    group by d.user_id
  ),
  certs as (
    select c.user_id,
           count(*) filter (where c.status = 'active') as active_count,
           (array_agg(c.uid order by c.issued_at desc) filter (where c.status = 'active'))[1] as latest_uid,
           max(c.issued_at) as last_at
    from public.karatou_certificates c
    where c.user_id in (select user_id from members where user_id is not null)
    group by c.user_id
  )
  select
    m.id,
    case when coalesce(ce.active_count, 0) > 0 then 100 else coalesce(b.best_progress, 0) end,
    coalesce(ce.active_count, 0)::integer,
    ce.latest_uid,
    case
      when coalesce(ce.active_count, 0) > 0 then 'certified'
      when coalesce(b.total_completed, 0) > 0 then 'in_progress'
      else 'not_started'
    end,
    greatest(b.last_at, ce.last_at)
  from members m
  left join best b on b.user_id = m.user_id
  left join certs ce on ce.user_id = m.user_id;
$$;

revoke all on function public.karatou_org_member_stats(text) from public, anon;
grant execute on function public.karatou_org_member_stats(text) to authenticated;

-- ---------------------------------------------------------------------------
-- S3. Un admin d'organisation pouvait rattacher le user_id de n'importe quel
-- apprenant à un « membre » de son organisation, et lire ainsi sa progression
-- et ses certificats (les politiques de lecture passent par ce user_id).
-- user_id n'est plus posé que par la RPC de rachat (SECURITY DEFINER) ou la
-- clé de service. Les adhésions ne s'écrivent plus du tout depuis le client.
-- ---------------------------------------------------------------------------
revoke insert, update on public.karatou_enterprise_members from authenticated;
grant insert (id, organization_id, name, email, role, progress, certificates, certificate_uid, last_activity, status)
  on public.karatou_enterprise_members to authenticated;
-- An upsert's ON CONFLICT DO UPDATE sets every column of its payload.
grant update (id, organization_id, name, email, role, progress, certificates, certificate_uid, last_activity, status)
  on public.karatou_enterprise_members to authenticated;

revoke insert, update on public.karatou_org_memberships from authenticated;

-- La vérification publique renvoyait l'identifiant interne du titulaire, ce
-- qui alimentait le contournement ci-dessus. Le type de retour change : drop.
drop function if exists public.karatou_verify_certificate(text);
create function public.karatou_verify_certificate(input_uid text)
returns table (
  id text,
  uid text,
  user_name text,
  module_slug text,
  module_name text,
  issued_at timestamptz,
  expires_at timestamptz,
  status text
)
language sql
stable
security definer
set search_path = ''
as $$
  select c.id, c.uid, c.user_name, c.module_slug, c.module_name, c.issued_at, c.expires_at,
         case when c.status = 'active' and c.expires_at < now() then 'expired' else c.status end
  from public.karatou_certificates c
  where upper(c.uid) = upper(trim(input_uid))
  limit 1;
$$;
revoke all on function public.karatou_verify_certificate(text) from public;
grant execute on function public.karatou_verify_certificate(text) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- S6. Codes de bourse générés par le serveur, dans la limite des places.
-- Le navigateur fabriquait le code (Math.random) et l'écrivait directement.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_create_scholarship(input_organization_id text)
returns setof public.karatou_scholarships
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_org record;
  v_used integer;
  v_prefix text;
begin
  if (select auth.uid()) is null then
    raise exception 'auth required' using errcode = '28000';
  end if;
  if not ((select app_private.karatou_is_platform_admin())
          or (select app_private.karatou_is_org_admin(input_organization_id))) then
    raise exception 'forbidden' using errcode = '42501';
  end if;

  select o.id, o.name, o.seats_total into v_org
  from public.karatou_organizations o
  where o.id = input_organization_id
  for update;
  if not found then
    raise exception 'organization not found' using errcode = 'P0002';
  end if;

  select count(*) into v_used
  from public.karatou_scholarships s
  where s.organization_id = input_organization_id and s.status in ('pending', 'claimed');
  if coalesce(v_org.seats_total, 0) > 0 and v_used >= v_org.seats_total then
    raise exception 'no seats left (% / %)', v_used, v_org.seats_total using errcode = 'P0001';
  end if;

  v_prefix := coalesce(nullif(left(upper(regexp_replace(v_org.name, '[^a-zA-Z0-9]', '', 'g')), 6), ''), 'ORG');

  return query
    with inserted as (
    insert into public.karatou_scholarships (id, organization_id, code, status, claimed_by, created_by)
    values (
      'scholarship-' || gen_random_uuid()::text,
      input_organization_id,
      'KA-SCH-' || v_prefix || '-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 12)),
      'pending',
      null,
      (select auth.uid())
    )
    returning *
    )
    select * from inserted;
end;
$$;
revoke all on function public.karatou_create_scholarship(text) from public, anon;
grant execute on function public.karatou_create_scholarship(text) to authenticated;

revoke insert, update on public.karatou_scholarships from authenticated;

-- Rachat : au plus 10 échecs par heure et par compte, et plus de nom
-- d'organisation révélé pour un code qui n'est pas le sien.
create table if not exists app_private.karatou_redeem_attempts (
  user_id uuid not null,
  attempted_at timestamptz not null default now(),
  result text not null
);
create index if not exists karatou_redeem_attempts_user_time_idx
  on app_private.karatou_redeem_attempts (user_id, attempted_at desc);

create or replace function public.karatou_redeem_scholarship(input_code text)
returns table (
  result text,
  message text,
  organization_id text,
  organization_name text,
  scholarship_code text
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_failures integer;
  v_row record;
begin
  if v_user is not null then
    select count(*) into v_failures
    from app_private.karatou_redeem_attempts a
    where a.user_id = v_user
      and a.attempted_at > now() - interval '1 hour'
      and a.result not in ('redeemed', 'already_claimed');
    if v_failures >= 10 then
      return query select 'rate_limited'::text, 'Too many attempts. Try again in an hour.'::text,
                          null::text, null::text, upper(trim(coalesce(input_code, '')));
      return;
    end if;
  end if;

  for v_row in select * from app_private.karatou_redeem_scholarship(input_code) loop
    if v_user is not null then
      insert into app_private.karatou_redeem_attempts (user_id, result) values (v_user, v_row.result);
      delete from app_private.karatou_redeem_attempts
      where user_id = v_user and attempted_at < now() - interval '1 day';
    end if;
    if v_row.result in ('redeemed', 'already_claimed') then
      return query select v_row.result, v_row.message, v_row.organization_id, v_row.organization_name, v_row.scholarship_code;
    else
      return query select v_row.result, v_row.message, null::text, null::text, v_row.scholarship_code;
    end if;
  end loop;
end;
$$;
revoke all on function public.karatou_redeem_scholarship(text) from public, anon;
grant execute on function public.karatou_redeem_scholarship(text) to authenticated;
