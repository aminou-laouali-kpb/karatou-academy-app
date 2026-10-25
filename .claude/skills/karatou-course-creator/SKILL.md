---
name: karatou-course-creator
description: Création de cours complets pour la web app Karatou Academy — modules et leçons trilingues (FR/EN/HA) au format TypeScript LessonContent, avec recherche de contenu, quiz, glossaire, prompts vidéo NotebookLM et paquet d'intégration prêt pour Claude Code / Codex / Cursor (registre authoredLessons, mockData, migrations ou seed Supabase). Utiliser ce skill dès que l'utilisateur veut créer, ajouter, rédiger, enrichir ou intégrer un cours, un module, des leçons ou du contenu pédagogique pour Karatou Academy / karatou-academy-app — même s'il dit simplement « nouveau cours », « ajoute un module », « rédige les leçons », « génère le contenu du module X », « cours à intégrer dans la plateforme ». L'app est en production sur Replit et connectée à Supabase pour la base de données — l'intégration finale peut nécessiter des migrations ou un seed Supabase.
---

# Karatou Course Creator

Assistant de création de cours pour **Karatou Academy**, la plateforme de formation certifiante
trilingue (français / anglais / haoussa) ouverte à **toute personne curieuse du sujet, partout
dans le monde** : salariés, étudiants, indépendants, agents de terrain, bénévoles — souvent sur
mobile, avec une connectivité limitée et un petit budget. Les exemples sont **ancrés en
Afrique, sur plusieurs pays** (Niger, Sénégal, Côte d'Ivoire, Cameroun, Bénin, Burkina Faso,
Mali, Togo, Guinée, RDC, Nigeria, Kenya, Maroc…) : le Niger est un pays parmi d'autres, jamais
le seul d'un module. Ces exemples restent compréhensibles par un apprenant hors d'Afrique.

Ce skill transforme une idée de cours en **paquet d'intégration complet** : fichiers de leçons
TypeScript prêts à brancher, snippets de registre, entrée de catalogue, instructions Supabase
et prompts vidéo NotebookLM — le tout pensé pour être intégré ensuite par un agent de code
(Claude Code, Codex, Cursor) en une seule passe.

## Les deux vérités techniques à ne jamais oublier

Avant tout travail, intégrer ces deux faits (vérifiés en production) — ils conditionnent
toute la sortie du skill :

1. **Le contenu des leçons vit dans le code TypeScript, PAS dans Supabase.**
   Le lecteur de leçons (`LessonPlayer`) lit uniquement le registre statique `authoredLessons`
   dans `src/data/localizedContent.ts`. Écrire du contenu de leçon dans la colonne
   `karatou_courses.translations` de Supabase **ne fait rien apparaître dans l'app** (côté
   client cette colonne n'est typée que pour `{title, description}`). Un cours « intégré »
   = fichiers TS + entrées de registre, rien d'autre ne compte pour l'affichage.

2. **Supabase reste indispensable pour la structure, la progression et les certificats.**
   Les tables `karatou_modules` et `karatou_courses` pilotent la navigation, la progression
   des apprenants et surtout l'émission des certificats : la RPC `karatou_issue_certificate`
   compte les lignes de `karatou_courses` du module pour vérifier que tout est terminé.
   **Un nouveau module ou de nouvelles leçons exigent donc aussi des lignes en base**
   (via le script de seed ou une migration) — sinon pas de certificat possible.

## Workflow en 6 phases

Suivre ces phases dans l'ordre. Les phases 1 et 3 se terminent par une validation
utilisateur — ne pas générer 15 leçons sur un cadrage non confirmé.

### Phase 1 — Cadrage (checkpoint utilisateur)

