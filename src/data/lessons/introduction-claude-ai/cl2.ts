import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module "Introduction a Claude AI" - chapitre 2.
// Video FR publiee ; EN et HA restent vides (placeholder affiche par le lecteur).
// Voir docs/brief-video-introduction-claude-ai-cl2.md.

const lessonCl2Fr: LessonContent = {
  id: 'cl2',
  lessonNumber: 2,
  title: 'Bien formuler sa demande',
  objective:
    "À la fin de ce chapitre, vous saurez transformer une demande vague en consigne précise grâce à quatre ingrédients — contexte, tâche, format, exemple — et vous saurez relancer Claude pour corriger une réponse au lieu de la subir.",
  video: {
    fr: 'https://www.youtube.com/embed/SPZzfu_4-D4',
    en: '',
    ha: '',
  },
  content: [
    {
      title: 'Pourquoi la première demande déçoit souvent',
      body:
        "Au chapitre précédent, vous avez sans doute tapé quelque chose comme « rédige un mail de relance » et obtenu un texte correct, poli… et parfaitement fade. C'est normal, et ce n'est pas un défaut de l'outil.\n\nQuand une demande est vague, Claude ne devine pas : il complète avec la moyenne. Une moyenne de tous les mails de relance du monde. Le résultat ne ressemble ni à vous, ni à votre organisation, ni à votre destinataire — et vous passez ensuite autant de temps à le réécrire que si vous l'aviez écrit vous-même.\n\nLa différence entre quelqu'un qui trouve l'IA « décevante » et quelqu'un qui gagne deux heures par semaine ne tient presque jamais à l'outil. Elle tient à ce qu'il y a dans la demande.\n\nUne consigne, c'est un briefing. Exactement celui que vous donneriez à un collaborateur compétent qui découvre le dossier : vous ne lui diriez pas « fais le mail » avant de disparaître. Bonne nouvelle, il n'y a aucune formule secrète à mémoriser — quatre ingrédients suffisent, et ce sont ceux que vous utilisez déjà avec des humains.",
    },
    {
      title: 'Les quatre ingrédients',
      body:
        "Le contexte — qui vous êtes, pour qui vous écrivez, dans quelle situation, et la matière que Claude ne peut pas connaître : vos notes, les dates, les chiffres. C'est l'ingrédient le plus souvent oublié. « Je suis chargée de communication dans une coopérative de riziculteurs près de Bamako. J'écris à nos 40 producteurs membres, dont beaucoup lisent difficilement le français administratif. »\n\nLa tâche — un verbe d'action, et une seule tâche à la fois. Rédige. Résume. Compare. Traduis. Corrige. Classe. Empiler trois demandes dans un même message donne trois réponses moyennes plutôt qu'une bonne.\n\nLe format — longueur, structure, ton, support. « Un SMS de 300 caractères maximum. » « Un tableau à trois colonnes. » « Cinq puces, pas de paragraphe. » « Un ton chaleureux mais ferme. » Sans cette précision, Claude choisit à votre place, et il choisit long.\n\nL'exemple — le plus sous-utilisé, et de loin le plus puissant. Collez un texte que vous avez déjà produit et dites : « inspire-toi de ce style ». Un seul exemple concret vaut mieux que dix adjectifs. C'est ainsi qu'on obtient un texte qui sonne comme votre organisation et pas comme un manuel.\n\nRetenez ces quatre mots : contexte, tâche, format, exemple. L'ordre dans lequel vous les écrivez n'a pas d'importance ; ce qui compte, c'est qu'ils soient tous les quatre présents. Une bonne consigne fait souvent quatre à six lignes. Plus longue que votre demande d'origine, beaucoup plus courte que le travail qu'elle vous évite.",
    },
    {
      title: 'Avant / après, sur une vraie demande',
      body:
        "Avant. « Rédige un message pour annoncer la formation aux producteurs. »\n\nCe que vous obtenez : un communiqué en français soutenu, trois paragraphes, un « nous avons le plaisir de vous convier », aucune date, aucun lieu. Inutilisable tel quel.\n\nAprès. « Je suis chargée de communication dans une coopérative de riziculteurs près de Bamako. Nous organisons une formation sur l'irrigation le samedi 12 avril à 9h au siège de la coopérative. Rédige le message d'annonce à nos 40 producteurs membres. Contrainte : ce sera envoyé par SMS et par message vocal, donc 300 caractères maximum, phrases courtes, français simple, pas de vocabulaire administratif. La date, l'heure et le lieu doivent apparaître en premier. Voici un message que nous avons envoyé l'an dernier et qui a bien marché : [coller le message]. »\n\nLa deuxième demande prend quarante secondes de plus à écrire. Elle produit un texte utilisable presque tel quel, alors que la première produit un brouillon à refaire entièrement.\n\nRegardez ce qui a changé : rien de technique. Vous avez simplement dit qui parle, à qui, pour dire quoi, sous quelle forme — et vous avez montré un modèle.",
    },
    {
      title: 'Relancer : la seconde moitié du travail',
      body:
        "La première réponse est un brouillon, jamais un verdict. Les utilisateurs efficaces ne rédigent pas la consigne parfaite du premier coup : ils corrigent en trois échanges.\n\nQuatre relances qui servent presque toujours :\n\n« Trop long, refais en cinq lignes. » — le raccourcissement est ce que Claude fait le mieux.\n\n« Change le ton : plus direct, moins formel. »\n\n« Le point 3 est faux, voici la bonne information : … Reprends. »\n\n« Propose-moi trois versions différentes. » — quand vous ne savez pas encore ce que vous voulez, faire produire des options coûte moins cher que de chercher la bonne consigne.\n\nEt la relance la plus rentable de toutes, à utiliser avant même la rédaction : « Avant de rédiger, dis-moi quelles informations te manquent. » Elle renverse le sens de l'échange — c'est Claude qui vous interroge, et il pointe en général exactement les trous de votre consigne.\n\nUn réflexe à prendre : quand la réponse est complètement à côté, n'empilez pas les corrections. Reformulez la demande entière dans un nouveau message. Un fil chargé de corrections successives finit par tirer le résultat dans tous les sens.\n\nDernier conseil, celui qui fait la différence sur la durée : gardez vos bonnes consignes. Un simple fichier avec cinq consignes qui marchent — l'annonce, le compte rendu, la relance, la note de synthèse, la traduction — vous fera gagner plus de temps que n'importe quelle astuce.",
    },
  ],
  example: {
    title: "Cas type : l'offre d'emploi qui ne ressemble à personne",
    challenge:
      "Le responsable RH d'une PME de vingt personnes à Cotonou doit publier une offre pour un poste de comptable. Sa première demande — « rédige une offre d'emploi pour un comptable » — produit une annonce impeccable et totalement interchangeable : elle pourrait être celle de n'importe quelle entreprise du continent. Résultat, il reçoit des candidatures hors cible et passe sa semaine à trier.",
    solution:
      "Il réécrit sa demande avec les quatre ingrédients : « Je recrute pour une PME béninoise de 20 personnes qui distribue du matériel agricole, poste de comptable unique, donc la personne sera seule sur la fonction et devra être autonome. Rédige l'offre d'emploi. Format : une page maximum, structurée en quatre parties — l'entreprise, la mission, le profil, comment postuler. Ton : direct, concret, pas de langue de bois RH. Voici notre offre de l'an dernier pour un poste de logisticien, qui nous avait amené de bons profils : [coller l'offre]. »",
    impact:
      "L'annonce obtenue parle de la réalité du poste — être seul sur la fonction comptable — au lieu de vendre un environnement générique. Les candidats se sélectionnent d'eux-mêmes en amont, et le tri devient plus rapide. Les cinq minutes investies dans la consigne sont récupérées au moment du dépouillement. Surtout, la consigne est conservée : au recrutement suivant, il en change deux lignes.",
  },
  practice: {
    title: 'Réécrivez une de vos demandes avec les quatre ingrédients',
    instructions: [
      "Choisissez une tâche écrite réelle de votre semaine : une annonce, un compte rendu, une relance, une note.",
      "Dans une première conversation, écrivez la demande telle qu'elle vous vient, en une seule phrase. Gardez la réponse sous les yeux.",
      "Réécrivez la même demande en quatre à six lignes, avec le contexte, la tâche, le format et un exemple d'un texte que vous avez déjà produit. Faites-le dans une nouvelle conversation, et sachez que la mémoire peut y reporter une partie du contexte : la comparaison porte sur la consigne, pas sur un départ à zéro.",
      "Avant de valider, ajoutez la relance : « Avant de rédiger, dis-moi quelles informations te manquent. » Répondez à ses questions, puis laissez-le rédiger.",
    ],
    observation:
      "Mettez les deux réponses côte à côte. Combien de corrections auriez-vous dû faire sur la première ? Sur la seconde ? Repérez surtout quel ingrédient a le plus changé le résultat — dans la grande majorité des cas, c'est l'exemple collé. Si la consigne enrichie fonctionne, copiez-la quelque part : elle resservira.",
  },
  quiz: [
    {
      question: "Quel est le principal défaut de la demande « Rédige-moi un rapport sur l'agriculture » ?",
      options: [
        { key: 'A', text: "Elle est trop polie." },
        { key: 'B', text: "Elle ne dit ni pour qui, ni pour quoi faire, ni sous quelle forme : la réponse sera générique." },
        { key: 'C', text: 'Elle est trop longue.' },
        { key: 'D', text: "Claude ne peut pas traiter de sujets agricoles." },
      ],
      answer: 'B',
      explanation:
        "Sans contexte ni format, Claude complète avec la moyenne et produit un texte passe-partout. Ce n'est pas le sujet qui pose problème, c'est l'absence de briefing.",
    },
    {
      question: "Vous voulez que le texte produit sonne comme votre organisation. Quelle est la méthode la plus efficace ?",
      options: [
        { key: 'A', text: "Écrire « rédige bien » et « sois professionnel » dans la consigne." },
        { key: 'B', text: "Coller un texte que vous avez déjà produit et demander de s'en inspirer." },
        { key: 'C', text: 'Répéter la demande trois fois de suite.' },
        { key: 'D', text: "Écrire la consigne en majuscules pour insister." },
      ],
      answer: 'B',
      explanation:
        "L'exemple est l'ingrédient le plus puissant et le plus sous-utilisé. Un seul texte réel transmet mieux votre style que dix adjectifs, qui restent interprétables.",
    },
    {
      question: "La réponse obtenue est complètement hors sujet. Quel est le bon réflexe ?",
      options: [
        { key: 'A', text: "Enchaîner les corrections dans le même fil jusqu'à ce que ça tombe juste." },
        { key: 'B', text: 'Accepter la réponse et la réécrire soi-même entièrement.' },
        { key: 'C', text: "Reformuler la demande entière, avec les quatre ingrédients, plutôt qu'empiler des corrections." },
        { key: 'D', text: 'Changer de langue et recommencer.' },
      ],
      answer: 'C',
      explanation:
        "Les corrections successives servent à ajuster un résultat déjà proche. Quand la réponse est à côté, elles tirent le fil dans tous les sens : mieux vaut repartir d'une consigne complète.",
    },
  ],
  reflection:
    "Quelle demande revient chez vous chaque semaine, presque à l'identique ? Si vous deviez en faire une consigne réutilisable une fois pour toutes, quels éléments faudrait-il y figer — et lesquels changeront à chaque fois ?",
  glossary: [
    {
      term: 'Consigne (ou prompt)',
      definition:
        "Le message par lequel vous demandez quelque chose à Claude. Une bonne consigne est un briefing, pas une question jetée en passant.",
    },
    {
      term: 'Contexte',
      definition:
        "Qui vous êtes, pour qui vous produisez ce texte, dans quelle situation, et la matière que Claude ne peut pas connaître : vos notes, les dates, les chiffres. L'ingrédient le plus souvent oublié.",
    },
    {
      term: 'Format',
      definition:
        "La forme attendue : longueur, structure, ton, support de diffusion. Sans consigne de format, Claude choisit — et il choisit long.",
    },
    {
      term: 'Exemple',
      definition:
        "Un texte déjà produit, collé dans la consigne comme modèle de style ou de structure. L'ingrédient le plus efficace pour obtenir un rendu à votre image.",
    },
    {
      term: 'Relance',
      definition:
        "Message envoyé pour orienter ou corriger le travail de Claude : avant la rédaction, pour lui demander quelles informations lui manquent ; après une première réponse, pour raccourcir, changer de ton, rectifier un fait ou demander des variantes.",
    },
    {
      term: 'Consigne réutilisable',
      definition:
        "Une consigne qui a bien fonctionné, conservée dans un fichier pour être resservie en changeant seulement quelques lignes.",
    },
  ],
};

