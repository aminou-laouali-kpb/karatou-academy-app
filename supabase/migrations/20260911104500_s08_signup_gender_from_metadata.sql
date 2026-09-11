-- s08 — le genre déclaré à l'inscription atteint enfin `public.profiles`.
--
-- Contexte : la confirmation d'email reste ACTIVE (décision du 2026-09-11).
-- Tant que l'adresse n'est pas confirmée, `signUp` ne rend aucune session, et
-- l'upsert de profil côté application — qui exige une session — ne s'exécute
-- jamais. Ce déclencheur est donc le SEUL écrivain des données démographiques,
-- et il ne copiait que `full_name` et `country`.
--
-- Mesuré en production avant cette migration : 9 profils, 0 avec un genre,
-- alors que deux comptes déclaraient bien `gender` dans leurs métadonnées. La
-- valeur était saisie, transmise, puis perdue à la dernière étape.
--
-- La valeur est validée AVANT insertion, contre la même liste que la contrainte
-- `profiles_gender_check` : une valeur hors liste devient NULL au lieu de lever
-- une exception. Ce déclencheur s'exécute dans la transaction de création du
-- compte — une erreur ici ferait échouer l'inscription tout entière.

create or replace function app_private.create_karatou_profile_for_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  declared_gender text;
begin
  declared_gender := nullif(new.raw_user_meta_data ->> 'gender', '');
  if declared_gender is not null
     and declared_gender not in ('male', 'female', 'other', 'prefer_not_to_say') then
    declared_gender := null;
  end if;

  insert into public.profiles (id, full_name, country, gender)
  values (
    new.id,
    nullif(coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'), ''),
    coalesce(nullif(new.raw_user_meta_data ->> 'country', ''), 'NE'),
    declared_gender
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

revoke all on function app_private.create_karatou_profile_for_new_user() from public, anon, authenticated;

-- Rattrapage : restitue le genre aux comptes qui l'avaient déclaré et dont la
-- valeur s'est perdue faute d'être copiée. On ne touche qu'aux lignes vides, et
-- uniquement quand la personne a elle-même fourni une valeur valide — rien
-- n'est deviné.
update public.profiles p
set gender = u.raw_user_meta_data ->> 'gender'
from auth.users u
where u.id = p.id
  and p.gender is null
  and u.raw_user_meta_data ->> 'gender' in ('male', 'female', 'other', 'prefer_not_to_say');
