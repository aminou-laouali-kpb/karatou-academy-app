-- Module « Introduction a Claude AI » : structure en base.
--
-- Le contenu des lecons vit dans le registre TypeScript (authoredLessonLoaders) ;
-- ces lignes pilotent la navigation, la progression, et surtout l'emission du
-- certificat : karatou_issue_certificate compte les lignes de karatou_courses
-- du module pour verifier que tout est termine. Sans elles, pas de certificat.
--
-- Les libelles reprennent mockData.ts au caractere pres (sans accents, comme les
-- modules deja en base), pour qu'un passage ulterieur de scripts/seed-supabase-content.mjs
-- ne produise aucune divergence. translations reste vide : la copie EN/HA vient
-- du code (src/data/localizedContent.ts), comme pour les modules existants.

insert into karatou_modules
  (id, rubrique_id, slug, title, subtitle, description, emoji, color, duration, level,
   enrolled, rating, is_free, display_order, status, translations)
values
  ('4', 'rubrique-ai-data', 'introduction-claude-ai',
   'Introduction a Claude AI',
   'Utiliser un assistant IA au quotidien',
   'Prendre en main Claude pas a pas : formuler une demande claire, traiter ses propres documents et verifier les reponses avant de les utiliser.',
   '💬', 'from-orange-600 to-amber-500', '1h 20min', 'Debutant',
   0, 0, true, 4, 'published', '{}'::jsonb)
on conflict (id) do update set
  rubrique_id = excluded.rubrique_id,
  slug        = excluded.slug,
  title       = excluded.title,
  subtitle    = excluded.subtitle,
  description = excluded.description,
  emoji       = excluded.emoji,
  color       = excluded.color,
  duration    = excluded.duration,
  level       = excluded.level,
  is_free     = excluded.is_free,
  display_order = excluded.display_order,
  status      = excluded.status,
  updated_at  = now();

insert into karatou_courses (id, module_id, title, duration, description, display_order, status)
values
  ('cl1', '4', 'Qu est-ce que Claude ?',                    '12 min', 'Comprendre ce qu est Claude, ou y acceder et ce qu il ne faut pas en attendre.', 1, 'published'),
  ('cl2', '4', 'Bien formuler sa demande',                  '15 min', 'Les quatre ingredients d une consigne claire : contexte, tache, format, exemple.', 2, 'published'),
  ('cl3', '4', 'Travailler avec ses propres documents',     '15 min', 'Deposer un PDF ou un tableau, resumer, extraire et traduire.', 3, 'published'),
  ('cl4', '4', 'Les usages concrets au quotidien',          '15 min', 'Rediger, traduire, preparer une reunion et lire un tableau simple.', 4, 'published'),
  ('cl5', '4', 'Limites, verification et confidentialite',  '13 min', 'Reperer les erreurs plausibles et proteger les donnees sensibles.', 5, 'published'),
  ('cl6', '4', 'Evaluation finale',                         '10 min', 'Valider les acquis et emettre le certificat numerique.', 6, 'published')
on conflict (id) do update set
  module_id     = excluded.module_id,
  title         = excluded.title,
  duration      = excluded.duration,
  description   = excluded.description,
  display_order = excluded.display_order,
  status        = excluded.status,
  updated_at    = now();
