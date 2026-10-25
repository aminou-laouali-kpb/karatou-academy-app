import { Language } from '../../translations';
import { LessonContent } from '../../lessonContent';

// Module « IA pour l'administration » (ia-administration) — leçon ad2 (Notes de réunion → procès-verbal)
// Texte aligné sur le CLAUDE.md de production vidéo du cours 13 (docs/production-video/claude-md/).
// Trilingue FR / EN / HA. ⚠️ Traductions HA à faire valider par un locuteur natif haoussa.
export const adLesson2: Record<Language, LessonContent> = {
  "fr": {
    "id": "ad2",
    "lessonNumber": 2,
    "title": "Transformer vos notes de réunion en procès-verbal avec l’IA",
    "objective": "À la fin de cette leçon, vous saurez transformer vos notes de réunion en procès-verbal fidèle, prêt à valider. Vous saurez distinguer le compte rendu, qui informe, du procès-verbal, qui fait foi une fois signé. Vous saurez préparer vos notes sans aucune donnée personnelle, faire rédiger le brouillon avec une consigne RCTF qui interdit à l’IA d’ajouter quoi que ce soit, puis vérifier chaque décision et terminer par un tableau des actions (qui, quoi, quand) à soumettre au président de séance.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Compte rendu ou procès-verbal : ce qui fait foi une fois signé",
        "body": "Après une réunion, deux documents peuvent être produits, et ils n’ont pas la même portée. Le compte rendu informe : il raconte l’essentiel à ceux qui étaient absents, comme le résumé qu’un voisin vous fait d’une assemblée de quartier. Le procès-verbal, qu’on abrège souvent en « PV », constate officiellement les débats et les décisions. Une fois signé, il fait foi : c’est la trace qu’on ressortira si une décision est contestée, comme le reçu signé qu’on garde après un gros achat au marché.\n\nCette différence change tout pour l’usage de l’IA. Une phrase approximative dans un compte rendu est gênante ; une décision inventée ou oubliée dans un procès-verbal engage des services, crée des malentendus et parfois des conflits. Qu’il s’agisse du conseil municipal d’une commune du Burkina Faso, du comité de pilotage d’un projet d’adduction d’eau au Togo ou d’une réunion de direction dans un ministère au Maroc, le PV signé devient la référence commune : chacun s’y reporte pour savoir ce qui a été décidé, et qui doit agir.\n\nChaque administration a ses habitudes. Beaucoup de services d’Afrique francophone ouvrent le PV par une formule du type « L’an deux mille vingt-six, le…, s’est tenue… sous la présidence de… » ; d’autres utilisent des rubriques numérotées ou un tableau. Certains appellent « compte rendu » ce que d’autres nomment « procès-verbal ». La règle est simple : le modèle de votre service prime. Vous le donnerez à l’IA, sans aucun nom, pour qu’elle en suive la présentation."
      },
      {
        "title": "Avant l’IA : enregistrement, confidentialité et fonctions à la place des noms",
        "body": "Face à trois pages de notes, la tentation est forte : « La prochaine fois, enregistre la réunion, et l’IA écrira tout. » Avant d’y penser, trois vérifications s’imposent. Enregistrer une réunion exige l’accord des participants. Cela doit respecter les règles de votre service et les textes de la fonction publique de votre pays, notamment l’obligation de discrétion professionnelle. Et une réunion sensible (dossiers du personnel, contentieux, sécurité, projets internes non publics) n’a rien à faire dans un outil grand public, même gratuit et pratique.\n\nEnsuite, une transcription n’est pas un procès-verbal. Une transcription reprend tout, mot pour mot, avec les hésitations et les digressions. Le procès-verbal trie : il retient les points de l’ordre du jour, les positions exprimées et surtout les décisions. Ce tri, c’est votre métier de secrétaire de séance. Vos notes, prises en direct par quelqu’un qui connaît le service, sont souvent une meilleure base qu’un enregistrement complet.\n\nAvant de coller vos notes dans Gemini, Claude ou ChatGPT, remplacez chaque nom de personne par sa fonction : « Chef du service de l’hydraulique », « Représentant de la mairie », « ONG A ». Retirez aussi les numéros de téléphone, les montants individuels et toute information sur un usager. Les noms reviendront plus tard, dans le document final, hors de l’outil. C’est le même filtre que pour le courrier de la Leçon 1 : passent les fonctions, les éléments anonymisés et les textes publics ; ne passent jamais les données personnelles ni les documents non publics."
      },
      {
        "title": "Rien que vos notes : une consigne RCTF qui interdit à l’IA d’inventer",
        "body": "L’IA met en forme ; elle ne doit rien ajouter. C’est comme confier votre tissu à un tailleur : il coupe et coud ce que vous lui apportez, il ne rajoute pas un pan d’étoffe venu d’ailleurs. Or un assistant conversationnel a tendance à « arranger » : il complète une décision qui lui semble logique, il donne une heure plausible, il prête à un participant une position qu’il n’a jamais exprimée. Votre consigne doit l’en empêcher, noir sur blanc.\n\nLa méthode RCTF (Rôle, Contexte, Tâche, Format) s’en charge. Rôle : « tu es secrétaire de séance dans une administration publique ». Contexte : vos notes, avec les fonctions à la place des noms. Tâche : « rédige le brouillon du procès-verbal, dans un style neutre, à la troisième personne. N’ajoute rien qui ne figure pas dans mes notes. Si une information manque, écris [À COMPLÉTER] ». Format : date et lieu, participants, ordre du jour, déroulement point par point, décisions, tableau des actions, levée de séance, selon le modèle de votre service collé sans noms. La mention « [À COMPLÉTER] » est votre filet de sécurité : elle rend visible ce qui manque au lieu de le laisser inventer.\n\nMême avec cette consigne, relisez. Comparez chaque décision du brouillon avec vos notes, une par une. Si le brouillon affirme « Il a été décidé de reporter la campagne » alors que vos notes n’en disent rien, vous supprimez la phrase, ou vous la faites confirmer par le président de séance. Un procès-verbal ne contient que ce qui a été dit et décidé. Et chaque « [À COMPLÉTER] » se remplit à partir d’une source fiable : votre agenda, la liste de présence, l’ordre du jour envoyé."
      },
      {
        "title": "Qui, quoi, quand : le tableau des actions et le circuit de validation",
        "body": "Un bon procès-verbal se termine par un tableau des actions à trois colonnes : l’action, le responsable, l’échéance. Par exemple : « Transmettre la liste des forages à réhabiliter — Chef du service de l’hydraulique — avant le 15 du mois prochain ». C’est comme le cahier de la tontine où l’on note qui doit cotiser et pour quand : sans lui, chacun se souvient à sa façon.\n\nCe tableau est l’outil de suivi. À la réunion suivante, on le relit ligne par ligne : fait, en cours, pas commencé. Une direction départementale au Mali, une mairie en Guinée ou une équipe de projet au Kenya peuvent ainsi ouvrir chaque réunion par le point sur les actions, au lieu de tout rediscuter. Si une action n’a ni responsable ni échéance dans vos notes, le brouillon doit afficher « [À COMPLÉTER] » : c’est au président de séance de trancher, pas à l’IA.\n\nVient ensuite la chaîne de validation. Vous vérifiez le brouillon de l’IA ; vous copiez le texte dans le modèle du service et vous remettez les noms ; le président de séance relit et valide ; puis viennent les signatures, celles du président et du secrétaire de séance, et l’enregistrement. L’IA a préparé un brouillon ; c’est vous qui vérifiez, et ce sont les signataires qui engagent le service."
      }
    ],
    "example": {
      "title": "Zeinabou, à Tahoua : du cahier de notes au procès-verbal signé",
      "challenge": "À la direction régionale fictive de Tahoua (Niger), la réunion de coordination a eu lieu : la lettre d’invitation préparée en Leçon 1 est partie sans rien divulguer. Dix participants, trois points à l’ordre du jour. Zeinabou, secrétaire de direction et secrétaire de séance, a trois pages de notes. Le procès-verbal doit être signé par le président de séance et par elle. Un collègue lui conseille d’enregistrer la prochaine réunion et de laisser l’IA tout écrire. Mais un PV engage les services : une décision inventée ou oubliée créerait des conflits.",
      "solution": "Zeinabou remplace d’abord chaque nom par une fonction dans ses notes. Dans Gemini, version gratuite, elle colle la consigne RCTF : le Rôle de secrétaire de séance ; le Contexte avec ses notes anonymisées ; la Tâche, qui interdit d’ajouter quoi que ce soit et impose « [À COMPLÉTER] » ; le Format, avec le modèle de PV du service sans noms. Le brouillon suit la structure attendue : participants, ordre du jour, déroulement, décisions, tableau des actions, dans un ton neutre, à la troisième personne. Une mention « [À COMPLÉTER] » signale l’heure de levée de séance, absente des notes : elle la retrouve dans son agenda. Elle compare ensuite chaque décision du brouillon avec ses notes, une par une. Enfin, elle copie le texte dans le modèle du service, remet les noms hors de l’outil et transmet le tout au président de séance pour validation.",
      "impact": "Le procès-verbal est validé puis signé par le président de séance et par Zeinabou, sans décision ajoutée ni oubliée, et sans qu’aucun nom ne soit passé par l’outil. À la réunion suivante, le suivi part directement du tableau des actions : chaque responsable fait le point sur sa ligne."
    },
    "practice": {
      "title": "Transformez vos notes en procès-verbal",
      "instructions": [
        "Reprenez les notes d’une réunion récente et non confidentielle, ou les notes fictives fournies avec le cours. Remplacez chaque nom par une fonction (par exemple « Chef du service de l’hydraulique », « Représentant de la mairie ») et retirez toute donnée personnelle.",
        "Ouvrez Gemini, Claude ou ChatGPT et remplissez les quatre blocs de cette consigne : « Rôle : tu es secrétaire de séance dans une administration publique. Contexte : voici mes notes d’une réunion. Les participants sont désignés par leur fonction. Notes : [collez vos notes, sans noms ni données personnelles]. Tâche : rédige le brouillon du procès-verbal, dans un style neutre, à la troisième personne. N’ajoute rien qui ne figure pas dans mes notes. Si une information manque, écris [À COMPLÉTER]. Format : date et lieu, participants (fonctions), ordre du jour, déroulement point par point, décisions, tableau des actions (action, responsable, échéance), levée de séance. Suis la présentation de ce modèle de mon service : [collez un modèle de PV sans noms]. » Puis comparez chaque décision du brouillon avec vos notes, une par une.",
        "Complétez chaque « [À COMPLÉTER] » à partir d’une source fiable (agenda, liste de présence), copiez le texte dans le modèle de PV de votre service, remettez les noms hors de l’outil et transmettez le document au président de séance pour validation."
      ],
      "observation": "Vous devez constater que le brouillon reprend la structure de votre modèle et se termine par un tableau des actions, que les informations absentes de vos notes apparaissent en « [À COMPLÉTER] » au lieu d’être inventées, et que chaque décision du brouillon se retrouve dans vos notes. Si une phrase n’a aucune source dans vos notes, vous l’avez supprimée ou signalée au président de séance : le PV reste votre travail, l’IA n’a fait que la mise en forme."
    },
    "quiz": [
      {
        "question": "Quelle est la différence entre un compte rendu et un procès-verbal ?",
        "options": [
          { "key": "A", "text": "Aucune, ce sont deux noms du même document" },
          { "key": "B", "text": "Le compte rendu informe ; le procès-verbal constate officiellement débats et décisions" },
          { "key": "C", "text": "Le procès-verbal est toujours plus court" },
          { "key": "D", "text": "Le compte rendu doit être signé par tous les participants" }
        ],
        "answer": "B",
        "explanation": "Le compte rendu sert à informer, notamment les absents. Le procès-verbal constate officiellement les débats et les décisions, et fait foi une fois signé par le président et le secrétaire de séance. C’est pourquoi il ne tolère aucune décision inventée ou oubliée."
      },
      {
        "question": "Le brouillon contient une décision absente de vos notes. Que faites-vous ?",
        "options": [
          { "key": "A", "text": "Vous la gardez, elle semble logique" },
          { "key": "B", "text": "Vous la mettez en gras" },
          { "key": "C", "text": "Vous la supprimez, ou vous la faites confirmer par le président de séance" },
          { "key": "D", "text": "Vous l’ajoutez au tableau des actions" }
        ],
        "answer": "C",
        "explanation": "Un procès-verbal ne contient que ce qui a été dit et décidé. Une décision qui « semble logique » mais n’apparaît pas dans vos notes a peut-être été ajoutée par l’IA : vous la retirez, ou vous la faites confirmer par le président de séance avant de la garder."
      },
      {
        "question": "Que contient le tableau qui termine le procès-verbal ?",
        "options": [
          { "key": "A", "text": "L’action, le responsable et l’échéance" },
          { "key": "B", "text": "Les numéros de téléphone des participants" },
          { "key": "C", "text": "Les opinions de la secrétaire" },
          { "key": "D", "text": "Le budget de l’année" }
        ],
        "answer": "A",
        "explanation": "Le tableau des actions répond à trois questions : qui fait quoi, et pour quand. On le relit à la réunion suivante pour suivre l’avancement. Les numéros de téléphone n’ont rien à y faire, et encore moins dans un outil d’IA grand public."
      },
      {
        "question": "L’heure de fin manque dans vos notes. Que demande la consigne à l’IA ?",
        "options": [
          { "key": "A", "text": "De la deviner" },
          { "key": "B", "text": "De mettre une heure plausible" },
          { "key": "C", "text": "De supprimer la rubrique" },
          { "key": "D", "text": "D’écrire « [À COMPLÉTER] »" }
        ],
        "answer": "D",
        "explanation": "Le bloc Tâche de la consigne RCTF demande d’écrire « [À COMPLÉTER] » quand une information manque. Le trou devient visible, et vous le comblez ensuite à partir d’une source fiable, comme votre agenda. Une heure « plausible » serait une invention dans un document qui fait foi."
      },
      {
        "question": "Un collègue propose d’enregistrer la prochaine réunion et de confier l’enregistrement à un outil grand public. Que vérifiez-vous d’abord ?",
        "options": [
          { "key": "A", "text": "La qualité du micro" },
          { "key": "B", "text": "L’accord des participants, les règles du service et la sensibilité de la réunion" },
          { "key": "C", "text": "La durée de la réunion" },
          { "key": "D", "text": "Rien, c’est plus rapide" }
        ],
        "answer": "B",
        "explanation": "Enregistrer exige l’accord des participants et le respect des règles du service et des textes de la fonction publique de votre pays. Et une réunion sensible ne doit jamais passer par un outil grand public. La rapidité ou la qualité du son ne viennent qu’après ces vérifications."
      }
    ],
    "reflection": "Dans votre service, quelles réunions pourriez-vous transformer en procès-verbal de cette façon, et lesquelles sont trop sensibles pour entrer dans un outil d’IA grand public, même avec des fonctions à la place des noms ?",
    "glossary": [
      { "term": "Procès-verbal (PV)", "definition": "Document qui constate officiellement les débats et les décisions d’une réunion. Une fois signé par le président et le secrétaire de séance, il fait foi et sert de référence en cas de contestation." },
      { "term": "Compte rendu", "definition": "Document qui informe, notamment les absents, de l’essentiel d’une réunion. Il n’a pas la valeur officielle d’un procès-verbal ; le modèle de votre service précise l’usage de chacun." },
      { "term": "Secrétaire de séance", "definition": "Personne chargée de prendre les notes pendant la réunion et de rédiger le procès-verbal, qu’elle signe avec le président de séance." },
      { "term": "Président de séance", "definition": "Personne qui dirige la réunion. Elle relit et valide le procès-verbal avant les signatures, et tranche quand une décision ou une information est incertaine." },
      { "term": "[À COMPLÉTER]", "definition": "Mention que la consigne demande à l’IA d’écrire quand une information manque dans vos notes. Elle rend le manque visible au lieu de laisser l’IA inventer ; vous la remplacez ensuite à partir d’une source fiable." },
      { "term": "Tableau des actions", "definition": "Tableau qui termine le procès-verbal, avec trois colonnes : l’action, le responsable, l’échéance. On le relit à la réunion suivante pour suivre ce qui a été fait." }
    ]
  },
  "en": {
    "id": "ad2",
    "lessonNumber": 2,
    "title": "Turning your meeting notes into official minutes with AI",
    "objective": "By the end of this lesson, you will be able to turn your meeting notes into faithful official minutes, ready for approval. You will know the difference between a meeting summary, which informs, and official minutes, which become authoritative once signed. You will be able to prepare your notes without any personal data, have the draft written with an RCTF prompt that forbids the AI to add anything, then check every decision and finish with an action table (who, what, by when) to submit to the chair.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Meeting summary or official minutes: what becomes authoritative once signed",
        "body": "After a meeting, two documents can be produced, and they do not carry the same weight. The meeting summary informs: it tells those who were absent what mattered, like the recap a neighbour gives you of a neighbourhood assembly. Official minutes (called « procès-verbal », often shortened to « PV », in French-speaking administrations) formally record the discussions and the decisions. Once signed, they are authoritative: they are what people pull out if a decision is disputed, like the signed receipt you keep after a big purchase at the market.\n\nThis difference changes everything when you use AI. A loose sentence in a summary is awkward; an invented or forgotten decision in official minutes commits departments, creates misunderstandings and sometimes conflicts. Whether it is the municipal council of a town in Burkina Faso, the steering committee of a water-supply project in Togo or a management meeting in a ministry in Morocco, the signed minutes become the shared reference: everyone turns to them to know what was decided, and who must act.\n\nEvery administration has its habits. Many French-speaking African services open the minutes with a formula such as « In the year two thousand and twenty-six, on…, a meeting was held… chaired by… »; others use numbered headings or a table. Some call « summary » what others call « minutes ». The rule is simple: your department’s template comes first. You will give it to the AI, without any names, so that it follows its layout."
      },
      {
        "title": "Before using AI: recording, confidentiality and job titles instead of names",
        "body": "Faced with three pages of notes, the temptation is strong: « Next time, record the meeting and the AI will write everything. » Before you even consider it, three checks are needed. Recording a meeting requires the participants’ consent. It must respect your department’s rules and your country’s civil service regulations, in particular the duty of professional discretion. And a sensitive meeting (staff files, litigation, security, non-public internal projects) has no place in a consumer tool, however free and convenient.\n\nNext, a transcript is not official minutes. A transcript keeps everything, word for word, with hesitations and digressions. Minutes select: they keep the agenda items, the positions expressed and above all the decisions. That selection is your job as meeting secretary. Your notes, taken live by someone who knows the department, are often a better basis than a full recording.\n\nBefore pasting your notes into Gemini, Claude or ChatGPT, replace every person’s name with their job title: « Head of the water department », « Representative of the town hall », « NGO A ». Also remove phone numbers, individual amounts and any information about a member of the public. The names will come back later, in the final document, outside the tool. It is the same filter as for the letter in Lesson 1: job titles, anonymised elements and public texts go through; personal data and non-public documents never do."
      },
      {
        "title": "Nothing but your notes: an RCTF prompt that forbids the AI to invent",
        "body": "The AI formats; it must not add anything. It is like taking your fabric to a tailor: he cuts and sews what you bring him, he does not add a piece of cloth from somewhere else. Yet a chat assistant tends to « tidy up »: it completes a decision that seems logical to it, it gives a plausible time, it attributes to a participant a position they never expressed. Your prompt must prevent this, in black and white.\n\nThe RCTF method (Role, Context, Task, Format) takes care of it. Role: « you are the meeting secretary in a public administration ». Context: your notes, with job titles instead of names. Task: « write the draft of the official minutes, in a neutral style, in the third person. Do not add anything that is not in my notes. If a piece of information is missing, write [TO BE COMPLETED] ». Format: date and place, participants, agenda, item-by-item proceedings, decisions, action table, close of the meeting, following your department’s template pasted without names. The « [TO BE COMPLETED] » marker is your safety net: it makes what is missing visible instead of letting it be invented.\n\nEven with this prompt, read it again. Compare each decision in the draft with your notes, one by one. If the draft states « It was decided to postpone the campaign » while your notes say nothing of the kind, you delete the sentence, or you have the chair confirm it. Official minutes contain only what was said and decided. And every « [TO BE COMPLETED] » is filled in from a reliable source: your diary, the attendance list, the agenda that was sent out."
      },
      {
        "title": "Who, what, by when: the action table and the approval chain",
        "body": "Good minutes end with a three-column action table: the action, the person responsible, the deadline. For example: « Send the list of boreholes to be repaired — Head of the water department — before the 15th of next month ». It is like the savings-group notebook where you write down who must contribute and by when: without it, everyone remembers in their own way.\n\nThis table is the follow-up tool. At the next meeting, it is read line by line: done, in progress, not started. A district office in Mali, a town hall in Guinea or a project team in Kenya can open every meeting with a review of the actions, instead of discussing everything again. If an action has neither a person responsible nor a deadline in your notes, the draft must show « [TO BE COMPLETED] »: it is up to the chair to decide, not the AI.\n\nThen comes the approval chain. You check the AI’s draft; you copy the text into the department’s template and put the names back; the chair reads and approves; then come the signatures, those of the chair and of the meeting secretary, and the registration. The AI prepared a draft; you are the one who checks, and the signatories are the ones who commit the department."
      }
    ],
    "example": {
      "title": "Zeinabou, in Tahoua: from notebook to signed official minutes",
      "challenge": "At a fictional regional directorate in Tahoua (Niger), the coordination meeting has taken place: the invitation letter prepared in Lesson 1 went out without disclosing anything. Ten participants, three items on the agenda. Zeinabou, executive secretary and meeting secretary, has three pages of notes. The official minutes must be signed by the chair and by her. A colleague advises her to record the next meeting and let the AI write everything. But minutes commit departments: an invented or forgotten decision would create conflicts.",
      "solution": "Zeinabou first replaces every name with a job title in her notes. In Gemini, free version, she pastes the RCTF prompt: the Role of meeting secretary; the Context with her anonymised notes; the Task, which forbids adding anything and requires « [TO BE COMPLETED] »; the Format, with the department’s minutes template without names. The draft follows the expected structure: participants, agenda, proceedings, decisions, action table, in a neutral tone, in the third person. A « [TO BE COMPLETED] » marker flags the time the meeting closed, which is missing from the notes: she finds it in her diary. She then compares each decision in the draft with her notes, one by one. Finally, she copies the text into the department’s template, puts the names back outside the tool and sends everything to the chair for approval.",
      "impact": "The official minutes are approved and then signed by the chair and by Zeinabou, with no decision added or forgotten, and without a single name going through the tool. At the next meeting, the follow-up starts directly from the action table: each person responsible reports on their line."
    },
    "practice": {
      "title": "Turn your notes into official minutes",
      "instructions": [
        "Take the notes from a recent, non-confidential meeting, or the fictional notes provided with the course. Replace every name with a job title (for example « Head of the water department », « Representative of the town hall ») and remove any personal data.",
        "Open Gemini, Claude or ChatGPT and fill in the four blocks of this prompt: « Role: you are the meeting secretary in a public administration. Context: here are my notes from a meeting. Participants are referred to by their job title. Notes: [paste your notes, without names or personal data]. Task: write the draft of the official minutes, in a neutral style, in the third person. Do not add anything that is not in my notes. If a piece of information is missing, write [TO BE COMPLETED]. Format: date and place, participants (job titles), agenda, item-by-item proceedings, decisions, action table (action, person responsible, deadline), close of the meeting. Follow the layout of this template from my department: [paste a minutes template without names]. » Then compare each decision in the draft with your notes, one by one.",
        "Fill in every « [TO BE COMPLETED] » from a reliable source (diary, attendance list), copy the text into your department’s minutes template, put the names back outside the tool and send the document to the chair for approval."
      ],
      "observation": "You should see that the draft follows the structure of your template and ends with an action table, that information missing from your notes appears as « [TO BE COMPLETED] » instead of being invented, and that every decision in the draft can be found in your notes. If a sentence has no source in your notes, you have deleted it or flagged it to the chair: the minutes remain your work, and the AI only did the formatting."
    },
    "quiz": [
      {
        "question": "What is the difference between a meeting summary and official minutes?",
        "options": [
          { "key": "A", "text": "None, they are two names for the same document" },
          { "key": "B", "text": "The summary informs; the minutes formally record discussions and decisions" },
          { "key": "C", "text": "The minutes are always shorter" },
          { "key": "D", "text": "The summary must be signed by all participants" }
        ],
        "answer": "B",
        "explanation": "The meeting summary is there to inform, especially those who were absent. Official minutes formally record the discussions and decisions, and become authoritative once signed by the chair and the meeting secretary. That is why they cannot tolerate any invented or forgotten decision."
      },
      {
        "question": "The draft contains a decision that is not in your notes. What do you do?",
        "options": [
          { "key": "A", "text": "You keep it, it seems logical" },
          { "key": "B", "text": "You put it in bold" },
          { "key": "C", "text": "You delete it, or you have the chair confirm it" },
          { "key": "D", "text": "You add it to the action table" }
        ],
        "answer": "C",
        "explanation": "Official minutes contain only what was said and decided. A decision that « seems logical » but does not appear in your notes may have been added by the AI: you remove it, or you have the chair confirm it before keeping it."
      },
      {
        "question": "What does the table at the end of the official minutes contain?",
        "options": [
          { "key": "A", "text": "The action, the person responsible and the deadline" },
          { "key": "B", "text": "The participants’ phone numbers" },
          { "key": "C", "text": "The secretary’s opinions" },
          { "key": "D", "text": "The year’s budget" }
        ],
        "answer": "A",
        "explanation": "The action table answers three questions: who does what, and by when. It is read again at the next meeting to follow progress. Phone numbers have no place in it, let alone in a consumer AI tool."
      },
      {
        "question": "The closing time is missing from your notes. What does the prompt ask the AI to do?",
        "options": [
          { "key": "A", "text": "Guess it" },
          { "key": "B", "text": "Put a plausible time" },
          { "key": "C", "text": "Delete the heading" },
          { "key": "D", "text": "Write « [TO BE COMPLETED] »" }
        ],
        "answer": "D",
        "explanation": "The Task block of the RCTF prompt asks the AI to write « [TO BE COMPLETED] » when information is missing. The gap becomes visible, and you then fill it from a reliable source, such as your diary. A « plausible » time would be an invention in a document that is authoritative."
      },
      {
        "question": "A colleague suggests recording the next meeting and handing the recording to a consumer tool. What do you check first?",
        "options": [
          { "key": "A", "text": "The quality of the microphone" },
          { "key": "B", "text": "The participants’ consent, the department’s rules and how sensitive the meeting is" },
          { "key": "C", "text": "The length of the meeting" },
          { "key": "D", "text": "Nothing, it is faster" }
        ],
        "answer": "B",
        "explanation": "Recording requires the participants’ consent and compliance with the department’s rules and your country’s civil service regulations. And a sensitive meeting must never go through a consumer tool. Speed or sound quality only come after these checks."
      }
    ],
    "reflection": "In your department, which meetings could you turn into official minutes this way, and which ones are too sensitive to go into a consumer AI tool, even with job titles instead of names?",
    "glossary": [
      { "term": "Official minutes (procès-verbal, PV)", "definition": "A document that formally records the discussions and decisions of a meeting. Once signed by the chair and the meeting secretary, it is authoritative and serves as the reference if anything is disputed." },
      { "term": "Meeting summary", "definition": "A document that informs people, especially those who were absent, of what mattered in a meeting. It does not have the official value of minutes; your department’s template specifies how each is used." },
      { "term": "Meeting secretary", "definition": "The person in charge of taking notes during the meeting and drafting the official minutes, which they sign together with the chair." },
      { "term": "Chair", "definition": "The person who leads the meeting. They read and approve the minutes before the signatures, and decide when a decision or a piece of information is uncertain." },
      { "term": "[TO BE COMPLETED]", "definition": "A marker the prompt asks the AI to write when a piece of information is missing from your notes. It makes the gap visible instead of letting the AI invent; you then replace it using a reliable source." },
      { "term": "Action table", "definition": "The table that ends the official minutes, with three columns: the action, the person responsible, the deadline. It is read again at the next meeting to follow up on what has been done." }
    ]
  },
  "ha": {
    "id": "ad2",
    "lessonNumber": 2,
    "title": "Mayar da Bayanan Taro zuwa Procès-verbal da AI",
    "objective": "A karshen wannan darasi, za ku san yadda ake mayar da bayanan da kuka rubuta a taro zuwa procès-verbal (PV) mai aminci, shirye don amincewa. Za ku san bambanci tsakanin compte rendu (rahoton taro), wanda ke sanar da mutane, da procès-verbal, wanda ke zama shaida ta hukuma idan an sa masa hannu. Za ku iya shirya bayananku ba tare da wani bayanin sirri na mutane ba, ku sa AI ya rubuta daftari da umurnin RCTF da ya hana shi kara komai, sannan ku duba kowace shawara da aka yanke, ku kammala da teburin ayyuka (wa, me, yaushe) don mika wa shugaban zaman taro.",
    "video": {
      "fr": "",
      "en": "",
      "ha": ""
    } /* TODO: URL NotebookLM/YouTube — format https://www.youtube.com/embed/VIDEO_ID */,
    "content": [
      {
        "title": "Compte rendu ko procès-verbal: abin da ke zama shaida idan an sa hannu",
        "body": "Bayan taro, ana iya rubuta takardu biyu, kuma ba su da nauyi iri daya. Compte rendu (rahoton taro) yana sanarwa: yana ba wadanda ba su halarta ba labarin muhimman abubuwa, kamar yadda makwabci ke ba ku takaitaccen labarin taron unguwa. Procès-verbal, wanda ake takaitawa da « PV », yana tabbatar da muhawara da shawarwarin da aka yanke a hukumance. Idan an sa masa hannu, ya zama shaida: shi ne za a fito da shi idan aka yi jayayya kan wata shawara, kamar rasit mai sa hannu da kuke ajiyewa bayan babban siyayya a kasuwa.\n\nWannan bambanci yana canza komai wajen amfani da AI. Jumla mara daidai a cikin compte rendu abin damuwa ne; amma shawarar da aka kirkira ko aka manta a cikin procès-verbal tana daure sassan gwamnati, tana haifar da rashin fahimta, wani lokaci har da rikici. Ko majalisar wata karamar hukuma ce a Burkina Faso, ko kwamitin gudanar da aikin samar da ruwan sha a Togo, ko taron shugabanci a wata ma’aikatar gwamnati a Maroko, PV da aka sa wa hannu ya zama abin dogaro ga kowa: kowa yana komawa gare shi don sanin abin da aka yanke, da wanda zai aiwatar.\n\nKowace hukuma tana da al’adarta. Sassa da dama a kasashen Afirka masu amfani da Faransanci suna bude PV da jumla kamar « L’an deux mille vingt-six, le…, s’est tenue… sous la présidence de… »; wasu kuma suna amfani da kanun bayanai masu lambobi ko tebur. Wasu suna kiran « compte rendu » abin da wasu ke kira « procès-verbal ». Ka’idar a saukake take: samfurin sashenku shi ne a gaba. Za ku ba AI shi, ba tare da ko suna daya ba, don ya bi tsarinsa."
      },
      {
        "title": "Kafin AI: nadar murya, sirri, da mukamai a madadin sunaye",
        "body": "Idan kuna da shafuka uku na bayanai, sha’awar tana da karfi: « Lokaci na gaba, ka nadi taron, AI zai rubuta komai. » Kafin ku yi tunanin haka, akwai bincike uku. Nadar taro yana bukatar amincewar mahalarta. Dole ne ya bi ka’idojin sashenku da dokokin aikin gwamnati na kasarku, musamman wajibcin rufa asirin aiki. Kuma taro mai muhimmanci na sirri (fayilolin ma’aikata, shari’a, tsaro, ayyukan cikin gida da ba na jama’a ba) ba shi da wuri a kayan aikin AI na jama’a, ko da kyauta ne kuma mai saukin amfani.\n\nBayan haka, rubutun magana (transcription) ba procès-verbal ba ne. Rubutun magana yana daukar komai, kalma bayan kalma, tare da jinkiri da kaucewa daga batu. Procès-verbal yana zabe: yana rike batutuwan ajandar taro, ra’ayoyin da aka bayyana, musamman shawarwarin da aka yanke. Wannan zaben shi ne aikinku na sakataren zaman taro. Bayananku, wadanda wani mai sanin sashen ya rubuta kai tsaye, sau da yawa sun fi cikakken nadar murya zama tushe mai kyau.\n\nKafin ku manna bayananku a Gemini, Claude ko ChatGPT, ku maye gurbin sunan kowane mutum da mukaminsa: « Shugaban sashen ruwa », « Wakilin karamar hukuma », « Kungiya mai zaman kanta A ». Ku cire kuma lambobin waya, kudaden mutum daya-daya, da duk wani bayani game da dan kasa mai neman sabis. Sunayen za su dawo daga baya, a cikin takarda ta karshe, a wajen kayan aikin. Wannan matatar daya ce da ta wasikar Darasi 1: mukamai, bayanan da aka boye sunaye, da rubuce-rubucen jama’a suna wucewa; bayanan sirri na mutane da takardun da ba na jama’a ba ba sa wucewa ko kadan."
      },
      {
        "title": "Bayananku kawai: umurnin RCTF da ke hana AI kirkira",
        "body": "AI yana tsara rubutu; bai kamata ya kara komai ba. Kamar ba tela yadinku ne: yana yanka kuma yana dinka abin da kuka kawo masa, ba ya kara wani yanki na yadi daga wani wuri. Amma mataimakin hira na AI yana da dabi’ar « gyarawa »: yana cike wata shawara da ta yi masa kamar ta dace, yana sa sa’a mai yiwuwa, yana dora wa mahalarci ra’ayin da bai taba fada ba. Dole umurninku ya hana shi haka, a rubuce kuma a fili.\n\nHanyar RCTF (Rawa, Mahallin, Aiki, Tsari — Rôle, Contexte, Tâche, Format) tana yin haka. Rawa: « kai ne sakataren zaman taro a wata hukumar gwamnati ». Mahallin: bayananku, da mukamai a madadin sunaye. Aiki: « rubuta daftarin procès-verbal, cikin salo na tsaka-tsaki, a mutum na uku. Kada ka kara komai da ba ya cikin bayanaina. Idan wani bayani ya bace, rubuta [À COMPLÉTER] ». Tsari: rana da wuri, mahalarta, ajandar taro, yadda taron ya gudana aya bayan aya, shawarwari, teburin ayyuka, tashin taro, bisa samfurin sashenku da aka manna ba tare da sunaye ba. Alamar « [À COMPLÉTER] » (a cika daga baya) ita ce ragar tsaronku: tana nuna abin da ya bace maimakon a bar AI ya kirkira.\n\nKo da wannan umurnin, ku sake karantawa. Ku kwatanta kowace shawara a cikin daftarin da bayananku, daya bayan daya. Idan daftarin ya ce « An yanke shawarar dage kamfen din » alhali bayananku ba su fadi haka ba, ku goge jumlar, ko ku sa shugaban zaman taro ya tabbatar da ita. Procès-verbal yana kunshe ne da abin da aka fada kuma aka yanke kawai. Kuma kowane « [À COMPLÉTER] » ana cike shi daga tushe amintacce: kalandarku, jerin sunayen mahalarta, ajandar taron da aka aika."
      },
      {
        "title": "Wa, me, yaushe: teburin ayyuka da hanyar amincewa",
        "body": "PV mai kyau yana karewa da teburin ayyuka mai ginshikai uku: aikin, wanda ke da alhaki, wa’adi. Misali: « Aika jerin rijiyoyin burtsatse da za a gyara — Shugaban sashen ruwa — kafin 15 ga wata mai zuwa ». Kamar littafin adashe ne inda ake rubuta wanda zai biya da lokacin biya: in ba shi, kowa zai tuna ta yadda ya ga dama.\n\nWannan tebur shi ne kayan aikin bibiya. A taro na gaba, ana karanta shi layi bayan layi: an gama, ana kan yi, ba a fara ba. Wata hukuma ta gunduma a Mali, karamar hukuma a Gini, ko kungiyar aikin wani shiri a Kenya za su iya bude kowane taro da duba ayyukan, maimakon sake tattauna komai. Idan wani aiki ba shi da wanda ke da alhaki ko wa’adi a bayananku, dole daftarin ya nuna « [À COMPLÉTER] »: shugaban zaman taro ne zai yanke hukunci, ba AI ba.\n\nSannan sai hanyar amincewa. Ku ne ke duba daftarin AI; kuna kwafar rubutun cikin samfurin sashe kuma kuna mayar da sunaye; shugaban zaman taro yana karantawa ya amince; sannan sai sa hannu, na shugaba da na sakataren zaman taro, da shigarwa cikin rajista. AI ya shirya daftari; ku ne ke tantancewa, kuma masu sa hannu ne ke daure sashen."
      }
    ],
    "example": {
      "title": "Zeinabou a Tahoua: daga littafin bayanai zuwa procès-verbal da aka sa wa hannu",
      "challenge": "A wata hukumar yanki ta misali (ba ta gaske ba) a Tahoua (Nijar), taron hadin gwiwa ya gudana: wasikar gayyata da aka shirya a Darasi 1 ta tafi ba tare da tona wani sirri ba. Mahalarta goma, batutuwa uku a ajandar taro. Zeinabou, sakatariyar darakta kuma sakatariyar zaman taro, tana da shafuka uku na bayanai. Dole shugaban zaman taro da ita su sa wa procès-verbal hannu. Wani abokin aiki ya ba ta shawarar ta nadi taro na gaba ta bar AI ya rubuta komai. Amma PV yana daure sassan gwamnati: shawarar da aka kirkira ko aka manta za ta haifar da rikici.",
      "solution": "Da farko Zeinabou ta maye gurbin kowane suna da mukami a cikin bayananta. A Gemini, sigar kyauta, ta manna umurnin RCTF: Rawar sakatariyar zaman taro; Mahallin da bayananta da aka boye sunaye; Aikin, wanda ya hana kara komai kuma ya bukaci « [À COMPLÉTER] »; Tsarin, da samfurin PV na sashe ba tare da sunaye ba. Daftarin ya bi tsarin da ake so: mahalarta, ajandar taro, yadda taron ya gudana, shawarwari, teburin ayyuka, cikin salo na tsaka-tsaki, a mutum na uku. Alamar « [À COMPLÉTER] » ta nuna lokacin tashin taro, wanda ba ya cikin bayanan: ta same shi a kalandarta. Sannan ta kwatanta kowace shawara a cikin daftarin da bayananta, daya bayan daya. A karshe, ta kwafi rubutun cikin samfurin sashe, ta mayar da sunaye a wajen kayan aikin, ta mika komai ga shugaban zaman taro don amincewa.",
      "impact": "Shugaban zaman taro ya amince da procès-verbal, sannan shi da Zeinabou suka sa masa hannu, ba tare da an kara ko an manta wata shawara ba, kuma ba tare da ko suna daya ya bi ta kayan aikin ba. A taro na gaba, bibiya ta fara kai tsaye daga teburin ayyuka: kowane mai alhaki yana bayani kan layinsa."
    },
    "practice": {
      "title": "Ku mayar da bayananku zuwa procès-verbal",
      "instructions": [
        "Ku dauki bayanan wani taro na kwanan nan wanda ba na sirri ba, ko bayanan misali da aka bayar tare da kwas din. Ku maye gurbin kowane suna da mukami (misali « Shugaban sashen ruwa », « Wakilin karamar hukuma ») kuma ku cire duk wani bayanin sirri na mutane.",
        "Ku bude Gemini, Claude ko ChatGPT ku cika sassan hudu na wannan umurni: « Rawa: kai ne sakataren zaman taro a wata hukumar gwamnati. Mahallin: ga bayanan da na rubuta a wani taro. An ambaci mahalarta da mukamansu. Bayanai: [manna bayananku, ba tare da sunaye ko bayanan sirri ba]. Aiki: rubuta daftarin procès-verbal, cikin salo na tsaka-tsaki, a mutum na uku. Kada ka kara komai da ba ya cikin bayanaina. Idan wani bayani ya bace, rubuta [À COMPLÉTER]. Tsari: rana da wuri, mahalarta (mukamai), ajandar taro, yadda taron ya gudana aya bayan aya, shawarwarin da aka yanke, teburin ayyuka (aiki, wanda ke da alhaki, wa’adi), tashin taro. Bi tsarin wannan samfurin na sashena: [manna samfurin PV ba tare da sunaye ba]. » Sannan ku kwatanta kowace shawara a cikin daftarin da bayananku, daya bayan daya.",
        "Ku cike kowane « [À COMPLÉTER] » daga tushe amintacce (kalanda, jerin sunayen mahalarta), ku kwafi rubutun cikin samfurin PV na sashenku, ku mayar da sunaye a wajen kayan aikin, sannan ku mika takardar ga shugaban zaman taro don amincewa."
      ],
      "observation": "Ya kamata ku ga cewa daftarin ya bi tsarin samfurinku kuma ya kare da teburin ayyuka, cewa bayanan da ba sa cikin rubuce-rubucenku sun bayyana a matsayin « [À COMPLÉTER] » maimakon a kirkira su, kuma cewa ana samun kowace shawara ta daftarin a cikin bayananku. Idan wata jumla ba ta da tushe a cikin bayananku, kun goge ta ko kun sanar da shugaban zaman taro: PV ya kasance aikinku, AI ya yi tsara rubutu ne kawai."
    },
    "quiz": [
      {
        "question": "Mene ne bambanci tsakanin compte rendu da procès-verbal?",
        "options": [
          { "key": "A", "text": "Babu, sunaye biyu ne na takarda daya" },
          { "key": "B", "text": "Compte rendu yana sanarwa; procès-verbal yana tabbatar da muhawara da shawarwari a hukumance" },
          { "key": "C", "text": "Procès-verbal ya fi gajarta a koyaushe" },
          { "key": "D", "text": "Dole duk mahalarta su sa wa compte rendu hannu" }
        ],
        "answer": "B",
        "explanation": "Compte rendu yana sanar da mutane, musamman wadanda ba su halarta ba. Procès-verbal yana tabbatar da muhawara da shawarwari a hukumance, kuma ya zama shaida idan shugaba da sakataren zaman taro sun sa masa hannu. Shi ya sa ba ya yarda da wata shawara da aka kirkira ko aka manta."
      },
      {
        "question": "Daftarin yana dauke da shawarar da ba ta cikin bayananku. Me za ku yi?",
        "options": [
          { "key": "A", "text": "Ku bar ta, tana kama da ta dace" },
          { "key": "B", "text": "Ku rubuta ta da baki mai kauri" },
          { "key": "C", "text": "Ku goge ta, ko ku sa shugaban zaman taro ya tabbatar da ita" },
          { "key": "D", "text": "Ku kara ta cikin teburin ayyuka" }
        ],
        "answer": "C",
        "explanation": "Procès-verbal yana kunshe da abin da aka fada kuma aka yanke kawai. Shawarar da « take kama da ta dace » amma ba ta cikin bayananku watakila AI ne ya kara ta: ku cire ta, ko ku sa shugaban zaman taro ya tabbatar da ita kafin ku bar ta."
      },
      {
        "question": "Me ke cikin teburin da ke kammala procès-verbal?",
        "options": [
          { "key": "A", "text": "Aikin, wanda ke da alhaki da wa’adi" },
          { "key": "B", "text": "Lambobin wayar mahalarta" },
          { "key": "C", "text": "Ra’ayoyin sakatariyar" },
          { "key": "D", "text": "Kasafin kudin shekara" }
        ],
        "answer": "A",
        "explanation": "Teburin ayyuka yana amsa tambayoyi uku: wa zai yi me, kuma zuwa yaushe. Ana sake karanta shi a taro na gaba don bibiyar ci gaba. Lambobin waya ba su da wuri a ciki, balle a kayan aikin AI na jama’a."
      },
      {
        "question": "Lokacin tashin taro ba ya cikin bayananku. Me umurnin ke nema daga AI?",
        "options": [
          { "key": "A", "text": "Ya yi hasashe" },
          { "key": "B", "text": "Ya sa lokaci mai yiwuwa" },
          { "key": "C", "text": "Ya goge kanun" },
          { "key": "D", "text": "Ya rubuta « [À COMPLÉTER] »" }
        ],
        "answer": "D",
        "explanation": "Sashen Aiki na umurnin RCTF yana neman a rubuta « [À COMPLÉTER] » idan wani bayani ya bace. Gibin ya zama a bayyane, sannan ku cike shi daga tushe amintacce, kamar kalandarku. Lokaci « mai yiwuwa » zai zama kirkira a cikin takardar da ke zama shaida."
      },
      {
        "question": "Wani abokin aiki ya ba da shawarar a nadi taro na gaba a mika nadin ga kayan aikin AI na jama’a. Me za ku fara dubawa?",
        "options": [
          { "key": "A", "text": "Ingancin makirufo" },
          { "key": "B", "text": "Amincewar mahalarta, ka’idojin sashe da yadda taron yake na sirri" },
          { "key": "C", "text": "Tsawon lokacin taron" },
          { "key": "D", "text": "Ba komai, ya fi sauri" }
        ],
        "answer": "B",
        "explanation": "Nadar taro yana bukatar amincewar mahalarta da bin ka’idojin sashe da dokokin aikin gwamnati na kasarku. Kuma taro na sirri bai kamata ya taba bi ta kayan aikin AI na jama’a ba. Sauri ko ingancin sauti suna zuwa ne bayan wadannan bincike."
      }
    ],
    "reflection": "A sashenku, wadanne taruka za ku iya mayar da su procès-verbal ta wannan hanya, kuma wadanne ne suka fi zama na sirri da ba za a saka su a kayan aikin AI na jama’a ba, ko da da mukamai a madadin sunaye?",
    "glossary": [
      { "term": "Procès-verbal (PV) (takardar zaman taro ta hukuma)", "definition": "Takardar da ke tabbatar da muhawara da shawarwarin taro a hukumance. Idan shugaba da sakataren zaman taro sun sa mata hannu, ta zama shaida kuma ana komawa gare ta idan aka yi jayayya." },
      { "term": "Compte rendu (rahoton taro)", "definition": "Takardar da ke sanar da mutane, musamman wadanda ba su halarta ba, muhimman abubuwan taro. Ba ta da nauyin hukuma na procès-verbal; samfurin sashenku ne ke fayyace amfanin kowace." },
      { "term": "Secrétaire de séance (sakataren zaman taro)", "definition": "Mutumin da ke rubuta bayanai lokacin taro kuma ke rubuta procès-verbal, wanda yake sa wa hannu tare da shugaban zaman taro." },
      { "term": "Président de séance (shugaban zaman taro)", "definition": "Mutumin da ke jagorantar taro. Yana karanta procès-verbal ya amince da shi kafin a sa hannu, kuma yana yanke hukunci idan wata shawara ko wani bayani ba shi da tabbas." },
      { "term": "[À COMPLÉTER] (a cika daga baya)", "definition": "Alamar da umurnin ke neman AI ya rubuta idan wani bayani ba ya cikin bayananku. Tana nuna gibin a fili maimakon a bar AI ya kirkira; sannan ku maye gurbinta daga tushe amintacce." },
      { "term": "Tableau des actions (teburin ayyuka)", "definition": "Teburin da ke kammala procès-verbal, mai ginshikai uku: aikin, wanda ke da alhaki, wa’adi. Ana sake karanta shi a taro na gaba don bibiyar abin da aka yi." }
    ]
  }
};
