import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module "Introduction a Claude AI" - chapitre 5.
// Video FR publiee ; EN et HA restent vides (placeholder affiche par le lecteur).
// Le lecteur rend les paragraphes en texte brut : aucun markdown dans les body.

const lessonCl5Fr: LessonContent = {
  id: 'cl5',
  lessonNumber: 5,
  title: 'Limites, vérification et confidentialité',
  objective:
    "À la fin de ce chapitre, vous saurez pourquoi une réponse fausse peut être parfaitement écrite, vous appliquerez un réflexe de vérification en trois questions qui prend moins d'une minute, vous saurez ce qui ne doit jamais sortir de votre organisation, et vous saurez reconnaître les situations où il ne faut pas utiliser l'IA du tout.",
  video: {
    fr: 'https://www.youtube.com/embed/fyKOWMZam1k',
    en: '',
    ha: '',
  },
  content: [
    {
      title: 'Pourquoi une réponse fausse est écrite avec la même assurance',
      body:
        "Au premier chapitre, vous avez rencontré le mot : hallucination. Il est temps de comprendre le mécanisme, parce que c'est lui qui dicte tout le reste.\n\nClaude produit, mot après mot, ce qui est le plus plausible compte tenu de tout ce qu'il a lu. Il ne confronte pas chaque affirmation à une base de faits. Les travaux d'interprétabilité publiés par Anthropic montrent qu'il existe bien, à l'intérieur, quelque chose qui distingue ce qu'il connaît de ce qu'il ne connaît pas — mais ce signal est imparfait, et quand il se déclenche mal, la réponse fausse sort exactement comme la réponse juste. Pour vous, à la lecture, rien ne les sépare : l'assurance n'est pas un indice de fiabilité, c'est simplement la manière dont il écrit.\n\nUne conséquence importante : lui demander « es-tu sûr ? » ne règle rien. Il vous répondra avec la même aisance, parfois en changeant d'avis sans raison. La vérification ne peut pas venir de lui. Elle vient de vous, ou d'une source extérieure.\n\nLes zones où l'erreur est la plus probable se repèrent facilement, et elles sont presque toujours les mêmes. Les chiffres précis. Les dates. Les références réglementaires — un numéro de décret, un article de loi. Les noms de personnes et leurs fonctions. Les références bibliographiques. Et par-dessus tout, ce qui est local : votre pays, votre région, votre secteur. Plus l'information est spécifique, moins elle est fiable.\n\nClaude peut consulter le web, et cela change la donne sur l'actualité — mais pas sur la vérification. Une réponse appuyée sur une recherche dépend de ce qu'elle a trouvé et de la façon dont elle l'a lu. Quand des liens sont cités, ouvrez-en un : c'est plus rapide que de douter, et c'est la seule façon de savoir.",
    },
    {
      title: 'Le réflexe de vérification en trois questions',
      body:
        "Vérifier ne veut pas dire tout contrôler : tout contrôler, ce serait refaire le travail, et personne ne le fera. Vérifiez beaucoup quand une erreur coûterait cher, et peu quand elle ne coûterait rien. Trois questions suffisent, et elles prennent moins d'une minute.\n\nPremière question : cette affirmation est-elle vérifiable ? Un chiffre, une date, une référence de texte, un nom : oui. Une formulation, un plan, un ton : il n'y a rien à vérifier, seulement à juger.\n\nDeuxième question : qu'est-ce qui casse si c'est faux ? Un mail interne mal tourné se corrige. Un montant erroné dans un budget envoyé à un bailleur ne se corrige pas : il vous coûte votre crédibilité, et parfois davantage. Cette question seule vous dit combien de temps investir.\n\nTroisième question : ai-je une source indépendante ? Le texte officiel, le site de l'institution, le collègue qui connaît le dossier, votre propre document. Indépendante veut dire : qui ne vient pas de Claude. Redemander à Claude de confirmer ce que Claude a écrit, ce n'est pas vérifier.\n\nLa décision en découle. Si rien n'est vérifiable et que l'enjeu est faible, il n'y a rien à vérifier : votre relecture habituelle suffit. Si quelque chose est vérifiable et que l'enjeu est réel, vérifiez ces points-là seulement — pas le texte entier. Et si l'enjeu est fort mais qu'aucune source indépendante n'existe, alors la réponse ne vous sert pas : ne l'utilisez pas.\n\nUne habitude accélère tout le reste : demandez systématiquement d'où vient l'information. Sur un document que vous lui avez fourni, demandez-lui de citer le passage exact, comme au chapitre 3. Sur une connaissance générale, demandez « sur quoi te fondes-tu ? » — et une réponse vague est, en elle-même, un signal.",
    },
    {
      title: 'Ce qui ne sort jamais de votre organisation',
      body:
        "Ce que vous écrivez quitte vos murs. Le chapitre 1 posait la règle, le chapitre 3 l'a appliquée aux documents entiers. Voici comment décider vite dans les cas ordinaires.\n\nLe test tient en une phrase : est-ce que j'enverrais cela à quelqu'un d'extérieur à mon organisation, qui ne m'a rien promis sur le secret ? Si la réponse est non, cela ne va pas non plus dans une conversation. Si la réponse est non, cela ne va pas non plus dans une conversation.\n\nNe sortent jamais : le nom d'une personne liée à une situation — bénéficiaire, patient, élève, employé. Son numéro de téléphone, son adresse, son e-mail. Les dossiers médicaux, les dossiers du personnel, les dossiers judiciaires. Les identifiants, les mots de passe et les clés d'accès. Les numéros de compte bancaire. Les documents que vous avez promis par écrit de garder secrets. Et les informations qui, mises bout à bout, permettent de reconnaître quelqu'un sans citer son nom : un village, une fonction et une date suffisent parfois.\n\nCe dernier point est le plus souvent négligé. « La sage-femme du centre de santé de tel village » n'est pas un nom, mais c'est une identité.\n\nLa parade est simple et rapide : anonymisez avant. Remplacez les noms par des rôles — le bénéficiaire A, l'agent B. Retirez les coordonnées. Remplacez le lieu précis par un lieu plus large : au lieu de « le village de X », écrivez « un village de la région ». Vous obtiendrez le même travail avec le même résultat, sans avoir fait sortir ce qui ne devait pas sortir.\n\nEt souvenez-vous des deux endroits où cela s'accumule sans que personne y pense : un Project, où l'on dépose une fois puis on oublie, et la mémoire entre conversations, activée par défaut sur les comptes personnels. Prenez l'habitude d'aller regarder ce que l'une et l'autre contiennent, et de les vider quand c'est nécessaire.",
    },
    {
      title: "Quand il ne faut pas s'en servir du tout",
      body:
        "Savoir ne pas utiliser un outil fait partie de sa maîtrise. Quatre situations, et elles n'ont rien de théorique.\n\nQuand la relation compte plus que le texte. Des condoléances, l'annonce d'un licenciement, la réponse à un collègue blessé, la résolution d'un conflit. Le destinataire ne lit pas seulement des phrases : il évalue le temps que vous lui avez consacré. Un texte impeccable produit par un outil en dix secondes est parfois pire que trois lignes maladroites de votre main.\n\nQuand vous ne pouvez pas relire. C'est la règle du chapitre 4, ramenée à son cas extrême. Sur un domaine que vous ne maîtrisez pas, vous ne verrez pas l'erreur, et vous engagerez votre signature sur un texte que vous ne pouvez pas défendre.\n\nQuand la responsabilité est réellement engagée. Un avis médical, une interprétation juridique, un conseil financier, un diagnostic technique dont dépend la sécurité de quelqu'un. Ce ne sont pas des tâches de rédaction, ce sont des actes professionnels. L'outil peut vous aider à préparer vos questions ; il ne peut pas rendre l'avis.\n\nQuand la tâche est plus rapide à la main. Une réponse de deux lignes s'écrit à la main.\n\nUn dernier point, qui n'est pas technique mais qui décidera de votre réputation : ne présentez pas comme votre travail ce qui ne l'est pas. Un rapport que vous n'avez pas relu n'est pas votre rapport. Un texte assumé est un texte que vous êtes capable de défendre ligne à ligne devant quelqu'un qui vous interroge.",
    },
  ],
  example: {
    title: "Cas type : la référence réglementaire qui n'existait pas",
    challenge:
      "Une chargée de plaidoyer dans une ONG prépare une note de position destinée à un ministère. Elle demande à Claude un rappel du cadre réglementaire national sur son sujet et obtient trois paragraphes clairs, bien écrits, citant un décret avec son numéro et sa date. Le texte est cohérent, le style est celui d'une note juridique, rien ne paraît suspect à la lecture.",
    solution:
      "Avant d'envoyer, elle applique les trois questions. Est-ce vérifiable ? Un numéro de décret, oui. Qu'est-ce qui casse si c'est faux ? Une note à un ministère citant un texte inexistant, c'est sa crédibilité et celle de son organisation devant l'interlocuteur qu'elle cherche justement à convaincre. Ai-je une source indépendante ? Le journal officiel et un collègue juriste. Elle vérifie : le décret existe, mais le numéro est faux et la date est décalée de deux ans. Et un autre texte réglementaire cité dans la même réponse n'existe pas du tout.",
    impact:
      "La note part corrigée, avec les références exactes, et elle est meilleure que ce qu'elle aurait écrit seule — la structure et l'argumentation tenaient. Ce n'est pas l'erreur qui est instructive ici : c'est le fait qu'elle était strictement invisible à la lecture. Aucun signe, aucune hésitation, aucune formule prudente. Depuis, l'équipe a une règle écrite : toute référence réglementaire citée dans un document sortant est vérifiée à la source, sans exception.",
  },
  practice: {
    title: 'Faites-vous piéger volontairement, puis appliquez les trois questions',
    instructions: [
      "Choisissez un sujet local, précis et récent que vous maîtrisez : une procédure administrative de votre pays, un barème, une échéance officielle, l'organisation d'une institution que vous connaissez.",
      "Demandez une note de synthèse d'une demi-page sur ce sujet, en exigeant des éléments précis : chiffres, dates, références.",
      "Passez chaque affirmation aux trois questions : est-ce vérifiable, qu'est-ce qui casse si c'est faux, ai-je une source indépendante ?",
      "Vérifiez réellement, à la source officielle, les deux affirmations dont une erreur ferait le plus de dégâts, puis demandez « sur quoi te fondes-tu ? » et observez la réponse.",
    ],
    observation:
      "Comptez les erreurs, mais regardez surtout leur forme. Étaient-elles signalées d'une manière ou d'une autre ? Presque jamais. Notez le temps que la vérification vous a réellement pris — en général quelques minutes, bien moins que ce que l'on craint. C'est ce chiffre qui doit vous convaincre : le réflexe de vérification n'est pas coûteux, c'est son absence qui l'est.",
  },
  quiz: [
    {
      question: "Vous doutez d'une réponse et vous demandez à Claude : « es-tu sûr ? ». Que vaut sa confirmation ?",
      options: [
        { key: 'A', text: "Elle confirme la fiabilité de la réponse initiale." },
        { key: 'B', text: "Elle ne prouve rien : l'assurance est sa manière d'écrire, pas un indice de fiabilité." },
        { key: 'C', text: "Elle est fiable s'il maintient sa réponse trois fois." },
        { key: 'D', text: "Elle est fiable seulement sur les sujets récents." },
      ],
      answer: 'B',
      explanation:
        "Ce qui, à l'intérieur, distingue une connaissance d'un comblement de trou est imparfait, et l'assurance du ton ne change jamais. La vérification ne peut donc pas venir de lui : elle vient de vous ou d'une source extérieure indépendante.",
    },
    {
      question: "Sur laquelle de ces informations l'erreur est-elle la plus probable ?",
      options: [
        { key: 'A', text: "La structure d'un compte rendu de réunion." },
        { key: 'B', text: 'La reformulation en français simple d’un paragraphe que vous fournissez.' },
        { key: 'C', text: "Le numéro et la date d'un décret de votre pays adopté récemment." },
        { key: 'D', text: 'Le ton d’un mail de relance.' },
      ],
      answer: 'C',
      explanation:
        "Plus une information est précise, récente et locale, moins elle est fiable. Les références réglementaires cumulent les trois. Les trois autres propositions ne sont pas des faits à vérifier mais des formes à juger.",
    },
    {
      question: "Vous voulez faire analyser une situation concernant « la sage-femme du centre de santé de tel village ». Que faites-vous ?",
      options: [
        { key: 'A', text: "Vous l'écrivez ainsi : aucun nom n'est cité, donc rien n'est identifiant." },
        { key: 'B', text: "Vous remplacez par un rôle neutre et vous retirez ce qui localise, car une fonction unique associée à un lieu précis peut suffire à identifier une personne." },
        { key: 'C', text: 'Vous ajoutez le nom pour que la réponse soit plus précise.' },
        { key: 'D', text: 'Vous déposez le dossier complet dans un Project, où il sera protégé.' },
      ],
      answer: 'B',
      explanation:
        "Une fonction unique associée à un lieu est une identité, même sans nom. Anonymiser avant coûte quelques secondes et donne exactement le même travail. Un Project ne protège rien : on y dépose une fois et on oublie ensuite ce qui s'y trouve.",
    },
  ],
  reflection:
    "Repensez à un document que vous avez envoyé ces derniers mois et qui comptait : un rapport, un dossier de candidature, un devoir noté, une note à votre responsable. Si un seul chiffre s'y était révélé faux, qu'est-ce que cela vous aurait coûté — et à quel moment, avant l'envoi, auriez-vous pu le vérifier ?",
  glossary: [
    {
      term: 'Erreur plausible',
      definition:
        "Réponse fausse produite avec le même ton assuré qu'une réponse juste, parce que ce qui, à l'intérieur, distingue une connaissance d'un comblement de trou est imparfait.",
    },
    {
      term: 'Vérifiabilité',
      definition:
        "Caractère d'une affirmation qu'on peut confronter à une source : un chiffre, une date, une référence, un nom. Une formulation ou un plan ne se vérifient pas, ils se jugent.",
    },
    {
      term: 'Source indépendante',
      definition:
        "Source qui ne provient pas de l'outil lui-même : texte officiel, site institutionnel, collègue compétent, document d'origine.",
    },
    {
      term: 'Donnée identifiante indirecte',
      definition:
        "Information qui, sans citer de nom, permet d'identifier une personne par recoupement — une fonction unique, un lieu précis, une date.",
    },
    {
      term: 'Anonymisation',
      definition:
        "Remplacement des noms par des rôles et retrait de ce qui localise, avant tout envoi. Donne le même résultat de travail sans faire sortir ce qui ne doit pas sortir.",
    },
    {
      term: 'Texte assumé',
      definition:
        "Texte que vous êtes capable de défendre ligne à ligne devant quelqu'un qui vous interroge. Un document non relu n'est pas votre document.",
    },
  ],
};

