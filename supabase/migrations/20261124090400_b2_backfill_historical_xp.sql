-- B2 : rattrapage de l'XP déjà « gagnée » avant la gamification.
--
-- Les triggers de 20261124090100 ne créditent que les NOUVELLES leçons et les
-- NOUVEAUX certificats. Sans ce rattrapage, un apprenant du web qui a déjà
-- terminé 20 leçons repartirait du niveau 1. On crédite donc l'historique
-- avec les mêmes références que les triggers, ce qui le rend idempotent
-- (rejouer ce fichier ne crédite rien deux fois, et un trigger ne recréditera
-- pas une leçon rattrapée) :
--   * 20 XP par ligne de karatou_learner_progress (ref = module/leçon) ;
--   * 100 XP par module certifié (certificat actif ou expiré, ref = module).
--
-- Volontairement hors rattrapage : la série (elle démarre à la prochaine
-- activité), les quêtes, les ligues. Les badges fondés sur l'historique
-- (Premier pas, 10/50 leçons, Module bouclé, Certifié·e…) sont attribués ici.
--
-- Ce fichier est séparé pour pouvoir être sauté si le propriétaire préfère
-- que tout le monde reparte de zéro : dans ce cas, le supprimer avant
-- `supabase db push`.

insert into public.karatou_xp_events (user_id, amount, reason, ref, local_date, occurred_at)
select lp.user_id, 20, 'lesson_completed', lp.module_slug || '/' || lp.course_id,
       (lp.completed_at at time zone 'Africa/Niamey')::date, lp.completed_at
from public.karatou_learner_progress lp
on conflict (user_id, reason, ref) do nothing;

insert into public.karatou_xp_events (user_id, amount, reason, ref, local_date, occurred_at)
select distinct on (c.user_id, c.module_slug)
       c.user_id, 100, 'certificate_earned', c.module_slug,
       (c.issued_at at time zone 'Africa/Niamey')::date, c.issued_at
from public.karatou_certificates c
where c.status in ('active', 'expired')
order by c.user_id, c.module_slug, c.issued_at
on conflict (user_id, reason, ref) do nothing;

insert into public.karatou_learner_stats (user_id, total_xp, level)
select e.user_id, sum(e.amount)::integer, app_private.karatou_level_for_xp(sum(e.amount)::integer)
from public.karatou_xp_events e
group by e.user_id
on conflict (user_id) do update set
  total_xp = excluded.total_xp,
  level = excluded.level,
  updated_at = now();

do $backfill_badges$
declare
  v_user uuid;
begin
  for v_user in select s.user_id from public.karatou_learner_stats s loop
    perform app_private.karatou_evaluate_badges(v_user, 'backfill', now());
  end loop;
end
$backfill_badges$;
