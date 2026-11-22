-- Sprint 04: sponsor (organization) logos for certificates.
-- Adds organizations.logo_url and a public Storage bucket that only platform
-- admins can write to. The certificate PDF embeds the sponsor logo top-right.

alter table public.karatou_organizations add column if not exists logo_url text;

insert into storage.buckets (id, name, public)
values ('org-logos', 'org-logos', true)
on conflict (id) do nothing;

drop policy if exists "org logos public read" on storage.objects;
create policy "org logos public read" on storage.objects
  for select using (bucket_id = 'org-logos');

drop policy if exists "org logos platform admin insert" on storage.objects;
create policy "org logos platform admin insert" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'org-logos' and (select app_private.karatou_is_platform_admin()));

drop policy if exists "org logos platform admin update" on storage.objects;
create policy "org logos platform admin update" on storage.objects
  for update to authenticated
  using (bucket_id = 'org-logos' and (select app_private.karatou_is_platform_admin()))
  with check (bucket_id = 'org-logos' and (select app_private.karatou_is_platform_admin()));

drop policy if exists "org logos platform admin delete" on storage.objects;
create policy "org logos platform admin delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'org-logos' and (select app_private.karatou_is_platform_admin()));
