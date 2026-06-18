-- S01-04 bourse redemption flow:
-- Let learners redeem one pending bourse code without exposing enterprise data.

alter table public.karatou_scholarships
add column if not exists claimed_by_user_id uuid references auth.users(id) on delete set null,
add column if not exists claimed_by_email text,
add column if not exists claimed_at timestamptz,
add column if not exists expires_at_date date not null default date '2026-12-31';

alter table public.karatou_scholarships
drop constraint if exists karatou_scholarships_status_check;

alter table public.karatou_scholarships
add constraint karatou_scholarships_status_check
check (status in ('claimed', 'pending', 'expired'));

update public.karatou_scholarships
set expires_at_date = date '2026-12-31'
where expires_at_date is null;

alter table public.karatou_enterprise_members
add column if not exists user_id uuid references auth.users(id) on delete set null;

create unique index if not exists karatou_enterprise_members_org_user_unique
on public.karatou_enterprise_members(organization_id, user_id)
where user_id is not null;

create index if not exists karatou_enterprise_members_user_id_idx
on public.karatou_enterprise_members(user_id);

create index if not exists karatou_scholarships_code_status_idx
on public.karatou_scholarships(upper(code), status);

create index if not exists karatou_scholarships_claimed_by_user_idx
on public.karatou_scholarships(claimed_by_user_id);

create index if not exists karatou_scholarships_claimed_by_email_idx
on public.karatou_scholarships(lower(claimed_by_email));

create or replace function app_private.karatou_is_org_admin(org_id text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select (select app_private.karatou_is_platform_admin())
    or exists (
      select 1
      from public.karatou_org_memberships
      where karatou_org_memberships.organization_id = org_id
        and karatou_org_memberships.status = 'active'
        and karatou_org_memberships.role = 'enterprise_admin'
        and (
          karatou_org_memberships.user_id = (select auth.uid())
          or lower(karatou_org_memberships.email) = lower(coalesce((select auth.jwt()) ->> 'email', ''))
        )
    );
$$;

revoke all on function app_private.karatou_is_org_admin(text) from public, anon;
grant execute on function app_private.karatou_is_org_admin(text) to authenticated;

drop policy if exists "Karatou users can read org memberships" on public.karatou_org_memberships;
create policy "Karatou users can read org memberships"
on public.karatou_org_memberships
for select
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
  or user_id = (select auth.uid())
  or lower(email) = lower(coalesce((select auth.jwt()) ->> 'email', ''))
);

drop policy if exists "Karatou platform admins can insert org memberships" on public.karatou_org_memberships;
drop policy if exists "Karatou admins can insert org memberships" on public.karatou_org_memberships;
create policy "Karatou admins can insert org memberships"
on public.karatou_org_memberships
for insert
to authenticated
with check (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
);

drop policy if exists "Karatou platform admins can update org memberships" on public.karatou_org_memberships;
drop policy if exists "Karatou admins can update org memberships" on public.karatou_org_memberships;
create policy "Karatou admins can update org memberships"
on public.karatou_org_memberships
for update
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
)
with check (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
);

drop policy if exists "Karatou platform admins can delete org memberships" on public.karatou_org_memberships;
drop policy if exists "Karatou admins can delete org memberships" on public.karatou_org_memberships;
create policy "Karatou admins can delete org memberships"
on public.karatou_org_memberships
for delete
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
);

drop policy if exists "Karatou admins can manage enterprise members" on public.karatou_enterprise_members;
create policy "Karatou admins can manage enterprise members"
on public.karatou_enterprise_members
for all
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
)
with check (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
);

drop policy if exists "Karatou admins can manage scholarships" on public.karatou_scholarships;
create policy "Karatou admins can manage scholarships"
on public.karatou_scholarships
for all
to authenticated
using (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
)
with check (
  (select app_private.karatou_is_platform_admin())
  or (select app_private.karatou_is_org_admin(organization_id))
);

create or replace function app_private.karatou_redeem_scholarship(input_code text)
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
  normalized_code text := upper(trim(coalesce(input_code, '')));
  current_user_id uuid := (select auth.uid());
  current_email text := lower(coalesce((select auth.jwt()) ->> 'email', ''));
  current_name text;
  found_scholarship record;
  claimed_scholarship record;
