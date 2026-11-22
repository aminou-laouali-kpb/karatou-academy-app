-- Public impact dashboard [KPB-27].
-- (1) Adds profiles.region (the country column already exists; gender too).
-- (2) Exposes a SECURITY DEFINER RPC that returns aggregate counts only —
--     no PII leaks (the underlying tables remain RLS-protected). Anon and
--     authenticated callers can read the public KPIs to render the landing
--     "Our impact" section, the admin scorecard, and any future dashboard.

-- ---------------------------------------------------------------------------
-- (1) Region column on profiles. Nullable + free-text so we can adopt admin
--     subdivisions of any country (e.g. Niger's 8 regions: Niamey, Tillabéri,
--     Tahoua, Maradi, Zinder, Diffa, Agadez, Dosso).
-- ---------------------------------------------------------------------------
alter table public.profiles
  add column if not exists region text;

-- ---------------------------------------------------------------------------
-- (2) Public impact RPC. Returns one row containing aggregate KPIs + JSON
--     breakdowns by region / gender / country. All counts are computed in a
--     SECURITY DEFINER context that bypasses RLS, but the function ITSELF
--     never returns identifiable rows — just counts.
-- ---------------------------------------------------------------------------
create or replace function public.karatou_public_impact_stats()
returns table (
  learners        bigint,
  certificates    bigint,
  countries       bigint,
  regions         bigint,
  by_region       jsonb,
  by_gender       jsonb,
  by_country      jsonb
)
language sql
security definer
stable
set search_path = ''
as $$
  with
    learner_count as (
      -- An "active learner" = anyone with at least one progress row OR a real
      -- profile (excluding service-role entries that never enrol).
      select count(distinct p.id)::bigint as v
      from public.profiles p
      where coalesce(p.role, 'learner') = 'learner'
    ),
    cert_count as (
      select count(*)::bigint as v
      from public.karatou_certificates
      where status = 'active'
    ),
    country_count as (
      select count(distinct nullif(trim(country), ''))::bigint as v
      from public.profiles
      where coalesce(role, 'learner') = 'learner'
    ),
    region_count as (
      select count(distinct nullif(trim(region), ''))::bigint as v
      from public.profiles
      where coalesce(role, 'learner') = 'learner'
    ),
    region_breakdown as (
      select coalesce(jsonb_object_agg(label, n order by label), '{}'::jsonb) as v
      from (
        select trim(region) as label, count(*)::int as n
        from public.profiles
        where coalesce(role, 'learner') = 'learner'
          and nullif(trim(region), '') is not null
        group by 1
      ) t
    ),
    gender_breakdown as (
      select coalesce(jsonb_object_agg(label, n order by label), '{}'::jsonb) as v
      from (
        select trim(gender) as label, count(*)::int as n
        from public.profiles
        where coalesce(role, 'learner') = 'learner'
          and nullif(trim(gender), '') is not null
        group by 1
      ) t
    ),
    country_breakdown as (
      select coalesce(jsonb_object_agg(label, n order by label), '{}'::jsonb) as v
      from (
        select upper(trim(country)) as label, count(*)::int as n
        from public.profiles
        where coalesce(role, 'learner') = 'learner'
          and nullif(trim(country), '') is not null
        group by 1
      ) t
    )
  select
    (select v from learner_count),
    (select v from cert_count),
    (select v from country_count),
    (select v from region_count),
    (select v from region_breakdown),
    (select v from gender_breakdown),
    (select v from country_breakdown);
$$;

-- Anon + authenticated may both read the aggregates (it's the landing page).
revoke all on function public.karatou_public_impact_stats() from public;
grant execute on function public.karatou_public_impact_stats() to anon, authenticated;
