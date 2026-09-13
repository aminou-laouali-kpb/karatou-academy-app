# Architecture de Karatou Academy (vérifiée en production)

## Vue d'ensemble

| Élément | Détail |
|---|---|
| Frontend | SPA React 18 + Vite + TypeScript + Tailwind, PWA offline-first |
| Code source | GitHub `kpb-global/karatou-academy-app` (branche `main`) |
| Production | **Replit** — déploiement **Static** (`deploymentTarget = "static"`, `publicDir = "dist"`), domaines `karatou.academy` et `verify.karatou.academy` |
| Base de données | **Supabase** — projet « Karatou Academy » (`pqcovsnomouclkdjhjig`, région eu-west-3) |
| Tests | Vitest (`npm test`) + Playwright e2e ; CI GitHub Actions |
| Langues | `Language = 'fr' | 'en' | 'ha'` (`src/data/translations.ts`) |

⚠️ **Divergence Replit / GitHub** : le projet Replit de production a historiquement été un
monorepo divergent (app parfois logée sous `artifacts/karatou/`). Le repo GitHub est la
référence pour le code. Toute intégration doit préciser **où** elle atterrit : idéalement le
repo GitHub, puis synchronisation vers Replit + **Redeploy manuel** (une modif d'espace de
travail Replit n'est jamais live tant qu'on n'a pas republié le déploiement).

## Flux de données du contenu pédagogique

```
Fichiers TS (src/data/lessons/*.ts)
        │  export const xxLessonYN: Record<Language, LessonContent>
        ▼
Registre authoredLessons (src/data/localizedContent.ts)
        │  clé : '<module-slug>/<course-id>'  ex. 'gestion-projet/p3'
        ▼
getAuthoredLesson(moduleSlug, courseId, lang)
        ▼
LessonPlayer (src/pages/LessonPlayer.tsx)  →  8 onglets :
  1 Objectif · 2 Vidéo · 3 Contenu · 4 Exemple · 5 Pratique · 6 Quiz · 7 Réflexion · 8 Glossaire
```

- Si une clé manque dans le registre, le lecteur retombe sur un **placeholder générique**
  (`buildLesson()`) — c'est le symptôme d'un cours « non intégré ».
- La colonne `karatou_courses.translations` (jsonb) n'est **pas** lue pour le corps des
  leçons ; côté client elle n'est typée que `{title, description}` (`src/types.ts`).

## Le catalogue des modules (double déclaration)

Un module existe à **deux endroits**, à garder synchrones :

1. **`src/data/mockData.ts`** — catalogue client (et mode démo). Champs d'un module :
   `id`, `rubriqueId`, `slug`, `title`, `subtitle`, `description`, `emoji`, `color`
   (dégradé Tailwind), `lessons` (nombre), `duration` (total), `level`, `enrolled`,
   `rating`, `progress`, `certified`, `isFree`, `order`, `status: 'published'`,
   et `courses: [{ id, title, duration, description }]`.
   Rubriques existantes : `ai-data`, `culture-numerique`, `employabilite`, `entrepreneuriat`.
2. **Supabase** — tables `karatou_modules` et `karatou_courses` (une ligne par leçon,
   rattachée par `module_id`). Alimentées par `scripts/seed-supabase-content.mjs`
   (`npm run seed:content`, avec variante `--dry-run`).

## Chaîne des certificats (pourquoi Supabase compte)

```
Progression : karatou_learner_progress (RLS stricte : le couple module/cours doit exister
              dans karatou_courses — durcissement KPB-29)
        ▼
RPC karatou_issue_certificate(module_slug)  — SECURITY DEFINER, authenticated
   → vérifie que TOUTES les leçons du module (comptées dans karatou_courses) sont finies
   → insère dans karatou_certificates (UID type KA-2026-XX-00042)
        ▼
Vérification publique :
   • /verify/<uid>            → RPC karatou_verify_certificate (anon) — lit karatou_certificates
   • /verify-attestation#...  → Edge Function attestation-verify (signature cryptographique,
                                 sans base) — utilisée par les QR des PDF, y compris les
                                 attestations « présentiel » émises via /admin/attestations
```

Conséquence directe pour ce skill : **si les lignes `karatou_courses` d'un nouveau module
manquent en base, les apprenants ne peuvent ni enregistrer leur progression ni obtenir de
certificat**, même si les leçons s'affichent parfaitement.

## Mode démo

`src/lib/demoMode.ts` : `isDemoEnabled = VITE_DEMO_ENABLED ?? import.meta.env.DEV`.
En dev local, le mode démo est actif par défaut : comptes seedés
(`student@karatou.test` / `demo1234`), aucune écriture Supabase pour la progression.
C'est l'environnement de vérification visuelle recommandé après intégration.

## Identifiants et conventions existantes

| Module (slug) | Préfixe | Leçons | Fichiers |
|---|---|---|---|
| `intelligence-artificielle` | `c` | c1–c8 (c8 = évaluation finale, quiz cumulatif 9 q.) | `src/data/lessons/ia-c*.ts` (c1 historique dans `lessonContent.ts`) |
| `data-analysis` | `d` | d1–d6 (d6 = mini-projet capstone) | `src/data/lessons/da-d*.ts` |
| `gestion-projet` | `p` | p1–p5 | `src/data/lessons/pm-p*.ts` |

Un nouveau module choisit une lettre libre et suit le même motif de nommage :
`src/data/lessons/<abrégé-module>-<id>-<slug-court>.ts`.
