import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « IA pour l'administration » (ia-administration) — leçon ad5 (Projet final : le dossier complet d'une réunion)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 13 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const adLesson5: Record<Language, LessonContent> = {
  "fr": {
    "id": "ad5",
    "lessonNumber": 5,
    "title": "Projet final : préparer le dossier complet d’une réunion avec l’IA",
    "objective": "À la fin de cette leçon, vous saurez constituer et déposer le dossier complet d’une réunion : un courrier, un procès-verbal avec son tableau des actions, une note de synthèse d’un texte public avec ses articles, une page de rapport avec ses calculs, et une fiche de contrôle. Vous saurez évaluer ce dossier selon cinq critères — confidentialité, fidélité, exactitude, registre, vérification humaine — et repérer les trois erreurs qui le font échouer. Vous saurez enfin le faire relire par l’IA avec une consigne RCTF qui ne réécrit rien, puis l’assembler en un seul PDF, prêt à déposer.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Les cinq pièces du dossier : une par leçon, plus la fiche de contrôle",
        "body": "Ce projet final rassemble tout le cours dans un seul fichier PDF. Pensez au dossier que l’on dépose pour une demande de bourse ou un appel d’offres : la couverture compte peu ; ce qui compte, c’est que chaque pièce soit là et que l’on puisse la contrôler. Votre dossier de réunion fonctionne de la même façon : cinq pièces, rangées dans l’ordre, précédées d’un sommaire.\n\nLes quatre premières pièces reprennent les quatre leçons. Pièce 1, le courrier de la Leçon 1 : une lettre d’invitation ou de transmission, préparée à partir d’éléments anonymisés et du modèle du service. Pièce 2, le procès-verbal de la Leçon 2, qui se termine par son tableau des actions : qui fait quoi, et pour quand. Pièce 3, la note de synthèse de la Leçon 3, sur un texte réglementaire public, où chaque point renvoie à son article. Pièce 4, la page de rapport de la Leçon 4, avec ses calculs joints en annexe.\n\nLa cinquième pièce est nouvelle : la fiche de contrôle. C’est un tableau simple qui croise les pièces et les cinq critères d’évaluation ; vous y cochez ce que vous avez vérifié, pièce par pièce. Elle ressemble à la liste qu’un chef de chantier remplit avant la réception d’un bâtiment : elle ne remplace pas le travail, elle montre qu’il a été contrôlé. Le dossier se prépare sur un cas non confidentiel ou fictif. Soyez lucide : il prouve une démarche, il ne garantit rien à lui seul."
      },
      {
        "title": "Les cinq critères d’évaluation : confidentialité, fidélité, exactitude, registre, vérification humaine",
        "body": "Chaque critère correspond à un geste appris dans le cours. Confidentialité (Leçon 1) : aucun nom ni numéro d’usager, aucun document classé ou non public n’est passé par un outil grand public ; les personnes sont désignées par leur fonction, les numéros restent entre crochets jusqu’au document final, et les textes de la fonction publique de votre pays sur la discrétion professionnelle s’appliquent. Fidélité (Leçon 2) : le procès-verbal ne contient que ce qui a été dit et décidé, d’après vos notes ; ce qui manquait est resté « [À COMPLÉTER] » jusqu’à ce que vous le complétiez vous-même.\n\nExactitude (Leçons 3 et 4) : chaque point de la note renvoie à un article vérifié dans le texte officiel, toujours en vigueur ; chaque chiffre du rapport a été recalculé, et le calcul est joint. Registre (Leçon 1) : les formules d’usage sont respectées, « J’ai l’honneur de… » en ouverture, une formule finale adaptée au rang du destinataire, et le modèle du service tranche en dernier.\n\nVérification humaine (tout le cours) : chaque pièce porte la trace d’un contrôle, un visa. C’est la chaîne de validation que l’on retrouve dans une préfecture de Côte d’Ivoire comme dans une mairie du Togo : brouillon, vérification par l’agent, visa de la hiérarchie, signature, enregistrement. L’IA prépare un brouillon ; l’agent vérifie, la hiérarchie vise, le signataire engage."
      },
      {
        "title": "Les trois erreurs qui font échouer un dossier, même soigné",
        "body": "Trois erreurs suffisent à faire échouer un dossier. La première : un nom ou un numéro d’usager dans une pièce, ou dans le texte collé dans l’outil. La deuxième : un chiffre ou un article non vérifié, recopié tel que l’IA l’a donné. La troisième : une décision absente des notes, glissée dans le procès-verbal parce qu’elle « semblait logique ». Chacune trahit un critère : la confidentialité, l’exactitude, la fidélité.\n\nPrenez le contre-exemple de Rahila, agente d’une direction départementale fictive de Parakou, au Bénin. Son dossier est soigné : mise en page nette, titres réguliers, aucune faute. Mais la pièce 2 contient le nom d’un usager, et sa note cite un article qu’elle n’a pas vérifié. Deux critères échouent : la confidentialité et l’exactitude. Un beau dossier ne compense pas. C’est comme une balance de marché bien astiquée mais mal réglée : elle brille, et chaque pesée est fausse.\n\nCes erreurs ont un point commun : une confiance excessive dans le brouillon. Le remède tient en quatre gestes, un par leçon : rien de confidentiel dans l’outil, rien que vos notes dans le procès-verbal, l’article fait foi, des chiffres recalculés. Avant de déposer, passez chaque pièce à ce filtre et notez le résultat dans la fiche de contrôle."
      },
      {
        "title": "Faire relire le dossier par l’IA avec une consigne RCTF, puis le déposer en un seul PDF",
        "body": "Dernière étape avant le dépôt : une relecture critique. Vous donnez à l’assistant une consigne de relecture en quatre blocs, selon la méthode RCTF. Rôle : un relecteur exigeant dans une administration publique. Contexte : les pièces du dossier, sans aucun nom d’usager ni donnée personnelle, et la liste des cinq critères. Tâche : ne rien réécrire, mais signaler, critère par critère, ce qui manque ou ce qui est fragile, en citant le passage concerné. Format : un court paragraphe par critère, puis trois questions que votre directeur pourrait vous poser.\n\nL’assistant joue ici le rôle d’un collègue attentif, pas celui de l’auteur : il pointe, vous corrigez. Ses remarques restent des pistes, et il peut se tromper ; c’est vous qui retournez à vos notes, au texte officiel ou à votre calculatrice. Si votre administration fournit un outil d’IA validé, utilisez-le en priorité ; sinon, un assistant gratuit comme Gemini, Claude ou ChatGPT convient, à condition de n’y coller que des éléments anonymisés. Les trois questions du directeur sont un bon entraînement : un agent du Burkina Faso ou du Mali qui présente un dossier à sa hiérarchie doit pouvoir répondre à « Où est-ce écrit ? » et à « Comment avez-vous calculé ? ».\n\nVous assemblez ensuite vos pièces en un seul PDF, sommaire et fiche de contrôle en tête, et vous le déposez selon la consigne affichée sous la vidéo. La réussite de ce projet final débloque votre certificat numérique vérifiable : il porte un QR code que toute personne — un employeur, un responsable, un partenaire — peut scanner pour vérifier qu’il est authentique, et il reste valable 12 mois."
      }
    ],
    "example": {
      "title": "Le dossier de réunion de Zeinabou, contrôlé pièce par pièce",
      "challenge": "À Tahoua, au Niger, Zeinabou, secrétaire de direction dans une direction régionale fictive, prépare le dossier de la réunion trimestrielle suivante de sa direction. Elle a déjà la lettre d’invitation de la Leçon 1 et le procès-verbal de la Leçon 2 ; il lui faut encore une note de synthèse, une page de rapport et une fiche de contrôle. Depuis Bouaké, en Côte d’Ivoire, Souleymane, chef de service dans une autre administration, lui partage sa méthode, de pair à pair : vérifier chaque point article par article, recalculer chaque chiffre. Zeinabou croit qu’il suffit de bien rédiger. Souleymane la reprend : ce qui est évalué, c’est un dossier que l’on peut contrôler, sans rien divulguer.",
      "solution": "Zeinabou ouvre son dossier sur l’ordinateur et le reprend dans l’ordre. D’abord le sommaire et la fiche de contrôle : cinq critères, pièce par pièce. Pièce 1, le courrier, à côté du modèle du service : un en-tête « [EN-TÊTE DU SERVICE] », des fonctions, aucun nom d’usager. Pièce 2, le procès-verbal et son tableau des actions. Pièce 3, la note de synthèse sur le décret fictif : avec la méthode de Souleymane, chaque point renvoie à son article, vérifié dans le texte. Pièce 4, la page de rapport sur les activités de sa direction, chiffres fictifs, avec son tableau de calcul en annexe. Enfin, elle colle dans Gemini la consigne de relecture RCTF, avec le texte du dossier sans aucune donnée personnelle. L’assistant ne réécrit rien ; au critère d’exactitude, il signale un chiffre de la page de rapport sans calcul joint. Zeinabou refait le calcul et l’ajoute à l’annexe.",
      "impact": "Zeinabou assemble ses pièces en un seul PDF, sommaire et fiche de contrôle en tête, et le dépose selon la consigne. Chaque critère est visible : aucun nom d’usager, aucune décision ajoutée aux notes, chaque point relié à son article, chaque chiffre accompagné de son calcul. Son directeur peut contrôler n’importe quelle pièce : il retrouve l’article derrière chaque point et le calcul derrière chaque chiffre."
    },
    "practice": {
      "title": "Constituez et déposez le dossier d’une réunion",
      "instructions": [
        "Préparez vos cinq pièces sur un cas non confidentiel ou fictif : un courrier, un procès-verbal avec son tableau des actions, une note de synthèse d’un texte public avec ses articles, une page de rapport avec ses calculs, et une fiche de contrôle. Retirez tout nom d’usager et toute donnée personnelle : des fonctions à la place des noms, des crochets à la place des numéros.",
        "Faites relire le dossier avec la consigne de relecture en quatre blocs (Rôle, Contexte, Tâche, Format), copiée telle quelle dans votre assistant : « Rôle : tu es un relecteur exigeant dans une administration publique. Contexte : voici les pièces du dossier d’une réunion : [collez le texte, sans aucun nom d’usager ni donnée personnelle]. Critères : confidentialité, fidélité aux notes, exactitude, registre administratif, vérification humaine. Tâche : ne réécris rien. Pour chaque critère, dis-moi ce qui manque ou ce qui est fragile, en citant le passage concerné. Format : un court paragraphe par critère, dans l’ordre de la liste, puis trois questions que mon directeur pourrait me poser. » Corrigez vous-même chaque point signalé, en revenant à vos notes, au texte officiel ou à votre calculatrice.",
        "Cochez la fiche de contrôle critère par critère, assemblez vos pièces en un seul PDF, sommaire et fiche de contrôle en tête, puis déposez-le selon la consigne affichée sous la vidéo."
      ],
      "observation": "Vous devez constater que l’assistant ne réécrit rien : il signale des points fragiles (un chiffre sans calcul, un point sans article, une formule à revoir), et c’est vous qui corrigez, en vérifiant chaque remarque. Votre fiche de contrôle doit permettre à un lecteur de retrouver, pour chaque pièce, la preuve de chaque critère. Si un nom d’usager ou une décision absente des notes apparaît encore, le dossier n’est pas prêt, même s’il est bien présenté."
    },
    "quiz": [
      {
        "question": "Que pouvez-vous coller dans un assistant grand public pour votre dossier ?",
        "options": [
          { "key": "A", "text": "La requête d’un usager" },
          { "key": "B", "text": "Un projet de texte non publié" },
          { "key": "C", "text": "Des éléments sans noms, avec des fonctions et des crochets" },
          { "key": "D", "text": "Un document classé" }
        ],
        "answer": "C",
        "explanation": "C’est la règle de la Leçon 1 : ce que vous collez dans un outil grand public sort du service. Seuls des éléments anonymisés y entrent, avec des fonctions à la place des noms et des crochets à la place des numéros. La requête d’un usager, un projet non publié ou un document classé n’y entrent jamais."
      },
      {
        "question": "Que contient le procès-verbal ?",
        "options": [
          { "key": "A", "text": "Ce que le brouillon de l’IA juge logique" },
          { "key": "B", "text": "Ce qui a été dit et décidé, d’après vos notes" },
          { "key": "C", "text": "Les opinions de la secrétaire" },
          { "key": "D", "text": "Les décisions probables" }
        ],
        "answer": "B",
        "explanation": "Comme dans la Leçon 2, un procès-verbal constate officiellement les débats et les décisions : rien que vos notes. Une décision qui « semble logique » mais n’apparaît pas dans vos notes se supprime, ou se fait confirmer par le président de séance."
      },
      {
        "question": "Quelle est la source qui fait foi pour une note sur un décret ?",
        "options": [
          { "key": "A", "text": "La synthèse de l’IA" },
          { "key": "B", "text": "Le résumé d’un collègue" },
          { "key": "C", "text": "Le texte officiel, en vigueur" },
          { "key": "D", "text": "Un site d’actualités" }
        ],
        "answer": "C",
        "explanation": "La Leçon 3 l’a montré : une synthèse peut se tromper, un résumé peut être daté. Seul le texte officiel fait foi, à condition qu’il soit toujours en vigueur, ni modifié ni abrogé. Chaque point de votre note se vérifie dans son article."
      },
      {
        "question": "Que faites-vous d’un chiffre donné par l’IA ?",
        "options": [
          { "key": "A", "text": "Vous le recalculez et vous gardez le calcul" },
          { "key": "B", "text": "Vous l’arrondissez" },
          { "key": "C", "text": "Vous le gardez s’il paraît plausible" },
          { "key": "D", "text": "Vous le supprimez toujours" }
        ],
        "answer": "A",
        "explanation": "C’est le geste de la Leçon 4 : l’IA peut se tromper ou arrondir sans le dire. Vous refaites chaque calcul vous-même et vous joignez le calcul au rapport, pour que votre hiérarchie puisse le contrôler. Un chiffre plausible n’est pas un chiffre vérifié."
      },
      {
        "question": "Le dossier de Rahila est soigné, mais la pièce 2 contient le nom d’un usager. Quel critère échoue ?",
        "options": [
          { "key": "A", "text": "Le registre" },
          { "key": "B", "text": "La fidélité" },
          { "key": "C", "text": "La vérification" },
          { "key": "D", "text": "La confidentialité" }
        ],
        "answer": "D",
        "explanation": "Un nom d’usager dans une pièce est l’une des trois erreurs qui font échouer un dossier : c’est le critère de confidentialité qui tombe. La belle présentation du dossier de Rahila ne compense pas cette faute."
      }
    ],
    "reflection": "Quelle prochaine réunion de votre service pourriez-vous documenter avec ces cinq pièces, et lequel des quatre gestes du cours vous demandera le plus de vigilance ?",
    "glossary": [
      {
        "term": "Dossier de réunion",
        "definition": "Ensemble des pièces qui documentent une réunion, assemblées en un seul PDF avec un sommaire : courrier, procès-verbal, note de synthèse, page de rapport et fiche de contrôle. Comme un dossier de candidature, il vaut par ce que l’on peut y contrôler."
      },
      {
        "term": "Fiche de contrôle",
        "definition": "Tableau qui croise les pièces du dossier et les cinq critères d’évaluation. On y coche, pièce par pièce, ce qui a été vérifié, comme la liste remplie avant la réception d’un chantier."
      },
      {
        "term": "Critères d’évaluation",
        "definition": "Les cinq exigences auxquelles le dossier doit répondre : confidentialité, fidélité aux notes, exactitude, registre administratif et vérification humaine."
      },
      {
        "term": "Méthode RCTF",
        "definition": "Méthode de consigne en quatre blocs : Rôle, Contexte, Tâche, Format. Pour une relecture, la Tâche précise « ne réécris rien » : l’assistant signale, vous corrigez."
      },
      {
        "term": "Anonymisation",
        "definition": "Remplacer les noms par des fonctions et les numéros par des crochets avant de coller un texte dans un outil d’IA. Les vraies informations ne reviennent que dans le document final, hors de l’outil."
      },
      {
        "term": "Texte en vigueur",
        "definition": "Texte officiel qui s’applique aujourd’hui, ni modifié ni abrogé. C’est lui qui fait foi, et non la synthèse que l’on en tire."
      },
      {
        "term": "Visa",
        "definition": "Trace du contrôle d’un document par l’agent ou par la hiérarchie, avant la signature. Dans la chaîne de validation, il sépare le brouillon de l’IA du document qui engage le service."
      }
    ]
  },
  "en": {
    "id": "ad5",
    "lessonNumber": 5,
    "title": "Final project: preparing a complete meeting file with AI",
    "objective": "By the end of this lesson, you will be able to put together and submit a complete meeting file: a letter, minutes with their action table, a summary note on a public text with its articles, a report page with its calculations, and a checklist. You will be able to assess this file against five criteria — confidentiality, faithfulness, accuracy, register, human verification — and spot the three mistakes that make it fail. Finally, you will be able to have AI review it with an RCTF prompt that rewrites nothing, then assemble it into a single PDF, ready to submit.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "The five documents in the file: one per lesson, plus the checklist",
        "body": "This final project brings the whole course together in a single PDF file. Think of the file you submit for a scholarship application or a call for tenders: the cover matters little; what matters is that every document is there and can be checked. Your meeting file works the same way: five documents, in order, preceded by a table of contents.\n\nThe first four documents come from the four lessons. Document 1, the letter from Lesson 1: an invitation or cover letter, prepared from anonymised elements and the service’s template. Document 2, the minutes from Lesson 2, ending with their action table: who does what, and by when. Document 3, the summary note from Lesson 3, on a public regulatory text, where every point refers to its article. Document 4, the report page from Lesson 4, with its calculations attached as an appendix.\n\nThe fifth document is new: the checklist. It is a simple table that crosses the documents with the five assessment criteria; you tick what you have checked, document by document. It is like the list a site manager fills in before a building is handed over: it does not replace the work, it shows that the work has been checked. The file is prepared on a non-confidential or fictional case. Be clear-eyed: it proves a method; on its own, it guarantees nothing."
      },
      {
        "title": "The five assessment criteria: confidentiality, faithfulness, accuracy, register, human verification",
        "body": "Each criterion matches a habit learned in the course. Confidentiality (Lesson 1): no user name or number, no classified or non-public document has gone through a public tool; people are referred to by their job title, numbers stay in square brackets until the final document, and the civil service rules of your country on professional discretion apply. Faithfulness (Lesson 2): the minutes contain only what was said and decided, according to your notes; anything missing stayed “[TO BE COMPLETED]” until you filled it in yourself.\n\nAccuracy (Lessons 3 and 4): every point in the note refers to an article checked in the official text, still in force; every figure in the report has been recalculated, and the calculation is attached. Register (Lesson 1): the customary formulas are respected — “I have the honour to…” at the start, a closing formula suited to the recipient’s rank — and the service’s template has the final say.\n\nHuman verification (the whole course): every document bears the trace of a check, an approval stamp. This is the validation chain found in a prefecture in Côte d’Ivoire as much as in a town hall in Togo: draft, check by the officer, approval by the hierarchy, signature, registration. AI prepares a draft; the officer checks, the hierarchy approves, the signatory commits."
      },
      {
        "title": "The three mistakes that make a file fail, even a well-presented one",
        "body": "Three mistakes are enough to make a file fail. The first: a user’s name or number in a document, or in the text pasted into the tool. The second: an unchecked figure or article, copied as AI gave it. The third: a decision missing from the notes, slipped into the minutes because it “seemed logical”. Each one betrays a criterion: confidentiality, accuracy, faithfulness.\n\nTake the counter-example of Rahila, an officer in a fictional departmental directorate in Parakou, Benin. Her file is well presented: clean layout, consistent headings, no typos. But document 2 contains a user’s name, and her note cites an article she has not checked. Two criteria fail: confidentiality and accuracy. A beautiful file does not make up for it. It is like a market scale that is well polished but badly calibrated: it shines, and every weighing is wrong.\n\nThese mistakes have one thing in common: too much trust in the draft. The remedy comes down to four habits, one per lesson: nothing confidential in the tool, nothing but your notes in the minutes, the article is authoritative, figures recalculated. Before submitting, run every document through this filter and record the result in the checklist."
      },
      {
        "title": "Having AI review the file with an RCTF prompt, then submitting it as a single PDF",
        "body": "Last step before submitting: a critical review. You give the assistant a four-block review prompt, following the RCTF method. Role: a demanding reviewer in a public administration. Context: the documents in the file, with no user names and no personal data, and the list of five criteria. Task: rewrite nothing, but point out, criterion by criterion, what is missing or weak, quoting the passage concerned. Format: one short paragraph per criterion, then three questions your director might ask you.\n\nHere the assistant plays the role of an attentive colleague, not the author: it points, you correct. Its comments are leads, and it can be wrong; you are the one who goes back to your notes, the official text or your calculator. If your administration provides an approved AI tool, use it first; otherwise, a free assistant such as Gemini, Claude or ChatGPT will do, as long as you paste only anonymised elements. The director’s three questions are good practice: an officer in Burkina Faso or Mali presenting a file to their hierarchy must be able to answer “Where is that written?” and “How did you calculate that?”.\n\nYou then assemble your documents into a single PDF, with the table of contents and the checklist at the front, and submit it following the instructions shown below the video. Passing this final project unlocks your verifiable digital certificate: it carries a QR code that anyone — an employer, a manager, a partner — can scan to check that it is genuine, and it remains valid for 12 months."
      }
    ],
    "example": {
      "title": "Zeinabou’s meeting file, checked document by document",
      "challenge": "In Tahoua, Niger, Zeinabou, an executive assistant in a fictional regional directorate, is preparing the file for her directorate’s next quarterly meeting. She already has the invitation letter from Lesson 1 and the minutes from Lesson 2; she still needs a summary note, a report page and a checklist. From Bouaké, Côte d’Ivoire, Souleymane, a head of department in another administration, shares his method with her, peer to peer: check every point article by article, recalculate every figure. Zeinabou thinks good writing is enough. Souleymane corrects her: what is assessed is a file that can be checked, without disclosing anything.",
      "solution": "Zeinabou opens her file on the computer and goes through it in order. First the table of contents and the checklist: five criteria, document by document. Document 1, the letter, next to the service’s template: a “[SERVICE LETTERHEAD]” header, job titles, no user names. Document 2, the minutes and their action table. Document 3, the summary note on the fictional decree: with Souleymane’s method, every point refers to its article, checked in the text. Document 4, the report page on her directorate’s activities, with fictional figures and its calculation table as an appendix. Finally, she pastes the RCTF review prompt into Gemini, with the text of the file and no personal data. The assistant rewrites nothing; under the accuracy criterion, it flags a figure on the report page with no calculation attached. Zeinabou redoes the calculation and adds it to the appendix.",
      "impact": "Zeinabou assembles her documents into a single PDF, with the table of contents and the checklist at the front, and submits it following the instructions. Every criterion is visible: no user names, no decision added to the notes, every point linked to its article, every figure accompanied by its calculation. Her director can check any document: he finds the article behind every point and the calculation behind every figure."
    },
    "practice": {
      "title": "Put together and submit a meeting file",
      "instructions": [
        "Prepare your five documents on a non-confidential or fictional case: a letter, minutes with their action table, a summary note on a public text with its articles, a report page with its calculations, and a checklist. Remove every user name and all personal data: job titles instead of names, square brackets instead of numbers.",
        "Have the file reviewed with the four-block review prompt (Role, Context, Task, Format), copied as is into your assistant: “Role: you are a demanding reviewer in a public administration. Context: here are the documents of a meeting file: [paste the text, with no user names and no personal data]. Criteria: confidentiality, faithfulness to the notes, accuracy, administrative register, human verification. Task: do not rewrite anything. For each criterion, tell me what is missing or weak, quoting the passage concerned. Format: one short paragraph per criterion, in the order of the list, then three questions my director might ask me.” Correct each flagged point yourself, going back to your notes, the official text or your calculator.",
        "Tick the checklist criterion by criterion, assemble your documents into a single PDF, with the table of contents and the checklist at the front, then submit it following the instructions shown below the video."
      ],
      "observation": "You should notice that the assistant rewrites nothing: it flags weak points (a figure without a calculation, a point without an article, a formula to review), and you are the one who corrects them, checking each comment. Your checklist should allow a reader to find, for each document, the evidence for each criterion. If a user’s name or a decision missing from the notes still appears, the file is not ready, however well presented it is."
    },
    "quiz": [
      {
        "question": "What can you paste into a public assistant for your file?",
        "options": [
          { "key": "A", "text": "A user’s request" },
          { "key": "B", "text": "An unpublished draft text" },
          { "key": "C", "text": "Elements without names, with job titles and square brackets" },
          { "key": "D", "text": "A classified document" }
        ],
        "answer": "C",
        "explanation": "This is the rule from Lesson 1: whatever you paste into a public tool leaves the service. Only anonymised elements go in, with job titles instead of names and square brackets instead of numbers. A user’s request, an unpublished draft or a classified document never go in."
      },
      {
        "question": "What do the minutes contain?",
        "options": [
          { "key": "A", "text": "What AI’s draft considers logical" },
          { "key": "B", "text": "What was said and decided, according to your notes" },
          { "key": "C", "text": "The secretary’s opinions" },
          { "key": "D", "text": "Likely decisions" }
        ],
        "answer": "B",
        "explanation": "As in Lesson 2, minutes officially record discussions and decisions: nothing but your notes. A decision that “seems logical” but does not appear in your notes is deleted, or confirmed by the chair of the meeting."
      },
      {
        "question": "Which source is authoritative for a note on a decree?",
        "options": [
          { "key": "A", "text": "AI’s summary" },
          { "key": "B", "text": "A colleague’s summary" },
          { "key": "C", "text": "The official text, in force" },
          { "key": "D", "text": "A news website" }
        ],
        "answer": "C",
        "explanation": "Lesson 3 showed it: a summary can be wrong, a digest can be out of date. Only the official text is authoritative, provided it is still in force, neither amended nor repealed. Every point in your note is checked against its article."
      },
      {
        "question": "What do you do with a figure given by AI?",
        "options": [
          { "key": "A", "text": "You recalculate it and keep the calculation" },
          { "key": "B", "text": "You round it" },
          { "key": "C", "text": "You keep it if it seems plausible" },
          { "key": "D", "text": "You always delete it" }
        ],
        "answer": "A",
        "explanation": "This is the habit from Lesson 4: AI can make mistakes or round numbers without saying so. You redo every calculation yourself and attach it to the report, so that your hierarchy can check it. A plausible figure is not a verified figure."
      },
      {
        "question": "Rahila’s file is well presented, but document 2 contains a user’s name. Which criterion fails?",
        "options": [
          { "key": "A", "text": "Register" },
          { "key": "B", "text": "Faithfulness" },
          { "key": "C", "text": "Verification" },
          { "key": "D", "text": "Confidentiality" }
        ],
        "answer": "D",
        "explanation": "A user’s name in a document is one of the three mistakes that make a file fail: the confidentiality criterion falls. The fine presentation of Rahila’s file does not make up for this fault."
      }
    ],
    "reflection": "Which upcoming meeting in your service could you document with these five documents, and which of the course’s four habits will require the most care from you?",
    "glossary": [
      {
        "term": "Meeting file",
        "definition": "The set of documents that record a meeting, assembled into a single PDF with a table of contents: letter, minutes, summary note, report page and checklist. Like an application file, its value lies in what can be checked."
      },
      {
        "term": "Checklist",
        "definition": "A table that crosses the documents in the file with the five assessment criteria. You tick, document by document, what has been checked, like the list filled in before a building site is handed over."
      },
      {
        "term": "Assessment criteria",
        "definition": "The five requirements the file must meet: confidentiality, faithfulness to the notes, accuracy, administrative register and human verification."
      },
      {
        "term": "RCTF method",
        "definition": "A four-block prompting method: Role, Context, Task, Format. For a review, the Task states “do not rewrite anything”: the assistant flags, you correct."
      },
      {
        "term": "Anonymisation",
        "definition": "Replacing names with job titles and numbers with square brackets before pasting a text into an AI tool. The real information only returns in the final document, outside the tool."
      },
      {
        "term": "Text in force",
        "definition": "An official text that applies today, neither amended nor repealed. It is the authoritative source, not the summary drawn from it."
      },
      {
        "term": "Approval stamp (visa)",
        "definition": "The trace showing that a document has been checked by the officer or the hierarchy, before signature. In the validation chain, it separates AI’s draft from the document that commits the service."
      }
    ]
  },
  "ha": {
    "id": "ad5",
    "lessonNumber": 5,
    "title": "Aikin karshe: shirya cikakken fayil na taro tare da AI",
    "objective": "A karshen wannan darasi, za ku san yadda ake hada cikakken fayil na taro da kuma mika shi: wasika, procès-verbal (rubutaccen bayanin taro na hukuma) tare da teburin ayyukansa, takardar takaitawa ta wata takardar doka ta jama’a tare da sassanta, shafin rahoto tare da lissafinsa, da takardar bincike. Za ku san yadda ake auna wannan fayil bisa ma’auni biyar — sirri, aminci, daidaito, salon hukuma, tantancewar dan Adam — da kuma gano kura-kurai uku da ke sa ya fadi. A karshe, za ku san yadda ake sa AI ya sake karanta shi da umurnin RCTF wanda ba ya sake rubuta komai, sannan ku hada shi a cikin PDF guda daya, a shirye don mikawa.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Takardu biyar na fayil: daya ga kowane darasi, tare da takardar bincike",
        "body": "Wannan aikin karshe yana hada dukan kwas din a cikin fayil na PDF guda daya. Ku yi tunanin fayil din da ake mikawa don neman tallafin karatu ko don shiga gasar kwangila: bangon gaba ba shi da muhimmanci sosai; abin da ke da muhimmanci shi ne kowace takarda ta kasance a ciki, kuma a iya tantance ta. Fayil din taron ku yana aiki haka: takardu biyar, a jere, tare da jerin abubuwan da ke ciki a gaba.\n\nTakardu hudu na farko suna fitowa daga darussa hudu. Takarda ta 1, wasikar Darasi 1: wasikar gayyata ko ta aikewa, wadda aka shirya daga bayanan da aka boye sunaye da kuma samfurin sashen. Takarda ta 2, procès-verbal na Darasi 2, wanda ke karewa da teburin ayyuka: wa zai yi me, kuma zuwa yaushe. Takarda ta 3, takardar takaitawa ta Darasi 3, kan wata takardar doka ta jama’a, inda kowace aya ke nuni ga sashenta (article). Takarda ta 4, shafin rahoto na Darasi 4, tare da lissafinsa a hade a karshe.\n\nTakarda ta biyar sabuwa ce: takardar bincike (fiche de contrôle). Tebur ne mai sauki wanda ke hada takardun da ma’auni biyar na tantancewa; a ciki kuna yin alama kan abin da kuka duba, takarda bayan takarda. Tana kama da jerin da shugaban gini ke cikawa kafin karbar gini: ba ta maye gurbin aikin ba, tana nuna cewa an duba shi. Ana shirya fayil din kan wani lamari wanda ba na sirri ba ko na kirkira. Ku fadi gaskiya: yana nuna hanyar aiki, amma shi kadai ba ya ba da tabbacin komai."
      },
      {
        "title": "Ma’auni biyar na tantancewa: sirri, aminci, daidaito, salon hukuma, tantancewar dan Adam",
        "body": "Kowane ma’auni yana daidai da wata dabi’a da aka koya a kwas din. Confidentialité (sirri), Darasi 1: babu suna ko lambar wani mai neman sabis, babu takardar sirri ko wadda ba ta jama’a ba da ta shiga kayan aikin AI na kowa da kowa; ana ambaton mutane da mukamansu, lambobi kuma suna zama a cikin baka [ ] har zuwa takarda ta karshe, kuma dokokin aikin gwamnati na kasarku kan rufin asirin aiki suna aiki. Fidélité (aminci ga bayanan rubutu), Darasi 2: procès-verbal yana kunshe ne kawai da abin da aka fada da abin da aka yanke, bisa bayanan da kuka rubuta; abin da ya rasa ya zauna « [À COMPLÉTER] » (a cika) har sai kun cika shi da kanku.\n\nExactitude (daidaito), Darasi 3 da 4: kowace aya ta takardar takaitawa tana nuni ga sashen da aka tantance a cikin rubutun hukuma, wanda har yanzu yake aiki; kowace lamba ta rahoto an sake lissafa ta, kuma lissafin yana hade. Registre (salon hukuma), Darasi 1: ana bin kalmomin da aka saba — « J’ai l’honneur de… » a farko, kalmar karshe da ta dace da matsayin wanda ake aika wa — kuma samfurin sashen ne ke da magana ta karshe.\n\nVérification humaine (tantancewar dan Adam), dukan kwas din: kowace takarda tana dauke da alamar dubawa, wato amincewa (visa). Wannan ita ce sarkar tabbatarwa da ake samu a ofishin gwamna a Côte d’Ivoire kamar a wata karamar hukuma a Togo: daftari, dubawar ma’aikaci, amincewar shugabanni, sa hannu, rajista. AI yana shirya daftari; ma’aikaci yana dubawa, shugabanni suna amincewa, mai sa hannu yana daukar alhaki."
      },
      {
        "title": "Kura-kurai uku da ke sa fayil ya fadi, ko da yana da kyau",
        "body": "Kura-kurai uku sun isa su sa fayil ya fadi. Na farko: suna ko lambar wani mai neman sabis a cikin wata takarda, ko a cikin rubutun da aka manna a kayan aikin. Na biyu: lamba ko sashe da ba a tantance ba, wanda aka kwafa kamar yadda AI ya bayar. Na uku: shawarar da ba ta cikin bayanan da aka rubuta, wadda aka saka a cikin procès-verbal saboda « ta yi kama da ma’ana ». Kowanne yana karya wani ma’auni: sirri, daidaito, aminci.\n\nKu dauki misalin akasi na Rahila, ma’aikaciya a wata hukumar sashe ta kirkira a Parakou, a Benin. Fayil dinta yana da kyau: tsari mai tsabta, kanun labarai da suka daidaita, babu kuskuren rubutu. Amma takarda ta 2 tana dauke da sunan wani mai neman sabis, kuma takardar takaitawarta tana ambaton wani sashe da ba ta tantance ba. Ma’auni biyu sun fadi: sirri da daidaito. Kyan fayil ba ya rufe wannan. Kamar sikelin kasuwa ne da aka goge ya yi haske amma ba a daidaita shi ba: yana walkiya, amma kowane awo karya ne.\n\nWadannan kura-kurai suna da abu daya na bai daya: amincewa da daftari fiye da kima. Maganin yana cikin dabi’u hudu, daya ga kowane darasi: babu abin sirri a kayan aikin, bayanan ku kadai a cikin procès-verbal, sashen doka ne ke da magana ta karshe, lambobin da aka sake lissafawa. Kafin mikawa, ku wuce da kowace takarda ta wannan matatar, ku rubuta sakamakon a takardar bincike."
      },
      {
        "title": "Sa AI ya sake karanta fayil da umurnin RCTF, sannan a mika shi a PDF guda daya",
        "body": "Mataki na karshe kafin mikawa: sake karantawa mai zurfi. Kuna ba mataimakin AI umurnin sake karantawa a sassa hudu, bisa hanyar RCTF. Rawa: mai sake karantawa mai tsauri a hukumar gwamnati. Mahalli: takardun fayil din, ba tare da sunan kowane mai neman sabis ko bayanan sirri na mutum ba, da jerin ma’auni biyar. Aiki: kada ya sake rubuta komai, sai dai ya nuna, ma’auni bayan ma’auni, abin da ya rasa ko abin da ke da rauni, tare da ambaton wurin da abin ya shafa. Tsari: takaitaccen sakin layi daya ga kowane ma’auni, sannan tambayoyi uku da daraktan ku zai iya yi muku.\n\nA nan mataimakin yana taka rawar abokin aiki mai lura, ba ta marubuci ba: shi yana nunawa, ku kuna gyarawa. Bayanansa alamu ne kawai, kuma yana iya yin kuskure; ku ne ke komawa ga bayanan ku, ga rubutun hukuma ko ga na’urar lissafin ku. Idan hukumarku tana samar da kayan aikin AI da aka amince da shi, ku fara amfani da shi; idan ba haka ba, mataimaki kyauta kamar Gemini, Claude ko ChatGPT ya isa, muddin bayanan da aka boye sunaye kadai kuka manna. Tambayoyi uku na darakta horo ne mai kyau: ma’aikaci a Burkina Faso ko a Mali da ke gabatar da fayil ga shugabanninsa dole ne ya iya amsa « Ina aka rubuta haka? » da « Yaya kuka yi lissafin? ».\n\nSannan kuna hada takardunku a cikin PDF guda daya, tare da jerin abubuwan da ke ciki da takardar bincike a gaba, ku mika shi bisa umurnin da ke kasan bidiyon. Nasarar wannan aikin karshe tana bude muku takardar shaidar dijital da za a iya tantancewa: tana dauke da QR code wanda kowa — mai daukar aiki, shugaba, abokin hulda — zai iya duba shi don tabbatar da sahihancinta, kuma tana aiki har watanni 12."
      }
    ],
    "example": {
      "title": "Fayil din taro na Zeinabou, an duba shi takarda bayan takarda",
      "challenge": "A Tahoua, a Nijar, Zeinabou, sakatariyar darakta a wata hukumar yanki ta kirkira, tana shirya fayil din taron watanni uku na gaba na hukumarta. Tana da wasikar gayyata ta Darasi 1 da procès-verbal na Darasi 2; har yanzu tana bukatar takardar takaitawa, shafin rahoto da takardar bincike. Daga Bouaké, a Côte d’Ivoire, Souleymane, shugaban sashe a wata hukuma dabam, yana raba mata hanyarsa, a matsayin abokin aiki: tantance kowace aya sashe bayan sashe, sake lissafa kowace lamba. Zeinabou tana ganin cewa rubutu mai kyau ya isa. Souleymane ya gyara mata: abin da ake tantancewa shi ne fayil wanda za a iya dubawa, ba tare da bayyana komai na sirri ba.",
      "solution": "Zeinabou ta bude fayil dinta a kwamfuta ta bi shi a jere. Da farko jerin abubuwan da ke ciki da takardar bincike: ma’auni biyar, takarda bayan takarda. Takarda ta 1, wasikar, kusa da samfurin sashen: kan takarda « [EN-TÊTE DU SERVICE] », mukamai, babu sunan mai neman sabis. Takarda ta 2, procès-verbal da teburin ayyukansa. Takarda ta 3, takardar takaitawa kan dokar kirkira: da hanyar Souleymane, kowace aya tana nuni ga sashenta, wanda aka tantance a cikin rubutun. Takarda ta 4, shafin rahoto kan ayyukan hukumarta, lambobi na kirkira, tare da teburin lissafinsa a karshe. A karshe, ta manna umurnin sake karantawa na RCTF a Gemini, tare da rubutun fayil din ba tare da wani bayanin sirri na mutum ba. Mataimakin bai sake rubuta komai ba; a ma’aunin daidaito, ya nuna wata lamba a shafin rahoto da ba ta da lissafi a hade. Zeinabou ta sake yin lissafin ta kara shi a karshen rahoton.",
      "impact": "Zeinabou ta hada takardunta a cikin PDF guda daya, tare da jerin abubuwan da ke ciki da takardar bincike a gaba, ta mika shi bisa umurnin. Kowane ma’auni yana bayyane: babu sunan mai neman sabis, babu shawarar da aka kara wa bayanan rubutu, kowace aya tana da sashenta, kowace lamba tana tare da lissafinta. Daraktanta zai iya duba kowace takarda: yana samun sashen doka a bayan kowace aya, da lissafi a bayan kowace lamba."
    },
    "practice": {
      "title": "Hada fayil din wani taro ku mika shi",
      "instructions": [
        "Shirya takardunku biyar kan wani lamari wanda ba na sirri ba ko na kirkira: wasika, procès-verbal tare da teburin ayyukansa, takardar takaitawa ta wata takardar doka ta jama’a tare da sassanta, shafin rahoto tare da lissafinsa, da takardar bincike. Cire kowane sunan mai neman sabis da duk bayanan sirri na mutum: mukamai a madadin sunaye, baka [ ] a madadin lambobi.",
        "Sa a sake karanta fayil din da umurnin sake karantawa a sassa hudu (Rawa, Mahalli, Aiki, Tsari), wanda kuka kwafa kamar yadda yake a mataimakin ku: « Rawa: kai mai sake karantawa ne mai tsauri a wata hukumar gwamnati. Mahalli: ga takardun fayil na wani taro: [manna rubutun, ba tare da sunan kowane mai neman sabis ko bayanan sirri na mutum ba]. Ma’auni: sirri, aminci ga bayanan rubutu, daidaito, salon hukuma, tantancewar dan Adam. Aiki: kada ka sake rubuta komai. Ga kowane ma’auni, gaya mini abin da ya rasa ko abin da ke da rauni, tare da ambaton wurin da abin ya shafa. Tsari: takaitaccen sakin layi daya ga kowane ma’auni, bisa tsarin jerin, sannan tambayoyi uku da darakta na zai iya yi mini. » Gyara kowace aya da aka nuna da kanku, ta hanyar komawa ga bayanan ku, ga rubutun hukuma ko ga na’urar lissafin ku.",
        "Yi alama a takardar bincike ma’auni bayan ma’auni, hada takardunku a cikin PDF guda daya, tare da jerin abubuwan da ke ciki da takardar bincike a gaba, sannan ku mika shi bisa umurnin da ke kasan bidiyon."
      ],
      "observation": "Ya kamata ku lura cewa mataimakin ba ya sake rubuta komai: yana nuna wuraren da ke da rauni (lamba ba tare da lissafi ba, aya ba tare da sashe ba, kalmar hukuma da ya kamata a sake duba), kuma ku ne ke gyarawa, kuna tantance kowane bayani. Takardar binciken ku ya kamata ta ba wa mai karatu damar samun, ga kowace takarda, shaidar kowane ma’auni. Idan har yanzu akwai sunan mai neman sabis ko shawarar da ba ta cikin bayanan rubutu, fayil din bai shirya ba, ko da yana da kyakkyawan tsari."
    },
    "quiz": [
      {
        "question": "Me za ku iya mannawa a mataimakin AI na kowa da kowa don fayil dinku?",
        "options": [
          { "key": "A", "text": "Bukatar wani mai neman sabis" },
          { "key": "B", "text": "Daftarin doka da ba a wallafa ba" },
          { "key": "C", "text": "Bayanai ba tare da sunaye ba, da mukamai da baka [ ]" },
          { "key": "D", "text": "Takardar sirri ta hukuma" }
        ],
        "answer": "C",
        "explanation": "Wannan ita ce ka’idar Darasi 1: abin da kuka manna a kayan aikin kowa da kowa yana fita daga sashen. Bayanan da aka boye sunaye kadai ke shiga, tare da mukamai a madadin sunaye da baka [ ] a madadin lambobi. Bukatar mai neman sabis, daftarin da ba a wallafa ba ko takardar sirri ba sa shiga ko kadan."
      },
      {
        "question": "Me procès-verbal ke kunshe da shi?",
        "options": [
          { "key": "A", "text": "Abin da daftarin AI ya ga yana da ma’ana" },
          { "key": "B", "text": "Abin da aka fada da abin da aka yanke, bisa bayanan ku" },
          { "key": "C", "text": "Ra’ayoyin sakatariya" },
          { "key": "D", "text": "Shawarwarin da ake tsammani" }
        ],
        "answer": "B",
        "explanation": "Kamar a Darasi 2, procès-verbal yana tabbatar da muhawara da shawarwari a hukumance: bayanan ku kadai. Shawarar da « ta yi kama da ma’ana » amma ba ta cikin bayanan ku ana cire ta, ko a sa shugaban taro ya tabbatar da ita."
      },
      {
        "question": "Wace majiya ce ke da magana ta karshe ga takarda kan wata doka?",
        "options": [
          { "key": "A", "text": "Takaitawar AI" },
          { "key": "B", "text": "Takaitawar wani abokin aiki" },
          { "key": "C", "text": "Rubutun hukuma, mai aiki a yau" },
          { "key": "D", "text": "Shafin labarai na intanet" }
        ],
        "answer": "C",
        "explanation": "Darasi 3 ya nuna haka: takaitawa na iya yin kuskure, wani bayani na iya tsufa. Rubutun hukuma kadai ke da magana ta karshe, muddin yana aiki har yanzu, ba a gyara shi ba kuma ba a soke shi ba. Ana tantance kowace aya ta takardar ku a cikin sashenta."
      },
      {
        "question": "Me kuke yi da lambar da AI ya bayar?",
        "options": [
          { "key": "A", "text": "Kuna sake lissafa ta kuma kuna ajiye lissafin" },
          { "key": "B", "text": "Kuna zagaye ta" },
          { "key": "C", "text": "Kuna ajiye ta idan ta yi kama da gaskiya" },
          { "key": "D", "text": "Kullum kuna goge ta" }
        ],
        "answer": "A",
        "explanation": "Wannan ita ce dabi’ar Darasi 4: AI na iya yin kuskure ko zagaye lamba ba tare da ya fada ba. Kuna sake yin kowane lissafi da kanku kuma kuna hada shi da rahoton, domin shugabanninku su iya duba shi. Lambar da ta yi kama da gaskiya ba lambar da aka tantance ba ce."
      },
      {
        "question": "Fayil din Rahila yana da kyau, amma takarda ta 2 tana dauke da sunan wani mai neman sabis. Wane ma’auni ne ya fadi?",
        "options": [
          { "key": "A", "text": "Salon hukuma (registre)" },
          { "key": "B", "text": "Aminci (fidélité)" },
          { "key": "C", "text": "Tantancewa (vérification)" },
          { "key": "D", "text": "Sirri (confidentialité)" }
        ],
        "answer": "D",
        "explanation": "Sunan mai neman sabis a cikin takarda yana daya daga cikin kura-kurai uku da ke sa fayil ya fadi: ma’aunin sirri ne ya fadi. Kyakkyawan tsarin fayil din Rahila ba ya rufe wannan laifi."
      }
    ],
    "reflection": "Wane taro na gaba a sashenku za ku iya rubuta fayil dinsa da wadannan takardu biyar, kuma wace daga cikin dabi’u hudu na kwas din za ta bukaci karin kulawa daga gare ku?",
    "glossary": [
      {
        "term": "Dossier de réunion (fayil din taro)",
        "definition": "Tarin takardun da ke bayyana wani taro, wanda aka hada a cikin PDF guda daya tare da jerin abubuwan da ke ciki: wasika, procès-verbal, takardar takaitawa, shafin rahoto da takardar bincike. Kamar fayil din neman aiki, darajarsa tana cikin abin da za a iya dubawa."
      },
      {
        "term": "Fiche de contrôle (takardar bincike)",
        "definition": "Tebur da ke hada takardun fayil din da ma’auni biyar na tantancewa. A ciki ana yin alama, takarda bayan takarda, kan abin da aka duba, kamar jerin da ake cikawa kafin karbar gini."
      },
      {
        "term": "Critères d’évaluation (ma’aunin tantancewa)",
        "definition": "Bukatu biyar da fayil din dole ya cika: sirri, aminci ga bayanan rubutu, daidaito, salon hukuma da tantancewar dan Adam."
      },
      {
        "term": "Méthode RCTF (Rawa · Mahalli · Aiki · Tsari)",
        "definition": "Hanyar rubuta umurni a sassa hudu: Rawa, Mahalli, Aiki, Tsari. Don sake karantawa, Aikin yana cewa « kada ka sake rubuta komai »: mataimakin yana nunawa, ku kuna gyarawa."
      },
      {
        "term": "Anonymisation (boye sunaye)",
        "definition": "Maye gurbin sunaye da mukamai, da lambobi da baka [ ], kafin a manna rubutu a kayan aikin AI. Ainihin bayanan suna dawowa ne kawai a takarda ta karshe, a wajen kayan aikin."
      },
      {
        "term": "Texte en vigueur (doka mai aiki)",
        "definition": "Rubutun hukuma da ke aiki a yau, ba a gyara shi ba kuma ba a soke shi ba. Shi ne ke da magana ta karshe, ba takaitawar da aka ciro daga gare shi ba."
      },
      {
        "term": "Visa (amincewa)",
        "definition": "Alamar da ke nuna cewa ma’aikaci ko shugabanni sun duba wata takarda, kafin sa hannu. A sarkar tabbatarwa, ita ce ke raba daftarin AI da takardar da ke daukar alhakin sashen."
      }
    ]
  }
};
