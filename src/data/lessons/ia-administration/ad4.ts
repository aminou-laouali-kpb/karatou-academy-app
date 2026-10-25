import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « IA pour l'administration » (ia-administration) — leçon ad4 (Rapport d'activités sur chiffres vérifiés)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 13 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const adLesson4: Record<Language, LessonContent> = {
  "fr": {
    "id": "ad4",
    "lessonNumber": 4,
    "title": "Rédiger un rapport d’activités avec l’IA, à partir de vos chiffres vérifiés",
    "objective": "À la fin de cette leçon, vous saurez construire un rapport d’activités avec l’IA, sur vos chiffres vérifiés. Vous donnerez à l’IA le plan de votre service, ou le modèle imposé par votre ministère, avec votre tableau d’activités et vos notes, sans aucun nom. Vous exigerez qu’elle montre chaque calcul, puis vous le referez vous-même avant de retirer la mention « [À VÉRIFIER] ». Enfin, vous saurez séparer les faits, l’analyse et les recommandations, et écrire chaque recommandation en qui, quoi, quand.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi « Écris-moi un rapport » produit un rapport plausible, mais faux",
        "body": "Le vendredi approche, le rapport trimestriel est attendu, et la tentation est grande : ouvrir Claude, Gemini ou ChatGPT et taper « Écris-moi un rapport d’activités ». L’outil répondra en quelques secondes, avec un texte bien tourné. Mais sans vos données, il ne peut qu’imaginer : des activités qui n’ont pas eu lieu, des chiffres ronds qui sonnent juste, des difficultés génériques valables pour n’importe quel service. Le résultat est plausible, et faux. C’est comme demander à un voisin de tenir votre cahier de comptes sans lui montrer un seul reçu.\n\nOr un rapport d’activités n’est pas un exercice de style. Il remonte la hiérarchie : le directeur le vise, le transmet, et ses chiffres servent parfois à décider d’un budget ou d’une mission. Un chiffre faux engage tout le service. La règle du cours s’applique ici plus que jamais : l’IA prépare un brouillon, vous vérifiez, la hiérarchie vise, le signataire engage.\n\nLa matière du rapport, c’est donc votre tableau d’activités (ce qui était prévu, ce qui a été réalisé, vos observations) et vos notes sur les difficultés. Rien d’autre. Avant de coller quoi que ce soit, passez-le au filtre de confidentialité : des activités et des totaux, oui ; la liste nominative des bénéficiaires, les évaluations individuelles des agents ou les numéros de téléphone des partenaires, jamais dans un outil grand public. Les textes de la fonction publique de votre pays imposent la discrétion professionnelle, et un total comme « 240 ménages visités » dit tout ce que le rapport a besoin de dire, sans exposer personne."
      },
      {
        "title": "Le plan d’abord : donner à l’IA le plan de votre service avec vos données",
        "body": "Un rapport se construit comme une maison : on pose la charpente avant les murs. Le plan courant d’un rapport d’activités tient en cinq parties : le contexte (la période, les missions du service), les activités réalisées, les résultats, les difficultés rencontrées et les recommandations. Ce plan donne au lecteur un chemin connu : un directeur qui reçoit les rapports de dix services sait tout de suite où trouver ce qu’il cherche.\n\nMais si votre ministère, votre direction ou un partenaire impose un modèle, c’est lui qui prime, toujours. Une direction préfectorale de la santé au Togo, un projet d’hydraulique villageoise au Burkina Faso ou un service communal au Maroc ont souvent leur propre canevas, avec ses rubriques et leur ordre. Ne laissez pas l’IA inventer une structure : copiez ce plan, rubrique par rubrique, et donnez-le-lui.\n\nConcrètement, avec la méthode RCTF, le plan va dans le bloc Format de votre consigne, et vos données dans le bloc Contexte. L’IA n’a plus à deviner ni le fond ni la forme : elle range vos faits dans vos cases. Vous y gagnez aussi un contrôle simple à la relecture : chaque rubrique du modèle est-elle remplie, et seulement avec ce que contenaient vos données ?"
      },
      {
        "title": "Vos chiffres, recalculés : faire montrer chaque calcul et marquer « [À VÉRIFIER] »",
        "body": "L’IA est un bon rédacteur, mais un comptable peu fiable. Elle peut se tromper dans une division, arrondir sans le dire ou additionner une ligne de trop, et elle l’écrira avec la même assurance qu’un résultat juste. Sur un cas simple, elle calcule souvent bien ; le geste de vérification compte quand même, parce que vous ne savez jamais à l’avance quel chiffre sera faux. Le taux de réalisation, par exemple, se calcule ainsi : activités réalisées divisées par activités prévues, multiplié par cent. Dix-sept sur vingt donnent 85 %, pas 90 %.\n\nDeux garde-fous dans la consigne rendent la vérification facile. Dans le bloc Tâche : « N’invente aucun chiffre. Montre chaque calcul. » Vous voyez alors d’où vient chaque résultat, comme un élève qui pose son opération au tableau. Dans le bloc Format : « Marque chaque chiffre [À VÉRIFIER]. » La mention reste visible tant que vous n’avez pas contrôlé ; vous la retirez une fois le calcul refait sur la calculatrice de votre téléphone ou dans votre tableur. Voici la consigne complète : « Rôle : tu aides un chef de service d’une administration publique à rédiger le rapport d’activités du [trimestre] de son service. Contexte : voici le tableau des activités (prévu, réalisé) et mes notes sur les difficultés. Les données sont anonymisées. Tableau et notes : [collez vos données, sans aucun nom]. Tâche : rédige les sections du rapport. N’invente aucun chiffre. Montre chaque calcul. Sépare les faits de l’analyse. Pour chaque recommandation, précise qui, quoi, quand. Format : suis ce plan : [collez le plan ou le modèle imposé]. Marque chaque chiffre [À VÉRIFIER]. »\n\nGardez ensuite votre feuille de calcul et joignez-la en annexe du rapport : le directeur, ou un contrôleur, peut refaire chaque calcul. Un service de planification au Mali ou une direction régionale en Guinée qui procède ainsi change la nature de ses chiffres : ce ne sont plus des affirmations, ce sont des résultats que chacun peut vérifier. Un seul chiffre faux suffit à faire douter de tout le reste du rapport."
      },
      {
        "title": "Faits, analyse, recommandations : séparer ce qui est constaté, interprété et décidé",
        "body": "Un bon rapport sépare trois choses que l’on mélange souvent. Un fait se constate : « 17 activités réalisées sur 20 prévues. » Une analyse s’argumente : « Les trois activités non réalisées étaient prévues en zone rurale pendant la saison des pluies, quand plusieurs pistes étaient impraticables. » Une recommandation dit qui fait quoi, et quand. Séparer ces trois niveaux permet au lecteur de distinguer ce qui est constaté de ce qui est interprété : il peut discuter votre analyse sans douter de vos faits.\n\nLes recommandations sont le point faible de la plupart des brouillons. L’IA aime les formules creuses : « renforcer le suivi », « améliorer la coordination », « faire mieux ». Aucune ne dit qui agit ni quand. Réécrivez-les : « Le chef de service organisera une visite de suivi par mois dans chaque commune, dès juillet. » La différence est celle qui sépare « il faudra réparer le toit » de « le maçon passe samedi ».\n\nEnfin, le rapport parle en totaux, jamais en listes de noms. Un service de l’agriculture au Kenya ou une direction des affaires sociales en RDC rendent compte du nombre de producteurs formés ou de familles appuyées, pas de leur identité. Une fois les sections relues, collez-les dans le modèle officiel de votre service, joignez la feuille de calcul en annexe et suivez le circuit habituel : votre relecture, le visa du directeur, puis la transmission."
      }
    ],
    "example": {
      "title": "Le rapport trimestriel de Souleymane, à Bouaké : vingt activités prévues, dix-sept réalisées",
      "challenge": "Souleymane est chef de service dans une direction régionale fictive de Bouaké, en Côte d’Ivoire. Depuis la Leçon 3, il sait vérifier une synthèse article par article. Vendredi, il doit rendre le rapport d’activités trimestriel de son service. Il dispose d’un tableau d’activités (exemple fictif : vingt activités prévues, dix-sept réalisées) et de notes sur les difficultés. Il est tenté de demander simplement « Écris-moi un rapport ». Mais ce rapport remontera la hiérarchie : un seul chiffre faux engagerait tout le service.",
      "solution": "Il ouvre Gemini et remplit les quatre blocs de la consigne RCTF : le Rôle précise le deuxième trimestre ; le Contexte reçoit son tableau, sans aucun nom, et ses notes ; la Tâche interdit d’inventer un chiffre et exige chaque calcul ; le Format reprend le plan du service et marque chaque chiffre « [À VÉRIFIER] ». Le brouillon suit le plan et affiche le taux de réalisation avec son calcul : dix-sept divisé par vingt. Souleymane refait l’opération sur la calculatrice de son téléphone : 85 %. Le chiffre est juste ; il retire la mention. Il repère une recommandation vague, « renforcer le suivi », et la réécrit : « Le chef de service organisera une visite de suivi par mois dans chaque commune, à partir de juillet. » Enfin, il colle les sections dans le modèle de rapport du service, joint sa feuille de calcul en annexe et soumet le tout au directeur.",
      "impact": "Vendredi, le rapport part à l’heure. Chaque chiffre a été recalculé, chaque recommandation dit qui fait quoi et quand, et aucun nom n’est sorti du service. Le directeur le vise et le transmet ; s’il veut contrôler un résultat, le calcul l’attend en annexe."
    },
    "practice": {
      "title": "Rédigez une page de rapport vérifiée",
      "instructions": [
        "Préparez votre tableau d’activités (prévu, réalisé), sans aucun nom de personne, ainsi que vos notes sur les difficultés et le plan ou le modèle de rapport imposé par votre service. Si vous n’avez pas de données réelles utilisables, inventez un petit tableau fictif de cinq à dix activités.",
        "Ouvrez Claude, Gemini ou ChatGPT et remplissez les quatre blocs de cette consigne avec votre tableau, vos notes et votre plan : « Rôle : tu aides un chef de service d’une administration publique à rédiger le rapport d’activités du [trimestre] de son service. Contexte : voici le tableau des activités (prévu, réalisé) et mes notes sur les difficultés. Les données sont anonymisées. Tableau et notes : [collez vos données, sans aucun nom]. Tâche : rédige les sections du rapport. N’invente aucun chiffre. Montre chaque calcul. Sépare les faits de l’analyse. Pour chaque recommandation, précise qui, quoi, quand. Format : suis ce plan : [collez le plan ou le modèle imposé]. Marque chaque chiffre [À VÉRIFIER]. »",
        "Recalculez chaque chiffre vous-même (calculatrice ou tableur) et retirez chaque « [À VÉRIFIER] » seulement après contrôle. Réécrivez ensuite les recommandations en qui, quoi, quand, puis collez la page dans le modèle de votre service, avec votre feuille de calcul en annexe."
      ],
      "observation": "Vous constatez que le brouillon suit votre plan et n’utilise que vos données, et que chaque chiffre porte son calcul, que vous avez refait vous-même. Vous voyez la différence entre un fait, une analyse et une recommandation : vos recommandations disent désormais qui fait quoi et quand. Si l’IA a arrondi ou inventé un chiffre, la mention « [À VÉRIFIER] » vous a permis de le repérer avant qu’il ne parte chez le directeur."
    },
    "quiz": [
      {
        "question": "Par quoi commencer un rapport d’activités avec l’IA ?",
        "options": [
          { "key": "A", "text": "Par la conclusion" },
          { "key": "B", "text": "Par le plan, ou le modèle imposé par votre ministère" },
          { "key": "C", "text": "Par la mise en page" },
          { "key": "D", "text": "Par les annexes" }
        ],
        "answer": "B",
        "explanation": "Le plan est la charpente du rapport : contexte, activités réalisées, résultats, difficultés, recommandations. Si votre ministère impose un modèle, c’est lui qui prime. Vous le donnez à l’IA avec vos données, dans le bloc Format de la consigne RCTF ; la mise en page et les annexes viennent après."
      },
      {
        "question": "L’IA donne un taux de réalisation de 90 % ; votre tableau indique 17 activités réalisées sur 20. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous gardez 90 %" },
          { "key": "B", "text": "Vous arrondissez à 100 %" },
          { "key": "C", "text": "Vous recalculez : 85 %, et vous corrigez" },
          { "key": "D", "text": "Vous supprimez le taux" }
        ],
        "answer": "C",
        "explanation": "Le taux de réalisation se calcule ainsi : activités réalisées divisées par activités prévues, multiplié par cent. 17 ÷ 20 × 100 = 85 %. L’IA peut se tromper ou arrondir sans le dire : vous refaites le calcul, vous corrigez, et vous ne retirez la mention « [À VÉRIFIER] » qu’après ce contrôle."
      },
      {
        "question": "Quelle phrase est une recommandation utilisable ?",
        "options": [
          { "key": "A", "text": "« Il faudrait faire mieux. »" },
          { "key": "B", "text": "« La situation est préoccupante. »" },
          { "key": "C", "text": "« Le service fera de son mieux. »" },
          { "key": "D", "text": "« Le chef de service organisera une visite de suivi par mois dans chaque commune, dès juillet. »" }
        ],
        "answer": "D",
        "explanation": "Une recommandation utilisable dit qui fait quoi, et quand : ici, le chef de service (qui), une visite de suivi par mois dans chaque commune (quoi), dès juillet (quand). Les trois autres phrases sont des vœux ou des constats : personne ne peut les mettre en œuvre ni vérifier qu’elles ont été suivies."
      },
      {
        "question": "Que pouvez-vous coller dans l’outil pour préparer votre rapport ?",
        "options": [
          { "key": "A", "text": "Des totaux et des notes sans aucun nom" },
          { "key": "B", "text": "La liste nominative des bénéficiaires" },
          { "key": "C", "text": "Les évaluations individuelles des agents" },
          { "key": "D", "text": "Les numéros de téléphone des partenaires" }
        ],
        "answer": "A",
        "explanation": "Le filtre de confidentialité laisse passer les activités, les totaux et les notes anonymisées. Les listes nominatives, les évaluations individuelles et les numéros de téléphone sont des données personnelles : elles n’entrent jamais dans un outil grand public, conformément aux textes de la fonction publique de votre pays."
      },
      {
        "question": "Pourquoi séparer les faits de l’analyse ?",
        "options": [
          { "key": "A", "text": "Pour allonger le rapport" },
          { "key": "B", "text": "Pour que le lecteur distingue ce qui est constaté de ce qui est interprété" },
          { "key": "C", "text": "Parce que l’IA l’exige" },
          { "key": "D", "text": "Pour cacher les difficultés" }
        ],
        "answer": "B",
        "explanation": "Un fait se constate (« 17 activités réalisées sur 20 ») ; une analyse s’argumente (« trois activités ont été bloquées par la saison des pluies »). En les séparant, le lecteur sait ce qui est établi et ce qui relève de votre interprétation : il peut discuter l’analyse sans remettre en cause les faits."
      }
    ],
    "reflection": "Dans le dernier rapport que vous avez rédigé ou reçu, quel chiffre auriez-vous dû recalculer avant de le transmettre, et quelle recommandation auriez-vous pu réécrire en qui, quoi, quand ?",
    "glossary": [
      {
        "term": "Rapport d’activités",
        "definition": "Document qui rend compte, pour une période donnée (un trimestre, une année), de ce qu’un service a prévu, réalisé et obtenu, avec ses difficultés et ses recommandations. Il remonte la hiérarchie et engage le service."
      },
      {
        "term": "Taux de réalisation",
        "definition": "Part des activités prévues qui ont été réalisées : activités réalisées divisées par activités prévues, multiplié par cent. Exemple fictif : 17 sur 20 donnent 85 %."
      },
      {
        "term": "Modèle imposé",
        "definition": "Plan ou canevas de rapport fixé par le ministère, la direction ou un partenaire. Quand il existe, il prime sur tout autre plan : on le donne tel quel à l’IA, dans le bloc Format de la consigne."
      },
      {
        "term": "« [À VÉRIFIER] »",
        "definition": "Mention que l’IA place, à votre demande, à côté de chaque chiffre du brouillon. Elle signale que le chiffre n’a pas encore été contrôlé ; vous la retirez seulement après avoir refait le calcul vous-même."
      },
      {
        "term": "Analyse",
        "definition": "Partie du rapport qui interprète les faits et en explique les causes. Un fait se constate ; une analyse s’argumente et peut se discuter."
      },
      {
        "term": "Recommandation",
        "definition": "Proposition d’action pour la période suivante. Une recommandation utilisable dit qui fait quoi, et quand ; « renforcer le suivi » n’en est pas une."
      }
    ]
  },
  "en": {
    "id": "ad4",
    "lessonNumber": 4,
    "title": "Writing an activity report with AI, from your verified figures",
    "objective": "By the end of this lesson, you will know how to build an activity report with AI, based on your verified figures. You will give the AI your department’s outline, or the template required by your ministry, together with your activity table and your notes, without a single name. You will require it to show every calculation, then redo each one yourself before removing the “[TO VERIFY]” tag. Finally, you will know how to separate facts, analysis and recommendations, and how to write each recommendation as who, what, when.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why “Write me a report” produces a report that sounds right, but is wrong",
        "body": "Friday is coming, the quarterly report is due, and the temptation is strong: open Claude, Gemini or ChatGPT and type “Write me an activity report.” The tool will answer in seconds, with a well-turned text. But without your data, all it can do is imagine: activities that never took place, round figures that sound right, generic difficulties that would fit any department. The result is plausible, and wrong. It is like asking a neighbour to keep your account book without showing them a single receipt.\n\nAn activity report is not a writing exercise. It travels up the chain of command: the director initials and approves it, passes it on, and its figures are sometimes used to decide a budget or a mission. One wrong figure commits the whole department. The rule of this course applies here more than ever: the AI prepares a draft, you check it, your superiors approve it, the signatory commits to it.\n\nThe raw material of the report is therefore your activity table (what was planned, what was done, your observations) and your notes on the difficulties. Nothing else. Before pasting anything, run it through the confidentiality filter: activities and totals, yes; the named list of beneficiaries, individual staff appraisals or partners’ phone numbers, never in a public tool. The civil service rules of your country require professional discretion, and a total such as “240 households visited” says everything the report needs to say, without exposing anyone."
      },
      {
        "title": "Outline first: give the AI your department’s outline along with your data",
        "body": "A report is built like a house: you put up the frame before the walls. The usual outline of an activity report has five parts: context (the period, the department’s mandate), activities carried out, results, difficulties encountered and recommendations. This outline gives the reader a familiar path: a director who receives reports from ten departments knows immediately where to find what they are looking for.\n\nBut if your ministry, your directorate or a partner requires a template, that template always comes first. A prefectural health directorate in Togo, a village water project in Burkina Faso or a municipal department in Morocco often has its own format, with its headings and their order. Do not let the AI invent a structure: copy that outline, heading by heading, and give it to the AI.\n\nIn practice, with the RCTF method, the outline goes into the Format block of your prompt, and your data into the Context block. The AI no longer has to guess either the substance or the form: it puts your facts into your boxes. You also gain a simple check when you reread: is every heading of the template filled in, and only with what your data contained?"
      },
      {
        "title": "Your figures, recalculated: have every calculation shown and tag it “[TO VERIFY]”",
        "body": "AI is a good writer but an unreliable accountant. It can get a division wrong, round off without saying so or add one row too many, and it will state it with the same confidence as a correct result. On a simple case it often calculates correctly; the act of checking still matters, because you never know in advance which figure will be wrong. The completion rate, for example, is calculated like this: activities carried out divided by activities planned, multiplied by one hundred. Seventeen out of twenty gives 85%, not 90%.\n\nTwo safeguards in the prompt make checking easy. In the Task block: “Do not invent any figure. Show every calculation.” You then see where each result comes from, like a pupil writing out the sum on the board. In the Format block: “Tag every figure [TO VERIFY].” The tag stays visible until you have checked; you remove it once you have redone the calculation on your phone’s calculator or in your spreadsheet. Here is the full prompt: “Role: you are helping a head of department in a public administration write the activity report for the [quarter] of their department. Context: here is the activity table (planned, done) and my notes on the difficulties. The data is anonymised. Table and notes: [paste your data, without any names]. Task: write the sections of the report. Do not invent any figure. Show every calculation. Separate facts from analysis. For each recommendation, state who, what, when. Format: follow this outline: [paste the outline or the required template]. Tag every figure [TO VERIFY].”\n\nThen keep your calculation sheet and attach it to the report as an annex: the director, or an inspector, can redo every calculation. A planning department in Mali or a regional directorate in Guinea that works this way changes the nature of its figures: they are no longer claims, they are results anyone can check. A single wrong figure is enough to cast doubt on the rest of the report."
      },
      {
        "title": "Facts, analysis, recommendations: separate what is observed, interpreted and decided",
        "body": "A good report separates three things that are often mixed up. A fact is observed: “17 activities carried out out of 20 planned.” An analysis is argued: “The three activities not carried out were planned in rural areas during the rainy season, when several tracks were impassable.” A recommendation says who does what, and when. Separating these three levels lets the reader tell what is observed from what is interpreted: they can debate your analysis without doubting your facts.\n\nRecommendations are the weak point of most drafts. AI likes empty phrases: “strengthen monitoring”, “improve coordination”, “do better”. None of them says who acts or when. Rewrite them: “The head of department will organise one follow-up visit per month in each municipality, starting in July.” The difference is the one between “the roof will need repairing” and “the builder is coming on Saturday”.\n\nFinally, the report speaks in totals, never in lists of names. An agriculture department in Kenya or a social affairs directorate in the DRC reports the number of farmers trained or families supported, not who they are. Once the sections have been reread, paste them into your department’s official template, attach the calculation sheet as an annex and follow the usual circuit: your review, the director’s approval, then transmission."
      }
    ],
    "example": {
      "title": "Souleymane’s quarterly report in Bouaké: twenty activities planned, seventeen carried out",
      "challenge": "Souleymane is head of department in a fictional regional directorate in Bouaké, Côte d’Ivoire. Since Lesson 3, he knows how to check a summary article by article. On Friday, he has to submit his department’s quarterly activity report. He has an activity table (fictional example: twenty activities planned, seventeen carried out) and notes on the difficulties. He is tempted simply to ask “Write me a report.” But this report will travel up the chain of command: a single wrong figure would commit the whole department.",
      "solution": "He opens Gemini and fills in the four blocks of the RCTF prompt: the Role states the second quarter; the Context receives his table, without any names, and his notes; the Task forbids inventing any figure and requires every calculation; the Format follows the department’s outline and tags every figure “[TO VERIFY]”. The draft follows the outline and shows the completion rate with its calculation: seventeen divided by twenty. Souleymane redoes the sum on his phone’s calculator: 85%. The figure is correct; he removes the tag. He spots a vague recommendation, “strengthen monitoring”, and rewrites it: “The head of department will organise one follow-up visit per month in each municipality, starting in July.” Finally, he pastes the sections into the department’s report template, attaches his calculation sheet as an annex and submits everything to the director.",
      "impact": "On Friday, the report goes out on time. Every figure has been recalculated, every recommendation says who does what and when, and no name has left the department. The director initials and approves it and passes it on; if he wants to check a result, the calculation is waiting in the annex."
    },
    "practice": {
      "title": "Write one verified page of a report",
      "instructions": [
        "Prepare your activity table (planned, done), without any person’s name, together with your notes on the difficulties and the outline or report template required by your department. If you have no real data you can use, make up a small fictional table of five to ten activities.",
        "Open Claude, Gemini or ChatGPT and fill in the four blocks of this prompt with your table, your notes and your outline: “Role: you are helping a head of department in a public administration write the activity report for the [quarter] of their department. Context: here is the activity table (planned, done) and my notes on the difficulties. The data is anonymised. Table and notes: [paste your data, without any names]. Task: write the sections of the report. Do not invent any figure. Show every calculation. Separate facts from analysis. For each recommendation, state who, what, when. Format: follow this outline: [paste the outline or the required template]. Tag every figure [TO VERIFY].”",
        "Recalculate every figure yourself (calculator or spreadsheet) and remove each “[TO VERIFY]” only after checking. Then rewrite the recommendations as who, what, when, and paste the page into your department’s template, with your calculation sheet as an annex."
      ],
      "observation": "You notice that the draft follows your outline and uses only your data, and that every figure comes with its calculation, which you have redone yourself. You see the difference between a fact, an analysis and a recommendation: your recommendations now say who does what and when. If the AI rounded off or invented a figure, the “[TO VERIFY]” tag let you catch it before it reached the director."
    },
    "quiz": [
      {
        "question": "What should you start with when writing an activity report with AI?",
        "options": [
          { "key": "A", "text": "The conclusion" },
          { "key": "B", "text": "The outline, or the template required by your ministry" },
          { "key": "C", "text": "The layout" },
          { "key": "D", "text": "The annexes" }
        ],
        "answer": "B",
        "explanation": "The outline is the frame of the report: context, activities carried out, results, difficulties, recommendations. If your ministry requires a template, that template comes first. You give it to the AI with your data, in the Format block of the RCTF prompt; layout and annexes come later."
      },
      {
        "question": "The AI gives a completion rate of 90%; your table shows 17 activities carried out out of 20. What do you do?",
        "options": [
          { "key": "A", "text": "You keep 90%" },
          { "key": "B", "text": "You round up to 100%" },
          { "key": "C", "text": "You recalculate: 85%, and you correct it" },
          { "key": "D", "text": "You delete the rate" }
        ],
        "answer": "C",
        "explanation": "The completion rate is calculated like this: activities carried out divided by activities planned, multiplied by one hundred. 17 ÷ 20 × 100 = 85%. The AI can make mistakes or round off without saying so: you redo the calculation, you correct it, and you remove the “[TO VERIFY]” tag only after that check."
      },
      {
        "question": "Which sentence is a usable recommendation?",
        "options": [
          { "key": "A", "text": "“We should do better.”" },
          { "key": "B", "text": "“The situation is worrying.”" },
          { "key": "C", "text": "“The department will do its best.”" },
          { "key": "D", "text": "“The head of department will organise one follow-up visit per month in each municipality, starting in July.”" }
        ],
        "answer": "D",
        "explanation": "A usable recommendation says who does what, and when: here, the head of department (who), one follow-up visit per month in each municipality (what), starting in July (when). The other three sentences are wishes or observations: nobody can put them into practice or check that they were followed."
      },
      {
        "question": "What can you paste into the tool to prepare your report?",
        "options": [
          { "key": "A", "text": "Totals and notes without any names" },
          { "key": "B", "text": "The named list of beneficiaries" },
          { "key": "C", "text": "Individual staff appraisals" },
          { "key": "D", "text": "Partners’ phone numbers" }
        ],
        "answer": "A",
        "explanation": "The confidentiality filter lets through activities, totals and anonymised notes. Named lists, individual appraisals and phone numbers are personal data: they never go into a public tool, in line with the civil service rules of your country."
      },
      {
        "question": "Why separate facts from analysis?",
        "options": [
          { "key": "A", "text": "To make the report longer" },
          { "key": "B", "text": "So that the reader can tell what is observed from what is interpreted" },
          { "key": "C", "text": "Because the AI requires it" },
          { "key": "D", "text": "To hide the difficulties" }
        ],
        "answer": "B",
        "explanation": "A fact is observed (“17 activities carried out out of 20”); an analysis is argued (“three activities were blocked by the rainy season”). By separating them, the reader knows what is established and what is your interpretation: they can debate the analysis without questioning the facts."
      }
    ],
    "reflection": "In the last report you wrote or received, which figure should you have recalculated before passing it on, and which recommendation could you have rewritten as who, what, when?",
    "glossary": [
      {
        "term": "Activity report",
        "definition": "A document that reports, for a given period (a quarter, a year), on what a department planned, carried out and achieved, with its difficulties and recommendations. It travels up the chain of command and commits the department."
      },
      {
        "term": "Completion rate",
        "definition": "The share of planned activities that were carried out: activities carried out divided by activities planned, multiplied by one hundred. Fictional example: 17 out of 20 gives 85%."
      },
      {
        "term": "Required template",
        "definition": "A report outline or format set by the ministry, the directorate or a partner. When it exists, it takes precedence over any other outline: you give it to the AI as it is, in the Format block of the prompt."
      },
      {
        "term": "“[TO VERIFY]”",
        "definition": "A tag that the AI places, at your request, next to every figure in the draft. It shows that the figure has not yet been checked; you remove it only after redoing the calculation yourself."
      },
      {
        "term": "Analysis",
        "definition": "The part of the report that interprets the facts and explains their causes. A fact is observed; an analysis is argued and can be debated."
      },
      {
        "term": "Recommendation",
        "definition": "A proposed action for the next period. A usable recommendation says who does what, and when; “strengthen monitoring” is not one."
      }
    ]
  },
  "ha": {
    "id": "ad4",
    "lessonNumber": 4,
    "title": "Rubuta rahoton ayyuka da AI, daga kididdigar ku da aka tantance",
    "objective": "A karshen wannan darasi, za ku san yadda ake gina rahoton ayyuka da AI, bisa kididdigar ku da aka tantance. Za ku ba AI tsarin rahoton sashenku, ko samfurin da ma’aikatarku ta wajabta, tare da teburin ayyukanku da bayanan da kuka rubuta, ba tare da ko suna daya ba. Za ku bukaci ta nuna kowane lissafi, sannan ku sake yin sa da kanku kafin ku cire alamar « [A TANTANCE] ». A karshe, za ku san yadda ake raba hujjoji, nazari da shawarwari, kuma ku rubuta kowace shawara a matsayin wa, me, yaushe.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Dalilin da ya sa « Rubuta mini rahoto » ke ba da rahoto mai kama da gaskiya, amma na karya",
        "body": "Ranar Jumma’a na matsowa, ana jiran rahoton watanni uku, kuma jarabawar tana da karfi: ku bude Claude, Gemini ko ChatGPT ku rubuta « Rubuta mini rahoton ayyuka ». Manhajar za ta amsa cikin dakikoki, da rubutu mai kyau. Amma ba tare da bayananku ba, abin da za ta iya yi kawai shi ne kirkira: ayyukan da ba a taba yi ba, lambobi masu zagaye da suke kama da gaskiya, matsalolin gama-gari da za su dace da kowane sashe. Sakamakon yana kama da gaskiya, amma karya ne. Kamar ka roki makwabci ya rike littafin kudinka ba tare da ka nuna masa ko rasit daya ba.\n\nRahoton ayyuka ba wasan rubutu ba ne. Yana hawa wajen shugabanni: darakta yana sa masa hannun amincewa (visa), yana tura shi gaba, kuma wani lokaci ana amfani da lambobinsa don yanke shawara kan kasafin kudi ko wani aiki. Lamba daya ta karya tana daure dukan sashen. Dokar wannan kwas tana aiki a nan fiye da ko’ina: AI tana shirya daftari, ku kuna tantancewa, shugabanni suna amincewa, mai sa hannu yana daukar alhaki.\n\nDon haka kayan rahoton su ne teburin ayyukanku (abin da aka shirya, abin da aka yi, abubuwan da kuka lura) da bayananku kan matsalolin. Ba komai ba sai su. Kafin ku liko komai, ku wuce da shi ta matatar sirri: ayyuka da jimloli, eh; jerin sunayen masu cin gajiya, kimanta aikin kowane ma’aikaci ko lambobin wayar abokan hulda, ba za su taba shiga manhajar jama’a ba. Dokokin aikin gwamnati na kasarku sun wajabta rufin asiri a aiki, kuma jimla kamar « gidaje 240 da aka ziyarta » tana fadin duk abin da rahoton ke bukata, ba tare da fallasa kowa ba."
      },
      {
        "title": "Tsarin rahoto tukuna: ku ba AI tsarin sashenku tare da bayananku",
        "body": "Ana gina rahoto kamar gida: ana kafa kwarangwal kafin bango. Tsarin rahoton ayyuka da aka saba yana da sassa biyar: mahallin (lokacin, ayyukan sashen), ayyukan da aka yi, sakamako, matsalolin da aka fuskanta, da shawarwari. Wannan tsarin yana ba mai karatu hanyar da ya sani: daraktan da ke karbar rahotannin sassa goma yana sanin nan take inda zai sami abin da yake nema.\n\nAmma idan ma’aikatarku, hukumarku ko wani abokin hulda ya wajabta samfuri, shi ne ke gaba, a kowane lokaci. Hukumar lafiya ta wata gunduma a Togo, aikin samar da ruwan kauye a Burkina Faso ko wani sashen karamar hukuma a Maroko sau da yawa suna da nasu samfurin, da kanun labaransa da jerinsu. Kada ku bar AI ta kirkiro wani tsari: ku kwafi wannan tsarin, kanu bayan kanu, ku ba ta.\n\nA aikace, da hanyar RCTF (Rôle · Contexte · Tâche · Format), tsarin yana shiga sashen Tsari (Format) na umurninku, bayananku kuma suna shiga sashen Mahalli (Contexte). AI ba ta bukatar ta yi hasashen abin da za ta rubuta ko yadda za ta tsara shi: tana sanya hujjojinku cikin akwatunanku. Kuna kuma samun hanyar duba mai sauki lokacin sake karantawa: shin kowane kanu na samfurin ya cika, kuma da abin da ke cikin bayananku kawai?"
      },
      {
        "title": "Kididdigar ku, an sake lissafawa: a nuna kowane lissafi a kuma rubuta « [A TANTANCE] »",
        "body": "AI marubuciya ce mai kyau, amma akawu marar tabbas. Tana iya kuskure a raba lamba, ta zagaye lamba ba tare da ta fada ba, ko ta kara layi daya fiye da kima, kuma za ta rubuta hakan da tabbaci iri daya da sakamako na gaskiya. A kan abu mai sauki, sau da yawa tana lissafawa daidai; amma tantancewa na da muhimmanci duk da haka, domin ba za ku taba sanin tun farko wace lamba ce za ta zama kuskure ba. Kason cikar ayyuka (taux de réalisation), alal misali, ana lissafa shi haka: ayyukan da aka yi a raba da ayyukan da aka shirya, a ninka da dari. Goma sha bakwai cikin ashirin suna ba da kashi 85 cikin 100, ba 90 ba.\n\nKariya biyu a cikin umurnin suna saukaka tantancewa. A sashen Aiki (Tâche): « Kada ki kirkiro kowace lamba. Ki nuna kowane lissafi. » Daga nan kuna ganin inda kowane sakamako ya fito, kamar dalibin da ke rubuta lissafinsa a allo. A sashen Tsari (Format): « Ki rubuta [A TANTANCE] a kan kowace lamba. » Alamar tana nan a bayyane har sai kun tantance; kuna cire ta da zarar kun sake lissafin a na’urar lissafin wayarku ko a teburin lissafinku. Ga cikakken umurnin: « Rawa: kina taimaka wa shugaban sashe a wata hukumar gwamnati ya rubuta rahoton ayyukan [watanni uku] na sashensa. Mahalli: ga teburin ayyuka (an shirya, an yi) da bayanaina kan matsaloli. An boye sunayen da ke cikin bayanan. Tebur da bayanai: [ku liko bayananku, ba tare da ko suna daya ba]. Aiki: rubuta sassan rahoton. Kada ki kirkiro kowace lamba. Ki nuna kowane lissafi. Ki raba hujjoji da nazari. Ga kowace shawara, ki fadi wa, me, yaushe. Tsari: bi wannan tsarin: [ku liko tsarin ko samfurin da aka wajabta]. Ki rubuta [A TANTANCE] a kan kowace lamba. »\n\nSannan ku ajiye takardar lissafinku ku hada ta da rahoton a matsayin kari: darakta, ko wani mai bincike, zai iya sake yin kowane lissafi. Sashen tsare-tsare a Mali ko hukumar shiyya a Guinea da ke aiki haka yana canza yanayin lambobinsa: ba ikirari ba ne kuma, sakamako ne da kowa zai iya tantancewa. Lamba daya ta karya ta isa ta sa a yi shakkar sauran rahoton gaba daya."
      },
      {
        "title": "Hujjoji, nazari, shawarwari: raba abin da aka gani, abin da aka fassara da abin da aka yanke",
        "body": "Rahoto mai kyau yana raba abubuwa uku da ake yawan cakudawa. Hujja ana ganin ta: « ayyuka 17 aka yi cikin 20 da aka shirya. » Nazari ana kare shi da dalilai: « ayyuka uku da ba a yi ba an shirya su ne a karkara lokacin damina, lokacin da hanyoyi da dama ba su biyuwa. » Shawara tana fadin wa zai yi me, kuma yaushe. Raba wadannan matakai uku yana ba mai karatu damar bambance abin da aka gani da abin da aka fassara: yana iya muhawara kan nazarinku ba tare da shakkar hujjojinku ba.\n\nShawarwari su ne raunin yawancin daftarori. AI tana son kalmomi marasa ma’ana: « karfafa sa ido », « inganta hadin kai », « a kara kokari ». Babu daya da ke fadin wa zai yi aiki ko yaushe. Ku sake rubuta su: « Shugaban sashe zai shirya ziyarar sa ido daya a kowane wata a kowace karamar hukuma, daga watan Yuli. » Bambancin shi ne tsakanin « za a bukaci gyara rufin gida » da « magini zai zo ranar Asabar ».\n\nA karshe, rahoto yana magana da jimloli, ba da jerin sunaye ba. Sashen noma a Kenya ko hukumar walwalar jama’a a Kwango (RDC) suna bayar da adadin manoman da aka horar ko iyalan da aka tallafa wa, ba ko su wane ne ba. Da zarar an sake karanta sassan, ku liko su a cikin samfurin hukuma na sashenku, ku hada takardar lissafi a matsayin kari, sannan ku bi hanyar da aka saba: duba ku, amincewar darakta, sannan aikawa."
      }
    ],
    "example": {
      "title": "Rahoton watanni uku na Souleymane a Bouaké: ayyuka ashirin aka shirya, goma sha bakwai aka yi",
      "challenge": "Souleymane shugaban sashe ne a wata hukumar shiyya ta kirkira a Bouaké, a Côte d’Ivoire. Tun Darasi 3, ya san yadda ake tantance takaitaccen bayani, sashe bayan sashe na doka. Ranar Jumma’a, dole ne ya mika rahoton ayyuka na watanni uku na sashensa. Yana da teburin ayyuka (misali na kirkira: ayyuka ashirin aka shirya, goma sha bakwai aka yi) da bayanai kan matsaloli. Yana jin sha’awar kawai ya ce « Rubuta mini rahoto ». Amma wannan rahoton zai hau wajen shugabanni: lamba daya ta karya za ta daure dukan sashen.",
      "solution": "Ya bude Gemini ya cika sassa hudu na umurnin RCTF: Rawa (Rôle) ta fadi watanni uku na biyu; Mahalli (Contexte) ya karbi teburinsa, ba tare da ko suna daya ba, da bayanansa; Aiki (Tâche) ya hana kirkiro kowace lamba kuma ya bukaci kowane lissafi; Tsari (Format) ya bi tsarin sashen kuma ya rubuta « [A TANTANCE] » a kan kowace lamba. Daftarin ya bi tsarin kuma ya nuna kason cikar ayyuka da lissafinsa: goma sha bakwai a raba da ashirin. Souleymane ya sake lissafin a na’urar lissafin wayarsa: kashi 85 cikin 100. Lambar daidai ce; ya cire alamar. Ya lura da wata shawara marar fayyacewa, « karfafa sa ido », ya sake rubuta ta: « Shugaban sashe zai shirya ziyarar sa ido daya a kowane wata a kowace karamar hukuma, daga watan Yuli. » A karshe, ya liko sassan a cikin samfurin rahoton sashen, ya hada takardar lissafinsa a matsayin kari, ya mika komai ga darakta.",
      "impact": "Ranar Jumma’a, rahoton ya tafi a kan lokaci. An sake lissafa kowace lamba, kowace shawara tana fadin wa zai yi me da yaushe, kuma babu wani suna da ya fita daga sashen. Darakta ya sa masa hannun amincewa ya tura shi gaba; idan yana son ya tantance wani sakamako, lissafin yana jiransa a cikin kari."
    },
    "practice": {
      "title": "Ku rubuta shafi daya na rahoto da aka tantance",
      "instructions": [
        "Ku shirya teburin ayyukanku (an shirya, an yi), ba tare da sunan kowa ba, tare da bayananku kan matsaloli da tsarin ko samfurin rahoton da sashenku ya wajabta. Idan ba ku da bayanan gaske da za ku iya amfani da su, ku kirkiri karamin tebur na misali mai ayyuka biyar zuwa goma.",
        "Ku bude Claude, Gemini ko ChatGPT ku cika sassa hudu na wannan umurni da teburinku, bayananku da tsarinku: « Rawa: kina taimaka wa shugaban sashe a wata hukumar gwamnati ya rubuta rahoton ayyukan [watanni uku] na sashensa. Mahalli: ga teburin ayyuka (an shirya, an yi) da bayanaina kan matsaloli. An boye sunayen da ke cikin bayanan. Tebur da bayanai: [ku liko bayananku, ba tare da ko suna daya ba]. Aiki: rubuta sassan rahoton. Kada ki kirkiro kowace lamba. Ki nuna kowane lissafi. Ki raba hujjoji da nazari. Ga kowace shawara, ki fadi wa, me, yaushe. Tsari: bi wannan tsarin: [ku liko tsarin ko samfurin da aka wajabta]. Ki rubuta [A TANTANCE] a kan kowace lamba. »",
        "Ku sake lissafa kowace lamba da kanku (na’urar lissafi ko teburin lissafi) kuma ku cire kowane « [A TANTANCE] » sai bayan kun tantance. Sannan ku sake rubuta shawarwarin a matsayin wa, me, yaushe, ku liko shafin a cikin samfurin sashenku, tare da takardar lissafinku a matsayin kari."
      ],
      "observation": "Za ku lura cewa daftarin ya bi tsarinku kuma bayananku kawai ya yi amfani da su, kuma kowace lamba tana tare da lissafinta, wanda kuka sake yi da kanku. Za ku ga bambanci tsakanin hujja, nazari da shawara: shawarwarinku yanzu suna fadin wa zai yi me da yaushe. Idan AI ta zagaye ko ta kirkiro wata lamba, alamar « [A TANTANCE] » ta ba ku damar gano ta kafin ta isa wajen darakta."
    },
    "quiz": [
      {
        "question": "Da me za a fara rubuta rahoton ayyuka da AI?",
        "options": [
          { "key": "A", "text": "Da kammalawa" },
          { "key": "B", "text": "Da tsarin rahoto, ko samfurin da ma’aikatarku ta wajabta" },
          { "key": "C", "text": "Da fasalin shafi" },
          { "key": "D", "text": "Da kari" }
        ],
        "answer": "B",
        "explanation": "Tsarin rahoto shi ne kwarangwal dinsa: mahallin, ayyukan da aka yi, sakamako, matsaloli, shawarwari. Idan ma’aikatarku ta wajabta samfuri, shi ne ke gaba. Kuna ba AI shi tare da bayananku, a sashen Tsari (Format) na umurnin RCTF; fasalin shafi da kari suna zuwa daga baya."
      },
      {
        "question": "AI ta ba da kason cikar ayyuka na kashi 90 cikin 100; teburinku ya nuna ayyuka 17 aka yi cikin 20. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku bar kashi 90" },
          { "key": "B", "text": "Ku zagaye zuwa kashi 100" },
          { "key": "C", "text": "Ku sake lissafawa: kashi 85, ku gyara" },
          { "key": "D", "text": "Ku goge kason" }
        ],
        "answer": "C",
        "explanation": "Ana lissafa kason cikar ayyuka haka: ayyukan da aka yi a raba da ayyukan da aka shirya, a ninka da dari. 17 ÷ 20 × 100 = 85. AI na iya kuskure ko ta zagaye ba tare da ta fada ba: kuna sake lissafin, kuna gyarawa, kuma ba ku cire alamar « [A TANTANCE] » sai bayan wannan tantancewa."
      },
      {
        "question": "Wace jimla ce shawara mai amfani?",
        "options": [
          { "key": "A", "text": "« Ya kamata a kara kokari. »" },
          { "key": "B", "text": "« Halin da ake ciki yana da damuwa. »" },
          { "key": "C", "text": "« Sashen zai yi iya kokarinsa. »" },
          { "key": "D", "text": "« Shugaban sashe zai shirya ziyarar sa ido daya a kowane wata a kowace karamar hukuma, daga watan Yuli. »" }
        ],
        "answer": "D",
        "explanation": "Shawara mai amfani tana fadin wa zai yi me, kuma yaushe: a nan, shugaban sashe (wa), ziyarar sa ido daya a kowane wata a kowace karamar hukuma (me), daga watan Yuli (yaushe). Sauran jimloli uku fata ne ko lura: babu wanda zai iya aiwatar da su ko ya tantance an bi su."
      },
      {
        "question": "Me za ku iya liko a cikin manhajar don shirya rahotonku?",
        "options": [
          { "key": "A", "text": "Jimloli da bayanai ba tare da ko suna daya ba" },
          { "key": "B", "text": "Jerin sunayen masu cin gajiya" },
          { "key": "C", "text": "Kimanta aikin kowane ma’aikaci" },
          { "key": "D", "text": "Lambobin wayar abokan hulda" }
        ],
        "answer": "A",
        "explanation": "Matatar sirri tana barin ayyuka, jimloli da bayanan da aka boye sunaye a cikinsu su wuce. Jerin sunaye, kimanta aikin kowane mutum da lambobin waya bayanan sirri ne na mutane: ba sa taba shiga manhajar jama’a, bisa dokokin aikin gwamnati na kasarku."
      },
      {
        "question": "Me ya sa za a raba hujjoji da nazari?",
        "options": [
          { "key": "A", "text": "Don a tsawaita rahoton" },
          { "key": "B", "text": "Don mai karatu ya bambance abin da aka gani da abin da aka fassara" },
          { "key": "C", "text": "Saboda AI ta bukaci hakan" },
          { "key": "D", "text": "Don a boye matsaloli" }
        ],
        "answer": "B",
        "explanation": "Hujja ana ganin ta (« ayyuka 17 aka yi cikin 20 »); nazari ana kare shi da dalilai (« damina ta hana ayyuka uku »). Idan aka raba su, mai karatu yana sanin abin da aka tabbatar da abin da ke fassarar ku: yana iya muhawara kan nazarin ba tare da ya kalubalanci hujjojin ba."
      }
    ],
    "reflection": "A cikin rahoton karshe da kuka rubuta ko kuka karba, wace lamba ya kamata ku sake lissafawa kafin ku tura shi, kuma wace shawara za ku iya sake rubutawa a matsayin wa, me, yaushe?",
    "glossary": [
      {
        "term": "Rahoton ayyuka (rapport d’activités)",
        "definition": "Takarda da ke bayar da labarin, a wani lokaci (watanni uku, shekara), abin da sashe ya shirya, ya yi kuma ya cimma, tare da matsalolinsa da shawarwarinsa. Yana hawa wajen shugabanni kuma yana daure sashen."
      },
      {
        "term": "Kason cikar ayyuka (taux de réalisation)",
        "definition": "Yawan ayyukan da aka yi cikin wadanda aka shirya: ayyukan da aka yi a raba da ayyukan da aka shirya, a ninka da dari. Misali na kirkira: 17 cikin 20 suna ba da kashi 85 cikin 100."
      },
      {
        "term": "Samfurin da aka wajabta (modèle imposé)",
        "definition": "Tsarin rahoto da ma’aikata, hukuma ko wani abokin hulda ya kayyade. Idan akwai shi, shi ne ke gaba da kowane tsari: ana ba AI shi yadda yake, a sashen Tsari (Format) na umurnin."
      },
      {
        "term": "« [A TANTANCE] » (« [À VÉRIFIER] »)",
        "definition": "Alamar da AI ke sanyawa, bisa bukatarku, kusa da kowace lamba a cikin daftari. Tana nuna cewa ba a tantance lambar ba tukuna; kuna cire ta sai bayan kun sake lissafin da kanku."
      },
      {
        "term": "Nazari (analyse)",
        "definition": "Sashen rahoto da ke fassara hujjoji kuma yana bayyana dalilansu. Hujja ana ganin ta; nazari ana kare shi da dalilai kuma ana iya muhawara a kansa."
      },
      {
        "term": "Shawara (recommandation)",
        "definition": "Shirin aiki da aka gabatar don lokaci na gaba. Shawara mai amfani tana fadin wa zai yi me, kuma yaushe; « karfafa sa ido » ba shawara ba ce."
      }
    ]
  }
};
