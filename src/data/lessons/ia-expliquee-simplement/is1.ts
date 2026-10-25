import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is1 (L'IA, vous l'utilisez déjà)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson1: Record<Language, LessonContent> = {
  "fr": {
    "id": "is1",
    "lessonNumber": 1,
    "title": "L’IA, vous l’utilisez déjà — la repérer et l’expliquer simplement",
    "objective": "À la fin de cette leçon, vous saurez repérer l’IA et l’expliquer simplement. Vous saurez dire en une phrase ce qu’est une IA : un programme qui a appris à partir d’exemples. Vous saurez classer chaque IA de votre téléphone selon son geste — reconnaître, prédire ou produire — et distinguer un programme qui suit une règle fixe, comme la calculatrice, d’un programme qui a appris.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pas un robot : un programme qui a appris",
        "body": "Quand on dit « intelligence artificielle », beaucoup de gens imaginent un robot de film, ou une machine réservée aux ingénieurs des grandes villes. C’est un malentendu. L’IA n’est pas un objet que l’on achète : c’est une façon de fabriquer des programmes. Au lieu de leur dicter chaque règle, on les fait apprendre. Le clavier de votre téléphone en est la preuve : vous tapez « Je passe au », il propose « marché ». Personne n’a écrit à la main la liste de toutes les phrases possibles ; le clavier a appris à partir d’énormément de textes.\n\nPensez à un apprenti tailleur dans un atelier d’Abidjan. Il regarde son patron couper et coudre, encore et encore. Un jour, il coud seul une chemise qu’il n’a jamais vue. Personne ne lui a dicté chaque geste : il a tiré ses propres repères de centaines d’exemples. Une IA fait la même chose avec des données — des textes, des photos, des sons. On lui montre beaucoup de cas, et elle en tire ses repères.\n\nUn programme classique, lui, obéit à des règles écrites par des programmeurs. Il fait exactement ce qu’on lui a dit, ni plus ni moins. Une IA a appris par l’exemple : cela la rend capable de traiter des situations nouvelles… mais aussi de se tromper, comme l’apprenti à ses débuts. Ce qu’elle a appris lui sert à faire trois gestes, que nous allons voir un par un : reconnaître, prédire, produire."
      },
      {
        "title": "Premier geste : reconnaître",
        "body": "Reconnaître, c’est identifier ce qu’il y a dans une image ou dans un son. Visez l’étiquette en anglais d’un rouleau de tissu avec Google Lens : l’application lit les lettres dans la photo, puis les traduit en français. Pour vous, c’est une étiquette ; pour le téléphone, ce sont des milliers de petits points de couleur. L’IA a appris, à partir d’innombrables exemples d’écriture, à y retrouver des lettres et des mots.\n\nCe geste est partout. Un chauffeur de taxi à Ouagadougou dicte un message vocal au lieu de taper : son téléphone reconnaît sa voix et écrit le texte. Une étudiante à Cotonou tape « facture » dans sa galerie et retrouve la photo d’un reçu prise il y a trois mois, sans l’avoir jamais rangée. Certains téléphones reconnaissent aussi le visage de leur propriétaire pour se déverrouiller.\n\nComme une vendeuse de marché qui reconnaît ses habituées de loin, l’IA reconnaît vite, mais pas toujours juste. Une photo floue, un accent qu’elle a peu entendu ou une écriture à la main peuvent la tromper. Si votre dictée vocale déforme un nom de quartier ou un mot de votre langue, ce n’est pas vous qui parlez mal : c’est qu’elle a vu peu d’exemples de ce mot."
      },
      {
        "title": "Deuxième geste : prédire",
        "body": "Prédire, c’est deviner la suite la plus probable. Le clavier devine votre prochain mot. Votre application de vidéos devine ce que vous aimerez regarder ensuite. Votre boîte e-mail range seule les messages douteux dans les indésirables, parce qu’ils ressemblent à des milliers d’arnaques qu’elle a déjà vues. Les services de paiement mobile, comme M-Pesa au Kenya ou MTN MoMo au Bénin, peuvent eux aussi s’appuyer sur ce type de prédiction pour repérer une opération inhabituelle.\n\nUne prédiction ressemble au flair d’un cultivateur qui regarde le ciel et annonce la pluie : il s’appuie sur tout ce qu’il a observé les années précédentes. Une étudiante à Bamako qui écrit « Je serai en retard à cause des » voit son clavier proposer « embouteillages », parce que cette suite revient très souvent dans les textes. Le clavier ne sait pas où elle se trouve : il calcule ce qui est le plus probable.\n\nC’est là une limite importante : le plus probable n’est pas forcément le vrai. Le clavier peut vous proposer un mot à côté, et l’application de vidéos peut vous enfermer dans un seul sujet. Gardez toujours la main : une prédiction est une suggestion, pas un ordre. Nous verrons dans la Leçon 2 pourquoi une IA donne la réponse la plus probable plutôt qu’une réponse certaine."
      },
      {
        "title": "Troisième geste : produire — et le test de la règle fixe",
        "body": "Produire est le geste le plus récent. Des assistants comme Gemini, ChatGPT ou Claude écrivent des textes : ils répondent à vos questions, résument, traduisent, proposent un message. D’autres outils créent des images. On parle d’IA « générative », c’est-à-dire d’une IA qui génère, qui fabrique un contenu nouveau. Une demande écrite à une IA s’appelle une consigne ; en anglais, on dit « prompt ».\n\nUn enseignant à Kinshasa peut ainsi écrire : « Tu es secrétaire d’école. Je suis enseignant en primaire à Kinshasa et la réunion des parents a lieu samedi à 9 heures. Rédige un message d’invitation pour les parents. Fais quatre phrases courtes, sur un ton chaleureux. » En quelques secondes, l’assistant propose un texte. Mais ce texte reste un brouillon : l’IA peut inventer un détail ou mal comprendre la demande. Relisez toujours avant d’envoyer.\n\nPour savoir si un programme est une IA, faites le test de la règle fixe. La calculatrice de votre téléphone ? Elle suit des règles écrites par des programmeurs : deux plus deux donnent toujours quatre. Elle n’a rien appris d’exemples, ce n’est pas de l’IA. Le réveil qui sonne à six heures ? Il obéit à l’heure que vous avez choisie : pas d’IA non plus. Retenez la grille : une règle fixe, ce n’est pas de l’IA ; un programme qui a appris d’exemples et qui reconnaît, prédit ou produit, si."
      }
    ],
    "example": {
      "title": "L’inventaire du téléphone d’Aïcha, commerçante au Grand Marché de Niamey",
      "challenge": "Aïcha, la quarantaine, vend des pagnes wax et du bazin au Grand Marché de Niamey, au Niger, et beaucoup par WhatsApp. Elle jure qu’elle n’a « jamais utilisé l’IA » : pour elle, c’est une affaire d’ingénieurs, loin de son étal. Pourtant, ses clientes et son neveu en parlent de plus en plus, et elle se sent exclue d’un sujet qui la concerne.",
      "solution": "Aïcha se donne une mission : trouver trois IA dans son propre téléphone et les classer avec trois verbes. Dans Google Photos, elle tape « pagne » : ses photos de tissus apparaissent, sans qu’elle les ait jamais classées — l’IA reconnaît. Dans WhatsApp, elle écrit à une cliente « Les nouveaux pagnes sont… » et le clavier propose « arrivés » — l’IA prédit. Dans l’application Gemini, en version gratuite, elle appuie sur le micro et dicte : « Tu es un formateur patient. Je suis commerçante à Niamey. Explique-moi ce qu’est l’intelligence artificielle, avec un exemple tiré de mon quotidien. Réponds en 5 phrases simples, sans mots techniques. » L’assistant rédige une réponse en cinq phrases — l’IA produit. Enfin, elle note dans son application Notes : « Mes 3 IA — Galerie : reconnaît · Clavier : prédit · Gemini : produit ».",
      "impact": "Le soir même, quand son neveu lui demande ce qu’est l’IA, Aïcha répond sans hésiter : « Un programme qui a appris d’exemples. Il reconnaît, il prédit ou il produit. » Elle garde dans son téléphone une note de trois lignes qui résume son inventaire, et elle sait désormais dire pourquoi sa calculatrice, elle, n’est pas une IA. Elle ne se sent plus exclue de la conversation : elle y participe avec ses propres exemples."
    },
    "practice": {
      "title": "Faites l’inventaire des IA de votre téléphone",
      "instructions": [
        "Trouvez trois IA dans votre téléphone (galerie photos, clavier, traduction, vidéos proposées, assistant…). Pour chacune, notez dans l’application Notes ou sur papier son geste : reconnaître, prédire ou produire.",
        "Trouvez aussi un programme qui n’est pas de l’IA, parce qu’il suit une règle fixe (calculatrice, réveil, minuteur…), et notez la règle qu’il applique.",
        "Expliquez l’IA en une phrase à un proche, avec vos mots. Pour vous préparer, vous pouvez envoyer cette consigne à un assistant gratuit (Gemini, ChatGPT ou Claude), en remplaçant les crochets par votre situation : « Tu es un formateur patient. Je suis [votre métier] à [votre ville]. Explique-moi ce qu’est l’intelligence artificielle, avec un exemple tiré de mon quotidien. Réponds en 5 phrases simples, sans mots techniques. »"
      ],
      "observation": "Vous constatez que l’IA est déjà présente dans des applications que vous utilisez chaque jour, sans robot ni ordinateur spécial. Chaque IA trouvée entre dans l’une des trois cases — reconnaître, prédire, produire — alors que la calculatrice ou le réveil n’entrent dans aucune : ils obéissent à une règle fixe. Si votre proche comprend votre phrase, vous savez repérer l’IA et l’expliquer simplement."
    },
    "quiz": [
      {
        "question": "Quelle phrase décrit le mieux une IA ?",
        "options": [
          { "key": "A", "text": "Un robot qui pense comme un humain" },
          { "key": "B", "text": "Un programme qui a appris à partir d’exemples" },
          { "key": "C", "text": "Un site qui contient toutes les réponses" },
          { "key": "D", "text": "Une machine réservée aux ingénieurs" }
        ],
        "answer": "B",
        "explanation": "Une IA est un programme qui a appris à partir de nombreux exemples, au lieu de suivre seulement des règles écrites à la main. Elle ne pense pas comme un humain, elle ne contient pas « toutes les réponses » et elle n’est pas réservée aux ingénieurs : le clavier de votre téléphone en est une."
      },
      {
        "question": "Votre clavier propose « arrivés » après « Les nouveaux pagnes sont ». Quel geste de l’IA est-ce ?",
        "options": [
          { "key": "A", "text": "Reconnaître" },
          { "key": "B", "text": "Produire" },
          { "key": "C", "text": "Prédire" },
          { "key": "D", "text": "Aucun, c’est une règle fixe" }
        ],
        "answer": "C",
        "explanation": "Le clavier devine le mot suivant le plus probable, à partir de tous les textes dont il a appris. Deviner la suite la plus probable, c’est prédire. Ce n’est pas une règle fixe : personne n’a écrit à la main que « arrivés » doit suivre « Les nouveaux pagnes sont »."
      },
      {
        "question": "Vous tapez « pagne » et la galerie retrouve vos photos de tissus. Quel geste de l’IA est-ce ?",
        "options": [
          { "key": "A", "text": "Reconnaître" },
          { "key": "B", "text": "Prédire" },
          { "key": "C", "text": "Produire" },
          { "key": "D", "text": "Traduire" }
        ],
        "answer": "A",
        "explanation": "La galerie identifie ce qu’il y a dans l’image — un tissu — sans que vous ayez rangé vos photos. Identifier le contenu d’une image ou d’un son, c’est reconnaître. « Traduire » ne fait pas partie des trois gestes : c’est une tâche qui en combine plusieurs."
      },
      {
        "question": "La calculatrice de votre téléphone est-elle une IA ?",
        "options": [
          { "key": "A", "text": "Oui, elle calcule très vite" },
          { "key": "B", "text": "Oui, elle ne se trompe jamais" },
          { "key": "C", "text": "Non, parce qu’elle est gratuite" },
          { "key": "D", "text": "Non, elle suit des règles fixes" }
        ],
        "answer": "D",
        "explanation": "La calculatrice applique des règles fixes écrites par des programmeurs : deux plus deux donnent toujours quatre. Elle n’a rien appris d’exemples et ne devine rien. Être rapide, exact ou gratuit ne fait pas d’un programme une IA."
      },
      {
        "question": "Un voisin vous dit : « L’IA, ce n’est pas pour nous. » Quelle réponse est juste ?",
        "options": [
          { "key": "A", "text": "Il a raison, c’est pour les ingénieurs" },
          { "key": "B", "text": "L’IA n’existe pas encore en Afrique" },
          { "key": "C", "text": "Nous l’utilisons déjà : clavier, photos, assistants" },
          { "key": "D", "text": "Seuls les ordinateurs contiennent de l’IA" }
        ],
        "answer": "C",
        "explanation": "Nous utilisons déjà l’IA tous les jours, souvent sans le savoir : le clavier qui prédit, la galerie qui reconnaît, l’assistant qui produit un texte. Elle tient dans un simple téléphone, en Afrique comme ailleurs, et ne demande aucune compétence d’ingénieur."
      }
    ],
    "reflection": "Parmi les applications que vous ouvrez chaque jour, laquelle vous a le plus surpris en découvrant qu’elle utilise l’IA, et quel geste — reconnaître, prédire ou produire — y avez-vous repéré ?",
    "glossary": [
      {
        "term": "Intelligence artificielle (IA)",
        "definition": "Un programme qui a appris à partir de nombreux exemples, au lieu de suivre seulement des règles écrites à la main. Comme un apprenti qui apprend en regardant son patron travailler."
      },
      {
        "term": "Reconnaître",
        "definition": "Premier geste de l’IA : identifier ce qu’il y a dans une image ou un son, par exemple le texte d’une étiquette, une voix dictée ou un visage."
      },
      {
        "term": "Prédire",
        "definition": "Deuxième geste de l’IA : deviner la suite la plus probable, comme le mot suivant, la prochaine vidéo ou un message douteux. Le plus probable n’est pas forcément le vrai."
      },
      {
        "term": "IA générative",
        "definition": "Une IA qui produit, c’est-à-dire qui fabrique un contenu nouveau, texte ou image. Les assistants Gemini, ChatGPT et Claude en sont des exemples."
      },
      {
        "term": "Consigne (prompt)",
        "definition": "La demande que vous écrivez ou dictez à une IA. Plus elle dit clairement qui doit répondre, dans quelle situation, quoi faire et sous quelle forme, plus la réponse est utile."
      },
      {
        "term": "Règle fixe",
        "definition": "Une instruction écrite à l’avance par un programmeur et toujours appliquée de la même façon. Un programme qui ne suit que des règles fixes, comme la calculatrice ou le réveil, n’est pas une IA."
      }
    ]
  },
  "en": {
    "id": "is1",
    "lessonNumber": 1,
    "title": "You’re Already Using AI — How to Spot It and Explain It Simply",
    "objective": "By the end of this lesson, you will be able to spot AI and explain it simply. You will be able to say in one sentence what an AI is: a program that has learned from examples. You will be able to sort every AI on your phone by what it does — recognise, predict or produce — and tell apart a program that follows a fixed rule, like the calculator, from a program that has learned.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Not a robot: a program that has learned",
        "body": "When people hear “artificial intelligence”, many picture a movie robot, or a machine reserved for engineers in big cities. That is a misunderstanding. AI is not an object you buy: it is a way of building programs. Instead of dictating every rule to them, we make them learn. Your phone’s keyboard proves it: you type “I’m going to the”, and it suggests “market”. Nobody wrote out by hand a list of every possible sentence; the keyboard learned from an enormous amount of text.\n\nThink of an apprentice tailor in a workshop in Abidjan. He watches his master cut and sew, again and again. One day, he sews on his own a shirt he has never seen before. Nobody dictated every movement to him: he drew his own reference points from hundreds of examples. An AI does the same thing with data — texts, photos, sounds. It is shown many cases, and it draws its own reference points from them.\n\nA classic program, on the other hand, obeys rules written by programmers. It does exactly what it was told, no more, no less. An AI learned by example: this makes it able to handle new situations… but also to make mistakes, like the apprentice in his early days. What it has learned lets it perform three actions, which we will look at one by one: recognise, predict, produce."
      },
      {
        "title": "First action: recognise",
        "body": "To recognise is to identify what is in an image or a sound. Point Google Lens at the English label on a roll of fabric: the app reads the letters in the photo, then translates them into French. To you, it is a label; to the phone, it is thousands of tiny coloured dots. From countless examples of writing, the AI has learned to find letters and words in them.\n\nThis action is everywhere. A taxi driver in Ouagadougou dictates a voice message instead of typing: his phone recognises his voice and writes the text. A student in Cotonou types “invoice” in her photo gallery and finds a picture of a receipt she took three months ago, without ever having sorted it. Some phones also recognise their owner’s face to unlock.\n\nLike a market trader who recognises her regular customers from afar, AI recognises quickly, but not always correctly. A blurry photo, an accent it has rarely heard or handwriting can fool it. If your voice dictation mangles the name of a neighbourhood or a word in your language, it is not that you speak badly: it has simply seen few examples of that word."
      },
      {
        "title": "Second action: predict",
        "body": "To predict is to guess the most likely next step. The keyboard guesses your next word. Your video app guesses what you will want to watch next. Your e-mail inbox moves suspicious messages to the spam folder on its own, because they look like thousands of scams it has already seen. Mobile money services, such as M-Pesa in Kenya or MTN MoMo in Benin, can also rely on this kind of prediction to flag an unusual transaction.\n\nA prediction is like the instinct of a farmer who looks at the sky and announces rain: he relies on everything he has observed in previous years. A student in Bamako who writes “I’ll be late because of the” sees her keyboard suggest “traffic”, because that sequence comes up very often in texts. The keyboard does not know where she is: it calculates what is most likely.\n\nThis is an important limit: the most likely is not necessarily the truth. The keyboard may suggest the wrong word, and your video app may lock you into a single topic. Always stay in control: a prediction is a suggestion, not an order. In Lesson 2, we will see why an AI gives the most likely answer rather than a certain one."
      },
      {
        "title": "Third action: produce — and the fixed-rule test",
        "body": "Producing is the most recent action. Assistants such as Gemini, ChatGPT or Claude write text: they answer your questions, summarise, translate, draft a message. Other tools create images. This is called “generative” AI, meaning an AI that generates, that creates new content. A request written to an AI is called a prompt.\n\nA teacher in Kinshasa might write, for example: “You are a school secretary. I am a primary school teacher in Kinshasa and the parents’ meeting is on Saturday at 9 a.m. Write an invitation message for the parents. Use four short sentences, in a warm tone.” Within seconds, the assistant offers a text. But that text is only a draft: the AI can invent a detail or misunderstand the request. Always reread before sending.\n\nTo find out whether a program is an AI, use the fixed-rule test. Your phone’s calculator? It follows rules written by programmers: two plus two always makes four. It learned nothing from examples, so it is not AI. The alarm clock that rings at six? It obeys the time you chose: no AI there either. Remember the grid: a fixed rule is not AI; a program that learned from examples and that recognises, predicts or produces, is."
      }
    ],
    "example": {
      "title": "The inventory of Aïcha’s phone, a trader at the Grand Market of Niamey",
      "challenge": "Aïcha, in her forties, sells wax prints and bazin cloth at the Grand Market of Niamey, in Niger, and sells a lot through WhatsApp. She swears she has “never used AI”: to her, it is something for engineers, far from her stall. Yet her customers and her nephew talk about it more and more, and she feels left out of a subject that concerns her.",
      "solution": "Aïcha sets herself a mission: find three AIs on her own phone and sort them with three verbs. In Google Photos, she types “pagne” (wrapper cloth): her fabric photos appear, although she never sorted them — the AI recognises. In WhatsApp, she writes to a customer “Les nouveaux pagnes sont…” (“The new wax prints have…”) and the keyboard suggests “arrivés” (“arrived”) — the AI predicts. In the Gemini app, free version, she taps the microphone and dictates: “You are a patient trainer. I am a trader in Niamey. Explain to me what artificial intelligence is, with an example from my daily life. Answer in 5 simple sentences, without technical words.” The assistant writes a five-sentence answer — the AI produces. Finally, she writes in her Notes app: “My 3 AIs — Gallery: recognises · Keyboard: predicts · Gemini: produces”.",
      "impact": "That same evening, when her nephew asks her what AI is, Aïcha answers without hesitation: “A program that has learned from examples. It recognises, it predicts or it produces.” She keeps a three-line note on her phone summing up her inventory, and she can now explain why her calculator, for its part, is not an AI. She no longer feels left out of the conversation: she joins in with her own examples."
    },
    "practice": {
      "title": "Take an inventory of the AIs on your phone",
      "instructions": [
        "Find three AIs on your phone (photo gallery, keyboard, translation, suggested videos, assistant…). For each one, write down in your Notes app or on paper what it does: recognise, predict or produce.",
        "Also find a program that is not AI, because it follows a fixed rule (calculator, alarm clock, timer…), and write down the rule it applies.",
        "Explain AI in one sentence to someone close to you, in your own words. To prepare, you can send this prompt to a free assistant (Gemini, ChatGPT or Claude), replacing the brackets with your own situation: “You are a patient trainer. I am a [your job] in [your city]. Explain to me what artificial intelligence is, with an example from my daily life. Answer in 5 simple sentences, without technical words.”"
      ],
      "observation": "You notice that AI is already present in apps you use every day, with no robot or special computer. Every AI you found fits into one of the three boxes — recognise, predict, produce — while the calculator or the alarm clock fits into none: they obey a fixed rule. If the person you spoke to understands your sentence, you know how to spot AI and explain it simply."
    },
    "quiz": [
      {
        "question": "Which sentence best describes an AI?",
        "options": [
          { "key": "A", "text": "A robot that thinks like a human" },
          { "key": "B", "text": "A program that has learned from examples" },
          { "key": "C", "text": "A website that contains all the answers" },
          { "key": "D", "text": "A machine reserved for engineers" }
        ],
        "answer": "B",
        "explanation": "An AI is a program that has learned from many examples, instead of only following rules written by hand. It does not think like a human, it does not contain “all the answers” and it is not reserved for engineers: your phone’s keyboard is one."
      },
      {
        "question": "Your keyboard suggests “arrived” after “The new wax prints have”. Which AI action is this?",
        "options": [
          { "key": "A", "text": "Recognise" },
          { "key": "B", "text": "Produce" },
          { "key": "C", "text": "Predict" },
          { "key": "D", "text": "None, it is a fixed rule" }
        ],
        "answer": "C",
        "explanation": "The keyboard guesses the most likely next word, based on all the texts it learned from. Guessing the most likely next step is predicting. It is not a fixed rule: nobody wrote by hand that “arrived” must follow “The new wax prints have”."
      },
      {
        "question": "You type “pagne” (wrapper cloth) and your gallery finds your fabric photos. Which AI action is this?",
        "options": [
          { "key": "A", "text": "Recognise" },
          { "key": "B", "text": "Predict" },
          { "key": "C", "text": "Produce" },
          { "key": "D", "text": "Translate" }
        ],
        "answer": "A",
        "explanation": "The gallery identifies what is in the image — a fabric — without you having sorted your photos. Identifying the content of an image or a sound is recognising. “Translate” is not one of the three actions: it is a task that combines several of them."
      },
      {
        "question": "Is your phone’s calculator an AI?",
        "options": [
          { "key": "A", "text": "Yes, it calculates very fast" },
          { "key": "B", "text": "Yes, it never makes mistakes" },
          { "key": "C", "text": "No, because it is free" },
          { "key": "D", "text": "No, it follows fixed rules" }
        ],
        "answer": "D",
        "explanation": "The calculator applies fixed rules written by programmers: two plus two always makes four. It learned nothing from examples and guesses nothing. Being fast, accurate or free does not make a program an AI."
      },
      {
        "question": "A neighbour tells you: “AI is not for people like us.” Which answer is correct?",
        "options": [
          { "key": "A", "text": "He is right, it is for engineers" },
          { "key": "B", "text": "AI does not exist in Africa yet" },
          { "key": "C", "text": "We already use it: keyboard, photos, assistants" },
          { "key": "D", "text": "Only computers contain AI" }
        ],
        "answer": "C",
        "explanation": "We already use AI every day, often without knowing it: the keyboard that predicts, the gallery that recognises, the assistant that produces a text. It fits in an ordinary phone, in Africa as elsewhere, and requires no engineering skills."
      }
    ],
    "reflection": "Among the apps you open every day, which one surprised you most when you discovered it uses AI, and which action — recognise, predict or produce — did you spot in it?",
    "glossary": [
      {
        "term": "Artificial intelligence (AI)",
        "definition": "A program that has learned from many examples, instead of only following rules written by hand. Like an apprentice who learns by watching the master at work."
      },
      {
        "term": "Recognise",
        "definition": "The first action of AI: identifying what is in an image or a sound, for example the text on a label, a dictated voice or a face."
      },
      {
        "term": "Predict",
        "definition": "The second action of AI: guessing the most likely next step, such as the next word, the next video or a suspicious message. The most likely is not necessarily the truth."
      },
      {
        "term": "Generative AI",
        "definition": "An AI that produces, meaning it creates new content, text or images. The assistants Gemini, ChatGPT and Claude are examples."
      },
      {
        "term": "Prompt",
        "definition": "The request you write or dictate to an AI. The more clearly it says who should answer, in what situation, what to do and in what form, the more useful the answer."
      },
      {
        "term": "Fixed rule",
        "definition": "An instruction written in advance by a programmer and always applied the same way. A program that only follows fixed rules, like the calculator or the alarm clock, is not an AI."
      }
    ]
  },
  "ha": {
    "id": "is1",
    "lessonNumber": 1,
    "title": "Kuna Amfani da AI Tuni — Yadda Ake Gane Shi da Bayyana Shi a Saukake",
    "objective": "A karshen wannan darasi, za ku san yadda ake gane AI da kuma bayyana shi a saukake. Za ku iya fadin a jumla daya abin da AI yake: shiri (manhaja) da ya koya daga misalai. Za ku iya rarraba kowane AI da ke cikin wayarku bisa ga aikinsa — ganewa, hasashe ko samarwa — kuma ku bambanta shirin da ke bin ka’idar da ba ta canzawa, kamar na’urar lissafi, da shirin da ya koya.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Ba Mutum-mutumi Ba: Shiri Ne da Ya Koya",
        "body": "Idan aka ce « basirar da aka kirkira » (AI), mutane da yawa suna tunanin mutum-mutumin fim, ko na’urar da ta kebanta ga injiniyoyin manyan birane. Wannan kuskuren fahimta ne. AI ba abu ne da ake saya ba: hanya ce ta kera shirye-shiryen kwamfuta. Maimakon a gaya musu kowace ka’ida, ana sa su koya. Allon rubutu (keyboard) na wayarku shaida ne: kuna rubuta « Zan je », sai ya ba da shawarar « kasuwa ». Babu wanda ya rubuta da hannu jerin dukkan jumlolin da za a iya yi; allon rubutun ya koya ne daga rubuce-rubuce masu dimbin yawa.\n\nKu yi tunanin yaron koyon dinki a wani shagon tela a Abidjan. Yana kallon maigidansa yana yanka yana dinka, akai-akai. Wata rana, sai ya dinka riga shi kadai, rigar da bai taba gani ba. Babu wanda ya gaya masa kowane motsi: ya samo nasa alamomin daga daruruwan misalai. AI yana yin haka da bayanai — rubutu, hotuna, sauti. Ana nuna masa misalai da yawa, sai ya samo nasa alamomin.\n\nShiri na yau da kullum kuwa, yana bin ka’idojin da masu shirye-shirye suka rubuta. Yana yin daidai abin da aka ce masa, ba kari ba ragi. AI ya koya ta hanyar misalai: wannan yana ba shi damar fuskantar sababbin yanayi… amma kuma yana iya yin kuskure, kamar yaron koyo a farkon aikinsa. Abin da ya koya yana taimaka masa yin ayyuka uku, wadanda za mu gani daya bayan daya: ganewa, hasashe, samarwa."
      },
      {
        "title": "Aiki na Farko: Ganewa",
        "body": "Ganewa ita ce gane abin da ke cikin hoto ko cikin sauti. Ku nufi takardar sunan kaya ta Turanci da ke jikin nadin yadi da Google Lens: manhajar tana karanta haruffan da ke cikin hoton, sannan ta fassara su zuwa Faransanci. A gare ku, takarda ce; a wajen waya kuwa, dubban kananan digo ne na launi. Daga misalan rubutu marasa adadi, AI ya koyi yadda zai gano haruffa da kalmomi a ciki.\n\nWannan aikin yana ko’ina. Wani direban tasi a Ouagadougou yana fadin sako da murya maimakon ya rubuta: wayarsa tana gane muryarsa ta rubuta sakon. Wata daliba a Cotonou ta rubuta « rasit » a cikin hotunanta, sai ta sami hoton wata rasit da ta dauka wata uku da suka wuce, ba tare da ta taba tsara ta ba. Wasu wayoyi kuma suna gane fuskar mai su don su bude.\n\nKamar ’yar kasuwa da ke gane abokan cinikinta daga nesa, AI yana ganewa da sauri, amma ba koyaushe daidai ba. Hoto mara kyau, lafazin da bai saba ji ba ko rubutun hannu na iya rikita shi. Idan rubutun muryarku ya canza sunan unguwa ko wata kalma ta harshenku, ba ku ne kuka yi magana ba daidai ba: shi ne bai ga misalai da yawa na wannan kalmar ba."
      },
      {
        "title": "Aiki na Biyu: Hasashe",
        "body": "Hasashe shi ne zaton abin da ya fi yiwuwa ya biyo baya. Allon rubutu yana hasashen kalmarku ta gaba. Manhajar bidiyonku tana hasashen abin da za ku so kallo na gaba. Akwatin e-mail dinku yana ajiye sakonnin da ake shakku a kansu a cikin « marasa amfani » da kansa, saboda suna kama da dubban zambar da ya riga ya gani. Ayyukan kudi ta waya, kamar M-Pesa a Kenya ko MTN MoMo a Benin, su ma suna iya dogara da irin wannan hasashe don gano wata hada-hada da ba ta saba ba.\n\nHasashe yana kama da fahimtar manomi da ke kallon sama ya ce ruwa zai sauka: yana dogara ne da duk abin da ya lura a shekarun baya. Wata daliba a Bamako da ta rubuta « Zan makara saboda » za ta ga allon rubutunta ya ba da shawarar « cunkoson motoci », domin wannan jerin kalmomi yana yawan fitowa a cikin rubuce-rubuce. Allon rubutun bai san inda take ba: yana lissafa abin da ya fi yiwuwa ne.\n\nGa wata muhimmiyar iyaka: abin da ya fi yiwuwa ba lallai ne ya zama gaskiya ba. Allon rubutu zai iya ba ku kalmar da ba ta dace ba, manhajar bidiyo kuma za ta iya kulle ku a cikin batu guda. Ku rike ragamar kullum: hasashe shawara ce, ba umurni ba. A Darasi 2 za mu ga dalilin da yasa AI yake ba da amsar da ta fi yiwuwa maimakon amsar da ke da tabbas."
      },
      {
        "title": "Aiki na Uku: Samarwa — da Gwajin Ka’idar da Ba Ta Canzawa",
        "body": "Samarwa shi ne aiki mafi sabo. Mataimaka kamar Gemini, ChatGPT ko Claude suna rubuta rubutu: suna amsa tambayoyinku, suna takaitawa, suna fassara, suna shirya sako. Wasu kayan aiki suna kirkirar hotuna. Ana kiran wannan « generative AI », wato AI da ke samar da sabon abu. Bukatar da aka rubuta wa AI ana kiranta umurni; a Turanci, ana cewa « prompt ».\n\nMisali, wani malami a Kinshasa zai iya rubuta: « Kai ne sakataren makaranta. Ni malamin firamare ne a Kinshasa kuma taron iyaye zai kasance ranar Asabar da karfe 9 na safe. Rubuta sakon gayyata ga iyaye. Yi jumloli gajeru hudu, cikin sautin fara’a. » Cikin dakiku kadan, mataimakin zai ba da rubutu. Amma wannan rubutun daftari ne kawai: AI zai iya kirkiro wani bayani ko ya kasa fahimtar bukatar. Ku sake karantawa kullum kafin ku aika.\n\nDon sanin ko shiri AI ne, ku yi gwajin ka’idar da ba ta canzawa. Na’urar lissafi ta wayarku? Tana bin ka’idojin da masu shirye-shirye suka rubuta: biyu da biyu kullum hudu ne. Ba ta koyi komai daga misalai ba, don haka ba AI ba ce. Agogon kararrawa da ke kara da karfe shida? Yana bin lokacin da kuka zaba ne: shi ma ba AI ba ne. Ku rike wannan ma’auni: ka’idar da ba ta canzawa ba AI ba ce; shirin da ya koya daga misalai, wanda ke ganewa, hasashe ko samarwa, AI ne."
      }
    ],
    "example": {
      "title": "Lissafin AI na Wayar Aïcha, ’Yar Kasuwa a Babbar Kasuwar Yamai",
      "challenge": "Aïcha, mai shekaru kusan arba’in, tana sayar da atamfa (wax) da shadda (bazin) a Babbar Kasuwar Yamai (Niamey), a kasar Nijar, kuma tana sayarwa sosai ta WhatsApp. Ta rantse cewa « ba ta taba amfani da AI ba »: a ganinta, harkar injiniyoyi ce, nesa da rumfarta. Amma abokan cinikinta da dan dan’uwanta suna kara maganarsa, kuma tana jin an bar ta a baya a kan batun da ya shafe ta.",
      "solution": "Aïcha ta dora wa kanta aiki: ta nemo AI uku a cikin wayarta, ta rarraba su da kalmomi uku. A Google Photos, ta rubuta « pagne » (atamfa): hotunan yadinta suka bayyana, ba tare da ta taba tsara su ba — AI yana ganewa. A WhatsApp, ta rubuta wa wata abokiyar ciniki « Les nouveaux pagnes sont… » (« Sabbin atamfofi sun… »), sai allon rubutu ya ba da shawarar « arrivés » (« iso ») — AI yana hasashe. A manhajar Gemini, sigar kyauta, ta danna makirufo ta fadi: « Kai ne malami mai hakuri. Ni ’yar kasuwa ce a Yamai. Bayyana mini abin da basirar da aka kirkira take, da misali daga rayuwata ta yau da kullum. Amsa a jumloli 5 masu sauki, ba tare da kalmomin fasaha ba. » Mataimakin ya rubuta amsa a jumloli biyar — AI yana samarwa. A karshe, ta rubuta a manhajar Notes: « AI dina 3 — Hotuna: ganewa · Allon rubutu: hasashe · Gemini: samarwa ».",
      "impact": "A wannan dare, lokacin da dan dan’uwanta ya tambaye ta mene ne AI, Aïcha ta amsa ba tare da jinkiri ba: « Shiri ne da ya koya daga misalai. Yana ganewa, yana hasashe, ko yana samarwa. » Tana da rubutu na layi uku a wayarta wanda ya takaita lissafinta, kuma yanzu ta san yadda za ta bayyana dalilin da yasa na’urar lissafinta ba AI ba ce. Ba ta jin an bar ta a baya kuma: tana shiga hirar da nata misalan."
    },
    "practice": {
      "title": "Ku Yi Lissafin AI na Wayarku",
      "instructions": [
        "Ku nemo AI uku a cikin wayarku (hotuna, allon rubutu, fassara, bidiyon da ake ba da shawara, mataimaki…). Ga kowanne, ku rubuta a manhajar Notes ko a takarda aikinsa: ganewa, hasashe ko samarwa.",
        "Ku nemo kuma wani shiri da ba AI ba ne, saboda yana bin ka’idar da ba ta canzawa (na’urar lissafi, agogon kararrawa, mai kirga lokaci…), ku rubuta ka’idar da yake bi.",
        "Ku bayyana AI a jumla daya ga wani na kusa da ku, da kalmominku. Don shiryawa, kuna iya aika wannan umurni ga mataimaki na kyauta (Gemini, ChatGPT ko Claude), ku maye gurbin abin da ke cikin baka da yanayinku: « Kai ne malami mai hakuri. Ni [sana’arku] ne a [garinku]. Bayyana mini abin da basirar da aka kirkira take, da misali daga rayuwata ta yau da kullum. Amsa a jumloli 5 masu sauki, ba tare da kalmomin fasaha ba. »"
      ],
      "observation": "Za ku lura cewa AI yana nan tuni a cikin manhajojin da kuke amfani da su kowace rana, ba tare da mutum-mutumi ko kwamfuta ta musamman ba. Kowane AI da kuka samu yana shiga daya daga cikin akwatuna uku — ganewa, hasashe, samarwa — yayin da na’urar lissafi ko agogon kararrawa ba sa shiga ko daya: suna bin ka’idar da ba ta canzawa. Idan wanda kuka yi wa bayani ya fahimci jumlarku, kun san yadda ake gane AI da bayyana shi a saukake."
    },
    "quiz": [
      {
        "question": "Wace jumla ce ta fi bayyana AI?",
        "options": [
          { "key": "A", "text": "Mutum-mutumi da ke tunani kamar dan Adam" },
          { "key": "B", "text": "Shiri da ya koya daga misalai" },
          { "key": "C", "text": "Shafin intanet da ke dauke da dukkan amsoshi" },
          { "key": "D", "text": "Na’ura da ta kebanta ga injiniyoyi" }
        ],
        "answer": "B",
        "explanation": "AI shiri ne da ya koya daga misalai masu yawa, maimakon ya bi ka’idojin da aka rubuta da hannu kawai. Ba ya tunani kamar dan Adam, ba ya dauke da « dukkan amsoshi », kuma bai kebanta ga injiniyoyi ba: allon rubutun wayarku ma AI ne."
      },
      {
        "question": "Allon rubutunku ya ba da shawarar « iso » bayan « Sabbin atamfofi sun ». Wane aiki ne na AI wannan?",
        "options": [
          { "key": "A", "text": "Ganewa" },
          { "key": "B", "text": "Samarwa" },
          { "key": "C", "text": "Hasashe" },
          { "key": "D", "text": "Babu, ka’ida ce da ba ta canzawa" }
        ],
        "answer": "C",
        "explanation": "Allon rubutu yana zaton kalmar da ta fi yiwuwa ta biyo baya, bisa ga dukkan rubuce-rubucen da ya koya daga gare su. Zaton abin da ya fi yiwuwa ya biyo baya, hasashe ne. Ba ka’ida ce da ba ta canzawa ba: babu wanda ya rubuta da hannu cewa « iso » dole ya biyo « Sabbin atamfofi sun »."
      },
      {
        "question": "Kun rubuta « pagne » (atamfa) sai hotunanku suka nemo hotunan yadinku. Wane aiki ne na AI wannan?",
        "options": [
          { "key": "A", "text": "Ganewa" },
          { "key": "B", "text": "Hasashe" },
          { "key": "C", "text": "Samarwa" },
          { "key": "D", "text": "Fassara" }
        ],
        "answer": "A",
        "explanation": "Manhajar hotuna tana gane abin da ke cikin hoton — yadi — ba tare da kun tsara hotunanku ba. Gane abin da ke cikin hoto ko sauti, shi ne ganewa. « Fassara » ba ta cikin ayyukan uku: aiki ne da ke hada da dama daga cikinsu."
      },
      {
        "question": "Shin na’urar lissafi ta wayarku AI ce?",
        "options": [
          { "key": "A", "text": "I, tana lissafi da sauri sosai" },
          { "key": "B", "text": "I, ba ta taba kuskure" },
          { "key": "C", "text": "A’a, saboda kyauta ce" },
          { "key": "D", "text": "A’a, tana bin ka’idojin da ba sa canzawa" }
        ],
        "answer": "D",
        "explanation": "Na’urar lissafi tana amfani da ka’idojin da ba sa canzawa wadanda masu shirye-shirye suka rubuta: biyu da biyu kullum hudu ne. Ba ta koyi komai daga misalai ba, kuma ba ta zaton komai. Sauri, rashin kuskure ko kasancewa kyauta ba sa sa shiri ya zama AI."
      },
      {
        "question": "Wani makwabci ya ce muku: « AI ba namu ba ne. » Wace amsa ce daidai?",
        "options": [
          { "key": "A", "text": "Gaskiya ne, na injiniyoyi ne" },
          { "key": "B", "text": "AI bai iso Afirka ba tukuna" },
          { "key": "C", "text": "Muna amfani da shi tuni: allon rubutu, hotuna, mataimaka" },
          { "key": "D", "text": "Kwamfutoci kadai ke dauke da AI" }
        ],
        "answer": "C",
        "explanation": "Muna amfani da AI kowace rana tuni, sau da yawa ba tare da mun sani ba: allon rubutu da ke hasashe, manhajar hotuna da ke ganewa, mataimaki da ke samar da rubutu. Yana cikin waya ta yau da kullum, a Afirka kamar ko’ina, kuma baya bukatar kwarewar injiniya."
      }
    ],
    "reflection": "Daga cikin manhajojin da kuke budewa kowace rana, wace ce ta fi ba ku mamaki da kuka gano cewa tana amfani da AI, kuma wane aiki — ganewa, hasashe ko samarwa — kuka gani a cikinta?",
    "glossary": [
      {
        "term": "AI — Artificial Intelligence (basirar da aka kirkira)",
        "definition": "Shiri da ya koya daga misalai masu yawa, maimakon ya bi ka’idojin da aka rubuta da hannu kawai. Kamar yaron koyo da ke koyon aiki ta hanyar kallon maigidansa."
      },
      {
        "term": "Ganewa",
        "definition": "Aiki na farko na AI: gane abin da ke cikin hoto ko sauti, misali rubutun da ke jikin takardar sunan kaya, murya da aka fada ko fuska."
      },
      {
        "term": "Hasashe",
        "definition": "Aiki na biyu na AI: zaton abin da ya fi yiwuwa ya biyo baya, kamar kalma ta gaba, bidiyo na gaba ko sakon da ake shakku a kansa. Abin da ya fi yiwuwa ba lallai ne ya zama gaskiya ba."
      },
      {
        "term": "Generative AI (AI mai samar da sabon abu)",
        "definition": "AI da ke samarwa, wato yana kirkirar sabon abu, rubutu ko hoto. Mataimaka Gemini, ChatGPT da Claude misalai ne."
      },
      {
        "term": "Umurni (prompt)",
        "definition": "Bukatar da kuke rubutawa ko fada wa AI. Idan ta fadi a fili wa zai amsa, a wane yanayi, me za a yi da kuma ta wace sura, amsar za ta fi amfani."
      },
      {
        "term": "Ka’idar da ba ta canzawa",
        "definition": "Umurnin da mai shirye-shirye ya rubuta tun farko, kuma ana bin sa ta hanya daya kullum. Shirin da ke bin irin wadannan ka’idoji kawai, kamar na’urar lissafi ko agogon kararrawa, ba AI ba ne."
      }
    ]
  }
};