const lessonCl5En: LessonContent = {
  ...lessonCl5Fr,
  title: 'Limits, verification and privacy',
  objective:
    'By the end of this chapter you will understand why a false answer can be perfectly written, you will apply a three-question verification reflex that takes under a minute, you will know what must never leave your organization, and you will recognize the situations where AI should not be used at all.',
  content: [
    {
      title: 'Why a wrong answer is written with the same confidence',
      body:
        "In chapter 1 you met the word: hallucination. Now the mechanism, because it dictates everything else.\n\nClaude produces, word after word, what is most plausible given everything it has read. It does not check each claim against a fact base. Anthropic's own interpretability work shows there is something inside that distinguishes what it knows from what it does not — but that signal is imperfect, and when it misfires the false answer comes out exactly like a true one. To you, reading it, nothing separates them: confidence is not an indicator of reliability, it is simply how it writes.\n\nOne important consequence: asking \"are you sure?\" settles nothing. It will answer just as smoothly, sometimes changing its mind for no reason. Verification cannot come from it. It comes from you, or from an outside source.\n\nThe risky zones are easy to spot and almost always the same. Precise figures. Dates. Regulatory references — a decree number, an article of law. People's names and roles. Bibliographic references. And above all, anything local: your country, your region, your sector. The more specific the information, the less reliable it is.\n\nClaude can browse the web, which changes things for current events — but not for verification. An answer built on a search depends on what it found and how it read it. When links are cited, open one: it is faster than doubting, and it is the only way to know.",
    },
    {
      title: 'The three-question verification reflex',
      body:
        "Verifying does not mean checking everything — that would mean redoing the work, and nobody will. It means calibrating the effort to the actual stakes. Three questions, under a minute.\n\nFirst: is this claim verifiable? A figure, a date, a legal reference, a name: yes. A phrasing, a structure, a tone: nothing to verify, only to judge.\n\nSecond: what breaks if it is wrong? A clumsy internal email is fixed. A wrong amount in a budget sent to a donor is not: it costs your credibility, sometimes more. This question alone tells you how much time to invest.\n\nThird: do I have an independent source? The official text, the institution's site, the colleague who knows the file, your own document. Independent means: not from the same place.\n\nThe decision follows. Nothing verifiable and low stakes: there is nothing to fact-check — your usual proofread is enough. Something verifiable and real stakes: check those points only, not the whole text. High stakes and no independent source: the answer is of no use to you — do not use it.\n\nOne habit speeds up the rest: always ask where the information comes from. On a document, use chapter 3's habit: ask it to quote the exact sentence from the document. On general knowledge it is \"what are you basing that on?\" — and a vague answer is itself a signal.",
    },
    {
      title: 'What never leaves your organization',
      body:
        "What you write leaves your walls. Chapter 1 set the rule, chapter 3 applied it to whole documents. Here is how to decide quickly in ordinary cases.\n\nThe test is one sentence: would I send this to an outside contractor I have no contract with? If no, it does not go into a conversation either.\n\nNever: names of people tied to a situation — beneficiaries, patients, pupils, employees; contact details; medical, HR or judicial files; credentials, passwords and access keys; bank details; documents under a confidentiality clause; and information that, once cross-referenced, identifies someone even without a name — a village, a role and a date are sometimes enough.\n\nThat last point is the most often missed. “The midwife at the health centre of such-and-such village” is not a name, but it is an identity.\n\nThe fix is quick: anonymize first. Replace names with roles — beneficiary A, officer B. Strip contact details. Replace the exact place with a wider one: instead of “the village of X”, write “a village in the region”. You get the same work and the same result without sending out what should not go out.\n\nAnd remember the two places this piles up unnoticed: a Project, where you upload once and forget, and memory across conversations, on by default on personal accounts. Get into the habit of looking at what each holds, and clearing them when needed.",
    },
    {
      title: 'When not to use it at all',
      body:
        "Knowing when not to use a tool is part of mastering it. Four situations, none of them theoretical.\n\nWhen the relationship matters more than the text. Condolences, announcing a dismissal, answering a hurt colleague, resolving a conflict. The reader is not only reading sentences: they are weighing the time you gave them. A flawless text produced in ten seconds is sometimes worse than three clumsy lines of your own.\n\nWhen you cannot proofread. Chapter 4's rule taken to its extreme. On a field you do not master you will not see the error, and you will put your signature on a text you cannot defend.\n\nWhen responsibility is genuinely engaged. A medical opinion, a legal interpretation, financial advice, a technical diagnosis someone's safety depends on. These are not drafting tasks, they are professional acts. The tool can help you prepare your questions; it cannot deliver the opinion.\n\nWhen the task is faster by hand. A two-line reply is written by hand.\n\nOne last point, not technical but decisive for your reputation: do not present as your work what is not. A report you have not read is not your report. An owned text is one you can defend line by line to someone questioning you.",
    },
  ],
  example: {
    title: 'Typical case: the regulatory reference that did not exist',
    challenge:
      'An advocacy officer in an NGO is preparing a position note for a ministry. She asks for a reminder of the national regulatory framework on her topic and gets three clear, well-written paragraphs citing a decree with its number and date. It is coherent, it reads like a legal note, nothing snags.',
    solution:
      'Before sending, she applies the three questions. Verifiable? A decree number, yes. What breaks if wrong? A note to a ministry citing a non-existent text costs her credibility and her organization\'s, in front of the very people she wants to convince. Independent source? The official gazette and a lawyer colleague. She checks: the decree exists, but the number is wrong and the date is off by two years. And another regulation cited in the same answer does not exist at all.',
    impact:
      'The note goes out corrected, with exact references, and it is better than what she would have written alone — the structure and the argument held. The instructive part is not the error: it is that the error was strictly invisible on reading. No sign, no hesitation, no cautious wording. The team now has a written rule: every regulatory reference in an outgoing document is checked at source, without exception.',
  },
  practice: {
    title: 'Get caught on purpose, then apply the three questions',
    instructions: [
      'Pick a local, precise, recent topic you master: an administrative procedure in your country, a scale of fees, an official deadline, how an institution you know is organized.',
      'Ask for a half-page briefing on it, requiring specifics: figures, dates, references.',
      'Run each claim through the three questions: verifiable, what breaks if wrong, independent source?',
      'Actually check the two most binding claims against the official source, then ask "what are you basing that on?" and watch the answer.',
    ],
    observation:
      'Count the errors, but look above all at their form. Were they flagged in any way? Almost never. Note how long verification actually took — usually a few minutes, far less than feared. That number is what should convince you: the verification reflex is not expensive; its absence is.',
  },
  quiz: [
    {
      question: 'You doubt an answer and ask "are you sure?". What is the confirmation worth?',
      options: [
        { key: 'A', text: 'It confirms the reliability of the first answer.' },
        { key: 'B', text: 'It proves nothing: confidence is how it writes, not an indicator of reliability.' },
        { key: 'C', text: 'It is reliable if it holds the same answer three times.' },
        { key: 'D', text: 'It is reliable only on recent topics.' },
      ],
      answer: 'B',
      explanation:
        'What separates knowledge from gap-filling inside the model is imperfect, and the confident tone never changes. Verification therefore cannot come from it: it comes from you or from an independent outside source.',
    },
    {
      question: 'On which of these is an error most likely?',
      options: [
        { key: 'A', text: 'The structure of meeting minutes.' },
        { key: 'B', text: 'Rewriting a paragraph you supplied into plain language.' },
        { key: 'C', text: 'The number and date of a recently adopted decree in your country.' },
        { key: 'D', text: 'The tone of a follow-up email.' },
      ],
      answer: 'C',
      explanation:
        'The more specific, recent and local the information, the less reliable it is. Regulatory references combine all three. The other three are not facts to verify but forms to judge.',
    },
    {
      question: 'You want a situation analysed concerning "the midwife at the health centre of such-and-such village". What do you do?',
      options: [
        { key: 'A', text: 'Write it as is: no name is given, so nothing identifies anyone.' },
        { key: 'B', text: 'Replace it with a neutral role and remove what locates, since a unique role tied to a precise place can be enough to identify a person.' },
        { key: 'C', text: 'Add the name so the answer is more precise.' },
        { key: 'D', text: 'Upload the full file to a Project, where it will be protected.' },
      ],
      answer: 'B',
      explanation:
        'A unique role tied to a place is an identity, even without a name. Anonymizing takes seconds and yields exactly the same work. A Project protects nothing: you upload once and then forget what is in it.',
    },
  ],
  reflection:
    'Think of a document that left your department in recent months and committed your organization. If a single figure in it had turned out to be wrong, what would that have cost — and who, in the chain, should have checked it?',
  glossary: [
    { term: 'Plausible error', definition: 'A false answer produced in the same confident tone as a correct one, because what separates knowledge from gap-filling inside the model is imperfect.' },
    { term: 'Verifiability', definition: 'Whether a claim can be checked against a source: a figure, a date, a reference, a name. A phrasing or a structure is judged, not verified.' },
    { term: 'Independent source', definition: 'A source that does not come from the tool itself: official text, institutional site, competent colleague, original document.' },
    { term: 'Indirect identifier', definition: 'Information that identifies a person by cross-reference without naming them — a unique role, a precise place, a date.' },
    { term: 'Anonymization', definition: 'Replacing names with roles and removing what locates, before sending. Same work, same result, without sending out what should stay in.' },
    { term: 'Owned text', definition: 'A text you can defend line by line to someone questioning you. A document you have not read is not your document.' },
  ],
};

