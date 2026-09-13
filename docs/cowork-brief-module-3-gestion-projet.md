# Brief de génération — Module 3 « Gestion de Projet » (leçons p1 → p5)

> **À l'attention de CoWork.** Ce document est un cahier des charges complet. Ta mission :
> rédiger le contenu pédagogique **complet et trilingue (FR / EN / HA)** des **5 leçons** du
> module « Gestion de Projet » (`p1`→`p5`) de Karatou Academy, au format `LessonContent`, et les
> livrer prêts à brancher. La référence de qualité absolue (« gold standard ») est le module
> **Intelligence Artificielle déjà rédigé** : `lesson1` (IA c1) et les leçons `src/data/lessons/ia-c2…c8.ts`.
> Respecte leur niveau de richesse, leur ton et leur structure.

---

## 0. TL;DR — ce que tu dois livrer (et ce que tu NE dois PAS faire)

**À livrer :**
1. **5 leçons** (`p1`→`p5`) au format `LessonContent`, chacune en **3 langues** (`fr`, `en`, `ha`),
   **toutes les rubriques remplies** (aucun champ vide sauf les URLs vidéo, voir §7).
2. **Code prêt à brancher** : un fichier TS par leçon sous `src/data/lessons/` + un snippet
   d'enregistrement pour le registre `authoredLessons` de `src/data/localizedContent.ts`.
3. Le champ `video` reste **`{ fr: '', en: '', ha: '' }`** avec un commentaire
   `// TODO: URL NotebookLM/YouTube` (les URLs seront ajoutées plus tard — voir §7).

**À NE PAS faire (leçon tirée du Module 1) :**
- ❌ **N'écris RIEN dans Supabase** (`karatou_courses.translations`). Le lecteur de leçons de l'app
  (`LessonPlayer`) lit le contenu **uniquement** depuis le registre TypeScript `authoredLessons`.
  La colonne `karatou_courses.translations` n'est typée que pour `{ title, description }` (voir
  `CourseTranslation` dans `src/types.ts`) : y écrire un `LessonContent` complet est **sans effet**
  sur l'affichage des leçons. La seule source de vérité est le **registre TS**.
- ❌ Ne modifie pas `mockData.ts`, `lessonContent.ts`, `translations.ts`, ni le fallback `buildLesson()`.

**Vérification attendue de ta part :** `tsc --noEmit -p tsconfig.app.json` passe sur les 5 fichiers.

---

## 1. Contexte produit & audience (identique au Module 1)

**Karatou Academy** est une plateforme de formation certifiante (FR/EN/HA) pour des
**professionnels et étudiants africains francophones**, en priorité du **secteur humanitaire,
du développement et des organisations locales** (ONG, coopératives, PNUD, petites structures).
Beaucoup travaillent en **zones à faible connectivité**, sur **mobile**, avec des **budgets en FCFA**
et des **équipes réduites**.

**Promesse pédagogique :** démystifier, donner confiance, rendre immédiatement applicable.
Pas de jargon corporate importé : la gestion de projet est présentée comme du **bon sens outillé**,
adapté aux réalités du terrain (saisonnalité, retards de financement, mobilité, oralité).

**Ton :** clair, chaleureux, professionnel, encourageant. Phrases courtes. Vouvoiement ("vous").
Analogies du quotidien (chantier, marché, récolte, tontine, campagne de sensibilisation).

**Niveau du module :** **Débutant** — on suppose zéro prérequis en méthodes agiles.

---

## 2. Cible technique exacte (à respecter au caractère près)

### 2.1 Le contrat de données — `LessonContent`

Source de vérité : [`src/data/lessonContent.ts`](../src/data/lessonContent.ts).

```ts
export interface QuizQuestion {
  question: string;
  options: { key: string; text: string }[]; // 4 options, keys "A" | "B" | "C" | "D"
  answer: string;                            // DOIT correspondre à une `key` d'option (ex: "B")
  explanation: string;
}

export interface GlossaryItem { term: string; definition: string; }

export interface LessonContent {
  id: string;            // = l'id du cours, ex "p1"
  lessonNumber: number;  // = position, ex 1
  title: string;         // titre pédagogique riche
  objective: string;     // RUBRIQUE "Objectif/Intro" — 2 à 4 phrases (capacité visée)
  video: { fr: string; en: string; ha: string }; // laisser "" pour l'instant (voir §7)
  content: { title: string; body: string }[];    // 4 blocs (voir §4)
  example: { title: string; challenge: string; solution: string; impact: string };
  practice: { title: string; instructions: string[]; observation: string };
  quiz: QuizQuestion[];  // 5 questions par leçon
  reflection: string;    // 1 question ouverte
  glossary: GlossaryItem[]; // 5 à 6 termes
}
```

