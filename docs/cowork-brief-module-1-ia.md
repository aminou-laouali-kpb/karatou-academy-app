# Brief de génération — Module 1 « Intelligence Artificielle » (leçons c2 → c8)

> **À l'attention de CoWork.** Ce document est un cahier des charges complet. Ta mission :
> rédiger le contenu pédagogique **complet et trilingue (FR / EN / HA)** des leçons **c2 à c8**
> du Module 1 de Karatou Academy, au format `LessonContent`, et les brancher dans le registre
> existant. La leçon **c1 est déjà rédigée et sert de référence absolue (« gold standard »)** :
> respecte son niveau de qualité, sa longueur, son ton et sa structure.

---

## 0. TL;DR — ce que tu dois livrer

1. **7 leçons** (`c2`→`c8`) au format `LessonContent`, chacune en **3 langues** (`fr`, `en`, `ha`),
   **toutes les rubriques remplies** (aucun champ vide sauf les URLs vidéo, voir §7).
2. **Code prêt à brancher** : un fichier TS par leçon sous `src/data/lessons/` + l'enregistrement
   dans le registre `authoredLessons` de `src/data/localizedContent.ts`.
3. Le champ `video` reste **`{ fr: '', en: '', ha: '' }`** (les URLs seront ajoutées plus tard
   après génération NotebookLM — voir §7). Laisse un commentaire `// TODO: URL NotebookLM/YouTube`.
4. La compilation TypeScript doit passer (`npm run build`) et les tests existants rester verts.

Les **prompts NotebookLM** (§8) sont fournis ici pour l'auteur humain : tu n'as **pas** à générer
les vidéos, seulement à laisser les emplacements prêts.

---

## 1. Contexte produit & audience

**Karatou Academy** est une plateforme de formation certifiante (FR/EN/HA) destinée à des
**professionnels et étudiants africains francophones**, en priorité du **secteur humanitaire,
du développement et des organisations locales** (ex. PNUD Niger). Beaucoup travaillent en
**zones à faible connectivité**, sur **mobile**, avec des **données sensibles de bénéficiaires**.

**Promesse pédagogique :** démystifier, donner confiance, rendre immédiatement applicable.
Pas de jargon gratuit, pas de hype. Chaque concept est ancré dans une **réalité africaine
concrète** (agriculture, santé, éducation, Mobile Money, ONG, tontine, terrain rural).

**Ton :** clair, chaleureux, professionnel, encourageant. Phrases courtes. Analogies du quotidien.
Vouvoiement ("vous"). On valorise l'apprenant et son contexte ; on ne le condescend jamais.

---

## 2. Cible technique exacte (à respecter au caractère près)

### 2.1 Le contrat de données — `LessonContent`

Source de vérité : [`src/data/lessonContent.ts`](../src/data/lessonContent.ts).

```ts
export interface QuizQuestion {
  question: string;
  options: { key: string; text: string }[]; // 4 options, keys "A" | "B" | "C" | "D"
  answer: string;                            // DOIT correspondre à une `key` d'option (ex: "B")
  explanation: string;                       // pourquoi cette réponse est correcte
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface LessonContent {
  id: string;            // = l'id du cours, ex "c2"
  lessonNumber: number;  // = position, ex 2
  title: string;         // titre pédagogique riche (pas juste "Comprendre les LLMs")
  objective: string;     // RUBRIQUE "Objectif/Intro" — 2 à 4 phrases, ce que l'apprenant saura faire
  video: { fr: string; en: string; ha: string }; // laisser "" pour l'instant (voir §7)
  content: { title: string; body: string }[];    // 4 blocs (voir §4)
  example: { title: string; challenge: string; solution: string; impact: string };
  practice: { title: string; instructions: string[]; observation: string };
  quiz: QuizQuestion[];  // 5 questions (c2–c7) ; 8 à 10 pour c8 (évaluation finale)
  reflection: string;    // 1 question ouverte
  glossary: GlossaryItem[]; // 5 à 6 termes
}
```

### 2.2 Le mécanisme de branchement

