-- Rapatrié depuis l'historique de production (appliqué le 14/09/2026, absent du dépôt).
-- Backfill the six course rows for the Claude AI introduction module.
--
-- The original module migration was recorded remotely, but only the module row
-- is present. These course rows are required for navigation, progress tracking,
-- and certificate issuance. The module publication status remains untouched.

insert into public.karatou_courses (
  id,
  module_id,
  title,
  duration,
  description,
  display_order,
  status
)
values
  ('cl1', '4', 'Qu est-ce que Claude ?', '12 min', 'Comprendre ce qu est Claude, ou y acceder et ce qu il ne faut pas en attendre.', 1, 'published'),
  ('cl2', '4', 'Bien formuler sa demande', '15 min', 'Les quatre ingredients d une consigne claire : contexte, tache, format, exemple.', 2, 'published'),
  ('cl3', '4', 'Travailler avec ses propres documents', '15 min', 'Deposer un PDF ou un tableau, resumer, extraire et traduire.', 3, 'published'),
  ('cl4', '4', 'Les usages concrets au quotidien', '15 min', 'Rediger, traduire, preparer une reunion et lire un tableau simple.', 4, 'published'),
  ('cl5', '4', 'Limites, verification et confidentialite', '13 min', 'Reperer les erreurs plausibles et proteger les donnees sensibles.', 5, 'published'),
  ('cl6', '4', 'Evaluation finale', '10 min', 'Valider les acquis et emettre le certificat numerique.', 6, 'published')
on conflict (id) do update
set
  module_id = excluded.module_id,
  title = excluded.title,
  duration = excluded.duration,
  description = excluded.description,
  display_order = excluded.display_order,
  status = excluded.status,
  updated_at = now();