### 2.2 Le mécanisme de branchement

- Les leçons rédigées vivent dans le registre `authoredLessons` de
  [`src/data/localizedContent.ts`](../src/data/localizedContent.ts), **clé = `` `${moduleSlug}/${courseId}` ``**.
- `LessonPlayer` appelle `getAuthoredLesson(moduleSlug, courseId, lang)` ; sans entrée, il tombe sur
  le placeholder générique `buildLesson()` — **c'est ce comportement générique que ces leçons remplacent**.
- **`moduleSlug` du module = `gestion-projet`**. Les `courseId` sont **`p1`…`p5`**.
  (Vérifiable dans [`src/data/mockData.ts`](../src/data/mockData.ts), module `id: '3'`.)

### 2.3 Organisation des fichiers (un fichier par leçon)

```
src/data/lessons/pm-p1-cadrage.ts        -> export const pmLessonP1: Record<Language, LessonContent>
src/data/lessons/pm-p2-mvp.ts            -> export const pmLessonP2
src/data/lessons/pm-p3-sprint.ts         -> export const pmLessonP3
src/data/lessons/pm-p4-risques.ts        -> export const pmLessonP4
src/data/lessons/pm-p5-retrospective.ts  -> export const pmLessonP5
```

Modèle d'un fichier (imports relatifs **exactement** comme ci-dessous, depuis `src/data/lessons/`) :

```ts
import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

export const pmLessonP1: Record<Language, LessonContent> = {
  fr: { /* ... LessonContent complet ... */ },
  en: { /* ... traduction fidèle ... */ },
  ha: { /* ... traduction fidèle ... */ },
};
```

Puis fournis un **snippet** `src/data/localizedContent.registry-snippet.ts` indiquant les imports
et les entrées à ajouter :

```ts
import { pmLessonP1 } from './lessons/pm-p1-cadrage';
import { pmLessonP2 } from './lessons/pm-p2-mvp';
import { pmLessonP3 } from './lessons/pm-p3-sprint';
import { pmLessonP4 } from './lessons/pm-p4-risques';
import { pmLessonP5 } from './lessons/pm-p5-retrospective';

const authoredLessons: Record<string, Record<Language, LessonContent>> = {
  // ... entrées existantes (IA c1–c8) inchangées ...
  'gestion-projet/p1': pmLessonP1,
  'gestion-projet/p2': pmLessonP2,
  'gestion-projet/p3': pmLessonP3,
  'gestion-projet/p4': pmLessonP4,
  'gestion-projet/p5': pmLessonP5,
};
```

### 2.4 Contraintes techniques impératives

- **`Language`** vaut `'fr' | 'en' | 'ha'`. Les trois sont **obligatoires**.
- `quiz[].answer` **doit** être égal à une `key` existante (`"A"`–`"D"`). **Varie** la bonne réponse
  entre les questions (ne mets pas toujours "B").
- Dans `content[].body`, **sépare les paragraphes par une ligne vide `\n\n`** (2 à 3 paragraphes/section).
- **N'utilise pas l'identifiant interne (`p1`, `p2`, …) dans les textes vus par l'apprenant.** Si tu dois
  référencer une autre leçon, écris « Leçon 2 », pas « Leçon p2 ». (Le champ `id` reste `"p1"`, lui.)
- `id` = l'id du cours (`"p1"`…) ; `lessonNumber` = 1…5.

---

## 3. Charte de rédaction pédagogique (NON négociable)

1. **Ancrage africain systématique.** Chaque leçon cite 2–3 exemples concrets : projet d'ONG locale,
   coopérative agricole, campagne de sensibilisation, petite entreprise, budget en **FCFA**, contraintes
   de **saison des pluies**, **retard de décaissement bailleur**, coordination par **WhatsApp**, terrain rural.
