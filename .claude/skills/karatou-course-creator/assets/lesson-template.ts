import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module <N> « <Titre du module> » — leçon <id> (<titre court>)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const xxLessonY1: Record<Language, LessonContent> = {
  "fr": {
    "id": "<id>",            // ex. "m1" — identique dans les 3 langues, jamais visible
    "lessonNumber": 1,
    "title": "<Sujet — promesse concrète pour l’apprenant>",
    "objective": "À la fin de cette leçon, vous saurez <capacité 1>. Vous serez capable de <capacité 2>. <Phrase d’ancrage dans le contexte professionnel africain.>",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "<Section 1 — l’enjeu, pourquoi ça compte>",
        "body": "<Paragraphe 1 : le problème concret, avec un exemple africain (ONG, coopérative, FCFA…).>\n\n<Paragraphe 2 : le concept clé expliqué avec une analogie du quotidien.>\n\n<Paragraphe 3 (optionnel) : application pratique immédiate.>"
      },
      {
        "title": "<Section 2 — le concept central>",
        "body": "<2–3 paragraphes séparés par \\n\\n, apostrophe typographique ’, guillemets « ».>"
      },
      {
        "title": "<Section 3 — la méthode pas à pas>",
        "body": "<2–3 paragraphes.>"
      },
      {
        "title": "<Section 4 — limites, pièges et prudence>",
        "body": "<2–3 paragraphes, honnêteté sur ce qui ne marche pas.>"
      }
    ],
    "example": {
      "title": "<Cas concret : organisation africaine nommée + situation>",
      "challenge": "<Le problème chiffré auquel elle faisait face.>",
      "solution": "<Ce qu’elle a fait, étape par étape, avec la notion de la leçon.>",
      "impact": "<Résultat chiffré mais prudent : « environ… », « ~3 semaines économisées », réserve si estimation.>"
    },
    "practice": {
      "title": "<Exercice réalisable sur téléphone ou papier, outils gratuits>",
      "instructions": [
        "<Étape 1.>",
        "<Étape 2.>",
        "<Étape 3.>"
      ],
      "observation": "<Ce que l’apprenant doit constater à la fin.>"
    },
    "quiz": [
      // 5 questions. Bonnes réponses VARIÉES (pas 5 fois « B »). 4 options plausibles.
      {
        "question": "<Question 1 ?>",
        "options": [
          { "key": "A", "text": "<Option A>" },
          { "key": "B", "text": "<Option B>" },
          { "key": "C", "text": "<Option C>" },
          { "key": "D", "text": "<Option D>" }
        ],
        "answer": "B",
        "explanation": "<Pourquoi c’est la bonne réponse, en 1–2 phrases pédagogiques.>"
      }
      // … questions 2 à 5
    ],
    "reflection": "<Question ouverte reliant la leçon au projet ou au travail réel de l’apprenant.>",
    "glossary": [
      // Exactement 6 termes, définis simplement (1–2 phrases).
      { "term": "<Terme 1>", "definition": "<Définition simple.>" }
      // … termes 2 à 6
    ]
  },
  "en": {
    // Traduction COMPLÈTE et fidèle du bloc FR : mêmes 4 sections, mêmes 5 questions,
    // même exemple, mêmes 6 termes dans le même ordre. id/lessonNumber identiques.
    "id": "<id>",
    "lessonNumber": 1,
    "title": "<English title>",
    "objective": "<…>",
    "video": { "fr": "", "en": "", "ha": "" } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [],
    "example": { "title": "", "challenge": "", "solution": "", "impact": "" },
    "practice": { "title": "", "instructions": [], "observation": "" },
    "quiz": [],
    "reflection": "",
    "glossary": []
  },
  "ha": {
    // Haoussa naturel (boko, caractères ƙ ɗ ɓ). Termes de glossaire canoniques FR/EN
    // conservés avec glose haoussa entre parenthèses. À faire valider par un natif.
    "id": "<id>",
    "lessonNumber": 1,
    "title": "<Taken Hausa>",
    "objective": "<…>",
    "video": { "fr": "", "en": "", "ha": "" } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [],
    "example": { "title": "", "challenge": "", "solution": "", "impact": "" },
    "practice": { "title": "", "instructions": [], "observation": "" },
    "quiz": [],
    "reflection": "",
    "glossary": []
  }
};