const lessonCl5Ha: LessonContent = {
  ...lessonCl5Fr,
  title: 'Iyaka, tantancewa da sirri',
  objective:
    'Bayan wannan darasi za ka fahimci dalilin da ya sa amsa ta karya za ta iya zama rubutacciya sosai, za ka yi amfani da hanyar tantancewa ta tambayoyi uku da ba ta kai minti daya ba, za ka san abin da bai kamata ya fita daga kungiyarka ba, kuma za ka gane yanayin da bai kamata a yi amfani da AI ko kadan ba.',
  content: [
    {
      title: 'Me ya sa amsa ta karya ke zuwa da tabbaci iri daya',
      body:
        'A darasi na 1 ka hadu da kalmar: hallucination. Yanzu ga yadda yake aiki, domin shi ne ke tafiyar da sauran.\n\nClaude yana samar da abin da ya fi yiwuwa, kalma bayan kalma, bisa duk abin da ya karanta. Ba ya kwatanta kowace magana da ma’ajiyar gaskiya. Bincike na Anthropic ya nuna akwai wani abu a cikinsa da ke raba abin da ya sani da abin da bai sani ba — amma wannan alama ba cikakkiya ba ce, kuma idan ta kuskure, amsa ta karya tana fitowa daidai kamar ta gaskiya. A gare ka, a karatu, babu abin da ke raba su: tabbaci ba alamar aminci ba ne, yadda yake rubutu ne kawai.\n\nSakamako mai muhimmanci: tambayar “ka tabbata?” ba ta warware komai. Zai amsa da sauki iri daya, wani lokaci ya sauya ra’ayi ba dalili. Tantancewa ba za ta fito daga gare shi ba. Daga gare ka take, ko daga tushe na waje.\n\nWuraren da kuskure ya fi yiwuwa suna da sauki a gane, kuma kusan koyaushe iri daya ne. Lambobi madaidaita. Kwanan wata. Nassoshin doka — lambar doka, sashe. Sunayen mutane da mukamansu. Nassoshin littafai. Kuma sama da duka, abin da ke na gida: kasarka, yankinka, fannin ka. Duk inda bayani ya fi takamaimai, shi ya fi rashin aminci.\n\nClaude na iya duba yanar gizo, wanda ya sauya al’amari kan sabbin labarai — amma ba kan tantancewa ba. Amsar da ta dogara kan bincike tana dogara kan abin da ya samu da yadda ya karanta shi. Idan aka kawo hanyoyi, ka bude daya: ya fi sauri fiye da shakka, kuma ita ce hanya daya tilo ta sani.',
    },
    {
      title: 'Hanyar tantancewa ta tambayoyi uku',
      body:
        'Tantancewa ba yana nufin duba komai ba — hakan zai zama sake yin aikin, kuma babu wanda zai yi. Yana nufin daidaita kokarin da girman abin. Tambayoyi uku, kasa da minti daya.\n\nNa farko: ana iya tabbatar da wannan magana? Lamba, kwanan wata, nassi, suna: eh. Salo, tsari, yanayin magana: babu abin tabbatarwa, sai hukunci.\n\nNa biyu: me zai lalace idan karya ce? Sako na cikin gida mara kyau ana gyara shi. Adadin kuskure a kasafin da aka aika wa mai bayar da tallafi ba ya gyaruwa: yana kashe amincinka. Wannan tambaya kadai tana gaya maka nawa za ka kashe na lokaci.\n\nNa uku: ina da tushe mai zaman kansa? Rubutun hukuma, shafin hukuma, abokin aikin da ya san fayil, takardarka. Mai zaman kansa yana nufin: ba daga wuri daya ba.\n\nShawara tana biyowa. Idan babu abin tabbatarwa kuma abin ba babba ba ne, yi amfani kai tsaye. Idan akwai abin tabbatarwa kuma abin yana da muhimmanci, tabbatar da wadancan wuraren kadai. Idan abin yana da girma amma babu tushe mai zaman kansa, to amsar ba ta amfanarka: kar ka yi amfani da ita.\n\nAl’ada daya tana gaggauta sauran: koyaushe ka tambayi daga ina bayanin ya fito. A kan takarda, wannan shi ne kawo tushe na darasi na 3. A kan ilimi na gaba daya, shi ne “a kan me ka dogara?” — kuma amsa mara tabbas ita kanta alama ce.',
    },
    {
      title: 'Abin da ba ya fita daga kungiyarka',
      body:
        'Abin da ka rubuta yana barin bangonka. Darasi na 1 ya sanya dokar, darasi na 3 ya yi amfani da ita a kan takardu gaba daya. Ga yadda za ka yanke shawara da sauri.\n\nGwaji a jimla daya: zan aika wannan ga dan kwangila na waje da ba ni da yarjejeniya da shi? Idan a’a, to ba ya shiga tattaunawa ma.\n\nBa sa fita: sunayen mutane da ke da alaka da wani yanayi — masu amfana, marasa lafiya, dalibai, ma’aikata; lambobin sadarwa; fayilolin lafiya, ma’aikata ko shari’a; kalmomin sirri da makullai; lambobin banki; takardu masu sirri; da bayanan da, idan aka hada su, ke gano mutum ko da babu suna — kauye, mukami da kwanan wata sun isa wani lokaci.\n\nBatu na karshe shi aka fi mantawa. “Ungozomar cibiyar lafiya ta kauyen kaza” ba suna ba ne, amma shaida ce.\n\nMafita mai sauri: cire sunaye tukuna. Maye gurbin sunaye da mukamai — mai amfana A, ma’aikaci B. Cire lambobin sadarwa. Cire abin da ke nuna wuri. Za ka samu aiki iri daya ba tare da fitar da abin da bai kamata ya fita ba.\n\nKa tuna wurare biyu inda wannan ke taruwa ba tare da an lura ba: Project, inda kake aika sau daya sannan ka manta, da tunani tsakanin tattaunawa, wanda aka kunna tun asali a asusun mutum. Ka saba duba abin da kowanne ke rike da shi, ka share su idan ya kamata.',
    },
    {
      title: 'Lokacin da bai kamata a yi amfani da shi ko kadan ba',
      body:
        'Sanin lokacin da ba za a yi amfani da kayan aiki ba wani bangare ne na kwarewa. Yanayi hudu, babu daya na ka’ida kawai.\n\nIdan dangantaka ta fi rubutu muhimmanci. Ta’aziyya, sanar da korar aiki, amsa wa abokin aikin da aka bata masa rai, warware rikici. Mai karatu ba jimloli kadai yake karantawa ba: yana auna lokacin da ka ba shi. Rubutu marar aibi da aka samar cikin dakika goma wani lokaci ya fi muni fiye da layi uku na hannunka.\n\nIdan ba za ka iya dubawa ba. Dokar darasi na 4 a matsayinta mafi tsanani. A fannin da ba ka kware ba, ba za ka ga kuskuren ba.\n\nIdan alhaki yana kan gaske. Ra’ayin likita, fassarar shari’a, shawarar kudi, gano matsalar fasaha da tsaron mutum ya dogara a kai. Wadannan ba ayyukan rubutu ba ne, ayyukan sana’a ne.\n\nIdan aikin ya fi sauri da hannu. Amsa ta layi biyu ana rubuta ta da hannu.\n\nBatu na karshe, ba na fasaha ba amma shi zai yanke martabarka: kar ka gabatar da abin da ba naka ba a matsayin aikinka. Rahoton da ba ka karanta ba ba rahotonka ba ne. Rubutun da ka dauki alhakinsa shi ne wanda za ka iya karewa layi bayan layi.',
    },
  ],
  example: {
    title: 'Misali: nassin doka da bai wanzu ba',
    challenge:
      'Wata ma’aikaciyar fafutuka a kungiya tana shirya takardar matsaya ga ma’aikata. Ta nemi tunatarwa kan tsarin doka na kasa a kan batunta sai ta samu sakin layi uku bayyanannu, masu kyan rubutu, da suka ambaci doka da lambarta da kwanan watanta. Yana da hade, salon takardar shari’a ne, babu abin da ke tsayarwa a karatu.',
    solution:
      'Kafin ta aika, ta yi amfani da tambayoyi uku. Ana iya tabbatarwa? Lambar doka, eh. Me zai lalace idan karya ce? Takarda ga ma’aikata da ke ambaton rubutun da babu shi, amincinta da na kungiyarta ne a gaban wanda take son shawo kansa. Tushe mai zaman kansa? Jaridar hukuma da abokin aiki masani. Ta duba: dokar tana nan, amma lambar ba daidai ba ce kuma kwanan watan ya kauce shekara biyu. Batu na uku da aka ambata bai wanzu ko kadan.',
    impact:
      'Takardar ta fita gyararre, da ainihin nassoshi, kuma ta fi abin da za ta rubuta ita kadai — tsarin da hujjar sun tsaya. Abin darasi ba kuskuren ba ne: shi ne cewa kuskuren bai bayyana ko kadan a karatu ba. Babu alama, babu shakku, babu magana ta taka-tsantsan. Tun daga lokacin, tawagar tana da doka a rubuce: duk nassin doka a takardar da ke fita sai an tabbatar da shi a tushe.',
  },
  practice: {
    title: 'Ka bar a yaudare ka da gangan, sannan ka yi amfani da tambayoyi uku',
    instructions: [
      'Zabi batun gida, madaidaici kuma sabo da ka kware a kai: tsarin hukuma na kasarka, jadawalin kudi, wa’adin hukuma, ko tsarin wata cibiya da ka sani.',
      'Ka nemi takaitaccen rubutu na rabin shafi a kan batun, tare da neman takamaiman abubuwa: lambobi, kwanan wata, nassoshi.',
      'Ka gwada kowace magana da tambayoyi uku: ana iya tabbatarwa, me zai lalace idan karya ce, ina da tushe mai zaman kansa?',
      'Ka tabbatar da gaske maganganu biyu mafi daurewa a tushen hukuma, sannan ka tambayi “a kan me ka dogara?” ka lura da amsar.',
    ],
    observation:
      'Ka kirga kurakurai, amma ka fi duba siffarsu. An yi alama a kansu ta wata hanya? Kusan ba a taba yi ba. Ka lura lokacin da tantancewar ta dauka da gaske — galibi mintuna kadan, kasa da yadda ake tsoro. Wannan lamba ce ta kamata ta shawo kanka: hanyar tantancewa ba mai tsada ba ce; rashinta ne mai tsada.',
  },
  quiz: [
    {
      question: 'Kana shakkar amsa sai ka tambaya “ka tabbata?”. Menene darajar tabbatarwarsa?',
      options: [
        { key: 'A', text: 'Tana tabbatar da amincin amsar farko.' },
        { key: 'B', text: 'Ba ta tabbatar da komai: tabbaci yadda yake rubutu ne, ba alamar aminci ba.' },
        { key: 'C', text: 'Tana da aminci idan ya rike amsa daya sau uku.' },
        { key: 'D', text: 'Tana da aminci a kan sabbin batutuwa kadai.' },
      ],
      answer: 'B',
      explanation:
        'Abin da ke raba “na sani” da “ina cike gurbi” a cikinsa bai cika ba, kuma salon tabbaci ba ya sauyawa. Don haka tantancewa ba za ta fito daga gare shi ba: daga gare ka take ko daga tushe mai zaman kansa.',
    },
    {
      question: 'A kan wanne daga cikin wadannan kuskure ya fi yiwuwa?',
      options: [
        { key: 'A', text: 'Tsarin takaitaccen rahoton taro.' },
        { key: 'B', text: 'Sake rubuta sakin layi da ka bayar da harshe mai sauki.' },
        { key: 'C', text: 'Lamba da kwanan watan dokar kasarka da aka kafa kwanan nan.' },
        { key: 'D', text: 'Salon sako na tunatarwa.' },
      ],
      answer: 'C',
      explanation:
        'Duk inda bayani ya fi takamaimai, sabo da na gida, shi ya fi rashin aminci. Nassoshin doka sun hada ukun. Sauran ukun ba gaskiya ce ta tabbatarwa ba, siffofi ne na hukuntawa.',
    },
    {
      question: 'Kana son a yi nazarin yanayi game da “ungozomar cibiyar lafiya ta kauyen kaza”. Me za ka yi?',
      options: [
        { key: 'A', text: 'Ka rubuta haka: babu suna, don haka babu abin da ke gano kowa.' },
        { key: 'B', text: 'Ka maye gurbin da mukami na gaba daya ka cire abin da ke nuna wuri, tunda mukami daya tilo hade da wuri madaidaici na iya isa a gano mutum.' },
        { key: 'C', text: 'Ka kara sunan don amsar ta fi madaidaita.' },
        { key: 'D', text: 'Ka aika cikakken fayil zuwa Project, inda za a kiyaye shi.' },
      ],
      answer: 'B',
      explanation:
        'Mukami daya tilo hade da wuri shaida ce, ko da babu suna. Cire sunaye yana daukar dakiku kuma yana bayar da aiki iri daya. Project ba ya kare komai: kana aika sau daya sannan ka manta.',
    },
  ],
  reflection:
    'Ka yi tunanin takardar da ta fita daga sashenka a watannin baya da ta daure kungiyarka. Idan lamba daya a cikinta ta zama karya, me hakan zai kashe — kuma wa, a cikin sarkar, ya kamata ya tabbatar da ita?',
  glossary: [
    { term: 'Kuskure mai kyan gani', definition: 'Amsa ta karya da aka bayar da salo mai tabbaci iri daya da na amsa madaidaiciya, domin abin da ke raba ilimi da cike gurbi a cikinsa bai cika ba.' },
    { term: 'Yiwuwar tabbatarwa', definition: 'Ko za a iya kwatanta magana da tushe: lamba, kwanan wata, nassi, suna. Salo ko tsari ana hukunta su, ba a tabbatar da su ba.' },
    { term: 'Tushe mai zaman kansa', definition: 'Tushen da bai fito daga kayan aikin ba: rubutun hukuma, shafin hukuma, abokin aiki masani, takardar asali.' },
    { term: 'Shaida ta kaikaice', definition: 'Bayanin da ke gano mutum ta hanyar hadewa ba tare da ambaton suna ba — mukami daya tilo, wuri madaidaici, kwanan wata.' },
    { term: 'Cire sunaye', definition: 'Maye gurbin sunaye da mukamai da cire abin da ke nuna wuri, kafin aikawa. Aiki iri daya, sakamako iri daya, ba tare da fitar da abin da ya kamata ya tsaya ba.' },
    { term: 'Rubutun da aka dauki alhakinsa', definition: 'Rubutun da za ka iya karewa layi bayan layi a gaban mai tambaya. Takardar da ba ka karanta ba ba takardarka ba ce.' },
  ],
};

export const claudeLesson5ByLanguage: Record<Language, LessonContent> = {
  fr: lessonCl5Fr,
  en: lessonCl5En,
  ha: lessonCl5Ha,
};
