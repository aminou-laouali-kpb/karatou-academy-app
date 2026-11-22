-- Vérifie, sur une base réelle, que le déclencheur d'inscription recopie bien
-- le nom, le pays ET le genre déclarés (migration 20260911093924_s08).
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f scripts/verify-signup-profile-trigger.sql
--
-- Ce contrôle compte parce que la confirmation d'email est active : sans
-- session à l'inscription, ce déclencheur est le seul écrivain du profil.
--
-- Tout se déroule dans une transaction annulée : le script ne laisse aucun
-- compte ni aucun profil derrière lui, y compris en cas d'échec.

begin;

create temp table _res(n int, etape text, attendu text, obtenu text) on commit drop;

-- 1. Une inscription complète : les trois champs déclarés doivent atterrir.
do $$
declare u uuid := '00000000-0000-4000-8000-0000000000a1';
begin
  insert into auth.users (id, email, raw_user_meta_data)
  values (u, 'verif-a1@example.invalid',
          '{"full_name":"Aïcha Verif","country":"SN","gender":"female"}'::jsonb);
  insert into _res
  select 1, 'nom, pays et genre declares',
         'Aïcha Verif|SN|female',
         coalesce(full_name,'?') || '|' || coalesce(country,'?') || '|' || coalesce(gender,'?')
  from public.profiles where id = u;
exception when others then insert into _res values (1, 'nom, pays et genre declares', 'Aïcha Verif|SN|female', 'ERREUR -> ' || sqlerrm); end $$;

-- 2. Un genre hors liste ne doit PAS faire échouer la création du compte :
--    la valeur est neutralisée, la personne reste inscrite.
do $$
declare u uuid := '00000000-0000-4000-8000-0000000000a2';
begin
  insert into auth.users (id, email, raw_user_meta_data)
  values (u, 'verif-a2@example.invalid',
          '{"full_name":"Bug Injecte","country":"GH","gender":"; drop table"}'::jsonb);
  insert into _res
  select 2, 'genre invalide neutralise, compte cree', 'GH|NULL',
         coalesce(country,'?') || '|' || coalesce(gender,'NULL')
  from public.profiles where id = u;
exception when others then insert into _res values (2, 'genre invalide neutralise, compte cree', 'GH|NULL', 'ERREUR -> ' || sqlerrm); end $$;

-- 3. Sans genre déclaré, la colonne reste vide (rien n'est inventé).
do $$
declare u uuid := '00000000-0000-4000-8000-0000000000a3';
begin
  insert into auth.users (id, email, raw_user_meta_data)
  values (u, 'verif-a3@example.invalid', '{"full_name":"Sans Genre","country":"ML"}'::jsonb);
  insert into _res
  select 3, 'aucun genre declare', 'ML|NULL',
         coalesce(country,'?') || '|' || coalesce(gender,'NULL')
  from public.profiles where id = u;
exception when others then insert into _res values (3, 'aucun genre declare', 'ML|NULL', 'ERREUR -> ' || sqlerrm); end $$;

select n, etape, attendu, obtenu, case when attendu = obtenu then 'OK' else 'ECHEC' end as verdict
from _res order by n;

do $$ declare echecs int; begin
  select count(*) into echecs from _res where attendu <> obtenu;
  if echecs > 0 then
    raise exception 'verify-signup-profile-trigger : % controle(s) en echec', echecs;
  end if;
  raise notice 'verify-signup-profile-trigger : les 3 controles passent.';
end $$;

rollback;
