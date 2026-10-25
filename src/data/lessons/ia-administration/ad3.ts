import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « IA pour l'administration » (ia-administration) — leçon ad3 (Résumer un texte réglementaire et vérifier chaque article)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 13 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const adLesson3: Record<Language, LessonContent> = {
  "fr": {
    "id": "ad3",
    "lessonNumber": 3,
    "title": "Résumer un texte réglementaire avec l’IA et vérifier chaque article",
    "objective": "À la fin de cette leçon, vous saurez résumer un texte réglementaire avec l’IA, et vérifier chaque point. Vous saurez distinguer les textes publics, qui peuvent entrer dans un outil grand public, des documents internes, qui n’y entrent jamais. Vous saurez obtenir de Gemini Notebook, avec une consigne RCTF, une liste où chaque point renvoie à son article, puis contrôler chaque ligne dans le texte officiel et vérifier que ce texte est toujours en vigueur. Vous repartirez avec une note d’une page que vous pouvez défendre devant votre directeur.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Pourquoi le résumé de l’IA ne remplace pas le texte réglementaire",
        "body": "Un décret, un arrêté ou une circulaire publique peut compter des dizaines de pages, et l’on vous demande souvent d’en tirer l’essentiel pour votre hiérarchie, pour une réunion ou pour les agents du service. La tentation est forte : déposer le texte dans un outil d’IA, demander un résumé et le transmettre tel quel. Beaucoup pensent que le résumé de l’IA, c’est le texte en plus court. C’est faux : un résumé est une réécriture, et toute réécriture choisit, coupe et reformule.\n\nUn résumé peut omettre une exception, arrondir un délai ou inverser une condition. Or, dans un texte réglementaire, un seul mot change le sens d’une obligation : « sauf », « au plus tard », « sous réserve ». « Le congé est accordé sous réserve de l’avis du chef de service » ne veut pas dire « le congé est accordé ». C’est comme une commande passée au marché : si l’on oublie « sauf rupture de stock », le client croit avoir un droit qu’il n’a pas.\n\nL’enjeu est concret. Une erreur dans une synthèse ne reste pas sur votre bureau : elle devient une consigne fausse donnée aux agents, une réponse erronée à un usager, parfois une décision contestée. L’IA reste utile pour repérer les points et prendre une vue d’ensemble ; mais c’est vous qui vérifiez, et c’est le texte officiel qui tranche. Cette leçon vous donne trois règles pour en tirer le meilleur sans vous mettre en faute."
      },
      {
        "title": "Ne déposer que des textes publics : ce qui entre dans l’outil et ce qui n’y entre jamais",
        "body": "Première règle : seulement des textes publics. Un décret, une loi ou un arrêté publié au Journal officiel, ou mis en ligne par un ministère sur son site officiel, est par définition accessible à tous : vous pouvez le déposer dans un outil d’IA grand public. Une note interne, un projet de texte en cours de discussion, un document classé, le dossier individuel d’un agent : jamais. Les textes de la fonction publique de votre pays vous imposent une discrétion professionnelle, et un outil grand public n’est pas le coffre du service.\n\nLe test est simple : ce document est-il déjà publié, accessible à n’importe quel citoyen ? Si oui, il peut passer le filtre. Si vous hésitez, il ne passe pas. Un agent des ressources humaines à Ouagadougou (Burkina Faso) peut faire analyser l’arrêté publié sur les congés administratifs ; il ne déposera pas le projet de circulaire que son ministère prépare et qui n’est pas encore signé. À Cotonou (Bénin), une secrétaire qui reçoit un texte « pour avis », pas encore adopté, le traite comme un document interne : il reste hors de l’outil.\n\nTéléchargez toujours le texte depuis une source officielle : le Journal officiel de votre pays, le site du ministère concerné, le service juridique de votre administration. Un PDF reçu dans un groupe de messagerie, d’origine inconnue, peut être une ancienne version, un projet ou un document retouché. C’est comme pour un médicament : on l’achète à la pharmacie, pas à un vendeur ambulant sans étiquette. Et si votre administration fournit un outil d’IA validé, utilisez-le en priorité."
      },
      {
        "title": "Un point, un article : obtenir une liste vérifiable avec Gemini Notebook et une consigne RCTF",
        "body": "Deuxième règle : un point, un article. Exigez que chaque point de la synthèse porte le numéro de l’article d’où il vient, et que les délais, montants, conditions et exceptions soient repris avec les mots exacts du texte. Sans numéro d’article, un point est invérifiable : il faut relire tout le texte pour le retrouver. Avec le numéro, il suffit d’ouvrir la bonne page. C’est le principe du reçu : chaque montant renvoie à un article acheté, et l’on peut contrôler ligne par ligne.\n\nGemini Notebook, l’outil de Google qu’on appelait NotebookLM, est conçu pour ce travail. Vous créez un carnet, vous y déposez le PDF du texte comme source, et l’outil répond à partir de cette source en ajoutant des numéros de citation : touchez-en un, et le passage du texte s’affiche. Si vous travaillez avec un autre assistant, comme Gemini, ChatGPT ou Claude, la règle ne change pas : exigez le numéro d’article dans la consigne, car tous n’affichent pas un lien direct vers le passage.\n\nLa consigne suit la méthode RCTF du cours. Rôle : tu aides un chef de service d’une administration publique à lire un texte réglementaire. Contexte : je dois présenter à mon directeur ce texte réglementaire public, déposé comme source ; il concerne [public concerné]. Tâche : à partir de ce texte uniquement, liste les [obligations / procédures / délais] qu’il fixe ; n’ajoute rien qui ne figure pas dans le texte ; si un point est ambigu, signale-le. Format : une ligne par point, avec le numéro de l’article entre parenthèses, et les mots exacts du texte pour les délais, montants, conditions et exceptions. Les garde-fous comptent autant que le reste : « à partir de ce texte uniquement » empêche l’outil de compléter avec ce qu’il croit savoir, et « signale-le » l’oblige à montrer ses doutes au lieu de les cacher."
      },
      {
        "title": "Le texte officiel fait foi : vérifier chaque article et s’assurer que le texte est en vigueur",
        "body": "Troisième règle : le texte officiel fait foi, pas la synthèse. Pour chaque ligne, ouvrez l’article cité et comparez les mots. Une ligne sans article ? Retirez-la, ou retrouvez vous-même l’article. Prenons un exemple fictif : la synthèse indique « délai de trente jours », l’article dit « quinze jours ». Vous retenez quinze jours, vous corrigez la synthèse avant de la transmettre, et vous vérifiez les autres points avec plus d’attention. Une citation montre d’où vient un point ; elle ne garantit pas que l’outil l’a bien compris.\n\nVérifiez ensuite que le texte est toujours en vigueur, c’est-à-dire qu’il s’applique aujourd’hui : ni modifié, ni abrogé. Abrogé veut dire supprimé par un texte plus récent. Un texte peut être recopié sans faute et pourtant dépassé, comme un vieil horaire de bus resté affiché à la gare routière. Cherchez sur le Journal officiel ou le site officiel les textes qui l’ont modifié, demandez au service juridique, et notez la date de votre vérification. À Lomé (Togo) comme à Rabat (Maroc), un agent qui présente un arrêté remplacé l’an dernier donne une consigne fausse, même avec une synthèse parfaite.\n\nEnfin, rédigez une note d’une page dans le modèle de votre service : l’objet, les points clés avec leurs articles, et les questions à clarifier, c’est-à-dire les points ambigus signalés par l’outil ou repérés par vous. L’IA a préparé un brouillon ; vous avez vérifié ; la hiérarchie vise ; le signataire engage. Si l’on vous demande « Où est-ce écrit ? », vous ouvrez l’article. Soyez aussi honnête sur l’effort : pour un texte très court, de deux ou trois articles, le lire directement va souvent plus vite que passer par l’outil. Gardez l’IA pour les textes longs."
      }
    ],
    "example": {
      "title": "Bouaké : un décret à présenter lundi, une note d’une page qui répond à « Où est-ce écrit ? »",
      "challenge": "Souleymane est chef de service dans une direction régionale fictive de Bouaké, en Côte d’Ivoire. Vendredi soir, il apprend qu’il doit présenter lundi à son directeur les obligations que fixe aux agents publics un long décret : une douzaine de pages, une vingtaine d’articles (un texte fictif, créé pour la démonstration). Un texte long, un week-end court. La tentation : demander un résumé à l’IA et le transmettre tel quel. L’enjeu : une erreur dans sa synthèse deviendrait une consigne fausse donnée aux agents de toute la direction.",
      "solution": "Souleymane télécharge le décret en PDF depuis une source officielle. Dans Gemini Notebook, il crée un carnet « Textes RH » et y dépose le texte comme source. Il colle une consigne RCTF : Rôle (aider un chef de service à lire un texte réglementaire), Contexte (un texte public à présenter au directeur, qui concerne les agents publics), Tâche (lister les obligations des agents à partir de ce texte uniquement, sans rien ajouter, en signalant les points ambigus), Format (une ligne par point, l’article entre parenthèses, les mots exacts pour les délais, conditions et exceptions). La liste arrive, chaque ligne avec sa citation. Il touche celle de la discrétion professionnelle, lit le passage, puis ouvre le PDF à l’article correspondant (l’article 9 du décret fictif) : les mots concordent. Il refait ce contrôle ligne par ligne et retire une ligne qui ne renvoyait à aucun article. Il vérifie que le décret n’a été ni modifié ni abrogé, puis rédige sa note dans le modèle du service : objet, points clés avec leurs articles, deux questions à clarifier.",
      "impact": "Lundi, le directeur pointe un point de la note et demande : « Où est-ce écrit ? » Souleymane ouvre l’article et lit le passage. Sa note tient en une page ; chaque point renvoie à un article vérifié ; la ligne sans source n’a jamais atteint le bureau du directeur ; et les deux questions à clarifier ouvrent la discussion au lieu d’être tranchées au hasard."
    },
    "practice": {
      "title": "Synthétisez un texte public, article par article",
      "instructions": [
        "Téléchargez, depuis une source officielle de votre pays (Journal officiel, site d’un ministère, service juridique de votre administration), un texte réglementaire public lié à votre travail, puis déposez-le comme source dans un nouveau carnet Gemini Notebook. Ni note interne, ni projet de texte, ni document classé.",
        "Collez cette consigne en remplissant les quatre blocs RCTF et les crochets : « Rôle : tu aides un chef de service d’une administration publique à lire un texte réglementaire. Contexte : je dois présenter à mon directeur ce texte réglementaire public, déposé comme source. Il concerne [public concerné]. Tâche : à partir de ce texte uniquement, liste les [obligations / procédures / délais] qu’il fixe pour [public concerné]. N’ajoute rien qui ne figure pas dans le texte. Si un point est ambigu, signale-le. Format : une ligne par point, avec le numéro de l’article entre parenthèses. Garde les mots exacts du texte pour les délais, montants, conditions et exceptions. »",
        "Vérifiez chaque point dans le texte, article par article (touchez la citation, puis ouvrez l’article), retirez toute ligne sans article et vérifiez que le texte est toujours en vigueur, ni modifié ni abrogé. Rédigez ensuite une note d’une page : objet, points clés avec leurs articles, questions à clarifier."
      ],
      "observation": "Vous constatez que la liste produite par l’outil est un brouillon : des lignes concordent mot pour mot avec leur article, mais d’autres peuvent arrondir un délai, oublier un « sauf » ou ne renvoyer à aucun article. Votre note finale ne garde que des points vérifiés, chacun avec son article, et vous pouvez répondre à « Où est-ce écrit ? » en ouvrant la bonne page."
    },
    "quiz": [
      {
        "question": "Lequel de ces documents pouvez-vous déposer dans un outil grand public ?",
        "options": [
          { "key": "A", "text": "Un décret publié au Journal officiel" },
          { "key": "B", "text": "Un projet de note confidentielle" },
          { "key": "C", "text": "Le dossier disciplinaire d’un agent" },
          { "key": "D", "text": "Un rapport interne classé" }
        ],
        "answer": "A",
        "explanation": "Un décret publié au Journal officiel est un texte public, accessible à tous : il peut passer le filtre. Un projet de note, un dossier individuel ou un rapport classé ne sont pas publics ; les déposer dans un outil grand public irait contre la discrétion professionnelle que vous imposent les textes de la fonction publique de votre pays."
      },
      {
        "question": "Pourquoi exiger le numéro d’article pour chaque point de la synthèse ?",
        "options": [
          { "key": "A", "text": "Pour allonger la note" },
          { "key": "B", "text": "Pour pouvoir vérifier chaque point dans le texte" },
          { "key": "C", "text": "Parce que le directeur aime les chiffres" },
          { "key": "D", "text": "Pour ne pas avoir à lire le texte" }
        ],
        "answer": "B",
        "explanation": "Le numéro d’article rend chaque point vérifiable : vous ouvrez l’article et comparez les mots. C’est la règle « un point, un article ». Il ne dispense pas de lire : il indique exactement où lire."
      },
      {
        "question": "La synthèse dit « trente jours », l’article dit « quinze jours ». Que retenez-vous ?",
        "options": [
          { "key": "A", "text": "Trente jours, c’est la synthèse" },
          { "key": "B", "text": "La moyenne des deux" },
          { "key": "C", "text": "Quinze jours, ce que dit l’article" },
          { "key": "D", "text": "Vous demandez à l’IA de choisir" }
        ],
        "answer": "C",
        "explanation": "Le texte officiel fait toujours foi, jamais la synthèse. Vous retenez quinze jours, vous corrigez la synthèse avant de la transmettre, et vous vérifiez aussi les autres points : une erreur peut en cacher d’autres."
      },
      {
        "question": "Avant de diffuser votre note, que vérifiez-vous aussi ?",
        "options": [
          { "key": "A", "text": "Que la note tient en dix lignes" },
          { "key": "B", "text": "Que l’IA est d’accord avec vous" },
          { "key": "C", "text": "Que le PDF est en couleur" },
          { "key": "D", "text": "Que le texte est toujours en vigueur, ni modifié ni abrogé" }
        ],
        "answer": "D",
        "explanation": "Une synthèse fidèle d’un texte dépassé reste une consigne fausse. Vérifiez sur le Journal officiel ou auprès du service juridique que le texte s’applique aujourd’hui : qu’aucun texte plus récent ne l’a modifié ni abrogé, c’est-à-dire supprimé."
      },
      {
        "question": "Dans Gemini Notebook, comment voir d’où vient un point de la synthèse ?",
        "options": [
          { "key": "A", "text": "Demander à un collègue" },
          { "key": "B", "text": "Toucher le numéro de citation pour afficher le passage" },
          { "key": "C", "text": "Régénérer la réponse" },
          { "key": "D", "text": "Changer d’outil" }
        ],
        "answer": "B",
        "explanation": "Gemini Notebook, anciennement NotebookLM, ajoute des numéros de citation à ses réponses. En touchant le numéro, vous affichez le passage de la source utilisé pour ce point. Vous ouvrez ensuite l’article dans le PDF pour comparer les mots."
      }
    ],
    "reflection": "Quel texte réglementaire public vous demande-t-on le plus souvent d’expliquer dans votre service, et quel point vérifieriez-vous en premier, article à l’appui, avant d’en remettre la synthèse à votre hiérarchie ?",
    "glossary": [
      {
        "term": "Texte réglementaire",
        "definition": "Texte officiel qui fixe des règles à appliquer : décret, arrêté, circulaire publiée. Il s’impose à l’administration et aux agents qu’il concerne."
      },
      {
        "term": "Journal officiel",
        "definition": "Publication officielle de l’État où paraissent les lois, décrets et arrêtés. Un texte publié au Journal officiel est public, et c’est cette version qui fait foi."
      },
      {
        "term": "Gemini Notebook (anciennement NotebookLM)",
        "definition": "Outil de Google qui répond à partir des documents que vous y déposez comme sources, en ajoutant des citations vers les passages utilisés. Il s’appelait NotebookLM jusqu’en juillet 2026."
      },
      {
        "term": "Citation",
        "definition": "Numéro que l’outil ajoute à côté d’un point de sa réponse. En le touchant, vous voyez le passage d’où vient ce point : c’est un point de départ pour vérifier, pas une preuve."
      },
      {
        "term": "En vigueur",
        "definition": "Se dit d’un texte qui s’applique aujourd’hui. S’il a été modifié, c’est sa version modifiée qui s’applique ; s’il a été abrogé, il ne s’applique plus."
      },
      {
        "term": "Abrogé",
        "definition": "Supprimé par un texte plus récent. Un texte abrogé ne s’applique plus, même s’il circule encore dans les bureaux ou sur les téléphones."
      }
    ]
  },
  "en": {
    "id": "ad3",
    "lessonNumber": 3,
    "title": "Summarize a regulatory text with AI and check every article",
    "objective": "By the end of this lesson, you will know how to summarize a regulatory text with AI, and check every point. You will be able to tell public texts, which may go into a consumer AI tool, from internal documents, which never do. You will know how to get Gemini Notebook, with an RCTF prompt, to produce a list where each point refers to its article, then check every line against the official text and confirm that the text is still in force. You will leave with a one-page note you can defend in front of your director.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Why an AI summary does not replace the regulatory text",
        "body": "A decree, an order or a public circular can run to dozens of pages, and you are often asked to extract the essentials for your superiors, for a meeting or for the staff of your department. The temptation is strong: drop the text into an AI tool, ask for a summary and pass it on as it is. Many people think an AI summary is simply the text made shorter. It is not: a summary is a rewrite, and every rewrite selects, cuts and rephrases.\n\nA summary can leave out an exception, round off a deadline or reverse a condition. Yet in a regulatory text, a single word changes the meaning of an obligation: “except”, “no later than”, “subject to”. “Leave is granted subject to the opinion of the head of department” does not mean “leave is granted”. It is like an order placed at the market: if someone forgets “except when out of stock”, the customer believes he has a right he does not have.\n\nThe stakes are real. An error in a summary does not stay on your desk: it becomes a wrong instruction given to staff, an incorrect answer to a member of the public, sometimes a contested decision. AI remains useful to spot the main points and get an overview; but you are the one who checks, and the official text is what decides. This lesson gives you three rules to get the best out of it without putting yourself at fault."
      },
      {
        "title": "Only upload public texts: what may go into the tool and what never does",
        "body": "First rule: public texts only. A decree, a law or an order published in the Official Gazette (Journal officiel), or posted by a ministry on its official website, is by definition open to everyone: you may upload it to a consumer AI tool. An internal memo, a draft text still under discussion, a classified document, an individual staff file: never. The civil service rules of your country require professional discretion, and a consumer tool is not your department’s safe.\n\nThe test is simple: has this document already been published, open to any citizen? If yes, it may pass the filter. If you hesitate, it does not. A human resources officer in Ouagadougou (Burkina Faso) may have the published order on administrative leave analysed; he will not upload the draft circular his ministry is preparing and that has not yet been signed. In Cotonou (Benin), a secretary who receives a text “for comment”, not yet adopted, treats it as an internal document: it stays out of the tool.\n\nAlways download the text from an official source: your country’s Official Gazette, the website of the ministry concerned, the legal department of your administration. A PDF received in a messaging group, of unknown origin, may be an old version, a draft or an altered document. It is like medicine: you buy it at the pharmacy, not from a street seller with no label. And if your administration provides an approved AI tool, use that one first."
      },
      {
        "title": "One point, one article: get a checkable list with Gemini Notebook and an RCTF prompt",
        "body": "Second rule: one point, one article. Require every point of the summary to carry the number of the article it comes from, and require deadlines, amounts, conditions and exceptions to be quoted in the exact words of the text. Without an article number, a point cannot be checked: you would have to reread the whole text to find it. With the number, you just open the right page. It works like a receipt: each amount refers to an item bought, and you can check line by line.\n\nGemini Notebook, the Google tool formerly called NotebookLM, is designed for this work. You create a notebook, upload the PDF of the text as a source, and the tool answers from that source, adding citation numbers: tap one and the passage of the text appears. If you work with another assistant, such as Gemini, ChatGPT or Claude, the rule does not change: require the article number in the prompt, because not all of them show a direct link to the passage.\n\nThe prompt follows the course’s RCTF method. Role: you are helping a head of department in a public administration read a regulatory text. Context: I must present this public regulatory text, uploaded as a source, to my director; it concerns [people concerned]. Task: using this text only, list the [obligations / procedures / deadlines] it sets; add nothing that is not in the text; if a point is ambiguous, flag it. Format: one line per point, with the article number in brackets, and the exact words of the text for deadlines, amounts, conditions and exceptions. The safeguards matter as much as the rest: “using this text only” stops the tool from filling gaps with what it thinks it knows, and “flag it” forces it to show its doubts instead of hiding them."
      },
      {
        "title": "The official text prevails: check every article and make sure the text is in force",
        "body": "Third rule: the official text prevails, not the summary. For each line, open the article cited and compare the words. A line with no article? Remove it, or find the article yourself. Take a fictional example: the summary says “thirty-day deadline”, the article says “fifteen days”. You keep fifteen days, you correct the summary before passing it on, and you check the other points more carefully. A citation shows where a point comes from; it does not guarantee the tool understood it correctly.\n\nThen check that the text is still in force, that is, it applies today: neither amended nor repealed. Repealed means cancelled by a more recent text. A text can be copied without a single mistake and still be out of date, like an old bus timetable left pinned up at the bus station. Look in the Official Gazette or on the official website for texts that amended it, ask the legal department, and note the date of your check. In Lomé (Togo) as in Rabat (Morocco), an officer who presents an order that was replaced last year gives a wrong instruction, even with a perfect summary.\n\nFinally, write a one-page note in your department’s template: the subject, the key points with their articles, and the questions to clarify, meaning the ambiguous points flagged by the tool or spotted by you. AI prepared a draft; you checked it; your superiors approve; the signatory commits. If someone asks “Where is that written?”, you open the article. Be honest about the effort too: for a very short text of two or three articles, reading it directly is often faster than going through the tool. Keep AI for long texts."
      }
    ],
    "example": {
      "title": "Bouaké: a decree to present on Monday, a one-page note that answers “Where is that written?”",
      "challenge": "Souleymane is head of department in a fictional regional directorate in Bouaké, Côte d’Ivoire. On Friday evening, he learns that on Monday he must present to his director the obligations that a long decree sets for public officers: a dozen pages, about twenty articles (a fictional text, created for the demonstration). A long text, a short weekend. The temptation: ask AI for a summary and pass it on as it is. The stakes: an error in his summary would become a wrong instruction given to the staff of the whole directorate.",
      "solution": "Souleymane downloads the decree as a PDF from an official source. In Gemini Notebook, he creates a notebook called “HR texts” and uploads the text as a source. He pastes an RCTF prompt: Role (help a head of department read a regulatory text), Context (a public text to present to the director, concerning public officers), Task (list the officers’ obligations using this text only, adding nothing, flagging ambiguous points), Format (one line per point, the article in brackets, exact words for deadlines, conditions and exceptions). The list arrives, each line with its citation. He taps the one on professional discretion, reads the passage, then opens the PDF at the matching article (article 9 of the fictional decree): the words match. He repeats this check line by line and removes one line that referred to no article. He checks that the decree has been neither amended nor repealed, then writes his note in the department’s template: subject, key points with their articles, two questions to clarify.",
      "impact": "On Monday, the director points to one item in the note and asks: “Where is that written?” Souleymane opens the article and reads the passage. His note fits on one page; every point refers to a checked article; the line with no source never reached the director’s desk; and the two questions to clarify open the discussion instead of being settled at random."
    },
    "practice": {
      "title": "Summarize a public text, article by article",
      "instructions": [
        "Download from an official source in your country (Official Gazette, a ministry website, your administration’s legal department) a public regulatory text related to your work, then upload it as a source to a new Gemini Notebook notebook. No internal memo, no draft text, no classified document.",
        "Paste this prompt, filling in the four RCTF blocks and the brackets: “Role: you are helping a head of department in a public administration read a regulatory text. Context: I must present this public regulatory text, uploaded as a source, to my director. It concerns [people concerned]. Task: using this text only, list the [obligations / procedures / deadlines] it sets for [people concerned]. Add nothing that is not in the text. If a point is ambiguous, flag it. Format: one line per point, with the article number in brackets. Keep the exact words of the text for deadlines, amounts, conditions and exceptions.”",
        "Check every point in the text, article by article (tap the citation, then open the article), remove any line with no article and check that the text is still in force, neither amended nor repealed. Then write a one-page note: subject, key points with their articles, questions to clarify."
      ],
      "observation": "You notice that the list produced by the tool is a draft: some lines match their article word for word, but others may round off a deadline, drop an “except” or refer to no article at all. Your final note keeps only checked points, each with its article, and you can answer “Where is that written?” by opening the right page."
    },
    "quiz": [
      {
        "question": "Which of these documents may you upload to a consumer AI tool?",
        "options": [
          { "key": "A", "text": "A decree published in the Official Gazette" },
          { "key": "B", "text": "A draft confidential memo" },
          { "key": "C", "text": "An officer’s disciplinary file" },
          { "key": "D", "text": "A classified internal report" }
        ],
        "answer": "A",
        "explanation": "A decree published in the Official Gazette is a public text, open to everyone: it may pass the filter. A draft memo, an individual file or a classified report are not public; uploading them to a consumer tool would breach the professional discretion required by your country’s civil service rules."
      },
      {
        "question": "Why require the article number for every point of the summary?",
        "options": [
          { "key": "A", "text": "To make the note longer" },
          { "key": "B", "text": "To be able to check every point in the text" },
          { "key": "C", "text": "Because the director likes numbers" },
          { "key": "D", "text": "So you do not have to read the text" }
        ],
        "answer": "B",
        "explanation": "The article number makes each point checkable: you open the article and compare the words. That is the “one point, one article” rule. It does not spare you from reading: it tells you exactly where to read."
      },
      {
        "question": "The summary says “thirty days”, the article says “fifteen days”. What do you keep?",
        "options": [
          { "key": "A", "text": "Thirty days, that is the summary" },
          { "key": "B", "text": "The average of the two" },
          { "key": "C", "text": "Fifteen days, what the article says" },
          { "key": "D", "text": "You ask the AI to choose" }
        ],
        "answer": "C",
        "explanation": "The official text always prevails, never the summary. You keep fifteen days, correct the summary before passing it on, and check the other points too: one error can hide others."
      },
      {
        "question": "Before circulating your note, what else do you check?",
        "options": [
          { "key": "A", "text": "That the note fits in ten lines" },
          { "key": "B", "text": "That the AI agrees with you" },
          { "key": "C", "text": "That the PDF is in colour" },
          { "key": "D", "text": "That the text is still in force, neither amended nor repealed" }
        ],
        "answer": "D",
        "explanation": "A faithful summary of an outdated text is still a wrong instruction. Check in the Official Gazette or with the legal department that the text applies today: that no more recent text has amended or repealed it, that is, cancelled it."
      },
      {
        "question": "In Gemini Notebook, how do you see where a point of the summary comes from?",
        "options": [
          { "key": "A", "text": "Ask a colleague" },
          { "key": "B", "text": "Tap the citation number to display the passage" },
          { "key": "C", "text": "Regenerate the answer" },
          { "key": "D", "text": "Switch tools" }
        ],
        "answer": "B",
        "explanation": "Gemini Notebook, formerly NotebookLM, adds citation numbers to its answers. Tapping the number displays the passage of the source used for that point. You then open the article in the PDF to compare the words."
      }
    ],
    "reflection": "Which public regulatory text are you most often asked to explain in your department, and which point would you check first, article in hand, before handing its summary to your superiors?",
    "glossary": [
      {
        "term": "Regulatory text",
        "definition": "An official text that sets rules to be applied: a decree, an order, a published circular. It is binding on the administration and on the officers it concerns."
      },
      {
        "term": "Official Gazette (Journal officiel)",
        "definition": "The State’s official publication in which laws, decrees and orders appear. A text published in the Official Gazette is public, and that version is the one that prevails."
      },
      {
        "term": "Gemini Notebook (formerly NotebookLM)",
        "definition": "A Google tool that answers from the documents you upload as sources, adding citations to the passages it used. It was called NotebookLM until July 2026."
      },
      {
        "term": "Citation",
        "definition": "A number the tool adds next to a point in its answer. Tapping it shows the passage the point comes from: a starting point for checking, not proof."
      },
      {
        "term": "In force",
        "definition": "Said of a text that applies today. If it has been amended, the amended version applies; if it has been repealed, it no longer applies."
      },
      {
        "term": "Repealed",
        "definition": "Cancelled by a more recent text. A repealed text no longer applies, even if it still circulates in offices or on phones."
      }
    ]
  },
  "ha": {
    "id": "ad3",
    "lessonNumber": 3,
    "title": "Takaita texte réglementaire (rubutun doka) da AI, kuma ku tabbatar da kowane article",
    "objective": "A karshen wannan darasi, za ku san yadda ake takaita rubutun doka da AI, kuma ku tabbatar da kowane batu. Za ku iya bambance rubutun da ke a bayyane ga jama’a, wadanda za su iya shiga kayan aikin AI na kowa da kowa, da takardun cikin gida, wadanda ba sa shiga ko kadan. Za ku san yadda za ku sa Gemini Notebook, da umarnin RCTF, ya ba ku jerin batutuwa inda kowane batu yake nuna article dinsa, sannan ku duba kowane layi a cikin rubutun hukuma, kuma ku tabbatar cewa rubutun yana aiki har yanzu. Za ku tashi da takardar bayani mai shafi daya wadda za ku iya kare ta a gaban daraktanku.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Dalilin da ya sa takaitawar AI ba ta maye gurbin rubutun doka",
        "body": "Décret, arrêté ko circulaire da aka wallafa na iya kai shafuka da dama, kuma sau da yawa ana neman ku fitar da muhimman abubuwa ga shugabanninku, don taro ko don ma’aikatan sashenku. Jarabar tana da karfi: a saka rubutun cikin kayan aikin AI, a nemi takaitawa, a mika ta kamar yadda take. Mutane da yawa suna tunanin takaitawar AI ita ce rubutun da aka gajarta kawai. Ba haka ba ne: takaitawa sake rubutu ce, kuma kowane sake rubutu yana zabi, yana yanke, yana canza kalmomi.\n\nTakaitawa na iya mantawa da togaciya, ta zagaye wa’adi, ko ta juya sharadi. Alhali a cikin rubutun doka, kalma daya tana canza ma’anar wajibi: « sauf » (sai dai), « au plus tard » (kafin karewar), « sous réserve » (bisa sharadin). « Ana ba da hutu bisa sharadin ra’ayin shugaban sashe » ba yana nufin « ana ba da hutu » ba. Kamar odar da aka yi a kasuwa ce: idan aka manta « sai dai idan kaya sun kare », mai saye zai yi tunanin yana da hakkin da ba shi da shi.\n\nAbin yana da muhimmanci a zahiri. Kuskure a cikin takaitawa ba ya tsayawa a kan teburinku: yana zama umarnin karya da aka ba ma’aikata, amsa mara gaskiya ga dan kasa, wani lokaci ma hukuncin da ake kalubalanta. AI yana da amfani don gano manyan batutuwa da samun hoton gaba daya; amma ku ne kuke tabbatarwa, kuma rubutun hukuma ne yake yanke hukunci. Wannan darasi yana ba ku dokoki uku don samun mafi kyawun amfani ba tare da kun sa kanku cikin laifi ba."
      },
      {
        "title": "Ku saka rubutun jama’a kawai: abin da zai shiga kayan aiki da abin da ba zai taba shiga ba",
        "body": "Doka ta farko: rubutun jama’a kawai. Décret, doka ko arrêté da aka wallafa a Journal officiel (jaridar hukuma), ko wanda wata ma’aikata ta saka a shafinta na hukuma, a bayyane yake ga kowa: za ku iya saka shi cikin kayan aikin AI na kowa da kowa. Takardar cikin gida, daftarin rubutu da ake tattaunawa a kai, takardar sirri, fayil din wani ma’aikaci: ko kadan. Dokokin aikin gwamnati na kasarku suna dora muku kiyaye sirrin aiki, kuma kayan aikin kowa da kowa ba asusun ajiyar sashenku ba ne.\n\nGwajin mai sauki ne: shin an riga an wallafa wannan takarda, kowane dan kasa zai iya samun ta? Idan haka ne, za ta iya wucewa ta matattara. Idan kuna shakka, ba za ta wuce ba. Ma’aikacin sashen ma’aikata a Ouagadougou (Burkina Faso) zai iya sa a yi nazarin arrêté da aka wallafa game da hutun aiki; ba zai saka daftarin circulaire da ma’aikatarsa ke shiryawa wanda ba a sa wa hannu ba tukuna. A Cotonou (Benin), sakatariyar da ta karbi rubutu « don ra’ayi », wanda ba a amince da shi ba tukuna, tana daukarsa a matsayin takardar cikin gida: yana zama a wajen kayan aiki.\n\nKullum ku sauke rubutun daga majiya ta hukuma: Journal officiel na kasarku, shafin ma’aikatar da abin ya shafa, ko sashen shari’a na hukumarku. PDF da aka karba a cikin rukunin sakonni, wanda ba a san asalinsa ba, na iya zama tsohuwar sigar, daftari ko takardar da aka gyara. Kamar magani ne: ana saya a kantin magani, ba a wurin dan talla mai yawo ba tare da alama ba. Kuma idan hukumarku tana samar da kayan aikin AI da aka amince da shi, ku fara amfani da shi."
      },
      {
        "title": "Batu daya, article daya: samun jerin da za a iya dubawa da Gemini Notebook da umarnin RCTF",
        "body": "Doka ta biyu: batu daya, article daya. Ku bukaci kowane batu na takaitawa ya dauki lambar article da ya fito daga ciki, kuma a rubuta wa’adodi, kudade, sharudda da togaciya da ainihin kalmomin rubutun. Ba tare da lambar article ba, ba za a iya duba batu ba: sai an sake karanta rubutun gaba daya don nemo shi. Da lambar, sai dai a bude shafin da ya dace. Kamar rasit ne: kowane kudi yana nuna abin da aka saya, kuma ana iya dubawa layi bayan layi.\n\nGemini Notebook, kayan aikin Google da ake kira NotebookLM a da, an yi shi ne don wannan aiki. Kuna bude littafi (carnet), ku saka PDF na rubutun a matsayin tushe, kuma kayan aikin yana amsawa daga wannan tushe, yana kara lambobin nuni (citations): ku taba daya, sai sashen rubutun ya bayyana. Idan kuna aiki da wani mataimaki, kamar Gemini, ChatGPT ko Claude, dokar ba ta canjawa: ku bukaci lambar article a cikin umarni, domin ba dukansu ne ke nuna hanyar kai tsaye zuwa sashen ba.\n\nUmarnin yana bin hanyar RCTF ta wannan kwas (Rôle: rawa, Contexte: mahallin, Tâche: aiki, Format: tsari). Rawa: kana taimaka wa shugaban sashe na hukumar gwamnati ya karanta rubutun doka. Mahallin: dole ne in gabatar wa daraktana wannan rubutun doka na jama’a, wanda aka saka a matsayin tushe; ya shafi [mutanen da abin ya shafa]. Aiki: daga wannan rubutun kadai, ka jera [wajibai / hanyoyin aiki / wa’adodi] da ya kayyade; kada ka kara komai da ba ya cikin rubutun; idan wani batu bai fito fili ba, ka nuna shi. Tsari: layi daya ga kowane batu, da lambar article a cikin baka, da ainihin kalmomin rubutun don wa’adodi, kudade, sharudda da togaciya. Matakan kariya suna da muhimmanci kamar sauran: « daga wannan rubutun kadai » yana hana kayan aikin cike gibi da abin da yake tsammani ya sani, kuma « ka nuna shi » yana tilasta masa ya bayyana shakkunsa maimakon boye su."
      },
      {
        "title": "Rubutun hukuma ne ke da hujja: duba kowane article kuma ku tabbatar rubutun yana aiki",
        "body": "Doka ta uku: rubutun hukuma ne ke da hujja, ba takaitawa ba. Ga kowane layi, ku bude article da aka ambata ku kwatanta kalmomin. Layi ba tare da article ba? Ku cire shi, ko ku nemo article din da kanku. Ga misali na kirkira: takaitawa ta ce « wa’adin kwanaki talatin », article ya ce « kwanaki goma sha biyar ». Kuna rike kwanaki goma sha biyar, ku gyara takaitawa kafin ku mika ta, kuma ku duba sauran batutuwa da karin hankali. Lambar nuni tana nuna inda batu ya fito; ba ta tabbatar cewa kayan aikin ya fahimce shi daidai ba.\n\nSannan ku tabbatar cewa rubutun yana aiki har yanzu (en vigueur), wato ana amfani da shi yau: ba a gyara shi ba, ba a soke shi ba. Abrogé yana nufin wani sabon rubutu ya soke shi. Rubutu na iya zama an kwafe shi ba tare da kuskure ko daya ba amma kuma ya tsufa, kamar tsohon jadawalin lokutan mota da aka bari a manne a tashar mota. Ku nema a Journal officiel ko a shafin hukuma rubutun da suka gyara shi, ku tambayi sashen shari’a, kuma ku rubuta ranar da kuka duba. A Lomé (Togo) kamar a Rabat (Morocco), ma’aikacin da ya gabatar da arrêté da aka maye gurbinsa bara yana ba da umarnin karya, ko da takaitawarsa ba ta da aibi.\n\nA karshe, ku rubuta takardar bayani mai shafi daya a cikin samfurin sashenku: maudu’i, muhimman batutuwa tare da article dinsu, da tambayoyin da za a fayyace, wato batutuwan da ba su fito fili ba wadanda kayan aikin ya nuna ko ku kuka gano. AI ya shirya daftari; ku kun tabbatar; shugabanni sun amince; mai sa hannu ya dauki alhaki. Idan aka tambaye ku « Ina aka rubuta haka? », kuna bude article din. Ku fadi gaskiya game da kokarin ma: ga rubutu gajere sosai, na article biyu ko uku, karanta shi kai tsaye sau da yawa ya fi sauri fiye da bi ta kayan aiki. Ku bar AI don dogayen rubutu."
      }
    ],
    "example": {
      "title": "Bouaké: décret da za a gabatar ranar Litinin, takardar bayani mai shafi daya da ke amsa « Ina aka rubuta haka? »",
      "challenge": "Souleymane shugaban sashe ne a wata hukumar yanki ta kirkira a Bouaké, Côte d’Ivoire. Ranar Jumma’a da yamma, ya ji cewa ranar Litinin dole ne ya gabatar wa daraktansa wajiban da wani dogon décret ya dora wa ma’aikatan gwamnati: kusan shafuka goma sha biyu, kimanin article ashirin (rubutun kirkira ne, an yi shi don nunawa). Rubutu mai tsawo, karshen mako gajere. Jarabar: ya nemi AI ya takaita, ya mika takaitawar kamar yadda take. Abin da ke cikin hadari: kuskure a cikin takaitawarsa zai zama umarnin karya da aka ba ma’aikatan hukumar gaba daya.",
      "solution": "Souleymane ya sauke décret din a PDF daga majiya ta hukuma. A cikin Gemini Notebook, ya bude littafi mai suna « Textes RH » ya saka rubutun a matsayin tushe. Ya lika umarnin RCTF: Rawa (taimaka wa shugaban sashe ya karanta rubutun doka), Mahallin (rubutun jama’a da za a gabatar wa darakta, wanda ya shafi ma’aikatan gwamnati), Aiki (jera wajiban ma’aikata daga wannan rubutun kadai, ba tare da kara komai ba, yana nuna batutuwan da ba su fito fili ba), Tsari (layi daya ga kowane batu, article a cikin baka, ainihin kalmomi don wa’adodi, sharudda da togaciya). Jerin ya iso, kowane layi da lambar nuninsa. Ya taba ta kiyaye sirrin aiki, ya karanta sashen, sannan ya bude PDF a article din da ya dace (article 9 na décret na kirkira): kalmomin sun yi daidai. Ya maimaita wannan dubawa layi bayan layi kuma ya cire layi daya da bai nuna wani article ba. Ya tabbatar cewa ba a gyara décret din ba kuma ba a soke shi ba, sannan ya rubuta takardarsa a cikin samfurin sashe: maudu’i, muhimman batutuwa tare da article dinsu, tambayoyi biyu da za a fayyace.",
      "impact": "Ranar Litinin, daraktan ya nuna wani batu a cikin takardar ya tambaya: « Ina aka rubuta haka? » Souleymane ya bude article din ya karanta sashen. Takardarsa ta tsaya a shafi daya; kowane batu yana nuna article da aka tabbatar; layin da ba shi da tushe bai taba isa teburin darakta ba; kuma tambayoyin biyu da za a fayyace sun bude tattaunawa maimakon a yanke su ba tare da tushe ba."
    },
    "practice": {
      "title": "Ku takaita rubutun jama’a, article bayan article",
      "instructions": [
        "Ku sauke, daga majiya ta hukuma ta kasarku (Journal officiel, shafin wata ma’aikata, sashen shari’a na hukumarku), rubutun doka na jama’a da ya shafi aikinku, sannan ku saka shi a matsayin tushe a cikin sabon littafin Gemini Notebook. Ba takardar cikin gida ba, ba daftarin rubutu ba, ba takardar sirri ba.",
        "Ku lika wannan umarni, kuna cike bangarori hudu na RCTF da wuraren da ke cikin baka: « Rawa: kana taimaka wa shugaban sashe na hukumar gwamnati ya karanta rubutun doka. Mahallin: dole ne in gabatar wa daraktana wannan rubutun doka na jama’a, wanda aka saka a matsayin tushe. Ya shafi [mutanen da abin ya shafa]. Aiki: daga wannan rubutun kadai, ka jera [wajibai / hanyoyin aiki / wa’adodi] da ya kayyade wa [mutanen da abin ya shafa]. Kada ka kara komai da ba ya cikin rubutun. Idan wani batu bai fito fili ba, ka nuna shi. Tsari: layi daya ga kowane batu, da lambar article a cikin baka. Ka rike ainihin kalmomin rubutun don wa’adodi, kudade, sharudda da togaciya. »",
        "Ku duba kowane batu a cikin rubutun, article bayan article (ku taba lambar nuni, sannan ku bude article din), ku cire duk layin da ba shi da article, kuma ku tabbatar cewa rubutun yana aiki har yanzu, ba a gyara shi ba kuma ba a soke shi ba. Sannan ku rubuta takardar bayani mai shafi daya: maudu’i, muhimman batutuwa tare da article dinsu, tambayoyin da za a fayyace."
      ],
      "observation": "Za ku lura cewa jerin da kayan aikin ya samar daftari ne: wasu layuka sun yi daidai kalma da kalma da article dinsu, amma wasu na iya zagaye wa’adi, su manta da « sauf » (sai dai), ko kada su nuna wani article ko kadan. Takardarku ta karshe tana rike da batutuwan da aka tabbatar kawai, kowanne da article dinsa, kuma za ku iya amsa « Ina aka rubuta haka? » ta hanyar bude shafin da ya dace."
    },
    "quiz": [
      {
        "question": "Wace daga cikin wadannan takardu za ku iya saka a cikin kayan aikin AI na kowa da kowa?",
        "options": [
          { "key": "A", "text": "Décret da aka wallafa a Journal officiel" },
          { "key": "B", "text": "Daftarin takardar sirri" },
          { "key": "C", "text": "Fayil din ladabtarwa na wani ma’aikaci" },
          { "key": "D", "text": "Rahoton cikin gida na sirri" }
        ],
        "answer": "A",
        "explanation": "Décret da aka wallafa a Journal officiel rubutun jama’a ne, a bayyane ga kowa: zai iya wucewa ta matattara. Daftarin takarda, fayil din mutum ko rahoton sirri ba na jama’a ba ne; saka su cikin kayan aikin kowa da kowa zai saba wa kiyaye sirrin aiki da dokokin aikin gwamnati na kasarku suke dora muku."
      },
      {
        "question": "Me ya sa za a bukaci lambar article ga kowane batu na takaitawa?",
        "options": [
          { "key": "A", "text": "Don a tsawaita takardar" },
          { "key": "B", "text": "Don a iya duba kowane batu a cikin rubutun" },
          { "key": "C", "text": "Saboda darakta yana son lambobi" },
          { "key": "D", "text": "Don kada a karanta rubutun" }
        ],
        "answer": "B",
        "explanation": "Lambar article tana sa kowane batu ya zama abin dubawa: kuna bude article din ku kwatanta kalmomin. Wannan ita ce dokar « batu daya, article daya ». Ba ta hana karatu: tana nuna daidai inda za a karanta."
      },
      {
        "question": "Takaitawa ta ce « kwanaki talatin », article ya ce « kwanaki goma sha biyar ». Me za ku rike?",
        "options": [
          { "key": "A", "text": "Kwanaki talatin, abin da takaitawa ta ce" },
          { "key": "B", "text": "Matsakaicin biyun" },
          { "key": "C", "text": "Kwanaki goma sha biyar, abin da article ya ce" },
          { "key": "D", "text": "Ku nemi AI ya zaba" }
        ],
        "answer": "C",
        "explanation": "Rubutun hukuma ne ke da hujja kullum, ba takaitawa ba. Kuna rike kwanaki goma sha biyar, ku gyara takaitawa kafin ku mika ta, kuma ku duba sauran batutuwa ma: kuskure daya na iya boye wasu."
      },
      {
        "question": "Kafin ku yada takardarku, me kuma za ku duba?",
        "options": [
          { "key": "A", "text": "Cewa takardar ta tsaya a layi goma" },
          { "key": "B", "text": "Cewa AI ya yarda da ku" },
          { "key": "C", "text": "Cewa PDF yana da launi" },
          { "key": "D", "text": "Cewa rubutun yana aiki har yanzu, ba a gyara shi ba kuma ba a soke shi ba" }
        ],
        "answer": "D",
        "explanation": "Takaitawa mai aminci ta rubutun da ya tsufa har yanzu umarnin karya ce. Ku duba a Journal officiel ko a sashen shari’a cewa ana amfani da rubutun yau: cewa babu wani sabon rubutu da ya gyara shi ko ya soke shi."
      },
      {
        "question": "A cikin Gemini Notebook, ta yaya za ku ga inda wani batu na takaitawa ya fito?",
        "options": [
          { "key": "A", "text": "Ku tambayi abokin aiki" },
          { "key": "B", "text": "Ku taba lambar nuni don sashen ya bayyana" },
          { "key": "C", "text": "Ku sa a sake samar da amsar" },
          { "key": "D", "text": "Ku canza kayan aiki" }
        ],
        "answer": "B",
        "explanation": "Gemini Notebook, wanda ake kira NotebookLM a da, yana kara lambobin nuni a cikin amsoshinsa. Idan kuka taba lambar, sashen tushen da aka yi amfani da shi don wannan batu zai bayyana. Sannan ku bude article din a cikin PDF don kwatanta kalmomin."
      }
    ],
    "reflection": "Wane rubutun doka na jama’a ne aka fi neman ku bayyana a sashenku, kuma wane batu za ku fara dubawa, da article a hannu, kafin ku mika takaitawarsa ga shugabanninku?",
    "glossary": [
      {
        "term": "Texte réglementaire (rubutun doka)",
        "definition": "Rubutun hukuma da ke kayyade dokokin da za a bi: décret, arrêté, circulaire da aka wallafa. Ya zama dole ga hukuma da ma’aikatan da ya shafa."
      },
      {
        "term": "Journal officiel (jaridar hukuma)",
        "definition": "Wallafar hukuma ta gwamnati inda ake buga dokoki, décrets da arrêtés. Rubutun da aka wallafa a Journal officiel na jama’a ne, kuma wannan sigar ce ke da hujja."
      },
      {
        "term": "Gemini Notebook (tsohon NotebookLM)",
        "definition": "Kayan aikin Google da ke amsawa daga takardun da kuka saka a matsayin tushe, yana kara lambobin nuni zuwa sassan da ya yi amfani da su. Ana kiransa NotebookLM har zuwa watan Yuli na 2026."
      },
      {
        "term": "Citation (lambar nuni)",
        "definition": "Lambar da kayan aikin ke karawa kusa da wani batu a cikin amsarsa. Idan kuka taba ta, za ku ga sashen da batun ya fito: farkon dubawa ne, ba hujja ba."
      },
      {
        "term": "En vigueur (yana aiki yau)",
        "definition": "Ana fadin haka game da rubutun da ake amfani da shi yau. Idan an gyara shi, sigar da aka gyara ce ke aiki; idan an soke shi, ba ya aiki kuma."
      },
      {
        "term": "Abrogé (an soke shi)",
        "definition": "Wani sabon rubutu ya soke shi. Rubutun da aka soke ba ya aiki kuma, ko da yana yawo a ofisoshi ko a wayoyi."
      }
    ]
  }
};