const lessonCl2En: LessonContent = {
  ...lessonCl2Fr,
  title: 'Writing a good request',
  objective:
    'By the end of this chapter you will be able to turn a vague request into a precise instruction using four ingredients — context, task, format, example — and to push back on an answer instead of accepting it.',
  content: [
    {
      title: 'Why the first request usually disappoints',
      body:
        "You probably typed something like \"write a follow-up email\" and got a correct, polite, utterly bland text. That is normal, and it is not a flaw in the tool.\n\nWhen a request is vague, Claude does not guess: it fills the gaps with the average — the average of every follow-up email in the world. The result sounds like nobody in particular, and rewriting it costs as much as writing it yourself.\n\nThe gap between someone who finds AI disappointing and someone who saves two hours a week is almost never the tool. It is what is in the request. An instruction is a briefing: exactly what you would give a capable colleague who has never seen the file.",
    },
    {
      title: 'The four ingredients',
      body:
        "Context — who you are, who you are writing for, in what situation, and the material Claude cannot know: your notes, the dates, the figures. The most frequently skipped ingredient.\n\nTask — one action verb, one task at a time. Write. Summarize. Compare. Translate. Correct. Stacking three requests in one message yields three average answers instead of one good one.\n\nFormat — length, structure, tone, channel. \"A 300-character SMS.\" \"A three-column table.\" \"Five bullets, no paragraphs.\" Without this, Claude chooses for you, and it chooses long.\n\nExample — the most underused and by far the most powerful. Paste something you have already written and say \"follow this style\". One real example beats ten adjectives.\n\nOrder does not matter; presence does. A good instruction is often four to six lines — longer than your original request, far shorter than the work it saves you.",
    },
    {
      title: 'Before and after, on a real request',
      body:
        "Before. \"Write a message announcing the training to the producers.\" You get a formal three-paragraph communiqué with no date and no venue. Unusable.\n\nAfter. \"I am the communications officer of a rice growers cooperative near Bamako. We are running an irrigation training on Saturday 12 April at 9am at the cooperative office. Write the announcement for our 40 member producers. Constraint: it goes out by SMS and voice message, so 300 characters maximum, short sentences, plain French, no administrative vocabulary. Date, time and place must come first. Here is last year's message that worked well: [paste].\"\n\nThe second request takes forty seconds longer to write and produces text you can send almost as is. Nothing technical changed — you simply said who is speaking, to whom, to say what, in what shape, and showed a model.",
    },
    {
      title: 'Follow-ups: the second half of the work',
      body:
        "The first answer is a draft, never a verdict. Effective users do not write the perfect instruction first time; they correct it in three exchanges.\n\nFour follow-ups that almost always help: \"too long, make it five lines\"; \"change the tone: more direct, less formal\"; \"point 3 is wrong, here is the correct information, redo it\"; \"give me three different versions\".\n\nThe highest-value follow-up comes before drafting: \"Before you write, tell me what information you are missing.\" It flips the exchange — Claude questions you, and usually points straight at the holes in your instruction.\n\nWhen an answer is completely off, do not stack corrections: restate the whole request. And keep your good instructions — a file with five that work will save you more time than any trick.",
    },
  ],
  example: {
    title: 'Typical case: the job ad that sounds like nobody',
    challenge:
      'The HR lead of a 20-person company in Cotonou needs to post an accountant role. "Write a job ad for an accountant" produces a flawless, entirely interchangeable ad that could belong to any company — and it attracts off-target applications.',
    solution:
      'He rewrites it with the four ingredients: a Beninese SME of 20 people distributing agricultural equipment, a sole accountant role requiring autonomy; one page maximum in four parts — company, mission, profile, how to apply; direct, concrete tone, no HR jargon; plus last year\'s logistics ad that brought good profiles, pasted as the model.',
    impact:
      'The new ad describes the real job — being alone on the finance function — instead of selling a generic environment. Candidates self-select earlier and screening gets faster. The five minutes spent on the instruction come back at sorting time, and the instruction is kept: the next hire only needs two lines changed.',
  },
  practice: {
    title: 'Rewrite one of your requests with the four ingredients',
    instructions: [
      'Pick a real written task from your week: an announcement, a summary, a follow-up, a note.',
      'In a first conversation, write the request as it comes to you, in one sentence. Keep the answer in view.',
      'Rewrite the same request in four to six lines, with context, task, format and an example of something you have already written. Do it in a new conversation, knowing memory may carry part of the context over: the comparison is about the instruction, not about starting from zero.',
      'Before letting it draft, add: "Before you write, tell me what information you are missing." Answer its questions, then let it write.',
    ],
    observation:
      'Put both answers side by side. How many corrections would the first have needed? The second? Note which ingredient changed the result most — in most cases it is the pasted example. If the enriched instruction works, save it somewhere: you will reuse it.',
  },
  quiz: [
    {
      question: 'What is the main weakness of "Write me a report on agriculture"?',
      options: [
        { key: 'A', text: 'It is too polite.' },
        { key: 'B', text: 'It says nothing about the audience, the purpose or the format, so the answer will be generic.' },
        { key: 'C', text: 'It is too long.' },
        { key: 'D', text: 'Claude cannot handle agricultural topics.' },
      ],
      answer: 'B',
      explanation:
        'With no context and no format, Claude fills the gaps with the average and produces a one-size-fits-all text. The topic is not the problem — the missing briefing is.',
    },
    {
      question: 'You want the output to sound like your organization. What works best?',
      options: [
        { key: 'A', text: 'Writing "write well" and "be professional" in the instruction.' },
        { key: 'B', text: 'Pasting a text you have already written and asking it to follow that style.' },
        { key: 'C', text: 'Repeating the request three times.' },
        { key: 'D', text: 'Writing the instruction in capital letters.' },
      ],
      answer: 'B',
      explanation:
        'The example is the most powerful and most underused ingredient. One real text conveys your style better than ten adjectives, which stay open to interpretation.',
    },
    {
      question: 'The answer is completely off topic. What is the right reflex?',
      options: [
        { key: 'A', text: 'Keep stacking corrections in the same thread until it lands.' },
        { key: 'B', text: 'Accept it and rewrite the whole thing yourself.' },
        { key: 'C', text: 'Restate the entire request with the four ingredients instead of stacking corrections.' },
        { key: 'D', text: 'Switch language and start again.' },
      ],
      answer: 'C',
      explanation:
        'Successive corrections are for adjusting a result that is already close. When the answer is off, they pull the thread in every direction — a complete restatement works better.',
    },
  ],
  reflection:
    'Which request comes back almost identically every week in your work? If you turned it into a reusable instruction once and for all, what should be fixed in it, and what will change every time?',
  glossary: [
    { term: 'Instruction (prompt)', definition: 'The message in which you ask Claude for something. A good one is a briefing, not a question thrown in passing.' },
    { term: 'Context', definition: 'Who you are, who the text is for, in what situation, and the material Claude cannot know: your notes, the dates, the figures. The most frequently skipped ingredient.' },
    { term: 'Format', definition: 'The expected shape: length, structure, tone, channel. Without it, Claude chooses — and it chooses long.' },
    { term: 'Example', definition: 'A text you have already produced, pasted as a model of style or structure. The most effective way to sound like yourself.' },
    { term: 'Follow-up', definition: 'A message sent to steer or correct Claude’s work: before it writes, to ask what information it is missing; after a first answer, to shorten, change the tone, fix a fact or ask for variants.' },
    { term: 'Reusable instruction', definition: 'An instruction that worked, kept in a file to be reused by changing only a few lines.' },
  ],
};

