import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module 1 « Intelligence Artificielle » — leçon c5 (Automatiser sans perdre le contrôle — l'humain dans la boucle)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const iaLessonC5: Record<Language, LessonContent> = {
  "fr": {
    "id": "c5",
    "lessonNumber": 5,
    "title": "Automatiser sans perdre le contrôle — l'humain dans la boucle",
    "objective": "À l'issue de cette leçon, vous serez capable d'identifier les tâches répétitives de votre quotidien qui se prêtent à l'automatisation. Vous saurez choisir des outils simples et accessibles pour mettre en place un premier workflow automatisé. Vous apprendrez à maintenir un contrôle humain sur les étapes sensibles et à mesurer honnêtement le temps gagné par rapport aux risques introduits.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Quoi automatiser — et ce qu'il vaut mieux laisser à l'humain",
        "body": "Imaginez un agent de terrain qui remplit chaque matin le même tableau Excel : noms de bénéficiaires, quantités distribuées, village, date. Copier-coller, reformater, envoyer par e-mail. C'est répétitif, c'est à règles claires — c'est exactement ce qu'une automatisation peut prendre en charge à votre place.\n\nUne tâche est bonne candidate à l'automatisation si elle suit toujours les mêmes étapes, si les données d'entrée sont structurées (formulaire, tableur, e-mail standardisé) et si une erreur n'a pas de conséquence grave et irréversible. Par exemple : trier des e-mails par type de demande, générer un rapport hebdomadaire à partir d'un formulaire KoboToolbox, ou envoyer un SMS de rappel via un outil comme Orange SMS API.\n\nEn revanche, certaines tâches ne doivent pas être automatisées sans surveillance étroite : décisions affectant directement un bénéficiaire vulnérable, validation de paiements importants (comme un virement M-Pesa vers des centaines de personnes), ou toute situation où le contexte local et humain est décisif. Automatiser sans réfléchir, c'est comme confier les clés de la moto à quelqu'un qui ne connaît pas la piste."
      },
      {
        "title": "Outils accessibles — combiner IA, no-code et tableur",
        "body": "Pas besoin d'être développeur pour automatiser. Des outils comme Google Sheets avec des formules avancées, des plateformes no-code comme Zapier ou Make (anciennement Integromat), ou encore un assistant IA comme ChatGPT, peuvent être combinés pour créer des flux de travail puissants et accessibles même depuis un téléphone Android avec une connexion 3G.\n\nConcrètement : un coordinateur PNUD au Niger peut configurer un déclencheur (trigger) dans Google Sheets — dès qu'une nouvelle ligne est ajoutée par un agent terrain via un formulaire Google Forms, un résumé automatique est généré par une formule ou une requête IA, puis envoyé par e-mail au superviseur. Tout cela sans écrire une seule ligne de code.\n\nPour les environnements à faible connectivité, il existe des solutions hors ligne : des scripts Excel (macros) qui s'exécutent localement, ou des formulaires ODK collectés en mode déconnecté et synchronisés dès que le réseau revient. L'important est de choisir des outils adaptés à votre réalité terrain, pas les plus sophistiqués du marché."
      },
      {
        "title": "Garder l'humain dans la boucle — validation, qualité, responsabilité",
        "body": "Automatiser ne signifie pas abandonner le volant. Pensez à un taxi-moto qui emprunte un itinéraire connu : il peut aller vite sur le tronçon qu'il connaît bien, mais il ralentit et regarde lui-même aux carrefours dangereux. C'est le principe du human-in-the-loop : la machine fait le travail prévisible, l'humain intervient aux points critiques.\n\nConcrètement, identifiez dans votre workflow au moins un point de contrôle humain. Par exemple : l'automatisation trie les formulaires terrain et pré-remplit un tableau de synthèse, mais c'est le responsable de programme qui valide ce tableau avant qu'il parte au bailleur. Pour les cas signalés comme «sensibles» (bénéficiaire en situation de détresse, données incohérentes), le système doit alerter un humain plutôt que de traiter automatiquement.\n\nLa responsabilité ne se délègue pas à une machine. Si une erreur survient dans un processus automatisé — un rapport mal généré, un bénéficiaire oublié — c'est toujours un être humain qui en répond. Cette conscience doit guider la conception de chaque automatisation dans votre organisation."
      },
      {
        "title": "Mesurer gain et risques — temps gagné, erreurs possibles, dépendance",
        "body": "Avant de déployer une automatisation, posez-vous trois questions simples : Combien de temps cette tâche prend-elle aujourd'hui ? Quelle est la probabilité qu'une erreur automatisée passe inaperçue ? Si l'outil tombe en panne, que se passe-t-il ? C'est comme évaluer si acheter un moulin à manioc collectif est vraiment plus efficace que de piler manuellement — il faut comparer coût, fiabilité et dépendance au mécanicien.\n\nDes estimations raisonnables suggèrent qu'une automatisation bien conçue peut réduire de 40 à 70 % le temps consacré à des tâches de saisie ou de compilation répétitives. Mais ce gain doit être mis en regard du temps nécessaire pour configurer, tester et maintenir l'automatisation — souvent sous-estimé. Une règle pratique : si une tâche prend moins de 5 minutes par semaine, l'automatiser n'est probablement pas prioritaire.\n\nSurveiller les risques de dépendance est essentiel. Si votre organisation dépend entièrement d'un outil gratuit dont les conditions changent du jour au lendemain, vous êtes vulnérable. Documentez toujours votre workflow, gardez une procédure manuelle de secours, et testez régulièrement que l'automatisation produit bien les résultats attendus. Une tontine numérique qui plante le jour du remboursement, c'est une catastrophe évitable."
      }
    ],
    "example": {
      "title": "Synthèse automatisée des formulaires terrain au PNUD Niger",
      "challenge": "Une équipe de coordination reçoit chaque semaine entre 80 et 120 formulaires terrain remplis par des agents dans 12 régions du Niger. La consolidation manuelle prenait environ 6 heures par semaine à une assistante de programme : copier les données depuis les e-mails, les coller dans un tableur, vérifier les doublons, générer un tableau de synthèse pour le rapport hebdomadaire.",
      "solution": "L'équipe configure un formulaire KoboToolbox connecté à Google Sheets via une exportation automatique quotidienne. Un script Google Apps Script (sans connaissance avancée en programmation) detecte les nouvelles lignes, génère automatiquement les totaux par région et par indicateur, et envoie par e-mail un tableau de synthèse pré-formaté au coordinateur chaque lundi matin. Les formulaires signalant des incidents critiques (champ «cas sensible» coché) déclenchent une alerte immédiate vers le responsable de protection — sans attendre la synthèse hebdomadaire.",
      "impact": "Le temps de consolidation est passé de 6 heures à moins d'1 heure par semaine (réduction d'environ 85 %), l'assistante consacrant ce temps libéré à l'analyse qualitative des données. Les alertes sur cas sensibles sont transmises en moins de 15 minutes au lieu de parfois 48 heures. Le responsable de programme valide le tableau avant envoi au bailleur — le point de contrôle humain est maintenu."
    },
    "practice": {
      "title": "Cartographier votre premier workflow automatisable",
      "instructions": [
        "Ouvrez le bloc-notes ou une application de notes sur votre téléphone. Décrivez en 5 à 8 lignes une tâche répétitive que vous faites au moins une fois par semaine : précisez les données d'entrée (d'où viennent-elles ?), les étapes que vous réalisez, et le résultat final produit.",
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
            "text": "Elle concerne directement la prise de décision sur des bénéficiaires vulnérables."
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
        "explanation": "Une tâche est bonne candidate à l'automatisation quand elle est répétitive, suit toujours les mêmes étapes et s'appuie sur des données structurées. Les tâches complexes nécessitant un jugement humain, ou celles qui concernent des décisions sensibles, doivent rester sous contrôle humain direct."
      },
      {
        "question": "Qu'est-ce que le principe du «human-in-the-loop» ?",
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
        "question": "Un coordinateur veut automatiser l'envoi de virements M-Pesa vers 500 bénéficiaires sans aucune validation humaine intermédiaire. Quelle est la principale préoccupation ?",
        "options": [
          {
            "key": "A",
            "text": "M-Pesa ne supporte pas les automatisations."
          },
          {
            "key": "B",
            "text": "Une erreur automatisée sur des paiements à grande échelle peut avoir des conséquences graves et difficiles à corriger."
          },
          {
            "key": "C",
            "text": "Il faudrait d'abord convertir les montants en francs CFA."
          },
          {
            "key": "D",
            "text": "Les bénéficiaires préfèrent toujours recevoir un appel téléphonique."
          }
        ],
        "answer": "B",
        "explanation": "Automatiser sans validation humaine des paiements à grande échelle est risqué : une erreur de données (mauvais montant, mauvais numéro) peut affecter des centaines de personnes avant d'être détectée. Un point de contrôle humain avant l'envoi massif est indispensable pour ce type d'opération sensible."
      },
      {
        "question": "Parmi ces outils, lequel est qualifié de «no-code» ?",
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
        "explanation": "Les outils no-code comme Zapier ou Make permettent de créer des automatisations sans écrire de code, via des interfaces visuelles. Ils sont accessibles à des professionnels sans formation technique et peuvent être configurés depuis un navigateur ou une application mobile."
      },
      {
        "question": "Vous avez automatisé la consolidation de vos rapports hebdomadaires. Comment évaluer honnêtement si l'automatisation est un succès ?",
        "options": [
          {
            "key": "A",
            "text": "Si l'outil est utilisé par au moins 10 collègues dans d'autres organisations."
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
    "reflection": "Pensez à une tâche que vous faites chaque semaine et que vous trouvez fastidieuse. Est-elle vraiment répétitive et à règles claires ? Si oui, quel serait le point de contrôle humain que vous ne voudriez surtout pas supprimer ? Notez votre réponse et partagez-la avec un collègue pour recueillir son point de vue.",
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
    "objective": "By the end of this lesson, you will be able to identify the repetitive tasks in your daily work that are suitable for automation. You will know how to choose simple, accessible tools to set up your first automated workflow. You will learn to maintain human oversight at sensitive steps and to honestly measure the time saved against the risks introduced.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "What to Automate — and What Is Better Left to Humans",
        "body": "Imagine a field agent who fills in the same Excel spreadsheet every morning: beneficiary names, quantities distributed, village, date. Copy-paste, reformat, send by email. It is repetitive, rule-based — exactly the kind of task an automation can handle on your behalf.\n\nA task is a good candidate for automation if it always follows the same steps, if the input data is structured (a form, a spreadsheet, a standardized email), and if an error would not have serious, irreversible consequences. Examples include: sorting emails by request type, generating a weekly report from a KoboToolbox form, or sending a reminder SMS via a tool like the Orange SMS API.\n\nOn the other hand, some tasks must not be automated without close oversight: decisions directly affecting a vulnerable beneficiary, validating large payments (such as an M-Pesa transfer to hundreds of people), or any situation where local and human context is decisive. Automating without thinking is like handing the motorbike keys to someone who does not know the track."
      },
      {
        "title": "Accessible Tools — Combining AI, No-Code Platforms, and Spreadsheets",
        "body": "You do not need to be a developer to automate. Tools such as Google Sheets with advanced formulas, no-code platforms like Zapier or Make (formerly Integromat), or an AI assistant like ChatGPT can be combined to create powerful workflows accessible even from an Android phone on a 3G connection.\n\nIn practice: a UNDP coordinator in Niger can configure a trigger in Google Sheets — as soon as a field agent adds a new row via a Google Forms survey, an automatic summary is generated by a formula or an AI query, then emailed to the supervisor. All of this without writing a single line of code.\n\nFor low-connectivity environments, there are offline solutions: Excel scripts (macros) that run locally, or ODK forms collected in disconnected mode and synchronized as soon as the network returns. The important thing is to choose tools suited to your field reality, not the most sophisticated ones on the market."
      },
      {
        "title": "Keeping the Human in the Loop — Validation, Quality, Accountability",
        "body": "Automating does not mean letting go of the wheel. Think of a motorbike taxi driver following a familiar route: he can go fast on the stretch he knows well, but he slows down and looks carefully at dangerous crossroads. That is the human-in-the-loop principle: the machine handles the predictable work, the human intervenes at critical points.\n\nIn practice, identify at least one human checkpoint in your workflow. For example: the automation sorts field forms and pre-fills a summary table, but it is the programme manager who validates that table before it goes to the donor. For forms flagged as 'sensitive' (a beneficiary in distress, inconsistent data), the system must alert a human rather than processing automatically.\n\nAccountability cannot be delegated to a machine. If an error occurs in an automated process — a mis-generated report, a missing beneficiary — it is always a human being who is responsible. This awareness must guide the design of every automation in your organization."
      },
      {
        "title": "Measuring Gains and Risks — Time Saved, Possible Errors, Dependency",
        "body": "Before deploying an automation, ask yourself three simple questions: How much time does this task take today? How likely is it that an automated error would go unnoticed? If the tool breaks down, what happens? It is like evaluating whether buying a collective cassava mill is really more efficient than pounding by hand — you must compare cost, reliability, and dependency on the mechanic.\n\nReasonable estimates suggest that a well-designed automation can reduce time spent on repetitive data-entry or compilation tasks by 40 to 70 per cent. But this gain must be weighed against the time needed to configure, test, and maintain the automation — often underestimated. A practical rule: if a task takes less than five minutes per week, automating it is probably not a priority.\n\nMonitoring dependency risks is essential. If your organization relies entirely on a free tool whose terms can change overnight, you are vulnerable. Always document your workflow, keep a manual backup procedure, and regularly test that the automation produces the expected results. A digital tontine that crashes on repayment day is a preventable disaster."
      }
    ],
    "example": {
      "title": "Automated Synthesis of Field Forms at UNDP Niger",
      "challenge": "A coordination team receives between 80 and 120 field forms each week, filled in by agents across 12 regions of Niger. Manual consolidation took a programme assistant approximately 6 hours per week: copying data from emails, pasting it into a spreadsheet, checking for duplicates, and generating a summary table for the weekly report.",
      "solution": "The team sets up a KoboToolbox form connected to Google Sheets via a daily automatic export. A Google Apps Script (requiring no advanced programming knowledge) detects new rows, automatically generates totals by region and indicator, and emails a pre-formatted summary table to the coordinator every Monday morning. Forms flagging critical incidents (the 'sensitive case' field checked) trigger an immediate alert to the protection manager — without waiting for the weekly synthesis.",
      "impact": "Consolidation time dropped from 6 hours to under 1 hour per week (roughly 85% reduction), with the assistant using the freed time for qualitative data analysis. Alerts on sensitive cases are now transmitted in under 15 minutes instead of sometimes 48 hours. The programme manager validates the table before sending it to the donor — the human checkpoint is maintained."
    },
    "practice": {
      "title": "Map Your First Automatable Workflow",
      "instructions": [
        "Open your phone's notes app. Describe in 5 to 8 lines a repetitive task you perform at least once a week: specify the input data (where does it come from?), the steps you carry out, and the final result produced.",
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
            "text": "It directly involves decision-making about vulnerable beneficiaries."
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
        "explanation": "A task is a good candidate for automation when it is repetitive, always follows the same steps, and relies on structured data. Tasks requiring human judgment or involving sensitive decisions must remain under direct human control."
      },
      {
        "question": "What does the 'human-in-the-loop' principle mean?",
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
        "question": "A coordinator wants to automate M-Pesa transfers to 500 beneficiaries with no intermediate human validation. What is the main concern?",
        "options": [
          {
            "key": "A",
            "text": "M-Pesa does not support automations."
          },
          {
            "key": "B",
            "text": "An automated error on large-scale payments can have serious and hard-to-reverse consequences."
          },
          {
            "key": "C",
            "text": "The amounts would first need to be converted to CFA francs."
          },
          {
            "key": "D",
            "text": "Beneficiaries always prefer to receive a phone call."
          }
        ],
        "answer": "B",
        "explanation": "Automating large-scale payments without human validation is risky: a data error (wrong amount, wrong number) can affect hundreds of people before it is detected. A human checkpoint before the mass transfer is essential for this type of sensitive operation."
      },
      {
        "question": "Which of these tools is described as 'no-code'?",
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
        "explanation": "No-code tools like Zapier or Make allow you to create automations and integrations without writing code, through visual interfaces. They are accessible to professionals without technical training and can be configured from a browser or mobile app."
      },
      {
        "question": "You have automated your weekly report consolidation. How do you honestly assess whether the automation is a success?",
        "options": [
          {
            "key": "A",
            "text": "If the tool is used by at least 10 colleagues in other organizations."
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
    "reflection": "Think of a task you do every week that you find tedious. Is it truly repetitive and rule-based? If so, what would be the human checkpoint you would absolutely not want to remove? Write down your answer and share it with a colleague to get their perspective.",
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
    "objective": "Bayan kammala wannan darasi, za ku iya gano ayyukan da kuke maimaita su kowace rana waɗanda suka dace da atomatik. Za ku san yadda ake zaɓar kayan aiki mai sauƙi don kafa tsarin atomatik na farko. Za ku koyi yadda ake kiyaye iko na ɗan adam a matakan mahimmi, kuma za ku iya aunawa gaskiya awa da aka adana idan aka kwatanta da haɗarurrukan da aka samar.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Me Za a Yi ta Atomatik — da Abin da Ya Fi Kyau a Bar ga Dan Adam",
        "body": "Ka yi tunanin wakilin filin da ke cika wannan takarda ta Excel kowace safe: sunayen masu amfana, adadin da aka raba, ƙauye, kwanan wata. Kwafi-manna, sake tsarawa, aika ta email. Wannan aiki ne da ake maimaita shi, mai ka'idoji a sarari — wannan shine daidai abin da atomatik zai iya ɗauka a madadin ku.\n\nAiki yana da kyau ga atomatik idan ya bi matakai ɗaya koyaushe, idan bayanai na shigarwa sun tsara (fom, takardar lissafi, email na ƙididdiga), kuma idan kuskure ba zai haifar da sakamakon muni maras gyara ba. Misali: raba email bisa nau'in buƙata, samar da rahoto na mako-mako daga fom na KoboToolbox, ko aika sakon SMS na tunatar ta amfani da kayan aiki kamar Orange SMS API.\n\nA gefe guda, wasu ayyuka ba za a yi su ta atomatik ba ba tare da kula sosai ba: yanke shawara da ta shafi masu amfana masu rauni kai tsaye, tabbatar da biyan kuɗi mai yawa (kamar canja wurin M-Pesa zuwa mutane ɗari), ko kowane yanayi da mahallin gida da na ɗan adam ya yi muhimmanci. Yin atomatik ba tare da tunani ba, kamar ba wanda bai san hanyar ba makullin motar yatsa."
      },
      {
        "title": "Kayan Aiki Masu Sauƙi — Haɗa AI, No-Code da Takardar Lissafi",
        "body": "Ba kwa buƙatar zama mai shirye-shirye don yin atomatik. Kayan aiki kamar Google Sheets tare da ƙididdiga na gaba, dandamali na no-code kamar Zapier ko Make (tsohon Integromat), ko mataimakiyar AI kamar ChatGPT, za a iya haɗa su don ƙirƙirar tsarin aiki mai ƙarfi da za a iya shiga ma daga wayar Android tare da haɗin 3G.\n\nA aikace: mai kula da PNUD a Nijar na iya saita mai kunna (trigger) a Google Sheets — da zarar wakilin filin ya ƙara layi sabon ta fom na Google Forms, taƙaicen atomatik yana samuwa ta ƙididdigar ko buƙatar AI, sa'an nan ya aika ta email zuwa mai kula. Duk wannan ba tare da rubuta layi ɗaya na code ba.\n\nDon wuraren da ba su da alaƙa mai kyau, akwai hanyoyin da ba su buƙatar haɗin intanet: rubutun Excel (macros) waɗanda ke aiki a gida, ko fom na ODK da aka tattara a yanayin kashe wutar da za a daidaita da zarar cibiyar sadarwa ta dawo. Abin da ya fi muhimmanci shi ne zaɓar kayan aikin da suka dace da haƙiƙanin aikin ku a filin, ba mafi haɓakawa a kasuwa ba."
      },
      {
        "title": "Kiyaye Dan Adam a Tsakiya — Tabbatarwa, Inganci, Alhakin",
        "body": "Yin atomatik ba yana nufin barin maɓallin motoci ba. Ka yi tunanin direban babura da ke bin hanyar da ya sani: zai iya tafi da sauri a sashin da ya sani sosai, amma yana rage gudu kuma yana kallo da kansa a wuraren haɗari. Wannan shine ka'idar human-in-the-loop: na'ura tana yin aikin da ake iya hasashe, ɗan adam yana shiga a wuraren mahimmi.\n\nA aikace, gano aƙalla wuri ɗaya na bincike na ɗan adam a tsarin aikin ku. Misali: atomatik yana raba fom na filin kuma yana cika tebur na taƙaice da hannu, amma mai shirin shine wanda ke tabbatar da wannan tebur kafin ya tafi wajen mai ba da kuɗi. Ga fom ɗin da aka nuna da 'shari'a mai hankali' (mai amfana a cikin wahala, bayanai marasa daidaituwa), tsarin ya kamata ya sanar da ɗan adam maimakon sarrafawa kai tsaye.\n\nAlhaki ba za a ba shi ga na'ura ba. Idan kuskure ya faru a tsarin atomatik — rahoto da aka ƙirƙira ba daidai ba, mai amfana da aka manta — ɗan adam ne koyaushe ke amsawa. Wannan wayewa ta kamata ta jagoranci tsarin kowace atomatik a ƙungiyar ku."
      },
      {
        "title": "Auna Riba da Haɗarurru — Lokaci da aka Adana, Kurakurai Masu Yiwuwa, Dogaro",
        "body": "Kafin fitar da atomatik, ku yi wa kanku tambayoyi uku masu sauƙi: Wannan aiki yana ɗaukar nawa lokaci a yau? Menene yiwuwar kuskuren atomatik da zai wuce ba a gano shi ba? Idan kayan aiki ya lalace, me zai faru? Kamar yadda ake kimanta ko siyan injin dawa na gama-gari ya fi inganci da buga da hannu — dole ne ku kwatanta farashi, amincewa, da dogaro ga mai gyara injin.\n\nKimanin da suka dace suna nuna cewa atomatik da aka tsara sosai na iya rage lokacin da aka kashe kan ayyukan shigar da bayanai ko tarawa maimaitawa da kashi 40 zuwa 70 cikin ɗari. Amma wannan riba dole ne a auna ta da lokacin da ake buƙatar saita, gwaji, da kula da atomatik — galibi ana ƙasa da kimantawarsa. Doka mai amfani: idan aiki yana ɗaukar ƙasa da minti biyar a mako, yin atomatik ba zai kasance da fifiko ba.\n\nKula da haɗarin dogaro yana da muhimmanci. Idan ƙungiyar ku ta dogara gaba ɗaya kan kayan aiki na kyauta wanda yanayin sa na iya canzawa dare ɗaya, kuna cikin haɗari. Koyaushe rubuta tsarin aikin ku, kiyaye hanyar tafiya ta hannu na baya, kuma gwada atomatik akai-akai don tabbatar yana samar da sakamako da ake tsammanin. Tontine ta dijital da ta kasa a ranar biyan bashin, lamari ne da za a iya hana shi."
      }
    ],
    "example": {
      "title": "Taƙaicen Fom na Filin ta Atomatik a PNUD Nijar",
      "challenge": "Ƙungiyar daidaitawa tana karɓar tsakanin fom na filin 80 zuwa 120 kowace mako, waɗanda wakilan ke cika su a yankuna 12 na Nijar. Haɗawa da hannu yana ɗaukar mataimakiyar shirye-shirye kimanin awanni 6 a mako: kwafi bayanai daga email, manna su a takardar lissafi, bincika kwafi biyu, samar da tebur na taƙaice don rahoto na mako-mako.",
      "solution": "Ƙungiyar ta saita fom na KoboToolbox da aka haɗa da Google Sheets ta fitar da atomatik kowace rana. Script na Google Apps (ba tare da ilimin shirye-shirye na gaba ba) yana ganowa layuka sabbi, yana samar da jimla ta yanki da mai nuna kai tsaye, kuma yana aika tebur na taƙaice wanda aka shirya a email zuwa mai kula kowace Litinin da safe. Fom ɗin da ke nuna lamura masu haɗari (filin 'shari'a mai hankali' an yi alama) suna kunna faɗakarwa ta nan take zuwa mai kula da kariya — ba tare da jiran taƙaicen mako-mako ba.",
      "impact": "Lokacin haɗawa ya ragu daga awanni 6 zuwa ƙasa da awa ɗaya a mako (raguwa kusan kashi 85 cikin ɗari), tare da mataimakiyar ta sadaukar da lokacin da ta 'yantar don binciken ingancin bayanai. Ana isar da faɗakarwa kan shari'o'in masu hankali a ƙasa da minti 15 maimakon wani lokaci har sa'o'i 48. Mai shirin yana tabbatar da tebur kafin ya aika wa mai ba da kuɗi — ana kiyaye binciken ɗan adam."
    },
    "practice": {
      "title": "Zana Tsarin Aiki na Farko Da Za a Yi ta Atomatik",
      "instructions": [
        "Buɗe app na rubutun bayanai a wayar ku. Bayyana a layuka 5 zuwa 8 aiki maimaitawa da kuke yi aƙalla sau ɗaya a mako: fayyace bayanai na shigarwa (daga ina suke zuwa?), matakai da kuke aiwatarwa, da sakamakon ƙarshe da aka samar.",
        "Sake karanta bayananku kuma kewaye (ko rubuta da babban harafi) mataki wanda za a iya yi ta atomatik ta kayan aiki ko mataimakiyar AI — wannan shine mataki mai yuwuwar atomatik. Sa'an nan gano mataki inda kuskure zai yi tsanani ko inda hukuncin ɗan adam ya zama wajibi — wannan shine binciken ɗan adam ku.",
        "Yi kiyasin da aminci: wannan aiki yana ɗaukar mintuna nawa kowace mako? Idan kun adana kashi 70 cikin ɗari na wannan lokaci, me za ku yi da shi? Rubuta amsar ku. Wannan ya zama ma'auni na nasarar ku don kimanta ko atomatik ya cancanci ƙoƙarin saita."
      ],
      "observation": "Za ku gano cewa yawancin ayyukan maimaitawa suna da tsari a sarari da zarar an rubuta su baki — kuma binciken ɗan adam galibi ya fi bayyane fiye da yadda ake tsammani. Kiyaye wannan bayanan: zai zama farkon ku idan kun yanke shawarar aiwatar da atomatik."
    },
    "quiz": [
      {
        "question": "Wace hali ce ke sa aiki ya zama mai kyau ga atomatik?",
        "options": [
          {
            "key": "A",
            "text": "Yana da rikitarwa kuma yana buƙatar hukunci na ƙwararru."
          },
          {
            "key": "B",
            "text": "Yana shafar yanke shawara game da masu amfana masu rauni kai tsaye."
          },
          {
            "key": "C",
            "text": "Yana maimaitawa, yana bin ka'idoji masu sarari, kuma yana amfani da bayanai masu tsari."
          },
          {
            "key": "D",
            "text": "Ana yin sa sau ɗaya kawai a shekara kuma yana ɗaukar lokaci mai yawa."
          }
        ],
        "answer": "C",
        "explanation": "Aiki yana da kyau ga atomatik idan yana maimaitawa, koyaushe yana bin matakai ɗaya, kuma yana dogara kan bayanai masu tsari. Ayyukan da ke buƙatar hukunci na ɗan adam, ko waɗanda suka shafi yanke shawara mai hankali, dole ne su kasance ƙarƙashin iko na ɗan adam kai tsaye."
      },
      {
        "question": "Menene ma'anar ka'idar 'human-in-the-loop'?",
        "options": [
          {
            "key": "A",
            "text": "Maye gurbin mutane gaba ɗaya da na'urori kan ayyukan maimaitawa."
          },
          {
            "key": "B",
            "text": "Tambayi ɗan adam don maimaita kowace mataki na atomatik don tabbatarwa."
          },
          {
            "key": "C",
            "text": "Amfani da kayan aiki da ƙungiyoyin ɗan adam suka haɓaka kawai."
          },
          {
            "key": "D",
            "text": "Kiyaye shiga tsakanin ɗan adam a matakan mahimmi na tsarin atomatik."
          }
        ],
        "answer": "D",
        "explanation": "Human-in-the-loop yana nufin atomatik yana ɗaukar matakai masu iya hasashe da maimaitawa, amma ɗan adam yana shiga a wuraren mahimmi: tabbatar da sakamako masu muhimmanci, gudanar da shari'o'i masu hankali, gyara rashin daidaituwa. Alhaki koyaushe yana tare da ɗan adam."
      },
      {
        "question": "Mai kula yana son yin atomatik a canja wurin M-Pesa zuwa masu amfana 500 ba tare da tabbatarwar ɗan adam ta tsakiya ba. Menene babbar damuwa?",
        "options": [
          {
            "key": "A",
            "text": "M-Pesa ba ta goyan bayan atomatik."
          },
          {
            "key": "B",
            "text": "Kuskuren atomatik a kan biyan kuɗi mai yawa na iya samun sakamakon tsanani wanda ke da wahalar gyarawa."
          },
          {
            "key": "C",
            "text": "Za a fara canza adadin zuwa franc CFA."
          },
          {
            "key": "D",
            "text": "Masu amfana koyaushe sun fi son karɓar kiran tarho."
          }
        ],
        "answer": "B",
        "explanation": "Yin atomatik kan biyan kuɗi mai yawa ba tare da tabbatarwar ɗan adam ba yana da haɗari: kuskuren bayanai (adadi mara daidai, lamba mara daidai) na iya shafar mutane ɗari kafin a gano shi. Bincike na ɗan adam kafin canja wuri mai yawa yana da wajibi ga irin wannan aiki mai hankali."
      },
      {
        "question": "Daga cikin waɗannan kayan aikin, wanne ake kira 'no-code'?",
        "options": [
          {
            "key": "A",
            "text": "Python tare da ɗakin karatu na pandas."
          },
          {
            "key": "B",
            "text": "Script na Linux Shell da aka keɓance."
          },
          {
            "key": "C",
            "text": "Zapier ko Make (tsohon Integromat)."
          },
          {
            "key": "D",
            "text": "REST API da aka haɓaka a cikin JavaScript."
          }
        ],
        "answer": "C",
        "explanation": "Kayan aikin no-code kamar Zapier ko Make suna ba ku damar ƙirƙirar atomatik da haɗaka ba tare da rubuta code ba, ta hanyar interfaces na gani. Masu ƙwararru ba tare da horo na fasaha ba na iya shiga su kuma za a iya saita su daga burauzar ko app na wayar hannu."
      },
      {
        "question": "Kun yi atomatik haɗawar rahoto na mako-mako. Ta yaya za ku kimanta gaskiya ko atomatik ya yi nasara?",
        "options": [
          {
            "key": "A",
            "text": "Idan aƙalla abokan aiki goma a wasu ƙungiyoyi sun yi amfani da kayan aikin."
          },
          {
            "key": "B",
            "text": "Idan ba ku taɓa buƙatar taɓa tsarin da hannu kuma ba."
          },
          {
            "key": "C",
            "text": "Ta hanyar kwatanta lokacin da aka adana gaskiya da lokacin da aka saka wajen saita da kula da atomatik, da duba ingancin sakamako da aka samar."
          },
          {
            "key": "D",
            "text": "Idan rahoto ya samuwa da sauri, ko ya ƙunshi kurakurai ko ba."
          }
        ],
        "answer": "C",
        "explanation": "Nasarar atomatik ana auna ta ta hanyar kwatanta gaskiya riba na lokaci da ingancin sakamako da farashin saita da kula. Atomatik da ke samar da kurakurai da ba a gano su ba ko da ke lalacewa akai-akai ba nasara ba ne, ko da yana da sauri."
      }
    ],
    "reflection": "Yi tunanin aiki da kuke yi kowace mako wanda kuke ganin yana gajiyarwa. Shin gaskiya yana maimaitawa kuma yana da ka'idoji masu sarari? Idan haka, menene binciken ɗan adam da ba ku son kawar da shi? Rubuta amsar ku kuma ku raba ta da abokin aiki don samun ra'ayinsa.",
    "glossary": [
      {
        "term": "Atomatik (Automation)",
        "definition": "Saita tsari don aiwatar da aiki maimaitawa kai tsaye, bisa ka'idoji da aka tsara a gaba, ba tare da shiga tsakanin ɗan adam a kowace lokaci ba."
      },
      {
        "term": "Human-in-the-loop",
        "definition": "Ka'idar ƙira wanda ɗan adam ke ci gaba da shiga a tsarin atomatik, musamman don tabbatar da sakamako a matakan mahimmi ko don gudanar da shari'o'i na musamman."
      },
      {
        "term": "Workflow (Tsarin Aiki)",
        "definition": "Jerin matakai ko ayyuka masu tsari don kammala tsari ko cimma sakamakon. Ana iya yin atomatik a wani bangare ko gaba ɗayan workflow."
      },
      {
        "term": "No-code",
        "definition": "Nau'in kayan aikin da ke ba ku damar ƙirƙirar aikace-aikace, atomatik, ko haɗaka ba tare da rubuta code na kwamfuta ba, ta hanyar interfaces na gani da kowa zai iya shiga."
      },
      {
        "term": "Mai Kunna (Trigger)",
        "definition": "Taron musamman wanda ke kunna aiki ko workflow ta atomatik. Misali: karɓar email, ƙara layi a takardar lissafi, ko zuwan lokaci na rana."
      },
      {
        "term": "Bincike na Ɗan Adam (Point de contrôle)",
        "definition": "Mataki a tsarin atomatik inda ɗan adam ke shiga don bincika, tabbatar, ko gyara sakamakon kafin tsarin ya ci gaba. Shi ne kamafen tsaro na atomatik."
      }
    ]
  }
};
