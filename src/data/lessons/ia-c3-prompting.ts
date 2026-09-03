import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c3 (Prompt Engineering — donner les bonnes consignes à l'IA)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC3: Record<Language, LessonContent> = {
  "fr": {
    "id": "c3",
    "lessonNumber": 3,
    "title": "Prompt Engineering — donner les bonnes consignes à l'IA",
    "objective": "À la fin de cette leçon, vous saurez rédiger des consignes (prompts) structurées et efficaces pour obtenir des résultats fiables, professionnels et directement utilisables. Vous maîtriserez les quatre composantes clés d'un bon prompt : le rôle, le contexte, la tâche et le format. Vous serez capable d'améliorer vos prompts par itération et de les adapter aux situations concrètes de votre travail humanitaire ou de développement.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Anatomie d'un bon prompt : Rôle, Contexte, Tâche, Format",
        "body": "Imaginez que vous recrutez un assistant pour une mission de terrain. Si vous lui dites simplement « fais un rapport », il ne sait pas quoi mettre dedans. Mais si vous précisez « tu es chargé de suivi-évaluation au PNUD Niger, voici les données de la semaine, rédige un résumé de deux paragraphes pour le coordinateur », il peut travailler efficacement. C'est exactement le principe du prompt structuré.\n\nUn bon prompt repose sur quatre piliers : le **Rôle** (qui doit se comporter l'IA ?), le **Contexte** (quelle est la situation ?), la **Tâche** (qu'attendez-vous précisément ?), et le **Format** (quelle forme doit avoir la réponse ?). Voyons la différence en pratique :\n\n— Prompt vague : « Écris un e-mail à un bailleur. »\n— Prompt structuré : « Tu es coordinateur de projet dans une ONG sahélienne. Nous avons livré 200 kits nutritionnels dans le district de Tillabéri la semaine dernière. Rédige un e-mail de compte rendu à notre bailleur (UNICEF), en anglais, en 150 mots maximum, avec un ton formel et une phrase de remerciement en conclusion. »\n\nLe second prompt prend 30 secondes de plus à rédiger, mais il vous économise plusieurs allers-retours et produit un résultat quasi prêt à envoyer."
      },
      {
        "title": "Techniques qui marchent : exemples, étape par étape, contraintes de format",
        "body": "La première technique puissante s'appelle le **few-shot** : vous donnez un ou deux exemples du résultat que vous attendez. C'est comme montrer à un agent de santé communautaire comment remplir une fiche avant de lui demander d'en remplir dix. Par exemple : « Voici un résumé que j'aime : [exemple]. Maintenant résume ce compte rendu de réunion dans le même style. » L'IA comprend immédiatement votre tonalité, votre niveau de détail, votre langue de travail.\n\nLa deuxième technique : demandez à l'IA de **raisonner étape par étape** (« think step by step »). Pour des tâches complexes comme analyser un budget de projet ou comparer deux propositions techniques, cela réduit les erreurs. C'est comparable à demander à quelqu'un de vérifier un transfert Mobile Money en lisant les chiffres à voix haute avant de valider.\n\nLa troisième technique : **contraindre le format de sortie**. Précisez « réponds sous forme de tableau à 3 colonnes », « rédige une liste à puces de 5 points maximum », ou « structure ta réponse avec les titres : Constat, Recommandation, Prochaine étape ». Quand le format est fixé à l'avance, la réponse est directement utilisable dans votre rapport ou votre présentation, sans reformatage."
      },
      {
        "title": "Itérer et corriger : un prompt se travaille en 2–3 allers-retours",
        "body": "Dans une tontine, on ne fixe pas les règles une fois pour toutes le premier jour : on ajuste selon ce qui marche pour le groupe. Avec l'IA, c'est pareil. Le premier prompt est rarement parfait, et c'est normal. L'objectif est d'arriver à un bon résultat en deux ou trois échanges, pas en un seul.\n\nComment reformuler efficacement ? Soyez précis sur ce qui ne va pas. Ne dites pas « c'est nul ». Dites : « La réponse est trop longue. Raccourcis à 100 mots. » Ou : « Le ton est trop formel pour une réunion communautaire. Utilise un langage plus simple. » Ou encore : « Tu n'as pas mentionné les données de couverture vaccinale. Intègre ce chiffre : environ 67 % dans la région de Dosso. »\n\nGardez une trace de vos meilleurs prompts dans un carnet (numérique ou papier). Les agents de terrain de MSF ou du PAM, par exemple, créent des bibliothèques de prompts réutilisables pour les rapports hebdomadaires, les fiches bénéficiaires ou les alertes de situation. Un bon prompt est un outil de travail, au même titre qu'un formulaire de collecte de données."
      },
      {
        "title": "Prompts pour le travail réel : synthèse, traduction, e-mail bailleur, compte-rendu terrain",
        "body": "Quatre cas d'usage couvrent l'essentiel du travail documentaire dans le secteur humanitaire et du développement. Le premier : la **note de synthèse**. Collez un long document (rapport de mission, étude de base) et demandez : « En tant que chargé de programme, résume ce document en 5 points clés pour une réunion de coordination. Format : liste numérotée. Langue : français. »\n\nLe deuxième cas : la **traduction et adaptation FR ↔ EN ↔ langue locale**. « Traduis ce message de sensibilisation sur le choléra du français vers le haoussa parlé au Niger, en gardant un niveau de langage accessible à des communautés rurales. » L'IA n'est pas parfaite pour toutes les langues locales, mais elle peut produire une première version à faire valider par un locuteur natif, ce qui réduit le temps de traduction d'environ 50 %.\n\nLe troisième cas : l'**e-mail bailleur**. Donnez les faits, le montant, les résultats, le nom du bailleur, et demandez un e-mail formel de compte rendu en anglais. Le quatrième cas : le **compte-rendu de réunion terrain**. Collez vos notes brutes ou dictez-les vocalement (via une application de transcription), puis demandez : « Structure ces notes en : Participants, Points discutés, Décisions prises, Actions à suivre avec responsables et échéances. » Le résultat est prêt à partager avec votre superviseur."
      }
    ],
    "example": {
      "title": "Du prompt vague au prompt structuré : le cas du rapport de mission",
      "challenge": "Aminata, coordinatrice d'une ONG à Niamey, demande à un outil IA : « Écris un rapport de mission. » Elle obtient un texte générique de deux pages, sans aucune donnée réelle, qu'elle doit entièrement réécrire. Elle passe 90 minutes sur ce document.",
      "solution": "Elle reformule avec la structure Rôle/Contexte/Tâche/Format : « Tu es coordinatrice de projet dans une ONG de santé au Niger. La mission s'est déroulée du 10 au 14 juin 2025 dans le district de Maradi. Objectif : évaluation des stocks de médicaments dans 8 centres de santé. Résultats principaux : 6 centres sur 8 ont des stocks suffisants ; 2 centres signalent une rupture en amoxicilline. Rédige un rapport de mission structuré avec les sections suivantes : Contexte, Déroulement, Résultats, Recommandations. Maximum 400 mots. Ton professionnel, langue française. »",
      "impact": "Le nouveau résultat est utilisable directement après une relecture de 10 minutes. Le temps total de travail passe de 90 minutes à environ 25 minutes, soit un gain de temps d'environ 70 %. La qualité est jugée supérieure par le superviseur, qui valide le rapport sans demande de révision majeure."
    },
    "practice": {
      "title": "Exercice : rédigez et améliorez votre premier prompt structuré",
      "instructions": [
        "Choisissez une tâche réelle de votre travail (rédiger un e-mail, résumer un document, traduire un message). Sur votre téléphone ou ordinateur, rédigez un prompt complet en quatre parties : commencez par « Tu es [votre rôle] », ajoutez le contexte (lieu, projet, données clés), décrivez la tâche précisément, puis précisez le format souhaité (nombre de mots, langue, structure). Soumettez ce prompt à un outil IA (ChatGPT, Claude, Gemini).",
        "Lisez attentivement le résultat obtenu. Identifiez un point précis qui n'est pas satisfaisant : le ton, la longueur, un élément manquant, la structure. Reformulez uniquement cette partie et soumettez une deuxième version du prompt. Comparez les deux réponses côte à côte.",
        "Copiez votre prompt final (la version améliorée) dans un document ou une note sur votre téléphone, avec un titre court qui décrit son usage (exemple : « Prompt rapport de mission terrain »). Vous commencez ainsi votre bibliothèque personnelle de prompts réutilisables."
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
        "explanation": "Ce prompt ne contient que la tâche (résumer). Il manque le rôle (qui est l'IA dans ce contexte ?), le contexte (de quel rapport s'agit-il, pour quel public, dans quel projet ?) et le format (liste, paragraphe, nombre de mots ?). Ces trois éléments sont indispensables pour obtenir un résultat utile."
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
        "explanation": "Le few-shot (ou « quelques exemples ») consiste à inclure dans votre prompt un exemple concret du type de résultat que vous souhaitez. Cela permet à l'IA de calibrer son ton, son niveau de détail et son format sur votre modèle, comme vous montrez un formulaire rempli à un agent avant qu'il en remplisse d'autres."
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
        "question": "Pour traduire un message de sensibilisation du français vers le haoussa avec l'IA, quelle précision est la plus importante à inclure dans le prompt ?",
        "options": [
          {
            "key": "A",
            "text": "Le niveau de langage adapté au public cible (ex : communautés rurales)"
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
            "text": "La date de la campagne de sensibilisation"
          }
        ],
        "answer": "A",
        "explanation": "Pour une traduction utile sur le terrain, le niveau de langage est crucial. Un message technique traduit mot à mot peut être incompréhensible pour des communautés rurales. Préciser « langage accessible, communautés rurales du Niger » guide l'IA pour choisir un vocabulaire simple et des formulations claires, même si le résultat doit toujours être validé par un locuteur natif."
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
            "text": "Les partager uniquement avec votre superviseur et ne pas les modifier"
          }
        ],
        "answer": "C",
        "explanation": "Un bon prompt est un outil de travail réutilisable, au même titre qu'un modèle de rapport ou un formulaire de collecte. Le sauvegarder avec un titre clair (ex : « Prompt compte-rendu réunion terrain ») vous permet de le retrouver rapidement, de le partager avec votre équipe, et de l'améliorer progressivement. C'est la base d'une pratique professionnelle de l'IA."
      }
    ],
    "reflection": "Pensez à une tâche répétitive que vous faites chaque semaine dans votre travail : un rapport hebdomadaire, un e-mail de suivi, une note de synthèse. Maintenant, imaginez avoir un prompt parfaitement calibré pour cette tâche, que vous n'avez qu'à lancer en quelques secondes. Combien de temps cela vous ferait-il gagner sur un mois ? Sur une année ? La rédaction d'un bon prompt est un investissement de 5 minutes qui peut vous en faire économiser des dizaines.",
    "glossary": [
      {
        "term": "Prompt",
        "definition": "La consigne ou instruction que vous donnez à un outil d'IA pour obtenir un résultat. Un prompt bien rédigé est précis, structuré et contextuel. Exemple : « En tant que chargé de programme, rédige un résumé de 150 mots de ce rapport en français. »"
      },
      {
        "term": "Contexte",
        "definition": "Les informations de situation que vous fournissez à l'IA pour qu'elle comprenne l'environnement de la tâche : votre organisation, le projet concerné, le public visé, les données disponibles. Sans contexte, l'IA produit des réponses génériques."
      },
      {
        "term": "Few-shot (exemples)",
        "definition": "Technique consistant à inclure un ou plusieurs exemples du résultat attendu directement dans votre prompt. Cela permet à l'IA d'imiter le ton, le style et la structure que vous souhaitez, comme montrer un modèle rempli à un collègue."
      },
      {
        "term": "Rôle / System prompt",
        "definition": "La persona ou fonction que vous assignez à l'IA au début de votre prompt (ex : « Tu es un traducteur spécialisé en santé publique »). Définir un rôle cadre le comportement de l'IA et améliore la pertinence de ses réponses."
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
    "objective": "By the end of this lesson, you will know how to write structured, effective prompts to get reliable, professional, and directly usable results. You will master the four key components of a good prompt: role, context, task, and format. You will be able to improve your prompts through iteration and adapt them to real situations in your humanitarian or development work.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Anatomy of a Good Prompt: Role, Context, Task, Format",
        "body": "Imagine you are hiring a field assistant for a mission. If you simply say \"write a report,\" they don't know what to include. But if you specify \"you are a monitoring and evaluation officer at UNDP Niger, here is this week's data, write a two-paragraph summary for the coordinator,\" they can work effectively. This is exactly the principle behind a structured prompt.\n\nA good prompt rests on four pillars: the **Role** (how should the AI behave?), the **Context** (what is the situation?), the **Task** (what exactly do you expect?), and the **Format** (what form should the answer take?). Let's see the difference in practice:\n\n— Vague prompt: \"Write an email to a donor.\"\n— Structured prompt: \"You are a project coordinator at a Sahelian NGO. Last week we delivered 200 nutrition kits in the Tillabéri district. Write an activity report email to our donor (UNICEF), in English, maximum 150 words, with a formal tone and a thank-you sentence in the conclusion.\"\n\nThe second prompt takes 30 extra seconds to write, but it saves you several back-and-forth exchanges and produces a result that is nearly ready to send."
      },
      {
        "title": "Techniques That Work: Examples, Step by Step, Format Constraints",
        "body": "The first powerful technique is called **few-shot**: you provide one or two examples of the result you expect. It is like showing a community health worker how to fill out a form before asking them to fill out ten. For example: \"Here is a summary I like: [example]. Now summarize this meeting report in the same style.\" The AI immediately understands your tone, your level of detail, and your working language.\n\nThe second technique: ask the AI to **reason step by step** (\"think step by step\"). For complex tasks like analyzing a project budget or comparing two technical proposals, this reduces errors. It is comparable to asking someone to verify an M-Pesa transfer by reading the figures aloud before confirming.\n\nThe third technique: **constrain the output format**. Specify \"respond in a 3-column table,\" \"write a bullet list of no more than 5 points,\" or \"structure your response with the following headings: Finding, Recommendation, Next Step.\" When the format is fixed in advance, the response is directly usable in your report or presentation, without any reformatting."
      },
      {
        "title": "Iterate and Improve: A Prompt Takes 2–3 Rounds of Refinement",
        "body": "In a tontine savings group, the rules are not set in stone on the first day — they are adjusted based on what works for the group. With AI, it is the same. The first prompt is rarely perfect, and that is completely normal. The goal is to reach a good result in two or three exchanges, not in one.\n\nHow do you reformulate effectively? Be specific about what is wrong. Do not say \"this is bad.\" Say: \"The response is too long. Shorten it to 100 words.\" Or: \"The tone is too formal for a community meeting. Use simpler language.\" Or: \"You did not mention the vaccination coverage data. Include this figure: approximately 67% in the Dosso region.\"\n\nKeep a record of your best prompts in a notebook (digital or paper). Field agents at organizations like MSF or WFP, for example, build libraries of reusable prompts for weekly reports, beneficiary forms, or situation alerts. A good prompt is a work tool, just like a data collection form."
      },
      {
        "title": "Prompts for Real Work: Summaries, Translations, Donor Emails, Field Meeting Notes",
        "body": "Four use cases cover most of the documentary work in the humanitarian and development sector. The first: the **briefing note**. Paste a long document (mission report, baseline study) and ask: \"As a program officer, summarize this document in 5 key points for a coordination meeting. Format: numbered list. Language: English.\"\n\nThe second case: **translation and adaptation FR ↔ EN ↔ local language**. \"Translate this cholera awareness message from French into Hausa spoken in Niger, keeping the language accessible for rural communities.\" AI is not perfect for all local languages, but it can produce a first version to be validated by a native speaker, which reduces translation time by approximately 50%.\n\nThe third case: the **donor email**. Provide the facts, the amount, the results, the donor's name, and request a formal activity report email in English. The fourth case: the **field meeting summary**. Paste your raw notes or dictate them verbally (via a transcription app), then ask: \"Structure these notes into: Participants, Points Discussed, Decisions Made, Follow-up Actions with responsible persons and deadlines.\" The result is ready to share with your supervisor."
      }
    ],
    "example": {
      "title": "From a Vague Prompt to a Structured Prompt: The Mission Report Case",
      "challenge": "Aminata, a coordinator at an NGO in Niamey, asks an AI tool: \"Write a mission report.\" She gets a generic two-page text with no real data, which she has to rewrite entirely. She spends 90 minutes on this document.",
      "solution": "She reformulates using the Role/Context/Task/Format structure: \"You are a project coordinator at a health NGO in Niger. The mission took place from June 10 to 14, 2025, in the Maradi district. Objective: assessment of drug stocks in 8 health centers. Main results: 6 out of 8 centers have sufficient stocks; 2 centers report a shortage of amoxicillin. Write a structured mission report with the following sections: Background, Activities, Results, Recommendations. Maximum 400 words. Professional tone, French language.\"",
      "impact": "The new result is directly usable after a 10-minute review. Total working time drops from 90 minutes to approximately 25 minutes — a time saving of about 70%. The quality is judged superior by the supervisor, who approves the report without requesting major revisions."
    },
    "practice": {
      "title": "Exercise: Write and Improve Your First Structured Prompt",
      "instructions": [
        "Choose a real task from your work (writing an email, summarizing a document, translating a message). On your phone or computer, write a complete prompt in four parts: start with \"You are [your role],\" add the context (location, project, key data), describe the task precisely, then specify the desired format (word count, language, structure). Submit this prompt to an AI tool (ChatGPT, Claude, Gemini).",
        "Read the result carefully. Identify one specific point that is not satisfactory: the tone, the length, a missing element, the structure. Reformulate only that part and submit a second version of the prompt. Compare both responses side by side.",
        "Copy your final prompt (the improved version) into a document or note on your phone, with a short title describing its use (example: \"Field mission report prompt\"). You are now starting your personal library of reusable prompts."
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
        "explanation": "This prompt contains only the task (summarize). It is missing the role (who is the AI in this context?), the context (which report, for which audience, within which project?), and the format (list, paragraph, word count?). These three elements are essential to obtain a useful result."
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
        "explanation": "Few-shot means including a concrete example of the type of result you want in your prompt. This allows the AI to calibrate its tone, level of detail, and format to match your model — like showing a completed form to a colleague before they fill out more."
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
        "question": "When translating an awareness message from French into Hausa using AI, which detail is most important to include in the prompt?",
        "options": [
          {
            "key": "A",
            "text": "The language level suited to the target audience (e.g., rural communities)"
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
            "text": "The date of the awareness campaign"
          }
        ],
        "answer": "A",
        "explanation": "For a translation to be useful in the field, the language level is crucial. A technically translated message can be incomprehensible to rural communities. Specifying \"accessible language, rural communities in Niger\" guides the AI to choose simple vocabulary and clear phrasing, even though the result should always be validated by a native speaker."
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
            "text": "Share them only with your supervisor and never modify them"
          }
        ],
        "answer": "C",
        "explanation": "A good prompt is a reusable work tool, just like a report template or a data collection form. Saving it with a clear title (e.g., \"Field meeting summary prompt\") allows you to retrieve it quickly, share it with your team, and gradually improve it. This is the foundation of a professional AI practice."
      }
    ],
    "reflection": "Think of a repetitive task you do every week at work: a weekly report, a follow-up email, a briefing note. Now imagine having a perfectly calibrated prompt for that task, one you can launch in just a few seconds. How much time would that save you in a month? In a year? Writing a good prompt is a 5-minute investment that can save you dozens of hours.",
    "glossary": [
      {
        "term": "Prompt",
        "definition": "The instruction or command you give an AI tool to get a result. A well-written prompt is precise, structured, and contextual. Example: \"As a program officer, write a 150-word summary of this report in English.\""
      },
      {
        "term": "Context",
        "definition": "The situational information you provide to the AI so it understands the environment of the task: your organization, the project involved, the target audience, the available data. Without context, AI produces generic responses."
      },
      {
        "term": "Few-shot (examples)",
        "definition": "A technique that involves including one or more examples of the expected result directly in your prompt. This allows the AI to mirror the tone, style, and structure you want — like showing a completed sample form to a colleague."
      },
      {
        "term": "Role / System prompt",
        "definition": "The persona or function you assign to the AI at the start of your prompt (e.g., \"You are a translator specialized in public health\"). Defining a role frames the AI's behavior and improves the relevance of its responses."
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
    "objective": "A karshen wannan darasi, za ku san yadda ake rubuta umurnai (prompts) da ke da tsari kuma masu amfani don samun sakamako ingantacce, na sana'a, kuma za a iya amfani da shi nan take. Za ku iya koyon ginshiƙan huɗu na prompt mai kyau: rawa, mahallin aiki, aikin da ake son yi, da tsarin amsa. Za ku iya inganta promptoci ku ta hanyar gyara mataki-mataki, kuma ku daidaita su ga ayyukancku na gaske a harkar jin kai ko ci gaban al'umma.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Jiki na Prompt Mai Kyau: Rawa, Mahallin, Aiki, Tsari",
        "body": "Ka yi tunanin kana daukar ma'aikaci don aikin filin. In ka ce masa kawai « rubuta rahoto », bai san me ya saka ciki ba. Amma in ka fayyace masa « kai ne jami'in sa ido a PNUD Niger, ga bayanai na mako, rubuta taƙaitaccen magana a cikin sakin layi biyu ga mai gudanarwa », zai iya yin aiki sosai. Wannan shi ne daidai ka'idar prompt mai tsari.\n\nPrompt mai kyau yana dogara ne kan ginshiƙan huɗu: **Rawa** (ta yaya AI ya kamata ya yi aiki?), **Mahallin** (mene ne halin da ake ciki?), **Aiki** (me kake tsammani daidai?), da **Tsari** (wace sura amsar ta kamata ta ɗauka?). Bari mu ga bambancin a aikace:\n\n— Prompt mara tsari: « Rubuta e-mail ga wanda ke bayar da kuɗi. »\n— Prompt mai tsari: « Kai ne mai kula da aikin a wata ƙungiyar jin kai ta yankin Sahel. Mako mai ya gabata mun kai kayan abinci mai gina jiki 200 a gundumar Tillabéri. Rubuta e-mail na rahoton ayyuka ga wanda ke bayar da kuɗi (UNICEF), cikin Turanci, kalmomin 150 da ba su wuce haka ba, da sautin hukuma, tare da jumla ta godiya a ƙarshe. »\n\nPrompt na biyu yana ɗaukar ƙarin daƙiƙa 30 don rubuta shi, amma yana ceton ku daga zagayawa da yawa, kuma yana samar da sakamako kusan mai shirye-shirye don aikawa."
      },
      {
        "title": "Dabarun da Ke Aiki: Misalai, Mataki-mataki, Ƙuntatawa na Tsari",
        "body": "Dabarar farko mai ƙarfi ana kiranta **few-shot**: kuna ba da misali ɗaya ko biyu na sakamakon da kuke tsammani. Kamar nuna wa ma'aikacin lafiya na al'umma yadda ake cika fom ɗin kafin ka tambaye shi ya cika goma. Misali: « Ga taƙaitaccen magana da na fi so: [misali]. Yanzu taƙaita wannan rahoton taron da wannan salo. » AI yana fahimtar sautin ku nan take, matakin bayani ku, da yaren aiki ku.\n\nDabarar ta biyu: ku tambayi AI ya **yi tunani mataki bayan mataki** (\"think step by step\"). Don ayyuka masu rikitarwa kamar nazarin kasafin kuɗin aiki ko kwatancen shawarwari biyu na fasaha, wannan yana rage kura-kurai. Yana kama da neman wani ya tabbatar da canja wurin Orange Money ta karanta lambobi da murya kafin tabbatarwa.\n\nDabarar ta uku: **ƙuntatawa ga tsarin amsa**. Ku fayyace « amsa cikin teburin ginshiƙai 3 », « rubuta jerin abubuwa da ke da aya 5 a iya yawancinsu », ko « tsara amsar ka da waɗannan taken: Lura, Shawarwari, Mataki na gaba ». Lokacin da aka ƙayyade tsarin a gaba, amsar ana iya amfani da ita kai tsaye a rahoton ku ko gabatarwar ku, ba tare da sake fasalta shi ba."
      },
      {
        "title": "Gyara da Ingantawa: Prompt Yana Buƙatar Zagaye 2–3 na Aikin Gyara",
        "body": "A tontine (ƙungiyar ajiya ta al'umma), ba a kafa dokokin daya-daya a rana ta farko ba — ana daidaita su bisa abin da ke aiki don ƙungiyar. Tare da AI, shi ne iri ɗaya. Prompt na farko ba kasafai ya zama cikakke ba, kuma hakan al'ada ce gaba ɗaya. Maƙasudin shi ne cimma sakamakon mai kyau a cikin canjin kalmomi biyu ko uku, ba ɗaya ba.\n\nYaya ake sake fasalta yadda yakamata? Ku fayyace game da abin da ba daidai ba. Kada ku ce « wannan mara kyau ne ». Ku ce: « Amsar tana da tsawo sosai. Taƙaita zuwa kalmomin 100. » Ko: « Sauti ya yi tsauri sosai ga taron al'umma. Yi amfani da harshen da ya fi sauƙi. » Ko kuma: « Ba ku ambaci bayanin rufe allurar rigakafi ba. Saka wannan adadi: kimanin kashi 67% a yankin Dosso. »\n\nKu adana kyawawan promptocin ku a cikin littafi (na dijital ko na takarda). Jami'an filin ƙungiyoyi kamar MSF ko PAM, alal misali, suna gina ɗakunan karatu na prompts masu sake amfani don rahotannin mako-mako, fomoci na masu amfana, ko gargaɗin yanayi. Prompt mai kyau kayan aiki ne na aiki, daidai kamar fom ɗin tattara bayanai."
      },
      {
        "title": "Prompts Don Aikin Gaske: Taƙaita, Fassara, E-mail Bailleur, Rahoton Taro na Filin",
        "body": "Lokuta huɗu na amfani suna rufe mafi yawan aikin takardun aiki a harkar jin kai da ci gaban al'umma. Na farko: **taƙaitaccen rahoto**. Manna dogon takarda (rahoton aikin, karatun asali) ku tambayi: « A matsayin jami'in shirin, taƙaita wannan takarda a cikin mahimman batutuwa 5 don taron daidaitawa. Tsari: jerin lambobi. Harshe: Hausa. »\n\nLarura ta biyu: **fassara da daidaitawa FR ↔ EN ↔ harshen gida**. « Fassara wannan sakon wayewar kan zazzabin kwalara daga Faransanci zuwa Hausa da ake magana a Niger, tare da kiyaye matakin harshe mai sauƙi ga al'ummomin karkara. » AI ba cikakke ba ne don duk yarukan gida, amma yana iya samar da sigar farko da za a tabbatar da ita ta mai magana na asali, wanda ke rage lokacin fassara da kimanin kashi 50%.\n\nLarura ta uku: **e-mail na masu bayar da kuɗi**. Ka ba da gaskiyar abubuwa, adadi, sakamakon, sunan mai ba da kuɗi, ka tambayi e-mail na yau da kullun na rahoton ayyuka cikin Turanci. Larura ta huɗu: **taƙaitan taron filin**. Manna rubutun ku na ɗan gajere ko faɗi su ta murya (ta hanyar aikace-aikacen rubuta magana), sannan ku tambayi: « Tsara waɗannan bayanan cikin: Mahalarta, Batutuwan da Aka Tattauna, Shawarwarin da Aka Ɗauka, Ayyukan da Ke Biyo Baya tare da masu alhakin da ƙarewar lokaci. » Sakamakon yana shirye don raba shi da mai kula da ku."
      }
    ],
    "example": {
      "title": "Daga Prompt Marar Tsari zuwa Prompt Mai Tsari: Lamarin Rahoton Aikin",
      "challenge": "Aminata, mai kula da ayyuka a wata ƙungiyar NGO a Niamey, ta tambayi kayan aiki na AI: « Rubuta rahoto na aikin. » Ta sami rubutu na gaba ɗaya na shafuka biyu ba tare da wasu bayanan gaske ba, wanda dole ta sake rubutawa gaba ɗaya. Ta kashe mintuna 90 akan wannan takarda.",
      "solution": "Ta sake fasalta ta amfani da tsarin Rawa/Mahallin/Aiki/Tsari: « Kai ne mai kula da aikin a ƙungiyar NGO ta lafiya a Niger. Aikin ya gudana daga 10 zuwa 14 ga Yuni 2025 a gundumar Maradi. Maƙasudi: kimantawa kan kayan magunguna a cibiyoyin lafiya 8. Sakamakon da ya fi muhimmanci: cibiyoyi 6 daga 8 suna da isassun kayan; cibiyoyi 2 sun ruwaito karancin amoxicillin. Rubuta rahoto mai tsari na aikin tare da waɗannan sassan: Mahallin, Ayyuka, Sakamakon, Shawarwari. Kalmomin 400 da ba su wuce haka ba. Sauti na sana'a, harshen Faransanci. »",
      "impact": "Sakamakon sabon rahoto ana iya amfani da shi kai tsaye bayan sake karanta mintuna 10. Jimlar lokacin aiki ya ragu daga mintuna 90 zuwa kimanin mintuna 25 — adana lokaci kimanin kashi 70%. Ingancin ya yi ƙima mai kula da ita, wanda ya amince da rahoto ba tare da neman babban gyara ba."
    },
    "practice": {
      "title": "Aikin Gwaji: Rubuta kuma Inganta Farkon Prompt Ku Mai Tsari",
      "instructions": [
        "Zaɓi aikin gaske daga aikin ku (rubuta e-mail, taƙaita takarda, fassara saƙo). A wayar ku ko kwamfuta, rubuta cikakken prompt a sassan huɗu: fara da « Kai ne [rawar ku] », ƙara mahallin (wuri, aiki, mahimman bayanai), bayyana aikin daidai, sannan fayyace tsarin da ake so (adadin kalmomi, harshe, tsari). Saka wannan prompt ga kayan aiki na AI (ChatGPT, Claude, Gemini).",
        "Karanta sakamakon da aka samu sosai. Gano wata daga batutuwa ɗaya da ba ta gamsar da ku ba: sauti, tsawo, ɓangare da ya ɓace, tsari. Sake fasalta wannan ɓangare ne kawai ka saka sigar prompt ta biyu. Kwatanta amsar biyu kai tsaye.",
        "Kwafa promptr ɗin ku na ƙarshe (sigar da aka inganta) cikin takarda ko bayanin kula a wayar ku, tare da taken gajere da ke bayyana amfaninsa (misali: « Prompt rahoton aikin filin »). Yanzu kun fara ɗakin karatu ku na sirri na prompts masu sake amfani."
      ],
      "observation": "Za ku lura cewa sigar ta biyu ta prompt tana samar da amsa mafi kusa da tsammaninku, galibi ba tare da buƙatar sake fasalta na uku ba. Ƙoƙarin rubuta prompt mai daidaito yana biyan kuɗi tun daga amfanin farko: ƙananan gyare-gyare, ƙananan frustration, da sakamakon sana'a da sauri."
    },
    "quiz": [
      {
        "question": "Wane ɓangare ya ɓace a cikin wannan prompt: « Taƙaita wannan rahoto a gare ni »?",
        "options": [
          {
            "key": "A",
            "text": "Aikin (taƙaita)"
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
        "explanation": "Wannan prompt yana ɗauke da aikin kawai (taƙaita). Rawa ta ɓace (AI wanene a wannan yanayin?), mahallin ya ɓace (wane rahoto, ga wane jama'a, a cikin wane aiki?), da tsari ya ɓace (jeri, sakin layi, adadin kalmomi?). Waɗannan abubuwa uku suna da mahimmanci wajen samun sakamakon da ke da amfani."
      },
      {
        "question": "Dabarar « few-shot » ta ƙunshi:",
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
            "text": "Bayar da misali ɗaya ko biyu na sakamakon da ake tsammani a cikin prompt"
          },
          {
            "key": "D",
            "text": "Raba aikin zuwa zaman daban-daban da yawa"
          }
        ],
        "answer": "C",
        "explanation": "Few-shot yana nufin saka misali na gaske na nau'in sakamakon da kake so a cikin promptr ɗin ka. Wannan yana baiwa AI damar daidaita sautin sa, matakin bayani sa, da tsarin sa zuwa samfurin ka — kamar nuna fom ɗin da aka cika wa ɗan'uwa na aiki kafin ya cika sauran."
      },
      {
        "question": "Me ya sa ake ba da shawarar gyara prompt maimakon sake rubuta shi gaba ɗaya?",
        "options": [
          {
            "key": "A",
            "text": "Saboda AI yana manta da saƙon da ya gabata"
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
            "text": "Saboda yana da tasiri fiye don gyara wata daga batutuwa ɗaya maimakon sake fasalta komai, wanda ke baiwa ku damar cimma sakamakon daidai a cikin canjin kalmomi 2–3"
          }
        ],
        "answer": "D",
        "explanation": "Sake rubuta prompt gaba ɗaya galibi yana nufin asarar abin da ya riga ya yi aiki. Gano daidai abin da ba ya aiki (sauti, tsawo, ɓangare da ya ɓace) da kuma gyara shi a hankali yana da tasiri sosai. Kamar daidaita girke-girke ta canza ɗaya daga cikin kayan yaji, ba fara daga farko ba."
      },
      {
        "question": "Lokacin fassara sakon wayewar kan cuta daga Faransanci zuwa Hausa ta amfani da AI, wane bayani ne mafi mahimmanci a saka cikin prompt?",
        "options": [
          {
            "key": "A",
            "text": "Matakin harshe da ya dace da jama'ar da ake nufi (misali, al'ummomin karkara)"
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
            "text": "Ranar kamfen ɗin wayewar kan lafiya"
          }
        ],
        "answer": "A",
        "explanation": "Don fassara ta kasance da amfani a filin, matakin harshe yana da mahimmanci ƙwarai. Sakon fasaha da aka fassara kalma-kalma na iya zama ba a fahimta ga al'ummomin karkara. Fayyace « harshe mai sauƙi, al'ummomin karkara a Niger » yana jagorantar AI don zaɓar kalmomi masu sauƙi da jimlan bayyananne, ko da yake dole koyaushe a tabbatar da sakamakon ta mai magana na asali."
      },
      {
        "question": "Mene ne mafi kyawun hanyar gina akan kyawawan prompts ɗin ku don dogon lokaci?",
        "options": [
          {
            "key": "A",
            "text": "Memorize them mentally for each new task"
          },
          {
            "key": "B",
            "text": "Saka su ga AI a sabon zaman kowace lokaci"
          },
          {
            "key": "C",
            "text": "Adana su a ɗakin karatu na sirri (takarda, bayanin kula, fayil) tare da taken bayyananne"
          },
          {
            "key": "D",
            "text": "Raba su da mai kula da ku kawai kuma kada a gyara su"
          }
        ],
        "answer": "C",
        "explanation": "Prompt mai kyau kayan aiki ne na aiki wanda za a iya sake amfani da shi, daidai kamar samfurin rahoto ko fom ɗin tattara bayanai. Adana shi tare da taken bayyananne (misali, « Prompt taƙaitan taron filin ») yana baiwa ku damar nemo shi da sauri, raba shi da ƙungiyar ku, kuma ƙara kyauta shi a hankali. Wannan shine tushen aikin AI na sana'a."
      }
    ],
    "reflection": "Yi tunani kan aikin da ke maimaitawa da kake yi kowace mako a aikinka: rahoto na mako-mako, e-mail na bibiyar aiki, taƙaitan rahoto. Yanzu ka yi tunanin samun prompt da aka daidaita sosai don wannan aikin, wanda kawai kake ƙaddamar da shi cikin ƴan daƙiƙa. Nawa lokaci zai cece ka a cikin wata? A cikin shekara? Rubuta prompt mai kyau ƙuduri ne na mintuna 5 wanda zai iya cece ku daruruwan sa'o'i.",
    "glossary": [
      {
        "term": "Prompt",
        "definition": "Umurni ko jagorar da kuke bawa kayan aiki na AI don samun sakamakon da ake so. Prompt da aka rubuta yadda ya kamata yana da daidaito, tsari, da mahallin aiki. Misali: « A matsayin jami'in shirin, rubuta taƙaitaccen magana na kalmomin 150 na wannan rahoto cikin Hausa. »"
      },
      {
        "term": "Mahallin (Contexte)",
        "definition": "Bayanin yanayin da kuke bayarwa ga AI don ya fahimci yanayin aikin: ƙungiyar ku, aikin da ke cikin tambaya, jama'ar da ake nufi, bayanai da ake da su. Ba tare da mahallin ba, AI yana samar da amsoshi na gaba ɗaya."
      },
      {
        "term": "Few-shot (Misalai)",
        "definition": "Dabarar da ta ƙunshi saka misali ɗaya ko fiye na sakamakon da ake tsammani kai tsaye a cikin promptr ɗin ka. Wannan yana baiwa AI damar kwaikwayon sauti, salo, da tsari da kake son su — kamar nuna fom ɗin da aka cika wa ɗan'uwa na aiki."
      },
      {
        "term": "Rawa / System prompt",
        "definition": "Sunan mutum ko aikin da kuke ba AI a farkon promptr ɗin ku (misali, « Kai mai fassara ne da ke ƙwarewa a lafiyar jama'a »). Bayyana rawa yana tsara ɗabi'ar AI kuma yana inganta dacewa da amsar sa."
      },
      {
        "term": "Gyara mataki-mataki (Itération)",
        "definition": "Tsarin inganta prompt a hankali ta hanyar canjin kalmomi masu jere. Kuna gano abin da ba daidai ba a amsar farko, gyara wannan ɓangare musamman, kuma ku sake saka shi. Gabaɗaya, gyare-gyare 2 zuwa 3 sun isa don samun sakamakon sana'a."
      },
      {
        "term": "Tsarin amsa (Format de sortie)",
        "definition": "Sura da kuke so amsar AI ta ɗauka: jerin abubuwa, teburi, e-mail na yau da kullun, sakin layi na lambobi, iyakar adadin kalmomi. Fayyace tsarin yana hana sake fasalta hannu da hannu kuma yana sa amsa ta kasance mai amfani kai tsaye."
      }
    ]
  }
};
