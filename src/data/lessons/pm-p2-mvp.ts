import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Gestion de Projet » — leçon p2 (Prioriser le MVP — tester l’essentiel d’abord)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const pmLessonP2: Record<Language, LessonContent> = {
  "fr": {
    "id": "p2",
    "lessonNumber": 2,
    "title": "Prioriser le MVP — tester l’essentiel d’abord",
    "objective": "À la fin de cette leçon, vous saurez identifier la version minimum viable (MVP) de votre projet — ce qu’il faut tester maintenant et ce qui peut attendre. Vous saurez trier vos idées avec la méthode MoSCoW et la matrice valeur/effort. Vous saurez livrer vite et apprendre à moindre coût, sans gaspiller le temps et le budget en FCFA de votre coopérative, de votre ONG ou de votre petite structure.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Qu’est-ce qu’un MVP ?",
        "body": "MVP veut dire « Minimum Viable Product », c’est-à-dire la version la plus simple de votre projet qui prouve déjà sa valeur. Ce n’est pas une version bâclée. C’est une version honnête, réduite à l’essentiel, juste assez complète pour rendre un vrai service et apprendre de vos utilisateurs. La gestion de projet, ici, c’est du bon sens outillé : au lieu de tout construire d’un coup, vous construisez d’abord la petite partie qui compte le plus.\n\nPrenez l’image du marché. Avant de remplir un grand entrepôt de marchandises, une commerçante avisée apporte d’abord un petit lot pour voir si les clients achètent et à quel prix. Si le lot part vite, elle agrandit. S’il ne part pas, elle n’a perdu qu’un petit lot, pas toutes ses économies. Le MVP, c’est exactement ce petit lot : il teste la demande réelle avant le gros investissement.\n\nPour une coopérative ou une ONG qui travaille avec un budget serré et une connexion faible, cette approche change tout. Vous ne pariez pas des mois de travail et des centaines de milliers de FCFA sur une idée non vérifiée. Vous livrez vite une première version, vous écoutez les retours du terrain, puis vous améliorez. Soyons honnêtes : pour un tout petit projet d’une semaine, parler de « MVP » est parfois exagéré. Mais dès qu’un projet engage plusieurs personnes, du temps et de l’argent, l’idée du MVP vous protège du gaspillage."
      },
      {
        "title": "Indispensable ou souhaitable ? La méthode MoSCoW",
        "body": "Toutes les fonctionnalités d’un projet ne se valent pas. Certaines sont vitales, d’autres seraient simplement agréables. La méthode MoSCoW vous aide à les trier en quatre paniers : Must (à faire absolument), Should (devrait être fait si possible), Could (pourrait être fait si le temps et le budget le permettent), Won’t (ne sera pas fait cette fois-ci). Les lettres « o » servent juste à rendre le mot prononçable.\n\nImaginez la préparation d’un repas pour une grande réunion communautaire. Le « Must », c’est le plat principal et l’eau : sans cela, pas de repas. Le « Should », c’est une sauce de qualité qui ferait vraiment plaisir. Le « Could », c’est un dessert si le budget le permet. Le « Won’t » de ce jour, c’est la décoration de luxe des tables : belle idée, mais pas pour cette fois. Vous voyez tout de suite ce qui compte vraiment.\n\nLa règle d’or est simple : votre MVP, c’est l’ensemble des « Must », et seulement eux. Si vous mettez trop de choses dans le panier « Must », c’est le signe que vous n’avez pas vraiment priorisé. Un conseil pratique de terrain : faites cet exercice avec votre équipe sur une feuille de papier ou dans les notes de votre téléphone, en discutant chaque fonctionnalité à voix haute. Le débat lui-même clarifie le projet, bien avant la première ligne de travail."
      },
      {
        "title": "Prioriser par valeur et par effort",
        "body": "MoSCoW trie selon l’importance. Mais deux fonctionnalités « Must » peuvent demander des efforts très différents. Pour aller plus loin, posez-vous deux questions pour chaque idée : quelle valeur apporte-t-elle aux utilisateurs ? Et quel effort demande-t-elle (temps, argent en FCFA, compétences) ? En croisant ces deux questions, vous obtenez une matrice simple à quatre cases.\n\nLa case reine, c’est « forte valeur, faible effort » : ce sont les gains rapides, à faire en premier. Ensuite vient « forte valeur, fort effort » : utile, mais à planifier soigneusement. La case « faible valeur, faible effort » peut attendre, on la fait si on a un moment. Enfin, « faible valeur, fort effort » : on l’évite, c’est souvent un piège qui épuise les ressources sans rien rapporter.\n\nUn exemple concret : pour une petite ONG qui veut informer les familles, envoyer un simple SMS d’alerte (forte valeur, faible effort) passe avant un beau site web animé (valeur réelle mais effort lourd). Vous n’avez pas besoin d’un logiciel payant pour faire cette matrice. Dessinez une croix sur une feuille, placez chaque idée dans une case, et la priorité devient évidente sous vos yeux. Commencez toujours par le coin « fort impact, faible effort » : c’est là que votre temps rapporte le plus."
      },
      {
        "title": "Éviter le piège du « tout faire »",
        "body": "Le piège le plus courant en gestion de projet s’appelle la sur-ingénierie : vouloir tout faire, tout de suite, parfaitement. On ajoute une option, puis une autre, puis encore une, « tant qu’on y est ». À la fin, le projet est trop lourd, en retard, et le budget en FCFA est épuisé avant même d’avoir livré quoi que ce soit d’utile. L’ennemi du projet livré, c’est le projet parfait jamais terminé.\n\nPensez à quelqu’un qui veut traverser une rivière. Il a besoin d’une simple pirogue solide pour passer aujourd’hui. S’il décide d’abord de construire un grand pont en béton, il restera bloqué sur la rive pendant des mois. La pirogue, c’est le MVP : modeste, mais elle vous fait traverser. Le pont viendra peut-être plus tard, quand vous saurez vraiment combien de personnes traversent chaque jour.\n\nLa discipline du MVP consiste à dire « pas maintenant » sans dire « jamais ». Une idée écartée du MVP n’est pas une mauvaise idée : elle est simplement notée pour plus tard, dans votre backlog. Avec des ressources limitées et une connexion faible, chaque heure et chaque franc CFA comptent. Mieux vaut une petite chose qui marche et que les gens utilisent vraiment, qu’une grande chose rêvée qui ne voit jamais le jour. Livrez petit, apprenez, puis recommencez : c’est le cœur du travail par itérations."
      }
    ],
    "example": {
      "title": "La coopérative Faso Jigi et le service d’infos prix par SMS",
      "challenge": "La coopérative maraîchère Faso Jigi regroupe 40 productrices dans une zone rurale. Beaucoup vendent leurs tomates et oignons à bas prix car elles ignorent les cours réels sur le grand marché de la ville. L’idée séduisante : une application mobile avec cartes, graphiques et alertes. Mais le devis dépasse 1 200 000 FCFA, la connexion internet est faible au village, et la plupart des membres ont un téléphone simple sans data.",
      "solution": "Plutôt que de construire l’appli tout de suite, la coopérative définit un MVP. En MoSCoW, le « Must » se réduit à une seule chose : connaître le prix du jour de trois produits clés. La solution minimale est un service d’infos prix par SMS. Chaque matin, un membre relève les trois prix au marché de la ville et envoie un SMS groupé aux 40 productrices. Forte valeur, faible effort : aucune appli, aucun logiciel payant, juste un téléphone et un carnet. L’appli reste dans le backlog, pour « plus tard », si le besoin se confirme.",
      "impact": "En un mois, les productrices ont une meilleure idée du juste prix avant de négocier. La coopérative estime prudemment une hausse des revenus de l’ordre de 10 à 15 % sur les ventes concernées, pour un coût de quelques milliers de FCFA de SMS seulement. Surtout, elle a appris l’essentiel : oui, l’info prix a de la valeur, et oui, les membres lisent leurs SMS. Forte de cette preuve, elle peut désormais décider, en connaissance de cause, si une vraie application vaut un jour l’investissement."
    },
    "practice": {
      "title": "Trouver le MVP de votre projet en une feuille",
      "instructions": [
        "Sur une feuille de papier ou dans les notes de votre téléphone, écrivez le nom de votre projet, puis listez 6 fonctionnalités ou tâches que vous aimeriez y mettre (par exemple : envoyer une alerte, tenir un registre des membres, faire un beau logo, etc.).",
        "À côté de chaque fonctionnalité, écrivez une lettre MoSCoW : M (Must, indispensable), S (Should, souhaitable), C (Could, optionnel) ou W (Won’t, pas cette fois). Soyez stricte : limitez-vous à 2 ou 3 « Must » au maximum.",
        "Entourez uniquement les « Must » : voilà votre MVP. Sous la liste, écrivez en une phrase ce que votre MVP permettra de tester ou d’apprendre dès sa première version."
      ],
      "observation": "Vous remarquerez probablement que la première fois, beaucoup de choses vous semblent « indispensables ». En vous forçant à n’en garder que 2 ou 3, le vrai cœur du projet apparaît clairement. Ce petit noyau est ce que vous pouvez livrer vite, à faible coût, pour apprendre avant d’investir davantage. Gardez cette feuille : les idées écartées forment le début de votre backlog."
    },
    "quiz": [
      {
        "question": "Qu’est-ce qu’un MVP (version minimum viable) ?",
        "options": [
          {
            "key": "A",
            "text": "La version finale et complète d’un projet, avec toutes les options possibles"
          },
          {
            "key": "B",
            "text": "La version la plus simple qui prouve déjà la valeur du projet et permet d’apprendre"
          },
          {
            "key": "C",
            "text": "Une version bâclée et de mauvaise qualité que l’on jette ensuite"
          },
          {
            "key": "D",
            "text": "Un logiciel payant obligatoire pour gérer un projet"
          }
        ],
        "answer": "B",
        "explanation": "Le MVP est la version réduite à l’essentiel mais bien faite : juste assez complète pour rendre un vrai service, tester la demande et apprendre à moindre coût avant un investissement plus lourd."
      },
      {
        "question": "Dans la méthode MoSCoW, que regroupent les fonctionnalités « Must » ?",
        "options": [
          {
            "key": "A",
            "text": "Les fonctionnalités qui ne seront pas faites cette fois-ci"
          },
          {
            "key": "B",
            "text": "Les fonctionnalités optionnelles, à faire seulement s’il reste du temps"
          },
          {
            "key": "C",
            "text": "Les fonctionnalités indispensables, sans lesquelles le projet n’a pas de sens"
          },
          {
            "key": "D",
            "text": "Les fonctionnalités les plus chères du projet"
          }
        ],
        "answer": "C",
        "explanation": "« Must » désigne l’indispensable : ce sans quoi le projet ne tient pas debout. Votre MVP est composé uniquement des « Must ». Should, Could et Won’t viennent ensuite ou attendent leur tour."
      },
      {
        "question": "Dans la matrice valeur/effort, par quelle case faut-il commencer ?",
        "options": [
          {
            "key": "A",
            "text": "Forte valeur et faible effort (les gains rapides)"
          },
          {
            "key": "B",
            "text": "Faible valeur et fort effort"
          },
          {
            "key": "C",
            "text": "Faible valeur et faible effort"
          },
          {
            "key": "D",
            "text": "Peu importe, on commence au hasard"
          }
        ],
        "answer": "A",
        "explanation": "Le coin « forte valeur, faible effort » offre les gains rapides : c’est là que votre temps et votre argent rapportent le plus. La case « faible valeur, fort effort » est au contraire à éviter."
      },
      {
        "question": "Que faire d’une bonne idée qui n’entre pas dans le MVP ?",
        "options": [
          {
            "key": "A",
            "text": "La supprimer définitivement, car elle ne sert à rien"
          },
          {
            "key": "B",
            "text": "L’ajouter quand même au MVP pour ne pas la perdre"
          },
          {
            "key": "C",
            "text": "La noter dans le backlog pour la traiter plus tard, lors d’une prochaine itération"
          },
          {
            "key": "D",
            "text": "Arrêter le projet jusqu’à pouvoir tout faire en même temps"
          }
        ],
        "answer": "C",
        "explanation": "Écarter du MVP ne veut pas dire « jamais », mais « pas maintenant ». On garde l’idée dans le backlog (la liste des choses à faire plus tard) et on y reviendra lors d’une itération suivante, si le besoin se confirme."
      },
      {
        "question": "Quel est le principal danger de vouloir « tout faire » dès le départ (sur-ingénierie) ?",
        "options": [
          {
            "key": "A",
            "text": "Le projet devient trop lourd, prend du retard et épuise le budget avant de livrer quoi que ce soit d’utile"
          },
          {
            "key": "B",
            "text": "Les utilisateurs reçoivent trop tôt une version utile"
          },
          {
            "key": "C",
            "text": "On apprend trop vite ce que veulent les bénéficiaires"
          },
          {
            "key": "D",
            "text": "Le projet coûte beaucoup moins cher que prévu"
          }
        ],
        "answer": "A",
        "explanation": "Vouloir tout faire parfaitement et tout de suite alourdit le projet, le retarde et consomme les ressources limitées. L’ennemi du projet livré, c’est le projet parfait jamais terminé : mieux vaut livrer petit, apprendre, puis recommencer."
      }
    ],
    "reflection": "Pensez à un projet réel sur lequel vous travaillez ou que vous aimeriez lancer dans votre coopérative, votre ONG ou votre petite structure. Si vous deviez n’en livrer qu’une seule version minimale le mois prochain, quelles seraient les 2 ou 3 fonctionnalités « Must » de votre MVP, et qu’est-ce que cette première version vous permettrait d’apprendre avant d’investir davantage ?",
    "glossary": [
      {
        "term": "MVP",
        "definition": "Version minimum viable (Minimum Viable Product) : la version la plus simple d’un projet, réduite à l’essentiel mais bien faite, qui rend déjà un vrai service et permet de tester la demande avant un investissement plus lourd."
      },
      {
        "term": "MoSCoW",
        "definition": "Méthode de priorisation qui trie les fonctionnalités en quatre paniers : Must (indispensable), Should (souhaitable), Could (optionnel), Won’t (pas cette fois). Le MVP regroupe uniquement les « Must »."
      },
      {
        "term": "Itération",
        "definition": "Cycle de travail court où l’on livre une petite version, on écoute les retours, puis on améliore. On répète ce cycle plusieurs fois plutôt que de tout construire en une seule fois."
      },
      {
        "term": "Valeur",
        "definition": "Le bénéfice réel qu’une fonctionnalité apporte aux utilisateurs ou aux bénéficiaires. On priorise d’abord ce qui apporte le plus de valeur pour le moindre effort."
      },
      {
        "term": "Périmètre minimal",
        "definition": "L’ensemble strictement nécessaire de fonctionnalités à inclure dans la première version. Définir un périmètre minimal évite le piège du « tout faire » et protège le temps et le budget."
      },
      {
        "term": "Backlog",
        "definition": "La liste organisée des fonctionnalités et idées prévues mais pas encore réalisées. Les bonnes idées écartées du MVP y sont notées pour être traitées lors d’une prochaine itération."
      }
    ]
  },
  "en": {
    "id": "p2",
    "lessonNumber": 2,
    "title": "Prioritize the MVP — test what matters first",
    "objective": "By the end of this lesson, you will be able to identify the minimum viable product (MVP) of your project — what to test now and what can wait. You will know how to sort your ideas using the MoSCoW method and the value/effort matrix. You will be able to deliver quickly and learn at low cost, without wasting the time and the FCFA budget of your cooperative, your NGO, or your small organization.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "What is an MVP?",
        "body": "MVP stands for \"Minimum Viable Product,\" meaning the simplest version of your project that already proves its value. It is not a rushed, sloppy version. It is an honest version, stripped down to the essentials, just complete enough to provide a real service and to learn from your users. Project management here is simply common sense with tools: instead of building everything at once, you first build the small part that matters most.\n\nPicture the market. Before filling a large warehouse with goods, a wise trader first brings a small batch to see whether customers buy and at what price. If the batch sells quickly, she scales up. If it does not, she has only lost a small batch, not all her savings. The MVP is exactly that small batch: it tests real demand before the big investment.\n\nFor a cooperative or an NGO working on a tight budget with weak connectivity, this approach changes everything. You do not bet months of work and hundreds of thousands of FCFA on an unverified idea. You quickly deliver a first version, you listen to feedback from the field, then you improve. Let us be honest: for a tiny one-week project, talking about an \"MVP\" is sometimes overkill. But as soon as a project involves several people, time, and money, the MVP idea protects you from waste."
      },
      {
        "title": "Essential or desirable? The MoSCoW method",
        "body": "Not all features of a project are equal. Some are vital, others would simply be nice to have. The MoSCoW method helps you sort them into four baskets: Must (absolutely required), Should (should be done if possible), Could (could be done if time and budget allow), Won’t (will not be done this time). The two \"o\" letters are just there to make the word pronounceable.\n\nImagine preparing a meal for a large community meeting. The \"Must\" is the main dish and water: without them, there is no meal. The \"Should\" is a quality sauce that would truly please people. The \"Could\" is a dessert if the budget allows. The \"Won’t\" for today is the luxury table decoration: a lovely idea, but not this time. You immediately see what truly matters.\n\nThe golden rule is simple: your MVP is the set of \"Must\" items, and only those. If you put too many things in the \"Must\" basket, it is a sign that you have not really prioritized. A practical field tip: do this exercise with your team on a sheet of paper or in your phone notes, discussing each feature out loud. The debate itself clarifies the project, long before the first piece of work."
      },
      {
        "title": "Prioritize by value and effort",
        "body": "MoSCoW sorts by importance. But two \"Must\" features can require very different efforts. To go further, ask two questions for each idea: what value does it bring to users? And what effort does it require (time, money in FCFA, skills)? By crossing these two questions, you get a simple four-box matrix.\n\nThe star box is \"high value, low effort\": these are the quick wins, to be done first. Next comes \"high value, high effort\": useful, but to be planned carefully. The \"low value, low effort\" box can wait; you do it if you have a moment. Finally, \"low value, high effort\": avoid it, as it is often a trap that drains resources without returning anything.\n\nA concrete example: for a small NGO that wants to inform families, sending a simple SMS alert (high value, low effort) comes before a beautiful animated website (real value but heavy effort). You do not need any paid software to make this matrix. Draw a cross on a sheet, place each idea in a box, and the priority becomes obvious before your eyes. Always start in the \"high impact, low effort\" corner: that is where your time pays off the most."
      },
      {
        "title": "Avoiding the \"do everything\" trap",
        "body": "The most common trap in project management is called over-engineering: wanting to do everything, right away, perfectly. You add one option, then another, then one more, \"while we are at it.\" In the end, the project is too heavy, late, and the FCFA budget is exhausted before you have even delivered anything useful. The enemy of the delivered project is the perfect project that is never finished.\n\nThink of someone who wants to cross a river. They need a simple, solid canoe to cross today. If they first decide to build a large concrete bridge, they will stay stuck on the bank for months. The canoe is the MVP: modest, but it gets you across. The bridge may come later, when you truly know how many people cross each day.\n\nThe discipline of the MVP is to say \"not now\" without saying \"never.\" An idea set aside from the MVP is not a bad idea: it is simply noted for later, in your backlog. With limited resources and weak connectivity, every hour and every CFA franc counts. A small thing that works and that people actually use is better than a grand thing dreamed up that never sees the light of day. Deliver small, learn, then start again: that is the heart of working in iterations."
      }
    ],
    "example": {
      "title": "The Faso Jigi cooperative and the SMS market-price service",
      "challenge": "The Faso Jigi market-gardening cooperative brings together 40 women producers in a rural area. Many sell their tomatoes and onions at low prices because they do not know the real rates at the big city market. The appealing idea: a mobile app with maps, charts, and alerts. But the quote exceeds 1,200,000 FCFA, the internet connection is weak in the village, and most members have a basic phone with no data.",
      "solution": "Rather than building the app right away, the cooperative defines an MVP. In MoSCoW terms, the \"Must\" comes down to one single thing: knowing the day's price of three key products. The minimal solution is an SMS market-price service. Each morning, one member records the three prices at the city market and sends a group SMS to the 40 producers. High value, low effort: no app, no paid software, just a phone and a notebook. The app stays in the backlog, for \"later,\" if the need is confirmed.",
      "impact": "Within a month, the producers have a better idea of the fair price before negotiating. The cooperative cautiously estimates an income increase of around 10 to 15% on the sales concerned, for a cost of only a few thousand FCFA in SMS. Above all, it has learned the essential thing: yes, price information has value, and yes, members read their SMS messages. Armed with this proof, it can now decide, with full knowledge, whether a real app is ever worth the investment."
    },
    "practice": {
      "title": "Find your project's MVP on a single sheet",
      "instructions": [
        "On a sheet of paper or in your phone notes, write the name of your project, then list 6 features or tasks you would like to include (for example: send an alert, keep a member registry, design a nice logo, etc.).",
        "Next to each feature, write a MoSCoW letter: M (Must, essential), S (Should, desirable), C (Could, optional), or W (Won’t, not this time). Be strict: limit yourself to 2 or 3 \"Must\" items at most.",
        "Circle only the \"Must\" items: that is your MVP. Below the list, write in one sentence what your MVP will allow you to test or learn from its very first version."
      ],
      "observation": "You will probably notice that, the first time, many things seem \"essential\" to you. By forcing yourself to keep only 2 or 3, the real core of the project becomes clear. This small core is what you can deliver quickly, at low cost, to learn before investing more. Keep this sheet: the ideas you set aside are the start of your backlog."
    },
    "quiz": [
      {
        "question": "What is an MVP (minimum viable product)?",
        "options": [
          {
            "key": "A",
            "text": "The final and complete version of a project, with every possible option"
          },
          {
            "key": "B",
            "text": "The simplest version that already proves the project's value and allows you to learn"
          },
          {
            "key": "C",
            "text": "A rushed, poor-quality version that you throw away afterward"
          },
          {
            "key": "D",
            "text": "A mandatory paid software for managing a project"
          }
        ],
        "answer": "B",
        "explanation": "The MVP is the version stripped down to the essentials but well made: just complete enough to provide a real service, test demand, and learn at low cost before a heavier investment."
      },
      {
        "question": "In the MoSCoW method, what do the \"Must\" features group together?",
        "options": [
          {
            "key": "A",
            "text": "The features that will not be done this time"
          },
          {
            "key": "B",
            "text": "The optional features, to be done only if time remains"
          },
          {
            "key": "C",
            "text": "The essential features, without which the project makes no sense"
          },
          {
            "key": "D",
            "text": "The most expensive features of the project"
          }
        ],
        "answer": "C",
        "explanation": "\"Must\" means the essential: that without which the project does not stand up. Your MVP is made up only of the \"Must\" items. Should, Could, and Won’t come afterward or wait their turn."
      },
      {
        "question": "In the value/effort matrix, which box should you start with?",
        "options": [
          {
            "key": "A",
            "text": "High value and low effort (the quick wins)"
          },
          {
            "key": "B",
            "text": "Low value and high effort"
          },
          {
            "key": "C",
            "text": "Low value and low effort"
          },
          {
            "key": "D",
            "text": "It does not matter, you start at random"
          }
        ],
        "answer": "A",
        "explanation": "The \"high value, low effort\" corner offers the quick wins: that is where your time and money pay off the most. The \"low value, high effort\" box, on the contrary, should be avoided."
      },
      {
        "question": "What should you do with a good idea that does not fit into the MVP?",
        "options": [
          {
            "key": "A",
            "text": "Delete it permanently, because it is useless"
          },
          {
            "key": "B",
            "text": "Add it to the MVP anyway so as not to lose it"
          },
          {
            "key": "C",
            "text": "Note it in the backlog to handle it later, during a future iteration"
          },
          {
            "key": "D",
            "text": "Stop the project until you can do everything at once"
          }
        ],
        "answer": "C",
        "explanation": "Setting an idea aside from the MVP does not mean \"never,\" but \"not now.\" You keep the idea in the backlog (the list of things to do later) and return to it during a future iteration, if the need is confirmed."
      },
      {
        "question": "What is the main danger of wanting to \"do everything\" from the start (over-engineering)?",
        "options": [
          {
            "key": "A",
            "text": "The project becomes too heavy, falls behind, and exhausts the budget before delivering anything useful"
          },
          {
            "key": "B",
            "text": "Users receive a useful version too early"
          },
          {
            "key": "C",
            "text": "You learn too quickly what the beneficiaries want"
          },
          {
            "key": "D",
            "text": "The project costs much less than planned"
          }
        ],
        "answer": "A",
        "explanation": "Wanting to do everything perfectly and immediately makes the project heavy, delays it, and consumes limited resources. The enemy of the delivered project is the perfect project that is never finished: it is better to deliver small, learn, then start again."
      }
    ],
    "reflection": "Think of a real project you are working on or would like to launch in your cooperative, your NGO, or your small organization. If you had to deliver only one minimal version next month, what would the 2 or 3 \"Must\" features of your MVP be, and what would this first version allow you to learn before investing further?",
    "glossary": [
      {
        "term": "MVP",
        "definition": "Minimum Viable Product: the simplest version of a project, stripped down to the essentials but well made, that already provides a real service and lets you test demand before a heavier investment."
      },
      {
        "term": "MoSCoW",
        "definition": "A prioritization method that sorts features into four baskets: Must (essential), Should (desirable), Could (optional), Won’t (not this time). The MVP groups together only the \"Must\" items."
      },
      {
        "term": "Iteration",
        "definition": "A short work cycle in which you deliver a small version, listen to feedback, then improve. You repeat this cycle several times rather than building everything at once."
      },
      {
        "term": "Value",
        "definition": "The real benefit a feature brings to users or beneficiaries. You prioritize first what brings the most value for the least effort."
      },
      {
        "term": "Minimal scope",
        "definition": "The strictly necessary set of features to include in the first version. Defining a minimal scope avoids the \"do everything\" trap and protects time and budget."
      },
      {
        "term": "Backlog",
        "definition": "The organized list of features and ideas that are planned but not yet built. Good ideas set aside from the MVP are noted there to be handled during a future iteration."
      }
    ]
  },
  "ha": {
    "id": "p2",
    "lessonNumber": 2,
    "title": "Zabi MVP — gwada abu mafi muhimmanci da farko",
    "objective": "A ƙarshen wannan darasi, za ku iya gane sigar mafi ƙanƙanta da za ta yi aiki (MVP) na aikinku — abin da za a gwada yanzu da abin da zai iya jira. Za ku san yadda ake tsara ra’ayoyinku da hanyar MoSCoW da kuma tebur na daraja/ƙoƙari. Za ku iya bayar da sauri kuma ku koya a farashi mai rahusa, ba tare da ɓata lokaci da kasafin kuɗin FCFA na ƙungiyarku ta haɗin gwiwa, ƙungiyarku ta agaji, ko ƙaramar cibiyarku ba.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Menene MVP?",
        "body": "MVP na nufin « Minimum Viable Product », wato sigar mafi sauƙi na aikinku da ta riga ta tabbatar da darajarsa. Ba sigar gaggawa marar inganci ba ce. Sigar gaskiya ce, da aka rage zuwa abubuwa masu muhimmanci kawai, da ta isa ta bayar da hidima ta gaske kuma ta koya daga masu amfani da ku. A nan, gudanar da aiki dabara ce mai ma’ana tare da kayan aiki: maimakon gina komai a lokaci ɗaya, sai ku fara gina ƙaramin ɓangaren da ya fi muhimmanci.\n\nKu yi tunanin kasuwa. Kafin cika babban ɗakin ajiya da kayayyaki, ƴar kasuwa mai hikima takan fara kawo ƙaramin kaya don ganin ko abokan ciniki za su saya da kuma a kan farashi nawa. Idan kayan ya sayu da sauri, sai ta ƙara. Idan bai sayu ba, ta rasa ƙaramin kaya kawai, ba dukan ajiyarta ba. MVP shi ne ainihin wannan ƙaramin kaya: yana gwada buƙatar gaskiya kafin babban saka hannun jari.\n\nGa ƙungiyar haɗin gwiwa ko ƙungiyar agaji da ke aiki da ƙarancin kasafin kuɗi da raunin haɗin yanar gizo, wannan hanya tana canza komai. Ba ka caca da watanni na aiki da ɗaruruwan dubban FCFA kan ra’ayin da ba a tabbatar ba. Kana bayar da sigar farko cikin sauri, kana sauraron ra’ayin daga filin, sannan kana ingantawa. Bari mu yi gaskiya: ga ƙaramin aikin mako ɗaya kawai, magana kan « MVP » wani lokaci yawa ce. Amma da zarar aiki ya shafi mutane da yawa, lokaci da kuɗi, ra’ayin MVP yana kare ku daga ɓata."
      },
      {
        "title": "Wajibi ne ko ana so? Hanyar MoSCoW",
        "body": "Ba duka fasalolin aiki suke daidai ba. Wasu suna da muhimmanci sosai, wasu kuma za su zama abin daɗi kawai. Hanyar MoSCoW tana taimaka muku ku raba su zuwa kwanduna huɗu: Must (dole a yi shi), Should (ya kamata a yi idan zai yiwu), Could (za a iya yi idan lokaci da kasafin kuɗi sun ba da damar), Won’t (ba za a yi shi a wannan karon ba). Haruffa « o » biyu suna nan kawai don sa kalmar ta sauƙin furtawa.\n\nKu yi tunanin shirya abinci don babban taron al’umma. « Must » shi ne babban abinci da ruwa: ba tare da su ba, babu abinci. « Should » shi ne miya mai inganci da za ta faranta rai sosai. « Could » shi ne kayan zaki idan kasafin kuɗi ya ba da damar. « Won’t » na yau shi ne ado mai tsada na teburori: ra’ayi mai kyau, amma ba a wannan karon ba. Nan da nan ka ga abin da ya fi muhimmanci.\n\nDokar zinariya tana da sauƙi: MVP ɗinku shi ne tarin abubuwan « Must », kuma su kaɗai. Idan kun saka abubuwa da yawa cikin kwandon « Must », alama ce cewa ba ku yi tsarin daidaitawa da gaske ba. Shawara mai amfani daga filin: ku yi wannan aikin tare da ƙungiyarku kan takarda ko cikin bayanan wayar hannu, kuna tattauna kowace fasalin da murya. Tattaunawar kanta tana fayyace aikin, tun kafin ɗawainiyar farko."
      },
      {
        "title": "Tsara fifiko ta daraja da ƙoƙari",
        "body": "MoSCoW yana tsarawa bisa muhimmanci. Amma fasaloli biyu na « Must » na iya buƙatar ƙoƙari daban-daban. Don ci gaba, ku tambayi kanku tambayoyi biyu ga kowane ra’ayi: wace daraja yake kawowa ga masu amfani? Kuma wace ƙoƙari yake buƙata (lokaci, kuɗi a FCFA, ƙwarewa)? Ta haɗa waɗannan tambayoyi biyu, kuna samun tebur mai sauƙi mai akwati huɗu.\n\nAkwatin sarauniya shi ne « daraja mai yawa, ƙoƙari kaɗan »: waɗannan su ne nasarorin sauri, da za a yi da farko. Sannan ya zo « daraja mai yawa, ƙoƙari mai yawa »: mai amfani, amma a tsara da kyau. Akwatin « ƙarancin daraja, ƙoƙari kaɗan » na iya jira; ku yi shi idan kuna da lokaci. A ƙarshe, « ƙarancin daraja, ƙoƙari mai yawa »: ku guje masa, sau da yawa tarko ne da ke gajiyar da albarkatu ba tare da komawa da komai ba.\n\nMisali na zahiri: ga ƙaramar ƙungiyar agaji da ke son sanar da iyalai, aika saƙon faɗakarwa mai sauƙi ta SMS (daraja mai yawa, ƙoƙari kaɗan) yana gabaci kafin gidan yanar gizo mai kyau mai motsi (daraja ta gaske amma ƙoƙari mai nauyi). Ba ku buƙatar wani manhaja mai biya don yin wannan tebur. Ku zana giciye kan takarda, ku saka kowane ra’ayi cikin akwati, sai fifiko ya zama a fili gaban idanunku. Ku fara koyaushe daga lungun « tasiri mai yawa, ƙoƙari kaɗan »: a nan lokacinku ya fi komawa da riba."
      },
      {
        "title": "Guje wa tarkon « yin komai »",
        "body": "Tarko mafi yawa a gudanar da aiki ana kiransa over-engineering: son yin komai, nan take, cikakke. Kana ƙara wani zaɓi, sannan wani, sannan wani kuma, « tun da muna nan ». A ƙarshe, aikin ya yi nauyi sosai, ya jinkirta, kuma kasafin kuɗin FCFA ya ƙare kafin ma ka bayar da wani abu mai amfani. Maƙiyin aikin da aka bayar shi ne aikin cikakke wanda ba a taɓa kammala shi ba.\n\nKu yi tunanin wani da yake son haye kogi. Yana buƙatar ƙwale-ƙwale mai ƙarfi mai sauƙi don ya haye yau. Idan ya yanke shawarar farko ya gina babbar gada ta siminti, zai tsaya a gefen kogin tsawon watanni. Ƙwale-ƙwalen shi ne MVP: ƙanƙani, amma yana sa ka haye. Wataƙila gada za ta zo daga baya, lokacin da ka san da gaske mutane nawa ne suke haye kowace rana.\n\nHoron MVP shi ne faɗin « ba yanzu ba » ba tare da faɗin « har abada ba ». Ra’ayin da aka kiyaye daga MVP ba mummunan ra’ayi ba ne: an rubuta shi kawai don baya, a cikin backlog ɗinku. Da ƙarancin albarkatu da raunin haɗin yanar gizo, kowace awa da kowane faranti CFA suna da muhimmanci. Gara ƙaramin abu da ke aiki kuma da mutane suke amfani da shi da gaske, fiye da babban abu da aka yi mafarki amma bai taɓa ganin haske ba. Ku bayar da kaɗan, ku koya, sannan ku sake farawa: wannan shi ne zuciyar aiki ta hanyar maimaitawa."
      }
    ],
    "example": {
      "title": "Ƙungiyar haɗin gwiwa Faso Jigi da hidimar bayanan farashi ta SMS",
      "challenge": "Ƙungiyar haɗin gwiwar lambu Faso Jigi ta haɗa masu noma mata 40 a wani yanki na karkara. Da yawa suna sayar da tumatir da albasarsu a farashi mai rahusa domin ba su san ainihin farashin a babban kasuwar birni ba. Ra’ayin mai jan hankali: manhajar wayar hannu da taswira, jadawali da faɗakarwa. Amma farashin ya wuce FCFA 1,200,000, haɗin yanar gizo yana da rauni a ƙauye, kuma yawancin membobi suna da wayar talakawa ba tare da data ba.",
      "solution": "Maimakon gina manhajar nan take, ƙungiyar ta ayyana MVP. A ƙa’idar MoSCoW, « Must » ya rage zuwa abu ɗaya kawai: sanin farashin yini na manyan kayayyaki uku. Mafita mafi ƙanƙanta ita ce hidimar bayanan farashi ta SMS. Kowace safiya, wani memba yana ɗaukar farashin uku a kasuwar birni kuma yana aika SMS gama-gari ga masu noma 40. Daraja mai yawa, ƙoƙari kaɗan: babu manhaja, babu manhaja mai biya, wayar hannu da littafin rubutu kawai. Manhajar ta rage a cikin backlog, don « baya », idan buƙata ta tabbata.",
      "impact": "Cikin wata ɗaya, masu noma sun fi samun ra’ayin farashi mai adalci kafin ciniki. Ƙungiyar ta ƙididdiga a hankali hauhawar kuɗin shiga kusan kashi 10 zuwa 15 bisa dari kan tallace-tallacen da abin ya shafa, a kan farashin ƴan dubban FCFA na SMS kawai. Mafi muhimmanci, ta koyi abu mai muhimmanci: eh, bayanan farashi suna da daraja, kuma eh, membobi suna karanta saƙonnin SMS ɗinsu. Da wannan tabbaci, yanzu za ta iya yanke shawara, da cikakken sani, ko wata manhaja ta gaske ta cancanci saka hannun jari wata rana."
    },
    "practice": {
      "title": "Nemo MVP na aikinku a takarda ɗaya",
      "instructions": [
        "Kan takarda ko cikin bayanan wayar hannunku, ku rubuta sunan aikinku, sannan ku jera fasaloli ko ɗawainiyoyi 6 da kuke son saka (misali: aika faɗakarwa, ajiye rajistar membobi, yin tambari mai kyau, da sauransu).",
        "Kusa da kowace fasalin, ku rubuta harafin MoSCoW: M (Must, wajibi), S (Should, ana so), C (Could, na zaɓi) ko W (Won’t, ba a wannan karon ba). Ku yi tsanani: ku iyakance kanku zuwa « Must » 2 ko 3 a mafi yawa.",
        "Ku kewaye « Must » kawai: wannan shi ne MVP ɗinku. A ƙarƙashin jerin, ku rubuta a cikin jumla ɗaya abin da MVP ɗinku zai ba ku damar gwadawa ko koya daga sigar farko."
      ],
      "observation": "Wataƙila za ku lura cewa, a karo na farko, abubuwa da yawa suna kama da « wajibi » a gare ku. Ta hanyar tilasta kanku ku ajiye 2 ko 3 kawai, ainihin zuciyar aikin ta bayyana a fili. Wannan ƙaramin tushe shi ne abin da za ku iya bayarwa cikin sauri, a farashi mai rahusa, don koyo kafin ƙara saka hannun jari. Ku ajiye wannan takarda: ra’ayoyin da kuka kiyaye su ne farkon backlog ɗinku."
    },
    "quiz": [
      {
        "question": "Menene MVP (sigar mafi ƙanƙanta da za ta yi aiki)?",
        "options": [
          {
            "key": "A",
            "text": "Sigar ƙarshe da cikakkiya na aiki, da kowane zaɓi mai yiwuwa"
          },
          {
            "key": "B",
            "text": "Sigar mafi sauƙi da ta riga ta tabbatar da darajar aikin kuma ta ba da damar koyo"
          },
          {
            "key": "C",
            "text": "Sigar gaggawa marar inganci da ake jefarwa daga baya"
          },
          {
            "key": "D",
            "text": "Manhaja mai biya da ya zama dole don gudanar da aiki"
          }
        ],
        "answer": "B",
        "explanation": "MVP shi ne sigar da aka rage zuwa abubuwa masu muhimmanci amma da kyau: da ta isa ta bayar da hidima ta gaske, ta gwada buƙata, kuma ta koya a farashi mai rahusa kafin babban saka hannun jari."
      },
      {
        "question": "A hanyar MoSCoW, me fasalolin « Must » suke haɗawa?",
        "options": [
          {
            "key": "A",
            "text": "Fasalolin da ba za a yi su a wannan karon ba"
          },
          {
            "key": "B",
            "text": "Fasalolin zaɓi, da za a yi su kawai idan lokaci ya rage"
          },
          {
            "key": "C",
            "text": "Fasaloli masu muhimmanci, waɗanda ba tare da su ba aikin ba shi da ma’ana"
          },
          {
            "key": "D",
            "text": "Fasaloli mafi tsada na aikin"
          }
        ],
        "answer": "C",
        "explanation": "« Must » na nufin abu mai muhimmanci: wanda ba tare da shi ba aikin ba zai tsaya ba. MVP ɗinku ya ƙunshi « Must » kawai. Should, Could da Won’t suna zuwa baya ko suna jira lokacinsu."
      },
      {
        "question": "A tebur na daraja/ƙoƙari, da wane akwati ya kamata ku fara?",
        "options": [
          {
            "key": "A",
            "text": "Daraja mai yawa da ƙoƙari kaɗan (nasarorin sauri)"
          },
          {
            "key": "B",
            "text": "Ƙarancin daraja da ƙoƙari mai yawa"
          },
          {
            "key": "C",
            "text": "Ƙarancin daraja da ƙoƙari kaɗan"
          },
          {
            "key": "D",
            "text": "Ba kome ba ne, kana farawa ba tare da tsari ba"
          }
        ],
        "answer": "A",
        "explanation": "Lungun « daraja mai yawa, ƙoƙari kaɗan » yana ba da nasarorin sauri: a nan lokacinku da kuɗinku suka fi komawa da riba. Akwatin « ƙarancin daraja, ƙoƙari mai yawa », akasin haka, ya kamata a guje masa."
      },
      {
        "question": "Me za ku yi da ra’ayi mai kyau wanda bai shiga cikin MVP ba?",
        "options": [
          {
            "key": "A",
            "text": "Ku share shi gaba ɗaya, domin ba shi da amfani"
          },
          {
            "key": "B",
            "text": "Ku ƙara shi cikin MVP duk da haka don kada ku rasa shi"
          },
          {
            "key": "C",
            "text": "Ku rubuta shi a backlog don ku magance shi daga baya, a lokacin maimaitawa ta gaba"
          },
          {
            "key": "D",
            "text": "Ku dakatar da aikin har sai kun iya yin komai a lokaci ɗaya"
          }
        ],
        "answer": "C",
        "explanation": "Kiyaye ra’ayi daga MVP ba na nufin « har abada ba » ba ne, sai « ba yanzu ba ». Kuna ajiye ra’ayin a cikin backlog (jerin abubuwan da za a yi daga baya) kuma za ku koma gare shi a lokacin maimaitawa ta gaba, idan buƙata ta tabbata."
      },
      {
        "question": "Menene babban haɗarin son « yin komai » tun daga farko (over-engineering)?",
        "options": [
          {
            "key": "A",
            "text": "Aikin yana yin nauyi sosai, yana jinkirtawa, kuma yana gajiyar da kasafin kuɗi kafin bayar da wani abu mai amfani"
          },
          {
            "key": "B",
            "text": "Masu amfani suna karɓar sigar mai amfani da wuri sosai"
          },
          {
            "key": "C",
            "text": "Kuna koyon abin da masu amfana suke so da sauri sosai"
          },
          {
            "key": "D",
            "text": "Aikin yana kashe kuɗi ƙasa da yadda aka tsara"
          }
        ],
        "answer": "A",
        "explanation": "Son yin komai cikakke kuma nan take yana sa aikin ya yi nauyi, yana jinkirta shi, kuma yana cinye albarkatu masu iyaka. Maƙiyin aikin da aka bayar shi ne aikin cikakke wanda ba a taɓa kammala ba: gara a bayar da kaɗan, a koya, sannan a sake farawa."
      }
    ],
    "reflection": "Ku yi tunani kan wani aiki na gaske da kuke aiki a kai ko kuke son ƙaddamarwa a ƙungiyarku ta haɗin gwiwa, ƙungiyarku ta agaji, ko ƙaramar cibiyarku. Idan dole ne ku bayar da sigar mafi ƙanƙanta ɗaya kawai wata mai zuwa, waɗanne fasaloli 2 ko 3 na « Must » za su kasance a MVP ɗinku, kuma me wannan sigar farko za ta ba ku damar koya kafin ƙara saka hannun jari?",
    "glossary": [
      {
        "term": "MVP",
        "definition": "Sigar mafi ƙanƙanta da za ta yi aiki (Minimum Viable Product): sigar mafi sauƙi na aiki, da aka rage zuwa abubuwa masu muhimmanci amma da kyau, da ta riga ta bayar da hidima ta gaske kuma ta ba da damar gwada buƙata kafin babban saka hannun jari."
      },
      {
        "term": "MoSCoW",
        "definition": "Hanyar tsara fifiko da ke raba fasaloli zuwa kwanduna huɗu: Must (wajibi), Should (ana so), Could (na zaɓi), Won’t (ba a wannan karon ba). MVP yana haɗa « Must » kawai."
      },
      {
        "term": "Maimaitawa",
        "definition": "Zagaye na aiki gajere inda ake bayar da ƙaramar siga, ake sauraron ra’ayi, sannan ake ingantawa. Ana maimaita wannan zagaye sau da yawa maimakon gina komai a lokaci ɗaya."
      },
      {
        "term": "Daraja",
        "definition": "Amfanin gaske da fasalin ke kawowa ga masu amfani ko masu amfana. Ana ba da fifiko da farko ga abin da ya fi kawo daraja a kan ƙoƙari mafi ƙaranci."
      },
      {
        "term": "Iyakar aiki mafi ƙanƙanta",
        "definition": "Tarin fasaloli da ake buƙata kawai don saka cikin sigar farko. Ayyana iyakar aiki mafi ƙanƙanta yana guje wa tarkon « yin komai » kuma yana kare lokaci da kasafin kuɗi."
      },
      {
        "term": "Backlog",
        "definition": "Jerin da aka tsara na fasaloli da ra’ayoyin da aka shirya amma ba a yi su tukuna ba. Ana rubuta ra’ayoyi masu kyau da aka kiyaye daga MVP a nan don a magance su a lokacin maimaitawa ta gaba."
      }
    ]
  }
};
