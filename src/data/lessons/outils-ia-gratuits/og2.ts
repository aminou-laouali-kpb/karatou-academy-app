import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og2 (Comparer les assistants sur votre tâche)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson2: Record<Language, LessonContent> = {
  "fr": {
    "id": "og2",
    "lessonNumber": 2,
    "title": "Comparer Gemini, ChatGPT, Claude et Copilot sur votre propre tâche",
    "objective": "À la fin de cette leçon, vous saurez tester plusieurs assistants sur votre propre tâche. Vous saurez coller la même consigne RCTF, mot pour mot, dans plusieurs assistants gratuits, chaque fois dans une nouvelle conversation. Vous saurez remplir une grille de quatre critères (consigne respectée, rien d’inventé, clarté, langue) sans faire de classement. Et vous saurez retenir un choix pour cette tâche, avec un plan B, en sachant qu’il faut refaire le test de temps en temps.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi « celui que tout le monde utilise » ne suffit pas pour choisir un assistant",
        "body": "Quand on débute avec l’IA, on demande conseil autour de soi, et la réponse tombe souvent : « prends celui que tout le monde utilise ». C’est comme acheter une machine à coudre parce que la voisine en a une : elle lui convient peut-être pour ses travaux, mais cela ne dit rien des vôtres. Derrière ce conseil se cache un malentendu : l’idée qu’un assistant IA serait le meilleur pour tout, partout et pour tout le monde. Ce n’est pas le cas.\n\nOuvrez Gemini, ChatGPT, Claude et Copilot dans leur version gratuite : même zone de saisie, même allure, même promesse de répondre à tout. Rien, sur l’écran d’accueil, ne vous dit lequel écrira le message le plus juste pour vos clients, le résumé le plus fidèle de votre rapport ou la traduction la plus naturelle dans votre langue. Un commerçant de Cotonou qui annonce un arrivage, une étudiante d’Abidjan qui prépare un exposé et un agent de santé de Kinshasa qui rédige un rapport n’ont pas la même tâche : ils n’auront pas forcément le même bon outil.\n\nLa seule façon honnête de savoir, c’est de tester les assistants sur votre propre tâche, avec une méthode simple en trois temps : une consigne identique pour tous, une grille de quatre critères pour lire les réponses, puis un choix pour cette tâche, avec un plan B. Le test ne demande que quelques minutes et un téléphone, et son résultat vaut pour vous, pas pour la moyenne des internautes."
      },
      {
        "title": "Coller la même consigne, mot pour mot, dans une nouvelle conversation",
        "body": "Comparer, c’est placer deux choses dans les mêmes conditions. Au marché, pour savoir quelle balance est juste, on pèse le même sac de riz sur chacune ; si l’on pèse du riz sur l’une et du mil sur l’autre, on ne compare plus les balances. Avec les assistants, c’est pareil : le même texte, copié-collé mot pour mot, avec les mêmes informations, ni plus ni moins. Si vous ajoutez un détail dans un outil et l’oubliez dans un autre, vous comparez deux demandes différentes, pas deux outils.\n\nOuvrez aussi, chaque fois, une nouvelle conversation. Un assistant tient compte de ce qui a été dit plus haut dans la même conversation, et certains gardent des préférences en mémoire : une ancienne discussion sur un autre sujet peut influencer la réponse. Une conversation neuve, c’est une feuille blanche, la même pour tous. Pour que le test reste équitable, faites-le le même jour, sur le même appareil et avec le même réseau.\n\nPour écrire cette consigne, utilisez RCTF, la méthode maison : Rôle (qui doit être l’assistant), Contexte (votre situation et les informations à utiliser), Tâche (ce que vous voulez, et ce qu’il ne doit pas faire), Format (longueur, ton, langue). Une secrétaire d’association à Bamako qui veut convoquer les membres à une réunion mettra ainsi le lieu, la date et l’ordre du jour dans le Contexte, et « une demi-page, ton respectueux » dans le Format. Une consigne complète donne à chaque assistant la même chance ; une consigne vague (« fais-moi une pub ») laisse chacun deviner, et le test ne mesure plus que sa façon de deviner."
      },
      {
        "title": "Remplir une grille de quatre critères : consigne, rien d’inventé, clarté, langue",
        "body": "Une fois les réponses obtenues, ne choisissez pas à l’impression. Une grille de test est un tableau simple : une colonne par assistant, une ligne par critère, et dans chaque case une coche ou une croix. C’est la liste de contrôle d’un magasinier qui vérifie chaque colis avec les mêmes questions. On ne fait pas de total et on ne distribue pas d’étoiles : on regarde ce qui compte pour votre tâche.\n\nPremier critère : la consigne est-elle respectée ? Longueur demandée, informations prévues, deux langues si vous les avez demandées. Deuxième critère : aucune information inventée ? Un assistant peut ajouter un prix, une promotion, une adresse ou une date que vous n’avez jamais donnés, sur un ton très sûr de lui. Une seule invention suffit pour une croix : envoyée à vos clients, elle vous engage. Troisième critère : le texte est-il clair pour votre public, celui qui va vraiment le lire ?\n\nQuatrième critère : la langue est-elle correcte ? Les assistants sont souvent à l’aise en français ou en anglais, beaucoup moins dans des langues moins présentes en ligne comme le haoussa, le wolof, le bambara ou le lingala : phrases calquées, mots qui n’existent pas, tournures qui sonnent faux. Ce critère demande un humain : faites relire par un locuteur, vous-même si c’est votre langue, sinon un proche ou un collègue. Et ne cochez que ce que vous avez vu dans la réponse : en cas de doute, mettez une croix."
      },
      {
        "title": "Lire les atouts de chaque assistant, choisir pour une tâche et garder un plan B",
        "body": "Chaque assistant a des atouts, et ce sont des fonctions, pas des qualités. Gemini est relié aux services de Google et crée des images. Copilot est intégré à Windows, au navigateur Edge et au moteur de recherche Bing. ChatGPT réunit voix, images, fichiers et recherche. Claude se concentre sur l’écrit et l’analyse de documents. Ces atouts vous aident à savoir quoi tester, mais ils ne disent pas qui écrira le meilleur texte pour vous, et ils évoluent : vérifiez-les dans votre propre application. Pour votre tâche, c’est votre test qui décide.\n\nLe résultat d’un test n’est donc pas un champion, mais un choix pour cette tâche, avec un plan B : un deuxième outil gardé en réserve, comme la deuxième carte SIM qu’on garde quand le réseau principal ne passe plus. Le plan B sert quand l’outil choisi est indisponible, quand vous avez atteint sa limite d’utilisation gratuite du jour, ou quand il vous donne une mauvaise réponse. Pour une autre tâche, résumer un document ou préparer un cours par exemple, refaites un test : le choix peut être différent.\n\nDernier point, souvent surprenant : posez demain la même question au même assistant, et vous n’obtiendrez pas la même réponse. Les réponses varient d’une fois à l’autre, et les outils changent avec leurs mises à jour. Un test n’est jamais définitif : refaites-le de temps en temps, par exemple quand une réponse vous déçoit, et notez le résultat avec la date. C’est pour cela que la méthode compte plus que l’outil du moment."
      }
    ],
    "example": {
      "title": "Le message de fête de Hadiza, testé dans quatre assistants",
      "challenge": "Hadiza tient un atelier de couture près du grand marché de Zinder, au Niger. Pour la fête, elle veut annoncer ses nouveaux modèles à ses clientes par un message WhatsApp, en français et en haoussa. Une amie commerçante lui conseille de prendre « celui que tout le monde utilise ». Mais l’enjeu est concret : il lui faut un message juste, clair, sans information inventée, dans les deux langues de ses clientes. Une fausse promotion ou une mauvaise adresse lui ferait perdre la confiance de sa clientèle.",
      "solution": "Hadiza écrit sa consigne en quatre blocs RCTF : rôle (rédacteur de messages pour un petit commerce, chaleureux et précis), contexte (couturière, clientes sur WhatsApp en français et en haoussa, atelier près du grand marché de Zinder, ouvert de 8 h à 18 h, commander avant le 15 du mois), tâche (annoncer les modèles de fête sans inventer ni prix, ni promotion, ni adresse), format (cinq lignes au plus, ton chaleureux, une version en français puis une en haoussa). Elle la colle mot pour mot dans Gemini, ChatGPT, Claude et Copilot, versions gratuites, chacun dans une nouvelle conversation, le même jour, sur le même téléphone et le même réseau. Puis elle remplit sa grille réponse par réponse : cinq lignes avec le lieu et les horaires ? Un prix, une promotion ou une adresse inventés ? Un texte clair ? Un haoussa correct, qu’elle relit elle-même ? Sans faire de total, elle choisit pour cette tâche l’assistant qui a passé sa grille, et note un deuxième outil comme plan B.",
      "impact": "Ses clientes reçoivent un message clair, en français et en haoussa, avec le bon lieu, les bons horaires et la bonne date limite, sans prix ni promotion inventés. Hadiza sait quel assistant garder pour ce type de message, dispose d’un plan B si celui-ci lui fait défaut, et peut refaire le même test pour ses autres tâches."
    },
    "practice": {
      "title": "Testez trois assistants sur votre propre tâche",
      "instructions": [
        "Choisissez une vraie tâche de votre semaine (un message à vos clients, une convocation, un résumé, une traduction) et adaptez cette consigne RCTF en remplaçant ce qui est entre crochets : Rôle : tu es un rédacteur de messages pour un petit commerce, chaleureux et précis. Contexte : je suis [couturière] et je tiens [un atelier près du grand marché de ma ville]. Mes clientes lisent mes messages sur WhatsApp, en [français] et en [haoussa]. Informations à utiliser : [lieu] ; [horaires] ; [commander avant le …]. Tâche : écris un message pour annoncer [les nouveaux modèles de mon atelier pour la fête] à mes clientes. N’invente aucune autre information (ni prix, ni promotion, ni adresse). Format : cinq lignes au plus, ton chaleureux. Une version en [français], puis une version en [haoussa].",
        "Collez cette même consigne, mot pour mot, dans trois assistants gratuits (par exemple Gemini, ChatGPT, Claude ou Copilot), chacun dans une nouvelle conversation, le même jour et sur le même appareil.",
        "Sur papier ou dans une note, remplissez la grille des quatre critères pour chaque réponse (consigne respectée, aucune information inventée, clarté pour votre public, langue correcte relue par un locuteur), avec une coche ou une croix et sans total ; puis notez votre choix pour cette tâche et votre plan B."
      ],
      "observation": "Vous constatez que, pour la même consigne, les réponses diffèrent d’un assistant à l’autre : longueur, informations ajoutées, qualité de la langue. La grille rend ces écarts visibles et vous permet de choisir pour cette tâche, sans classement général. Si vous reposez la question le lendemain, la réponse changera encore : d’où l’intérêt du plan B et d’un test refait de temps en temps."
    },
    "quiz": [
      {
        "question": "Pour comparer des assistants de façon juste, il faut :",
        "options": [
          { "key": "A", "text": "adapter la consigne à chaque outil" },
          { "key": "B", "text": "la même consigne, mot pour mot, dans une nouvelle conversation à chaque fois" },
          { "key": "C", "text": "poser la question une seule fois, dans un seul outil" },
          { "key": "D", "text": "comparer les icônes" }
        ],
        "answer": "B",
        "explanation": "Un test équitable place tous les assistants dans les mêmes conditions : le même texte, avec les mêmes informations, et une nouvelle conversation pour qu’aucun échange précédent n’influence la réponse. Si vous adaptez la consigne, vous comparez deux demandes différentes, pas deux outils."
      },
      {
        "question": "Lequel de ces critères fait partie de la grille ?",
        "options": [
          { "key": "A", "text": "La couleur de l’application" },
          { "key": "B", "text": "Le nombre de téléchargements" },
          { "key": "C", "text": "La réponse n’invente aucune information" },
          { "key": "D", "text": "La vitesse de la connexion" }
        ],
        "answer": "C",
        "explanation": "La grille compte quatre critères : la consigne est respectée, aucune information n’est inventée, le texte est clair pour le public, la langue est correcte. La couleur, la popularité ou la vitesse du réseau ne disent rien de la qualité de la réponse pour votre tâche."
      },
      {
        "question": "Un assistant ajoute une promotion que Hadiza n’a jamais proposée. Pour le critère « rien d’inventé », vous mettez :",
        "options": [
          { "key": "A", "text": "une croix" },
          { "key": "B", "text": "une coche" },
          { "key": "C", "text": "rien" },
          { "key": "D", "text": "deux coches" }
        ],
        "answer": "A",
        "explanation": "La promotion ne figure pas dans la consigne : c’est une information inventée, donc une croix. Envoyée telle quelle, elle engagerait Hadiza auprès de ses clientes sur une offre qu’elle n’a jamais faite. Une seule invention suffit pour la croix."
      },
      {
        "question": "Après le test, que retient Hadiza ?",
        "options": [
          { "key": "A", "text": "Un seul outil, pour toutes ses tâches" },
          { "key": "B", "text": "L’outil dont on parle le plus" },
          { "key": "C", "text": "Un choix pour cette tâche, et un plan B" },
          { "key": "D", "text": "Aucun outil" }
        ],
        "answer": "C",
        "explanation": "Le test ne désigne pas un gagnant universel : il éclaire une tâche précise. Hadiza garde l’assistant qui a passé sa grille pour ce message, et note un deuxième outil en réserve si le premier lui fait défaut. Pour une autre tâche, elle refera un test."
      },
      {
        "question": "Hadiza repose la même question le lendemain. Que se passe-t-il ?",
        "options": [
          { "key": "A", "text": "La réponse peut changer : il faut refaire le test de temps en temps" },
          { "key": "B", "text": "La réponse est toujours identique" },
          { "key": "C", "text": "L’assistant refuse de répondre" },
          { "key": "D", "text": "La réponse devient payante" }
        ],
        "answer": "A",
        "explanation": "Les réponses d’un assistant varient d’une fois à l’autre, et les outils changent avec leurs mises à jour. Un test n’est donc jamais définitif : on le refait de temps en temps et on garde un plan B."
      }
    ],
    "reflection": "Pour quelle tâche de votre semaine utilisez-vous un assistant IA simplement parce que tout le monde l’utilise, et quel critère de la grille vérifieriez-vous en premier pour cette tâche ?",
    "glossary": [
      {
        "term": "Assistant IA",
        "definition": "Application avec laquelle on échange par écrit ou à la voix pour obtenir un texte, une réponse ou une idée, comme Gemini, ChatGPT, Claude ou Copilot. Chacun a ses atouts, mais aucun ne gagne partout."
      },
      {
        "term": "Consigne RCTF",
        "definition": "Demande écrite en quatre blocs : Rôle, Contexte, Tâche, Format. Pour un test équitable, la même consigne est collée mot pour mot dans chaque assistant."
      },
      {
        "term": "Nouvelle conversation",
        "definition": "Fil de discussion vierge, sans les échanges précédents. Comme une feuille blanche, elle garantit que chaque assistant part des mêmes informations."
      },
      {
        "term": "Grille de test",
        "definition": "Tableau avec une colonne par assistant et une ligne par critère (consigne, rien d’inventé, clarté, langue), rempli de coches et de croix, sans total ni classement."
      },
      {
        "term": "Information inventée",
        "definition": "Détail qu’un assistant ajoute alors que vous ne l’avez jamais donné : prix, promotion, adresse, date. Il est souvent dit sur un ton très sûr ; une seule invention vaut une croix dans la grille."
      },
      {
        "term": "Plan B",
        "definition": "Deuxième outil gardé en réserve pour une tâche, au cas où le premier est indisponible, atteint sa limite gratuite ou change de comportement après une mise à jour."
      }
    ]
  },
  "en": {
    "id": "og2",
    "lessonNumber": 2,
    "title": "Compare Gemini, ChatGPT, Claude and Copilot on your own task",
    "objective": "By the end of this lesson, you will know how to test several assistants on your own task. You will know how to paste the same RCTF prompt, word for word, into several free assistants, each time in a new conversation. You will know how to fill in a four-criterion test grid (prompt followed, nothing made up, clarity, language) without ranking anything. And you will know how to settle on a choice for that task, with a backup option, knowing that the test needs to be repeated from time to time.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why “the one everybody uses” is not enough to choose an assistant",
        "body": "When you start using AI, you ask people around you for advice, and the answer is often: “take the one everybody uses”. It is like buying a sewing machine because your neighbour has one: it may suit her work, but it tells you nothing about yours. Behind this advice lies a misunderstanding: the idea that one AI assistant is the best at everything, everywhere, for everyone. That is not the case.\n\nOpen Gemini, ChatGPT, Claude and Copilot in their free versions: same input box, same look, same promise to answer anything. Nothing on the home screen tells you which one will write the most accurate message for your customers, the most faithful summary of your report or the most natural translation into your language. A shopkeeper in Cotonou announcing a new delivery, a student in Abidjan preparing a presentation and a health worker in Kinshasa writing a report do not have the same task: they will not necessarily have the same right tool.\n\nThe only honest way to know is to test the assistants on your own task, with a simple three-step method: an identical prompt for all of them, a four-criterion grid to read the answers, then a choice for that task, with a backup option. The test takes only a few minutes and a phone, and its result holds for you, not for the average internet user."
      },
      {
        "title": "Paste the same prompt, word for word, into a new conversation",
        "body": "Comparing means putting two things in the same conditions. At the market, to find out which scale is accurate, you weigh the same bag of rice on each one; if you weigh rice on one and millet on the other, you are no longer comparing scales. With assistants it is the same: the same text, copied and pasted word for word, with the same information, no more and no less. If you add a detail in one tool and forget it in another, you are comparing two different requests, not two tools.\n\nAlso open a new conversation each time. An assistant takes into account what was said earlier in the same conversation, and some keep preferences in memory: an old discussion on another topic can influence the answer. A fresh conversation is a blank sheet, the same for everyone. To keep the test fair, run it on the same day, on the same device and with the same network.\n\nTo write this prompt, use RCTF, the house method: Role (who the assistant should be), Context (your situation and the information to use), Task (what you want, and what it must not do), Format (length, tone, language). An association secretary in Bamako who wants to invite members to a meeting will put the place, the date and the agenda in the Context, and “half a page, respectful tone” in the Format. A complete prompt gives every assistant the same chance; a vague one (“make me an ad”) leaves each of them guessing, and the test then measures nothing but their way of guessing."
      },
      {
        "title": "Fill in a four-criterion grid: prompt, nothing made up, clarity, language",
        "body": "Once you have the answers, do not choose on a hunch. A test grid is a simple table: one column per assistant, one row per criterion, and in each cell a tick or a cross. It is the checklist of a storekeeper who checks every parcel with the same questions. There is no total and no stars: you look at what matters for your task.\n\nFirst criterion: was the prompt followed? Requested length, expected information, both languages if you asked for them. Second criterion: nothing made up? An assistant may add a price, a promotion, an address or a date you never gave, in a very confident tone. A single invention is enough for a cross: once sent to your customers, it commits you. Third criterion: is the text clear for your audience, the people who will actually read it?\n\nFourth criterion: is the language correct? Assistants are often at ease in French or English, much less so in languages that are less present online, such as Hausa, Wolof, Bambara or Lingala: word-for-word calques, words that do not exist, phrasing that sounds wrong. This criterion needs a human: have a speaker proofread it, yourself if it is your language, otherwise a relative or a colleague. And only tick what you actually saw in the answer: when in doubt, put a cross."
      },
      {
        "title": "Read each assistant’s strengths, choose for one task and keep a backup option",
        "body": "Each assistant has strengths, and they are features, not qualities. Gemini is connected to Google services and creates images. Copilot is built into Windows, the Edge browser and the Bing search engine. ChatGPT brings together voice, images, files and search. Claude focuses on writing and document analysis. These strengths help you know what to test, but they do not tell you who will write the best text for you, and they change: check them in your own app. For your task, your test decides.\n\nSo the result of a test is not a champion, but a choice for that task, with a backup option: a second tool kept in reserve, like the second SIM card you keep for when the main network drops. The backup option is useful when the chosen tool is unavailable, when you have reached its daily free usage limit, or when it gives you a bad answer. For another task, such as summarising a document or preparing a class, run a new test: the choice may be different.\n\nOne last point, often surprising: ask the same assistant the same question tomorrow, and you will not get the same answer. Answers vary from one time to the next, and tools change with their updates. A test is never final: repeat it from time to time, for example when an answer disappoints you, and write down the result with the date. That is why the method matters more than the tool of the moment."
      }
    ],
    "example": {
      "title": "Hadiza’s festive message, tested in four assistants",
      "challenge": "Hadiza runs a sewing workshop near the main market in Zinder, Niger. For the festive season, she wants to announce her new designs to her customers in a WhatsApp message, in French and in Hausa. A shopkeeper friend advises her to take “the one everybody uses”. But the stakes are concrete: she needs an accurate, clear message, with no made-up information, in both of her customers’ languages. A fake promotion or a wrong address would cost her the trust of her customers.",
      "solution": "Hadiza writes her prompt in four RCTF blocks: role (a message writer for a small business, warm and precise), context (seamstress, customers on WhatsApp in French and in Hausa, workshop near the main market in Zinder, open from 8 a.m. to 6 p.m., order before the 15th of the month), task (announce the festive designs without making up any price, promotion or address), format (five lines at most, warm tone, a French version then a Hausa one). She pastes it word for word into Gemini, ChatGPT, Claude and Copilot, free versions, each in a new conversation, on the same day, on the same phone and the same network. Then she fills in her grid answer by answer: five lines with the place and opening hours? A made-up price, promotion or address? A clear text? Correct Hausa, which she proofreads herself? Without adding anything up, she picks for this task the assistant that passed her grid, and notes a second tool as a backup option.",
      "impact": "Her customers receive a clear message, in French and in Hausa, with the right place, the right opening hours and the right deadline, with no made-up price or promotion. Hadiza knows which assistant to keep for this kind of message, has a backup option if it lets her down, and can run the same test for her other tasks."
    },
    "practice": {
      "title": "Test three assistants on your own task",
      "instructions": [
        "Choose a real task from your week (a message to your customers, a meeting notice, a summary, a translation) and adapt this RCTF prompt by replacing what is in square brackets: Role: you are a message writer for a small business, warm and precise. Context: I am a [seamstress] and I run [a workshop near the main market of my town]. My customers read my messages on WhatsApp, in [French] and in [Hausa]. Information to use: [place]; [opening hours]; [order before …]. Task: write a message announcing [my workshop’s new festive designs] to my customers. Do not make up any other information (no price, no promotion, no address). Format: five lines at most, warm tone. One version in [French], then one version in [Hausa].",
        "Paste this same prompt, word for word, into three free assistants (for example Gemini, ChatGPT, Claude or Copilot), each in a new conversation, on the same day and on the same device.",
        "On paper or in a note, fill in the four-criterion grid for each answer (prompt followed, no made-up information, clarity for your audience, correct language proofread by a speaker), with a tick or a cross and no total; then write down your choice for this task and your backup option."
      ],
      "observation": "You notice that, for the same prompt, the answers differ from one assistant to another: length, added information, quality of the language. The grid makes these differences visible and lets you choose for this task, without any overall ranking. If you ask the question again the next day, the answer will change again: hence the value of a backup option and of repeating the test from time to time."
    },
    "quiz": [
      {
        "question": "To compare assistants fairly, you need:",
        "options": [
          { "key": "A", "text": "to adapt the prompt to each tool" },
          { "key": "B", "text": "the same prompt, word for word, in a new conversation each time" },
          { "key": "C", "text": "to ask the question only once, in a single tool" },
          { "key": "D", "text": "to compare the icons" }
        ],
        "answer": "B",
        "explanation": "A fair test puts all assistants in the same conditions: the same text, with the same information, and a new conversation so that no earlier exchange influences the answer. If you adapt the prompt, you are comparing two different requests, not two tools."
      },
      {
        "question": "Which of these criteria is part of the grid?",
        "options": [
          { "key": "A", "text": "The colour of the app" },
          { "key": "B", "text": "The number of downloads" },
          { "key": "C", "text": "The answer makes up no information" },
          { "key": "D", "text": "The speed of the connection" }
        ],
        "answer": "C",
        "explanation": "The grid has four criteria: the prompt is followed, no information is made up, the text is clear for the audience, the language is correct. Colour, popularity or network speed say nothing about the quality of the answer for your task."
      },
      {
        "question": "An assistant adds a promotion that Hadiza never offered. For the “nothing made up” criterion, you put:",
        "options": [
          { "key": "A", "text": "a cross" },
          { "key": "B", "text": "a tick" },
          { "key": "C", "text": "nothing" },
          { "key": "D", "text": "two ticks" }
        ],
        "answer": "A",
        "explanation": "The promotion is not in the prompt: it is made-up information, so it gets a cross. Sent as it is, it would commit Hadiza to an offer she never made to her customers. A single invention is enough for the cross."
      },
      {
        "question": "After the test, what does Hadiza keep?",
        "options": [
          { "key": "A", "text": "A single tool, for all her tasks" },
          { "key": "B", "text": "The tool people talk about the most" },
          { "key": "C", "text": "A choice for this task, and a backup option" },
          { "key": "D", "text": "No tool at all" }
        ],
        "answer": "C",
        "explanation": "The test does not name a universal winner: it sheds light on one specific task. Hadiza keeps the assistant that passed her grid for this message, and notes a second tool in reserve in case the first one lets her down. For another task, she will run another test."
      },
      {
        "question": "Hadiza asks the same question again the next day. What happens?",
        "options": [
          { "key": "A", "text": "The answer may change: the test needs to be repeated from time to time" },
          { "key": "B", "text": "The answer is always identical" },
          { "key": "C", "text": "The assistant refuses to answer" },
          { "key": "D", "text": "The answer becomes paid" }
        ],
        "answer": "A",
        "explanation": "An assistant’s answers vary from one time to the next, and tools change with their updates. So a test is never final: you repeat it from time to time and keep a backup option."
      }
    ],
    "reflection": "For which task in your week do you use an AI assistant simply because everybody uses it, and which criterion of the grid would you check first for that task?",
    "glossary": [
      {
        "term": "AI assistant",
        "definition": "An app you talk to in writing or by voice to get a text, an answer or an idea, such as Gemini, ChatGPT, Claude or Copilot. Each has its strengths, but none wins everywhere."
      },
      {
        "term": "RCTF prompt",
        "definition": "A request written in four blocks: Role, Context, Task, Format. For a fair test, the same prompt is pasted word for word into each assistant."
      },
      {
        "term": "New conversation",
        "definition": "A blank chat thread, without the previous exchanges. Like a blank sheet, it ensures that every assistant starts from the same information."
      },
      {
        "term": "Test grid",
        "definition": "A table with one column per assistant and one row per criterion (prompt, nothing made up, clarity, language), filled with ticks and crosses, with no total and no ranking."
      },
      {
        "term": "Made-up information",
        "definition": "A detail an assistant adds even though you never gave it: price, promotion, address, date. It is often stated in a very confident tone; a single invention earns a cross in the grid."
      },
      {
        "term": "Backup option (plan B)",
        "definition": "A second tool kept in reserve for a task, in case the first one is unavailable, reaches its free limit or behaves differently after an update."
      }
    ]
  },
  "ha": {
    "id": "og2",
    "lessonNumber": 2,
    "title": "Kwatanta Gemini, ChatGPT, Claude da Copilot a kan aikinku na kanku",
    "objective": "A karshen wannan darasi, za ku san yadda ake gwada mataimakan AI da dama a kan aikinku na kanku. Za ku san yadda ake manna umarnin RCTF iri daya, kalma da kalma, a cikin mataimakan AI kyauta da dama, kowane lokaci a cikin sabuwar tattaunawa. Za ku san yadda ake cike teburin gwaji mai ma’auni hudu (an bi umarni, ba a kirkiri komai ba, bayyananne, harshe) ba tare da jera su a matsayi ba. Kuma za ku san yadda ake zabar kayan aiki don wannan aiki, tare da plan B, kuna sane cewa dole a sake gwajin lokaci zuwa lokaci.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Dalilin da ya sa « wanda kowa ke amfani da shi » bai isa ba don zabar mataimaki",
        "body": "Idan aka fara amfani da AI, ana neman shawara daga mutanen da ke kusa, kuma amsar da aka saba ji ita ce: « dauki wanda kowa ke amfani da shi ». Kamar sayen injin dinki ne saboda makwabciyarku tana da shi: watakila ya dace da aikinta, amma bai gaya muku komai game da naku ba. Bayan wannan shawara akwai rashin fahimta: tunanin cewa mataimakin AI guda daya ne mafi kyau a kowane abu, a ko’ina, ga kowa. Ba haka ba ne.\n\nKu bude Gemini, ChatGPT, Claude da Copilot a sigarsu ta kyauta: wurin rubutu iri daya, kamanni iri daya, alkawarin amsa komai iri daya. Babu wani abu a shafin farko da zai gaya muku wanne zai rubuta sako mafi daidai ga kwastomominku, takaitaccen rahoto mafi aminci, ko fassara mafi dadi a harshenku. Dan kasuwa a Cotonou da ke sanar da isowar sabbin kaya, daliba a Abidjan da ke shirya gabatarwa, da ma’aikacin lafiya a Kinshasa da ke rubuta rahoto, ba aiki daya suke yi ba: ba lallai ne su sami kayan aiki mai kyau iri daya ba.\n\nHanya daya ta gaskiya don sani ita ce ku gwada mataimakan a kan aikinku na kanku, da wata hanya mai sauki ta matakai uku: umarni iri daya ga kowa, teburin ma’auni hudu don karanta amsoshi, sannan zabi don wannan aiki, tare da plan B. Gwajin yana bukatar mintuna kadan da waya kawai, kuma sakamakonsa yana aiki a gare ku, ba ga matsakaicin mai amfani da intanet ba."
      },
      {
        "title": "Manna umarni iri daya, kalma da kalma, a cikin sabuwar tattaunawa",
        "body": "Kwatantawa shi ne sanya abubuwa biyu a yanayi iri daya. A kasuwa, don sanin wane sikeli ne daidai, ana auna buhun shinkafa iri daya a kan kowanne; idan aka auna shinkafa a kan daya, gero a kan dayan, ba a kwatanta sikelin kuma. Haka abin yake ga mataimakan AI: rubutu iri daya, wanda aka kwafa aka manna kalma da kalma, da bayanai iri daya, ba kari ba ragi. Idan kun kara wani bayani a kayan aiki daya kuka manta da shi a wani, kuna kwatanta bukatu biyu ne daban-daban, ba kayan aiki biyu ba.\n\nKu kuma bude sabuwar tattaunawa kowane lokaci. Mataimaki yana la’akari da abin da aka fada a sama a cikin tattaunawa daya, wasu kuma suna ajiye abubuwan da kuke so a ma’ajiyarsu: tsohuwar tattaunawa a kan wani batu na iya shafar amsar. Sabuwar tattaunawa kamar farar takarda ce, iri daya ga kowa. Don gwajin ya zama na adalci, ku yi shi a rana daya, a kan na’ura daya, da hanyar sadarwa daya.\n\nDon rubuta wannan umarni, ku yi amfani da RCTF, hanyarmu ta gida: Rawa (wanene mataimakin zai zama), Mahallin (halin da kuke ciki da bayanan da za a yi amfani da su), Aiki (abin da kuke so, da abin da kada ya yi), Tsari (tsawo, sauti, harshe). Sakatariyar wata kungiya a Bamako da ke son kiran mambobi zuwa taro za ta sa wurin, ranar da ajandar taron a cikin Mahallin, sannan « rabin shafi, sauti mai ladabi » a cikin Tsari. Cikakken umarni yana ba kowane mataimaki dama iri daya; umarni maras bayani (« yi mini talla ») yana barin kowanne ya yi hasashe, sai gwajin ya rika auna yadda kowanne ke hasashe kawai."
      },
      {
        "title": "Cike teburin ma’auni hudu: umarni, ba kirkira, bayyananne, harshe",
        "body": "Bayan kun sami amsoshi, kada ku zaba bisa ra’ayi kawai. Teburin gwaji tebur ne mai sauki: layi na tsaye daya ga kowane mataimaki, layi na kwance daya ga kowane ma’auni, kuma a kowane akwati alamar daidai ko alamar kuskure (giciye). Kamar jerin dubawa na mai kula da rumbu ne, wanda ke duba kowane kunshi da tambayoyi iri daya. Ba a hada jimla, ba a ba da taurari: ana duba abin da ke da muhimmanci ga aikinku.\n\nMa’auni na farko: an bi umarnin? Tsawon da aka nema, bayanan da aka tanada, harsuna biyu idan kun nemi haka. Ma’auni na biyu: babu bayanin da aka kirkira? Mataimaki na iya kara farashi, ragin farashi, adireshi ko rana da ba ku taba bayarwa ba, cikin sauti mai cike da tabbaci. Kirkira guda daya ta isa a sa giciye: idan aka aika wa kwastomominku, ta daure ku. Ma’auni na uku: rubutun a bayyane yake ga masu karatunku, wato wadanda za su karanta shi a zahiri?\n\nMa’auni na hudu: harshen daidai ne? Mataimakan AI sukan kware a Faransanci ko Turanci, amma ba haka ba a harsunan da ba su yawaita a intanet ba, kamar Hausa, Wolof, Bambara ko Lingala: jumloli da aka fassara kai tsaye, kalmomin da babu su, salon magana da ba ya dace. Wannan ma’auni yana bukatar mutum: ku sa mai jin harshen ya duba, ku da kanku idan harshenku ne, ko kuma dan uwa ko abokin aiki. Kuma ku sa alamar daidai kawai ga abin da kuka gani a cikin amsar: idan kuna shakka, ku sa giciye."
      },
      {
        "title": "Karanta karfin kowane mataimaki, zabi don aiki daya, kuma ku ajiye plan B",
        "body": "Kowane mataimaki yana da karfinsa, kuma ayyuka ne, ba halaye ba. Gemini yana hade da ayyukan Google kuma yana kirkirar hotuna. Copilot yana cikin Windows, burauzar Edge da injin bincike Bing. ChatGPT yana hada murya, hotuna, fayiloli da bincike. Claude ya fi mayar da hankali kan rubutu da nazarin takardu. Wadannan karfin suna taimaka muku sanin abin da za ku gwada, amma ba sa gaya muku wanda zai rubuta muku rubutu mafi kyau, kuma suna canzawa: ku duba su a cikin manhajarku. Don aikinku, gwajinku ne ke yanke hukunci.\n\nDon haka sakamakon gwaji ba zakara ba ne, zabi ne don wannan aiki, tare da plan B: kayan aiki na biyu da aka ajiye, kamar katin SIM na biyu da ake ajiyewa idan babbar hanyar sadarwa ta dauke. Plan B yana amfani idan kayan aikin da aka zaba ba ya samuwa, idan kun kai iyakar amfani kyauta ta ranar, ko idan ya ba ku amsa mara kyau. Don wani aiki daban, kamar takaita takarda ko shirya darasi, ku sake gwaji: zabin na iya bambanta.\n\nAbu na karshe, wanda yakan ba mutane mamaki: ku yi wa mataimaki daya tambaya daya gobe, ba za ku sami amsa iri daya ba. Amsoshi suna bambanta daga wani lokaci zuwa wani, kuma kayan aiki suna canzawa da sabuntawarsu. Gwaji ba ya karewa har abada: ku sake shi lokaci zuwa lokaci, misali idan wata amsa ta ba ku kunya, ku rubuta sakamakon tare da kwanan wata. Shi ya sa hanyar ta fi muhimmanci fiye da kayan aikin da ake yayi."
      }
    ],
    "example": {
      "title": "Sakon biki na Hadiza, an gwada shi a mataimakan AI hudu",
      "challenge": "Hadiza tana da bitar dinki kusa da babbar kasuwar Zinder, a Nijar. Don lokacin biki, tana son sanar da kwastomominta sababbin samfuran dinkinta ta sakon WhatsApp, cikin Faransanci da Hausa. Wata kawarta ’yar kasuwa ta ba ta shawarar ta dauki « wanda kowa ke amfani da shi ». Amma abin da ke cikin hadari a zahiri yake: tana bukatar sako daidai, bayyananne, ba tare da bayanin da aka kirkira ba, a cikin harsunan kwastomominta biyu. Ragin farashi na karya ko adireshi mara daidai zai sa ta rasa amincewar kwastomominta.",
      "solution": "Hadiza ta rubuta umarninta a sassa hudu na RCTF: rawa (marubucin sakonni na karamin shago, mai fara’a kuma mai daidaito), mahallin (mai dinki, kwastomomi a WhatsApp cikin Faransanci da Hausa, bita kusa da babbar kasuwar Zinder, a bude daga karfe 8 na safe zuwa 6 na yamma, a yi oda kafin ranar 15 ga wata), aiki (sanar da samfuran biki ba tare da kirkirar farashi, ragin farashi ko adireshi ba), tsari (layi biyar a mafi yawa, sauti mai fara’a, siga cikin Faransanci sannan siga cikin Hausa). Ta manna shi kalma da kalma a Gemini, ChatGPT, Claude da Copilot, sigar kyauta, kowanne a cikin sabuwar tattaunawa, a rana daya, a waya daya da hanyar sadarwa daya. Sannan ta cike teburinta amsa bayan amsa: layi biyar tare da wuri da lokutan aiki? Farashi, ragin farashi ko adireshi da aka kirkira? Rubutu bayyananne? Hausa daidai, wadda ta duba da kanta? Ba tare da hada jimla ba, ta zabi don wannan aiki mataimakin da ya wuce teburinta, kuma ta rubuta kayan aiki na biyu a matsayin plan B.",
      "impact": "Kwastomominta sun karbi sako bayyananne, cikin Faransanci da Hausa, da wurin da ya dace, lokutan aiki daidai da ranar karshe daidai, ba tare da farashi ko ragin farashi da aka kirkira ba. Hadiza ta san wane mataimaki za ta rike don irin wannan sako, tana da plan B idan ya kasa, kuma tana iya sake irin wannan gwaji don sauran ayyukanta."
    },
    "practice": {
      "title": "Ku gwada mataimakan AI uku a kan aikinku na kanku",
      "instructions": [
        "Ku zabi wani aiki na gaske na makonku (sako ga kwastomominku, sanarwar taro, takaitawa, fassara) kuma ku daidaita wannan umarnin RCTF ta hanyar maye gurbin abin da ke cikin baka mai kusurwa: Rawa: kai marubucin sakonni ne na karamin shago, mai fara’a kuma mai daidaito. Mahallin: ni [mai dinki] ce kuma ina da [bita kusa da babbar kasuwar garinmu]. Kwastomomina suna karanta sakonnina a WhatsApp, cikin [Faransanci] da [Hausa]. Bayanan da za a yi amfani da su: [wuri]; [lokutan aiki]; [a yi oda kafin …]. Aiki: rubuta sako don sanar da kwastomomina [sababbin samfuran bitata na biki]. Kada ka kirkiri wani bayani daban (ba farashi, ba ragin farashi, ba adireshi). Tsari: layi biyar a mafi yawa, sauti mai fara’a. Siga daya cikin [Faransanci], sannan siga daya cikin [Hausa].",
        "Ku manna wannan umarni iri daya, kalma da kalma, a cikin mataimakan AI uku na kyauta (misali Gemini, ChatGPT, Claude ko Copilot), kowanne a cikin sabuwar tattaunawa, a rana daya kuma a kan na’ura daya.",
        "A kan takarda ko a cikin rubutu, ku cike teburin ma’auni hudu don kowace amsa (an bi umarni, babu bayanin da aka kirkira, bayyananne ga masu karatunku, harshe daidai wanda mai jin harshen ya duba), da alamar daidai ko giciye ba tare da hada jimla ba; sannan ku rubuta zabinku don wannan aiki da plan B dinku."
      ],
      "observation": "Za ku lura cewa, don umarni iri daya, amsoshi suna bambanta daga wani mataimaki zuwa wani: tsawo, bayanan da aka kara, ingancin harshe. Teburin yana nuna wadannan bambance-bambance a fili, kuma yana ba ku damar zaba don wannan aiki, ba tare da wani jerin matsayi na gaba daya ba. Idan kun sake yin tambayar washegari, amsar za ta sake canzawa: shi ya sa plan B da sake gwaji lokaci zuwa lokaci ke da amfani."
    },
    "quiz": [
      {
        "question": "Don kwatanta mataimakan AI cikin adalci, ana bukatar:",
        "options": [
          { "key": "A", "text": "daidaita umarnin ga kowane kayan aiki" },
          { "key": "B", "text": "umarni iri daya, kalma da kalma, a cikin sabuwar tattaunawa kowane lokaci" },
          { "key": "C", "text": "yin tambayar sau daya kawai, a kayan aiki daya" },
          { "key": "D", "text": "kwatanta alamomin manhajoji" }
        ],
        "answer": "B",
        "explanation": "Gwaji na adalci yana sanya duk mataimakan a yanayi iri daya: rubutu iri daya, da bayanai iri daya, da sabuwar tattaunawa don kada wata tattaunawa ta baya ta shafi amsar. Idan kun daidaita umarnin, kuna kwatanta bukatu biyu ne daban-daban, ba kayan aiki biyu ba."
      },
      {
        "question": "Wanne daga cikin wadannan ma’auni ne ke cikin teburin?",
        "options": [
          { "key": "A", "text": "Launin manhajar" },
          { "key": "B", "text": "Yawan saukarwa" },
          { "key": "C", "text": "Amsar ba ta kirkiri wani bayani ba" },
          { "key": "D", "text": "Saurin hanyar sadarwa" }
        ],
        "answer": "C",
        "explanation": "Teburin yana da ma’auni hudu: an bi umarni, ba a kirkiri wani bayani ba, rubutun a bayyane yake ga masu karatu, harshen daidai ne. Launi, shahara ko saurin hanyar sadarwa ba sa nuna komai game da ingancin amsar don aikinku."
      },
      {
        "question": "Wani mataimaki ya kara ragin farashi da Hadiza ba ta taba bayarwa ba. Don ma’aunin « ba kirkira », me za ku sa?",
        "options": [
          { "key": "A", "text": "giciye (alamar kuskure)" },
          { "key": "B", "text": "alamar daidai" },
          { "key": "C", "text": "babu komai" },
          { "key": "D", "text": "alamar daidai biyu" }
        ],
        "answer": "A",
        "explanation": "Ragin farashin ba ya cikin umarnin: bayani ne da aka kirkira, don haka giciye. Idan aka aika shi haka, zai daure Hadiza ga kwastomominta a kan tayin da ba ta taba yi ba. Kirkira guda daya ta isa a sa giciye."
      },
      {
        "question": "Bayan gwajin, me Hadiza ta rike?",
        "options": [
          { "key": "A", "text": "Kayan aiki daya kawai, don duk ayyukanta" },
          { "key": "B", "text": "Kayan aikin da aka fi magana a kansa" },
          { "key": "C", "text": "Zabi don wannan aiki, da plan B" },
          { "key": "D", "text": "Babu wani kayan aiki" }
        ],
        "answer": "C",
        "explanation": "Gwajin ba ya nada zakara na duniya: yana haskaka wani takamaiman aiki. Hadiza ta rike mataimakin da ya wuce teburinta don wannan sako, kuma ta rubuta kayan aiki na biyu a ajiye idan na farkon ya kasa. Don wani aiki daban, za ta sake wani gwaji."
      },
      {
        "question": "Hadiza ta sake yin tambaya iri daya washegari. Me zai faru?",
        "options": [
          { "key": "A", "text": "Amsar na iya canzawa: dole a sake gwajin lokaci zuwa lokaci" },
          { "key": "B", "text": "Amsar kullum iri daya ce" },
          { "key": "C", "text": "Mataimakin ya ki amsawa" },
          { "key": "D", "text": "Amsar ta zama ta biya" }
        ],
        "answer": "A",
        "explanation": "Amsoshin mataimaki suna bambanta daga wani lokaci zuwa wani, kuma kayan aiki suna canzawa da sabuntawarsu. Don haka gwaji ba ya karewa har abada: ana sake shi lokaci zuwa lokaci kuma ana ajiye plan B."
      }
    ],
    "reflection": "Wane aiki ne a cikin makonku kuke amfani da mataimakin AI don kawai kowa yana amfani da shi, kuma wane ma’auni na teburin za ku fara dubawa don wannan aiki?",
    "glossary": [
      {
        "term": "Mataimakin AI (assistant IA)",
        "definition": "Manhaja da ake tattaunawa da ita ta rubutu ko murya don samun rubutu, amsa ko ra’ayi, kamar Gemini, ChatGPT, Claude ko Copilot. Kowanne yana da karfinsa, amma babu wanda ya fi kowa a ko’ina."
      },
      {
        "term": "Umarnin RCTF (Rawa, Mahallin, Aiki, Tsari)",
        "definition": "Bukata da aka rubuta a sassa hudu: Rawa, Mahallin, Aiki, Tsari. Don gwaji na adalci, ana manna umarni iri daya kalma da kalma a cikin kowane mataimaki."
      },
      {
        "term": "Sabuwar tattaunawa (nouvelle conversation)",
        "definition": "Zaren tattaunawa mara komai, ba tare da musayar maganganun baya ba. Kamar farar takarda, tana tabbatar da cewa kowane mataimaki ya fara daga bayanai iri daya."
      },
      {
        "term": "Teburin gwaji (grille de test)",
        "definition": "Tebur mai layi na tsaye daya ga kowane mataimaki da layi na kwance daya ga kowane ma’auni (umarni, ba kirkira, bayyananne, harshe), wanda aka cike da alamar daidai da giciye, ba tare da jimla ko jerin matsayi ba."
      },
      {
        "term": "Bayanin da aka kirkira (information inventée)",
        "definition": "Wani bayani da mataimaki ya kara duk da cewa ba ku taba ba shi ba: farashi, ragin farashi, adireshi, rana. Ana fadin sa cikin sauti mai cike da tabbaci; kirkira guda daya tana samun giciye a teburin."
      },
      {
        "term": "Plan B (zabi na biyu a ajiye)",
        "definition": "Kayan aiki na biyu da aka ajiye don wani aiki, idan na farkon ba ya samuwa, ya kai iyakar amfani kyauta, ko ya canza hali bayan sabuntawa."
      }
    ]
  }
};
