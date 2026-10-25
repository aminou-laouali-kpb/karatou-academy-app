import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « Comment créer des agents IA » (creer-agents-ia) — leçon ag6 (Méthode 5 : agents persistants, WhatsApp et Telegram)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 2 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const agLesson6: Record<Language, LessonContent> = {
  "fr": {
    "id": "ag6",
    "lessonNumber": 6,
    "title": "Méthode 5 : un agent qui répond jour et nuit sur WhatsApp ou Telegram",
    "objective": "À la fin de cette leçon, vous saurez ce qu’est un agent persistant : un agent toujours allumé, avec une mémoire et des outils, que l’on joint par messagerie. Vous saurez ce qu’exige vraiment la version WhatsApp officielle avant de vous lancer. Vous saurez prototyper sur Telegram, avec n8n, un agent de réponse qui répond depuis votre fiche produits et vous prévient pour une plainte. Vous saurez enfin ce qu’est une équipe d’agents coordonnée par un chef d’orchestre.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Un agent persistant : toujours allumé, avec mémoire, joignable par messagerie",
        "body": "La Méthode 5 est la dernière marche de l’échelle : la plus puissante, et la plus technique. Les agents des leçons précédentes travaillent quand vous ouvrez une conversation (Méthode 1), à heure fixe (Méthode 2), avec vos outils branchés (Méthode 3) ou quand un événement arrive (Méthode 4). Un agent persistant, lui, ne s’arrête jamais. Il tourne jour et nuit sur un ordinateur ou un serveur, c’est-à-dire un ordinateur distant, loué chez un hébergeur, qui reste allumé en permanence. Vous lui parlez par messagerie, comme à un collègue de garde : une pharmacie de garde à Cotonou reste ouverte la nuit, l’agent persistant aussi.\n\nTrois choses le distinguent. Il garde la mémoire des échanges : il se souvient de ce qu’un client a demandé la veille. Il utilise des outils : des fichiers, un tableau, une messagerie. Et vous choisissez le modèle d’IA qui le fait réfléchir, par exemple Claude, Gemini ou ChatGPT. Hermes et OpenClaw sont deux logiciels libres de ce type. Choisissez cette méthode quand il faut répondre à toute heure, ou faire tourner plusieurs tâches en continu : une auto-école de Ouagadougou qui reçoit des demandes d’inscription le soir, ou une maison d’hôtes d’Essaouira, au Maroc, qui reçoit des questions de voyageurs vivant dans d’autres fuseaux horaires.\n\nSoyons honnêtes : l’installation demande de l’aisance technique. Il faut une machine allumée en continu, des réglages, des clés d’accès à protéger et du suivi. Dans la vidéo, la démonstration se fait sur l’installation du formateur : elle n’est pas requise pour l’exercice. Si vous voulez votre propre agent persistant, faites-vous accompagner, et donnez-lui un accès minimum : seulement les fichiers et les outils dont il a besoin, comme on confie au gardien de nuit la clé de l’entrée, pas celle du coffre."
      },
      {
        "title": "WhatsApp officiel : ce qu’exige la plateforme de Meta",
        "body": "Beaucoup de clients écrivent sur WhatsApp. Mais un logiciel ne parle pas sur WhatsApp comme vous depuis votre téléphone. L’accès officiel passe par la plateforme WhatsApp Business de Meta, directement ou par un prestataire agréé, qui ajoute ses propres frais. Il faut un compte d’entreprise chez Meta, un numéro de téléphone dédié capable de recevoir un code de vérification, et un nom d’affichage accepté. Un numéro déjà utilisé dans l’application WhatsApp ne peut en principe pas servir en même temps ; certains prestataires proposent une « coexistence » avec l’application WhatsApp Business, avec une disponibilité qui varie selon les pays. L’entreprise doit aussi être vérifiée, avec des documents officiels comme le registre du commerce, et cette vérification peut prendre du temps.\n\nViennent ensuite les règles. C’est le client qui écrit le premier, ou qui a accepté d’être contacté. L’entreprise répond librement pendant vingt-quatre heures après le dernier message du client ; au-delà, elle doit utiliser un modèle de message approuvé, en général facturé par Meta. Imaginez une porte qui reste ouverte vingt-quatre heures après la visite du client : passé ce délai, on ne frappe chez lui qu’avec une lettre déjà validée. Si Ibrahim veut relancer un client silencieux depuis trois jours, son agent ne peut donc pas lui écrire librement. Depuis le 15 janvier 2026, les conditions de Meta excluent les assistants IA « généralistes » de la plateforme ; un agent qui sert votre activité (questions sur vos produits, commandes, rendez-vous) reste permis. Un salon de coiffure de Lomé peut confier ses prises de rendez-vous à un agent ; il ne peut pas y proposer un assistant qui répond à tout.\n\nDeux règles encore, non négociables. La transparence : l’agent se présente dès son premier message, « Vous parlez à l’assistant automatique de [la boutique] », et propose toujours de joindre un humain. Et jamais d’outils non officiels qui pilotent WhatsApp Web ou l’application en cachette : ils sont contraires aux conditions de WhatsApp et exposent votre numéro au blocage. Prévoyez aussi les coûts possibles : messages facturés par Meta selon leur catégorie, frais d’un prestataire, usage de l’IA, version en ligne de n8n après l’essai, machine allumée en continu. Ces règles évoluent : relisez la documentation de Meta avant de vous lancer."
      },
      {
        "title": "Une équipe d’agents coordonnée par un chef d’orchestre",
        "body": "Quand un agent fait bien une chose, on est tenté de lui en confier dix. C’est rarement une bonne idée : plus la mission est large, plus il se trompe. Les installations avancées choisissent une autre voie : une équipe d’agents. Vous parlez à un seul agent, le chef d’orchestre. Il reçoit votre demande, la confie à des agents spécialisés, vérifie leur travail, puis vous rend compte.\n\nPensez à un chef de chantier à Kinshasa : il ne pose pas les briques lui-même. Il répartit le travail entre le maçon, l’électricien et le plombier, contrôle chaque tâche et fait le point avec le propriétaire. Dans la vidéo, le formateur montre son équipe pendant vingt secondes : un agent fait la veille, un autre rédige, et le chef d’orchestre vérifie leur travail avant de rendre compte. Chaque agent a une seule mission et ses propres garde-fous.\n\nC’est une ouverture, pas une étape obligatoire. Pour la plupart des besoins, un seul agent bien réglé suffit largement. Une équipe d’agents se justifie quand vous avez plusieurs tâches régulières et distinctes, et le temps de suivre chacune. Commencez par un agent, prouvez qu’il fonctionne, puis ajoutez-en un deuxième seulement si le besoin est réel."
      },
      {
        "title": "Prototyper un agent de réponse sur Telegram avec n8n",
        "body": "Vous n’avez pas besoin d’un agent persistant pour offrir ce service à vos clients. Sur Telegram, un bot, c’est-à-dire un compte automatique, se crée gratuitement avec BotFather, l’outil officiel de Telegram. Avec n8n et la Méthode 4 vue en Leçon 5, vous lui donnez la même logique : une consigne RCTF, une mémoire, une fiche produits et une alerte. Vous testez vos réponses, vos règles et vos alertes sans risquer un numéro WhatsApp. Le jour venu, vous changez seulement l’entrée et la sortie : la porte change, la maison reste la même.\n\nLe workflow tient en trois blocs. Le déclencheur Telegram reçoit chaque nouveau message. L’agent IA réfléchit avec le modèle choisi (Gemini dans la démonstration) ; il a une mémoire, qui garde le fil de chaque conversation grâce à son identifiant, et deux outils : « fiche produits », qui lit un tableau Google Sheets, et « prévenir Ibrahim », qui envoie une alerte au gérant. Le dernier bloc renvoie la réponse au client. Un détail technique : Telegram a besoin d’une adresse web sécurisée (HTTPS) pour joindre le workflow. La version en ligne de n8n la fournit ; avec n8n installé sur votre propre ordinateur, c’est plus technique.\n\nLa règle de la porte vaut aussi ici : sur Telegram, un bot ne peut pas écrire le premier à quelqu’un qui ne l’a jamais contacté. Sur WhatsApp comme sur Telegram, c’est le client qui ouvre la porte. Respectez son choix : aucune relance qu’il n’a pas acceptée. Ce prototype convient aussi bien à une boutique de pagnes de Conakry qu’à une coopérative de karité du Burkina Faso ou à une clinique vétérinaire de Nairobi : une fiche, des questions fréquentes, et un humain prévenu pour tout ce qui sort du cadre."
      }
    ],
    "example": {
      "title": "L’agent de réponse de la boutique d’Ibrahim, à Niamey (cas fictif)",
      "challenge": "Ibrahim, commerçant fictif, vend des pièces détachées de motos à Niamey, au Niger. Le soir, boutique fermée, ses clients lui écrivent : « Vous avez des plaquettes de frein pour une moto 125 ? Vous livrez à Yantala ? », ou cherchent une chaîne de transmission livrée à Lazaret. Personne ne répond avant le lendemain matin, et certains ont déjà acheté chez un concurrent. L’enjeu : répondre à toute heure sans rien promettre de faux, et savoir ce qu’exige vraiment WhatsApp.",
      "solution": "Dans la vidéo, le formateur montre d’abord, sur sa propre installation, un agent persistant relié à un bot Telegram « Pièces Motos Démo ». Sa consigne suit la méthode RCTF et il répond depuis une fiche produits fictive : référence, moto compatible, prix fictif en FCFA, stock, délai par quartier de Niamey. À la question sur les plaquettes, il se présente d’abord (« Vous parlez à l’assistant automatique de la boutique »), puis donne le stock, le délai et le prix tirés de la fiche. À « Ma chaîne a cassé après une semaine. Je veux être remboursé », il ne promet rien, annonce qu’Ibrahim rappellera, et le téléphone d’Ibrahim reçoit une alerte avec un résumé. Le formateur montre ensuite le prototype accessible, construit dans n8n : déclencheur Telegram, agent IA avec mémoire et outils « fiche produits » et « prévenir Ibrahim », réponse renvoyée sur Telegram. Ibrahim commence par ce prototype.",
      "impact": "Un soir, à vingt-deux heures, un client demande une chaîne : il obtient sa réponse tout de suite, tirée de la fiche, sans prix inventé. La plainte arrivée dans la soirée attend Ibrahim sur son téléphone au réveil, avec un résumé, et c’est lui qui rappelle le client. Il sait aussi ce qu’il lui faudra pour passer un jour à WhatsApp : la plateforme officielle de Meta, un numéro dédié, une entreprise vérifiée et le message de transparence."
    },
    "practice": {
      "title": "Prototypez votre agent de réponse sur Telegram avec n8n",
      "instructions": [
        "Créez un bot Telegram avec BotFather, l’outil officiel de Telegram, et une fiche produits dans Google Sheets (ou une liste de questions fréquentes), avec des données fictives : référence, description, prix fictif, stock, délai de livraison.",
        "Dans n8n, construisez le workflow : déclencheur Telegram, agent IA avec mémoire, outil « fiche produits », outil « prévenir » et bloc de réponse ; ou importez le modèle Karatou fourni sous la vidéo. Collez dans l’agent cette consigne RCTF, adaptée à votre activité : Rôle : tu es l’assistant automatique de [nom de la boutique], à [ville], qui vend [des pièces détachées de motos]. Contexte : les clients écrivent sur [Telegram] à toute heure. Les informations fiables sont dans l’outil « fiche produits ». [Prénom du gérant] traite lui-même les plaintes, remboursements, remises et pannes. Tâche : dans ton premier message, présente-toi : « Vous parlez à l’assistant automatique de [nom de la boutique]. » Réponds aux questions sur les produits, les prix, le stock et les délais en consultant d’abord la fiche produits. Pour une plainte, un remboursement, une remise ou une panne, réponds que [prénom du gérant] rappelle, puis utilise l’outil « prévenir [prénom du gérant] » avec un résumé en une phrase. Format : trois phrases au plus, en français simple et poli. N’utilise que les informations de la fiche. Si une information manque, écris « non disponible » et préviens [prénom du gérant]. Ne demande que le prénom et le quartier de livraison. Si la question ne concerne pas la boutique, dis poliment que tu réponds seulement sur nos produits.",
        "Depuis un autre téléphone, envoyez cinq messages à votre bot, dont une plainte et une question hors sujet, et notez chaque réponse dans un tableau : ce qui est juste, ce qui manque, ce qu’il faut corriger dans la consigne ou dans la fiche."
      ],
      "observation": "Vous constatez que l’agent se présente dès son premier message comme un assistant automatique, qu’il répond aux questions sur les produits en s’appuyant uniquement sur votre fiche, et qu’il écrit « non disponible » quand une information manque. Pour la plainte, il ne promet rien et vous recevez une alerte avec un résumé ; la question hors sujet est déclinée poliment. Vous constatez aussi que le bot ne peut pas écrire le premier : c’est le client qui ouvre la conversation. Si une réponse invente quelque chose, corrigez la consigne ou la fiche, puis refaites le test."
    },
    "quiz": [
      {
        "question": "Qu’est-ce qui caractérise un agent persistant ?",
        "options": [
          { "key": "A", "text": "Il répond seulement quand vous ouvrez l’application" },
          { "key": "B", "text": "Il tourne en continu, garde sa mémoire et utilise des outils" },
          { "key": "C", "text": "Il s’exécute une fois par semaine" },
          { "key": "D", "text": "Il ne fonctionne qu’avec WhatsApp" }
        ],
        "answer": "B",
        "explanation": "Un agent persistant vit sur un ordinateur ou un serveur allumé en permanence : il garde la mémoire des échanges, utilise des outils (fichiers, tableau, messagerie) et on le joint par messagerie à toute heure. Répondre seulement à l’ouverture de l’application, c’est la Méthode 1 ; s’exécuter une fois par semaine, c’est la Méthode 2. Et il n’est pas lié à WhatsApp : la démonstration utilise Telegram."
      },
      {
        "question": "Que faut-il pour connecter officiellement un agent à WhatsApp ?",
        "options": [
          { "key": "A", "text": "Une application qui pilote WhatsApp Web en cachette" },
          { "key": "B", "text": "Rien, il suffit de scanner un code" },
          { "key": "C", "text": "Un compte Telegram" },
          { "key": "D", "text": "La plateforme WhatsApp Business de Meta : numéro dédié, entreprise vérifiée, règles, transparence" }
        ],
        "answer": "D",
        "explanation": "L’accès officiel passe par la plateforme WhatsApp Business de Meta, avec un numéro dédié, une entreprise vérifiée, le respect des règles (fenêtre de vingt-quatre heures, modèles de messages, agent au service de l’activité) et la transparence envers le client. Les outils qui pilotent WhatsApp Web en cachette, ou qui se contentent d’un code scanné, sont contraires aux conditions de WhatsApp et exposent le numéro au blocage."
      },
      {
        "question": "Pourquoi prototyper d’abord sur Telegram avec n8n ?",
        "options": [
          { "key": "A", "text": "Parce qu’un bot s’y crée gratuitement, avec la même logique, avant de changer l’entrée et la sortie" },
          { "key": "B", "text": "Parce que WhatsApp interdit toute IA" },
          { "key": "C", "text": "Parce que tous les clients utilisent Telegram" },
          { "key": "D", "text": "Parce que Telegram écrit aux clients à votre place" }
        ],
        "answer": "A",
        "explanation": "Sur Telegram, un bot se crée gratuitement avec BotFather. Vous y testez la logique complète de votre agent (consigne, fiche produits, mémoire, alerte), puis vous changez seulement l’entrée et la sortie le jour venu. WhatsApp n’interdit pas toute IA : un agent qui sert votre activité reste permis. Et un bot Telegram ne peut pas écrire le premier à un client."
      },
      {
        "question": "Un client a écrit sur WhatsApp il y a vingt heures. L’agent peut-il lui répondre librement ?",
        "options": [
          { "key": "A", "text": "Non, jamais" },
          { "key": "B", "text": "Seulement avec un modèle de message" },
          { "key": "C", "text": "Oui, la fenêtre de vingt-quatre heures est encore ouverte" },
          { "key": "D", "text": "Seulement si Ibrahim est en ligne" }
        ],
        "answer": "C",
        "explanation": "L’entreprise répond librement pendant vingt-quatre heures après le dernier message du client. Vingt heures plus tard, la fenêtre est encore ouverte. Le modèle de message approuvé, en général facturé, ne devient obligatoire qu’au-delà de ces vingt-quatre heures, par exemple pour relancer un client silencieux depuis trois jours."
      },
      {
        "question": "Dans une équipe d’agents, que fait le chef d’orchestre ?",
        "options": [
          { "key": "A", "text": "Il remplace tous les autres agents" },
          { "key": "B", "text": "Il répond seul à tous les clients" },
          { "key": "C", "text": "Il installe les logiciels" },
          { "key": "D", "text": "Il reçoit la demande, la confie aux agents spécialisés, vérifie et rend compte" }
        ],
        "answer": "D",
        "explanation": "Comme un chef de chantier, le chef d’orchestre ne fait pas tout lui-même : il reçoit la demande, la confie à des agents spécialisés qui ont chacun une seule mission, vérifie leur travail et rend compte à l’humain. Vous ne parlez qu’à lui, mais le travail est réparti."
      }
    ],
    "reflection": "Dans votre travail, quelles questions vos clients, partenaires ou usagers vous posent-ils en dehors de vos heures, et lesquelles pourriez-vous confier à un agent de réponse tout en gardant pour vous les plaintes et les décisions ?",
    "glossary": [
      {
        "term": "Agent persistant",
        "definition": "Agent IA qui tourne en continu sur un ordinateur ou un serveur, garde la mémoire des échanges et utilise des outils. On le joint par messagerie, à toute heure. Hermes et OpenClaw sont deux logiciels libres de ce type."
      },
      {
        "term": "Bot Telegram",
        "definition": "Compte automatique sur Telegram, créé gratuitement avec BotFather, l’outil officiel de Telegram. Il répond aux messages qu’on lui envoie, mais ne peut pas écrire le premier à quelqu’un qui ne l’a jamais contacté."
      },
      {
        "term": "Plateforme WhatsApp Business",
        "definition": "Accès officiel de Meta qui permet à un logiciel d’envoyer et de recevoir des messages WhatsApp. Elle exige un numéro dédié, une entreprise vérifiée, le respect des règles de Meta et la transparence envers les clients."
      },
      {
        "term": "Fenêtre de vingt-quatre heures",
        "definition": "Délai pendant lequel une entreprise peut répondre librement sur WhatsApp, compté à partir du dernier message du client. Passé ce délai, il faut un modèle de message approuvé."
      },
      {
        "term": "Modèle de message",
        "definition": "Message type, approuvé à l’avance par Meta, qu’une entreprise doit utiliser pour écrire à un client au-delà de la fenêtre de vingt-quatre heures. Il est en général facturé. Dans l’interface de Meta, on parle de « message template »."
      },
      {
        "term": "Chef d’orchestre",
        "definition": "Dans une équipe d’agents, l’agent qui reçoit la demande, la confie à des agents spécialisés, vérifie leur travail et rend compte à l’humain. Comme un chef de chantier qui répartit le travail sans poser lui-même les briques."
      }
    ]
  },
  "en": {
    "id": "ag6",
    "lessonNumber": 6,
    "title": "Method 5: an agent that answers day and night on WhatsApp or Telegram",
    "objective": "By the end of this lesson, you will know what a persistent agent is: an agent that is always on, with memory and tools, that you reach through a messaging app. You will know what the official WhatsApp version really requires before you start. You will be able to prototype on Telegram, with n8n, a reply agent that answers from your product sheet and alerts you when a complaint comes in. Finally, you will know what a team of agents led by a coordinator is.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "A persistent agent: always on, with memory, reachable by messaging",
        "body": "Method 5 is the last step on the ladder: the most powerful, and the most technical. The agents from the previous lessons work when you open a conversation (Method 1), at a fixed time (Method 2), with your tools connected (Method 3) or when an event happens (Method 4). A persistent agent never stops. It runs day and night on a computer or a server, that is, a remote computer rented from a hosting company that stays on all the time. You talk to it through a messaging app, like a colleague on night duty: an all-night pharmacy in Cotonou stays open at night, and so does a persistent agent.\n\nThree things set it apart. It keeps a memory of conversations: it remembers what a customer asked the day before. It uses tools: files, a spreadsheet, a messaging app. And you choose the AI model that does its thinking, for example Claude, Gemini or ChatGPT. Hermes and OpenClaw are two free, open-source programs of this kind. Choose this method when you need to answer at any hour, or keep several tasks running continuously: a driving school in Ouagadougou that receives registration requests in the evening, or a guesthouse in Essaouira, Morocco, that receives questions from travellers living in other time zones.\n\nLet us be honest: installing one takes technical confidence. You need a machine that stays on, settings, access keys to protect and regular monitoring. In the video, the demonstration runs on the instructor’s own setup: it is not required for the exercise. If you want your own persistent agent, get help, and give it minimum access: only the files and tools it needs, just as you give the night guard the key to the front door, not the key to the safe."
      },
      {
        "title": "Official WhatsApp: what Meta’s platform requires",
        "body": "Many customers write on WhatsApp. But software does not talk on WhatsApp the way you do from your phone. Official access goes through Meta’s WhatsApp Business platform, either directly or through an approved provider, who adds its own fees. You need a business account with Meta, a dedicated phone number able to receive a verification code, and an approved display name. A number already used in the WhatsApp app cannot, in principle, be used at the same time; some providers offer “coexistence” with the WhatsApp Business app, with availability that varies by country. The business must also be verified with official documents such as its trade register entry, and this verification can take time.\n\nThen come the rules. The customer writes first, or has agreed to be contacted. The business can reply freely for twenty-four hours after the customer’s last message; after that, it must use an approved message template, usually charged by Meta. Picture a door that stays open for twenty-four hours after the customer’s visit: once that time has passed, you can only knock with a letter that has already been approved. So if Ibrahim wants to follow up with a customer who has been silent for three days, his agent cannot write to them freely. Since 15 January 2026, Meta’s terms exclude “general-purpose” AI assistants from the platform; an agent that serves your business (questions about your products, orders, appointments) is still allowed. A hair salon in Lomé can let an agent take its appointments; it cannot offer an assistant there that answers everything.\n\nTwo more rules, non-negotiable. Transparency: the agent introduces itself in its very first message, “You are talking to the automatic assistant of [the shop]”, and always offers to reach a human. And never use unofficial tools that secretly control WhatsApp Web or the app: they break WhatsApp’s terms and put your number at risk of being blocked. Also plan for possible costs: messages charged by Meta according to their category, provider fees, AI usage, the online version of n8n after the trial, a machine that stays on. These rules change: reread Meta’s documentation before you start."
      },
      {
        "title": "A team of agents led by a coordinator",
        "body": "When an agent does one thing well, it is tempting to give it ten. That is rarely a good idea: the broader the mission, the more mistakes it makes. Advanced setups take another route: a team of agents. You talk to a single agent, the coordinator, like the conductor of an orchestra. It receives your request, hands it to specialised agents, checks their work, then reports back to you.\n\nThink of a site manager in Kinshasa: they do not lay the bricks themselves. They divide the work between the mason, the electrician and the plumber, check each task and update the owner. In the video, the instructor shows his own team for twenty seconds: one agent does the monitoring, another does the writing, and the coordinator checks their work before reporting back. Each agent has a single mission and its own safeguards.\n\nThis is a glimpse ahead, not a required step. For most needs, one well-tuned agent is more than enough. A team of agents makes sense when you have several regular, distinct tasks, and the time to follow each one. Start with one agent, prove that it works, then add a second one only if the need is real."
      },
      {
        "title": "Prototyping a reply agent on Telegram with n8n",
        "body": "You do not need a persistent agent to offer this service to your customers. On Telegram, a bot, that is, an automated account, is created for free with BotFather, Telegram’s official tool. With n8n and Method 4 from Lesson 5, you give it the same logic: an RCTF instruction, a memory, a product sheet and an alert. You test your answers, your rules and your alerts without risking a WhatsApp number. When the day comes, you only change the input and the output: the door changes, the house stays the same.\n\nThe workflow fits in three blocks. The Telegram trigger receives every new message. The AI agent thinks with the chosen model (Gemini in the demonstration); it has a memory, which keeps track of each conversation through its identifier, and two tools: “product sheet”, which reads a Google Sheets table, and “alert Ibrahim”, which sends an alert to the shop owner. The last block sends the answer back to the customer. One technical detail: Telegram needs a secure web address (HTTPS) to reach the workflow. The online version of n8n provides one; with n8n installed on your own computer, it is more technical.\n\nThe door rule applies here too: on Telegram, a bot cannot write first to someone who has never contacted it. On WhatsApp as on Telegram, the customer opens the door. Respect their choice: no follow-up they have not agreed to. This prototype suits a fabric shop in Conakry as well as a shea butter cooperative in Burkina Faso or a veterinary clinic in Nairobi: a sheet, frequent questions, and a human alerted for anything outside the frame."
      }
    ],
    "example": {
      "title": "The reply agent of Ibrahim’s shop in Niamey (fictional case)",
      "challenge": "Ibrahim, a fictional trader, sells motorcycle spare parts in Niamey, Niger. In the evening, with the shop closed, his customers write to him: “Do you have brake pads for a 125 motorbike? Do you deliver to Yantala?”, or look for a drive chain delivered to Lazaret. Nobody answers until the next morning, and some have already bought from a competitor. The challenge: answer at any hour without promising anything false, and know what WhatsApp really requires.",
      "solution": "In the video, the instructor first shows, on his own setup, a persistent agent connected to a Telegram bot called “Pièces Motos Démo”. Its instruction follows the RCTF method and it answers from a fictional product sheet: reference, compatible motorbike, fictional price in CFA francs, stock, delivery time by Niamey neighbourhood. To the question about brake pads, it first introduces itself (“You are talking to the shop’s automatic assistant”), then gives the stock, delivery time and price taken from the sheet. To “My chain broke after one week. I want a refund”, it promises nothing, says that Ibrahim will call back, and Ibrahim’s phone receives an alert with a summary. The instructor then shows the accessible prototype, built in n8n: Telegram trigger, AI agent with memory and the “product sheet” and “alert Ibrahim” tools, answer sent back on Telegram. Ibrahim starts with this prototype.",
      "impact": "One evening at ten o’clock, a customer asks for a chain: they get an answer straight away, taken from the sheet, with no invented price. The complaint that arrived during the evening is waiting on Ibrahim’s phone when he wakes up, with a summary, and he calls the customer back himself. He also knows what he will need to move to WhatsApp one day: Meta’s official platform, a dedicated number, a verified business and the transparency message."
    },
    "practice": {
      "title": "Prototype your reply agent on Telegram with n8n",
      "instructions": [
        "Create a Telegram bot with BotFather, Telegram’s official tool, and a product sheet in Google Sheets (or a list of frequently asked questions), with fictional data: reference, description, fictional price, stock, delivery time.",
        "In n8n, build the workflow: Telegram trigger, AI agent with memory, “product sheet” tool, “alert” tool and reply block; or import the Karatou template provided under the video. Paste this RCTF instruction into the agent, adapted to your business: Role: you are the automatic assistant of [shop name], in [city], which sells [motorcycle spare parts]. Context: customers write on [Telegram] at any hour. Reliable information is in the “product sheet” tool. [Manager’s first name] personally handles complaints, refunds, discounts and breakdowns. Task: in your first message, introduce yourself: “You are talking to the automatic assistant of [shop name].” Answer questions about products, prices, stock and delivery times by checking the product sheet first. For a complaint, a refund, a discount or a breakdown, reply that [manager’s first name] will call back, then use the “alert [manager’s first name]” tool with a one-sentence summary. Format: three sentences at most, in simple and polite English. Only use the information in the sheet. If a piece of information is missing, write “not available” and alert [manager’s first name]. Only ask for the first name and the delivery neighbourhood. If the question is not about the shop, politely say that you only answer questions about our products.",
        "From another phone, send five messages to your bot, including a complaint and an off-topic question, and record each answer in a table: what is correct, what is missing, what needs fixing in the instruction or in the sheet."
      ],
      "observation": "You notice that the agent introduces itself as an automatic assistant in its very first message, answers product questions relying only on your sheet, and writes “not available” when a piece of information is missing. For the complaint, it promises nothing and you receive an alert with a summary; the off-topic question is politely declined. You also notice that the bot cannot write first: the customer opens the conversation. If an answer invents something, fix the instruction or the sheet, then run the test again."
    },
    "quiz": [
      {
        "question": "What characterises a persistent agent?",
        "options": [
          { "key": "A", "text": "It only answers when you open the app" },
          { "key": "B", "text": "It runs continuously, keeps its memory and uses tools" },
          { "key": "C", "text": "It runs once a week" },
          { "key": "D", "text": "It only works with WhatsApp" }
        ],
        "answer": "B",
        "explanation": "A persistent agent lives on a computer or server that is always on: it keeps a memory of conversations, uses tools (files, spreadsheet, messaging) and can be reached by messaging at any hour. Answering only when you open the app is Method 1; running once a week is Method 2. And it is not tied to WhatsApp: the demonstration uses Telegram."
      },
      {
        "question": "What do you need to officially connect an agent to WhatsApp?",
        "options": [
          { "key": "A", "text": "An app that secretly controls WhatsApp Web" },
          { "key": "B", "text": "Nothing, you just scan a code" },
          { "key": "C", "text": "A Telegram account" },
          { "key": "D", "text": "Meta’s WhatsApp Business platform: dedicated number, verified business, rules, transparency" }
        ],
        "answer": "D",
        "explanation": "Official access goes through Meta’s WhatsApp Business platform, with a dedicated number, a verified business, compliance with the rules (twenty-four-hour window, message templates, an agent that serves the business) and transparency towards the customer. Tools that secretly control WhatsApp Web, or that just rely on a scanned code, break WhatsApp’s terms and put the number at risk of being blocked."
      },
      {
        "question": "Why prototype on Telegram with n8n first?",
        "options": [
          { "key": "A", "text": "Because a bot is created there for free, with the same logic, before changing the input and the output" },
          { "key": "B", "text": "Because WhatsApp forbids all AI" },
          { "key": "C", "text": "Because all customers use Telegram" },
          { "key": "D", "text": "Because Telegram writes to customers on your behalf" }
        ],
        "answer": "A",
        "explanation": "On Telegram, a bot is created for free with BotFather. You test the full logic of your agent there (instruction, product sheet, memory, alert), then only change the input and the output when the day comes. WhatsApp does not forbid all AI: an agent that serves your business is still allowed. And a Telegram bot cannot write first to a customer."
      },
      {
        "question": "A customer wrote on WhatsApp twenty hours ago. Can the agent reply freely?",
        "options": [
          { "key": "A", "text": "No, never" },
          { "key": "B", "text": "Only with a message template" },
          { "key": "C", "text": "Yes, the twenty-four-hour window is still open" },
          { "key": "D", "text": "Only if Ibrahim is online" }
        ],
        "answer": "C",
        "explanation": "The business can reply freely for twenty-four hours after the customer’s last message. Twenty hours later, the window is still open. An approved message template, usually charged, only becomes mandatory after those twenty-four hours, for example to follow up with a customer who has been silent for three days."
      },
      {
        "question": "In a team of agents, what does the coordinator do?",
        "options": [
          { "key": "A", "text": "It replaces all the other agents" },
          { "key": "B", "text": "It answers all customers on its own" },
          { "key": "C", "text": "It installs the software" },
          { "key": "D", "text": "It receives the request, hands it to the specialised agents, checks and reports back" }
        ],
        "answer": "D",
        "explanation": "Like a site manager, the coordinator does not do everything itself: it receives the request, hands it to specialised agents that each have a single mission, checks their work and reports back to the human. You only talk to the coordinator, but the work is shared out."
      }
    ],
    "reflection": "In your work, what questions do your customers, partners or service users ask you outside your working hours, and which ones could you hand to a reply agent while keeping complaints and decisions for yourself?",
    "glossary": [
      {
        "term": "Persistent agent",
        "definition": "An AI agent that runs continuously on a computer or server, keeps a memory of conversations and uses tools. You reach it by messaging, at any hour. Hermes and OpenClaw are two free, open-source programs of this kind."
      },
      {
        "term": "Telegram bot",
        "definition": "An automated account on Telegram, created for free with BotFather, Telegram’s official tool. It answers the messages it receives, but cannot write first to someone who has never contacted it."
      },
      {
        "term": "WhatsApp Business platform",
        "definition": "Meta’s official access that lets software send and receive WhatsApp messages. It requires a dedicated number, a verified business, compliance with Meta’s rules and transparency towards customers."
      },
      {
        "term": "Twenty-four-hour window",
        "definition": "The period during which a business can reply freely on WhatsApp, counted from the customer’s last message. Once it has passed, an approved message template is required."
      },
      {
        "term": "Message template",
        "definition": "A standard message, approved in advance by Meta, that a business must use to write to a customer after the twenty-four-hour window. It is usually charged. Meta’s interface calls it a “message template”."
      },
      {
        "term": "Coordinator",
        "definition": "In a team of agents, the agent that receives the request, hands it to specialised agents, checks their work and reports back to the human, like the conductor of an orchestra. Think of a site manager who divides the work without laying the bricks themselves."
      }
    ]
  },
  "ha": {
    "id": "ag6",
    "lessonNumber": 6,
    "title": "Hanya ta 5: wakilin AI da ke amsawa dare da rana a WhatsApp ko Telegram",
    "objective": "A karshen wannan darasi, za ku san mene ne wakili mai ci gaba da aiki (agent persistant): wakilin AI da ke kunne kullum, yana da ajiyar bayanai da kayan aiki, kuma ana tuntubarsa ta manhajar sako. Za ku san abin da sigar WhatsApp ta hukuma take bukata da gaske kafin ku fara. Za ku iya gina samfurin gwaji a Telegram, tare da n8n, na wakilin amsa da ke amsawa daga takardar kayayyakinku kuma yake sanar da ku idan an kawo korafi. A karshe, za ku san mene ne kungiyar wakilai da shugaba mai jagoranci (chef d’orchestre) ke tsarawa.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Wakili mai ci gaba da aiki: kullum a kunne, da ajiyar bayanai, ana tuntubarsa ta sako",
        "body": "Hanya ta 5 ita ce mataki na karshe a kan matakala: mafi karfi, kuma mafi wuyar fasaha. Wakilan darussan da suka gabata suna aiki ne idan kun bude tattaunawa (Hanya ta 1), a lokaci kayyadadde (Hanya ta 2), tare da kayan aikinku da aka hada (Hanya ta 3), ko idan wani abu ya faru (Hanya ta 4). Amma wakili mai ci gaba da aiki ba ya tsayawa. Yana aiki dare da rana a kan kwamfuta ko sabar (server), wato kwamfuta mai nisa da ake haya a wurin kamfanin masaukin yanar gizo, wadda take kunne kullum. Kuna magana da shi ta manhajar sako, kamar abokin aiki mai aikin dare: kantin magani mai aikin dare a Cotonou yana bude da dare, haka ma wakili mai ci gaba da aiki.\n\nAbubuwa uku ne suka bambanta shi. Yana tunawa da musayar sakonni: yana tuna abin da abokin ciniki ya tambaya jiya. Yana amfani da kayan aiki: fayiloli, tebur, manhajar sako. Kuma ku ne kuke zabar samfurin AI da ke sa shi tunani, misali Claude, Gemini ko ChatGPT. Hermes da OpenClaw manhajoji ne guda biyu na bude (logiciels libres) irin wannan. Ku zabi wannan hanya idan dole ne a amsa a kowane lokaci, ko a gudanar da ayyuka da dama ba tsayawa: makarantar koyon tukin mota a Ouagadougou da ke karbar bukatun rajista da yamma, ko gidan baki a Essaouira, a Maroko, da ke karbar tambayoyin matafiya da ke zaune a wasu yankunan lokaci.\n\nBari mu fadi gaskiya: girka shi yana bukatar kwarewa a fasaha. Ana bukatar na’ura da ke kunne kullum, saituna, makullan shiga da za a kare, da sa ido akai-akai. A bidiyon, nunin yana gudana ne a kan na’urar malamin kwas din: ba a bukatarsa don aikin gwaji. Idan kuna son wakilinku mai ci gaba da aiki, ku nemi taimakon kwararre, kuma ku ba shi mafi karancin izini: fayiloli da kayan aikin da yake bukata kawai, kamar yadda ake ba mai gadin dare makullin kofar shiga, ba na akwatin kudi ba."
      },
      {
        "title": "WhatsApp na hukuma: abin da dandalin Meta yake bukata",
        "body": "Abokan ciniki da yawa suna rubutu a WhatsApp. Amma manhaja ba ta magana a WhatsApp kamar yadda kuke yi daga wayarku. Hanyar hukuma ta wuce ta dandalin WhatsApp Business na Meta, kai tsaye ko ta hannun mai ba da sabis da aka amince da shi, wanda ke kara nasa kudin. Ana bukatar asusun kamfani a Meta, lambar waya ta musamman da za ta iya karbar lambar tabbatarwa, da sunan nunawa da aka amince da shi. Bisa ka’ida, lambar da ake amfani da ita a manhajar WhatsApp ba za ta iya aiki a lokaci guda ba; wasu masu ba da sabis suna ba da « zama tare » (coexistence) da manhajar WhatsApp Business, kuma samuwarsa ta bambanta daga kasa zuwa kasa. Dole kuma a tabbatar da kamfanin da takardun hukuma kamar rajistar kasuwanci, kuma wannan tabbatarwa na iya daukar lokaci.\n\nSannan akwai dokoki. Abokin ciniki ne ke fara rubutu, ko kuma ya amince a tuntube shi. Kamfanin yana amsawa yadda yake so har tsawon awa ashirin da hudu bayan sakon karshe na abokin ciniki; bayan haka, dole ya yi amfani da samfurin sako da aka amince da shi, wanda Meta yawanci ke karbar kudi a kansa. Ku yi tunanin kofa da ke bude har awa ashirin da hudu bayan ziyarar abokin ciniki: bayan wannan lokaci, sai da wasika da aka riga aka amince da ita ake iya kwankwasa kofarsa. Don haka, idan Ibrahim yana son tuna wa abokin ciniki da ya yi shiru tsawon kwana uku, wakilinsa ba zai iya rubuta masa yadda ya ga dama ba. Tun daga 15 ga Janairu 2026, sharuddan Meta sun cire mataimakan AI « na gama-gari » daga dandalin; wakilin da ke yi wa kasuwancinku hidima (tambayoyi kan kayayyakinku, oda, alkawuran ganawa) har yanzu an yarda da shi. Gidan gyaran gashi a Lomé zai iya ba wakili aikin karbar alkawuran ganawa; amma ba zai iya ba da mataimaki da ke amsa komai a can ba.\n\nAkwai karin dokoki biyu da ba a sasantawa a kansu. Bayyana gaskiya: wakilin yana gabatar da kansa tun daga sakonsa na farko, « Kuna magana da mataimaki na atomatik na [shagon] », kuma kullum yana ba da damar yin magana da mutum. Kuma kada a taba amfani da kayan aikin da ba na hukuma ba wadanda ke sarrafa WhatsApp Web ko manhajar a boye: sun saba wa sharuddan WhatsApp kuma suna jefa lambarku cikin hadarin toshewa. Ku kuma yi tanadin kudaden da za su iya tasowa: sakonnin da Meta ke karbar kudi bisa rukuninsu, kudin mai ba da sabis, amfani da AI, sigar n8n ta yanar gizo bayan lokacin gwaji, da na’urar da ke kunne kullum. Wadannan dokoki suna canzawa: ku sake karanta takardun bayanan Meta kafin ku fara."
      },
      {
        "title": "Kungiyar wakilai da shugaba mai jagoranci (chef d’orchestre) ke tsarawa",
        "body": "Idan wakili ya iya aiki daya da kyau, ana sha’awar ba shi goma. Wannan ba kasafai yake da kyau ba: idan aikin ya yi fadi sosai, kurakuransa suna karuwa. Manyan tsare-tsare suna bin wata hanya dabam: kungiyar wakilai. Kuna magana da wakili guda daya kawai, wato shugaba mai jagoranci. Yana karbar bukatarku, ya ba wakilai kwararru, ya duba aikinsu, sannan ya kawo muku rahoto.\n\nKu yi tunanin shugaban wurin gini a Kinshasa: ba shi da kansa ke jera bulo ba. Yana raba aiki tsakanin magini, mai aikin wutar lantarki da mai aikin famfo, yana duba kowane aiki, sannan ya yi wa mai gidan bayani. A bidiyon, malamin kwas din yana nuna kungiyarsa na dakika ashirin: wani wakili yana bin sabbin labarai, wani yana rubutu, kuma shugaba mai jagoranci yana duba aikinsu kafin ya kawo rahoto. Kowane wakili yana da aiki daya kacal da nasa matakan kariya.\n\nWannan hangen gaba ne, ba mataki na tilas ba. Ga mafi yawan bukatu, wakili guda daya da aka tsara da kyau ya isa sosai. Kungiyar wakilai tana da ma’ana idan kuna da ayyuka da dama na yau da kullum daban-daban, da lokacin sa ido kan kowanne. Ku fara da wakili daya, ku tabbatar yana aiki, sannan ku kara na biyu kawai idan bukatar ta tabbata."
      },
      {
        "title": "Gina samfurin gwaji na wakilin amsa a Telegram tare da n8n",
        "body": "Ba ku bukatar wakili mai ci gaba da aiki don ba abokan cinikinku wannan sabis. A Telegram, ana kirkirar bot, wato asusu na atomatik, kyauta da BotFather, kayan aikin hukuma na Telegram. Tare da n8n da Hanya ta 4 da muka gani a Darasi 5, kuna ba shi irin wannan tsari: umarnin RCTF, ajiyar bayanai, takardar kayayyaki da sanarwa. Kuna gwada amsoshinku, dokokinku da sanarwoyinku ba tare da jefa lambar WhatsApp cikin hadari ba. Idan lokaci ya yi, sai ku canza hanyar shiga da hanyar fita kawai: kofa ce ke canzawa, gidan yana nan yadda yake.\n\nTsarin aikin (workflow) yana da tubala uku. Mai farawa na Telegram (Telegram Trigger) yana karbar kowane sabon sako. Wakilin AI yana tunani da samfurin da aka zaba (Gemini a cikin nunin); yana da ajiyar bayanai, wadda ke rike zaren kowace tattaunawa ta hanyar lambar shaidarta, da kayan aiki biyu: « takardar kayayyaki », mai karanta tebur na Google Sheets, da « sanar da Ibrahim », mai aika sanarwa ga mai shagon. Tubali na karshe yana mayar da amsar ga abokin ciniki. Wani bayani na fasaha: Telegram yana bukatar adireshin yanar gizo mai tsaro (HTTPS) don isa ga tsarin aikin. Sigar n8n ta yanar gizo tana samar da shi; idan an girka n8n a kan kwamfutarku, ya fi wuyar fasaha.\n\nDokar kofa tana aiki a nan ma: a Telegram, bot ba zai iya fara rubuta wa wanda bai taba tuntubarsa ba. A WhatsApp da Telegram duka, abokin ciniki ne ke bude kofa. Ku girmama zabinsa: babu tunatarwa da bai amince da ita ba. Wannan samfurin gwaji ya dace da shagon zannuwa a Conakry, da kungiyar masu sarrafa man kadanya a Burkina Faso, ko asibitin dabbobi a Nairobi: takarda, tambayoyin da ake yawan yi, da mutum da ake sanarwa game da duk abin da ya fita daga tsarin."
      }
    ],
    "example": {
      "title": "Wakilin amsa na shagon Ibrahim, a Niamey (labari na kirkira)",
      "challenge": "Ibrahim, dan kasuwa na kirkira, yana sayar da kayan gyaran babur a Niamey, a Nijar. Da yamma, idan shago ya rufe, abokan cinikinsa suna rubuta masa: « Kuna da fad din birki na babur 125? Kuna kai kaya Yantala? », ko suna neman sarkar babur da za a kai Lazaret. Babu mai amsawa sai washegari da safe, kuma wasu sun riga sun saya a wurin wani dan kasuwa. Kalubalen: amsawa a kowane lokaci ba tare da yin alkawarin karya ba, da sanin abin da WhatsApp yake bukata da gaske.",
      "solution": "A bidiyon, malamin kwas din ya fara nunawa, a kan na’urarsa, wakili mai ci gaba da aiki da aka hada da bot na Telegram mai suna « Pièces Motos Démo ». Umarninsa yana bin hanyar RCTF, kuma yana amsawa daga takardar kayayyaki ta kirkira: lambar kaya, babur da ya dace, farashin kirkira a FCFA, yawan kaya a ajiya, da lokacin kaiwa a kowace unguwar Niamey. Ga tambayar fad din birki, ya fara gabatar da kansa (« Kuna magana da mataimaki na atomatik na shagon »), sannan ya ba da yawan kaya, lokacin kaiwa da farashi daga takardar. Ga « Sarkata ta tsinke bayan mako daya. Ina son a mayar min da kudina », bai yi wani alkawari ba, ya ce Ibrahim zai kira, kuma wayar Ibrahim ta karbi sanarwa tare da takaitaccen bayani. Sannan malamin ya nuna samfurin gwaji mai sauki da aka gina a n8n: mai farawa na Telegram, wakilin AI da ajiyar bayanai da kayan aiki « takardar kayayyaki » da « sanar da Ibrahim », da amsar da ake mayarwa a Telegram. Ibrahim ya fara da wannan samfurin gwaji.",
      "impact": "Wata rana da karfe goma na dare, wani abokin ciniki ya tambayi sarkar babur: ya sami amsarsa nan take, daga takardar, ba tare da farashin kage ba. Korafin da ya iso da yamma yana jiran Ibrahim a wayarsa idan ya farka, tare da takaitaccen bayani, kuma shi da kansa ne ke kiran abokin cinikin. Ya kuma san abin da zai bukata idan wata rana zai koma WhatsApp: dandalin hukuma na Meta, lamba ta musamman, kamfani da aka tabbatar, da sakon bayyana gaskiya."
    },
    "practice": {
      "title": "Gina samfurin gwaji na wakilin amsarku a Telegram tare da n8n",
      "instructions": [
        "Ku kirkiri bot na Telegram da BotFather, kayan aikin hukuma na Telegram, da takardar kayayyaki a Google Sheets (ko jerin tambayoyin da ake yawan yi), da bayanan kirkira: lambar kaya, bayani, farashin kirkira, yawan kaya a ajiya, lokacin kai kaya.",
        "A n8n, ku gina tsarin aikin: mai farawa na Telegram, wakilin AI da ajiyar bayanai, kayan aiki « takardar kayayyaki », kayan aiki « sanarwa » da tubalin amsa; ko ku shigo da samfurin Karatou da ke kasan bidiyon. Ku manna wannan umarnin RCTF a cikin wakilin, bayan kun daidaita shi da sana’arku: Rawa: kai ne mataimaki na atomatik na [sunan shago], a [birni], mai sayar da [kayan gyaran babur]. Mahallin: abokan ciniki suna rubutu a [Telegram] a kowane lokaci. Ingantattun bayanai suna cikin kayan aikin « takardar kayayyaki ». [Sunan mai shago] da kansa ne ke kula da korafe-korafe, mayar da kudi, rangwame da lalacewar kaya. Aiki: a sakonka na farko, ka gabatar da kanka: « Kuna magana da mataimaki na atomatik na [sunan shago]. » Ka amsa tambayoyi kan kayayyaki, farashi, yawan kaya da lokacin kaiwa bayan ka fara duba takardar kayayyaki. Idan korafi ne, neman mayar da kudi, rangwame ko lalacewa, ka amsa cewa [sunan mai shago] zai kira, sannan ka yi amfani da kayan aikin « sanar da [sunan mai shago] » tare da takaitaccen bayani a jumla daya. Tsari: jumloli uku a mafi yawa, cikin Hausa mai sauki da ladabi. Ka yi amfani da bayanan takardar kawai. Idan wani bayani ya rasa, ka rubuta « babu shi » ka sanar da [sunan mai shago]. Ka nemi sunan farko da unguwar kai kaya kawai. Idan tambayar ba ta shafi shagon ba, ka ce cikin ladabi cewa kana amsa tambayoyi kan kayayyakinmu kawai.",
        "Daga wata waya, ku aika sakonni biyar ga bot dinku, ciki har da korafi da tambayar da ba ta shafi shagon ba, sannan ku rubuta kowace amsa a tebur: abin da ke daidai, abin da ya rasa, da abin da za a gyara a umarnin ko a takardar."
      ],
      "observation": "Za ku lura cewa wakilin yana gabatar da kansa a matsayin mataimaki na atomatik tun daga sakonsa na farko, yana amsa tambayoyi kan kayayyaki ta dogara ga takardarku kawai, kuma yana rubuta « babu shi » idan wani bayani ya rasa. Ga korafi, ba ya yin wani alkawari kuma kuna karbar sanarwa tare da takaitaccen bayani; tambayar da ba ta shafi shagon ba ana kin amsa ta cikin ladabi. Za ku kuma lura cewa bot ba zai iya fara rubutu ba: abokin ciniki ne ke bude tattaunawa. Idan wata amsa ta kirkiri wani abu, ku gyara umarnin ko takardar, sannan ku sake gwadawa."
    },
    "quiz": [
      {
        "question": "Me ke bambanta wakili mai ci gaba da aiki?",
        "options": [
          { "key": "A", "text": "Yana amsawa ne kawai idan kun bude manhajar" },
          { "key": "B", "text": "Yana aiki ba tsayawa, yana ajiye tunawarsa, kuma yana amfani da kayan aiki" },
          { "key": "C", "text": "Yana aiki sau daya a mako" },
          { "key": "D", "text": "Yana aiki da WhatsApp kawai" }
        ],
        "answer": "B",
        "explanation": "Wakili mai ci gaba da aiki yana zaune a kan kwamfuta ko sabar da ke kunne kullum: yana tunawa da musayar sakonni, yana amfani da kayan aiki (fayiloli, tebur, manhajar sako), kuma ana tuntubarsa ta sako a kowane lokaci. Amsawa kawai idan an bude manhajar ita ce Hanya ta 1; aiki sau daya a mako ita ce Hanya ta 2. Kuma ba a daure shi da WhatsApp ba: nunin yana amfani da Telegram."
      },
      {
        "question": "Me ake bukata don hada wakili da WhatsApp ta hanyar hukuma?",
        "options": [
          { "key": "A", "text": "Manhajar da ke sarrafa WhatsApp Web a boye" },
          { "key": "B", "text": "Babu komai, ya isa a duba (scan) wata lamba" },
          { "key": "C", "text": "Asusun Telegram" },
          { "key": "D", "text": "Dandalin WhatsApp Business na Meta: lamba ta musamman, kamfani da aka tabbatar, dokoki, bayyana gaskiya" }
        ],
        "answer": "D",
        "explanation": "Hanyar hukuma ta wuce ta dandalin WhatsApp Business na Meta, tare da lamba ta musamman, kamfani da aka tabbatar, bin dokoki (taga ta awa ashirin da hudu, samfuran sako, wakili da ke yi wa kasuwanci hidima) da bayyana gaskiya ga abokin ciniki. Kayan aikin da ke sarrafa WhatsApp Web a boye, ko wadanda suka dogara ga duba wata lamba kawai, sun saba wa sharuddan WhatsApp kuma suna jefa lambar cikin hadarin toshewa."
      },
      {
        "question": "Me ya sa za a fara gina samfurin gwaji a Telegram tare da n8n?",
        "options": [
          { "key": "A", "text": "Saboda ana kirkirar bot a can kyauta, da tsari iri daya, kafin a canza hanyar shiga da ta fita" },
          { "key": "B", "text": "Saboda WhatsApp ya hana kowane irin AI" },
          { "key": "C", "text": "Saboda duk abokan ciniki suna amfani da Telegram" },
          { "key": "D", "text": "Saboda Telegram yana rubuta wa abokan ciniki a madadinku" }
        ],
        "answer": "A",
        "explanation": "A Telegram, ana kirkirar bot kyauta da BotFather. Kuna gwada cikakken tsarin wakilinku a can (umarni, takardar kayayyaki, ajiyar bayanai, sanarwa), sannan ku canza hanyar shiga da ta fita kawai idan lokaci ya yi. WhatsApp bai hana kowane irin AI ba: wakilin da ke yi wa kasuwancinku hidima har yanzu an yarda da shi. Kuma bot na Telegram ba zai iya fara rubuta wa abokin ciniki ba."
      },
      {
        "question": "Wani abokin ciniki ya rubuta a WhatsApp awa ashirin da suka wuce. Wakilin zai iya amsa masa yadda ya ga dama?",
        "options": [
          { "key": "A", "text": "A’a, ko kadan" },
          { "key": "B", "text": "Sai da samfurin sako kawai" },
          { "key": "C", "text": "Eh, taga ta awa ashirin da hudu tana bude har yanzu" },
          { "key": "D", "text": "Sai idan Ibrahim yana kan layi" }
        ],
        "answer": "C",
        "explanation": "Kamfanin yana amsawa yadda yake so har tsawon awa ashirin da hudu bayan sakon karshe na abokin ciniki. Bayan awa ashirin, taga tana bude har yanzu. Samfurin sako da aka amince da shi, wanda yawanci ake biya, yana zama dole ne kawai bayan wadannan awa ashirin da hudu, misali don tuna wa abokin ciniki da ya yi shiru tsawon kwana uku."
      },
      {
        "question": "A kungiyar wakilai, me shugaba mai jagoranci yake yi?",
        "options": [
          { "key": "A", "text": "Yana maye gurbin duk sauran wakilai" },
          { "key": "B", "text": "Shi kadai yake amsa wa duk abokan ciniki" },
          { "key": "C", "text": "Yana girka manhajoji" },
          { "key": "D", "text": "Yana karbar bukata, ya ba wakilai kwararru, ya duba, sannan ya kawo rahoto" }
        ],
        "answer": "D",
        "explanation": "Kamar shugaban wurin gini, shugaba mai jagoranci ba ya yin komai da kansa: yana karbar bukata, ya ba wakilai kwararru wadanda kowannensu ke da aiki daya kacal, ya duba aikinsu, sannan ya kawo rahoto ga mutum. Shi kadai kuke magana da shi, amma an raba aikin."
      }
    ],
    "reflection": "A aikinku, wadanne tambayoyi abokan cinikinku, abokan huldarku ko masu amfani da sabis dinku suke yi muku a waje da lokutan aikinku, kuma wadanne za ku iya ba wakilin amsa yayin da kuke ajiye korafe-korafe da yanke shawara a hannunku?",
    "glossary": [
      {
        "term": "Agent persistant (wakili mai ci gaba da aiki)",
        "definition": "Wakilin AI da ke aiki ba tsayawa a kan kwamfuta ko sabar, yana tunawa da musayar sakonni kuma yana amfani da kayan aiki. Ana tuntubarsa ta sako, a kowane lokaci. Hermes da OpenClaw manhajoji ne guda biyu na bude irin wannan."
      },
      {
        "term": "Bot Telegram (asusu na atomatik a Telegram)",
        "definition": "Asusu na atomatik a Telegram, da ake kirkira kyauta da BotFather, kayan aikin hukuma na Telegram. Yana amsa sakonnin da aka aiko masa, amma ba zai iya fara rubuta wa wanda bai taba tuntubarsa ba."
      },
      {
        "term": "Plateforme WhatsApp Business (dandalin WhatsApp Business na Meta)",
        "definition": "Hanyar hukuma ta Meta da ke ba manhaja damar aikawa da karbar sakonnin WhatsApp. Tana bukatar lamba ta musamman, kamfani da aka tabbatar, bin dokokin Meta da bayyana gaskiya ga abokan ciniki."
      },
      {
        "term": "Fenêtre de vingt-quatre heures (taga ta awa ashirin da hudu)",
        "definition": "Lokacin da kamfani zai iya amsawa yadda yake so a WhatsApp, wanda ake kirgawa daga sakon karshe na abokin ciniki. Bayan wannan lokaci, ana bukatar samfurin sako da aka amince da shi."
      },
      {
        "term": "Modèle de message (samfurin sako, message template)",
        "definition": "Sakon misali, da Meta ta amince da shi tun kafin a yi amfani da shi, wanda dole kamfani ya yi amfani da shi don rubuta wa abokin ciniki bayan taga ta awa ashirin da hudu. Yawanci ana biyan kudi a kansa. A cikin manhajar Meta, ana kiransa « message template »."
      },
      {
        "term": "Chef d’orchestre (shugaba mai jagoranci)",
        "definition": "A kungiyar wakilai, wakilin da ke karbar bukata, ya ba wakilai kwararru, ya duba aikinsu, sannan ya kawo rahoto ga mutum. Kamar shugaban wurin gini da ke raba aiki ba tare da ya jera bulo da kansa ba."
      }
    ]
  }
};
