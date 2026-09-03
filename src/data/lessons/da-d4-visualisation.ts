import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Analyse de Données » — leçon d4 (Visualiser les résultats — le bon graphique pour la bonne question)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const daLessonD4: Record<Language, LessonContent> = {
  "fr": {
    "id": "d4",
    "lessonNumber": 4,
    "title": "Visualiser les résultats — le bon graphique pour la bonne question",
    "objective": "À la fin de cette leçon, vous saurez choisir le type de graphique adapté à la question que vous posez : comparer, montrer une évolution, ou répartir un tout. Vous saurez produire une visualisation claire, honnête et lisible — même sur l'écran d'un téléphone ou imprimée en noir et blanc. Vous saurez aussi repérer et éviter les graphiques trompeurs qui déforment votre message devant vos collègues et vos bailleurs.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un graphique répond à une question",
        "body": "Avant d'ouvrir Excel ou Google Sheets, posez-vous une seule question : « Qu'est-ce que je veux montrer ? » Un graphique n'est pas une décoration. C'est une réponse visuelle à une question précise. Si vous ne savez pas quelle est la question, aucun graphique ne sera bon, même le plus joli.\n\nLa plupart des questions tiennent en trois familles. Voulez-vous comparer des choses entre elles — par exemple le nombre d'inscriptions à Niamey, Maradi et Zinder ? Voulez-vous montrer une évolution dans le temps — par exemple comment les inscriptions ont augmenté de janvier à juin ? Ou voulez-vous montrer les parts d'un tout — par exemple quelle proportion de vos bénéficiaires sont des femmes, des hommes, des jeunes ? Chaque famille de question appelle un type de graphique différent.\n\nC'est comme choisir un outil dans une boîte. On ne plante pas un clou avec une scie. De la même façon, on ne montre pas une évolution avec un camembert. Retenez la règle simple de cette leçon : le bon graphique pour la bonne question. Une fois la question claire, le choix devient évident."
      },
      {
        "title": "Les 3 graphiques de base",
        "body": "Le graphique en barres sert à comparer. Chaque barre représente une catégorie — un village, une région, un mois, une activité — et sa hauteur (ou sa longueur) indique la valeur. C'est le graphique le plus facile à lire, même pour quelqu'un qui n'a pas l'habitude. Pour comparer le rendement de mil entre cinq villages, ou le nombre de bénéficiaires par région, la barre est presque toujours le bon choix. Astuce : triez les barres de la plus grande à la plus petite, le message saute aux yeux.\n\nLa courbe, aussi appelée graphique en ligne, sert à montrer une évolution dans le temps. L'axe horizontal porte le temps (les mois, les années), et la ligne monte ou descend pour montrer la tendance. Pour suivre l'évolution mensuelle des inscriptions ou des distributions, la courbe raconte l'histoire d'un seul regard : ça monte, ça baisse, ça stagne.\n\nLe camembert, ou graphique en secteurs, sert à montrer les parts d'un tout — quand l'ensemble fait 100 %. Par exemple, la répartition de votre budget, ou la part de femmes et d'hommes parmi vos bénéficiaires. Mais attention : le camembert n'est lisible que si vous avez 2 à 4 parts. Au-delà, l'œil ne distingue plus rien. Utilisez-le avec parcimonie. En cas de doute, une barre fait souvent mieux le travail."
      },
      {
        "title": "Rendre lisible et honnête",
        "body": "Un graphique clair commence par un titre clair. Le titre doit dire ce que le lecteur voit, sans deviner : « Inscriptions par région — premier semestre 2026 » vaut mille fois mieux que « Graphique 3 ». De même, chaque axe doit être étiqueté : on doit savoir ce que représentent les chiffres (des personnes ? des kilos ? des FCFA ?) et l'unité de temps. Un graphique sans titre ni étiquettes oblige le lecteur à deviner, et un lecteur qui devine se trompe.\n\nL'honnêteté passe par l'échelle. L'axe des valeurs doit, dans la grande majorité des cas, commencer à zéro. Si vous le faites démarrer à 80 au lieu de 0, une petite différence paraîtra énorme — c'est trompeur, même sans le vouloir. Une visualisation honnête laisse les chiffres parler sans les exagérer. Vous présentez des résultats à un bailleur : votre crédibilité dépend de cette rigueur.\n\nEnfin, pensez à l'écran du téléphone et à l'imprimante en noir et blanc. Beaucoup de vos collègues liront votre graphique sur un petit écran, parfois imprimé sans couleur. Limitez-vous à quelques couleurs bien contrastées, des étiquettes assez grandes, et évitez de mettre dix nuances qui se ressemblent. Un bon test : imprimez en noir et blanc. Si on distingue encore les éléments, votre graphique est solide."
      },
      {
        "title": "Les pièges à éviter",
        "body": "Le premier piège est l'axe tronqué. C'est quand l'axe des valeurs ne commence pas à zéro. Imaginez deux villages avec 95 et 100 inscriptions : si l'axe commence à 90, le second village paraît deux fois plus grand alors que l'écart réel est minime. Ce piège déforme la réalité et, devant un bailleur attentif, il peut ruiner votre crédibilité. Sauf cas très particulier, commencez toujours à zéro.\n\nLe deuxième piège est le camembert surchargé. Un camembert à 10 ou 12 parts devient illisible : les petites tranches se confondent, les couleurs se ressemblent, et personne ne retient le message. Si vous avez beaucoup de catégories, passez à un graphique en barres trié, ou regroupez les petites parts dans une catégorie « Autres ».\n\nLe troisième piège est l'effet 3D et la décoration inutile. Les graphiques en relief, les ombres, les dégradés font joli mais déforment les proportions et fatiguent l'œil, surtout sur un petit écran. Le quatrième piège est de vouloir tout dire sur un seul graphique. Un graphique = une idée. Si vous voulez montrer trois choses, faites trois graphiques simples plutôt qu'un seul illisible. La sobriété est votre meilleure alliée."
      }
    ],
    "example": {
      "title": "Du camembert à 12 parts au graphique en barres : un message qui devient évident",
      "challenge": "Une équipe de suivi-évaluation d'une coopérative agricole prépare la réunion trimestrielle avec son bailleur. Elle veut montrer la répartition des bénéficiaires entre ses 12 villages d'intervention. Elle présente d'abord un camembert à 12 parts, avec 12 couleurs proches. Sur le projecteur, puis imprimé en noir et blanc, personne ne distingue les tranches. Le bailleur n'arrive pas à voir quels villages comptent le plus de bénéficiaires, et la décision sur l'allocation des ressources est reportée à la réunion suivante.",
      "solution": "L'équipe reprend les mêmes données et les met dans un graphique en barres horizontales, une barre par village, triées du plus grand au plus petit nombre de bénéficiaires. Elle ajoute un titre clair (« Bénéficiaires par village — trimestre 2 »), étiquette l'axe en « nombre de personnes », et n'utilise qu'une seule couleur. Le graphique reste lisible même imprimé en noir et blanc, et tient sur un écran de téléphone.",
      "impact": "En réunion, le bailleur identifie en quelques secondes les trois villages les plus couverts et les deux moins couverts. La discussion sur le rééquilibrage des ressources, prévue pour durer, est tranchée le jour même au lieu d'être reportée d'un trimestre. L'équipe estime avoir gagné environ trois mois sur cette décision. Le même jeu de données, mieux visualisé, a transformé une réunion bloquée en décision concrète."
    },
    "practice": {
      "title": "Choisir et construire le bon graphique pour une question",
      "instructions": [
        "Prenez un petit jeu de données réel de votre travail (par exemple : nombre d'inscriptions par mois sur six mois, ou nombre de bénéficiaires par région) et notez en une phrase la question que vous voulez illustrer : comparer, montrer une évolution, ou répartir un tout ?",
        "Dans Excel, Google Sheets ou LibreOffice Calc (gratuit) sur votre téléphone ou un ordinateur de base, sélectionnez vos données et insérez le graphique adapté à votre question : barres pour comparer, courbe pour une évolution dans le temps, camembert seulement si vous avez 2 à 4 parts.",
        "Ajoutez un titre clair qui dit ce que l'on voit, étiquetez chaque axe avec son unité, et vérifiez que l'axe des valeurs commence à zéro ; puis affichez le graphique en noir et blanc (ou imprimez-le) pour tester sa lisibilité."
      ],
      "observation": "Demandez-vous : un collègue qui n'a pas vos données comprend-il le message en moins de cinq secondes, sans explication orale ? Si oui, votre graphique fait son travail. Si non, le type de graphique est peut-être inadapté à la question, ou il y a trop d'informations sur une seule image. Un bon graphique se comprend seul, sur n'importe quel écran."
    },
    "quiz": [
      {
        "question": "Vous voulez comparer le nombre de bénéficiaires entre cinq villages. Quel graphique choisir ?",
        "options": [
          {
            "key": "A",
            "text": "Un graphique en barres"
          },
          {
            "key": "B",
            "text": "Une courbe (graphique en ligne)"
          },
          {
            "key": "C",
            "text": "Un camembert à cinq parts"
          },
          {
            "key": "D",
            "text": "Un graphique en 3D avec ombres"
          }
        ],
        "answer": "A",
        "explanation": "Comparer des catégories entre elles (ici, des villages) est exactement le rôle du graphique en barres. Chaque barre représente un village et sa hauteur indique le nombre de bénéficiaires. Triées de la plus grande à la plus petite, les barres rendent la comparaison immédiate."
      },
      {
        "question": "Vous voulez montrer comment les inscriptions ont évolué chaque mois, de janvier à juin. Quel graphique est le plus adapté ?",
        "options": [
          {
            "key": "A",
            "text": "Un camembert"
          },
          {
            "key": "B",
            "text": "Une courbe (graphique en ligne)"
          },
          {
            "key": "C",
            "text": "Un seul grand chiffre"
          },
          {
            "key": "D",
            "text": "Un tableau de 200 lignes"
          }
        ],
        "answer": "B",
        "explanation": "Pour une évolution dans le temps, la courbe est le bon choix : l'axe horizontal porte les mois et la ligne montre la tendance d'un seul regard — ça monte, ça baisse ou ça stagne. Le camembert, lui, ne sert qu'à montrer des parts d'un tout, pas une évolution."
      },
      {
        "question": "Un collègue présente un graphique où l'axe des valeurs commence à 80 au lieu de 0, ce qui fait paraître un petit écart énorme. Comment qualifier ce graphique ?",
        "options": [
          {
            "key": "A",
            "text": "Honnête, car les chiffres sont exacts"
          },
          {
            "key": "B",
            "text": "Recommandé, car il économise de la place"
          },
          {
            "key": "C",
            "text": "Trompeur, à cause de l'axe tronqué"
          },
          {
            "key": "D",
            "text": "Parfait pour un téléphone"
          }
        ],
        "answer": "C",
        "explanation": "Un axe qui ne commence pas à zéro est dit « tronqué » : il exagère visuellement les écarts et déforme la réalité, même si les chiffres saisis sont exacts. Sauf cas très particulier, l'axe des valeurs doit commencer à zéro pour rester honnête, surtout devant un bailleur."
      },
      {
        "question": "À quoi sert principalement la légende d'un graphique ?",
        "options": [
          {
            "key": "A",
            "text": "À décorer le graphique avec des couleurs"
          },
          {
            "key": "B",
            "text": "À indiquer ce que représente chaque couleur ou chaque série"
          },
          {
            "key": "C",
            "text": "À cacher les chiffres qui dérangent"
          },
          {
            "key": "D",
            "text": "À remplacer le titre du graphique"
          }
        ],
        "answer": "B",
        "explanation": "La légende explique ce que représente chaque couleur ou chaque série de données. Sans elle, le lecteur ne sait pas à quoi correspondent les barres ou les courbes. Elle complète le titre et les axes : ensemble, ils permettent de comprendre le graphique sans explication orale."
      },
      {
        "question": "Vous devez montrer la répartition de vos bénéficiaires entre 12 villages. Pourquoi un camembert est-il une mauvaise idée ici ?",
        "options": [
          {
            "key": "A",
            "text": "Parce que le camembert est interdit dans les rapports"
          },
          {
            "key": "B",
            "text": "Parce qu'un camembert ne peut montrer que des évolutions dans le temps"
          },
          {
            "key": "C",
            "text": "Parce qu'avec autant de parts, les tranches deviennent illisibles ; un graphique en barres trié est plus clair"
          },
          {
            "key": "D",
            "text": "Parce que les camemberts ne fonctionnent pas dans Excel"
          }
        ],
        "answer": "C",
        "explanation": "Un camembert n'est lisible qu'avec 2 à 4 parts. À 12 parts, les tranches se confondent et les couleurs se ressemblent, surtout sur un petit écran ou en noir et blanc. Pour beaucoup de catégories, un graphique en barres trié — ou un regroupement dans une catégorie « Autres » — rend le message bien plus clair."
      }
    ],
    "reflection": "Repensez à un graphique que vous avez déjà présenté ou reçu dans votre travail. Quelle question voulait-il vraiment répondre, et le type de graphique choisi était-il le bon ? Si vous deviez le refaire aujourd'hui avec une seule de vos données réelles, comment le rendriez-vous plus clair, plus honnête et plus lisible sur un téléphone ?",
    "glossary": [
      {
        "term": "Graphique en barres",
        "definition": "Graphique qui compare des catégories entre elles à l'aide de barres dont la hauteur ou la longueur indique la valeur. Idéal pour comparer des villages, des régions ou des mois. Trier les barres rend la comparaison plus claire."
      },
      {
        "term": "Courbe (graphique en ligne)",
        "definition": "Graphique qui relie des points par une ligne pour montrer une évolution dans le temps. L'axe horizontal porte le temps (mois, années) et la ligne révèle la tendance : hausse, baisse ou stabilité."
      },
      {
        "term": "Camembert (secteurs)",
        "definition": "Graphique circulaire divisé en parts qui montrent la proportion de chaque catégorie dans un tout valant 100 %. Lisible seulement avec 2 à 4 parts ; au-delà, il devient confus et un graphique en barres est préférable."
      },
      {
        "term": "Axe",
        "definition": "Ligne de référence d'un graphique. L'axe horizontal porte souvent les catégories ou le temps, l'axe vertical porte les valeurs. Chaque axe doit être étiqueté avec son unité (personnes, kilos, FCFA, mois)."
      },
      {
        "term": "Légende",
        "definition": "Petit encadré qui indique ce que représente chaque couleur ou chaque série de données du graphique. Elle aide le lecteur à comprendre le graphique sans explication orale."
      },
      {
        "term": "Échelle",
        "definition": "Façon dont les valeurs sont graduées sur un axe. Une échelle honnête commence en général à zéro ; une échelle tronquée (qui ne part pas de zéro) exagère les écarts et trompe le lecteur."
      }
    ]
  },
  "en": {
    "id": "d4",
    "lessonNumber": 4,
    "title": "Visualize results",
    "objective": "By the end of this lesson, you will be able to choose the right type of chart for the question you are asking: comparing, showing change over time, or breaking down a whole. You will know how to produce a clear, honest, and readable visualization — even on a phone screen or printed in black and white. You will also know how to spot and avoid misleading charts that distort your message in front of colleagues and donors.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A chart answers a question",
        "body": "Before you open Excel or Google Sheets, ask yourself a single question: \"What do I want to show?\" A chart is not decoration. It is a visual answer to a precise question. If you do not know what the question is, no chart will be good — not even the prettiest one.\n\nMost questions fall into three families. Do you want to compare things with one another — for example, the number of enrollments in Niamey, Maradi, and Zinder? Do you want to show change over time — for example, how enrollments rose from January to June? Or do you want to show the parts of a whole — for example, what proportion of your beneficiaries are women, men, or youth? Each family of question calls for a different type of chart.\n\nIt is like choosing a tool from a toolbox. You do not hammer a nail with a saw. In the same way, you do not show change over time with a pie chart. Remember the simple rule of this lesson: the right chart for the right question. Once the question is clear, the choice becomes obvious."
      },
      {
        "title": "The 3 basic charts",
        "body": "The bar chart is used to compare. Each bar represents a category — a village, a region, a month, an activity — and its height (or length) shows the value. It is the easiest chart to read, even for someone who is not used to charts. To compare millet yields across five villages, or the number of beneficiaries per region, the bar is almost always the right choice. Tip: sort the bars from largest to smallest, and the message jumps out.\n\nThe line chart, also called a curve, is used to show change over time. The horizontal axis carries time (months, years), and the line goes up or down to show the trend. To track the monthly evolution of enrollments or distributions, the line tells the story at a glance: it rises, it falls, it levels off.\n\nThe pie chart is used to show the parts of a whole — when the total makes 100%. For example, the breakdown of your budget, or the share of women and men among your beneficiaries. But be careful: a pie chart is only readable if you have 2 to 4 slices. Beyond that, the eye can no longer tell them apart. Use it sparingly. When in doubt, a bar chart often does the job better."
      },
      {
        "title": "Making it readable and honest",
        "body": "A clear chart starts with a clear title. The title must say what the reader is looking at, with no guessing: \"Enrollments by region — first half of 2026\" is a thousand times better than \"Chart 3\". Likewise, each axis must be labeled: the reader must know what the numbers represent (people? kilos? CFA francs?) and the unit of time. A chart with no title and no labels forces the reader to guess, and a reader who guesses gets it wrong.\n\nHonesty comes through the scale. The value axis should, in the vast majority of cases, start at zero. If you make it start at 80 instead of 0, a small difference will look enormous — that is misleading, even unintentionally. An honest visualization lets the numbers speak without exaggerating them. When you present results to a donor, your credibility depends on this rigor.\n\nFinally, think about the phone screen and the black-and-white printer. Many of your colleagues will read your chart on a small screen, sometimes printed without color. Stick to a few well-contrasted colors, labels large enough to read, and avoid using ten shades that look alike. A good test: print it in black and white. If you can still tell the elements apart, your chart is solid."
      },
      {
        "title": "Traps to avoid",
        "body": "The first trap is the truncated axis. This is when the value axis does not start at zero. Imagine two villages with 95 and 100 enrollments: if the axis starts at 90, the second village looks twice as large, when the real gap is tiny. This trap distorts reality and, in front of an attentive donor, it can ruin your credibility. Except in very specific cases, always start at zero.\n\nThe second trap is the overloaded pie chart. A pie chart with 10 or 12 slices becomes unreadable: the small slices blur together, the colors look alike, and no one retains the message. If you have many categories, switch to a sorted bar chart, or group the small slices into an \"Other\" category.\n\nThe third trap is the 3D effect and useless decoration. Charts in relief, shadows, and gradients look pretty but distort proportions and tire the eye, especially on a small screen. The fourth trap is trying to say everything on a single chart. One chart = one idea. If you want to show three things, make three simple charts rather than a single unreadable one. Simplicity is your best ally."
      }
    ],
    "example": {
      "title": "From a 12-slice pie chart to a bar chart: a message that becomes obvious",
      "challenge": "A monitoring and evaluation team at an agricultural cooperative is preparing the quarterly meeting with its donor. It wants to show how beneficiaries are distributed across its 12 intervention villages. It first presents a 12-slice pie chart, with 12 similar colors. On the projector, and then printed in black and white, no one can tell the slices apart. The donor cannot see which villages have the most beneficiaries, and the decision on resource allocation is postponed to the next meeting.",
      "solution": "The team takes the same data and puts it into a horizontal bar chart, one bar per village, sorted from the largest to the smallest number of beneficiaries. It adds a clear title (\"Beneficiaries by village — quarter 2\"), labels the axis \"number of people\", and uses only one color. The chart stays readable even when printed in black and white, and fits on a phone screen.",
      "impact": "In the meeting, the donor identifies the three most-covered villages and the two least-covered ones within seconds. The discussion on rebalancing resources, expected to drag on, is settled the same day instead of being postponed for a quarter. The team estimates it saved about three months on this decision. The same dataset, better visualized, turned a stalled meeting into a concrete decision."
    },
    "practice": {
      "title": "Choosing and building the right chart for a question",
      "instructions": [
        "Take a small, real dataset from your work (for example: number of enrollments per month over six months, or number of beneficiaries per region) and write down in one sentence the question you want to illustrate: compare, show change over time, or break down a whole?",
        "In Excel, Google Sheets, or LibreOffice Calc (free) on your phone or a basic computer, select your data and insert the chart that fits your question: bars to compare, a line for change over time, a pie chart only if you have 2 to 4 slices.",
        "Add a clear title that says what is being shown, label each axis with its unit, and check that the value axis starts at zero; then view the chart in black and white (or print it) to test its readability."
      ],
      "observation": "Ask yourself: can a colleague who does not have your data understand the message in less than five seconds, with no spoken explanation? If yes, your chart is doing its job. If not, the chart type may not fit the question, or there is too much information on a single image. A good chart explains itself, on any screen."
    },
    "quiz": [
      {
        "question": "You want to compare the number of beneficiaries across five villages. Which chart should you choose?",
        "options": [
          {
            "key": "A",
            "text": "A bar chart"
          },
          {
            "key": "B",
            "text": "A line chart (curve)"
          },
          {
            "key": "C",
            "text": "A pie chart with five slices"
          },
          {
            "key": "D",
            "text": "A 3D chart with shadows"
          }
        ],
        "answer": "A",
        "explanation": "Comparing categories with one another (here, villages) is exactly the role of the bar chart. Each bar represents a village and its height shows the number of beneficiaries. Sorted from largest to smallest, the bars make the comparison instant."
      },
      {
        "question": "You want to show how enrollments changed each month, from January to June. Which chart is most suitable?",
        "options": [
          {
            "key": "A",
            "text": "A pie chart"
          },
          {
            "key": "B",
            "text": "A line chart (curve)"
          },
          {
            "key": "C",
            "text": "A single large number"
          },
          {
            "key": "D",
            "text": "A 200-row table"
          }
        ],
        "answer": "B",
        "explanation": "For change over time, the line chart is the right choice: the horizontal axis carries the months and the line shows the trend at a glance — rising, falling, or leveling off. The pie chart, on the other hand, only shows parts of a whole, not change over time."
      },
      {
        "question": "A colleague presents a chart where the value axis starts at 80 instead of 0, making a small gap look enormous. How would you describe this chart?",
        "options": [
          {
            "key": "A",
            "text": "Honest, because the numbers are accurate"
          },
          {
            "key": "B",
            "text": "Recommended, because it saves space"
          },
          {
            "key": "C",
            "text": "Misleading, because of the truncated axis"
          },
          {
            "key": "D",
            "text": "Perfect for a phone"
          }
        ],
        "answer": "C",
        "explanation": "An axis that does not start at zero is called \"truncated\": it visually exaggerates the gaps and distorts reality, even if the entered numbers are accurate. Except in very specific cases, the value axis should start at zero to stay honest, especially in front of a donor."
      },
      {
        "question": "What is the main purpose of a chart's legend?",
        "options": [
          {
            "key": "A",
            "text": "To decorate the chart with colors"
          },
          {
            "key": "B",
            "text": "To indicate what each color or series represents"
          },
          {
            "key": "C",
            "text": "To hide the inconvenient numbers"
          },
          {
            "key": "D",
            "text": "To replace the chart's title"
          }
        ],
        "answer": "B",
        "explanation": "The legend explains what each color or data series represents. Without it, the reader does not know what the bars or lines correspond to. It complements the title and the axes: together, they let the reader understand the chart without a spoken explanation."
      },
      {
        "question": "You need to show how your beneficiaries are distributed across 12 villages. Why is a pie chart a bad idea here?",
        "options": [
          {
            "key": "A",
            "text": "Because pie charts are forbidden in reports"
          },
          {
            "key": "B",
            "text": "Because a pie chart can only show change over time"
          },
          {
            "key": "C",
            "text": "Because with that many slices, the segments become unreadable; a sorted bar chart is clearer"
          },
          {
            "key": "D",
            "text": "Because pie charts do not work in Excel"
          }
        ],
        "answer": "C",
        "explanation": "A pie chart is only readable with 2 to 4 slices. At 12 slices, the segments blur together and the colors look alike, especially on a small screen or in black and white. For many categories, a sorted bar chart — or grouping the small parts into an \"Other\" category — makes the message far clearer."
      }
    ],
    "reflection": "Think back to a chart you have presented or received at work. What question did it really aim to answer, and was the chart type chosen the right one? If you had to redo it today with one of your real datasets, how would you make it clearer, more honest, and more readable on a phone?",
    "glossary": [
      {
        "term": "Graphique en barres",
        "definition": "Bar chart: a chart that compares categories with one another using bars whose height or length shows the value. Ideal for comparing villages, regions, or months. Sorting the bars makes the comparison clearer."
      },
      {
        "term": "Courbe (graphique en ligne)",
        "definition": "Line chart (curve): a chart that connects points with a line to show change over time. The horizontal axis carries time (months, years) and the line reveals the trend: rising, falling, or stable."
      },
      {
        "term": "Camembert (secteurs)",
        "definition": "Pie chart: a circular chart divided into slices that show the proportion of each category in a whole worth 100%. Readable only with 2 to 4 slices; beyond that it becomes confusing, and a bar chart is preferable."
      },
      {
        "term": "Axe",
        "definition": "Axis: a reference line of a chart. The horizontal axis often carries categories or time, the vertical axis carries the values. Each axis must be labeled with its unit (people, kilos, CFA francs, months)."
      },
      {
        "term": "Légende",
        "definition": "Legend: a small box that indicates what each color or data series of the chart represents. It helps the reader understand the chart without a spoken explanation."
      },
      {
        "term": "Échelle",
        "definition": "Scale: the way values are graduated on an axis. An honest scale generally starts at zero; a truncated scale (one that does not start at zero) exaggerates the gaps and misleads the reader."
      }
    ]
  },
  "ha": {
    "id": "d4",
    "lessonNumber": 4,
    "title": "Nuna sakamako",
    "objective": "A ƙarshen wannan darasi, za ku iya zaɓar irin zane-zanen da ya dace da tambayar da kuke yi: kwatanta abubuwa, nuna canji a cikin lokaci, ko raba abu ɗaya cikin sassa. Za ku san yadda ake samar da zane mai bayyana, na gaskiya, kuma mai sauƙin karatu — ko da a allon wayar hannu ko an buga shi a baki da fari. Za ku kuma san yadda ake gane da guje wa zane-zanen yaudara waɗanda ke gurɓata saƙonku a gaban abokan aiki da masu ba da taimako.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Zane yana amsa tambaya",
        "body": "Kafin ku buɗe Excel ko Google Sheets, ku yi wa kanku tambaya ɗaya kawai: « Me nake son nunawa? » Zane ba ado ba ne. Amsa ce ta gani ga wata tambaya bayyananniya. Idan ba ku san menene tambayar ba, babu wani zane da zai yi kyau — ko mafi kyanta ma.\n\nYawancin tambayoyi suna cikin iyalai uku. Kuna son kwatanta abubuwa da juna ne — misali yawan masu shiga rajista a Niamey, Maradi, da Zinder? Kuna son nuna canji a cikin lokaci ne — misali yadda rajista ta ƙaru daga Janairu zuwa Yuni? Ko kuna son nuna sassan abu ɗaya ne — misali yawan mata, maza, da matasa a cikin masu amfana da ku? Kowane iyalin tambaya yana buƙatar wani irin zane daban.\n\nKamar zaɓar kayan aiki daga akwati. Ba a kaɗa ƙusa da zarto. Haka nan, ba a nuna canji a cikin lokaci da zanen kek (camembert). Ku tuna ƙa'idar mai sauƙi ta wannan darasi: zane mai kyau don tambaya mai kyau. Da zarar tambayar ta bayyana, zaɓin ya zama a fili."
      },
      {
        "title": "Zane-zane uku na asali",
        "body": "Zanen sanduna (graphique en barres) yana aiki don kwatantawa. Kowane sanda yana wakiltar wani rukuni — ƙauye, yanki, wata, aiki — kuma tsayinsa (ko tsawonsa) yana nuna ƙimar. Shi ne zane mafi sauƙin karatu, ko ga wanda bai saba ba. Don kwatanta yawan hatsi tsakanin ƙauyuka biyar, ko yawan masu amfana a kowane yanki, sanda kusan koyaushe shi ne zaɓi mai kyau. Shawara: ku jera sanduna daga mafi girma zuwa mafi ƙanƙanta, saƙon zai bayyana nan take.\n\nLanƙwasa (courbe), wadda kuma ake kira zanen layi, tana aiki don nuna canji a cikin lokaci. Madaidaicin layi a kwance yana ɗauke da lokaci (watanni, shekaru), kuma layin yana hauhawa ko sauka don nuna yanayin. Don bin diddigin canjin rajista ko rabe-raben kowane wata, lanƙwasa tana ba da labari da kallo ɗaya: yana hauhawa, yana sauka, ko yana tsayawa.\n\nZanen kek (camembert, secteurs) yana aiki don nuna sassan abu ɗaya — lokacin da jimla ta kai kashi 100. Misali, rabuwar kasafin kuɗinku, ko rabon mata da maza a cikin masu amfana. Amma a lura: zanen kek yana bayyana ne kawai idan kuna da sassa 2 zuwa 4. Bayan haka, ido ba zai iya bambance komai ba. Ku yi amfani da shi a hankali. Idan kuna shakka, sanda yawanci yana yin aikin gara."
      },
      {
        "title": "Sanya shi mai sauƙin karatu kuma na gaskiya",
        "body": "Zane mai bayyana yana farawa da taken bayyananne. Taken dole ne ya faɗi abin da mai karatu ke gani, ba tare da hasashe ba: « Rajista a kowane yanki — rabin farko na 2026 » ya fi « Zane 3 » sau dubu. Haka kuma, dole ne a yi wa kowane madaidaici lakabi: dole ne mai karatu ya san abin da lambobi ke wakilta (mutane? kilo? FCFA?) da naúrar lokaci. Zane ba tare da take ko lakabi ba yana tilasta wa mai karatu hasashe, kuma mai karatu da ke hasashe yana yin kuskure.\n\nGaskiya tana zuwa ta hanyar sikeli (échelle). Madaidaicin ƙima ya kamata, a mafi yawan lokuta, ya fara daga sifili. Idan kun sa ya fara daga 80 maimakon 0, ƙaramin bambanci zai bayyana mai girma sosai — wannan yaudara ce, ko ba da gangan ba. Zane na gaskiya yana barin lambobi su yi magana ba tare da ƙarawa ba. Kuna gabatar da sakamako ga mai ba da taimako: amincin ku ya dogara da wannan tsanaki.\n\nA ƙarshe, ku yi tunani game da allon wayar hannu da na'urar buga takarda a baki da fari. Yawancin abokan aikinku za su karanta zanenku a ƙaramin allo, wani lokaci an buga ba tare da launi ba. Ku takaita kanku ga launuka kaɗan masu bambanci sosai, lakabi masu girma isasshe, kuma ku guji sanya inuwa goma masu kama da juna. Gwaji mai kyau: ku buga shi a baki da fari. Idan har yanzu ana iya bambance abubuwan, zanenku yana da ƙarfi."
      },
      {
        "title": "Tarkuna da za a guje wa",
        "body": "Tarko na farko shi ne madaidaicin da aka yanke (axe tronqué). Wannan shi ne lokacin da madaidaicin ƙima bai fara daga sifili ba. Ku yi tunanin ƙauyuka biyu masu rajista 95 da 100: idan madaidaicin ya fara daga 90, ƙauye na biyu zai bayyana sau biyu girma, alhali bambancin gaskiya ƙanƙani ne. Wannan tarko yana gurɓata gaskiya kuma, a gaban mai ba da taimako mai kulawa, yana iya lalata amincinku. Sai da yanayi na musamman sosai, ku fara koyaushe daga sifili.\n\nTarko na biyu shi ne zanen kek mai cika da yawa. Zanen kek mai sassa 10 ko 12 yana zama wanda ba a iya karantawa: ƙananan sassa suna haɗuwa, launuka suna kama da juna, kuma babu wanda zai riƙe saƙon. Idan kuna da rukunoni masu yawa, ku koma zuwa zanen sanduna da aka jera, ko ku haɗa ƙananan sassa cikin rukunin « Sauran ».\n\nTarko na uku shi ne tasirin 3D da ado marar amfani. Zane-zanen da ke da tsayi, inuwa, da haske suna kyan gani amma suna gurɓata gwargwado kuma suna gajiyar da ido, musamman a ƙaramin allo. Tarko na huɗu shi ne son faɗin komai a zane ɗaya kawai. Zane ɗaya = ra'ayi ɗaya. Idan kuna son nuna abubuwa uku, ku yi zane-zane uku masu sauƙi maimakon ɗaya wanda ba a iya karantawa. Sauƙi shi ne abokin ku mafi kyau."
      }
    ],
    "example": {
      "title": "Daga zanen kek mai sassa 12 zuwa zanen sanduna: saƙo da ya zama a fili",
      "challenge": "Wata ƙungiyar bin diddigi da tantancewa ta wata haɗin gwiwar noma tana shirin taron kwata-kwata da mai ba da taimakonta. Tana son nuna rabuwar masu amfana tsakanin ƙauyuka 12 da take aiki a ciki. Da farko ta gabatar da zanen kek mai sassa 12, da launuka 12 masu kama da juna. A na'urar nuni, sannan an buga a baki da fari, babu wanda zai iya bambance sassa. Mai ba da taimako bai iya ganin waɗanne ƙauyuka ne suka fi yawan masu amfana ba, kuma an dage shawarar rabon kayan aiki zuwa taro na gaba.",
      "solution": "Ƙungiyar ta ɗauki bayanai iri ɗaya ta sanya su a zanen sanduna a kwance, sanda ɗaya kowane ƙauye, an jera su daga mafi girma zuwa mafi ƙanƙantar yawan masu amfana. Ta ƙara take bayyananne (« Masu amfana a kowane ƙauye — kwata na 2 »), ta yi wa madaidaici lakabi « yawan mutane », kuma ta yi amfani da launi ɗaya kawai. Zanen ya ci gaba da bayyana ko da an buga a baki da fari, kuma yana shiga a allon wayar hannu.",
      "impact": "A taron, mai ba da taimako ya gane cikin daƙiƙu kaɗan ƙauyuka uku da suka fi rufuwa da biyu da suka fi ƙarancin rufuwa. An warware tattaunawa kan daidaita rabon kayan aiki, wadda ake tsammanin za ta yi tsawo, a ranar guda maimakon a dage ta na tsawon kwata ɗaya. Ƙungiyar ta kiyasta cewa ta samu ribar kusan watanni uku kan wannan shawara. Bayanai iri ɗaya, da aka nuna mafi kyau, sun mai da taron da ya tsaya zuwa shawara ta zahiri."
    },
    "practice": {
      "title": "Zaɓa da gina zane mai kyau don tambaya",
      "instructions": [
        "Ku ɗauki ƙaramin tsarin bayanai na gaskiya daga aikinku (misali: yawan rajista a kowane wata cikin watanni shida, ko yawan masu amfana a kowane yanki) kuma ku rubuta a cikin jumla ɗaya tambayar da kuke son kwatantawa: kwatanta, nuna canji a cikin lokaci, ko raba abu ɗaya cikin sassa?",
        "A Excel, Google Sheets ko LibreOffice Calc (kyauta) a wayar hannu ko kwamfuta ta asali, ku zaɓi bayanan ku sannan ku saka zanen da ya dace da tambayarku: sanduna don kwatantawa, lanƙwasa don canji a cikin lokaci, zanen kek kawai idan kuna da sassa 2 zuwa 4.",
        "Ku ƙara take bayyananne da ke faɗin abin da ake gani, ku yi wa kowane madaidaici lakabi da naúrarsa, kuma ku tabbatar madaidaicin ƙima yana farawa daga sifili; sannan ku nuna zanen a baki da fari (ko ku buga shi) don gwada sauƙin karatunsa."
      ],
      "observation": "Ku tambayi kanku: shin abokin aiki da ba shi da bayananku zai fahimci saƙon a cikin ƙasa da daƙiƙu biyar, ba tare da bayani na baki ba? Idan eh, zanenku yana yin aikinsa. Idan a'a, mai yiwuwa irin zanen bai dace da tambayar ba, ko akwai bayanai da yawa a hoto ɗaya. Zane mai kyau yana fahimtar kansa, a kowane allo."
    },
    "quiz": [
      {
        "question": "Kuna son kwatanta yawan masu amfana tsakanin ƙauyuka biyar. Wane zane za ku zaɓa?",
        "options": [
          {
            "key": "A",
            "text": "Zanen sanduna"
          },
          {
            "key": "B",
            "text": "Lanƙwasa (zanen layi)"
          },
          {
            "key": "C",
            "text": "Zanen kek mai sassa biyar"
          },
          {
            "key": "D",
            "text": "Zanen 3D mai inuwa"
          }
        ],
        "answer": "A",
        "explanation": "Kwatanta rukunoni da juna (a nan, ƙauyuka) shi ne ainihin aikin zanen sanduna. Kowane sanda yana wakiltar ƙauye kuma tsayinsa yana nuna yawan masu amfana. An jera su daga mafi girma zuwa mafi ƙanƙanta, sanduna suna sa kwatanta ya zama nan take."
      },
      {
        "question": "Kuna son nuna yadda rajista ta canza kowane wata, daga Janairu zuwa Yuni. Wane zane ya fi dacewa?",
        "options": [
          {
            "key": "A",
            "text": "Zanen kek"
          },
          {
            "key": "B",
            "text": "Lanƙwasa (zanen layi)"
          },
          {
            "key": "C",
            "text": "Babban lamba guda ɗaya kawai"
          },
          {
            "key": "D",
            "text": "Tebur mai layuka 200"
          }
        ],
        "answer": "B",
        "explanation": "Don canji a cikin lokaci, lanƙwasa ita ce zaɓi mai kyau: madaidaicin layi a kwance yana ɗauke da watanni kuma layin yana nuna yanayin da kallo ɗaya — hauhawa, sauka, ko tsayawa. Zanen kek kuwa, yana nuna sassan abu ɗaya ne kawai, ba canji a cikin lokaci ba."
      },
      {
        "question": "Wani abokin aiki ya gabatar da zane inda madaidaicin ƙima ya fara daga 80 maimakon 0, wanda ke sa ƙaramin bambanci ya bayyana mai girma sosai. Yaya za ku siffanta wannan zane?",
        "options": [
          {
            "key": "A",
            "text": "Na gaskiya, domin lambobin daidai ne"
          },
          {
            "key": "B",
            "text": "An ba da shawara, domin yana adana sarari"
          },
          {
            "key": "C",
            "text": "Mai yaudara, saboda madaidaicin da aka yanke"
          },
          {
            "key": "D",
            "text": "Cikakke don wayar hannu"
          }
        ],
        "answer": "C",
        "explanation": "Madaidaicin da bai fara daga sifili ba ana kiransa « an yanke »: yana ƙara girmama bambance-bambance a gani kuma yana gurɓata gaskiya, ko da lambobin da aka shigar daidai ne. Sai da yanayi na musamman sosai, madaidaicin ƙima ya kamata ya fara daga sifili don ya kasance na gaskiya, musamman a gaban mai ba da taimako."
      },
      {
        "question": "Menene babban aikin alamar bayani (légende) ta zane?",
        "options": [
          {
            "key": "A",
            "text": "Don yi wa zanen ado da launuka"
          },
          {
            "key": "B",
            "text": "Don nuna abin da kowane launi ko jeri ke wakilta"
          },
          {
            "key": "C",
            "text": "Don ɓoye lambobin da ke damuwa"
          },
          {
            "key": "D",
            "text": "Don maye gurbin taken zanen"
          }
        ],
        "answer": "B",
        "explanation": "Alamar bayani tana bayyana abin da kowane launi ko jerin bayanai ke wakilta. Ba tare da ita ba, mai karatu ba ya san abin da sanduna ko lanƙwasoshi suka dace da shi ba. Tana cika take da madaidaitai: tare, suna ba da damar fahimtar zanen ba tare da bayani na baki ba."
      },
      {
        "question": "Dole ne ku nuna rabuwar masu amfana da ku tsakanin ƙauyuka 12. Me ya sa zanen kek mummunan ra'ayi ne a nan?",
        "options": [
          {
            "key": "A",
            "text": "Domin an haramta zanen kek a cikin rahotanni"
          },
          {
            "key": "B",
            "text": "Domin zanen kek na iya nuna canji a cikin lokaci kawai"
          },
          {
            "key": "C",
            "text": "Domin da sassa masu yawa haka, sassan suna zama waɗanda ba a iya karantawa; zanen sanduna da aka jera ya fi bayyana"
          },
          {
            "key": "D",
            "text": "Domin zanen kek ba ya aiki a Excel"
          }
        ],
        "answer": "C",
        "explanation": "Zanen kek yana bayyana ne kawai da sassa 2 zuwa 4. Da sassa 12, sassan suna haɗuwa kuma launuka suna kama da juna, musamman a ƙaramin allo ko a baki da fari. Don rukunoni masu yawa, zanen sanduna da aka jera — ko haɗa ƙananan sassa cikin rukunin « Sauran » — yana sa saƙon ya fi bayyana sosai."
      }
    ],
    "reflection": "Ku sake yin tunani kan zane da kuka taɓa gabatarwa ko karɓa a aikinku. Wace tambaya ce yake son amsawa da gaske, kuma irin zanen da aka zaɓa ya dace? Idan dole ne ku sake yin sa yau da ɗaya daga cikin bayananku na gaskiya, ta yaya za ku sa shi ya fi bayyana, ya fi gaskiya, kuma ya fi sauƙin karatu a wayar hannu?",
    "glossary": [
      {
        "term": "Graphique en barres",
        "definition": "Zanen sanduna: zane da ke kwatanta rukunoni da juna ta amfani da sanduna waɗanda tsayinsu ko tsawonsu ke nuna ƙimar. Ya dace don kwatanta ƙauyuka, yankuna, ko watanni. Jera sanduna yana sa kwatanta ya fi bayyana."
      },
      {
        "term": "Courbe (graphique en ligne)",
        "definition": "Lanƙwasa (zanen layi): zane da ke haɗa maki da layi don nuna canji a cikin lokaci. Madaidaicin layi a kwance yana ɗauke da lokaci (watanni, shekaru) kuma layin yana bayyana yanayin: hauhawa, sauka, ko tsayawa."
      },
      {
        "term": "Camembert (secteurs)",
        "definition": "Zanen kek: zane mai zagaye da aka raba shi cikin sassa waɗanda ke nuna gwargwadon kowane rukuni a cikin abu ɗaya wanda ya kai kashi 100. Yana bayyana ne kawai da sassa 2 zuwa 4; bayan haka yana zama mai rikitarwa, kuma zanen sanduna ya fi dacewa."
      },
      {
        "term": "Axe",
        "definition": "Madaidaici: layin ma'auni na zane. Madaidaicin layi a kwance yawanci yana ɗauke da rukunoni ko lokaci, madaidaicin tsaye yana ɗauke da ƙima. Dole ne a yi wa kowane madaidaici lakabi da naúrarsa (mutane, kilo, FCFA, watanni)."
      },
      {
        "term": "Légende",
        "definition": "Alamar bayani: ƙaramin akwati da ke nuna abin da kowane launi ko jerin bayanai na zanen ke wakilta. Tana taimaka wa mai karatu ya fahimci zanen ba tare da bayani na baki ba."
      },
      {
        "term": "Échelle",
        "definition": "Sikeli: yadda ake auna ƙima a kan madaidaici. Sikeli na gaskiya yawanci yana farawa daga sifili; sikelin da aka yanke (wanda bai fara daga sifili ba) yana ƙara girmama bambance-bambance kuma yana yaudarar mai karatu."
      }
    ]
  }
};
