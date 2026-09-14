/**
 * Genere `docs/notebooklm-module-1-ia.md` a partir du contenu reel des lecons.
 *
 * Le document sert de source unique pour produire les videos du module 1 dans
 * NotebookLM : pour chaque lecon il contient le texte a charger comme source
 * (FR et EN) et le prompt de generation correspondant.
 *
 * Relancer apres toute modification du contenu des lecons :
 *   node scripts/build-notebooklm-module-1.mjs
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const SLUG = 'intelligence-artificielle';
const IDS = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
const OUT = path.join(process.cwd(), 'docs/notebooklm-module-1-ia.md');

const FILES = {
  c1: 'src/data/lessonContent.ts (FR) + src/data/localizedContent.ts (EN et HA)',
  c2: 'src/data/lessons/ia-c2-llms.ts',
  c3: 'src/data/lessons/ia-c3-prompting.ts',
  c4: 'src/data/lessons/ia-c4-organisations.ts',
  c5: 'src/data/lessons/ia-c5-automatisation.ts',
  c6: 'src/data/lessons/ia-c6-ethique.ts',
  c7: 'src/data/lessons/ia-c7-outils.ts',
  c8: 'src/data/lessons/ia-c8-evaluation.ts',
};

/** Consigne d'audience rappelee dans chaque prompt (FR / EN). */
const AUDIENCE_FR =
  "Public : toute personne curieuse de l'IA — salarie, etudiant, independant, agent de terrain, "
  + 'benevole — sans aucun prerequis technique, partout dans le monde. '
  + 'La source contient surtout des exemples africains et humanitaires : garde-en un ou deux comme '
  + "illustrations concretes, mais ouvre a d'autres contextes (entreprise, administration, ecole, "
  + "petite structure) et a d'autres regions. Ne presente jamais ce cours comme reserve a l'Afrique "
  + 'ni au secteur humanitaire.';
const AUDIENCE_EN =
  'Audience: anyone curious about AI — employees, students, freelancers, field workers, volunteers — '
  + 'with no technical background, anywhere in the world. '
  + 'The source leans on African and humanitarian examples: keep one or two as concrete illustrations, '
  + 'but open up to other settings (business, public sector, school, small organisation) and other regions. '
  + 'Never present this course as being only for Africa or only for the humanitarian sector.';

const RULES_FR =
  "Ton clair et chaleureux, vouvoiement, phrases courtes. Explique chaque terme technique la premiere fois. "
  + "N'invente aucun chiffre, aucune date et aucune source qui ne figure pas dans le document source.";
const RULES_EN =
  'Clear, warm tone, short sentences. Explain every technical term the first time it appears. '
  + 'Do not invent any figure, date or source that is not in the source document.';