2. **La gestion de projet = bon sens outillé.** Présente chaque méthode (MVP, sprint, Kanban, rétro) comme
   une réponse simple à un problème réel, pas comme un dogme. Évite le jargon non expliqué.
3. **Analogies du quotidien** pour chaque concept (un chantier sans plan, vendre un petit lot au marché
   pour tester, le débriefing après un match ou après la récolte).
4. **Actionnable et low-tech.** La rubrique `practice` doit être réalisable **sur papier ou sur téléphone**,
   sans logiciel payant (tableau mural, carnet, WhatsApp, ou outil gratuit type Trello/Notion mentionné en option).
5. **Honnêteté sur les limites.** Dis quand une méthode est inutile ou trop lourde pour un petit projet.
6. **Données chiffrées prudentes.** `example.impact` doit être **mesurable** (« délais réduits de ~40 % »,
   « 3 semaines économisées ») mais formulé prudemment, sans fausse précision.
7. **Cohérence inter-leçons (fil narratif du module) :** cadrer (p1) → prioriser le MVP (p2) →
   organiser un sprint (p3) → suivre les risques (p4) → s'améliorer en rétrospective (p5).
   Réutilise le vocabulaire des glossaires précédents.
8. **Trilingue fidèle.** Le **FR est la version de référence et doit être complète**. **EN** et **HA**
   sont des **traductions fidèles et complètes** (mêmes sections, même nombre de questions, mêmes exemples).
   Le haoussa doit être naturel ; **signale dans le PR que le HA est à faire valider par un locuteur natif**.
   - **Titres courts à conserver** (déjà définis dans `localizedContent.ts`) :
     EN — `p1`="Frame a project", `p2`="Prioritize the MVP", `p3`="Organize a sprint",
     `p4`="Track risks", `p5`="Retrospective and improvement".
     HA — `p1`="Tsara aiki", `p2`="Zabi MVP", `p3`="Shirya sprint", `p4`="Bibiyar hadari",
     `p5`="Bita da ingantawa".
     (Le champ `title` de `LessonContent` peut être plus riche/pédagogique que ce titre court de sommaire.)

---

## 4. Spécification par rubrique (gabarit de qualité = module IA)

Calque la longueur/profondeur sur `lesson1` et `ia-c2…c8.ts`. Cibles :

| Rubrique | Cible | Ce qui fait la qualité |
|---|---|---|
| `objective` | 2–4 phrases | Formulé en capacité : « À la fin, vous saurez… ». |
| `content[]` | **4 sections**, 2–3 paragraphes | Titres parlants, une analogie/section, ancrage africain, `\n\n` entre paragraphes. |
| `example` | 1 cas réel | `challenge` / `solution` / `impact` **chiffré et mesurable**. |
| `practice` | titre + **3 instructions** + `observation` | Réalisable sur papier/téléphone. |
| `quiz` | **5 questions** | 4 options, 1 bonne réponse (`answer`=key), `explanation` pédagogique, distracteurs plausibles. |
| `reflection` | 1 question ouverte | Relier le cours à un projet réel de l'apprenant. |
| `glossary` | **5–6 termes** | Définition simple, 1–2 phrases, sans jargon. |

---

## 5. Plan détaillé des 5 leçons (scaffolds)

> Durées/titres courts depuis [`src/data/mockData.ts`](../src/data/mockData.ts) (module `id:'3'`).
> Les 4 angles de `content[]` sont **imposés** ; écris la prose riche, les exemples et les analogies.

### p1 — Cadrer un projet · 30 min
- **`title` suggéré (FR) :** « Cadrer un projet — objectif, utilisateurs, contraintes et résultats »
- **`objective` :** savoir définir clairement le périmètre d'un projet (objectif, parties prenantes,
  contraintes, résultats attendus) avant de se lancer, pour éviter les dérapages.
- **`content[]` :**
  1. *Pourquoi le cadrage évite l'échec* — un chantier sans plan ; la majorité des projets dérapent faute de cadrage.
  2. *Définir l'objectif et le problème* — objectif **SMART** simple ; distinguer le problème de la solution.
  3. *Identifier parties prenantes et utilisateurs* — qui bénéficie, qui décide, qui finance (bailleur), qui est impacté.
  4. *Contraintes et résultats attendus* — budget FCFA, temps, ressources, connectivité ; résultats mesurables.
