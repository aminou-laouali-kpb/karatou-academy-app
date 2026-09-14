import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c3 (Prompt Engineering — donner les bonnes consignes à l'IA)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC3: Record<Language, LessonContent> = {
  "fr": {
    "id": "c3",
    "lessonNumber": 3,
    "title": "Prompt Engineering — donner les bonnes consignes à l'IA",
    "objective": "À la fin de cette leçon, vous saurez rédiger des consignes (prompts) structurées et efficaces pour obtenir des résultats fiables, professionnels et directement utilisables. Vous maîtriserez les quatre composantes clés d'un bon prompt : le rôle, le contexte, la tâche et le format. Vous serez capable d'améliorer vos prompts par itération et de les adapter aux situations concrètes de votre métier, que vous soyez salarié, étudiant, indépendant, agent d'une administration ou bénévole.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Anatomie d'un bon prompt : Rôle, Contexte, Tâche, Format",
        "body": "Imaginez que vous accueillez un nouvel assistant dans votre équipe. Si vous lui dites simplement « fais un rapport », il ne sait pas quoi mettre dedans. Mais si vous précisez « tu es assistant pédagogique dans un collège, voici les résultats des évaluations de la semaine, rédige un bilan de deux paragraphes pour la réunion des professeurs », il peut travailler efficacement. C'est exactement le principe du prompt structuré.\n\nUn bon prompt repose sur quatre piliers : le Rôle (comment doit se comporter l'IA ?), le Contexte (quelle est la situation ?), la Tâche (qu'attendez-vous précisément ?), et le Format (quelle forme doit avoir la réponse ?). Voyons la différence en pratique :\n— Prompt vague : « Écris un e-mail à un client. »\n— Prompt structuré : « Tu es gérante d'un atelier de menuiserie. Un client nous a commandé douze chaises et demande où en est la fabrication : huit sont terminées, les quatre dernières partiront la semaine prochaine. Rédige un e-mail de suivi de 150 mots maximum, ton courtois et professionnel, avec une phrase d'excuse pour le retard et une proposition de date de livraison. »\n\nLe second prompt prend 30 secondes de plus à rédiger, mais il vous économise plusieurs allers-retours et produit un résultat quasi prêt à envoyer."
      },
      {
        "title": "Techniques qui marchent : exemples, étape par étape, contraintes de format",
        "body": "La première technique puissante s'appelle le few-shot : vous donnez un ou deux exemples du résultat que vous attendez. C'est comme montrer à un nouveau collègue un formulaire déjà rempli avant de lui en confier dix. Par exemple : « Voici un résumé que j'aime : [exemple]. Maintenant résume ce compte rendu de réunion dans le même style. » L'IA comprend immédiatement votre tonalité, votre niveau de détail, votre langue de travail.\n\nLa deuxième technique : demandez à l'IA de raisonner étape par étape (« think step by step »). Pour des tâches complexes comme vérifier le budget d'un projet, comparer deux devis de fournisseurs ou décomposer l'énoncé d'un exercice, cela réduit les erreurs. C'est comparable à relire à voix haute les chiffres d'un paiement avant de valider l'envoi.\n\nLa troisième technique : contraindre le format de sortie. Un agent d'une administration municipale qui prépare une note pour le conseil gagnera à préciser « réponds sous forme de tableau à 3 colonnes », « rédige une liste à puces de 5 points maximum », ou « structure ta réponse avec les titres : Constat, Recommandation, Prochaine étape ». Quand le format est fixé à l'avance, la réponse est directement utilisable dans votre rapport ou votre présentation, sans reformatage."
      },
      {
        "title": "Itérer et corriger : un prompt se travaille en 2–3 allers-retours",
        "body": "Personne ne règle un appareil neuf du premier coup : on essaie, on observe, on ajuste. Avec l'IA, c'est pareil. Le premier prompt est rarement parfait, et c'est normal. L'objectif est d'arriver à un bon résultat en deux ou trois échanges, pas en un seul.\n\nComment reformuler efficacement ? Soyez précis sur ce qui ne va pas. Ne dites pas « c'est nul ». Dites : « La réponse est trop longue. Raccourcis à 100 mots. » Ou : « Le ton est trop formel pour une réunion de parents d'élèves. Utilise un langage plus simple. » Ou encore : « Tu n'as pas repris le chiffre de fréquentation que je t'ai donné plus haut. Intègre-le dans le deuxième paragraphe. »\n\nGardez une trace de vos meilleurs prompts dans un carnet (numérique ou papier). Une équipe de terrain d'une organisation humanitaire, un service municipal ou une petite entreprise de services se constituent ainsi des bibliothèques de prompts réutilisables pour les rapports hebdomadaires, les réponses aux clients ou les comptes rendus de réunion. Un bon prompt est un outil de travail, au même titre qu'un modèle de document."
      },
      {
        "title": "Prompts pour le travail réel : synthèse, traduction, e-mail professionnel, compte rendu",
        "body": "Quatre cas d'usage couvrent l'essentiel du travail documentaire, quel que soit votre métier. Le premier : la note de synthèse. Collez un long document (article de recherche, rapport annuel, dossier de projet) et demandez : « En tant qu'étudiant en master, résume cet article en 5 points clés pour mon groupe de travail. Format : liste numérotée. Langue : français. »\n\nLe deuxième cas : la traduction et l'adaptation d'une langue vers une autre, y compris vers une langue locale peu représentée en ligne. « Traduis ce message d'information sur les horaires du service, du français vers la langue parlée par les habitants du quartier, en gardant un niveau de langage accessible. » L'IA n'est pas également performante dans toutes les langues : elle produit une première version, qu'un locuteur natif doit relire avant diffusion, ce qui reste beaucoup plus rapide que de partir de zéro.\n\nLe troisième cas : l'e-mail professionnel. Donnez les faits, les montants, les résultats et le destinataire — client, partenaire, direction, financeur — puis demandez un e-mail formel de compte rendu. Le quatrième cas : le compte rendu de réunion. Collez vos notes brutes ou dictez-les vocalement (via une application de transcription), puis demandez : « Structure ces notes en : Participants, Points discutés, Décisions prises, Actions à suivre avec responsables et échéances. » Le résultat est prêt à partager avec vos collègues, votre direction ou vos partenaires."
      }
    ],
    "example": {
      "title": "Du prompt vague au prompt structuré : le compte rendu client d'une petite entreprise",
      "challenge": "Lucía dirige une petite entreprise de transport et de livraison à Medellín, en Colombie. Chaque mois, elle doit envoyer un compte rendu d'activité à son principal client. Elle demande à un outil IA : « Écris un compte rendu pour mon client. » Elle obtient un texte générique de deux pages, sans aucune donnée réelle, qu'elle doit entièrement réécrire. Elle passe 90 minutes sur ce document.",
      "solution": "Elle reformule avec la structure Rôle/Contexte/Tâche/Format : « Tu es gérante d'une petite entreprise de transport et de livraison. Le client est un distributeur de fournitures de bureau. Période couverte : le mois écoulé. Données à intégrer : 140 livraisons réalisées, 3 livraisons en retard de plus de 24 heures, toutes dues à des routes coupées par les pluies. Rédige un compte rendu mensuel structuré avec les sections suivantes : Contexte, Activité du mois, Incidents et causes, Recommandations. Maximum 400 mots. Ton professionnel, langue espagnole. »",
      "impact": "Le nouveau résultat est utilisable directement après une relecture de 10 minutes. Le temps total de travail passe de 90 minutes à environ 25 minutes, soit un gain de temps d'environ 70 %. Le client juge le document plus clair que les précédents et le valide sans demander de correction majeure."
    },
    "practice": {
      "title": "Exercice : rédigez et améliorez votre premier prompt structuré",
      "instructions": [
        "Choisissez une tâche réelle de votre quotidien (rédiger un e-mail, résumer un document, traduire un message, préparer un cours). Sur votre téléphone ou votre ordinateur, rédigez un prompt complet en quatre parties : commencez par « Tu es [votre rôle] », ajoutez le contexte (lieu, activité, données clés), décrivez la tâche précisément, puis précisez le format souhaité (nombre de mots, langue, structure). Soumettez ce prompt à un outil IA (ChatGPT, Claude, Gemini).",
        "Lisez attentivement le résultat obtenu. Identifiez un point précis qui n'est pas satisfaisant : le ton, la longueur, un élément manquant, la structure. Reformulez uniquement cette partie et soumettez une deuxième version du prompt. Comparez les deux réponses côte à côte.",
        "Copiez votre prompt final (la version améliorée) dans un document ou une note sur votre téléphone, avec un titre court qui décrit son usage (exemple : « Prompt compte rendu mensuel client »). Vous commencez ainsi votre bibliothèque personnelle de prompts réutilisables."
      ],
      "observation": "Vous constaterez que la deuxième version du prompt produit une réponse nettement plus proche de vos attentes, souvent sans nécessiter de troisième reformulation. L'effort de rédiger un prompt précis se rentabilise dès le premier usage : moins de corrections, moins de frustration, un résultat professionnel plus rapide."
    },
    "quiz": [
      {
        "question": "Quel élément est absent du prompt suivant : « Résume ce rapport pour moi. » ?",
        "options": [
          {
            "key": "A",
            "text": "La tâche (résumer)"
          },
          {
            "key": "B",
            "text": "Le rôle, le contexte et le format"
          },
          {
            "key": "C",
            "text": "La langue de travail uniquement"
          },
          {
            "key": "D",
            "text": "Le nombre de mots uniquement"
          }
        ],
        "answer": "B",
        "explanation": "Ce prompt ne contient que la tâche (résumer). Il manque le rôle (qui est l'IA dans ce contexte ?), le contexte (de quel rapport s'agit-il, pour quel public, dans quelle activité ?) et le format (liste, paragraphe, nombre de mots ?). Ces trois éléments sont indispensables pour obtenir un résultat utile."
      },
      {
        "question": "La technique « few-shot » consiste à :",
        "options": [
          {
            "key": "A",
            "text": "Poser plusieurs questions courtes à la suite"
          },
          {
            "key": "B",
            "text": "Demander à l'IA de répondre rapidement"
          },
          {
            "key": "C",
            "text": "Fournir un ou deux exemples du résultat attendu dans le prompt"
          },
          {
            "key": "D",
            "text": "Diviser la tâche en plusieurs sessions séparées"
          }
        ],
        "answer": "C",
        "explanation": "Le few-shot (ou « quelques exemples ») consiste à inclure dans votre prompt un exemple concret du type de résultat que vous souhaitez. Cela permet à l'IA de calibrer son ton, son niveau de détail et son format sur votre modèle, comme vous montrez un formulaire rempli à un nouveau collègue avant qu'il en remplisse d'autres."
      },
      {
        "question": "Pourquoi est-il recommandé d'itérer sur un prompt plutôt que de tout réécrire ?",
        "options": [
          {
            "key": "A",
            "text": "Parce que l'IA oublie les messages précédents"
          },
          {
            "key": "B",
            "text": "Pour économiser du crédit sur les plateformes payantes"
          },
          {
            "key": "C",
            "text": "Parce que l'itération est trop lente pour les tâches urgentes"
          },
          {
            "key": "D",
            "text": "Parce qu'il est plus efficace de corriger un point précis que de reformuler entièrement, ce qui permet d'arriver au bon résultat en 2–3 échanges"
          }
        ],
        "answer": "D",
        "explanation": "Réécrire entièrement un prompt revient souvent à perdre ce qui fonctionnait déjà. Identifier précisément ce qui ne convient pas (le ton, la longueur, un élément manquant) et le corriger ciblément est beaucoup plus efficace. C'est comme ajuster une recette en modifiant une épice, pas en recommençant depuis zéro."
      },
      {
        "question": "Pour traduire un message d'information vers une langue locale avec l'IA, quelle précision est la plus importante à inclure dans le prompt ?",
        "options": [
          {
            "key": "A",
            "text": "Le niveau de langage adapté au public cible (ex : clients, parents d'élèves, habitants d'un quartier)"
          },
          {
            "key": "B",
            "text": "Le nombre exact de caractères dans le message original"
          },
          {
            "key": "C",
            "text": "Le nom de l'outil IA utilisé"
          },
          {
            "key": "D",
            "text": "La date à laquelle le message original a été rédigé"
          }
        ],
        "answer": "A",
        "explanation": "Pour une traduction réellement utile, le niveau de langage est crucial. Un message technique traduit mot à mot peut être incompréhensible pour des clients pressés ou des habitants peu scolarisés. Préciser « langage accessible, habitants du quartier » guide l'IA vers un vocabulaire simple et des formulations claires, même si le résultat doit toujours être relu par un locuteur natif."
      },
      {
        "question": "Quelle est la meilleure façon de capitaliser sur vos bons prompts pour le long terme ?",
        "options": [
          {
            "key": "A",
            "text": "Les mémoriser mentalement pour chaque nouvelle tâche"
          },
          {
            "key": "B",
            "text": "Les soumettre à l'IA une nouvelle fois à chaque session"
          },
          {
            "key": "C",
            "text": "Les sauvegarder dans une bibliothèque personnelle (document, note, fichier) avec un titre descriptif"
          },
          {
            "key": "D",
            "text": "Les partager uniquement avec votre responsable et ne pas les modifier"
          }
        ],
        "answer": "C",
        "explanation": "Un bon prompt est un outil de travail réutilisable, au même titre qu'un modèle de rapport ou un formulaire. Le sauvegarder avec un titre clair (ex : « Prompt compte rendu de réunion ») vous permet de le retrouver rapidement, de le partager avec votre équipe, et de l'améliorer progressivement. C'est la base d'une pratique professionnelle de l'IA."
      }
    ],
    "reflection": "Pensez à une tâche répétitive que vous faites chaque semaine : un rapport hebdomadaire, un e-mail de suivi, une fiche de préparation de cours, une réponse type à un client. Maintenant, imaginez avoir un prompt parfaitement calibré pour cette tâche, que vous n'avez qu'à lancer en quelques secondes. Combien de temps cela vous ferait-il gagner sur un mois ? Sur une année ? La rédaction d'un bon prompt est un investissement de 5 minutes qui peut vous en faire économiser des dizaines.",
    "glossary": [
      {
        "term": "Prompt",
        "definition": "La consigne ou instruction que vous donnez à un outil d'IA pour obtenir un résultat. Un prompt bien rédigé est précis, structuré et contextuel. Exemple : « En tant que responsable d'une boutique, rédige un résumé de 150 mots de ce rapport en français. »"
      },
      {
        "term": "Contexte",
        "definition": "Les informations de situation que vous fournissez à l'IA pour qu'elle comprenne l'environnement de la tâche : votre organisation ou votre activité, le projet concerné, le public visé (clients, élèves, usagers, collègues), les données disponibles. Sans contexte, l'IA produit des réponses génériques."
      },
      {
        "term": "Few-shot (exemples)",
        "definition": "Technique consistant à inclure un ou plusieurs exemples du résultat attendu directement dans votre prompt. Cela permet à l'IA d'imiter le ton, le style et la structure que vous souhaitez, comme montrer un modèle rempli à un nouveau collègue."
      },
      {
        "term": "Rôle / System prompt",
        "definition": "La persona ou fonction que vous assignez à l'IA au début de votre prompt (ex : « Tu es un traducteur spécialisé dans les documents administratifs »). Définir un rôle cadre le comportement de l'IA et améliore la pertinence de ses réponses."
      },
      {
        "term": "Itération",
        "definition": "Le processus d'amélioration progressive d'un prompt par allers-retours successifs. On identifie ce qui ne va pas dans la première réponse, on corrige ce point précis, et on resoumet. En général, 2 à 3 itérations suffisent pour obtenir un résultat professionnel."
      },
      {
        "term": "Format de sortie",
        "definition": "La forme que vous souhaitez donner à la réponse de l'IA : liste à puces, tableau, e-mail formel, paragraphes numérotés, nombre de mots limite. Préciser le format évite les reformatages manuels et rend la réponse directement utilisable."
      }
    ]
  },
  "en": {
    "id": "c3",
    "lessonNumber": 3,
    "title": "Prompt Engineering — Giving the Right Instructions to AI",
    "objective": "By the end of this lesson, you will know how to write structured, effective prompts to get reliable, professional, and directly usable results. You will master the four key components of a good prompt: role, context, task, and format. You will be able to improve your prompts through iteration and adapt them to the real situations of your own work, whether you are an employee, a student, self-employed, a public administration officer, or a volunteer.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Anatomy of a Good Prompt: Role, Context, Task, Format",
        "body": "Imagine you are welcoming a new assistant onto your team. If you simply say \"write a report,\" they don't know what to include. But if you specify \"you are a teaching assistant in a secondary school, here are this week's assessment results, write a two-paragraph summary for the staff meeting,\" they can work effectively. This is exactly the principle behind a structured prompt.\n\nA good prompt rests on four pillars: the Role (how should the AI behave?), the Context (what is the situation?), the Task (what exactly do you expect?), and the Format (what form should the answer take?). Let's see the difference in practice:\n— Vague prompt: \"Write an email to a customer.\"\n— Structured prompt: \"You are the manager of a furniture workshop. A customer ordered twelve chairs and is asking how the work is going: eight are finished, the last four will ship next week. Write a follow-up email of no more than 150 words, courteous and professional in tone, with a sentence apologizing for the delay and a proposed delivery date.\"\n\nThe second prompt takes 30 extra seconds to write, but it saves you several back-and-forth exchanges and produces a result that is nearly ready to send."
      },
      {
        "title": "Techniques That Work: Examples, Step by Step, Format Constraints",
        "body": "The first powerful technique is called few-shot: you provide one or two examples of the result you expect. It is like showing a new colleague a completed form before handing them ten to fill in. For example: \"Here is a summary I like: [example]. Now summarize this meeting report in the same style.\" The AI immediately understands your tone, your level of detail, and your working language.\n\nThe second technique: ask the AI to reason step by step (\"think step by step\"). For complex tasks such as checking a project budget, comparing two supplier quotes, or breaking down an exam question, this reduces errors. It is comparable to reading the figures of a payment aloud before confirming it.\n\nThe third technique: constrain the output format. An officer in a municipal administration preparing a note for the council will gain from specifying \"respond in a 3-column table,\" \"write a bullet list of no more than 5 points,\" or \"structure your response with the following headings: Finding, Recommendation, Next Step.\" When the format is fixed in advance, the response is directly usable in your report or presentation, without any reformatting."
      },
      {
        "title": "Iterate and Improve: A Prompt Takes 2–3 Rounds of Refinement",
        "body": "Nobody sets up a new device perfectly on the first try: you try, you observe, you adjust. With AI, it is the same. The first prompt is rarely perfect, and that is completely normal. The goal is to reach a good result in two or three exchanges, not in one.\n\nHow do you reformulate effectively? Be specific about what is wrong. Do not say \"this is bad.\" Say: \"The response is too long. Shorten it to 100 words.\" Or: \"The tone is too formal for a parents' meeting. Use simpler language.\" Or: \"You did not use the attendance figure I gave you above. Include it in the second paragraph.\"\n\nKeep a record of your best prompts in a notebook (digital or paper). A humanitarian field team, a municipal department, or a small service business all build libraries of reusable prompts for weekly reports, customer replies, or meeting minutes. A good prompt is a work tool, just like a document template."
      },
      {
        "title": "Prompts for Real Work: Summaries, Translations, Professional Emails, Meeting Notes",
        "body": "Four use cases cover most of the documentary work you do, whatever your job. The first: the briefing note. Paste a long document (a research article, an annual report, a project file) and ask: \"As a master's student, summarize this article in 5 key points for my study group. Format: numbered list. Language: English.\"\n\nThe second case: translating and adapting from one language into another, including into a local language that is poorly represented online. \"Translate this information message about opening hours from English into the language spoken by the residents of this neighbourhood, keeping the wording accessible.\" AI does not perform equally well in every language: it produces a first version that a native speaker must review before it is shared, which is still far faster than starting from scratch.\n\nThe third case: the professional email. Provide the facts, the amounts, the results, and the recipient — customer, partner, management, funder — then ask for a formal report email. The fourth case: the meeting summary. Paste your raw notes or dictate them verbally (via a transcription app), then ask: \"Structure these notes into: Participants, Points Discussed, Decisions Made, Follow-up Actions with responsible persons and deadlines.\" The result is ready to share with your colleagues, your management, or your partners."
      }
    ],
    "example": {
      "title": "From a Vague Prompt to a Structured Prompt: A Small Company's Client Report",
      "challenge": "Lucía runs a small transport and delivery company in Medellín, Colombia. Every month she has to send an activity report to her main client. She asks an AI tool: \"Write a report for my client.\" She gets a generic two-page text with no real data, which she has to rewrite entirely. She spends 90 minutes on this document.",
      "solution": "She reformulates using the Role/Context/Task/Format structure: \"You are the manager of a small transport and delivery company. The client is an office supplies distributor. Period covered: the past month. Data to include: 140 deliveries completed, 3 deliveries delayed by more than 24 hours, all caused by roads cut off by the rains. Write a structured monthly report with the following sections: Background, Activity for the Month, Incidents and Causes, Recommendations. Maximum 400 words. Professional tone, Spanish language.\"",
      "impact": "The new result is directly usable after a 10-minute review. Total working time drops from 90 minutes to approximately 25 minutes — a time saving of about 70%. The client finds the document clearer than the previous ones and approves it without requesting major corrections."
    },
    "practice": {
      "title": "Exercise: Write and Improve Your First Structured Prompt",
      "instructions": [
        "Choose a real task from your everyday work (writing an email, summarizing a document, translating a message, preparing a class). On your phone or computer, write a complete prompt in four parts: start with \"You are [your role],\" add the context (location, activity, key data), describe the task precisely, then specify the desired format (word count, language, structure). Submit this prompt to an AI tool (ChatGPT, Claude, Gemini).",
        "Read the result carefully. Identify one specific point that is not satisfactory: the tone, the length, a missing element, the structure. Reformulate only that part and submit a second version of the prompt. Compare both responses side by side.",
        "Copy your final prompt (the improved version) into a document or note on your phone, with a short title describing its use (example: \"Monthly client report prompt\"). You are now starting your personal library of reusable prompts."
      ],
      "observation": "You will notice that the second version of the prompt produces a response much closer to your expectations, often without needing a third reformulation. The effort of writing a precise prompt pays off from the very first use: fewer corrections, less frustration, and a professional result delivered faster."
    },
    "quiz": [
      {
        "question": "Which element is missing from the following prompt: \"Summarize this report for me.\"?",
        "options": [
          {
            "key": "A",
            "text": "The task (to summarize)"
          },
          {
            "key": "B",
            "text": "The role, context, and format"
          },
          {
            "key": "C",
            "text": "The working language only"
          },
          {
            "key": "D",
            "text": "The word count only"
          }
        ],
        "answer": "B",
        "explanation": "This prompt contains only the task (summarize). It is missing the role (who is the AI in this context?), the context (which report, for which audience, within which activity?), and the format (list, paragraph, word count?). These three elements are essential to obtain a useful result."
      },
      {
        "question": "The \"few-shot\" technique consists of:",
        "options": [
          {
            "key": "A",
            "text": "Asking several short questions in a row"
          },
          {
            "key": "B",
            "text": "Asking the AI to respond quickly"
          },
          {
            "key": "C",
            "text": "Providing one or two examples of the expected result in the prompt"
          },
          {
            "key": "D",
            "text": "Splitting the task into several separate sessions"
          }
        ],
        "answer": "C",
        "explanation": "Few-shot means including a concrete example of the type of result you want in your prompt. This allows the AI to calibrate its tone, level of detail, and format to match your model — like showing a completed form to a new colleague before they fill out more."
      },
      {
        "question": "Why is it recommended to iterate on a prompt rather than rewriting it entirely?",
        "options": [
          {
            "key": "A",
            "text": "Because the AI forgets previous messages"
          },
          {
            "key": "B",
            "text": "To save credits on paid platforms"
          },
          {
            "key": "C",
            "text": "Because iteration is too slow for urgent tasks"
          },
          {
            "key": "D",
            "text": "Because it is more efficient to correct one specific point than to reformulate everything, allowing you to reach the right result in 2–3 exchanges"
          }
        ],
        "answer": "D",
        "explanation": "Rewriting a prompt entirely often means losing what was already working. Identifying precisely what does not work (tone, length, a missing element) and fixing it in a targeted way is much more effective. It is like adjusting a recipe by changing one ingredient, not starting from scratch."
      },
      {
        "question": "When translating an information message into a local language using AI, which detail is most important to include in the prompt?",
        "options": [
          {
            "key": "A",
            "text": "The language level suited to the target audience (e.g., customers, parents of pupils, residents of a neighbourhood)"
          },
          {
            "key": "B",
            "text": "The exact character count of the original message"
          },
          {
            "key": "C",
            "text": "The name of the AI tool being used"
          },
          {
            "key": "D",
            "text": "The date the original message was written"
          }
        ],
        "answer": "A",
        "explanation": "For a translation to be genuinely useful, the language level is crucial. A technical message translated word for word can be incomprehensible to busy customers or to residents with little schooling. Specifying \"accessible language, residents of the neighbourhood\" guides the AI toward simple vocabulary and clear phrasing, even though the result should always be reviewed by a native speaker."
      },
      {
        "question": "What is the best way to build on your good prompts for the long term?",
        "options": [
          {
            "key": "A",
            "text": "Memorize them mentally for each new task"
          },
          {
            "key": "B",
            "text": "Submit them to the AI again at each new session"
          },
          {
            "key": "C",
            "text": "Save them in a personal library (document, note, file) with a descriptive title"
          },
          {
            "key": "D",
            "text": "Share them only with your manager and never modify them"
          }
        ],
        "answer": "C",
        "explanation": "A good prompt is a reusable work tool, just like a report template or a form. Saving it with a clear title (e.g., \"Meeting summary prompt\") allows you to retrieve it quickly, share it with your team, and gradually improve it. This is the foundation of a professional AI practice."
      }
    ],
    "reflection": "Think of a repetitive task you do every week: a weekly report, a follow-up email, a lesson plan, a standard reply to a customer. Now imagine having a perfectly calibrated prompt for that task, one you can launch in just a few seconds. How much time would that save you in a month? In a year? Writing a good prompt is a 5-minute investment that can save you dozens of hours.",
    "glossary": [
      {
        "term": "Prompt",
        "definition": "The instruction or command you give an AI tool to get a result. A well-written prompt is precise, structured, and contextual. Example: \"As a shop manager, write a 150-word summary of this report in English.\""
      },
      {
        "term": "Context",
        "definition": "The situational information you provide to the AI so it understands the environment of the task: your organization or your business, the project involved, the target audience (customers, pupils, service users, colleagues), the available data. Without context, AI produces generic responses."
      },
      {
        "term": "Few-shot (examples)",
        "definition": "A technique that involves including one or more examples of the expected result directly in your prompt. This allows the AI to mirror the tone, style, and structure you want — like showing a completed sample form to a new colleague."
      },
      {
        "term": "Role / System prompt",
        "definition": "The persona or function you assign to the AI at the start of your prompt (e.g., \"You are a translator specialized in administrative documents\"). Defining a role frames the AI's behavior and improves the relevance of its responses."
      },
      {
        "term": "Iteration",
        "definition": "The process of progressively improving a prompt through successive exchanges. You identify what is wrong in the first response, correct that specific point, and resubmit. Generally, 2 to 3 iterations are enough to obtain a professional result."
      },
      {
        "term": "Output format",
        "definition": "The form you want the AI's response to take: bullet list, table, formal email, numbered paragraphs, word count limit. Specifying the format avoids manual reformatting and makes the response directly usable."
      }
    ]
  },
  "ha": {
    "id": "c3",
    "lessonNumber": 3,
    "title": "Prompt Engineering — Yadda Ake Ba AI Umurni Daidai",
    "objective": "A karshen wannan darasi, za ku san yadda ake rubuta umurnai (prompts) da ke da tsari kuma masu amfani don samun sakamako ingantacce, na sana'a, kuma za a iya amfani da shi nan take. Za ku koyi ginshikan hudu na prompt mai kyau: rawa, mahallin aiki, aikin da ake son yi, da tsarin amsa. Za ku iya inganta promptoci ku ta hanyar gyara mataki-mataki, kuma ku daidaita su ga ayyukan ku na gaske, ko kai ma'aikaci ne, dalibi, mai sana'ar kansa, ma'aikacin hukumar gwamnati ko mai aikin sa kai.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Jiki na Prompt Mai Kyau: Rawa, Mahallin, Aiki, Tsari",
        "body": "Ka yi tunanin kana karbar sabon mataimaki a kungiyar aikin ka. In ka ce masa kawai « rubuta rahoto », bai san me ya saka ciki ba. Amma in ka fayyace masa « kai ne mataimakin malami a makarantar sakandare, ga sakamakon jarrabawar mako, rubuta takaitaccen bayani a sakin layi biyu don taron malamai », zai iya yin aiki sosai. Wannan shi ne daidai ka'idar prompt mai tsari.\n\nPrompt mai kyau yana dogara ne kan ginshikan hudu: Rawa (ta yaya AI ya kamata ya yi aiki?), Mahallin (mene ne halin da ake ciki?), Aiki (me kake tsammani daidai?), da Tsari (wace sura amsar ta kamata ta dauka?). Bari mu ga bambancin a aikace:\n— Prompt mara tsari: « Rubuta e-mail ga abokin ciniki. »\n— Prompt mai tsari: « Ke ce mai gudanar da bitar kafinta. Wani abokin ciniki ya yi odar kujeru goma sha biyu kuma yana tambaya inda aikin ya kai: takwas sun kare, hudu na karshe za su fita mako mai zuwa. Rubuta e-mail na bibiya na kalmomi 150 da ba su wuce haka ba, da sautin ladabi na sana'a, tare da jumlar neman afuwa kan jinkiri da bayar da ranar isar da kaya. »\n\nPrompt na biyu yana daukar karin dakika 30 don rubuta shi, amma yana ceton ku daga zagayawa da yawa, kuma yana samar da sakamako kusan mai shirye don aikawa."
      },
      {
        "title": "Dabarun da Ke Aiki: Misalai, Mataki-mataki, Kuntatawa na Tsari",
        "body": "Dabarar farko mai karfi ana kiranta few-shot: kuna ba da misali daya ko biyu na sakamakon da kuke tsammani. Kamar nuna wa sabon abokin aiki fom din da aka riga aka cika kafin a ba shi goma ya cika. Misali: « Ga takaitaccen bayani da na fi so: [misali]. Yanzu takaita wannan rahoton taron da wannan salo. » AI yana fahimtar sautin ku nan take, matakin bayani ku, da yaren aiki ku.\n\nDabarar ta biyu: ku tambayi AI ya yi tunani mataki bayan mataki (\"think step by step\"). Don ayyuka masu rikitarwa kamar duba kasafin kudin aiki, kwatanta farashin masu samar da kaya biyu, ko tsattsage tambayar jarrabawa, wannan yana rage kura-kurai. Yana kama da karanta lambobin biyan kudi da murya kafin tabbatar da aikawa.\n\nDabarar ta uku: kuntatawa ga tsarin amsa. Ma'aikacin hukumar gwamnatin gari da ke shirya takarda don majalisar gari zai amfana in ya fayyace « amsa cikin teburin ginshikai 3 », « rubuta jerin abubuwa da ba su wuce aya 5 ba », ko « tsara amsar ka da wadannan taken: Lura, Shawarwari, Mataki na gaba ». Lokacin da aka kayyade tsarin a gaba, ana iya amfani da amsar kai tsaye a rahoton ku ko gabatarwar ku, ba tare da sake fasalta shi ba."
      },
      {
        "title": "Gyara da Ingantawa: Prompt Yana Bukatar Zagaye 2–3 na Aikin Gyara",
        "body": "Babu wanda ke daidaita sabuwar na'ura daidai a karo na farko: kana gwadawa, kana lura, kana gyarawa. Tare da AI, shi ne iri daya. Prompt na farko ba kasafai ya zama cikakke ba, kuma hakan al'ada ce gaba daya. Makasudin shi ne cimma sakamako mai kyau a cikin zagaye biyu ko uku, ba daya ba.\n\nYaya ake sake fasalta yadda ya kamata? Ku fayyace game da abin da ba daidai ba. Kada ku ce « wannan mara kyau ne ». Ku ce: « Amsar tana da tsawo sosai. Takaita zuwa kalmomin 100. » Ko: « Sauti ya yi tsauri sosai ga taron iyayen dalibai. Yi amfani da harshen da ya fi sauki. » Ko kuma: « Ba ka yi amfani da adadin masu halarta da na ba ka a sama ba. Saka shi a sakin layi na biyu. »\n\nKu adana kyawawan promptocin ku a cikin littafi (na dijital ko na takarda). Kungiyar filin ta wata kungiyar jin kai, sashen gwamnatin gari, ko karamin kamfanin sabis duk suna gina dakunan ajiya na prompts masu sake amfani don rahotannin mako-mako, amsoshi ga abokan ciniki, ko rahotannin taro. Prompt mai kyau kayan aiki ne na aiki, daidai kamar samfurin takarda."
      },
      {
        "title": "Prompts Don Aikin Gaske: Takaitawa, Fassara, E-mail na Sana'a, Rahoton Taro",
        "body": "Lokuta hudu na amfani suna rufe mafi yawan aikin takardu, ko wane aiki kake yi. Na farko: takaitaccen rahoto. Manna dogon takarda (makalar bincike, rahoton shekara, fayil din aiki) ku tambayi: « A matsayina na dalibin digiri na biyu, takaita wannan makala a cikin mahimman batutuwa 5 don kungiyar karatu ta. Tsari: jerin lambobi. Harshe: Hausa. »\n\nLarura ta biyu: fassara da daidaitawa daga wani harshe zuwa wani, har da zuwa harshen gida wanda ba a rubuta shi sosai a yanar gizo. « Fassara wannan sakon bayani kan lokutan aiki na sabis, daga Faransanci zuwa harshen da mazauna wannan unguwa ke magana, tare da kiyaye kalmomi masu sauki. » AI ba ya aiki daidai a duk harsuna: yana samar da sigar farko wadda dole mai magana na asali ya duba kafin a rarraba ta, kuma hakan ya fi sauri sosai fiye da fara daga sifili.\n\nLarura ta uku: e-mail na sana'a. Ka ba da gaskiyar abubuwa, adadin kudi, sakamakon, da wanda ake aikawa — abokin ciniki, abokin hulda, shugabanci, mai bayar da tallafi — sannan ka nemi e-mail na hukuma na rahoton ayyuka. Larura ta hudu: rahoton taro. Manna rubutun ka na dan gajere ko ka fadi su ta murya (ta hanyar aikace-aikacen rubuta magana), sannan ka tambayi: « Tsara wadannan bayanan cikin: Mahalarta, Batutuwan da Aka Tattauna, Shawarwarin da Aka Dauka, Ayyukan da Ke Biyo Baya tare da masu alhakin da karewar lokaci. » Sakamakon yana shirye don raba shi da abokan aikin ka, shugabancin ka, ko abokan huldar ka."
      }
    ],
    "example": {
      "title": "Daga Prompt Marar Tsari zuwa Prompt Mai Tsari: Rahoton Abokin Ciniki na Karamin Kamfani",
      "challenge": "Lucía tana gudanar da karamin kamfanin sufuri da isar da kaya a Medellín, kasar Kolombiya. Kowane wata tana bukatar aika rahoton ayyuka ga babban abokin cinikinta. Ta tambayi kayan aiki na AI: « Rubuta rahoto ga abokin cinikina. » Ta sami rubutu na gaba daya na shafuka biyu ba tare da wasu bayanan gaske ba, wanda dole ta sake rubutawa gaba daya. Ta kashe mintuna 90 akan wannan takarda.",
      "solution": "Ta sake fasalta ta amfani da tsarin Rawa/Mahallin/Aiki/Tsari: « Ke ce mai gudanar da karamin kamfanin sufuri da isar da kaya. Abokin ciniki shi ne mai rarraba kayan ofis. Lokacin da ake magana a kai: watan da ya gabata. Bayanan da za a saka: isar da kaya 140 da aka kammala, isar da kaya 3 da suka yi jinkiri fiye da sa'o'i 24, duk saboda hanyoyin da ruwan sama ya yanke. Rubuta rahoton wata mai tsari tare da wadannan sassan: Mahallin, Ayyukan Wata, Matsaloli da Dalilansu, Shawarwari. Kalmomin 400 da ba su wuce haka ba. Sauti na sana'a, harshen Sifaniyanci. »",
      "impact": "Ana iya amfani da sabon sakamakon kai tsaye bayan sake karantawa na mintuna 10. Jimlar lokacin aiki ya ragu daga mintuna 90 zuwa kimanin mintuna 25 — adana lokaci kimanin kashi 70%. Abokin ciniki ya ga takardar ta fi na baya bayyana, kuma ya amince da ita ba tare da neman babban gyara ba."
    },
    "practice": {
      "title": "Aikin Gwaji: Rubuta kuma Inganta Farkon Prompt Ku Mai Tsari",
      "instructions": [
        "Zabi aikin gaske daga rayuwar ka ta yau da kullum (rubuta e-mail, takaita takarda, fassara sako, shirya darasi). A wayar ka ko kwamfuta, rubuta cikakken prompt a sassan hudu: fara da « Kai ne [rawar ka] », kara mahallin (wuri, aiki, mahimman bayanai), bayyana aikin daidai, sannan fayyace tsarin da ake so (adadin kalmomi, harshe, tsari). Saka wannan prompt ga kayan aiki na AI (ChatGPT, Claude, Gemini).",
        "Karanta sakamakon da aka samu sosai. Gano batu daya da bai gamsar da kai ba: sauti, tsawo, bangare da ya bace, tsari. Sake fasalta wannan bangare ne kawai ka saka sigar prompt ta biyu. Kwatanta amsoshin biyu kai tsaye.",
        "Kwafa prompt din ka na karshe (sigar da aka inganta) cikin takarda ko bayanin kula a wayar ka, tare da taken gajere da ke bayyana amfaninsa (misali: « Prompt rahoton wata na abokin ciniki »). Yanzu ka fara dakin ajiya na ka na sirri na prompts masu sake amfani."
      ],
      "observation": "Za ku lura cewa sigar ta biyu ta prompt tana samar da amsa mafi kusa da tsammaninku, galibi ba tare da bukatar sake fasalta na uku ba. Kokarin rubuta prompt mai daidaito yana biyan kudi tun daga amfanin farko: kankanin gyare-gyare, kankanin damuwa, da sakamako na sana'a cikin gaggawa."
    },
    "quiz": [
      {
        "question": "Wane bangare ya bace a cikin wannan prompt: « Takaita wannan rahoto a gare ni »?",
        "options": [
          {
            "key": "A",
            "text": "Aikin (takaita)"
          },
          {
            "key": "B",
            "text": "Rawa, mahallin, da tsarin amsa"
          },
          {
            "key": "C",
            "text": "Harshen aiki kawai"
          },
          {
            "key": "D",
            "text": "Adadin kalmomi kawai"
          }
        ],
        "answer": "B",
        "explanation": "Wannan prompt yana dauke da aikin kawai (takaita). Rawa ta bace (AI wanene a wannan yanayin?), mahallin ya bace (wane rahoto, ga wane jama'a, a cikin wane aiki?), da tsari ya bace (jeri, sakin layi, adadin kalmomi?). Wadannan abubuwa uku suna da mahimmanci wajen samun sakamakon da ke da amfani."
      },
      {
        "question": "Dabarar « few-shot » ta kunshi:",
        "options": [
          {
            "key": "A",
            "text": "Saka tambayoyi gajere da yawa a jere"
          },
          {
            "key": "B",
            "text": "Tambayi AI ya amsa da sauri"
          },
          {
            "key": "C",
            "text": "Bayar da misali daya ko biyu na sakamakon da ake tsammani a cikin prompt"
          },
          {
            "key": "D",
            "text": "Raba aikin zuwa zaman daban-daban da yawa"
          }
        ],
        "answer": "C",
        "explanation": "Few-shot yana nufin saka misali na gaske na nau'in sakamakon da kake so a cikin prompt din ka. Wannan yana baiwa AI damar daidaita sautin sa, matakin bayani sa, da tsarin sa zuwa samfurin ka — kamar nuna fom din da aka cika wa sabon abokin aiki kafin ya cika sauran."
      },
      {
        "question": "Me ya sa ake ba da shawarar gyara prompt maimakon sake rubuta shi gaba daya?",
        "options": [
          {
            "key": "A",
            "text": "Saboda AI yana manta da sakon da ya gabata"
          },
          {
            "key": "B",
            "text": "Don adana kiredit a dandamali na biya"
          },
          {
            "key": "C",
            "text": "Saboda gyara yana da jinkiri sosai don ayyuka masu gaggawa"
          },
          {
            "key": "D",
            "text": "Saboda yana da tasiri fiye don gyara batu daya maimakon sake fasalta komai, wanda ke baiwa ku damar cimma sakamakon daidai a cikin zagaye 2–3"
          }
        ],
        "answer": "D",
        "explanation": "Sake rubuta prompt gaba daya galibi yana nufin asarar abin da ya riga ya yi aiki. Gano daidai abin da ba ya aiki (sauti, tsawo, bangare da ya bace) da kuma gyara shi a hankali yana da tasiri sosai. Kamar daidaita girke-girke ta canza daya daga cikin kayan yaji, ba fara daga farko ba."
      },
      {
        "question": "Lokacin fassara sakon bayani zuwa harshen gida ta amfani da AI, wane bayani ne mafi mahimmanci a saka cikin prompt?",
        "options": [
          {
            "key": "A",
            "text": "Matakin harshe da ya dace da jama'ar da ake nufi (misali, abokan ciniki, iyayen dalibai, mazauna unguwa)"
          },
          {
            "key": "B",
            "text": "Adadin haruffan da ke cikin sakon asali"
          },
          {
            "key": "C",
            "text": "Sunan kayan aikin AI da ake amfani da shi"
          },
          {
            "key": "D",
            "text": "Ranar da aka rubuta sakon asali"
          }
        ],
        "answer": "A",
        "explanation": "Don fassara ta kasance da amfani na gaske, matakin harshe yana da mahimmanci kwarai. Sakon fasaha da aka fassara kalma-kalma na iya zama ba a fahimta ga abokan ciniki masu gaggawa ko mazauna da ba su yi karatu sosai ba. Fayyace « harshe mai sauki, mazauna unguwa » yana jagorantar AI don zabar kalmomi masu sauki da jimloli bayyanannu, ko da yake dole koyaushe mai magana na asali ya duba sakamakon."
      },
      {
        "question": "Mene ne mafi kyawun hanyar gina akan kyawawan prompts din ku don dogon lokaci?",
        "options": [
          {
            "key": "A",
            "text": "Rike su a kai kawai don kowane sabon aiki"
          },
          {
            "key": "B",
            "text": "Saka su ga AI a sabon zaman kowace lokaci"
          },
          {
            "key": "C",
            "text": "Adana su a dakin ajiya na sirri (takarda, bayanin kula, fayil) tare da taken bayyananne"
          },
          {
            "key": "D",
            "text": "Raba su da shugaban ka kawai kuma kada a gyara su"
          }
        ],
        "answer": "C",
        "explanation": "Prompt mai kyau kayan aiki ne na aiki wanda za a iya sake amfani da shi, daidai kamar samfurin rahoto ko fom. Adana shi tare da taken bayyananne (misali, « Prompt rahoton taro ») yana baiwa ku damar nemo shi da sauri, raba shi da kungiyar ku, kuma inganta shi a hankali. Wannan shine tushen aikin AI na sana'a."
      }
    ],
    "reflection": "Yi tunani kan aikin da ke maimaituwa da kake yi kowace mako: rahoto na mako-mako, e-mail na bibiyar aiki, takardar shirya darasi, amsa ta yau da kullum ga abokin ciniki. Yanzu ka yi tunanin samun prompt da aka daidaita sosai don wannan aikin, wanda kawai kake kaddamar da shi cikin yan dakika. Nawa lokaci zai cece ka a cikin wata? A cikin shekara? Rubuta prompt mai kyau kuduri ne na mintuna 5 wanda zai iya cece ka daruruwan sa'o'i.",
    "glossary": [
      {
        "term": "Prompt",
        "definition": "Umurni ko jagorar da kuke bawa kayan aiki na AI don samun sakamakon da ake so. Prompt da aka rubuta yadda ya kamata yana da daidaito, tsari, da mahallin aiki. Misali: « A matsayina na shugaban kanti, rubuta takaitaccen bayani na kalmomin 150 na wannan rahoto cikin Hausa. »"
      },
      {
        "term": "Mahallin (Contexte)",
        "definition": "Bayanin yanayin da kuke bayarwa ga AI don ya fahimci yanayin aikin: kungiyar ku ko sana'ar ku, aikin da ke cikin tambaya, jama'ar da ake nufi (abokan ciniki, dalibai, masu amfani da sabis, abokan aiki), da bayanan da ake da su. Ba tare da mahallin ba, AI yana samar da amsoshi na gaba daya."
      },
      {
        "term": "Few-shot (Misalai)",
        "definition": "Dabarar da ta kunshi saka misali daya ko fiye na sakamakon da ake tsammani kai tsaye a cikin prompt din ka. Wannan yana baiwa AI damar kwaikwayon sauti, salo, da tsari da kake son su — kamar nuna fom din da aka cika wa sabon abokin aiki."
      },
      {
        "term": "Rawa / System prompt",
        "definition": "Sunan mutum ko aikin da kuke ba AI a farkon prompt din ku (misali, « Kai mai fassara ne da ke kwarewa a takardun hukuma »). Bayyana rawa yana tsara dabi'ar AI kuma yana inganta dacewar amsar sa."
      },
      {
        "term": "Gyara mataki-mataki (Itération)",
        "definition": "Tsarin inganta prompt a hankali ta hanyar zagaye masu jere. Kuna gano abin da ba daidai ba a amsar farko, gyara wannan bangare musamman, kuma ku sake saka shi. Gabadaya, gyare-gyare 2 zuwa 3 sun isa don samun sakamako na sana'a."
      },
      {
        "term": "Tsarin amsa (Format de sortie)",
        "definition": "Sura da kuke so amsar AI ta dauka: jerin abubuwa, teburi, e-mail na hukuma, sakin layi na lambobi, iyakar adadin kalmomi. Fayyace tsarin yana hana sake fasalta hannu da hannu kuma yana sa amsa ta kasance mai amfani kai tsaye."
      }
    ]
  }
};
