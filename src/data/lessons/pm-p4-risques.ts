import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Gestion de Projet » — leçon p4 (Suivre les risques — anticiper les blocages avant qu’ils n’arrivent)
// Niveau débutant. Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const pmLessonP4: Record<Language, LessonContent> = {
  "fr": {
    "id": "p4",
    "lessonNumber": 4,
    "title": "Suivre les risques — anticiper les blocages avant qu’ils n’arrivent",
    "objective": "À la fin de cette leçon, vous saurez identifier, évaluer et suivre les risques d’un projet afin d’agir AVANT qu’ils ne bloquent votre équipe. Vous saurez faire la différence entre un risque et un problème, prioriser les risques majeurs avec une matrice simple « probabilité × impact », et tenir un registre léger des risques avec un responsable et une action de mitigation pour chacun. Le tout est pensé pour un usage de terrain, sur papier ou sur téléphone, sans logiciel payant.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Qu’est-ce qu’un risque ? La différence avec un problème",
        "body": "Un risque, c’est un événement incertain qui pourrait nuire à votre projet s’il se produit. Le mot clé est « pourrait » : un risque n’est pas encore arrivé. C’est comme un nuage à l’horizon avant la pluie — vous le voyez venir, et vous avez encore le temps de rentrer le linge. La gestion des risques, c’est simplement du bon sens outillé : regarder devant soi et se préparer, au lieu d’attendre que le ciel tombe.\n\nIl ne faut pas confondre un risque et un problème. Un problème est un événement qui est déjà arrivé et qui vous bloque maintenant : le 4x4 est tombé en panne ce matin, le décaissement du bailleur n’est pas arrivé hier. Un risque, lui, est encore à venir : « le 4x4 pourrait tomber en panne pendant la tournée », « le décaissement pourrait prendre du retard ». La différence est capitale, car on n’agit pas de la même façon. Sur un problème, on réagit dans l’urgence ; sur un risque, on anticipe tranquillement, avant la crise.\n\nPourquoi s’en occuper à l’avance ? Parce qu’un risque ignoré finit souvent par devenir un problème coûteux. Anticiper coûte presque toujours moins cher que réparer. Soyons honnêtes : pour un tout petit projet d’une semaine avec deux personnes, une gestion des risques formelle serait exagérée — un coup d’œil mental suffit. Mais dès qu’un projet engage un budget, une équipe et des délais envers un bailleur ou une communauté, écrire ses risques noir sur blanc vous évite bien des nuits blanches."
      },
      {
        "title": "Les risques courants en contexte africain",
        "body": "Certains risques reviennent régulièrement dans nos projets, et les connaître à l’avance fait gagner un temps précieux. Le retard de décaissement du bailleur est l’un des plus fréquents : les fonds arrivent souvent plus tard que prévu, ce qui peut geler les achats et les paiements de l’équipe. La saison des pluies, elle, transforme les pistes en bourbiers et peut rendre un village inaccessible pendant des semaines — un calendrier qui ignore les pluies est un calendrier fragile.\n\nD’autres risques tiennent au contexte de travail lui-même. La connectivité est capricieuse : un rapport à envoyer, une plateforme de collecte de données, un paiement mobile peuvent être bloqués par une coupure de réseau ou d’électricité. La sécurité peut limiter l’accès à certaines zones et imposer de reporter une mission. Enfin, la disponibilité des personnes est souvent sous-estimée : un partenaire clé en déplacement, un agent malade, un point focal communautaire absent au moment de la distribution terrain peuvent suffire à tout retarder.\n\nLa bonne nouvelle, c’est que ces risques sont largement prévisibles. Vous les avez sans doute déjà vécus. L’erreur n’est pas de les subir une fois, mais de ne rien noter et de les subir encore. En dressant la liste des risques typiques de votre zone et de votre secteur, vous construisez une mémoire d’équipe : la prochaine fois, vous saurez déjà quoi surveiller, et vous ne repartirez pas de zéro à chaque projet."
      },
      {
        "title": "Évaluer : probabilité × impact",
        "body": "Tous les risques ne se valent pas, et vous ne pouvez pas tout surveiller en même temps. Pour prioriser, on combine deux questions simples. D’abord la probabilité : quelle est la chance que cela arrive ? Ensuite l’impact : si cela arrive, à quel point cela fait-il mal au projet ? Pour rester pratique sur le terrain, classez chacune en trois niveaux : faible, moyen, élevé. Inutile de chercher des pourcentages précis — votre jugement et celui de l’équipe suffisent.\n\nLa matrice « probabilité × impact » est juste un tableau à deux entrées qui croise ces deux niveaux. Un risque à la fois très probable et à fort impact se place en haut de votre liste : c’est une priorité, vous devez agir. Un risque peu probable et à faible impact peut être simplement noté et surveillé de loin. Entre les deux, vous jugez au cas par cas. Pensez-y comme un agriculteur : on protège d’abord le champ le plus exposé au vent et le plus précieux, pas le petit lopin abrité dont la perte serait minime.\n\nUn exemple concret : un retard de décaissement est souvent probable ET à fort impact, donc prioritaire. Une panne du vidéoprojecteur d’une formation est peut-être probable, mais l’impact reste faible si vous pouvez travailler au tableau — à surveiller, sans plus. Cet exercice de tri vous évite de vous épuiser sur des détails pendant que la vraie menace grandit dans votre dos. Concentrez votre énergie là où elle compte le plus."
      },
      {
        "title": "Mitigation et suivi",
        "body": "Une fois vos risques majeurs identifiés et triés, il faut décider quoi faire. La mitigation, ce sont les actions préventives qui réduisent soit la probabilité, soit l’impact d’un risque. Contre un retard de décaissement, on peut prévoir un petit fonds de roulement ou échelonner les achats. Contre la saison des pluies, on peut avancer une distribution terrain avant les fortes pluies. Contre une coupure de connectivité, on peut préparer une version hors ligne du formulaire et synchroniser plus tard. Quand on ne peut pas empêcher un risque, on prépare un plan de contingence : un plan B prêt à l’emploi pour le jour où le risque se réalise.\n\nMais une bonne action sans responsable reste un vœu pieux. Pour chaque risque, désignez une seule personne responsable : c’est elle qui surveille le signal d’alerte et déclenche l’action le moment venu. Notez l’ensemble dans un registre des risques léger — un simple tableau, sur papier ou sur le téléphone, avec une ligne par risque : description, probabilité, impact, action de mitigation, responsable. Pas besoin de logiciel sophistiqué ; un cahier bien tenu vaut mieux qu’un outil compliqué que personne n’ouvre.\n\nEnfin, un registre n’est utile que s’il est vivant. Prévoyez une revue régulière — par exemple cinq minutes en début de réunion d’équipe — pour relire les risques : certains ont disparu, d’autres sont apparus, certains sont devenus plus probables. C’est le réflexe du conducteur qui jette un œil au rétroviseur sans quitter la route des yeux. Ce petit rituel transforme une liste figée en véritable outil de pilotage, et vous permet d’agir avant que les blocages n’arrivent."
      }
    ],
    "example": {
      "title": "La distribution de semences menacée par les pluies et un retard de financement",
      "challenge": "Une coopérative agricole prévoit de distribuer des semences à 500 ménages d’un village avant le début des semis. Deux risques pèsent sur le projet : la tranche de financement du bailleur risque d’arriver en retard, et la saison des pluies pourrait rendre la piste du village impraticable au moment prévu pour la distribution terrain. Si l’un ou l’autre se réalise, les ménages rateront la fenêtre de semis et perdront une saison entière.",
      "solution": "L’équipe inscrit les deux risques dans un registre léger et les évalue : retard de décaissement (probabilité élevée, impact élevé) et piste coupée par les pluies (probabilité moyenne, impact élevé). Pour le financement, elle prépare un plan de contingence : un accord d’avance avec un fournisseur local pour réserver les semences sans payer immédiatement. Pour les pluies, elle avance la date de distribution de deux semaines, avant le pic pluvieux, et désigne un responsable par risque chargé de surveiller le décaissement et la météo locale.",
      "impact": "Le décaissement arrive effectivement avec environ trois semaines de retard, mais l’accord avec le fournisseur permet de sécuriser les semences à temps. La distribution a lieu avant que la piste ne devienne impraticable. Les 500 ménages reçoivent leurs semences dans la fenêtre de semis, et la coopérative estime avoir évité une perte d’environ une saison de production. Un plan B anticipé, préparé en quelques heures, a sauvé plusieurs mois de travail."
    },
    "practice": {
      "title": "Créer votre mini-registre des risques",
      "instructions": [
        "Sur une feuille de papier ou dans une note de votre téléphone, dessinez un tableau de cinq colonnes : Risque, Probabilité, Impact, Action de mitigation, Responsable. Pensez à un projet réel sur lequel vous travaillez ou que vous connaissez bien.",
        "Inscrivez 3 risques concrets de ce projet (par exemple : retard de décaissement, saison des pluies, indisponibilité d’un partenaire clé). Pour chacun, évaluez la probabilité et l’impact en choisissant un niveau parmi faible, moyen ou élevé.",
        "Pour chacun des 3 risques, écrivez UNE action de mitigation réaliste et désignez UNE personne responsable de la surveiller. Classez ensuite les risques du plus prioritaire (probabilité et impact élevés) au moins prioritaire."
      ],
      "observation": "Regardez quel risque s’est retrouvé en haut de votre liste : c’est probablement celui qui mérite votre attention dès cette semaine. Vous venez de créer, en quelques minutes et sans aucun logiciel, l’outil de pilotage qui vous permettra d’agir avant le blocage. Le secret n’est pas la beauté du tableau, mais l’habitude de le relire régulièrement et de mettre à jour ce qui a changé."
    },
    "quiz": [
      {
        "question": "Quelle est la différence entre un risque et un problème ?",
        "options": [
          {
            "key": "A",
            "text": "Un risque est grave, un problème est toujours mineur"
          },
          {
            "key": "B",
            "text": "Un risque est un événement incertain à venir, un problème est déjà arrivé et vous bloque maintenant"
          },
          {
            "key": "C",
            "text": "Un risque concerne l’argent, un problème concerne uniquement le personnel"
          },
          {
            "key": "D",
            "text": "Il n’y a aucune différence, ce sont deux mots pour la même chose"
          }
        ],
        "answer": "B",
        "explanation": "Un risque est incertain et encore à venir : il « pourrait » se produire. Un problème, lui, est déjà survenu et vous bloque maintenant. Cette distinction est essentielle car on anticipe un risque tranquillement, alors qu’on réagit à un problème dans l’urgence."
      },
      {
        "question": "Comment priorise-t-on les risques d’un projet de façon simple ?",
        "options": [
          {
            "key": "A",
            "text": "En croisant leur probabilité et leur impact dans une matrice simple"
          },
          {
            "key": "B",
            "text": "En traitant d’abord ceux qui sont les plus faciles à régler"
          },
          {
            "key": "C",
            "text": "En s’occupant uniquement du premier risque écrit sur la liste"
          },
          {
            "key": "D",
            "text": "En attendant qu’ils deviennent des problèmes pour voir lesquels sont graves"
          }
        ],
        "answer": "A",
        "explanation": "On combine deux questions : quelle est la probabilité que le risque arrive, et quel serait son impact s’il arrivait. Un risque à la fois probable et à fort impact est prioritaire. Cette matrice « probabilité × impact » concentre votre énergie là où elle compte le plus."
      },
      {
        "question": "Qu’est-ce qu’une action de mitigation ?",
        "options": [
          {
            "key": "A",
            "text": "Le fait d’ignorer un risque jusqu’à ce qu’il disparaisse tout seul"
          },
          {
            "key": "B",
            "text": "Le fait de blâmer le responsable une fois que le risque s’est réalisé"
          },
          {
            "key": "C",
            "text": "Une action préventive qui réduit la probabilité ou l’impact d’un risque"
          },
          {
            "key": "D",
            "text": "Un rapport final rédigé après la fin du projet"
          }
        ],
        "answer": "C",
        "explanation": "La mitigation regroupe les actions préventives prises à l’avance pour réduire la probabilité qu’un risque survienne ou pour en limiter l’impact. Par exemple, avancer une distribution avant la saison des pluies réduit l’impact du risque « piste coupée »."
      },
      {
        "question": "Que doit contenir au minimum un registre des risques léger ?",
        "options": [
          {
            "key": "A",
            "text": "Uniquement la date de fin du projet"
          },
          {
            "key": "B",
            "text": "Pour chaque risque : sa description, sa probabilité, son impact, une action de mitigation et un responsable"
          },
          {
            "key": "C",
            "text": "La liste complète de tous les bénéficiaires du projet"
          },
          {
            "key": "D",
            "text": "Le budget détaillé ligne par ligne de toute l’organisation"
          }
        ],
        "answer": "B",
        "explanation": "Un registre des risques léger est un simple tableau, sur papier ou sur téléphone, avec une ligne par risque : description, probabilité, impact, action de mitigation et responsable. Pas besoin de logiciel sophistiqué ; un cahier bien tenu suffit."
      },
      {
        "question": "À quoi sert un plan de contingence ?",
        "options": [
          {
            "key": "A",
            "text": "C’est un plan B prêt à l’emploi pour le jour où un risque se réalise malgré tout"
          },
          {
            "key": "B",
            "text": "C’est la liste des sanctions appliquées en cas de retard"
          },
          {
            "key": "C",
            "text": "C’est le plan de communication officiel envoyé au bailleur"
          },
          {
            "key": "D",
            "text": "C’est un document qui interdit tout changement dans le projet"
          }
        ],
        "answer": "A",
        "explanation": "Quand on ne peut pas empêcher un risque, on prépare un plan de contingence : une réponse de secours prête à être déclenchée si le risque survient. Par exemple, un accord d’avance avec un fournisseur pour sécuriser des achats malgré un retard de décaissement."
      }
    ],
    "reflection": "Pensez à un projet réel sur lequel vous travaillez en ce moment ou que vous connaissez bien. Quel est, selon vous, le risque le plus probable ET à fort impact pour ce projet, et quelle action de mitigation pourriez-vous mettre en place dès cette semaine pour agir avant qu’il ne devienne un problème ?",
    "glossary": [
      {
        "term": "Risque",
        "definition": "Un événement incertain qui pourrait nuire à votre projet s’il se produit. Contrairement à un problème, il n’est pas encore arrivé : on a donc le temps de l’anticiper."
      },
      {
        "term": "Probabilité",
        "definition": "La chance qu’un risque se réalise réellement. Sur le terrain, on l’estime simplement en trois niveaux : faible, moyenne ou élevée."
      },
      {
        "term": "Impact",
        "definition": "L’ampleur des dégâts qu’un risque causerait au projet s’il se produisait. On l’estime aussi en trois niveaux : faible, moyen ou élevé."
      },
      {
        "term": "Mitigation",
        "definition": "Les actions préventives prises à l’avance pour réduire la probabilité d’un risque ou en limiter l’impact, comme avancer une distribution avant les pluies."
      },
      {
        "term": "Registre des risques",
        "definition": "Un tableau léger, sur papier ou sur téléphone, qui liste les risques du projet avec leur probabilité, leur impact, l’action de mitigation et le responsable de chacun."
      },
      {
        "term": "Plan de contingence",
        "definition": "Un plan B préparé à l’avance et prêt à être déclenché le jour où un risque se réalise malgré les actions de mitigation."
      }
    ]
  },
  "en": {
    "id": "p4",
    "lessonNumber": 4,
    "title": "Track risks — anticipate blockages before they happen",
    "objective": "By the end of this lesson, you will be able to identify, assess, and track a project's risks so you can act BEFORE they block your team. You will know how to tell the difference between a risk and a problem, how to prioritize major risks using a simple \"probability × impact\" matrix, and how to keep a lightweight risk register with an owner and a mitigation action for each one. Everything here is designed for field use, on paper or on a phone, with no paid software.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "What is a risk? The difference from a problem",
        "body": "A risk is an uncertain event that could harm your project if it happens. The key word is \"could\": a risk has not happened yet. It is like a cloud on the horizon before the rain — you see it coming, and you still have time to bring in the washing. Managing risks is simply common sense with the right tools: looking ahead and getting ready, instead of waiting for the sky to fall.\n\nA risk should not be confused with a problem. A problem is an event that has already happened and is blocking you right now: the 4x4 broke down this morning, the donor's disbursement did not arrive yesterday. A risk, on the other hand, is still ahead: \"the 4x4 could break down during the trip\", \"the disbursement could be delayed\". The difference matters a great deal, because you do not respond the same way. With a problem, you react under pressure; with a risk, you can prepare calmly, before the crisis.\n\nWhy deal with it in advance? Because an ignored risk often turns into a costly problem. Anticipating is almost always cheaper than repairing. Let us be honest: for a tiny one-week project with two people, formal risk management would be overkill — a quick mental check is enough. But as soon as a project involves a budget, a team, and deadlines toward a donor or a community, writing down your risks in black and white will save you many sleepless nights."
      },
      {
        "title": "Common risks in the African context",
        "body": "Some risks come up again and again in our projects, and knowing them in advance saves precious time. A delay in the donor's disbursement is one of the most frequent: funds often arrive later than planned, which can freeze purchases and staff payments. The rainy season, for its part, turns tracks into mud and can make a village unreachable for weeks — a schedule that ignores the rains is a fragile schedule.\n\nOther risks come from the working context itself. Connectivity is unpredictable: a report to send, a data-collection platform, or a mobile payment can all be blocked by a network or power outage. Security can limit access to certain areas and force a mission to be postponed. Finally, people's availability is often underestimated: a key partner away on travel, a sick staff member, or a community focal point absent at the time of the field distribution can be enough to delay everything.\n\nThe good news is that these risks are largely predictable. You have probably experienced them already. The mistake is not facing them once, but writing nothing down and facing them again. By listing the typical risks of your area and your sector, you build a team memory: next time, you will already know what to watch for, and you will not start from scratch with every project."
      },
      {
        "title": "Assessing: probability × impact",
        "body": "Not all risks are equal, and you cannot watch everything at once. To prioritize, you combine two simple questions. First, the probability: what is the chance this will happen? Then, the impact: if it does happen, how badly does it hurt the project? To keep it practical in the field, rate each one on three levels: low, medium, high. There is no need to look for precise percentages — your judgment and your team's are enough.\n\nThe \"probability × impact\" matrix is just a two-way table that crosses these two levels. A risk that is both very likely and high-impact goes to the top of your list: it is a priority, you must act. A risk that is unlikely and low-impact can simply be noted and watched from a distance. In between, you judge case by case. Think of it like a farmer: you first protect the field most exposed to the wind and the most valuable one, not the small sheltered plot whose loss would be minimal.\n\nA concrete example: a disbursement delay is often likely AND high-impact, so it is a priority. A breakdown of the projector at a training may be likely, but the impact stays low if you can work at the board — worth watching, no more. This sorting exercise keeps you from wearing yourself out on details while the real threat grows behind your back. Focus your energy where it matters most."
      },
      {
        "title": "Mitigation and follow-up",
        "body": "Once your major risks are identified and sorted, you have to decide what to do. Mitigation means the preventive actions that reduce either the probability or the impact of a risk. Against a disbursement delay, you can set aside a small working fund or stagger purchases. Against the rainy season, you can move a field distribution forward, before the heavy rains. Against a connectivity outage, you can prepare an offline version of the form and sync later. When you cannot prevent a risk, you prepare a contingency plan: a ready-to-use plan B for the day the risk materializes.\n\nBut a good action without an owner remains wishful thinking. For each risk, name a single responsible person: that person watches the warning signal and triggers the action when the time comes. Record everything in a lightweight risk register — a simple table, on paper or on the phone, with one line per risk: description, probability, impact, mitigation action, owner. There is no need for sophisticated software; a well-kept notebook beats a complicated tool that no one ever opens.\n\nFinally, a register is only useful if it stays alive. Plan a regular review — for example, five minutes at the start of a team meeting — to read through the risks: some have disappeared, others have appeared, some have become more likely. It is the reflex of a driver who glances at the mirror without taking their eyes off the road. This small ritual turns a frozen list into a real steering tool, and lets you act before the blockages happen."
      }
    ],
    "example": {
      "title": "A seed distribution threatened by the rains and a funding delay",
      "challenge": "An agricultural cooperative plans to distribute seeds to 500 households in a village before the planting season begins. Two risks weigh on the project: the donor's funding tranche may arrive late, and the rainy season could make the village track impassable at the time planned for the field distribution. If either one materializes, the households will miss the planting window and lose an entire season.",
      "solution": "The team writes both risks into a lightweight register and assesses them: disbursement delay (high probability, high impact) and track cut off by the rains (medium probability, high impact). For the funding, it prepares a contingency plan: an advance agreement with a local supplier to reserve the seeds without paying immediately. For the rains, it moves the distribution date forward by two weeks, before the rainy peak, and names one owner per risk to monitor the disbursement and the local weather.",
      "impact": "The disbursement does indeed arrive about three weeks late, but the agreement with the supplier secures the seeds in time. The distribution takes place before the track becomes impassable. The 500 households receive their seeds within the planting window, and the cooperative estimates it avoided a loss of roughly one production season. An anticipated plan B, prepared in a few hours, saved several months of work."
    },
    "practice": {
      "title": "Create your mini risk register",
      "instructions": [
        "On a sheet of paper or in a note on your phone, draw a five-column table: Risk, Probability, Impact, Mitigation action, Owner. Think of a real project you are working on or know well.",
        "Write down 3 concrete risks for this project (for example: disbursement delay, rainy season, unavailability of a key partner). For each one, assess the probability and the impact by choosing a level among low, medium, or high.",
        "For each of the 3 risks, write ONE realistic mitigation action and name ONE person responsible for monitoring it. Then rank the risks from the highest priority (high probability and impact) to the lowest."
      ],
      "observation": "Look at which risk ended up at the top of your list: it is probably the one that deserves your attention this very week. You have just created, in a few minutes and with no software at all, the steering tool that will let you act before the blockage. The secret is not how beautiful the table is, but the habit of rereading it regularly and updating whatever has changed."
    },
    "quiz": [
      {
        "question": "What is the difference between a risk and a problem?",
        "options": [
          {
            "key": "A",
            "text": "A risk is serious, a problem is always minor"
          },
          {
            "key": "B",
            "text": "A risk is an uncertain event still to come, a problem has already happened and is blocking you now"
          },
          {
            "key": "C",
            "text": "A risk is about money, a problem is only about staff"
          },
          {
            "key": "D",
            "text": "There is no difference, they are two words for the same thing"
          }
        ],
        "answer": "B",
        "explanation": "A risk is uncertain and still ahead: it \"could\" happen. A problem has already occurred and is blocking you now. This distinction is essential because you anticipate a risk calmly, whereas you react to a problem under pressure."
      },
      {
        "question": "How do you prioritize a project's risks in a simple way?",
        "options": [
          {
            "key": "A",
            "text": "By crossing their probability and their impact in a simple matrix"
          },
          {
            "key": "B",
            "text": "By dealing first with the ones that are easiest to fix"
          },
          {
            "key": "C",
            "text": "By handling only the first risk written on the list"
          },
          {
            "key": "D",
            "text": "By waiting for them to become problems to see which ones are serious"
          }
        ],
        "answer": "A",
        "explanation": "You combine two questions: what is the probability the risk happens, and what would its impact be if it did. A risk that is both likely and high-impact is a priority. This \"probability × impact\" matrix focuses your energy where it matters most."
      },
      {
        "question": "What is a mitigation action?",
        "options": [
          {
            "key": "A",
            "text": "Ignoring a risk until it disappears on its own"
          },
          {
            "key": "B",
            "text": "Blaming the owner once the risk has materialized"
          },
          {
            "key": "C",
            "text": "A preventive action that reduces the probability or the impact of a risk"
          },
          {
            "key": "D",
            "text": "A final report written after the project ends"
          }
        ],
        "answer": "C",
        "explanation": "Mitigation covers the preventive actions taken in advance to reduce the probability that a risk occurs or to limit its impact. For example, moving a distribution forward before the rainy season reduces the impact of the \"track cut off\" risk."
      },
      {
        "question": "What should a lightweight risk register contain, at a minimum?",
        "options": [
          {
            "key": "A",
            "text": "Only the project's end date"
          },
          {
            "key": "B",
            "text": "For each risk: its description, its probability, its impact, a mitigation action and an owner"
          },
          {
            "key": "C",
            "text": "The complete list of all the project's beneficiaries"
          },
          {
            "key": "D",
            "text": "The detailed line-by-line budget of the whole organization"
          }
        ],
        "answer": "B",
        "explanation": "A lightweight risk register is a simple table, on paper or on the phone, with one line per risk: description, probability, impact, mitigation action and owner. There is no need for sophisticated software; a well-kept notebook is enough."
      },
      {
        "question": "What is a contingency plan for?",
        "options": [
          {
            "key": "A",
            "text": "It is a ready-to-use plan B for the day a risk materializes anyway"
          },
          {
            "key": "B",
            "text": "It is the list of penalties applied in case of delay"
          },
          {
            "key": "C",
            "text": "It is the official communication plan sent to the donor"
          },
          {
            "key": "D",
            "text": "It is a document that forbids any change in the project"
          }
        ],
        "answer": "A",
        "explanation": "When you cannot prevent a risk, you prepare a contingency plan: a backup response ready to be triggered if the risk occurs. For example, an advance agreement with a supplier to secure purchases despite a disbursement delay."
      }
    ],
    "reflection": "Think of a real project you are working on right now or know well. In your view, what is the most likely AND high-impact risk for that project, and what mitigation action could you put in place this very week to act before it becomes a problem?",
    "glossary": [
      {
        "term": "Risk",
        "definition": "An uncertain event that could harm your project if it happens. Unlike a problem, it has not occurred yet, so you still have time to anticipate it."
      },
      {
        "term": "Probability",
        "definition": "The chance that a risk will actually materialize. In the field, you estimate it simply on three levels: low, medium, or high."
      },
      {
        "term": "Impact",
        "definition": "The extent of the damage a risk would cause to the project if it occurred. It is also estimated on three levels: low, medium, or high."
      },
      {
        "term": "Mitigation",
        "definition": "The preventive actions taken in advance to reduce the probability of a risk or to limit its impact, such as moving a distribution forward before the rains."
      },
      {
        "term": "Risk register",
        "definition": "A lightweight table, on paper or on a phone, that lists the project's risks along with their probability, impact, mitigation action, and the owner of each one."
      },
      {
        "term": "Contingency plan",
        "definition": "A plan B prepared in advance and ready to be triggered on the day a risk materializes despite the mitigation actions."
      }
    ]
  },
  "ha": {
    "id": "p4",
    "lessonNumber": 4,
    "title": "Bibiyar hadari — shirya kafin matsala ta zo",
    "objective": "A ƙarshen wannan darasi, za ku iya gano, auna, da bibiyar haɗarin wani aiki domin ku ɗauki mataki KAFIN su toshe ƙungiyarku. Za ku san bambanci tsakanin haɗari da matsala, yadda ake ba da fifiko ga manyan haɗura ta amfani da sauƙin tebur na « yiwuwa × tasiri », da yadda ake riƙe ƙaramin rajistar haɗari mai sauƙi tare da mai kula da kuma matakin ragewa ga kowanne. An tsara komai don amfanin filin aiki, a kan takarda ko a wayar hannu, ba tare da manhaja mai biya ba.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Menene haɗari? Bambanci da matsala",
        "body": "Haɗari wani lamari ne mara tabbas wanda zai iya cutar da aikinku idan ya faru. Kalmar mai muhimmanci ita ce « zai iya »: haɗari bai riga ya faru ba tukuna. Yana kama da girgije a sararin sama kafin ruwan sama — kun gan shi yana zuwa, kuma kuna da lokaci har yanzu don kawo tufafi cikin gida. Sarrafa haɗari kawai hankali ne mai kayan aiki: dubawa gaba da shirya kanku, maimakon jiran sararin sama ya faɗi.\n\nKada a gauraya haɗari da matsala. Matsala wani lamari ne da ya riga ya faru kuma yana toshe ku yanzu: motar 4x4 ta lalace yau da safe, kuɗin mai ba da taimako bai zo jiya ba. Haɗari kuwa har yanzu yana gaba: « motar 4x4 na iya lalacewa yayin tafiya », « kuɗin na iya jinkiri ». Bambancin yana da muhimmanci sosai, domin ba a magance su iri ɗaya. Game da matsala, kuna amsawa cikin gaggawa; game da haɗari, kuna shirya cikin nutsuwa, kafin rikicin.\n\nMe ya sa za a magance shi tun da wuri? Domin haɗarin da aka yi watsi da shi yawanci yana zama matsala mai tsada. Shirya kafin lokaci kusan koyaushe yana da arha fiye da gyarawa. Bari mu yi gaskiya: ga ƙaramin aiki na mako guda da mutane biyu, sarrafa haɗari na hukuma zai zama wuce gona da iri — duban tunani mai sauri ya isa. Amma da zarar wani aiki ya ƙunshi kasafin kuɗi, ƙungiya, da wa'adi ga mai ba da taimako ko al'umma, rubuta haɗurranku a fili zai cece ku daga dare da yawa marasa barci."
      },
      {
        "title": "Haɗura na yau da kullun a yanayin Afirka",
        "body": "Wasu haɗura suna komawa akai-akai a cikin ayyukanmu, kuma sanin su tun da wuri yana adana lokaci mai daraja. Jinkirin kuɗin mai ba da taimako yana ɗaya daga cikin mafi yawaita: kuɗi yawanci suna zuwa daga baya fiye da yadda aka tsara, wanda zai iya daskare sayayya da biyan ƙungiyar. Lokacin damina kuwa yana mai da hanyoyi su zama caɓi kuma yana iya sa wani ƙauye ya zama ba a iya isa gare shi ba na makonni — jadawalin da ya yi watsi da ruwan sama jadawali ne mai rauni.\n\nWasu haɗura sun ginu kan yanayin aikin kansa. Haɗin yanar gizo ba shi da tabbas: rahoto da za a aika, dandalin tattara bayanai, ko biyan kuɗi ta wayar hannu duka na iya tsayawa saboda yankewar hanyar sadarwa ko wutar lantarki. Tsaro na iya iyakance shiga wasu yankuna kuma ya tilasta a dage wani aiki. A ƙarshe, kasancewar mutane yawanci ana raina ta: abokin haɗin gwiwa mai muhimmanci da yake tafiya, ma'aikaci mara lafiya, ko wakilin al'umma da ba ya nan a lokacin rabon filin aiki na iya isa su jinkirta komai.\n\nLabari mai daɗi shi ne waɗannan haɗura ana iya hasashen su sosai. Tabbas kun riga kun fuskance su. Kuskure ba shi ne fuskantar su sau ɗaya ba, amma rashin rubuta komai da sake fuskantar su. Ta hanyar lissafa haɗura na yau da kullun na yankinku da sashenku, kuna gina ƙwaƙwalwar ƙungiya: lokaci na gaba, za ku riga ku san abin da za a kula da shi, kuma ba za ku fara daga sifili a kowane aiki ba."
      },
      {
        "title": "Auna: yiwuwa × tasiri",
        "body": "Ba kowane haɗari yake daidai ba, kuma ba za ku iya kula da komai a lokaci ɗaya ba. Don ba da fifiko, kuna haɗa tambayoyi biyu masu sauƙi. Da farko yiwuwa: menene damar wannan ya faru? Sannan tasiri: idan ya faru, har zuwa wace iyaka yake cutar da aikin? Don ci gaba da amfani a filin aiki, ku rarraba kowanne zuwa matakai uku: ƙanƙanta, matsakaici, ko babba. Babu buƙatar neman ƙididdiga daidai — hukuncinku da na ƙungiyarku sun isa.\n\nTebur na « yiwuwa × tasiri » kawai tebur ne mai shiga biyu da ke haɗa waɗannan matakai biyu. Haɗari da yake da yiwuwa sosai kuma yana da babban tasiri yana zuwa saman jerinku: fifiko ne, dole ku ɗauki mataki. Haɗari da ba shi da yiwuwa kuma yana da ƙanƙantar tasiri ana iya kawai rubuta shi da kula da shi daga nesa. A tsakanin biyun, kuna hukunci a kowane hali. Ku yi tunani kamar manomi: da farko kuna kare gonar da ta fi fuskantar iska kuma mafi daraja, ba ƙaramin gonar da ke kariya wanda asararsa za ta zama ƙanƙanta ba.\n\nMisali na zahiri: jinkirin kuɗi yawanci yana da yiwuwa KUMA yana da babban tasiri, don haka fifiko ne. Lalacewar na'urar nuna bidiyo na horo na iya yiwuwa, amma tasirin ya kasance ƙanƙanta idan kuna iya aiki a kan allo — a kula da shi, ba ƙari ba. Wannan aikin tantancewa yana hana ku gajiyar da kanku kan ƙananan abubuwa yayin da haƙiƙanin barazana ke girma a bayanku. Ku mai da hankali inda ya fi muhimmanci."
      },
      {
        "title": "Ragewa da bibiya",
        "body": "Da zarar an gano manyan haɗuranku kuma an tantance su, dole ku yanke shawarar abin da za a yi. Ragewa ita ce matakan riga-kafi da ke rage ko dai yiwuwa ko tasiri na wani haɗari. Game da jinkirin kuɗi, ana iya ware ƙaramin asusun aiki ko raba sayayya gunduwa-gunduwa. Game da lokacin damina, ana iya gabatar da rabon filin aiki kafin ruwan sama mai ƙarfi. Game da yankewar haɗin yanar gizo, ana iya shirya sigar fam ɗin da ke aiki ba tare da intanet ba sannan a daidaita daga baya. Idan ba za ku iya hana haɗari ba, kuna shirya shirin gaggawa: shirin B a shirye don ranar da haɗarin ya faru.\n\nAma kyakkyawan mataki ba tare da mai kula ba ya kasance buri ne kawai. Ga kowane haɗari, ku naɗa mutum guda mai alhakin: shi ne ke kula da siginar gargaɗi kuma yake fara mataki idan lokaci ya yi. Ku rubuta komai a cikin ƙaramin rajistar haɗari mai sauƙi — tebur mai sauƙi, a takarda ko a wayar hannu, da layi ɗaya ga kowane haɗari: bayani, yiwuwa, tasiri, matakin ragewa, mai kula. Babu buƙatar manhaja mai rikitarwa; littafin rubutu da aka kula da shi ya fi kayan aiki mai wahala da babu wanda ke buɗe shi.\n\nA ƙarshe, rajista yana da amfani ne kawai idan yana da rai. Ku tsara bita na yau da kullun — misali minti biyar a farkon taron ƙungiya — don sake karanta haɗura: wasu sun ɓace, wasu sun bayyana, wasu sun zama masu yiwuwa fiye da da. Wannan shi ne dabi'ar direba da ke duban madubin baya ba tare da cire idanu daga hanya ba. Wannan ƙaramin al'ada yana mai da jeri da ya daskare zuwa ainihin kayan aikin shugabanci, kuma yana ba ku damar ɗaukar mataki kafin matsaloli su zo."
      }
    ],
    "example": {
      "title": "Rabon iri da ruwan sama da jinkirin kuɗi suka yi wa barazana",
      "challenge": "Wata ƙungiyar haɗin gwiwa ta noma ta shirya rabon iri ga gidaje 500 a wani ƙauye kafin fara shuka. Haɗura biyu sun yi wa aikin nauyi: kashin kuɗin mai ba da taimako na iya zuwa da jinkiri, kuma lokacin damina na iya sa hanyar ƙauyen ta zama ba a iya bi ba a lokacin da aka tsara don rabon filin aiki. Idan ɗaya daga cikinsu ya faru, gidaje za su rasa lokacin shuka kuma su rasa dukan kakar.",
      "solution": "Ƙungiyar ta rubuta haɗura biyun a cikin ƙaramin rajista kuma ta tantance su: jinkirin kuɗi (yiwuwa babba, tasiri babba) da hanya da ruwan sama ta yanke (yiwuwa matsakaici, tasiri babba). Game da kuɗi, ta shirya shirin gaggawa: yarjejeniyar gaba da wani mai sayarwa na gida don ajiye iri ba tare da biya nan take ba. Game da ruwan sama, ta gabatar da ranar rabo da makonni biyu, kafin ƙololuwar ruwa, kuma ta naɗa mai kula guda ga kowane haɗari da zai kula da kuɗi da yanayin yanki.",
      "impact": "Kuɗin sun zo lallai da kusan makonni uku na jinkiri, amma yarjejeniyar da mai sayarwa ta ba da damar samun iri a kan lokaci. Rabon ya faru kafin hanyar ta zama ba a iya bi ba. Gidaje 500 sun karɓi iri a cikin lokacin shuka, kuma ƙungiyar ta ƙiyasta cewa ta guji asarar kusan kakar samarwa guda. Shirin B da aka shirya tun da wuri, a cikin sa'o'i kaɗan, ya cece watanni da yawa na aiki."
    },
    "practice": {
      "title": "Ƙirƙira ƙaramin rajistar haɗarinku",
      "instructions": [
        "A kan takardar takarda ko a cikin rubutu a wayar hannunku, ku zana tebur mai shafuka biyar: Haɗari, Yiwuwa, Tasiri, Matakin ragewa, Mai kula. Ku yi tunani kan aiki na gaskiya da kuke kai ko kuka sani sosai.",
        "Ku rubuta haɗura 3 na zahiri na wannan aiki (misali: jinkirin kuɗi, lokacin damina, rashin kasancewar abokin haɗin gwiwa mai muhimmanci). Ga kowanne, ku tantance yiwuwa da tasiri ta zaɓar matakin daga ƙanƙanta, matsakaici, ko babba.",
        "Ga kowane haɗari na 3, ku rubuta matakin ragewa GUDA mai gaskiya kuma ku naɗa mutum GUDA mai alhakin kula da shi. Sannan ku tsara haɗura daga mafi fifiko (yiwuwa da tasiri babba) zuwa mafi ƙanƙantar fifiko."
      ],
      "observation": "Ku duba wane haɗari ya zo saman jerinku: tabbas shi ne wanda ya cancanci hankalinku tun wannan mako. Kun ƙirƙira yanzu, a cikin minti kaɗan kuma ba tare da manhaja ko kaɗan ba, kayan aikin shugabanci da zai ba ku damar ɗaukar mataki kafin matsalar. Sirrin ba shi ne kyawun teburin ba, amma al'adar sake karanta shi akai-akai da sabunta abin da ya canza."
    },
    "quiz": [
      {
        "question": "Menene bambanci tsakanin haɗari da matsala?",
        "options": [
          {
            "key": "A",
            "text": "Haɗari yana da tsanani, matsala koyaushe ƙarama ce"
          },
          {
            "key": "B",
            "text": "Haɗari lamari ne mara tabbas mai zuwa, matsala kuwa ta riga ta faru kuma tana toshe ku yanzu"
          },
          {
            "key": "C",
            "text": "Haɗari yana da alaƙa da kuɗi, matsala kuwa tana da alaƙa da ma'aikata kawai"
          },
          {
            "key": "D",
            "text": "Babu bambanci, kalmomi biyu ne na abu ɗaya"
          }
        ],
        "answer": "B",
        "explanation": "Haɗari mara tabbas ne kuma har yanzu yana gaba: « zai iya » faruwa. Matsala kuwa ta riga ta faru kuma tana toshe ku yanzu. Wannan bambancin yana da muhimmanci domin kuna shirya haɗari cikin nutsuwa, alhalin kuna amsa matsala cikin gaggawa."
      },
      {
        "question": "Ta yaya ake ba da fifiko ga haɗurran wani aiki cikin sauƙi?",
        "options": [
          {
            "key": "A",
            "text": "Ta hanyar haɗa yiwuwarsu da tasirinsu a cikin sauƙin tebur"
          },
          {
            "key": "B",
            "text": "Ta hanyar magance waɗanda suka fi sauƙin warwarewa da farko"
          },
          {
            "key": "C",
            "text": "Ta hanyar kula da haɗari na farko da aka rubuta a jeri kawai"
          },
          {
            "key": "D",
            "text": "Ta hanyar jiransu su zama matsaloli don ganin waɗanne ne masu tsanani"
          }
        ],
        "answer": "A",
        "explanation": "Kuna haɗa tambayoyi biyu: menene yiwuwar haɗarin ya faru, da kuma menene zai zama tasirinsa idan ya faru. Haɗari da yake da yiwuwa kuma babban tasiri fifiko ne. Wannan tebur na « yiwuwa × tasiri » yana mai da hankalinku inda ya fi muhimmanci."
      },
      {
        "question": "Menene matakin ragewa?",
        "options": [
          {
            "key": "A",
            "text": "Yin watsi da haɗari har sai ya ɓace da kansa"
          },
          {
            "key": "B",
            "text": "Zargin mai kula da zarar haɗarin ya faru"
          },
          {
            "key": "C",
            "text": "Matakin riga-kafi da ke rage yiwuwa ko tasiri na wani haɗari"
          },
          {
            "key": "D",
            "text": "Rahoto na ƙarshe da aka rubuta bayan ƙarshen aiki"
          }
        ],
        "answer": "C",
        "explanation": "Ragewa ta ƙunshi matakan riga-kafi da aka ɗauka tun da wuri don rage yiwuwar haɗari ya faru ko don iyakance tasirinsa. Misali, gabatar da rabo kafin lokacin damina yana rage tasirin haɗarin « hanya da aka yanke »."
      },
      {
        "question": "Menene ƙaramin rajistar haɗari ya kamata ya ƙunsa, a ƙalla?",
        "options": [
          {
            "key": "A",
            "text": "Ranar ƙarshen aiki kawai"
          },
          {
            "key": "B",
            "text": "Ga kowane haɗari: bayaninsa, yiwuwarsa, tasirinsa, matakin ragewa da mai kula"
          },
          {
            "key": "C",
            "text": "Cikakken jerin dukan masu amfana da aikin"
          },
          {
            "key": "D",
            "text": "Cikakken kasafin kuɗi layi-layi na dukan ƙungiyar"
          }
        ],
        "answer": "B",
        "explanation": "Ƙaramin rajistar haɗari tebur ne mai sauƙi, a takarda ko a wayar hannu, da layi ɗaya ga kowane haɗari: bayani, yiwuwa, tasiri, matakin ragewa da mai kula. Babu buƙatar manhaja mai rikitarwa; littafin rubutu da aka kula da shi ya isa."
      },
      {
        "question": "Don me ake amfani da shirin gaggawa?",
        "options": [
          {
            "key": "A",
            "text": "Shi ne shirin B a shirye don ranar da haɗari ya faru duk da komai"
          },
          {
            "key": "B",
            "text": "Shi ne jerin hukuncin da ake amfani da su idan an yi jinkiri"
          },
          {
            "key": "C",
            "text": "Shi ne shirin sadarwa na hukuma da aka aika ga mai ba da taimako"
          },
          {
            "key": "D",
            "text": "Shi ne takarda da ke hana kowane canji a cikin aiki"
          }
        ],
        "answer": "A",
        "explanation": "Idan ba za ku iya hana haɗari ba, kuna shirya shirin gaggawa: amsar ajiya a shirye don a fara idan haɗarin ya faru. Misali, yarjejeniyar gaba da mai sayarwa don samun sayayya duk da jinkirin kuɗi."
      }
    ],
    "reflection": "Ku yi tunani kan aiki na gaskiya da kuke kai a yanzu ko kuka sani sosai. A ganinku, menene haɗarin da ya fi yiwuwa KUMA mai babban tasiri ga wannan aiki, kuma wane matakin ragewa za ku iya kafa tun wannan mako don ɗaukar mataki kafin ya zama matsala?",
    "glossary": [
      {
        "term": "Haɗari (Risque)",
        "definition": "Wani lamari mara tabbas wanda zai iya cutar da aikinku idan ya faru. Sabanin matsala, bai riga ya faru ba tukuna: don haka kuna da lokaci na shirya kanku."
      },
      {
        "term": "Yiwuwa (Probabilité)",
        "definition": "Damar da haɗari zai faru da gaske. A filin aiki, kuna ƙiyasta ta cikin sauƙi a matakai uku: ƙanƙanta, matsakaici, ko babba."
      },
      {
        "term": "Tasiri (Impact)",
        "definition": "Girman barnar da haɗari zai haifar ga aikin idan ya faru. Ana ƙiyasta shi ma a matakai uku: ƙanƙanta, matsakaici, ko babba."
      },
      {
        "term": "Ragewa (Mitigation)",
        "definition": "Matakan riga-kafi da aka ɗauka tun da wuri don rage yiwuwar haɗari ko don iyakance tasirinsa, kamar gabatar da rabo kafin ruwan sama."
      },
      {
        "term": "Rajistar haɗari (Registre des risques)",
        "definition": "Ƙaramin tebur, a takarda ko a wayar hannu, da ke lissafa haɗurran aikin tare da yiwuwarsu, tasirinsu, matakin ragewa da mai kula da kowanne."
      },
      {
        "term": "Shirin gaggawa (Plan de contingence)",
        "definition": "Shirin B da aka shirya tun da wuri kuma a shirye don fara aiki ranar da haɗari ya faru duk da matakan ragewa."
      }
    ]
  }
};
