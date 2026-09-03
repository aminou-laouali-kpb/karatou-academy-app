import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Analyse de Données » — leçon d6 (Mini-projet données — un rapport complet, clair et vérifiable)
// Niveau INTERMÉDIAIRE — leçon capstone qui assemble tout le module (nettoyage → indicateurs/pivot → Python → visualisation → narration).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const daLessonD6: Record<Language, LessonContent> = {
  "fr": {
    "id": "d6",
    "lessonNumber": 6,
    "title": "Mini-projet données — un rapport complet, clair et vérifiable",
    "objective": "À la fin de cette leçon, vous saurez mener une petite analyse de bout en bout — d’une question claire jusqu’à un rapport clair et vérifiable — en mobilisant toutes les compétences du module. Vous saurez enchaîner les étapes sans en sauter aucune, choisir une ou deux visualisations utiles, délivrer un message clé avec une recommandation, et documenter vos sources et vos limites pour qu’un collègue puisse refaire votre travail.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Le fil rouge d’une analyse",
        "body": "Une bonne analyse ressemble à une route bien tracée. Elle part d’une question claire, traverse des données propres, passe par l’analyse, débouche sur une visualisation, et arrive à un message. Si vous sautez une étape, toute la suite devient fragile. Une analyse sans question précise tourne en rond. Une analyse sur des données sales donne un faux résultat. Une visualisation sans message ne sert à personne.\n\nDans ce module, vous avez appris chaque étape séparément. Aujourd’hui, vous les assemblez en un seul livrable utile. C’est l’esprit du mini-projet : prendre tout ce que vous avez appris et produire un rapport court que votre équipe peut vraiment utiliser. Pensez à un maçon qui a appris à fabriquer des briques, puis à monter un mur : ici, vous construisez la maison entière, petite mais complète.\n\nLa question de départ doit être simple et précise. « Comment vont nos bénéficiaires ? » est trop vague. « Quel est le taux de satisfaction des bénéficiaires de notre programme d’eau potable au dernier trimestre, et varie-t-il selon les villages ? » est une vraie question. Une bonne question vous dit déjà quelles données chercher et quel graphique produire. Écrivez-la en une phrase avant toute chose."
      },
      {
        "title": "Préparer et analyser proprement",
        "body": "Une fois la question posée, revenez sur les fondations du module. Commencez par nettoyer vos données, comme vu en « Leçon 1 » : retirez les doublons, corrigez les dates mal écrites, harmonisez les noms de villages écrits de dix façons différentes, et traitez les cellules vides. Des données sales produisent des conclusions fausses, même avec les meilleurs outils. Gardez toujours une copie du fichier brut, avant nettoyage : c’est votre preuve si quelqu’un conteste un chiffre.\n\nEnsuite, construisez vos indicateurs, comme en « Leçon 2 ». Un tableau croisé dynamique (pivot) vous permet de répondre à la question sans calcul compliqué : moyenne de satisfaction par village, nombre de réponses par mois, pourcentage de bénéficiaires satisfaits. Choisissez deux ou trois indicateurs qui répondent directement à votre question — pas vingt. Trop de chiffres noient le message.\n\nSi votre jeu de données est volumineux ou si vous devez répéter le même traitement chaque mois, Python peut vous faire gagner du temps, comme en « Leçon 3 ». Avec la bibliothèque pandas, vous lisez un fichier CSV, vous nettoyez et vous calculez en quelques lignes réutilisables. Ce n’est pas obligatoire pour un petit projet : un tableur sur téléphone ou un ordinateur basique suffit largement. L’important n’est pas l’outil, mais la rigueur de la méthode."
      },
      {
        "title": "Visualiser et raconter",
        "body": "Vos chiffres sont prêts. Il faut maintenant les rendre lisibles. Choisissez le bon graphique, comme en « Leçon 4 ». Pour comparer des villages, un graphique en barres est clair. Pour montrer une évolution dans le temps, une courbe convient mieux. Pour une part d’un tout — par exemple la proportion de satisfaits — un chiffre simple ou une barre suffit souvent. Une ou deux visualisations bien choisies valent mieux qu’une page de tableaux. Donnez un titre qui dit le message, pas seulement « Graphique 1 ».\n\nMais un graphique ne parle pas tout seul. Vous devez délivrer un message clé et une recommandation, comme en « Leçon 5 ». Le message clé est la phrase que votre lecteur doit retenir s’il ne lit que ça : « La satisfaction est bonne (78 %) sauf dans deux villages où l’accès à l’eau reste difficile. » La recommandation dit quoi faire : « Renforcer la maintenance des pompes dans ces deux villages avant la saison sèche. »\n\nGardez des phrases courtes. Mettez le message clé en haut du rapport, pas à la fin. Un responsable pressé doit comprendre l’essentiel en dix secondes. Le reste du rapport sert à appuyer ce message avec les chiffres, le graphique et la méthode."
      },
      {
        "title": "Rendre le travail vérifiable",
        "body": "Un bon rapport n’est pas seulement clair : il est vérifiable. Cela veut dire qu’un collègue, en lisant votre rapport, peut comprendre d’où viennent vos chiffres et refaire votre travail s’il le souhaite. C’est le cœur de l’éthique « vérifiable » : on ne demande pas qu’on vous croie sur parole, on montre comment on est arrivé au résultat.\n\nTrois réflexes rendent un travail vérifiable. D’abord, citez vos sources : d’où viennent les données ? Une enquête menée par votre équipe en mars ? Un registre de la coopérative ? Indiquez la date, le nombre de réponses, qui a collecté. Ensuite, documentez votre méthode en quelques lignes : quelles données vous avez retirées au nettoyage, quels indicateurs vous avez calculés, quel outil vous avez utilisé. Une personne doit pouvoir suivre vos pas.\n\nEnfin, signalez les limites de vos données. Aucune analyse n’est parfaite. Peut-être que seuls 40 bénéficiaires sur 200 ont répondu : votre résultat n’est donc pas représentatif de tous. Peut-être qu’un village manquait dans les données. Dire honnêtement « voici ce que ces données ne permettent pas d’affirmer » renforce votre crédibilité au lieu de l’affaiblir. Un rapport qu’un collègue peut refaire est un rapport en lequel on peut avoir confiance."
      }
    ],
    "example": {
      "title": "Fatou et le rapport d’une page sur l’enquête de satisfaction",
      "challenge": "Fatou, chargée de suivi dans une ONG d’accès à l’eau au Sahel, dispose d’une enquête de satisfaction remplie par 120 bénéficiaires dans 6 villages. Les données sont dans un tableur en désordre : doublons, noms de villages mal orthographiés, notes vides. Sa coordinatrice lui demande un point pour la réunion d’équipe du lendemain. Fatou a une seule journée, un ordinateur basique et une connexion limitée.",
      "solution": "Fatou suit la chaîne complète. Elle écrit d’abord sa question : « Les bénéficiaires sont-ils satisfaits, et la satisfaction varie-t-elle selon les villages ? » Elle copie le fichier brut, puis nettoie : suppression des doublons, harmonisation des 6 noms de villages, traitement des réponses vides. Avec un tableau croisé dynamique, elle calcule le taux de satisfaction global et par village. Elle produit un seul graphique en barres comparant les villages, lui donne un titre-message, puis rédige un rapport d’une page : question, méthode (source, 120 réponses, mars), graphique, message clé, recommandation, et une ligne sur les limites (un village sous-représenté).",
      "impact": "Le rapport d’une page est lu en réunion en moins de cinq minutes. L’équipe identifie immédiatement les deux villages où la satisfaction est plus basse et décide d’y prioriser une visite de terrain. Parce que Fatou a cité sa source et gardé le fichier brut, une collègue peut refaire le calcul et confirme le chiffre. Le format d’une page est ensuite réutilisé comme modèle pour les rapports mensuels suivants, ce qui fait gagner environ une demi-journée de travail à chaque cycle."
    },
    "practice": {
      "title": "Votre mini-projet : un rapport d’une page de bout en bout",
      "instructions": [
        "Choisissez un petit jeu de données réel et accessible (par exemple les réponses d’une enquête de satisfaction, les ventes mensuelles d’une coopérative, ou la fréquentation d’un centre). Écrivez en une seule phrase la question à laquelle vous voulez répondre, puis copiez le fichier brut avant tout nettoyage.",
        "Suivez la chaîne complète : nettoyez les données (doublons, dates, noms, cellules vides), calculez deux ou trois indicateurs avec un tableau croisé dynamique, et produisez UNE seule visualisation bien choisie (barres pour comparer, courbe pour une évolution) avec un titre qui dit le message.",
        "Rédigez un rapport d’une page contenant exactement : la question, la méthode (source, date, nombre de réponses, outil utilisé), le graphique, le message clé en une phrase, une recommandation concrète, et les limites des données. Faites-le tenir sur une page."
      ],
      "observation": "Relisez votre rapport en vous demandant : « Un collègue qui ne connaît pas ce projet pourrait-il comprendre mon message en dix secondes, et refaire mon calcul avec ma méthode ? » Si oui, vous avez produit un livrable clair et vérifiable. Si le message n’est pas évident ou si la source manque, corrigez avant de partager. Vous venez de mener une analyse complète : c’est exactement ce qu’on attend d’un professionnel des données."
    },
    "quiz": [
      {
        "question": "Avant de calculer des indicateurs sur une enquête, vous remarquez que le même village est écrit « Garin Baka », « garin baka » et « Garin-Baka ». Que devez-vous faire en priorité ?",
        "options": [
          { "key": "A", "text": "Lancer le calcul tout de suite, ces variantes ne changent rien au résultat" },
          { "key": "B", "text": "Nettoyer d’abord les données en harmonisant l’orthographe des noms de villages" },
          { "key": "C", "text": "Supprimer toutes les lignes de ce village pour éviter les erreurs" },
          { "key": "D", "text": "Demander à l’IA de deviner le bon nom à votre place" }
        ],
        "answer": "B",
        "explanation": "C’est une étape de nettoyage (Leçon 1). Trois orthographes différentes seront comptées comme trois villages distincts, ce qui faussera tous vos indicateurs. Il faut harmoniser les noms avant tout calcul, et garder une copie du fichier brut."
      },
      {
        "question": "Vous voulez connaître la satisfaction moyenne par village à partir de 120 réponses. Quel outil est le plus adapté ?",
        "options": [
          { "key": "A", "text": "Compter à la main, ligne par ligne" },
          { "key": "B", "text": "Écrire un long texte décrivant chaque réponse" },
          { "key": "C", "text": "Un tableau croisé dynamique (pivot) qui regroupe par village et calcule la moyenne" },
          { "key": "D", "text": "Un graphique en barres, sans calcul préalable" }
        ],
        "answer": "C",
        "explanation": "Le tableau croisé dynamique (Leçon 2) regroupe automatiquement les réponses par village et calcule la moyenne pour chacun. C’est l’outil fait pour produire des indicateurs agrégés sans calcul manuel ni risque d’erreur."
      },
      {
        "question": "Vous devez refaire le même nettoyage et le même calcul chaque mois sur un fichier CSV exporté. Quel avantage offre Python avec pandas ?",
        "options": [
          { "key": "A", "text": "Il rend les données automatiquement vraies, sans avoir à les vérifier" },
          { "key": "B", "text": "Il permet de réutiliser les mêmes lignes de code chaque mois, ce qui fait gagner du temps et limite les erreurs" },
          { "key": "C", "text": "Il est indispensable : sans Python, aucune analyse n’est possible" },
          { "key": "D", "text": "Il remplace complètement la nécessité de citer ses sources" }
        ],
        "answer": "B",
        "explanation": "Python avec pandas (Leçon 3) lit un CSV et automatise un traitement répétitif en quelques lignes réutilisables. C’est utile pour les tâches répétées, mais ce n’est pas obligatoire : un tableur suffit pour un petit projet. L’outil ne dispense jamais de vérifier les données ni de citer ses sources."
      },
      {
        "question": "Vous voulez comparer le taux de satisfaction entre 6 villages dans votre rapport. Quel type de graphique est le plus clair ?",
        "options": [
          { "key": "A", "text": "Un graphique en barres, une barre par village" },
          { "key": "B", "text": "Une courbe dans le temps, même sans dimension temporelle" },
          { "key": "C", "text": "Un tableau de 120 lignes avec toutes les réponses brutes" },
          { "key": "D", "text": "Aucun graphique, juste un paragraphe de chiffres" }
        ],
        "answer": "A",
        "explanation": "Pour comparer des catégories (les villages), le graphique en barres est le plus lisible (Leçon 4). La courbe sert aux évolutions dans le temps. Un titre qui exprime le message rend le graphique encore plus utile."
      },
      {
        "question": "Seuls 40 bénéficiaires sur 200 ont répondu à votre enquête. Comment traiter cela dans votre rapport ?",
        "options": [
          { "key": "A", "text": "Ne pas le mentionner, pour ne pas affaiblir le rapport" },
          { "key": "B", "text": "Présenter le résultat comme valable pour les 200 bénéficiaires" },
          { "key": "C", "text": "Annuler l’analyse, car elle ne sert à rien" },
          { "key": "D", "text": "Le signaler clairement comme une limite : le résultat ne représente que les répondants" }
        ],
        "answer": "D",
        "explanation": "Signaler les limites (Leçon 5) renforce la crédibilité au lieu de l’affaiblir. Avec 40 réponses sur 200, le résultat ne représente pas l’ensemble des bénéficiaires. Le dire honnêtement, citer la source et documenter la méthode rendent le rapport vérifiable et digne de confiance."
      }
    ],
    "reflection": "Pensez à un jeu de données réel auquel vous avez accès dans votre travail — une enquête, un registre, des ventes, une fréquentation. Quelle question simple et précise pourriez-vous lui poser dès cette semaine ? Quelles seraient les limites de ces données, et quelle première étape allez-vous franchir pour produire votre propre rapport d’une page, clair et vérifiable ?",
    "glossary": [
      {
        "term": "Jeu de données",
        "definition": "Ensemble organisé de données collectées sur un même sujet — par exemple les réponses d’une enquête ou les ventes mensuelles d’une coopérative — généralement présenté sous forme de tableau avec des lignes et des colonnes."
      },
      {
        "term": "Méthodologie",
        "definition": "Description des étapes suivies pour mener l’analyse : d’où viennent les données, comment elles ont été nettoyées, quels indicateurs ont été calculés et avec quel outil. Une bonne méthodologie permet à un collègue de comprendre et de refaire le travail."
      },
      {
        "term": "Reproductibilité",
        "definition": "Capacité d’une autre personne à refaire votre analyse à partir des mêmes données et de la même méthode, et à obtenir le même résultat. Garder le fichier brut et documenter chaque étape rend une analyse reproductible."
      },
      {
        "term": "Vérifiabilité",
        "definition": "Le fait qu’un lecteur puisse contrôler d’où viennent vos chiffres et confirmer vos conclusions, sans avoir à vous croire sur parole. Elle repose sur des sources citées et une méthode documentée."
      },
      {
        "term": "Limite des données",
        "definition": "Faiblesse connue d’un jeu de données qui restreint ce qu’on peut en conclure — par exemple un faible nombre de réponses, une période trop courte ou un groupe manquant. Signaler les limites renforce la crédibilité d’un rapport."
      },
      {
        "term": "Rapport d’analyse",
        "definition": "Document court qui présente une analyse de bout en bout : la question, la méthode, une ou deux visualisations, le message clé, une recommandation et les limites. Son but est de transmettre un message utile de façon claire et vérifiable."
      }
    ]
  },
  "en": {
    "id": "d6",
    "lessonNumber": 6,
    "title": "Data mini-project — a complete, clear and verifiable report",
    "objective": "By the end of this lesson, you will be able to carry out a small analysis from start to finish — from a clear question to a clear and verifiable report — by drawing on all the skills in this module. You will be able to chain the steps without skipping any, choose one or two useful visualizations, deliver a key message with a recommendation, and document your sources and limitations so that a colleague can redo your work.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "The thread running through an analysis",
        "body": "A good analysis is like a well-marked road. It starts from a clear question, runs through clean data, passes through analysis, leads to a visualization, and arrives at a message. If you skip a step, everything that follows becomes fragile. An analysis without a precise question goes in circles. An analysis on dirty data gives a false result. A visualization without a message is useless to anyone.\n\nIn this module, you learned each step separately. Today, you assemble them into a single useful deliverable. That is the spirit of the mini-project: take everything you have learned and produce a short report that your team can actually use. Think of a mason who has learned to make bricks, then to build a wall: here, you build the whole house, small but complete.\n\nThe starting question must be simple and precise. \"How are our beneficiaries doing?\" is too vague. \"What is the satisfaction rate among the beneficiaries of our drinking-water program last quarter, and does it vary by village?\" is a real question. A good question already tells you what data to look for and what chart to produce. Write it in one sentence before anything else."
      },
      {
        "title": "Prepare and analyze cleanly",
        "body": "Once the question is set, go back to the foundations of the module. Start by cleaning your data, as seen in \"Lesson 1\": remove duplicates, fix badly written dates, harmonize village names written in ten different ways, and handle empty cells. Dirty data produces false conclusions, even with the best tools. Always keep a copy of the raw file, before cleaning: it is your proof if someone challenges a figure.\n\nNext, build your indicators, as in \"Lesson 2\". A pivot table lets you answer the question without complicated calculation: average satisfaction by village, number of responses by month, percentage of satisfied beneficiaries. Choose two or three indicators that directly answer your question — not twenty. Too many figures drown the message.\n\nIf your dataset is large or if you must repeat the same processing every month, Python can save you time, as in \"Lesson 3\". With the pandas library, you read a CSV file, clean it and calculate in a few reusable lines. This is not required for a small project: a spreadsheet on a phone or a basic computer is more than enough. What matters is not the tool, but the rigor of the method."
      },
      {
        "title": "Visualize and tell the story",
        "body": "Your figures are ready. Now you must make them readable. Choose the right chart, as in \"Lesson 4\". To compare villages, a bar chart is clear. To show change over time, a line chart fits better. For a share of a whole — for example the proportion of satisfied people — a simple figure or a bar is often enough. One or two well-chosen visualizations are worth more than a page of tables. Give a title that states the message, not just \"Chart 1\".\n\nBut a chart does not speak on its own. You must deliver a key message and a recommendation, as in \"Lesson 5\". The key message is the sentence your reader must remember if they read only that: \"Satisfaction is good (78%) except in two villages where access to water remains difficult.\" The recommendation says what to do: \"Strengthen pump maintenance in these two villages before the dry season.\"\n\nKeep sentences short. Put the key message at the top of the report, not at the end. A busy manager must grasp the essentials in ten seconds. The rest of the report serves to support that message with the figures, the chart and the method."
      },
      {
        "title": "Making the work verifiable",
        "body": "A good report is not only clear: it is verifiable. That means a colleague, reading your report, can understand where your figures come from and redo your work if they wish. This is the heart of the \"verifiable\" ethos: we do not ask to be taken at our word, we show how we reached the result.\n\nThree habits make work verifiable. First, cite your sources: where do the data come from? A survey run by your team in March? A cooperative register? State the date, the number of responses, who collected them. Second, document your method in a few lines: which data you removed during cleaning, which indicators you calculated, which tool you used. A person must be able to follow your steps.\n\nFinally, flag the limitations of your data. No analysis is perfect. Perhaps only 40 of 200 beneficiaries responded: your result is therefore not representative of everyone. Perhaps one village was missing from the data. Honestly saying \"here is what these data do not allow us to claim\" strengthens your credibility instead of weakening it. A report a colleague can redo is a report that can be trusted."
      }
    ],
    "example": {
      "title": "Fatou and the one-page report on the satisfaction survey",
      "challenge": "Fatou, a monitoring officer at a water-access NGO in the Sahel, has a satisfaction survey completed by 120 beneficiaries across 6 villages. The data is in a messy spreadsheet: duplicates, misspelled village names, empty scores. Her coordinator asks her for an update for the next day's team meeting. Fatou has a single day, a basic computer, and a limited connection.",
      "solution": "Fatou follows the full chain. She first writes her question: \"Are beneficiaries satisfied, and does satisfaction vary by village?\" She copies the raw file, then cleans it: removing duplicates, harmonizing the 6 village names, handling empty responses. Using a pivot table, she calculates the overall satisfaction rate and the rate by village. She produces a single bar chart comparing the villages, gives it a message-title, then writes a one-page report: question, method (source, 120 responses, March), chart, key message, recommendation, and one line on the limitations (one underrepresented village).",
      "impact": "The one-page report is read in the meeting in less than five minutes. The team immediately identifies the two villages where satisfaction is lower and decides to prioritize a field visit there. Because Fatou cited her source and kept the raw file, a colleague can redo the calculation and confirms the figure. The one-page format is then reused as a template for the following monthly reports, saving about half a day of work each cycle."
    },
    "practice": {
      "title": "Your mini-project: a one-page report from start to finish",
      "instructions": [
        "Choose a small, accessible real dataset (for example the responses of a satisfaction survey, the monthly sales of a cooperative, or the attendance at a center). Write in a single sentence the question you want to answer, then copy the raw file before any cleaning.",
        "Follow the full chain: clean the data (duplicates, dates, names, empty cells), calculate two or three indicators with a pivot table, and produce ONE well-chosen visualization (bars to compare, a line for change over time) with a title that states the message.",
        "Write a one-page report containing exactly: the question, the method (source, date, number of responses, tool used), the chart, the key message in one sentence, a concrete recommendation, and the data limitations. Make it fit on one page."
      ],
      "observation": "Reread your report and ask yourself: \"Could a colleague who does not know this project understand my message in ten seconds, and redo my calculation using my method?\" If yes, you have produced a clear and verifiable deliverable. If the message is not obvious or the source is missing, fix it before sharing. You have just carried out a complete analysis: this is exactly what is expected of a data professional."
    },
    "quiz": [
      {
        "question": "Before calculating indicators on a survey, you notice that the same village is written \"Garin Baka\", \"garin baka\" and \"Garin-Baka\". What should you do first?",
        "options": [
          { "key": "A", "text": "Run the calculation right away — these variants change nothing in the result" },
          { "key": "B", "text": "Clean the data first by harmonizing the spelling of the village names" },
          { "key": "C", "text": "Delete all rows for this village to avoid errors" },
          { "key": "D", "text": "Ask the AI to guess the right name for you" }
        ],
        "answer": "B",
        "explanation": "This is a cleaning step (Lesson 1). Three different spellings will be counted as three distinct villages, which will distort all your indicators. You must harmonize the names before any calculation, and keep a copy of the raw file."
      },
      {
        "question": "You want to know the average satisfaction by village from 120 responses. Which tool is best suited?",
        "options": [
          { "key": "A", "text": "Counting by hand, line by line" },
          { "key": "B", "text": "Writing a long text describing each response" },
          { "key": "C", "text": "A pivot table that groups by village and calculates the average" },
          { "key": "D", "text": "A bar chart, without any prior calculation" }
        ],
        "answer": "C",
        "explanation": "The pivot table (Lesson 2) automatically groups the responses by village and calculates the average for each. It is the tool built to produce aggregated indicators without manual calculation or risk of error."
      },
      {
        "question": "You must redo the same cleaning and the same calculation every month on an exported CSV file. What advantage does Python with pandas offer?",
        "options": [
          { "key": "A", "text": "It makes the data automatically true, with no need to check it" },
          { "key": "B", "text": "It lets you reuse the same lines of code each month, saving time and limiting errors" },
          { "key": "C", "text": "It is indispensable: without Python, no analysis is possible" },
          { "key": "D", "text": "It completely removes the need to cite your sources" }
        ],
        "answer": "B",
        "explanation": "Python with pandas (Lesson 3) reads a CSV and automates repetitive processing in a few reusable lines. It is useful for repeated tasks, but it is not required: a spreadsheet is enough for a small project. The tool never removes the need to verify the data or cite your sources."
      },
      {
        "question": "You want to compare the satisfaction rate across 6 villages in your report. Which type of chart is clearest?",
        "options": [
          { "key": "A", "text": "A bar chart, one bar per village" },
          { "key": "B", "text": "A line over time, even without a time dimension" },
          { "key": "C", "text": "A table of 120 rows with all the raw responses" },
          { "key": "D", "text": "No chart, just a paragraph of figures" }
        ],
        "answer": "A",
        "explanation": "To compare categories (the villages), the bar chart is the most readable (Lesson 4). The line chart is for change over time. A title that states the message makes the chart even more useful."
      },
      {
        "question": "Only 40 of 200 beneficiaries responded to your survey. How should you handle this in your report?",
        "options": [
          { "key": "A", "text": "Do not mention it, so as not to weaken the report" },
          { "key": "B", "text": "Present the result as valid for all 200 beneficiaries" },
          { "key": "C", "text": "Cancel the analysis, because it is useless" },
          { "key": "D", "text": "Flag it clearly as a limitation: the result represents only the respondents" }
        ],
        "answer": "D",
        "explanation": "Flagging limitations (Lesson 5) strengthens credibility instead of weakening it. With 40 responses out of 200, the result does not represent all beneficiaries. Saying so honestly, citing the source and documenting the method make the report verifiable and trustworthy."
      }
    ],
    "reflection": "Think of a real dataset you have access to in your work — a survey, a register, sales, attendance. What simple and precise question could you ask of it this very week? What would the limitations of that data be, and what first step will you take to produce your own one-page report, clear and verifiable?",
    "glossary": [
      {
        "term": "Dataset",
        "definition": "An organized set of data collected on the same subject — for example the responses of a survey or the monthly sales of a cooperative — usually presented as a table with rows and columns."
      },
      {
        "term": "Methodology",
        "definition": "A description of the steps followed to carry out the analysis: where the data came from, how it was cleaned, which indicators were calculated and with which tool. A good methodology lets a colleague understand and redo the work."
      },
      {
        "term": "Reproducibility",
        "definition": "The ability of another person to redo your analysis from the same data and the same method, and obtain the same result. Keeping the raw file and documenting each step makes an analysis reproducible."
      },
      {
        "term": "Verifiability",
        "definition": "The fact that a reader can check where your figures come from and confirm your conclusions, without having to take you at your word. It rests on cited sources and a documented method."
      },
      {
        "term": "Data limitation",
        "definition": "A known weakness of a dataset that restricts what can be concluded from it — for example a low number of responses, too short a period, or a missing group. Flagging limitations strengthens a report's credibility."
      },
      {
        "term": "Analysis report",
        "definition": "A short document that presents an end-to-end analysis: the question, the method, one or two visualizations, the key message, a recommendation and the limitations. Its goal is to convey a useful message in a clear and verifiable way."
      }
    ]
  },
  "ha": {
    "id": "d6",
    "lessonNumber": 6,
    "title": "Karamin aikin bayanai — cikakken rahoto, bayyananne kuma tabbatacce",
    "objective": "A ƙarshen wannan darasi, za ku iya gudanar da ƙaramin bincike daga farko zuwa ƙarshe — daga tambaya bayyananne zuwa rahoto bayyananne kuma tabbatacce — ta hanyar amfani da dukkan ƙwarewar wannan ɓangare. Za ku iya bin matakai ba tare da tsallake ko ɗaya ba, zaɓar hoto ɗaya ko biyu masu amfani, isar da saƙo na asali tare da shawara, da kuma rubuta tushenku da iyakokinku domin abokin aiki ya iya sake yin aikinku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Zaren da ke bi ta cikin bincike",
        "body": "Bincike mai kyau yana kama da hanya da aka yi mata alama sosai. Yana farawa daga tambaya bayyananne, yana ratsa bayanai masu tsabta, yana wucewa ta bincike, yana kaiwa ga hoto, kuma yana isa ga saƙo. Idan kuka tsallake mataki, duk abin da ya biyo baya zai zama mai rauni. Bincike ba tare da tambaya bayyananne ba yana zagayawa a banza. Bincike a kan bayanai marasa tsabta yana ba da sakamako na ƙarya. Hoto ba tare da saƙo ba ba ya amfanar kowa.\n\nA cikin wannan ɓangare, kun koyi kowane mataki daban-daban. Yau, kuna haɗa su zuwa abu ɗaya mai amfani. Wannan shi ne ruhin ƙaramin aiki: ɗauki dukkan abin da kuka koya kuma ku samar da gajeren rahoto da ƙungiyarku za ta iya amfani da shi da gaske. Ku yi tunanin maginin da ya koyi yin tubali, sannan ya gina katanga: a nan, kuna gina gida gaba ɗaya, ƙarami amma cikakke.\n\nTambayar farko dole ne ta zama mai sauƙi kuma bayyananne. 'Yaya masu amfana da mu suke?' ya yi yawan rashin tabbas. 'Menene yawan gamsuwar masu amfana da shirinmu na ruwan sha a kwata na ƙarshe, kuma yana bambanta ta ƙauye?' tambaya ce ta gaske. Tambaya mai kyau tana gaya muku tuni waɗanne bayanai za ku nema da kuma wane hoto za ku samar. Ku rubuta ta a jumla ɗaya kafin komai."
      },
      {
        "title": "Shirya da kuma bincika cikin tsabta",
        "body": "Da zarar an saita tambayar, ku koma ga tushen wannan ɓangare. Ku fara da tsabtace bayananku, kamar yadda aka gani a 'Darasi 1': ku cire kwafi biyu-biyu, ku gyara kwanakin da aka rubuta ba daidai ba, ku daidaita sunayen ƙauyuka da aka rubuta a hanyoyi goma daban-daban, kuma ku magance ƙwayoyin da ba su da komai. Bayanai marasa tsabta suna haifar da ƙarshen ƙarya, ko da mafi kyawun kayan aiki. Koyaushe ku ajiye kwafin fayil ɗin ɗanye, kafin tsabtacewa: shi ne hujjarku idan wani ya ƙalubalanci wata lamba.\n\nDaga nan, ku gina alamomin ku, kamar a 'Darasi 2'. Tebur mai jujjuyawa (pivot) yana ba ku damar amsa tambayar ba tare da lissafi mai rikitarwa ba: matsakaicin gamsuwa ta ƙauye, adadin amsoshi ta wata, kashi na masu amfana masu gamsuwa. Ku zaɓi alamomi biyu ko uku da suke amsa tambayarku kai tsaye — ba ashirin ba. Yawan lambobi suna nutsar da saƙo.\n\nIdan tarin bayananku yana da girma ko kuwa idan dole ne ku maimaita irin wannan aiki kowane wata, Python na iya tsuke muku lokaci, kamar a 'Darasi 3'. Da ɗakin karatu na pandas, kuna karanta fayil na CSV, kuna tsabtacewa kuma kuna lissafi a cikin layuka kaɗan masu sake amfani. Wannan ba tilas ba ne ga ƙaramin aiki: tebur na bayanai a wayar hannu ko kwamfuta ta yau da kullun ya isa sosai. Abin da ke da muhimmanci ba shi ne kayan aiki ba, sai dai tsananin tsarin aiki."
      },
      {
        "title": "Nuna hoto da kuma ba da labari",
        "body": "Lambobinku sun shirya. Yanzu dole ne ku sa su zama masu sauƙin karatu. Ku zaɓi hoto da ya dace, kamar a 'Darasi 4'. Domin kwatanta ƙauyuka, hoton sanduna (bar chart) yana da bayyana. Domin nuna canji a kan lokaci, layin lanƙwasa (line chart) ya fi dacewa. Domin sashe na duka — misali rabon mutane masu gamsuwa — lamba mai sauƙi ko sanda ɗaya yawanci ya isa. Hoto ɗaya ko biyu da aka zaɓa sosai sun fi shafi ɗaya na teburori daraja. Ku ba da taken da ke faɗin saƙon, ba kawai 'Hoto 1' ba.\n\nAmma hoto ba ya magana da kansa. Dole ne ku isar da saƙo na asali da shawara, kamar a 'Darasi 5'. Saƙon asali shi ne jumlar da mai karatunku dole ne ya tuna idan ya karanta wannan kawai: 'Gamsuwa tana da kyau (kashi 78) sai dai a ƙauyuka biyu inda samun ruwa ya kasance da wahala.' Shawarar tana faɗin abin da za a yi: 'Ƙarfafa kula da injinan ruwa a waɗannan ƙauyuka biyu kafin lokacin rani.'\n\nKu sanya jumloli gajeru. Ku sanya saƙon asali a saman rahoton, ba a ƙarshe ba. Mai kula mai gaggawa dole ne ya fahimci muhimman abubuwa cikin daƙiƙa goma. Sauran rahoton yana taimakawa goyon bayan wannan saƙo da lambobi, hoto da tsarin aiki."
      },
      {
        "title": "Sanya aikin ya zama tabbatacce",
        "body": "Rahoto mai kyau ba kawai bayyananne ba ne: yana tabbatacce. Wannan yana nufin cewa abokin aiki, yana karanta rahotonku, zai iya fahimtar inda lambobinku suka fito kuma ya sake yin aikinku idan yana so. Wannan shi ne zuciyar ɗabi'ar 'tabbatacce': ba ma roƙon a gaskata mu da maganarmu kawai ba, muna nuna yadda muka kai ga sakamakon.\n\nAyyuka uku na yau da kullun suna sanya aiki ya zama tabbatacce. Da farko, ku ambaci tushenku: daga ina bayanan suka fito? Wani bincike da ƙungiyarku ta gudanar a watan Maris? Wani rajistar ƙungiyar hadin gwiwa? Ku nuna kwanan wata, adadin amsoshi, wa ya tattara su. Sannan, ku rubuta tsarin aikinku a cikin layuka kaɗan: waɗanne bayanai kuka cire a lokacin tsabtacewa, waɗanne alamomi kuka lissafa, wane kayan aiki kuka yi amfani da shi. Wani mutum dole ne ya iya bin matakanku.\n\nA ƙarshe, ku nuna iyakokin bayananku. Babu wani bincike da yake cikakke. Wataƙila masu amfana 40 ne kawai daga cikin 200 suka amsa: don haka sakamakonku ba ya wakiltar kowa ba. Wataƙila wani ƙauye ya ɓace daga bayanan. Faɗin gaskiya cewa 'ga abin da waɗannan bayanai ba su ba da damar tabbatarwa ba' yana ƙarfafa amincin ku maimakon raunana shi. Rahoto da abokin aiki zai iya sake yi shi ne rahoto da za a iya amincewa da shi."
      }
    ],
    "example": {
      "title": "Fatou da rahoton shafi ɗaya kan binciken gamsuwa",
      "challenge": "Fatou, jami'ar sa ido a wata ƙungiyar agaji ta samun ruwa a yankin Sahel, tana da binciken gamsuwa da masu amfana 120 suka cika a ƙauyuka 6. Bayanan suna cikin tebur mai rikici: kwafi biyu-biyu, sunayen ƙauyuka da aka rubuta ba daidai ba, maki marasa komai. Mai daidaitawarta ta nemi ta yi mata bayani don taron ƙungiya na washegari. Fatou tana da rana ɗaya kawai, kwamfuta ta yau da kullun da haɗin yanar gizo mai iyaka.",
      "solution": "Fatou tana bin cikakkiyar sarka. Da farko tana rubuta tambayarta: 'Masu amfana suna gamsuwa, kuma gamsuwa tana bambanta ta ƙauye?' Tana kwafa fayil ɗin ɗanye, sannan tana tsabtacewa: cire kwafi biyu-biyu, daidaita sunayen ƙauyuka 6, magance amsoshin da ba su da komai. Da tebur mai jujjuyawa, tana lissafin yawan gamsuwa gaba ɗaya da kuma ta kowane ƙauye. Tana samar da hoton sanduna guda ɗaya da ke kwatanta ƙauyuka, tana ba shi take-saƙo, sannan tana rubuta rahoton shafi ɗaya: tambaya, tsarin aiki (tushe, amsoshi 120, Maris), hoto, saƙon asali, shawara, da layi ɗaya kan iyakoki (ƙauye ɗaya da ba a wakilta sosai ba).",
      "impact": "Ana karanta rahoton shafi ɗaya a taron cikin ƙasa da minti biyar. Ƙungiyar nan da nan ta gano ƙauyuka biyu inda gamsuwa ta yi ƙasa kuma ta yanke shawarar ba da fifiko ga ziyarar filin aiki a can. Saboda Fatou ta ambaci tushenta kuma ta ajiye fayil ɗin ɗanye, abokiyar aiki ta iya sake yin lissafin kuma ta tabbatar da lambar. Daga baya ana sake amfani da tsarin shafi ɗaya a matsayin samfuri ga rahotannin wata-wata masu zuwa, wanda ke tsuke kusan rabin rana na aiki a kowane zagaye."
    },
    "practice": {
      "title": "Karamin aikinku: rahoton shafi ɗaya daga farko zuwa ƙarshe",
      "instructions": [
        "Ku zaɓi ƙaramin tarin bayanai na gaskiya da za a iya samun sa (misali amsoshin binciken gamsuwa, tallace-tallacen wata-wata na ƙungiyar hadin gwiwa, ko zuwan mutane wani cibiya). Ku rubuta a jumla ɗaya tambayar da kuke son amsawa, sannan ku kwafa fayil ɗin ɗanye kafin kowane tsabtacewa.",
        "Ku bi cikakkiyar sarka: ku tsabtace bayanan (kwafi biyu-biyu, kwanaki, sunaye, ƙwayoyi marasa komai), ku lissafa alamomi biyu ko uku da tebur mai jujjuyawa, kuma ku samar da hoto GUDA ƊAYA da aka zaɓa sosai (sanduna don kwatanta, layi don canji a kan lokaci) tare da take da ke faɗin saƙon.",
        "Ku rubuta rahoton shafi ɗaya wanda ya ƙunshi daidai: tambaya, tsarin aiki (tushe, kwanan wata, adadin amsoshi, kayan aikin da aka yi amfani da shi), hoto, saƙon asali a jumla ɗaya, shawara mai amfani, da iyakokin bayanan. Ku sa shi ya tsaya a shafi ɗaya."
      ],
      "observation": "Ku sake karanta rahotonku kuna tambayar kanku: 'Abokin aiki da bai san wannan aiki ba zai iya fahimtar saƙona cikin daƙiƙa goma, kuma ya sake yin lissafina da tsarin aikina?' Idan haka ne, kun samar da abu bayyananne kuma tabbatacce. Idan saƙon ba bayyananne ba ne ko kuma tushen ya ɓace, ku gyara kafin raba shi. Kun gama gudanar da cikakken bincike: wannan dai-dai shi ne abin da ake tsammani daga ƙwararren bayanai."
    },
    "quiz": [
      {
        "question": "Kafin lissafin alamomi a kan bincike, kun lura cewa an rubuta wannan ƙauye 'Garin Baka', 'garin baka' da 'Garin-Baka'. Me ya kamata ku fara yi?",
        "options": [
          { "key": "A", "text": "Ku fara lissafin nan take, waɗannan bambance-bambancen ba su canza komai a sakamakon ba" },
          { "key": "B", "text": "Ku tsabtace bayanan da farko ta hanyar daidaita rubutun sunayen ƙauyuka" },
          { "key": "C", "text": "Ku share dukkan layukan wannan ƙauye don guje wa kuskure" },
          { "key": "D", "text": "Ku roƙi AI ta kintsa sunan da ya dace a madadinku" }
        ],
        "answer": "B",
        "explanation": "Wannan mataki ne na tsabtacewa (Darasi 1). Rubutu uku daban-daban za a ƙidaya su a matsayin ƙauyuka uku daban-daban, wanda zai gurɓata dukkan alamominku. Dole ne ku daidaita sunayen kafin kowane lissafi, kuma ku ajiye kwafin fayil ɗin ɗanye."
      },
      {
        "question": "Kuna son sanin matsakaicin gamsuwa ta ƙauye daga amsoshi 120. Wane kayan aiki ya fi dacewa?",
        "options": [
          { "key": "A", "text": "Ƙidaya da hannu, layi-layi" },
          { "key": "B", "text": "Rubuta dogon rubutu da ke kwatanta kowace amsa" },
          { "key": "C", "text": "Tebur mai jujjuyawa (pivot) da ke haɗawa ta ƙauye kuma yana lissafin matsakaici" },
          { "key": "D", "text": "Hoton sanduna, ba tare da lissafi na farko ba" }
        ],
        "answer": "C",
        "explanation": "Tebur mai jujjuyawa (Darasi 2) yana haɗa amsoshin ta ƙauye ta atomatik kuma yana lissafin matsakaici ga kowanne. Shi ne kayan aikin da aka yi don samar da alamomi masu taƙaitawa ba tare da lissafi na hannu ko haɗarin kuskure ba."
      },
      {
        "question": "Dole ne ku sake yin irin wannan tsabtacewa da irin wannan lissafi kowane wata a kan fayil na CSV da aka fitar. Wane fa'ida Python da pandas ke bayarwa?",
        "options": [
          { "key": "A", "text": "Yana sanya bayanan su zama gaskiya ta atomatik, ba tare da bukatar duba su ba" },
          { "key": "B", "text": "Yana ba da damar sake amfani da irin wannan layukan lambar kowane wata, wanda ke tsuke lokaci kuma yana rage kuskure" },
          { "key": "C", "text": "Tilas ne: ba tare da Python ba, babu wani bincike mai yiwuwa" },
          { "key": "D", "text": "Yana cire bukatar ambaton tushenku gaba ɗaya" }
        ],
        "answer": "B",
        "explanation": "Python da pandas (Darasi 3) yana karanta CSV kuma yana sarrafa aiki mai maimaitawa cikin layuka kaɗan masu sake amfani. Yana da amfani ga ayyuka masu maimaitawa, amma ba tilas ba ne: tebur na bayanai ya isa ga ƙaramin aiki. Kayan aikin ba ya cire bukatar duba bayanan ko ambaton tushenku."
      },
      {
        "question": "Kuna son kwatanta yawan gamsuwa tsakanin ƙauyuka 6 a cikin rahotonku. Wane irin hoto ne ya fi bayyana?",
        "options": [
          { "key": "A", "text": "Hoton sanduna, sanda ɗaya ga kowane ƙauye" },
          { "key": "B", "text": "Layi a kan lokaci, ko da babu ma'aunin lokaci" },
          { "key": "C", "text": "Tebur na layuka 120 da dukkan amsoshin ɗanye" },
          { "key": "D", "text": "Babu hoto, sai dai sakin layi na lambobi kawai" }
        ],
        "answer": "A",
        "explanation": "Domin kwatanta nau'uka (ƙauyuka), hoton sanduna shi ne mafi sauƙin karatu (Darasi 4). Layin lanƙwasa yana aiki ga canje-canje a kan lokaci. Take da ke bayyana saƙon yana sanya hoton ya fi amfani."
      },
      {
        "question": "Masu amfana 40 ne kawai daga cikin 200 suka amsa binciken ku. Yaya za ku magance wannan a cikin rahotonku?",
        "options": [
          { "key": "A", "text": "Kada ku ambace shi, don kada ku raunana rahoton" },
          { "key": "B", "text": "Gabatar da sakamakon a matsayin mai inganci ga dukkan masu amfana 200" },
          { "key": "C", "text": "Soke binciken, domin ba ya amfani" },
          { "key": "D", "text": "Ku nuna shi a bayyane a matsayin iyaka: sakamakon yana wakiltar masu amsa kawai" }
        ],
        "answer": "D",
        "explanation": "Nuna iyakoki (Darasi 5) yana ƙarfafa amincin maimakon raunana shi. Da amsoshi 40 daga cikin 200, sakamakon ba ya wakiltar dukkan masu amfana ba. Faɗin haka da gaskiya, ambaton tushen da rubuta tsarin aiki suna sanya rahoton ya zama tabbatacce kuma abin amincewa."
      }
    ],
    "reflection": "Ku yi tunani kan tarin bayanai na gaskiya da kuke da damar samun sa a aikinku — bincike, rajista, tallace-tallace, zuwan mutane. Wace tambaya mai sauƙi kuma bayyananne za ku iya yi masa wannan mako? Waɗanne iyakoki za su kasance ga waɗannan bayanai, kuma wane mataki na farko za ku ɗauka don samar da rahotonku na shafi ɗaya, bayyananne kuma tabbatacce?",
    "glossary": [
      {
        "term": "Tarin bayanai (Jeu de données)",
        "definition": "Tsararren tarin bayanai da aka tattara kan batu ɗaya — misali amsoshin bincike ko tallace-tallacen wata-wata na ƙungiyar hadin gwiwa — yawanci ana gabatar da shi a matsayin tebur tare da layuka da ginshiƙai."
      },
      {
        "term": "Tsarin aiki (Méthodologie)",
        "definition": "Bayanin matakan da aka bi don gudanar da binciken: daga ina bayanan suka fito, yadda aka tsabtace su, waɗanne alamomi aka lissafa kuma da wane kayan aiki. Tsarin aiki mai kyau yana ba abokin aiki damar fahimta da sake yin aikin."
      },
      {
        "term": "Sake yin aiki (Reproductibilité)",
        "definition": "Iyawar wani mutum na sake yin binciken ku daga irin wannan bayanai da irin wannan tsarin aiki, kuma ya samu irin wannan sakamako. Ajiye fayil ɗin ɗanye da rubuta kowane mataki yana sanya bincike ya zama mai sake yiwuwa."
      },
      {
        "term": "Tabbatarwa (Vérifiabilité)",
        "definition": "Gaskiyar cewa mai karatu zai iya duba inda lambobinku suka fito kuma ya tabbatar da ƙarshenku, ba tare da bukatar gaskata ku da maganarku kawai ba. Tana dogara ne kan tushen da aka ambata da tsarin aiki da aka rubuta."
      },
      {
        "term": "Iyakar bayanai (Limite des données)",
        "definition": "Sanannen rauni na tarin bayanai da ke takura abin da za a iya cimma daga gare shi — misali ƙarancin adadin amsoshi, gajeren lokaci, ko ƙungiya da ta ɓace. Nuna iyakoki yana ƙarfafa amincin rahoto."
      },
      {
        "term": "Rahoton bincike (Rapport d’analyse)",
        "definition": "Gajeren takarda da ke gabatar da bincike daga farko zuwa ƙarshe: tambaya, tsarin aiki, hoto ɗaya ko biyu, saƙon asali, shawara da iyakoki. Manufarsa ita ce isar da saƙo mai amfani ta hanya bayyananne kuma tabbatacce."
      }
    ]
  }
};
