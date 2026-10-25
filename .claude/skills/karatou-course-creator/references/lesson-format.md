# Format d'une leçon Karatou — contrat de génération

Ce document est le **contrat** que doit respecter chaque fichier de leçon. Le donner tel
quel aux sous-agents de génération. En cas d'accès au repo, la source de vérité ultime de
l'interface est `src/data/lessonContent.ts` — la relire si elle a pu évoluer.

## L'interface TypeScript

```ts
export interface QuizQuestion {
  question: string;
  options: { key: string; text: string }[];   // exactement A, B, C, D
  answer: string;                              // une key existante
  explanation: string;                         // pourquoi c'est la bonne réponse
}

export interface GlossaryItem { term: string; definition: string; }

export interface LessonContent {
  id: string;              // id interne du cours, ex. "p3" — identique dans les 3 langues
  lessonNumber: number;    // rang dans le module, identique dans les 3 langues
  title: string;           // titre riche : "Sujet — promesse concrète"
  objective: string;       // 2–4 phrases, formulation capacitaire : "À la fin, vous saurez…"
  video: { fr: string; en: string; ha: string };  // vides à la génération
  content: { title: string; body: string }[];     // EXACTEMENT 4 sections
  example: { title: string; challenge: string; solution: string; impact: string };
  practice: { title: string; instructions: string[]; observation: string }; // 3 instructions
  quiz: QuizQuestion[];    // 5 questions (leçon finale : ≥1 par leçon du module)
  reflection: string;      // 1 question ouverte reliée au vécu de l'apprenant
  glossary: GlossaryItem[]; // EXACTEMENT 6 termes (7 tolérés pour une leçon finale)
}
```

## Le fichier de leçon

Un fichier par leçon dans `src/data/lessons/`, nommé `<abrégé>-<id>-<slug-court>.ts`
(ex. `pm-p3-sprint.ts`). Structure exacte :

```ts
import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module <N> « <Titre du module> » — leçon <id> (<titre court>)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const <xx>Lesson<ID>: Record<Language, LessonContent> = {
  "fr": { /* version de référence, complète */ },
  "en": { /* traduction complète et fidèle */ },
  "ha": { /* traduction complète et fidèle */ }
};
```

Le bloc vidéo, dans chaque langue, s'écrit exactement :

```ts
"video": {
  "fr": "",
  "en": "",
  "ha": ""
} /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
```

## Règles de style (toutes obligatoires)

**Typographie et syntaxe**
- Clés ET valeurs entre guillemets doubles (`"title": "..."`).
- Apostrophe typographique `’` dans les textes FR/HA (jamais `'` — élimine les bugs
  d'échappement). Guillemets français « » pour les citations.
- Paragraphes d'un `body` séparés par `\n\n` (littéral, deux caractères dans la chaîne).
  Chaque `body` = 2 à 3 paragraphes substantiels.
- Pas de markdown dans les chaînes (pas de backticks, pas de `**gras**`). Un court extrait
  de code (leçon technique) s'écrit en ligne, avec apostrophes simples à l'intérieur.

**Contenu**
- `content` : exactement 4 sections, chacune avec un titre parlant (pas « Section 1 »).
- `example` : cas concret avec `impact` chiffré mais prudent (« ~3 semaines économisées »,
  « environ 1 500 000 FCFA évités », avec réserve si estimé). **Varier les cas d'une leçon à
  l'autre** : secteurs (entreprise, administration, école, association, ONG, indépendant) et
  **pays d'Afrique** (Niger, Sénégal, Côte d'Ivoire, Cameroun, Bénin, Burkina Faso, Mali, Togo,
  Guinée, RDC, Nigeria, Kenya, Maroc…). Le Niger est un pays parmi d'autres : jamais tous les
  cas d'un module dans un seul pays. Montants dans la monnaie du pays du cas.
- `practice` : 3 instructions numérotables, réalisables sur téléphone ou papier avec des
  outils gratuits ; `observation` = ce que l'apprenant doit constater.
