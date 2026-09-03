import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Analyse de Données » — leçon d5 (Raconter une analyse — transformer un résultat en décision)
// Niveau INTERMÉDIAIRE. Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const daLessonD5: Record<Language, LessonContent> = {
  "fr": {
    "id": "d5",
    "lessonNumber": 5,
    "title": "Raconter une analyse — transformer un résultat en décision",
    "objective": "À la fin de cette leçon, vous saurez transformer un résultat chiffré en un message clair, honnête et orienté décision, adapté à votre audience. Vous saurez annoncer votre conclusion en premier (BLUF), relier chaque chiffre à un choix concret, ajuster le niveau de détail selon que vous parlez à un technicien ou à un décideur, et signaler honnêtement les limites de vos données.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Du chiffre à la décision",
        "body": "Une analyse qui ne mène à aucune décision est inutile. Vous pouvez passer des heures à nettoyer un tableau, à calculer des moyennes et à construire des graphiques : si personne ne change quoi que ce soit après vous avoir écouté, votre travail n'a servi à rien. Le chiffre n'est jamais le but. Le but, c'est le choix qu'il permet de faire.\n\nPrenez l'habitude de partir de la fin. Avant de présenter un résultat, posez-vous la question : « et donc, on fait quoi ? ». Si vous constatez que le taux d'abandon des élèves est plus élevé dans trois villages, la vraie question n'est pas « combien d'abandons ? » mais « faut-il renforcer le suivi dans ces trois villages ? ». Un constat de terrain présenté à un directeur pressé doit toujours déboucher sur une action possible, sinon il sera oublié dès la fin de la réunion.\n\nConcrètement, pour chaque résultat important, écrivez à côté la décision qu'il appelle. « 40 % des bénéficiaires n'ont pas reçu le second versement » n'est pas une conclusion ; « il faut débloquer le second versement avant la fin du mois, sinon 40 % des familles décrochent » en est une. Vous verrez que cette discipline transforme votre manière d'analyser : vous cherchez moins à tout mesurer, et davantage à mesurer ce qui éclaire un choix."
      },
      {
        "title": "Le message clé d'abord (BLUF)",
        "body": "Le décideur est pressé. Un directeur, un coordinateur, un bailleur lisent des dizaines de notes par semaine. Si votre conclusion arrive à la page 4, elle ne sera jamais lue. La règle s'appelle le BLUF — « bottom line up front », c'est-à-dire l'essentiel en premier. Vous annoncez votre conclusion dès la première phrase, puis vous l'appuyez avec vos chiffres et votre méthode.\n\nC'est l'inverse de l'habitude scolaire, où l'on garde la conclusion pour la fin. Ici, vous commencez par : « Je recommande de prolonger la distribution d'un mois, car sans cela un quart des ménages ciblés ne sera pas couvert. » Ensuite seulement viennent le détail, le graphique, la méthode. Le lecteur pressé a déjà l'essentiel ; le lecteur curieux peut continuer.\n\nUne autre règle puissante : une seule idée par diapositive, une seule idée par paragraphe. Si vous entassez trois messages sur une même diapositive, le public n'en retiendra aucun. Découpez. Un message = un support = une preuve. Imaginez que vous racontez une nouvelle importante à un voisin dans la rue : vous n'avez que dix secondes, vous donnez le cœur de l'affaire en premier, et vous précisez seulement s'il vous pose une question."
      },
      {
        "title": "Adapter au public",
        "body": "Le même résultat ne se raconte pas de la même façon à un technicien et à un décideur. Un collègue chargé du suivi-évaluation veut connaître votre méthode : la taille de l'échantillon, la période, la façon dont vous avez calculé le taux. Il a besoin de ces détails pour faire confiance au chiffre. Un directeur pressé, lui, veut la décision et le risque : que se passe-t-il si on agit, que se passe-t-il si on n'agit pas ?\n\nAvant de préparer votre présentation, demandez-vous toujours : qui m'écoute, et quelle décision cette personne doit-elle prendre ? Pour un bailleur que vous voulez convaincre, mettez en avant les résultats obtenus et le retour sur l'investissement. Pour une coordination que vous devez alerter, mettez en avant le danger et l'urgence. Pour une équipe technique, donnez la méthode complète. Le chiffre reste le même ; l'emballage change.\n\nChoisir le bon niveau de détail, c'est respecter le temps de votre interlocuteur. Trop de détails noient le décideur ; trop peu de détails frustrent le technicien et l'empêchent de vous faire confiance. Une bonne pratique consiste à préparer un message court d'une page pour le décideur, avec une annexe technique disponible pour ceux qui veulent creuser. Ainsi, chacun trouve le niveau dont il a besoin sans que personne ne soit perdu."
      },
      {
        "title": "Honnêteté et limites",
        "body": "Raconter une analyse n'est pas la même chose que la vendre. Votre crédibilité repose sur votre honnêteté. Si vous surinterprétez vos données une fois et qu'on s'en aperçoit, on doutera de tous vos rapports suivants. Mieux vaut un message prudent et solide qu'un message spectaculaire et fragile.\n\nLa première règle d'honnêteté concerne la taille de l'échantillon. Si vous avez interrogé 12 personnes, vous ne pouvez pas écrire « 75 % de la population pense que… ». Vous écrivez « 9 des 12 personnes interrogées ont indiqué que… ». Un petit échantillon donne une piste, pas une preuve. Signalez toujours les incertitudes : une période trop courte, des données manquantes, une saison particulière qui fausse peut-être les résultats.\n\nLa deuxième règle est de distinguer corrélation et causalité. Deux choses peuvent varier ensemble sans que l'une cause l'autre. Si les inscriptions à la formation augmentent en même temps que les pluies arrivent, cela ne veut pas dire que la pluie pousse les gens à s'inscrire — c'est peut-être la fin des travaux des champs qui libère du temps. Dire « on observe un lien, dont la cause reste à confirmer » est honnête et professionnel. Dire « la pluie augmente les inscriptions » sans preuve est une faute qui peut conduire à une mauvaise décision."
      }
    ],
    "example": {
      "title": "Fatou et la note d'une page qui débloque une réunion",
      "challenge": "Fatou est analyste suivi-évaluation dans une ONG d'appui aux coopératives agricoles au Burkina Faso. Elle a produit un tableau de 30 colonnes sur les remboursements de microcrédits, croisant région, genre et type de culture. À la réunion de coordination, elle projette le tableau brut : les chiffres sont justes mais illisibles. Le directeur, pressé, ne voit pas ce qu'il doit décider et reporte le point « faute de temps ». L'analyse, pourtant solide, ne sert à rien.",
      "solution": "Pour la réunion suivante, Fatou applique le principe « message clé + 1 graphique + 1 recommandation ». Elle réduit tout à une note d'une page. Première phrase, en gras : « Je recommande de reporter l'échéance des remboursements de la région Est de deux mois. » Dessous, un seul graphique simple en barres : le taux de remboursement par région, où l'Est ressort nettement en dessous des autres. Puis une recommandation chiffrée et honnête : « Sur les 48 coopératives de l'Est interrogées, 31 sont en retard à cause de la mauvaise récolte ; sans report, le risque de défaut touche environ deux tiers d'entre elles. » Elle prépare le tableau détaillé en annexe, pour qui veut le consulter.",
      "impact": "La décision est prise en réunion en moins de dix minutes, contre deux réunions reportées auparavant. Le report d'échéance est accordé pour les 48 coopératives concernées. En présentant ses données ainsi sur les trois trimestres suivants, Fatou voit ses recommandations adoptées dans la grande majorité des cas, contre une minorité quand elle projetait des tableaux bruts. Le gain principal n'est pas seulement du temps gagné en réunion : c'est que l'analyse débouche enfin sur des décisions concrètes."
    },
    "practice": {
      "title": "Transformer un résultat en trois phrases qui décident",
      "instructions": [
        "Choisissez un résultat d'analyse réel issu de votre travail (un taux, un nombre, une comparaison) — par exemple « le taux de présence aux formations est de 58 % » — et notez-le en haut d'une feuille ou dans une note sur votre téléphone.",
        "Écrivez trois phrases courtes, dans cet ordre : 1) le message clé (la conclusion et la décision, en une phrase, façon BLUF) ; 2) la preuve chiffrée qui l'appuie ; 3) la recommandation concrète (qui fait quoi, et avant quand).",
        "Relisez vos trois phrases et vérifiez l'honnêteté : la taille de votre échantillon justifie-t-elle votre conclusion ? Avez-vous confondu un lien et une cause ? Ajoutez si besoin une mention de limite, par exemple « sur la base de 12 entretiens seulement »."
      ],
      "observation": "Vous remarquerez qu'une fois forcé de tenir en trois phrases, vous gardez l'essentiel et laissez tomber les détails qui n'éclairent aucune décision. C'est exactement ce que vit un décideur pressé. Si vos trois phrases tiennent debout seules, votre analyse est prête à être racontée ; si la troisième phrase ne découle pas clairement des deux premières, c'est que votre conclusion n'est pas encore solide."
    },
    "quiz": [
      {
        "question": "Selon le principe BLUF, où placez-vous votre conclusion dans une note destinée à un décideur pressé ?",
        "options": [
          {
            "key": "A",
            "text": "À la fin, après avoir détaillé toute la méthode et les calculs"
          },
          {
            "key": "B",
            "text": "Au tout début, dès la première phrase, avant le détail et les preuves"
          },
          {
            "key": "C",
            "text": "Au milieu, entre le contexte et les recommandations"
          },
          {
            "key": "D",
            "text": "Nulle part : on laisse le lecteur tirer lui-même la conclusion"
          }
        ],
        "answer": "B",
        "explanation": "BLUF signifie « bottom line up front » : l'essentiel en premier. Le décideur est pressé et lit beaucoup. En annonçant votre conclusion dès la première phrase, vous garantissez qu'elle sera lue, puis vous l'appuyez avec vos chiffres et votre méthode pour qui veut creuser."
      },
      {
        "question": "Vous présentez le même taux d'abandon à un collègue suivi-évaluation et à un directeur pressé. Comment adaptez-vous votre message ?",
        "options": [
          {
            "key": "A",
            "text": "On dit exactement la même chose aux deux, car le chiffre ne change pas"
          },
          {
            "key": "B",
            "text": "On donne la méthode complète au directeur et seulement la décision au technicien"
          },
          {
            "key": "C",
            "text": "On donne la méthode et l'échantillon au technicien, et la décision et le risque au directeur"
          },
          {
            "key": "D",
            "text": "On simplifie pour les deux en supprimant tous les chiffres"
          }
        ],
        "answer": "C",
        "explanation": "Le chiffre reste le même, mais l'emballage change selon le public. Le technicien a besoin de la méthode et de la taille de l'échantillon pour faire confiance au résultat ; le décideur veut savoir quelle décision prendre et quel risque il court s'il agit ou non."
      },
      {
        "question": "Quel énoncé constitue une vraie recommandation orientée décision ?",
        "options": [
          {
            "key": "A",
            "text": "« 40 % des bénéficiaires n'ont pas reçu le second versement. »"
          },
          {
            "key": "B",
            "text": "« Le tableau montre des écarts importants entre les régions. »"
          },
          {
            "key": "C",
            "text": "« Les données ont été collectées entre janvier et mars. »"
          },
          {
            "key": "D",
            "text": "« Il faut débloquer le second versement avant la fin du mois, sinon 40 % des familles décrochent. »"
          }
        ],
        "answer": "D",
        "explanation": "Une recommandation relie un chiffre à une action concrète, avec un responsable implicite et une échéance. Les autres énoncés sont des constats : ils décrivent une situation sans dire quoi faire. Une analyse qui ne mène à aucune décision est inutile."
      },
      {
        "question": "Vous avez interrogé 12 personnes et 9 partagent un même avis. Quelle formulation est la plus honnête ?",
        "options": [
          {
            "key": "A",
            "text": "« 75 % de la population pense que… »"
          },
          {
            "key": "B",
            "text": "« 9 des 12 personnes interrogées ont indiqué que… »"
          },
          {
            "key": "C",
            "text": "« La grande majorité des habitants estime que… »"
          },
          {
            "key": "D",
            "text": "« Il est prouvé que la population pense que… »"
          }
        ],
        "answer": "B",
        "explanation": "Un petit échantillon donne une piste, pas une preuve généralisable. Annoncer « 9 sur 12 » est exact et prudent ; transformer ce résultat en « 75 % de la population » laisse croire à une représentativité que 12 entretiens ne permettent pas. Signaler la taille de l'échantillon protège votre crédibilité."
      },
      {
        "question": "Les inscriptions à une formation augmentent en même temps que la saison des pluies. Que pouvez-vous écrire honnêtement ?",
        "options": [
          {
            "key": "A",
            "text": "« La pluie cause directement la hausse des inscriptions. »"
          },
          {
            "key": "B",
            "text": "« On observe un lien entre la saison et les inscriptions, dont la cause reste à confirmer. »"
          },
          {
            "key": "C",
            "text": "« Pour augmenter les inscriptions, il faut attendre qu'il pleuve. »"
          },
          {
            "key": "D",
            "text": "« Les deux chiffres montent, donc l'un explique forcément l'autre. »"
          }
        ],
        "answer": "B",
        "explanation": "Deux choses peuvent varier ensemble sans que l'une cause l'autre : c'est la différence entre corrélation et causalité. La hausse peut venir d'une troisième cause, comme la fin des travaux des champs qui libère du temps. Signaler un lien sans affirmer la cause est honnête et évite une mauvaise décision."
      }
    ],
    "reflection": "Pensez à un résultat d'analyse que vous devez bientôt présenter à un responsable ou à un bailleur. En une phrase de type BLUF, quel est votre message clé, et à quelle décision concrète voulez-vous qu'il mène ? Notez aussi une limite honnête de vos données que vous devrez signaler.",
    "glossary": [
      {
        "term": "Insight",
        "definition": "Enseignement utile tiré des données : non pas le chiffre brut, mais ce qu'il révèle et qui aide à décider. Par exemple, « les coopératives de l'Est remboursent moins » est un insight, pas une simple statistique."
      },
      {
        "term": "Data storytelling (narration de données)",
        "definition": "Art de raconter ce que disent les données de façon claire et orientée décision, en reliant les chiffres à un message et à une action plutôt qu'en alignant des tableaux bruts."
      },
      {
        "term": "Message clé",
        "definition": "La conclusion principale que votre public doit retenir, formulée en une seule phrase. Selon le principe BLUF, on l'annonce en premier, puis on l'appuie avec les preuves."
      },
      {
        "term": "Recommandation",
        "definition": "Action concrète proposée à partir de l'analyse, qui répond à la question « et donc, on fait quoi ? ». Une bonne recommandation précise qui fait quoi et avant quand."
      },
      {
        "term": "Audience",
        "definition": "La personne ou le groupe à qui vous vous adressez. Adapter le niveau de détail à l'audience est essentiel : un technicien veut la méthode, un décideur veut la décision et le risque."
      },
      {
        "term": "Synthèse (executive summary)",
        "definition": "Résumé court placé en tête d'un rapport, qui donne l'essentiel — message clé, principaux chiffres, recommandation — pour le lecteur pressé, le détail restant disponible plus loin ou en annexe."
      }
    ]
  },
  "en": {
    "id": "d5",
    "lessonNumber": 5,
    "title": "Tell the data story — turning a result into a decision",
    "objective": "By the end of this lesson, you will be able to turn a numerical result into a clear, honest, decision-oriented message tailored to your audience. You will know how to state your conclusion first (BLUF), connect each figure to a concrete choice, adjust the level of detail depending on whether you are speaking to a technician or a decision-maker, and honestly flag the limits of your data.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "From the figure to the decision",
        "body": "An analysis that leads to no decision is useless. You can spend hours cleaning a table, calculating averages, and building charts: if no one changes anything after listening to you, your work served no purpose. The figure is never the goal. The goal is the choice it makes possible.\n\nGet into the habit of starting from the end. Before presenting a result, ask yourself: \"so, what do we do now?\". If you find that the student dropout rate is higher in three villages, the real question is not \"how many dropouts?\" but \"should we strengthen follow-up in these three villages?\". A field finding presented to a busy director must always lead to a possible action, otherwise it will be forgotten as soon as the meeting ends.\n\nIn practice, for every important result, write the decision it calls for next to it. \"40% of beneficiaries did not receive the second payment\" is not a conclusion; \"we must release the second payment before the end of the month, otherwise 40% of families drop out\" is one. You will see that this discipline transforms the way you analyze: you seek less to measure everything, and more to measure what informs a choice."
      },
      {
        "title": "The key message first (BLUF)",
        "body": "The decision-maker is busy. A director, a coordinator, a donor read dozens of notes every week. If your conclusion arrives on page 4, it will never be read. The rule is called BLUF — \"bottom line up front\", that is, the essential first. You state your conclusion in the very first sentence, then you support it with your figures and your method.\n\nThis is the opposite of the school habit, where the conclusion is kept for the end. Here, you begin with: \"I recommend extending the distribution by one month, because without it a quarter of the targeted households will not be covered.\" Only then come the detail, the chart, the method. The busy reader already has the essentials; the curious reader can continue.\n\nAnother powerful rule: one single idea per slide, one single idea per paragraph. If you pile three messages onto the same slide, the audience will retain none of them. Break it up. One message = one support = one piece of evidence. Imagine telling important news to a neighbor in the street: you have only ten seconds, you give the heart of the matter first, and you add details only if they ask a question."
      },
      {
        "title": "Adapting to the audience",
        "body": "The same result is not told the same way to a technician and to a decision-maker. A colleague in charge of monitoring and evaluation wants to know your method: the sample size, the period, how you calculated the rate. They need these details to trust the figure. A busy director, on the other hand, wants the decision and the risk: what happens if we act, what happens if we do not?\n\nBefore preparing your presentation, always ask yourself: who is listening to me, and what decision must this person make? For a donor you want to convince, highlight the results achieved and the return on investment. For a coordination team you must alert, highlight the danger and the urgency. For a technical team, give the full method. The figure stays the same; the packaging changes.\n\nChoosing the right level of detail means respecting your audience's time. Too much detail drowns the decision-maker; too little detail frustrates the technician and prevents them from trusting you. A good practice is to prepare a short one-page message for the decision-maker, with a technical appendix available for those who want to dig deeper. That way, everyone finds the level they need without anyone getting lost."
      },
      {
        "title": "Honesty and limits",
        "body": "Telling a data story is not the same as selling it. Your credibility rests on your honesty. If you over-interpret your data once and someone notices, they will doubt all your subsequent reports. A cautious, solid message is better than a spectacular, fragile one.\n\nThe first rule of honesty concerns sample size. If you interviewed 12 people, you cannot write \"75% of the population thinks that…\". You write \"9 of the 12 people interviewed indicated that…\". A small sample gives a lead, not a proof. Always flag uncertainties: too short a period, missing data, a particular season that may distort the results.\n\nThe second rule is to distinguish correlation from causation. Two things can vary together without one causing the other. If enrollment in the training rises at the same time as the rains arrive, that does not mean the rain pushes people to enroll — it may be the end of fieldwork that frees up time. Saying \"we observe a link, the cause of which remains to be confirmed\" is honest and professional. Saying \"the rain increases enrollment\" without evidence is a mistake that can lead to a bad decision."
      }
    ],
    "example": {
      "title": "Fatou and the one-page note that unblocks a meeting",
      "challenge": "Fatou is a monitoring and evaluation analyst in an NGO supporting agricultural cooperatives in Burkina Faso. She has produced a 30-column table on microcredit repayments, cross-referencing region, gender, and crop type. At the coordination meeting, she projects the raw table: the figures are correct but unreadable. The director, in a hurry, cannot see what he is supposed to decide and postpones the item \"for lack of time\". The analysis, though solid, serves no purpose.",
      "solution": "For the next meeting, Fatou applies the principle \"key message + 1 chart + 1 recommendation\". She reduces everything to a one-page note. First sentence, in bold: \"I recommend postponing the repayment deadline for the Eastern region by two months.\" Below it, a single simple bar chart: the repayment rate by region, where the East clearly stands out below the others. Then a quantified and honest recommendation: \"Of the 48 cooperatives surveyed in the East, 31 are behind because of the poor harvest; without a postponement, the risk of default affects roughly two thirds of them.\" She prepares the detailed table as an appendix, for anyone who wants to consult it.",
      "impact": "The decision is made in the meeting in under ten minutes, compared with two previously postponed meetings. The deadline extension is granted for the 48 cooperatives concerned. By presenting her data this way over the following three quarters, Fatou sees her recommendations adopted in the large majority of cases, compared with a minority when she projected raw tables. The main gain is not only time saved in meetings: it is that the analysis finally leads to concrete decisions."
    },
    "practice": {
      "title": "Turning a result into three decision-driving sentences",
      "instructions": [
        "Choose a real analysis result from your work (a rate, a number, a comparison) — for example \"the attendance rate at trainings is 58%\" — and write it at the top of a sheet or in a note on your phone.",
        "Write three short sentences, in this order: 1) the key message (the conclusion and the decision, in one sentence, BLUF style); 2) the supporting evidence in figures; 3) the concrete recommendation (who does what, and by when).",
        "Re-read your three sentences and check for honesty: does your sample size justify your conclusion? Have you confused a link with a cause? Add a limit if needed, for example \"based on only 12 interviews\"."
      ],
      "observation": "You will notice that once you are forced to fit into three sentences, you keep the essentials and drop the details that inform no decision. This is exactly what a busy decision-maker experiences. If your three sentences stand on their own, your analysis is ready to be told; if the third sentence does not clearly follow from the first two, your conclusion is not yet solid."
    },
    "quiz": [
      {
        "question": "According to the BLUF principle, where do you place your conclusion in a note intended for a busy decision-maker?",
        "options": [
          {
            "key": "A",
            "text": "At the end, after detailing the whole method and the calculations"
          },
          {
            "key": "B",
            "text": "At the very beginning, in the first sentence, before the detail and the evidence"
          },
          {
            "key": "C",
            "text": "In the middle, between the context and the recommendations"
          },
          {
            "key": "D",
            "text": "Nowhere: you let the reader draw the conclusion themselves"
          }
        ],
        "answer": "B",
        "explanation": "BLUF means \"bottom line up front\": the essential first. The decision-maker is busy and reads a lot. By stating your conclusion in the first sentence, you ensure it is read, then you support it with your figures and method for anyone who wants to dig deeper."
      },
      {
        "question": "You present the same dropout rate to a monitoring-and-evaluation colleague and to a busy director. How do you adapt your message?",
        "options": [
          {
            "key": "A",
            "text": "You say exactly the same thing to both, because the figure does not change"
          },
          {
            "key": "B",
            "text": "You give the full method to the director and only the decision to the technician"
          },
          {
            "key": "C",
            "text": "You give the method and the sample to the technician, and the decision and the risk to the director"
          },
          {
            "key": "D",
            "text": "You simplify for both by removing all the figures"
          }
        ],
        "answer": "C",
        "explanation": "The figure stays the same, but the packaging changes with the audience. The technician needs the method and the sample size to trust the result; the decision-maker wants to know which decision to take and what risk they run by acting or not."
      },
      {
        "question": "Which statement is a true decision-oriented recommendation?",
        "options": [
          {
            "key": "A",
            "text": "\"40% of beneficiaries did not receive the second payment.\""
          },
          {
            "key": "B",
            "text": "\"The table shows large gaps between regions.\""
          },
          {
            "key": "C",
            "text": "\"The data were collected between January and March.\""
          },
          {
            "key": "D",
            "text": "\"We must release the second payment before the end of the month, otherwise 40% of families drop out.\""
          }
        ],
        "answer": "D",
        "explanation": "A recommendation links a figure to a concrete action, with an implicit owner and a deadline. The other statements are findings: they describe a situation without saying what to do. An analysis that leads to no decision is useless."
      },
      {
        "question": "You interviewed 12 people and 9 share the same view. Which wording is the most honest?",
        "options": [
          {
            "key": "A",
            "text": "\"75% of the population thinks that…\""
          },
          {
            "key": "B",
            "text": "\"9 of the 12 people interviewed indicated that…\""
          },
          {
            "key": "C",
            "text": "\"The vast majority of residents believe that…\""
          },
          {
            "key": "D",
            "text": "\"It is proven that the population thinks that…\""
          }
        ],
        "answer": "B",
        "explanation": "A small sample gives a lead, not a generalizable proof. Stating \"9 out of 12\" is accurate and cautious; turning this result into \"75% of the population\" suggests a representativeness that 12 interviews cannot support. Flagging the sample size protects your credibility."
      },
      {
        "question": "Enrollment in a training rises at the same time as the rainy season. What can you honestly write?",
        "options": [
          {
            "key": "A",
            "text": "\"The rain directly causes the rise in enrollment.\""
          },
          {
            "key": "B",
            "text": "\"We observe a link between the season and enrollment, the cause of which remains to be confirmed.\""
          },
          {
            "key": "C",
            "text": "\"To increase enrollment, we must wait for it to rain.\""
          },
          {
            "key": "D",
            "text": "\"Both figures rise, so one necessarily explains the other.\""
          }
        ],
        "answer": "B",
        "explanation": "Two things can vary together without one causing the other: this is the difference between correlation and causation. The rise may come from a third cause, such as the end of fieldwork freeing up time. Flagging a link without asserting the cause is honest and avoids a bad decision."
      }
    ],
    "reflection": "Think of an analysis result you must soon present to a manager or a donor. In one BLUF-style sentence, what is your key message, and what concrete decision do you want it to lead to? Also note one honest limit of your data that you will need to flag.",
    "glossary": [
      {
        "term": "Insight",
        "definition": "A useful lesson drawn from the data: not the raw figure, but what it reveals and what helps you decide. For example, \"the Eastern cooperatives repay less\" is an insight, not just a statistic."
      },
      {
        "term": "Data storytelling",
        "definition": "The art of telling what the data say in a clear, decision-oriented way, by linking figures to a message and an action rather than lining up raw tables."
      },
      {
        "term": "Key message",
        "definition": "The main conclusion your audience should remember, expressed in a single sentence. Under the BLUF principle, you state it first, then support it with the evidence."
      },
      {
        "term": "Recommendation",
        "definition": "A concrete action proposed from the analysis, which answers the question \"so, what do we do now?\". A good recommendation specifies who does what and by when."
      },
      {
        "term": "Audience",
        "definition": "The person or group you are addressing. Adapting the level of detail to the audience is essential: a technician wants the method, a decision-maker wants the decision and the risk."
      },
      {
        "term": "Executive summary",
        "definition": "A short summary placed at the head of a report, giving the essentials — key message, main figures, recommendation — for the busy reader, with the detail remaining available later or in an appendix."
      }
    ]
  },
  "ha": {
    "id": "d5",
    "lessonNumber": 5,
    "title": "Ba da labarin bayanai — mayar da sakamako zuwa shawara",
    "objective": "A ƙarshen wannan darasi, za ku iya mayar da sakamako mai lamba zuwa saƙo bayyananne, na gaskiya, kuma da nufin yanke shawara, wanda ya dace da masu sauraronku. Za ku san yadda ake faɗin ƙarshenku da farko (BLUF), haɗa kowace lamba da zaɓi na zahiri, daidaita matakin bayani gwargwadon ko kuna magana da ƙwararren fasaha ko mai yanke shawara, da kuma nuna iyakokin bayananku da gaskiya.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Daga lamba zuwa shawara",
        "body": "Nazarin da bai kai ga wata shawara ba ba shi da amfani. Kuna iya ɓata sa'o'i kuna tsaftace tebur, kuna ƙididdige matsakaita, kuna gina zane-zane: idan babu wanda ya canza wani abu bayan ya saurare ku, aikinku bai yi amfani ba. Lamba ba ita ce manufa ba. Manufa ita ce zaɓin da take ba da damar yi.\n\nKu ɗauki al'adar farawa daga ƙarshe. Kafin ku gabatar da sakamako, ku tambayi kanku: 'to, me za mu yi yanzu?'. Idan kun gano cewa adadin barin makaranta na ɗalibai ya fi yawa a ƙauyuka uku, tambaya ta gaskiya ba 'barin makaranta nawa?' ba ce amma 'shin ya kamata mu ƙarfafa bibiya a waɗannan ƙauyuka uku?'. Binciken filin aiki da aka gabatar ga darakta mai gaggawa dole ne koyaushe ya kai ga aiki mai yiwuwa, in ba haka ba za a manta da shi da zaran taron ya ƙare.\n\nA aikace, ga kowane muhimmin sakamako, ku rubuta a gefensa shawarar da yake buƙata. 'Kashi 40 bisa dari na masu amfana ba su karɓi biyan kuɗi na biyu ba' ba ƙarshe ba ne; 'dole ne mu fitar da biyan kuɗi na biyu kafin ƙarshen wata, in ba haka ba kashi 40 bisa dari na iyalai za su yi ja da baya' ƙarshe ne. Za ku ga cewa wannan horo yana canza yadda kuke nazari: kuna ƙoƙarin auna komai kaɗan, kuma auna abin da ke haskaka zaɓi sosai."
      },
      {
        "title": "Muhimmin saƙo da farko (BLUF)",
        "body": "Mai yanke shawara yana cikin gaggawa. Darakta, mai daidaitawa, mai ba da taimako suna karanta dozin-dozin na bayanai a kowace mako. Idan ƙarshenku ya iso a shafi na 4, ba za a taɓa karanta shi ba. Dokar ana kiranta BLUF — 'bottom line up front', wato muhimmin abu da farko. Kuna faɗin ƙarshenku tun a jumla ta farko, sannan ku goyi bayansa da lambobinku da hanyarku.\n\nWannan kishiyar al'adar makaranta ce, inda ake ajiye ƙarshe har ƙarshe. A nan, kuna farawa da: 'Ina ba da shawarar tsawaita rarrabawa da wata ɗaya, domin ba tare da shi ba kashi ɗaya cikin huɗu na gidajen da aka yi niyya ba za a rufe su ba.' Sai bayan haka ne cikakkun bayanai, zane, da hanya suka zo. Mai karatu mai gaggawa ya riga ya samu muhimman abubuwa; mai karatu mai sha'awa zai iya ci gaba.\n\nWata doka mai ƙarfi: ra'ayi ɗaya kawai a kowane shafi, ra'ayi ɗaya kawai a kowane sakin layi. Idan kun tara saƙonni uku a shafi ɗaya, masu sauraro ba za su riƙe ko ɗaya ba. Ku raba su. Saƙo ɗaya = goyon baya ɗaya = shaida ɗaya. Ku yi tunanin kuna ba da muhimmin labari ga maƙwabci a kan hanya: kuna da daƙiƙa goma kawai, kuna ba da zuciyar lamarin da farko, kuma kuna ƙara cikakkun bayanai kawai idan ya yi tambaya."
      },
      {
        "title": "Daidaitawa da masu sauraro",
        "body": "Ba a ba da labarin sakamako ɗaya hanya guda ga ƙwararren fasaha da mai yanke shawara ba. Abokin aiki da ke kula da bibiya da kimantawa yana son sanin hanyarku: girman samfurin, lokacin, yadda kuka ƙididdige adadin. Yana buƙatar waɗannan cikakkun bayanai don amincewa da lamba. Darakta mai gaggawa kuwa yana son shawara da haɗari: me zai faru idan muka yi aiki, me zai faru idan ba mu yi ba?\n\nKafin ku shirya gabatarwarku, ku tambayi kanku koyaushe: wa ke sauraro na, kuma wace shawara wannan mutum dole ne ya yanke? Ga mai ba da taimako da kuke son shawo kansa, ku nuna sakamakon da aka samu da riba kan saka jari. Ga ƙungiyar daidaitawa da dole ne ku faɗakar da ita, ku nuna haɗari da gaggawa. Ga ƙungiyar fasaha, ku ba da cikakkiyar hanya. Lamba ta kasance ɗaya; nannaɗewar tana canzawa.\n\nZaɓar matakin bayani da ya dace yana nufin girmama lokacin mai sauraronku. Yawan bayani yana nutsar da mai yanke shawara; ƙarancin bayani yana ɓata wa ƙwararren fasaha kuma yana hana shi amincewa da ku. Kyakkyawan al'ada shine shirya gajeren saƙo na shafi ɗaya ga mai yanke shawara, tare da ƙarin fasaha da ke samuwa ga waɗanda ke son tono zurfi. Ta haka, kowa ya samu matakin da yake buƙata ba tare da wani ya ɓace ba."
      },
      {
        "title": "Gaskiya da iyakoki",
        "body": "Ba da labarin bayanai ba daidai yake da sayar da shi ba. Amincin ku ya dogara ne kan gaskiyarku. Idan kun wuce gona da iri wajen fassarar bayananku sau ɗaya kuma wani ya lura, za su yi shakkar dukan rahotanninku masu zuwa. Saƙo mai hankali kuma mai ƙarfi ya fi saƙo mai ban mamaki amma mai rauni.\n\nDokar gaskiya ta farko ta shafi girman samfuri. Idan kun yi hira da mutane 12, ba za ku iya rubuta 'kashi 75 bisa dari na al'umma na tunani cewa…' ba. Kuna rubuta 'mutane 9 daga cikin 12 da aka yi hira da su sun nuna cewa…'. Ƙaramin samfuri yana ba da alama, ba shaida ba. Ku nuna rashin tabbas koyaushe: lokaci mai gajarta sosai, bayanan da suka ɓace, ko wani lokaci na musamman da mai yiwuwa ya gurɓata sakamakon.\n\nDokar ta biyu ita ce a banbanta tsakanin alaƙa da sanadi. Abubuwa biyu na iya canzawa tare ba tare da ɗaya ya jawo ɗayan ba. Idan rajista a horarwa ta ƙaru a daidai lokacin da ruwan sama ya iso, hakan ba ya nufin ruwan sama ya tura mutane su yi rajista ba — mai yiwuwa ƙarshen ayyukan gona ne ke 'yantar da lokaci. Faɗin 'muna ganin alaƙa, wanda sanadinta ya rage a tabbatar' gaskiya ne kuma na ƙwararru. Faɗin 'ruwan sama yana ƙara rajista' ba tare da shaida ba kuskure ne da zai iya kai ga mummunar shawara."
      }
    ],
    "example": {
      "title": "Fatou da takarda ta shafi ɗaya da ta cire cikas a wani taro",
      "challenge": "Fatou ƙwararriya ce ta bibiya da kimantawa a wata ƙungiyar agaji da ke tallafa wa ƙungiyoyin haɗin kai na noma a Burkina Faso. Ta samar da tebur mai ginshiƙai 30 kan biyan ƙananan bashi, tana haɗa yanki, jinsi, da nau'in amfanin gona. A taron daidaitawa, ta nuna tebur ɗin ƙarara: lambobin daidai ne amma ba a iya karantawa. Darakta, cikin gaggawa, bai ga abin da ya kamata ya yanke ba kuma ya jinkirta batun 'saboda ƙarancin lokaci'. Nazarin, ko da yake mai ƙarfi, bai yi amfani ba.",
      "solution": "Don taron na gaba, Fatou ta yi amfani da ƙa'idar 'muhimmin saƙo + zane ɗaya + shawara ɗaya'. Ta rage komai zuwa takarda ta shafi ɗaya. Jumla ta farko, da baƙar rubutu: 'Ina ba da shawarar jinkirta ranar biyan bashi na yankin Gabas da watanni biyu.' A ƙasansa, zane mai sauƙi guda ɗaya na ginshiƙai: adadin biyan bashi a kowane yanki, inda Gabas ta bayyana a fili a ƙasa da sauran. Sannan shawara mai lamba kuma ta gaskiya: 'Daga cikin ƙungiyoyin haɗin kai 48 da aka yi bincike a Gabas, 31 sun yi jinkiri saboda mummunan girbi; ba tare da jinkiri ba, haɗarin kasawa ya shafi kusan kashi biyu cikin uku nasu.' Ta shirya cikakken tebur a matsayin ƙari, ga duk wanda yake son duba shi.",
      "impact": "An yanke shawara a taron a cikin ƙasa da minti goma, idan aka kwatanta da tarurruka biyu da aka jinkirta a baya. An ba da tsawaita ranar biyan ga ƙungiyoyin haɗin kai 48 da abin ya shafa. Ta hanyar gabatar da bayananta haka a kan kwata uku masu zuwa, Fatou ta ga an karɓi shawarwarinta a mafi yawan lokuta, idan aka kwatanta da ƙalilan lokacin da take nuna tebur ɗin ƙarara. Babbar riba ba kawai lokacin da aka samu a tarurruka ba ce: ita ce nazarin a ƙarshe ya kai ga shawarwari na zahiri."
    },
    "practice": {
      "title": "Mayar da sakamako zuwa jumloli uku da ke yanke shawara",
      "instructions": [
        "Ku zaɓi sakamako na nazari na gaskiya daga aikinku (adadi, lamba, ko kwatanci) — misali 'adadin halartar horarwa shi ne kashi 58 bisa dari' — kuma ku rubuta shi a saman takarda ko a wata bayani a wayar hannu.",
        "Ku rubuta jumloli uku gajeru, a wannan tsari: 1) muhimmin saƙo (ƙarshe da shawara, a jumla ɗaya, salon BLUF); 2) shaidar lamba da ke goyon bayansa; 3) shawara ta zahiri (wa zai yi me, kuma kafin yaushe).",
        "Ku sake karanta jumlolinku uku kuma ku duba gaskiya: shin girman samfurinku ya halatta ƙarshenku? Shin kun gauraya alaƙa da sanadi? Ku ƙara ambaton iyaka idan ya cancanta, misali 'bisa hira 12 kawai'."
      ],
      "observation": "Za ku lura cewa da zarar an tilasta ku tsayawa cikin jumloli uku, kuna riƙe muhimman abubuwa kuma kuna barin cikakkun bayanan da ba sa haskaka wata shawara. Wannan daidai shi ne abin da mai yanke shawara mai gaggawa ke fuskanta. Idan jumlolinku uku sun tsaya da kansu, nazarinku ya shirya don a ba da labarinsa; idan jumla ta uku ba ta fito a fili daga na farko biyu ba, to ƙarshenku bai riga ya yi ƙarfi ba."
    },
    "quiz": [
      {
        "question": "Bisa ga ƙa'idar BLUF, a ina kuke sanya ƙarshenku a cikin bayani da aka yi niyya ga mai yanke shawara mai gaggawa?",
        "options": [
          {
            "key": "A",
            "text": "A ƙarshe, bayan an bayyana dukan hanya da ƙididdiga"
          },
          {
            "key": "B",
            "text": "A farkon farko, a jumla ta farko, kafin cikakkun bayanai da shaida"
          },
          {
            "key": "C",
            "text": "A tsakiya, tsakanin mahallin da shawarwari"
          },
          {
            "key": "D",
            "text": "Ko'ina: kuna barin mai karatu ya cire ƙarshe da kansa"
          }
        ],
        "answer": "B",
        "explanation": "BLUF na nufin 'bottom line up front': muhimmin abu da farko. Mai yanke shawara yana cikin gaggawa kuma yana karanta sosai. Ta hanyar faɗin ƙarshenku a jumla ta farko, kuna tabbatar an karanta shi, sannan ku goyi bayansa da lambobinku da hanyarku ga duk wanda yake son tono zurfi."
      },
      {
        "question": "Kuna gabatar da adadin barin makaranta ɗaya ga abokin aiki na bibiya da kimantawa da kuma ga darakta mai gaggawa. Ta yaya kuke daidaita saƙonku?",
        "options": [
          {
            "key": "A",
            "text": "Kuna faɗin abu ɗaya daidai ga su biyu, domin lamba ba ta canzawa"
          },
          {
            "key": "B",
            "text": "Kuna ba da cikakkiyar hanya ga darakta da shawara kawai ga ƙwararren fasaha"
          },
          {
            "key": "C",
            "text": "Kuna ba da hanya da samfuri ga ƙwararren fasaha, da shawara da haɗari ga darakta"
          },
          {
            "key": "D",
            "text": "Kuna sauƙaƙa wa su biyu ta hanyar cire dukan lambobi"
          }
        ],
        "answer": "C",
        "explanation": "Lamba ta kasance ɗaya, amma nannaɗewar tana canzawa gwargwadon masu sauraro. Ƙwararren fasaha yana buƙatar hanya da girman samfuri don amincewa da sakamako; mai yanke shawara yana son sanin wace shawara za a yanke da kuma wane haɗari yake fuskanta idan ya yi aiki ko bai yi ba."
      },
      {
        "question": "Wace magana ce shawara ta gaskiya da nufin yanke shawara?",
        "options": [
          {
            "key": "A",
            "text": "'Kashi 40 bisa dari na masu amfana ba su karɓi biyan kuɗi na biyu ba.'"
          },
          {
            "key": "B",
            "text": "'Tebur yana nuna manyan gibi tsakanin yankuna.'"
          },
          {
            "key": "C",
            "text": "'An tattara bayanan tsakanin Janairu da Maris.'"
          },
          {
            "key": "D",
            "text": "'Dole ne mu fitar da biyan kuɗi na biyu kafin ƙarshen wata, in ba haka ba kashi 40 bisa dari na iyalai za su yi ja da baya.'"
          }
        ],
        "answer": "D",
        "explanation": "Shawara tana haɗa lamba da aiki na zahiri, tare da mai alhaki a fakaice da ranar ƙarshe. Sauran maganganun bincike ne: suna kwatanta yanayi ba tare da faɗin abin da za a yi ba. Nazarin da bai kai ga wata shawara ba ba shi da amfani."
      },
      {
        "question": "Kun yi hira da mutane 12 kuma 9 suna da ra'ayi ɗaya. Wace kalma ce ta fi gaskiya?",
        "options": [
          {
            "key": "A",
            "text": "'Kashi 75 bisa dari na al'umma na tunani cewa…'"
          },
          {
            "key": "B",
            "text": "'Mutane 9 daga cikin 12 da aka yi hira da su sun nuna cewa…'"
          },
          {
            "key": "C",
            "text": "'Mafi yawan mazauna sun yi imani cewa…'"
          },
          {
            "key": "D",
            "text": "'An tabbatar cewa al'umma na tunani cewa…'"
          }
        ],
        "answer": "B",
        "explanation": "Ƙaramin samfuri yana ba da alama, ba shaida da za a iya gama-gari ba. Faɗin '9 daga cikin 12' daidai ne kuma na hankali; mayar da wannan sakamako zuwa 'kashi 75 bisa dari na al'umma' yana sa a yi tunanin wakilci wanda hira 12 ba za su iya tabbatar ba. Nuna girman samfuri yana kare amincinku."
      },
      {
        "question": "Rajista a horarwa ta ƙaru a daidai lokacin da lokacin damina. Me za ku iya rubutawa da gaskiya?",
        "options": [
          {
            "key": "A",
            "text": "'Ruwan sama kai tsaye yana jawo ƙaruwar rajista.'"
          },
          {
            "key": "B",
            "text": "'Muna ganin alaƙa tsakanin lokaci da rajista, wanda sanadinta ya rage a tabbatar.'"
          },
          {
            "key": "C",
            "text": "'Don ƙara rajista, dole ne mu jira har sai ruwan sama ya yi.'"
          },
          {
            "key": "D",
            "text": "'Lambobin biyu na hawa, don haka tilas ɗaya ya bayyana ɗayan.'"
          }
        ],
        "answer": "B",
        "explanation": "Abubuwa biyu na iya canzawa tare ba tare da ɗaya ya jawo ɗayan ba: wannan shi ne bambanci tsakanin alaƙa da sanadi. Ƙaruwar na iya zuwa daga sanadi na uku, kamar ƙarshen ayyukan gona da ke 'yantar da lokaci. Nuna alaƙa ba tare da tabbatar da sanadi ba gaskiya ne kuma yana kauce wa mummunar shawara."
      }
    ],
    "reflection": "Ku yi tunani kan sakamako na nazari da dole ne ku gabatar ba da daɗewa ba ga shugaba ko mai ba da taimako. A jumla ɗaya salon BLUF, menene muhimmin saƙonku, kuma wace shawara ta zahiri kuke son ya kai ga? Ku kuma rubuta iyaka guda ɗaya ta gaskiya na bayananku da za ku buƙaci nunawa.",
    "glossary": [
      {
        "term": "Insight",
        "definition": "Darasi mai amfani da aka samo daga bayanai: ba lamba ɗanyar ba, amma abin da take bayyanawa kuma da ke taimaka muku yanke shawara. Misali, 'ƙungiyoyin haɗin kai na Gabas suna biya kaɗan' insight ne, ba kawai ƙididdiga ba."
      },
      {
        "term": "Data storytelling (ba da labarin bayanai)",
        "definition": "Fasahar ba da labarin abin da bayanai ke faɗa ta hanya bayyananna kuma da nufin yanke shawara, ta hanyar haɗa lambobi da saƙo da aiki maimakon jera tebur ɗin ƙarara."
      },
      {
        "term": "Muhimmin saƙo",
        "definition": "Babban ƙarshe da masu sauraronku ya kamata su riƙe, da aka bayyana a jumla ɗaya. Bisa ƙa'idar BLUF, kuna faɗinsa da farko, sannan ku goyi bayansa da shaida."
      },
      {
        "term": "Shawara (Recommandation)",
        "definition": "Aiki na zahiri da aka gabatar daga nazari, wanda ke amsa tambayar 'to, me za mu yi yanzu?'. Kyakkyawar shawara tana bayyana wa zai yi me da kuma kafin yaushe."
      },
      {
        "term": "Masu sauraro (Audience)",
        "definition": "Mutum ko ƙungiyar da kuke magana da su. Daidaita matakin bayani da masu sauraro yana da mahimmanci: ƙwararren fasaha yana son hanya, mai yanke shawara yana son shawara da haɗari."
      },
      {
        "term": "Taƙaitawa (Executive summary)",
        "definition": "Gajeren taƙaitawa da aka sanya a saman rahoto, wanda ke ba da muhimman abubuwa — muhimmin saƙo, manyan lambobi, shawara — ga mai karatu mai gaggawa, yayin da cikakken bayani ya kasance a samuwa daga baya ko a matsayin ƙari."
      }
    ]
  }
};
