-- Vérifie, sur une base réelle, que `public.profiles.role` n'est pas écrivable
-- par son propriétaire (migration 20260907113000_s07).
--
--   psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f scripts/verify-profiles-role-lockdown.sql
--
-- Tout se déroule dans une transaction annulée : le script ne laisse aucune
-- ligne derrière lui, y compris en cas d'échec.

begin;

create temp table _res(n int, etape text, attendu text, obtenu text) on commit drop;
create temp table _cible(id uuid) on commit drop;
insert into _cible select id from public.profiles order by created_at limit 1;
grant select, insert on _res to authenticated;
grant select on _cible to authenticated;

select set_config('request.jwt.claims',
                  json_build_object('sub', id::text, 'role', 'authenticated')::text, true)
from _cible;
set local role authenticated;

do $$ declare t uuid; begin select id into t from _cible;
  update public.profiles set full_name = 'verification lockdown' where id = t;
  insert into _res values (1, 'modifier son propre nom', 'AUTORISE', 'AUTORISE');
exception when others then insert into _res values (1, 'modifier son propre nom', 'AUTORISE', 'REFUSE -> ' || sqlerrm); end $$;

do $$ declare t uuid; begin select id into t from _cible;
  update public.profiles set role = 'admin' where id = t;
  insert into _res values (2, 's auto-promouvoir admin', 'REFUSE', 'AUTORISE');
exception when others then insert into _res values (2, 's auto-promouvoir admin', 'REFUSE', 'REFUSE'); end $$;

do $$ declare t uuid; begin select id into t from _cible;
  update public.profiles set id = '00000000-0000-4000-8000-000000000001' where id = t;
  insert into _res values (3, 'usurper l identifiant d autrui', 'REFUSE', 'AUTORISE');
exception when others then insert into _res values (3, 'usurper l identifiant d autrui', 'REFUSE', 'REFUSE'); end $$;

do $$ begin
  insert into public.profiles (id, full_name, country, role)
  values ('00000000-0000-4000-8000-000000000009', 'Intrus', 'NE', 'admin');
  insert into _res values (4, 'creer un profil admin pour autrui', 'REFUSE', 'AUTORISE');
exception when others then insert into _res values (4, 'creer un profil admin pour autrui', 'REFUSE', 'REFUSE'); end $$;

do $$ declare t uuid; begin select id into t from _cible;
  insert into public.profiles (id, full_name, country, region, gender)
  values (t, 'Nouvel apprenant', 'NE', 'Niamey', 'female')
  on conflict (id) do update set full_name = excluded.full_name, country = excluded.country,
    region = excluded.region, gender = excluded.gender;
  insert into _res values (5, 'upsert d inscription (AuthContext)', 'AUTORISE', 'AUTORISE');
exception when others then insert into _res values (5, 'upsert d inscription (AuthContext)', 'AUTORISE', 'REFUSE -> ' || sqlerrm); end $$;

reset role;

select n, etape, attendu, obtenu, case when attendu = obtenu then 'OK' else 'ECHEC' end as verdict
from _res order by n;

do $$ declare echecs int; begin
  select count(*) into echecs from _res where attendu <> obtenu;
  if echecs > 0 then
    raise exception 'verify-profiles-role-lockdown : % controle(s) en echec', echecs;
  end if;
  raise notice 'verify-profiles-role-lockdown : les 5 controles passent.';
end $$;

rollback;