Poser les questions nécessaires pour remplir cette fiche (proposer des valeurs par défaut
sensées plutôt que d'interroger sur tout) :

- **Module** : nouveau module ou leçons à ajouter à un module existant ?
  Modules existants : `intelligence-artificielle` (c1–c8), `data-analysis` (d1–d6),
  `gestion-projet` (p1–p5). Vérifier dans le repo si disponible — la liste évolue.
- **Titre, slug, sous-titre, description** du module (le slug devient l'URL `/learn/<slug>`).
- **Préfixe d'identifiant** des leçons : une lettre non utilisée (c, d, p sont pris) + numéro
  (ex. `m1`, `m2`… pour un module marketing). Les ids sont internes — jamais visibles.
- **Niveau** (Débutant / Intermédiaire / Avancé), **audience précise** (ex. « agents M&E
  d'ONG », « gérantes de coopératives »), **nombre de leçons** (5–8 recommandé) et durées.
- **Structure pédagogique** : prévoir une dernière leçon de synthèse (évaluation finale à quiz
  cumulatif, ou mini-projet capstone) — c'est le modèle des modules existants.
- **Langues** : FR obligatoire (langue de référence), EN + HA par défaut. Le haoussa sera
  marqué « à faire valider par un locuteur natif ».

### Phase 2 — Recherche de contenu

Ancrer chaque leçon dans du réel. Utiliser la recherche web (si disponible) pour :
- les faits, chiffres, outils et pratiques actuels du domaine (vérifier l'année) ;
- des exemples africains authentiques, répartis sur plusieurs pays (organisations, ordres de
  grandeur dans la monnaie du pays : FCFA, naira, cedi, shilling…) ;
- les limites honnêtes du sujet (ce qui ne marche pas, les pièges).

Règle d'honnêteté : ne jamais inventer une statistique précise. Un chiffre incertain
s'écrit prudemment (« environ », « selon les études récentes ») ou se remplace par un
ordre de grandeur. L'app revendique des contenus « vérifiables ».

### Phase 3 — Plan de cours (checkpoint utilisateur)

Produire un syllabus sous forme de tableau et le faire valider AVANT de générer :

| id | Titre | Durée | Objectif (1 phrase) | 4 sections de contenu | Exemple terrain | Pratique |

C'est le moment le moins cher pour corriger le tir. Ne passer en phase 4 qu'après accord.

### Phase 4 — Génération des leçons

Lire **references/lesson-format.md** (format exact, règles de style, checklist qualité)
avant d'écrire la première leçon. Puis générer un fichier TS par leçon :

- FR d'abord (version de référence, la plus riche), puis EN et HA en traductions complètes
  et fidèles (mêmes sections, même quiz, même glossaire, même ordre).
- Si des sous-agents sont disponibles : une leçon par agent en parallèle, chacun recevant
  le contenu de lesson-format.md comme contrat + le brief de sa leçon issu du syllabus.
  Sinon, générer séquentiellement.
- La dernière leçon (synthèse) récapitule le module : son quiz couvre ≥ 1 question par
  leçon précédente (7 leçons → 9 questions ; 5 leçons → 5–7 questions).

### Phase 5 — Paquet d'intégration

Lire **references/integration.md** et assembler le livrable final : dossier
`course-output/<module-slug>/` contenant les fichiers de leçons, les snippets de registre
et de catalogue, les instructions Supabase (seed ou migration), les prompts vidéo
NotebookLM (générés selon **references/notebooklm-videos.md**) et un
`README-INTEGRATION.md` autoporteur qu'un agent de code peut exécuter sans autre contexte.

### Phase 6 — Contrôle qualité et remise

Dérouler la checklist qualité de lesson-format.md sur chaque leçon. Puis :
- **Si le repo est accessible dans l'environnement courant** (Claude Code sur
  `karatou-academy-app`) : proposer d'intégrer directement — copier les fichiers, brancher
  le registre, puis `npm run typecheck && npm run build && npm test` et une vérification
  visuelle en mode démo (`npm run dev`, compte `student@karatou.test` / `demo1234`,
  route `/learn/<slug>/<id>`).
- **Sinon** (Cowork, chat) : livrer le dossier `course-output/` complet et rappeler que
  l'intégration se fait ensuite via Claude Code / Codex / Cursor avec le README comme guide.

## Règles d'or (résumé — détails dans les références)

- Chaque leçon remplit TOUTES les rubriques : objectif, vidéo (vide + TODO), 4 sections de
  contenu, exemple chiffré, pratique en 3 étapes, quiz (5 questions, 4 options, bonnes
  réponses variées), réflexion, glossaire (6 termes).
- Ancrage africain multi-pays (le Niger parmi d'autres, jamais seul) ; méthode de consigne
  maison RCTF ; vouvoiement ; phrases courtes ; analogies du quotidien ;
  honnêteté sur les limites ; réalisable sur téléphone avec des outils gratuits.
- Jamais d'identifiant interne (`c2`, `m3`…) dans un texte visible par l'apprenant —
  écrire « Leçon 2 » / "Lesson 2" / « Darasi 2 ».
- Le champ vidéo reste vide à la génération ; les vidéos sont produites après coup via
  NotebookLM (prompts fournis) et publiées sur YouTube en non-répertorié.

## Références (lecture à la demande)

- **references/architecture.md** — architecture réelle de l'app (Replit + Supabase + repo
  GitHub), flux de données, chaîne des certificats, mode démo. Lire en phase 1 si le
  contexte de l'app n'est pas déjà connu, et toujours avant la phase 5.
- **references/lesson-format.md** — interface `LessonContent`, format de fichier exact,
  règles de style, squelette, checklist qualité. Lire avant la phase 4. Contrat à donner
  aux sous-agents.
- **references/integration.md** — structure du paquet de sortie, étapes d'intégration pour
  Claude Code / Codex / Cursor, seed et migrations Supabase, vérifications, déploiement
  Replit. Lire avant la phase 5.
- **references/notebooklm-videos.md** — gabarit des prompts vidéo par leçon (FR/EN),
  gestion du haoussa, workflow YouTube → champ `video`. Lire pendant la phase 5.
- **assets/lesson-template.ts** — squelette de fichier de leçon à copier-adapter.
