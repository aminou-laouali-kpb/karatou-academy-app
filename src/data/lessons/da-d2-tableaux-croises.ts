import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Analyse de Données » — leçon d2 (Tableaux croisés et indicateurs — faire parler vos données)
// Niveau INTERMÉDIAIRE. Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const daLessonD2: Record<Language, LessonContent> = {
  "fr": {
    "id": "d2",
    "lessonNumber": 2,
    "title": "Tableaux croisés et indicateurs — faire parler vos données",
    "objective": "À la fin de cette leçon, vous saurez construire des indicateurs lisibles à partir de vos données de terrain et utiliser un tableau croisé dynamique pour résumer ces données par catégorie (région, genre, mois). Vous saurez choisir entre un simple total, un taux et une médiane, et désagréger vos chiffres pour ne pas masquer les inégalités, afin de présenter des résultats clairs à votre équipe.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Qu’est-ce qu’un indicateur utile ?",
        "body": "Un indicateur, c’est tout simplement un chiffre qui vous aide à décider. Ce n’est pas un chiffre pour faire joli dans un rapport : c’est un chiffre qui répond à une question concrète. « Combien de personnes avons-nous touchées ce mois-ci ? » « La participation des femmes progresse-t-elle ? » Si un chiffre ne vous aide pas à répondre à une question utile pour votre travail, il ne mérite pas d’être un indicateur. On parle souvent de KPI (indicateur clé de performance), mais ne vous laissez pas impressionner par le sigle : un bon KPI tient en une phrase claire.\n\nIl existe trois grandes familles d’indicateurs. Le total est le plus simple : « 1 240 bénéficiaires servis en mai ». Le taux (ou pourcentage) compare deux nombres : « 38 % des bénéficiaires étaient des femmes ». La désagrégation découpe un chiffre par catégorie : « 620 bénéficiaires dans la région de Maradi, 410 à Zinder, 210 à Diffa ». Souvent, c’est en croisant ces familles qu’on comprend vraiment ce qui se passe, par exemple le taux de participation des femmes par région.\n\nSoyons honnêtes : parfois, un simple comptage suffit. Si votre coordinateur veut juste savoir combien de villages ont reçu une formation, un total bien présenté répond à la question — inutile de sortir une moyenne savante. La compétence d’analyste, ce n’est pas d’empiler les calculs, c’est de choisir le chiffre le plus simple qui répond honnêtement à la question. « Faire parler les données sans se noyer dedans », c’est d’abord savoir s’arrêter au bon niveau de détail."
      },
      {
        "title": "Le tableau croisé dynamique",
        "body": "Le tableau croisé dynamique (en anglais « pivot table ») est l’outil le plus utile pour résumer des données par catégorie, et il est gratuit dans Excel, LibreOffice Calc et Google Sheets. En une phrase : c’est un résumé automatique qui regroupe et compte vos lignes selon des catégories que vous choisissez. Vous avez une longue liste de 800 bénéficiaires, une ligne par personne ? Le tableau croisé vous donne en quelques clics le nombre de bénéficiaires par région et par genre, sans que vous comptiez à la main.\n\nPensez au tri du grain. Imaginez un grand tas de grain mélangé : du mil, du sorgho, du maïs. Trier à la main grain par grain prendrait des jours. Le tableau croisé, c’est comme une machine qui prend votre tas (vos lignes de données) et le range automatiquement en sacs étiquetés : un sac « mil », un sac « sorgho », un sac « maïs ». Vous décidez de l’étiquette des sacs (la catégorie, par exemple la région), et l’outil compte ce que chaque sac contient. Vous pouvez même demander deux étiquettes en même temps — région en lignes, genre en colonnes — pour obtenir un tableau à double entrée.\n\nConcrètement, dans Google Sheets, vous sélectionnez vos données, puis « Insertion » puis « Tableau croisé dynamique ». Vous glissez « Région » dans les Lignes, « Genre » dans les Colonnes, et « Nom » (ou n’importe quelle colonne) dans les Valeurs en choisissant « NB » (compter). Le tableau se construit tout seul et se met à jour si vous changez les données. C’est cette automatisation qui vous fait gagner du temps et évite les erreurs de comptage manuel."
      },
      {
        "title": "Moyenne, médiane et pièges",
        "body": "La moyenne, tout le monde la connaît : on additionne tout et on divise par le nombre de valeurs. Elle est utile, mais elle a un piège dangereux — quelques très grandes valeurs peuvent la tirer vers le haut et donner une image fausse. Imaginez une coopérative de dix membres : neuf vendent pour environ 20 000 FCFA dans le mois, mais un gros vendeur fait 500 000 FCFA. La moyenne des ventes sera d’environ 68 000 FCFA. Si vous annoncez « en moyenne, chaque membre vend 68 000 FCFA », vous donnez une fausse impression : neuf membres sur dix sont très loin de ce chiffre.\n\nLa médiane est souvent plus honnête dans ces cas. La médiane, c’est la valeur du milieu quand vous rangez tous vos chiffres du plus petit au plus grand : la moitié est en dessous, la moitié au-dessus. Dans notre coopérative, la médiane des ventes est d’environ 20 000 FCFA — ce qui décrit beaucoup mieux la réalité du membre « typique ». La règle simple à retenir : quand vos données contiennent quelques valeurs extrêmes (un très gros village, un mois exceptionnel, un bénéficiaire hors norme), regardez la médiane à côté de la moyenne. Si les deux sont proches, tout va bien ; si elles sont très différentes, méfiez-vous de la moyenne.\n\nCela ne veut pas dire que la moyenne est mauvaise. Pour des données régulières, sans valeurs extrêmes — par exemple le nombre d’enfants présents par jour dans un centre stable — la moyenne fait très bien le travail. Le bon réflexe n’est pas de choisir un camp, mais de calculer les deux et de comprendre pourquoi elles diffèrent. C’est souvent dans cet écart que se cache l’information la plus intéressante pour votre équipe."
      },
      {
        "title": "Désagréger pour ne pas masquer les inégalités",
        "body": "Un total global est rassurant, mais il cache souvent l’essentiel. « 75 % de taux de présence à nos sessions de sensibilisation » : voilà qui semble excellent. Mais si vous désagrégez ce chiffre par genre, vous découvrez peut-être 90 % chez les hommes et 55 % chez les femmes. Le total moyen masquait un écart de 35 points. Désagréger, c’est simplement découper un indicateur global selon des catégories pertinentes — région, genre, âge, type de village — pour voir ce que la moyenne cache.\n\nC’est exactement là que le tableau croisé dynamique et les taux travaillent ensemble. Vous calculez d’abord le taux global, puis vous le recalculez pour chaque catégorie. Si le taux varie fortement d’une catégorie à l’autre, vous tenez une information qui peut changer une décision : renforcer la sensibilisation auprès des femmes dans certaines régions, ajuster les horaires, déplacer un point de distribution. Sans désagrégation, ces écarts restent invisibles et les personnes les plus mal servies restent oubliées dans la moyenne.\n\nUn avertissement de prudence : plus vous désagrégez, plus les groupes deviennent petits, et plus les pourcentages deviennent fragiles. Un taux de « 50 % de femmes » calculé sur 4 personnes (2 sur 4) ne veut pas dire grand-chose. Indiquez toujours le nombre derrière le pourcentage. Désagrégez assez pour révéler les inégalités, mais pas au point de calculer des taux sur trois ou quatre personnes. C’est l’équilibre que cherche un bon analyste de terrain."
      }
    ],
    "example": {
      "title": "Une coordination découvre la sous-participation des femmes en désagrégeant",
      "challenge": "Une coordination gère un programme de sensibilisation à l’hygiène dans quatre régions. Le rapport mensuel affiche un chiffre global flatteur : « 1 800 participants ce mois-ci, taux de présence global de 72 % ». L’équipe est satisfaite et s’apprête à reconduire le programme à l’identique. Mais une chargée de suivi-évaluation se demande si ce total global ne cache pas des différences importantes selon le genre et la région.",
      "solution": "Elle reprend la liste brute des participants (une ligne par personne, avec région et genre) et construit un tableau croisé dynamique dans Google Sheets : région en lignes, genre en colonnes, comptage des participants en valeurs. Puis elle calcule un taux de participation des femmes par région. Le tableau révèle aussitôt que dans deux des quatre régions, les femmes ne représentent que 31 % et 28 % des participants, contre 49 % et 52 % dans les deux autres. Le total global de 72 % avait noyé ces écarts. Elle vérifie aussi la médiane du nombre de participants par session, plus basse que la moyenne, signe que quelques grosses sessions tiraient les chiffres vers le haut.",
      "impact": "Sur la base de ce constat, la coordination ajuste le programme dans les deux régions concernées : sessions réservées aux femmes, horaires en matinée adaptés aux contraintes domestiques, mobilisation de relais communautaires féminins. Le trimestre suivant, la part des femmes dans ces deux régions passe d’environ 30 % à environ 44 % en moyenne — un progrès net, à confirmer sur plus longtemps avant d’en faire une règle générale. L’analyse n’a rien coûté de plus qu’une heure de travail sur un tableur gratuit, mais elle a réorienté une décision qui aurait reproduit l’angle mort."
    },
    "practice": {
      "title": "Construire un tableau croisé et calculer deux taux",
      "instructions": [
        "Dans Excel, LibreOffice Calc ou Google Sheets, saisissez une petite table de 15 à 20 lignes : une colonne « Région », une colonne « Genre » (Femme / Homme), une ligne par bénéficiaire. Utilisez vos vraies données de terrain si vous en avez, sinon inventez un exemple réaliste (par exemple trois régions et un mélange de femmes et d’hommes).",
        "Sélectionnez toute la table, puis insérez un tableau croisé dynamique (menu « Insertion » puis « Tableau croisé dynamique » dans Google Sheets ; « Insertion » puis « Tableau croisé dynamique » dans Excel). Placez « Région » en Lignes, « Genre » en Colonnes, et comptez les bénéficiaires en Valeurs (option « NB » ou « Nombre »). Vous obtenez le nombre de bénéficiaires par région et par genre.",
        "À partir de ce tableau, calculez deux taux : d’abord le taux global de femmes (nombre de femmes divisé par le total, multiplié par 100) ; ensuite le taux de femmes dans la région où elles sont les moins nombreuses. Notez à côté de chaque pourcentage le nombre de personnes sur lequel il est calculé."
      ],
      "observation": "Comparez les deux taux. L’écart entre le taux global et le taux de la région la plus faible vous montre, en un coup d’œil, ce que le total cachait. Demandez-vous si cet écart est assez grand pour mériter une action — et vérifiez que vos pourcentages ne reposent pas sur trop peu de personnes pour être fiables."
    },
    "quiz": [
      {
        "question": "Quelle est la meilleure définition d’un indicateur utile ?",
        "options": [
          {
            "key": "A",
            "text": "Le plus grand nombre possible de chiffres dans un rapport"
          },
          {
            "key": "B",
            "text": "Un chiffre qui aide concrètement à répondre à une question et à décider"
          },
          {
            "key": "C",
            "text": "Une moyenne, car c’est toujours le calcul le plus fiable"
          },
          {
            "key": "D",
            "text": "Un graphique coloré qui impressionne le bailleur"
          }
        ],
        "answer": "B",
        "explanation": "Un bon indicateur répond à une question utile pour votre travail et aide à décider. Le nombre de chiffres, la couleur d’un graphique ou le type de calcul ne font pas la qualité d’un indicateur : c’est son utilité pour l’action qui compte."
      },
      {
        "question": "Que fait, en une phrase, un tableau croisé dynamique ?",
        "options": [
          {
            "key": "A",
            "text": "Il supprime automatiquement les lignes en double dans un fichier"
          },
          {
            "key": "B",
            "text": "Il traduit vos données dans une autre langue"
          },
          {
            "key": "C",
            "text": "Il résume automatiquement vos lignes en les regroupant et en les comptant par catégorie"
          },
          {
            "key": "D",
            "text": "Il envoie vos données directement au bailleur par e-mail"
          }
        ],
        "answer": "C",
        "explanation": "Un tableau croisé dynamique est un résumé automatique : il regroupe vos lignes selon les catégories que vous choisissez (région, genre, mois) et les compte, comme une machine qui trie un tas de grain en sacs étiquetés. Il ne traduit, ne supprime ni n’envoie rien."
      },
      {
        "question": "Dans une coopérative de dix membres, neuf vendent environ 20 000 FCFA et un seul vend 500 000 FCFA. Quel chiffre décrit le mieux le membre « typique » ?",
        "options": [
          {
            "key": "A",
            "text": "La moyenne, environ 68 000 FCFA"
          },
          {
            "key": "B",
            "text": "La médiane, environ 20 000 FCFA"
          },
          {
            "key": "C",
            "text": "Le total des ventes, environ 680 000 FCFA"
          },
          {
            "key": "D",
            "text": "La plus grosse vente, 500 000 FCFA"
          }
        ],
        "answer": "B",
        "explanation": "Quand quelques très grandes valeurs sont présentes, la moyenne est tirée vers le haut et trompe. La médiane (la valeur du milieu, ici environ 20 000 FCFA) décrit beaucoup mieux la réalité du membre typique. Le réflexe : comparer moyenne et médiane lorsqu’on soupçonne des valeurs extrêmes."
      },
      {
        "question": "Pourquoi désagréger un indicateur global par région ou par genre ?",
        "options": [
          {
            "key": "A",
            "text": "Pour rendre le rapport plus long et plus impressionnant"
          },
          {
            "key": "B",
            "text": "Parce qu’un total global cache souvent des écarts et des inégalités importants"
          },
          {
            "key": "C",
            "text": "Parce que les totaux sont toujours faux"
          },
          {
            "key": "D",
            "text": "Pour éviter d’avoir à utiliser un tableur"
          }
        ],
        "answer": "B",
        "explanation": "Un total global peut masquer de fortes différences entre catégories — par exemple un bon taux de présence global qui cache une faible participation des femmes dans certaines régions. Désagréger révèle ces écarts et permet d’agir là où c’est nécessaire."
      },
      {
        "question": "Comment calcule-t-on le taux (pourcentage) de femmes parmi les bénéficiaires ?",
        "options": [
          {
            "key": "A",
            "text": "Nombre de femmes divisé par le nombre total de bénéficiaires, multiplié par 100"
          },
          {
            "key": "B",
            "text": "Nombre de femmes moins nombre d’hommes"
          },
          {
            "key": "C",
            "text": "Nombre total de bénéficiaires divisé par le nombre de femmes"
          },
          {
            "key": "D",
            "text": "Nombre de femmes additionné au nombre d’hommes"
          }
        ],
        "answer": "A",
        "explanation": "Un taux compare une partie à un tout : on divise le nombre de la catégorie (les femmes) par le total, puis on multiplie par 100 pour obtenir un pourcentage. Il faut toujours indiquer le nombre derrière le pourcentage, car un taux calculé sur très peu de personnes n’est pas fiable."
      }
    ],
    "reflection": "Pensez à un chiffre global que vous présentez régulièrement dans votre travail — un total de bénéficiaires, un taux de présence, un volume de ventes. Si vous le désagrégiez par région ou par genre, quel écart pourriez-vous découvrir ? Et ce chiffre serait-il mieux décrit par une moyenne ou par une médiane ?",
    "glossary": [
      {
        "term": "Tableau croisé dynamique (pivot)",
        "definition": "Outil de tableur (Excel, LibreOffice, Google Sheets) qui résume automatiquement une liste de données en la regroupant et en la comptant par catégorie. En anglais « pivot table ». Comme une machine qui range un tas de grain mélangé en sacs étiquetés."
      },
      {
        "term": "Indicateur (KPI)",
        "definition": "Un chiffre qui aide à répondre à une question concrète et à décider. KPI signifie « indicateur clé de performance ». Un bon indicateur tient en une phrase claire et sert l’action, pas seulement le rapport."
      },
      {
        "term": "Agrégation",
        "definition": "Action de regrouper plusieurs données en un seul chiffre d’ensemble — par exemple additionner tous les bénéficiaires de toutes les régions pour obtenir un total global."
      },
      {
        "term": "Désagrégation",
        "definition": "Action inverse de l’agrégation : découper un chiffre global selon des catégories (région, genre, âge) pour voir les différences qu’un total masque. Essentielle pour repérer les inégalités."
      },
      {
        "term": "Médiane",
        "definition": "La valeur du milieu quand on range tous les chiffres du plus petit au plus grand : la moitié est en dessous, la moitié au-dessus. Plus honnête que la moyenne quand quelques valeurs extrêmes faussent le calcul."
      },
      {
        "term": "Taux (pourcentage)",
        "definition": "Comparaison d’une partie à un tout, exprimée sur 100. On divise la partie par le total et on multiplie par 100. Toujours indiquer le nombre derrière le pourcentage, surtout sur de petits groupes."
      }
    ]
  },
  "en": {
    "id": "d2",
    "lessonNumber": 2,
    "title": "Pivot tables & indicators — making your data speak",
    "objective": "By the end of this lesson, you will be able to build readable indicators from your field data and use a pivot table to summarize that data by category (region, gender, month). You will know how to choose between a simple total, a rate, and a median, and how to disaggregate your figures so they do not mask inequalities, in order to present clear results to your team.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "What is a useful indicator?",
        "body": "An indicator is simply a number that helps you decide. It is not a number meant to look impressive in a report: it is a number that answers a concrete question. \"How many people did we reach this month?\" \"Is women's participation improving?\" If a number does not help you answer a question that matters for your work, it does not deserve to be an indicator. People often say KPI (key performance indicator), but do not be intimidated by the acronym: a good KPI fits in one clear sentence.\n\nThere are three main families of indicators. The total is the simplest: \"1,240 beneficiaries served in May.\" The rate (or percentage) compares two numbers: \"38% of beneficiaries were women.\" Disaggregation breaks a figure down by category: \"620 beneficiaries in the Maradi region, 410 in Zinder, 210 in Diffa.\" Often it is by crossing these families that you really understand what is happening — for example, the participation rate of women by region.\n\nLet us be honest: sometimes a simple count is enough. If your coordinator just wants to know how many villages received a training, a well-presented total answers the question — no need to pull out a clever average. The skill of an analyst is not to pile up calculations; it is to choose the simplest figure that honestly answers the question. \"Making the data speak without drowning in it\" starts with knowing when to stop at the right level of detail."
      },
      {
        "title": "The pivot table",
        "body": "The pivot table is the most useful tool for summarizing data by category, and it is free in Excel, LibreOffice Calc, and Google Sheets. In one sentence: it is an automatic summary that groups and counts your rows according to categories you choose. Do you have a long list of 800 beneficiaries, one row per person? The pivot table gives you, in a few clicks, the number of beneficiaries by region and by gender, without your counting by hand.\n\nThink of sorting grain. Imagine a big pile of mixed grain: millet, sorghum, maize. Sorting it by hand, grain by grain, would take days. The pivot table is like a machine that takes your pile (your data rows) and automatically arranges it into labeled sacks: a \"millet\" sack, a \"sorghum\" sack, a \"maize\" sack. You decide the label of the sacks (the category, for example the region), and the tool counts what each sack contains. You can even ask for two labels at once — region in rows, gender in columns — to get a two-way table.\n\nIn practice, in Google Sheets, you select your data, then \"Insert\" then \"Pivot table.\" You drag \"Region\" into Rows, \"Gender\" into Columns, and \"Name\" (or any column) into Values, choosing \"COUNTA\" (count). The table builds itself and updates if you change the data. It is this automation that saves you time and avoids manual counting errors."
      },
      {
        "title": "Mean, median, and pitfalls",
        "body": "Everyone knows the mean (average): you add everything up and divide by the number of values. It is useful, but it has a dangerous pitfall — a few very large values can pull it upward and give a false picture. Imagine a cooperative of ten members: nine sell about 20,000 FCFA in the month, but one big seller makes 500,000 FCFA. The average of the sales will be about 68,000 FCFA. If you announce \"on average, each member sells 68,000 FCFA,\" you give a false impression: nine members out of ten are far from that figure.\n\nThe median is often more honest in these cases. The median is the middle value when you arrange all your numbers from smallest to largest: half are below, half above. In our cooperative, the median of sales is about 20,000 FCFA — which describes the \"typical\" member much better. The simple rule to remember: when your data contains a few extreme values (a very large village, an exceptional month, an unusual beneficiary), look at the median alongside the mean. If the two are close, all is well; if they are very different, be wary of the mean.\n\nThis does not mean the mean is bad. For regular data, without extreme values — for example the number of children present each day in a stable center — the mean does the job very well. The right reflex is not to pick a side, but to calculate both and understand why they differ. It is often in that gap that the most interesting information for your team is hiding."
      },
      {
        "title": "Disaggregate so as not to mask inequalities",
        "body": "A global total is reassuring, but it often hides the essential. \"75% attendance rate at our awareness sessions\": that sounds excellent. But if you disaggregate this figure by gender, you may discover 90% among men and 55% among women. The overall average was masking a 35-point gap. Disaggregating simply means breaking a global indicator down by relevant categories — region, gender, age, type of village — to see what the average hides.\n\nThis is exactly where the pivot table and rates work together. You first calculate the overall rate, then recalculate it for each category. If the rate varies sharply from one category to another, you hold information that can change a decision: strengthen outreach to women in certain regions, adjust schedules, move a distribution point. Without disaggregation, these gaps remain invisible and the people most poorly served stay forgotten inside the average.\n\nA word of caution: the more you disaggregate, the smaller the groups become, and the more fragile the percentages become. A rate of \"50% women\" calculated on 4 people (2 out of 4) does not mean much. Always state the number behind the percentage. Disaggregate enough to reveal inequalities, but not to the point of calculating rates on three or four people. That is the balance a good field analyst seeks."
      }
    ],
    "example": {
      "title": "A coordination team discovers women's underparticipation by disaggregating",
      "challenge": "A coordination team runs a hygiene awareness program in four regions. The monthly report shows a flattering global figure: \"1,800 participants this month, overall attendance rate of 72%.\" The team is satisfied and is about to renew the program unchanged. But a monitoring and evaluation officer wonders whether this global total is not hiding important differences by gender and region.",
      "solution": "She takes the raw list of participants (one row per person, with region and gender) and builds a pivot table in Google Sheets: region in rows, gender in columns, count of participants in values. Then she calculates a participation rate of women by region. The table immediately reveals that in two of the four regions, women represent only 31% and 28% of participants, compared with 49% and 52% in the other two. The global total of 72% had drowned these gaps. She also checks the median number of participants per session, lower than the mean, a sign that a few large sessions were pulling the figures upward.",
      "impact": "Based on this finding, the coordination team adjusts the program in the two affected regions: women-only sessions, morning schedules adapted to domestic constraints, mobilization of female community relays. The following quarter, the share of women in these two regions rises from about 30% to about 44% on average — clear progress, to be confirmed over a longer period before turning it into a general rule. The analysis cost nothing more than an hour of work on a free spreadsheet, but it reoriented a decision that would have reproduced the blind spot."
    },
    "practice": {
      "title": "Build a pivot table and calculate two rates",
      "instructions": [
        "In Excel, LibreOffice Calc, or Google Sheets, enter a small table of 15 to 20 rows: a \"Region\" column, a \"Gender\" column (Woman / Man), one row per beneficiary. Use your real field data if you have it, otherwise invent a realistic example (for example three regions and a mix of women and men).",
        "Select the whole table, then insert a pivot table (\"Insert\" then \"Pivot table\" in Google Sheets; \"Insert\" then \"PivotTable\" in Excel). Place \"Region\" in Rows, \"Gender\" in Columns, and count the beneficiaries in Values (the \"COUNTA\" or \"Count\" option). You obtain the number of beneficiaries by region and by gender.",
        "From this table, calculate two rates: first the overall rate of women (number of women divided by the total, multiplied by 100); then the rate of women in the region where they are fewest. Next to each percentage, write down the number of people it is calculated on."
      ],
      "observation": "Compare the two rates. The gap between the overall rate and the rate of the lowest region shows you, at a glance, what the total was hiding. Ask yourself whether this gap is large enough to deserve action — and check that your percentages are not based on too few people to be reliable."
    },
    "quiz": [
      {
        "question": "What is the best definition of a useful indicator?",
        "options": [
          {
            "key": "A",
            "text": "The largest possible number of figures in a report"
          },
          {
            "key": "B",
            "text": "A number that concretely helps answer a question and make a decision"
          },
          {
            "key": "C",
            "text": "An average, because it is always the most reliable calculation"
          },
          {
            "key": "D",
            "text": "A colorful chart that impresses the donor"
          }
        ],
        "answer": "B",
        "explanation": "A good indicator answers a question that matters for your work and helps you decide. The number of figures, the color of a chart, or the type of calculation do not make the quality of an indicator: its usefulness for action is what counts."
      },
      {
        "question": "In one sentence, what does a pivot table do?",
        "options": [
          {
            "key": "A",
            "text": "It automatically deletes duplicate rows in a file"
          },
          {
            "key": "B",
            "text": "It translates your data into another language"
          },
          {
            "key": "C",
            "text": "It automatically summarizes your rows by grouping and counting them by category"
          },
          {
            "key": "D",
            "text": "It sends your data directly to the donor by email"
          }
        ],
        "answer": "C",
        "explanation": "A pivot table is an automatic summary: it groups your rows according to the categories you choose (region, gender, month) and counts them, like a machine sorting a pile of grain into labeled sacks. It does not translate, delete, or send anything."
      },
      {
        "question": "In a cooperative of ten members, nine sell about 20,000 FCFA and one sells 500,000 FCFA. Which figure best describes the \"typical\" member?",
        "options": [
          {
            "key": "A",
            "text": "The mean, about 68,000 FCFA"
          },
          {
            "key": "B",
            "text": "The median, about 20,000 FCFA"
          },
          {
            "key": "C",
            "text": "The total of sales, about 680,000 FCFA"
          },
          {
            "key": "D",
            "text": "The largest sale, 500,000 FCFA"
          }
        ],
        "answer": "B",
        "explanation": "When a few very large values are present, the mean is pulled upward and misleads. The median (the middle value, here about 20,000 FCFA) describes the typical member much better. The reflex: compare mean and median whenever you suspect extreme values."
      },
      {
        "question": "Why disaggregate a global indicator by region or by gender?",
        "options": [
          {
            "key": "A",
            "text": "To make the report longer and more impressive"
          },
          {
            "key": "B",
            "text": "Because a global total often hides important gaps and inequalities"
          },
          {
            "key": "C",
            "text": "Because totals are always wrong"
          },
          {
            "key": "D",
            "text": "To avoid having to use a spreadsheet"
          }
        ],
        "answer": "B",
        "explanation": "A global total can mask large differences between categories — for example a good overall attendance rate that hides low participation of women in certain regions. Disaggregating reveals these gaps and makes it possible to act where it is needed."
      },
      {
        "question": "How do you calculate the rate (percentage) of women among the beneficiaries?",
        "options": [
          {
            "key": "A",
            "text": "Number of women divided by the total number of beneficiaries, multiplied by 100"
          },
          {
            "key": "B",
            "text": "Number of women minus number of men"
          },
          {
            "key": "C",
            "text": "Total number of beneficiaries divided by the number of women"
          },
          {
            "key": "D",
            "text": "Number of women added to the number of men"
          }
        ],
        "answer": "A",
        "explanation": "A rate compares a part to a whole: you divide the number of the category (the women) by the total, then multiply by 100 to get a percentage. You must always state the number behind the percentage, because a rate calculated on very few people is not reliable."
      }
    ],
    "reflection": "Think of a global figure you regularly present in your work — a total of beneficiaries, an attendance rate, a sales volume. If you disaggregated it by region or by gender, what gap might you discover? And would that figure be better described by a mean or by a median?",
    "glossary": [
      {
        "term": "Pivot table",
        "definition": "A spreadsheet tool (Excel, LibreOffice, Google Sheets) that automatically summarizes a list of data by grouping and counting it by category. Like a machine that arranges a pile of mixed grain into labeled sacks."
      },
      {
        "term": "Indicator (KPI)",
        "definition": "A number that helps answer a concrete question and make a decision. KPI means \"key performance indicator.\" A good indicator fits in one clear sentence and serves action, not just the report."
      },
      {
        "term": "Aggregation",
        "definition": "The act of combining several pieces of data into a single overall figure — for example adding up all beneficiaries from all regions to obtain a global total."
      },
      {
        "term": "Disaggregation",
        "definition": "The opposite of aggregation: breaking a global figure down by categories (region, gender, age) to see the differences a total masks. Essential for spotting inequalities."
      },
      {
        "term": "Median",
        "definition": "The middle value when all numbers are arranged from smallest to largest: half are below, half above. More honest than the mean when a few extreme values distort the calculation."
      },
      {
        "term": "Rate (percentage)",
        "definition": "A comparison of a part to a whole, expressed out of 100. You divide the part by the total and multiply by 100. Always state the number behind the percentage, especially on small groups."
      }
    ]
  },
  "ha": {
    "id": "d2",
    "lessonNumber": 2,
    "title": "Tebur masu giciye da alamomi — sa bayananku su yi magana",
    "objective": "A ƙarshen wannan darasi, za ku iya gina alamomi (indicators) masu sauƙin karatu daga bayananku na filin aiki kuma ku yi amfani da tebur mai giciye (pivot table) don taƙaita waɗannan bayanai bisa rukuni (yanki, jinsi, wata). Za ku san yadda ake zaɓa tsakanin jimillar gaba ɗaya, ƙididdiga ta kashi, da matsakaicin tsakiya (median), kuma yadda ake raba bayananku bisa rukuni don kada su ɓoye rashin daidaito, domin gabatar da sakamako bayyananne ga ƙungiyarku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Menene alama mai amfani?",
        "body": "Alama (indicator) lamba ce kawai da ke taimaka muku yanke shawara. Ba lamba ce don kyautata kamanni a cikin rahoto ba: lamba ce da ke amsa tambaya bayyananniya. « Mutane nawa muka kai ga ba su taimako a wannan wata? » « Shin shigar mata na ƙaruwa? » Idan lamba ba ta taimaka muku amsa tambaya mai amfani ga aikinku ba, ba ta cancanci zama alama ba. Mutane sukan ce KPI (alamar muhimmanci na aikin), amma kada gajeren sunan ya tsoratar da ku: kyakkyawar KPI ta dace cikin jumla bayyananniya guda.\n\nAkwai manyan iyalai uku na alamomi. Jimilla ita ce mafi sauƙi: « masu amfana 1,240 da aka yi musu hidima a watan Mayu ». Ƙididdiga ta kashi (rate) tana kwatanta lambobi biyu: « kashi 38 na masu amfana mata ne ». Rabuwa bisa rukuni (désagrégation) tana raba lamba bisa rukuni: « masu amfana 620 a yankin Maradi, 410 a Zinder, 210 a Diffa ». Sau da yawa, ta hanyar haɗa waɗannan iyalai ne kuke fahimtar abin da ke faruwa da gaske, misali ƙididdigar shigar mata bisa yanki.\n\nMu yi gaskiya: wani lokaci, ƙidaya kawai ya isa. Idan mai daidaita ku yana son sanin kawai ƙauyuka nawa suka samu horarwa, jimilla da aka gabatar da kyau ta amsa tambayar — babu buƙatar fitar da matsakaici mai wahala. Ƙwarewar mai nazari ba ta tara lissafe-lissafe ba ce, ita ce zaɓar lamba mafi sauƙi da ke amsa tambayar cikin gaskiya. « Sa bayanai su yi magana ba tare da nutsewa cikinsu ba » yana farawa da sanin lokacin tsayawa a matakin daidai na cikakke."
      },
      {
        "title": "Tebur mai giciye (pivot table)",
        "body": "Tebur mai giciye (a Turanci « pivot table ») shi ne kayan aiki mafi amfani don taƙaita bayanai bisa rukuni, kuma yana kyauta a Excel, LibreOffice Calc da Google Sheets. A jumla guda: taƙaitawa ce ta atomatik da ke tara da ƙidaya layukanku bisa rukunan da kuka zaɓa. Kuna da dogon jerin masu amfana 800, layi ɗaya kowanne mutum? Tebur mai giciye yana ba ku, cikin danna ƙananan maɓalli, adadin masu amfana bisa yanki da bisa jinsi, ba tare da kun ƙidaya da hannu ba.\n\nKu yi tunanin tace hatsi. Ku yi tunanin babban tarin hatsi gauraye: gero, dawa, masara. Tacewa da hannu ƙwaya-ƙwaya zai ɗauki kwanaki. Tebur mai giciye yana kama da na'urar da take ɗaukar tarin ku (layukan bayananku) tana tsara shi a atomatik a cikin buhuna masu lakabi: buhun « gero », buhun « dawa », buhun « masara ». Ku yanke shawarar lakabin buhuna (rukunin, misali yanki), kayan aikin kuma ya ƙidaya abin da kowane buhu ya ƙunsa. Za ku ma iya neman lakabi biyu lokaci ɗaya — yanki a layuka, jinsi a ginshiƙai — don samun tebur mai shiga biyu.\n\nA aikace, a Google Sheets, kuna zaɓar bayananku, sannan « Insertion » sannan « Tebur mai giciye ». Kuna ja « Yanki » zuwa Layuka, « Jinsi » zuwa Ginshiƙai, da « Suna » (ko duk wani ginshiƙi) zuwa Ƙimomi kuna zaɓar « NB » (ƙidaya). Teburin yana gina kansa kuma yana sabuntawa idan kun canza bayanan. Wannan atomatik shi ne ke ba ku tasarrufin lokaci kuma yana hana kuskuren ƙidaya da hannu."
      },
      {
        "title": "Matsakaici, matsakaicin tsakiya da tarko",
        "body": "Matsakaici (moyenne), kowa ya san shi: ana tara komai a raba shi da yawan ƙimomin. Yana da amfani, amma yana da tarko mai haɗari — kaɗan daga cikin manyan ƙimomi za su iya jan shi sama su ba da hoto na ƙarya. Ku yi tunanin ƙungiyar haɗin gwiwa mai mambobi goma: tara suna sayarwa kusan 20,000 FCFA a cikin wata, amma babban mai sayarwa guda yana yin 500,000 FCFA. Matsakaicin sayarwa zai kasance kusan 68,000 FCFA. Idan kun sanar da « a matsakaici, kowane memba yana sayarwa 68,000 FCFA », kuna ba da ra'ayin ƙarya: mambobi tara cikin goma suna nesa sosai da wannan lamba.\n\nMatsakaicin tsakiya (median) sau da yawa ya fi gaskiya a waɗannan halaye. Matsakaicin tsakiya shi ne ƙimar tsakiya idan kun tsara dukkan lambobinku daga mafi ƙanƙanta zuwa mafi girma: rabin yana ƙasa, rabin yana sama. A ƙungiyarmu ta haɗin gwiwa, matsakaicin tsakiya na sayarwa kusan 20,000 FCFA ne — wanda ya fi bayyana gaskiyar memba « na yau da kullun ». Dokar sauƙi da za a tuna: idan bayananku suna ƙunsar 'yan ƙimomi masu matuƙa (babban ƙauye, wata na musamman, mai amfana mara kama), ku duba matsakaicin tsakiya kusa da matsakaici. Idan biyu suna kusa, komai yana lafiya; idan suna da bambanci sosai, ku yi shakkar matsakaici.\n\nWannan ba ya nufin matsakaici mara kyau ba ne. Ga bayanai na yau da kullun, ba tare da ƙimomi masu matuƙa ba — misali adadin yara da ke halarta kowace rana a cibiyar da ke da kwanciyar hankali — matsakaici yana yin aikin sosai. Kyakkyawan halin ba zaɓar gefe ɗaya ba ne, amma lissafta su biyu da fahimtar dalilin da ya sa suka bambanta. Sau da yawa a cikin wannan giɓi ne bayanai mafi ban sha'awa ga ƙungiyarku ke ɓoye."
      },
      {
        "title": "Raba bisa rukuni don kada a ɓoye rashin daidaito",
        "body": "Jimillar gaba ɗaya tana ba da kwanciyar hankali, amma sau da yawa tana ɓoye abin da ya fi muhimmanci. « Kashi 75 na halarta a zaman wayar da kanmu »: wannan yana kama da kyakkyawa. Amma idan kun raba wannan lamba bisa jinsi, watakila za ku gano kashi 90 a wajen maza da kashi 55 a wajen mata. Matsakaicin gaba ɗaya ya ɓoye giɓin maki 35. Rabuwa bisa rukuni kawai tana nufin raba alama ta gaba ɗaya bisa rukunan da suka dace — yanki, jinsi, shekaru, nau'in ƙauye — don ganin abin da matsakaici ke ɓoyewa.\n\nWannan shi ne daidai inda tebur mai giciye da ƙididdigar kashi ke aiki tare. Da farko kuna lissafta ƙididdigar gaba ɗaya, sannan ku sake lissafta ta ga kowane rukuni. Idan ƙididdigar ta bambanta sosai daga rukuni zuwa rukuni, kun riƙe bayani da zai iya canza shawara: ƙarfafa wayar da kai ga mata a wasu yankuna, daidaita lokuta, motsa wani wurin rarrabawa. Ba tare da rabuwa bisa rukuni ba, waɗannan giɓi suna kasancewa ɓoyayyu kuma mutanen da aka fi yi musu hidima mara kyau suna kasancewa mantattu cikin matsakaici.\n\nGargaɗi na tsanaki: yawan rabuwa da kuke yi, ƙananan ne rukunan ke zama, kuma ƙarin rauni ne kashi-kashi ke zama. Ƙididdiga ta « kashi 50 mata » da aka lissafta kan mutane 4 (2 cikin 4) ba ta nufin abu mai yawa ba. Koyaushe ku nuna lambar da ke bayan kashi. Ku raba isasshe don bayyana rashin daidaito, amma kada ya kai matakin lissafta ƙididdiga kan mutum uku ko huɗu. Wannan shi ne daidaiton da kyakkyawan mai nazari na filin aiki ke nema."
      }
    ],
    "example": {
      "title": "Ƙungiyar daidaitawa ta gano ƙarancin shigar mata ta hanyar rabuwa bisa rukuni",
      "challenge": "Ƙungiyar daidaitawa tana gudanar da shirin wayar da kai kan tsafta a yankuna huɗu. Rahoto na wata yana nuna lamba mai kayatarwa ta gaba ɗaya: « masu halarta 1,800 a wannan wata, ƙididdigar halarta ta gaba ɗaya kashi 72 ». Ƙungiyar tana farin ciki kuma tana shirin sake gudanar da shirin kamar yadda yake. Amma wata jami'ar sa ido da kimantawa tana mamakin ko wannan jimillar gaba ɗaya ba ta ɓoye bambance-bambance masu muhimmanci bisa jinsi da yanki ba.",
      "solution": "Ta ɗauki jerin sunan masu halarta na asali (layi ɗaya kowanne mutum, da yanki da jinsi) ta gina tebur mai giciye a Google Sheets: yanki a layuka, jinsi a ginshiƙai, ƙidaya masu halarta a ƙimomi. Sannan ta lissafta ƙididdigar shigar mata bisa yanki. Teburin nan da nan ya bayyana cewa a yankuna biyu cikin huɗu, mata suna wakiltar kashi 31 da kashi 28 kawai na masu halarta, idan aka kwatanta da kashi 49 da kashi 52 a sauran biyun. Jimillar gaba ɗaya ta kashi 72 ta nutsar da waɗannan giɓi. Ta kuma duba matsakaicin tsakiya na adadin masu halarta a kowane zama, mafi ƙasa da matsakaici, alama ce cewa 'yan manyan zaman suna jan lambobin sama.",
      "impact": "Bisa wannan binciken, ƙungiyar daidaitawa ta daidaita shirin a yankuna biyu da abin ya shafa: zaman mata kawai, lokutan safiya da suka dace da ayyukan gida, tattara wakilan al'umma mata. A kwata na gaba, rabon mata a waɗannan yankuna biyu ya tashi daga kusan kashi 30 zuwa kusan kashi 44 a matsakaici — ci gaba bayyananne, da za a tabbatar a kan tsawon lokaci kafin a mai da shi doka ta gaba ɗaya. Nazarin bai kashe komai fiye da sa'a guda na aiki kan tebur mai kyauta ba, amma ya juya wata shawara da za ta sake maimaita makantar idon."
    },
    "practice": {
      "title": "Gina tebur mai giciye da lissafta ƙididdiga biyu",
      "instructions": [
        "A Excel, LibreOffice Calc ko Google Sheets, ku shigar da ƙaramin tebur na layuka 15 zuwa 20: ginshiƙin « Yanki », ginshiƙin « Jinsi » (Mace / Namiji), layi ɗaya kowanne mai amfana. Ku yi amfani da ainihin bayananku na filin aiki idan kuna da su, in ba haka ba ku ƙirƙira misali na gaskiya (misali yankuna uku da gauraye na mata da maza).",
        "Ku zaɓi dukkan teburin, sannan ku saka tebur mai giciye (menu « Insertion » sannan « Tebur mai giciye » a Google Sheets; « Insertion » sannan « Tebur mai giciye » a Excel). Ku sanya « Yanki » a Layuka, « Jinsi » a Ginshiƙai, kuma ku ƙidaya masu amfana a Ƙimomi (zaɓin « NB » ko « Adadi »). Kun samu adadin masu amfana bisa yanki da bisa jinsi.",
        "Daga wannan teburin, ku lissafta ƙididdiga biyu: da farko ƙididdigar mata ta gaba ɗaya (adadin mata raba da jimilla, sannan a ninka da 100); sannan ƙididdigar mata a yankin da suka fi ƙaranci. A gefen kowane kashi, ku rubuta adadin mutanen da aka lissafta shi a kansu."
      ],
      "observation": "Ku kwatanta ƙididdiga biyu. Giɓin tsakanin ƙididdigar gaba ɗaya da ƙididdigar yankin mafi ƙasa yana nuna muku, cikin kallon ido ɗaya, abin da jimillar ke ɓoyewa. Ku tambayi kanku ko wannan giɓin ya isa girma da ya cancanci aiki — kuma ku tabbatar cewa kashi-kashinku ba su dogara kan mutane kaɗan sosai da za su zama abin dogaro ba."
    },
    "quiz": [
      {
        "question": "Menene mafi kyawun ma'anar alama mai amfani?",
        "options": [
          {
            "key": "A",
            "text": "Mafi yawan adadin lambobi da zai yiwu a cikin rahoto"
          },
          {
            "key": "B",
            "text": "Lamba da ke taimakawa a aikace don amsa tambaya da yanke shawara"
          },
          {
            "key": "C",
            "text": "Matsakaici, domin koyaushe shi ne lissafi mafi aminci"
          },
          {
            "key": "D",
            "text": "Jadawali mai launi da ke burge mai ba da taimako"
          }
        ],
        "answer": "B",
        "explanation": "Kyakkyawar alama tana amsa tambaya mai amfani ga aikinku kuma tana taimaka muku yanke shawara. Adadin lambobi, launin jadawali, ko nau'in lissafi ba su sa ingancin alama ba: amfaninta ga aiki ne ke da muhimmanci."
      },
      {
        "question": "A jumla guda, menene tebur mai giciye yake yi?",
        "options": [
          {
            "key": "A",
            "text": "Yana goge layukan da aka maimaita a atomatik a cikin fayil"
          },
          {
            "key": "B",
            "text": "Yana fassara bayananku zuwa wani harshe"
          },
          {
            "key": "C",
            "text": "Yana taƙaita layukanku a atomatik ta hanyar tarawa da ƙidaya su bisa rukuni"
          },
          {
            "key": "D",
            "text": "Yana aika bayananku kai tsaye ga mai ba da taimako ta imel"
          }
        ],
        "answer": "C",
        "explanation": "Tebur mai giciye taƙaitawa ce ta atomatik: yana tara layukanku bisa rukunan da kuka zaɓa (yanki, jinsi, wata) yana ƙidaya su, kamar na'urar da ke tace tarin hatsi a buhuna masu lakabi. Ba ya fassara, goge, ko aika komai."
      },
      {
        "question": "A ƙungiyar haɗin gwiwa mai mambobi goma, tara suna sayarwa kusan 20,000 FCFA kuma guda yana sayarwa 500,000 FCFA. Wace lamba ce ta fi bayyana memba « na yau da kullun »?",
        "options": [
          {
            "key": "A",
            "text": "Matsakaici, kusan 68,000 FCFA"
          },
          {
            "key": "B",
            "text": "Matsakaicin tsakiya, kusan 20,000 FCFA"
          },
          {
            "key": "C",
            "text": "Jimillar sayarwa, kusan 680,000 FCFA"
          },
          {
            "key": "D",
            "text": "Mafi girman sayarwa, 500,000 FCFA"
          }
        ],
        "answer": "B",
        "explanation": "Lokacin da 'yan manyan ƙimomi suke nan, ana jan matsakaici sama kuma yana ruɗi. Matsakaicin tsakiya (ƙimar tsakiya, a nan kusan 20,000 FCFA) ya fi bayyana memba na yau da kullun. Halin da ya dace: kwatanta matsakaici da matsakaicin tsakiya duk lokacin da kuke zargin ƙimomi masu matuƙa."
      },
      {
        "question": "Me ya sa za a raba alama ta gaba ɗaya bisa yanki ko bisa jinsi?",
        "options": [
          {
            "key": "A",
            "text": "Don sa rahoto ya yi tsawo kuma ya fi burgewa"
          },
          {
            "key": "B",
            "text": "Domin jimillar gaba ɗaya sau da yawa tana ɓoye giɓi da rashin daidaito masu muhimmanci"
          },
          {
            "key": "C",
            "text": "Domin jimillu koyaushe ba daidai ba ne"
          },
          {
            "key": "D",
            "text": "Don gujewa amfani da tebur na lissafi"
          }
        ],
        "answer": "B",
        "explanation": "Jimillar gaba ɗaya na iya ɓoye manyan bambance-bambance tsakanin rukunai — misali kyakkyawar ƙididdigar halarta ta gaba ɗaya da ke ɓoye ƙarancin shigar mata a wasu yankuna. Rabuwa bisa rukuni tana bayyana waɗannan giɓi kuma tana ba da damar yin aiki inda ake buƙata."
      },
      {
        "question": "Yaya ake lissafta ƙididdiga (kashi) na mata cikin masu amfana?",
        "options": [
          {
            "key": "A",
            "text": "Adadin mata raba da jimillar masu amfana, sannan a ninka da 100"
          },
          {
            "key": "B",
            "text": "Adadin mata cire adadin maza"
          },
          {
            "key": "C",
            "text": "Jimillar masu amfana raba da adadin mata"
          },
          {
            "key": "D",
            "text": "Adadin mata haɗe da adadin maza"
          }
        ],
        "answer": "A",
        "explanation": "Ƙididdiga tana kwatanta sashi da gaba ɗaya: ana raba adadin rukunin (mata) da jimilla, sannan a ninka da 100 don samun kashi. Dole ne koyaushe a nuna lambar da ke bayan kashi, domin ƙididdiga da aka lissafta kan mutane kaɗan sosai ba abin dogaro ba ne."
      }
    ],
    "reflection": "Ku yi tunani kan lamba ta gaba ɗaya da kuke gabatarwa koyaushe a aikinku — jimillar masu amfana, ƙididdigar halarta, ko adadin sayarwa. Idan kuka raba ta bisa yanki ko bisa jinsi, wane giɓi za ku iya gano? Kuma shin wannan lamba za ta fi bayyana ta matsakaici ko ta matsakaicin tsakiya?",
    "glossary": [
      {
        "term": "Tebur mai giciye (pivot)",
        "definition": "Kayan aikin tebur na lissafi (Excel, LibreOffice, Google Sheets) da ke taƙaita jerin bayanai a atomatik ta hanyar tarawa da ƙidaya su bisa rukuni. A Turanci « pivot table ». Kamar na'urar da take tsara tarin hatsi gauraye a buhuna masu lakabi."
      },
      {
        "term": "Alama (KPI)",
        "definition": "Lamba da ke taimakawa amsa tambaya bayyananniya da yanke shawara. KPI na nufin « alamar muhimmanci na aiki ». Kyakkyawar alama tana dacewa cikin jumla bayyananniya guda kuma tana hidimar aiki, ba rahoto kawai ba."
      },
      {
        "term": "Tarawa (Agrégation)",
        "definition": "Aikin haɗa bayanai da yawa zuwa lamba guda ta gaba ɗaya — misali tara dukkan masu amfana daga dukkan yankuna don samun jimilla ta gaba ɗaya."
      },
      {
        "term": "Rabuwa bisa rukuni (Désagrégation)",
        "definition": "Akasin tarawa: raba lamba ta gaba ɗaya bisa rukunai (yanki, jinsi, shekaru) don ganin bambance-bambancen da jimilla ke ɓoyewa. Mai mahimmanci don gano rashin daidaito."
      },
      {
        "term": "Matsakaicin tsakiya (Médiane)",
        "definition": "Ƙimar tsakiya idan an tsara dukkan lambobi daga mafi ƙanƙanta zuwa mafi girma: rabin yana ƙasa, rabin yana sama. Ya fi gaskiya da matsakaici idan 'yan ƙimomi masu matuƙa suka ɓata lissafin."
      },
      {
        "term": "Ƙididdiga (kashi)",
        "definition": "Kwatanta sashi da gaba ɗaya, da aka bayyana kan 100. Ana raba sashi da jimilla a ninka da 100. Koyaushe ku nuna lambar da ke bayan kashi, musamman kan ƙananan rukunai."
      }
    ]
  }
};
