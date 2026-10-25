import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is2 (Comment une IA apprend)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson2: Record<Language, LessonContent> = {
  "fr": {
    "id": "is2",
    "lessonNumber": 2,
    "title": "Comment une IA apprend — des exemples, pas des règles",
    "objective": "À la fin de cette leçon, vous saurez expliquer comment une IA apprend. Vous pourrez décrire, avec vos propres mots, ses trois étapes : des exemples accompagnés de la bonne réponse, un entraînement pendant lequel la machine trouve seule ses repères, puis une prédiction de la réponse la plus probable. Vous comprendrez pourquoi la qualité des exemples décide de la qualité des réponses, et pourquoi l’IA est souvent moins bonne dans nos langues.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Ni cerveau, ni règles écrites : l’IA apprend par l’exemple",
        "body": "Beaucoup de gens imaginent que l’IA a un cerveau, comme nous. D’autres pensent qu’un programmeur lui a tout écrit, règle par règle : « si c’est rond et violet, c’est un oignon ». Les deux idées sont fausses. Une IA n’a ni pensée ni conscience, et personne ne pourrait écrire à l’avance toutes les règles qui permettent de reconnaître un oignon sous tous les angles et sous toutes les lumières.\n\nPensez à la façon dont vous avez appris vous-même. Personne ne vous a donné la définition d’un oignon. Enfant, vous en avez vu des dizaines, au marché, à la cuisine, et quelqu’un vous a dit « ça, c’est un oignon ». Une vendeuse du marché Dantokpa, à Cotonou (Bénin), reconnaît un ananas bien mûr d’un seul coup d’œil, mais elle aurait du mal à écrire la règle exacte : elle a appris par l’exemple, à force d’en voir passer entre ses mains.\n\nL’IA apprend un peu de la même façon, avec une grande différence : pour partir de rien, il lui faut énormément d’exemples, chacun accompagné de la bonne réponse. On lui montre des milliers de photos d’oignons, chacune marquée « oignon », et des milliers de photos de tomates, marquées « tomate ». Cette période où la machine étudie ses exemples s’appelle l’entraînement. Dit autrement : l’entraînement, c’est l’école de l’IA."
      },
      {
        "title": "Elle trouve seule ses propres repères",
        "body": "Pendant l’entraînement, personne ne dit à la machine : « regarde la couleur » ou « regarde la forme ». Elle compare les exemples, encore et encore, et repère toute seule ce qui distingue un oignon d’une tomate : la teinte, la peau brillante ou sèche, la forme, la petite tige. Ce sont des régularités, c’est-à-dire des habitudes qu’elle a remarquées, et non des règles écrites par quelqu’un.\n\nC’est un peu comme un apprenti dans un atelier de couture à Bamako (Mali). Au début, il ne sait pas distinguer un bon bazin d’un tissu de moindre qualité. Après des mois à toucher des centaines de pièces, en entendant le maître dire « celui-ci est bon, celui-là non », il sent la différence sous ses doigts. Si on lui demande d’expliquer, il cherche ses mots : son savoir est fait de repères accumulés, pas d’une liste de règles.\n\nIl y a une conséquence importante : les repères de la machine ne sont pas toujours ceux que nous aurions choisis. Si toutes les photos d’oignons ont été prises sur une table bleue et toutes les tomates sur une table blanche, l’IA peut très bien retenir que « table bleue = oignon ». Elle ne comprend pas ce qu’est un légume ; elle retient ce qui revient dans ses exemples. C’est pour cela qu’on garde le même fond et la même lumière pour toutes les catégories quand on l’entraîne."
      },
      {
        "title": "Elle prédit la réponse la plus probable",
        "body": "Une fois entraînée, on montre à la machine une photo qu’elle n’a jamais vue. Elle ne « sait » pas ce que c’est. Elle compare la photo à ses repères et calcule la réponse la plus probable : par exemple « oignon », avec une forte confiance. Cette réponse s’appelle une prédiction. C’est le deuxième des trois verbes vus dans la Leçon 1 : reconnaître, prédire, produire.\n\nLes assistants comme ChatGPT, Gemini ou Claude suivent le même principe. Ils ont été entraînés sur d’énormes quantités de textes. Quand ils vous répondent, ils prédisent la suite. Prenez la phrase « Ce soir, nous mangeons du… ». Tô ? Riz ? Pain ? L’assistant choisit la suite la plus probable, puis il recommence pour le mot suivant : une réponse entière se construit ainsi. Le clavier de votre téléphone fait la même chose en plus petit : une étudiante de Lomé (Togo) qui écrit souvent « akoumé » dans ses messages finira par se le voir proposer. Simplification assumée : en réalité, un assistant prédit par petits morceaux de mots plutôt que par mots entiers ; un cours plus avancé de la plateforme le détaille.\n\nRetenez surtout ceci : une prédiction n’est pas une vérité. La machine répond toujours quelque chose, même quand elle n’a jamais rien vu de pareil. Une mini-IA qui ne connaît que « oignon » et « tomate » répondra « oignon » ou « tomate » si on lui montre une pomme de terre : elle n’a pas de case « je ne sais pas ». Un assistant fait de même : il produit toujours une suite plausible, parfois fausse, et parfois avec beaucoup d’assurance. Nous y reviendrons dans la leçon sur les limites de l’IA."
      },
      {
        "title": "La qualité dépend des exemples",
        "body": "Une IA ne vaut que ce que valent ses exemples. Peu d’exemples, ou de mauvais exemples, donnent de mauvaises prédictions. C’est comme un élève qui n’aurait révisé que la moitié du programme : il répondra quand même à toutes les questions de l’examen, mais il se trompera souvent sur la partie qu’il n’a jamais vue. Une application de diagnostic des plantes entraînée surtout sur des feuilles de cultures d’autres continents reconnaîtra mal une maladie du manioc dans un champ de Côte d’Ivoire.\n\nC’est aussi pour cela que l’IA est souvent moins bonne dans nos langues. Elle a vu beaucoup moins de textes en wolof, en zarma, en lingala ou en fon qu’en français ou en anglais. Ces langues ne sont ni « faibles » ni « trop difficiles » : ce sont les exemples écrits qui manquent en ligne. Quand vous demandez une traduction en wolof ou en haoussa, considérez le résultat comme un premier jet, à faire relire par une personne qui parle la langue.\n\nComprendre cela change votre façon d’utiliser l’IA. Vous ne la croyez plus sur parole, et vous ne la rejetez pas en bloc non plus. Vous vous demandez : sur quels exemples a-t-elle pu apprendre ? A-t-elle vu des cas comme le mien ? Ce réflexe simple vous servira dans toutes les leçons suivantes, en particulier dans celle consacrée aux limites de l’IA."
      }
    ],
    "example": {
      "title": "Moussa entraîne sa propre mini-IA à Thiès (Sénégal)",
      "challenge": "Moussa, 21 ans, est étudiant en licence à l’université de Thiès, au Sénégal. Il veut devenir conseiller agricole ; sa famille cultive du mil et de l’oignon dans la zone des Niayes. Un soir, sa petite sœur Fatou lui demande comment le clavier de son téléphone « devine » ses mots. Moussa ne sait pas répondre. Pour lui, soit c’est magique, soit quelqu’un a tout programmé. Or, sans comprendre, on croit l’IA sur parole, ou on la rejette en bloc.",
      "solution": "En salle informatique, Moussa ouvre Teachable Machine, un outil gratuit de Google, dans le navigateur Chrome, sans créer de compte. Il choisit un projet d’images, nomme la première catégorie « Oignon », allume la webcam et maintient le bouton d’enregistrement en tournant un oignon violet devant la caméra : des dizaines de photos s’ajoutent, de face, de côté, de près. Même geste pour une deuxième catégorie, « Tomate », avec le même fond et la même lumière. Il lance l’entraînement, attend la fin en laissant l’onglet ouvert, puis passe à l’aperçu : devant l’oignon, la barre « Oignon » se remplit presque entièrement ; devant la tomate, la barre « Tomate » prend le dessus. Si peu d’exemples suffisent parce que l’outil part d’une IA qui a déjà vu énormément d’images : Moussa lui apprend seulement la différence entre ses deux légumes. Enfin, il lui montre une pomme de terre : elle répond « oignon » ou « tomate », jamais « pomme de terre », car elle ne connaît que ce qu’on lui a montré.",
      "impact": "Moussa a entraîné sa propre mini-IA sans écrire une seule ligne de code, et il a vu de ses yeux les trois étapes : exemples, entraînement, prédiction. Le soir même, il explique à Fatou avec ses mots : « Le clavier a appris avec énormément de messages. Maintenant, il devine ton prochain mot. » Fatou essaie aussitôt sur son téléphone. Et Moussa retient la leçon de la pomme de terre : une IA répond toujours, même quand elle ne sait pas."
    },
    "practice": {
      "title": "Jouez au jeu de la prédiction",
      "instructions": [
        "Dans l’application de notes de votre téléphone, tapez « Demain, je », puis touchez dix fois de suite le mot que le clavier propose au milieu de la barre de suggestions (sa place peut varier selon les claviers). Lisez la phrase obtenue : elle montre ce que votre clavier a appris de vos propres messages.",
        "Écrivez en deux phrases comment une IA apprend, puis expliquez-le à quelqu’un de votre entourage. Pour vous entraîner, copiez cette consigne dans un assistant gratuit (ChatGPT, Gemini ou Claude), en remplaçant les crochets : « Tu es un professeur patient. Je suis [votre métier ou vos études] à [votre ville], et je découvre l’intelligence artificielle. Explique-moi comment une IA apprend, avec un exemple pris au marché de ma ville. Ensuite, pose-moi 3 questions, une par une, pour vérifier que j’ai compris. Réponds avec des mots simples, comme à un élève de 12 ans. »",
        "Bonus, si vous avez un ordinateur avec webcam : ouvrez Teachable Machine dans Chrome et entraînez une mini-IA à distinguer deux objets de chez vous (une tasse et une cuillère, par exemple), avec le même fond et la même lumière. Testez-la, puis montrez-lui un troisième objet qu’elle n’a jamais vu."
      ],
      "observation": "Votre phrase est faite de vos mots les plus fréquents : le clavier ne comprend pas ce que vous voulez dire, il prédit le mot le plus probable d’après ce qu’il a appris. Avec le bonus, vous constatez qu’une IA ne reconnaît que ce qu’on lui a montré, et qu’elle répond quand même face à un objet inconnu. Si vous savez l’expliquer en deux phrases à quelqu’un, la promesse de la leçon est tenue."
    },
    "quiz": [
      {
        "question": "Comment une IA apprend-elle à reconnaître un oignon ?",
        "options": [
          { "key": "A", "text": "Un programmeur écrit la définition d’un oignon" },
          { "key": "B", "text": "Elle cherche « oignon » sur Internet à chaque fois" },
          { "key": "C", "text": "On lui montre beaucoup de photos marquées « oignon »" },
          { "key": "D", "text": "Elle le devine sans aucun exemple" }
        ],
        "answer": "C",
        "explanation": "Une IA apprend à partir d’exemples accompagnés de la bonne réponse : des photos d’oignons marquées « oignon ». Personne ne lui écrit de définition, et elle ne va pas chercher la réponse sur Internet ; sans exemples, elle n’apprendrait rien."
      },
      {
        "question": "Comment appelle-t-on la période où l’IA étudie ses exemples ?",
        "options": [
          { "key": "A", "text": "L’entraînement" },
          { "key": "B", "text": "La prédiction" },
          { "key": "C", "text": "La traduction" },
          { "key": "D", "text": "La sauvegarde" }
        ],
        "answer": "A",
        "explanation": "L’entraînement, c’est l’école de l’IA : la période où elle compare ses exemples et trouve ses propres repères. La prédiction vient après, quand on lui présente un cas nouveau."
      },
      {
        "question": "Quand un assistant comme ChatGPT vous répond, que fait-il ?",
        "options": [
          { "key": "A", "text": "Il recopie une page web" },
          { "key": "B", "text": "Il demande à un humain" },
          { "key": "C", "text": "Il consulte une liste de règles" },
          { "key": "D", "text": "Il prédit la suite la plus probable" }
        ],
        "answer": "D",
        "explanation": "Entraîné sur d’énormes quantités de textes, l’assistant prédit la suite la plus probable, morceau après morceau, comme dans « Ce soir, nous mangeons du… ». C’est pour cela que sa réponse est plausible, mais pas forcément vraie."
      },
      {
        "question": "La mini-IA de Moussa ne connaît que « oignon » et « tomate ». Il lui montre une pomme de terre. Que répond-elle ?",
        "options": [
          { "key": "A", "text": "« Oignon » ou « tomate »" },
          { "key": "B", "text": "« Pomme de terre »" },
          { "key": "C", "text": "« Je ne sais pas »" },
          { "key": "D", "text": "Rien du tout" }
        ],
        "answer": "A",
        "explanation": "Elle ne connaît que ce qu’on lui a montré et n’a pas de case « je ne sais pas ». Elle répond donc quand même avec l’une de ses deux catégories, parfois avec assurance. Un assistant, lui aussi, produit toujours une réponse, même quand il se trompe."
      },
      {
        "question": "Pourquoi une IA est-elle souvent moins bonne en zarma qu’en français ?",
        "options": [
          { "key": "A", "text": "Le zarma est trop difficile" },
          { "key": "B", "text": "Elle a vu beaucoup moins d’exemples en zarma" },
          { "key": "C", "text": "Elle refuse les langues africaines" },
          { "key": "D", "text": "Le zarma ne s’écrit pas" }
        ],
        "answer": "B",
        "explanation": "La qualité d’une IA dépend de ses exemples. Elle a vu beaucoup moins de textes en zarma qu’en français : ce n’est pas la langue qui est « difficile », ce sont les données écrites qui manquent. Le zarma s’écrit, et l’IA ne refuse aucune langue."
      }
    ],
    "reflection": "Pensez à une application que vous utilisez chaque jour (clavier, traduction, galerie photos) : sur quels exemples a-t-elle pu apprendre, et dans quelle situation de votre quotidien risque-t-elle de se tromper parce qu’elle n’a pas vu assez de cas comme le vôtre ?",
    "glossary": [
      {
        "term": "Exemple étiqueté",
        "definition": "Un exemple montré à l’IA avec la bonne réponse, comme une photo d’oignon marquée « oignon ». C’est la matière première de l’apprentissage, comme les exercices corrigés d’un élève."
      },
      {
        "term": "Entraînement",
        "definition": "La période où la machine étudie ses exemples pour en tirer ses repères. C’est l’école de l’IA : elle a lieu avant que l’outil soit utilisé."
      },
      {
        "term": "Régularité",
        "definition": "Une habitude que la machine remarque seule en comparant ses exemples : une couleur, une forme, un mot qui revient souvent. Ce n’est pas une règle écrite par quelqu’un."
      },
      {
        "term": "Prédiction",
        "definition": "La réponse que l’IA calcule face à un cas nouveau : la plus probable d’après ses exemples, pas forcément la vraie. Un assistant prédit ainsi la suite d’un texte."
      },
      {
        "term": "Données",
        "definition": "L’ensemble des exemples dont une IA apprend : photos, textes, sons. Leur quantité et leur qualité décident de la qualité des réponses ; c’est pourquoi l’IA est souvent moins bonne dans les langues peu présentes en ligne."
      },
      {
        "term": "Teachable Machine",
        "definition": "Un outil gratuit de Google, utilisable dans le navigateur, qui permet d’entraîner une mini-IA avec ses propres exemples, sans programmer. Il part d’une IA déjà entraînée sur énormément d’images."
      }
    ]
  },
  "en": {
    "id": "is2",
    "lessonNumber": 2,
    "title": "How an AI learns — examples, not rules",
    "objective": "By the end of this lesson, you will be able to explain how an AI learns. You will be able to describe, in your own words, its three steps: examples that come with the right answer, a training period during which the machine finds its own clues, then a prediction of the most likely answer. You will understand why the quality of the examples decides the quality of the answers, and why AI is often weaker in our languages.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "No brain, no written rules: AI learns from examples",
        "body": "Many people imagine that AI has a brain, like us. Others think a programmer wrote everything for it, rule by rule: “if it is round and purple, it is an onion.” Both ideas are wrong. An AI has neither thoughts nor consciousness, and nobody could write in advance all the rules needed to recognise an onion from every angle and in every kind of light.\n\nThink about how you learned yourself. Nobody gave you the definition of an onion. As a child, you saw dozens of them, at the market and in the kitchen, and someone told you “this is an onion.” A trader at the Dantokpa market in Cotonou (Benin) can spot a ripe pineapple at a glance, but she would struggle to write down the exact rule: she learned by example, from the many that have passed through her hands.\n\nAI learns in a somewhat similar way, with one big difference: to start from nothing, it needs a huge number of examples, each one paired with the right answer. It is shown thousands of photos of onions, each labelled “onion,” and thousands of photos of tomatoes, labelled “tomato.” This period when the machine studies its examples is called training. In other words: training is the AI’s school."
      },
      {
        "title": "It finds its own clues",
        "body": "During training, nobody tells the machine “look at the colour” or “look at the shape.” It compares the examples, again and again, and works out on its own what separates an onion from a tomato: the shade, shiny or dry skin, the shape, the little stem. These are regularities, that is, habits it has noticed, not rules written by someone.\n\nIt is a bit like an apprentice in a tailoring workshop in Bamako (Mali). At first, he cannot tell good bazin from lower-quality cloth. After months of handling hundreds of pieces while hearing the master say “this one is good, that one is not,” he feels the difference under his fingers. Ask him to explain and he searches for words: his knowledge is made of accumulated clues, not a list of rules.\n\nThere is an important consequence: the machine’s clues are not always the ones we would have chosen. If every onion photo was taken on a blue table and every tomato on a white table, the AI may well learn that “blue table = onion.” It does not understand what a vegetable is; it keeps whatever repeats in its examples. That is why you keep the same background and the same light for every category when you train it."
      },
      {
        "title": "It predicts the most likely answer",
        "body": "Once trained, the machine is shown a photo it has never seen. It does not “know” what it is. It compares the photo with its clues and calculates the most likely answer: for example “onion,” with high confidence. This answer is called a prediction. It is the second of the three verbs from Lesson 1: recognise, predict, produce.\n\nAssistants such as ChatGPT, Gemini or Claude follow the same principle. They were trained on enormous amounts of text. When they answer you, they predict what comes next. Take the sentence “Tonight, we are eating…”. Tô? Rice? Bread? The assistant picks the most likely continuation, then starts again for the next word: a whole answer is built this way. Your phone keyboard does the same thing on a smaller scale: a student in Lomé (Togo) who often types “akoumé” in her messages will end up seeing it suggested. A deliberate simplification: in reality, an assistant predicts small pieces of words rather than whole words; a more advanced course on the platform goes into detail.\n\nAbove all, remember this: a prediction is not the truth. The machine always answers something, even when it has never seen anything like it. A mini-AI that only knows “onion” and “tomato” will answer “onion” or “tomato” if you show it a potato: it has no “I don’t know” box. An assistant does the same: it always produces a plausible continuation, sometimes wrong, and sometimes with great confidence. We will come back to this in the lesson on the limits of AI."
      },
      {
        "title": "Quality depends on the examples",
        "body": "An AI is only as good as its examples. Few examples, or bad examples, lead to bad predictions. It is like a pupil who revised only half the syllabus: he will still answer every exam question, but he will often be wrong on the part he never saw. A plant-diagnosis app trained mostly on leaves from crops on other continents will struggle to recognise a cassava disease in a field in Côte d’Ivoire.\n\nThis is also why AI is often weaker in our languages. It has seen far fewer texts in Wolof, Zarma, Lingala or Fon than in French or English. These languages are neither “weak” nor “too difficult”: it is the written examples that are missing online. When you ask for a translation into Wolof or Hausa, treat the result as a first draft, to be checked by someone who speaks the language.\n\nUnderstanding this changes the way you use AI. You no longer take it at its word, and you do not reject it outright either. You ask yourself: what examples could it have learned from? Has it seen cases like mine? This simple habit will help you in every lesson that follows, especially the one about the limits of AI."
      }
    ],
    "example": {
      "title": "Moussa trains his own mini-AI in Thiès (Senegal)",
      "challenge": "Moussa, 21, is an undergraduate student at the University of Thiès, in Senegal. He wants to become an agricultural adviser; his family grows millet and onions in the Niayes area. One evening, his little sister Fatou asks him how her phone keyboard “guesses” her words. Moussa cannot answer. To him, either it is magic, or someone programmed everything. Yet without understanding, people either take AI at its word or reject it outright.",
      "solution": "In the computer room, Moussa opens Teachable Machine, a free Google tool, in the Chrome browser, without creating an account. He picks an image project, names the first category “Onion,” turns on the webcam and holds down the record button while turning a purple onion in front of the camera: dozens of photos are added, from the front, from the side, up close. He does the same for a second category, “Tomato,” with the same background and the same light. He starts the training, waits for it to finish with the tab left open, then moves to the preview: in front of the onion, the “Onion” bar fills almost completely; in front of the tomato, the “Tomato” bar takes over. So few examples are enough because the tool starts from an AI that has already seen a huge number of images: Moussa only teaches it the difference between his two vegetables. Finally, he shows it a potato: it answers “onion” or “tomato,” never “potato,” because it only knows what it has been shown.",
      "impact": "Moussa trained his own mini-AI without writing a single line of code, and he saw the three steps with his own eyes: examples, training, prediction. That same evening, he explains it to Fatou in his own words: “The keyboard learned from a huge number of messages. Now it guesses your next word.” Fatou tries it straight away on her phone. And Moussa remembers the lesson of the potato: an AI always answers, even when it does not know."
    },
    "practice": {
      "title": "Play the prediction game",
      "instructions": [
        "In your phone’s notes app, type “Tomorrow, I”, then tap ten times in a row the word your keyboard suggests in the middle of the suggestion bar (its position may vary between keyboards). Read the sentence you get: it shows what your keyboard has learned from your own messages.",
        "Write in two sentences how an AI learns, then explain it to someone around you. To practise, copy this prompt into a free assistant (ChatGPT, Gemini or Claude), replacing the brackets: “You are a patient teacher. I am [your job or your studies] in [your city], and I am discovering artificial intelligence. Explain to me how an AI learns, with an example taken from the market in my city. Then ask me 3 questions, one at a time, to check that I have understood. Answer in simple words, as if to a 12-year-old pupil.”",
        "Bonus, if you have a computer with a webcam: open Teachable Machine in Chrome and train a mini-AI to tell apart two objects from your home (a cup and a spoon, for example), with the same background and the same light. Test it, then show it a third object it has never seen."
      ],
      "observation": "Your sentence is made of your most frequent words: the keyboard does not understand what you mean, it predicts the most likely word based on what it has learned. With the bonus, you see that an AI only recognises what it has been shown, and that it still answers when faced with an unknown object. If you can explain it to someone in two sentences, the promise of the lesson is kept."
    },
    "quiz": [
      {
        "question": "How does an AI learn to recognise an onion?",
        "options": [
          { "key": "A", "text": "A programmer writes the definition of an onion" },
          { "key": "B", "text": "It searches for “onion” on the Internet every time" },
          { "key": "C", "text": "It is shown many photos labelled “onion”" },
          { "key": "D", "text": "It guesses without any example" }
        ],
        "answer": "C",
        "explanation": "An AI learns from examples that come with the right answer: photos of onions labelled “onion.” Nobody writes it a definition, and it does not look the answer up online; without examples, it would learn nothing."
      },
      {
        "question": "What do we call the period when the AI studies its examples?",
        "options": [
          { "key": "A", "text": "Training" },
          { "key": "B", "text": "Prediction" },
          { "key": "C", "text": "Translation" },
          { "key": "D", "text": "Saving" }
        ],
        "answer": "A",
        "explanation": "Training is the AI’s school: the period when it compares its examples and finds its own clues. Prediction comes afterwards, when it is shown a new case."
      },
      {
        "question": "When an assistant like ChatGPT answers you, what is it doing?",
        "options": [
          { "key": "A", "text": "It copies a web page" },
          { "key": "B", "text": "It asks a human" },
          { "key": "C", "text": "It checks a list of rules" },
          { "key": "D", "text": "It predicts the most likely continuation" }
        ],
        "answer": "D",
        "explanation": "Trained on enormous amounts of text, the assistant predicts the most likely continuation, piece by piece, as in “Tonight, we are eating…”. That is why its answer sounds plausible, but is not necessarily true."
      },
      {
        "question": "Moussa’s mini-AI only knows “onion” and “tomato”. He shows it a potato. What does it answer?",
        "options": [
          { "key": "A", "text": "“Onion” or “tomato”" },
          { "key": "B", "text": "“Potato”" },
          { "key": "C", "text": "“I don’t know”" },
          { "key": "D", "text": "Nothing at all" }
        ],
        "answer": "A",
        "explanation": "It only knows what it has been shown and has no “I don’t know” box. So it still answers with one of its two categories, sometimes confidently. An assistant, too, always produces an answer, even when it is wrong."
      },
      {
        "question": "Why is an AI often weaker in Zarma than in French?",
        "options": [
          { "key": "A", "text": "Zarma is too difficult" },
          { "key": "B", "text": "It has seen far fewer examples in Zarma" },
          { "key": "C", "text": "It refuses African languages" },
          { "key": "D", "text": "Zarma is not written" }
        ],
        "answer": "B",
        "explanation": "An AI’s quality depends on its examples. It has seen far fewer texts in Zarma than in French: the language is not “difficult,” it is the written data that is missing. Zarma is written, and AI does not refuse any language."
      }
    ],
    "reflection": "Think of an app you use every day (keyboard, translation, photo gallery): what examples could it have learned from, and in which situation of your daily life might it get things wrong because it has not seen enough cases like yours?",
    "glossary": [
      {
        "term": "Labelled example",
        "definition": "An example shown to the AI together with the right answer, such as a photo of an onion labelled “onion.” It is the raw material of learning, like a pupil’s corrected exercises."
      },
      {
        "term": "Training",
        "definition": "The period when the machine studies its examples to draw its clues from them. It is the AI’s school: it happens before the tool is used."
      },
      {
        "term": "Regularity",
        "definition": "A habit the machine notices on its own by comparing its examples: a colour, a shape, a word that often comes back. It is not a rule written by someone."
      },
      {
        "term": "Prediction",
        "definition": "The answer the AI calculates when faced with a new case: the most likely one according to its examples, not necessarily the true one. This is how an assistant predicts the rest of a text."
      },
      {
        "term": "Data",
        "definition": "All the examples an AI learns from: photos, texts, sounds. Their quantity and quality decide the quality of the answers; that is why AI is often weaker in languages that are rarely found online."
      },
      {
        "term": "Teachable Machine",
        "definition": "A free Google tool, used in the browser, that lets you train a mini-AI with your own examples, without programming. It starts from an AI already trained on a huge number of images."
      }
    ]
  },
  "ha": {
    "id": "is2",
    "lessonNumber": 2,
    "title": "Yadda AI Ke Koyo — Da Misalai, Ba Da Dokoki Ba",
    "objective": "A karshen wannan darasi, za ku iya bayyana yadda AI (basirar na’ura) ke koyo. Za ku iya fadin matakansa uku da kalmominku: misalai tare da amsar da ta dace, horo inda na’urar ke gano alamominta da kanta, sannan hasashen amsar da ta fi yiwuwa. Za ku fahimci dalilin da ya sa ingancin misalai ke tantance ingancin amsoshi, da kuma dalilin da ya sa AI sau da yawa ba ya da kyau a harsunanmu.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Ba kwakwalwa ba, ba dokokin da aka rubuta ba: AI yana koyo ta misali",
        "body": "Mutane da yawa suna tunanin cewa AI yana da kwakwalwa kamar tamu. Wasu kuma suna ganin cewa wani mai shirya kwamfuta (programmer) ne ya rubuta masa komai, doka bayan doka: « idan abu zagaye ne kuma ja ne, albasa ce ». Duk wadannan ra’ayoyi biyu ba daidai ba ne. AI ba shi da tunani ko sani, kuma babu wanda zai iya rubuta tun da wuri duk dokokin da ake bukata don gane albasa ta kowane gefe da kuma a kowane irin haske.\n\nKu yi tunanin yadda ku da kanku kuka koya. Babu wanda ya ba ku ma’anar albasa a rubuce. Tun kuna yara, kun ga albasa da yawa a kasuwa da kuma a kicin, kuma wani ya ce muku « wannan albasa ce ». Wata mai sayar da kaya a kasuwar Dantokpa da ke Cotonou (Benin) tana gane abarba da ta nuna da kallo daya, amma zai yi mata wuya ta rubuta ainihin dokar: ta koya ne ta misali, saboda yawan abarbar da ta wuce ta hannunta.\n\nAI yana koyo kusan haka, amma da babban bambanci: idan zai fara daga sifili, yana bukatar misalai masu yawan gaske, kowanne tare da amsar da ta dace. Ana nuna masa dubban hotunan albasa, kowanne da alamar « albasa », da dubban hotunan tumatir masu alamar « tumatir ». Wannan lokacin da na’urar ke nazarin misalanta ana kiransa horo. A takaice: horo shi ne makarantar AI."
      },
      {
        "title": "Yana gano alamominsa da kansa",
        "body": "A lokacin horo, babu wanda ke ce wa na’urar: « duba launi » ko « duba siffa ». Tana kwatanta misalai, akai-akai, kuma tana gano da kanta abin da ya bambanta albasa da tumatir: launi, fata mai sheki ko busasshiya, siffa, karamin kara. Wadannan al’adu ne masu maimaituwa, wato dabi’un da ta lura da su, ba dokokin da wani ya rubuta ba.\n\nYana kama da almajirin da ke koyon aiki a shagon dinki a Bamako (Mali). Da farko, bai iya bambanta bazin mai kyau da yadi mara inganci ba. Bayan watanni yana taba daruruwan yaduka, yana jin maigidansa yana cewa « wannan mai kyau ne, wancan ba haka ba », sai ya fara jin bambancin a yatsunsa. Idan aka tambaye shi ya bayyana, sai ya rasa kalmomi: iliminsa tarin alamomi ne, ba jerin dokoki ba.\n\nAkwai wani muhimmin sakamako: alamomin na’urar ba koyaushe suke zama wadanda mu za mu zaba ba. Idan an dauki duk hotunan albasa a kan teburi shudi, duk na tumatir kuma a kan teburi fari, AI zai iya koyon cewa « teburi shudi = albasa ». Ba ya fahimtar mene ne kayan lambu; yana rike abin da ke maimaituwa a cikin misalansa. Shi ya sa ake amfani da bango daya da haske daya ga dukkan rukunoni yayin horar da shi."
      },
      {
        "title": "Yana hasashen amsar da ta fi yiwuwa",
        "body": "Bayan horo, ana nuna wa na’urar hoton da ba ta taba gani ba. Ba ta « sani » ba mene ne. Tana kwatanta hoton da alamominta, sannan ta lissafa amsar da ta fi yiwuwa: misali « albasa », da kwarin gwiwa sosai. Wannan amsa ana kiranta hasashe. Ita ce ta biyu cikin kalmomin aiki uku da muka gani a Darasi 1: ganewa, hasashe, samarwa.\n\nMataimakan AI kamar ChatGPT, Gemini ko Claude suna bin wannan ka’ida. An horar da su da rubuce-rubuce masu yawan gaske. Idan suna ba ku amsa, suna hasashen abin da zai biyo baya. Ku dauki jumlar « Yau da dare, za mu ci… ». Tuwo? Shinkafa? Burodi? Mataimakin yana zaben abin da ya fi yiwuwa, sannan ya sake farawa don kalma ta gaba: haka cikakkiyar amsa ke ginuwa. Madannin rubutu (keyboard) na wayarku yana yin haka a karami: wata daliba a Lomé (Togo) da ke yawan rubuta « akoumé » a sakonninta, a karshe madanninta zai rika ba ta wannan kalma. Mun saukaka bayani da gangan: a gaskiya, mataimaki yana hasashe ne da kananan gutsuttsuran kalmomi, ba da cikakkun kalmomi ba; wani kwas mai zurfi a dandalin yana bayani dalla-dalla.\n\nKu rike wannan musamman: hasashe ba gaskiya ba ne. Na’urar koyaushe tana ba da wata amsa, ko da ba ta taba ganin irin abin ba. Karamin AI da ya san « albasa » da « tumatir » kawai, zai ce « albasa » ko « tumatir » idan aka nuna masa dankalin turawa: ba shi da akwatin « ban sani ba ». Mataimaki ma haka yake: koyaushe yana samar da ci gaba mai kama da gaskiya, wani lokaci kuskure, kuma wani lokaci da tabbaci sosai. Za mu dawo kan wannan a darasi kan iyakokin AI."
      },
      {
        "title": "Inganci ya dogara da misalai",
        "body": "AI ba ya wuce darajar misalansa. Misalai kadan, ko misalai marasa kyau, suna haifar da hasashe mara kyau. Kamar dalibin da ya yi bitar rabin manhajar karatu kawai: zai amsa duk tambayoyin jarrabawa, amma zai yi kuskure sau da yawa a bangaren da bai taba gani ba. Manhajar gano cututtukan shuka da aka horar galibi da ganyen amfanin gona na wasu nahiyoyi, ba za ta gane cutar rogo da kyau ba a wata gona a Côte d’Ivoire.\n\nShi ya sa kuma AI sau da yawa ba ya da kyau a harsunanmu. Ya ga rubutu kadan sosai a Wolof, Zabarmanci, Lingala ko Fon idan aka kwatanta da Faransanci ko Turanci. Wadannan harsuna ba « raunana » ba ne, kuma ba su « fi wuya » ba: misalan rubutu ne suka yi karanci a yanar gizo. Idan kun nemi fassara zuwa Wolof ko Hausa, ku dauki sakamakon a matsayin daftarin farko, wanda wani mai magana da harshen zai duba.\n\nFahimtar wannan tana canza yadda kuke amfani da AI. Ba za ku sake yarda da shi ido rufe ba, kuma ba za ku ki shi gaba daya ba. Za ku tambayi kanku: da wadanne misalai ya koya? Ya ga lamura irin nawa? Wannan dabi’a mai sauki za ta amfane ku a duk darussa masu zuwa, musamman a wanda ya shafi iyakokin AI."
      }
    ],
    "example": {
      "title": "Moussa ya horar da karamin AI nasa a Thiès (Senegal)",
      "challenge": "Moussa, mai shekara 21, dalibi ne na digiri na farko a jami’ar Thiès, kasar Senegal. Yana son zama mai ba da shawara kan noma; iyalinsa suna noman gero da albasa a yankin Niayes. Wata rana da yamma, kanwarsa Fatou ta tambaye shi yadda madannin rubutu na wayarta ke « hasashen » kalmominta. Moussa bai iya ba ta amsa ba. A ganinsa, ko dai sihiri ne, ko kuma wani ne ya shirya komai. Amma idan ba a fahimta ba, ko dai a yarda da AI ido rufe, ko a ki shi gaba daya.",
      "solution": "A dakin kwamfuta, Moussa ya bude Teachable Machine, kayan aiki kyauta na Google, a cikin burauzar Chrome, ba tare da bude asusu ba. Ya zabi aikin hotuna, ya sa wa rukunin farko suna « Albasa », ya kunna kyamarar kwamfuta (webcam), sannan ya rike maballin daukar hoto yana juya jar albasa a gaban kyamara: hotuna da dama suna karuwa, ta gaba, ta gefe, daga kusa. Ya maimaita haka da rukuni na biyu, « Tumatir », da bango daya da haske daya. Ya kaddamar da horo, ya jira har ya kare ba tare da rufe shafin ba, sannan ya je gwaji: a gaban albasa, sandar « Albasa » ta kusan cika; a gaban tumatir, sandar « Tumatir » ta yi rinjaye. Misalai kadan sun isa saboda kayan aikin ya fara ne daga AI da ya riga ya ga hotuna masu yawan gaske: Moussa yana koya masa bambancin kayan lambunsa biyu kawai. A karshe, ya nuna masa dankalin turawa: ya ce « albasa » ko « tumatir », ba « dankalin turawa » ba, domin ya san abin da aka nuna masa kawai.",
      "impact": "Moussa ya horar da karamin AI nasa ba tare da rubuta ko layi daya na code ba, kuma ya ga matakai uku da idonsa: misalai, horo, hasashe. A wannan dare, ya yi wa Fatou bayani da kalmominsa: « Madannin rubutu ya koya da sakonni masu yawan gaske. Yanzu yana hasashen kalmarki ta gaba. » Nan take Fatou ta gwada a wayarta. Moussa kuma ya rike darasin dankalin turawa: AI koyaushe yana amsawa, ko da bai sani ba."
    },
    "practice": {
      "title": "Ku yi wasan hasashe",
      "instructions": [
        "A manhajar rubutu (notes) ta wayarku, ku rubuta « Gobe, zan », sannan ku taba kalmar da madannin rubutu ke bayarwa a tsakiyar layin shawarwari sau goma a jere (wurinta na iya bambanta bisa ga irin madanni). Ku karanta jumlar da ta fito: tana nuna abin da madannin rubutunku ya koya daga sakonninku.",
        "Ku rubuta a jumla biyu yadda AI ke koyo, sannan ku bayyana wa wani na kusa da ku. Don yin atisaye, ku kwafi wannan umurni a cikin mataimaki kyauta (ChatGPT, Gemini ko Claude), ku maye gurbin abubuwan da ke cikin baka: « Kai malami ne mai hakuri. Ni [sana’arku ko karatunku] ne a [garinku], kuma ina fara sanin basirar na’ura. Bayyana mini yadda AI ke koyo, da misali daga kasuwar garina. Bayan haka, ka yi mini tambayoyi 3, daya bayan daya, don tabbatar da na fahimta. Ka amsa da kalmomi masu sauki, kamar ga dalibi mai shekara 12. »",
        "Kari, idan kuna da kwamfuta mai kyamara: ku bude Teachable Machine a Chrome ku horar da karamin AI don ya bambanta abubuwa biyu na gidanku (kofi da cokali, misali), da bango daya da haske daya. Ku gwada shi, sannan ku nuna masa abu na uku da bai taba gani ba."
      ],
      "observation": "Jumlarku ta kunshi kalmomin da kuka fi amfani da su: madannin rubutu ba ya fahimtar abin da kuke nufi, yana hasashen kalmar da ta fi yiwuwa bisa ga abin da ya koya. Da karin aikin, za ku ga cewa AI yana gane abin da aka nuna masa kawai, kuma yana amsawa duk da haka a gaban abin da bai sani ba. Idan kun iya bayyana shi wa wani a jumla biyu, alkawarin darasin ya cika."
    },
    "quiz": [
      {
        "question": "Ta yaya AI ke koyon gane albasa?",
        "options": [
          { "key": "A", "text": "Mai shirya kwamfuta ne ya rubuta ma’anar albasa" },
          { "key": "B", "text": "Yana neman « albasa » a yanar gizo kowane lokaci" },
          { "key": "C", "text": "Ana nuna masa hotuna da yawa masu alamar « albasa »" },
          { "key": "D", "text": "Yana hasashe ba tare da wani misali ba" }
        ],
        "answer": "C",
        "explanation": "AI yana koyo daga misalai tare da amsar da ta dace: hotunan albasa masu alamar « albasa ». Babu wanda ke rubuta masa ma’ana, kuma ba ya zuwa neman amsa a yanar gizo; ba tare da misalai ba, ba zai koyi komai ba."
      },
      {
        "question": "Me ake kira lokacin da AI ke nazarin misalansa?",
        "options": [
          { "key": "A", "text": "Horo" },
          { "key": "B", "text": "Hasashe" },
          { "key": "C", "text": "Fassara" },
          { "key": "D", "text": "Adanawa" }
        ],
        "answer": "A",
        "explanation": "Horo shi ne makarantar AI: lokacin da yake kwatanta misalansa yana gano alamominsa. Hasashe yana zuwa daga baya, idan aka nuna masa sabon abu."
      },
      {
        "question": "Idan mataimaki kamar ChatGPT ya ba ku amsa, me yake yi?",
        "options": [
          { "key": "A", "text": "Yana kwafar shafin yanar gizo" },
          { "key": "B", "text": "Yana tambayar wani mutum" },
          { "key": "C", "text": "Yana duba jerin dokoki" },
          { "key": "D", "text": "Yana hasashen ci gaban da ya fi yiwuwa" }
        ],
        "answer": "D",
        "explanation": "Da yake an horar da shi da rubuce-rubuce masu yawan gaske, mataimakin yana hasashen ci gaban da ya fi yiwuwa, guntu bayan guntu, kamar a « Yau da dare, za mu ci… ». Shi ya sa amsarsa take kama da gaskiya, amma ba lallai ta zama gaskiya ba."
      },
      {
        "question": "Karamin AI na Moussa ya san « albasa » da « tumatir » kawai. Ya nuna masa dankalin turawa. Me zai amsa?",
        "options": [
          { "key": "A", "text": "« Albasa » ko « tumatir »" },
          { "key": "B", "text": "« Dankalin turawa »" },
          { "key": "C", "text": "« Ban sani ba »" },
          { "key": "D", "text": "Ba komai" }
        ],
        "answer": "A",
        "explanation": "Ya san abin da aka nuna masa kawai, kuma ba shi da akwatin « ban sani ba ». Don haka yana amsawa duk da haka da daya daga cikin rukunoninsa biyu, wani lokaci da tabbaci. Mataimaki ma koyaushe yana ba da amsa, ko da yana kuskure."
      },
      {
        "question": "Me ya sa AI sau da yawa ba ya da kyau a Zabarmanci kamar a Faransanci?",
        "options": [
          { "key": "A", "text": "Zabarmanci ya fi wuya sosai" },
          { "key": "B", "text": "Ya ga misalai kadan sosai a Zabarmanci" },
          { "key": "C", "text": "Yana kin harsunan Afirka" },
          { "key": "D", "text": "Ba a rubuta Zabarmanci" }
        ],
        "answer": "B",
        "explanation": "Ingancin AI ya dogara da misalansa. Ya ga rubutu kadan sosai a Zabarmanci idan aka kwatanta da Faransanci: ba harshen ne « mai wuya » ba, bayanan rubutu ne suka yi karanci. Ana rubuta Zabarmanci, kuma AI ba ya kin kowane harshe."
      }
    ],
    "reflection": "Ku yi tunanin wata manhaja da kuke amfani da ita kowace rana (madannin rubutu, fassara, hotuna): da wadanne misalai ta iya koyo, kuma a wane yanayi na rayuwarku ta yau da kullum za ta iya yin kuskure saboda ba ta ga isassun lamura irin naku ba?",
    "glossary": [
      {
        "term": "Misali mai lakabi (Exemple étiqueté)",
        "definition": "Misalin da ake nuna wa AI tare da amsar da ta dace, kamar hoton albasa mai alamar « albasa ». Shi ne danyen kayan koyo, kamar darussan da malami ya gyara wa dalibi."
      },
      {
        "term": "Horo (Entraînement)",
        "definition": "Lokacin da na’urar ke nazarin misalanta don ta samo alamominta. Shi ne makarantar AI: yana faruwa kafin a fara amfani da kayan aikin."
      },
      {
        "term": "Al’ada mai maimaituwa (Régularité)",
        "definition": "Dabi’ar da na’urar ke lura da ita da kanta yayin kwatanta misalanta: launi, siffa, kalmar da ke yawan dawowa. Ba doka ba ce da wani ya rubuta."
      },
      {
        "term": "Hasashe (Prédiction)",
        "definition": "Amsar da AI ke lissafawa a gaban sabon abu: wadda ta fi yiwuwa bisa ga misalansa, ba lallai gaskiya ba. Haka mataimaki ke hasashen ci gaban rubutu."
      },
      {
        "term": "Bayanai (Données)",
        "definition": "Dukkan misalan da AI ke koyo daga gare su: hotuna, rubutu, sauti. Yawansu da ingancinsu ne ke tantance ingancin amsoshi; shi ya sa AI sau da yawa ba ya da kyau a harsunan da ba su da yawa a yanar gizo."
      },
      {
        "term": "Teachable Machine",
        "definition": "Kayan aiki kyauta na Google, da ake amfani da shi a burauza, wanda ke ba ku damar horar da karamin AI da misalanku, ba tare da shirya kwamfuta ba. Yana farawa ne daga AI da aka riga aka horar da hotuna masu yawan gaske."
      }
    ]
  }
};
