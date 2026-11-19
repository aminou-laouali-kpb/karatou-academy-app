import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Choisir le bon outil IA gratuit et installer une IA open source » (outils-ia-gratuits) — leçon og4 (IA gratuite ou payante, protéger ses données)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 15 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const ogLesson4: Record<Language, LessonContent> = {
  "fr": {
    "id": "og4",
    "lessonNumber": 4,
    "title": "IA gratuite ou payante : ce que vous échangez vraiment, et comment protéger vos données",
    "objective": "À la fin de cette leçon, vous saurez ce que vous échangez contre un outil IA gratuit : pas d’argent, mais vos données, votre attention et des limites d’usage. Vous saurez aussi qu’une version payante ajoute des fonctions sans protéger automatiquement vos informations. Enfin, vous saurez régler votre assistant, utiliser la conversation temporaire, nettoyer votre historique et écrire votre propre règle de données en une phrase.",
    "video": {
      "fr": "https://www.youtube.com/embed/IRqQReIAhoY",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Gratuit ne veut pas dire sans prix : vous payez en données et en attention",
        "body": "Une version gratuite ne vous demande pas d’argent, mais elle a quand même un prix. Pensez à une radio gratuite : vous ne payez rien pour l’écouter, mais vous entendez des annonces, et la station sait ce qui plaît à son public. Avec un assistant IA, c’est un peu pareil. Selon l’outil et vos réglages, vos conversations peuvent servir à améliorer le service : on dit qu’elles servent à « entraîner l’outil ». Des publicités peuvent aussi apparaître, selon la version et le pays. Vous payez donc avec vos données et votre attention, et vous acceptez des limites d’usage.\n\nLe premier réflexe est de regarder votre historique. Chez la plupart des assistants, chaque conversation est gardée, avec son titre, tant que vous ne la supprimez pas. C’est pratique pour retrouver un travail. Mais cela veut dire aussi que tout ce que vous avez tapé reste stocké quelque part : un brouillon de lettre, une question de santé, ou la liste des clients de votre boutique.\n\nPrenez un pharmacien de Cotonou, au Bénin, qui colle des ordonnances avec le nom des patients pour obtenir un résumé, ou une agente d’ONG à Bamako, au Mali, qui dépose la liste des familles bénéficiaires d’une distribution. Ni l’un ni l’autre ne paie un franc. Pourtant, ils ont donné à l’outil des informations qui ne leur appartiennent pas : celles de leurs patients et de leurs bénéficiaires. Ce n’est pas une raison pour fuir le gratuit. C’est une raison pour savoir ce que l’on donne."
      },
      {
        "title": "Version payante : plus de fonctions, mais pas de protection automatique",
        "body": "Beaucoup de gens pensent que payer règle tout : « Payez, vous serez protégé. » C’est un malentendu. Une version payante ajoute surtout des fonctions et élargit des limites : des réponses plus longues, plus de fichiers à déposer, des outils en plus. Elle ne change pas, à elle seule, ce qui arrive à vos conversations. La confidentialité dépend des réglages, pas du paiement. C’est comme une serrure plus solide sur une porte que l’on laisse ouverte : tant que vous ne la fermez pas, elle ne vous protège pas.\n\nLa bonne démarche est donc de commencer par le gratuit, et de payer seulement si un vrai besoin apparaît dans votre travail : une limite que vous touchez tous les jours, une fonction qui vous manque vraiment. Un comptable d’Abidjan, en Côte d’Ivoire, peut avoir de bonnes raisons de passer à une version payante pour traiter de longs documents. Mais même après paiement, il doit ouvrir les réglages et vérifier ce qu’il a accepté.\n\nSoyez honnête avec vous-même : la plupart des usages du quotidien, comme rédiger un message, résumer un cours ou préparer une annonce, se font très bien avec une version gratuite bien réglée. Payer pour « être protégé » sans changer ses habitudes, c’est payer pour une fausse sécurité."
      },
      {
        "title": "Trois gestes pour protéger vos données dans votre assistant",
        "body": "Premier geste : coupez l’usage de vos conversations pour entraîner l’outil. Dans les réglages de la plupart des assistants, une rubrique des données ou de l’activité contient une option qui permet d’utiliser vos conversations pour améliorer le service. Son nom et sa place changent d’un outil à l’autre, et sa valeur de départ aussi : allez la chercher et décidez vous-même. Lisez ensuite le texte d’explication. Même réglée, la protection n’est pas totale : certaines conversations peuvent encore être relues pour la sécurité du service. Réglé ne veut pas dire invisible.\n\nDeuxième geste : utilisez la conversation temporaire pour un sujet sensible. Beaucoup d’assistants proposent ce mode, sous des noms proches. La conversation ne reste pas dans votre historique, comme une feuille de brouillon que l’on ne range pas dans le classeur. Troisième geste : supprimez ce qui doit disparaître. Une enseignante de Nairobi, au Kenya, qui a collé par erreur les notes nominatives de ses élèves, ouvre son historique et supprime cette conversation.\n\nEt surtout, une règle passe avant les trois gestes : ne tapez jamais un nom, un numéro de téléphone ni une photo de client. L’outil n’en a presque jamais besoin. Pour un message à envoyer à cent clientes, il lui suffit d’un modèle avec [prénom] entre crochets. Avec la méthode RCTF, vous le dites dès le Contexte : « Je ne te donne volontairement aucune donnée de client. » C’est vous qui remplacez ensuite [prénom], sur votre téléphone, au moment d’envoyer."
      },
      {
        "title": "Supprimer ne veut pas dire effacé partout : votre règle de données",
        "body": "Faites une petite prédiction. Vous avez supprimé une conversation qui contenait une liste de clients. Ces noms sont-ils effacés partout ? Pas forcément. Supprimer retire la conversation de votre vue. Une copie peut rester un temps chez l’éditeur, c’est-à-dire l’entreprise qui fait fonctionner l’outil, et la durée varie selon l’outil. C’est comme une lettre déchirée chez vous : vous ne la voyez plus, mais celui qui l’a reçue en a peut-être gardé une photocopie. D’où la règle la plus sûre : ne tapez jamais ce qui ne doit pas sortir.\n\nPour ne pas l’oublier, écrivez votre règle de données en une phrase, et gardez-la près de votre téléphone. Par exemple : « Jamais de nom, de numéro ni de photo de client dans une IA en ligne. » Ou, pour la trésorière d’une tontine à Conakry, en Guinée : « Je demande des modèles de messages, jamais je ne colle la liste des membres ni leurs numéros de mobile money. » Une règle courte se respecte mieux qu’une longue liste de précautions.\n\nIl existe aussi une autre voie. Une IA installée sur votre appareil, téléphone ou ordinateur, garde vos données chez vous : vos questions ne partent pas chez un éditeur. Ce sera l’objet des leçons 5 et 6."
      }
    ],
    "example": {
      "title": "Hadiza, couturière à Maradi : régler son assistant et refaire sa demande sans aucun client dedans",
      "challenge": "Hadiza tient un atelier de couture près du grand marché de Maradi, au Niger, et vend à ses clientes sur WhatsApp, en français et en haoussa (cas fictif). Pour préparer un message annonçant que les commandes sont prêtes, elle a collé dans son assistant gratuit la liste de ses clientes, avec leurs prénoms et leurs numéros. Une voisine lui conseille : « Payez, vous serez protégée. » Hadiza hésite : des données de clientes sont déjà confiées à un outil, et la solution proposée est une fausse sécurité.",
      "solution": "Dans son assistant (Gemini, version gratuite, sur son téléphone Android), Hadiza ouvre les réglages, rubrique des données, et désactive l’option qui permet d’utiliser ses conversations pour améliorer le service. Elle lit l’explication : même ainsi réglées, certaines conversations peuvent encore être relues pour la sécurité du service. Pour les sujets sensibles, elle apprend à ouvrir une conversation temporaire. Elle supprime ensuite la conversation qui contient la liste de clientes. Enfin, elle refait sa demande en RCTF, sans nom ni numéro : « Rôle : tu es un assistant de rédaction pour un petit commerce, chaleureux et poli. Contexte : je suis couturière et je préviens mes clientes sur WhatsApp. Je ne te donne volontairement aucune donnée de client. Tâche : rédige un modèle de message pour prévenir une cliente que sa commande est prête. Laisse des crochets à la place du prénom : [prénom]. Format : cinq lignes au plus, ton chaleureux et poli. Ne me demande aucun nom, aucun numéro, aucune photo. »",
      "impact": "À l’écran, trois résultats visibles : un réglage désactivé, une conversation supprimée et une demande propre. Hadiza obtient un modèle de message réutilisable, où elle remplace elle-même [prénom] avant chaque envoi. Elle garde la version gratuite, ses clientes restent anonymes pour l’outil, et elle a désormais une règle simple : aucun nom ni numéro de cliente dans l’assistant."
    },
    "practice": {
      "title": "Réglez votre assistant et nettoyez votre historique",
      "instructions": [
        "Ouvrez les réglages de votre assistant principal (Gemini, ChatGPT, Claude ou un autre), trouvez la rubrique des données ou de l’activité et l’option sur l’usage de vos conversations pour améliorer le service. Lisez le texte d’explication, puis décidez de l’activer ou non.",
        "Repérez la conversation temporaire et essayez-la avec une demande sans aucune donnée personnelle, par exemple cette consigne RCTF, en adaptant ce qui est entre crochets : « Rôle : tu es un assistant de rédaction pour un petit commerce, chaleureux et poli. Contexte : je suis [couturière] et je préviens mes clientes sur WhatsApp. Je ne te donne volontairement aucune donnée de client. Tâche : rédige un modèle de message pour prévenir une cliente que [sa commande est prête]. Laisse des crochets à la place du prénom : [prénom]. Format : cinq lignes au plus, ton chaleureux et poli. Ne me demande aucun nom, aucun numéro, aucune photo. »",
        "Relisez votre historique de conversations, supprimez toute conversation qui contient un nom, un numéro ou une photo, puis écrivez votre règle de données en une phrase et gardez-la dans les notes de votre téléphone."
      ],
      "observation": "Vous constatez que l’option sur l’usage des conversations existe bien, parfois sous un autre nom, et que son texte d’explication reconnaît des limites. Vous voyez que la conversation temporaire n’apparaît pas dans votre historique, et que l’assistant rédige un modèle de message utile sans connaître aucun de vos clients : vos données personnelles ne lui étaient pas nécessaires."
    },
    "quiz": [
      {
        "question": "Une version gratuite coûte :",
        "options": [
          { "key": "A", "text": "Rien du tout, sans contrepartie" },
          { "key": "B", "text": "Pas d’argent, mais vos données et votre attention peuvent servir" },
          { "key": "C", "text": "Toujours de l’argent caché" },
          { "key": "D", "text": "Votre téléphone" }
        ],
        "answer": "B",
        "explanation": "Gratuit ne veut pas dire sans prix. Vous ne payez pas d’argent, mais vos conversations peuvent servir à améliorer le service, et des publicités peuvent apparaître selon la version et le pays. Vous payez avec vos données et votre attention, comme l’auditeur d’une radio gratuite entend des annonces."
      },
      {
        "question": "Que change une version payante ?",
        "options": [
          { "key": "A", "text": "Elle garantit la confidentialité" },
          { "key": "B", "text": "Elle supprime vos conversations" },
          { "key": "C", "text": "Elle ajoute des fonctions ; les réglages restent à vérifier" },
          { "key": "D", "text": "Elle rend l’IA toujours exacte" }
        ],
        "answer": "C",
        "explanation": "La version payante ajoute des fonctions et élargit des limites. Elle ne protège pas automatiquement vos données : la confidentialité dépend des réglages, pas du paiement. Même après paiement, il faut ouvrir les réglages et vérifier. Et aucune version ne rend l’IA infaillible."
      },
      {
        "question": "Quel geste limite l’usage de vos conversations pour entraîner l’outil ?",
        "options": [
          { "key": "A", "text": "Changer de fond d’écran" },
          { "key": "B", "text": "Écrire plus vite" },
          { "key": "C", "text": "Fermer l’application" },
          { "key": "D", "text": "Désactiver l’option dans les réglages de données" }
        ],
        "answer": "D",
        "explanation": "C’est dans les réglages, rubrique des données ou de l’activité, que se trouve l’option qui permet d’utiliser vos conversations pour améliorer le service. La désactiver est le premier des trois gestes de protection. Fermer l’application ou écrire plus vite ne change rien à ce que l’outil garde."
      },
      {
        "question": "Pour un sujet sensible, que choisissez-vous ?",
        "options": [
          { "key": "A", "text": "Une conversation temporaire, sans nom ni numéro" },
          { "key": "B", "text": "L’historique habituel" },
          { "key": "C", "text": "Un message WhatsApp" },
          { "key": "D", "text": "Un groupe public" }
        ],
        "answer": "A",
        "explanation": "La conversation temporaire ne reste pas dans votre historique : c’est le bon mode pour un sujet sensible. Mais elle ne dispense pas de la règle principale : même là, on ne tape ni nom ni numéro. L’historique habituel garde tout, et un groupe public expose encore davantage."
      },
      {
        "question": "Hadiza a supprimé une conversation. Que sait-on ?",
        "options": [
          { "key": "A", "text": "Tout est effacé partout, pour toujours" },
          { "key": "B", "text": "Rien n’a changé" },
          { "key": "C", "text": "Elle disparaît de votre vue, mais une copie peut rester un temps : ne tapez pas de données sensibles" },
          { "key": "D", "text": "L’IA oublie son entraînement" }
        ],
        "answer": "C",
        "explanation": "Supprimer retire la conversation de votre historique, ce qui est utile. Mais une copie peut rester un temps chez l’éditeur de l’outil, pour une durée qui varie selon l’outil. Supprimer aide, sans remplacer la prudence : la règle la plus sûre reste de ne jamais taper ce qui ne doit pas sortir."
      }
    ],
    "reflection": "Quelle information sur vos clients, vos collègues, vos élèves ou votre famille avez-vous déjà tapée dans un assistant IA, et quelle règle de données en une phrase allez-vous adopter à partir d’aujourd’hui ?",
    "glossary": [
      {
        "term": "Données personnelles",
        "definition": "Toute information qui permet de reconnaître une personne : nom, numéro de téléphone, photo, adresse, numéro de compte mobile money. Celles de vos clients, élèves ou bénéficiaires ne vous appartiennent pas : vous en êtes le gardien."
      },
      {
        "term": "Entraîner l’outil",
        "definition": "Utiliser des conversations pour améliorer le service d’un assistant IA. Selon l’outil et vos réglages, ce que vous tapez peut servir à cela, comme un cahier d’exercices qu’un enseignant relit pour améliorer ses cours."
      },
      {
        "term": "Version payante",
        "definition": "Formule d’un outil IA pour laquelle on paie. Elle ajoute des fonctions et élargit des limites, mais ne protège pas automatiquement vos données : la confidentialité dépend des réglages, pas du paiement."
      },
      {
        "term": "Réglages de données",
        "definition": "Rubrique des réglages d’un assistant (parfois appelée « activité » ou « confidentialité ») où l’on décide si ses conversations peuvent servir à améliorer le service. Son nom et sa place varient d’un outil à l’autre."
      },
      {
        "term": "Conversation temporaire",
        "definition": "Mode d’un assistant où la conversation ne reste pas dans votre historique, comme une feuille de brouillon que l’on ne range pas. Utile pour un sujet sensible, mais on n’y tape toujours ni nom ni numéro."
      },
      {
        "term": "Règle de données",
        "definition": "Votre consigne personnelle, écrite en une phrase, sur ce que vous ne taperez jamais dans une IA en ligne. Exemple : « Jamais de nom, de numéro ni de photo de client dans une IA en ligne. »"
      }
    ]
  },
  "en": {
    "id": "og4",
    "lessonNumber": 4,
    "title": "Free or paid AI: what you really trade, and how to protect your data",
    "objective": "By the end of this lesson, you will know what you trade for a free AI tool: not money, but your data, your attention and usage limits. You will also know that a paid version adds features without automatically protecting your information. Finally, you will know how to adjust your assistant’s settings, use a temporary chat, clean up your chat history and write your own one-sentence data rule.",
    "video": {
      "fr": "https://www.youtube.com/embed/IRqQReIAhoY",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Free does not mean no price: you pay with your data and your attention",
        "body": "A free version does not ask you for money, but it still has a price. Think of a free radio station: you pay nothing to listen, but you hear adverts, and the station knows what its audience likes. An AI assistant works in a similar way. Depending on the tool and your settings, your conversations may be used to improve the service: we say they are used to “train the tool”. Adverts may also appear, depending on the version and the country. So you pay with your data and your attention, and you accept usage limits.\n\nThe first reflex is to look at your chat history. In most assistants, every conversation is kept, with its title, until you delete it. That is handy for finding past work. But it also means that everything you typed is stored somewhere: a draft letter, a health question, or the list of your shop’s customers.\n\nTake a pharmacist in Cotonou, Benin, who pastes prescriptions with patients’ names to get a summary, or an NGO officer in Bamako, Mali, who uploads the list of families receiving a food distribution. Neither of them pays a single franc. Yet they have given the tool information that does not belong to them: that of their patients and their beneficiaries. This is no reason to avoid free tools. It is a reason to know what you are giving."
      },
      {
        "title": "Paid version: more features, but no automatic protection",
        "body": "Many people think that paying fixes everything: “Pay, and you’ll be protected.” That is a misunderstanding. A paid version mainly adds features and raises limits: longer answers, more files to upload, extra tools. On its own, it does not change what happens to your conversations. Privacy depends on settings, not on payment. It is like a stronger lock on a door you leave open: until you close it, it does not protect you.\n\nThe right approach is to start with the free version, and pay only if a real need appears in your work: a limit you hit every day, a feature you truly miss. An accountant in Abidjan, Côte d’Ivoire, may have good reasons to switch to a paid version to handle long documents. But even after paying, he must open the settings and check what he has agreed to.\n\nBe honest with yourself: most everyday uses, such as writing a message, summarising a course or preparing an announcement, work very well with a well-configured free version. Paying to “be protected” without changing your habits means paying for a false sense of security."
      },
      {
        "title": "Three steps to protect your data in your assistant",
        "body": "First step: turn off the use of your conversations to train the tool. In most assistants’ settings, a data or activity section contains an option that lets your conversations be used to improve the service. Its name and location vary from one tool to another, and so does its default value: go and find it, and decide for yourself. Then read the explanation text. Even when switched off, protection is not total: some conversations may still be reviewed for the safety of the service. Configured does not mean invisible.\n\nSecond step: use a temporary chat for a sensitive topic. Many assistants offer this mode, under similar names. The conversation does not stay in your chat history, like a scrap of paper you do not file away. Third step: delete what needs to disappear. A teacher in Nairobi, Kenya, who pasted her pupils’ named marks by mistake, opens her chat history and deletes that conversation.\n\nAbove all, one rule comes before the three steps: never type a customer’s name, phone number or photo. The tool almost never needs them. To write a message for a hundred customers, a template with [first name] in brackets is enough. With the RCTF method, you say so right in the Context: “I am deliberately giving you no customer data.” You then replace [first name] yourself, on your phone, when you send it."
      },
      {
        "title": "Deleted does not mean erased everywhere: your data rule",
        "body": "Make a small prediction. You deleted a conversation that contained a list of customers. Are those names erased everywhere? Not necessarily. Deleting removes the conversation from your view. A copy may remain for a while with the provider, that is, the company that runs the tool, and how long varies from tool to tool. It is like tearing up a letter at home: you no longer see it, but the person who received it may have kept a photocopy. Hence the safest rule: never type what must not get out.\n\nSo you do not forget it, write your data rule in one sentence and keep it close to your phone. For example: “Never a customer’s name, number or photo in an online AI.” Or, for the treasurer of a savings group in Conakry, Guinea: “I ask for message templates; I never paste the list of members or their mobile money numbers.” A short rule is easier to follow than a long list of precautions.\n\nThere is also another way. An AI installed on your own device, phone or computer, keeps your data with you: your questions are not sent to a provider. That will be the topic of Lessons 5 and 6."
      }
    ],
    "example": {
      "title": "Hadiza, a seamstress in Maradi: adjusting her assistant and redoing her request with no customer in it",
      "challenge": "Hadiza runs a sewing workshop near the main market in Maradi, Niger, and sells to her customers on WhatsApp, in French and in Hausa (fictional case). To prepare a message announcing that orders are ready, she pasted the list of her customers, with their first names and phone numbers, into her free assistant. A neighbour advises her: “Pay, and you’ll be protected.” Hadiza hesitates: customer data has already been handed to a tool, and the suggested solution is a false sense of security.",
      "solution": "In her assistant (Gemini, free version, on her Android phone), Hadiza opens the settings, data section, and turns off the option that lets her conversations be used to improve the service. She reads the explanation: even with this setting, some conversations may still be reviewed for the safety of the service. For sensitive topics, she learns to open a temporary chat. She then deletes the conversation containing the customer list. Finally, she redoes her request using RCTF, with no name or number: “Role: you are a writing assistant for a small business, warm and polite. Context: I am a seamstress and I notify my customers on WhatsApp. I am deliberately giving you no customer data. Task: write a message template to let a customer know that her order is ready. Leave brackets in place of the first name: [first name]. Format: five lines at most, warm and polite tone. Do not ask me for any name, number or photo.”",
      "impact": "On screen, three visible results: a setting turned off, a conversation deleted and a clean request. Hadiza gets a reusable message template in which she replaces [first name] herself before each message. She keeps the free version, her customers remain anonymous to the tool, and she now has a simple rule: no customer name or number in the assistant."
    },
    "practice": {
      "title": "Adjust your assistant and clean up your chat history",
      "instructions": [
        "Open the settings of your main assistant (Gemini, ChatGPT, Claude or another), find the data or activity section and the option about using your conversations to improve the service. Read the explanation text, then decide whether to turn it on or off.",
        "Find the temporary chat and try it with a request that contains no personal data, for example this RCTF prompt, adapting what is in brackets: “Role: you are a writing assistant for a small business, warm and polite. Context: I am a [seamstress] and I notify my customers on WhatsApp. I am deliberately giving you no customer data. Task: write a message template to let a customer know that [her order is ready]. Leave brackets in place of the first name: [first name]. Format: five lines at most, warm and polite tone. Do not ask me for any name, number or photo.”",
        "Go through your chat history, delete any conversation that contains a name, a number or a photo, then write your data rule in one sentence and keep it in your phone’s notes."
      ],
      "observation": "You notice that the option about using your conversations does exist, sometimes under another name, and that its explanation text admits limits. You see that the temporary chat does not appear in your chat history, and that the assistant writes a useful message template without knowing any of your customers: it did not need your personal data."
    },
    "quiz": [
      {
        "question": "A free version costs:",
        "options": [
          { "key": "A", "text": "Nothing at all, with nothing in return" },
          { "key": "B", "text": "No money, but your data and your attention may be used" },
          { "key": "C", "text": "Always some hidden money" },
          { "key": "D", "text": "Your phone" }
        ],
        "answer": "B",
        "explanation": "Free does not mean no price. You pay no money, but your conversations may be used to improve the service, and adverts may appear depending on the version and the country. You pay with your data and your attention, just as a listener of a free radio station hears adverts."
      },
      {
        "question": "What does a paid version change?",
        "options": [
          { "key": "A", "text": "It guarantees privacy" },
          { "key": "B", "text": "It deletes your conversations" },
          { "key": "C", "text": "It adds features; the settings still need checking" },
          { "key": "D", "text": "It makes the AI always accurate" }
        ],
        "answer": "C",
        "explanation": "A paid version adds features and raises limits. It does not automatically protect your data: privacy depends on settings, not on payment. Even after paying, you need to open the settings and check. And no version makes AI infallible."
      },
      {
        "question": "Which step limits the use of your conversations to train the tool?",
        "options": [
          { "key": "A", "text": "Changing your wallpaper" },
          { "key": "B", "text": "Typing faster" },
          { "key": "C", "text": "Closing the app" },
          { "key": "D", "text": "Turning off the option in the data settings" }
        ],
        "answer": "D",
        "explanation": "The option that lets your conversations be used to improve the service is found in the settings, in the data or activity section. Turning it off is the first of the three protection steps. Closing the app or typing faster changes nothing about what the tool keeps."
      },
      {
        "question": "For a sensitive topic, what do you choose?",
        "options": [
          { "key": "A", "text": "A temporary chat, with no name or number" },
          { "key": "B", "text": "Your usual chat history" },
          { "key": "C", "text": "A WhatsApp message" },
          { "key": "D", "text": "A public group" }
        ],
        "answer": "A",
        "explanation": "A temporary chat does not stay in your chat history: it is the right mode for a sensitive topic. But it does not exempt you from the main rule: even there, you type no name and no number. The usual chat history keeps everything, and a public group exposes even more."
      },
      {
        "question": "Hadiza deleted a conversation. What do we know?",
        "options": [
          { "key": "A", "text": "Everything is erased everywhere, forever" },
          { "key": "B", "text": "Nothing has changed" },
          { "key": "C", "text": "It disappears from your view, but a copy may remain for a while: do not type sensitive data" },
          { "key": "D", "text": "The AI forgets its training" }
        ],
        "answer": "C",
        "explanation": "Deleting removes the conversation from your chat history, which is useful. But a copy may remain for a while with the tool’s provider, for a length of time that varies from tool to tool. Deleting helps, but it does not replace caution: the safest rule is still never to type what must not get out."
      }
    ],
    "reflection": "What information about your customers, colleagues, pupils or family have you already typed into an AI assistant, and what one-sentence data rule will you adopt from today?",
    "glossary": [
      {
        "term": "Personal data",
        "definition": "Any information that identifies a person: name, phone number, photo, address, mobile money account number. Your customers’, pupils’ or beneficiaries’ data does not belong to you: you are its guardian."
      },
      {
        "term": "Train the tool",
        "definition": "Using conversations to improve an AI assistant’s service. Depending on the tool and your settings, what you type may be used for this, like an exercise book a teacher reads to improve their lessons."
      },
      {
        "term": "Paid version",
        "definition": "A plan of an AI tool that you pay for. It adds features and raises limits, but does not automatically protect your data: privacy depends on settings, not on payment."
      },
      {
        "term": "Data settings",
        "definition": "The section of an assistant’s settings (sometimes called “activity” or “privacy”) where you decide whether your conversations may be used to improve the service. Its name and location vary from one tool to another."
      },
      {
        "term": "Temporary chat",
        "definition": "A mode of an assistant in which the conversation does not stay in your chat history, like a scrap of paper you do not file away. Useful for a sensitive topic, but you still type no name and no number."
      },
      {
        "term": "Data rule",
        "definition": "Your personal guideline, written in one sentence, about what you will never type into an online AI. Example: “Never a customer’s name, number or photo in an online AI.”"
      }
    ]
  },
  "ha": {
    "id": "og4",
    "lessonNumber": 4,
    "title": "AI kyauta ko ta biya: abin da kuke musanyawa da gaske, da yadda za ku kare bayananku",
    "objective": "A karshen wannan darasi, za ku san abin da kuke bayarwa a madadin kayan aikin AI na kyauta: ba kudi ba, sai dai bayananku, hankalinku da iyakokin amfani. Za ku kuma san cewa sigar biya tana kara ayyuka, amma ba ta kare bayananku kai tsaye. A karshe, za ku san yadda ake daidaita saitunan mataimakinku, amfani da hira ta wucin gadi, tsaftace tarihin hirarrakinku, da rubuta dokar bayananku a jumla daya.",
    "video": {
      "fr": "https://www.youtube.com/embed/IRqQReIAhoY",
      "en": "",
      "ha": ""
    },
    "content": [
      {
        "title": "Kyauta ba ya nufin babu farashi: kuna biya da bayananku da hankalinku",
        "body": "Sigar kyauta ba ta neman kudi daga gare ku, amma tana da nata farashi: ba a biyan ta da kudi, sai da bayanai. Ku yi tunanin gidan rediyo na kyauta: ba ku biyan komai don sauraro, amma kuna jin tallace-tallace, kuma gidan rediyon ya san abin da masu sauraronsa ke so. Mataimakin AI ma haka yake. Gwargwadon kayan aikin da saitunanku, ana iya amfani da hirarrakinku don inganta sabis din: ana cewa ana amfani da su don « horar da kayan aikin ». Tallace-tallace ma na iya bayyana, gwargwadon sigar da kasar. Don haka kuna biya da bayananku da hankalinku, kuma kuna yarda da iyakokin amfani.\n\nAbu na farko shi ne ku duba tarihin hirarrakinku. A yawancin mataimaka, ana ajiye kowace hira, tare da takenta, har sai kun goge ta. Wannan yana da amfani don nemo aikin da kuka yi a baya. Amma kuma yana nufin duk abin da kuka rubuta yana ajiye a wani wuri: daftarin wasika, tambaya game da lafiya, ko jerin abokan cinikin shagonku.\n\nKu dauki misalin wani mai kantin magani a Cotonou, a Benin, wanda ke manna takardun likita tare da sunayen marasa lafiya don samun takaitawa, ko wata ma’aikaciyar kungiya mai zaman kanta a Bamako, a Mali, da ke saka jerin iyalan da ke karbar tallafin abinci. Babu wanda ya biya ko sisi. Duk da haka, sun ba kayan aikin bayanan da ba nasu ba: na marasa lafiyarsu da na wadanda suke taimakawa. Wannan ba dalili ba ne na guje wa kayan aikin kyauta. Dalili ne na sanin abin da kuke bayarwa."
      },
      {
        "title": "Sigar biya: karin ayyuka, amma babu kariya kai tsaye",
        "body": "Mutane da yawa suna tunanin cewa biya yana gyara komai: « Ku biya, za a kare ku. » Wannan rashin fahimta ne. Sigar biya tana kara ayyuka ne galibi kuma tana fadada iyakoki: amsoshi masu tsawo, karin fayiloli da za a saka, karin kayan aiki. Ita kadai ba ta canza abin da ke faruwa da hirarrakinku. Sirri ya dogara ne da saituna, ba da biya ba. Kamar makulli mai karfi ne a kan kofar da aka bari a bude: idan ba ku rufe ta ba, ba ya kare ku.\n\nHanya mafi kyau ita ce ku fara da sigar kyauta, ku biya ne kawai idan wata bukata ta gaske ta bayyana a aikinku: iyakar da kuke kaiwa kowace rana, ko aikin da kuke rasa da gaske. Wani akanta a Abidjan, a Cote d’Ivoire, yana iya samun dalilai masu kyau na komawa sigar biya don aiki da dogayen takardu. Amma ko bayan ya biya, dole ne ya bude saitunan ya duba abin da ya amince da shi.\n\nKu yi wa kanku gaskiya: yawancin ayyukan yau da kullum, kamar rubuta sako, takaita darasi ko shirya sanarwa, suna tafiya sosai da sigar kyauta da aka daidaita da kyau. Biya don « a kare ku » ba tare da canza dabi’unku ba, biya ne don tsaro na karya."
      },
      {
        "title": "Matakai uku don kare bayananku a cikin mataimakinku",
        "body": "Mataki na farko: ku kashe amfani da hirarrakinku don horar da kayan aikin. A cikin saitunan yawancin mataimaka, akwai sashen bayanai ko na ayyuka da ke dauke da zabin da ke ba da damar amfani da hirarrakinku don inganta sabis din. Sunansa da wurinsa suna canzawa daga wani kayan aiki zuwa wani, haka ma yadda aka saita shi tun farko: ku je ku nemo shi, ku yanke shawara da kanku. Sannan ku karanta rubutun bayaninsa. Ko bayan an daidaita shi, kariyar ba cikakkiya ba ce: ana iya sake karanta wasu hirarraki don tsaron sabis din. An daidaita ba ya nufin ba a gani.\n\nMataki na biyu: ku yi amfani da hira ta wucin gadi don batu mai muhimmanci na sirri. Mataimaka da yawa suna ba da wannan yanayin, da sunaye masu kama da juna. Hirar ba ta zama a cikin tarihin hirarrakinku, kamar takardar daftari da ba a ajiye a cikin fayil. Mataki na uku: ku goge abin da ya kamata ya bace. Wata malama a Nairobi, a Kenya, da ta manna makin dalibanta tare da sunayensu bisa kuskure, ta bude tarihin hirarrakinta ta goge wannan hirar.\n\nFiye da komai, akwai doka daya da ta riga matakan uku: kada ku taba rubuta sunan abokin ciniki, lambar wayarsa ko hotonsa. Kayan aikin kusan ba ya bukatar su. Don rubuta sako ga abokan ciniki dari, samfuri mai [suna] a cikin bakaken kusurwa ya isa. Da hanyar RCTF, kuna fadin haka tun a cikin Mahalli: « Da gangan ban ba ka wani bayanin abokin ciniki ba. » Sannan ku ne kuke maye gurbin [suna], a wayarku, lokacin aikawa."
      },
      {
        "title": "Gogewa ba ya nufin an share ko’ina: dokar bayananku",
        "body": "Ku yi dan hasashe. Kun goge wata hira da ke dauke da jerin abokan ciniki. Shin an share wadannan sunaye ko’ina? Ba lallai ba ne. Gogewa yana cire hirar daga ganinku. Kwafi na iya zama na wani lokaci a wurin mai kayan aikin, wato kamfanin da ke tafiyar da shi, kuma tsawon lokacin ya bambanta daga wani kayan aiki zuwa wani. Kamar yaga wasika a gida ne: ba ku sake ganinta, amma wanda ya karbe ta yana iya ajiye kwafinta. Saboda haka doka mafi aminci: kada ku taba rubuta abin da bai kamata ya fita ba.\n\nDon kada ku manta, ku rubuta dokar bayananku a jumla daya, ku ajiye ta kusa da wayarku. Misali: « Babu sunan abokin ciniki, lambarsa ko hotonsa a cikin AI ta yanar gizo. » Ko kuma, ga ma’ajiyar kungiyar adashe a Conakry, a Guinea: « Ina neman samfurin sakonni ne, ban taba manna jerin ’yan kungiya ko lambobinsu na mobile money ba. » Gajeriyar doka ta fi sauki a kiyaye fiye da dogon jerin matakan kariya.\n\nAkwai kuma wata hanya. AI da aka saka a kan na’urarku, waya ko kwamfuta, tana ajiye bayananku a wurinku: tambayoyinku ba sa zuwa wurin wani kamfani. Wannan shi ne batun Darasi na 5 da na 6."
      }
    ],
    "example": {
      "title": "Hadiza, tela a Maradi: daidaita mataimakinta da sake neman aikin ba tare da wani abokin ciniki a ciki ba",
      "challenge": "Hadiza tana da shagon dinki kusa da babbar kasuwar Maradi, a Nijar, kuma tana sayar wa kwastomominta ta WhatsApp, da Faransanci da Hausa (labari na kirkira). Don shirya sakon da ke sanar da cewa odoji sun kammala, ta manna jerin kwastomominta, tare da sunayensu da lambobin wayarsu, a cikin mataimakinta na kyauta. Wata makwabciyarta ta ba ta shawara: « Ki biya, za a kare ki. » Hadiza tana shakka: an riga an ba wani kayan aiki bayanan kwastomomi, kuma maganin da aka ba ta tsaro ne na karya.",
      "solution": "A cikin mataimakinta (Gemini, sigar kyauta, a wayarta ta Android), Hadiza ta bude saituna, sashen bayanai, ta kashe zabin da ke ba da damar amfani da hirarrakinta don inganta sabis din. Ta karanta bayanin: ko da wannan saitin, ana iya sake karanta wasu hirarraki don tsaron sabis din. Don batutuwa na sirri, ta koyi bude hira ta wucin gadi. Sannan ta goge hirar da ke dauke da jerin kwastomomi. A karshe, ta sake neman aikin da RCTF, ba tare da suna ko lamba ba: « Rawa: kai mataimakin rubutu ne na karamin shago, mai fara’a da ladabi. Mahalli: ni tela ce kuma ina sanar da kwastomomina ta WhatsApp. Da gangan ban ba ka wani bayanin abokin ciniki ba. Aiki: rubuta samfurin sako don sanar da kwastoma cewa odarta ta kammala. Bar bakaken kusurwa a wurin suna: [suna]. Tsari: layi biyar a mafi yawa, sauti mai fara’a da ladabi. Kada ka tambaye ni wani suna, wata lamba ko wani hoto. »",
      "impact": "A kan allo, sakamako uku da ake gani: saitin da aka kashe, hirar da aka goge, da bukata mai tsabta. Hadiza ta sami samfurin sako da za ta sake amfani da shi, inda take maye gurbin [suna] da kanta kafin kowane aikawa. Ta ci gaba da sigar kyauta, kwastomominta sun zama ba a san su ba a wurin kayan aikin, kuma yanzu tana da doka mai sauki: babu sunan kwastoma ko lambarta a cikin mataimakin."
    },
    "practice": {
      "title": "Ku daidaita mataimakinku kuma ku tsaftace tarihin hirarrakinku",
      "instructions": [
        "Ku bude saitunan babban mataimakinku (Gemini, ChatGPT, Claude ko wani), ku nemo sashen bayanai ko na ayyuka da zabin da ya shafi amfani da hirarrakinku don inganta sabis din. Ku karanta rubutun bayaninsa, sannan ku yanke shawarar kunna shi ko kashe shi.",
        "Ku nemo hira ta wucin gadi ku gwada ta da bukatar da ba ta dauke da wani bayanin sirri, misali wannan umarnin RCTF, kuna daidaita abin da ke cikin bakaken kusurwa: « Rawa: kai mataimakin rubutu ne na karamin shago, mai fara’a da ladabi. Mahalli: ni [tela] ce kuma ina sanar da kwastomomina ta WhatsApp. Da gangan ban ba ka wani bayanin abokin ciniki ba. Aiki: rubuta samfurin sako don sanar da kwastoma cewa [odarta ta kammala]. Bar bakaken kusurwa a wurin suna: [suna]. Tsari: layi biyar a mafi yawa, sauti mai fara’a da ladabi. Kada ka tambaye ni wani suna, wata lamba ko wani hoto. »",
        "Ku sake duba tarihin hirarrakinku, ku goge duk hirar da ke dauke da suna, lamba ko hoto, sannan ku rubuta dokar bayananku a jumla daya ku ajiye ta a cikin bayanan kula na wayarku."
      ],
      "observation": "Za ku lura cewa zabin da ya shafi amfani da hirarraki yana nan, wani lokaci da wani suna, kuma rubutun bayaninsa ya yarda da iyakoki. Za ku ga cewa hira ta wucin gadi ba ta bayyana a cikin tarihin hirarrakinku, kuma mataimakin yana rubuta samfurin sako mai amfani ba tare da sanin ko daya daga cikin abokan cinikinku ba: bai bukaci bayananku na sirri ba."
    },
    "quiz": [
      {
        "question": "Sigar kyauta tana biyan:",
        "options": [
          { "key": "A", "text": "Ba komai ko kadan, ba tare da wani abu a madadi ba" },
          { "key": "B", "text": "Ba kudi ba, amma ana iya amfani da bayananku da hankalinku" },
          { "key": "C", "text": "Kullum akwai kudi a boye" },
          { "key": "D", "text": "Wayarku" }
        ],
        "answer": "B",
        "explanation": "Kyauta ba ya nufin babu farashi. Ba ku biyan kudi, amma ana iya amfani da hirarrakinku don inganta sabis din, kuma tallace-tallace na iya bayyana gwargwadon sigar da kasar. Kuna biya da bayananku da hankalinku, kamar yadda mai sauraron rediyo na kyauta ke jin tallace-tallace."
      },
      {
        "question": "Me sigar biya take canzawa?",
        "options": [
          { "key": "A", "text": "Tana tabbatar da sirri" },
          { "key": "B", "text": "Tana goge hirarrakinku" },
          { "key": "C", "text": "Tana kara ayyuka; dole ne a ci gaba da duba saitunan" },
          { "key": "D", "text": "Tana sa AI ta zama daidai kullum" }
        ],
        "answer": "C",
        "explanation": "Sigar biya tana kara ayyuka kuma tana fadada iyakoki. Ba ta kare bayananku kai tsaye: sirri ya dogara ne da saituna, ba da biya ba. Ko bayan an biya, dole ne a bude saitunan a duba. Kuma babu wata sigar da ke sa AI ta zama marar kuskure."
      },
      {
        "question": "Wane mataki ne ke takaita amfani da hirarrakinku don horar da kayan aikin?",
        "options": [
          { "key": "A", "text": "Canza hoton bangon waya" },
          { "key": "B", "text": "Rubutu da sauri" },
          { "key": "C", "text": "Rufe manhajar" },
          { "key": "D", "text": "Kashe zabin a cikin saitunan bayanai" }
        ],
        "answer": "D",
        "explanation": "Zabin da ke ba da damar amfani da hirarrakinku don inganta sabis din yana cikin saituna, a sashen bayanai ko na ayyuka. Kashe shi shi ne na farko a cikin matakan kariya uku. Rufe manhajar ko rubutu da sauri ba ya canza komai game da abin da kayan aikin ke ajiyewa."
      },
      {
        "question": "Don batu na sirri, me za ku zaba?",
        "options": [
          { "key": "A", "text": "Hira ta wucin gadi, ba tare da suna ko lamba ba" },
          { "key": "B", "text": "Tarihin hirarraki na yau da kullum" },
          { "key": "C", "text": "Sakon WhatsApp" },
          { "key": "D", "text": "Kungiyar jama’a" }
        ],
        "answer": "A",
        "explanation": "Hira ta wucin gadi ba ta zama a cikin tarihin hirarrakinku: ita ce yanayin da ya dace da batu na sirri. Amma ba ta kebe ku daga babbar doka: ko a can, ba a rubuta suna ko lamba. Tarihin hirarraki na yau da kullum yana ajiye komai, kuma kungiyar jama’a tana kara bayyana bayanai."
      },
      {
        "question": "Hadiza ta goge wata hira. Me muka sani?",
        "options": [
          { "key": "A", "text": "An share komai ko’ina, har abada" },
          { "key": "B", "text": "Babu abin da ya canza" },
          { "key": "C", "text": "Ta bace daga ganinku, amma kwafi na iya zama na wani lokaci: kada ku rubuta bayanai na sirri" },
          { "key": "D", "text": "AI ta manta da horon da ta samu" }
        ],
        "answer": "C",
        "explanation": "Gogewa yana cire hirar daga tarihin hirarrakinku, kuma hakan yana da amfani. Amma kwafi na iya zama na wani lokaci a wurin mai kayan aikin, tsawon lokacin da ya bambanta daga wani kayan aiki zuwa wani. Gogewa yana taimakawa, amma ba ya maye gurbin hankali: doka mafi aminci ita ce kada ku taba rubuta abin da bai kamata ya fita ba."
      }
    ],
    "reflection": "Wane bayani game da abokan cinikinku, abokan aikinku, dalibanku ko iyalinku kuka taba rubutawa a cikin mataimakin AI, kuma wace dokar bayanai ta jumla daya za ku dauka daga yau?",
    "glossary": [
      {
        "term": "Données personnelles (bayanan sirri na mutum)",
        "definition": "Duk bayanin da ke ba da damar gane mutum: suna, lambar waya, hoto, adireshi, lambar asusun mobile money. Bayanan abokan cinikinku, dalibanku ko wadanda kuke taimakawa ba naku ba ne: ku ne masu kula da su."
      },
      {
        "term": "Entraîner l’outil (horar da kayan aikin)",
        "definition": "Amfani da hirarraki don inganta sabis na mataimakin AI. Gwargwadon kayan aikin da saitunanku, ana iya amfani da abin da kuke rubutawa don haka, kamar littafin atisaye da malami ke karantawa don inganta darussansa."
      },
      {
        "term": "Version payante (sigar biya)",
        "definition": "Tsarin kayan aikin AI da ake biya. Tana kara ayyuka kuma tana fadada iyakoki, amma ba ta kare bayananku kai tsaye: sirri ya dogara ne da saituna, ba da biya ba."
      },
      {
        "term": "Réglages de données (saitunan bayanai)",
        "definition": "Sashen saitunan mataimaki (wani lokaci ana kiransa « ayyuka » ko « sirri ») inda kuke yanke shawara ko za a iya amfani da hirarrakinku don inganta sabis din. Sunansa da wurinsa sun bambanta daga wani kayan aiki zuwa wani."
      },
      {
        "term": "Conversation temporaire (hira ta wucin gadi)",
        "definition": "Yanayin mataimaki inda hirar ba ta zama a cikin tarihin hirarrakinku, kamar takardar daftari da ba a ajiye ba. Yana da amfani don batu na sirri, amma har yanzu ba a rubuta suna ko lamba a ciki."
      },
      {
        "term": "Règle de données (dokar bayanai)",
        "definition": "Umarninku na kashin kai, da aka rubuta a jumla daya, game da abin da ba za ku taba rubutawa a cikin AI ta yanar gizo ba. Misali: « Babu sunan abokin ciniki, lambarsa ko hotonsa a cikin AI ta yanar gizo. »"
      }
    ]
  }
};