- Les leçons rédigées vivent dans le registre `authoredLessons` de
  [`src/data/localizedContent.ts`](../src/data/localizedContent.ts), **clé = `` `${moduleSlug}/${courseId}` ``**.
- `LessonPlayer` appelle `getAuthoredLesson(moduleSlug, courseId, lang)` ; sans entrée, il tombe sur
  le placeholder générique `buildLesson()` — **c'est ce comportement générique que ces leçons remplacent**.
- `moduleSlug` du Module 1 = **`intelligence-artificielle`**. Les `courseId` sont **`c2`…`c8`**.

### 2.3 Organisation des fichiers (recommandée par la doc)

Pour garder les fichiers petits (cf. [docs/authoring-lessons.md](authoring-lessons.md), section « Tips »),
crée **un fichier par leçon** :

```
src/data/lessons/ia-c2-llms.ts          -> export const iaLessonC2: Record<Language, LessonContent>
src/data/lessons/ia-c3-prompting.ts     -> export const iaLessonC3
src/data/lessons/ia-c4-organisations.ts -> export const iaLessonC4
src/data/lessons/ia-c5-automatisation.ts-> export const iaLessonC5
src/data/lessons/ia-c6-ethique.ts       -> export const iaLessonC6
src/data/lessons/ia-c7-outils.ts        -> export const iaLessonC7
src/data/lessons/ia-c8-evaluation.ts    -> export const iaLessonC8
```

Chaque fichier :

```ts
import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

export const iaLessonC2: Record<Language, LessonContent> = {
  fr: { /* ... LessonContent complet ... */ },
  en: { /* ... traduction fidèle ... */ },
  ha: { /* ... traduction fidèle ... */ },
};
```

Puis **enregistre-les** dans `src/data/localizedContent.ts` :

```ts
import { iaLessonC2 } from './lessons/ia-c2-llms';
import { iaLessonC3 } from './lessons/ia-c3-prompting';
// ... etc

const authoredLessons: Record<string, Record<Language, LessonContent>> = {
  'intelligence-artificielle/c1': lesson1ByLanguage,
  'intelligence-artificielle/c2': iaLessonC2,
  'intelligence-artificielle/c3': iaLessonC3,
  'intelligence-artificielle/c4': iaLessonC4,
  'intelligence-artificielle/c5': iaLessonC5,
  'intelligence-artificielle/c6': iaLessonC6,
  'intelligence-artificielle/c7': iaLessonC7,
  'intelligence-artificielle/c8': iaLessonC8,
};
```

### 2.4 Contraintes techniques impératives

- **`Language`** vaut `'fr' | 'en' | 'ha'` (cf. `src/data/translations.ts`). Les trois sont **obligatoires**.
- `quiz[].answer` **doit** être égal à une `key` existante (`"A"`/`"B"`/`"C"`/`"D"`). Varie la bonne
  réponse entre les questions (ne mets pas toujours "B").
- Dans `content[].body`, **sépare les paragraphes par une ligne vide `\n\n`** : chaque bloc est rendu
  comme un paragraphe distinct. Vise **2 à 3 paragraphes par section**.
