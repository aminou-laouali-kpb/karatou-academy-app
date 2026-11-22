-- S01-04 fix:
-- Avoid the reserved/current role name when checking application roles.

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
#variable_conflict use_column
declare
  normalized_code text := upper(trim(coalesce(input_code, '')));
  current_user_id uuid := (select auth.uid());
  current_email text := lower(coalesce((select auth.jwt()) ->> 'email', ''));
  request_app_role text := (select app_private.karatou_current_app_role());
  current_name text;
  found_scholarship record;
  claimed_scholarship record;
begin
  if current_user_id is null then
    return query select 'auth_required', 'Sign in to redeem this bourse.', null::text, null::text, normalized_code;
    return;
  end if;

  if request_app_role in ('platform_admin', 'enterprise_admin', 'admin', 'org_admin') then
    return query select 'role_not_allowed', 'Use a learner account to redeem this bourse.', null::text, null::text, normalized_code;
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
    updated_at = now();

  return query select 'redeemed', 'Bourse redeemed successfully.', found_scholarship.organization_id, found_scholarship.org_name, found_scholarship.code;
end;
$$;