const PROMPTS = {
  c1: {
    minutes: '5',
    fr: {
      goal: "comprendre ce qu'est vraiment l'IA, ce qu'elle sait faire et ce qu'elle ne sait pas faire.",
      plan: [
        "une definition simple, sans jargon : l'IA reconnait des modeles dans des donnees, ce n'est pas de la magie (analogie de la caisse d'epargne rotative)",
        "comment elle apprend : des exemples en quantite, et le risque de biais quand ces exemples ne representent qu'une partie du monde",
        "l'IA que l'on utilise deja sans le savoir : filtres anti-spam, itineraires, detection de fraude sur les paiements, IA generative",
        "l'IA sur le terrain aujourd'hui (agriculture, sante, education) et le vrai frein : l'infrastructure, pas l'algorithme",
      ],
      honest: "l'IA ne remplace pas le jugement humain et ne vaut que ce que valent ses donnees",
      end: "inviter a reperer, dans sa propre journee, une IA qu'on utilise sans y penser",
    },
    en: {
      goal: 'understand what AI really is, what it can do and what it cannot.',
      plan: [
        'a simple, jargon-free definition: AI finds patterns in data, it is not magic (the rotating savings group analogy)',
        'how it learns: lots of examples, and the bias risk when those examples only show part of the world',
        'the AI you already use without noticing: spam filters, route planning, payment fraud detection, generative AI',
        'AI in the field today (agriculture, health, education) and the real bottleneck: infrastructure, not the algorithm',
      ],
      honest: 'AI does not replace human judgement and is only as good as its data',
      end: 'invite the viewer to spot one AI they use in their own day without thinking about it',
    },
  },
  c2: {
    minutes: '5 a 6',
    fr: {
      goal: "comprendre comment un grand modele de langage (ChatGPT, Claude, Gemini) produit du texte.",
      plan: [
        "un LLM predit le mot suivant, il ne « sait » rien (analogie du conteur tres eloquent)",
        'tokens et fenetre de contexte expliques simplement : la memoire de travail du modele',
        "forces et limites : hallucinations, date de coupure, biais — la confiance n'est pas l'exactitude",
        'bien s’en servir : verifier les faits, ne jamais saisir de donnees personnelles, se mefier des langues peu representees',
      ],
      honest: "un LLM peut se tromper avec assurance, y compris sur un chiffre ou une source",
      end: 'la regle d’or : toute information importante se verifie a la source avant usage',
    },
    en: {
      goal: 'understand how a large language model (ChatGPT, Claude, Gemini) produces text.',
      plan: [
        'an LLM predicts the next word, it does not "know" anything (the eloquent storyteller analogy)',
        'tokens and the context window in plain terms: the model’s working memory',
        'strengths and limits: hallucinations, knowledge cutoff, bias — confidence is not accuracy',
        'using it well: check the facts, never paste personal data, be careful with under-represented languages',
      ],
      honest: 'an LLM can be confidently wrong, including about a figure or a source',
      end: 'the golden rule: every important claim gets checked at the source before you use it',
    },
  },
  c3: {
    minutes: '5 a 6',
    fr: {
      goal: 'savoir rediger une consigne (prompt) qui donne un resultat utilisable du premier coup.',
      plan: [
        "l'anatomie d'un bon prompt : Role + Contexte + Tache + Format, avec un avant/apres concret",
        'les techniques qui marchent : donner un exemple, demander un raisonnement etape par etape, imposer le format de sortie',
        'iterer : corriger un point precis plutot que tout reecrire, en deux ou trois allers-retours',
        'quatre usages reels : note de synthese, traduction, courriel formel, compte-rendu de reunion',
      ],
      honest: "un bon prompt fait gagner du temps, il ne dispense jamais de relire le resultat",
      end: 'donner un modele de prompt reutilisable que le spectateur peut noter tout de suite',
    },
    en: {
      goal: 'write an instruction (prompt) that gives a usable result the first time.',
      plan: [
        'the anatomy of a good prompt: Role + Context + Task + Format, with a concrete before/after',
        'techniques that work: give an example, ask for step-by-step reasoning, constrain the output format',
        'iterate: fix one precise thing instead of rewriting everything, in two or three rounds',
        'four real uses: briefing note, translation, formal email, meeting minutes',
      ],
      honest: 'a good prompt saves time, it never removes the need to read the result',
      end: 'give a reusable prompt template the viewer can write down straight away',
    },
  },
  c4: {
    minutes: '5 a 6',
    fr: {
      goal: "choisir le bon premier cas d'usage de l'IA dans une organisation.",
      plan: [
        "partir des problemes reels, pas de la technologie : ou l'IA fait gagner du temps, ameliore la qualite, elargit l'acces",
        'prioriser avec une matrice valeur / effort, en tenant compte des donnees disponibles et du niveau de risque',
        'les contraintes concretes : connexion, electricite, langues, cout, competences de l’equipe',
        'faire adopter : commencer par un pilote limite, impliquer les utilisateurs, poser une gouvernance legere',
      ],
      honest: "une decision qui touche directement une personne ne se delegue jamais entierement a une machine",
      end: 'choisir cette semaine une tache a forte valeur et faible effort comme premier pilote',
    },
    en: {
      goal: 'choose the right first AI use case in an organisation.',
      plan: [
        'start from real problems, not technology: where AI saves time, improves quality, widens access',
        'prioritise with a value / effort matrix, factoring in data availability and risk level',
        'the concrete constraints: connectivity, electricity, languages, cost, team skills',
        'drive adoption: start with a small pilot, involve users, set light governance',
      ],
      honest: 'a decision that directly affects a person is never fully delegated to a machine',
      end: 'pick one high-value, low-effort task this week as a first pilot',
    },
  },
  c5: {
    minutes: '5',
    fr: {
      goal: "automatiser une tache repetitive sans perdre le controle humain.",
      plan: [
        "ce qui s'automatise (repetitif, regles claires, donnees structurees) et ce qui ne s'automatise pas",
        'les outils accessibles : tableur, outils no-code, assistant IA, et les solutions qui marchent hors ligne',
        "l'humain dans la boucle : au moins un point de controle avant que le resultat parte",
        'mesurer honnetement : temps gagne contre temps de mise en place, erreurs possibles, dependance a un outil',
      ],
      honest: "la responsabilite ne se delegue pas a une machine : en cas d'erreur, c'est un humain qui repond",
      end: 'identifier une tache repetitive de sa semaine et le point de controle qu’on ne supprimera jamais',
    },
    en: {
      goal: 'automate a repetitive task without losing human control.',
      plan: [
        'what can be automated (repetitive, clear rules, structured data) and what cannot',
        'accessible tools: spreadsheets, no-code tools, an AI assistant, and options that work offline',
        'human in the loop: at least one checkpoint before anything goes out',
        'measure honestly: time saved versus setup time, possible errors, dependence on one tool',
      ],
      honest: 'responsibility is never delegated to a machine: when something goes wrong, a human answers for it',
      end: 'name one repetitive task from your week and the checkpoint you would never remove',
    },
  },
  c6: {
    minutes: '5 a 6',
    fr: {
      goal: "utiliser l'IA de facon responsable : biais, donnees personnelles, desinformation.",
      plan: [
        "d'ou viennent les biais : des donnees d'entrainement, et ce que cela change pour les personnes mal representees",
        'confidentialite et souverainete des donnees : ou partent les informations que vous saisissez, et le consentement eclaire',
        'desinformation : deepfakes et hallucinations, et le reflexe de verification a deux sources independantes',
        "responsabilite collective : outils autorises, transparence sur l'usage de l'IA, relecture humaine systematique",
      ],
      honest: "un outil biaise peut exclure des personnes reelles sans que personne ne s'en apercoive",
      end: 'une mini-checklist ethique en trois questions a se poser avant de saisir la moindre donnee',
    },
    en: {
      goal: 'use AI responsibly: bias, personal data, disinformation.',
      plan: [
        'where bias comes from: the training data, and what that means for under-represented people',
        'privacy and data sovereignty: where the information you type actually goes, and informed consent',
        'disinformation: deepfakes and hallucinations, and the reflex of checking two independent sources',
        'collective responsibility: approved tools, transparency about AI use, systematic human review',
      ],
      honest: 'a biased tool can exclude real people without anyone noticing',
      end: 'a three-question ethics checklist to run before typing any data into a tool',
    },
  },
  c7: {
    minutes: '5',
    fr: {
      goal: 'choisir et combiner les outils IA adaptes a son besoin et a son budget.',
      plan: [
        "les grandes familles d'outils : assistants conversationnels, transcription et traduction, generation d'images, analyse de documents",
        'quatre criteres de choix : cout, fonctionnement hors ligne, confidentialite, langues supportees',
        'combiner les outils en un flux simple : enregistrer, transcrire, resumer, traduire, archiver',
        'demarrer gratuitement et progresser par une pratique courte et reguliere',
      ],
      honest: "il n'existe pas d'outil universel parfait : le bon outil est celui qui correspond a votre contexte",
      end: 'choisir un seul outil a tester cette semaine sur une tache reelle',
    },
    en: {
      goal: 'choose and combine the AI tools that fit your need and your budget.',
      plan: [
        'the main tool families: conversational assistants, transcription and translation, image generation, document analysis',
        'four selection criteria: cost, offline use, privacy, supported languages',
        'combine tools into a simple flow: record, transcribe, summarise, translate, archive',
        'start for free and improve through short, regular practice',
      ],
      honest: 'there is no perfect universal tool: the right tool is the one that fits your context',
      end: 'pick one tool to try this week on a real task',
    },
  },
  c8: {
    minutes: '5 a 6',
    fr: {
      goal: "recapituler le module avant l'evaluation finale et donner envie de passer a la pratique.",
      plan: [
        "l'essentiel de l'IA : definition, apprentissage automatique, IA generative et leurs limites",
        'modeles de langage et consignes claires : le role, le contexte, la tache, le format',
        "deployer et automatiser : choisir un cas d'usage, garder un humain dans la boucle",
        'responsabilite et choix des outils : biais, protection des donnees, criteres de selection',
      ],
      honest: "le certificat valide des acquis, il ne remplace pas la pratique reguliere",
      end: "expliquer que l'evaluation finale valide les acquis et debloque le certificat numerique verifiable, puis encourager a choisir une seule chose a mettre en pratique ce mois-ci",
    },
    en: {
      goal: 'recap the module before the final assessment and make the viewer want to practise.',
      plan: [
        'AI essentials: definition, machine learning, generative AI and their limits',
        'language models and clear instructions: role, context, task, format',
        'deploying and automating: choosing a use case, keeping a human in the loop',
        'responsibility and tool choice: bias, data protection, selection criteria',
      ],
      honest: 'the certificate validates knowledge, it does not replace regular practice',
      end: 'explain that the final assessment validates the learning and unlocks the verifiable digital certificate, then encourage picking one single thing to practise this month',
    },
  },
};

