-- S07 — `public.profiles.role` cesse d'être écrivable par son propriétaire.
--
-- Constat (vérifié en production le 2026-09-07) : `public.profiles` porte encore
-- les grants « GRANT ALL » hérités du schéma Next.js d'origine, et sa policy
-- « Users can update own profile » n'a pas de WITH CHECK. Un apprenant connecté
-- pouvait donc exécuter
--     update public.profiles set role = 'admin' where id = auth.uid();
-- et se retrouver avec l'interface d'administration.
--
-- Portée réelle de la faille : les données `karatou_*` n'étaient PAS exposées —
-- `app_private.karatou_is_platform_admin()` lit le rôle applicatif dans le JWT
-- (`app_metadata`), jamais dans `profiles`. La seule policy qui accorde un droit
-- sur la foi de `profiles.role` est « Org admins and super-admins can manage
-- scholarships » sur la table héritée `public.scholarships`, aujourd'hui vide.
-- C'était donc une escalade d'interface, pas une fuite de données — réelle
-- malgré tout, et le correctif applicatif (le rôle ne vient plus que du JWT) ne
-- ferme que la porte côté navigateur. Celle-ci ferme la porte côté base.
--
-- Aucun écrivain légitime n'est affecté :
--   * le trigger `app_private.create_karatou_profile_for_new_user` est
--     SECURITY DEFINER et n'écrit que (id, full_name, country) ;
--   * `admin-provision-enterprise-admin` et les scripts d'amorçage passent par
--     `service_role`, dont les privilèges ne sont pas touchés ;
--   * la seule écriture navigateur est l'upsert d'inscription
--     (id, full_name, country, region, gender), toutes colonnes re-accordées.

-- 1. Retire les grants de masse hérités. Ils couvraient aussi DELETE (qu'aucune
--    policy n'autorise) et TRUNCATE — qui, lui, n'est pas soumis à la RLS.
revoke insert, update, delete, truncate on public.profiles from anon;
revoke insert, update, delete, truncate on public.profiles from authenticated;

-- 2. Rend exactement les colonnes qu'une personne peut renseigner sur elle-même.
--    `role` et `stripe_customer_id` appartiennent au serveur ; `created_at` et
--    `updated_at` à la base.
grant insert (
  id, full_name, country, city, region, gender, phone, age_range, avatar_url, preferred_language
) on public.profiles to authenticated;

grant update (
  id, full_name, country, city, region, gender, phone, age_range, avatar_url, preferred_language
) on public.profiles to authenticated;

-- 3. La policy UPDATE contrôlait la ligne visée (USING) mais pas la ligne
--    produite (WITH CHECK). `id` reste dans le grant ci-dessus parce que
--    PostgREST le renvoie dans le SET d'un upsert ; ce WITH CHECK est ce qui
--    empêche de le réécrire vers l'identifiant d'autrui.
alter policy "Users can update own profile" on public.profiles
  with check ((select auth.uid()) = id);

comment on column public.profiles.role is
  'Rôle historique du schéma Next.js. Lecture seule pour anon et authenticated depuis S07 : le rôle applicatif fait autorité dans le JWT (app_metadata), pas ici.';
