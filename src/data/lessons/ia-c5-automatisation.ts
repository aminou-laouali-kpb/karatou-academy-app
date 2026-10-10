import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c5 (Automatiser sans perdre le contrôle — l'humain dans la boucle)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC5: Record<Language, LessonContent> = {
  "fr": {
    "id": "c5",
    "lessonNumber": 5,
    "title": "Automatiser sans perdre le contrôle — l'humain dans la boucle",
    "objective": "À l'issue de cette leçon, vous serez capable d'identifier les tâches répétitives de votre quotidien — au bureau, en classe, en boutique, dans un cabinet ou sur le terrain — qui se prêtent à l'automatisation. Vous saurez choisir des outils simples et accessibles pour mettre en place un premier workflow automatisé. Vous apprendrez à maintenir un contrôle humain sur les étapes sensibles et à mesurer honnêtement le temps gagné par rapport aux risques introduits.",
    "video": {
      "fr": "https://www.youtube.com/embed/YaWMmZwExj4",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Quoi automatiser — et ce qu'il vaut mieux laisser à l'humain",
        "body": "Imaginez une personne qui remplit chaque matin le même tableau : des noms, des quantités, une date, un lieu. Ce peut être une assistante qui saisit des commandes, un enseignant qui reporte les présences, une comptable indépendante qui prépare ses factures ou un agent de terrain qui note une distribution. Copier-coller, reformater, envoyer par e-mail. C'est répétitif, c'est à règles claires — c'est exactement ce qu'une automatisation peut prendre en charge à votre place.\n\nUne tâche est bonne candidate à l'automatisation si elle suit toujours les mêmes étapes, si les données d'entrée sont structurées (formulaire en ligne, tableur partagé, e-mail standardisé) et si une erreur n'a pas de conséquence grave et irréversible. Par exemple : trier les demandes reçues par messagerie selon leur type, relancer des factures impayées, confirmer des inscriptions à une session de formation, préparer un planning d'équipe à partir des disponibilités déclarées, ou générer un rapport hebdomadaire à partir d'un formulaire de collecte comme Google Forms ou KoboToolbox.\n\nEn revanche, certaines tâches ne doivent pas être automatisées sans surveillance étroite : les décisions qui touchent directement une personne (refuser une inscription, suspendre un compte client, orienter un patient), la validation de paiements importants vers des centaines de destinataires, ou toute situation où le contexte humain est décisif. Automatiser sans réfléchir, c'est comme confier le volant à quelqu'un qui ne connaît pas la route."
      },
      {
        "title": "Outils accessibles — combiner IA, no-code et tableur",
        "body": "Pas besoin d'être développeur pour automatiser. Un formulaire en ligne, un tableur partagé, une messagerie et un assistant IA couvrent déjà une grande partie des besoins. Des outils comme Google Sheets ou Excel avec des formules avancées, des plateformes no-code comme Zapier ou Make (anciennement Integromat), ou encore un assistant IA comme ChatGPT peuvent être combinés pour créer des flux de travail puissants, accessibles même depuis un téléphone avec une connexion modeste.\n\nConcrètement : la personne qui gère les inscriptions d'un centre de formation peut configurer un déclencheur (trigger) dans son tableur — dès qu'une nouvelle ligne arrive depuis le formulaire d'inscription, un récapitulatif est généré par une formule ou une requête IA, puis envoyé par e-mail au responsable. Le même montage sert à un commerçant qui suit ses commandes, à un cabinet indépendant qui relance ses factures ou à un coordinateur qui compile les remontées de ses équipes. Tout cela sans écrire une seule ligne de code.\n\nPour les environnements à faible connectivité, il existe des solutions hors ligne : des macros de tableur qui s'exécutent localement, ou des formulaires ODK et KoboToolbox collectés en mode déconnecté puis synchronisés dès que le réseau revient. Un rappel peut aussi partir par SMS via un service opérateur comme Orange SMS API quand la messagerie internet n'est pas fiable. L'important est de choisir des outils adaptés à votre réalité, pas les plus sophistiqués du marché."
      },
      {
        "title": "Garder l'humain dans la boucle — validation, qualité, responsabilité",
        "body": "Automatiser ne signifie pas abandonner le volant. Pensez à un taxi-moto qui emprunte un itinéraire connu : il peut aller vite sur le tronçon qu'il connaît bien, mais il ralentit et regarde lui-même aux carrefours dangereux. C'est le principe du human-in-the-loop : la machine fait le travail prévisible, l'humain intervient aux points critiques.\n\nConcrètement, identifiez dans votre workflow au moins un point de contrôle humain. Par exemple : l'automatisation trie les demandes reçues et pré-remplit un tableau de synthèse, mais c'est le responsable qui valide ce tableau avant qu'il parte à la direction, au client ou au bailleur. Pour les cas signalés comme « sensibles » (un usager en difficulté, un élève en décrochage, un dossier aux données incohérentes), le système doit alerter un humain plutôt que de traiter automatiquement.\n\nLa responsabilité ne se délègue pas à une machine. Si une erreur survient dans un processus automatisé — un rapport mal généré, une facture envoyée au mauvais client, une personne oubliée dans une liste — c'est toujours un être humain qui en répond. Cette conscience doit guider la conception de chaque automatisation, dans une entreprise comme dans une école, un cabinet ou une organisation de terrain."
      },
      {
        "title": "Mesurer gain et risques — temps gagné, erreurs possibles, dépendance",
        "body": "Avant de déployer une automatisation, posez-vous trois questions simples : combien de temps cette tâche prend-elle aujourd'hui ? Quelle est la probabilité qu'une erreur automatisée passe inaperçue ? Si l'outil tombe en panne, que se passe-t-il ? C'est comme évaluer si un lave-vaisselle vaut vraiment l'investissement pour un petit restaurant : il faut comparer le coût, la fiabilité et la dépendance au réparateur.\n\nDes estimations raisonnables suggèrent qu'une automatisation bien conçue peut réduire de 40 à 70 % le temps consacré à des tâches de saisie ou de compilation répétitives. Mais ce gain doit être mis en regard du temps nécessaire pour configurer, tester et maintenir l'automatisation — souvent sous-estimé. Une règle pratique : si une tâche prend moins de 5 minutes par semaine, l'automatiser n'est probablement pas prioritaire.\n\nSurveiller les risques de dépendance est essentiel. Si votre équipe dépend entièrement d'un outil gratuit dont les conditions changent du jour au lendemain, vous êtes vulnérable. Documentez toujours votre workflow, gardez une procédure manuelle de secours, et testez régulièrement que l'automatisation produit bien les résultats attendus. Une chaîne de paie automatisée qui s'arrête le jour du versement des salaires, c'est une catastrophe évitable."
      }
    ],
    "example": {
      "title": "Consolidation hebdomadaire dans un réseau de boutiques en Asie du Sud-Est",
      "challenge": "Un réseau de quinze boutiques reçoit chaque semaine entre 80 et 120 fiches de remontée remplies par les équipes de vente : ventes marquantes, réclamations de clients, ruptures de stock. La consolidation manuelle prenait environ 6 heures par semaine à une assistante administrative : récupérer les fiches dans les e-mails, les coller dans un tableur, vérifier les doublons, préparer le tableau de synthèse du comité du lundi.",
      "solution": "Le réseau remplace les envois par e-mail par un formulaire en ligne unique relié à un tableur partagé. Un scénario no-code (de type Zapier ou Make) complété par un petit script de tableur détecte les nouvelles lignes, calcule les totaux par boutique et par indicateur, puis envoie chaque lundi matin un tableau de synthèse pré-formaté au responsable des opérations. Les fiches marquées « cas sensible » (incident avec un client, problème de sécurité, rupture critique) déclenchent une alerte immédiate vers le responsable régional — sans attendre la synthèse hebdomadaire.",
      "impact": "Le temps de consolidation est passé d'environ 6 heures à moins d'1 heure par semaine (réduction d'environ 85 %), l'assistante consacrant ce temps libéré à l'analyse des tendances. Les alertes sur cas sensibles sont transmises en moins de 15 minutes au lieu de parfois 48 heures. Le responsable des opérations relit et valide le tableau avant son envoi à la direction — le point de contrôle humain est maintenu."
    },
    "practice": {
      "title": "Cartographier votre premier workflow automatisable",
      "instructions": [
        "Ouvrez le bloc-notes ou une application de notes sur votre téléphone. Décrivez en 5 à 8 lignes une tâche répétitive que vous faites au moins une fois par semaine — au travail, dans vos études, dans votre activité indépendante ou dans un engagement bénévole : précisez les données d'entrée (d'où viennent-elles ?), les étapes que vous réalisez, et le résultat final produit.",
        "Relisez votre description et entourez (ou mettez en majuscules) l'étape qui pourrait être faite automatiquement par un outil ou un assistant IA — c'est votre étape automatisable. Puis identifiez l'étape où une erreur serait grave ou où un jugement humain est indispensable — c'est votre point de contrôle humain.",
        "Estimez honnêtement : combien de minutes cette tâche vous prend-elle chaque semaine ? Si vous économisiez 70 % de ce temps, qu'en feriez-vous ? Notez votre réponse. Cela devient votre critère de succès pour évaluer si l'automatisation vaut l'effort de mise en place."
      ],
      "observation": "Vous réaliserez probablement que la plupart des tâches répétitives ont une structure claire une fois qu'on les écrit noir sur blanc — et que le point de contrôle humain est souvent plus évident qu'on ne le pensait. Gardez cette note : elle sera votre point de départ si vous décidez de mettre en place l'automatisation."
    },
    "quiz": [
      {
        "question": "Quelle caractéristique rend une tâche bonne candidate à l'automatisation ?",
        "options": [
          {
            "key": "A",
            "text": "Elle est complexe et nécessite un jugement professionnel."
          },
          {
            "key": "B",
            "text": "Elle porte sur une décision qui engage directement une personne : un client, un élève, un patient, un bénéficiaire."
          },
          {
            "key": "C",
            "text": "Elle est répétitive, suit des règles claires et utilise des données structurées."
          },
          {
            "key": "D",
            "text": "Elle est réalisée une seule fois par an et prend beaucoup de temps."
          }
        ],
        "answer": "C",
        "explanation": "Une tâche est bonne candidate à l'automatisation quand elle est répétitive, suit toujours les mêmes étapes et s'appuie sur des données structurées. Les tâches complexes nécessitant un jugement humain, ou celles qui décident du sort d'une personne, doivent rester sous contrôle humain direct."
      },
      {
        "question": "Qu'est-ce que le principe du « human-in-the-loop » ?",
        "options": [
          {
            "key": "A",
            "text": "Remplacer complètement les humains par des machines sur les tâches répétitives."
          },
          {
            "key": "B",
            "text": "Demander à un humain de répéter chaque étape automatisée pour vérification."
          },
          {
            "key": "C",
            "text": "Utiliser uniquement des outils développés par des équipes humaines."
          },
          {
            "key": "D",
            "text": "Maintenir l'intervention humaine sur les étapes critiques d'un processus automatisé."
          }
        ],
        "answer": "D",
        "explanation": "Le human-in-the-loop signifie que l'automatisation prend en charge les étapes prévisibles et répétitives, mais qu'un humain intervient aux points critiques : validation de résultats importants, traitement des cas sensibles, correction d'anomalies. La responsabilité reste toujours humaine."
      },
      {
        "question": "Une responsable veut automatiser un virement groupé vers 500 destinataires — salaires, remboursements ou aides — sans aucune validation humaine intermédiaire. Quelle est la principale préoccupation ?",
        "options": [
          {
            "key": "A",
            "text": "Les services de paiement n'acceptent jamais d'instruction automatisée."
          },
          {
            "key": "B",
            "text": "Une erreur automatisée sur des paiements à grande échelle peut avoir des conséquences graves et difficiles à corriger."
          },
          {
            "key": "C",
            "text": "Il faudrait d'abord convertir tous les montants dans une autre devise."
          },
          {
            "key": "D",
            "text": "Les destinataires préfèrent toujours recevoir un appel téléphonique."
          }
        ],
        "answer": "B",
        "explanation": "Automatiser sans validation humaine des paiements à grande échelle est risqué, qu'il s'agisse d'un virement bancaire ou d'un transfert par mobile money : une erreur de données (mauvais montant, mauvais numéro) peut affecter des centaines de personnes avant d'être détectée. Un point de contrôle humain avant l'envoi massif est indispensable pour ce type d'opération sensible."
      },
      {
        "question": "Parmi ces outils, lequel est qualifié de « no-code » ?",
        "options": [
          {
            "key": "A",
            "text": "Python avec la bibliothèque pandas."
          },
          {
            "key": "B",
            "text": "Un script Shell Linux personnalisé."
          },
          {
            "key": "C",
            "text": "Zapier ou Make (anciennement Integromat)."
          },
          {
            "key": "D",
            "text": "Une API REST développée en JavaScript."
          }
        ],
        "answer": "C",
        "explanation": "Les outils no-code comme Zapier ou Make permettent de créer des automatisations sans écrire de code, via des interfaces visuelles. Ils sont accessibles à toute personne sans formation technique et peuvent être configurés depuis un navigateur ou une application mobile."
      },
      {
        "question": "Vous avez automatisé la consolidation de vos rapports hebdomadaires. Comment évaluer honnêtement si l'automatisation est un succès ?",
        "options": [
          {
            "key": "A",
            "text": "Si l'outil est utilisé par au moins 10 collègues dans d'autres équipes."
          },
          {
            "key": "B",
            "text": "Si vous n'avez plus jamais besoin de toucher au processus manuellement."
          },
          {
            "key": "C",
            "text": "En comparant le temps gagné réellement au temps investi pour configurer et maintenir l'automatisation, et en vérifiant la qualité des résultats produits."
          },
          {
            "key": "D",
            "text": "Si le rapport est généré plus rapidement, peu importe s'il contient des erreurs."
          }
        ],
        "answer": "C",
        "explanation": "Le succès d'une automatisation se mesure en comparant honnêtement le gain de temps réel et la qualité des résultats au coût de mise en place et de maintenance. Une automatisation qui génère des erreurs non détectées ou qui tombe en panne fréquemment n'est pas un succès, même si elle est rapide."
      }
    ],
    "reflection": "Pensez à une tâche que vous faites chaque semaine et que vous trouvez fastidieuse : un rapport, une facture, une liste à mettre à jour. Est-elle vraiment répétitive et à règles claires ? Si oui, quel serait le point de contrôle humain que vous ne voudriez surtout pas supprimer ? Notez votre réponse et partagez-la avec un collègue, un camarade ou un proche pour recueillir son point de vue.",
    "glossary": [
      {
        "term": "Automatisation",
        "definition": "Le fait de configurer un système pour qu'il exécute une tâche répétitive de façon autonome, selon des règles définies à l'avance, sans intervention humaine à chaque occurrence."
      },
      {
        "term": "Human-in-the-loop",
        "definition": "Principe de conception selon lequel un être humain reste impliqué dans un processus automatisé, notamment pour valider les résultats aux étapes critiques ou traiter les cas exceptionnels."
      },
      {
        "term": "Workflow",
        "definition": "Séquence ordonnée d'étapes ou de tâches permettant d'accomplir un processus ou d'atteindre un résultat. Un workflow peut être partiellement ou totalement automatisé."
      },
      {
        "term": "No-code",
        "definition": "Catégorie d'outils qui permettent de créer des applications, des automatisations ou des intégrations sans écrire de code informatique, via des interfaces visuelles accessibles à tous."
      },
      {
        "term": "Déclencheur (trigger)",
        "definition": "Événement spécifique qui lance automatiquement une action ou un workflow. Par exemple : la réception d'un e-mail, l'ajout d'une ligne dans un tableur, ou l'arrivée d'un certain moment de la journée."
      },
      {
        "term": "Point de contrôle",
        "definition": "Étape d'un processus automatisé où un humain intervient pour vérifier, valider ou corriger le résultat avant que le processus ne continue. C'est le filet de sécurité de l'automatisation."
      }
    ]
  },
  "en": {
    "id": "c5",
    "lessonNumber": 5,
    "title": "Automating Without Losing Control — Keeping the Human in the Loop",
    "objective": "By the end of this lesson, you will be able to identify the repetitive tasks in your daily life — in an office, a classroom, a shop, a practice, or out in the field — that are suitable for automation. You will know how to choose simple, accessible tools to set up your first automated workflow. You will learn to maintain human oversight at sensitive steps and to honestly measure the time saved against the risks introduced.",
    "video": {
      "fr": "https://www.youtube.com/embed/YaWMmZwExj4",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "What to Automate — and What Is Better Left to Humans",
        "body": "Imagine someone filling in the same table every morning: names, quantities, a date, a place. It could be an assistant entering orders, a teacher recording attendance, a freelance accountant preparing invoices, or a field agent logging a distribution. Copy-paste, reformat, send by email. It is repetitive, rule-based — exactly the kind of task an automation can handle on your behalf.\n\nA task is a good candidate for automation if it always follows the same steps, if the input data is structured (an online form, a shared spreadsheet, a standardized email), and if an error would not have serious, irreversible consequences. Examples include: sorting incoming messages by request type, chasing unpaid invoices, confirming registrations for a training session, building a team schedule from declared availability, or generating a weekly report from a data-collection form such as Google Forms or KoboToolbox.\n\nOn the other hand, some tasks must not be automated without close oversight: decisions that directly affect a person (turning down an application, suspending a customer account, referring a patient), validating large payments to hundreds of recipients, or any situation where human context is decisive. Automating without thinking is like handing the wheel to someone who does not know the road."
      },
      {
        "title": "Accessible Tools — Combining AI, No-Code Platforms, and Spreadsheets",
        "body": "You do not need to be a developer to automate. An online form, a shared spreadsheet, a messaging app, and an AI assistant already cover a large share of everyday needs. Tools such as Google Sheets or Excel with advanced formulas, no-code platforms like Zapier or Make (formerly Integromat), or an AI assistant like ChatGPT can be combined to create powerful workflows, accessible even from a phone on a modest connection.\n\nIn practice: the person handling registrations at a training centre can configure a trigger in their spreadsheet — as soon as a new row arrives from the registration form, a summary is generated by a formula or an AI query, then emailed to the manager. The same setup serves a shopkeeper tracking orders, a freelance practice chasing invoices, or a coordinator compiling reports from field teams. All of this without writing a single line of code.\n\nFor low-connectivity environments, there are offline solutions: spreadsheet macros that run locally, or ODK and KoboToolbox forms collected in disconnected mode and synchronized as soon as the network returns. A reminder can also go out by SMS through a carrier service such as the Orange SMS API when internet messaging is unreliable. The important thing is to choose tools suited to your reality, not the most sophisticated ones on the market."
      },
      {
        "title": "Keeping the Human in the Loop — Validation, Quality, Accountability",
        "body": "Automating does not mean letting go of the wheel. Think of a motorbike taxi driver following a familiar route: he can go fast on the stretch he knows well, but he slows down and looks carefully at dangerous crossroads. That is the human-in-the-loop principle: the machine handles the predictable work, the human intervenes at critical points.\n\nIn practice, identify at least one human checkpoint in your workflow. For example: the automation sorts incoming requests and pre-fills a summary table, but it is the manager who validates that table before it goes to the leadership team, the client, or the donor. For cases flagged as \"sensitive\" (a service user in difficulty, a student dropping out, a file with inconsistent data), the system must alert a human rather than processing automatically.\n\nAccountability cannot be delegated to a machine. If an error occurs in an automated process — a mis-generated report, an invoice sent to the wrong client, a person left off a list — it is always a human being who is responsible. This awareness must guide the design of every automation, in a company as much as in a school, a practice, or a field organization."
      },
      {
        "title": "Measuring Gains and Risks — Time Saved, Possible Errors, Dependency",
        "body": "Before deploying an automation, ask yourself three simple questions: How much time does this task take today? How likely is it that an automated error would go unnoticed? If the tool breaks down, what happens? It is like assessing whether a dishwasher is really worth the investment for a small restaurant: you must compare cost, reliability, and dependency on the repair technician.\n\nReasonable estimates suggest that a well-designed automation can reduce time spent on repetitive data-entry or compilation tasks by 40 to 70 per cent. But this gain must be weighed against the time needed to configure, test, and maintain the automation — often underestimated. A practical rule: if a task takes less than five minutes per week, automating it is probably not a priority.\n\nMonitoring dependency risks is essential. If your team relies entirely on a free tool whose terms can change overnight, you are vulnerable. Always document your workflow, keep a manual backup procedure, and regularly test that the automation produces the expected results. An automated payroll run that stops on payday is a preventable disaster."
      }
    ],
    "example": {
      "title": "Weekly Consolidation Across a Network of Shops in Southeast Asia",
      "challenge": "A network of fifteen shops receives between 80 and 120 report forms each week, filled in by the sales teams: notable sales, customer complaints, stock shortages. Manual consolidation took an administrative assistant approximately 6 hours per week: retrieving forms from emails, pasting them into a spreadsheet, checking for duplicates, and preparing the summary table for the Monday meeting.",
      "solution": "The network replaces email submissions with a single online form connected to a shared spreadsheet. A no-code scenario (of the Zapier or Make kind) combined with a small spreadsheet script detects new rows, calculates totals by shop and by indicator, then emails a pre-formatted summary table to the operations manager every Monday morning. Forms marked \"sensitive case\" (an incident with a customer, a safety problem, a critical shortage) trigger an immediate alert to the regional manager — without waiting for the weekly synthesis.",
      "impact": "Consolidation time dropped from roughly 6 hours to under 1 hour per week (about an 85 per cent reduction), with the assistant using the freed time to analyse trends. Alerts on sensitive cases are now transmitted in under 15 minutes instead of sometimes 48 hours. The operations manager reviews and validates the table before it is sent to the leadership team — the human checkpoint is maintained."
    },
    "practice": {
      "title": "Map Your First Automatable Workflow",
      "instructions": [
        "Open your phone's notes app. Describe in 5 to 8 lines a repetitive task you perform at least once a week — at work, in your studies, in your freelance activity, or in a volunteer commitment: specify the input data (where does it come from?), the steps you carry out, and the final result produced.",
        "Re-read your description and circle (or write in capitals) the step that could be done automatically by a tool or an AI assistant — that is your automatable step. Then identify the step where an error would be serious or where human judgment is indispensable — that is your human checkpoint.",
        "Estimate honestly: how many minutes does this task take you each week? If you saved 70 per cent of that time, what would you do with it? Write down your answer. This becomes your success criterion for evaluating whether the automation is worth the effort of setting up."
      ],
      "observation": "You will probably find that most repetitive tasks have a clear structure once written down — and that the human checkpoint is often more obvious than you thought. Keep this note: it will be your starting point if you decide to implement the automation."
    },
    "quiz": [
      {
        "question": "Which characteristic makes a task a good candidate for automation?",
        "options": [
          {
            "key": "A",
            "text": "It is complex and requires professional judgment."
          },
          {
            "key": "B",
            "text": "It involves a decision that directly affects a person: a client, a student, a patient, a beneficiary."
          },
          {
            "key": "C",
            "text": "It is repetitive, follows clear rules, and uses structured data."
          },
          {
            "key": "D",
            "text": "It is performed only once a year and takes a long time."
          }
        ],
        "answer": "C",
        "explanation": "A task is a good candidate for automation when it is repetitive, always follows the same steps, and relies on structured data. Tasks requiring human judgment, or those that decide a person's fate, must remain under direct human control."
      },
      {
        "question": "What does the \"human-in-the-loop\" principle mean?",
        "options": [
          {
            "key": "A",
            "text": "Replacing humans entirely with machines for repetitive tasks."
          },
          {
            "key": "B",
            "text": "Asking a human to repeat every automated step for verification."
          },
          {
            "key": "C",
            "text": "Using only tools developed by human teams."
          },
          {
            "key": "D",
            "text": "Maintaining human intervention at critical steps of an automated process."
          }
        ],
        "answer": "D",
        "explanation": "Human-in-the-loop means automation handles the predictable and repetitive steps, but a human intervenes at critical points: validating important results, handling sensitive cases, correcting anomalies. Responsibility always remains with a human."
      },
      {
        "question": "A manager wants to automate a batch transfer to 500 recipients — salaries, reimbursements, or allowances — with no intermediate human validation. What is the main concern?",
        "options": [
          {
            "key": "A",
            "text": "Payment services never accept automated instructions."
          },
          {
            "key": "B",
            "text": "An automated error on large-scale payments can have serious and hard-to-reverse consequences."
          },
          {
            "key": "C",
            "text": "All the amounts would first need to be converted to another currency."
          },
          {
            "key": "D",
            "text": "Recipients always prefer to receive a phone call."
          }
        ],
        "answer": "B",
        "explanation": "Automating large-scale payments without human validation is risky, whether it is a bank transfer or a mobile money payout: a data error (wrong amount, wrong number) can affect hundreds of people before it is detected. A human checkpoint before the mass transfer is essential for this type of sensitive operation."
      },
      {
        "question": "Which of these tools is described as \"no-code\"?",
        "options": [
          {
            "key": "A",
            "text": "Python with the pandas library."
          },
          {
            "key": "B",
            "text": "A custom Linux Shell script."
          },
          {
            "key": "C",
            "text": "Zapier or Make (formerly Integromat)."
          },
          {
            "key": "D",
            "text": "A REST API developed in JavaScript."
          }
        ],
        "answer": "C",
        "explanation": "No-code tools like Zapier or Make allow you to create automations and integrations without writing code, through visual interfaces. They are accessible to anyone without technical training and can be configured from a browser or mobile app."
      },
      {
        "question": "You have automated your weekly report consolidation. How do you honestly assess whether the automation is a success?",
        "options": [
          {
            "key": "A",
            "text": "If the tool is used by at least 10 colleagues in other teams."
          },
          {
            "key": "B",
            "text": "If you never need to touch the process manually again."
          },
          {
            "key": "C",
            "text": "By comparing the actual time saved to the time invested in setting up and maintaining the automation, and by checking the quality of the results produced."
          },
          {
            "key": "D",
            "text": "If the report is generated faster, regardless of whether it contains errors."
          }
        ],
        "answer": "C",
        "explanation": "The success of an automation is measured by honestly comparing the real time gain and quality of results against the cost of setup and maintenance. An automation that produces undetected errors or breaks down frequently is not a success, even if it is fast."
      }
    ],
    "reflection": "Think of a task you do every week that you find tedious: a report, an invoice, a list to update. Is it truly repetitive and rule-based? If so, what would be the human checkpoint you would absolutely not want to remove? Write down your answer and share it with a colleague, a classmate, or someone close to you to get their perspective.",
    "glossary": [
      {
        "term": "Automation",
        "definition": "Configuring a system to execute a repetitive task autonomously, according to pre-defined rules, without human intervention at each occurrence."
      },
      {
        "term": "Human-in-the-loop",
        "definition": "A design principle in which a human remains involved in an automated process, particularly to validate results at critical steps or to handle exceptional cases."
      },
      {
        "term": "Workflow",
        "definition": "An ordered sequence of steps or tasks for completing a process or achieving an outcome. A workflow can be partially or fully automated."
      },
      {
        "term": "No-code",
        "definition": "A category of tools that allow you to create applications, automations, or integrations without writing computer code, through visual interfaces accessible to everyone."
      },
      {
        "term": "Trigger",
        "definition": "A specific event that automatically launches an action or workflow. Examples: receiving an email, adding a row to a spreadsheet, or reaching a certain time of day."
      },
      {
        "term": "Checkpoint",
        "definition": "A step in an automated process where a human intervenes to verify, validate, or correct the result before the process continues. It is the safety net of automation."
      }
    ]
  },
  "ha": {
    "id": "c5",
    "lessonNumber": 5,
    "title": "Yin Aiki ta Atomatik ba tare da Rasa Iko ba — Dan Adam Ya Kasance a Tsakiya",
    "objective": "Bayan kammala wannan darasi, za ku iya gano ayyukan da kuke maimaita su kowace rana — a ofis, a aji, a shago, a ofishin kwararre ko a filin aiki — wadanda suka dace da atomatik. Za ku san yadda ake zabar kayan aiki mai sauki don kafa tsarin atomatik na farko. Za ku koyi yadda ake kiyaye iko na dan adam a matakan mahimmi, kuma za ku iya aunawa gaskiya awa da aka adana idan aka kwatanta da hadarurrukan da aka samar.",
    "video": {
      "fr": "https://www.youtube.com/embed/YaWMmZwExj4",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Me Za a Yi ta Atomatik — da Abin da Ya Fi Kyau a Bar ga Dan Adam",
        "body": "Ka yi tunanin wani mutum da ke cika tebur guda kowace safe: sunaye, adadi, kwanan wata, wuri. Zai iya zama mataimakiya da ke shigar da oda, malami da ke rubuta halartar dalibai, akawu mai zaman kansa da ke shirya takardun biya, ko wakilin fili da ke rubuta rabon kaya. Kwafi-manna, sake tsarawa, aika ta email. Wannan aiki ne da ake maimaita shi, mai ka'idoji a sarari — wannan shi ne daidai abin da atomatik zai iya dauka a madadin ku.\n\nAiki yana da kyau ga atomatik idan ya bi matakai daya koyaushe, idan bayanan shigarwa suna da tsari (fom na kan layi, takardar lissafi da ake rabawa, email na kididdiga), kuma idan kuskure ba zai haifar da sakamako mai muni maras gyara ba. Misali: raba bukatun da suka zo ta sakonni bisa nau'insu, tunatarwa kan takardun biya da ba a biya ba, tabbatar da rajistar mahalarta wani horo, shirya jadawalin aikin tawaga daga lokutan da kowa ya bayyana, ko samar da rahoton mako-mako daga fom na tattara bayanai kamar Google Forms ko KoboToolbox.\n\nA gefe guda, wasu ayyuka ba za a yi su ta atomatik ba tare da kula sosai ba: shawarwarin da suka shafi mutum kai tsaye (kin rajistar wani, dakatar da asusun abokin ciniki, tura majinyaci wani wuri), tabbatar da biyan kudi mai yawa zuwa daruruwan mutane, ko kowane yanayi da mahallin dan adam ya yi muhimmanci. Yin atomatik ba tare da tunani ba, kamar ba da sitiyari ga wanda bai san hanya ba."
      },
      {
        "title": "Kayan Aiki Masu Sauki — Hada AI, No-Code da Takardar Lissafi",
        "body": "Ba kwa bukatar zama mai shirye-shirye don yin atomatik. Fom na kan layi, takardar lissafi da ake rabawa, manhajar sakonni da mataimakin AI sun riga sun rufe yawancin bukatun yau da kullum. Kayan aiki kamar Google Sheets ko Excel tare da kididdiga na gaba, dandamali na no-code kamar Zapier ko Make (tsohon Integromat), ko mataimakin AI kamar ChatGPT, za a iya hada su don kirkirar tsarin aiki mai karfi da za a iya shiga ma daga waya mai hadin intanet mai rauni.\n\nA aikace: mutumin da ke kula da rajista a cibiyar horo na iya saita mai kunna (trigger) a takardar lissafinsa — da zarar sabon layi ya iso daga fom na rajista, ana samar da takaitaccen bayani ta kididdiga ko bukatar AI, sa'an nan a aika shi ta email zuwa ga mai kula. Haka tsarin yake amfani ga dan kasuwa da ke bin odarsa, ga ofishin kwararre mai zaman kansa da ke tunatarwa kan takardun biya, ko ga mai kula da ke tattara rahotannin tawagoginsa. Duk wannan ba tare da rubuta layi daya na code ba.\n\nDon wuraren da ba su da alaka mai kyau, akwai hanyoyin da ba sa bukatar intanet: macro na takardar lissafi da ke aiki a gida, ko fom na ODK da KoboToolbox da aka tattara a yanayin da babu hadin sadarwa sannan a daidaita su da zarar cibiyar sadarwa ta dawo. Ana kuma iya aika tunatarwa ta SMS ta hidimar kamfanin sadarwa kamar Orange SMS API idan sakonnin intanet ba abin dogaro ba ne. Abin da ya fi muhimmanci shi ne zabar kayan aikin da suka dace da hakikanin yanayinku, ba mafi habakawa a kasuwa ba."
      },
      {
        "title": "Kiyaye Dan Adam a Tsakiya — Tabbatarwa, Inganci, Alhakin",
        "body": "Yin atomatik ba yana nufin barin sitiyari ba. Ka yi tunanin direban babur haya da ke bin hanyar da ya sani: zai iya tafiya da sauri a sashin da ya sani sosai, amma yana rage gudu kuma yana kallo da kansa a mararraba masu hadari. Wannan shi ne ka'idar human-in-the-loop: na'ura tana yin aikin da ake iya hasashe, dan adam yana shiga a wuraren mahimmi.\n\nA aikace, gano akalla wuri daya na binciken dan adam a tsarin aikinku. Misali: atomatik yana raba bukatun da suka zo kuma yana cika tebur na takaitawa, amma mai kula shi ne ke tabbatar da wannan tebur kafin ya tafi wajen shugabanci, abokin ciniki ko mai ba da kudi. Ga shari'o'in da aka yi wa alama a matsayin « masu hankali » (mai amfani da hidima cikin wahala, dalibi da ke barin karatu, fayil mai bayanai marasa daidaituwa), tsarin ya kamata ya sanar da dan adam maimakon ya sarrafa kai tsaye.\n\nAlhaki ba za a mika shi ga na'ura ba. Idan kuskure ya faru a tsarin atomatik — rahoto da aka kirkira ba daidai ba, takardar biya da aka aika wa abokin ciniki mara daidai, mutum da aka manta a cikin jerin — dan adam ne koyaushe ke amsawa. Wannan wayewa ta kamata ta jagoranci tsarin kowace atomatik, a kamfani kamar yadda yake a makaranta, a ofishin kwararre ko a kungiyar aikin fili."
      },
      {
        "title": "Auna Riba da Hadarurru — Lokaci da aka Adana, Kurakurai Masu Yiwuwa, Dogaro",
        "body": "Kafin fitar da atomatik, ku yi wa kanku tambayoyi uku masu sauki: Wannan aiki yana daukar nawa lokaci a yau? Menene yiwuwar kuskuren atomatik da zai wuce ba a gano shi ba? Idan kayan aiki ya lalace, me zai faru? Kamar yadda ake kimanta ko na'urar wanke kwanoni ta cancanci kudinta ga karamin gidan cin abinci: dole ne ku kwatanta farashi, amincewa, da dogaro ga mai gyara.\n\nKimanin da suka dace suna nuna cewa atomatik da aka tsara sosai na iya rage lokacin da aka kashe kan ayyukan shigar da bayanai ko tarawa maimaitawa da kashi 40 zuwa 70 cikin dari. Amma wannan riba dole ne a auna ta da lokacin da ake bukatar saita, gwaji, da kula da atomatik — galibi ana kasa da kimantawarsa. Doka mai amfani: idan aiki yana daukar kasa da minti biyar a mako, yin atomatik ba zai kasance da fifiko ba.\n\nKula da hadarin dogaro yana da muhimmanci. Idan tawagarku ta dogara gaba daya kan kayan aiki na kyauta wanda yanayin sa na iya canzawa dare daya, kuna cikin hadari. Koyaushe rubuta tsarin aikinku, kiyaye hanyar tafiya ta hannu na baya, kuma gwada atomatik akai-akai don tabbatar yana samar da sakamako da ake tsammanin. Tsarin biyan albashi ta atomatik da ya tsaya a ranar biyan albashi, lamari ne da za a iya hana shi."
      }
    ],
    "example": {
      "title": "Tattara Rahotannin Mako-mako a Cibiyar Shaguna a Kudu maso Gabashin Asiya",
      "challenge": "Cibiyar shaguna goma sha biyar tana karbar tsakanin fom na rahoto 80 zuwa 120 kowace mako, wadanda tawagogin sayarwa ke cika su: sayarwa masu muhimmanci, korafe-korafen abokan ciniki, karancin kaya. Hadawa da hannu yana daukar wata mataimakiyar gudanarwa kimanin awanni 6 a mako: tattara fom daga email, manna su a takardar lissafi, bincika kwafi biyu, shirya tebur na takaitawa don taron Litinin.",
      "solution": "Cibiyar ta maye gurbin aikawa ta email da fom guda na kan layi da aka hada da takardar lissafi da ake rabawa. Tsarin no-code (irin na Zapier ko Make) tare da karamin script na takardar lissafi yana ganowa layuka sabbi, yana lissafin jimla ta kowane shago da kowane mai nuna, sa'an nan yana aika tebur na takaitawa wanda aka shirya ta email zuwa ga mai kula da aiyuka kowace Litinin da safe. Fom din da aka yi wa alama « shari'a mai hankali » (lamari da abokin ciniki, matsalar tsaro, karancin kaya mai tsanani) suna kunna fadakarwa ta nan take zuwa ga mai kula da yanki — ba tare da jiran takaitawar mako-mako ba.",
      "impact": "Lokacin hadawa ya ragu daga kimanin awanni 6 zuwa kasa da awa daya a mako (raguwa kusan kashi 85 cikin dari), tare da mataimakiyar ta sadaukar da lokacin da ta 'yantar don nazarin yanayin kasuwa. Ana isar da fadakarwa kan shari'o'i masu hankali a kasa da minti 15 maimakon wani lokaci har sa'o'i 48. Mai kula da aiyuka yana sake karantawa da tabbatar da tebur kafin ya aika wa shugabanci — ana kiyaye binciken dan adam."
    },
    "practice": {
      "title": "Zana Tsarin Aiki na Farko Da Za a Yi ta Atomatik",
      "instructions": [
        "Bude app na rubutun bayanai a wayar ku. Bayyana a layuka 5 zuwa 8 aiki maimaitawa da kuke yi akalla sau daya a mako — a wurin aiki, a karatunku, a sana'arku ta kanku ko a aikin sa kai: fayyace bayanan shigarwa (daga ina suke zuwa?), matakan da kuke aiwatarwa, da sakamakon karshe da aka samar.",
        "Sake karanta bayananku kuma kewaye (ko rubuta da babban harafi) mataki wanda za a iya yi ta atomatik ta kayan aiki ko mataimakin AI — wannan shine mataki mai yuwuwar atomatik. Sa'an nan gano mataki inda kuskure zai yi tsanani ko inda hukuncin dan adam ya zama wajibi — wannan shine binciken dan adam ku.",
        "Yi kiyasin da aminci: wannan aiki yana daukar mintuna nawa kowace mako? Idan kun adana kashi 70 cikin dari na wannan lokaci, me za ku yi da shi? Rubuta amsar ku. Wannan ya zama ma'auni na nasarar ku don kimanta ko atomatik ya cancanci kokarin saita."
      ],
      "observation": "Za ku gano cewa yawancin ayyukan maimaitawa suna da tsari a sarari da zarar an rubuta su baki — kuma binciken dan adam galibi ya fi bayyane fiye da yadda ake tsammani. Kiyaye wannan bayanan: zai zama farkon ku idan kun yanke shawarar aiwatar da atomatik."
    },
    "quiz": [
      {
        "question": "Wace hali ce ke sa aiki ya zama mai kyau ga atomatik?",
        "options": [
          {
            "key": "A",
            "text": "Yana da rikitarwa kuma yana bukatar hukunci na kwararru."
          },
          {
            "key": "B",
            "text": "Ya shafi shawara da ta shafi mutum kai tsaye: abokin ciniki, dalibi, majinyaci, mai amfana."
          },
          {
            "key": "C",
            "text": "Yana maimaitawa, yana bin ka'idoji masu sarari, kuma yana amfani da bayanai masu tsari."
          },
          {
            "key": "D",
            "text": "Ana yin sa sau daya kawai a shekara kuma yana daukar lokaci mai yawa."
          }
        ],
        "answer": "C",
        "explanation": "Aiki yana da kyau ga atomatik idan yana maimaitawa, koyaushe yana bin matakai daya, kuma yana dogara kan bayanai masu tsari. Ayyukan da ke bukatar hukunci na dan adam, ko wadanda ke yanke makomar mutum, dole ne su kasance karkashin iko na dan adam kai tsaye."
      },
      {
        "question": "Menene ma'anar ka'idar « human-in-the-loop »?",
        "options": [
          {
            "key": "A",
            "text": "Maye gurbin mutane gaba daya da na'urori kan ayyukan maimaitawa."
          },
          {
            "key": "B",
            "text": "Tambayi dan adam don maimaita kowace mataki na atomatik don tabbatarwa."
          },
          {
            "key": "C",
            "text": "Amfani da kayan aiki da kungiyoyin dan adam suka habaka kawai."
          },
          {
            "key": "D",
            "text": "Kiyaye shiga tsakanin dan adam a matakan mahimmi na tsarin atomatik."
          }
        ],
        "answer": "D",
        "explanation": "Human-in-the-loop yana nufin atomatik yana daukar matakai masu iya hasashe da maimaitawa, amma dan adam yana shiga a wuraren mahimmi: tabbatar da sakamako masu muhimmanci, gudanar da shari'o'i masu hankali, gyara rashin daidaituwa. Alhaki koyaushe yana tare da dan adam."
      },
      {
        "question": "Wata shugaba tana son yin atomatik a kan biyan kudi gungu zuwa mutane 500 — albashi, mayar da kudi ko tallafi — ba tare da tabbatarwar dan adam ta tsakiya ba. Menene babbar damuwa?",
        "options": [
          {
            "key": "A",
            "text": "Hidimomin biyan kudi ba sa taba karbar umarnin atomatik."
          },
          {
            "key": "B",
            "text": "Kuskuren atomatik a kan biyan kudi mai yawa na iya samun sakamakon tsanani wanda ke da wahalar gyarawa."
          },
          {
            "key": "C",
            "text": "Za a fara canza dukkan adadin zuwa wata kudi ta daban."
          },
          {
            "key": "D",
            "text": "Masu karba koyaushe sun fi son karbar kiran tarho."
          }
        ],
        "answer": "B",
        "explanation": "Yin atomatik kan biyan kudi mai yawa ba tare da tabbatarwar dan adam ba yana da hadari, ko canja wurin banki ne ko biyan kudi ta wayar hannu: kuskuren bayanai (adadi mara daidai, lamba mara daidai) na iya shafar mutane dari kafin a gano shi. Bincike na dan adam kafin canja wuri mai yawa yana da wajibi ga irin wannan aiki mai hankali."
      },
      {
        "question": "Daga cikin wadannan kayan aikin, wanne ake kira « no-code »?",
        "options": [
          {
            "key": "A",
            "text": "Python tare da dakin karatu na pandas."
          },
          {
            "key": "B",
            "text": "Script na Linux Shell da aka kebance."
          },
          {
            "key": "C",
            "text": "Zapier ko Make (tsohon Integromat)."
          },
          {
            "key": "D",
            "text": "REST API da aka habaka a cikin JavaScript."
          }
        ],
        "answer": "C",
        "explanation": "Kayan aikin no-code kamar Zapier ko Make suna ba ku damar kirkirar atomatik da hadaka ba tare da rubuta code ba, ta hanyar interfaces na gani. Duk wanda ba shi da horo na fasaha na iya amfani da su kuma za a iya saita su daga burauzar ko app na wayar hannu."
      },
      {
        "question": "Kun yi atomatik hadawar rahoto na mako-mako. Ta yaya za ku kimanta gaskiya ko atomatik ya yi nasara?",
        "options": [
          {
            "key": "A",
            "text": "Idan akalla abokan aiki goma a wasu tawagogi sun yi amfani da kayan aikin."
          },
          {
            "key": "B",
            "text": "Idan ba ku taba bukatar taba tsarin da hannu kuma ba."
          },
          {
            "key": "C",
            "text": "Ta hanyar kwatanta lokacin da aka adana gaskiya da lokacin da aka saka wajen saita da kula da atomatik, da duba ingancin sakamako da aka samar."
          },
          {
            "key": "D",
            "text": "Idan rahoto ya samuwa da sauri, ko ya kunshi kurakurai ko ba."
          }
        ],
        "answer": "C",
        "explanation": "Nasarar atomatik ana auna ta ta hanyar kwatanta gaskiya riba na lokaci da ingancin sakamako da farashin saita da kula. Atomatik da ke samar da kurakurai da ba a gano su ba ko da ke lalacewa akai-akai ba nasara ba ne, ko da yana da sauri."
      }
    ],
    "reflection": "Yi tunanin aiki da kuke yi kowace mako wanda kuke ganin yana gajiyarwa: rahoto, takardar biya, ko jeri da ake sabuntawa. Shin gaskiya yana maimaitawa kuma yana da ka'idoji masu sarari? Idan haka, menene binciken dan adam da ba ku son kawar da shi? Rubuta amsar ku kuma ku raba ta da abokin aiki, abokin karatu ko wani na kusa don samun ra'ayinsa.",
    "glossary": [
      {
        "term": "Atomatik (Automation)",
        "definition": "Saita tsari don aiwatar da aiki maimaitawa kai tsaye, bisa ka'idoji da aka tsara a gaba, ba tare da shiga tsakanin dan adam a kowace lokaci ba."
      },
      {
        "term": "Human-in-the-loop",
        "definition": "Ka'idar kira wanda dan adam ke ci gaba da shiga a tsarin atomatik, musamman don tabbatar da sakamako a matakan mahimmi ko don gudanar da shari'o'i na musamman."
      },
      {
        "term": "Workflow (Tsarin Aiki)",
        "definition": "Jerin matakai ko ayyuka masu tsari don kammala tsari ko cimma sakamakon. Ana iya yin atomatik a wani bangare ko gaba dayan workflow."
      },
      {
        "term": "No-code",
        "definition": "Nau'in kayan aikin da ke ba ku damar kirkirar aikace-aikace, atomatik, ko hadaka ba tare da rubuta code na kwamfuta ba, ta hanyar interfaces na gani da kowa zai iya shiga."
      },
      {
        "term": "Mai Kunna (Trigger)",
        "definition": "Taron musamman wanda ke kunna aiki ko workflow ta atomatik. Misali: karbar email, kara layi a takardar lissafi, ko zuwan lokaci na rana."
      },
      {
        "term": "Bincike na Dan Adam (Point de contrôle)",
        "definition": "Mataki a tsarin atomatik inda dan adam ke shiga don bincika, tabbatar, ko gyara sakamakon kafin tsarin ya ci gaba. Shi ne kamafen tsaro na atomatik."
      }
    ]
  }
};