const INTRO_PROMPT = {
  fr: "Cree une video de 3 a 4 minutes qui presente le module « Intelligence Artificielle » de Karatou Academy. "
    + `${AUDIENCE_FR} Explique le parcours en huit lecons : comprendre ce qu'est l'IA, comment fonctionnent les modeles `
    + "de langage, ecrire de bonnes consignes, choisir un cas d'usage, automatiser sans perdre le controle, utiliser l'IA "
    + "de facon responsable, choisir ses outils, puis valider ses acquis. Insiste sur le fait qu'aucun prerequis technique "
    + "n'est necessaire et que tout est faisable depuis un telephone. Termine en invitant a commencer par la premiere lecon. "
    + RULES_FR,
  en: 'Create a 3 to 4 minute video introducing the Karatou Academy "Artificial Intelligence" module. '
    + `${AUDIENCE_EN} Explain the eight-lesson path: understand what AI is, how language models work, write good `
    + 'instructions, choose a use case, automate without losing control, use AI responsibly, choose your tools, then '
    + 'validate what you learned. Stress that no technical background is required and everything can be done from a phone. '
    + 'End by inviting the viewer to start with the first lesson. '
    + RULES_EN,
};

function buildPrompt(id, lang) {
  const spec = PROMPTS[id][lang];
  const minutes = PROMPTS[id].minutes;
  if (lang === 'fr') {
    return [
      `Cree une video explicative de ${minutes} minutes a partir du document source.`,
      `${AUDIENCE_FR}`,
      `Objectif : ${spec.goal}`,
      `Couvre dans l'ordre : ${spec.plan.map((p, i) => `${i + 1}) ${p}`).join(' ; ')}.`,
      `Sois honnete sur ce point : ${spec.honest}.`,
      `Termine par : ${spec.end}.`,
      RULES_FR,
    ].join('\n');
  }
  return [
    `Create a ${minutes.replace(' a ', ' to ')} minute explainer video from the source document.`,
    `${AUDIENCE_EN}`,
    `Goal: ${spec.goal}`,
    `Cover in this order: ${spec.plan.map((p, i) => `${i + 1}) ${p}`).join('; ')}.`,
    `Be honest about this: ${spec.honest}.`,
    `End with: ${spec.end}.`,
    RULES_EN,
  ].join('\n');
}

