# Paquet de sortie et intégration (Claude Code / Codex / Cursor)

## Structure du livrable

Toujours livrer un dossier autoporteur — un agent de code doit pouvoir l'intégrer sans
lire cette conversation :

```
course-output/<module-slug>/
├── README-INTEGRATION.md          ← le guide d'intégration pas à pas (voir gabarit ci-dessous)
├── lessons/
│   ├── <abrégé>-<id1>-<slug>.ts   ← un fichier par leçon (destination : src/data/lessons/)
│   └── …
├── registry-snippet.ts            ← imports + entrées authoredLessons à coller
├── mockdata-snippet.ts            ← entrée module/courses pour src/data/mockData.ts
│                                     (seulement si nouveau module ou nouvelles leçons)
├── supabase-notes.md              ← lignes à seeder / migration éventuelle (voir plus bas)
└── notebooklm-prompts.md          ← prompts vidéo par leçon (cf. notebooklm-videos.md)
```

### Gabarit de `registry-snippet.ts`

```ts
// À intégrer dans src/data/localizedContent.ts
// 1) Imports (en haut du fichier, après les imports existants) :
import { xxLessonY1 } from './lessons/<abrégé>-<id1>-<slug>';
// …

// 2) Entrées à ajouter dans le registre authoredLessons :
//    '<module-slug>/<course-id>': xxLessonYN,
```

### Gabarit de `mockdata-snippet.ts` (nouveau module)

Reprendre exactement la forme des modules existants de `src/data/mockData.ts` :
`id` (numérique suivant), `rubriqueId` existant ou nouveau, `slug`, `title`, `subtitle`,
`description`, `emoji`, `color` (dégradé Tailwind `from-… to-…`), `lessons` (compte),
`duration` (somme), `level`, `enrolled: 0`, `rating`, `progress: 0`, `certified: false`,
`isFree`, `order`, `status: 'published'`, et `courses: [{ id, title, duration, description }]`.

## README-INTEGRATION.md — gabarit (à adapter puis inclure dans le paquet)

```markdown
# Intégration du module « <Titre> » (<module-slug>)

Repo cible : kpb-global/karatou-academy-app (ou le projet Replit de production —
l'app peut y vivre sous artifacts/karatou/). Travailler sur une branche.

## 1. Copier les leçons
cp lessons/*.ts  <repo>/src/data/lessons/

## 2. Brancher le registre
Dans src/data/localizedContent.ts : coller les imports puis les entrées
authoredLessons de registry-snippet.ts (clé = '<module-slug>/<id>').

## 3. Catalogue (si nouveau module / nouvelles leçons)
Dans src/data/mockData.ts : ajouter l'entrée de mockdata-snippet.ts
(ou compléter courses[] du module existant).

## 4. Supabase (OBLIGATOIRE pour progression + certificats)
Voir supabase-notes.md. Par défaut :
    npm run seed:content:dry     # vérifier ce qui serait écrit
    npm run seed:content         # seeder modules + cours depuis le code
Si le seed ne couvre pas le cas → migration SQL dans supabase/migrations/
puis npm run supabase:push (dry-run d'abord).

## 5. Vérifier
npm run typecheck && npm run build && npm test
npm run dev  → login student@karatou.test / demo1234
             → /learn/<module-slug>/<première-leçon> puis la dernière
Contrôles : vrai contenu (pas le placeholder), 8 onglets remplis, quiz OK,
bascule FR→EN→HA, aucun id interne visible.

## 6. Livrer
Commit (feat(contenu): …), push, PR vers main.
Production Replit : synchroniser le code puis REDEPLOY manuel du déploiement
(une modif d'espace de travail n'est jamais live sans republication).

## Restant après intégration
- Vidéos : générer via notebooklm-prompts.md → YouTube non répertorié →
  coller https://www.youtube.com/embed/VIDEO_ID dans video.{fr,en,ha} → retirer le TODO.
- Haoussa : faire valider par un locuteur natif.
```

## Supabase : seed d'abord, migration si nécessaire

**Voie par défaut — le script de seed.** Le repo contient
`scripts/seed-supabase-content.mjs` (`npm run seed:content`, option `--dry-run`) qui
aligne `karatou_modules` / `karatou_courses` sur le catalogue du code. Après mise à jour
de `mockData.ts`, c'est le chemin le plus sûr : pas de SQL manuel, pas de dérive de schéma.

**Voie migration — quand le seed ne suffit pas** (colonne à ajouter, contrainte, RLS,
correctif de données). Créer `supabase/migrations/<YYYYMMDDHHMMSS>_<slug>.sql` puis
`npm run supabase:push:dry` → `npm run supabase:push`. Règles :
- **Inspecter le schéma réel avant d'écrire le SQL** (tables `karatou_modules`,
  `karatou_courses` — noms de colonnes non devinables). Via MCP Supabase (`list_tables`)
  ou le dashboard.
- Écritures idempotentes (`insert … on conflict do update` / `create … if not exists`).
- Ne jamais toucher aux politiques RLS durcies (progression/certificats, KPB-29) sans
  demande explicite — elles garantissent l'infalsifiabilité des certificats.
- Rappel : le contenu des leçons ne va PAS en base ; seules la structure (modules/cours)
  et les métadonnées y vivent.

## Pièges connus (vécus en production)

1. **« J'ai écrit les leçons dans Supabase et rien ne s'affiche »** → normal, le lecteur
   lit le registre TS. Intégrer les fichiers + registre.
2. **« Les leçons s'affichent mais pas de certificat »** → lignes `karatou_courses`
   manquantes ou incohérentes avec le slug/ids du module (la RPC compte ces lignes).
3. **« Ça marche en local, pas en prod »** → la prod Replit n'a pas été redéployée, ou le
   projet Replit a divergé du repo GitHub. Comparer, synchroniser, republier.
4. **Deep-links 404 en prod** (`/learn/...`, `/verify/...`) → réécriture SPA absente du
   déploiement Replit Static. `.replit` doit contenir :
   `[[deployment.rewrites]]` `from = "/*"` `to = "/index.html"`.
5. **Chunk `localizedContent` qui grossit** : normal (contenu embarqué). Au-delà de
   ~1 Mo gzip, envisager un `import()` dynamique par module — ne pas le faire
   préventivement sans mesure.