const lessonCl2Ha: LessonContent = {
  ...lessonCl2Fr,
  title: 'Rubuta bukata mai kyau',
  objective:
    'Bayan wannan darasi za ka iya juya bukata mara tabbas zuwa umarni bayyananne ta hanyar sinadarai hudu — mahalli, aiki, tsari, misali — kuma za ka iya sake tambaya don gyara amsa maimakon ka amshe ta yadda take.',
  content: [
    {
      title: 'Me ya sa bukata ta farko ke bata rai',
      body:
        'Watakila ka rubuta “rubuta sako na tunatarwa” sai ka samu rubutu daidai, mai ladabi, amma marar dandano. Wannan al’ada ce, ba laifin kayan aiki ba.\n\nIdan bukata ba ta bayyana ba, Claude ba ya hasashe: yana cike gurbi da matsakaici. Sakamakon ba ya kama da kai, ba ya kama da kungiyarka.\n\nBambanci tsakanin wanda ke ganin AI ba shi da amfani da wanda ke tanadar sa’o’i biyu a mako kusan ba kayan aiki ba ne — abin da ke cikin bukatar ne. Umarni kamar bayani ne da za ka ba wa sabon ma’aikaci mai iyawa.',
    },
    {
      title: 'Sinadarai hudu',
      body:
        'Mahalli — wane ne kai, ga wa kake rubutawa, a wane yanayi. Shi ne aka fi mantawa, kuma shi ne ya fi canza komai.\n\nAiki — kalma daya ta aiki, aiki daya a lokaci daya. Rubuta. Takaita. Kwatanta. Fassara. Gyara. Tara bukatu uku a sako daya yana bayar da amsoshi uku matsakaita.\n\nTsari — tsawo, tsari, salo, hanyar aikawa. “SMS na haruffa 300.” “Tebur mai ginshiki uku.” “Maki biyar.” Idan ba ka fada ba, Claude zai zaba maka, kuma zai zabi mai tsawo.\n\nMisali — shi aka fi mantawa amma ya fi karfi. Manna rubutun da ka riga ka yi ka ce “yi koyi da wannan salo”. Misali daya ya fi siffofi goma.\n\nTsarin bai damu ba; kasancewarsu duka ne ke da muhimmanci. Umarni mai kyau yakan zama layi hudu zuwa shida.',
    },
    {
      title: 'Kafin da bayan, a kan bukata ta gaskiya',
      body:
        'Kafin. “Rubuta sako don sanar da horo ga manoma.” Za ka samu sanarwa mai tsawo, ba kwanan wata, ba wuri. Ba za a iya amfani da ita ba.\n\nBayan. “Ni ce mai sadarwa a kungiyar manoman shinkafa kusa da Bamako. Muna horo kan ban ruwa ranar Asabar 12 ga Afrilu da karfe 9 na safe a ofishin kungiya. Rubuta sanarwa ga manoma 40 mambobinmu. Za a aika ta SMS da sakon murya, don haka haruffa 300 kacal, gajerun jimloli, faransanci mai sauki. Kwanan wata, lokaci da wuri su fara. Ga sakon bara da ya yi kyau: [manna].”\n\nBukata ta biyu tana daukar dakika arba’in kacal fiye da ta farko, amma tana bayar da rubutun da za a aika kai tsaye.',
    },
    {
      title: 'Sake tambaya: rabin aikin na biyu',
      body:
        'Amsa ta farko daftari ce, ba hukunci ba. Masu amfani da gaske ba sa rubuta cikakken umarni a karo na farko; suna gyara a musaya uku.\n\nHanyoyi hudu masu amfani: “ya yi tsawo, ka rage zuwa layi biyar”; “sauya salo: kai tsaye, ba na hukuma ba”; “batu na 3 ba gaskiya ba ne, ga daidai, ka sake”; “ka ba ni sigogi uku daban”.\n\nSake tambaya mafi riba ita ce kafin rubutu: “Kafin ka rubuta, ka gaya mini wane bayani ya rasa.” Tana juya musayar — Claude ne ke tambayarka, kuma yakan nuna gurbin umarninka.\n\nIdan amsar ta yi nisa da batun, kar ka tara gyare-gyare: sake fadin bukatar gaba daya. Kuma ka ajiye umarnan da suka yi aiki — fayil da umarni biyar masu kyau zai fi kowace dabara.',
    },
  ],
  example: {
    title: 'Misali: sanarwar aikin da ba ta kama da kowa',
    challenge:
      'Shugaban ma’aikata a kamfani mai mutum ashirin a Cotonou na bukatar sanarwar aikin akanta. “Rubuta sanarwar aikin akanta” ya bayar da sanarwa mai kyau amma ta kowa — ta jawo takardun neman aiki da ba su dace ba.',
    solution:
      'Ya sake rubutawa da sinadarai hudu: kamfani na Benin mai mutum 20 da ke sayar da kayan noma, akanta daya tilo don haka sai mai iya aiki da kansa; shafi daya, kashi hudu — kamfani, aiki, bayanin da ake nema, yadda za a nema; salo kai tsaye ba na hukuma ba; sannan ya manna sanarwar bara da ta jawo kyawawan mutane.',
    impact:
      'Sabuwar sanarwa ta bayyana ainihin aikin maimakon siffar gama-gari. Masu nema sun zabi kansu tun farko, kuma tantancewa ta yi sauri. Mintuna biyar da aka kashe kan umarnin sun dawo a lokacin tantancewa, kuma an ajiye umarnin don gaba.',
  },
  practice: {
    title: 'Sake rubuta daya daga cikin bukatunka da sinadarai hudu',
    instructions: [
      'Zabi aikin rubutu na gaske na makonka: sanarwa, takaitaccen rahoto, tunatarwa ko takarda.',
      'A tattaunawa ta farko, rubuta bukatar yadda ta zo maka, jimla daya. Ka rike amsar a gaba.',
      'Sake rubuta bukatar a layi hudu zuwa shida, da mahalli, aiki, tsari da misali daga rubutunka. Ka yi shi a sabuwar tattaunawa, kuma ka sani tunani na iya kawo wani sashe na mahalli: kwatancin ya shafi umarnin, ba farawa daga sifili ba.',
      'Kafin ka bar shi ya rubuta, ka kara: “Kafin ka rubuta, ka gaya mini wane bayani ya rasa.” Ka amsa tambayoyinsa, sannan ka bar shi ya rubuta.',
    ],
    observation:
      'Ka kwatanta amsoshin biyu gefe da gefe. Nawa gyara na farko zai bukata? Na biyu fa? Ka lura wane sinadari ne ya fi canza sakamako — galibi misalin da aka manna. Idan umarnin ya yi aiki, ka ajiye shi: zai sake amfani.',
  },
  quiz: [
    {
      question: 'Menene babbar matsalar bukatar “Rubuta mini rahoto kan noma”?',
      options: [
        { key: 'A', text: 'Tana da ladabi da yawa.' },
        { key: 'B', text: 'Ba ta fadi ga wa ba, don me ba, ko a wane tsari ba: amsar za ta zama ta gama-gari.' },
        { key: 'C', text: 'Ta yi tsawo.' },
        { key: 'D', text: 'Claude ba ya iya batun noma.' },
      ],
      answer: 'B',
      explanation:
        'Ba tare da mahalli da tsari ba, Claude na cike gurbi da matsakaici ya bayar da rubutun kowa. Ba batun ba ne matsalar, rashin bayani ne.',
    },
    {
      question: 'Kana son rubutun ya yi kama da kungiyarka. Wace hanya ce ta fi tasiri?',
      options: [
        { key: 'A', text: 'Rubuta “ka rubuta da kyau” da “ka zama mai sana’a”.' },
        { key: 'B', text: 'Manna rubutun da ka riga ka yi ka nemi ya yi koyi da salon.' },
        { key: 'C', text: 'Maimaita bukatar sau uku.' },
        { key: 'D', text: 'Rubuta umarnin da manyan haruffa.' },
      ],
      answer: 'B',
      explanation:
        'Misali shi ne sinadari mafi karfi kuma aka fi mantawa. Rubutu daya na gaske ya fi siffofi goma isar da salonka.',
    },
    {
      question: 'Amsar ta yi nisa gaba daya da batun. Menene daidai?',
      options: [
        { key: 'A', text: 'Ci gaba da tara gyare-gyare a fil daya har sai ya dace.' },
        { key: 'B', text: 'Amshe amsar ka sake rubuta komai da kanka.' },
        { key: 'C', text: 'Sake fadin bukatar gaba daya da sinadarai hudu maimakon tara gyare-gyare.' },
        { key: 'D', text: 'Sauya harshe ka sake farawa.' },
      ],
      answer: 'C',
      explanation:
        'Gyare-gyare suna aiki ne idan sakamako ya kusa. Idan amsar ta yi nisa, suna jan fil zuwa kowace hanya — gara a sake fadin bukatar gaba daya.',
    },
  ],
  reflection:
    'Wace bukata ce ke dawowa kusan iri daya duk mako a aikinka? Idan za ka mai da ita umarni mai sake amfani, wane sashe ne zai tsaya haka, wane kuma zai sauya kowane lokaci?',
  glossary: [
    { term: 'Umarni (prompt)', definition: 'Sakon da kake nema wa Claude wani abu. Umarni mai kyau bayani ne, ba tambaya ta wucewa ba.' },
    { term: 'Mahalli', definition: 'Wane ne kai, ga wa kake rubutawa da a wane yanayi. Shi aka fi mantawa.' },
    { term: 'Tsari', definition: 'Siffar da ake so: tsawo, tsari, salo, hanyar aikawa. Idan ba ka fada ba, Claude zai zabi mai tsawo.' },
    { term: 'Misali', definition: 'Rubutun da ka riga ka yi, aka manna a matsayin abin koyi na salo ko tsari. Hanya mafi tasiri.' },
    { term: 'Sake tambaya', definition: 'Sakon gyara bayan amsa ta farko: rage tsawo, sauya salo, gyara bayani, neman sigogi daban.' },
    { term: 'Umarni mai sake amfani', definition: 'Umarnin da ya yi aiki, aka ajiye a fayil don sake amfani da sauya layi kadan.' },
  ],
};

export const claudeLesson2ByLanguage: Record<Language, LessonContent> = {
  fr: lessonCl2Fr,
  en: lessonCl2En,
  ha: lessonCl2Ha,
};
