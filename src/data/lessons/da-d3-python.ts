import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Analyse de Données » — leçon d3 (Introduction à Python — lire un CSV et calculer l'essentiel)
// Niveau INTERMÉDIAIRE. Premier contact avec Python pour un public M&E habitué à Excel.
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const daLessonD3: Record<Language, LessonContent> = {
  "fr": {
    "id": "d3",
    "lessonNumber": 3,
    "title": "Introduction à Python — lire un CSV et calculer l'essentiel",
    "objective": "À la fin de cette leçon, vous saurez ce qu'est Python et pourquoi il complète Excel sans le remplacer. Vous saurez lire un fichier CSV avec la bibliothèque pandas et calculer des statistiques simples comme une moyenne ou un comptage par catégorie. Surtout, vous regarderez le code sans peur : Python, c'est donner des instructions claires, étape par étape, comme une recette de cuisine.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi Python quand on a déjà Excel ?",
        "body": "Excel est un excellent outil, et pour beaucoup de tâches il reste le bon choix. Soyons honnêtes : si vous avez un tableau de 30 lignes à trier ou une petite somme à faire, Excel est parfait et Python ne vous apportera rien de plus. N'écoutez personne qui vous dit le contraire. Python n'est pas là pour remplacer Excel ; il est là pour les moments où Excel commence à souffrir.\n\nCes moments arrivent vite dans notre métier. Imaginez un fichier d'enquête de 50 000 lignes — une collecte de données auprès de ménages dans plusieurs régions. Excel rame, plante, ou met plusieurs minutes à ouvrir le fichier. Python, lui, lit ce fichier en quelques secondes, sans broncher. Il gère les gros volumes que les tableurs digèrent mal.\n\nPython a deux autres atouts décisifs. D'abord l'automatisation : si vous refaites le même calcul chaque mois sur un nouveau fichier, vous écrivez les instructions une seule fois, et vous les rejouez en un clic. Ensuite la reproductibilité : votre analyse est écrite noir sur blanc, donc une collègue peut la relancer et obtenir exactement le même résultat — fini les clics manuels impossibles à retracer. Et tout cela est gratuit : Python est un logiciel libre, sans licence à payer, ce qui compte quand le budget est en FCFA."
      },
      {
        "title": "Les bases sans jargon",
        "body": "Programmer fait peur quand on imagine des écrans noirs et des symboles incompréhensibles. La vérité est plus douce : Python, c'est donner des instructions claires à l'ordinateur, étape par étape, exactement comme une recette de cuisine. « Prends la farine, ajoute l'eau, mélange. » Le code dit simplement : « Prends ce fichier, calcule cette moyenne, affiche le résultat. » Vous n'avez pas besoin d'être programmeur pour écrire une recette.\n\nTrois mots suffisent pour démarrer. Une variable est une boîte avec une étiquette où l'on range une valeur : par exemple age = 34 range le nombre 34 dans une boîte nommée age. Une instruction est une seule étape de la recette, écrite sur une ligne. Et une bibliothèque est une boîte à outils toute prête, écrite par d'autres, que vous empruntez au lieu de tout refaire vous-même.\n\nC'est exactement comme emprunter un mortier et un pilon au lieu de les fabriquer. Pour analyser des données, la bibliothèque la plus utile s'appelle pandas. On la fait venir au début du programme avec une seule ligne :\nimport pandas as pd\nLe « as pd » est juste un surnom court pour gagner du temps : ensuite, on écrit pd au lieu de pandas. Rien de magique, juste un raccourci pratique."
      },
      {
        "title": "Lire un CSV avec pandas",
        "body": "Un fichier CSV est la forme la plus simple d'un tableau : du texte où chaque ligne est une rangée et où les colonnes sont séparées par des virgules (CSV veut dire « Comma-Separated Values », valeurs séparées par des virgules). C'est le format universel des données : Excel, Kobo, ODK, presque tous les outils savent exporter en CSV. Python adore ce format.\n\nPour ouvrir un fichier d'enquête nommé enquete.csv, trois lignes suffisent :\nimport pandas as pd\ndf = pd.read_csv('enquete.csv')\nprint(df.head())\nDécortiquons la recette. La première ligne emprunte la boîte à outils pandas. La deuxième lit le fichier et range tout le tableau dans une variable nommée df. La troisième affiche les premières lignes pour vérifier que tout est bien chargé.\n\nCe df est un DataFrame : c'est tout simplement un tableau dans la mémoire de Python, avec des lignes et des colonnes nommées, exactement comme une feuille Excel — mais en bien plus rapide et capable d'avaler des fichiers énormes. La fonction df.head() montre les cinq premières lignes : c'est le réflexe de prudence, comme goûter la sauce avant de servir. On regarde toujours ses données avant de calculer quoi que ce soit."
      },
      {
        "title": "Calculer l'essentiel",
        "body": "Une fois le tableau chargé dans df, calculer une statistique descriptive devient une seule instruction. Pour obtenir l'âge moyen de tous les répondants :\nprint(df['age'].mean())\nLa partie df['age'] désigne la colonne « age » du tableau, et .mean() calcule sa moyenne. Statistique descriptive est juste un nom savant pour « résumer beaucoup de chiffres en un seul » : une moyenne, un total, un comptage.\n\nTrès souvent, on veut compter par catégorie : combien de répondants par région ? Une ligne suffit :\nprint(df['region'].value_counts())\nCela affiche chaque région avec son nombre de réponses, de la plus fréquente à la moins fréquente. C'est l'équivalent d'un tableau croisé dynamique dans Excel, mais en une seule ligne reproductible.\n\nReste l'étape la plus importante : interpréter. Le code vous donne un chiffre, mais c'est vous qui lui donnez du sens. Si la moyenne d'âge ressort à 2 ans, c'est sûrement une erreur de saisie dans la colonne, pas une population de bébés. Si une région affiche dix fois moins de réponses que les autres, demandez-vous si la collecte y a vraiment eu lieu. Python calcule vite, mais c'est votre regard de professionnel de terrain qui transforme un nombre en décision."
      }
    ],
    "example": {
      "title": "Awa, analyste M&E : de 2 jours d'attente à 10 minutes d'analyse",
      "challenge": "Awa est chargée de suivi-évaluation dans une ONG à Bamako. Elle reçoit un fichier d'enquête de 50 000 réponses collectées dans cinq régions. Dès qu'elle l'ouvre dans Excel, le logiciel se fige : le fichier est trop lourd, les filtres mettent une minute à répondre, et le calcul de l'âge moyen par région plante deux fois. Au total, entre les blocages, les redémarrages et les vérifications manuelles, ce travail lui prenait près de deux jours.",
      "solution": "Une collègue lui montre Python. Awa ouvre Google Colab gratuitement dans le navigateur de son ordinateur, téléverse le fichier, et écrit quatre lignes : import pandas as pd ; df = pd.read_csv('enquete.csv') ; puis df.groupby('region')['age'].mean() pour l'âge moyen par région, et df['region'].value_counts() pour le nombre de réponses par région. Elle relit d'abord df.head() pour vérifier que les colonnes sont bien lues.",
      "impact": "Le fichier de 50 000 lignes s'ouvre en quelques secondes et les calculs s'affichent presque instantanément. Le travail qui prenait deux jours est désormais bouclé en environ 10 minutes. Mieux : le mois suivant, quand un nouveau fichier arrive, Awa relance exactement le même code et obtient l'analyse sans recommencer à zéro. Prudence : Python a aussi révélé trois âges aberrants (saisis à 200 ans) qu'Excel cachait dans la masse — ce qui a permis de corriger les données avant de présenter les résultats au bailleur."
    },
    "practice": {
      "title": "Lire un petit programme et prédire sa sortie",
      "instructions": [
        "Lisez attentivement ces trois lignes de Python, sans ordinateur : import pandas as pd ; df = pd.read_csv('beneficiaires.csv') ; puis print(df['age'].mean()). Sur papier ou dans votre tête, décrivez avec vos propres mots ce que fait chaque ligne, comme si vous expliquiez une recette à un collègue.",
        "Prédisez le résultat : si la colonne age contient les valeurs 20, 30 et 40, quel chiffre la dernière ligne va-t-elle afficher ? (Indice : c'est une moyenne.) Notez votre réponse avant de la vérifier.",
        "Option gratuite et hors-ligne ensuite en ligne : ouvrez Google Colab (colab.research.google.com) dans n'importe quel navigateur, sans rien installer et sans payer. Tapez les trois lignes avec un petit fichier de test, exécutez, et comparez la sortie réelle à votre prédiction. Si vous n'avez pas de connexion maintenant, l'exercice de lecture sur papier suffit pleinement."
      ],
      "observation": "Avez-vous prédit le bon chiffre ? Pour les valeurs 20, 30 et 40, la moyenne est 30. Si votre prédiction était juste, c'est la preuve que vous savez déjà « lire » du code Python : il se raisonne pas à pas, comme une recette. Si elle était fausse, relisez chaque ligne lentement — l'erreur vient presque toujours d'une étape qu'on a lue trop vite, jamais d'un manque de talent pour la programmation."
    },
    "quiz": [
      {
        "question": "Pour un fichier de 30 lignes à trier rapidement, quel est l'outil le plus adapté ?",
        "options": [
          {
            "key": "A",
            "text": "Python obligatoirement, car Excel ne sait pas trier"
          },
          {
            "key": "B",
            "text": "Excel reste parfaitement adapté ; Python brille surtout sur les gros fichiers et la reproductibilité"
          },
          {
            "key": "C",
            "text": "Ni l'un ni l'autre, il faut acheter un logiciel payant spécialisé"
          },
          {
            "key": "D",
            "text": "Python, car il est interdit d'utiliser Excel pour des données d'enquête"
          }
        ],
        "answer": "B",
        "explanation": "Soyons honnêtes : pour un petit fichier, Excel est parfait. Python n'apporte un vrai avantage que sur les gros volumes (par exemple 50 000 lignes), l'automatisation des tâches répétées et la reproductibilité de l'analyse. Choisir le bon outil selon la tâche, c'est déjà une compétence d'analyste."
      },
      {
        "question": "Que signifie le format CSV ?",
        "options": [
          {
            "key": "A",
            "text": "Un fichier image utilisé pour les graphiques"
          },
          {
            "key": "B",
            "text": "Un logiciel payant de statistiques"
          },
          {
            "key": "C",
            "text": "Un tableau en texte simple où les colonnes sont séparées par des virgules (Comma-Separated Values)"
          },
          {
            "key": "D",
            "text": "Un langage de programmation concurrent de Python"
          }
        ],
        "answer": "C",
        "explanation": "CSV veut dire « Comma-Separated Values », c'est-à-dire valeurs séparées par des virgules. C'est un tableau enregistré en texte simple : chaque ligne est une rangée, et les virgules séparent les colonnes. C'est le format d'échange universel des données, exporté par Excel, Kobo, ODK et la plupart des outils de collecte."
      },
      {
        "question": "À quoi sert la bibliothèque pandas en Python ?",
        "options": [
          {
            "key": "A",
            "text": "À envoyer des e-mails automatiquement"
          },
          {
            "key": "B",
            "text": "À lire, organiser et analyser des données sous forme de tableaux (DataFrame)"
          },
          {
            "key": "C",
            "text": "À dessiner des animaux à l'écran"
          },
          {
            "key": "D",
            "text": "À remplacer le système d'exploitation de l'ordinateur"
          }
        ],
        "answer": "B",
        "explanation": "pandas est une bibliothèque, c'est-à-dire une boîte à outils toute prête. Elle est spécialisée dans la manipulation de tableaux de données : elle lit les fichiers, range les données dans un DataFrame, et permet de calculer des statistiques en quelques mots. On la fait venir avec la ligne : import pandas as pd."
      },
      {
        "question": "Quelle ligne lit correctement un fichier nommé enquete.csv dans une variable df ?",
        "options": [
          {
            "key": "A",
            "text": "df = pd.read_csv('enquete.csv')"
          },
          {
            "key": "B",
            "text": "df = excel.open('enquete.csv')"
          },
          {
            "key": "C",
            "text": "print('enquete.csv')"
          },
          {
            "key": "D",
            "text": "csv = python.lire(enquete)"
          }
        ],
        "answer": "A",
        "explanation": "La fonction pd.read_csv('enquete.csv') demande à pandas d'ouvrir le fichier et de ranger tout le tableau dans la variable df. Ce df est alors un DataFrame, prêt à être exploré avec df.head() puis analysé. Les autres lignes n'existent pas ou ne lisent pas un fichier CSV."
      },
      {
        "question": "Que calcule l'instruction df['age'].mean() ?",
        "options": [
          {
            "key": "A",
            "text": "Le nombre total de lignes du fichier"
          },
          {
            "key": "B",
            "text": "La région la plus fréquente"
          },
          {
            "key": "C",
            "text": "Le plus grand âge enregistré"
          },
          {
            "key": "D",
            "text": "La moyenne des valeurs de la colonne age"
          }
        ],
        "answer": "D",
        "explanation": "df['age'] désigne la colonne age du tableau, et .mean() en calcule la moyenne — un exemple de statistique descriptive. Pour compter le nombre de réponses par catégorie, on utiliserait plutôt df['region'].value_counts(). Et n'oubliez jamais d'interpréter le résultat : une moyenne d'âge à 2 ans signale une erreur de saisie, pas une population de bébés."
      }
    ],
    "reflection": "Pensez à un fichier de données que vous manipulez régulièrement dans votre travail — une liste de bénéficiaires, une base d'enquête, un suivi mensuel. Combien de lignes contient-il, et quel calcul refaites-vous le plus souvent à la main dans Excel ? Comment Python pourrait-il vous faire gagner du temps sur cette tâche précise, et qu'est-ce qui vous empêche encore d'essayer ?",
    "glossary": [
      {
        "term": "Python",
        "definition": "Langage de programmation gratuit et très répandu, conçu pour être lisible. Programmer en Python, c'est écrire des instructions claires étape par étape, comme une recette de cuisine. Il est particulièrement apprécié pour l'analyse de données."
      },
      {
        "term": "CSV",
        "definition": "Format de fichier en texte simple (« Comma-Separated Values », valeurs séparées par des virgules) où chaque ligne est une rangée et les colonnes sont séparées par des virgules. C'est le format universel pour échanger des tableaux de données entre outils."
      },
      {
        "term": "Bibliothèque (library)",
        "definition": "Boîte à outils toute prête, écrite par d'autres, que l'on emprunte dans son programme au lieu de tout recréer. En Python, on l'ajoute avec le mot import, par exemple import pandas as pd."
      },
      {
        "term": "pandas",
        "definition": "Bibliothèque Python spécialisée dans l'analyse de données en tableaux. Elle lit les fichiers CSV, organise les données dans un DataFrame et permet de calculer des statistiques en quelques mots. On l'importe généralement sous le surnom pd."
      },
      {
        "term": "DataFrame",
        "definition": "Tableau de données en mémoire dans Python, avec des lignes et des colonnes nommées, très semblable à une feuille Excel mais beaucoup plus rapide et capable de gérer d'énormes fichiers. C'est l'objet central de la bibliothèque pandas."
      },
      {
        "term": "Statistique descriptive",
        "definition": "Résumé d'un grand nombre de données en un seul chiffre parlant : une moyenne, un total, un comptage par catégorie. En pandas, on l'obtient avec des fonctions comme .mean() (moyenne) ou .value_counts() (comptage par catégorie)."
      }
    ]
  },
  "en": {
    "id": "d3",
    "lessonNumber": 3,
    "title": "Intro to Python",
    "objective": "By the end of this lesson, you will know what Python is and why it complements Excel rather than replacing it. You will be able to read a CSV file with the pandas library and calculate simple statistics such as a mean or a count by category. Above all, you will look at code without fear: Python means giving clear instructions, step by step, like a cooking recipe.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why Python when you already have Excel?",
        "body": "Excel is an excellent tool, and for many tasks it remains the right choice. Let us be honest: if you have a 30-row table to sort or a small sum to calculate, Excel is perfect and Python will give you nothing more. Do not listen to anyone who tells you otherwise. Python is not here to replace Excel; it is here for the moments when Excel starts to struggle.\n\nThose moments arrive quickly in our line of work. Imagine a survey file of 50,000 rows — household data collected across several regions. Excel lags, crashes, or takes several minutes just to open the file. Python, by contrast, reads that file in a few seconds, without flinching. It handles the large volumes that spreadsheets digest poorly.\n\nPython has two other decisive advantages. First, automation: if you redo the same calculation every month on a new file, you write the instructions once and replay them in a single click. Second, reproducibility: your analysis is written down in black and white, so a colleague can re-run it and obtain exactly the same result — no more manual clicks that are impossible to trace. And all of this is free: Python is open-source software, with no license fee to pay, which matters when the budget is in CFA francs."
      },
      {
        "title": "The basics without jargon",
        "body": "Programming feels frightening when you picture black screens and incomprehensible symbols. The truth is gentler: Python means giving clear instructions to the computer, step by step, exactly like a cooking recipe. \"Take the flour, add the water, mix.\" Code simply says: \"Take this file, calculate this average, display the result.\" You do not need to be a programmer to write a recipe.\n\nThree words are enough to get started. A variable is a labelled box where you store a value: for example age = 34 stores the number 34 in a box named age. An instruction is a single step of the recipe, written on one line. And a library is a ready-made toolbox, written by others, that you borrow instead of rebuilding everything yourself.\n\nIt is exactly like borrowing a mortar and pestle instead of making them. To analyze data, the most useful library is called pandas. You bring it in at the start of the program with a single line:\nimport pandas as pd\nThe \"as pd\" is just a short nickname to save time: afterwards, you write pd instead of pandas. Nothing magical, just a handy shortcut."
      },
      {
        "title": "Reading a CSV with pandas",
        "body": "A CSV file is the simplest form of a table: text where each line is a row and the columns are separated by commas (CSV stands for \"Comma-Separated Values\"). It is the universal data format: Excel, Kobo, ODK — almost every tool can export to CSV. Python loves this format.\n\nTo open a survey file named enquete.csv, three lines are enough:\nimport pandas as pd\ndf = pd.read_csv('enquete.csv')\nprint(df.head())\nLet us break the recipe down. The first line borrows the pandas toolbox. The second reads the file and stores the whole table in a variable named df. The third displays the first rows to check that everything loaded correctly.\n\nThis df is a DataFrame: simply a table held in Python's memory, with named rows and columns, exactly like an Excel sheet — but far faster and able to swallow enormous files. The function df.head() shows the first five rows: it is the habit of caution, like tasting the sauce before serving. You always look at your data before calculating anything."
      },
      {
        "title": "Calculating the essentials",
        "body": "Once the table is loaded into df, calculating a descriptive statistic becomes a single instruction. To obtain the average age of all respondents:\nprint(df['age'].mean())\nThe part df['age'] refers to the \"age\" column of the table, and .mean() calculates its average. Descriptive statistic is just a fancy name for \"summarizing many numbers into a single one\": an average, a total, a count.\n\nVery often, you want to count by category: how many respondents per region? One line is enough:\nprint(df['region'].value_counts())\nThis displays each region with its number of responses, from the most frequent to the least frequent. It is the equivalent of a pivot table in Excel, but in a single reproducible line.\n\nThe most important step remains: interpreting. The code gives you a figure, but it is you who gives it meaning. If the average age comes out at 2 years, it is surely a data-entry error in the column, not a population of babies. If one region shows ten times fewer responses than the others, ask yourself whether data collection really took place there. Python calculates quickly, but it is your field professional's eye that turns a number into a decision."
      }
    ],
    "example": {
      "title": "Awa, an M&E analyst: from a 2-day wait to a 10-minute analysis",
      "challenge": "Awa is in charge of monitoring and evaluation at an NGO in Bamako. She receives a survey file of 50,000 responses collected across five regions. As soon as she opens it in Excel, the software freezes: the file is too heavy, the filters take a minute to respond, and the calculation of average age by region crashes twice. In total, between the freezes, the restarts and the manual checks, this work took her nearly two days.",
      "solution": "A colleague shows her Python. Awa opens Google Colab for free in her computer's browser, uploads the file, and writes four lines: import pandas as pd ; df = pd.read_csv('enquete.csv') ; then df.groupby('region')['age'].mean() for the average age by region, and df['region'].value_counts() for the number of responses per region. She first re-reads df.head() to check that the columns are read correctly.",
      "impact": "The 50,000-row file opens in a few seconds and the calculations appear almost instantly. The work that took two days is now finished in about 10 minutes. Better still: the following month, when a new file arrives, Awa re-runs exactly the same code and obtains the analysis without starting from scratch. A note of caution: Python also revealed three impossible ages (entered as 200 years) that Excel had hidden in the mass — which made it possible to correct the data before presenting the results to the donor."
    },
    "practice": {
      "title": "Read a small program and predict its output",
      "instructions": [
        "Read these three lines of Python carefully, without a computer: import pandas as pd ; df = pd.read_csv('beneficiaires.csv') ; then print(df['age'].mean()). On paper or in your head, describe in your own words what each line does, as if you were explaining a recipe to a colleague.",
        "Predict the result: if the age column contains the values 20, 30 and 40, what figure will the last line display? (Hint: it is an average.) Write down your answer before checking it.",
        "Free, then online option afterwards: open Google Colab (colab.research.google.com) in any browser, with nothing to install and nothing to pay. Type the three lines with a small test file, run them, and compare the actual output to your prediction. If you have no connection right now, the reading exercise on paper is fully enough."
      ],
      "observation": "Did you predict the right number? For the values 20, 30 and 40, the average is 30. If your prediction was correct, it proves that you can already \"read\" Python code: it is reasoned step by step, like a recipe. If it was wrong, re-read each line slowly — the mistake almost always comes from a step read too quickly, never from a lack of talent for programming."
    },
    "quiz": [
      {
        "question": "For a 30-row file you need to sort quickly, which tool is the most suitable?",
        "options": [
          {
            "key": "A",
            "text": "Python necessarily, because Excel cannot sort"
          },
          {
            "key": "B",
            "text": "Excel remains perfectly suitable; Python shines above all on large files and reproducibility"
          },
          {
            "key": "C",
            "text": "Neither one; you must buy specialized paid software"
          },
          {
            "key": "D",
            "text": "Python, because it is forbidden to use Excel for survey data"
          }
        ],
        "answer": "B",
        "explanation": "Let us be honest: for a small file, Excel is perfect. Python only brings a real advantage on large volumes (for example 50,000 rows), the automation of repeated tasks, and the reproducibility of the analysis. Choosing the right tool for the task is already an analyst's skill."
      },
      {
        "question": "What does the CSV format mean?",
        "options": [
          {
            "key": "A",
            "text": "An image file used for charts"
          },
          {
            "key": "B",
            "text": "Paid statistics software"
          },
          {
            "key": "C",
            "text": "A plain-text table where columns are separated by commas (Comma-Separated Values)"
          },
          {
            "key": "D",
            "text": "A programming language competing with Python"
          }
        ],
        "answer": "C",
        "explanation": "CSV means \"Comma-Separated Values\". It is a table saved in plain text: each line is a row, and commas separate the columns. It is the universal data-exchange format, exported by Excel, Kobo, ODK and most data-collection tools."
      },
      {
        "question": "What is the pandas library used for in Python?",
        "options": [
          {
            "key": "A",
            "text": "To send emails automatically"
          },
          {
            "key": "B",
            "text": "To read, organize and analyze data in tables (a DataFrame)"
          },
          {
            "key": "C",
            "text": "To draw animals on the screen"
          },
          {
            "key": "D",
            "text": "To replace the computer's operating system"
          }
        ],
        "answer": "B",
        "explanation": "pandas is a library, that is a ready-made toolbox. It specializes in handling data tables: it reads files, stores the data in a DataFrame, and lets you calculate statistics in a few words. You bring it in with the line: import pandas as pd."
      },
      {
        "question": "Which line correctly reads a file named enquete.csv into a variable df?",
        "options": [
          {
            "key": "A",
            "text": "df = pd.read_csv('enquete.csv')"
          },
          {
            "key": "B",
            "text": "df = excel.open('enquete.csv')"
          },
          {
            "key": "C",
            "text": "print('enquete.csv')"
          },
          {
            "key": "D",
            "text": "csv = python.lire(enquete)"
          }
        ],
        "answer": "A",
        "explanation": "The function pd.read_csv('enquete.csv') asks pandas to open the file and store the whole table in the variable df. This df is then a DataFrame, ready to be explored with df.head() and then analyzed. The other lines do not exist or do not read a CSV file."
      },
      {
        "question": "What does the instruction df['age'].mean() calculate?",
        "options": [
          {
            "key": "A",
            "text": "The total number of rows in the file"
          },
          {
            "key": "B",
            "text": "The most frequent region"
          },
          {
            "key": "C",
            "text": "The highest age recorded"
          },
          {
            "key": "D",
            "text": "The average of the values in the age column"
          }
        ],
        "answer": "D",
        "explanation": "df['age'] refers to the age column of the table, and .mean() calculates its average — an example of a descriptive statistic. To count the number of responses per category, you would instead use df['region'].value_counts(). And never forget to interpret the result: an average age of 2 years signals a data-entry error, not a population of babies."
      }
    ],
    "reflection": "Think of a data file you handle regularly in your work — a list of beneficiaries, a survey database, a monthly tracker. How many rows does it contain, and which calculation do you redo most often by hand in Excel? How could Python save you time on that specific task, and what is still stopping you from trying?",
    "glossary": [
      {
        "term": "Python",
        "definition": "A free and very widespread programming language, designed to be readable. Programming in Python means writing clear instructions step by step, like a cooking recipe. It is especially valued for data analysis."
      },
      {
        "term": "CSV",
        "definition": "A plain-text file format (\"Comma-Separated Values\") where each line is a row and the columns are separated by commas. It is the universal format for exchanging data tables between tools."
      },
      {
        "term": "Library",
        "definition": "A ready-made toolbox, written by others, that you borrow into your program instead of recreating everything. In Python, you add it with the word import, for example import pandas as pd."
      },
      {
        "term": "pandas",
        "definition": "A Python library specialized in analyzing data in tables. It reads CSV files, organizes the data into a DataFrame, and lets you calculate statistics in a few words. It is usually imported under the nickname pd."
      },
      {
        "term": "DataFrame",
        "definition": "A data table held in Python's memory, with named rows and columns, very similar to an Excel sheet but much faster and able to handle enormous files. It is the central object of the pandas library."
      },
      {
        "term": "Descriptive statistic",
        "definition": "A summary of a large amount of data in a single meaningful figure: an average, a total, a count by category. In pandas, you obtain it with functions such as .mean() (average) or .value_counts() (count by category)."
      }
    ]
  },
  "ha": {
    "id": "d3",
    "lessonNumber": 3,
    "title": "Gabatarwar Python",
    "objective": "A ƙarshen wannan darasi, za ku san abin da Python yake da kuma dalilin da ya sa yake cika Excel maimakon maye gurbinsa. Za ku iya karanta fayil ɗin CSV da ɗakin karatu na pandas kuma ku ƙididdige ƙididdiga masu sauƙi kamar matsakaici ko ƙidaya ta nau'i. Mafi mahimmanci, za ku duba lambar ba tare da tsoro ba: Python yana nufin ba da umarni a fili, mataki-mataki, kamar girke-girke na dafa abinci.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Me ya sa Python idan kuna da Excel?",
        "body": "Excel kayan aiki ne mai kyau, kuma ga ayyuka da yawa ya kasance zaɓi mai kyau. Bari mu yi gaskiya: idan kuna da tebur mai layuka 30 don tsarawa ko ƙaramin jimla don ƙididdigewa, Excel cikakke ne kuma Python ba zai ba ku komai ba. Kada ku saurari duk wanda ya gaya muku akasin haka. Python ba ya nan don maye gurbin Excel; yana nan ne don lokutan da Excel ya fara wahala.\n\nWaɗannan lokutan suna zuwa da sauri a aikinmu. Ku yi tunanin fayil ɗin bincike mai layuka 50,000 — bayanan gidaje da aka tattara a yankuna da dama. Excel yana jinkiri, yana tsayawa, ko yana ɗaukar mintuna da yawa kawai don buɗe fayil ɗin. Python kuwa, yana karanta wannan fayil ɗin a cikin ƴan daƙiƙu, ba tare da wata matsala ba. Yana sarrafa manyan adadi waɗanda tebur ɗin ke wahala wajen narkewa.\n\nPython yana da wasu fa'idodi biyu masu mahimmanci. Na farko, sarrafa kai: idan kuna sake yin ƙididdiga ɗaya kowane wata a kan sabon fayil, kuna rubuta umarnin sau ɗaya kawai, kuma kuna sake kunna su da dannawa ɗaya. Na biyu, sake-haifuwa: an rubuta nazarinku a fili, don haka abokin aiki zai iya sake kunna shi kuma ya samu sakamako iri ɗaya — babu sauran danna hannu da ba za a iya bibiya ba. Kuma duk wannan kyauta ne: Python software ne na kyauta, ba tare da kuɗin lasisi don biya ba, wanda ke da mahimmanci lokacin da kasafin kuɗi yake a cikin FCFA."
      },
      {
        "title": "Tushen ba tare da jargon ba",
        "body": "Shirye-shirye yana ba da tsoro idan kun yi tunanin allon baƙi da alamomin da ba za a iya fahimta ba. Gaskiyar ta fi sauƙi: Python yana nufin ba da umarni a fili ga kwamfuta, mataki-mataki, daidai kamar girke-girke na dafa abinci. 'Ɗauki gari, ƙara ruwa, gauraya.' Lambar tana cewa kawai: 'Ɗauki wannan fayil, ƙididdige wannan matsakaici, nuna sakamako.' Ba kwa buƙatar zama mai shirya kwamfuta don rubuta girke-girke.\n\nKalmomi uku sun isa don farawa. Variable akwati ne mai alama inda kuke ajiye ƙima: misali age = 34 yana ajiye lambar 34 a cikin akwati mai suna age. Instruction mataki ɗaya ne na girke-girke, an rubuta shi a layi ɗaya. Kuma library akwatin kayan aiki ne da aka shirya, wanda wasu suka rubuta, wanda kuke aro maimakon sake gina komai da kanku.\n\nDaidai yake da aron turmi da taɓarya maimakon yin su. Don nazarin bayanai, ɗakin karatu mafi amfani ana kiransa pandas. Kuna kawo shi a farkon shirin da layi ɗaya:\nimport pandas as pd\nWannan 'as pd' kawai laƙabi gajere ne don adana lokaci: daga baya, kuna rubuta pd maimakon pandas. Babu wani sihiri, kawai gajeriyar hanya mai amfani."
      },
      {
        "title": "Karanta CSV da pandas",
        "body": "Fayil ɗin CSV shine mafi sauƙin nau'i na tebur: rubutu inda kowane layi rangar ce kuma an raba ginshiƙai da waƙafi (CSV yana nufin 'Comma-Separated Values', ƙimomin da aka raba da waƙafi). Shi ne tsarin bayanai na duniya: Excel, Kobo, ODK — kusan kowane kayan aiki ya iya fitar da shi zuwa CSV. Python yana son wannan tsarin.\n\nDon buɗe fayil ɗin bincike mai suna enquete.csv, layuka uku sun isa:\nimport pandas as pd\ndf = pd.read_csv('enquete.csv')\nprint(df.head())\nBari mu wargaza girke-girken. Layin farko yana aro akwatin kayan aiki na pandas. Na biyu yana karanta fayil ɗin kuma yana ajiye dukan tebur a cikin variable mai suna df. Na uku yana nuna layuka na farko don tabbatar da cewa komai ya ɗauke daidai.\n\nWannan df shine DataFrame: kawai tebur ne da ake ajiyewa a ƙwaƙwalwar Python, mai layuka da ginshiƙai masu suna, daidai kamar takardar Excel — amma ya fi sauri sosai kuma yana iya haɗiye manyan fayiloli. Aikin df.head() yana nuna layuka biyar na farko: al'adar tsanaki ce, kamar ɗanɗanar miya kafin a yi hidima. Kuna duban bayananku koyaushe kafin ƙididdige komai."
      },
      {
        "title": "Ƙididdige abin da yake mahimmanci",
        "body": "Da zarar an ɗora tebur a cikin df, ƙididdige ƙididdiga mai bayyanawa ya zama umarni ɗaya kawai. Don samun matsakaicin shekarun dukan masu amsa:\nprint(df['age'].mean())\nɓangaren df['age'] yana nuna ginshiƙin 'age' na tebur, kuma .mean() yana ƙididdige matsakaicinsa. Ƙididdiga mai bayyanawa kawai suna ne mai ban sha'awa na 'taƙaita lambobi da yawa zuwa ɗaya kawai': matsakaici, jimla, ƙidaya.\n\nSau da yawa, kuna son ƙidaya ta nau'i: masu amsa nawa ne ga kowane yanki? Layi ɗaya ya isa:\nprint(df['region'].value_counts())\nWannan yana nuna kowane yanki tare da adadin amsoshinsa, daga mafi yawan zuwa mafi ƙaranci. Yana daidai da tebur na pivot a cikin Excel, amma a cikin layi ɗaya da za a iya sake-haifuwa.\n\nMataki mafi mahimmanci ya rage: fassarawa. Lambar tana ba ku adadi, amma ku ne kuke ba shi ma'ana. Idan matsakaicin shekaru ya fito shekaru 2, tabbas kuskuren shigar da bayanai ne a cikin ginshiƙin, ba al'ummar jarirai ba. Idan wani yanki ya nuna amsoshi sau goma ƙasa da sauran, ku tambayi kanku ko tattara bayanai ya faru a can da gaske. Python yana ƙididdigewa da sauri, amma idon ku na ƙwararren filin aiki ne ke mai da lamba zuwa shawara."
      }
    ],
    "example": {
      "title": "Awa, manazarciyar M&E: daga jiran kwana 2 zuwa nazarin mintuna 10",
      "challenge": "Awa tana kula da sa-ido da kimantawa a wata ƙungiyar agaji a Bamako. Tana karɓar fayil ɗin bincike mai amsoshi 50,000 da aka tattara a yankuna biyar. Da zarar ta buɗe shi a Excel, software ɗin ya daskare: fayil ɗin ya yi nauyi sosai, matattara suna ɗaukar minti ɗaya don amsawa, kuma ƙididdigar matsakaicin shekaru ta yanki ya tsaya sau biyu. Gaba ɗaya, tsakanin daskarewa, sake-farawa da binciken hannu, wannan aikin yana ɗaukar ta kusan kwana biyu.",
      "solution": "Wata abokiyar aiki ta nuna mata Python. Awa ta buɗe Google Colab kyauta a cikin burauzar kwamfutarta, ta loda fayil ɗin, kuma ta rubuta layuka huɗu: import pandas as pd ; df = pd.read_csv('enquete.csv') ; sannan df.groupby('region')['age'].mean() don matsakaicin shekaru ta yanki, da df['region'].value_counts() don adadin amsoshi ta yanki. Da farko ta sake karanta df.head() don tabbatar cewa an karanta ginshiƙai daidai.",
      "impact": "Fayil ɗin mai layuka 50,000 yana buɗewa a cikin ƴan daƙiƙu kuma ƙididdiga suna bayyana kusan nan take. Aikin da yake ɗaukar kwana biyu yanzu an kammala shi a kimanin mintuna 10. Mafi kyau ma: a wata mai zuwa, lokacin da sabon fayil ya iso, Awa tana sake kunna lambar iri ɗaya kuma tana samun nazarin ba tare da farawa daga sifili ba. Tsanaki: Python ya kuma bayyana shekaru uku da ba zai yiwu ba (an shigar da su a shekaru 200) waɗanda Excel ya ɓoye a cikin taron — wanda ya ba da damar gyara bayanan kafin gabatar da sakamako ga mai ba da taimako."
    },
    "practice": {
      "title": "Karanta ƙaramin shiri kuma ku yi hasashen abin da zai fito",
      "instructions": [
        "Ku karanta waɗannan layuka uku na Python a hankali, ba tare da kwamfuta ba: import pandas as pd ; df = pd.read_csv('beneficiaires.csv') ; sannan print(df['age'].mean()). A kan takarda ko a cikin tunaninku, ku bayyana da kalmominku abin da kowane layi ke yi, kamar dai kuna bayyana girke-girke ga abokin aiki.",
        "Ku yi hasashen sakamako: idan ginshiƙin age yana ƙunshe da ƙimomin 20, 30 da 40, wace lamba layin ƙarshe zai nuna? (Alama: matsakaici ne.) Ku rubuta amsarku kafin tabbatar da ita.",
        "Zaɓin kyauta, sannan a kan layi daga baya: ku buɗe Google Colab (colab.research.google.com) a cikin kowane burauza, ba tare da shigar da komai ba kuma ba tare da biya ba. Ku rubuta layuka uku tare da ƙaramin fayil ɗin gwaji, ku kunna su, kuma ku kwatanta sakamakon na gaske da hasashenku. Idan ba ku da haɗin yanar gizo a yanzu, motsa jiki na karatu a takarda ya isa sosai."
      ],
      "observation": "Shin kun yi hasashen lambar daidai? Ga ƙimomin 20, 30 da 40, matsakaici shine 30. Idan hasashenku ya yi daidai, hujja ce cewa kun riga kun san yadda ake 'karanta' lambar Python: ana tunaninsa mataki-mataki, kamar girke-girke. Idan ya yi kuskure, ku sake karanta kowane layi a hankali — kuskuren kusan koyaushe yana zuwa ne daga mataki da aka karanta da sauri sosai, ba daga rashin baiwa wajen shirye-shirye ba."
    },
    "quiz": [
      {
        "question": "Ga fayil ɗin mai layuka 30 da kuke buƙatar tsarawa da sauri, wane kayan aiki ne ya fi dacewa?",
        "options": [
          {
            "key": "A",
            "text": "Python tilas, domin Excel ba zai iya tsarawa ba"
          },
          {
            "key": "B",
            "text": "Excel ya kasance ya dace sosai; Python yana haska musamman a kan manyan fayiloli da sake-haifuwa"
          },
          {
            "key": "C",
            "text": "Babu ɗayansu; dole ne ku sayi software na musamman da ake biya"
          },
          {
            "key": "D",
            "text": "Python, domin an haramta amfani da Excel ga bayanan bincike"
          }
        ],
        "answer": "B",
        "explanation": "Bari mu yi gaskiya: ga ƙaramin fayil, Excel cikakke ne. Python yana kawo fa'ida ta gaske kawai a kan manyan adadi (misali layuka 50,000), sarrafa kai na ayyukan da ake maimaitawa, da sake-haifuwa na nazarin. Zaɓin kayan aiki da ya dace da aikin ya riga ya zama ƙwarewar manazarci."
      },
      {
        "question": "Me tsarin CSV yake nufi?",
        "options": [
          {
            "key": "A",
            "text": "Fayil ɗin hoto da ake amfani da shi don zane-zane"
          },
          {
            "key": "B",
            "text": "Software na ƙididdiga da ake biya"
          },
          {
            "key": "C",
            "text": "Tebur a cikin rubutu mai sauƙi inda aka raba ginshiƙai da waƙafi (Comma-Separated Values)"
          },
          {
            "key": "D",
            "text": "Harshen shirye-shirye da ke gasa da Python"
          }
        ],
        "answer": "C",
        "explanation": "CSV yana nufin 'Comma-Separated Values', wato ƙimomin da aka raba da waƙafi. Tebur ne da aka adana a cikin rubutu mai sauƙi: kowane layi rangar ce, kuma waƙafi suna raba ginshiƙai. Shi ne tsarin musayar bayanai na duniya, wanda Excel, Kobo, ODK da yawancin kayan aikin tattara bayanai ke fitarwa."
      },
      {
        "question": "Me ake amfani da ɗakin karatu na pandas a Python?",
        "options": [
          {
            "key": "A",
            "text": "Don aika imel kai tsaye"
          },
          {
            "key": "B",
            "text": "Don karantawa, tsarawa da nazarin bayanai a cikin tebur (DataFrame)"
          },
          {
            "key": "C",
            "text": "Don zana dabbobi a allo"
          },
          {
            "key": "D",
            "text": "Don maye gurbin tsarin aiki na kwamfuta"
          }
        ],
        "answer": "B",
        "explanation": "pandas ɗakin karatu ne, wato akwatin kayan aiki da aka shirya. Ya ƙware wajen sarrafa tebur na bayanai: yana karanta fayiloli, yana ajiye bayanai a cikin DataFrame, kuma yana ba ku damar ƙididdige ƙididdiga da kalmomi kaɗan. Kuna kawo shi da layin: import pandas as pd."
      },
      {
        "question": "Wane layi ne ya karanta fayil mai suna enquete.csv daidai zuwa cikin variable df?",
        "options": [
          {
            "key": "A",
            "text": "df = pd.read_csv('enquete.csv')"
          },
          {
            "key": "B",
            "text": "df = excel.open('enquete.csv')"
          },
          {
            "key": "C",
            "text": "print('enquete.csv')"
          },
          {
            "key": "D",
            "text": "csv = python.lire(enquete)"
          }
        ],
        "answer": "A",
        "explanation": "Aikin pd.read_csv('enquete.csv') yana roƙon pandas ya buɗe fayil ɗin kuma ya ajiye dukan tebur a cikin variable df. Wannan df sai ya zama DataFrame, a shirye don bincika shi da df.head() sannan a nazarce shi. Sauran layuka ba su wanzu ko ba sa karanta fayil ɗin CSV."
      },
      {
        "question": "Me umarnin df['age'].mean() yake ƙididdigewa?",
        "options": [
          {
            "key": "A",
            "text": "Jimillar adadin layuka na fayil ɗin"
          },
          {
            "key": "B",
            "text": "Yankin da ya fi yawa"
          },
          {
            "key": "C",
            "text": "Shekaru mafi girma da aka rubuta"
          },
          {
            "key": "D",
            "text": "Matsakaicin ƙimomi na ginshiƙin age"
          }
        ],
        "answer": "D",
        "explanation": "df['age'] yana nuna ginshiƙin age na tebur, kuma .mean() yana ƙididdige matsakaicinsa — misali na ƙididdiga mai bayyanawa. Don ƙidaya adadin amsoshi ta nau'i, za ku yi amfani da df['region'].value_counts() maimakon. Kuma kada ku taɓa manta fassara sakamako: matsakaicin shekaru 2 yana nuna kuskuren shigar da bayanai, ba al'ummar jarirai ba."
      }
    ],
    "reflection": "Ku yi tunani kan fayil ɗin bayanai da kuke sarrafawa koyaushe a aikinku — jerin masu amfana, bayanan bincike, sa-ido na wata-wata. Layuka nawa yake ƙunshe da su, kuma wace ƙididdiga kuke sake yi mafi yawa da hannu a Excel? Ta yaya Python zai iya adana muku lokaci a kan wannan aiki na musamman, kuma me yake hana ku gwadawa har yanzu?",
    "glossary": [
      {
        "term": "Python",
        "definition": "Harshen shirye-shirye na kyauta kuma mai yaɗuwa sosai, an tsara shi don zama mai sauƙin karantawa. Shirye-shirye a Python yana nufin rubuta umarni a fili mataki-mataki, kamar girke-girke na dafa abinci. Ana son shi musamman don nazarin bayanai."
      },
      {
        "term": "CSV",
        "definition": "Tsarin fayil a cikin rubutu mai sauƙi ('Comma-Separated Values', ƙimomin da aka raba da waƙafi) inda kowane layi rangar ce kuma aka raba ginshiƙai da waƙafi. Shi ne tsarin duniya don musayar tebur na bayanai tsakanin kayan aiki."
      },
      {
        "term": "Bibliothèque (library)",
        "definition": "Akwatin kayan aiki da aka shirya, wanda wasu suka rubuta, wanda ake aro a cikin shirinka maimakon sake ƙirƙira komai. A Python, ana ƙara shi da kalmar import, misali import pandas as pd."
      },
      {
        "term": "pandas",
        "definition": "Ɗakin karatu na Python da ya ƙware wajen nazarin bayanai a cikin tebur. Yana karanta fayilolin CSV, yana tsara bayanai a cikin DataFrame kuma yana ba da damar ƙididdige ƙididdiga da kalmomi kaɗan. Yawanci ana shigar da shi a ƙarƙashin laƙabin pd."
      },
      {
        "term": "DataFrame",
        "definition": "Tebur na bayanai da ake ajiyewa a ƙwaƙwalwar Python, mai layuka da ginshiƙai masu suna, mai kama da takardar Excel sosai amma ya fi sauri kuma yana iya sarrafa manyan fayiloli. Shi ne abu na tsakiya na ɗakin karatu na pandas."
      },
      {
        "term": "Statistique descriptive",
        "definition": "Taƙaita adadi mai yawa na bayanai zuwa lamba ɗaya mai ma'ana: matsakaici, jimla, ƙidaya ta nau'i. A pandas, ana samun ta da ayyuka kamar .mean() (matsakaici) ko .value_counts() (ƙidaya ta nau'i)."
      }
    ]
  }
};
