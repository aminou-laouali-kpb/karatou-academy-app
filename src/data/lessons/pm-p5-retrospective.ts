import { Language } from '../translations';
import { LessonContent } from '../lessonContent';

// Module « Gestion de Projet » — leçon p5 (Rétrospective et amélioration — progresser après chaque cycle), niveau débutant
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const pmLessonP5: Record<Language, LessonContent> = {
  "fr": {
    "id": "p5",
    "lessonNumber": 5,
    "title": "Rétrospective et amélioration — progresser après chaque cycle",
    "objective": "À la fin de cette leçon, vous saurez animer une rétrospective simple pour tirer les leçons d’un cycle de travail. Vous serez capable de transformer ces leçons en une ou deux améliorations concrètes pour le prochain cycle. Vous saurez créer un climat de confiance, sans blâme, qui aide votre équipe à progresser durablement, même avec peu de moyens.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi la rétrospective ?",
        "body": "Après chaque match, une bonne équipe de football se réunit avec son entraîneur pour comprendre ce qui s’est passé : ce qui a bien fonctionné, ce qui a manqué, ce qu’il faut changer la prochaine fois. De la même façon, après la récolte, les membres d’une coopérative s’assoient souvent sous l’arbre à palabres pour parler de la saison écoulée. La rétrospective, en gestion de projet, c’est exactement ce réflexe : prendre un moment, à la fin d’un cycle de travail, pour regarder en arrière ensemble et apprendre.\n\nGérer un projet, c’est du bon sens outillé. Et le bon sens nous dit qu’on ne s’améliore pas en répétant les mêmes erreurs sans jamais s’arrêter pour y réfléchir. La rétrospective transforme l’expérience vécue par l’équipe — une campagne de sensibilisation, une distribution, une saison agricole — en leçons utiles. C’est ce qu’on appelle l’amélioration continue : avancer un peu mieux à chaque tour, plutôt que de tout vouloir changer d’un coup.\n\nL’avantage, c’est que cela ne coûte presque rien. Pas besoin de logiciel, ni de budget, ni de connexion internet. Une feuille de papier, un mur, ou même une discussion à voix haute en équipe suffisent. Trente minutes bien utilisées à la fin d’un cycle peuvent vous faire gagner des jours de travail et beaucoup de frustration au cycle suivant."
      },
      {
        "title": "Un format simple et sans blâme",
        "body": "Le format le plus simple tient en trois colonnes : « Ce qui a marché », « Ce qui n’a pas marché » et « Ce qu’on change ». Vous tracez ces trois colonnes sur une feuille ou un tableau, puis chaque membre de l’équipe parle à tour de rôle. Pour une équipe terrain qui vient de terminer une campagne de vaccination, cela peut donner : « la mobilisation des relais communautaires a très bien marché », « nous avons manqué de carburant deux fois », « on prévoit le carburant une semaine à l’avance ».\n\nLa règle d’or, c’est le climat de confiance. Une rétrospective n’est pas un tribunal et ne sert pas à désigner un coupable. On parle des situations et des processus, pas des personnes. Au lieu de dire « tu as oublié de commander le carburant », on dit « la commande de carburant n’a pas été faite à temps ». Cette nuance change tout : les gens osent parler honnêtement de ce qui n’a pas marché, et c’est précisément là que se trouvent les meilleures leçons.\n\nPour installer ce climat, l’animateur — souvent le chef de projet, mais cela peut tourner — rappelle au début que chacun a fait de son mieux avec les moyens disponibles. On laisse parler tout le monde, même les plus discrets, car l’agent qui était sur le terrain voit souvent ce que le bureau ne voit pas. Le ton reste bienveillant et orienté vers le progrès, jamais vers le reproche."
      },
      {
        "title": "Des leçons aux actions",
        "body": "Une rétrospective qui se termine par une longue liste de problèmes sans suite ne sert à rien — au contraire, elle décourage l’équipe. Le vrai but, c’est de passer des leçons aux actions. Après avoir rempli les trois colonnes, vous regardez la colonne « Ce qu’on change » et vous choisissez seulement une ou deux améliorations concrètes pour le prochain cycle. Pas dix : une ou deux.\n\nPourquoi si peu ? Parce qu’une équipe qui veut tout changer en même temps n’y arrive jamais, surtout quand les moyens sont limités. Mieux vaut réussir un petit changement à chaque cycle que d’échouer sur dix grands chantiers. Une bonne action d’amélioration est précise et réaliste : « envoyer le rapport de distribution chaque vendredi avant midi » est meilleur que « mieux communiquer ». On sait qui fait quoi, et quand.\n\nNotez ces une ou deux actions là où l’équipe les reverra : un cahier de suivi, un message dans le groupe WhatsApp de l’équipe, une affiche au bureau. L’important est qu’elles soient visibles et attribuées à quelqu’un. Une action d’amélioration que personne ne porte et que personne ne revoit est une action qui mourra avant le prochain cycle."
      },
      {
        "title": "Ancrer l’amélioration continue",
        "body": "La force de la rétrospective vient de sa répétition. Une seule rétrospective, c’est bien ; une rétrospective à la fin de chaque cycle, c’est ce qui construit une vraie culture d’équipe. C’est ce qu’on appelle la boucle d’apprentissage : on agit, on observe les résultats, on en tire des leçons, on ajuste — puis on recommence. À chaque tour, l’équipe travaille un peu mieux.\n\nPour que la boucle tienne, commencez chaque nouvelle rétrospective en reprenant les actions décidées la fois précédente : les a-t-on faites ? Ont-elles aidé ? Ce simple suivi montre que la parole de l’équipe compte vraiment, et il évite que les mêmes problèmes reviennent éternellement. C’est aussi le moment de célébrer les progrès, même petits : « le mois dernier, on accusait des retards à chaque distribution, et ce mois-ci nous étions à l’heure trois fois sur quatre ». Reconnaître ce qui s’améliore motive bien plus que pointer ce qui manque encore.\n\nSoyons honnêtes : il ne s’agit pas de monter une machine lourde. Pour une petite structure, une coopérative ou une équipe terrain, la rétrospective doit rester légère — trente minutes, du papier, une discussion franche. Mieux vaut une rétrospective simple faite à chaque cycle qu’un grand atelier complexe qu’on ne fera jamais. C’est la régularité, pas la sophistication, qui fait progresser l’équipe."
      }
    ],
    "example": {
      "title": "La coopérative Faso Jigi et la rétrospective qui réduit les retards",
      "challenge": "La coopérative maraîchère Faso Jigi (une trentaine de membres, près de Bobo-Dioulasso) livrait ses légumes au marché de la ville. Mais à chaque cycle de livraison, des retards revenaient : camions partis à moitié pleins, commandes mal notées, clients mécontents. Personne ne savait vraiment pourquoi, et chacun avait tendance à se rejeter la faute.",
      "solution": "Le responsable décide d’organiser une courte rétrospective de trente minutes après chaque cycle de livraison hebdomadaire. Sur un grand papier kraft, il trace trois colonnes : « Ce qui a marché / Ce qui n’a pas marché / Ce qu’on change ». La règle est claire : on parle des situations, pas des personnes. À la première séance, l’équipe identifie que les commandes étaient prises par téléphone sans être notées. L’action choisie est simple et unique : noter chaque commande dans un cahier dédié, relu la veille du départ du camion.",
      "impact": "Au fil des semaines, en ajustant à chaque rétrospective un point de communication (cahier de commandes, puis horaire de chargement confirmé la veille), la coopérative a réduit ses retards de livraison d’environ 40 % sur deux mois. Surtout, le climat a changé : les membres parlent désormais ouvertement des difficultés sans craindre d’être blâmés, et proposent eux-mêmes des améliorations. Ces chiffres sont propres à leur contexte et indicatifs, mais la tendance est nette et durable."
    },
    "practice": {
      "title": "Animer une rétrospective sur un projet récent",
      "instructions": [
        "Choisissez un projet ou une activité que vous venez de terminer (une campagne, une distribution, un événement, une saison). Sur une feuille de papier ou dans une note sur votre téléphone, tracez trois colonnes : « Ce qui a marché », « Ce qui n’a pas marché », « Ce qu’on change ».",
        "Seul ou, mieux, avec deux ou trois collègues, remplissez les colonnes en parlant des situations et jamais des personnes. Notez au moins deux éléments par colonne, en restant simple et concret.",
        "Regardez la colonne « Ce qu’on change » et choisissez seulement deux actions d’amélioration précises pour le prochain cycle. Pour chacune, écrivez qui s’en occupe et à quel moment elle sera faite."
      ],
      "observation": "Vous remarquerez probablement que parler des situations plutôt que des personnes rend la discussion plus facile et plus honnête. Vous verrez aussi qu’il est tentant de lister beaucoup de changements : résistez, et gardez seulement deux actions. Une équipe qui réussit deux petites améliorations par cycle progresse plus vite et plus sereinement qu’une équipe qui se noie dans une longue liste jamais terminée."
    },
    "quiz": [
      {
        "question": "Quel est le but principal d’une rétrospective d’équipe ?",
        "options": [
          {
            "key": "A",
            "text": "Désigner la personne responsable des problèmes du cycle écoulé"
          },
          {
            "key": "B",
            "text": "Tirer les leçons d’un cycle pour améliorer concrètement la façon de travailler"
          },
          {
            "key": "C",
            "text": "Rédiger un long rapport officiel destiné au bailleur"
          },
          {
            "key": "D",
            "text": "Remplacer complètement la planification du projet"
          }
        ],
        "answer": "B",
        "explanation": "La rétrospective sert à regarder en arrière ensemble, à la fin d’un cycle, pour en tirer des leçons utiles et améliorer la façon de travailler au cycle suivant. Ce n’est ni un tribunal, ni un rapport pour le bailleur, ni un substitut à la planification."
      },
      {
        "question": "Dans une rétrospective sans blâme, comment formule-t-on un problème ?",
        "options": [
          {
            "key": "A",
            "text": "En nommant la personne qui a fait l’erreur, pour qu’elle s’améliore"
          },
          {
            "key": "B",
            "text": "En évitant complètement de parler de ce qui n’a pas marché"
          },
          {
            "key": "C",
            "text": "En parlant de la situation ou du processus, pas de la personne"
          },
          {
            "key": "D",
            "text": "En attendant la fin du projet pour en discuter en privé avec le chef"
          }
        ],
        "answer": "C",
        "explanation": "Le climat de confiance repose sur une règle simple : on parle des situations et des processus, pas des personnes. Dire « la commande n’a pas été faite à temps » plutôt que « tu as oublié » permet à chacun de parler honnêtement, et c’est là que se trouvent les meilleures leçons."
      },
      {
        "question": "Combien d’améliorations concrètes vaut-il mieux retenir pour le prochain cycle ?",
        "options": [
          {
            "key": "A",
            "text": "Une ou deux actions précises et réalistes"
          },
          {
            "key": "B",
            "text": "Toutes les idées notées dans la colonne « Ce qu’on change »"
          },
          {
            "key": "C",
            "text": "Au moins dix, pour montrer que l’équipe est ambitieuse"
          },
          {
            "key": "D",
            "text": "Aucune ; l’important est seulement d’avoir discuté"
          }
        ],
        "answer": "A",
        "explanation": "Une équipe qui veut tout changer en même temps n’y arrive jamais, surtout avec peu de moyens. Choisir une ou deux actions précises et réalistes, en sachant qui fait quoi et quand, donne bien plus de résultats qu’une longue liste vite oubliée."
      },
      {
        "question": "Qu’est-ce que la boucle d’apprentissage en amélioration continue ?",
        "options": [
          {
            "key": "A",
            "text": "Un logiciel payant qui suit automatiquement les actions de l’équipe"
          },
          {
            "key": "B",
            "text": "Une réunion unique organisée à la toute fin du projet"
          },
          {
            "key": "C",
            "text": "Le fait de répéter le même cycle de travail sans jamais le changer"
          },
          {
            "key": "D",
            "text": "Agir, observer les résultats, en tirer des leçons, ajuster, puis recommencer"
          }
        ],
        "answer": "D",
        "explanation": "La boucle d’apprentissage, c’est le cœur de l’amélioration continue : on agit, on observe ce qui se passe, on en tire des leçons, on ajuste, puis on recommence. Répétée à chaque cycle, elle fait progresser l’équipe un peu plus à chaque tour."
      },
      {
        "question": "Comment renforce-t-on durablement le climat de confiance d’une équipe au fil des rétrospectives ?",
        "options": [
          {
            "key": "A",
            "text": "En reprenant les actions décidées la fois précédente et en célébrant les progrès"
          },
          {
            "key": "B",
            "text": "En gardant secrètes les difficultés rencontrées pour ne vexer personne"
          },
          {
            "key": "C",
            "text": "En confiant l’animation toujours à la même personne autoritaire"
          },
          {
            "key": "D",
            "text": "En allongeant la réunion jusqu’à ce que tous les problèmes soient résolus"
          }
        ],
        "answer": "A",
        "explanation": "Reprendre au début de chaque rétrospective les actions décidées la fois d’avant montre que la parole de l’équipe compte vraiment. Et célébrer les progrès, même petits, motive davantage que pointer ce qui manque encore : c’est ainsi que se construit une culture d’équipe de confiance et durable."
      }
    ],
    "reflection": "Pensez à un projet ou une activité que vous menez en ce moment, ou que vous venez de terminer. À quel moment pourriez-vous organiser une courte rétrospective sans blâme avec votre équipe, et quelle première amélioration concrète aimeriez-vous en tirer pour le prochain cycle ?",
    "glossary": [
      {
        "term": "Rétrospective",
        "definition": "Court moment, organisé à la fin d’un cycle de travail, où l’équipe regarde en arrière ensemble pour comprendre ce qui a marché, ce qui n’a pas marché, et ce qu’elle veut changer."
      },
      {
        "term": "Amélioration continue (Kaizen)",
        "definition": "Démarche qui consiste à progresser par petits pas réguliers, cycle après cycle, plutôt que de tout vouloir transformer d’un seul coup. « Kaizen » est le mot japonais souvent utilisé pour la désigner."
      },
      {
        "term": "Action d’amélioration",
        "definition": "Changement précis et réaliste, choisi à l’issue d’une rétrospective et attribué à quelqu’un, à mettre en œuvre au cycle suivant — par exemple « envoyer le rapport chaque vendredi avant midi »."
      },
      {
        "term": "Feedback",
        "definition": "Retour d’information donné sur une action ou une situation pour aider à s’améliorer. Un bon feedback porte sur les faits et les situations, jamais sur la personne."
      },
      {
        "term": "Climat de confiance",
        "definition": "Ambiance dans laquelle chacun ose parler honnêtement de ce qui n’a pas marché sans craindre d’être blâmé. C’est la condition essentielle pour qu’une rétrospective soit utile."
      },
      {
        "term": "Boucle d’apprentissage",
        "definition": "Cycle répété où l’on agit, observe les résultats, en tire des leçons, ajuste, puis recommence. C’est le mécanisme de fond de l’amélioration continue."
      }
    ]
  },
  "en": {
    "id": "p5",
    "lessonNumber": 5,
    "title": "Retrospective and improvement — progressing after each cycle",
    "objective": "By the end of this lesson, you will be able to facilitate a simple retrospective to draw lessons from a work cycle. You will be able to turn those lessons into one or two concrete improvements for the next cycle. You will know how to create a climate of trust, without blame, that helps your team progress sustainably, even with limited resources.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why hold a retrospective?",
        "body": "After every match, a good football team gathers with its coach to understand what happened: what worked well, what was missing, and what should change next time. In the same way, after the harvest, the members of a cooperative often sit down under the palaver tree to talk about the season that has passed. A retrospective, in project management, is exactly this reflex: taking a moment, at the end of a work cycle, to look back together and learn.\n\nManaging a project is common sense with tools. And common sense tells us that we do not improve by repeating the same mistakes without ever stopping to think about them. A retrospective turns the team's lived experience — an awareness campaign, a distribution, a farming season — into useful lessons. This is what we call continuous improvement: moving forward a little better at each turn, rather than trying to change everything at once.\n\nThe advantage is that it costs almost nothing. No software, no budget, and no internet connection needed. A sheet of paper, a wall, or even a spoken discussion as a team is enough. Thirty well-used minutes at the end of a cycle can save you days of work and a great deal of frustration in the next one."
      },
      {
        "title": "A simple, blame-free format",
        "body": "The simplest format fits into three columns: \"What worked,\" \"What didn't work,\" and \"What we change.\" You draw these three columns on a sheet or a board, then each team member speaks in turn. For a field team that has just finished a vaccination campaign, it might look like this: \"mobilizing the community relays worked very well,\" \"we ran out of fuel twice,\" \"we plan the fuel a week ahead.\"\n\nThe golden rule is the climate of trust. A retrospective is not a courtroom and is not meant to point out a guilty party. We talk about situations and processes, not about people. Instead of saying \"you forgot to order the fuel,\" we say \"the fuel order was not placed on time.\" This nuance changes everything: people dare to speak honestly about what did not work, and that is precisely where the best lessons are found.\n\nTo build this climate, the facilitator — often the project lead, but the role can rotate — reminds everyone at the start that each person did their best with the resources available. Everyone is allowed to speak, even the quietest, because the agent who was in the field often sees what the office does not. The tone stays kind and oriented toward progress, never toward blame."
      },
      {
        "title": "From lessons to actions",
        "body": "A retrospective that ends with a long list of problems and no follow-up is useless — on the contrary, it discourages the team. The real goal is to move from lessons to actions. After filling in the three columns, you look at the \"What we change\" column and choose only one or two concrete improvements for the next cycle. Not ten: one or two.\n\nWhy so few? Because a team that wants to change everything at once never manages to, especially when resources are limited. It is better to succeed with one small change each cycle than to fail at ten major projects. A good improvement action is precise and realistic: \"send the distribution report every Friday before noon\" is better than \"communicate better.\" Everyone knows who does what, and when.\n\nWrite down these one or two actions where the team will see them again: a follow-up notebook, a message in the team's WhatsApp group, a poster in the office. The important thing is that they are visible and assigned to someone. An improvement action that no one owns and no one revisits is an action that will die before the next cycle."
      },
      {
        "title": "Anchoring continuous improvement",
        "body": "The strength of the retrospective comes from its repetition. A single retrospective is good; a retrospective at the end of each cycle is what builds a real team culture. This is what we call the learning loop: we act, we observe the results, we draw lessons, we adjust — and then we start again. At each turn, the team works a little better.\n\nFor the loop to hold, begin each new retrospective by revisiting the actions decided last time: did we do them? Did they help? This simple follow-up shows that the team's voice truly matters, and it prevents the same problems from coming back forever. It is also the moment to celebrate progress, even small progress: \"last month we were late at every distribution, and this month we were on time three times out of four.\" Recognizing what is improving motivates far more than pointing out what is still missing.\n\nLet's be honest: this is not about building a heavy machine. For a small structure, a cooperative, or a field team, the retrospective must stay lightweight — thirty minutes, some paper, an honest discussion. A simple retrospective done every cycle is better than a complex, large workshop that will never happen. It is regularity, not sophistication, that makes the team progress."
      }
    ],
    "example": {
      "title": "The Faso Jigi cooperative and the retrospective that reduces delays",
      "challenge": "The Faso Jigi market-gardening cooperative (about thirty members, near Bobo-Dioulasso) delivered its vegetables to the city market. But at each delivery cycle, delays kept coming back: trucks leaving half-full, poorly recorded orders, unhappy customers. No one really knew why, and everyone tended to shift the blame onto others.",
      "solution": "The manager decides to hold a short thirty-minute retrospective after each weekly delivery cycle. On a large sheet of kraft paper, he draws three columns: \"What worked / What didn't work / What we change.\" The rule is clear: we talk about situations, not about people. At the first session, the team identifies that orders were taken by phone without being written down. The chosen action is simple and single: record every order in a dedicated notebook, reviewed the day before the truck leaves.",
      "impact": "Over the weeks, by adjusting one communication point at each retrospective (the order notebook, then a loading time confirmed the day before), the cooperative reduced its delivery delays by about 40% over two months. Above all, the climate changed: members now speak openly about difficulties without fearing blame, and they propose improvements themselves. These figures are specific to their context and indicative, but the trend is clear and lasting."
    },
    "practice": {
      "title": "Facilitate a retrospective on a recent project",
      "instructions": [
        "Choose a project or activity you have just finished (a campaign, a distribution, an event, a season). On a sheet of paper or in a note on your phone, draw three columns: \"What worked,\" \"What didn't work,\" \"What we change.\"",
        "Alone or, better, with two or three colleagues, fill in the columns by talking about situations and never about people. Write at least two items per column, keeping it simple and concrete.",
        "Look at the \"What we change\" column and choose only two precise improvement actions for the next cycle. For each one, write down who is responsible for it and when it will be done."
      ],
      "observation": "You will probably notice that talking about situations rather than people makes the discussion easier and more honest. You will also see how tempting it is to list many changes: resist, and keep only two actions. A team that succeeds with two small improvements per cycle progresses faster and more calmly than a team that drowns in a long list that is never finished."
    },
    "quiz": [
      {
        "question": "What is the main purpose of a team retrospective?",
        "options": [
          {
            "key": "A",
            "text": "To name the person responsible for the problems of the past cycle"
          },
          {
            "key": "B",
            "text": "To draw lessons from a cycle in order to concretely improve how the team works"
          },
          {
            "key": "C",
            "text": "To write a long official report for the donor"
          },
          {
            "key": "D",
            "text": "To completely replace the project's planning"
          }
        ],
        "answer": "B",
        "explanation": "A retrospective is about looking back together, at the end of a cycle, to draw useful lessons and improve how the team works in the next cycle. It is neither a courtroom, nor a report for the donor, nor a substitute for planning."
      },
      {
        "question": "In a blame-free retrospective, how do you phrase a problem?",
        "options": [
          {
            "key": "A",
            "text": "By naming the person who made the mistake, so they improve"
          },
          {
            "key": "B",
            "text": "By avoiding talking about what didn't work altogether"
          },
          {
            "key": "C",
            "text": "By talking about the situation or the process, not the person"
          },
          {
            "key": "D",
            "text": "By waiting until the end of the project to discuss it privately with the lead"
          }
        ],
        "answer": "C",
        "explanation": "A climate of trust rests on a simple rule: we talk about situations and processes, not about people. Saying \"the order was not placed on time\" rather than \"you forgot\" allows everyone to speak honestly, and that is where the best lessons are found."
      },
      {
        "question": "How many concrete improvements is it best to keep for the next cycle?",
        "options": [
          {
            "key": "A",
            "text": "One or two precise and realistic actions"
          },
          {
            "key": "B",
            "text": "Every idea written in the \"What we change\" column"
          },
          {
            "key": "C",
            "text": "At least ten, to show that the team is ambitious"
          },
          {
            "key": "D",
            "text": "None; what matters is only having discussed"
          }
        ],
        "answer": "A",
        "explanation": "A team that wants to change everything at once never manages to, especially with limited resources. Choosing one or two precise and realistic actions, knowing who does what and when, produces far more results than a long list quickly forgotten."
      },
      {
        "question": "What is the learning loop in continuous improvement?",
        "options": [
          {
            "key": "A",
            "text": "A paid software that automatically tracks the team's actions"
          },
          {
            "key": "B",
            "text": "A single meeting held at the very end of the project"
          },
          {
            "key": "C",
            "text": "Repeating the same work cycle without ever changing it"
          },
          {
            "key": "D",
            "text": "Acting, observing the results, drawing lessons, adjusting, then starting again"
          }
        ],
        "answer": "D",
        "explanation": "The learning loop is the heart of continuous improvement: we act, we observe what happens, we draw lessons, we adjust, then we start again. Repeated at each cycle, it makes the team progress a little more at every turn."
      },
      {
        "question": "How do you sustainably strengthen a team's climate of trust across retrospectives?",
        "options": [
          {
            "key": "A",
            "text": "By revisiting the actions decided last time and celebrating progress"
          },
          {
            "key": "B",
            "text": "By keeping the difficulties encountered secret so as not to upset anyone"
          },
          {
            "key": "C",
            "text": "By always assigning facilitation to the same authoritarian person"
          },
          {
            "key": "D",
            "text": "By extending the meeting until every problem is solved"
          }
        ],
        "answer": "A",
        "explanation": "Revisiting at the start of each retrospective the actions decided last time shows that the team's voice truly matters. And celebrating progress, even small progress, motivates more than pointing out what is still missing: this is how a trusting and lasting team culture is built."
      }
    ],
    "reflection": "Think of a project or activity you are leading right now, or have just finished. When could you hold a short, blame-free retrospective with your team, and what first concrete improvement would you like to draw from it for the next cycle?",
    "glossary": [
      {
        "term": "Retrospective",
        "definition": "A short moment, held at the end of a work cycle, when the team looks back together to understand what worked, what didn't work, and what it wants to change."
      },
      {
        "term": "Continuous improvement (Kaizen)",
        "definition": "An approach of progressing through small, regular steps, cycle after cycle, rather than trying to transform everything at once. \"Kaizen\" is the Japanese word often used to describe it."
      },
      {
        "term": "Improvement action",
        "definition": "A precise and realistic change, chosen at the end of a retrospective and assigned to someone, to be implemented in the next cycle — for example \"send the report every Friday before noon.\""
      },
      {
        "term": "Feedback",
        "definition": "Information given about an action or a situation to help improvement. Good feedback focuses on facts and situations, never on the person."
      },
      {
        "term": "Climate of trust",
        "definition": "An atmosphere in which everyone dares to speak honestly about what did not work without fearing blame. It is the essential condition for a retrospective to be useful."
      },
      {
        "term": "Learning loop",
        "definition": "A repeated cycle in which we act, observe the results, draw lessons, adjust, then start again. It is the underlying mechanism of continuous improvement."
      }
    ]
  },
  "ha": {
    "id": "p5",
    "lessonNumber": 5,
    "title": "Bita da ingantawa — ci gaba bayan kowane zagaye",
    "objective": "A ƙarshen wannan darasi, za ku iya gudanar da bita mai sauƙi don ɗauko darussa daga wani zagaye na aiki. Za ku iya juya waɗannan darussa zuwa ingantawa ɗaya ko biyu na zahiri don zagayen na gaba. Za ku san yadda ake samar da yanayin amana, ba tare da zargi ba, wanda ke taimaka wa ƙungiyarku ta ci gaba a dawwama, ko da da ƙarancin kayan aiki.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Me ya sa bita?",
        "body": "Bayan kowane wasa, kyakkyawar ƙungiyar ƙwallon ƙafa tana taruwa da mai horarwa don fahimtar abin da ya faru: abin da ya yi kyau, abin da ya rasa, da abin da ya kamata a canza a gaba. Haka nan, bayan girbi, mambobin ƙungiyar haɗin gwiwa sukan zauna ƙarƙashin bishiyar shawarwari don yin magana kan lokacin da ya shuɗe. Bita, a fannin sarrafa ayyuka, daidai wannan halayyar ce: ɗaukar ɗan lokaci, a ƙarshen wani zagaye na aiki, don dubawa baya tare da koyo.\n\nSarrafa aiki shi ne hankali tare da kayan aiki. Kuma hankali yana gaya mana cewa ba ma ingantawa ta hanyar maimaita kuskure iri ɗaya ba tare da tsayawa don yin tunani ba. Bita tana juya ƙwarewar ƙungiyar — yaƙin neman wayar da kai, rabarwa, lokacin noma — zuwa darussa masu amfani. Wannan shi ne abin da muke kira ingantawa mai dorewa: ci gaba kaɗan da kyau a kowane zagaye, maimakon ƙoƙarin canza komai a lokaci ɗaya.\n\nFa'idarsa ita ce kusan ba ya buƙatar komai. Babu buƙatar manhaja, ko kuɗi, ko haɗin yanar gizo. Takarda ɗaya, bango, ko ma tattaunawa ta baki a matsayin ƙungiya ya isa. Mintuna talatin da aka yi amfani da su sosai a ƙarshen zagaye na iya ceto muku kwanaki na aiki da takaici mai yawa a zagaye na gaba."
      },
      {
        "title": "Tsari mai sauƙi kuma ba tare da zargi ba",
        "body": "Tsari mafi sauƙi ya ƙunshi rukuni uku: « Abin da ya yi aiki », « Abin da bai yi aiki ba », da « Abin da muke canzawa ». Kuna zana waɗannan rukuni uku a takarda ko allo, sannan kowane memba na ƙungiyar yana magana bi da bi. Ga ƙungiyar filin aiki da ta gama yaƙin neman allurar rigakafi, hakan na iya zama: « tattara wakilan al'umma ya yi aiki sosai », « mun ƙare da man fetur sau biyu », « muna shirya man fetur mako guda kafin lokaci ».\n\nDokar zinariya ita ce yanayin amana. Bita ba kotu ba ce kuma ba ta nufin nuna wani mai laifi ba. Muna magana kan yanayi da matakai, ba kan mutane ba. Maimakon cewa « kun manta yin odar man fetur », muna cewa « ba a yi odar man fetur a kan lokaci ba ». Wannan bambanci yana canza komai: mutane suna ƙarfin halin yin magana da gaskiya kan abin da bai yi aiki ba, kuma daidai a nan ne mafi kyawun darussa suke.\n\nDon kafa wannan yanayin, mai gudanarwa — sau da yawa shugaban aikin, amma matsayin na iya juyawa — yana tunatar da kowa a farko cewa kowa ya yi iya ƙoƙarinsa da kayan aikin da ake da su. Ana barin kowa ya yi magana, ko da mafi shiru, domin wakilin da yake a filin aiki sau da yawa yana ganin abin da ofis ba ya gani. Sautin ya kasance mai kirki kuma yana mai da hankali kan ci gaba, ba kan zargi ba."
      },
      {
        "title": "Daga darussa zuwa ayyuka",
        "body": "Bita da ke ƙarewa da dogon jerin matsaloli ba tare da bin diddigi ba ba ta da amfani — akasin haka, tana karya gwiwar ƙungiyar. Manufar gaskiya ita ce ƙaura daga darussa zuwa ayyuka. Bayan cika rukuni uku, kuna duba rukunin « Abin da muke canzawa » kuma kuna zaɓar ingantawa ɗaya ko biyu kawai na zahiri don zagaye na gaba. Ba goma ba: ɗaya ko biyu.\n\nMe ya sa kaɗan haka? Domin ƙungiya da ke son canza komai a lokaci ɗaya ba ta taɓa cimma hakan ba, musamman lokacin da kayan aiki suka yi ƙaranci. Ya fi kyau a yi nasara da ƙaramin canji ɗaya a kowane zagaye fiye da a kasa a manyan ayyuka goma. Kyakkyawan aikin ingantawa yana da daidaito kuma na zahiri: « aika rahoton rabarwa kowace Juma'a kafin tsakar rana » ya fi « sadarwa da kyau ». Mun san wa ke yin me, da yaushe.\n\nKu rubuta waɗannan ayyuka ɗaya ko biyu inda ƙungiyar za ta sake ganinsu: littafin bin diddigi, saƙo a cikin ƙungiyar WhatsApp ta ƙungiyar, fosta a ofis. Abu mai muhimmanci shi ne su kasance a bayyane kuma a danƙa su ga wani. Aikin ingantawa da babu wanda ke ɗauke shi kuma babu wanda ke sake duba shi aiki ne da zai mutu kafin zagaye na gaba."
      },
      {
        "title": "Kafa ingantawa mai dorewa",
        "body": "Ƙarfin bita yana fitowa daga maimaitawarta. Bita ɗaya tak, yana da kyau; bita a ƙarshen kowane zagaye, shi ne abin da ke gina al'adar ƙungiya ta gaske. Wannan shi ne abin da muke kira madaukin koyo: muna aiki, muna lura da sakamako, muna ɗauko darussa, muna gyarawa — sannan muna sake farawa. A kowane zagaye, ƙungiyar tana aiki kaɗan da kyau.\n\nDon madaukin ya dawwama, ku fara kowace sabuwar bita ta hanyar sake duba ayyukan da aka yanke a lokacin da ya gabata: shin mun yi su? Sun taimaka? Wannan bin diddigi mai sauƙi yana nuna cewa muryar ƙungiyar tana da muhimmanci da gaske, kuma yana hana matsaloli iri ɗaya su dawo har abada. Wannan kuma shi ne lokacin yin murnar ci gaba, ko da ƙanƙanta: « watan da ya gabata, muna jinkiri a kowace rabarwa, kuma wannan watan mun kasance a kan lokaci sau uku cikin huɗu ». Gane abin da ke ingantawa yana ƙarfafa fiye da nuna abin da har yanzu ya rasa.\n\nMu yi gaskiya: ba game da gina inji mai nauyi ba ne. Ga ƙaramar ƙungiya, ƙungiyar haɗin gwiwa, ko ƙungiyar filin aiki, bita dole ta kasance mai sauƙi — mintuna talatin, takarda kaɗan, tattaunawa ta gaskiya. Bita mai sauƙi da aka yi kowane zagaye ya fi babban taron bita mai rikitarwa da ba za a taɓa yi ba. Dawwama, ba ƙwarewa ba, shi ne ke sa ƙungiyar ta ci gaba."
      }
    ],
    "example": {
      "title": "Ƙungiyar haɗin gwiwa Faso Jigi da bita da ke rage jinkiri",
      "challenge": "Ƙungiyar haɗin gwiwar lambun kayan lambu Faso Jigi (kusan mambobi talatin, kusa da Bobo-Dioulasso) tana kai kayan lambu zuwa kasuwar birni. Amma a kowane zagaye na kawowa, jinkiri yana dawowa: motoci da suke tafiya rabin cika, oda da ba a rubuta su da kyau ba, abokan ciniki marasa gamsuwa. Babu wanda ya san dalili da gaske, kuma kowa yana son jefa laifi kan wani.",
      "solution": "Shugaban ya yanke shawarar shirya gajeriyar bita ta mintuna talatin bayan kowane zagaye na kawowa na mako-mako. A kan babbar takardar kraft, ya zana rukuni uku: « Abin da ya yi aiki / Abin da bai yi aiki ba / Abin da muke canzawa ». Dokar a bayyane take: muna magana kan yanayi, ba kan mutane ba. A taro na farko, ƙungiyar ta gano cewa ana ɗaukar oda ta waya ba tare da rubuta su ba. Aikin da aka zaɓa mai sauƙi ne kuma ɗaya tak: rubuta kowace oda a cikin littafi na musamman, da aka sake dubawa ranar kafin motar ta tafi.",
      "impact": "A tsawon makonni, ta hanyar gyara wani batun sadarwa a kowace bita (littafin oda, sannan lokacin ɗora kaya da aka tabbatar ranar kafin), ƙungiyar ta rage jinkirin kawowarta da kusan kashi 40 cikin ɗari a cikin watanni biyu. Mafi muhimmanci, yanayin ya canza: mambobi yanzu suna magana a fili kan matsaloli ba tare da tsoron a zarge su ba, kuma suna ba da shawarwarin ingantawa da kansu. Waɗannan lambobi na musamman ne ga yanayinsu kuma alama ce kawai, amma yanayin a bayyane yake kuma mai dorewa."
    },
    "practice": {
      "title": "Gudanar da bita kan wani aiki na baya-bayan nan",
      "instructions": [
        "Ku zaɓi aiki ko ayyuka da kuka gama kawai (yaƙin neman, rabarwa, taro, lokacin noma). A kan takarda ko a cikin rubutu a wayar hannu, ku zana rukuni uku: « Abin da ya yi aiki », « Abin da bai yi aiki ba », « Abin da muke canzawa ».",
        "Kai kaɗai ko, mafi kyau, tare da abokan aiki biyu ko uku, ku cika rukunan ta hanyar magana kan yanayi kuma ba kan mutane ba. Ku rubuta aƙalla abubuwa biyu a kowane rukuni, kuna ci gaba da sauƙi da na zahiri.",
        "Ku duba rukunin « Abin da muke canzawa » kuma ku zaɓi ayyukan ingantawa biyu kawai masu daidaito don zagaye na gaba. Ga kowane, ku rubuta wa ke kula da shi kuma a wane lokaci za a yi shi."
      ],
      "observation": "Wataƙila za ku lura cewa yin magana kan yanayi maimakon kan mutane yana sa tattaunawar ta zama mai sauƙi kuma mai gaskiya. Za ku kuma ga yadda yake jaraba a jera canje-canje masu yawa: ku yi tsayin daka, kuma ku riƙe ayyuka biyu kawai. Ƙungiya da ke yin nasara da ƙananan ingantawa biyu a kowane zagaye tana ci gaba da sauri kuma cikin nutsuwa fiye da ƙungiya da ke nutsewa cikin dogon jeri da ba a taɓa kammala shi ba."
    },
    "quiz": [
      {
        "question": "Menene babbar manufar bita ta ƙungiya?",
        "options": [
          {
            "key": "A",
            "text": "Nuna mutumin da ke da alhakin matsalolin zagayen da ya shuɗe"
          },
          {
            "key": "B",
            "text": "Ɗauko darussa daga zagaye don ingantawa ta zahiri yadda ƙungiya ke aiki"
          },
          {
            "key": "C",
            "text": "Rubuta dogon rahoto na hukuma ga mai ba da taimako"
          },
          {
            "key": "D",
            "text": "Maye gurbin tsarin aikin gaba ɗaya"
          }
        ],
        "answer": "B",
        "explanation": "Bita game da dubawa baya tare ne, a ƙarshen zagaye, don ɗauko darussa masu amfani da ingantawa yadda ƙungiya ke aiki a zagaye na gaba. Ba kotu ba ce, ba rahoto na mai ba da taimako ba, kuma ba madadin tsarawa ba."
      },
      {
        "question": "A cikin bita ba tare da zargi ba, ta yaya ake kafa matsala?",
        "options": [
          {
            "key": "A",
            "text": "Ta hanyar nuna mutumin da ya yi kuskure, don ya inganta"
          },
          {
            "key": "B",
            "text": "Ta hanyar guje wa yin magana kan abin da bai yi aiki ba gaba ɗaya"
          },
          {
            "key": "C",
            "text": "Ta hanyar yin magana kan yanayi ko matakin, ba kan mutum ba"
          },
          {
            "key": "D",
            "text": "Ta hanyar jira har ƙarshen aikin don tattauna shi a ɓoye da shugaba"
          }
        ],
        "answer": "C",
        "explanation": "Yanayin amana yana kan doka mai sauƙi: muna magana kan yanayi da matakai, ba kan mutane ba. Cewa « ba a yi odar a kan lokaci ba » maimakon « kun manta » yana ba kowa damar yin magana da gaskiya, kuma a nan ne mafi kyawun darussa suke."
      },
      {
        "question": "Ingantawa nawa na zahiri ya fi kyau a riƙe don zagaye na gaba?",
        "options": [
          {
            "key": "A",
            "text": "Aiki ɗaya ko biyu masu daidaito kuma na zahiri"
          },
          {
            "key": "B",
            "text": "Kowane ra'ayi da aka rubuta a rukunin « Abin da muke canzawa »"
          },
          {
            "key": "C",
            "text": "Aƙalla goma, don nuna cewa ƙungiyar tana da buri"
          },
          {
            "key": "D",
            "text": "Babu ko ɗaya; abin da ke da muhimmanci shi ne kawai an tattauna"
          }
        ],
        "answer": "A",
        "explanation": "Ƙungiya da ke son canza komai a lokaci ɗaya ba ta taɓa cimma hakan ba, musamman da ƙarancin kayan aiki. Zaɓar aiki ɗaya ko biyu masu daidaito kuma na zahiri, da sanin wa ke yin me da yaushe, yana ba da sakamako mai yawa fiye da dogon jeri da aka manta da sauri."
      },
      {
        "question": "Menene madaukin koyo a cikin ingantawa mai dorewa?",
        "options": [
          {
            "key": "A",
            "text": "Manhaja mai biyan kuɗi da ke bin diddigin ayyukan ƙungiya kai tsaye"
          },
          {
            "key": "B",
            "text": "Taro ɗaya tak da aka shirya a ƙarshen aikin"
          },
          {
            "key": "C",
            "text": "Maimaita zagaye na aiki iri ɗaya ba tare da canza shi ba"
          },
          {
            "key": "D",
            "text": "Yin aiki, lura da sakamako, ɗauko darussa, gyarawa, sannan sake farawa"
          }
        ],
        "answer": "D",
        "explanation": "Madaukin koyo shi ne zuciyar ingantawa mai dorewa: muna aiki, muna lura da abin da ke faruwa, muna ɗauko darussa, muna gyarawa, sannan muna sake farawa. An maimaita shi a kowane zagaye, yana sa ƙungiyar ta ci gaba kaɗan a kowane juyi."
      },
      {
        "question": "Ta yaya ake ƙarfafa yanayin amana na ƙungiya a dawwama a tsawon bitoci?",
        "options": [
          {
            "key": "A",
            "text": "Ta hanyar sake duba ayyukan da aka yanke a lokacin da ya gabata da yin murnar ci gaba"
          },
          {
            "key": "B",
            "text": "Ta hanyar ɓoye matsalolin da aka fuskanta don kada a ɓata wa kowa rai"
          },
          {
            "key": "C",
            "text": "Ta hanyar danƙa gudanarwa koyaushe ga mutum ɗaya mai tsananin iko"
          },
          {
            "key": "D",
            "text": "Ta hanyar tsawaita taron har sai an warware kowace matsala"
          }
        ],
        "answer": "A",
        "explanation": "Sake duba a farkon kowace bita ayyukan da aka yanke a baya yana nuna cewa muryar ƙungiyar tana da muhimmanci da gaske. Kuma yin murnar ci gaba, ko da ƙanƙanta, yana ƙarfafa fiye da nuna abin da har yanzu ya rasa: haka ake gina al'adar ƙungiya ta amana mai dorewa."
      }
    ],
    "reflection": "Ku yi tunani kan aiki ko ayyuka da kuke jagoranta yanzu, ko da kuka gama kawai. A wane lokaci za ku iya shirya gajeriyar bita ba tare da zargi ba da ƙungiyarku, kuma wace ingantawa ta farko ta zahiri kuke son ɗauko daga ciki don zagaye na gaba?",
    "glossary": [
      {
        "term": "Rétrospective",
        "definition": "Gajeren lokaci, da aka shirya a ƙarshen zagaye na aiki, inda ƙungiya ke dubawa baya tare don fahimtar abin da ya yi aiki, abin da bai yi aiki ba, da abin da take son canzawa."
      },
      {
        "term": "Amélioration continue (Kaizen)",
        "definition": "Hanya da ke ƙunshe da ci gaba ta ƙananan matakai na yau da kullun, zagaye bayan zagaye, maimakon ƙoƙarin canza komai a lokaci ɗaya. « Kaizen » kalmar Jafananci ce da ake amfani da ita sau da yawa don kwatanta ta."
      },
      {
        "term": "Action d’amélioration",
        "definition": "Canji mai daidaito kuma na zahiri, da aka zaɓa a ƙarshen bita kuma aka danƙa wa wani, don aiwatarwa a zagaye na gaba — misali « aika rahoto kowace Juma'a kafin tsakar rana »."
      },
      {
        "term": "Feedback",
        "definition": "Bayanin da aka bayar kan wani aiki ko yanayi don taimakawa wajen ingantawa. Kyakkyawan feedback yana mai da hankali kan gaskiya da yanayi, ba kan mutum ba."
      },
      {
        "term": "Climat de confiance",
        "definition": "Yanayin da kowa ke da ƙarfin halin yin magana da gaskiya kan abin da bai yi aiki ba ba tare da tsoron a zarge shi ba. Shi ne sharaɗi mai muhimmanci don bita ta zama mai amfani."
      },
      {
        "term": "Boucle d’apprentissage",
        "definition": "Zagaye da aka maimaita inda muke aiki, muna lura da sakamako, muna ɗauko darussa, muna gyarawa, sannan muna sake farawa. Shi ne tushen aikin ingantawa mai dorewa."
      }
    ]
  }
};
