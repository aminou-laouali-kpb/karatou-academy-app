-- Newsletter : écritures anonymes encadrées (audit du 22/11/2026, S7).
-- N'importe qui pouvait insérer n'importe quoi (longueur, format, source,
-- téléphone) avec la clé publique. Les contraintes valent pour les nouvelles
-- lignes (NOT VALID : une adresse existante est mal formée, elle n'est pas
-- modifiée ici). Seul un platform admin peut enregistrer une autre source que
-- le formulaire public, ou un numéro de téléphone.

alter table public.newsletter_subscribers drop constraint if exists newsletter_subscribers_name_length;
alter table public.newsletter_subscribers
  add constraint newsletter_subscribers_name_length check (char_length(name) between 1 and 120) not valid;

alter table public.newsletter_subscribers drop constraint if exists newsletter_subscribers_email_format;
alter table public.newsletter_subscribers
  add constraint newsletter_subscribers_email_format
  check (char_length(email) <= 254 and email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$') not valid;

alter table public.newsletter_subscribers drop constraint if exists newsletter_subscribers_phone_length;
alter table public.newsletter_subscribers
  add constraint newsletter_subscribers_phone_length check (phone is null or char_length(phone) <= 32) not valid;

drop policy if exists anyone_can_subscribe on public.newsletter_subscribers;
create policy anyone_can_subscribe on public.newsletter_subscribers
  for insert to anon, authenticated
  with check ((source = 'popup' and phone is null) or (select app_private.karatou_is_platform_admin()));