function renderSource(lesson, lang) {
  const L = lang === 'fr'
    ? { obj: 'Objectif', ex: 'Cas concret', ch: 'Le probleme', so: 'La solution', im: "L'impact", pr: 'Mise en pratique', ob: 'A observer', gl: 'Glossaire' }
    : { obj: 'Objective', ex: 'Real case', ch: 'Challenge', so: 'Solution', im: 'Impact', pr: 'Practice', ob: 'What to notice', gl: 'Glossary' };
  const out = [];
  out.push(`# ${lesson.title}`, '');
  out.push(`## ${L.obj}`, lesson.objective, '');
  lesson.content.forEach((bloc) => {
    out.push(`## ${bloc.title}`, bloc.body, '');
  });
  out.push(`## ${L.ex} — ${lesson.example.title}`);
  out.push(`${L.ch} : ${lesson.example.challenge}`);
  out.push(`${L.so} : ${lesson.example.solution}`);
  out.push(`${L.im} : ${lesson.example.impact}`, '');
  out.push(`## ${L.pr} — ${lesson.practice.title}`);
  lesson.practice.instructions.forEach((step, i) => out.push(`${i + 1}. ${step}`));
  out.push(`${L.ob} : ${lesson.practice.observation}`, '');
  out.push(`## ${L.gl}`);
  lesson.glossary.forEach((item) => out.push(`- ${item.term} : ${item.definition}`));
  return out.join('\n').trim();
}

