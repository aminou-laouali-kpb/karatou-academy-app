import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is7 (Projet final : résoudre un vrai problème avec l'IA)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson7: Record<Language, LessonContent> = {
  "fr": {
    "id": "is7",
    "lessonNumber": 7,
    "title": "Projet final : résoudre un vrai problème avec l’IA — et documenter votre démarche",
    "objective": "À la fin de cette leçon, vous saurez résoudre un vrai problème avec l’IA et le documenter. Vous réunirez tout ce que vous avez appris dans les Leçons 1 à 6 — comprendre ce que fait l’IA, dialoguer avec un assistant, rédiger une consigne RCTF, peser chances et risques, vérifier, protéger, questionner — en une seule démarche complète. Vous saurez remplir une fiche projet d’une page en cinq parties et contrôler votre travail avec cinq critères simples. La réussite de ce projet final débloque votre certificat numérique vérifiable Karatou Academy.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un projet final, pas un examen piège : six leçons, une seule démarche",
        "body": "Un projet final fait souvent peur. On imagine une épreuve piège, ou un gros projet technique réservé aux informaticiens. Ce n’est ni l’un ni l’autre. Il s’agit d’un petit problème réel de votre quotidien, que vous traitez avec l’IA, puis dont vous racontez honnêtement la démarche. Pensez à une recette que l’on transmet : ce qui compte n’est pas seulement le plat, c’est la façon de le préparer, étape par étape, pour qu’une autre personne comprenne et puisse refaire. Ici, on ne regarde pas la perfection du résultat : on regarde votre façon de travailler avec l’IA — comment vous avez demandé, vérifié, corrigé.\n\nPour ce projet, vous n’apprenez rien de nouveau : vous assemblez. Dans la Leçon 1, vous avez découvert que l’IA reconnaît, prédit et produit, et qu’elle est déjà dans votre téléphone. Dans la Leçon 2, vous avez vu qu’elle apprend à partir d’exemples et donne la réponse la plus probable, pas forcément la vraie. Dans la Leçon 3, vous avez dialogué avec un assistant et appris à relancer. La Leçon 4 vous a donné la méthode RCTF : rôle, contexte, tâche, format. La Leçon 5 vous a fait peser les chances et les risques de l’IA pour votre métier. La Leçon 6, enfin, vous a appris trois réflexes : vérifier, protéger, questionner.\n\nNos trois compagnons de route se lancent eux aussi. À Niamey, au Niger, Aïcha répond tard le soir aux mêmes questions de ses clientes sur WhatsApp. À Thiès, au Sénégal, Moussa révise ses examens avec des notes en désordre. À Garoua, au Cameroun, Hadiza doit informer les habitants en deux langues, en français et en haoussa. Trois métiers, trois problèmes, une même démarche : passer d’essais isolés à un travail complet, que l’on peut présenter."
      },
      {
        "title": "La fiche projet : cinq parties sur une seule page",
        "body": "Le livrable de ce projet tient sur une page : la fiche projet. Comme le carnet d’un artisan qui note la commande, le travail fait et ce qu’il faut reprendre, elle garde la trace de chaque étape. Elle compte cinq parties. Un : le problème — qui, où, et pourquoi c’est important. Deux : les consignes — la première, puis la meilleure version obtenue après relance, comme vous l’avez pratiqué dans les Leçons 3 et 4. Trois : le résultat — ce que l’IA a produit, et ce que vous avez changé.\n\nQuatre : la vérification — ce que vous avez vérifié, et auprès de qui. C’est le réflexe « vérifier » de la Leçon 6 : une date, un horaire, un montant ou une règle, contrôlés auprès d’une source officielle ou d’une personne compétente. Cinq : le bilan — ce qui a marché, ce qui n’a pas marché, et ce que vous referez. Le bilan n’est pas une formalité : c’est la partie où vous montrez que vous avez gardé la tête froide face à la machine.\n\nUne page suffit, et des phrases simples suffisent. Vous pouvez rédiger la fiche sur votre téléphone, dans une note, ou à la main sur une feuille que vous photographiez. Gardez aussi vos consignes et les réponses de l’assistant : elles prouvent votre démarche. Une enseignante de Cotonou, au Bénin, qui prépare avec l’IA une fiche de révision pour ses élèves de dernière année de primaire, remplirait exactement les mêmes cinq cases : son problème, sa consigne, la fiche obtenue, les points vérifiés dans le manuel, et son bilan."
      },
      {
        "title": "Cinq critères pour réussir, tous déjà rencontrés",
        "body": "Votre projet est évalué sur cinq critères. Un problème réel et précis. Une consigne complète, avec au moins une relance. Un résultat utilisable. Une vérification réelle, décrite. Et aucune donnée personnelle. Vous reconnaissez chaque critère : ils viennent tous des leçons précédentes. Le problème précis, c’est ce qu’a appris Hadiza dans la Leçon 3 : « salubrité Garoua » donne une réponse vague, une vraie situation donne une réponse utile. La consigne complète, c’est la méthode RCTF de la Leçon 4 ; la relance, c’est la conversation qui continue, vue dans la Leçon 3.\n\nLa vérification réelle vient des Leçons 5 et 6 : comme le diagnostic d’une feuille de mil se confirme avec un agent de vulgarisation agricole, chaque fait important se confirme auprès d’une source ou d’une personne qui sait. Écrire « j’ai vérifié » ne suffit pas : dites quoi, et avec qui. Enfin, aucune donnée personnelle : c’est le réflexe « protéger » de la Leçon 6. Ni nom, ni numéro de téléphone, ni mot de passe, ni information de santé ; « [Prénom] » à la place d’un nom, et aucun détail qui permettrait de reconnaître quelqu’un.\n\nVoyons maintenant un contre-exemple. Souleymane dépose ceci : « J’ai demandé un plan d’affaires à l’IA. Voici le texte. » Que lui manque-t-il ? Presque tout : pas de problème précis, pas de consigne, pas de vérification, pas de bilan. L’IA a travaillé ; lui, très peu. Souleymane n’a pas échoué : il n’a simplement pas commencé. Car ce qu’on évalue, c’est votre démarche, pas le texte de la machine. Pour s’en sortir, il lui suffit de reprendre la fiche : un problème, une consigne, une relance, une vérification, un bilan."
      },
      {
        "title": "Petit, réel, honnête : choisir son sujet et passer à l’action",
        "body": "Dernier conseil : choisissez petit. Un message, une liste, un plan de révision, une affiche : c’est largement assez. Un petit problème bien traité vaut mieux qu’un grand projet flou, comme une parcelle bien entretenue rapporte plus qu’un grand champ laissé à l’abandon. Quelques bons sujets : les questions fréquentes de vos clients, une réunion à préparer, un cours à réviser, une lettre à écrire. Le secrétaire d’une association de parents d’élèves à Bamako, au Mali, peut préparer l’ordre du jour d’une réunion ; une étudiante de Conakry, en Guinée, peut transformer ses notes en questions de révision ; un vendeur de pièces détachées à Nairobi, au Kenya, peut préparer ses réponses aux questions qui reviennent chaque jour.\n\nSoyez honnête dans le bilan, et dites aussi ce qui n’a pas marché : c’est une preuve de sérieux, pas un aveu de faiblesse. Une traduction qu’il a fallu corriger, une information inventée que vous avez repérée, une réponse trop longue qu’il a fallu raccourcir : tout cela montre que vous avez gardé le contrôle. Rappelez-vous la Leçon 2 : l’IA est souvent moins bonne dans les langues pour lesquelles elle a vu peu d’exemples ; le noter dans votre bilan, c’est exactement ce qu’on attend. Pour trouver votre sujet, commencez par cette consigne RCTF : « Rôle : tu es un conseiller patient qui aide à résoudre des problèmes du quotidien. Contexte : je suis [votre métier] à [votre ville]. Mon problème : [décrivez-le en 2 phrases, sans nom ni donnée personnelle]. Tâche : propose-moi 3 façons dont un assistant IA pourrait m’aider. Ensuite, pose-moi 2 questions pour préciser mon problème. Format : liste courte, phrases simples, en français. »\n\nRemplissez votre fiche, puis déposez-la dans cette leçon, sur Karatou Academy. La réussite de ce projet final débloque votre certificat numérique vérifiable : il porte un QR code que toute personne — un employeur, un formateur, un partenaire — peut scanner pour vérifier qu’il est authentique, et il reste valable 12 mois. Pour aller plus loin, le module Intelligence artificielle de Karatou Academy approfondit chacune de ces étapes. Mais l’essentiel se joue ailleurs : dans l’habitude que vous aurez prise de demander clairement, de vérifier, et de protéger les autres."
      }
    ],
    "example": {
      "title": "Le projet d’Aïcha : des réponses types pour ses clientes, de la fiche projet au bilan",
      "challenge": "Aïcha, la quarantaine, vend des pagnes wax et du bazin au Grand Marché de Niamey, au Niger, et beaucoup par WhatsApp. Chaque jour, ses clientes lui posent les mêmes questions : les horaires, la livraison, le paiement, les retouches. Occupée à son étal toute la journée, elle répond tard le soir, et certaines clientes se lassent d’attendre. Pour le projet final, elle n’est pas seule : à Thiès, au Sénégal, Moussa révise ses examens avec des notes en désordre ; à Garoua, au Cameroun, Hadiza doit informer les habitants en deux langues. Pour tous les trois, l’enjeu est le même : passer d’essais isolés avec l’IA à une démarche complète, que l’on peut présenter. Le projet d’Aïcha sert d’exemple de bout en bout.",
      "solution": "Aïcha remplit sa fiche projet, partie par partie. Un, le problème : « Mes clientes me posent chaque jour les mêmes questions sur WhatsApp. Horaires, livraison, paiement, retouches. Je réponds tard le soir. » Deux, les consignes : dans ChatGPT, elle écrit une consigne RCTF. « Rôle : tu es une vendeuse aimable et précise. Contexte : je vends des pagnes wax et du bazin au Grand Marché de Niamey et sur WhatsApp. » Elle ajoute ses vraies informations : ses horaires d’ouverture, la livraison dans Niamey, le paiement en espèces ou par mobile money, le délai des retouches. « Tâche : écris une réponse courte à chacune des cinq questions que mes clientes posent le plus. Format : deux lignes par réponse, ton chaleureux, en français. N’invente aucune information. » Puis elle relance : « Plus simple, et donne aussi une version en haoussa. » Trois, le résultat : cinq réponses prêtes, en français et en haoussa, qu’elle enregistre comme réponses rapides dans WhatsApp Business ; une touche, et la réponse s’affiche. Quatre, la vérification : chaque réponse est comparée à ses vraies informations ; Zeinabou, sa nièce, relit la version haoussa et corrige deux tournures ; aucun nom de cliente n’a été tapé. Cinq, le bilan : « Ce qui a marché : des réponses claires, envoyées plus tôt. Ce qui n’a pas marché : le haoussa demandait une relecture. Je referai : une version en zarma, relue elle aussi. »",
      "impact": "Les clientes d’Aïcha reçoivent désormais une réponse claire plus tôt dans la journée, en français ou en haoussa, envoyée d’une seule touche, au lieu d’attendre la fin de soirée. Aïcha tient une fiche d’une page : cinq parties, un vrai problème réglé. C’est exactement le niveau attendu, ni plus ni moins. Elle sait aussi ce qu’elle améliorera ensuite. Moussa et Hadiza ont déposé leur fiche à leur tour : c’est maintenant à vous."
    },
    "practice": {
      "title": "Résolvez un vrai problème avec l’IA, et documentez votre démarche",
      "instructions": [
        "Choisissez un problème réel de votre quotidien, petit et précis : un message, une liste, un plan de révision, une affiche. Pour le préciser, envoyez à un assistant gratuit (Gemini, ChatGPT, Claude ou Copilot) cette consigne, en remplaçant les crochets : « Rôle : tu es un conseiller patient qui aide à résoudre des problèmes du quotidien. Contexte : je suis [votre métier] à [votre ville]. Mon problème : [décrivez-le en 2 phrases, sans nom ni donnée personnelle]. Tâche : propose-moi 3 façons dont un assistant IA pourrait m’aider. Ensuite, pose-moi 2 questions pour préciser mon problème. Format : liste courte, phrases simples, en français. »",
        "Traitez ensuite votre problème avec l’assistant : écrivez votre propre consigne RCTF (rôle, contexte, tâche, format) avec vos vrais faits, puis faites au moins une relance. Appliquez les trois réflexes : vérifiez ce qui compte auprès d’une source ou d’une personne compétente, protégez les données (aucun nom, aucun numéro), et questionnez le résultat (« Est-ce vrai chez moi ? Qui est oublié ? »).",
        "Remplissez la fiche projet en cinq parties, sur une page — problème, consignes, résultat, vérification, bilan — sur votre téléphone ou à la main, en gardant vos consignes et les réponses de l’assistant. Déposez-la ensuite dans cette leçon, sur Karatou Academy."
      ],
      "observation": "Vous constaterez que vous n’avez rien appris de nouveau : vous avez assemblé les six leçons en une démarche complète. Votre fiche montre comment vous avez demandé, vérifié et corrigé, et pas seulement ce que la machine a écrit. Relisez-la avec les cinq critères : problème réel et précis, consigne complète avec relance, résultat utilisable, vérification décrite, aucune donnée personnelle. Si une case manque, c’est la partie à reprendre, comme Souleymane."
    },
    "quiz": [
      {
        "question": "Combien de parties compte la fiche projet ?",
        "options": [
          { "key": "A", "text": "Deux" },
          { "key": "B", "text": "Trois" },
          { "key": "C", "text": "Cinq" },
          { "key": "D", "text": "Dix" }
        ],
        "answer": "C",
        "explanation": "La fiche projet compte cinq parties : problème, consignes, résultat, vérification, bilan. Elles tiennent sur une seule page, en phrases simples. Moins de parties laisserait des trous dans la démarche ; dix alourdiraient la fiche sans rien apporter."
      },
      {
        "question": "Laquelle de ces parties appartient à la fiche projet ?",
        "options": [
          { "key": "A", "text": "La vérification d’au moins un fait" },
          { "key": "B", "text": "Votre photo" },
          { "key": "C", "text": "Le nom de vos clients" },
          { "key": "D", "text": "Un texte de dix pages" }
        ],
        "answer": "A",
        "explanation": "La vérification fait partie de la fiche : vous dites ce que vous avez contrôlé et auprès de qui, comme le réflexe « vérifier » de la Leçon 6. Votre photo n’apporte rien, le nom de vos clients est une donnée personnelle à ne jamais écrire, et la fiche tient sur une page, pas sur dix."
      },
      {
        "question": "Quel projet respecte les critères ?",
        "options": [
          { "key": "A", "text": "« J’ai demandé un plan d’affaires à l’IA, voici le texte »" },
          { "key": "B", "text": "Une liste d’outils IA" },
          { "key": "C", "text": "Une capture d’écran sans explication" },
          { "key": "D", "text": "Un problème précis, une consigne, une relance, une vérification et un bilan" }
        ],
        "answer": "D",
        "explanation": "Le projet D coche les cinq critères : un problème précis, une consigne complète avec relance, une vérification et un bilan. Le plan d’affaires livré tel quel, la liste d’outils ou la capture sans explication montrent seulement ce que la machine a produit, pas votre démarche : c’est l’erreur de Souleymane."
      },
      {
        "question": "Que faut-il éviter absolument dans le projet ?",
        "options": [
          { "key": "A", "text": "Les relances" },
          { "key": "B", "text": "Les données personnelles, comme des noms ou des numéros" },
          { "key": "C", "text": "Le bilan" },
          { "key": "D", "text": "Les consignes" }
        ],
        "answer": "B",
        "explanation": "Les données personnelles — noms, numéros de téléphone, mots de passe, informations de santé — n’ont rien à faire dans une consigne ni dans la fiche : c’est le réflexe « protéger » de la Leçon 6. Les relances, les consignes et le bilan, eux, sont justement ce qu’on attend."
      },
      {
        "question": "Dans le bilan, qu’écrivez-vous ?",
        "options": [
          { "key": "A", "text": "Seulement ce qui a marché" },
          { "key": "B", "text": "Ce qui a marché, ce qui n’a pas marché, et ce que vous referez" },
          { "key": "C", "text": "Le nom de l’assistant, rien d’autre" },
          { "key": "D", "text": "Rien, le bilan est facultatif" }
        ],
        "answer": "B",
        "explanation": "Le bilan dit ce qui a marché, ce qui n’a pas marché et ce que vous referez. Aïcha note ainsi que la version haoussa demandait une relecture, et qu’elle fera une version zarma, relue elle aussi : reconnaître une limite est une preuve de sérieux. Le bilan n’est jamais facultatif."
      },
      {
        "question": "Quand ChatGPT rédige les réponses types d’Aïcha, que fait-il, au fond ?",
        "options": [
          { "key": "A", "text": "Il produit un texte en prédisant la suite la plus probable, grâce aux exemples vus pendant son entraînement" },
          { "key": "B", "text": "Il recopie une page web qui contient déjà ces réponses" },
          { "key": "C", "text": "Il connaît déjà les horaires de la boutique d’Aïcha" },
          { "key": "D", "text": "Il applique des règles fixes écrites par un programmeur" }
        ],
        "answer": "A",
        "explanation": "Un assistant comme ChatGPT produit un texte nouveau (Leçon 1) en prédisant la suite la plus probable, grâce aux nombreux exemples vus pendant son entraînement (Leçon 2). Il ne connaît pas les horaires d’Aïcha : c’est à elle de les donner dans le contexte, sinon il risque d’en inventer."
      },
      {
        "question": "Aïcha veut des réponses types pour ses clientes. Quelle démarche est la bonne ?",
        "options": [
          { "key": "A", "text": "Taper « réponses clientes » et copier le premier résultat" },
          { "key": "B", "text": "Écrire « Fais quelque chose de bien » et attendre" },
          { "key": "C", "text": "Poser la même question à dix assistants différents" },
          { "key": "D", "text": "Écrire une consigne en quatre blocs — rôle, contexte, tâche, format — puis relancer dans la même conversation" }
        ],
        "answer": "D",
        "explanation": "La bonne démarche combine deux leçons : une consigne en quatre blocs — rôle, contexte, tâche, format — comme dans la Leçon 4, puis une relance dans la même conversation, où l’assistant tient compte de ce qui précède, comme dans la Leçon 3. Quelques mots vagues ou une demande floue donnent une réponse générale, peu utile."
      },
      {
        "question": "Un ami vous demande ce que l’IA change pour le travail. Quelle réponse correspond à la Leçon 5 ?",
        "options": [
          { "key": "A", "text": "« Elle va remplacer tous les métiers d’ici peu »" },
          { "key": "B", "text": "« Elle n’a aucun effet en Afrique »" },
          { "key": "C", "text": "« Elle transforme surtout des tâches ; savoir demander, vérifier et adapter au terrain prend de la valeur »" },
          { "key": "D", "text": "« Un diagnostic sur photo suffit, plus besoin d’agent de vulgarisation »" }
        ],
        "answer": "C",
        "explanation": "Selon l’OIT (2023), citée dans la Leçon 5, l’IA générative transforme surtout des tâches, plus qu’elle ne supprime des métiers entiers. Ce qui prend de la valeur, c’est de savoir demander, vérifier et adapter au terrain. Et un diagnostic sur photo se confirme toujours avec un agent de vulgarisation."
      }
    ],
    "reflection": "Quel petit problème de votre quotidien allez-vous traiter pour ce projet, et auprès de qui vérifierez-vous le résultat avant de vous en servir ?",
    "glossary": [
      {
        "term": "Intelligence artificielle (IA)",
        "definition": "Un programme qui a appris à partir de nombreux exemples, au lieu de suivre seulement des règles écrites à la main. Elle reconnaît, prédit et produit (Leçon 1)."
      },
      {
        "term": "Entraînement",
        "definition": "La période où l’IA étudie de nombreux exemples accompagnés de la bonne réponse, pour trouver ses propres repères. La qualité des exemples fait la qualité des réponses (Leçon 2)."
      },
      {
        "term": "Relance",
        "definition": "Un nouveau message envoyé dans la même conversation pour raccourcir, préciser ou corriger la réponse de l’assistant, qui tient compte de ce qui précède (Leçon 3). La première réponse n’est qu’un brouillon."
      },
      {
        "term": "RCTF",
        "definition": "La méthode de consigne en quatre blocs : Rôle (qui l’IA doit incarner), Contexte (la situation et vos faits exacts), Tâche (l’action précise), Format (longueur, ton, langue). Vue dans la Leçon 4, elle sert dans chaque projet."
      },
      {
        "term": "Hallucination",
        "definition": "Une réponse fausse donnée avec assurance par l’IA, comme une date ou une règle inventée. D’où le réflexe « vérifier » de la Leçon 6."
      },
      {
        "term": "Donnée personnelle",
        "definition": "Toute information qui permet de reconnaître quelqu’un : nom, numéro de téléphone, adresse, mot de passe, information de santé, ou détails assez précis pour l’identifier. On la remplace par « [Prénom] » (Leçon 6)."
      },
      {
        "term": "Fiche projet",
        "definition": "Le document d’une page qui raconte votre démarche en cinq parties : problème, consignes, résultat, vérification, bilan. C’est le livrable du projet final."
      }
    ]
  },
  "en": {
    "id": "is7",
    "lessonNumber": 7,
    "title": "Final project: solve a real problem with AI — and document your approach",
    "objective": "By the end of this lesson, you will be able to solve a real problem with AI and document it. You will bring together everything you learned in Lessons 1 to 6 — understanding what AI does, talking with an assistant, writing an RCTF prompt, weighing opportunities and risks, checking, protecting, questioning — into one complete approach. You will know how to fill in a one-page project sheet in five parts and check your work against five simple criteria. Passing this final project unlocks your verifiable Karatou Academy digital certificate.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A final project, not a trick exam: six lessons, one approach",
        "body": "A final project often feels scary. People picture a trick exam, or a big technical project meant for computer experts. It is neither. It is a small, real problem from your daily life, which you tackle with AI, then describe honestly. Think of a recipe you pass on: what matters is not only the dish, but how it was prepared, step by step, so someone else can understand it and make it again. Here, nobody judges how perfect the result is: what counts is how you work with AI — how you asked, checked and corrected.\n\nFor this project, you learn nothing new: you put things together. In Lesson 1, you discovered that AI recognizes, predicts and produces, and that it is already in your phone. In Lesson 2, you saw that it learns from examples and gives the most likely answer, not necessarily the true one. In Lesson 3, you talked with an assistant and learned to follow up. Lesson 4 gave you the RCTF method: role, context, task, format. Lesson 5 had you weigh the opportunities and risks of AI for your work. Finally, Lesson 6 taught you three reflexes: check, protect, question.\n\nOur three travel companions are getting started too. In Niamey, Niger, Aïcha answers the same questions from her customers on WhatsApp late at night. In Thiès, Senegal, Moussa revises for his exams with messy notes. In Garoua, Cameroon, Hadiza has to inform residents in two languages, French and Hausa. Three jobs, three problems, one approach: moving from scattered attempts to a complete piece of work that can be presented."
      },
      {
        "title": "The project sheet: five parts on a single page",
        "body": "This project's deliverable fits on one page: the project sheet. Like a craftsman's notebook recording the order, the work done and what needs fixing, it keeps a trace of each step. It has five parts. One: the problem — who, where, and why it matters. Two: the prompts — the first one, then the best version obtained after following up, as you practised in Lessons 3 and 4. Three: the result — what the AI produced, and what you changed.\n\nFour: the verification — what you checked, and with whom. This is the “check” reflex from Lesson 6: a date, opening hours, an amount or a rule, confirmed with an official source or a competent person. Five: the review — what worked, what did not work, and what you will do again. The review is not a formality: it is where you show that you kept a cool head in front of the machine.\n\nOne page is enough, and simple sentences are enough. You can write the sheet on your phone, in a note, or by hand on paper that you photograph. Also keep your prompts and the assistant's answers: they prove your approach. A teacher in Cotonou, Benin, preparing a revision sheet with AI for her final-year primary pupils, would fill in exactly the same five boxes: her problem, her prompt, the sheet she obtained, the points she checked in the textbook, and her review."
      },
      {
        "title": "Five criteria for success, all already familiar",
        "body": "Your project is assessed on five criteria. A real, specific problem. A complete prompt, with at least one follow-up. A usable result. A real verification, described. And no personal data. You recognize each criterion: they all come from earlier lessons. The specific problem is what Hadiza learned in Lesson 3: “sanitation Garoua” gets a vague answer, while a real situation gets a useful one. The complete prompt is the RCTF method from Lesson 4; the follow-up is the ongoing conversation you saw in Lesson 3.\n\nReal verification comes from Lessons 5 and 6: just as a diagnosis on a millet leaf is confirmed with an agricultural extension officer, every important fact is confirmed with a source or a person who knows. Writing “I checked” is not enough: say what, and with whom. Finally, no personal data: this is the “protect” reflex from Lesson 6. No names, no phone numbers, no passwords, no health information; “[First name]” instead of a name, and no detail that would let someone be recognized.\n\nNow let us look at a counter-example. Souleymane submits this: “I asked AI for a business plan. Here is the text.” What is missing? Almost everything: no specific problem, no prompt, no verification, no review. The AI did the work; he did very little. Souleymane did not fail: he simply did not start. Because what is assessed is your approach, not the machine's text. To get back on track, he only needs to return to the sheet: a problem, a prompt, a follow-up, a verification, a review."
      },
      {
        "title": "Small, real, honest: choosing your topic and taking action",
        "body": "One last piece of advice: choose small. A message, a list, a revision plan, a poster: that is plenty. A small problem handled well is worth more than a big, vague project, just as a well-tended plot yields more than a large field left abandoned. Some good topics: your customers' frequent questions, a meeting to prepare, a course to revise, a letter to write. The secretary of a parents' association in Bamako, Mali, can prepare a meeting agenda; a student in Conakry, Guinea, can turn her notes into revision questions; a spare-parts seller in Nairobi, Kenya, can prepare his answers to the questions that come up every day.\n\nBe honest in your review, and also say what did not work: it is a sign of seriousness, not an admission of weakness. A translation that had to be corrected, an invented fact you spotted, an answer that was too long and had to be shortened: all of this shows you stayed in control. Remember Lesson 2: AI is often weaker in languages for which it has seen few examples; noting this in your review is exactly what is expected. To find your topic, start with this RCTF prompt: “Role: you are a patient adviser who helps solve everyday problems. Context: I am a [your job] in [your town]. My problem: [describe it in 2 sentences, with no names or personal data]. Task: suggest 3 ways an AI assistant could help me. Then ask me 2 questions to clarify my problem. Format: short list, simple sentences, in English.”\n\nFill in your sheet, then submit it in this lesson, on Karatou Academy. Passing this final project unlocks your verifiable digital certificate: it carries a QR code that anyone — an employer, a trainer, a partner — can scan to check that it is genuine, and it remains valid for 12 months. To go further, Karatou Academy's Artificial Intelligence module explores each of these steps in more depth. But what matters most happens elsewhere: in the habit you will have built of asking clearly, checking, and protecting others."
      }
    ],
    "example": {
      "title": "Aïcha's project: ready-made replies for her customers, from project sheet to review",
      "challenge": "Aïcha, in her forties, sells wax prints and bazin fabric at the Grand Market in Niamey, Niger, and does a lot of business over WhatsApp. Every day, her customers ask her the same questions: opening hours, delivery, payment, alterations. Busy at her stall all day, she replies late at night, and some customers get tired of waiting. For the final project, she is not alone: in Thiès, Senegal, Moussa revises for his exams with messy notes; in Garoua, Cameroon, Hadiza has to inform residents in two languages. For all three, the challenge is the same: moving from scattered attempts with AI to a complete approach that can be presented. Aïcha's project serves as the full example from start to finish.",
      "solution": "Aïcha fills in her project sheet, part by part. One, the problem: “My customers ask me the same questions every day on WhatsApp. Opening hours, delivery, payment, alterations. I reply late at night.” Two, the prompts: in ChatGPT, she writes an RCTF prompt. “Role: you are a friendly, precise saleswoman. Context: I sell wax prints and bazin at the Grand Market in Niamey and on WhatsApp.” She adds her real information: her opening hours, delivery within Niamey, payment in cash or by mobile money, the time alterations take. “Task: write a short reply to each of the five questions my customers ask most. Format: two lines per reply, warm tone, in French. Do not invent any information.” Then she follows up: “Simpler, and also give a version in Hausa.” Three, the result: five ready replies, in French and Hausa, which she saves as quick replies in WhatsApp Business; one tap, and the reply appears. Four, the verification: each reply is compared with her real information; Zeinabou, her niece, rereads the Hausa version and corrects two phrasings; no customer's name was typed. Five, the review: “What worked: clear replies, sent earlier. What did not work: the Hausa needed proofreading. Next time: a version in Zarma, proofread as well.”",
      "impact": "Aïcha's customers now get a clear reply earlier in the day, in French or Hausa, sent with a single tap, instead of waiting until late evening. Aïcha has a one-page sheet: five parts, one real problem solved. That is exactly the expected level, no more, no less. She also knows what she will improve next. Moussa and Hadiza have submitted their sheets too: now it is your turn."
    },
    "practice": {
      "title": "Solve a real problem with AI, and document your approach",
      "instructions": [
        "Choose a real problem from your daily life, small and specific: a message, a list, a revision plan, a poster. To clarify it, send a free assistant (Gemini, ChatGPT, Claude or Copilot) this prompt, replacing the brackets: “Role: you are a patient adviser who helps solve everyday problems. Context: I am a [your job] in [your town]. My problem: [describe it in 2 sentences, with no names or personal data]. Task: suggest 3 ways an AI assistant could help me. Then ask me 2 questions to clarify my problem. Format: short list, simple sentences, in English.”",
        "Then tackle your problem with the assistant: write your own RCTF prompt (role, context, task, format) with your real facts, then do at least one follow-up. Apply the three reflexes: check what matters with a source or a competent person, protect data (no names, no numbers), and question the result (“Is this true where I live? Who is left out?”).",
        "Fill in the five-part project sheet on one page — problem, prompts, result, verification, review — on your phone or by hand, keeping your prompts and the assistant's answers. Then submit it in this lesson, on Karatou Academy."
      ],
      "observation": "You will notice that you learned nothing new: you assembled the six lessons into one complete approach. Your sheet shows how you asked, checked and corrected, not just what the machine wrote. Reread it against the five criteria: a real, specific problem, a complete prompt with a follow-up, a usable result, a described verification, no personal data. If a box is missing, that is the part to rework, just like Souleymane."
    },
    "quiz": [
      {
        "question": "How many parts does the project sheet have?",
        "options": [
          { "key": "A", "text": "Two" },
          { "key": "B", "text": "Three" },
          { "key": "C", "text": "Five" },
          { "key": "D", "text": "Ten" }
        ],
        "answer": "C",
        "explanation": "The project sheet has five parts: problem, prompts, result, verification, review. They fit on a single page, in simple sentences. Fewer parts would leave gaps in the approach; ten would make the sheet heavy without adding anything."
      },
      {
        "question": "Which of these parts belongs on the project sheet?",
        "options": [
          { "key": "A", "text": "Verification of at least one fact" },
          { "key": "B", "text": "Your photo" },
          { "key": "C", "text": "Your customers' names" },
          { "key": "D", "text": "A ten-page text" }
        ],
        "answer": "A",
        "explanation": "Verification is part of the sheet: you say what you checked and with whom, like the “check” reflex from Lesson 6. Your photo adds nothing, your customers' names are personal data you must never write down, and the sheet fits on one page, not ten."
      },
      {
        "question": "Which project meets the criteria?",
        "options": [
          { "key": "A", "text": "“I asked AI for a business plan, here is the text”" },
          { "key": "B", "text": "A list of AI tools" },
          { "key": "C", "text": "A screenshot with no explanation" },
          { "key": "D", "text": "A specific problem, a prompt, a follow-up, a verification and a review" }
        ],
        "answer": "D",
        "explanation": "Project D ticks all five criteria: a specific problem, a complete prompt with a follow-up, a verification and a review. A business plan handed in as is, a list of tools or a screenshot with no explanation only show what the machine produced, not your approach: that is Souleymane's mistake."
      },
      {
        "question": "What must you absolutely avoid in the project?",
        "options": [
          { "key": "A", "text": "Follow-ups" },
          { "key": "B", "text": "Personal data, such as names or numbers" },
          { "key": "C", "text": "The review" },
          { "key": "D", "text": "Prompts" }
        ],
        "answer": "B",
        "explanation": "Personal data — names, phone numbers, passwords, health information — has no place in a prompt or on the sheet: this is the “protect” reflex from Lesson 6. Follow-ups, prompts and the review, on the other hand, are exactly what is expected."
      },
      {
        "question": "What do you write in the review?",
        "options": [
          { "key": "A", "text": "Only what worked" },
          { "key": "B", "text": "What worked, what did not work, and what you will do again" },
          { "key": "C", "text": "The assistant's name, nothing else" },
          { "key": "D", "text": "Nothing, the review is optional" }
        ],
        "answer": "B",
        "explanation": "The review states what worked, what did not work and what you will do again. Aïcha notes that the Hausa version needed proofreading, and that she will make a Zarma version, proofread as well: admitting a limit is a sign of seriousness. The review is never optional."
      },
      {
        "question": "When ChatGPT writes Aïcha's ready-made replies, what is it really doing?",
        "options": [
          { "key": "A", "text": "It produces text by predicting the most likely continuation, thanks to the examples it saw during training" },
          { "key": "B", "text": "It copies a web page that already contains these replies" },
          { "key": "C", "text": "It already knows the opening hours of Aïcha's shop" },
          { "key": "D", "text": "It applies fixed rules written by a programmer" }
        ],
        "answer": "A",
        "explanation": "An assistant like ChatGPT produces new text (Lesson 1) by predicting the most likely continuation, thanks to the many examples it saw during training (Lesson 2). It does not know Aïcha's opening hours: she has to give them in the context, otherwise it may invent some."
      },
      {
        "question": "Aïcha wants ready-made replies for her customers. Which approach is right?",
        "options": [
          { "key": "A", "text": "Type “customer replies” and copy the first result" },
          { "key": "B", "text": "Write “Do something good” and wait" },
          { "key": "C", "text": "Ask the same question to ten different assistants" },
          { "key": "D", "text": "Write a prompt in four blocks — role, context, task, format — then follow up in the same conversation" }
        ],
        "answer": "D",
        "explanation": "The right approach combines two lessons: a prompt in four blocks — role, context, task, format — as in Lesson 4, then a follow-up in the same conversation, where the assistant takes into account what came before, as in Lesson 3. A few vague words or a fuzzy request get a general, not very useful answer."
      },
      {
        "question": "A friend asks you what AI changes for work. Which answer matches Lesson 5?",
        "options": [
          { "key": "A", "text": "“It will soon replace every job”" },
          { "key": "B", "text": "“It has no effect in Africa”" },
          { "key": "C", "text": "“It mainly transforms tasks; knowing how to ask, check and adapt to the local reality gains value”" },
          { "key": "D", "text": "“A diagnosis from a photo is enough, no need for an extension officer”" }
        ],
        "answer": "C",
        "explanation": "According to the ILO (2023), cited in Lesson 5, generative AI mainly transforms tasks rather than wiping out entire jobs. What gains value is knowing how to ask, check and adapt to the local reality. And a diagnosis from a photo is always confirmed with an extension officer."
      }
    ],
    "reflection": "Which small problem from your daily life will you tackle for this project, and with whom will you check the result before using it?",
    "glossary": [
      {
        "term": "Artificial intelligence (AI)",
        "definition": "A program that has learned from many examples, instead of only following rules written by hand. It recognizes, predicts and produces (Lesson 1)."
      },
      {
        "term": "Training",
        "definition": "The period when AI studies many examples labelled with the right answer, to find its own patterns. The quality of the examples determines the quality of the answers (Lesson 2)."
      },
      {
        "term": "Follow-up",
        "definition": "A new message sent in the same conversation to shorten, clarify or correct the assistant's answer; the assistant takes into account what came before (Lesson 3). The first answer is only a draft."
      },
      {
        "term": "RCTF",
        "definition": "The four-block prompt method: Role (who the AI should play), Context (the situation and your exact facts), Task (the precise action), Format (length, tone, language). Introduced in Lesson 4, it is used in every project."
      },
      {
        "term": "Hallucination",
        "definition": "A false answer given confidently by AI, such as an invented date or rule. Hence the “check” reflex from Lesson 6."
      },
      {
        "term": "Personal data",
        "definition": "Any information that lets someone be recognized: name, phone number, address, password, health information, or details precise enough to identify them. Replace it with “[First name]” (Lesson 6)."
      },
      {
        "term": "Project sheet",
        "definition": "The one-page document that tells your approach in five parts: problem, prompts, result, verification, review. It is the deliverable of the final project."
      }
    ]
  },
  "ha": {
    "id": "is7",
    "lessonNumber": 7,
    "title": "Aikin karshe: warware matsala ta gaske da AI — kuma ku rubuta hanyar da kuka bi",
    "objective": "A karshen wannan darasi, za ku san yadda ake warware matsala ta gaske da AI, kuma ku rubuta hanyar da kuka bi. Za ku hada duk abin da kuka koya a Darasi 1 zuwa 6 — fahimtar abin da AI ke yi, hira da mataimaki, rubuta umarni da hanyar RCTF, auna damammaki da hadurra, tabbatarwa, kariya, tambaya — cikin aiki guda daya cikakke. Za ku iya cike takardar aiki (fiche projet) mai shafi daya mai sassa biyar, kuma ku duba aikinku da sharudda biyar masu sauki. Nasarar wannan aikin karshe tana bude muku takardar shaida ta dijital ta Karatou Academy, wadda ake iya tabbatarwa.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Aikin karshe, ba jarrabawar tarko ba: darussa shida, hanya guda",
        "body": "Aikin karshe yakan firgita mutane. Ana tunanin jarrabawa mai tarko, ko babban aikin fasaha na masana kwamfuta. Ba haka ba ne. Abin da ake nema shi ne karamar matsala ta gaske daga rayuwarku ta yau da kullum, wadda za ku magance da AI, sannan ku bayyana yadda kuka yi da gaskiya. Ku yi tunanin girke-girke da ake koya wa wani: abin da ke da muhimmanci ba abincin kadai ba ne, har da yadda aka shirya shi mataki-mataki, domin wani ya fahimta ya sake yi. A nan, ba a duba kamalar sakamako: ana duba yadda kuke aiki da AI ne — yadda kuka tambaya, kuka tabbatar, kuka gyara.\n\nA wannan aiki, ba za ku koyi wani sabon abu ba: hadawa za ku yi. A Darasi 1, kun gano cewa AI yana gane abubuwa, yana hasashe, yana samar da abu, kuma yana cikin wayarku tun tuni. A Darasi 2, kun ga cewa yana koyo daga misalai, kuma yana ba da amsar da ta fi yiwuwa, ba lallai ta gaskiya ba. A Darasi 3, kun yi hira da mataimakin AI kuma kun koyi sake tambaya. Darasi 4 ya ba ku hanyar RCTF: rawa, mahalli, aiki, tsari. Darasi 5 ya sa kun auna damammaki da hadurran AI ga sana’arku. A karshe, Darasi 6 ya koya muku dabi’u uku: tabbatarwa, kariya, tambaya.\n\nAbokan tafiyarmu uku su ma sun fara. A Yamai, a Nijar, Aïcha tana amsa tambayoyi iri daya na kwastomominta a WhatsApp har cikin dare. A Thiès, a Senegal, Moussa yana bitar jarrabawa da rubuce-rubucen da ba su da tsari. A Garoua, a Kamaru, Hadiza dole ne ta sanar da mazauna gari cikin harsuna biyu, Faransanci da Hausa. Sana’o’i uku, matsaloli uku, hanya guda: daga gwaje-gwaje daban-daban zuwa aiki cikakke wanda za a iya gabatarwa."
      },
      {
        "title": "Takardar aiki: sassa biyar a shafi daya",
        "body": "Abin da za ku mika a wannan aiki yana kan shafi daya: takardar aiki. Kamar littafin mai sana’a da yake rubuta odar da aka ba shi, aikin da ya yi da abin da zai gyara, tana adana alamar kowane mataki. Tana da sassa biyar. Na daya: matsalar — wa, a ina, kuma me ya sa take da muhimmanci. Na biyu: umarnin — na farko, sannan mafi kyawun sigar da aka samu bayan sake tambaya, kamar yadda kuka yi a Darasi 3 da 4. Na uku: sakamakon — abin da AI ya samar, da abin da kuka canza.\n\nNa hudu: tabbatarwa — abin da kuka tabbatar, da wanda kuka tambaya. Wannan ita ce dabi’ar « tabbatarwa » ta Darasi 6: kwanan wata, lokacin aiki, adadin kudi ko wata doka, da aka duba a wurin tushe na hukuma ko a wurin mutumin da ya kware. Na biyar: kimantawa (bilan) — abin da ya yi aiki, abin da bai yi aiki ba, da abin da za ku sake yi. Kimantawa ba wasa ba ce: a nan ne kuke nuna cewa kun kasance da natsuwa a gaban na’urar.\n\nShafi daya ya isa, kuma jimloli masu sauki sun isa. Kuna iya rubuta takardar a wayarku, cikin bayanin kula, ko da hannu a takarda sannan ku dauki hotonta. Ku adana umarninku da amsoshin mataimakin ma: su ne shaidar hanyar da kuka bi. Wata malama a Cotonou, a Benin, da ke shirya takardar bita da AI ga daliban ajin karshe na firamare, za ta cike irin wadannan sassa biyar: matsalarta, umarninta, takardar da ta samu, abubuwan da ta duba a littafin karatu, da kimantawarta."
      },
      {
        "title": "Sharudda biyar na nasara, duk kun riga kun gan su",
        "body": "Ana kimanta aikinku bisa sharudda biyar. Matsala ta gaske kuma bayyananniya. Cikakken umarni, tare da akalla sake tambaya daya. Sakamako mai amfani. Tabbatarwa ta gaske, wadda aka bayyana. Kuma babu bayanan sirri ko kadan. Kuna gane kowane sharadi: duk sun fito daga darussan baya. Matsala bayyananniya, abin da Hadiza ta koya ne a Darasi 3: « tsaftar Garoua » kadai yana kawo amsa marar amfani, amma ainihin yanayi yana kawo amsa mai amfani. Cikakken umarni, hanyar RCTF ce ta Darasi 4; sake tambaya kuwa, hira ce da ke ci gaba, wadda kuka gani a Darasi 3.\n\nTabbatarwa ta gaske ta fito daga Darasi 5 da 6: kamar yadda ake tabbatar da cutar ganyen gero a wurin jami’in fadakarwar noma, kowane muhimmin abu ana tabbatar da shi a wurin tushe ko mutumin da ya sani. Rubuta « na tabbatar » kadai bai isa ba: ku fadi me kuka duba, kuma da wa. A karshe, babu bayanan sirri: dabi’ar « kariya » ce ta Darasi 6. Babu suna, babu lambar waya, babu kalmar sirri, babu bayanin lafiya; « [Suna] » a madadin sunan mutum, kuma babu wani bayani da zai sa a gane wani.\n\nYanzu, ga misalin abin da bai dace ba. Souleymane ya mika wannan: « Na tambayi AI shirin kasuwanci. Ga rubutun. » Me ya rasa? Kusan komai: babu matsala bayyananniya, babu umarni, babu tabbatarwa, babu kimantawa. AI ya yi aiki; shi kuwa, kadan ne kawai. Souleymane bai fadi ba: bai dai fara ba tukuna. Domin abin da ake kimantawa shi ne hanyar da kuka bi, ba rubutun na’ura ba. Don ya gyara, sai kawai ya koma ga takardar aiki: matsala, umarni, sake tambaya, tabbatarwa, kimantawa."
      },
      {
        "title": "Karami, na gaske, da gaskiya: zabar batu da fara aiki",
        "body": "Shawara ta karshe: ku zabi karamin abu. Sako daya, jeri daya, tsarin bita, ko talla daya: ya isa sosai. Karamar matsala da aka magance da kyau ta fi babban aiki marar tsari, kamar yadda karamar gona da aka kula da ita ke ba da amfani fiye da babbar gona da aka watsar. Wasu batutuwa masu kyau: tambayoyin da kwastomominku ke yawan yi, taron da za a shirya, darasin da za a yi bita, wasikar da za a rubuta. Sakataren kungiyar iyayen dalibai a Bamako, a Mali, zai iya shirya ajandar taro; wata daliba a Conakry, a Gini, za ta iya mayar da rubuce-rubucenta tambayoyin bita; mai sayar da kayayyakin mota a Nairobi, a Kenya, zai iya shirya amsoshinsa ga tambayoyin da ake maimaitawa kowace rana.\n\nKu fadi gaskiya a kimantawa, kuma ku fadi abin da bai yi aiki ba ma: wannan alamar himma ce, ba rauni ba. Fassarar da aka gyara, bayanin karya da kuka gano, amsa mai tsawo da aka takaita: duk wannan yana nuna cewa ku ne kuke rike da ragamar aiki. Ku tuna Darasi 2: AI yakan yi rauni a harsunan da ya ga misalai kadan a cikinsu; rubuta hakan a kimantawarku shi ne ainihin abin da ake so. Don samun batunku, ku fara da wannan umarnin RCTF: « Rawa: kai mai ba da shawara ne mai hakuri da ke taimakawa wajen warware matsalolin yau da kullum. Mahalli: ni [sana’arku] ne a [garinku]. Matsalata: [ku bayyana ta a jimloli 2, ba tare da suna ko bayanan sirri ba]. Aiki: ka ba ni hanyoyi 3 da mataimakin AI zai iya taimaka min. Sannan ka yi min tambayoyi 2 don fayyace matsalata. Tsari: gajeren jeri, jimloli masu sauki, cikin Hausa. »\n\nKu cike takardarku, sannan ku mika ta a wannan darasi, a Karatou Academy. Nasarar wannan aikin karshe tana bude muku takardar shaida ta dijital mai tabbatarwa: tana dauke da QR code wanda kowa — mai daukar aiki, malami, abokin hulda — zai iya duba shi don tabbatar da sahihancinta, kuma tana aiki har watanni 12. Don zurfafa, tsarin karatun Intelligence artificielle (Kirkirarriyar Basira) na Karatou Academy yana kara bayani kan kowane mataki. Amma abu mafi muhimmanci yana wani waje: a dabi’ar da kuka dauka ta tambaya a fili, tabbatarwa, da kare sauran mutane."
      }
    ],
    "example": {
      "title": "Aikin Aïcha: amsoshi na shirye ga kwastomominta, daga takardar aiki zuwa kimantawa",
      "challenge": "Aïcha, wadda ke kusan shekara arba’in, tana sayar da atamfa (wax) da shadda (bazin) a Babbar Kasuwar Yamai, a Nijar, kuma tana yin ciniki sosai ta WhatsApp. Kowace rana, kwastomominta suna yi mata tambayoyi iri daya: lokutan bude shago, kai kaya, biyan kudi, gyaran dinki. Saboda tana aiki a rumfarta duk rana, tana amsawa ne cikin dare, kuma wasu kwastomomi suna gajiya da jira. A aikin karshe, ba ita kadai ba ce: a Thiès, a Senegal, Moussa yana bitar jarrabawa da rubuce-rubucen da ba su da tsari; a Garoua, a Kamaru, Hadiza dole ne ta sanar da mazauna gari cikin harsuna biyu. Ga dukkansu uku, kalubalen daya ne: daga gwaje-gwaje daban-daban da AI zuwa cikakkiyar hanya wadda za a iya gabatarwa. Aikin Aïcha ne misali daga farko har karshe.",
      "solution": "Aïcha tana cike takardar aikinta, sashe bayan sashe. Na daya, matsalar: « Kwastomomina suna yi min tambayoyi iri daya kowace rana a WhatsApp. Lokutan aiki, kai kaya, biyan kudi, gyaran dinki. Ina amsawa cikin dare. » Na biyu, umarnin: a ChatGPT, ta rubuta umarnin RCTF. « Rawa: ke mai sayarwa ce mai kirki kuma mai cikakken bayani. Mahalli: ina sayar da atamfa da shadda a Babbar Kasuwar Yamai da kuma a WhatsApp. » Ta kara ainihin bayananta: lokutan bude shagonta, kai kaya cikin Yamai, biyan kudi da hannu ko ta mobile money, tsawon lokacin gyaran dinki. « Aiki: rubuta gajeriyar amsa ga kowace daga cikin tambayoyi biyar da kwastomomina suka fi yi. Tsari: layi biyu ga kowace amsa, cikin kauna, da Faransanci. Kada ka kirkiri wani bayani. » Sannan ta sake tambaya: « Ka sauwaka, kuma ka ba da sigar Hausa ma. » Na uku, sakamakon: amsoshi biyar na shirye, da Faransanci da Hausa, wadanda ta adana a matsayin amsoshi masu sauri (réponses rapides) a WhatsApp Business; tabawa daya, sai amsar ta bayyana. Na hudu, tabbatarwa: an kwatanta kowace amsa da ainihin bayananta; Zeinabou, ’yar yayarta, ta sake karanta sigar Hausa kuma ta gyara wurare biyu; ba a rubuta sunan kowace kwastoma ba. Na biyar, kimantawa: « Abin da ya yi aiki: amsoshi bayyanannu, da ake aikawa da wuri. Abin da bai yi aiki ba: Hausar tana bukatar a sake karantawa. Zan sake yi: sigar Zarma, wadda ita ma za a sake karantawa. »",
      "impact": "Yanzu kwastomomin Aïcha suna samun amsa bayyananniya da wuri a cikin yini, da Faransanci ko Hausa, da tabawa daya kacal, maimakon jira har dare. Aïcha tana da takarda mai shafi daya: sassa biyar, matsala ta gaske daya da aka warware. Wannan shi ne ainihin matakin da ake so, ba fiye ba, ba kasa ba. Ta kuma san abin da za ta inganta nan gaba. Moussa da Hadiza su ma sun mika takardunsu: yanzu ku ne kuke bi."
    },
    "practice": {
      "title": "Ku warware matsala ta gaske da AI, kuma ku rubuta hanyar da kuka bi",
      "instructions": [
        "Ku zabi matsala ta gaske daga rayuwarku ta yau da kullum, karama kuma bayyananniya: sako, jeri, tsarin bita, talla. Don fayyace ta, ku aika wa mataimaki kyauta (Gemini, ChatGPT, Claude ko Copilot) wannan umarnin, kuna maye gurbin abin da ke cikin baka: « Rawa: kai mai ba da shawara ne mai hakuri da ke taimakawa wajen warware matsalolin yau da kullum. Mahalli: ni [sana’arku] ne a [garinku]. Matsalata: [ku bayyana ta a jimloli 2, ba tare da suna ko bayanan sirri ba]. Aiki: ka ba ni hanyoyi 3 da mataimakin AI zai iya taimaka min. Sannan ka yi min tambayoyi 2 don fayyace matsalata. Tsari: gajeren jeri, jimloli masu sauki, cikin Hausa. »",
        "Sannan ku magance matsalarku tare da mataimakin: ku rubuta naku umarnin RCTF (rawa, mahalli, aiki, tsari) da ainihin bayananku, sannan ku yi akalla sake tambaya daya. Ku yi amfani da dabi’u uku: ku tabbatar da abin da ke da muhimmanci a wurin tushe ko mutumin da ya kware, ku kare bayanai (babu suna, babu lamba), kuma ku yi tambaya game da sakamakon (« Shin wannan gaskiya ne a wurinmu? Wa aka manta da shi? »).",
        "Ku cike takardar aiki mai sassa biyar a shafi daya — matsala, umarni, sakamako, tabbatarwa, kimantawa — a wayarku ko da hannu, kuna adana umarninku da amsoshin mataimakin. Sannan ku mika ta a wannan darasi, a Karatou Academy."
      ],
      "observation": "Za ku lura cewa ba ku koyi wani sabon abu ba: kun hada darussa shida cikin hanya guda cikakkiya. Takardarku tana nuna yadda kuka tambaya, kuka tabbatar, kuka gyara, ba abin da na’ura ta rubuta kadai ba. Ku sake karanta ta da sharudda biyar: matsala ta gaske kuma bayyananniya, cikakken umarni tare da sake tambaya, sakamako mai amfani, tabbatarwa da aka bayyana, babu bayanan sirri. Idan wani sashe ya rasa, shi ne abin da za a sake yi, kamar Souleymane."
    },
    "quiz": [
      {
        "question": "Sassa nawa takardar aiki ke da su?",
        "options": [
          { "key": "A", "text": "Biyu" },
          { "key": "B", "text": "Uku" },
          { "key": "C", "text": "Biyar" },
          { "key": "D", "text": "Goma" }
        ],
        "answer": "C",
        "explanation": "Takardar aiki tana da sassa biyar: matsala, umarni, sakamako, tabbatarwa, kimantawa. Suna kan shafi daya, da jimloli masu sauki. Idan sassan sun yi kasa da haka, za a sami gibi a cikin hanyar; goma kuwa za su nauyaya takardar ba tare da wani amfani ba."
      },
      {
        "question": "Wanne daga cikin wadannan ne sashe na takardar aiki?",
        "options": [
          { "key": "A", "text": "Tabbatar da akalla abu guda na gaskiya" },
          { "key": "B", "text": "Hotonku" },
          { "key": "C", "text": "Sunayen kwastomominku" },
          { "key": "D", "text": "Rubutu mai shafi goma" }
        ],
        "answer": "A",
        "explanation": "Tabbatarwa sashe ce ta takardar: kuna fadin abin da kuka duba da wanda kuka tambaya, kamar dabi’ar « tabbatarwa » ta Darasi 6. Hotonku ba ya kara komai, sunayen kwastomominku bayanan sirri ne da bai kamata a rubuta ba, kuma takardar shafi daya ce, ba goma ba."
      },
      {
        "question": "Wane aiki ne ya cika sharuddan?",
        "options": [
          { "key": "A", "text": "« Na tambayi AI shirin kasuwanci, ga rubutun »" },
          { "key": "B", "text": "Jerin kayan aikin AI" },
          { "key": "C", "text": "Hoton allon waya ba tare da bayani ba" },
          { "key": "D", "text": "Matsala bayyananniya, umarni, sake tambaya, tabbatarwa da kimantawa" }
        ],
        "answer": "D",
        "explanation": "Aiki D ya cika sharudda biyar: matsala bayyananniya, cikakken umarni tare da sake tambaya, tabbatarwa da kimantawa. Shirin kasuwanci da aka mika kamar yadda yake, jerin kayan aiki, ko hoton allo ba tare da bayani ba, suna nuna abin da na’ura ta samar ne kawai, ba hanyar da kuka bi ba: wannan shi ne kuskuren Souleymane."
      },
      {
        "question": "Me dole ne a guje wa ko ta halin kaka a cikin aikin?",
        "options": [
          { "key": "A", "text": "Sake tambayoyi" },
          { "key": "B", "text": "Bayanan sirri, kamar sunaye ko lambobin waya" },
          { "key": "C", "text": "Kimantawa" },
          { "key": "D", "text": "Umarni" }
        ],
        "answer": "B",
        "explanation": "Bayanan sirri — sunaye, lambobin waya, kalmomin sirri, bayanan lafiya — ba su da wuri a cikin umarni ko a takardar aiki: wannan ita ce dabi’ar « kariya » ta Darasi 6. Sake tambayoyi, umarni da kimantawa kuwa, su ne ainihin abin da ake so."
      },
      {
        "question": "A cikin kimantawa, me za ku rubuta?",
        "options": [
          { "key": "A", "text": "Abin da ya yi aiki kadai" },
          { "key": "B", "text": "Abin da ya yi aiki, abin da bai yi aiki ba, da abin da za ku sake yi" },
          { "key": "C", "text": "Sunan mataimakin, babu wani abu kuma" },
          { "key": "D", "text": "Babu komai, kimantawa ba dole ba ce" }
        ],
        "answer": "B",
        "explanation": "Kimantawa tana fadin abin da ya yi aiki, abin da bai yi aiki ba, da abin da za ku sake yi. Aïcha ta rubuta cewa sigar Hausa tana bukatar a sake karantawa, kuma za ta yi sigar Zarma wadda ita ma za a sake karantawa: amincewa da iyaka alamar himma ce. Kimantawa ba ta taba zama zabi ba."
      },
      {
        "question": "Idan ChatGPT ya rubuta amsoshin Aïcha na shirye, me yake yi a zahiri?",
        "options": [
          { "key": "A", "text": "Yana samar da rubutu ta hanyar hasashen abin da ya fi yiwuwa ya biyo baya, saboda misalan da ya gani lokacin horo" },
          { "key": "B", "text": "Yana kwafar shafin yanar gizo da ke dauke da wadannan amsoshi" },
          { "key": "C", "text": "Ya riga ya san lokutan bude shagon Aïcha" },
          { "key": "D", "text": "Yana bin dokoki tsayayyu da wani mai shirye-shiryen kwamfuta ya rubuta" }
        ],
        "answer": "A",
        "explanation": "Mataimaki kamar ChatGPT yana samar da sabon rubutu (Darasi 1) ta hanyar hasashen abin da ya fi yiwuwa ya biyo baya, saboda misalai masu yawa da ya gani lokacin horo (Darasi 2). Bai san lokutan bude shagon Aïcha ba: ita ce za ta ba da su a cikin mahalli, in ba haka ba zai iya kirkirar wasu."
      },
      {
        "question": "Aïcha tana son amsoshi na shirye ga kwastomominta. Wace hanya ce daidai?",
        "options": [
          { "key": "A", "text": "Ta rubuta « amsoshin kwastomomi » ta kwafi sakamakon farko" },
          { "key": "B", "text": "Ta rubuta « Yi wani abu mai kyau » ta jira" },
          { "key": "C", "text": "Ta yi tambaya iri daya ga mataimaka goma daban-daban" },
          { "key": "D", "text": "Ta rubuta umarni mai sassa hudu — rawa, mahalli, aiki, tsari — sannan ta sake tambaya a cikin hira daya" }
        ],
        "answer": "D",
        "explanation": "Hanya madaidaiciya tana hada darussa biyu: umarni mai sassa hudu — rawa, mahalli, aiki, tsari — kamar a Darasi 4, sannan sake tambaya a cikin hira daya, inda mataimakin yake la’akari da abin da aka fada a baya, kamar a Darasi 3. Kalmomi kadan marasa ma’ana ko bukata maras bayyana suna kawo amsa ta gaba daya, marar amfani sosai."
      },
      {
        "question": "Wani abokinku ya tambaye ku me AI ke canzawa a aiki. Wace amsa ce ta dace da Darasi 5?",
        "options": [
          { "key": "A", "text": "« Zai maye gurbin dukkan sana’o’i nan ba da jimawa ba »" },
          { "key": "B", "text": "« Ba shi da wani tasiri a Afirka »" },
          { "key": "C", "text": "« Yana canza ayyuka musamman; sanin yadda ake tambaya, tabbatarwa da daidaitawa da yanayin wuri yana kara daraja »" },
          { "key": "D", "text": "« Gano cuta ta hoto ya isa, ba a bukatar jami’in fadakarwar noma »" }
        ],
        "answer": "C",
        "explanation": "A cewar OIT (ILO, 2023), wadda aka ambata a Darasi 5, AI mai samar da abubuwa yana canza ayyuka musamman, fiye da kawar da sana’o’i gaba daya. Abin da ke kara daraja shi ne sanin yadda ake tambaya, tabbatarwa da daidaitawa da yanayin wuri. Kuma gano cuta ta hoto ana tabbatar da shi koyaushe a wurin jami’in fadakarwar noma."
      }
    ],
    "reflection": "Wace karamar matsala daga rayuwarku ta yau da kullum za ku magance a wannan aiki, kuma a wurin wa za ku tabbatar da sakamakon kafin ku yi amfani da shi?",
    "glossary": [
      {
        "term": "Intelligence artificielle (IA) (kirkirarriyar basira)",
        "definition": "Shiri na kwamfuta da ya koyo daga misalai masu yawa, maimakon bin dokokin da aka rubuta da hannu kadai. Yana gane abubuwa, yana hasashe, yana samar da abu (Darasi 1)."
      },
      {
        "term": "Entraînement (horo)",
        "definition": "Lokacin da AI ke nazarin misalai masu yawa tare da amsa daidai, domin ya gano alamominsa na kansa. Ingancin misalan shi ne ingancin amsoshin (Darasi 2)."
      },
      {
        "term": "Relance (sake tambaya)",
        "definition": "Sabon sako da ake aikawa a cikin hira daya don takaita, fayyace ko gyara amsar mataimakin, wanda yake la’akari da abin da aka fada a baya (Darasi 3). Amsar farko daftari ce kawai."
      },
      {
        "term": "RCTF (Rawa, Mahalli, Aiki, Tsari)",
        "definition": "Hanyar rubuta umarni mai sassa hudu: Rawa (wanda AI zai zama), Mahalli (yanayin da ainihin bayananku), Aiki (abin da za a yi daidai), Tsari (tsawo, salo, harshe). An gan ta a Darasi 4, kuma ana amfani da ita a kowane aiki."
      },
      {
        "term": "Hallucination (amsar karya da aka fada da tabbaci)",
        "definition": "Amsar karya da AI ke bayarwa da cikakken tabbaci, kamar kwanan wata ko dokar da aka kirkira. Shi ya sa ake da dabi’ar « tabbatarwa » ta Darasi 6."
      },
      {
        "term": "Donnée personnelle (bayanan sirri)",
        "definition": "Duk wani bayani da zai sa a gane mutum: suna, lambar waya, adireshi, kalmar sirri, bayanin lafiya, ko cikakkun bayanai da za su nuna ko wane ne. Ana maye gurbinsa da « [Suna] » (Darasi 6)."
      },
      {
        "term": "Fiche projet (takardar aiki)",
        "definition": "Takarda mai shafi daya wadda ke bayyana hanyar da kuka bi a sassa biyar: matsala, umarni, sakamako, tabbatarwa, kimantawa. Ita ce abin da ake mikawa a aikin karshe."
      }
    ]
  }
};
