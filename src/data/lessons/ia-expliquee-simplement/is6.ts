import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « L'IA expliquée simplement » (ia-expliquee-simplement) — leçon is6 (Les limites de l'IA : trois réflexes)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 1 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const isLesson6: Record<Language, LessonContent> = {
  "fr": {
    "id": "is6",
    "lessonNumber": 6,
    "title": "Les limites de l’IA : trois réflexes — vérifier, protéger, questionner",
    "objective": "À la fin de cette leçon, vous saurez appliquer trois réflexes face aux limites de l’IA : vérifier, protéger, questionner. Vous saurez reconnaître une hallucination et contrôler ce qui compte vraiment auprès d’une source officielle ou d’une personne compétente. Vous saurez écrire une consigne sans aucune donnée personnelle, et repérer ce qu’une réponse ignore de votre pays ou de votre public. Vous repartirez avec une consigne de contrôle, écrite avec la méthode RCTF, à envoyer après n’importe quelle réponse importante.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "L’assurance n’est pas une preuve",
        "body": "Deux idées reçues ont la vie dure. La première : « Si l’IA le dit avec assurance, c’est vrai. » La seconde : « Une machine est neutre. » Les deux sont fausses. Souvenez-vous de la Leçon 2 : Moussa a montré une pomme de terre à sa mini-IA, entraînée seulement sur des oignons et des tomates. Elle a répondu « oignon » ou « tomate », sans la moindre hésitation. Elle ne connaissait pas d’autre réponse, mais rien dans son ton ne le laissait deviner.\n\nUn assistant comme Gemini, ChatGPT ou Claude fonctionne de la même façon, à bien plus grande échelle. Il prédit la suite la plus probable, pas forcément la vraie. Et son ton reste le même, qu’il sache ou qu’il devine. C’est un peu comme ce voisin bavard du marché qui a réponse à tout : il parle toujours avec aplomb, même le jour où il invente. De plus, l’IA a appris à partir d’exemples, avec leurs qualités mais aussi leurs déséquilibres.\n\nCes limites ne rendent pas l’IA inutile : elles demandent des réflexes. Trois limites, trois réflexes. L’hallucination appelle le réflexe « vérifier ». Vos données appellent le réflexe « protéger ». Le biais appelle le réflexe « questionner ». Pensez au client qui recompte sa monnaie avant de quitter la boutique : il ne soupçonne pas le commerçant, il vérifie par habitude. C’est cette habitude que vous allez prendre avec l’IA."
      },
      {
        "title": "Hallucination : le réflexe « vérifier »",
        "body": "Le mot « hallucination » est étrange, mais l’idée est simple : c’est une réponse fausse, donnée avec assurance. Une date inventée, un article de loi qui n’existe pas, une source imaginaire, une citation prêtée à quelqu’un qui ne l’a jamais dite. Pourquoi ? Parce que l’IA prédit une suite plausible, même quand elle ne sait pas. Elle comble les trous avec du probable. C’est exactement ce qui est arrivé à Hadiza, à la mairie de Garoua, au Cameroun : son affiche sur les papiers d’une démarche d’état civil contenait un document demandé dans un autre pays, pas au Cameroun.\n\nPremier réflexe : vérifier. Pas tout, ce qui compte : les dates, les chiffres, les noms, les règles, la santé, l’argent. Un étudiant d’Abidjan, en Côte d’Ivoire, qui demande la date limite d’inscription à un concours la confirme sur le site officiel de l’organisateur ou au guichet. Une commerçante de Cotonou, au Bénin, qui demande les règles pour importer des tissus les vérifie auprès du service des douanes ou d’un transitaire. Une source officielle ou une personne compétente : voilà les deux juges qui comptent.\n\nDemandez aussi à l’assistant d’où vient son information. Et s’il donne un lien, ouvrez-le : vérifiez que la page existe et qu’elle dit bien la même chose. Un lien peut être mort, mener ailleurs, ou ne pas dire ce que l’IA lui fait dire. Enfin, après une réponse importante, envoyez une consigne de contrôle écrite avec la méthode RCTF vue en Leçon 4 : l’assistant liste ce qu’il a ajouté de lui-même et ce qu’il faut vérifier. Cette consigne ne vérifie pas à votre place : elle vous montre où regarder."
      },
      {
        "title": "Vos données : le réflexe « protéger »",
        "body": "Deuxième limite : vos données. Ce que vous tapez dans un assistant peut être conservé. Selon vos réglages, cela peut aussi servir à améliorer l’outil. Parler à une IA, c’est un peu comme parler fort dans un taxi-brousse plein : vous ne savez pas exactement qui entend, ni ce qui sera retenu. Deuxième réflexe, donc : protéger. Ne tapez jamais de noms de personnes, de numéros de téléphone, de mots de passe, de codes de mobile money, ni d’informations de santé. Remplacez les noms par « [Prénom] ». Un enseignant de Ouagadougou, au Burkina Faso, qui veut de l’aide pour les appréciations de ses bulletins écrit « [Élève 1], 12 sur 20, progrès en calcul », jamais le nom réel de l’enfant avec ses notes.\n\nOuvrez aussi les réglages de confidentialité de votre assistant. La plupart proposent une option pour que vos conversations ne servent pas à améliorer l’outil ; son nom et sa place changent d’une application à l’autre et avec le temps, alors prenez deux minutes pour la chercher. Et pour une information sensible, posez-vous d’abord une question : ai-je vraiment besoin de l’IA ? Une infirmière de Bamako, au Mali, n’a aucune raison de coller le dossier d’un patient dans un assistant : une fiche type, sans nom, suffit pour se faire aider.\n\nAttention : anonyme ne veut pas dire seulement « sans nom ». « Le boutiquier en face du château d’eau, qui doit des loyers à la mairie » : aucun nom n’apparaît, et pourtant tout le quartier sait de qui l’on parle. Anonyme veut dire : impossible de savoir de qui il s’agit. Retirez donc aussi les détails qui désignent quelqu’un : une adresse, un métier rare, une histoire connue de tous. Dans le doute, n’écrivez rien sur la personne."
      },
      {
        "title": "Biais : le réflexe « questionner »",
        "body": "Troisième limite : le biais. Un biais, c’est un déséquilibre qui fausse le regard, comme une balance mal réglée qui penche toujours un peu du même côté. L’IA a surtout appris avec des textes et des images venus d’ailleurs. Elle peut donc ignorer nos réalités, ou reproduire des clichés. L’affiche d’Hadiza en est un exemple : une règle d’un autre pays, appliquée au Cameroun comme si elle était universelle.\n\nLe biais se glisse partout. Demandez l’image d’un « médecin » ou d’un « chef d’entreprise » : vous risquez d’obtenir toujours le même profil, rarement une femme, rarement un visage africain. Une jeune créatrice d’entreprise de Lomé, au Togo, qui demande comment encaisser ses clients peut recevoir une réponse centrée sur la carte bancaire, alors que sa clientèle paie surtout par mobile money. La réponse n’est pas fausse en soi : elle est simplement écrite pour quelqu’un d’autre.\n\nTroisième réflexe : questionner. Posez-vous deux questions devant chaque réponse : « Est-ce vrai dans mon pays ? » et « Qui est oublié dans ce texte ? » Les personnes qui ne lisent pas le français, celles qui n’ont pas de smartphone, les personnes âgées ou en situation de handicap. Et donnez votre contexte dès le départ : votre ville, votre pays, votre public, votre langue. C’est le bloc « contexte » de la méthode RCTF, et c’est votre meilleure protection contre une réponse pensée pour un autre monde."
      }
    ],
    "example": {
      "title": "Le message de la journée de salubrité passé aux trois réflexes, à Garoua",
      "challenge": "Hadiza est agente à la mairie de Garoua, au Cameroun, chargée de l’information aux habitants ; le haoussa est sa langue maternelle (cas fictif). La semaine dernière, elle a demandé à un assistant une affiche sur les papiers à fournir pour une démarche d’état civil. L’assistant a ajouté, avec assurance, un papier demandé ailleurs, pas au Cameroun : un habitant aurait pu se déplacer pour rien. Aujourd’hui, elle doit envoyer le message d’invitation à la journée de salubrité préparé avec Gemini en Leçon 3 : samedi, sept heures, devant l’école du quartier, avec vingt volontaires. Beaucoup d’habitants du quartier parlent haoussa. L’enjeu : la confiance des habitants et la protection de leurs données.",
      "solution": "Dans la même conversation Gemini, Hadiza applique les trois réflexes. Protéger : la liste papier des volontaires, avec leurs noms et leurs numéros, reste sur la table ; elle n’en a pas besoin, elle ne la colle pas dans l’assistant. Vérifier : elle envoie la consigne de contrôle écrite avec la méthode RCTF, crochets remplis : « Rôle : tu es un relecteur exigeant et prudent. Contexte : ta réponse précédente sera lue par les habitants du quartier, à Garoua. Tâche : relis ta réponse précédente et contrôle-la. Format : une liste en 3 points. 1. Les informations qui ne viennent pas de moi. 2. Celles qu’il faut vérifier, et où. 3. Ce qui peut exclure ou caricaturer quelqu’un. » L’assistant liste ce qu’il a ajouté de lui-même. Hadiza compare avec sa fiche d’organisation et efface tout ce qui n’y figure pas : elle ne promet rien que la mairie n’a pas décidé. Questionner : elle lit le point 3, puis ajoute sa propre question : « Qui ce message oublie-t-il ? » Réponse : les habitants qui ne lisent pas le français. Elle relance : « Traduis ce message en haoussa simple. » Elle relit chaque phrase et corrige ce qui sonne faux. Enfin, elle colle les deux versions dans le groupe WhatsApp du quartier et les envoie.",
      "impact": "Le message part vérifié, en français et en haoussa, sans aucune donnée personnelle, et il n’annonce que ce que la mairie a réellement décidé. Les habitants qui ne lisent pas le français reçoivent enfin l’information dans leur langue. L’affiche de la semaine dernière a été corrigée, papier par papier, avec le service de l’état civil. Du début à la fin, Hadiza a gardé la main ; désormais, avant chaque envoi, elle applique les trois réflexes."
    },
    "practice": {
      "title": "Passez une réponse de l’IA aux trois réflexes",
      "instructions": [
        "Reprenez une réponse obtenue dans une leçon précédente (une liste de tâches, une publicité, un tableau des chances et des risques). Vérifier : soulignez chaque fait qui compte (date, chiffre, nom, règle) et vérifiez-en au moins un auprès d’une source officielle ou d’une personne compétente. Si la réponse contient un lien, ouvrez-le.",
        "Protéger : relisez ce que vous aviez tapé et vérifiez qu’aucune donnée personnelle n’y figure (nom, numéro, mot de passe, information de santé, détail qui désigne quelqu’un). Ouvrez ensuite les réglages de confidentialité de votre assistant et regardez si vos conversations servent à améliorer l’outil.",
        "Questionner : dans la même conversation, envoyez cette consigne de contrôle écrite avec la méthode RCTF, en remplissant les crochets : Rôle : tu es un relecteur exigeant et prudent. Contexte : ta réponse précédente sera lue par [qui va la lire], à [votre ville]. Tâche : relis ta réponse précédente et contrôle-la. Format : une liste en 3 points. 1. Les informations qui ne viennent pas de moi. 2. Celles qu’il faut vérifier, et où. 3. Ce qui peut exclure ou caricaturer quelqu’un. Puis demandez-vous : « Est-ce vrai dans mon pays ? Qui est oublié ? »"
      ],
      "observation": "Vous constaterez que l’assistant ajoute souvent des éléments que vous ne lui avez jamais donnés (une heure, un lieu, une règle, une promesse), toujours sur le même ton assuré. Au moins un fait demande une vérification hors de l’IA : la consigne de contrôle vous montre où regarder, mais ne fait pas ce travail à votre place. Vous verrez aussi que la réponse oublie parfois une partie de votre public : c’est votre connaissance du terrain qui la corrige."
    },
    "quiz": [
      {
        "question": "Qu’est-ce qu’une hallucination de l’IA ?",
        "options": [
          { "key": "A", "text": "Un bug d’affichage" },
          { "key": "B", "text": "Une panne de connexion" },
          { "key": "C", "text": "Une réponse fausse, donnée avec assurance" },
          { "key": "D", "text": "Une image floue" }
        ],
        "answer": "C",
        "explanation": "Une hallucination n’a rien à voir avec l’écran ou le réseau : c’est une réponse fausse, présentée avec le même aplomb qu’une réponse juste. L’IA prédit une suite plausible même quand elle ne sait pas. C’est pour cela que le ton assuré ne prouve rien et qu’il faut vérifier ce qui compte."
      },
      {
        "question": "L’assistant cite une source avec un lien. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous le croyez : il y a un lien" },
          { "key": "B", "text": "Vous ouvrez le lien et vérifiez qu’il dit bien la même chose" },
          { "key": "C", "text": "Vous supprimez la réponse" },
          { "key": "D", "text": "Vous demandez la réponse dans une autre langue" }
        ],
        "answer": "B",
        "explanation": "Un lien n’est pas une preuve tant que vous ne l’avez pas ouvert. Il peut être mort, mener vers une autre page ou ne pas dire ce que l’IA lui attribue. Ouvrir le lien et comparer, c’est le réflexe « vérifier ». Supprimer la réponse ou changer de langue ne vous apprend rien sur sa justesse."
      },
      {
        "question": "Pourquoi une IA peut-elle reproduire des clichés ?",
        "options": [
          { "key": "A", "text": "Ses exemples contiennent des déséquilibres" },
          { "key": "B", "text": "Elle a ses propres opinions" },
          { "key": "C", "text": "Elle veut vexer certaines personnes" },
          { "key": "D", "text": "Les clichés sont toujours vrais" }
        ],
        "answer": "A",
        "explanation": "L’IA n’a ni opinion ni intention. Elle apprend à partir d’exemples, venus en grande partie d’ailleurs, et elle reproduit leurs déséquilibres : c’est le biais. D’où le réflexe « questionner » : « Est-ce vrai dans mon pays ? Qui est oublié ? »"
      },
      {
        "question": "Que pouvez-vous mettre dans une consigne ?",
        "options": [
          { "key": "A", "text": "Le numéro de téléphone d’un habitant" },
          { "key": "B", "text": "Le nom d’un élève et ses notes" },
          { "key": "C", "text": "Votre mot de passe" },
          { "key": "D", "text": "« [Prénom] » à la place d’un nom" }
        ],
        "answer": "D",
        "explanation": "Un numéro de téléphone, le nom d’un élève avec ses notes ou un mot de passe sont des données personnelles : ce que vous tapez peut être conservé. Remplacer le nom par « [Prénom] » permet d’obtenir la même aide sans exposer personne. C’est le réflexe « protéger »."
      },
      {
        "question": "« Le boutiquier en face du château d’eau, qui doit des loyers à la mairie » : est-ce anonyme ?",
        "options": [
          { "key": "A", "text": "Oui, il n’y a pas de nom" },
          { "key": "B", "text": "Oui, si on l’écrit en français" },
          { "key": "C", "text": "Non, ces détails permettent de le reconnaître" },
          { "key": "D", "text": "Oui, si l’assistant est gratuit" }
        ],
        "answer": "C",
        "explanation": "Anonyme ne veut pas dire seulement « sans nom » : cela veut dire impossible de savoir de qui l’on parle. Dans un quartier, un lieu précis, un métier et une dette connue suffisent à désigner une personne. La langue ou la gratuité de l’outil n’y changent rien : retirez aussi ces détails."
      }
    ],
    "reflection": "Pensez à une information que vous avez déjà demandée, ou que vous pourriez demander, à une IA pour votre travail ou votre vie de tous les jours : lequel des trois réflexes (vérifier, protéger, questionner) aurait été le plus important, et pourquoi ?",
    "glossary": [
      { "term": "Hallucination", "definition": "Réponse fausse donnée par une IA avec assurance : une date, une règle ou une source inventée. Elle vient du fait que l’IA prédit une suite plausible, même quand elle ne sait pas." },
      { "term": "Source officielle", "definition": "Organisme qui fait autorité sur un sujet : une administration, un ministère, un service public, l’organisateur d’un concours. C’est là, ou auprès d’une personne compétente, que l’on vérifie ce qui compte." },
      { "term": "Données personnelles", "definition": "Toute information qui permet de reconnaître une personne : nom, numéro de téléphone, adresse, mot de passe, informations de santé. Elles ne doivent jamais être tapées dans un assistant IA." },
      { "term": "Anonyme", "definition": "Se dit d’un texte qui ne permet pas de savoir de qui l’on parle. Retirer le nom ne suffit pas : un lieu précis, un métier rare ou une histoire connue peuvent désigner quelqu’un." },
      { "term": "Biais", "definition": "Déséquilibre qui fausse le regard de l’IA, hérité des exemples avec lesquels elle a appris. Il peut lui faire ignorer certaines réalités ou reproduire des clichés." },
      { "term": "Consigne de contrôle", "definition": "Consigne écrite avec la méthode RCTF qui demande à l’assistant de relire sa réponse précédente : ce qu’il a ajouté de lui-même, ce qu’il faut vérifier et où, ce qui peut exclure quelqu’un." }
    ]
  },
  "en": {
    "id": "is6",
    "lessonNumber": 6,
    "title": "The limits of AI: three reflexes — verify, protect, question",
    "objective": "By the end of this lesson, you will be able to apply three reflexes when facing the limits of AI: verify, protect, question. You will know how to recognise a hallucination and check what really matters with an official source or a competent person. You will know how to write a prompt without any personal data, and spot what an answer ignores about your country or your audience. You will leave with a check prompt, written with the RCTF method, to send after any important answer.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Confidence is not proof",
        "body": "Two common beliefs are hard to shake. The first: “If the AI says it confidently, it must be true.” The second: “A machine is neutral.” Both are wrong. Remember Lesson 2: Moussa showed a potato to his mini-AI, which had only been trained on onions and tomatoes. It answered “onion” or “tomato” without the slightest hesitation. It knew no other answer, but nothing in its tone gave that away.\n\nAn assistant such as Gemini, ChatGPT or Claude works the same way, on a much larger scale. It predicts the most likely continuation, not necessarily the true one. And its tone stays the same whether it knows or is guessing. It is a bit like that talkative neighbour at the market who has an answer for everything: always self-assured, even on the day he makes things up. On top of that, AI learned from examples, with their strengths but also their imbalances.\n\nThese limits do not make AI useless: they call for reflexes. Three limits, three reflexes. Hallucination calls for the “verify” reflex. Your data calls for the “protect” reflex. Bias calls for the “question” reflex. Think of the customer who counts their change before leaving the shop: they do not suspect the shopkeeper, they check out of habit. That is the habit you are going to build with AI."
      },
      {
        "title": "Hallucination: the “verify” reflex",
        "body": "The word “hallucination” sounds strange, but the idea is simple: it is a false answer, given with confidence. An invented date, a legal article that does not exist, an imaginary source, a quote attributed to someone who never said it. Why? Because AI predicts a plausible continuation, even when it does not know. It fills the gaps with what is likely. That is exactly what happened to Hadiza, at the town hall in Garoua, Cameroon: her poster about the documents needed for a civil registry procedure included a document required in another country, not in Cameroon.\n\nFirst reflex: verify. Not everything, just what matters: dates, figures, names, rules, health, money. A student in Abidjan, Côte d'Ivoire, who asks for the registration deadline of a competitive exam confirms it on the organiser's official website or at the counter. A trader in Cotonou, Benin, who asks about the rules for importing fabric checks them with the customs service or a freight forwarder. An official source or a competent person: those are the two judges that count.\n\nAlso ask the assistant where its information comes from. And if it gives a link, open it: check that the page exists and that it really says the same thing. A link can be dead, lead somewhere else, or not say what the AI claims. Finally, after an important answer, send a check prompt written with the RCTF method you saw in Lesson 4: the assistant lists what it added on its own and what needs checking. This prompt does not verify for you: it shows you where to look."
      },
      {
        "title": "Your data: the “protect” reflex",
        "body": "Second limit: your data. What you type into an assistant may be stored. Depending on your settings, it may also be used to improve the tool. Talking to an AI is a bit like talking loudly in a crowded bush taxi: you do not know exactly who is listening, or what will be remembered. Second reflex, then: protect. Never type people's names, phone numbers, passwords, mobile money codes or health information. Replace names with “[First name]”. A teacher in Ouagadougou, Burkina Faso, who wants help writing report-card comments types “[Pupil 1], 12 out of 20, progress in arithmetic”, never the child's real name with their marks.\n\nAlso open your assistant's privacy settings. Most of them offer an option so that your conversations are not used to improve the tool; its name and location change from one app to another and over time, so take two minutes to look for it. And for sensitive information, first ask yourself: do I really need AI for this? A nurse in Bamako, Mali, has no reason to paste a patient's file into an assistant: a template, with no name, is enough to get help.\n\nCareful: anonymous does not just mean “without a name”. “The shopkeeper opposite the water tower, who owes rent to the town hall”: no name appears, and yet the whole neighbourhood knows who is meant. Anonymous means: impossible to tell who it is about. So also remove the details that point to someone: an address, an unusual trade, a story everyone knows. When in doubt, write nothing about the person."
      },
      {
        "title": "Bias: the “question” reflex",
        "body": "Third limit: bias. A bias is an imbalance that distorts the view, like a badly calibrated scale that always tips slightly to the same side. AI has mostly learned from texts and images that come from elsewhere. So it may ignore our realities, or reproduce stereotypes. Hadiza's poster is an example: a rule from another country, applied to Cameroon as if it were universal.\n\nBias slips in everywhere. Ask for a picture of a “doctor” or a “business owner”: you may keep getting the same profile, rarely a woman, rarely an African face. A young entrepreneur in Lomé, Togo, who asks how to take payments from her customers may get an answer focused on bank cards, while her customers mostly pay by mobile money. The answer is not wrong in itself: it is simply written for someone else.\n\nThird reflex: question. Ask yourself two questions in front of every answer: “Is this true in my country?” and “Who is left out of this text?” People who cannot read French, people without a smartphone, older people or people with disabilities. And give your context from the start: your town, your country, your audience, your language. That is the “context” block of the RCTF method, and it is your best protection against an answer designed for another world."
      }
    ],
    "example": {
      "title": "The clean-up day message put through the three reflexes, in Garoua",
      "challenge": "Hadiza works at the town hall in Garoua, Cameroon, in charge of public information for residents; Hausa is her mother tongue (fictional case). Last week, she asked an assistant for a poster listing the documents needed for a civil registry procedure. The assistant confidently added a document that is required elsewhere, not in Cameroon: a resident could have made the trip for nothing. Today, she has to send the invitation to the neighbourhood clean-up day that she prepared with Gemini in Lesson 3: Saturday, seven o'clock, in front of the neighbourhood school, with twenty volunteers. Many residents of the neighbourhood speak Hausa. What is at stake: residents' trust and the protection of their data.",
      "solution": "In the same Gemini conversation, Hadiza applies the three reflexes. Protect: the paper list of volunteers, with their names and numbers, stays on the table; she does not need it, so she does not paste it into the assistant. Verify: she sends the check prompt written with the RCTF method, brackets filled in: “Role: you are a demanding and careful proofreader. Context: your previous answer will be read by the residents of the neighbourhood, in Garoua. Task: reread your previous answer and check it. Format: a 3-point list. 1. The information that did not come from me. 2. What needs to be checked, and where. 3. Anything that could exclude or stereotype someone.” The assistant lists what it added on its own. Hadiza compares it with her organisation sheet and deletes everything that is not on it: she promises nothing the town hall has not decided. Question: she reads point 3, then adds her own question: “Who does this message leave out?” Answer: residents who cannot read French. She follows up: “Translate this message into simple Hausa.” She rereads every sentence and corrects anything that sounds wrong. Finally, she pastes both versions into the neighbourhood WhatsApp group and sends them.",
      "impact": "The message goes out checked, in French and in Hausa, without any personal data, and it only announces what the town hall has actually decided. Residents who cannot read French finally receive the information in their own language. Last week's poster has been corrected, document by document, with the civil registry office. From start to finish, Hadiza stayed in control; from now on, before every message she sends, she applies the three reflexes."
    },
    "practice": {
      "title": "Put an AI answer through the three reflexes",
      "instructions": [
        "Take an answer you obtained in a previous lesson (a task list, an ad, a table of opportunities and risks). Verify: underline every fact that matters (date, figure, name, rule) and check at least one of them with an official source or a competent person. If the answer contains a link, open it.",
        "Protect: reread what you had typed and make sure it contains no personal data (name, number, password, health information, a detail that points to someone). Then open your assistant's privacy settings and see whether your conversations are used to improve the tool.",
        "Question: in the same conversation, send this check prompt written with the RCTF method, filling in the brackets: Role: you are a demanding and careful proofreader. Context: your previous answer will be read by [who will read it], in [your town]. Task: reread your previous answer and check it. Format: a 3-point list. 1. The information that did not come from me. 2. What needs to be checked, and where. 3. Anything that could exclude or stereotype someone. Then ask yourself: “Is this true in my country? Who is left out?”"
      ],
      "observation": "You will notice that the assistant often adds elements you never gave it (a time, a place, a rule, a promise), always in the same confident tone. At least one fact needs to be checked outside the AI: the check prompt shows you where to look, but does not do that work for you. You will also see that the answer sometimes leaves out part of your audience: it is your knowledge of the ground that corrects it."
    },
    "quiz": [
      {
        "question": "What is an AI hallucination?",
        "options": [
          { "key": "A", "text": "A display bug" },
          { "key": "B", "text": "A connection failure" },
          { "key": "C", "text": "A false answer, given with confidence" },
          { "key": "D", "text": "A blurry image" }
        ],
        "answer": "C",
        "explanation": "A hallucination has nothing to do with the screen or the network: it is a false answer, delivered with the same self-assurance as a correct one. AI predicts a plausible continuation even when it does not know. That is why a confident tone proves nothing and why you must verify what matters."
      },
      {
        "question": "The assistant cites a source with a link. What do you do?",
        "options": [
          { "key": "A", "text": "You believe it: there is a link" },
          { "key": "B", "text": "You open the link and check that it really says the same thing" },
          { "key": "C", "text": "You delete the answer" },
          { "key": "D", "text": "You ask for the answer in another language" }
        ],
        "answer": "B",
        "explanation": "A link is not proof until you have opened it. It may be dead, lead to another page, or not say what the AI attributes to it. Opening the link and comparing is the “verify” reflex. Deleting the answer or switching language tells you nothing about whether it is correct."
      },
      {
        "question": "Why can an AI reproduce stereotypes?",
        "options": [
          { "key": "A", "text": "Its examples contain imbalances" },
          { "key": "B", "text": "It has its own opinions" },
          { "key": "C", "text": "It wants to offend certain people" },
          { "key": "D", "text": "Stereotypes are always true" }
        ],
        "answer": "A",
        "explanation": "AI has neither opinions nor intentions. It learns from examples, largely from elsewhere, and it reproduces their imbalances: that is bias. Hence the “question” reflex: “Is this true in my country? Who is left out?”"
      },
      {
        "question": "What can you put in a prompt?",
        "options": [
          { "key": "A", "text": "A resident's phone number" },
          { "key": "B", "text": "A pupil's name and marks" },
          { "key": "C", "text": "Your password" },
          { "key": "D", "text": "“[First name]” instead of a name" }
        ],
        "answer": "D",
        "explanation": "A phone number, a pupil's name with their marks or a password are personal data: what you type may be stored. Replacing the name with “[First name]” gets you the same help without exposing anyone. That is the “protect” reflex."
      },
      {
        "question": "“The shopkeeper opposite the water tower, who owes rent to the town hall”: is this anonymous?",
        "options": [
          { "key": "A", "text": "Yes, there is no name" },
          { "key": "B", "text": "Yes, if it is written in French" },
          { "key": "C", "text": "No, these details make it possible to recognise him" },
          { "key": "D", "text": "Yes, if the assistant is free" }
        ],
        "answer": "C",
        "explanation": "Anonymous does not just mean “without a name”: it means impossible to tell who is meant. In a neighbourhood, a precise place, a trade and a known debt are enough to identify a person. The language or the fact that the tool is free changes nothing: remove those details too."
      }
    ],
    "reflection": "Think of a piece of information you have already asked an AI for, or could ask for, in your work or everyday life: which of the three reflexes (verify, protect, question) would have mattered most, and why?",
    "glossary": [
      { "term": "Hallucination", "definition": "A false answer given by an AI with confidence: an invented date, rule or source. It happens because AI predicts a plausible continuation, even when it does not know." },
      { "term": "Official source", "definition": "A body that has authority on a subject: an administration, a ministry, a public service, the organiser of an exam. That is where, or with a competent person, you check what matters." },
      { "term": "Personal data", "definition": "Any information that makes it possible to recognise a person: name, phone number, address, password, health information. It should never be typed into an AI assistant." },
      { "term": "Anonymous", "definition": "Describes a text that does not make it possible to tell who is being talked about. Removing the name is not enough: a precise place, an unusual trade or a well-known story can point to someone." },
      { "term": "Bias", "definition": "An imbalance that distorts the AI's view, inherited from the examples it learned from. It can make the AI ignore certain realities or reproduce stereotypes." },
      { "term": "Check prompt", "definition": "A prompt written with the RCTF method that asks the assistant to reread its previous answer: what it added on its own, what needs checking and where, and what could exclude someone." }
    ]
  },
  "ha": {
    "id": "is6",
    "lessonNumber": 6,
    "title": "Iyakokin AI: dabi’u uku — tantance, kare, tambaya",
    "objective": "A karshen wannan darasi, za ku iya amfani da dabi’u uku idan kun ci karo da iyakokin AI: tantance, kare, tambaya. Za ku san yadda ake gane hallucination, kuma ku tantance abin da yake da muhimmanci a wurin majiya ta hukuma ko kwararren mutum. Za ku san yadda ake rubuta umurni ba tare da wani bayanin sirri na mutum ba, kuma ku gano abin da amsa ta manta game da kasarku ko jama’arku. Za ku tafi da umurnin bincike, wanda aka rubuta da hanyar RCTF, wanda za ku aika bayan kowace amsa mai muhimmanci.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Tabbaci ba hujja ba ne",
        "body": "Akwai ra’ayoyi biyu da mutane suka dade suna rike da su. Na farko: « Idan AI ta fadi abu da tabbaci, to gaskiya ne. » Na biyu: « Na’ura ba ta da son kai. » Duka biyun ba daidai ba ne. Ku tuna da Darasi na 2: Moussa ya nuna wa karamar AI dinsa dankali, alhali an koya mata albasa da tumatir kadai. Ta amsa « albasa » ko « tumatir » ba tare da wata shakka ba. Ba ta san wata amsa ba, amma babu abin da ya nuna hakan a cikin muryarta.\n\nMataimaki kamar Gemini, ChatGPT ko Claude yana aiki haka nan, amma a mataki mafi girma. Yana hasashen abin da ya fi yiwuwa ya biyo baya, ba lallai gaskiya ba. Kuma muryarsa ba ta canzawa, ko ya sani ko yana zato. Kamar wannan makwabcin mai yawan magana a kasuwa, wanda yake da amsa ga komai: kullum yana magana da karfin gwiwa, har ranar da yake kirkiro abu. Banda haka, AI ta koya ne daga misalai, tare da kyawawan bangarorinsu da kuma rashin daidaitonsu.\n\nWadannan iyakoki ba sa sa AI ta zama marar amfani: suna bukatar dabi’u. Iyakoki uku, dabi’u uku. Hallucination tana bukatar dabi’ar « tantance ». Bayananku suna bukatar dabi’ar « kare ». Son kai (bias) yana bukatar dabi’ar « tambaya ». Ku yi tunanin kwastoman da yake kirga canjinsa kafin ya bar shago: ba yana zargin mai shago ba ne, al’ada ce kawai. Wannan al’adar ce za ku koya da AI."
      },
      {
        "title": "Hallucination: dabi’ar « tantance »",
        "body": "Kalmar « hallucination » tana da ban mamaki, amma ma’anarta mai sauki ce: amsar karya ce da aka bayar da tabbaci. Kwanan wata da aka kirkiro, sashen doka da babu shi, majiyar da ba ta wanzu ba, maganar da aka danganta ga wanda bai taba fadarta ba. Me ya sa? Domin AI tana hasashen abin da zai iya biyo baya, ko da ba ta sani ba. Tana cike gibi da abin da ya fi yiwuwa. Haka ne ya faru da Hadiza, a ofishin karamar hukumar Garoua, a Kamaru: takardar sanarwarta game da takardun da ake bukata don wani aiki na rajistar haihuwa, aure da mutuwa ta kunshi takardar da ake nema a wata kasa, ba a Kamaru ba.\n\nDabi’a ta farko: tantance. Ba komai ba, sai abin da yake da muhimmanci: kwanakin wata, adadi, sunaye, dokoki, lafiya, kudi. Dalibi a Abidjan, a Côte d’Ivoire, da ya tambayi ranar karshe ta yin rajista don wata jarrabawar gasa, zai tabbatar da ita a shafin intanet na hukuma na masu shirya jarrabawar ko a ofishinsu. ’Yar kasuwa a Cotonou, a Benin, da ta tambayi dokokin shigo da yadi, za ta tantance su a ofishin kwastam ko wurin wakilin kwastam. Majiya ta hukuma ko kwararren mutum: wadannan ne alkalai biyu da suke da muhimmanci.\n\nKu kuma tambayi mataimakin daga ina bayaninsa ya fito. Idan kuma ya ba ku hanyar shafi (link), ku bude ta: ku tabbatar shafin yana nan kuma yana fadin abu daya. Hanyar shafi na iya zama matacciya, ta kai ku wani wuri daban, ko ba ta fadi abin da AI ta ce ta fada ba. A karshe, bayan amsa mai muhimmanci, ku aika umurnin bincike da aka rubuta da hanyar RCTF da kuka gani a Darasi na 4: mataimakin zai jera abin da ya kara da kansa da kuma abin da ya kamata a tantance. Wannan umurni ba ya tantancewa a madadinku: yana nuna muku inda za ku duba."
      },
      {
        "title": "Bayananku: dabi’ar « kare »",
        "body": "Iyaka ta biyu: bayananku. Abin da kuke rubutawa a cikin mataimaki na iya kasancewa an ajiye shi. Ya danganta da saitunanku, ana iya amfani da shi don inganta kayan aikin. Magana da AI kamar yin magana da karfi ne a cikin motar haya cike da fasinjoji: ba ku san wane ne yake ji ba, ko me za a tuna. Don haka, dabi’a ta biyu: kare. Kada ku taba rubuta sunayen mutane, lambobin waya, kalmomin sirri, lambobin sirri na kudin waya (mobile money), ko bayanan lafiya. Ku maye gurbin sunaye da « [Suna] ». Malami a Ouagadougou, a Burkina Faso, da yake son taimako wajen rubuta ra’ayoyi a takardun sakamakon dalibai, zai rubuta « [Dalibi 1], 12 cikin 20, ya ci gaba a lissafi », ba sunan yaron na gaskiya tare da makinsa ba.\n\nKu kuma bude saitunan sirri na mataimakinku. Yawancinsu suna da zabi don kada a yi amfani da hirarrakinku wajen inganta kayan aikin; sunansa da wurinsa suna canzawa daga wata manhaja zuwa wata, kuma da lokaci, don haka ku dauki minti biyu ku neme shi. Kuma game da bayani mai matukar sirri, ku fara tambayar kanku: shin da gaske ina bukatar AI? Wata ma’aikaciyar jinya a Bamako, a Mali, ba ta da dalilin manna takardun wani mara lafiya a cikin mataimaki: samfurin takarda, ba tare da suna ba, ya isa ta samu taimako.\n\nKu kula: boye sunan mutum ba yana nufin cire suna kawai ba. « Mai shagon da ke gaban tankin ruwa, wanda yake bin karamar hukuma bashin kudin haya »: babu suna, amma duk unguwa ta san wanda ake magana a kai. Boye sunan mutum yana nufin: ba zai yiwu a gane wanda ake magana a kai ba. Don haka ku cire bayanan da suke nuna wani: adireshi, sana’ar da ba kowa ke yi ba, labarin da kowa ya sani. Idan kuna shakka, kada ku rubuta komai game da mutumin."
      },
      {
        "title": "Son kai (bias): dabi’ar « tambaya »",
        "body": "Iyaka ta uku: son kai, wato bias. Bias rashin daidaito ne da yake karkatar da gani, kamar ma’auni da ba a daidaita shi ba wanda kullum yake dan karkata zuwa gefe daya. AI ta fi koyo ne daga rubuce-rubuce da hotuna da suka fito daga wasu wurare. Saboda haka tana iya mantawa da yanayinmu, ko ta maimaita ra’ayoyin da aka saba yi wa mutane ba bisa gaskiya ba. Takardar sanarwar Hadiza misali ne: dokar wata kasa, da aka yi amfani da ita a Kamaru kamar ta duniya baki daya ce.\n\nSon kai yana shiga ko’ina. Ku nemi hoton « likita » ko « shugaban kamfani »: kuna iya samun mutum iri daya kullum, ba kasafai mace ba, ba kasafai fuskar dan Afirka ba. Wata matashiya mai kafa kamfani a Lomé, a Togo, da ta tambayi yadda za ta karbi kudi daga kwastomominta, tana iya samun amsa da ta mayar da hankali kan katin banki, alhali kwastomominta galibi suna biya ne da kudin waya. Amsar ba karya ba ce a kanta: kawai an rubuta ta ne don wani daban.\n\nDabi’a ta uku: tambaya. Ku yi wa kanku tambayoyi biyu a gaban kowace amsa: « Shin wannan gaskiya ne a kasata? » da « Wa aka manta da shi a cikin wannan rubutu? » Mutanen da ba sa karanta Faransanci, wadanda ba su da wayar zamani, tsofaffi ko masu nakasa. Kuma ku ba da mahallinku tun farko: garinku, kasarku, jama’arku, harshenku. Wannan shi ne bangaren « mahalli » na hanyar RCTF, kuma shi ne mafi kyawun kariyarku daga amsar da aka tsara don wata duniya daban."
      }
    ],
    "example": {
      "title": "Sakon ranar tsabtace unguwa da aka wuce da shi ta dabi’u uku, a Garoua",
      "challenge": "Hadiza ma’aikaciya ce a ofishin karamar hukumar Garoua, a Kamaru, mai kula da sanar da mazauna gari; Hausa harshen uwarta ne (labarin kirkira ne). A makon da ya wuce, ta roki wani mataimaki ya shirya takardar sanarwa game da takardun da ake bukata don wani aiki na rajistar haihuwa, aure da mutuwa. Mataimakin ya kara, da tabbaci, wata takarda da ake nema a wani wuri, ba a Kamaru ba: da wani mazaunin gari ya iya tafiya a banza. Yau, dole ne ta aika sakon gayyata zuwa ranar tsabtace unguwa da ta shirya da Gemini a Darasi na 3: ranar Asabar, karfe bakwai, a gaban makarantar unguwa, tare da masu aikin sa kai ashirin. Mazauna unguwar da yawa suna magana da Hausa. Abin da ke cikin hadari: amincewar mazauna gari da kuma kare bayanansu.",
      "solution": "A cikin hirar Gemini guda, Hadiza ta yi amfani da dabi’u uku. Kare: takardar jerin sunayen masu aikin sa kai, da sunayensu da lambobin wayarsu, ta zauna a kan tebur; ba ta bukatarta, don haka ba ta manna ta a cikin mataimakin ba. Tantance: ta aika umurnin bincike da aka rubuta da hanyar RCTF, an cike baka-bakan: « Rawa: kai mai bita ne mai tsauri kuma mai hankali. Mahalli: mazauna unguwa ne za su karanta amsarka ta baya, a Garoua. Aiki: sake karanta amsarka ta baya ka bincika ta. Tsari: jeri mai abubuwa 3. 1. Bayanan da ba daga gare ni suka fito ba. 2. Wadanda ya kamata a tantance, da kuma inda za a tantance su. 3. Abin da zai iya ware wani ko ya nuna shi ta hanyar raini. » Mataimakin ya jera abin da ya kara da kansa. Hadiza ta kwatanta da takardar shirinta, ta goge duk abin da babu a ciki: ba ta yi alkawarin abin da karamar hukuma ba ta yanke shawara a kai ba. Tambaya: ta karanta abu na 3, sannan ta kara tambayarta: « Wa wannan sakon ya manta da shi? » Amsa: mazauna garin da ba sa karanta Faransanci. Ta sake rokon mataimakin: « Fassara wannan sako zuwa Hausa mai sauki. » Ta sake karanta kowace jumla, ta gyara duk abin da bai yi dadi a kunne ba. A karshe, ta manna nau’o’in biyu a cikin rukunin WhatsApp na unguwa ta aika.",
      "impact": "Sakon ya tafi bayan an tantance shi, da Faransanci da Hausa, ba tare da wani bayanin sirri na mutum ba, kuma yana sanar da abin da karamar hukuma ta yanke shawara a kai kawai. Mazauna garin da ba sa karanta Faransanci a karshe sun samu labarin a harshensu. An gyara takardar sanarwar makon jiya, takarda bayan takarda, tare da sashen rajistar haihuwa, aure da mutuwa. Daga farko har karshe, Hadiza ce ke da iko; daga yanzu, kafin kowane sako, tana amfani da dabi’u uku."
    },
    "practice": {
      "title": "Ku wuce da amsar AI ta dabi’u uku",
      "instructions": [
        "Ku dauki wata amsa da kuka samu a wani darasi na baya (jerin ayyuka, talla, teburin damammaki da hadurra). Tantance: ku ja layi a karkashin kowane abu mai muhimmanci (kwanan wata, adadi, suna, doka) ku tantance a kalla daya daga cikinsu a wurin majiya ta hukuma ko kwararren mutum. Idan amsar tana da hanyar shafi (link), ku bude ta.",
        "Kare: ku sake karanta abin da kuka rubuta ku tabbatar babu wani bayanin sirri na mutum a ciki (suna, lamba, kalmar sirri, bayanin lafiya, bayanin da yake nuna wani). Sannan ku bude saitunan sirri na mataimakinku ku duba ko ana amfani da hirarrakinku wajen inganta kayan aikin.",
        "Tambaya: a cikin hirar guda, ku aika wannan umurnin bincike da aka rubuta da hanyar RCTF, kuna cike baka-bakan: Rawa: kai mai bita ne mai tsauri kuma mai hankali. Mahalli: [wanda zai karanta] ne zai karanta amsarka ta baya, a [garinku]. Aiki: sake karanta amsarka ta baya ka bincika ta. Tsari: jeri mai abubuwa 3. 1. Bayanan da ba daga gare ni suka fito ba. 2. Wadanda ya kamata a tantance, da kuma inda za a tantance su. 3. Abin da zai iya ware wani ko ya nuna shi ta hanyar raini. Sannan ku tambayi kanku: « Shin wannan gaskiya ne a kasata? Wa aka manta da shi? »"
      ],
      "observation": "Za ku lura cewa sau da yawa mataimakin yana kara abubuwan da ba ku taba ba shi ba (lokaci, wuri, doka, alkawari), kullum da murya iri daya mai tabbaci. Akalla abu daya yana bukatar a tantance shi a wajen AI: umurnin bincike yana nuna muku inda za ku duba, amma ba ya yin wannan aikin a madadinku. Za ku kuma ga cewa wani lokaci amsar tana mantawa da wani bangare na jama’arku: saninku na gaskiyar wurin ne yake gyara ta."
    },
    "quiz": [
      {
        "question": "Mene ne hallucination ta AI?",
        "options": [
          { "key": "A", "text": "Matsalar nuni a allon waya" },
          { "key": "B", "text": "Katsewar hanyar sadarwa" },
          { "key": "C", "text": "Amsar karya, da aka bayar da tabbaci" },
          { "key": "D", "text": "Hoto mara kyau, mai dishi-dishi" }
        ],
        "answer": "C",
        "explanation": "Hallucination ba ta da alaka da allo ko hanyar sadarwa: amsar karya ce, wadda aka gabatar da karfin gwiwa kamar amsa ta gaskiya. AI tana hasashen abin da zai iya biyo baya ko da ba ta sani ba. Shi ya sa murya mai tabbaci ba ta tabbatar da komai ba, kuma dole ne a tantance abin da yake da muhimmanci."
      },
      {
        "question": "Mataimakin ya ambaci majiya tare da hanyar shafi (link). Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku yarda da shi: akwai hanyar shafi" },
          { "key": "B", "text": "Ku bude hanyar shafin ku tabbatar yana fadin abu daya" },
          { "key": "C", "text": "Ku goge amsar" },
          { "key": "D", "text": "Ku nemi amsar a wani harshe" }
        ],
        "answer": "B",
        "explanation": "Hanyar shafi ba hujja ba ce har sai kun bude ta. Tana iya zama matacciya, ta kai ku wani shafi daban, ko ba ta fadi abin da AI ta danganta mata ba. Bude hanyar shafin da kwatantawa, wannan ita ce dabi’ar « tantance ». Goge amsar ko canza harshe ba ya nuna muku ko amsar daidai ce."
      },
      {
        "question": "Me ya sa AI za ta iya maimaita ra’ayoyin da aka saba yi wa mutane ba bisa gaskiya ba?",
        "options": [
          { "key": "A", "text": "Misalanta suna dauke da rashin daidaito" },
          { "key": "B", "text": "Tana da nata ra’ayoyin" },
          { "key": "C", "text": "Tana son bata wa wasu mutane rai" },
          { "key": "D", "text": "Irin wadannan ra’ayoyi kullum gaskiya ne" }
        ],
        "answer": "A",
        "explanation": "AI ba ta da ra’ayi ko niyya. Tana koyo ne daga misalai, wadanda yawancinsu sun fito daga wasu wurare, kuma tana maimaita rashin daidaitonsu: wannan shi ne son kai (bias). Shi ya sa ake da dabi’ar « tambaya »: « Shin wannan gaskiya ne a kasata? Wa aka manta da shi? »"
      },
      {
        "question": "Me za ku iya sakawa a cikin umurni?",
        "options": [
          { "key": "A", "text": "Lambar wayar wani mazaunin gari" },
          { "key": "B", "text": "Sunan dalibi da makinsa" },
          { "key": "C", "text": "Kalmar sirrinku" },
          { "key": "D", "text": "« [Suna] » a madadin sunan mutum" }
        ],
        "answer": "D",
        "explanation": "Lambar waya, sunan dalibi tare da makinsa ko kalmar sirri duk bayanan sirri ne: abin da kuke rubutawa na iya kasancewa an ajiye shi. Maye gurbin suna da « [Suna] » yana ba ku taimako iri daya ba tare da fallasa kowa ba. Wannan ita ce dabi’ar « kare »."
      },
      {
        "question": "« Mai shagon da ke gaban tankin ruwa, wanda yake bin karamar hukuma bashin kudin haya »: shin an boye sunan mutumin?",
        "options": [
          { "key": "A", "text": "E, babu suna" },
          { "key": "B", "text": "E, idan an rubuta shi da Faransanci" },
          { "key": "C", "text": "A’a, wadannan bayanai suna ba da damar gane shi" },
          { "key": "D", "text": "E, idan mataimakin kyauta ne" }
        ],
        "answer": "C",
        "explanation": "Boye sunan mutum ba yana nufin cire suna kawai ba: yana nufin ba zai yiwu a gane wanda ake magana a kai ba. A cikin unguwa, wuri na musamman, sana’a da bashin da aka sani sun isa a gane mutum. Harshe ko kasancewar kayan aikin kyauta ba sa canza komai: ku cire wadannan bayanai ma."
      }
    ],
    "reflection": "Ku yi tunani game da wani bayani da kuka taba tambayar AI, ko da za ku iya tambaya, don aikinku ko rayuwarku ta yau da kullum: wace dabi’a ce cikin uku (tantance, kare, tambaya) za ta fi muhimmanci, kuma me ya sa?",
    "glossary": [
      { "term": "Hallucination (amsar karya da aka bayar da tabbaci)", "definition": "Amsar karya da AI ta bayar da tabbaci: kwanan wata, doka ko majiya da aka kirkiro. Tana faruwa ne saboda AI tana hasashen abin da zai iya biyo baya, ko da ba ta sani ba." },
      { "term": "Source officielle (majiya ta hukuma)", "definition": "Hukumar da take da iko a kan wani batu: ofishin gwamnati, ma’aikata, sashen jama’a, masu shirya jarrabawa. A can ne, ko a wurin kwararren mutum, ake tantance abin da yake da muhimmanci." },
      { "term": "Données personnelles (bayanan sirri na mutum)", "definition": "Duk wani bayani da yake ba da damar gane mutum: suna, lambar waya, adireshi, kalmar sirri, bayanan lafiya. Kada a taba rubuta su a cikin mataimakin AI." },
      { "term": "Anonyme (an boye sunan mutum)", "definition": "Ana fadin haka game da rubutun da ba ya ba da damar gane wanda ake magana a kai. Cire suna bai isa ba: wuri na musamman, sana’ar da ba kowa ke yi ba ko labarin da aka sani na iya nuna wani." },
      { "term": "Biais (son kai, rashin daidaito)", "definition": "Rashin daidaito da yake karkatar da ganin AI, wanda ta gada daga misalan da ta koya da su. Yana iya sa ta manta da wasu yanayi ko ta maimaita ra’ayoyin da ba bisa gaskiya ba." },
      { "term": "Consigne de contrôle (umurnin bincike)", "definition": "Umurnin da aka rubuta da hanyar RCTF wanda yake rokon mataimakin ya sake karanta amsarsa ta baya: abin da ya kara da kansa, abin da ya kamata a tantance da kuma inda, da abin da zai iya ware wani." }
    ]
  }
};