- `quiz` : 5 questions ; 4 options A–D plausibles ; `answer` VARIE d'une question à l'autre
  (jamais 5 fois « B ») ; `explanation` pédagogique à chaque question.
- `glossary` : 6 termes centraux de la leçon, définis simplement en 1–2 phrases.
- **Jamais d'id interne dans un texte visible** : écrire « Leçon 2 » / "Lesson 2" /
  « Darasi 2 », jamais « leçon p2 ». (Seul le champ `id` porte l'identifiant.)

**Ton et pédagogie**
- Audience : **toute personne curieuse du sujet, partout dans le monde** — salariés,
  étudiants, indépendants, agents de terrain, bénévoles — souvent sur mobile, avec une
  connectivité limitée et un petit budget. Vouvoiement. Phrases courtes. Zéro jargon non
  expliqué — chaque terme technique reçoit une analogie du quotidien (marché, récolte,
  tontine, chantier, atelier, salle de classe…).
- Ancrage concret dans CHAQUE section, **en Afrique et sur plusieurs pays** : ONG et
  coopératives, mais aussi PME, administration, école, cabinet indépendant ; Orange Money,
  Wave, M-Pesa ou MTN MoMo selon le pays ; hors-ligne et faible connectivité. Le Niger est un
  pays parmi d'autres, jamais le seul ; le texte reste compréhensible par un apprenant hors
  d'Afrique.
- **Méthode de consigne maison : RCTF** (Rôle · Contexte · Tâche · Format). Toute consigne
  donnée en exemple ou à copier suit ces quatre blocs ; une leçon qui enseigne la rédaction
  de consignes enseigne RCTF (jamais une autre méthode concurrente).
- Honnêteté : dire quand un outil/méthode est excessif pour un petit besoin, signaler
  les limites et les risques. Pas de chiffre inventé.

**Langues**
- FR = version de référence, la plus travaillée.
- EN et HA = traductions complètes et fidèles (mêmes 4 sections, mêmes 5 questions,
  même exemple, mêmes 6 termes dans le même ordre). Les extraits de code restent
  identiques dans les 3 langues.
- HA : haoussa naturel (boko), **sans lettres crochetées** — écrire k, d, b, y au lieu de
  ƙ ɗ ɓ ƴ (convention retenue dans tout le dépôt). Les termes de glossaire dont le
  libellé canonique est français/anglais gardent ce libellé avec une glose haoussa entre
  parenthèses. Toujours signaler en commentaire d'en-tête que le HA doit être validé par
  un locuteur natif.

## Leçon finale de module (synthèse)

La dernière leçon récapitule : ses 4 sections balaient le fil du module en renvoyant aux
leçons par numéro (« Leçon 1 », « Leçon 4 »…), son quiz est cumulatif (≥ 1 question par
leçon précédente), et sa pratique peut être un mini-projet de bout en bout. Elle mentionne
que la réussite débloque le certificat numérique vérifiable.

## Checklist qualité (à dérouler par leçon avant livraison)

- [ ] Compile : l'objet satisfait `LessonContent` (si repo : `npm run typecheck`)
- [ ] 4 sections × 3 langues ; chaque body a 2–3 paragraphes séparés par `\n\n`
- [ ] 5 questions de quiz × 3 langues ; bonnes réponses variées ; explications présentes
- [ ] 6 termes de glossaire × 3 langues, même ordre
- [ ] `practice` : exactement 3 instructions + observation
- [ ] `id` et `lessonNumber` identiques dans les 3 langues
- [ ] Bloc `video` vide + commentaire TODO présent
- [ ] Aucun id interne (`grep -E '"(Leçon|Lesson|Darasi[n]?) [a-z][0-9]"'` ne rend rien)
- [ ] Apostrophes typographiques en FR/HA ; guillemets « » ; pas de markdown dans les chaînes
- [ ] Exemple avec impact chiffré prudent ; ancrage concret et varié (secteurs et pays
      d'Afrique) dans chaque section, jamais un module entier centré sur un seul pays
- [ ] Consignes en exemple ou à copier structurées en RCTF
