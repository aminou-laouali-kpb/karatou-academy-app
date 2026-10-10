import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c4 (L'IA dans votre organisation — choisir les bons cas d'usage)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC4: Record<Language, LessonContent> = {
  "fr": {
    "id": "c4",
    "lessonNumber": 4,
    "title": "L'IA dans votre organisation — choisir les bons cas d'usage",
    "objective": "À la fin de cette leçon, vous serez capable d'identifier les activités où l'IA peut apporter une réelle valeur, dans l'organisation qui est la vôtre : entreprise, administration, école, hôpital, coopérative, association, ONG ou activité indépendante. Vous saurez évaluer la faisabilité de chaque opportunité en tenant compte des données disponibles, des contraintes concrètes de votre environnement de travail et du niveau de risque. Vous pourrez prioriser un premier cas d'usage pilote et préparer votre équipe à l'adopter progressivement.",
    "video": {
      "fr": "https://www.youtube.com/embed/Jw4d59hMLgk",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Cartographier les cas d'usage : où l'IA fait vraiment la différence",
        "body": "Avant d'adopter un outil d'IA, la première question n'est pas « quelle technologie choisir ? » mais « où avons-nous des problèmes que l'IA peut résoudre ? ». Le mot organisation désigne ici tout endroit où l'on travaille ensemble : une entreprise, une administration, une école, un hôpital, une coopérative, une association, une ONG, une équipe de bénévoles, ou même un cabinet d'une seule personne. Pensez à votre journée de travail : quelles tâches répétitives vous prennent beaucoup de temps ? Quels rapports reviennent chaque mois avec les mêmes tableaux à remplir ? Quelles informations cherchez-vous en fouillant des dizaines de fichiers ?\n\nL'IA crée de la valeur de trois façons principales. Elle fait gagner du temps sur des tâches répétitives : traduire un formulaire du français vers le haoussa, résumer un long compte rendu de réunion, préparer un devis à partir d'un modèle. Elle améliore la qualité : repérer des erreurs dans une liste de clients, d'élèves ou de bénéficiaires avant un envoi important. Elle élargit l'accès : un agent de santé communautaire consulte des conseils en langue locale sans connexion permanente, un artisan rédige une offre dans une langue qu'il maîtrise mal, un étudiant révise avec un tuteur disponible à toute heure.\n\nImaginez un magasinier qui trie chaque matin des centaines de fiches papier pour retrouver les stocks disponibles. Un simple système de recherche automatisée lui ferait gagner deux heures par jour. Le même raisonnement vaut pour une secrétaire de mairie, un comptable de petite entreprise ou un enseignant qui prépare ses cours. C'est exactement cela : l'IA comme assistant intelligent, pas comme remplacement du travail humain. Commencez par lister cinq tâches qui vous épuisent. Ce sont vos premiers candidats."
      },
      {
        "title": "Prioriser : choisir le bon cas d'usage avant de se lancer",
        "body": "Toutes les idées ne se valent pas. Une matrice simple vous aide à choisir : placez chaque idée sur deux axes — la valeur qu'elle apporte (gain de temps, qualité, portée) et l'effort qu'elle demande (données disponibles, coût, compétences nécessaires). Les meilleurs candidats pilotes sont ceux à haute valeur et faible effort.\n\nLa disponibilité des données est cruciale. Si vous souhaitez automatiser le tri d'une liste — clients, élèves, adhérents ou bénéficiaires — l'avez-vous déjà sous forme numérique ? Est-elle cohérente et complète ? Une ONG au Sahel qui voulait utiliser l'IA pour analyser des données de nutrition a découvert que 40 % de ses données étaient saisies différemment selon le collecteur. Il a fallu d'abord nettoyer les données avant toute automatisation. Le même piège attend la boutique dont l'historique des ventes vit dans des carnets papier, ou l'école dont les notes sont dispersées dans dix classeurs.\n\nLe niveau de risque compte aussi. Utiliser l'IA pour rédiger un premier brouillon de rapport interne est peu risqué : un humain relit et corrige. La laisser décider seule qui reçoit une aide alimentaire, qui obtient un crédit ou qui est recruté est très risqué : une erreur peut priver quelqu'un d'un droit. Gardez toujours un humain responsable pour les décisions qui touchent directement des personnes. C'est comme le contrôle qualité dans une coopérative de cacao, de café ou de riz : on vérifie avant d'expédier."
      },
      {
        "title": "Contraintes concrètes : tenir compte de la réalité de votre terrain",
        "body": "Un outil d'IA qui fonctionne parfaitement au siège, à Dakar, Abidjan, Lima ou Manille, peut être inutilisable dans un bureau de district sans électricité stable, dans un atelier où six personnes partagent un seul ordinateur, ou dans une école où le réseau ne passe que près de la fenêtre. Avant de choisir une solution, posez-vous trois questions pratiques : la connexion internet est-elle fiable ? L'outil fonctionne-t-il hors ligne ou sur une connexion lente ? Les personnes qui l'utiliseront ont-elles un ordinateur, un smartphone récent, ou seulement un téléphone basique partagé ?\n\nLa langue est une contrainte majeure souvent sous-estimée. La plupart des outils d'IA performent bien en français, en anglais ou en espagnol, beaucoup moins en haoussa, en bambara, en quechua ou en créole haïtien. Si vos collègues, vos clients ou vos bénéficiaires s'expriment d'abord dans une langue peu représentée, vérifiez que l'outil choisi la prend en charge ou prévoyez une étape de traduction et de relecture dans votre processus. Des projets d'IA pour la santé au Niger ont montré l'importance d'intégrer le haoussa dès la conception.\n\nLe coût est souvent oublié dans les projets pilotes. Un abonnement peut sembler abordable vu de loin et représenter une part importante du budget d'une petite structure : une association de quartier, une clinique privée, une école communautaire, un atelier de couture. Explorez d'abord les versions gratuites, les tarifs réduits pour l'éducation ou les offres destinées aux associations et aux ONG. Enfin, évaluez honnêtement les compétences disponibles dans votre équipe : même le meilleur outil est inutile si personne ne sait l'utiliser et si aucune formation n'est prévue. Un téléphone avec Orange Money, M-Pesa, bKash ou Pix ne sert à rien si on ne sait pas s'en servir — l'IA, c'est pareil."
      },
      {
        "title": "Conduite du changement : faire adopter l'IA par votre équipe",
        "body": "Introduire un outil d'IA, c'est d'abord un défi humain, pas technologique. Les résistances sont normales et légitimes : peur de perdre son emploi, inquiétude face à quelque chose d'inconnu, méfiance envers un outil « qui se trompe parfois ». Votre rôle, que vous dirigiez un service, une classe, une boutique ou une équipe de terrain, est d'écouter ces craintes, de les prendre au sérieux et de montrer par l'exemple.\n\nCommencez petit avec un pilote limité : une équipe, une tâche, un mois. Documentez les résultats honnêtement — ce qui a fonctionné et ce qui n'a pas fonctionné. Impliquez les utilisateurs finaux dès le début : ce sont eux qui connaissent le mieux les problèmes à résoudre. Une infirmière, un enseignant ou un chargé de clientèle qui utilise l'IA pour rédiger ses comptes rendus quotidiens sera le meilleur ambassadeur s'il a été associé au choix de l'outil.\n\nLa gouvernance légère est essentielle : définissez clairement qui a le droit d'utiliser l'outil, pour quelles tâches, avec quelles données, et qui vérifie les résultats. Ce n'est pas de la bureaucratie — c'est de la responsabilité. Pensez à une caisse d'épargne rotative bien organisée, tontine en Afrique de l'Ouest, tanda au Mexique ou chit fund en Inde : chacun connaît son rôle, les règles sont claires et la confiance se construit au fil des cycles. Le passage à l'échelle vient naturellement une fois que le pilote a prouvé sa valeur et que l'équipe est à l'aise."
      }
    ],
    "example": {
      "title": "L'ONG SahelAction choisit son premier cas d'usage IA",
      "challenge": "SahelAction coordonne la distribution d'aide alimentaire dans trois régions du Niger. Chaque mois, l'équipe passe en moyenne 18 heures à trier manuellement des listes de bénéficiaires Excel pour éliminer les doublons, corriger les noms mal orthographiés et vérifier les critères d'éligibilité. Des erreurs passent parfois inaperçues, entraînant des doublons de distribution ou des exclusions injustes.",
      "solution": "L'équipe cartographie ses tâches chronophages et identifie le tri des listes comme candidat prioritaire : haute valeur (gain de temps important, réduction des erreurs), faible effort (les données existent déjà sous format Excel, une seule personne doit apprendre l'outil). Elle choisit un outil d'IA de nettoyage de données disponible en version gratuite pour les ONG. Un pilote d'un mois est lancé sur une seule région avec deux agents formés en une demi-journée. Un responsable valide manuellement un échantillon de 10 % des résultats chaque semaine.",
      "impact": "Au bout du premier mois, le temps de traitement des listes passe de 18 heures à 4 heures, soit un gain de 14 heures par cycle. Le taux d'erreurs détectées augmente de 60 % par rapport au tri manuel. Fort de ces résultats, SahelAction étend le pilote aux deux autres régions le mois suivant. En six mois, l'organisation économise l'équivalent de plus de 200 heures de travail, qu'elle redirige vers des visites terrain."
    },
    "practice": {
      "title": "Construire votre mini-matrice valeur / effort",
      "instructions": [
        "Sur votre téléphone, ouvrez une application de notes (Notes, Keep ou même un SMS à vous-même) et listez trois tâches répétitives de votre travail, de vos études ou de votre activité — par exemple : rédiger des comptes rendus, saisir des données, répondre aux mêmes questions de clients, traduire des documents, préparer un cours, chercher une information dans des fichiers.",
        "Pour chacune des trois tâches, attribuez un score de 1 à 3 sur deux critères : Valeur (1 = peu utile, 3 = très utile si automatisée) et Effort (1 = facile à automatiser, 3 = très difficile). Notez ces scores à côté de chaque tâche dans votre application de notes.",
        "Identifiez la tâche avec le score Valeur le plus élevé et le score Effort le plus bas — c'est votre meilleur candidat pilote. Notez en une phrase pourquoi vous la choisissez et quelle donnée vous auriez besoin de rassembler pour commencer."
      ],
      "observation": "En faisant cet exercice, vous remarquerez peut-être que les tâches les plus répétitives ne sont pas toujours les plus faciles à automatiser — et que certaines tâches apparemment simples cachent des contraintes de données ou de langue. Cette prise de conscience est déjà une étape clé dans l'adoption responsable de l'IA."
    },
    "quiz": [
      {
        "question": "Quelle est la première question à se poser avant d'adopter un outil d'IA dans une organisation ?",
        "options": [
          {
            "key": "A",
            "text": "Quel est le coût mensuel de l'abonnement ?"
          },
          {
            "key": "B",
            "text": "Quelle technologie est la plus populaire sur le marché ?"
          },
          {
            "key": "C",
            "text": "Quels problèmes concrets de l'organisation l'IA peut-elle aider à résoudre ?"
          },
          {
            "key": "D",
            "text": "Combien d'employés savent déjà utiliser ce type d'outil ?"
          }
        ],
        "answer": "C",
        "explanation": "La bonne démarche part toujours des besoins réels de l'organisation — entreprise, école, administration, coopérative ou association — et non de la technologie disponible. Identifier les problèmes concrets permet de choisir le bon outil et d'éviter d'adopter une solution à la recherche d'un problème."
      },
      {
        "question": "Dans une matrice valeur / effort, quel type de cas d'usage faut-il prioriser en premier ?",
        "options": [
          {
            "key": "A",
            "text": "Effort élevé et valeur élevée"
          },
          {
            "key": "B",
            "text": "Effort faible et valeur faible"
          },
          {
            "key": "C",
            "text": "Effort élevé et valeur faible"
          },
          {
            "key": "D",
            "text": "Valeur élevée et effort faible"
          }
        ],
        "answer": "D",
        "explanation": "Les cas d'usage à haute valeur et faible effort sont les meilleurs candidats pour un pilote : ils offrent un retour rapide et visible avec un minimum de ressources et de risques. C'est la logique des « victoires rapides » qui créent de la confiance avant les projets plus ambitieux."
      },
      {
        "question": "Une organisation souhaite utiliser l'IA pour décider automatiquement et sans validation humaine qui reçoit une aide d'urgence, un crédit ou une bourse. Quelle est la principale raison de s'en méfier ?",
        "options": [
          {
            "key": "A",
            "text": "L'IA n'est pas capable de traiter des listes de noms."
          },
          {
            "key": "B",
            "text": "Ce cas d'usage présente un risque élevé : des erreurs peuvent priver des personnes de leur droit."
          },
          {
            "key": "C",
            "text": "Les outils d'IA sont trop coûteux pour ce type de tâche."
          },
          {
            "key": "D",
            "text": "Il faut d'abord disposer d'une connexion internet haut débit."
          }
        ],
        "answer": "B",
        "explanation": "Lorsqu'une décision touche directement des personnes — une aide, un crédit, un recrutement, une admission — le niveau de risque est élevé. L'IA peut assister la prise de décision, mais un humain doit rester responsable de la validation finale pour éviter des erreurs aux conséquences graves."
      },
      {
        "question": "Parmi les contraintes suivantes, laquelle est le plus souvent sous-estimée lors du choix d'un outil d'IA ?",
        "options": [
          {
            "key": "A",
            "text": "La langue des personnes qui utiliseront l'outil et de celles qu'il concerne"
          },
          {
            "key": "B",
            "text": "La couleur de l'interface de l'outil"
          },
          {
            "key": "C",
            "text": "Le nombre de fonctionnalités disponibles dans l'outil"
          },
          {
            "key": "D",
            "text": "La notoriété internationale du fournisseur de l'outil"
          }
        ],
        "answer": "A",
        "explanation": "La langue est une contrainte majeure souvent négligée. La plupart des outils d'IA sont optimisés pour le français, l'anglais ou l'espagnol, et fonctionnent mal en haoussa, en bambara, en quechua ou en créole haïtien. Si vos équipes, vos clients ou vos bénéficiaires travaillent dans une langue peu représentée, cela doit être vérifié avant tout déploiement."
      },
      {
        "question": "Quelle approche est recommandée pour introduire un outil d'IA dans une équipe qui n'en a jamais utilisé ?",
        "options": [
          {
            "key": "A",
            "text": "Déployer immédiatement l'outil dans toute l'organisation pour maximiser l'impact."
          },
          {
            "key": "B",
            "text": "Attendre que tous les membres de l'équipe aient suivi une formation longue avant de commencer."
          },
          {
            "key": "C",
            "text": "Commencer par un pilote limité (une tâche, une équipe, une période courte) en impliquant les utilisateurs."
          },
          {
            "key": "D",
            "text": "Laisser chacun choisir librement son propre outil d'IA sans coordination."
          }
        ],
        "answer": "C",
        "explanation": "Un pilote limité permet de tester, d'apprendre et d'ajuster avec peu de risques. Impliquer les utilisateurs dès le début crée de la confiance et améliore l'adoption. Le passage à l'échelle vient naturellement une fois les résultats prouvés et l'équipe formée."
      }
    ],
    "reflection": "Pensez à une tâche de votre travail, de vos études ou de votre activité que vous jugez fastidieuse et qui revient régulièrement. Si vous deviez la confier à un assistant IA, quelles données lui fourniriez-vous ? Qui vérifierait son travail ? Et comment sauriez-vous que le résultat est fiable ? Répondre à ces trois questions, c'est déjà penser en responsable de l'IA.",
    "glossary": [
      {
        "term": "Cas d'usage",
        "definition": "Une situation concrète dans laquelle un outil ou une technologie est utilisé pour résoudre un problème précis. Par exemple : « utiliser l'IA pour détecter les doublons dans une liste de clients ou de bénéficiaires » est un cas d'usage."
      },
      {
        "term": "ROI (Retour sur investissement)",
        "definition": "Mesure du bénéfice obtenu par rapport aux ressources investies (temps, argent, formation). Un ROI positif signifie que le projet rapporte plus qu'il ne coûte. Dans une entreprise, une école ou une association, le ROI peut inclure des gains non financiers : du temps libéré, moins d'erreurs, un service rendu plus vite."
      },
      {
        "term": "Pilote (POC)",
        "definition": "Un test à petite échelle d'une solution, avant de la déployer largement. Le pilote permet de vérifier que l'outil fonctionne dans votre contexte réel, d'identifier les problèmes tôt et de convaincre les équipes par des résultats concrets."
      },
      {
        "term": "Conduite du changement",
        "definition": "L'ensemble des actions menées pour accompagner une équipe ou une organisation à adopter une nouvelle pratique ou un nouvel outil. Inclut la communication, la formation, l'écoute des résistances et la célébration des succès."
      },
      {
        "term": "Gouvernance des données",
        "definition": "Les règles et responsabilités définissant comment les données sont collectées, stockées, utilisées et protégées dans une organisation. Une bonne gouvernance précise qui a accès à quelles données, pour quelles finalités et avec quelles mesures de sécurité."
      },
      {
        "term": "Passage à l'échelle",
        "definition": "Le processus par lequel un projet pilote réussi est étendu à un plus grand nombre d'utilisateurs, de régions ou de tâches. Le passage à l'échelle doit s'appuyer sur des résultats prouvés et une préparation suffisante des équipes et des systèmes."
      }
    ]
  },
  "en": {
    "id": "c4",
    "lessonNumber": 4,
    "title": "AI in Your Organization — Choosing the Right Use Cases",
    "objective": "By the end of this lesson, you will be able to identify the activities where AI can bring real value in whichever organization is yours: a company, a public administration, a school, a hospital, a cooperative, an association, an NGO, or your own independent practice. You will know how to assess the feasibility of each opportunity, taking into account available data, the concrete constraints of your working environment, and the level of risk. You will be able to prioritize a first pilot use case and prepare your team to adopt it gradually.",
    "video": {
      "fr": "https://www.youtube.com/embed/Jw4d59hMLgk",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Mapping Use Cases: Where AI Truly Makes a Difference",
        "body": "Before adopting an AI tool, the first question is not \"which technology should we choose?\" but \"where do we have problems that AI can solve?\". The word organization here means any place where people work together: a company, a public administration, a school, a hospital, a cooperative, an association, an NGO, a team of volunteers, or even a one-person practice. Think about your working day: which repetitive tasks take up a lot of your time? Which reports come back every month with the same tables to fill in? Which information do you hunt for across dozens of files?\n\nAI creates value in three main ways. It saves time on repetitive tasks: translating a form from French into Hausa, summarizing a long meeting report, drafting a quote from a template. It improves quality: spotting errors in a list of customers, students, or beneficiaries before an important mailing. It broadens access: a community health worker consults guidance in a local language without a permanent connection, a craftsperson writes an offer in a language they barely master, a student revises with a tutor available at any hour.\n\nImagine a storekeeper who spends every morning sorting hundreds of paper forms to find available stock. A simple automated search system would save them two hours a day. The same reasoning applies to a town hall secretary, an accountant in a small business, or a teacher preparing lessons. That is exactly it: AI as an intelligent assistant, not as a replacement for human work. Start by listing five tasks that drain your energy. Those are your first candidates."
      },
      {
        "title": "Prioritizing: Choosing the Right Use Case Before You Start",
        "body": "Not all ideas are equal. A simple matrix helps you choose: place each idea on two axes — the value it brings (time saved, quality, reach) and the effort it requires (available data, cost, skills needed). The best pilot candidates are those with high value and low effort.\n\nData availability is crucial. If you want to automate the sorting of a list — customers, students, members, or beneficiaries — do you already have it in digital form? Is it consistent and complete? An NGO in the Sahel that wanted to use AI to analyze nutrition data discovered that 40% of its data had been entered differently depending on the data collector. The data had to be cleaned before any automation could take place. The same trap awaits the shop whose sales history lives in paper notebooks, or the school whose grades are scattered across ten binders.\n\nThe level of risk also matters. Using AI to draft a first version of an internal report is low risk: a human reviews and corrects it. Letting it decide alone who receives food assistance, who gets a loan, or who is hired is very high risk: one error can deprive someone of a right. Always keep a human responsible for decisions that directly affect people. It is like quality control in a cocoa, coffee, or rice cooperative: you check before you ship."
      },
      {
        "title": "Practical Constraints: Accounting for Your Own Working Reality",
        "body": "An AI tool that works perfectly at headquarters, in Dakar, Abidjan, Lima, or Manila, may be unusable in a district office without reliable electricity, in a workshop where six people share a single computer, or in a school where the signal only reaches near the window. Before choosing a solution, ask yourself three practical questions: Is the internet connection reliable? Does the tool work offline or on a slow connection? Do the people who will use it have a computer, a recent smartphone, or only a shared basic phone?\n\nLanguage is a major constraint that is often underestimated. Most AI tools perform well in French, English, or Spanish, but far less so in Hausa, Bambara, Quechua, or Haitian Creole. If your colleagues, your customers, or your beneficiaries mainly speak an under-represented language, verify that the chosen tool supports it, or plan a translation and review step in your process. AI projects for health in Niger have shown how important it is to integrate Hausa from the design stage onward.\n\nCost is often overlooked in pilot projects. A subscription may look affordable from a distance and still represent a significant share of a small organization's budget: a neighborhood association, a private clinic, a community school, a tailoring workshop. First explore free versions, reduced education pricing, or offers aimed at associations and NGOs. Finally, honestly assess the skills available in your team: even the best tool is useless if no one knows how to use it and no training is planned. A phone with Orange Money, M-Pesa, bKash, or Pix is useless if you do not know how to use it — AI is the same."
      },
      {
        "title": "Change Management: Getting Your Team to Adopt AI",
        "body": "Introducing an AI tool is first and foremost a human challenge, not a technological one. Resistance is normal and legitimate: fear of losing one's job, anxiety about something unknown, distrust of a tool that \"sometimes makes mistakes\". Your role — whether you lead a department, a class, a shop, or a field team — is to listen to these concerns, take them seriously, and lead by example.\n\nStart small with a limited pilot: one team, one task, one month. Document results honestly — what worked and what did not. Involve end users from the start: they know the problems to be solved best. A nurse, a teacher, or a customer service officer who uses AI to write daily reports will be the best ambassador if they were involved in choosing the tool.\n\nLight governance is essential: clearly define who is allowed to use the tool, for which tasks, with which data, and who checks the results. This is not bureaucracy — it is accountability. Think of a well-organized rotating savings group, a tontine in West Africa, a tanda in Mexico, or a chit fund in India: everyone knows their role, the rules are clear, and trust builds with each cycle. Scaling up comes naturally once the pilot has proven its value and the team is comfortable."
      }
    ],
    "example": {
      "title": "The NGO SahelAction Chooses Its First AI Use Case",
      "challenge": "SahelAction coordinates food aid distribution across three regions of Niger. Each month, the team spends an average of 18 hours manually sorting Excel beneficiary lists to remove duplicates, correct misspelled names, and verify eligibility criteria. Errors sometimes go unnoticed, leading to duplicate distributions or unjust exclusions.",
      "solution": "The team maps its time-consuming tasks and identifies list sorting as the priority candidate: high value (significant time savings, error reduction), low effort (the data already exists in Excel format, only one person needs to learn the tool). They choose an AI data-cleaning tool available in a free version for NGOs. A one-month pilot is launched in a single region with two agents trained in half a day. A supervisor manually validates a 10% sample of results each week.",
      "impact": "After the first month, list processing time drops from 18 hours to 4 hours — a saving of 14 hours per cycle. The error detection rate increases by 60% compared to manual sorting. Encouraged by these results, SahelAction extends the pilot to the two other regions the following month. Over six months, the organization saves the equivalent of more than 200 hours of work, which it redirects toward field visits."
    },
    "practice": {
      "title": "Building Your Mini Value / Effort Matrix",
      "instructions": [
        "On your phone, open a notes application (Notes, Keep, or even a text message to yourself) and list three repetitive tasks from your work, your studies, or your own activity — for example: writing meeting minutes, entering data, answering the same customer questions, translating documents, preparing a lesson, searching for information across files.",
        "For each of the three tasks, assign a score from 1 to 3 on two criteria: Value (1 = not very useful, 3 = very useful if automated) and Effort (1 = easy to automate, 3 = very difficult). Write these scores next to each task in your notes application.",
        "Identify the task with the highest Value score and the lowest Effort score — this is your best pilot candidate. Write one sentence explaining why you chose it and what data you would need to gather to get started."
      ],
      "observation": "As you do this exercise, you may notice that the most repetitive tasks are not always the easiest to automate — and that some apparently simple tasks hide data or language constraints. This awareness is already a key step in the responsible adoption of AI."
    },
    "quiz": [
      {
        "question": "What is the first question to ask before adopting an AI tool in an organization?",
        "options": [
          {
            "key": "A",
            "text": "What is the monthly subscription cost?"
          },
          {
            "key": "B",
            "text": "Which technology is most popular on the market?"
          },
          {
            "key": "C",
            "text": "Which concrete problems in the organization can AI help solve?"
          },
          {
            "key": "D",
            "text": "How many employees already know how to use this type of tool?"
          }
        ],
        "answer": "C",
        "explanation": "The right approach always starts from the real needs of the organization — a company, a school, an administration, a cooperative, or an association — not from the available technology. Identifying concrete problems allows you to choose the right tool and avoid adopting a solution looking for a problem."
      },
      {
        "question": "In a value / effort matrix, which type of use case should be prioritized first?",
        "options": [
          {
            "key": "A",
            "text": "High effort and high value"
          },
          {
            "key": "B",
            "text": "Low effort and low value"
          },
          {
            "key": "C",
            "text": "High effort and low value"
          },
          {
            "key": "D",
            "text": "High value and low effort"
          }
        ],
        "answer": "D",
        "explanation": "Use cases with high value and low effort are the best pilot candidates: they deliver quick, visible results with minimal resources and risk. This is the logic of 'quick wins' that build confidence before more ambitious projects."
      },
      {
        "question": "An organization wants to use AI to automatically decide — with no human validation — who receives emergency aid, a loan, or a scholarship. What is the main reason to be cautious?",
        "options": [
          {
            "key": "A",
            "text": "AI is not capable of processing lists of names."
          },
          {
            "key": "B",
            "text": "This use case carries high risk: errors can deprive people of their rights."
          },
          {
            "key": "C",
            "text": "AI tools are too expensive for this type of task."
          },
          {
            "key": "D",
            "text": "A high-speed internet connection is required first."
          }
        ],
        "answer": "B",
        "explanation": "When a decision directly affects people — aid, a loan, a hire, an admission — the risk level is high. AI can assist decision-making, but a human must remain responsible for the final validation to avoid errors with serious consequences."
      },
      {
        "question": "Among the following constraints, which one is most often underestimated when choosing an AI tool?",
        "options": [
          {
            "key": "A",
            "text": "The language of the people who will use the tool and of those it concerns"
          },
          {
            "key": "B",
            "text": "The color of the tool's interface"
          },
          {
            "key": "C",
            "text": "The number of features available in the tool"
          },
          {
            "key": "D",
            "text": "The international reputation of the tool's provider"
          }
        ],
        "answer": "A",
        "explanation": "Language is a major constraint that is often overlooked. Most AI tools are optimized for French, English, or Spanish and perform poorly in Hausa, Bambara, Quechua, or Haitian Creole. If your teams, customers, or beneficiaries work in an under-represented language, this must be verified before any deployment."
      },
      {
        "question": "What approach is recommended for introducing an AI tool to a team that has never used one?",
        "options": [
          {
            "key": "A",
            "text": "Deploy the tool immediately across the entire organization to maximize impact."
          },
          {
            "key": "B",
            "text": "Wait until all team members have completed a long training course before starting."
          },
          {
            "key": "C",
            "text": "Start with a limited pilot (one task, one team, a short period) involving the users."
          },
          {
            "key": "D",
            "text": "Let everyone freely choose their own AI tool without coordination."
          }
        ],
        "answer": "C",
        "explanation": "A limited pilot allows you to test, learn, and adjust with little risk. Involving users from the start builds trust and improves adoption. Scaling up comes naturally once results are proven and the team is trained."
      }
    ],
    "reflection": "Think of a task in your work, your studies, or your own activity that you find tedious and that comes up regularly. If you were to hand it over to an AI assistant, what data would you give it? Who would check its work? And how would you know the result is reliable? Answering these three questions is already thinking like a responsible AI manager.",
    "glossary": [
      {
        "term": "Use Case",
        "definition": "A concrete situation in which a tool or technology is used to solve a specific problem. For example: 'using AI to detect duplicates in a list of customers or beneficiaries' is a use case."
      },
      {
        "term": "ROI (Return on Investment)",
        "definition": "A measure of the benefit obtained relative to resources invested (time, money, training). A positive ROI means the project returns more than it costs. In a company, a school, or an association, ROI can include non-financial gains: time freed up, fewer errors, a service delivered faster."
      },
      {
        "term": "Pilot (POC)",
        "definition": "A small-scale test of a solution before it is deployed widely. The pilot verifies that the tool works in your real-world context, identifies problems early, and convinces teams through concrete results."
      },
      {
        "term": "Change Management",
        "definition": "The set of actions taken to help a team or organization adopt a new practice or tool. Includes communication, training, listening to resistance, and celebrating successes."
      },
      {
        "term": "Data Governance",
        "definition": "The rules and responsibilities defining how data is collected, stored, used, and protected in an organization. Good governance specifies who has access to which data, for what purposes, and with what security measures."
      },
      {
        "term": "Scaling Up",
        "definition": "The process by which a successful pilot project is extended to a larger number of users, regions, or tasks. Scaling up must be based on proven results and adequate preparation of teams and systems."
      }
    ]
  },
  "ha": {
    "id": "c4",
    "lessonNumber": 4,
    "title": "AI a Cikin Kungiyarku — Zabar Ayyukan da Suka Dace",
    "objective": "A karshen wannan darasi, za ku iya gano ayyukan da AI zai iya kawo fa'ida ta gaske a cikin kungiyar da ku ke ciki: kamfani, ma'aikatar gwamnati, makaranta, asibiti, kungiyar hadin gwiwa, kungiyar agaji, NGO, ko sana'ar ku ta kanku. Za ku san yadda ake kimanta yiwuwar kowane dama, tare da la'akari da bayanan da ake da su, kalubalen gaske na wurin aikin ku, da matakin hadari. Za ku iya zabar harka ta farko ta jarrabawa kuma ku shirya kungiyarku don karbar canjin a hankali.",
    "video": {
      "fr": "https://www.youtube.com/embed/Jw4d59hMLgk",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Zana Taswira ta Ayyuka: Inda AI Ke Canza Al'amura Gaske",
        "body": "Kafin ku karbi kayan aiki na AI, tambayar farko ba ita ce « wace fasaha za mu zaba? » ba, sai dai « ina muke da matsaloli da AI zai iya taimaka wajen warware su? ». Kalmar kungiya a nan tana nufin duk inda ake aiki tare: kamfani, ma'aikatar gwamnati, makaranta, asibiti, kungiyar hadin gwiwa, kungiyar agaji, NGO, kungiyar masu sa kai, ko ma ofishi na mutum daya. Yi tunani game da yini naku na aiki: wane ayyuka masu maimaituwa suna daukar lokaci mai yawa? Wane rahotoni ke dawowa kowane wata tare da teburin da ake cika su da hannu? Wane bayani kuke nema a cikin fayiloli da yawa?\n\nAI yana kawo fa'ida ta hanyoyi uku masu muhimmanci. Yana ceton lokaci a ayyukan maimaituwa: fassara fom daga Faransanci zuwa Hausa, takaita dogon rahoton taro, shirya kiyasin farashi daga samfuri. Yana inganta inganci: gano kurakurai a listan abokan ciniki, dalibai ko masu karbar taimako kafin aika wani abu mai muhimmanci. Yana fadada damar samun hidima: ma'aikacin kiwon lafiya na al'umma yana samun shawara a harshen gida ba tare da hadin intanet na dindindin ba, mai sana'a yana rubuta tayin aiki a harshen da bai iya sosai ba, dalibi yana karatu tare da malami da ake samu a kowane lokaci.\n\nKu yi tunanin mai adana kaya da ke rarraba takardu dari da dari kowace safiya don neman kayan da ake da su. Tsarin neman ta atomatik mai sauki zai iya ceton shi sa'o'i biyu a rana. Irin wannan tunani yana aiki ga sakataren ofishin gari, akanta na karamin kamfani, ko malami da ke shirya darussansa. Wannan shi ne komai: AI a matsayin mataimaki mai hankali, ba maye gurbin aikin dan adam ba. Fara da jera ayyuka biyar da ke sa ku gajiya. Wadannan su ne 'yan takara na farko."
      },
      {
        "title": "Fifita Zabi: Zabar Aikin da Ya Dace Kafin Farawa",
        "body": "Duk ra'ayoyi ba su da nauyi daya. Teburin sauki yana taimakonku wajen zaba: sanya kowane ra'ayi a kan gatari biyu — fa'idar da yake kawo (lokaci da aka ceta, inganci, fadin aiki) da kokarin da yake bukata (bayanan da ake da su, farashi, kwarewa da ake bukata). Mafi kyawun 'yan takara na jarrabawa su ne wadanda ke da fa'ida mai girma da kokari kadan.\n\nSamuwar bayanan yana da matukar muhimmanci. Idan kuna son rarraba lista ta atomatik — abokan ciniki, dalibai, mambobi ko masu karbar taimako — shin kuna da ita a tsarin dijital? Shin ta dace kuma cikakkiya ce? Wata NGO a Sahel da ta so ta yi amfani da AI don nazarin bayanan abinci mai gina jiki ta gano cewa 40% na bayanan ta an shigar da su daban-daban dangane da mai tattara bayanai. Dole ne a tsaftace bayanan kafin duk wani atomatik. Irin wannan matsala tana jiran shago da tarihin sayarwarsa ke cikin littattafan takarda, ko makaranta da makin dalibanta ke warwatse a cikin fayiloli goma.\n\nMatakin hadari ma yana da muhimmanci. Amfani da AI don rubuta daftarin farko na rahoto na ciki yana da hadari kadan: dan adam yana nazari kuma yana gyara. Barin sa ya yanke shawara shi kadai game da wanda zai karbi taimakon abinci, wanda zai samu rance, ko wanda za a dauka aiki yana da hadari mai yawa: kuskure daya na iya hana mutum hakkinsa. Koyaushe ku kiyaye dan adam ya zama mai alhakin yanke shawara da ke shafar mutane kai tsaye. Kamar binciken inganci a kungiyar hadin gwiwa ta cacao, kofi ko shinkafa: ana duba kafin fitar da kaya."
      },
      {
        "title": "Kalubale na Gaskiya: La'akari da Yanayin Wurin Aikinku",
        "body": "Kayan aiki na AI da ke aiki da kyau a hedkwata, a Dakar, Abidjan, Lima ko Manila, na iya zama ba shi da amfani a ofishin gundumar da ba ta da wutar lantarki mai daidaito, a wurin aiki inda mutane shida ke raba kwamfuta daya, ko a makarantar da hanyar sadarwa ke shiga kusa da taga kawai. Kafin zabar mafita, yi wa kanku wadannan tambayoyi uku masu amfani: Shin hadin intanet yana da inganci? Shin kayan aikin yana aiki ba tare da intanet ba ko a hadin sadarwa mai jinkiri? Shin mutanen da za su yi amfani da shi suna da kwamfuta, waya mai wayo, ko kuma tarho na yau da kullum da ake raba shi?\n\nHarshe babban kalubale ne da ake kaskantar da shi sosai. Yawancin kayan aiki na AI suna aiki da kyau a Faransanci, Ingilishi ko Sifaniyanci, amma sun yi kasa sosai a Hausa, Bambara, Quechua ko Kiriyol na Haiti. Idan abokan aikinku, abokan cinikinku ko masu karbar taimakonku suna magana da farko a harshen da ba a wakilta sosai, tabbatar cewa kayan aikin da aka zaba yana goyan bayan wannan harshe, ko kuma shirya matakin fassara da dubawa a cikin tsarinku. Ayyukan AI don kiwon lafiya a Nijar sun nuna muhimmancin hada Hausa tun daga matakin tsarawa.\n\nFarashi yawanci ana manta da shi a cikin ayyukan jarrabawa. Biyan kudi na wata-wata na iya zama kamar mai araha daga nesa amma ya zama babban bangare na kasafin karamar kungiya: kungiyar unguwa, karamin asibiti mai zaman kansa, makarantar al'umma, ko wurin dinki. Da farko ku binciki sigogin kyauta, farashi mai rangwame ga makarantu, ko tayin da aka nufa ga kungiyoyi da NGOs. A karshe, kimanta kwarewar da ake da ita a cikin kungiyarku da gaskiya: ko da mafi kyawun kayan aiki ba shi da amfani idan babu wanda ya san yadda ake amfani da shi kuma babu horon da aka tsara. Wayar da Orange Money, M-Pesa, bKash ko Pix ba ta da amfani idan ba ka san yadda ake amfani da ita ba — AI shi ma haka yake."
      },
      {
        "title": "Gudanar da Canjin: Sa Kungiyarku Ta Karbi AI",
        "body": "Gabatar da kayan aiki na AI, da farko dai kalubale ne na dan adam, ba na fasaha ba. Juriya abu ne na al'ada kuma na dacewar: tsoro na rasa aikin mutum, damuwa game da wani abu da ba a sani ba, rashin amana ga kayan aiki da « wani lokaci ke yin kuskure ». Rawar ku — ko kuna jagorantar sashe, aji, shago ko kungiyar aiki a filin — ita ce sauraron wadannan damuwa, daukar su da muhimmanci, da nuna misali ta aikin da ku kanku.\n\nFara da karami tare da jarrabawa iyakantacciya: kungiya daya, aiki daya, wata daya. Rubuta sakamako da aminci — abin da ya yi aiki da abin da bai yi ba. Hada masu amfani na karshe tun daga farko: su ne mafi sanin matsalolin da za a warware. Ma'aikaciyar jinya, malami ko mai kula da abokan ciniki da ke amfani da AI don rubuta rahotonsa na yau da kullum zai zama mafi kyawun jakada idan an hada shi a zabin kayan aikin.\n\nGovernansi mai sauki yana da matukar muhimmanci: a bayyana wa zai iya amfani da kayan aikin, don wane ayyuka, da wane bayani, kuma wa zai duba sakamako. Wannan ba hukuma ba ne — alhakin ne. Yi tunanin kungiyar ajiya mai jujjuyawa da aka tsara da kyau — tontine a Afirka ta Yamma, tanda a Mexico ko chit fund a Indiya: kowa ya san rawarsa, ka'idoji sun bayyana, kuma amana tana gina kanta tare da kowane zagaye. Fadada ya zo da kansa lokacin da jarrabawa ta tabbatar da kimarsa kuma kungiyar ta saba da ita."
      }
    ],
    "example": {
      "title": "NGO SahelAction Na Zabar Aikin AI Na Farko",
      "challenge": "SahelAction tana daidaita rarraban agajin abinci a yankuna uku na Nijar. Kowane wata, kungiyar tana daukar matsakaicin sa'o'i 18 wajen rarraba listan masu karbar taimako na Excel da hannu don cire maimaitawa, gyara sunaye da aka rubuta kuskure, da tabbatar da sharuddan cancanta. Wani lokaci kurakurai sun wuce ba a gane su ba, wanda ke haifar da rarraban maimaituwa ko kebancewar da ba ta dace ba.",
      "solution": "Kungiyar tana zana ayyukanta masu daukar lokaci kuma tana gano rarraban listan a matsayin 'dan takara mafi fifiko: fa'ida mai girma (adadin lokaci mai yawa, rage kurakurai), kokari kadan (bayanan sun riga sun wanzu a tsarin Excel, mutumin daya kawai ya koya yin amfani da kayan aikin). Sun zabi kayan aiki na AI na tsaftace bayanan da ake samu a sigar kyauta ga NGOs. An kaddamar da jarrabawa ta wata daya a yanki daya tare da ma'aikata biyu da aka horar da su a cikin rabin rana. Mai kula yana tabbatar da samfuri na 10% na sakamako da hannu kowane mako.",
      "impact": "Bayan watan farko, lokacin sarrafa listan ya ragu daga sa'o'i 18 zuwa sa'o'i 4 — ceton sa'o'i 14 a kowane zagaye. Adadin kurakurai da aka gano ya karu da 60% idan aka kwatanta da rarraba da hannu. Tare da wadannan sakamako, SahelAction ta fadada jarrabawa zuwa wasu yankuna biyu a watan mai zuwa. A cikin watanni shida, kungiyar ta adana aiki mai daidaituwa da sa'o'i sama da 200, wanda take sake kai zuwa ziyarar filin."
    },
    "practice": {
      "title": "Gina Kananan Teburin Fa'ida / Kokari",
      "instructions": [
        "A wayarku, bude aikace-aikacen bayanin kula (Notes, Keep, ko ko da sakon rubutu zuwa kanku) kuma jera ayyuka uku masu maimaituwa daga aikinku, karatunku ko sana'arku — misali: rubuta rahotoni na taruka, shigar da bayanai, amsa tambayoyi iri daya na abokan ciniki, fassara takardu, shirya darasi, neman bayani a cikin fayiloli.",
        "Ga kowane dayan ayyuka uku, ba da maki daga 1 zuwa 3 akan ma'auni biyu: Fa'ida (1 = ba ta da amfani sosai, 3 = mai amfani sosai idan aka atomatize) da Kokari (1 = sauki na atomatize, 3 = yana da wahala sosai). Rubuta wadannan makiya kusa da kowane aiki a cikin aikace-aikacen bayanan kulanku.",
        "Gano aikin da ke da mafi girman maki na Fa'ida da karancin maki na Kokari — wannan shine mafi kyawun 'dan takara na jarrabawarka. Rubuta jumla daya da ke bayyana dalilin da ya sa ka zabe shi da kuma wane bayani kake bukata ka tara don farawa."
      ],
      "observation": "Yayin da kuke yin wannan atisaye, za ku iya lura cewa ayyukan mafi maimaituwa ba koyaushe suke mafi sauki na atomatize ba — kuma wasu ayyukan da suke bayyana sauki suna boye kalubalen bayanan ko harshe. Wannan fahimta ta riga ta zama matakin muhimmi a karbar AI da alhakin."
    },
    "quiz": [
      {
        "question": "Menene tambayar farko da za a yi kafin karbar kayan aiki na AI a cikin kungiya?",
        "options": [
          {
            "key": "A",
            "text": "Menene farashi na biyan kudi na wata-wata?"
          },
          {
            "key": "B",
            "text": "Wace fasaha ce mafi shahara a kasuwa?"
          },
          {
            "key": "C",
            "text": "Wane matsaloli na gaske na kungiyar AI zai iya taimaka wajen warware su?"
          },
          {
            "key": "D",
            "text": "Yaya ma'aikata da suka riga suka san yadda ake amfani da irin wannan kayan aiki?"
          }
        ],
        "answer": "C",
        "explanation": "Hanyar da ta dace koyaushe tana farawa daga bukatun gaske na kungiyar — kamfani, makaranta, ma'aikatar gwamnati, kungiyar hadin gwiwa ko kungiyar agaji — ba daga fasahar da ake da ita ba. Gano matsalolin gaske yana ba ka damar zabar kayan aikin da ya dace da gujewa karbar mafita da ke neman matsala."
      },
      {
        "question": "A cikin teburin fa'ida / kokari, wane irin aiki ne ya kamata a fifita da farko?",
        "options": [
          {
            "key": "A",
            "text": "Kokari mai girma da fa'ida mai girma"
          },
          {
            "key": "B",
            "text": "Kokari kadan da fa'ida kadan"
          },
          {
            "key": "C",
            "text": "Kokari mai girma da fa'ida kadan"
          },
          {
            "key": "D",
            "text": "Fa'ida mai girma da kokari kadan"
          }
        ],
        "answer": "D",
        "explanation": "Ayyukan da ke da fa'ida mai girma da kokari kadan su ne mafi kyawun 'yan takara na jarrabawa: suna ba da sakamako mai sauri kuma bayyananne tare da karancin albarkatu da hadari. Wannan shine ma'anar 'nasarori masu sauri' da ke gina amana kafin ayyukan mafi girma."
      },
      {
        "question": "Wata kungiya tana son amfani da AI don yanke shawara kai tsaye — ba tare da tabbatarwa ta dan adam ba — game da wanda zai karbi agajin gaggawa, rance ko tallafin karatu. Menene babban dalilin yin hankali?",
        "options": [
          {
            "key": "A",
            "text": "AI ba zai iya sarrafa listan sunayen mutane ba."
          },
          {
            "key": "B",
            "text": "Wannan aiki yana da hadari mai girma: kurakurai na iya hana mutane hakkinsu."
          },
          {
            "key": "C",
            "text": "Kayan aiki na AI sun yi tsada sosai don irin wannan aiki."
          },
          {
            "key": "D",
            "text": "Da farko ana bukata hadin intanet mai sauri."
          }
        ],
        "answer": "B",
        "explanation": "Lokacin da yanke shawara ke shafar mutane kai tsaye — taimako, rance, daukar aiki, ko shigar da dalibi — matakin hadari yana da girma. AI na iya taimakawa wajen yanke shawara, amma dan adam dole ne ya kasance mai alhakin tabbatarwa ta karshe don guje wa kurakurai masu sakamakon tsanani."
      },
      {
        "question": "Daga cikin kalubale masu zuwa, wanne ake kaskantar da shi sosai lokacin zabar kayan aiki na AI?",
        "options": [
          {
            "key": "A",
            "text": "Harshen mutanen da za su yi amfani da kayan aikin da na wadanda ya shafa"
          },
          {
            "key": "B",
            "text": "Launi na fuskar kayan aikin"
          },
          {
            "key": "C",
            "text": "Adadin fasaloli da ake da su a cikin kayan aikin"
          },
          {
            "key": "D",
            "text": "Shahara ta duniya ta mai ba da kayan aikin"
          }
        ],
        "answer": "A",
        "explanation": "Harshe babban kalubale ne da ake kaskantar da shi sosai. Yawancin kayan aiki na AI an inganta su don Faransanci, Ingilishi ko Sifaniyanci kuma suna aiki da kasa sosai a Hausa, Bambara, Quechua ko Kiriyol na Haiti. Idan kungiyarku, abokan cinikinku ko masu karbar taimakon suna aiki a harshen da ba a wakilta sosai, dole ne a tabbatar da wannan kafin duk wani tura."
      },
      {
        "question": "Wace hanya ake ba da shawara don gabatar da kayan aiki na AI ga kungiyar da ba ta taba amfani da shi ba?",
        "options": [
          {
            "key": "A",
            "text": "Tura kayan aikin nan da nan a cikin dukkan kungiyar don kara tasiri."
          },
          {
            "key": "B",
            "text": "Jira har duk membobin kungiyar sun kammala horon mai tsawo kafin farawa."
          },
          {
            "key": "C",
            "text": "Fara da jarrabawa iyakantacciya (aiki daya, kungiya daya, lokaci dan gajere) tare da hada masu amfani."
          },
          {
            "key": "D",
            "text": "Bar kowa ya zabi kayan aiki nasa na AI ba tare da daidaitawa ba."
          }
        ],
        "answer": "C",
        "explanation": "Jarrabawa iyakantacciya tana ba ka damar gwaji, koyo, da daidaitawa tare da karancin hadari. Hada masu amfani tun daga farko yana gina amana kuma yana inganta karba. Fadada yana zuwa da kansa lokacin da sakamakon ya tabbata kuma kungiyar ta samu horo."
      }
    ],
    "reflection": "Yi tunani game da wani aiki na aikinku, karatunku ko sana'arku da kuke gani yana gajiyar da ku kuma yana dawowa akai-akai. Idan za ku ba mataimaki na AI wannan aiki, wane bayani za ku ba shi? Wa zai duba aikinsa? Kuma ta yaya za ku san cewa sakamakon yana da inganci? Amsawa wadannan tambayoyi uku ta riga ta nufin tunani kamar mai alhakin AI.",
    "glossary": [
      {
        "term": "Aiki (Cas d'usage)",
        "definition": "Yanayi na gaske wanda ake amfani da kayan aiki ko fasaha don warware wata matsala ta musamman. Misali: 'amfani da AI don gano maimaitawa a cikin listan abokan ciniki ko masu karbar taimako' wani aiki ne."
      },
      {
        "term": "ROI (Dawowar Jari)",
        "definition": "Auna amfanin da aka samu dangane da albarkatu da aka zuba (lokaci, kudi, horo). ROI mai kyau yana nufin aikin yana dawo da fiye da farashinta. A kamfani, makaranta ko kungiyar agaji, ROI na iya hada fa'idodin da ba na kudi ba: lokaci da aka 'yantar, karancin kurakurai, da hidima da ake bayarwa da sauri."
      },
      {
        "term": "Jarrabawa (Pilote / POC)",
        "definition": "Gwajin mafita a karamin sikeli kafin tura ta ko'ina. Jarrabawa tana tabbatar da cewa kayan aikin yana aiki a yanayin gaske, gano matsaloli da wuri, kuma ta gamsar da kungiyoyi ta hanyar sakamakon gaske."
      },
      {
        "term": "Gudanar da Canjin (Conduite du changement)",
        "definition": "Dukkan ayyukan da aka dauka don taimaka wa kungiya ko organizeyshan karbar sabuwar al'ada ko kayan aiki. Yana hada sadarwa, horo, sauraren juriya, da bikin nasarori."
      },
      {
        "term": "Governance na Bayanai (Gouvernance des données)",
        "definition": "Ka'idoji da alhakai da ke bayyana yadda ake tattara, adana, amfani da, da kare bayanan a cikin kungiya. Governance mai kyau tana bayyana wa zai iya samun dama ga wane bayani, don wane manufofi, da tare da wane matakan tsaro."
      },
      {
        "term": "Fadada (Passage à l'échelle)",
        "definition": "Tsarin da aikin jarrabawa mai nasara ke fadada zuwa yawan masu amfani, yankuna, ko ayyuka mafi yawa. Fadada dole ne ya dogara da sakamakon da aka tabbatar da kuma shirye-shiryen isasshe na kungiyoyi da tsarukan."
      }
    ]
  }
};