async function main() {
  const server = await createServer({
    configFile: false,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  });
  const { loadAuthoredLesson } = await server.ssrLoadModule('/src/data/localizedContent.ts');

  const parts = [];
  parts.push(`# Videos NotebookLM — Module 1 « Intelligence Artificielle » (c1 → c8)

> **Fichier genere.** Il est produit par \`node scripts/build-notebooklm-module-1.mjs\` a partir du
> contenu reel des lecons. Ne le modifiez pas a la main : corrigez la lecon, puis relancez le script.

Pour chaque lecon vous trouverez ci-dessous **la source a charger dans NotebookLM** (version francaise
et version anglaise) et **le prompt de generation** correspondant. Une video par lecon et par langue,
soit 16 videos, plus une video d'introduction du module (optionnelle).

## Cadrage editorial

Karatou Academy s'adresse a **toute personne curieuse de l'IA**, quel que soit son pays et son metier :
salaries, etudiants, independants, agents de terrain, benevoles. Les lecons s'appuient sur des exemples
africains et humanitaires parce qu'ils sont concrets et sous-representes ailleurs — **ce ne sont pas des
limites de public**. Chaque prompt ci-dessous contient donc une consigne explicite : garder ces exemples
comme illustrations, mais ouvrir a d'autres contextes et d'autres regions, et ne jamais presenter le
cours comme reserve a l'Afrique ou au secteur humanitaire.

Deux autres regles figurent dans chaque prompt :

- **aucun chiffre invente** — le module enseigne la verification des sources, ses propres videos doivent
  s'y tenir : rien qui ne soit dans le document source ;
- **chaque terme technique explique a sa premiere apparition**.

## Mode d'emploi (une fois par lecon et par langue)

1. Creer un notebook NotebookLM dedie a la lecon.
2. Coller la source de la section correspondante (ou l'enregistrer en \`.md\` et l'uploader).
3. **Video Overview** → **Customize**, coller le prompt.
4. Regler la langue de sortie du notebook sur **Francais** ou **English** *avant* de generer.
5. Generer, telecharger le MP4.
6. Publier sur YouTube en **non repertorie**, recuperer l'identifiant apres \`watch?v=\`.
7. Coller \`https://www.youtube.com/embed/IDENTIFIANT\` dans le champ \`video.fr\` / \`video.en\` de la lecon
   — depuis \`/admin/lecons\` (aucun deploiement necessaire) ou directement dans le fichier source.
8. Verifier l'onglet **Video** de la lecon dans l'application.

### Haoussa

NotebookLM ne genere pas de voix haoussa fiable. \`video.ha\` reste vide par defaut ; les trois options
possibles (laisser vide, reutiliser la video FR, ajouter des sous-titres haoussa sur YouTube) restent
une decision projet. Le texte de la lecon, lui, est integralement disponible en haoussa dans l'application.

## Etat des videos

| Lecon | Titre | Duree cible | Fichier a mettre a jour |
|---|---|---|---|`);

  const lessons = {};
  for (const id of IDS) {
    const fr = await loadAuthoredLesson(SLUG, id, 'fr');
    const en = await loadAuthoredLesson(SLUG, id, 'en');
    if (!fr || !en) throw new Error(`Lecon ${id} introuvable dans le registre`);
    lessons[id] = { fr, en };
    parts.push(`| ${id} | ${fr.title} | ${PROMPTS[id].minutes} min | \`${FILES[id]}\` |`);
  }

  parts.push('', '---', '', '## Video d\'introduction du module (optionnelle)', '',
    '**Source** : la liste des huit lecons et la description du module (page du module dans l\'application).',
    '', '### Prompt FR', '', '```text', INTRO_PROMPT.fr, '```',
    '', '### Prompt EN', '', '```text', INTRO_PROMPT.en, '```');

  for (const id of IDS) {
    const { fr, en } = lessons[id];
    parts.push('', '---', '', `# Lecon ${id.slice(1)} — ${fr.title}`, '');
    parts.push(`**Duree cible** : ${PROMPTS[id].minutes} minutes · **Fichier** : \`${FILES[id]}\``, '');
    parts.push('### Prompt FR', '', '```text', buildPrompt(id, 'fr'), '```', '');
    parts.push('### Source FR (a charger dans le notebook)', '', '```markdown', renderSource(fr, 'fr'), '```', '');
    parts.push('### Prompt EN', '', '```text', buildPrompt(id, 'en'), '```', '');
    parts.push('### Source EN (to load in the notebook)', '', '```markdown', renderSource(en, 'en'), '```', '');
  }

  parts.push('', '---', '', `## Checklist de fin

- [ ] 8 videos FR generees, publiees en non repertorie, URL d'embed collee dans \`video.fr\`
- [ ] 8 videos EN generees, publiees, URL collee dans \`video.en\`
- [ ] \`video.ha\` : decision prise (vide, reprise de la video FR, ou sous-titres)
- [ ] Commentaire \`/* TODO: URL NotebookLM/YouTube ... */\` retire des lecons remplies
- [ ] Onglet Video verifie dans l'application pour chaque lecon
- [ ] \`npm run typecheck && npm test && npm run build\` verts avant commit
`);

  await writeFile(OUT, parts.join('\n'), 'utf8');
  await server.close();
  console.log(`docs/notebooklm-module-1-ia.md genere (${IDS.length} lecons, FR + EN).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
