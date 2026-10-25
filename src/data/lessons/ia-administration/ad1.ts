import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « IA pour l'administration » (ia-administration) — leçon ad1 (courrier administratif sans divulguer de données)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 13 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const adLesson1: Record<Language, LessonContent> = {
  "fr": {
    "id": "ad1",
    "lessonNumber": 1,
    "title": "Rédiger un courrier administratif avec l’IA, sans divulguer de données",
    "objective": "À la fin de cette leçon, vous saurez préparer un courrier administratif avec l’IA, sans rien divulguer. Vous saurez distinguer ce qui peut entrer dans un outil grand public de ce qui n’y entre jamais, et remplacer les noms par des fonctions et les numéros par des crochets. Vous saurez rédiger une consigne en quatre blocs (méthode RCTF) qui s’appuie sur le modèle de lettre de votre service. Enfin, vous saurez vérifier le registre, les formules et les références du brouillon avant de le présenter au parapheur.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Les deux erreurs du premier réflexe : tout coller et croire que l’IA connaît vos usages",
        "body": "Le directeur vous remet une note manuscrite et vous demande une lettre pour demain. Le premier réflexe est tentant : tout recopier dans l’assistant et attendre une lettre parfaite. Cette note contient pourtant des noms, des numéros de téléphone, parfois un passage confidentiel. Les coller dans un outil grand public, c’est un peu comme confier un pli ouvert à un inconnu sur le quai d’une gare routière : une fois parti, vous ne savez plus qui le lira ni où il ira.\n\nLa deuxième erreur est plus discrète : croire que l’IA connaît les usages de votre administration. Elle a lu énormément de textes, mais elle ne connaît ni votre en-tête, ni votre façon de numéroter les références, ni les formules que votre direction utilise. Une direction régionale au Burkina Faso, une préfecture au Togo et une commune au Mali n’ont pas exactement les mêmes modèles. Sans indication, l’IA produit une lettre générique, et elle peut même inventer une référence qui a l’air vraie.\n\nCette leçon remplace ces deux réflexes par trois règles simples. Rien de confidentiel dans l’outil. Des éléments et un modèle, pas le dossier. Un registre et des formules que vous vérifiez vous-même. L’IA prépare un brouillon ; vous le vérifiez, la hiérarchie le vise, le signataire engage l’administration."
      },
      {
        "title": "Ne rien mettre de confidentiel dans l’outil : données d’usagers et documents non publics",
        "body": "Deux catégories ne passent jamais la porte de l’outil. D’abord, les documents classés ou non publics : notes internes, projets de décision, passages confidentiels comme un différend avec un partenaire. Ensuite, les données personnelles des usagers : nom, adresse, téléphone, numéro de pièce d’identité, situation familiale ou état de santé. Ce que vous collez dans un outil grand public sort du service. C’est un principe de prudence : vous ne contrôlez plus ce que devient le texte une fois envoyé.\n\nCette règle n’est pas une invention du cours. Les textes de la fonction publique de votre pays imposent aux agents la discrétion professionnelle : ne pas révéler ce que l’on apprend dans l’exercice de ses fonctions. Et en cas de doute, ce n’est pas à l’agent seul de trancher : il pose la question à sa hiérarchie. Si votre administration fournit un outil d’IA validé, c’est celui-là qu’il faut utiliser en priorité.\n\nPrenons un contre-exemple. Dans une mairie de Garoua, au Cameroun, Abdoul-Aziz colle la requête d’un usager, avec son nom, son adresse et son téléphone, et demande une réponse. Des données personnelles d’usager viennent de sortir du service. Il lui suffisait d’écrire « un usager demande… », puis de remettre le nom hors de l’outil, dans son traitement de texte. De même, une agente d’état civil en Guinée qui prépare une réponse écrira « un usager demande la copie intégrale d’un acte de naissance », sans nom ni numéro d’acte."
      },
      {
        "title": "Donner des éléments et un modèle, pas le dossier : fonctions, crochets et consigne RCTF",
        "body": "L’IA n’a pas besoin du dossier pour rédiger une bonne lettre : elle a besoin des éléments utiles. C’est comme chez le couturier : vous lui apportez le patron et les mesures, pas toute votre armoire. Concrètement, écrivez des fonctions au lieu des noms (« le Directeur régional », « les chefs des services techniques », « le Maire de la commune ») et des crochets à la place des numéros et des références (« [N° de référence] », « [date limite] »). Les crochets restent dans le brouillon ; vous les remplirez plus tard, hors de l’outil.\n\nAjoutez ensuite le modèle de lettre de votre service, anonymisé : retirez les noms, les numéros et l’en-tête réel, remplacé par « [EN-TÊTE DU SERVICE] ». Ce modèle vaut mieux que toutes les explications, car il montre à l’IA la structure, l’ordre des parties et le ton attendus. Une administration au Maroc ou en République démocratique du Congo ne rédige pas tout à fait comme une autre : le modèle transmet ces usages.\n\nLe tout se range dans une consigne en quatre blocs, la méthode RCTF. Rôle : « tu es secrétaire de direction dans une administration publique ». Contexte : expéditeur, destinataires, objet, références entre crochets, faits, date, heure, lieu, ce qui est demandé et le délai de réponse. Tâche : « rédige le brouillon de cette lettre, au registre administratif, avec les formules d’usage ». Format : le modèle du service, puis une dernière ligne qui compte beaucoup : « Garde tous les crochets tels quels. N’invente aucun nom, aucun numéro, aucune référence. »"
      },
      {
        "title": "Vérifier le registre, les formules et les références avant le parapheur",
        "body": "Le mot « registre » a deux sens au bureau : le registre du courrier, où l’on enregistre chaque lettre, et le registre de langue, c’est-à-dire le niveau de langage. Ici, il s’agit du second. Une lettre administrative s’ouvre souvent par « J’ai l’honneur de… ». La formule finale dépend du rang du destinataire : par exemple « Veuillez agréer, Monsieur le Maire, l’expression de ma considération distinguée », et « de ma haute considération » pour une haute autorité. Ces formules varient d’un pays et d’un service à l’autre : aucune n’est la règle unique, et en cas de doute, c’est le modèle du service qui tranche.\n\nRelisez ensuite le brouillon ligne à ligne, la note d’origine à côté, comme un caissier recompte la monnaie avant de la rendre. Date, heure, lieu, chaque point de l’ordre du jour, délai de réponse : tout doit correspondre. Si l’IA a ajouté une référence que vous n’avez pas donnée, par exemple « N° 245/DR », supprimez-la : c’est une invention. Le vrai numéro vient du registre du courrier, et vous l’ajoutez hors de l’outil, dans votre traitement de texte, avec les noms.\n\nLa lettre suit alors le circuit habituel : brouillon, vérification par l’agent, visa de la hiérarchie, signature, puis enregistrement au courrier départ. Que vous travailliez dans une mairie au Sénégal ou dans un ministère au Kenya, ce circuit ne change pas avec l’IA. L’outil fait gagner un premier jet ; la responsabilité de la lettre reste humaine, du rédacteur au signataire."
      }
    ],
    "example": {
      "title": "Zeinabou, à Tahoua : la lettre d’invitation à la réunion de coordination trimestrielle",
      "challenge": "Zeinabou est secrétaire de direction dans une direction régionale fictive de Tahoua, au Niger. Elle doit préparer pour le lendemain la lettre qui invite les services techniques, la mairie et deux ONG partenaires à la réunion de coordination trimestrielle. Elle dispose de la note manuscrite du directeur : des noms, des numéros de téléphone, et un passage confidentiel sur un différend avec un partenaire. La tentation : tout coller dans l’assistant. L’enjeu : une lettre correcte, au bon registre, sans qu’aucune information ne sorte du service.",
      "solution": "Dans Gemini, version gratuite, elle ouvre une nouvelle conversation et remplit une consigne RCTF. Contexte : expéditeur « le Directeur régional » ; destinataires « les chefs des services techniques régionaux, le Maire de la commune, les responsables des ONG partenaires » ; objet « réunion de coordination trimestrielle » ; références « [N° de référence] » ; réunion le [date], à 9 heures, dans la salle de réunion de la direction ; ordre du jour : bilan du trimestre, programmation du trimestre suivant, divers ; chaque structure confirme sa participation et désigne un représentant avant le [date limite]. Dans le bloc Format, elle colle le modèle de lettre du service, anonymisé, puis la ligne des garde-fous. Le brouillon arrive : objet, références entre crochets, « J’ai l’honneur de vous inviter… », formule finale. Elle contrôle la date, l’heure, les trois points de l’ordre du jour et la formule finale, la note du directeur à côté. Puis elle copie le texte dans le modèle du service, sur son ordinateur, et y ajoute hors de l’outil le numéro du registre et les mentions nominatives. Le passage confidentiel n’a jamais quitté la note.",
      "impact": "Le lendemain, la lettre passe au parapheur, le directeur la signe, et elle part enregistrée au courrier départ. Ni les noms, ni les numéros de téléphone, ni le passage confidentiel ne sont sortis du service, et aucune référence inventée ne s’est glissée dans la version signée. Zeinabou garde sa consigne RCTF : pour le prochain courrier du même type, elle n’aura qu’à changer le contexte."
    },
    "practice": {
      "title": "Rédigez un courrier sans rien divulguer",
      "instructions": [
        "Choisissez un courrier courant de votre service (invitation, transmission, demande d’information) et listez ses éléments sur papier ou dans un document : remplacez chaque nom par une fonction et chaque numéro, chaque référence, par des crochets.",
        "Dans l’outil d’IA validé par votre administration ou, à défaut, dans Gemini, Claude ou ChatGPT, collez et remplissez cette consigne en quatre blocs, avec un modèle anonymisé de votre service dans le bloc Format : « Rôle : tu es secrétaire de direction dans une administration publique. Contexte : je prépare un courrier de mon service. Expéditeur : [fonction, sans nom]. Destinataires : [fonctions, sans noms]. Objet : [objet]. Références : [laisser entre crochets]. Contenu : [faits, date, heure, lieu, ce qui est demandé, délai de réponse]. Tâche : rédige le brouillon de cette lettre, au registre administratif, avec les formules d’usage. Format : suis la structure de ce modèle de mon service : [collez un modèle anonymisé]. Garde tous les crochets tels quels. N’invente aucun nom, aucun numéro, aucune référence. »",
        "Vérifiez dates, références, registre et formule finale en comparant le brouillon à vos éléments ; supprimez toute référence que vous n’avez pas donnée, complétez les crochets dans votre traitement de texte, hors de l’outil, puis présentez la lettre au parapheur."
      ],
      "observation": "Le brouillon reprend la structure et les formules de votre modèle, garde les crochets et ne contient aucun nom ni numéro, puisque vous n’en avez donné aucun. Si l’IA a malgré tout ajouté une référence ou une date, vous l’avez repérée en relisant. Vous constatez aussi qu’aucune donnée personnelle ni aucun passage confidentiel n’est sorti du service : tout ce qui est nominatif a été ajouté par vous, hors de l’outil."
    },
    "quiz": [
      {
        "question": "Que pouvez-vous coller dans un assistant grand public ?",
        "options": [
          { "key": "A", "text": "La requête d’un usager, avec son nom" },
          { "key": "B", "text": "Un document classé, pour le résumer" },
          { "key": "C", "text": "Les éléments d’un courrier, noms remplacés par des fonctions et des crochets" },
          { "key": "D", "text": "Le fichier du personnel" }
        ],
        "answer": "C",
        "explanation": "Seuls des éléments anonymisés peuvent entrer dans un outil grand public : des fonctions au lieu des noms, des crochets au lieu des numéros. La requête nominative d’un usager, un document classé ou le fichier du personnel contiennent des données personnelles ou non publiques : ils ne sortent jamais du service."
      },
      {
        "question": "Pourquoi coller le modèle de lettre de votre service, anonymisé ?",
        "options": [
          { "key": "A", "text": "Pour que le brouillon suive la structure et les usages du service" },
          { "key": "B", "text": "Pour que la lettre soit plus longue" },
          { "key": "C", "text": "Pour ne pas avoir à la relire" },
          { "key": "D", "text": "Pour que l’IA la signe" }
        ],
        "answer": "A",
        "explanation": "L’IA ne connaît pas les usages de votre administration. Le modèle lui montre la structure, l’ordre des parties et le ton attendus. Il ne dispense pas de relire la lettre, et seul le signataire signe."
      },
      {
        "question": "Quelle phrase relève du registre administratif ?",
        "options": [
          { "key": "A", "text": "« Salut, on se voit mardi ? »" },
          { "key": "B", "text": "« J’ai l’honneur de vous inviter à la réunion de coordination. »" },
          { "key": "C", "text": "« Venez nombreux, ce sera top ! »" },
          { "key": "D", "text": "« Merci de répondre vite fait. »" }
        ],
        "answer": "B",
        "explanation": "« J’ai l’honneur de… » est une formule d’ouverture courante du courrier administratif. Les trois autres phrases appartiennent au langage familier, qui n’a pas sa place dans une lettre officielle."
      },
      {
        "question": "Le brouillon contient une référence « N° 245/DR » que vous n’avez pas donnée. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous la gardez" },
          { "key": "B", "text": "Vous la soulignez" },
          { "key": "C", "text": "Vous demandez au directeur de l’adopter" },
          { "key": "D", "text": "Vous la supprimez et mettez, hors de l’outil, le vrai numéro du registre" }
        ],
        "answer": "D",
        "explanation": "Une référence que vous n’avez pas fournie est une invention de l’IA, même si elle a l’air vraie. Vous la supprimez, et le vrai numéro, tiré du registre du courrier, s’ajoute dans votre traitement de texte, hors de l’outil."
      },
      {
        "question": "Abdoul-Aziz colle la requête d’un usager avec son nom et son téléphone. Quel est le problème ?",
        "options": [
          { "key": "A", "text": "Aucun, l’outil est gratuit" },
          { "key": "B", "text": "Des données personnelles d’usager sortent du service" },
          { "key": "C", "text": "La réponse sera trop longue" },
          { "key": "D", "text": "L’outil ne comprend pas les noms" }
        ],
        "answer": "B",
        "explanation": "Le nom et le téléphone d’un usager sont des données personnelles : en les collant, Abdoul-Aziz les fait sortir du service. Il fallait écrire « un usager demande… », puis remettre le nom hors de l’outil. Qu’un outil soit gratuit ne change rien à la discrétion professionnelle."
      }
    ],
    "reflection": "Parmi les courriers que votre service envoie chaque semaine, lequel pourriez-vous préparer avec l’IA dès demain, et quels noms, numéros ou passages devriez-vous remplacer par des fonctions ou des crochets avant de rédiger la consigne ?",
    "glossary": [
      {
        "term": "Discrétion professionnelle",
        "definition": "Obligation, prévue par les textes de la fonction publique de chaque pays, de ne pas révéler ce que l’on apprend dans l’exercice de ses fonctions. Elle s’applique aussi à ce que l’on colle dans un outil d’IA."
      },
      {
        "term": "Donnée personnelle",
        "definition": "Toute information qui permet de reconnaître une personne : nom, adresse, téléphone, numéro de pièce d’identité, situation familiale ou de santé. Les données des usagers n’entrent jamais dans un outil grand public."
      },
      {
        "term": "Anonymisation",
        "definition": "Action de retirer d’un texte ce qui permet d’identifier une personne ou un service : on remplace les noms par des fonctions et les numéros par des crochets, par exemple « [N° de référence] »."
      },
      {
        "term": "Méthode RCTF",
        "definition": "Méthode de consigne en quatre blocs : Rôle (qui l’IA doit être), Contexte (la situation et les éléments), Tâche (ce qu’elle doit produire), Format (la forme attendue, ici le modèle du service et les garde-fous)."
      },
      {
        "term": "Registre administratif",
        "definition": "Niveau de langage soutenu propre au courrier officiel, avec ses formules d’usage, comme « J’ai l’honneur de… » à l’ouverture et une formule finale adaptée au rang du destinataire. À ne pas confondre avec le registre du courrier, où l’on enregistre les lettres."
      },
      {
        "term": "Parapheur",
        "definition": "Chemise à fenêtres dans laquelle les documents circulent pour être visés par la hiérarchie puis signés. Une lettre préparée avec l’IA y entre seulement après la vérification de l’agent."
      }
    ]
  },
  "en": {
    "id": "ad1",
    "lessonNumber": 1,
    "title": "Writing an Administrative Letter with AI, Without Disclosing Any Data",
    "objective": "By the end of this lesson, you will be able to prepare an administrative letter with AI without disclosing anything. You will know how to tell what can go into a general-public tool from what never goes in, and how to replace names with job titles and numbers with brackets. You will be able to write a four-block prompt (the RCTF method) built on your office’s letter template. Finally, you will know how to check the register, the set phrases and the references in the draft before placing it in the signature folder.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "The two mistakes of the first reflex: pasting everything and believing AI knows your practices",
        "body": "The director hands you a handwritten note and asks for a letter by tomorrow. The first reflex is tempting: copy everything into the assistant and wait for a perfect letter. Yet that note contains names, phone numbers, sometimes a confidential passage. Pasting them into a general-public tool is a bit like handing an open envelope to a stranger at a bus station: once it has gone, you no longer know who will read it or where it will end up.\n\nThe second mistake is less obvious: believing that AI knows the practices of your administration. It has read a huge amount of text, but it does not know your letterhead, the way you number references, or the set phrases your directorate uses. A regional directorate in Burkina Faso, a prefecture in Togo and a municipality in Mali do not use exactly the same templates. Without guidance, AI produces a generic letter, and it may even invent a reference that looks real.\n\nThis lesson replaces those two reflexes with three simple rules. Nothing confidential in the tool. Elements and a template, not the file. A register and set phrases that you check yourself. AI prepares a draft; you check it, your superiors initial it, and the signatory commits the administration."
      },
      {
        "title": "Putting nothing confidential into the tool: service users’ data and non-public documents",
        "body": "Two categories never go through the tool’s door. First, classified or non-public documents: internal notes, draft decisions, confidential passages such as a dispute with a partner. Second, the personal data of service users: name, address, phone number, ID number, family situation or health. Whatever you paste into a general-public tool leaves your office. This is a principle of caution: once the text is sent, you no longer control what happens to it.\n\nThis rule is not an invention of the course. The civil service regulations of your country require officials to observe professional discretion: not revealing what they learn in the course of their duties. And when in doubt, the official does not decide alone: they ask their superiors. If your administration provides an approved AI tool, that is the one to use first.\n\nHere is a counter-example. In a town hall in Garoua, Cameroon, Abdoul-Aziz pastes a citizen’s request, with their name, address and phone number, and asks for a reply. A service user’s personal data has just left the office. He only needed to write “a citizen requests…”, then put the name back outside the tool, in his word processor. In the same way, a civil registry officer in Guinea preparing a reply will write “a citizen requests a full copy of a birth certificate”, with no name and no certificate number."
      },
      {
        "title": "Giving elements and a template, not the file: job titles, brackets and the RCTF prompt",
        "body": "AI does not need the file to write a good letter: it needs the useful elements. It is like going to the tailor: you bring the pattern and the measurements, not your whole wardrobe. In practice, write job titles instead of names (“the Regional Director”, “the heads of technical services”, “the Mayor of the municipality”) and brackets instead of numbers and references (“[Reference No.]”, “[deadline]”). The brackets stay in the draft; you will fill them in later, outside the tool.\n\nThen add your office’s letter template, anonymised: remove the names, the numbers and the real letterhead, replaced by “[OFFICE LETTERHEAD]”. This template is worth more than any explanation, because it shows AI the expected structure, order of sections and tone. An administration in Morocco or in the Democratic Republic of the Congo does not write quite like another: the template carries those practices.\n\nEverything fits into a four-block prompt, the RCTF method. Role: “you are an executive secretary in a public administration”. Context: sender, recipients, subject, references in brackets, facts, date, time, place, what is being asked and the reply deadline. Task: “write the draft of this letter, in administrative register, with the customary set phrases”. Format: the office template, followed by one last line that matters a great deal: “Keep all brackets as they are. Do not invent any name, any number or any reference.”"
      },
      {
        "title": "Checking the register, the set phrases and the references before the signature folder",
        "body": "In French-speaking offices, the word “registre” has two meanings: the mail register, where every letter is recorded, and the language register, meaning the level of language. Here, we mean the second. A French administrative letter often opens with « J’ai l’honneur de… » (I have the honour to…, a formal French administrative opening). The closing phrase depends on the recipient’s rank: for example « Veuillez agréer, Monsieur le Maire, l’expression de ma considération distinguée » (please accept, Mr Mayor, the expression of my distinguished consideration), and « de ma haute considération » (of my high consideration) for a senior authority. These phrases vary from one country and one office to another: none of them is the only rule, and when in doubt, the office template decides.\n\nThen reread the draft line by line, with the original note beside it, the way a cashier recounts change before handing it over. Date, time, place, each item on the agenda, reply deadline: everything must match. If AI has added a reference you did not give, for example “No. 245/DR”, delete it: it is an invention. The real number comes from the mail register, and you add it outside the tool, in your word processor, together with the names.\n\nThe letter then follows the usual circuit: draft, check by the official, initialling by the superiors, signature, then recording in the outgoing mail register. Whether you work in a town hall in Senegal or in a ministry in Kenya, this circuit does not change with AI. The tool gives you a first version; responsibility for the letter remains human, from the writer to the signatory."
      }
    ],
    "example": {
      "title": "Zeinabou, in Tahoua: the invitation letter to the quarterly coordination meeting",
      "challenge": "Zeinabou is an executive secretary in a fictional regional directorate in Tahoua, Niger. By the next day, she must prepare the letter inviting the technical services, the town hall and two partner NGOs to the quarterly coordination meeting. She has the director’s handwritten note: names, phone numbers, and a confidential passage about a dispute with a partner. The temptation: paste everything into the assistant. What is at stake: a correct letter, in the right register, without any information leaving the office.",
      "solution": "In Gemini, free version, she opens a new conversation and fills in an RCTF prompt. Context: sender “the Regional Director”; recipients “the heads of the regional technical services, the Mayor of the municipality, the heads of the partner NGOs”; subject “quarterly coordination meeting”; references “[Reference No.]”; meeting on [date], at 9 a.m., in the directorate’s meeting room; agenda: review of the quarter, planning for the next quarter, any other business; each organisation confirms its attendance and appoints a representative before [deadline]. In the Format block, she pastes the office’s letter template, anonymised, followed by the safeguard line. The draft arrives: subject, references in brackets, « J’ai l’honneur de vous inviter… » (I have the honour to invite you…), closing phrase. She checks the date, the time, the three agenda items and the closing phrase, with the director’s note beside her. Then she copies the text into the office template, on her computer, and adds the register number and the names outside the tool. The confidential passage never left the note.",
      "impact": "The next day, the letter goes into the signature folder, the director signs it, and it is sent and recorded in the outgoing mail register. Neither the names, nor the phone numbers, nor the confidential passage left the office, and no invented reference slipped into the signed version. Zeinabou keeps her RCTF prompt: for the next letter of the same kind, she will only need to change the context."
    },
    "practice": {
      "title": "Write a letter without disclosing anything",
      "instructions": [
        "Choose a routine letter from your office (invitation, cover letter, request for information) and list its elements on paper or in a document: replace each name with a job title and each number or reference with brackets.",
        "In the AI tool approved by your administration or, failing that, in Gemini, Claude or ChatGPT, paste and fill in this four-block prompt, with an anonymised template from your office in the Format block: “Role: you are an executive secretary in a public administration. Context: I am preparing a letter from my office. Sender: [job title, no name]. Recipients: [job titles, no names]. Subject: [subject]. References: [leave in brackets]. Content: [facts, date, time, place, what is being asked, reply deadline]. Task: write the draft of this letter, in administrative register, with the customary set phrases. Format: follow the structure of this template from my office: [paste an anonymised template]. Keep all brackets as they are. Do not invent any name, any number or any reference.” If your letters are written in French, write the prompt in French.",
        "Check dates, references, register and closing phrase by comparing the draft with your elements; delete any reference you did not give, fill in the brackets in your word processor, outside the tool, then place the letter in the signature folder."
      ],
      "observation": "The draft follows the structure and set phrases of your template, keeps the brackets and contains no name or number, since you gave none. If AI still added a reference or a date, you spotted it while rereading. You also see that no personal data and no confidential passage left the office: everything that names someone was added by you, outside the tool."
    },
    "quiz": [
      {
        "question": "What can you paste into a general-public assistant?",
        "options": [
          { "key": "A", "text": "A citizen’s request, with their name" },
          { "key": "B", "text": "A classified document, to summarise it" },
          { "key": "C", "text": "The elements of a letter, with names replaced by job titles and brackets" },
          { "key": "D", "text": "The staff records file" }
        ],
        "answer": "C",
        "explanation": "Only anonymised elements can go into a general-public tool: job titles instead of names, brackets instead of numbers. A citizen’s named request, a classified document or the staff records contain personal or non-public data: they never leave the office."
      },
      {
        "question": "Why paste your office’s letter template, anonymised?",
        "options": [
          { "key": "A", "text": "So that the draft follows the structure and practices of the office" },
          { "key": "B", "text": "So that the letter is longer" },
          { "key": "C", "text": "So that you do not have to reread it" },
          { "key": "D", "text": "So that AI signs it" }
        ],
        "answer": "A",
        "explanation": "AI does not know your administration’s practices. The template shows it the expected structure, order of sections and tone. It does not spare you from rereading the letter, and only the signatory signs."
      },
      {
        "question": "Which sentence belongs to the administrative register?",
        "options": [
          { "key": "A", "text": "“Hi, see you Tuesday?”" },
          { "key": "B", "text": "“I have the honour to invite you to the coordination meeting.”" },
          { "key": "C", "text": "“Come one, come all, it’ll be great!”" },
          { "key": "D", "text": "“Thanks for replying real quick.”" }
        ],
        "answer": "B",
        "explanation": "“I have the honour to…”, in French « J’ai l’honneur de… », is a common opening phrase in administrative letters. The other three sentences belong to casual language, which has no place in an official letter."
      },
      {
        "question": "The draft contains a reference “No. 245/DR” that you did not give. What do you do?",
        "options": [
          { "key": "A", "text": "You keep it" },
          { "key": "B", "text": "You underline it" },
          { "key": "C", "text": "You ask the director to adopt it" },
          { "key": "D", "text": "You delete it and add the real register number, outside the tool" }
        ],
        "answer": "D",
        "explanation": "A reference you did not provide is an AI invention, even if it looks real. You delete it, and the real number, taken from the mail register, is added in your word processor, outside the tool."
      },
      {
        "question": "Abdoul-Aziz pastes a citizen’s request with their name and phone number. What is the problem?",
        "options": [
          { "key": "A", "text": "None, the tool is free" },
          { "key": "B", "text": "A service user’s personal data leaves the office" },
          { "key": "C", "text": "The reply will be too long" },
          { "key": "D", "text": "The tool does not understand names" }
        ],
        "answer": "B",
        "explanation": "A citizen’s name and phone number are personal data: by pasting them, Abdoul-Aziz makes them leave the office. He should have written “a citizen requests…”, then put the name back outside the tool. A tool being free changes nothing about professional discretion."
      }
    ],
    "reflection": "Among the letters your office sends every week, which one could you prepare with AI as early as tomorrow, and which names, numbers or passages would you need to replace with job titles or brackets before writing the prompt?",
    "glossary": [
      {
        "term": "Professional discretion",
        "definition": "The obligation, set out in each country’s civil service regulations, not to reveal what you learn in the course of your duties. It also applies to what you paste into an AI tool."
      },
      {
        "term": "Personal data",
        "definition": "Any information that makes it possible to recognise a person: name, address, phone number, ID number, family or health situation. Service users’ data never goes into a general-public tool."
      },
      {
        "term": "Anonymisation",
        "definition": "Removing from a text whatever identifies a person or an office: names are replaced with job titles and numbers with brackets, for example “[Reference No.]”."
      },
      {
        "term": "RCTF method",
        "definition": "A four-block prompting method: Role (who AI should be), Context (the situation and the elements), Task (what it must produce), Format (the expected form, here the office template and the safeguards)."
      },
      {
        "term": "Administrative register",
        "definition": "The formal level of language specific to official mail, with its customary set phrases, such as « J’ai l’honneur de… » (I have the honour to…) as an opening and a closing phrase suited to the recipient’s rank. Not to be confused with the mail register, where letters are recorded."
      },
      {
        "term": "Parapheur (signature folder)",
        "definition": "A folder with windows in which documents circulate to be initialled by superiors and then signed. A letter prepared with AI goes into it only after the official has checked it."
      }
    ]
  },
  "ha": {
    "id": "ad1",
    "lessonNumber": 1,
    "title": "Rubuta wasikar hukuma da AI, ba tare da tona wani bayani ba",
    "objective": "A karshen wannan darasi, za ku san yadda ake shirya wasikar hukuma da AI, ba tare da tona komai ba. Za ku iya bambance abin da zai iya shiga kayan aikin AI na jama’a da abin da ba zai taba shiga ba, ku kuma maye gurbin sunaye da mukamai, lambobi kuma da alamomin baka [ ]. Za ku iya rubuta umurni mai sassa hudu (hanyar RCTF) wanda ya dogara da samfurin wasikar ofishin ku. A karshe, za ku san yadda ake duba salon rubutu, kalmomin ladabi da lambobin bayani na daftarin kafin a saka shi a parapheur.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Kurakurai biyu na tunanin farko: manna komai, da zaton AI ya san al’adun ofishin ku",
        "body": "Darakta ya ba ku takarda da ya rubuta da hannu, ya ce ku shirya wasika kafin gobe. Tunanin farko yana da jan hankali: kwafa komai a cikin mataimakin AI, ku jira wasika cikakkiya. Amma wannan takarda tana dauke da sunaye, lambobin waya, wani lokaci ma da wani sashe na sirri. Manna su a kayan aikin AI na jama’a kamar ba da wasika a bude ne ga wanda ba ku sani ba a tashar mota: da zarar ta tafi, ba ku san wa zai karanta ta ba, ko ina za ta kai.\n\nKuskure na biyu ya fi boyuwa: zaton cewa AI ya san al’adun hukumar ku. Ya karanta rubuce-rubuce masu yawan gaske, amma bai san kan takardar ofishin ku ba, ko yadda kuke lissafa lambobin bayani, ko kalmomin ladabi da darakta ku ke amfani da su. Darakta ta yanki a Burkina Faso, ofishin gwamna a Togo da karamar hukuma a Mali ba su da samfuri iri daya daidai. Idan ba a ba shi jagora ba, AI zai rubuta wasika ta gama-gari, har ma yana iya kago lambar bayani da ta yi kama da ta gaske.\n\nWannan darasi yana maye gurbin wadannan dabi’u biyu da ka’idoji uku masu sauki. Babu wani abu na sirri a cikin kayan aikin. Bayanai da samfuri, ba fayil din gaba daya ba. Salon rubutu da kalmomin ladabi da ku da kanku kuke dubawa. AI yana shirya daftari; ku kuna dubawa, shugabanni suna amincewa, wanda ya sa hannu kuma yana daukar alhakin hukumar."
      },
      {
        "title": "Kada a saka komai na sirri a kayan aikin: bayanan masu neman hidima da takardun da ba na jama’a ba",
        "body": "Akwai rukunai biyu da ba za su taba wuce kofar kayan aikin ba. Na farko, takardun sirri ko wadanda ba na jama’a ba: takardun cikin gida, daftarin yanke shawara, sassan sirri kamar sabani da wani abokin hulda. Na biyu, bayanan kashin kai na masu neman hidima: suna, adireshi, lambar waya, lambar katin shaida, halin iyali ko na lafiya. Duk abin da kuka manna a kayan aikin AI na jama’a ya fita daga ofishin ku. Wannan ka’idar taka-tsantsan ce: da zarar an aika rubutun, ba ku da iko kan abin da zai faru da shi.\n\nWannan ka’ida ba kirkirar wannan kwas ba ce. Dokokin aikin gwamnati na kasar ku suna wajabta wa ma’aikata kiyaye sirrin aiki: wato rashin tona abin da aka sani a wurin aiki. Idan kuma akwai shakka, ma’aikaci ba ya yanke hukunci shi kadai: yana tambayar shugabanninsa. Idan hukumar ku ta samar da kayan aikin AI da aka amince da shi, shi ne za ku fara amfani da shi.\n\nGa misalin abin da bai kamata ba. A wata karamar hukuma a Garoua, kasar Kamaru, Abdoul-Aziz ya manna bukatar wani mai neman hidima, tare da sunansa, adireshinsa da lambar wayarsa, ya nemi amsa. Bayanan kashin kai na mai neman hidima sun fita daga ofis. Da ya rubuta « wani mai neman hidima yana bukatar… » kawai, sannan ya mayar da sunan a wajen kayan aikin, a cikin manhajar rubutunsa. Haka nan, ma’aikaciyar rajistar haihuwa a Guinea da ke shirya amsa za ta rubuta « wani mai neman hidima yana bukatar cikakken kwafin takardar shaidar haihuwa », ba suna, ba lambar takarda."
      },
      {
        "title": "Ba da bayanai da samfuri, ba fayil din ba: mukamai, alamomin baka da umurnin RCTF",
        "body": "AI ba ya bukatar fayil din gaba daya don rubuta wasika mai kyau: yana bukatar bayanan da ke da amfani kawai. Kamar zuwa wajen tela ne: kuna kai masa samfurin dinki da awo, ba duk akwatin tufafin ku ba. A aikace, ku rubuta mukamai a maimakon sunaye (« le Directeur régional », wato darakta na yanki; « les chefs des services techniques », shugabannin sassan fasaha; « le Maire de la commune », shugaban karamar hukuma) da alamomin baka a maimakon lambobi da lambobin bayani (« [N° de référence] », « [date limite] »). Alamomin baka suna zama a cikin daftarin; daga baya za ku cike su, a wajen kayan aikin.\n\nSannan ku kara samfurin wasikar ofishin ku, bayan an boye sunaye: cire sunaye, lambobi da kan takarda na gaske, a maye gurbinsa da « [EN-TÊTE DU SERVICE] ». Wannan samfuri ya fi duk wani bayani amfani, domin yana nuna wa AI tsarin da ake so, jerin sassan wasikar da sautinta. Hukuma a Maroko ko a Jamhuriyar Dimokuradiyyar Kongo ba ta rubutu daidai kamar wata ba: samfurin ne ke dauke da wadannan al’adu.\n\nDuk wannan yana shiga umurni mai sassa hudu, hanyar RCTF: Rawa, Mahallin, Aiki, Tsari. Rawa: « tu es secrétaire de direction dans une administration publique » (kai sakataren darakta ne a hukumar gwamnati). Mahallin: mai aikawa, wadanda za a aika wa, batu, lambobin bayani a cikin baka, abubuwan da suka faru, rana, lokaci, wuri, abin da ake nema da wa’adin amsa. Aiki: a rubuta daftarin wasikar da salon rubutun hukuma, tare da kalmomin ladabi da aka saba. Tsari: samfurin ofishin, sannan layi na karshe mai muhimmancin gaske: « Garde tous les crochets tels quels. N’invente aucun nom, aucun numéro, aucune référence. » (Ka bar dukkan alamomin baka yadda suke. Kada ka kago suna, ko lamba, ko lambar bayani.)"
      },
      {
        "title": "Duba salon rubutu, kalmomin ladabi da lambobin bayani kafin parapheur",
        "body": "Kalmar « registre » tana da ma’ana biyu a ofis: rajistar wasiku, inda ake rubuta kowace wasika, da salon harshe, wato matakin magana. A nan, muna nufin na biyu. Ana yawan bude wasikar hukuma da « J’ai l’honneur de… » (ina da girmamawar…). Kalmar ladabi ta karshe ta dogara da matsayin wanda za a aika wa: misali « Veuillez agréer, Monsieur le Maire, l’expression de ma considération distinguée », da « de ma haute considération » ga babban shugaba. Wadannan kalmomi suna canjawa daga kasa zuwa kasa da daga ofis zuwa ofis: babu wadda ita kadai ce doka, kuma idan akwai shakka, samfurin ofishin ne ke yanke hukunci.\n\nSannan ku sake karanta daftarin layi bayan layi, takardar asali a gefe, kamar yadda mai karbar kudi ke sake kirga canji kafin ya mayar. Rana, lokaci, wuri, kowane batu na ajandar taro, wa’adin amsa: komai dole ya dace. Idan AI ya kara lambar bayani da ba ku ba shi ba, misali « N° 245/DR », ku goge ta: kagaggiya ce. Lambar gaske tana fitowa daga rajistar wasiku, kuma ku ne kuke kara ta a wajen kayan aikin, a manhajar rubutun ku, tare da sunaye.\n\nSannan wasikar tana bin hanyar da aka saba: daftari, dubawar ma’aikaci, amincewar shugabanni, sa hannu, sannan rubuta ta a rajistar wasiku masu fita. Ko kuna aiki a karamar hukuma a Senegal ko a ma’aikata a Kenya, wannan hanya ba ta canjawa saboda AI. Kayan aikin yana ba ku rubutun farko; alhakin wasikar yana nan a hannun mutane, daga mai rubutu har zuwa wanda ya sa hannu."
      }
    ],
    "example": {
      "title": "Zeinabou a Tahoua: wasikar gayyata zuwa taron daidaita ayyuka na kowane wata uku",
      "challenge": "Zeinabou sakatariyar darakta ce a wata darakta ta yanki ta kirkira a Tahoua, kasar Nijar. Dole ta shirya kafin gobe wasikar da ke gayyatar sassan fasaha, karamar hukuma da kungiyoyi masu zaman kansu (ONG) biyu abokan hulda zuwa taron daidaita ayyuka na kowane wata uku. Tana da takardar da darakta ya rubuta da hannu: sunaye, lambobin waya, da wani sashe na sirri game da sabani da wani abokin hulda. Jarabawar: manna komai a mataimakin AI. Abin da ke cikin hadari: wasika daidai, da salon rubutu daidai, ba tare da wani bayani ya fita daga ofis ba.",
      "solution": "A Gemini, sigar kyauta, ta bude sabuwar tattaunawa ta cike umurnin RCTF. Mahallin: mai aikawa « le Directeur régional »; wadanda za a aika wa: shugabannin sassan fasaha na yanki, shugaban karamar hukuma, shugabannin kungiyoyin ONG abokan hulda; batu: taron daidaita ayyuka na kowane wata uku; lambobin bayani: « [N° de référence] »; taron a ranar [date], karfe 9 na safe, a dakin taro na darakta; ajanda: bitar watanni ukun, tsara watanni uku masu zuwa, sauran batutuwa; kowace kungiya ta tabbatar da halartarta ta kuma nada wakili kafin [date limite]. A sashen Tsari, ta manna samfurin wasikar ofishin, bayan an boye sunaye, sannan layin kariya. Daftarin ya iso: batu, lambobin bayani a cikin baka, « J’ai l’honneur de vous inviter… », kalmar ladabi ta karshe. Ta duba rana, lokaci, batutuwa uku na ajanda da kalmar ladabi ta karshe, takardar darakta a gefenta. Sannan ta kwafa rubutun a cikin samfurin ofishin, a kwamfutarta, ta kara lambar rajista da sunaye a wajen kayan aikin. Sashen sirrin bai taba barin takardar ba.",
      "impact": "Washegari, wasikar ta shiga parapheur, darakta ya sa mata hannu, kuma ta fita bayan an rubuta ta a rajistar wasiku masu fita. Babu suna, babu lambar waya, kuma sashen sirrin bai fita daga ofis ba; babu kuma lambar bayani ta kage da ta shiga cikin sigar da aka sa wa hannu. Zeinabou ta ajiye umurninta na RCTF: don wasika ta gaba irin wannan, sai dai ta canja mahallin kawai."
    },
    "practice": {
      "title": "Rubuta wasika ba tare da tona komai ba",
      "instructions": [
        "Zabi wata wasika da ofishin ku ke yawan aikawa (gayyata, aika takardu, neman bayani) ku jera bayananta a takarda ko a cikin takardar kwamfuta: ku maye gurbin kowane suna da mukami, kowace lamba ko lambar bayani kuma da alamomin baka.",
        "A kayan aikin AI da hukumar ku ta amince da shi ko, idan babu, a Gemini, Claude ko ChatGPT, ku manna ku cike wannan umurni mai sassa hudu (Rawa, Mahallin, Aiki, Tsari), tare da samfurin ofishin ku da aka boye sunaye a sashen Tsari. Umurnin yana cikin Faransanci saboda wasikar ma da Faransanci ake rubuta ta: « Rôle : tu es secrétaire de direction dans une administration publique. Contexte : je prépare un courrier de mon service. Expéditeur : [fonction, sans nom]. Destinataires : [fonctions, sans noms]. Objet : [objet]. Références : [laisser entre crochets]. Contenu : [faits, date, heure, lieu, ce qui est demandé, délai de réponse]. Tâche : rédige le brouillon de cette lettre, au registre administratif, avec les formules d’usage. Format : suis la structure de ce modèle de mon service : [collez un modèle anonymisé]. Garde tous les crochets tels quels. N’invente aucun nom, aucun numéro, aucune référence. »",
        "Ku duba rana, lambobin bayani, salon rubutu da kalmar ladabi ta karshe ta hanyar kwatanta daftarin da bayanan ku; ku goge duk lambar bayani da ba ku bayar ba, ku cike alamomin baka a manhajar rubutun ku, a wajen kayan aikin, sannan ku saka wasikar a parapheur."
      ],
      "observation": "Daftarin yana bin tsari da kalmomin ladabi na samfurin ku, yana barin alamomin baka, kuma babu suna ko lamba a cikinsa, domin ba ku bayar da ko daya ba. Idan duk da haka AI ya kara lambar bayani ko rana, kun gano ta lokacin sake karantawa. Za ku kuma ga cewa babu bayanan kashin kai ko sashen sirri da ya fita daga ofis: duk abin da ke dauke da suna, ku ne kuka kara shi, a wajen kayan aikin."
    },
    "quiz": [
      {
        "question": "Me za ku iya mannawa a mataimakin AI na jama’a?",
        "options": [
          { "key": "A", "text": "Bukatar wani mai neman hidima, tare da sunansa" },
          { "key": "B", "text": "Takardar sirri, don a takaita ta" },
          { "key": "C", "text": "Bayanan wasika, inda aka maye gurbin sunaye da mukamai da alamomin baka" },
          { "key": "D", "text": "Fayil din ma’aikata" }
        ],
        "answer": "C",
        "explanation": "Bayanan da aka boye sunaye ne kawai za su iya shiga kayan aikin AI na jama’a: mukamai a maimakon sunaye, alamomin baka a maimakon lambobi. Bukatar mai neman hidima mai dauke da suna, takardar sirri ko fayil din ma’aikata suna dauke da bayanan kashin kai ko wadanda ba na jama’a ba: ba sa taba fita daga ofis."
      },
      {
        "question": "Me ya sa ake manna samfurin wasikar ofishin ku, bayan an boye sunaye?",
        "options": [
          { "key": "A", "text": "Don daftarin ya bi tsari da al’adun ofishin" },
          { "key": "B", "text": "Don wasikar ta fi tsawo" },
          { "key": "C", "text": "Don kada ku sake karanta ta" },
          { "key": "D", "text": "Don AI ya sa mata hannu" }
        ],
        "answer": "A",
        "explanation": "AI bai san al’adun hukumar ku ba. Samfurin yana nuna masa tsarin da ake so, jerin sassa da sautin wasikar. Ba ya hana ku sake karanta wasikar, kuma wanda ke da iko ne kadai ke sa hannu."
      },
      {
        "question": "Wace jumla ce ta salon rubutun hukuma?",
        "options": [
          { "key": "A", "text": "« Salut, on se voit mardi ? » (Sannu, sai ranar Talata?)" },
          { "key": "B", "text": "« J’ai l’honneur de vous inviter à la réunion de coordination. » (Ina da girmamawar gayyatar ku zuwa taron daidaita ayyuka.)" },
          { "key": "C", "text": "« Venez nombreux, ce sera top ! » (Ku zo da yawa, zai yi dadi!)" },
          { "key": "D", "text": "« Merci de répondre vite fait. » (Ku amsa da sauri-sauri.)" }
        ],
        "answer": "B",
        "explanation": "« J’ai l’honneur de… » kalmar budewa ce da aka saba amfani da ita a wasikar hukuma. Sauran jumloli ukun na harshen hira ne, wanda ba shi da gurbi a wasikar hukuma."
      },
      {
        "question": "Daftarin yana dauke da lambar bayani « N° 245/DR » da ba ku bayar ba. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku bar ta" },
          { "key": "B", "text": "Ku ja layi a karkashinta" },
          { "key": "C", "text": "Ku roki darakta ya amince da ita" },
          { "key": "D", "text": "Ku goge ta, ku saka lambar rajista ta gaske a wajen kayan aikin" }
        ],
        "answer": "D",
        "explanation": "Lambar bayani da ba ku bayar ba kirkirar AI ce, ko da ta yi kama da ta gaske. Ku goge ta, sannan lambar gaske, daga rajistar wasiku, ana kara ta a manhajar rubutun ku, a wajen kayan aikin."
      },
      {
        "question": "Abdoul-Aziz ya manna bukatar wani mai neman hidima tare da sunansa da lambar wayarsa. Mene ne matsalar?",
        "options": [
          { "key": "A", "text": "Babu, kayan aikin kyauta ne" },
          { "key": "B", "text": "Bayanan kashin kai na mai neman hidima sun fita daga ofis" },
          { "key": "C", "text": "Amsar za ta yi tsawo sosai" },
          { "key": "D", "text": "Kayan aikin ba ya fahimtar sunaye" }
        ],
        "answer": "B",
        "explanation": "Suna da lambar wayar mai neman hidima bayanan kashin kai ne: ta hanyar manna su, Abdoul-Aziz ya fitar da su daga ofis. Kamata ya yi ya rubuta « wani mai neman hidima yana bukatar… », sannan ya mayar da sunan a wajen kayan aikin. Kasancewar kayan aiki kyauta ba ya canja komai game da kiyaye sirrin aiki."
      }
    ],
    "reflection": "Daga cikin wasikun da ofishin ku ke aikawa kowane mako, wace za ku iya shiryawa da AI tun gobe, kuma wadanne sunaye, lambobi ko sassa ne za ku maye gurbinsu da mukamai ko alamomin baka kafin ku rubuta umurnin?",
    "glossary": [
      {
        "term": "Discrétion professionnelle (kiyaye sirrin aiki)",
        "definition": "Wajibci, wanda dokokin aikin gwamnati na kowace kasa suka tanada, na rashin tona abin da aka sani a wurin aiki. Ya shafi har abin da ake mannawa a kayan aikin AI."
      },
      {
        "term": "Donnée personnelle (bayanan kashin kai)",
        "definition": "Duk wani bayani da ke ba da damar gane mutum: suna, adireshi, lambar waya, lambar katin shaida, halin iyali ko na lafiya. Bayanan masu neman hidima ba sa taba shiga kayan aikin AI na jama’a."
      },
      {
        "term": "Anonymisation (boye sunaye)",
        "definition": "Cire daga rubutu duk abin da ke nuna wani mutum ko wani ofis: ana maye gurbin sunaye da mukamai, lambobi kuma da alamomin baka, misali « [N° de référence] »."
      },
      {
        "term": "Méthode RCTF (Rawa, Mahallin, Aiki, Tsari)",
        "definition": "Hanyar rubuta umurni a sassa hudu: Rawa (wa AI zai zama), Mahallin (halin da ake ciki da bayanai), Aiki (abin da zai samar), Tsari (siffar da ake so, a nan samfurin ofishin da layin kariya)."
      },
      {
        "term": "Registre administratif (salon rubutun hukuma)",
        "definition": "Matakin harshe na ladabi na wasikun hukuma, tare da kalmomin da aka saba, kamar « J’ai l’honneur de… » a farko da kalmar ladabi ta karshe da ta dace da matsayin wanda za a aika wa. Kada a rikita shi da rajistar wasiku, inda ake rubuta wasiku."
      },
      {
        "term": "Parapheur (fayil din sa hannu)",
        "definition": "Fayil mai tagogi da takardu ke yawo a cikinsa don shugabanni su amince da su sannan a sa musu hannu. Wasikar da aka shirya da AI tana shiga cikinsa ne kawai bayan ma’aikaci ya duba ta."
      }
    ]
  }
};