- **`example` :** une ONG locale qui cadre un projet (point d'eau / alphabétisation) avant de dépenser et évite un dérapage budgétaire.
- **`practice` :** rédiger une fiche de cadrage 1 page (objectif + 3 parties prenantes + 3 contraintes + 2 résultats attendus).
- **`glossary` :** Cadrage, Partie prenante, Objectif SMART, Périmètre (scope), Livrable, Contrainte.

### p2 — Prioriser le MVP · 35 min
- **`title` suggéré :** « Prioriser le MVP — tester l'essentiel d'abord »
- **`objective` :** savoir identifier le produit/version minimum viable (MVP) — ce qu'il faut tester
  maintenant vs plus tard — pour livrer vite et apprendre à moindre coût.
- **`content[]` :**
  1. *Qu'est-ce qu'un MVP ?* — la version minimale qui prouve la valeur (vendre d'abord un petit lot au marché pour tester).
  2. *Indispensable vs souhaitable* — la méthode **MoSCoW** (Must / Should / Could / Won't).
  3. *Prioriser par valeur vs effort* — matrice simple ; commencer par fort impact / faible effort.
  4. *Éviter le piège du « tout faire »* — sur-ingénierie et ressources limitées.
- **`example` :** une coopérative qui lance un service d'infos prix du marché en **MVP par SMS** avant une vraie appli.
- **`practice` :** lister 6 fonctionnalités d'un projet, les classer en MoSCoW, en déduire le MVP.
- **`glossary` :** MVP, MoSCoW, Itération, Valeur, Périmètre minimal, Backlog.

### p3 — Organiser un sprint · 35 min
- **`title` suggéré :** « Organiser un sprint — une semaine de travail, des livrables clairs »
- **`objective` :** savoir planifier un cycle court (sprint) avec un objectif, des tâches et des
  livrables clairs, même en petite équipe et avec peu d'outils.
- **`content[]` :**
  1. *Le principe du sprint* — un cycle court et régulier (1–2 semaines) ; le rythme par étapes d'une campagne.
  2. *Objectif de sprint et backlog* — choisir ce qu'on s'engage à livrer.
  3. *Le tableau Kanban* (À faire / En cours / Fait) — visualiser le travail ; outils simples (tableau mural, WhatsApp, Trello).
  4. *Les rituels essentiels* — le point quotidien court (stand-up) et la revue de fin de sprint, adaptés au terrain/hors-ligne.
- **`example` :** une équipe terrain qui mène une campagne de sensibilisation en sprints d'une semaine, avec un point quotidien par téléphone.
- **`practice` :** planifier un sprint d'une semaine (objectif + 5 tâches + colonnes Kanban) pour un projet réel.
- **`glossary` :** Sprint, Backlog, Kanban, Stand-up (point quotidien), Livrable, Vélocité.

### p4 — Suivre les risques · 30 min
- **`title` suggéré :** « Suivre les risques — anticiper les blocages avant qu'ils n'arrivent »
- **`objective` :** savoir identifier, évaluer et suivre les risques d'un projet pour agir **avant**
  qu'ils ne bloquent l'équipe.
- **`content[]` :**
  1. *Qu'est-ce qu'un risque ?* — un événement incertain qui peut nuire ; différence risque / problème.
  2. *Risques courants en contexte africain* — retard de décaissement bailleur, saison des pluies,
     connectivité, sécurité, disponibilité des personnes.
  3. *Évaluer : probabilité × impact* — une matrice simple pour prioriser les risques majeurs.
  4. *Mitigation et suivi* — actions préventives, un responsable par risque, un registre léger, une revue régulière.
- **`example` :** un projet de distribution menacé par la saison des pluies et un retard de financement → un plan B anticipé sauve les délais.
- **`practice` :** créer un mini-registre des risques (3 risques + proba/impact + 1 action de mitigation chacun).
- **`glossary` :** Risque, Probabilité, Impact, Mitigation, Registre des risques, Plan de contingence.

### p5 — Rétrospective et amélioration · 25 min
- **`title` suggéré :** « Rétrospective et amélioration — progresser après chaque cycle »
- **`objective` :** savoir animer une rétrospective simple pour tirer les leçons d'un cycle et améliorer
  concrètement la façon de travailler de l'équipe.
- **`content[]` :**
  1. *Pourquoi la rétrospective ?* — l'amélioration continue ; le débriefing après un match ou après la récolte.
  2. *Un format simple* — « Ce qui a marché / Ce qui n'a pas marché / Ce qu'on change » dans un climat de confiance (pas de blâme).
  3. *Des leçons aux actions* — choisir 1–2 améliorations concrètes pour le prochain cycle.
  4. *Ancrer l'amélioration continue* — suivre les actions décidées, célébrer les progrès, construire la culture d'équipe.
- **`example` :** une équipe qui, après chaque cycle, ajuste sa communication et réduit ses retards de ~40 %.
- **`practice` :** animer (ou simuler) une rétro sur un projet récent (3 colonnes) et en tirer 2 actions d'amélioration.
- **`glossary` :** Rétrospective, Amélioration continue (Kaizen), Action d'amélioration, Feedback,
  Climat de confiance, Boucle d'apprentissage.

---

## 6. Definition of Done (checklist d'acceptation)

- [ ] 5 fichiers créés sous `src/data/lessons/` (`pmLessonP1`…`pmLessonP5`), chacun `Record<Language, LessonContent>`.
- [ ] Snippet de registre fourni (imports + 5 entrées `gestion-projet/pX`), sans casser les entrées IA existantes.
- [ ] **Toutes les rubriques remplies** dans les 3 langues (aucun champ vide sauf `video` = `''`).
- [ ] Chaque `content[]` a **4 sections** ; chaque `quiz` a **5 questions**.
- [ ] Chaque `quiz[].answer` correspond à une `key` ; la bonne réponse **varie** entre les questions.
- [ ] Aucun identifiant interne (`pX`) dans les textes visibles ; `id`/`lessonNumber` cohérents (p1→1 … p5→5).
- [ ] Titres EN/HA cohérents avec `localizedContent.ts` ; ancrage africain ; ton & richesse ≈ module IA.
- [ ] `video: { fr:'', en:'', ha:'' }` + commentaire `// TODO`.
- [ ] **Aucune écriture Supabase.** Livraison = fichiers TS + snippet uniquement.
- [ ] `tsc --noEmit -p tsconfig.app.json` passe.
- [ ] Note PR : « traductions HA à faire valider par un locuteur natif ».

---

## 7. Vidéos — comment laisser les emplacements

- **Ne génère pas** les vidéos. Laisse `video: { fr:'', en:'', ha:'' }` (le placeholder « vidéo à venir » s'affiche proprement).
- Plus tard, l'auteur humain génère une vidéo par langue via **NotebookLM** (§8), la publie sur **YouTube (non répertorié)**,
  puis colle l'URL **embarquée** `https://www.youtube.com/embed/VIDEO_ID` dans le champ correspondant.

---

## 8. Prompts NotebookLM (pour l'auteur humain — 1 vidéo par leçon, par langue)

> **Workflow :** créer un notebook → **ajouter comme source** le texte FR de la leçon
> (`objective` + `content[]` + `example` + `glossary`) → régler la **langue de sortie** (Français,
> puis Anglais, puis Haoussa si dispo) → générer une **Video Overview** avec le prompt ci-dessous →
> publier sur YouTube (non répertorié) → coller `https://www.youtube.com/embed/ID`.

### 8.0 Gabarit réutilisable
```
Tu es un formateur de Karatou Academy qui s'adresse à des professionnels et étudiants africains
francophones (ONG, coopératives, petites structures, souvent sur mobile et faible connectivité).
Crée une vidéo pédagogique de 5 à 7 minutes sur : [SUJET]. Objectif : [OBJECTIF].
Couvre simplement, dans l'ordre : [LES 4 SECTIONS]. Illustre chaque point avec un exemple africain
concret ([EXEMPLES]). Présente la gestion de projet comme du bon sens outillé, pas un dogme.
Ton clair, chaleureux, concret ; explique chaque terme avec une analogie du quotidien. Termine par
une action pratique réalisable sur papier ou téléphone. Évite le jargon. Langue : français.
```

### 8.1 — p1 · Cadrer un projet
```
Formateur Karatou Academy, public africain francophone (ONG, coopératives). Vidéo de 5–7 min sur le
cadrage de projet. Objectif : savoir définir objectif, parties prenantes, contraintes et résultats
attendus avant de se lancer. Couvre : (1) pourquoi le cadrage évite l'échec (un chantier sans plan),
(2) définir un objectif SMART et le vrai problème, (3) identifier parties prenantes et utilisateurs
(bénéficiaires, décideurs, bailleur), (4) contraintes (budget FCFA, temps, connectivité) et résultats
mesurables. Exemple : une ONG qui cadre un projet de point d'eau avant de dépenser. Ton concret,
analogies du quotidien. Termine par : rédigez votre fiche de cadrage 1 page. Langue : français.
```

### 8.2 — p2 · Prioriser le MVP
```
Formateur Karatou Academy, public africain francophone. Vidéo de 5–7 min sur la priorisation et le MVP.
Objectif : identifier la version minimale qui prouve la valeur, et ce qu'on teste maintenant vs plus tard.
Couvre : (1) ce qu'est un MVP (vendre d'abord un petit lot au marché pour tester), (2) indispensable vs
souhaitable avec la méthode MoSCoW, (3) prioriser par valeur vs effort, (4) éviter le piège du « tout
faire ». Exemple : une coopérative qui lance un service d'infos prix par SMS avant une appli. Ton concret,
honnête sur les ressources limitées. Termine par : classez vos fonctionnalités en MoSCoW. Langue : français.
```

### 8.3 — p3 · Organiser un sprint
```
Formateur Karatou Academy, public africain francophone. Vidéo de 5–7 min sur l'organisation d'un sprint.
Objectif : planifier un cycle court avec objectif, tâches et livrables clairs, même en petite équipe.
Couvre : (1) le principe du sprint (cycle court et régulier), (2) objectif de sprint et backlog, (3) le
tableau Kanban (À faire / En cours / Fait) avec des outils simples (tableau mural, WhatsApp, Trello),
(4) les rituels essentiels (point quotidien, revue de fin de sprint) adaptés au terrain et au hors-ligne.
Exemple : une équipe qui mène une campagne de sensibilisation en sprints d'une semaine. Ton concret.
Termine par : planifiez votre sprint d'une semaine. Langue : français.
```

### 8.4 — p4 · Suivre les risques
```
Formateur Karatou Academy, public africain francophone. Vidéo de 5–6 min sur le suivi des risques.
Objectif : identifier, évaluer et suivre les risques pour agir avant qu'ils ne bloquent l'équipe.
Couvre : (1) ce qu'est un risque (vs un problème), (2) risques courants en contexte africain (retard de
décaissement, saison des pluies, connectivité, sécurité, disponibilité des personnes), (3) évaluer par
probabilité × impact, (4) mitigation et suivi (action préventive, responsable, registre léger, revue
régulière). Exemple : une distribution menacée par la saison des pluies, sauvée par un plan B. Ton
concret, anticipateur. Termine par : créez votre mini-registre des risques. Langue : français.
```

### 8.5 — p5 · Rétrospective et amélioration
```
Formateur Karatou Academy, public africain francophone. Vidéo de 4–6 min sur la rétrospective.
Objectif : animer une rétrospective simple pour tirer les leçons d'un cycle et s'améliorer concrètement.
Couvre : (1) pourquoi la rétrospective (amélioration continue, comme un débriefing après la récolte),
(2) le format simple (ce qui a marché / n'a pas marché / ce qu'on change) dans un climat de confiance
sans blâme, (3) transformer les leçons en 1–2 actions concrètes, (4) ancrer l'amélioration continue
(suivre les actions, célébrer les progrès). Exemple : une équipe qui réduit ses retards de 40 % au fil
des cycles. Ton bienveillant, orienté progrès. Termine par : animez une rétro sur votre dernier projet.
Langue : français.
```

> **Variantes EN / HA :** même prompt, dernière ligne remplacée par « Language: English. » /
> « Harshe: Hausa. » et langue de sortie NotebookLM ajustée. Garde la même structure et les mêmes exemples.

---

## 9. Référence « gold standard »

Avant de rédiger, **lis** `lesson1` dans [`src/data/lessonContent.ts`](../src/data/lessonContent.ts)
**et** les leçons déjà livrées du module IA dans [`src/data/lessons/`](../src/data/lessons) (`ia-c2…c8.ts`) :
c'est exactement le niveau de qualité, de longueur, de ton et de format attendu pour `p1`→`p5`.
En cas de doute sur un détail de format, **calque ces fichiers**.
```
