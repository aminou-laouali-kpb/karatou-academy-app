import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Gestion de Projet » — leçon p1 (Cadrer un projet — objectif, parties prenantes, contraintes et résultats)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const pmLessonP1: Record<Language, LessonContent> = {
  "fr": {
    "id": "p1",
    "lessonNumber": 1,
    "title": "Cadrer un projet — objectif, parties prenantes, contraintes et résultats",
    "objective": "À la fin de cette leçon, vous saurez définir clairement le périmètre d’un projet avant de vous lancer : son objectif, ses parties prenantes, ses contraintes et ses résultats attendus. Vous serez capable de rédiger une fiche de cadrage simple, sur une page, pour mettre tout le monde d’accord dès le départ. Vous saurez aussi reconnaître les projets assez petits pour se passer d’un cadrage lourd, et ceux où il est indispensable.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi le cadrage évite l’échec",
        "body": "Imaginez un maçon qui commence à poser des briques sans plan, sans savoir si l’on construit une salle de classe ou un magasin de stockage. Au début, tout avance vite et tout le monde est content. Puis les murs ne tombent pas où il faut, le toit ne correspond pas, et il faut tout recommencer. Beaucoup de projets dans nos organisations échouent exactement de cette façon : non pas par manque de courage ou de moyens, mais parce qu’on s’est lancé sans s’être mis d’accord sur ce qu’on voulait vraiment faire.\n\nCadrer un projet, c’est tout simplement prendre le temps, au début, de répondre à quelques questions de bon sens : « Pourquoi fait-on ce projet ? Pour qui ? Avec quel argent et quel temps ? À quoi saura-t-on qu’il a réussi ? » Ce n’est pas de la paperasse de bureau. C’est la même prudence qu’un commerçant qui compte son fonds de roulement avant d’acheter sa marchandise, ou qu’une famille qui discute du budget avant d’organiser une cérémonie. Le cadrage, c’est du bon sens outillé.\n\nLe danger d’un projet mal cadré, c’est le « dérapage » : le budget en FCFA explose, les délais s’allongent jusqu’à la saison des pluies qui bloque les routes, et chacun avait compris une chose différente. Une demi-journée de réflexion au départ vous épargne des semaines de corrections, des dépenses inutiles et des tensions dans l’équipe. Sur un petit projet, le cadrage peut tenir sur une seule page ; inutile de produire un gros document. L’important n’est pas la longueur, c’est la clarté partagée."
      },
      {
        "title": "Définir l’objectif et le vrai problème",
        "body": "La première erreur, très fréquente, est de confondre le problème et la solution. Une coopérative agricole dira : « Notre projet, c’est d’acheter un moulin. » Mais le moulin n’est pas le problème : c’est une solution possible. Le vrai problème est peut-être que les femmes perdent trois heures par jour à piler le mil à la main, ou que la récolte se gâte faute de transformation rapide. En nommant d’abord le problème, vous gardez la liberté de choisir la meilleure solution — qui n’est pas toujours la plus chère ni la première qui vient à l’esprit.\n\nUne fois le problème clair, formulez un objectif SMART. C’est un mot anglais, mais l’idée est simple : un bon objectif est Spécifique (on sait exactement de quoi on parle), Mesurable (on peut compter le résultat), Atteignable (c’est réaliste avec vos moyens), Réaliste par rapport au vrai besoin, et défini dans le Temps (avec une date). Comparez : « Aider les femmes du village » est un beau souhait, mais flou. « Permettre à 40 femmes du groupement de transformer leur mil grâce à un moulin fonctionnel avant la fin de la saison sèche » est un objectif SMART : on peut le vérifier.\n\nUn objectif clair sert de boussole tout au long du projet. Chaque fois qu’une question se pose — faut-il acheter ce matériel, embaucher cette personne, ajouter cette activité ? — vous revenez à l’objectif : « Est-ce que cela nous rapproche du but ? » Si oui, on avance ; si non, on laisse de côté, même si l’idée est séduisante. C’est ainsi qu’on évite que le projet enfle dans tous les sens et finisse par coûter trois fois plus que prévu."
      },
      {
        "title": "Identifier les parties prenantes et les utilisateurs",
        "body": "Une « partie prenante » est toute personne ou tout groupe qui a un intérêt dans votre projet, ou qui peut l’aider ou le bloquer. C’est comme l’organisation d’un baptême ou d’un mariage : il n’y a pas que vous qui décidez. Il y a la belle-famille, les anciens, ceux qui paient, ceux qui cuisinent, et les invités pour qui on fait la fête. Oublier une de ces personnes, c’est risquer un conflit ou un échec le jour J. Un projet, c’est pareil.\n\nPour ne rien oublier, posez-vous quatre questions simples. Qui bénéficie du projet (les utilisateurs finaux : les femmes du groupement, les élèves, les villageois qui boiront l’eau) ? Qui décide (le chef de village, le bureau de l’ONG, le conseil de la coopérative) ? Qui finance (le bailleur, la mairie, les cotisations des membres) ? Et qui est impacté sans forcément l’avoir demandé (les voisins du forage, les commerçants concurrencés, les autres usagers du terrain) ? Faites-en une liste, même rapide, sur votre téléphone ou un cahier.\n\nLe bailleur mérite une attention particulière, car « qui paie commande » en partie : il aura ses exigences de rapport, ses délais, ses règles de dépense. Mais attention à ne pas écouter QUE le bailleur et oublier les bénéficiaires réels. Beaucoup de points d’eau sont construits là où c’était commode pour le projet, et non là où les femmes vont vraiment puiser — résultat, la pompe se couvre de poussière. Identifier tôt ces parties prenantes, et les consulter, par une réunion ou même un groupe WhatsApp, c’est s’assurer que le projet répond à un vrai besoin et qu’il sera accepté par la communauté."
      },
      {
        "title": "Contraintes et résultats attendus",
        "body": "Une contrainte, c’est une limite avec laquelle vous devez composer, comme la taille du champ détermine ce que vous pouvez y planter. Les trois contraintes classiques de tout projet sont le budget (combien de FCFA disposez-vous, et pas un de plus), le temps (à quelle date faut-il avoir terminé) et les ressources (combien de personnes, quel matériel, quelles compétences). Dans notre contexte, il faut en ajouter d’autres, bien réelles : la saison des pluies qui rend des pistes impraticables pendant des semaines, la connectivité faible qui complique la coordination, ou les coupures d’électricité. Nommer ces contraintes à l’avance, ce n’est pas être pessimiste : c’est éviter d’être surpris.\n\nLes contraintes sont souvent liées entre elles : si vous réduisez le budget, vous devrez peut-être allonger le délai ou réduire l’ambition. Si vous voulez aller plus vite, il faudra plus de moyens. On parle parfois du « triangle » budget-temps-qualité : on ne peut pas tout maximiser en même temps. Reconnaître cela honnêtement, dès le cadrage, permet de faire des choix lucides plutôt que de promettre l’impossible à un bailleur et de décevoir tout le monde ensuite.\n\nEnfin, définissez des résultats attendus mesurables. Un résultat, c’est ce qui aura concrètement changé une fois le projet fini — votre livrable. « Sensibiliser la population » n’est pas mesurable. « 200 personnes ayant assisté à une séance de sensibilisation, dont au moins 80 femmes, dans cinq villages, avant fin mars » l’est. Pour une campagne de sensibilisation, un livrable peut être le nombre de séances tenues et de participants ; pour un point d’eau, c’est un forage fonctionnel testé et un comité de gestion formé. Des résultats mesurables vous permettent de savoir, sans vous mentir, si le projet a réussi — et de le prouver à ceux qui vous ont fait confiance."
      }
    ],
    "example": {
      "title": "L’ONG Espoir Rural cadre son projet de point d’eau avant de dépenser",
      "challenge": "L’ONG Espoir Rural, basée dans une petite ville du Sahel, reçoit un financement de 6 000 000 FCFA d’un bailleur pour « améliorer l’accès à l’eau » dans une zone rurale. L’équipe, enthousiaste, est tentée de lancer tout de suite le creusement d’un forage à l’entrée du village, là où le camion peut facilement accéder. Mais le délai est court et la saison des pluies approche, ce qui bloquera bientôt les pistes.",
      "solution": "Avant de dépenser, la coordinatrice impose une demi-journée de cadrage. L’équipe écrit le vrai problème (les femmes marchent 4 km pour puiser une eau de mauvaise qualité), formule un objectif SMART (« un point d’eau potable fonctionnel pour 300 habitants, avec comité de gestion formé, avant le début des pluies »), et liste les parties prenantes : bénéficiaires (les femmes et enfants qui puisent), décideurs (chef de village, bureau de l’ONG), bailleur, et personnes impactées (éleveurs voisins). En consultant les femmes par une réunion et un groupe WhatsApp, ils découvrent que l’emplacement commode pour le camion est loin des habitations : personne n’y serait allé. Ils notent les contraintes (budget de 6 000 000 FCFA, délai avant les pluies, un seul technicien) et fixent deux résultats mesurables : un forage testé et potable, et un comité de 6 personnes formé à l’entretien.",
      "impact": "Le déplacement de l’emplacement, décidé grâce au cadrage, évite la construction d’un ouvrage inutile qui aurait été abandonné. L’ONG estime avoir économisé environ 1 500 000 FCFA de travaux perdus et ~3 semaines de délai, tout en garantissant que le point d’eau serait réellement utilisé. Le bailleur, voyant une fiche de cadrage claire et des résultats mesurables, renouvelle sa confiance pour un second village."
    },
    "practice": {
      "title": "Rédiger votre fiche de cadrage sur une page",
      "instructions": [
        "Sur une feuille de papier ou dans une note de votre téléphone, écrivez en haut l’objectif de votre projet en une seule phrase, en visant le format SMART (quoi, pour combien de personnes, avec quel résultat mesurable, avant quelle date). Juste en dessous, écrivez en une ligne le vrai problème que ce projet doit résoudre.",
        "En dessous, listez exactement 3 parties prenantes en précisant pour chacune son rôle : un qui bénéficie, un qui décide ou finance, et un qui est impacté ; puis listez 3 contraintes concrètes (par exemple le budget en FCFA, le délai, la saison des pluies ou la connectivité).",
        "Terminez la page par 2 résultats attendus mesurables (avec un chiffre et une date pour chacun), de façon à pouvoir vérifier à la fin si le projet a réussi. Relisez : tout tient-il sur une page facile à montrer à votre équipe ?"
      ],
      "observation": "Regardez votre fiche : auriez-vous pu, sans elle, expliquer votre projet en deux minutes à un bailleur ou à un chef de village ? La plupart des gens découvrent en faisant l’exercice qu’ils confondaient une activité (« acheter un moulin ») avec un objectif, ou qu’ils avaient oublié une partie prenante importante. C’est précisément ce que le cadrage permet de corriger avant qu’il ne soit trop tard et trop cher."
    },
    "quiz": [
      {
        "question": "Lequel de ces objectifs est le mieux formulé selon la méthode SMART ?",
        "options": [
          {
            "key": "A",
            "text": "Aider les femmes du village à mieux vivre."
          },
          {
            "key": "B",
            "text": "Permettre à 40 femmes du groupement de transformer leur mil grâce à un moulin fonctionnel avant la fin de la saison sèche."
          },
          {
            "key": "C",
            "text": "Acheter un moulin le plus vite possible."
          },
          {
            "key": "D",
            "text": "Faire un grand projet utile pour toute la communauté."
          }
        ],
        "answer": "B",
        "explanation": "Un objectif SMART est Spécifique, Mesurable, Atteignable, Réaliste et défini dans le Temps. La proposition B précise le nombre de bénéficiaires (40 femmes), le résultat (transformer le mil), le moyen et une échéance claire. Les autres sont des souhaits flous ou des activités, pas des objectifs vérifiables."
      },
      {
        "question": "Dans un projet de point d’eau, qui sont les « parties prenantes » ?",
        "options": [
          {
            "key": "A",
            "text": "Uniquement le bailleur qui fournit l’argent."
          },
          {
            "key": "B",
            "text": "Seulement les membres salariés de l’ONG."
          },
          {
            "key": "C",
            "text": "Toutes les personnes ou groupes concernés : bénéficiaires, décideurs, bailleur et personnes impactées comme les voisins."
          },
          {
            "key": "D",
            "text": "Seulement le technicien qui creuse le forage."
          }
        ],
        "answer": "C",
        "explanation": "Une partie prenante est toute personne ou groupe qui a un intérêt dans le projet, ou qui peut l’aider ou le bloquer. Réduire la liste au seul bailleur ou à l’équipe fait oublier les bénéficiaires réels — ce qui mène souvent à des ouvrages inutilisés."
      },
      {
        "question": "Que veut dire définir le périmètre (scope) d’un projet ?",
        "options": [
          {
            "key": "A",
            "text": "Préciser ce que le projet va faire et, tout aussi important, ce qu’il ne fera pas."
          },
          {
            "key": "B",
            "text": "Mesurer la surface du terrain en mètres carrés."
          },
          {
            "key": "C",
            "text": "Choisir la couleur du logo et des affiches du projet."
          },
          {
            "key": "D",
            "text": "Accepter toutes les nouvelles idées au fur et à mesure qu’elles arrivent."
          }
        ],
        "answer": "A",
        "explanation": "Le périmètre trace les limites du projet : ce qui est inclus et ce qui est exclu. Bien le définir évite le « dérapage » où l’on ajoute sans cesse des activités jusqu’à faire exploser le budget et les délais. Accepter toutes les idées (réponse D) est justement le piège à éviter."
      },
      {
        "question": "Pourquoi faut-il nommer les contraintes (budget, temps, saison des pluies, connectivité) dès le cadrage ?",
        "options": [
          {
            "key": "A",
            "text": "Pour décourager l’équipe et montrer que le projet est trop difficile."
          },
          {
            "key": "B",
            "text": "Uniquement pour faire plaisir au bailleur dans le rapport."
          },
          {
            "key": "C",
            "text": "Parce que la loi oblige à lister les contraintes par écrit."
          },
          {
            "key": "D",
            "text": "Pour faire des choix lucides et éviter d’être surpris, car budget, temps et qualité sont liés et on ne peut pas tout maximiser."
          }
        ],
        "answer": "D",
        "explanation": "Reconnaître les contraintes à l’avance n’est pas du pessimisme : c’est ce qui permet de faire des arbitrages honnêtes. Comme budget, temps et qualité forment un triangle, réduire l’un oblige souvent à ajuster les autres. Mieux vaut le savoir au départ que d’être bloqué par les pluies en cours de route."
      },
      {
        "question": "Quelle phrase illustre la confusion classique entre le problème et la solution ?",
        "options": [
          {
            "key": "A",
            "text": "« Les femmes perdent trois heures par jour à piler le mil à la main. »"
          },
          {
            "key": "B",
            "text": "« Notre problème, c’est que la récolte se gâte faute de transformation. »"
          },
          {
            "key": "C",
            "text": "« Notre projet, c’est d’acheter un moulin. »"
          },
          {
            "key": "D",
            "text": "« Beaucoup de familles n’ont pas accès à de l’eau potable proche. »"
          }
        ],
        "answer": "C",
        "explanation": "Acheter un moulin est une solution possible, pas un problème. Les réponses A, B et D décrivent bien des problèmes ou des besoins. En nommant d’abord le problème, on garde la liberté de choisir la meilleure solution — qui n’est pas toujours la plus chère ni la première idée venue."
      }
    ],
    "reflection": "Pensez à un projet réel sur lequel vous travaillez ou que vous aimeriez lancer dans votre organisation. En une phrase, quel est son objectif SMART, et avez-vous bien distingué le vrai problème de la solution que vous aviez en tête ? Quelle partie prenante avez-vous peut-être tendance à oublier, et quelle contrainte risque le plus de faire déraper ce projet ?",
    "glossary": [
      {
        "term": "Cadrage",
        "definition": "Le travail fait au tout début d’un projet pour définir clairement ce qu’on veut faire, pour qui, avec quels moyens et quels résultats. C’est comme tracer le plan avant de commencer à construire."
      },
      {
        "term": "Partie prenante",
        "definition": "Toute personne ou groupe qui a un intérêt dans le projet, ou qui peut l’aider ou le bloquer : bénéficiaires, décideurs, bailleur, voisins impactés. Les oublier mène souvent à des conflits ou à l’échec."
      },
      {
        "term": "Objectif SMART",
        "definition": "Un objectif Spécifique, Mesurable, Atteignable, Réaliste et défini dans le Temps. Plutôt que « aider les gens », on écrit « former 40 femmes avant fin mars » : on peut le vérifier."
      },
      {
        "term": "Périmètre (scope)",
        "definition": "Les limites du projet : ce qu’il va faire et ce qu’il ne fera pas. Bien le définir évite que le projet enfle sans cesse jusqu’à dépasser le budget et les délais."
      },
      {
        "term": "Livrable",
        "definition": "Un résultat concret et vérifiable produit par le projet : un forage fonctionnel, un rapport remis, un nombre de personnes formées. C’est la preuve tangible que le travail a été fait."
      },
      {
        "term": "Contrainte",
        "definition": "Une limite avec laquelle il faut composer : le budget en FCFA, le délai, le nombre de personnes, mais aussi la saison des pluies ou la faible connectivité. La nommer tôt évite les mauvaises surprises."
      }
    ]
  },
  "en": {
    "id": "p1",
    "lessonNumber": 1,
    "title": "Frame a project — objective, stakeholders, constraints and results",
    "objective": "By the end of this lesson, you will know how to clearly define the scope of a project before you start: its objective, its stakeholders, its constraints and its expected results. You will be able to write a simple one-page framing sheet to get everyone aligned from the outset. You will also be able to recognize which projects are small enough to skip heavy framing, and which ones absolutely need it.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why framing prevents failure",
        "body": "Imagine a mason who starts laying bricks with no plan, without knowing whether they are building a classroom or a storage shed. At first everything moves quickly and everyone is happy. Then the walls don’t fall where they should, the roof doesn’t fit, and everything has to be started over. Many projects in our organizations fail in exactly this way: not for lack of courage or resources, but because people set off without agreeing on what they really wanted to do.\n\nFraming a project simply means taking the time, at the start, to answer a few common-sense questions: « Why are we doing this project? For whom? With what money and what time? How will we know it has succeeded? » This is not office paperwork. It is the same caution a trader uses when counting their working capital before buying stock, or a family discussing the budget before organizing a ceremony. Framing is common sense, equipped with a few tools.\n\nThe danger of a poorly framed project is « drift »: the budget in FCFA explodes, deadlines stretch until the rainy season blocks the roads, and everyone had understood something different. Half a day of reflection at the start saves you weeks of corrections, wasted spending and tension within the team. On a small project, the framing can fit on a single page; there is no need to produce a thick document. What matters is not the length, it is shared clarity."
      },
      {
        "title": "Defining the objective and the real problem",
        "body": "The first and very common mistake is to confuse the problem with the solution. An agricultural cooperative will say: « Our project is to buy a mill. » But the mill is not the problem: it is one possible solution. The real problem may be that the women lose three hours a day pounding millet by hand, or that the harvest spoils for lack of quick processing. By naming the problem first, you keep the freedom to choose the best solution — which is not always the most expensive nor the first one that comes to mind.\n\nOnce the problem is clear, write a SMART objective. It is an English acronym, but the idea is simple: a good objective is Specific (you know exactly what you are talking about), Measurable (you can count the result), Achievable (it is realistic given your means), Relevant to the real need, and Time-bound (with a date). Compare: « Helping the women of the village » is a fine wish, but vague. « Enabling 40 women of the group to process their millet using a working mill before the end of the dry season » is a SMART objective: it can be verified.\n\nA clear objective serves as a compass throughout the project. Each time a question arises — should we buy this equipment, hire this person, add this activity? — you return to the objective: « Does this bring us closer to the goal? » If yes, you move ahead; if not, you set it aside, even if the idea is appealing. This is how you prevent the project from swelling in all directions and ending up costing three times more than planned."
      },
      {
        "title": "Identifying stakeholders and users",
        "body": "A « stakeholder » is any person or group that has an interest in your project, or who can help it or block it. It is like organizing a baptism or a wedding: you are not the only one deciding. There are the in-laws, the elders, those who pay, those who cook, and the guests for whom the celebration is held. Forgetting one of these people risks a conflict or a failure on the big day. A project is the same.\n\nTo forget no one, ask yourself four simple questions. Who benefits from the project (the end users: the women of the group, the pupils, the villagers who will drink the water)? Who decides (the village chief, the NGO board, the cooperative council)? Who funds it (the donor, the town hall, the members’ contributions)? And who is affected without necessarily having asked for it (the neighbors of the borehole, the competing traders, the other users of the land)? Make a list, even a quick one, on your phone or in a notebook.\n\nThe donor deserves particular attention, because « whoever pays partly commands »: they will have their reporting requirements, their deadlines, their spending rules. But be careful not to listen ONLY to the donor and forget the real beneficiaries. Many water points are built where it was convenient for the project, and not where the women really go to fetch water — and the pump ends up gathering dust. Identifying these stakeholders early, and consulting them through a meeting or even a WhatsApp group, ensures that the project meets a real need and that it will be accepted by the community."
      },
      {
        "title": "Constraints and expected results",
        "body": "A constraint is a limit you must work with, just as the size of a field determines what you can plant in it. The three classic constraints of any project are the budget (how many FCFA you have, and not one more), time (by what date it must be finished) and resources (how many people, what equipment, what skills). In our context, you must add others that are very real: the rainy season that makes tracks impassable for weeks, weak connectivity that complicates coordination, or power cuts. Naming these constraints in advance is not pessimism: it is how you avoid being caught off guard.\n\nConstraints are often linked to one another: if you cut the budget, you may have to extend the deadline or reduce the ambition. If you want to go faster, you will need more resources. People sometimes speak of the budget-time-quality « triangle »: you cannot maximize everything at once. Acknowledging this honestly, right from the framing, lets you make clear-eyed choices rather than promising a donor the impossible and disappointing everyone afterward.\n\nFinally, define measurable expected results. A result is what will have concretely changed once the project is finished — your deliverable. « Raising awareness in the population » is not measurable. « 200 people having attended an awareness session, including at least 80 women, in five villages, before the end of March » is. For an awareness campaign, a deliverable can be the number of sessions held and participants reached; for a water point, it is a tested, working borehole and a trained management committee. Measurable results let you know, without fooling yourself, whether the project succeeded — and let you prove it to those who trusted you."
      }
    ],
    "example": {
      "title": "The NGO Espoir Rural frames its water point project before spending",
      "challenge": "The NGO Espoir Rural, based in a small Sahel town, receives 6,000,000 FCFA of funding from a donor to « improve access to water » in a rural area. The team, full of enthusiasm, is tempted to immediately start drilling a borehole at the village entrance, where the truck can easily reach. But the deadline is short and the rainy season is approaching, which will soon block the tracks.",
      "solution": "Before spending, the coordinator insists on a half-day of framing. The team writes down the real problem (the women walk 4 km to fetch poor-quality water), formulates a SMART objective (« a working drinking-water point for 300 inhabitants, with a trained management committee, before the start of the rains »), and lists the stakeholders: beneficiaries (the women and children who fetch water), decision-makers (village chief, NGO board), the donor, and affected people (neighboring herders). By consulting the women through a meeting and a WhatsApp group, they discover that the spot convenient for the truck is far from the homes: no one would have gone there. They note the constraints (budget of 6,000,000 FCFA, deadline before the rains, a single technician) and set two measurable results: a tested, drinkable borehole, and a 6-person committee trained in maintenance.",
      "impact": "Moving the location, a decision made thanks to the framing, avoids building a useless structure that would have been abandoned. The NGO estimates it saved around 1,500,000 FCFA of wasted work and ~3 weeks of delay, while ensuring the water point would actually be used. The donor, seeing a clear framing sheet and measurable results, renews its trust for a second village."
    },
    "practice": {
      "title": "Write your one-page framing sheet",
      "instructions": [
        "On a sheet of paper or in a note on your phone, write at the top the objective of your project in a single sentence, aiming for the SMART format (what, for how many people, with what measurable result, by what date). Just below it, write in one line the real problem this project must solve.",
        "Below that, list exactly 3 stakeholders, specifying the role of each: one who benefits, one who decides or funds, and one who is affected; then list 3 concrete constraints (for example the budget in FCFA, the deadline, the rainy season or connectivity).",
        "End the page with 2 measurable expected results (each with a figure and a date), so that at the end you can check whether the project succeeded. Re-read it: does it all fit on one page that is easy to show to your team?"
      ],
      "observation": "Look at your sheet: without it, could you have explained your project in two minutes to a donor or a village chief? Most people discover, by doing the exercise, that they had confused an activity (« buying a mill ») with an objective, or that they had forgotten an important stakeholder. That is precisely what framing lets you correct before it becomes too late and too expensive."
    },
    "quiz": [
      {
        "question": "Which of these objectives is best formulated according to the SMART method?",
        "options": [
          {
            "key": "A",
            "text": "Help the women of the village live better."
          },
          {
            "key": "B",
            "text": "Enable 40 women of the group to process their millet using a working mill before the end of the dry season."
          },
          {
            "key": "C",
            "text": "Buy a mill as quickly as possible."
          },
          {
            "key": "D",
            "text": "Do a big, useful project for the whole community."
          }
        ],
        "answer": "B",
        "explanation": "A SMART objective is Specific, Measurable, Achievable, Relevant and Time-bound. Option B states the number of beneficiaries (40 women), the result (process the millet), the means and a clear deadline. The others are vague wishes or activities, not verifiable objectives."
      },
      {
        "question": "In a water point project, who are the « stakeholders »?",
        "options": [
          {
            "key": "A",
            "text": "Only the donor who provides the money."
          },
          {
            "key": "B",
            "text": "Only the salaried members of the NGO."
          },
          {
            "key": "C",
            "text": "All the people or groups concerned: beneficiaries, decision-makers, donor, and affected people such as the neighbors."
          },
          {
            "key": "D",
            "text": "Only the technician who drills the borehole."
          }
        ],
        "answer": "C",
        "explanation": "A stakeholder is any person or group that has an interest in the project, or who can help or block it. Narrowing the list to just the donor or the team makes you forget the real beneficiaries — which often leads to unused structures."
      },
      {
        "question": "What does defining the scope of a project mean?",
        "options": [
          {
            "key": "A",
            "text": "Specifying what the project will do and, just as importantly, what it will not do."
          },
          {
            "key": "B",
            "text": "Measuring the surface of the land in square meters."
          },
          {
            "key": "C",
            "text": "Choosing the color of the project’s logo and posters."
          },
          {
            "key": "D",
            "text": "Accepting all new ideas as they come along."
          }
        ],
        "answer": "A",
        "explanation": "The scope draws the boundaries of the project: what is included and what is excluded. Defining it well prevents the « drift » where activities keep being added until the budget and deadlines blow up. Accepting every idea (answer D) is precisely the trap to avoid."
      },
      {
        "question": "Why should constraints (budget, time, rainy season, connectivity) be named right from the framing stage?",
        "options": [
          {
            "key": "A",
            "text": "To discourage the team and show the project is too difficult."
          },
          {
            "key": "B",
            "text": "Only to please the donor in the report."
          },
          {
            "key": "C",
            "text": "Because the law requires constraints to be listed in writing."
          },
          {
            "key": "D",
            "text": "To make clear-eyed choices and avoid surprises, because budget, time and quality are linked and you cannot maximize everything."
          }
        ],
        "answer": "D",
        "explanation": "Recognizing constraints in advance is not pessimism: it is what allows honest trade-offs. Because budget, time and quality form a triangle, reducing one often forces adjusting the others. Better to know it at the start than to be blocked by the rains halfway through."
      },
      {
        "question": "Which sentence illustrates the classic confusion between the problem and the solution?",
        "options": [
          {
            "key": "A",
            "text": "« The women lose three hours a day pounding millet by hand. »"
          },
          {
            "key": "B",
            "text": "« Our problem is that the harvest spoils for lack of processing. »"
          },
          {
            "key": "C",
            "text": "« Our project is to buy a mill. »"
          },
          {
            "key": "D",
            "text": "« Many families have no access to clean water nearby. »"
          }
        ],
        "answer": "C",
        "explanation": "Buying a mill is one possible solution, not a problem. Answers A, B and D each describe a problem or a need. By naming the problem first, you keep the freedom to choose the best solution — which is not always the most expensive nor the first idea that comes up."
      }
    ],
    "reflection": "Think of a real project you are working on or would like to launch in your organization. In one sentence, what is its SMART objective, and have you clearly distinguished the real problem from the solution you had in mind? Which stakeholder might you tend to forget, and which constraint is most likely to make this project drift?",
    "glossary": [
      {
        "term": "Framing (Cadrage)",
        "definition": "The work done at the very start of a project to clearly define what you want to do, for whom, with what means and what results. It is like drawing the plan before you begin to build."
      },
      {
        "term": "Stakeholder",
        "definition": "Any person or group that has an interest in the project, or who can help or block it: beneficiaries, decision-makers, donor, affected neighbors. Forgetting them often leads to conflict or failure."
      },
      {
        "term": "SMART objective",
        "definition": "An objective that is Specific, Measurable, Achievable, Relevant and Time-bound. Rather than « help people », you write « train 40 women before the end of March »: it can be verified."
      },
      {
        "term": "Scope",
        "definition": "The boundaries of the project: what it will do and what it will not do. Defining it well prevents the project from swelling endlessly until it exceeds the budget and deadlines."
      },
      {
        "term": "Deliverable",
        "definition": "A concrete, verifiable result produced by the project: a working borehole, a submitted report, a number of people trained. It is the tangible proof that the work was done."
      },
      {
        "term": "Constraint",
        "definition": "A limit you must work with: the budget in FCFA, the deadline, the number of people, but also the rainy season or weak connectivity. Naming it early avoids nasty surprises."
      }
    ]
  },
  "ha": {
    "id": "p1",
    "lessonNumber": 1,
    "title": "Tsara aiki — manufa, masu ruwa da tsaki, ƙuntatawa da sakamako",
    "objective": "A ƙarshen wannan darasi, za ku san yadda ake bayyana iyakar wani aiki a fili kafin ku fara: manufarsa, masu ruwa da tsaki, ƙuntatawarsa da sakamakon da ake tsammani. Za ku iya rubuta takardar tsarawa mai sauƙi a shafi ɗaya don sa kowa ya yi yarjejeniya tun daga farko. Za ku kuma iya gane waɗanne ayyuka ne ƙanana har za a iya yin sako-sako da tsarawa mai nauyi, da waɗanda suke buƙatar ta tilas.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Me ya sa tsarawa ke hana faɗuwa",
        "body": "Ku yi tunanin wani magini wanda ya fara ɗora tubali ba tare da shiri ba, ba tare da sani ko ana gina ɗakin ajiya ne ko ɗakin karatu ba. Da farko komai na tafiya da sauri kuma kowa na farin ciki. Sannan bangonen ba sa faɗuwa inda ya kamata, rufin bai dace ba, kuma sai a sake fara komai. Ayyuka da yawa a ƙungiyoyinmu suna faɗuwa kamar haka: ba don rashin ƙarfin hali ko kayan aiki ba, sai don an fara ba tare da yarjejeniya kan abin da ake so a yi da gaske ba.\n\nTsara aiki na nufin ɗaukar lokaci, a farko, don amsa wasu tambayoyi na hankali: « Me ya sa muke wannan aiki? Don wa? Da wane kuɗi da wane lokaci? Yaya za mu sani cewa ya yi nasara? » Wannan ba takardar ofis ba ce. Hankali ɗaya ne da na ɗan kasuwa da ke ƙidaya jarinsa kafin ya sayi kaya, ko na iyali da ke tattauna kasafin kuɗi kafin shirya biki. Tsarawa hankali ne mai kayan aiki.\n\nHaɗarin aikin da ba a tsara shi da kyau ba shi ne « zamewa »: kasafin kuɗi na FCFA ya tashi sama, lokuta sun yi tsawo har lokacin damina da ke toshe hanyoyi, kuma kowa ya fahimci wani abu daban. Rabin yini na tunani a farko na ceto ku makonni na gyara, kashe kuɗi banza da rikici a cikin ƙungiya. A kan ƙaramin aiki, tsarawa na iya zama a shafi ɗaya kawai; babu buƙatar yin babbar takarda. Abin da ke da muhimmanci ba tsawo ba ne, fahimta ce da aka raba."
      },
      {
        "title": "Bayyana manufa da matsalar na gaske",
        "body": "Kuskure na farko, mai yawan faruwa, shi ne haɗa matsala da mafita. Wata ƙungiyar haɗin kan manoma za ta ce: « Aikinmu shi ne sayen injin niƙa. » Amma injin niƙa ba matsala ba ne: mafita ce mai yiwuwa. Matsalar na gaske watakila mata na ɓata sa’o’i uku a kullum suna daka gero da hannu, ko amfanin gona ya lalace saboda rashin sarrafawa cikin sauri. Ta hanyar sanya sunan matsalar tukuna, kuna riƙe da ’yancin zaɓar mafita mafi kyau — wadda ba koyaushe ta fi tsada ko ta farko da ke zuwa zuciya ba.\n\nDa zarar matsalar ta bayyana, ku tsara manufa ta SMART. Kalma ce ta Turanci, amma ra’ayin mai sauƙi ne: kyakkyawar manufa ita ce Takamaimai (kun san daidai abin da ake magana), Aunawa (ana iya ƙidaya sakamakon), Mai Yiwuwa (gaskiya ne da kayan aikinku), Mai Dacewa da buƙatar na gaske, da Tsayayyiya cikin Lokaci (da kwanan wata). Ku gwada: « Taimakon matan ƙauye » fata ce mai kyau, amma mara tabbas. « Ba da damar mata 40 na ƙungiyar su sarrafa gerorensu ta amfani da injin niƙa mai aiki kafin ƙarshen lokacin rani » manufa ce ta SMART: ana iya tabbatar da ita.\n\nManufa bayyananniya tana zama kamfas a duk tsawon aikin. Duk lokacin da wata tambaya ta taso — shin za mu sayi wannan kayan aiki, ɗauki wannan mutum, ƙara wannan aiki? — kuna komawa ga manufar: « Shin wannan na kusantar da mu ga buri? » Idan ee, sai a ci gaba; idan a’a, sai a ajiye, ko da ra’ayin yana da kayatarwa. Haka ake hana aikin ya kumbura ta kowane gefe har ya ƙare da kashe kuɗi sau uku fiye da yadda aka shirya."
      },
      {
        "title": "Gane masu ruwa da tsaki da masu amfani",
        "body": "« Mai ruwa da tsaki » duk wani mutum ne ko ƙungiya da ke da buƙata a cikin aikinku, ko da zai iya taimaka masa ko toshe shi. Kamar shirya suna ko aure ne: ba ku kaɗai kuke yanke shawara ba. Akwai surukai, dattawa, masu biya, masu girki, da baƙi waɗanda ake yin bikin saboda su. Mantawa da ɗaya daga cikin waɗannan mutanen na iya haifar da rikici ko faɗuwa a ranar. Aiki ma haka yake.\n\nDon kada ku manta da kowa, ku yi wa kanku tambayoyi guda huɗu masu sauƙi. Wa ke amfana da aikin (masu amfani na ƙarshe: matan ƙungiyar, ɗalibai, mutanen ƙauye da za su sha ruwa)? Wa ke yanke shawara (shugaban ƙauye, hukumar ƙungiyar agaji, majalisar haɗin kai)? Wa ke ba da kuɗi (mai ba da taimako, hukumar gari, gudunmawar mambobi)? Kuma wa ne ya shafa ba tare da ya nema ba (maƙwabtan rijiyar, ’yan kasuwa masu fafatawa, sauran masu amfani da filin)? Ku yi jerin gwano, ko da na sauri, a wayar hannu ko littafi.\n\nMai ba da taimako ya cancanci kulawa ta musamman, domin « wanda ya biya yana ba da umarni » a ɓangare: zai sami buƙatun rahotonsa, lokutansa, ƙa’idodin kashe kuɗinsa. Amma ku yi hankali kada ku saurari KAWAI mai ba da taimako ku manta da masu amfana na gaske. Rijiyoyin ruwa da yawa ana gina su inda ya dace da aikin, ba inda mata ke zuwa ɗiban ruwa da gaske ba — sakamakon, fanfo ya cika da ƙura. Gane waɗannan masu ruwa da tsaki da wuri, da neman shawararsu, ta hanyar taro ko ma rukunin WhatsApp, na tabbatar da cewa aikin ya amsa buƙatar na gaske kuma al’umma za ta karɓe shi."
      },
      {
        "title": "Ƙuntatawa da sakamakon da ake tsammani",
        "body": "Ƙuntatawa iyaka ce da dole ne ku yi aiki da ita, kamar yadda girman gona ke ƙayyade abin da za ku iya shukawa a ciki. Ƙuntatawa uku na al’ada na kowane aiki su ne kasafin kuɗi (FCFA nawa kuke da shi, ba fiye ɗaya ba), lokaci (a wace rana ya kamata a gama) da kayan aiki (mutane nawa, wane kayan aiki, waɗanne ƙwarewa). A yanayinmu, sai a ƙara wasu, na gaske: lokacin damina da ke sa hanyoyi ba a iya bi makonni, raunin haɗin yanar gizo da ke wahalar da daidaitawa, ko yankewar wutar lantarki. Sanya sunan waɗannan ƙuntatawa tun da wuri ba rashin fata ba ne: hanya ce ta gujewa abin mamaki.\n\nƘuntatawa galibi suna da alaƙa da juna: idan kun rage kasafin kuɗi, watakila sai ku tsawaita lokaci ko ku rage burin. Idan kuna son tafiya da sauri, sai ku buƙaci ƙarin kayan aiki. Wani lokaci ana magana kan « alwatika » na kasafin kuɗi-lokaci-inganci: ba za ku iya ƙara komai a lokaci ɗaya ba. Yarda da wannan da gaskiya, tun daga tsarawa, na ba ku damar yin zaɓuɓɓuka masu hankali maimakon yi wa mai ba da taimako alkawarin abin da ba zai yiwu ba sannan ku ɓata wa kowa rai daga baya.\n\nA ƙarshe, ku bayyana sakamakon da ake tsammani da za a iya aunawa. Sakamako shi ne abin da zai canza a zahiri da zarar an gama aikin — abin da kuke bayarwa. « Wayar da kan al’umma » ba a iya aunawa ba. « Mutane 200 da suka halarci zaman wayar da kai, ciki har da aƙalla mata 80, a ƙauyuka biyar, kafin ƙarshen Maris » ana iya aunawa. Ga yaƙin neman wayar da kai, abin bayarwa na iya zama adadin zaman da aka yi da mahalarta; ga rijiyar ruwa, rijiya ce mai aiki da aka gwada da kwamitin gudanarwa da aka horar. Sakamako mai aunawa na ba ku damar sani, ba tare da yaudarar kanku ba, ko aikin ya yi nasara — kuma ku tabbatar da hakan ga waɗanda suka amince da ku."
      }
    ],
    "example": {
      "title": "Ƙungiyar agaji Espoir Rural ta tsara aikinta na rijiyar ruwa kafin kashe kuɗi",
      "challenge": "Ƙungiyar agaji Espoir Rural, mai hedikwata a wani ƙaramin gari na Sahel, ta sami tallafin FCFA 6,000,000 daga mai ba da taimako don « inganta samun ruwa » a wani yanki na karkara. Ƙungiyar, cike da farin ciki, tana sha’awar fara haƙar rijiya nan da nan a ƙofar ƙauye, inda mota za ta iya kaiwa cikin sauƙi. Amma lokacin ya yi ƙanƙanta kuma lokacin damina na gabatowa, wanda zai toshe hanyoyi nan ba da jimawa ba.",
      "solution": "Kafin kashe kuɗi, mai daidaitawa ta tilasta rabin yini na tsarawa. Ƙungiyar ta rubuta matsalar na gaske (mata na tafiya kilomita 4 don ɗiban ruwa mara kyau), ta tsara manufa ta SMART (« rijiyar ruwan sha mai aiki ga mazauna 300, da kwamitin gudanarwa da aka horar, kafin farkon ruwan sama »), kuma ta lissafa masu ruwa da tsaki: masu amfana (mata da yara da ke ɗiban ruwa), masu yanke shawara (shugaban ƙauye, hukumar ƙungiyar), mai ba da taimako, da mutanen da abin ya shafa (makiyaya maƙwabta). Ta hanyar neman shawarar matan ta taro da rukunin WhatsApp, sun gano cewa wurin da ya dace da mota yana nesa da gidaje: ba wanda zai je can. Sun lura da ƙuntatawa (kasafin FCFA 6,000,000, lokaci kafin ruwan sama, fasaha guda ɗaya kawai) kuma sun sa sakamako biyu masu aunawa: rijiya da aka gwada mai sha, da kwamiti mai mutum 6 da aka horar kan kulawa.",
      "impact": "Matsar da wurin, shawarar da aka yanke saboda tsarawar, ta gujewa gina ginin banza da za a yi watsi da shi. Ƙungiyar ta ƙiyasta ta ceto kusan FCFA 1,500,000 na aikin da zai ɓace da ~makonni 3 na jinkiri, yayin da take tabbatar da cewa za a yi amfani da rijiyar ruwa da gaske. Mai ba da taimako, ganin takardar tsarawa bayyananniya da sakamako masu aunawa, ya sabunta amincewarsa don ƙauye na biyu."
    },
    "practice": {
      "title": "Ku rubuta takardar tsarawarku a shafi ɗaya",
      "instructions": [
        "A kan takarda ko a cikin rubutu a wayar hannunku, ku rubuta a sama manufar aikinku a jumla ɗaya, kuna nufin tsarin SMART (me, ga mutane nawa, da wane sakamako mai aunawa, kafin wace rana). Daidai a ƙasansa, ku rubuta a layi ɗaya matsalar na gaske da wannan aiki dole ne ya warware.",
        "A ƙasansa, ku lissafa daidai masu ruwa da tsaki 3 kuna bayyana matsayin kowanne: ɗaya da ke amfana, ɗaya da ke yanke shawara ko ba da kuɗi, da ɗaya da abin ya shafa; sannan ku lissafa ƙuntatawa 3 na gaske (misali kasafin kuɗi na FCFA, lokaci, lokacin damina ko haɗin yanar gizo).",
        "Ku ƙare shafin da sakamako 2 da ake tsammani masu aunawa (kowanne da lamba da kwanan wata), ta yadda za ku iya tabbatarwa a ƙarshe ko aikin ya yi nasara. Ku sake karantawa: shin komai na zama a shafi ɗaya da ya yi sauƙin nunawa ƙungiyarku?"
      ],
      "observation": "Ku duba takardarku: ba tare da ita ba, shin za ku iya bayyana aikinku cikin minti biyu ga mai ba da taimako ko shugaban ƙauye? Yawancin mutane suna ganowa, ta yin atisayen, cewa sun haɗa wani aiki (« sayen injin niƙa ») da manufa, ko sun manta da wani mai ruwa da tsaki mai muhimmanci. Wannan ne ainihin abin da tsarawa ke ba da damar gyarawa kafin ya yi latti kuma ya yi tsada."
    },
    "quiz": [
      {
        "question": "Wace daga cikin waɗannan manufofin ce aka fi tsara ta da kyau bisa hanyar SMART?",
        "options": [
          {
            "key": "A",
            "text": "Taimakon matan ƙauye su rayu da kyau."
          },
          {
            "key": "B",
            "text": "Ba da damar mata 40 na ƙungiyar su sarrafa gerorensu ta amfani da injin niƙa mai aiki kafin ƙarshen lokacin rani."
          },
          {
            "key": "C",
            "text": "Sayen injin niƙa da wuri-wuri."
          },
          {
            "key": "D",
            "text": "Yin babban aiki mai amfani ga dukan al’umma."
          }
        ],
        "answer": "B",
        "explanation": "Manufa ta SMART tana Takamaimai, Aunawa, Mai Yiwuwa, Mai Dacewa da Tsayayyiya cikin Lokaci. Zaɓi B ya bayyana adadin masu amfana (mata 40), sakamako (sarrafa gero), hanya da kwanan wata bayyananne. Sauran fatu ne marasa tabbas ko ayyuka, ba manufofi da za a iya tabbatarwa ba."
      },
      {
        "question": "A aikin rijiyar ruwa, su wane ne « masu ruwa da tsaki »?",
        "options": [
          {
            "key": "A",
            "text": "Mai ba da taimako kawai wanda ke ba da kuɗi."
          },
          {
            "key": "B",
            "text": "Mambobin ƙungiyar agaji masu albashi kawai."
          },
          {
            "key": "C",
            "text": "Dukan mutane ko ƙungiyoyin da abin ya shafa: masu amfana, masu yanke shawara, mai ba da taimako, da mutanen da abin ya shafa kamar maƙwabta."
          },
          {
            "key": "D",
            "text": "Fasaha kawai da ke haƙar rijiya."
          }
        ],
        "answer": "C",
        "explanation": "Mai ruwa da tsaki duk wani mutum ne ko ƙungiya da ke da buƙata a aikin, ko da zai iya taimakawa ko toshe shi. Rage jerin zuwa ga mai ba da taimako kawai ko ƙungiyar na sa a manta da masu amfana na gaske — wanda galibi ke kai ga ginin da ba a amfani da shi."
      },
      {
        "question": "Menene ma’anar bayyana iyakar (scope) wani aiki?",
        "options": [
          {
            "key": "A",
            "text": "Bayyana abin da aikin zai yi kuma, mai muhimmanci daidai, abin da ba zai yi ba."
          },
          {
            "key": "B",
            "text": "Auna fadin filin a murabba’in mita."
          },
          {
            "key": "C",
            "text": "Zaɓar launin tambari da fastocin aikin."
          },
          {
            "key": "D",
            "text": "Karɓar dukan sabbin ra’ayoyi yayin da suke zuwa."
          }
        ],
        "answer": "A",
        "explanation": "Iyaka tana zana iyakokin aikin: abin da aka haɗa da abin da aka cire. Bayyana ta da kyau na hana « zamewa » inda ake ƙara ayyuka ba tare da tsayawa ba har kasafin kuɗi da lokuta su fashe. Karɓar kowane ra’ayi (amsa D) shi ne ainihin tarkon da za a guji."
      },
      {
        "question": "Me ya sa ya kamata a sanya sunan ƙuntatawa (kasafin kuɗi, lokaci, lokacin damina, haɗin yanar gizo) tun daga matakin tsarawa?",
        "options": [
          {
            "key": "A",
            "text": "Don raunata ƙungiyar da nuna cewa aikin ya yi wahala sosai."
          },
          {
            "key": "B",
            "text": "Kawai don faranta wa mai ba da taimako rai a rahoton."
          },
          {
            "key": "C",
            "text": "Domin doka ta tilasta lissafa ƙuntatawa a rubuce."
          },
          {
            "key": "D",
            "text": "Don yin zaɓuɓɓuka masu hankali da gujewa abin mamaki, domin kasafin kuɗi, lokaci da inganci suna da alaƙa kuma ba za a iya ƙara komai ba."
          }
        ],
        "answer": "D",
        "explanation": "Gane ƙuntatawa tun da wuri ba rashin fata ba ne: shi ne abin da ke ba da damar yin zaɓuɓɓuka na gaskiya. Tunda kasafin kuɗi, lokaci da inganci suna samar da alwatika, rage ɗaya galibi na tilasta daidaita sauran. Ya fi kyau a san hakan a farko fiye da a toshe ta hanyar ruwan sama a tsakiyar hanya."
      },
      {
        "question": "Wace jumla ce ke nuna haɗakar gargajiya tsakanin matsala da mafita?",
        "options": [
          {
            "key": "A",
            "text": "« Mata na ɓata sa’o’i uku a kullum suna daka gero da hannu. »"
          },
          {
            "key": "B",
            "text": "« Matsalarmu ita ce amfanin gona na lalacewa saboda rashin sarrafawa. »"
          },
          {
            "key": "C",
            "text": "« Aikinmu shi ne sayen injin niƙa. »"
          },
          {
            "key": "D",
            "text": "« Iyalai da yawa ba su da samun ruwan sha mai tsafta kusa. »"
          }
        ],
        "answer": "C",
        "explanation": "Sayen injin niƙa mafita ce mai yiwuwa, ba matsala ba. Amsoshin A, B da D kowanne na bayyana matsala ko buƙata. Ta hanyar sanya sunan matsalar tukuna, kuna riƙe da ’yancin zaɓar mafita mafi kyau — wadda ba koyaushe ta fi tsada ko ra’ayi na farko da ke zuwa ba."
      }
    ],
    "reflection": "Ku yi tunani kan wani aiki na gaske da kuke kai ko kuke son ƙaddamarwa a ƙungiyarku. A jumla ɗaya, menene manufarsa ta SMART, kuma kun bambanta matsalar na gaske da mafita da kuke da ita a zuciya da kyau? Wane mai ruwa da tsaki ne kuke iya mantawa da shi, kuma wace ƙuntatawa ce ta fi yiwuwar sa wannan aiki ya zame?",
    "glossary": [
      {
        "term": "Tsarawa (Cadrage)",
        "definition": "Aikin da ake yi tun farkon aiki don bayyana a fili abin da ake so a yi, don wa, da wane kayan aiki da wane sakamako. Kamar zana shiri ne kafin a fara ginawa."
      },
      {
        "term": "Mai ruwa da tsaki",
        "definition": "Duk wani mutum ko ƙungiya da ke da buƙata a aikin, ko da zai iya taimakawa ko toshe shi: masu amfana, masu yanke shawara, mai ba da taimako, maƙwabta da abin ya shafa. Mantawa da su galibi na kai ga rikici ko faɗuwa."
      },
      {
        "term": "Manufa ta SMART",
        "definition": "Manufa da take Takamaimai, Aunawa, Mai Yiwuwa, Mai Dacewa da Tsayayyiya cikin Lokaci. Maimakon « taimakon mutane », sai a rubuta « horar da mata 40 kafin ƙarshen Maris »: ana iya tabbatar da ita."
      },
      {
        "term": "Iyaka (scope)",
        "definition": "Iyakokin aikin: abin da zai yi da abin da ba zai yi ba. Bayyana ta da kyau na hana aikin ya kumbura ba tare da tsayawa ba har ya wuce kasafin kuɗi da lokuta."
      },
      {
        "term": "Abin bayarwa (Livrable)",
        "definition": "Sakamako na zahiri da za a iya tabbatarwa da aikin ya samar: rijiya mai aiki, rahoton da aka mika, adadin mutanen da aka horar. Shaida ce ta zahiri cewa an gama aikin."
      },
      {
        "term": "Ƙuntatawa",
        "definition": "Iyaka da dole ne a yi aiki da ita: kasafin kuɗi na FCFA, lokaci, adadin mutane, amma kuma lokacin damina ko raunin haɗin yanar gizo. Sanya mata suna da wuri na gujewa abin mamaki marar daɗi."
      }
    ]
  }
};
