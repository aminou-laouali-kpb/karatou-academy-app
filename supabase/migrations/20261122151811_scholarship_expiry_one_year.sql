-- Codes de bourse : plus de date d'expiration figée (audit du 22/11/2026, R1).
-- Le client et la colonne imposaient le 31/12/2026 à tous les codes : à partir du
-- 1er janvier 2027, la RPC de rachat les aurait tous refusés comme expirés.
-- Désormais un code vaut un an à partir de sa création ; les codes encore en
-- attente qui portaient l'ancienne date sont prolongés d'un an à partir d'aujourd'hui.

alter table public.karatou_scholarships
  alter column expires_at_date set default ((current_date + interval '1 year')::date);

alter table public.karatou_scholarships
  alter column expires_at set default to_char(current_date + interval '1 year', 'DD/MM/YYYY');

update public.karatou_scholarships
set
  expires_at_date = (current_date + interval '1 year')::date,
  expires_at = to_char(current_date + interval '1 year', 'DD/MM/YYYY'),
  updated_at = now()
where status = 'pending'
  and expires_at_date = date '2026-12-31';