begin
  if current_user_id is null then
    return query select 'auth_required', 'Sign in to redeem this bourse.', null::text, null::text, normalized_code;
    return;
  end if;

  if normalized_code = '' then
    return query select 'invalid', 'Enter a valid bourse code.', null::text, null::text, normalized_code;
    return;
  end if;

  select coalesce(nullif(profiles.full_name, ''), current_email, 'Karatou Learner')
  into current_name
  from public.profiles
  where profiles.id = current_user_id;

  current_name := coalesce(current_name, current_email, 'Karatou Learner');

  select
    scholarships.*,
    organizations.name as org_name
  into found_scholarship
  from public.karatou_scholarships as scholarships
  join public.karatou_organizations as organizations
    on organizations.id = scholarships.organization_id
  where upper(scholarships.code) = normalized_code
  limit 1;

  if not found then
    return query select 'invalid', 'This bourse code was not found.', null::text, null::text, normalized_code;
    return;
  end if;

  if found_scholarship.status = 'claimed' then
    if found_scholarship.claimed_by_user_id = current_user_id
      or lower(coalesce(found_scholarship.claimed_by_email, '')) = current_email then
      return query select 'already_claimed', 'This bourse is already active on your account.', found_scholarship.organization_id, found_scholarship.org_name, found_scholarship.code;
      return;
    end if;

    return query select 'claimed', 'This bourse has already been claimed.', found_scholarship.organization_id, found_scholarship.org_name, found_scholarship.code;
    return;
  end if;

  if found_scholarship.status = 'expired' or found_scholarship.expires_at_date < current_date then
    update public.karatou_scholarships
    set status = 'expired'
    where id = found_scholarship.id
      and status = 'pending';

    return query select 'expired', 'This bourse code has expired.', found_scholarship.organization_id, found_scholarship.org_name, found_scholarship.code;
    return;
  end if;

  update public.karatou_scholarships
  set
    status = 'claimed',
    claimed_by = current_name,
    claimed_by_user_id = current_user_id,
    claimed_by_email = current_email,
    claimed_at = now()
  where id = found_scholarship.id
    and status = 'pending'
    and expires_at_date >= current_date
  returning * into claimed_scholarship;

  if not found then
    return query select 'claimed', 'This bourse has already been claimed.', found_scholarship.organization_id, found_scholarship.org_name, found_scholarship.code;
    return;
  end if;

  insert into public.karatou_org_memberships (organization_id, user_id, email, role, status, created_by)
  values (found_scholarship.organization_id, current_user_id, current_email, 'learner', 'active', current_user_id)
  on conflict (organization_id, email) do update set
    user_id = coalesce(public.karatou_org_memberships.user_id, excluded.user_id),
    role = case
      when public.karatou_org_memberships.role = 'enterprise_admin' then public.karatou_org_memberships.role
      else excluded.role
    end,
    status = 'active',
    updated_at = now();

  insert into public.karatou_enterprise_members (
    organization_id,
    user_id,
    name,
    email,
    role,
    progress,
    certificates,
    last_activity,
    status,
    created_by
  )
  values (
    found_scholarship.organization_id,
    current_user_id,
    current_name,
    current_email,
    'learner',
    0,
    0,
    'Bourse activee aujourd''hui',
    'not_started',
    current_user_id
  )
  on conflict (organization_id, email) do update set
    user_id = coalesce(public.karatou_enterprise_members.user_id, excluded.user_id),
    name = excluded.name,
    role = case
      when public.karatou_enterprise_members.role = 'enterprise_admin' then public.karatou_enterprise_members.role
      else excluded.role
    end,
    last_activity = excluded.last_activity,
    status = case
      when public.karatou_enterprise_members.status = 'certified' then public.karatou_enterprise_members.status
      else public.karatou_enterprise_members.status
    end,
    updated_at = now();

  return query select 'redeemed', 'Bourse redeemed successfully.', found_scholarship.organization_id, found_scholarship.org_name, found_scholarship.code;
end;
$$;

revoke all on function app_private.karatou_redeem_scholarship(text) from public, anon;
grant execute on function app_private.karatou_redeem_scholarship(text) to authenticated;

create or replace function public.karatou_redeem_scholarship(input_code text)
returns table (
  result text,
  message text,
  organization_id text,
  organization_name text,
  scholarship_code text
)
language sql
security invoker
set search_path = ''
as $$
  select * from app_private.karatou_redeem_scholarship(input_code);
$$;

revoke all on function public.karatou_redeem_scholarship(text) from public, anon;
grant execute on function public.karatou_redeem_scholarship(text) to authenticated;
