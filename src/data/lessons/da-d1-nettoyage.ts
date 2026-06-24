import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Analyse de Données » — leçon d1 (Nettoyer un fichier Excel — des données fiables avant toute analyse)
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const daLessonD1: Record<Language, LessonContent> = {
  "fr": {
    "id": "d1",
    "lessonNumber": 1,
    "title": "Nettoyer un fichier Excel — des données fiables avant toute analyse",
    "objective": "À la fin de cette leçon, vous saurez repérer et corriger les erreurs les plus courantes d'un fichier : valeurs manquantes, doublons, formats incohérents et valeurs aberrantes. Vous obtiendrez ainsi un jeu de données propre et exploitable, prêt pour l'analyse. Vous adopterez aussi le réflexe de toujours conserver une copie de l'original avant toute modification, pour travailler en sécurité dans votre contexte d'ONG, de coopérative ou d'enquête de terrain.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi nettoyer avant d'analyser",
        "body": "Il existe un dicton en informatique : « garbage in, garbage out » — littéralement « si vous entrez des déchets, vous obtenez des déchets ». Cela veut dire qu'une analyse, aussi soignée soit-elle, ne vaut jamais mieux que les données sur lesquelles elle repose. Si votre fichier de bénéficiaires contient des erreurs, vos totaux seront faux, vos pourcentages trompeurs, et les décisions prises à partir de ces chiffres seront mauvaises. « Données fiables = décisions fiables. »\n\nImaginez un magasin de vivres dont le registre d'entrée et de sortie est mal tenu : on ne sait plus combien de sacs de riz il reste réellement. On risque de commander trop, ou pas assez. Un fichier Excel mal nettoyé, c'est exactement ce magasin : les chiffres existent, mais on ne peut pas leur faire confiance. Un seul bénéficiaire compté deux fois, une date mal saisie, et c'est tout votre rapport au bailleur qui devient fragile.\n\nSoyons honnêtes : nettoyer un fichier n'est pas la partie passionnante du métier. Personne ne se vante d'avoir corrigé trois cents fautes de frappe. Pourtant, les professionnels de la donnée le disent depuis longtemps : le nettoyage représente souvent près de 80 % du travail réel d'une analyse. C'est un travail ingrat mais indispensable. Le temps que vous passez à fiabiliser vos données n'est jamais perdu : c'est lui qui rend vos conclusions solides et défendables face à votre direction ou à votre bailleur."
      },
      {
        "title": "Les erreurs les plus fréquentes",
        "body": "Quatre types d'erreurs reviennent presque toujours dans les fichiers de terrain. La première : les valeurs manquantes. Une cellule reste vide parce que l'enquêteur n'a pas posé la question, ou parce que le bénéficiaire n'a pas répondu. Un âge absent, un village non renseigné, un montant de distribution oublié. Ces trous faussent les moyennes et les comptages si on n'y prête pas attention.\n\nLa deuxième : les doublons. La même personne apparaît deux fois, parfois trois. Cela arrive très souvent après plusieurs distributions : une bénéficiaire inscrite en janvier est ré-inscrite en mars parce que personne n'a vérifié la liste existante. La troisième : les fautes de saisie, surtout sur les noms. « Aïssata Diallo » devient « Aissata Diallo », « Aisatta Djallo » ou « A. Diallo ». Pour un humain, c'est la même personne ; pour Excel, ce sont quatre personnes différentes.\n\nLa quatrième : les formats incohérents. Les dates sont les pires coupables. Dans un même fichier, on trouve « 12/03/2025 », « 2025-03-12 », « 12 mars 2025 » et « 12-03-25 ». Excel ne sait plus s'il s'agit du 12 mars ou du 3 décembre. Même problème avec les nombres : « 1 200 », « 1200 », « 1.200 » ou « 1,200 FCFA » ne sont pas toujours lus comme la même valeur. Tant que ces formats ne sont pas uniformisés, aucun calcul fiable n'est possible."
      },
      {
        "title": "Repérer et corriger pas à pas",
        "body": "Avant toute chose, une règle d'or absolue : ne travaillez jamais sur le fichier original. Faites-en d'abord une copie (« Fichier > Enregistrer sous » ou un simple copier-coller du fichier) et nommez-la clairement, par exemple « liste_beneficiaires_NETTOYE_2025-06 ». Ainsi, si vous supprimez quelque chose par erreur, l'original reste intact. C'est votre filet de sécurité.\n\nEnsuite, avancez méthodiquement. Pour repérer les valeurs manquantes, utilisez le tri (« Trier ») : les cellules vides remontent souvent en haut ou en bas d'une colonne, et sautent aux yeux. Pour isoler un problème précis, utilisez les filtres : vous pouvez par exemple afficher uniquement les lignes où le champ « Village » est vide. Pour les doublons, la plupart des tableurs ont une fonction dédiée : dans Excel, « Données > Supprimer les doublons » ; dans Google Sheets, « Données > Nettoyage des données > Supprimer les doublons ». Vérifiez toujours sur quelle colonne vous dédoublonnez (un identifiant unique est plus sûr qu'un nom).\n\nPour standardiser les formats, traitez une colonne à la fois. Mettez toutes les dates au même format (par exemple AAAA-MM-JJ), uniformisez l'écriture des nombres en retirant les espaces et symboles parasites, et harmonisez les noms (une seule orthographe par personne, majuscules cohérentes). Travaillez par petites étapes et vérifiez régulièrement que vous n'avez pas détruit une donnée valable. En cas de doute, revenez à votre copie de l'original : c'est précisément pour cela que vous l'avez gardée."
      },
      {
        "title": "Les valeurs aberrantes et la prudence",
        "body": "Une valeur aberrante (ou « outlier » en anglais) est une donnée qui s'écarte fortement de toutes les autres. Par exemple, dans une liste où l'âge des bénéficiaires va de 18 à 70 ans, une ligne indique « 350 ans ». Ou bien une distribution de 5 sacs de riz par ménage, sauf une ligne qui affiche « 5 000 sacs ». Ces valeurs sautent aux yeux quand on trie la colonne du plus grand au plus petit : les valeurs extrêmes se rangent aux deux bouts.\n\nMais attention, et c'est le point le plus important : une valeur aberrante n'est pas toujours une erreur. Un âge de 350 ans est clairement une faute de saisie (sans doute 35 ans). En revanche, un ménage de 18 personnes dans une zone où la moyenne est de 6 peut être tout à fait réel — c'est peut-être une famille élargie ou un ménage qui héberge des déplacés. La question à se poser n'est jamais « cette valeur est-elle bizarre ? » mais « cette valeur est-elle fausse, ou simplement inhabituelle mais vraie ? ». Supprimer une donnée réelle sous prétexte qu'elle dérange, c'est trahir la réalité du terrain.\n\nLa bonne pratique est donc la prudence et la traçabilité. Quand vous repérez une valeur aberrante, ne la supprimez pas en silence. Vérifiez si possible auprès de la source (l'enquêteur, le registre papier, l'agent de terrain). Si vous corrigez, documentez votre choix : ajoutez une colonne « Remarques » ou tenez un petit journal des modifications (« ligne 47 : âge 350 corrigé en 35, faute de frappe évidente »). Ainsi, n'importe qui — un collègue, un auditeur, un bailleur — pourra comprendre ce que vous avez fait et pourquoi. Documenter ses choix, c'est ce qui sépare un nettoyage sérieux d'une manipulation hasardeuse."
      }
    ],
    "example": {
      "title": "L'ONG TerreVivante dédoublonne 1 200 bénéficiaires avant une distribution",
      "challenge": "TerreVivante, une ONG opérant dans la région de Maradi, prépare une distribution de kits alimentaires pour 1 200 ménages. La liste a été constituée à partir de trois inscriptions successives sur plusieurs mois, par des agents différents, sur des téléphones et carnets distincts. Personne n'a vérifié si certains ménages figuraient plusieurs fois. Or chaque kit a un coût, et un doublon signifie une famille servie deux fois pendant qu'une autre est oubliée.",
      "solution": "Avant la distribution, la chargée de suivi-évaluation fait d'abord une copie du fichier original. Elle standardise ensuite les noms (une seule orthographe par personne) et les numéros de téléphone (même format, sans espaces). Puis elle utilise « Données > Supprimer les doublons » en se basant sur le numéro de pièce d'identité, plus fiable que le nom. Elle vérifie chaque doublon repéré avant suppression, et documente ses corrections dans une colonne « Remarques ».",
      "impact": "L'opération révèle environ 90 doublons, soit près de 7 % de la liste. En les retirant, l'ONG évite de distribuer 90 kits en trop. À un coût prudent de l'ordre de 15 000 FCFA par kit, cela représente environ 1 350 000 FCFA d'économie — des ressources qui permettent de servir d'autres ménages réellement non couverts. Au-delà de l'argent, l'ONG protège sa crédibilité auprès du bailleur et garantit une distribution plus juste. Ces chiffres sont indicatifs et dépendent du contexte, mais ils montrent qu'un simple nettoyage peut avoir un impact concret et mesurable."
    },
    "practice": {
      "title": "Nettoyez un petit fichier en gardant une copie de l'original",
      "instructions": [
        "Prenez un petit fichier de 10 à 20 lignes (une liste de membres, de bénéficiaires ou de participants) dans Excel, LibreOffice Calc ou Google Sheets. Faites-en d'abord une copie nommée clairement, par exemple « ma_liste_ORIGINAL », et travaillez uniquement sur une seconde copie nommée « ma_liste_NETTOYE ».",
        "Sur la copie de travail, repérez au moins trois types d'erreurs différents : par exemple une cellule vide (valeur manquante), une même personne inscrite deux fois (doublon), et des dates écrites de façons différentes (format incohérent). Utilisez le tri et les filtres pour les faire apparaître.",
        "Corrigez chaque erreur : complétez ou signalez la valeur manquante, supprimez le doublon après vérification, et mettez toutes les dates au même format. Ajoutez une colonne « Remarques » pour noter brièvement ce que vous avez changé et pourquoi."
      ],
      "observation": "Comparez votre fichier nettoyé à l'original que vous avez conservé. Combien d'erreurs avez-vous trouvées sur seulement 10 à 20 lignes ? Imaginez maintenant le même taux d'erreurs sur un fichier de 1 000 lignes. Vous comprenez alors pourquoi le nettoyage prend du temps — et pourquoi garder une copie de l'original n'est pas une option mais une obligation."
    },
    "quiz": [
      {
        "question": "Dans une colonne « Âge », plusieurs cellules sont vides parce que la question n'a pas été posée à certains bénéficiaires. Comment appelle-t-on ce problème ?",
        "options": [
          {
            "key": "A",
            "text": "Une valeur manquante"
          },
          {
            "key": "B",
            "text": "Un doublon"
          },
          {
            "key": "C",
            "text": "Une valeur aberrante"
          },
          {
            "key": "D",
            "text": "Une standardisation"
          }
        ],
        "answer": "A",
        "explanation": "Une cellule vide où une information était attendue est une valeur manquante. Elle peut fausser les moyennes et les comptages si on l'ignore : il faut la repérer, puis décider de la compléter, de la signaler ou de l'exclure du calcul de façon transparente."
      },
      {
        "question": "Après trois distributions successives, la même bénéficiaire « Hadiza Moussa » apparaît deux fois dans votre liste. De quel type d'erreur s'agit-il ?",
        "options": [
          {
            "key": "A",
            "text": "Une valeur aberrante"
          },
          {
            "key": "B",
            "text": "Un format incohérent"
          },
          {
            "key": "C",
            "text": "Un doublon"
          },
          {
            "key": "D",
            "text": "Une valeur manquante"
          }
        ],
        "answer": "C",
        "explanation": "Lorsqu'une même personne figure plusieurs fois, il s'agit d'un doublon. C'est très fréquent après plusieurs inscriptions. Le dédoublonnage, de préférence sur un identifiant unique plutôt que sur le nom, évite par exemple de distribuer deux rations à un même ménage."
      },
      {
        "question": "Dans un même fichier, vous trouvez les dates « 12/03/2025 », « 2025-03-12 » et « 12 mars 2025 ». Quel est le problème ?",
        "options": [
          {
            "key": "A",
            "text": "Ce sont des doublons à supprimer"
          },
          {
            "key": "B",
            "text": "Ce sont des formats de date incohérents qu'il faut standardiser"
          },
          {
            "key": "C",
            "text": "Ce sont des valeurs manquantes"
          },
          {
            "key": "D",
            "text": "Il n'y a aucun problème, Excel comprend tout automatiquement"
          }
        ],
        "answer": "B",
        "explanation": "Une même date écrite de plusieurs façons est un problème de format incohérent. Tant que les dates ne sont pas uniformisées (par exemple en AAAA-MM-JJ), Excel peut les interpréter de travers et aucun tri ni calcul de date n'est fiable. La standardisation résout ce problème."
      },
      {
        "question": "Dans une liste où l'âge va de 18 à 70 ans, une ligne indique « 350 ans ». Que devez-vous faire ?",
        "options": [
          {
            "key": "A",
            "text": "La supprimer immédiatement et en silence"
          },
          {
            "key": "B",
            "text": "L'ignorer, ce n'est pas grave"
          },
          {
            "key": "C",
            "text": "Multiplier toute la colonne pour compenser"
          },
          {
            "key": "D",
            "text": "Vérifier s'il s'agit d'une erreur ou d'une réalité, corriger si besoin et documenter votre choix"
          }
        ],
        "answer": "D",
        "explanation": "« 350 ans » est une valeur aberrante, ici très probablement une faute de saisie (35 ans). La bonne pratique n'est jamais de supprimer en silence : on vérifie auprès de la source si possible, on corrige, et on documente le choix (par exemple dans une colonne « Remarques ») pour que tout le monde puisse comprendre ce qui a été fait."
      },
      {
        "question": "Quelle est la toute première chose à faire avant de commencer à nettoyer un fichier ?",
        "options": [
          {
            "key": "A",
            "text": "Faire une copie du fichier original et travailler sur la copie"
          },
          {
            "key": "B",
            "text": "Supprimer toutes les lignes qui semblent bizarres"
          },
          {
            "key": "C",
            "text": "Envoyer le fichier au bailleur tel quel"
          },
          {
            "key": "D",
            "text": "Effacer la première colonne pour gagner de la place"
          }
        ],
        "answer": "A",
        "explanation": "La règle d'or est de toujours conserver une copie de l'original et de ne modifier qu'une copie de travail. Si vous supprimez ou modifiez une donnée par erreur, l'original reste intact et vous pouvez revenir en arrière. C'est votre filet de sécurité indispensable."
      }
    ],
    "reflection": "Pensez à un fichier réel que vous utilisez dans votre travail — une liste de bénéficiaires, un registre de membres de coopérative, ou des données d'enquête. Quels types d'erreurs y avez-vous déjà rencontrés (valeurs manquantes, doublons, formats incohérents, valeurs aberrantes) ? Quelle serait la première colonne que vous nettoieriez, et pourquoi est-elle la plus importante pour vos décisions ?",
    "glossary": [
      {
        "term": "Donnée propre",
        "definition": "Un jeu de données fiable et prêt à être analysé : sans doublons, avec les valeurs manquantes traitées, des formats uniformes et les erreurs évidentes corrigées. « Données propres = décisions fiables. »"
      },
      {
        "term": "Valeur manquante",
        "definition": "Une cellule vide où une information était attendue (un âge, un village, un montant). Elle peut fausser les moyennes et les comptages tant qu'elle n'est pas repérée, complétée ou clairement signalée."
      },
      {
        "term": "Doublon",
        "definition": "Une même personne ou un même enregistrement présent plusieurs fois dans le fichier. Très fréquent après plusieurs distributions ou inscriptions, il fausse les totaux s'il n'est pas supprimé."
      },
      {
        "term": "Valeur aberrante (outlier)",
        "definition": "Une donnée qui s'écarte fortement de toutes les autres (par exemple un âge de 350 ans). Elle peut être une erreur de saisie ou une réalité inhabituelle : il faut vérifier avant de corriger ou de supprimer."
      },
      {
        "term": "Format de données",
        "definition": "La façon dont une information est écrite (date, nombre, texte). Dans un même fichier, des formats différents pour une même donnée — comme plusieurs écritures de date — empêchent tout calcul fiable."
      },
      {
        "term": "Standardisation",
        "definition": "L'action d'uniformiser l'écriture d'une même information dans tout le fichier : un seul format de date, une seule façon d'écrire les nombres, une seule orthographe par nom. Elle rend les données comparables et calculables."
      }
    ]
  },
  "en": {
    "id": "d1",
    "lessonNumber": 1,
    "title": "Clean an Excel file",
    "objective": "By the end of this lesson, you will know how to spot and correct the most common errors in a file: missing values, duplicates, inconsistent formats, and outliers. You will end up with a clean, usable dataset ready for analysis. You will also adopt the habit of always keeping a copy of the original before making any changes, so you can work safely in your context as an NGO, cooperative, or field-survey worker.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why clean before analyzing",
        "body": "There is a saying in computing: \"garbage in, garbage out\" — meaning that if you put in rubbish, you get rubbish out. In other words, an analysis, however careful, is never better than the data it is based on. If your beneficiary file contains errors, your totals will be wrong, your percentages misleading, and the decisions made from those numbers will be poor. \"Reliable data = reliable decisions.\"\n\nImagine a food store whose stock-in and stock-out register is poorly kept: nobody really knows how many bags of rice are left. You risk ordering too much, or too little. A poorly cleaned Excel file is exactly like that store: the numbers exist, but you cannot trust them. A single beneficiary counted twice, one badly entered date, and your whole donor report becomes shaky.\n\nLet us be honest: cleaning a file is not the exciting part of the job. Nobody brags about having fixed three hundred typos. And yet data professionals have said it for a long time: cleaning often makes up close to 80% of the real work of an analysis. It is thankless but essential work. The time you spend making your data reliable is never wasted: it is what makes your conclusions solid and defensible before your management or your donor."
      },
      {
        "title": "The most common errors",
        "body": "Four types of error come up almost every time in field files. The first: missing values. A cell is left empty because the enumerator did not ask the question, or because the beneficiary did not answer. A missing age, an unrecorded village, a forgotten distribution amount. These gaps distort averages and counts if you are not careful.\n\nThe second: duplicates. The same person appears twice, sometimes three times. This happens very often after several distributions: a beneficiary registered in January is re-registered in March because nobody checked the existing list. The third: data-entry mistakes, especially in names. \"Aïssata Diallo\" becomes \"Aissata Diallo\", \"Aisatta Djallo\", or \"A. Diallo\". To a human, it is the same person; to Excel, these are four different people.\n\nThe fourth: inconsistent formats. Dates are the worst offenders. In a single file you find \"12/03/2025\", \"2025-03-12\", \"12 March 2025\", and \"12-03-25\". Excel no longer knows whether it is 12 March or 3 December. The same problem occurs with numbers: \"1 200\", \"1200\", \"1.200\", or \"1,200 FCFA\" are not always read as the same value. Until these formats are made uniform, no reliable calculation is possible."
      },
      {
        "title": "Spot and correct step by step",
        "body": "Before anything else, one absolute golden rule: never work on the original file. First make a copy of it (\"File > Save As\" or a simple copy-paste of the file) and name it clearly, for example \"beneficiary_list_CLEANED_2025-06\". That way, if you delete something by mistake, the original stays intact. It is your safety net.\n\nThen proceed methodically. To spot missing values, use sorting (\"Sort\"): empty cells often rise to the top or bottom of a column and become obvious. To isolate a specific problem, use filters: for example, you can display only the rows where the \"Village\" field is empty. For duplicates, most spreadsheets have a dedicated function: in Excel, \"Data > Remove Duplicates\"; in Google Sheets, \"Data > Data cleanup > Remove duplicates\". Always check which column you are de-duplicating on (a unique identifier is safer than a name).\n\nTo standardize formats, work on one column at a time. Put all dates in the same format (for example YYYY-MM-DD), make the way numbers are written uniform by removing extra spaces and stray symbols, and harmonize names (one spelling per person, consistent capitalization). Work in small steps and check regularly that you have not destroyed valid data. When in doubt, go back to your copy of the original: that is exactly why you kept it."
      },
      {
        "title": "Outliers and caution",
        "body": "An outlier is a value that differs sharply from all the others. For example, in a list where beneficiaries' ages range from 18 to 70, one row reads \"350 years old\". Or a distribution of 5 bags of rice per household, except one row showing \"5,000 bags\". These values jump out when you sort the column from largest to smallest: the extreme values land at both ends.\n\nBut be careful — and this is the most important point: an outlier is not always an error. An age of 350 is clearly a data-entry mistake (probably 35). On the other hand, a household of 18 people in an area where the average is 6 may be perfectly real — perhaps an extended family or a household hosting displaced persons. The question to ask is never \"is this value strange?\" but \"is this value wrong, or simply unusual but true?\". Deleting real data because it is inconvenient means betraying the reality on the ground.\n\nThe good practice, then, is caution and traceability. When you spot an outlier, do not delete it silently. Check with the source if possible (the enumerator, the paper register, the field agent). If you do correct it, document your choice: add a \"Notes\" column or keep a short log of changes (\"row 47: age 350 corrected to 35, obvious typo\"). That way anyone — a colleague, an auditor, a donor — can understand what you did and why. Documenting your choices is what separates serious cleaning from reckless manipulation."
      }
    ],
    "example": {
      "title": "The NGO TerreVivante de-duplicates 1,200 beneficiaries before a distribution",
      "challenge": "TerreVivante, an NGO operating in the Maradi region, is preparing a distribution of food kits for 1,200 households. The list was built from three successive registration rounds over several months, by different agents, on separate phones and notebooks. Nobody checked whether some households appeared more than once. Yet each kit has a cost, and a duplicate means one family served twice while another is left out.",
      "solution": "Before the distribution, the monitoring-and-evaluation officer first makes a copy of the original file. She then standardizes the names (one spelling per person) and the phone numbers (same format, no spaces). Next she uses \"Data > Remove Duplicates\", basing it on the ID-document number, which is more reliable than the name. She checks each detected duplicate before deleting it, and documents her corrections in a \"Notes\" column.",
      "impact": "The operation reveals about 90 duplicates, nearly 7% of the list. By removing them, the NGO avoids distributing 90 surplus kits. At a cautious cost of around 15,000 FCFA per kit, that is roughly 1,350,000 FCFA saved — resources that can serve other genuinely uncovered households. Beyond the money, the NGO protects its credibility with the donor and ensures a fairer distribution. These figures are indicative and depend on context, but they show that a simple cleanup can have a concrete, measurable impact."
    },
    "practice": {
      "title": "Clean a small file while keeping a copy of the original",
      "instructions": [
        "Take a small file of 10 to 20 rows (a list of members, beneficiaries, or participants) in Excel, LibreOffice Calc, or Google Sheets. First make a copy named clearly, for example \"my_list_ORIGINAL\", and work only on a second copy named \"my_list_CLEANED\".",
        "On the working copy, spot at least three different types of error: for example an empty cell (missing value), the same person registered twice (duplicate), and dates written in different ways (inconsistent format). Use sorting and filters to make them appear.",
        "Correct each error: fill in or flag the missing value, remove the duplicate after verification, and put all dates in the same format. Add a \"Notes\" column to briefly record what you changed and why."
      ],
      "observation": "Compare your cleaned file with the original you kept. How many errors did you find in just 10 to 20 rows? Now imagine the same error rate in a file of 1,000 rows. You then understand why cleaning takes time — and why keeping a copy of the original is not an option but an obligation."
    },
    "quiz": [
      {
        "question": "In an \"Age\" column, several cells are empty because the question was not asked to some beneficiaries. What is this problem called?",
        "options": [
          {
            "key": "A",
            "text": "A missing value"
          },
          {
            "key": "B",
            "text": "A duplicate"
          },
          {
            "key": "C",
            "text": "An outlier"
          },
          {
            "key": "D",
            "text": "A standardization"
          }
        ],
        "answer": "A",
        "explanation": "An empty cell where information was expected is a missing value. It can distort averages and counts if ignored: you must spot it, then decide to fill it in, flag it, or exclude it from the calculation in a transparent way."
      },
      {
        "question": "After three successive distributions, the same beneficiary \"Hadiza Moussa\" appears twice in your list. What type of error is this?",
        "options": [
          {
            "key": "A",
            "text": "An outlier"
          },
          {
            "key": "B",
            "text": "An inconsistent format"
          },
          {
            "key": "C",
            "text": "A duplicate"
          },
          {
            "key": "D",
            "text": "A missing value"
          }
        ],
        "answer": "C",
        "explanation": "When the same person appears several times, it is a duplicate. This is very common after several registrations. De-duplicating, preferably on a unique identifier rather than on the name, avoids, for example, giving two rations to the same household."
      },
      {
        "question": "In a single file you find the dates \"12/03/2025\", \"2025-03-12\", and \"12 March 2025\". What is the problem?",
        "options": [
          {
            "key": "A",
            "text": "They are duplicates to be removed"
          },
          {
            "key": "B",
            "text": "They are inconsistent date formats that must be standardized"
          },
          {
            "key": "C",
            "text": "They are missing values"
          },
          {
            "key": "D",
            "text": "There is no problem, Excel understands everything automatically"
          }
        ],
        "answer": "B",
        "explanation": "The same date written in several ways is an inconsistent-format problem. Until the dates are made uniform (for example as YYYY-MM-DD), Excel may misread them and no sort or date calculation is reliable. Standardization solves this problem."
      },
      {
        "question": "In a list where age ranges from 18 to 70, one row reads \"350 years old\". What should you do?",
        "options": [
          {
            "key": "A",
            "text": "Delete it immediately and silently"
          },
          {
            "key": "B",
            "text": "Ignore it, it does not matter"
          },
          {
            "key": "C",
            "text": "Multiply the whole column to compensate"
          },
          {
            "key": "D",
            "text": "Check whether it is an error or a reality, correct it if needed, and document your choice"
          }
        ],
        "answer": "D",
        "explanation": "\"350 years old\" is an outlier, here most likely a data-entry mistake (35). Good practice is never to delete silently: you check with the source if possible, correct it, and document the choice (for example in a \"Notes\" column) so everyone can understand what was done."
      },
      {
        "question": "What is the very first thing to do before starting to clean a file?",
        "options": [
          {
            "key": "A",
            "text": "Make a copy of the original file and work on the copy"
          },
          {
            "key": "B",
            "text": "Delete all the rows that look strange"
          },
          {
            "key": "C",
            "text": "Send the file to the donor as it is"
          },
          {
            "key": "D",
            "text": "Erase the first column to save space"
          }
        ],
        "answer": "A",
        "explanation": "The golden rule is to always keep a copy of the original and modify only a working copy. If you delete or change data by mistake, the original stays intact and you can go back. It is your indispensable safety net."
      }
    ],
    "reflection": "Think of a real file you use in your work — a beneficiary list, a cooperative membership register, or survey data. What types of errors have you already encountered in it (missing values, duplicates, inconsistent formats, outliers)? Which column would you clean first, and why is it the most important one for your decisions?",
    "glossary": [
      {
        "term": "Clean data",
        "definition": "A reliable dataset ready to be analyzed: free of duplicates, with missing values handled, uniform formats, and obvious errors corrected. \"Clean data = reliable decisions.\""
      },
      {
        "term": "Missing value",
        "definition": "An empty cell where information was expected (an age, a village, an amount). It can distort averages and counts until it is spotted, filled in, or clearly flagged."
      },
      {
        "term": "Duplicate",
        "definition": "The same person or the same record present several times in the file. Very common after multiple distributions or registrations, it distorts totals if not removed."
      },
      {
        "term": "Outlier",
        "definition": "A value that differs sharply from all the others (for example an age of 350). It may be a data-entry error or an unusual reality: you must check before correcting or deleting it."
      },
      {
        "term": "Data format",
        "definition": "The way information is written (date, number, text). Within one file, different formats for the same kind of data — such as several date spellings — prevent any reliable calculation."
      },
      {
        "term": "Standardization",
        "definition": "The act of making the way the same information is written uniform throughout the file: one date format, one way of writing numbers, one spelling per name. It makes the data comparable and calculable."
      }
    ]
  },
  "ha": {
    "id": "d1",
    "lessonNumber": 1,
    "title": "Tsaftace fayil Excel",
    "objective": "A ƙarshen wannan darasi, za ku iya gano da gyara kurakurai mafi yawan gani a cikin fayil: ƙimomi da suka ɓace, kwafi biyu, tsarin da bai dace ba, da ƙimomi masu nisa. Ta haka za ku samu bayanai masu tsafta da za a iya amfani da su, a shirye don nazari. Za ku kuma karɓi al'adar adana kwafin ainihin fayil koyaushe kafin yin kowane gyara, don ku yi aiki cikin aminci a yanayinku na ƙungiyar agaji, ƙungiyar haɗin kai, ko binciken filin aiki.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Me ya sa za a tsaftace kafin nazari",
        "body": "Akwai wata magana a fannin kwamfuta: « garbage in, garbage out » — ma'ana idan ka shigar da shara, shara za ka samu. Wato, nazari, kome kyaunsa, ba zai taɓa zama mafi kyau fiye da bayanan da aka kafa shi a kansu ba. Idan fayil ɗin masu amfana da ku yana ƙunsar kurakurai, jimillarku za ta zama ƙarya, kashi bisa darinku zai ɓad da hankali, kuma shawarwarin da aka yanke daga waɗannan lambobi za su zama marasa kyau. « Bayanai masu aminci = shawarwari masu aminci. »\n\nKu yi tunanin wani shagon abinci da ba a kula da littafin shiga da fitar da kayansa da kyau ba: ba a san adadin buhunan shinkafa da suka rage da gaske ba. Akwai haɗarin yin oda mai yawa, ko ƙanƙanta. Fayil Excel da ba a tsaftace shi da kyau ba kamar wannan shago ne: lambobi suna nan, amma ba za a iya amincewa da su ba. Wani mai amfana ɗaya da aka ƙidaya sau biyu, wani kwanan wata da aka shigar ba daidai ba, sai duka rahotonku ga mai ba da taimako ya zama mai rauni.\n\nMu yi gaskiya: tsaftace fayil ba ɓangaren aiki mai ban sha'awa ba ne. Babu wanda ke fariya da gyara kurakuran rubutu ɗari uku. Duk da haka, ƙwararru a fannin bayanai sun daɗe suna faɗi: tsaftacewa sau da yawa tana wakiltar kusan kashi 80 bisa dari na aikin nazari na gaske. Aiki ne mara godiya amma mai mahimmanci. Lokacin da kuke kashewa wajen sanya bayananku masu aminci ba a taɓa rasa shi ba: shi ne ke sanya ƙarshen tunaninku da ƙarfi kuma za a iya kare shi gaban shugabancinku ko mai ba da taimakonku."
      },
      {
        "title": "Kurakurai mafi yawan gani",
        "body": "Akwai nau'ikan kurakurai guda huɗu da kusan suke bayyana koyaushe a cikin fayilolin filin aiki. Na farko: ƙimomi da suka ɓace. Wani tantani ya rage babu komai domin mai bincike bai yi tambayar ba, ko domin mai amfana bai amsa ba. Shekaru da suka ɓace, ƙauye da ba a rubuta ba, adadin rabar da aka manta. Waɗannan ramuka suna ɓata matsakaici da ƙidaya idan ba a kula da su ba.\n\nNa biyu: kwafi biyu. Mutum ɗaya yana bayyana sau biyu, wani lokaci uku. Wannan na faruwa sosai bayan rabe-rabe da dama: mai amfana da aka rajista a Janairu an sake rajista shi a Maris domin babu wanda ya duba jeran da ke akwai. Na uku: kurakuran shigar da bayanai, musamman a sunaye. « Aïssata Diallo » ya zama « Aissata Diallo », « Aisatta Djallo », ko « A. Diallo ». Ga ɗan Adam, mutum ɗaya ne; ga Excel, mutane huɗu ne daban-daban.\n\nNa huɗu: tsarin da bai dace ba. Kwanakin wata su ne mafi muni. A cikin fayil ɗaya, akan samu « 12/03/2025 », « 2025-03-12 », « 12 ga Maris 2025 », da « 12-03-25 ». Excel bai ƙara sani ko 12 ga Maris ne ko 3 ga Disamba ba. Matsala iri ɗaya da lambobi: « 1 200 », « 1200 », « 1.200 », ko « 1,200 FCFA » ba a koyaushe ake karanta su a matsayin ƙima iri ɗaya ba. Matuƙar ba a daidaita waɗannan tsarin ba, babu wani lissafi mai aminci da zai yiwu."
      },
      {
        "title": "Gano da gyara mataki-mataki",
        "body": "Kafin komai, akwai dokar zinariya ta tilas: kada ku taɓa yin aiki kan ainihin fayil. Ku fara yin kwafinsa (« Fayil > Adana a matsayin » ko kwafa-liƙa fayil kawai) kuma ku ba shi suna a fili, misali « jeran_masu_amfana_TSAFTATA_2025-06 ». Ta haka, idan kun goge wani abu da kuskure, ainihin ya rage cikakke. Wannan shi ne tarunku na tsaro.\n\nSannan, ku ci gaba cikin tsari. Don gano ƙimomi da suka ɓace, ku yi amfani da tsarawa (« Tsara »): tantanai marasa komai sau da yawa suna hawa sama ko ƙasa na wani shafi, kuma suna bayyana a fili. Don ware wata matsala ta musamman, ku yi amfani da matatu (filters): za ku iya misali nuna kawai layuka inda filin « Ƙauye » babu komai. Don kwafi biyu, yawancin tebur ɗin lissafi suna da aiki na musamman: a Excel, « Bayanai > Cire Kwafi Biyu »; a Google Sheets, « Bayanai > Tsaftace bayanai > Cire kwafi biyu ». Ku tabbatar koyaushe a kan wane shafi kuke cire kwafi biyu (mai gano na musamman ya fi suna aminci).\n\nDon daidaita tsarin, ku yi aiki da shafi ɗaya a lokaci ɗaya. Ku sanya dukan kwanakin wata a tsari iri ɗaya (misali SHEKARA-WATA-RANA), ku daidaita yadda ake rubuta lambobi ta hanyar cire fili da alamomin da ba dole ba, kuma ku jituwa sunaye (rubutu ɗaya kawai ga kowane mutum, manyan haruffa masu daidaito). Ku yi aiki cikin ƙananan matakai kuma ku duba akai-akai cewa ba ku lalata wani bayani mai inganci ba. A lokacin shakku, ku koma ga kwafin ainihin: don haka ne ainihin kuka adana shi."
      },
      {
        "title": "Ƙimomi masu nisa da tsarki",
        "body": "Ƙima mai nisa (ko « outlier » a Turanci) bayani ne da ya nisanci sauran duka sosai. Misali, a cikin jeran inda shekarun masu amfana suka tafi daga 18 zuwa 70, wani layi ya nuna « shekaru 350 ». Ko kuma rabar buhunan shinkafa 5 ga kowace gida, sai dai wani layi da ya nuna « buhuna 5,000 ». Waɗannan ƙimomi suna bayyana a fili lokacin da kuka tsara shafin daga mafi girma zuwa mafi ƙanƙanta: ƙimomi masu tsananin sun zauna a ƙarshen biyu.\n\nAma a lura, kuma wannan shine batun mafi muhimmanci: ƙima mai nisa ba koyaushe kuskure ce ba. Shekaru 350 a bayyane kuskuren shigarwa ne (mai yiwuwa shekaru 35). A gefe guda, gida na mutane 18 a yankin da matsakaici ke 6 na iya zama gaskiya ƙwarai — mai yiwuwa iyali mai faɗi ne ko gidan da ke ɗaukar bakuncin mutanen da aka raba da gidajensu. Tambayar da za a yi ba ta « shin wannan ƙima baƙaƙƙiya ce? » ba ce sai dai « shin wannan ƙima ƙarya ce, ko kuwa ba a saba da ita ba amma gaskiya ce? ». Goge bayani na gaskiya saboda yana damuwa, shi ne cin amanar gaskiyar filin aiki.\n\nKyakkyawan aiki saboda haka shine tsarki da iya bibiya. Lokacin da kuka gano ƙima mai nisa, kada ku goge ta a shiru. Ku duba idan zai yiwu wajen tushe (mai bincike, littafin takarda, wakilin filin aiki). Idan kun gyara, ku tattara zaɓinku: ku ƙara shafi « Remarques » ko ku riƙe ƙaramin littafin gyare-gyare (« layi 47: shekaru 350 an gyara zuwa 35, kuskuren rubutu a bayyane »). Ta haka, kowa — abokin aiki, mai dubawa, mai ba da taimako — zai iya fahimtar abin da kuka yi da kuma dalilin. Tattara zaɓinka, shi ne abin da ke raba tsaftacewa mai tsanani da magudi mai haɗari."
      }
    ],
    "example": {
      "title": "Ƙungiyar agaji TerreVivante ta cire kwafi biyu daga masu amfana 1,200 kafin rabarwa",
      "challenge": "TerreVivante, ƙungiyar agaji da ke aiki a yankin Maradi, tana shirya rabar da kayan abinci ga gidaje 1,200. An gina jeran daga zagaye uku na rajista a jere a tsawon watanni da dama, ta wakilai daban-daban, a wayoyi da littattafai daban-daban. Babu wanda ya duba ko wasu gidaje suna bayyana fiye da sau ɗaya. Ko da yake kowane kayan yana da farashi, kuma kwafi biyu yana nufin iyali ɗaya da aka yi wa hidima sau biyu yayin da aka manta da wani.",
      "solution": "Kafin rabarwa, jami'in sa ido da kima ta fara yin kwafin ainihin fayil. Sannan tana daidaita sunaye (rubutu ɗaya ga kowane mutum) da lambobin waya (tsari iri ɗaya, babu fili). Daga nan tana amfani da « Bayanai > Cire Kwafi Biyu », tana kafa shi a kan lambar takardar shaida, wadda ta fi suna aminci. Tana duba kowane kwafi biyu da aka gano kafin gogewa, kuma tana tattara gyare-gyarenta a cikin shafi « Remarques ».",
      "impact": "Aikin ya bayyana kusan kwafi biyu 90, kusan kashi 7 bisa dari na jeran. Ta hanyar cire su, ƙungiyar agaji ta guji rabar da kayan 90 fiye da kima. A farashin tsanaki na kusan FCFA 15,000 ga kowane kayan, wannan yana wakiltar kusan FCFA 1,350,000 na ajiya — albarkatun da za su iya yiwa wasu gidaje da ba a rufe su da gaske ba hidima. Bayan kuɗin, ƙungiyar agaji tana kare amincinta ga mai ba da taimako kuma tana tabbatar da rabarwa mafi adalci. Waɗannan lambobi alamomi ne kuma sun dogara ga yanayin, amma suna nuna cewa tsaftacewa mai sauƙi na iya samun tasiri na zahiri da za a iya aunawa."
    },
    "practice": {
      "title": "Ku tsaftace ƙaramin fayil yayin da kuke adana kwafin ainihin",
      "instructions": [
        "Ku ɗauki ƙaramin fayil na layuka 10 zuwa 20 (jeran membobi, masu amfana, ko mahalarta) a Excel, LibreOffice Calc, ko Google Sheets. Ku fara yin kwafi mai suna a fili, misali « jerina_AINIHI », kuma ku yi aiki kawai kan kwafi na biyu mai suna « jerina_TSAFTATA ».",
        "A kan kwafin aiki, ku gano aƙalla nau'ikan kurakurai guda uku daban-daban: misali wani tantani babu komai (ƙima da ta ɓace), mutum ɗaya da aka rajista sau biyu (kwafi biyu), da kwanakin wata da aka rubuta ta hanyoyi daban-daban (tsarin da bai dace ba). Ku yi amfani da tsarawa da matatu don sanya su bayyana.",
        "Ku gyara kowane kuskure: ku cika ko ku nuna ƙima da ta ɓace, ku cire kwafi biyu bayan tabbatarwa, kuma ku sanya dukan kwanakin wata a tsari iri ɗaya. Ku ƙara shafi « Remarques » don rubuta a taƙaice abin da kuka canza da dalilin."
      ],
      "observation": "Ku kwatanta fayil ɗin da kuka tsaftace da ainihin da kuka adana. Kurakurai nawa kuka samu kan layuka 10 zuwa 20 kawai? Yanzu ku yi tunanin adadin kurakurai iri ɗaya kan fayil na layuka 1,000. Sa'an nan za ku fahimci dalilin da ya sa tsaftacewa ke ɗaukar lokaci — kuma dalilin da ya sa adana kwafin ainihin ba zaɓi ba ne sai dai wajibci."
    },
    "quiz": [
      {
        "question": "A cikin shafi « Shekaru », tantanai da dama babu komai domin ba a yi wa wasu masu amfana tambayar ba. Ta yaya ake kiran wannan matsala?",
        "options": [
          {
            "key": "A",
            "text": "Ƙima da ta ɓace"
          },
          {
            "key": "B",
            "text": "Kwafi biyu"
          },
          {
            "key": "C",
            "text": "Ƙima mai nisa"
          },
          {
            "key": "D",
            "text": "Daidaitawa"
          }
        ],
        "answer": "A",
        "explanation": "Tantani babu komai inda ake tsammanin bayani shine ƙima da ta ɓace. Tana iya ɓata matsakaici da ƙidaya idan aka yi watsi da ita: dole ne ku gano ta, sannan ku yanke shawarar cika ta, nuna ta, ko ware ta daga lissafi ta hanyar bayyananne."
      },
      {
        "question": "Bayan rabe-rabe uku a jere, mai amfana iri ɗaya « Hadiza Moussa » yana bayyana sau biyu a cikin jeranku. Wane nau'in kuskure ne wannan?",
        "options": [
          {
            "key": "A",
            "text": "Ƙima mai nisa"
          },
          {
            "key": "B",
            "text": "Tsarin da bai dace ba"
          },
          {
            "key": "C",
            "text": "Kwafi biyu"
          },
          {
            "key": "D",
            "text": "Ƙima da ta ɓace"
          }
        ],
        "answer": "C",
        "explanation": "Lokacin da mutum iri ɗaya yake bayyana sau da yawa, kwafi biyu ne. Wannan na faruwa sosai bayan rajista da dama. Cire kwafi biyu, fiye da kome kan mai gano na musamman maimakon kan suna, yana hana misali bayar da rabo biyu ga gida ɗaya."
      },
      {
        "question": "A cikin fayil ɗaya kun samu kwanakin wata « 12/03/2025 », « 2025-03-12 », da « 12 ga Maris 2025 ». Menene matsalar?",
        "options": [
          {
            "key": "A",
            "text": "Kwafi biyu ne da za a cire"
          },
          {
            "key": "B",
            "text": "Tsarin kwanan wata ne da bai dace ba da dole ne a daidaita"
          },
          {
            "key": "C",
            "text": "Ƙimomi ne da suka ɓace"
          },
          {
            "key": "D",
            "text": "Babu matsala, Excel yana fahimtar komai kai tsaye"
          }
        ],
        "answer": "B",
        "explanation": "Kwanan wata iri ɗaya da aka rubuta ta hanyoyi da dama matsalar tsarin da bai dace ba ce. Matuƙar ba a daidaita kwanakin wata ba (misali a matsayin SHEKARA-WATA-RANA), Excel na iya karanta su ba daidai ba kuma babu tsarawa ko lissafin kwanan wata mai aminci. Daidaitawa tana warware wannan matsala."
      },
      {
        "question": "A cikin jeran inda shekaru ke tafiya daga 18 zuwa 70, wani layi ya nuna « shekaru 350 ». Me ya kamata ku yi?",
        "options": [
          {
            "key": "A",
            "text": "Ku goge ta nan da nan kuma a shiru"
          },
          {
            "key": "B",
            "text": "Ku yi watsi da ita, ba damuwa"
          },
          {
            "key": "C",
            "text": "Ku ninka dukan shafin don rama"
          },
          {
            "key": "D",
            "text": "Ku duba ko kuskure ce ko gaskiya, ku gyara idan ya cancanta, kuma ku tattara zaɓinku"
          }
        ],
        "answer": "D",
        "explanation": "« Shekaru 350 » ƙima mai nisa ce, a nan mai yiwuwa kuskuren shigarwa ne (35). Kyakkyawan aiki ba taɓa goge a shiru ba ne: ku duba wajen tushe idan zai yiwu, ku gyara, kuma ku tattara zaɓin (misali a cikin shafi « Remarques ») don kowa ya iya fahimtar abin da aka yi."
      },
      {
        "question": "Menene abu na farko da za a yi kafin fara tsaftace fayil?",
        "options": [
          {
            "key": "A",
            "text": "Yin kwafin ainihin fayil da yin aiki kan kwafin"
          },
          {
            "key": "B",
            "text": "Goge dukan layukan da suka yi kama da baƙon abu"
          },
          {
            "key": "C",
            "text": "Aika fayil ga mai ba da taimako kamar yadda yake"
          },
          {
            "key": "D",
            "text": "Goge shafi na farko don samun sarari"
          }
        ],
        "answer": "A",
        "explanation": "Dokar zinariya ita ce adana kwafin ainihin koyaushe da gyara kwafin aiki kawai. Idan kun goge ko canza bayani da kuskure, ainihin ya rage cikakke kuma za ku iya komawa baya. Wannan shi ne tarunku na tsaro mai mahimmanci."
      }
    ],
    "reflection": "Ku yi tunani kan fayil na gaskiya da kuke amfani da shi a aikinku — jeran masu amfana, littafin membobin ƙungiyar haɗin kai, ko bayanan bincike. Wane nau'ikan kurakurai kuka riga kuka haɗu da su a ciki (ƙimomi da suka ɓace, kwafi biyu, tsarin da bai dace ba, ƙimomi masu nisa)? Wane shafi za ku fara tsaftacewa, kuma me ya sa shi ne mafi muhimmanci ga shawarwarinku?",
    "glossary": [
      {
        "term": "Donnée propre (Bayani mai tsafta)",
        "definition": "Saitin bayanai mai aminci a shirye don nazari: babu kwafi biyu, an magance ƙimomi da suka ɓace, tsari iri ɗaya, kuma an gyara kurakuran a bayyane. « Bayanai masu tsafta = shawarwari masu aminci. »"
      },
      {
        "term": "Valeur manquante (Ƙima da ta ɓace)",
        "definition": "Tantani babu komai inda ake tsammanin bayani (shekaru, ƙauye, adadi). Tana iya ɓata matsakaici da ƙidaya matuƙar ba a gano ta, cika ta, ko nuna ta a fili ba."
      },
      {
        "term": "Doublon (Kwafi biyu)",
        "definition": "Mutum iri ɗaya ko rikodi iri ɗaya da ke bayyana sau da yawa a cikin fayil. Yana faruwa sosai bayan rabe-rabe ko rajista da dama, kuma yana ɓata jimillar idan ba a cire shi ba."
      },
      {
        "term": "Valeur aberrante (outlier — Ƙima mai nisa)",
        "definition": "Bayani da ya nisanci sauran duka sosai (misali shekaru 350). Tana iya zama kuskuren shigarwa ko gaskiya da ba a saba da ita ba: dole ne a duba kafin gyarawa ko gogewa."
      },
      {
        "term": "Format de données (Tsarin bayanai)",
        "definition": "Yadda ake rubuta bayani (kwanan wata, lamba, rubutu). A cikin fayil ɗaya, tsari daban-daban ga nau'in bayani iri ɗaya — kamar rubutun kwanan wata da dama — yana hana kowane lissafi mai aminci."
      },
      {
        "term": "Standardisation (Daidaitawa)",
        "definition": "Aikin sanya yadda ake rubuta bayani iri ɗaya a daidaita a cikin dukan fayil: tsarin kwanan wata ɗaya, hanya ɗaya ta rubuta lambobi, rubutu ɗaya ga kowane suna. Tana sanya bayanai masu kwatankwacin juna kuma za a iya lissafa su."
      }
    ]
  }
};