- Échappe correctement les apostrophes/guillemets dans les chaînes TS (le repo utilise `\"` et
  l'apostrophe typographique `'` ou l'apostrophe droite échappée selon le style de `lesson1.ts`).
- `id` = l'id du cours (`"c2"`…) ; `lessonNumber` = 2…8.
- **Ne touche pas** à `mockData.ts`, `lessonContent.ts`, ni au fallback `buildLesson()`.

---

## 3. Charte de rédaction pédagogique (NON négociable)

1. **Ancrage africain systématique.** Chaque leçon cite au moins 2–3 exemples concrets du contexte
   (Mobile Money M-Pesa/Orange Money, agriculture/manioc, ONG, PNUD, santé communautaire, langues
   locales, hors-ligne, tontine, terrain rural). Pas d'exemples génériques « entreprise américaine ».
2. **Du concret avant l'abstrait.** On part d'un problème réel → on explique → on généralise.
3. **Analogies du quotidien** pour tout concept technique (comme « le gestionnaire de tontine » ou
   « montrer des photos de feuilles de manioc à un enfant » dans c1).
4. **Honnêteté sur les limites.** On dit clairement ce que l'IA **ne** fait **pas** bien (hallucinations,
   biais, données sensibles). On ne survend pas.
5. **Actionnable.** À la fin de chaque leçon, l'apprenant doit pouvoir **faire** quelque chose
   (la rubrique `practice` est réalisable depuis un simple téléphone).
6. **Données chiffrées crédibles.** Quand tu cites une statistique (comme « 93 % » dans c1),
   reste dans des ordres de grandeur réalistes et formulés prudemment (« environ », « selon
   l'étude Humanitarian AI 2025 »). Ne fabrique pas de chiffres faussement précis.
7. **Cohérence inter-leçons.** Réutilise le vocabulaire défini dans les glossaires précédents.
   Le module raconte une progression : définir l'IA (c1) → comprendre les LLM (c2) → leur parler (c3)
   → les déployer en organisation (c4) → automatiser (c5) → le faire de façon éthique (c6) →
   choisir ses outils (c7) → valider (c8).
8. **Trilingue fidèle.** Le **FR est la version de référence et doit être complète**. L'**EN** et le
   **HA (haoussa)** sont des **traductions fidèles et complètes** de la version FR (mêmes sections,
   même nombre de questions de quiz, mêmes exemples). Le haoussa doit être naturel ; signale dans le
   PR que le HA est à faire valider par un locuteur natif.
   - Conserve la **cohérence des titres** déjà définis dans `localizedContent.ts` :
     EN `c2`="Understanding LLMs", `c3`="Prompt Engineering", `c4`="AI in African organizations",
     `c5`="Task automation", `c6`="AI ethics and bias", `c7`="Practical AI tools", `c8`="Final assessment".
     (le champ `title` de `LessonContent` peut être plus riche/pédagogique ; le titre court du sommaire
     vient déjà de `localizedContent.ts`.)

---

## 4. Spécification par rubrique (gabarit de qualité = c1)

Référence vivante : ouvre [`src/data/lessonContent.ts`](../src/data/lessonContent.ts) (la leçon `lesson1`)
et calque longueur/profondeur/ton. Cibles par rubrique :

| Rubrique | Cible quantitative | Ce qui fait la qualité |
|---|---|---|
| `objective` | 2–4 phrases | Formulé en « capacité » : « À la fin, vous saurez… ». Démystifie d'emblée. |
| `content[]` | **4 sections**, 2–3 paragraphes chacune | Titres parlants. Une analogie par section. Ancrage africain. `\n\n` entre paragraphes. |
| `example` | 1 cas réel | `challenge` (le problème terrain), `solution` (ce qui a été fait), `impact` **chiffré et mesurable**. |
| `practice` | titre + **3 instructions** + `observation` | Réalisable sur téléphone, sans matériel. `observation` = quoi remarquer/noter. |
| `quiz` | **5 questions** (c2–c7) · **8–10** (c8) | 4 options chacune, 1 bonne réponse (`answer`=key), `explanation` pédagogique. Distracteurs plausibles. |
| `reflection` | 1 question ouverte | Pousse à relier le cours à SA réalité ou à un enjeu éthique/data. Pas de bonne réponse unique. |
| `glossary` | **5–6 termes** | Définition simple, sans jargon, en 1–2 phrases. Inclure les termes nouveaux de la leçon. |

---

## 5. Plan détaillé des 7 leçons (scaffolds)

> Les durées/titres courts viennent de [`src/data/mockData.ts`](../src/data/mockData.ts) (module id `'1'`).
> Les 4 angles de `content[]` ci-dessous sont **imposés** (c'est la colonne vertébrale pédagogique) ;
> à toi d'écrire la prose riche, les exemples et les analogies.

### c2 — Comprendre les LLMs (Grands modèles de langage) · 30 min
- **`title` suggéré (FR) :** « Comprendre les LLMs — comment ChatGPT et Claude “parlent” vraiment »
- **`objective` :** comprendre ce qu'est un grand modèle de langage, comment il génère du texte
  (prédiction du mot suivant, pas une base de connaissances), et savoir reconnaître ses forces
  et ses limites pour l'utiliser avec discernement.
- **`content[]` (4 sections) :**
  1. *Qu'est-ce qu'un LLM ?* — ChatGPT, Claude, Gemini ; une machine qui **prédit le mot suivant**,
     entraînée sur d'immenses corpus ; ce n'est **pas** une encyclopédie qui « sait ».
  2. *Comment il « lit » votre message* — notion de **tokens** et de **fenêtre de contexte**
     (analogie : il ne « retient » que ce qui tient dans sa mémoire de travail).
  3. *Forces et limites* — fluidité et polyvalence, MAIS **hallucinations**, **biais**,
     **date de coupure** (knowledge cutoff), et « confiance ≠ exactitude ».
  4. *Bien l'utiliser en contexte africain* — langues locales et qualité variable, vérification
     systématique des faits, prudence avec les **données sensibles** de bénéficiaires.
- **`example` :** une ONG rédige ses rapports bailleurs avec un LLM → gain de temps réel, mais un
  **chiffre halluciné** dans un brouillon a failli passer → mise en place d'une relecture humaine.
- **`practice` :** demander à un assistant une info vérifiable sur votre pays/secteur, puis vérifier
  une affirmation et repérer une éventuelle hallucination.
- **`glossary` :** LLM, Token, Hallucination, Fenêtre de contexte, Date de coupure (knowledge cutoff),
  Fine-tuning.

### c3 — Prompt Engineering (rédiger de bonnes consignes) · 35 min
- **`title` suggéré :** « Prompt Engineering — donner les bonnes consignes à l'IA »
- **`objective` :** savoir rédiger des consignes (prompts) efficaces — rôle, contexte, tâche, format,
  exemples — pour obtenir des résultats fiables, professionnels et réutilisables.
- **`content[]` :**
  1. *Anatomie d'un bon prompt* — **Rôle + Contexte + Tâche + Format** (avant/après sur un cas simple).
  2. *Techniques qui marchent* — donner des **exemples** (few-shot), demander **étape par étape**,
     **contraindre le format** (liste, tableau, e-mail formel).
  3. *Itérer et corriger* — un prompt se travaille en 2–3 allers-retours ; comment reformuler.
  4. *Prompts pour le travail réel* — note de synthèse, traduction FR↔EN↔langue locale, e-mail bailleur,
     compte-rendu de réunion terrain.
- **`example` :** passage d'un prompt vague (« écris un rapport ») à un prompt structuré → qualité
  nettement supérieure et temps de retouche divisé.
- **`practice` :** écrire un prompt complet (Rôle/Contexte/Tâche/Format) pour une tâche réelle de
  l'apprenant, puis l'améliorer une fois.
- **`glossary` :** Prompt, Contexte, Few-shot (exemples), Rôle / system prompt, Itération, Format de sortie.

### c4 — IA dans les organisations africaines · 40 min
- **`title` suggéré :** « L'IA dans votre organisation — choisir les bons cas d'usage »
- **`objective` :** identifier et prioriser les cas d'usage IA pertinents dans une organisation locale,
  en tenant compte de la valeur, de la faisabilité et des contraintes du terrain.
- **`content[]` :**
  1. *Cartographier les cas d'usage* — où l'IA fait gagner du temps, améliore la qualité ou élargit l'accès.
  2. *Prioriser* — matrice **valeur vs effort**, disponibilité des données, niveau de risque.
  3. *Contraintes locales* — connectivité, électricité, langues, coût, compétences disponibles.
  4. *Conduite du changement & adoption* — confiance, formation, gouvernance légère, commencer petit (pilote).
- **`example` :** une organisation (type PNUD/ONG) choisit **un** cas d'usage (tri de listes de
  bénéficiaires ou rédaction de rapports) et obtient un résultat mesurable avant de passer à l'échelle.
- **`practice` :** lister 3 tâches de son organisation, les placer sur une mini-matrice valeur/effort,
  choisir le meilleur candidat pilote.
- **`glossary` :** Cas d'usage, ROI, Pilote (POC), Conduite du changement, Gouvernance des données,
  Passage à l'échelle.

### c5 — Automatisation de tâches · 30 min
- **`title` suggéré :** « Automatiser sans perdre le contrôle — l'humain dans la boucle »
- **`objective` :** automatiser un processus simple et répétitif tout en gardant un contrôle humain
  (human-in-the-loop) et en mesurant le gain réel.
- **`content[]` :**
  1. *Quoi automatiser ?* — tâches **répétitives et à règles claires** ; ce qu'il ne faut PAS automatiser.
  2. *Outils accessibles* — combiner un assistant IA avec des outils simples / no-code et un tableur.
  3. *Garder l'humain dans la boucle* — points de validation, contrôle qualité, responsabilité.
  4. *Mesurer gain et risques* — temps gagné vs risque d'erreur et de dépendance.
- **`example` :** automatisation du tri/classement d'e-mails entrants ou de la synthèse de formulaires
  terrain → X heures économisées par semaine, avec validation humaine sur les cas sensibles.
- **`practice` :** décrire un workflow répétitif de son quotidien, identifier l'étape automatisable et
  le point de contrôle humain à conserver.
- **`glossary` :** Automatisation, Human-in-the-loop, Workflow, No-code, Déclencheur (trigger),
  Point de contrôle.

### c6 — Éthique et biais en IA · 25 min
- **`title` suggéré :** « Éthique, biais et protection des données — utiliser l'IA de façon responsable »
- **`objective` :** reconnaître les risques (biais, confidentialité, désinformation) et appliquer les
  contrôles essentiels pour protéger les données des bénéficiaires et garder la confiance.
- **`content[]` :**
  1. *D'où viennent les biais ?* — données d'entraînement non représentatives ; conséquences concrètes.
  2. *Confidentialité & souveraineté des données* — données personnelles de bénéficiaires, cadres
     locaux et internationaux, où vont les données qu'on saisit dans un outil IA.
  3. *Désinformation & vérification* — contenus crédibles mais faux, deepfakes, devoir de vérifier.
  4. *Bonnes pratiques & responsabilité* — transparence, **consentement éclairé**, supervision humaine,
     éviter la **Shadow AI** (usage non encadré).
- **`example` :** un système biaisé (reconnaissance qui échoue sur peaux foncées ou langues locales)
  → diagnostic → correction par des données plus représentatives et une supervision humaine.
- **`practice` :** prendre un cas d'usage de son organisation et lister données sensibles en jeu +
  un garde-fou pour chacune (anonymisation, consentement, relecture).
- **`glossary` :** Biais, Données personnelles, Souveraineté des données, Consentement éclairé,
  Transparence, Shadow AI.

### c7 — Outils IA pratiques · 35 min
- **`title` suggéré :** « Votre boîte à outils IA — choisir et combiner les bons outils »
- **`objective` :** comparer et choisir les outils IA utiles pour apprendre, produire et analyser,
  selon le besoin, le budget et les contraintes (hors-ligne, langue, confidentialité).
- **`content[]` :**
  1. *Panorama des outils* — assistants conversationnels, transcription/traduction, génération d'images,
     analyse de documents (ex. **NotebookLM**).
  2. *Critères de choix* — coût/freemium, fonctionnement hors-ligne, confidentialité, langues supportées.
  3. *Combiner les outils dans un flux* — ex. transcription → synthèse → traduction → rapport.
  4. *Démarrer gratuitement et monter en compétence* — ressources gratuites, pratique régulière.
- **`example` :** une équipe terrain compose une boîte à outils IA **gratuite** (rapports + traduction +
  transcription de réunions) et réduit fortement son temps administratif.
- **`practice` :** choisir une tâche, comparer 2 outils sur 3 critères (coût, langue, confidentialité),
  justifier son choix.
- **`glossary` :** Assistant conversationnel, Transcription, NotebookLM, Outil no-code, Freemium, API.

### c8 — Évaluation finale · 20 min
- **`title` suggéré :** « Évaluation finale — validez vos acquis et obtenez votre certificat »
- **`objective` :** valider l'ensemble des acquis du module (c1→c7) et débloquer le certificat
  numérique vérifiable.
- **`content[]` (4 sections de SYNTHÈSE, pas de nouveau contenu) :**
  1. *L'essentiel de l'IA* — définition, ML, IA générative (rappel c1).
  2. *LLM & prompts* — forces/limites + bonnes consignes (rappel c2–c3).
  3. *Déployer & automatiser* — cas d'usage, priorisation, human-in-the-loop (rappel c4–c5).
  4. *Responsabilité & outils* — biais, données, choix d'outils (rappel c6–c7).
- **`example` :** étude de cas **transversale** — une organisation déploie l'IA de bout en bout de
  façon responsable (choix du cas, prompt, automatisation, garde-fous éthiques, outil) avec impact mesuré.
- **`practice` :** rédiger un **mini-plan d'adoption IA personnel** : 1 cas d'usage + 1 outil +
  1 garde-fou éthique + 1 indicateur de succès.
- **`quiz` : 8 à 10 questions cumulatives** couvrant c1→c7 (au moins une question par leçon).
- **`reflection` :** plan d'action concret post-formation : qu'allez-vous mettre en place dans les
  30 prochains jours ?
- **`glossary` :** récapitulatif de 6–8 termes transversaux essentiels du module.

---

## 6. Definition of Done (checklist d'acceptation)

- [ ] 7 fichiers créés sous `src/data/lessons/` (`iaLessonC2`…`iaLessonC8`), chacun `Record<Language, LessonContent>`.
- [ ] Les 7 entrées ajoutées au registre `authoredLessons` de `src/data/localizedContent.ts`.
- [ ] **Toutes les rubriques remplies** dans les 3 langues (aucun champ vide, sauf `video` = `''`).
- [ ] Chaque `content[]` a **4 sections** ; `quiz` a **5 questions** (c2–c7) ou **8–10** (c8).
- [ ] Chaque `quiz[].answer` correspond à une `key` d'option ; la bonne réponse **varie** entre questions.
- [ ] `id`/`lessonNumber` cohérents (c2→2 … c8→8). Titres EN cohérents avec `localizedContent.ts`.
- [ ] Ancrage africain présent dans chaque leçon ; ton conforme à §3 ; niveau de richesse ≈ `lesson1`.
- [ ] `video: { fr: '', en: '', ha: '' }` avec un commentaire `// TODO` (URLs ajoutées plus tard).
- [ ] `npm run build` passe ; `npm run lint` et `npm test` restent verts.
- [ ] PR avec une note : « traductions HA à faire valider par un locuteur natif ».

---

## 7. Vidéos — comment les emplacements doivent être laissés

- **Ne génère pas** les vidéos. Laisse `video: { fr: '', en: '', ha: '' }`.
  Une chaîne vide affiche proprement le placeholder « vidéo à venir » (cf. `LessonPlayer`).
- Plus tard, l'auteur humain générera une vidéo par langue via **NotebookLM** (§8), la publiera sur
  **YouTube en non répertorié**, puis collera l'URL **embarquée** au format
  `https://www.youtube.com/embed/VIDEO_ID` dans le champ correspondant (`fr`/`en`/`ha`).
  (C'est exactement le format utilisé par `lesson1` : `https://www.youtube.com/embed/kmSmJwpZAmY`.)

---

## 8. Prompts NotebookLM (pour l'auteur humain — 1 vidéo par leçon, par langue)

> **Workflow conseillé :**
> 1. Une fois la leçon générée, crée un *notebook* NotebookLM et **ajoute comme source** le contenu
>    de la leçon (colle le texte FR des rubriques `objective` + `content[]` + `example` + `glossary`).
>    Ajoute 1–2 sources de référence fiables si besoin.
> 2. Règle la **langue de sortie** de NotebookLM (Paramètres → langue) sur **Français**, puis génère
>    une **Video Overview** (ou Audio Overview) en collant le prompt de personnalisation ci-dessous.
> 3. Refais la génération en réglant la langue sur **Anglais**, puis (si disponible) une langue
>    proche pour le **Haoussa** — sinon, garde FR/EN et complète le HA plus tard.
> 4. Publie sur YouTube (non répertorié) → récupère l'ID → colle `https://www.youtube.com/embed/ID`.

### 8.0 Gabarit réutilisable (remplace les [crochets])

```
Tu es un formateur de Karatou Academy qui s'adresse à des professionnels et étudiants
africains francophones (secteur humanitaire, développement, ONG, souvent en mobile et
faible connectivité). Crée une vidéo pédagogique de 5 à 7 minutes sur : [SUJET DE LA LEÇON].

Objectif d'apprentissage : [OBJECTIF].
Couvre, dans l'ordre et simplement, ces points : [LISTER LES 4 SECTIONS].
Illustre chaque point avec un exemple africain concret ([EXEMPLES PERTINENTS]).
Ton : clair, chaleureux, concret, sans jargon ; explique chaque terme technique avec une analogie
du quotidien. Sois honnête sur les limites de l'IA. Termine par un appel à l'action pratique
(« voici ce que vous pouvez essayer dès aujourd'hui sur votre téléphone »).
Évite la hype et les promesses irréalistes. Langue : français.
```

### 8.1 — c2 · Comprendre les LLMs
```
Tu es un formateur de Karatou Academy pour des professionnels africains francophones. Crée une
vidéo de 5–7 min expliquant comment fonctionnent vraiment les grands modèles de langage (ChatGPT,
Claude, Gemini). Objectif : que l'apprenant comprenne qu'un LLM PRÉDIT le mot suivant et n'est pas
une encyclopédie, et qu'il sache reconnaître ses limites. Couvre : (1) ce qu'est un LLM,
(2) tokens et fenêtre de contexte (analogie de mémoire de travail), (3) forces et limites
(hallucinations, biais, date de coupure, confiance ≠ exactitude), (4) bon usage en contexte africain
(langues locales, vérification, données sensibles de bénéficiaires). Exemple : une ONG qui rédige
des rapports bailleurs et détecte un chiffre halluciné. Ton clair, concret, analogies du quotidien,
honnête sur les limites. Termine par un conseil pratique applicable sur téléphone. Langue : français.
```

### 8.2 — c3 · Prompt Engineering
```
Formateur Karatou Academy, public africain francophone. Vidéo de 5–7 min sur l'art d'écrire de bonnes
consignes (prompts) à une IA. Objectif : savoir structurer un prompt (Rôle + Contexte + Tâche + Format)
pour des résultats fiables et professionnels. Couvre : (1) l'anatomie d'un bon prompt avec un avant/après,
(2) techniques efficaces (donner des exemples, étape par étape, imposer le format), (3) itérer et corriger,
(4) prompts pour le travail réel (note de synthèse, traduction, e-mail bailleur, compte-rendu de réunion).
Montre la différence entre « écris un rapport » et un prompt structuré. Ton concret, exemples africains,
sans jargon. Termine par un exercice de prompt à essayer aujourd'hui. Langue : français.
```

### 8.3 — c4 · IA dans les organisations africaines
```
Formateur Karatou Academy, public africain francophone (ONG, PNUD, organisations locales). Vidéo de
6–7 min sur le choix des bons cas d'usage de l'IA dans une organisation. Objectif : savoir identifier
et prioriser un cas d'usage réaliste. Couvre : (1) cartographier les cas d'usage (gain de temps, qualité,
accès), (2) prioriser avec une matrice valeur/effort et le risque, (3) contraintes locales (connectivité,
électricité, langues, coût, compétences), (4) conduite du changement et adoption (commencer par un pilote,
formation, confiance). Exemple : une organisation qui choisit UN cas d'usage et mesure son impact avant
de passer à l'échelle. Ton pragmatique, honnête sur les obstacles. Termine par un conseil pour démarrer
petit. Langue : français.
```

### 8.4 — c5 · Automatisation de tâches
```
Formateur Karatou Academy, public africain francophone. Vidéo de 5–6 min sur l'automatisation de tâches
répétitives sans perdre le contrôle humain. Objectif : savoir automatiser un processus simple en gardant
l'humain dans la boucle. Couvre : (1) quoi automatiser (tâches répétitives à règles claires) et quoi NE
PAS automatiser, (2) outils accessibles (assistant IA + outils simples/no-code + tableur), (3) garder
l'humain dans la boucle (validation, contrôle qualité), (4) mesurer gain et risques. Exemple : tri/synthèse
de formulaires terrain ou d'e-mails avec validation humaine. Ton concret, prudent sur les risques d'erreur
et de dépendance. Termine par une tâche à repérer pour l'automatiser. Langue : français.
```

### 8.5 — c6 · Éthique et biais en IA
```
Formateur Karatou Academy, public africain francophone manipulant des données de bénéficiaires. Vidéo de
5–6 min sur l'usage responsable de l'IA. Objectif : reconnaître biais, risques de confidentialité et
désinformation, et appliquer des garde-fous. Couvre : (1) d'où viennent les biais (données non
représentatives), (2) confidentialité et souveraineté des données (où vont les données qu'on saisit),
(3) désinformation et vérification, (4) bonnes pratiques (transparence, consentement éclairé, supervision
humaine, éviter la Shadow AI). Exemple : un système biaisé qui échoue sur des peaux foncées ou des langues
locales, puis sa correction. Ton sérieux mais accessible, orienté protection des personnes. Termine par
un garde-fou simple à adopter. Langue : français.
```

### 8.6 — c7 · Outils IA pratiques
```
Formateur Karatou Academy, public africain francophone. Vidéo de 5–7 min pour composer une boîte à outils
IA utile et abordable. Objectif : savoir choisir et combiner les bons outils selon le besoin et les
contraintes. Couvre : (1) panorama (assistants conversationnels, transcription/traduction, génération
d'images, analyse de documents comme NotebookLM), (2) critères de choix (coût/freemium, hors-ligne,
confidentialité, langues), (3) combiner les outils dans un flux (transcription → synthèse → traduction →
rapport), (4) démarrer gratuitement et progresser. Exemple : une équipe terrain qui réduit son temps
administratif avec des outils gratuits. Ton pratique et concret. Termine par une boîte à outils gratuite
à tester. Langue : français.
```

### 8.7 — c8 · Évaluation finale (vidéo de synthèse)
```
Formateur Karatou Academy, public africain francophone. Vidéo de synthèse de 4–6 min qui récapitule tout
le module Intelligence Artificielle avant l'évaluation finale. Objectif : consolider les acquis et motiver
l'apprenant à obtenir son certificat. Récapitule en 4 temps : (1) l'essentiel de l'IA (définition, machine
learning, IA générative), (2) LLM et prompts (forces/limites, bonnes consignes), (3) déployer et automatiser
(cas d'usage, priorisation, humain dans la boucle), (4) responsabilité et outils (biais, données, choix
d'outils). Termine en encourageant l'apprenant à rédiger son mini-plan d'adoption IA (1 cas d'usage,
1 outil, 1 garde-fou) et à passer l'évaluation finale. Ton récapitulatif, valorisant, concret. Langue : français.
```

> **Variantes EN / HA :** reprends le même prompt en remplaçant la dernière ligne par
> « Language: English. » / « Harshe: Hausa. » et en réglant la langue de sortie de NotebookLM en
> conséquence. Garde rigoureusement la même structure et les mêmes exemples que la version FR.

---

## 9. Référence « gold standard »

Avant de rédiger, **lis intégralement** `lesson1` dans
[`src/data/lessonContent.ts`](../src/data/lessonContent.ts) et sa version trilingue
`lesson1ByLanguage` dans [`src/data/localizedContent.ts`](../src/data/localizedContent.ts).
C'est le niveau de qualité, de longueur et de ton attendu pour c2→c8. En cas de doute sur un
détail de format, **calque exactement `lesson1`**.
