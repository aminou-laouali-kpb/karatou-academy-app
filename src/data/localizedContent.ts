import { Language } from './translations';
import { LessonContent, lesson1 } from './lessonContent';
import {
  claudeLesson1ByLanguage,
  claudeLesson2ByLanguage,
  claudeLesson3ByLanguage,
  claudeLesson4ByLanguage,
  claudeLesson5ByLanguage,
  claudeLesson6ByLanguage,
} from './lessons/introduction-claude-ai';
import { Course, LearningModule } from '../types';

type CourseCopy = Pick<Course, 'title' | 'description'>;
type ModuleCopy = {
  title: string;
  subtitle: string;
  description: string;
  level: string;
  courses: Record<string, CourseCopy>;
};

const copy: Record<Language, Record<string, ModuleCopy>> = {
  fr: {},
  en: {
    'intelligence-artificielle': {
      title: 'Artificial Intelligence',
      subtitle: 'Foundations & Applications',
      description: 'Master core AI concepts and apply them to your African professional context.',
      level: 'Beginner',
      courses: {
        c1: { title: 'Introduction to AI', description: 'Understand what AI can and cannot do.' },
        c2: { title: 'Understanding LLMs', description: 'Identify the strengths and limits of large language models.' },
        c3: { title: 'Prompt Engineering', description: 'Write effective instructions for professional use cases.' },
        c4: { title: 'AI in African organizations', description: 'Choose the right use cases for a local organization.' },
        c5: { title: 'Task automation', description: 'Automate a simple process while keeping human control.' },
        c6: { title: 'AI ethics and bias', description: 'Recognize risks, bias and essential controls.' },
        c7: { title: 'Practical AI tools', description: 'Compare useful AI tools for learning, production and analysis.' },
        c8: { title: 'Final assessment', description: 'Validate skills and issue the digital certificate.' },
      },
    },
    'data-analysis': {
      title: 'Data Analysis',
      subtitle: 'Excel -> Python -> Insights',
      description: 'Move from Excel to Python and turn data into strategic decisions.',
      level: 'Intermediate',
      courses: {
        d1: { title: 'Clean an Excel file', description: 'Identify common errors and prepare a dataset.' },
        d2: { title: 'Pivot tables and indicators', description: 'Build readable indicators for a field team.' },
        d3: { title: 'Introduction to Python', description: 'Read a CSV and calculate simple statistics.' },
        d4: { title: 'Visualize results', description: 'Choose the right chart for the business question.' },
        d5: { title: 'Tell the analysis story', description: 'Turn a result into a clear decision.' },
        d6: { title: 'Data mini-project', description: 'Produce a small complete and verifiable report.' },
      },
    },
    'gestion-projet': {
      title: 'Project Management',
      subtitle: 'Agile & Digital',
      description: 'Run projects with agile methods adapted to African contexts.',
      level: 'Beginner',
      courses: {
        p1: { title: 'Frame a project', description: 'Define objective, users, constraints and expected results.' },
        p2: { title: 'Prioritize the MVP', description: 'Choose what must be tested now and what can wait.' },
        p3: { title: 'Organize a sprint', description: 'Plan one week of work with clear deliverables.' },
        p4: { title: 'Track risks', description: 'Identify blockers before they slow down the team.' },
        p5: { title: 'Retrospective and improvement', description: 'Help the team improve after each cycle.' },
      },
    },
    'introduction-claude-ai': {
      title: 'Introduction to Claude AI',
      subtitle: 'Using an AI assistant day to day',
      description: 'Get started with Claude step by step: write a clear request, work on your own documents and check answers before using them.',
      level: 'Beginner',
      courses: {
        cl1: { title: 'What is Claude?', description: 'Understand what Claude is, where to reach it and what not to expect from it.' },
        cl2: { title: 'Writing a good request', description: 'The four ingredients of a clear instruction: context, task, format, example.' },
        cl3: { title: 'Working with your own documents', description: 'Upload a PDF or a table, summarize, extract and translate.' },
        cl4: { title: 'Everyday practical uses', description: 'Draft, translate, prepare a meeting and read a simple table.' },
        cl5: { title: 'Limits, verification and privacy', description: 'Spot plausible errors and protect sensitive data.' },
        cl6: { title: 'Final assessment', description: 'Validate skills and issue the digital certificate.' },
      },
    },
  },
  ha: {
    'intelligence-artificielle': {
      title: 'Fasahar Hankali ta AI',
      subtitle: 'Tushen ilimi & Aiki',
      description: 'Koyi tushen AI kuma yi amfani da shi a aikin Afirka.',
      level: 'Mai farawa',
      courses: {
        c1: { title: 'Gabatarwa ga AI', description: 'Fahimci abin da AI zai iya yi da abin da ba zai iya yi ba.' },
        c2: { title: 'Fahimtar LLMs', description: 'San karfi da iyakar manyan tsarin harshe.' },
        c3: { title: 'Rubuta prompt', description: 'Rubuta umarni masu inganci don aikin yau da kullum.' },
        c4: { title: 'AI a kungiyoyin Afirka', description: 'Zabi amfani da ya dace a kungiya ta gida.' },
        c5: { title: 'Sarrafa ayyuka kai tsaye', description: 'Sauwaka aiki ba tare da rasa kulawar mutum ba.' },
        c6: { title: 'Da a da son zuciya a AI', description: 'Gane hadari, son zuciya da matakan kariya.' },
        c7: { title: 'Kayan aikin AI', description: 'Kwatanta kayan AI don koyo, samarwa da nazari.' },
        c8: { title: 'Jarabawar karshe', description: 'Tabbatar da kwarewa kuma fitar da takarda.' },
      },
    },
    'data-analysis': {
      title: 'Nazarin Bayanai',
      subtitle: 'Excel -> Python -> Fahimta',
      description: 'Daga Excel zuwa Python, juya bayanai zuwa shawara.',
      level: 'Matsakaici',
      courses: {
        d1: { title: 'Gyara fayil din Excel', description: 'Gano kurakurai kuma shirya bayanai.' },
        d2: { title: 'Teburin pivot da alamomi', description: 'Gina alamomi masu sauki ga tawaga.' },
        d3: { title: 'Gabatarwa ga Python', description: 'Karanta CSV kuma lissafa kididdiga.' },
        d4: { title: 'Nuna sakamako', description: 'Zabi jadawali da ya dace da tambaya.' },
        d5: { title: 'Bayyana labarin nazari', description: 'Mayar da sakamako zuwa shawara.' },
        d6: { title: 'Karamin aikin bayanai', description: 'Fitar da rahoto karami mai tabbatarwa.' },
      },
    },
    'gestion-projet': {
      title: 'Gudanar da Aiki',
      subtitle: 'Agile & Digital',
      description: 'Gudanar da ayyuka da hanyoyin agile da suka dace da Afirka.',
      level: 'Mai farawa',
      courses: {
        p1: { title: 'Tsara aiki', description: 'Bayyana buri, masu amfani, iyaka da sakamako.' },
        p2: { title: 'Zabi MVP', description: 'Zabi abin da za a gwada yanzu da wanda zai jira.' },
        p3: { title: 'Shirya sprint', description: 'Tsara mako daya da abubuwan bayarwa.' },
        p4: { title: 'Bibiyar hadari', description: 'Gano matsala kafin ta hana aiki.' },
        p5: { title: 'Bita da ingantawa', description: 'Inganta tawaga bayan kowane zagaye.' },
      },
    },
    'introduction-claude-ai': {
      title: 'Gabatarwa ga Claude AI',
      subtitle: 'Amfani da mataimakin AI kullum',
      description: 'Koyi amfani da Claude mataki-mataki: rubuta bukata a fili, yin aiki da takardunka, da tantance amsoshi kafin amfani.',
      level: 'Mai farawa',
      courses: {
        cl1: { title: 'Menene Claude?', description: 'Fahimci menene Claude, inda za ka same shi da abin da bai kamata ka sa rai ba.' },
        cl2: { title: 'Rubuta bukata mai kyau', description: 'Sinadarai hudu na umarni bayyananne: mahalli, aiki, tsari, misali.' },
        cl3: { title: 'Aiki da takardunka', description: 'Aika PDF ko tebur, takaitawa, ciro bayanai da fassara.' },
        cl4: { title: 'Amfani na yau da kullum', description: 'Rubutu, fassara, shirya taro da karanta tebur mai sauki.' },
        cl5: { title: 'Iyaka, tantancewa da sirri', description: 'Gano kurakurai masu kyan gani da kare bayanai masu muhimmanci.' },
        cl6: { title: 'Jarabawar karshe', description: 'Tabbatar da kwarewa kuma fitar da takarda.' },
      },
    },
  },
};

const lesson1ByLanguage: Record<Language, LessonContent> = {
  fr: lesson1,
  en: {
    ...lesson1,
    title: 'Introduction to AI - What is it really?',
    objective:
      'This lesson demystifies artificial intelligence by explaining its basic principles, simplified operation and concrete uses in daily life and African development contexts.',
    content: [
      {
        title: 'AI is not science fiction',
        body:
          'Artificial intelligence is not a robot from the future. It is already a practical tool that helps solve real problems. Unlike traditional software with fixed rules, AI systems perform tasks that usually require human intelligence: understanding language, recognizing images or supporting decisions.',
      },
      {
        title: 'How AI learns',
        body:
          'A machine learns from quality data. If AI is the engine, data is the fuel. Machine learning allows a system to identify patterns from examples instead of being programmed for every detail.',
      },
      {
        title: 'AI you already use',
        body:
          'You probably use AI through messaging filters, route planning, mobile money fraud detection or generative tools that draft reports and polish professional communication.',
      },
      {
        title: 'AI in Africa today',
        body:
          'Across Africa, AI supports agriculture, health, education and humanitarian work. The strongest solutions adapt to local realities such as limited connectivity, language diversity and field constraints.',
      },
    ],
    example: {
      title: 'AI chatbot for health-worker training in Africa',
      challenge: 'Remote health workers needed training with limited access to physical trainers.',
      solution: 'A chatbot answered sensitive questions anonymously and helped teams practice safely.',
      impact: 'When privacy and transparency were clarified, adoption increased strongly, showing that AI can close training gaps when trust is designed into the solution.',
    },
    practice: {
      title: 'Test AI translation on your phone',
      instructions: [
        'Open a translation app or an AI assistant.',
        'Say a complex sentence in a local language or in informal French.',
        'Ask the tool to translate it into English and rewrite it as a professional email.',
      ],
      observation: 'Did the AI capture the nuance? Note one useful result and one mistake.',
    },
    quiz: [
      {
        question: 'What is a simple definition of artificial intelligence?',
        options: [
          { key: 'A', text: 'A robot that thinks exactly like a human.' },
          { key: 'B', text: 'A computer system that can recognize patterns and support decisions.' },
          { key: 'C', text: 'A database that only stores phone numbers.' },
          { key: 'D', text: 'A program that needs every instruction written by a human.' },
        ],
        answer: 'B',
        explanation: 'AI processes information to perform complex tasks such as pattern recognition and language understanding.',
      },
    ],
    reflection: 'Why do many people use AI personally while organizations adopt it more slowly?',
    glossary: [
      { term: 'Artificial Intelligence', definition: 'Systems that imitate human-like skills such as language understanding, image recognition and decision support.' },
      { term: 'Machine Learning', definition: 'A method where computers learn from examples and data.' },
      { term: 'Generative AI', definition: 'AI that creates new content such as text, images or audio.' },
    ],
  },
  ha: {
    ...lesson1,
    title: 'Gabatarwa ga AI - Menene hakikaninsa?',
    objective:
      'Wannan darasi yana bayyana AI cikin sauki: yadda yake aiki, inda ake amfani da shi, da yadda zai taimaka a rayuwa da aikin Afirka.',
    content: [
      {
        title: 'AI ba labarin kimiyya ba ne',
        body:
          'AI kayan aiki ne da ke taimakawa wajen warware matsaloli. Yana iya fahimtar harshe, gane hoto, ko taimakawa wajen yanke shawara.',
      },
      {
        title: 'Yadda AI yake koyo',
        body:
          'AI yana koyo daga bayanai masu kyau. Bayanai kamar mai ne ga injin. Idan bayanai ba su da kyau, sakamakon AI ma ba zai zama abin dogaro ba.',
      },
      {
        title: 'AI da kake amfani da shi',
        body:
          'Kana iya amfani da AI a WhatsApp, taswira, mobile money, ko kayan aikin da ke rubuta rahoto da sauri.',
      },
      {
        title: 'AI a Afirka yau',
        body:
          'A Afirka, AI yana taimaka wa noma, lafiya, ilimi da aikin jin kai. Abin muhimmanci shi ne ya dace da yanayin gida.',
      },
    ],
    example: {
      title: 'Chatbot na AI don horar da ma’aikatan lafiya',
      challenge: 'Ma’aikatan wurare masu nisa ba sa samun horo cikin sauki.',
      solution: 'Chatbot ya taimaka wajen amsa tambayoyi cikin sirri da aminci.',
      impact: 'Lokacin da aka bayyana kariyar bayanai, mutane sun fi amincewa da kayan aikin.',
    },
    practice: {
      title: 'Gwada fassarar AI a wayarka',
      instructions: [
        'Bude app na fassara ko mataimakin AI.',
        'Fadi jimla cikin Hausa ko wani harshe na gida.',
        'Nemi ya fassara zuwa Turanci kuma ya mayar da ita email na aiki.',
      ],
      observation: 'AI ya fahimci ma’anar jimlar? Rubuta abin da ya yi daidai da kuskure daya.',
    },
    quiz: [
      {
        question: 'Menene saukin ma’anar AI?',
        options: [
          { key: 'A', text: 'Robot da yake tunani kamar mutum.' },
          { key: 'B', text: 'Tsarin kwamfuta da ke gane tsari kuma yana taimaka yanke shawara.' },
          { key: 'C', text: 'Wurin adana lambobin waya kawai.' },
          { key: 'D', text: 'Shiri da mutum zai rubuta komai kafin ya yi aiki.' },
        ],
        answer: 'B',
        explanation: 'AI yana sarrafa bayanai domin gane abubuwa da fahimtar harshe.',
      },
    ],
    reflection: 'Me yasa mutane da yawa suna amfani da AI kansu amma kungiyoyi suna daukar lokaci kafin su karbe shi?',
    glossary: [
      { term: 'AI', definition: 'Tsari da ke kwaikwayon wasu fasahohin mutum kamar fahimtar harshe.' },
      { term: 'Machine Learning', definition: 'Hanya da kwamfuta ke koyo daga misalai da bayanai.' },
      { term: 'Generative AI', definition: 'AI da ke kirkirar rubutu, hoto ko sauti.' },
    ],
  },
};

export function localizeModule(module: LearningModule, lang: Language): LearningModule {
  const directModuleCopy = module.translations?.[lang];
  const moduleCopy = copy[lang][module.slug];
  const resolvedModuleCopy = directModuleCopy || moduleCopy;

  return {
    ...module,
    title: resolvedModuleCopy?.title || module.title,
    subtitle: resolvedModuleCopy?.subtitle || module.subtitle,
    description: resolvedModuleCopy?.description || module.description,
    level: resolvedModuleCopy?.level || module.level,
    courses: module.courses.map((course) => ({
      ...course,
      ...(moduleCopy?.courses?.[course.id] || {}),
      ...(course.translations?.[lang] || {}),
    })),
  };
}

export function localizeModules(modules: LearningModule[], lang: Language) {
  return modules.map((module) => localizeModule(module, lang));
}

export function getLessonOne(lang: Language) {
  return lesson1ByLanguage[lang];
}

// Registry of hand-authored lessons, keyed by `${moduleSlug}/${courseId}`.
// To publish real content for a course (video URLs + rich sections + quiz),
// author a `Record<Language, LessonContent>` (see `lesson1ByLanguage` above for
// a complete trilingual example) and add a loader here. Courses without an entry
// fall back to the auto-generated template in LessonPlayer's `buildLesson`.
// See docs/authoring-lessons.md.
//
// Lesson bodies are the heaviest content in the app: 19 lessons x 3 languages is
// ~270 kB gzipped. They are loaded on demand — one lesson is ~15 kB gzipped —
// so opening a lesson on a 2G link does not pay for the whole catalogue, and
// the service worker keeps each visited lesson available offline.
type LessonBundle = Record<Language, LessonContent>;

const authoredLessonLoaders: Record<string, () => Promise<LessonBundle>> = {
  'intelligence-artificielle/c2': () => import('./lessons/ia-c2-llms').then((m) => m.iaLessonC2),
  'intelligence-artificielle/c3': () => import('./lessons/ia-c3-prompting').then((m) => m.iaLessonC3),
  'intelligence-artificielle/c4': () => import('./lessons/ia-c4-organisations').then((m) => m.iaLessonC4),
  'intelligence-artificielle/c5': () => import('./lessons/ia-c5-automatisation').then((m) => m.iaLessonC5),
  'intelligence-artificielle/c6': () => import('./lessons/ia-c6-ethique').then((m) => m.iaLessonC6),
  'intelligence-artificielle/c7': () => import('./lessons/ia-c7-outils').then((m) => m.iaLessonC7),
  'intelligence-artificielle/c8': () => import('./lessons/ia-c8-evaluation').then((m) => m.iaLessonC8),
  'gestion-projet/p1': () => import('./lessons/pm-p1-cadrage').then((m) => m.pmLessonP1),
  'gestion-projet/p2': () => import('./lessons/pm-p2-mvp').then((m) => m.pmLessonP2),
  'gestion-projet/p3': () => import('./lessons/pm-p3-sprint').then((m) => m.pmLessonP3),
  'gestion-projet/p4': () => import('./lessons/pm-p4-risques').then((m) => m.pmLessonP4),
  'gestion-projet/p5': () => import('./lessons/pm-p5-retrospective').then((m) => m.pmLessonP5),
  'data-analysis/d1': () => import('./lessons/da-d1-nettoyage').then((m) => m.daLessonD1),
  'data-analysis/d2': () => import('./lessons/da-d2-tableaux-croises').then((m) => m.daLessonD2),
  'data-analysis/d3': () => import('./lessons/da-d3-python').then((m) => m.daLessonD3),
  'data-analysis/d4': () => import('./lessons/da-d4-visualisation').then((m) => m.daLessonD4),
  'data-analysis/d5': () => import('./lessons/da-d5-raconter').then((m) => m.daLessonD5),
  'data-analysis/d6': () => import('./lessons/da-d6-mini-projet').then((m) => m.daLessonD6),
};

// Lesson 1 of module 1 ships with the shell: it is the entry point of the
// learning path (and the fallback lesson), so it must render with no extra
// round trip.
const eagerLessons: Record<string, LessonBundle> = {
  'intelligence-artificielle/c1': lesson1ByLanguage,
  'introduction-claude-ai/cl1': claudeLesson1ByLanguage,
  'introduction-claude-ai/cl2': claudeLesson2ByLanguage,
  'introduction-claude-ai/cl3': claudeLesson3ByLanguage,
  'introduction-claude-ai/cl4': claudeLesson4ByLanguage,
  'introduction-claude-ai/cl5': claudeLesson5ByLanguage,
  'introduction-claude-ai/cl6': claudeLesson6ByLanguage,
};

/** True when real authored content exists for this course (eager or lazy). */
export function hasAuthoredLesson(moduleSlug: string, courseId: string): boolean {
  const key = `${moduleSlug}/${courseId}`;
  return key in eagerLessons || key in authoredLessonLoaders;
}

/** Synchronous lookup — only resolves lessons bundled with the shell. */
export function getAuthoredLesson(
  moduleSlug: string,
  courseId: string,
  lang: Language
): LessonContent | null {
  return eagerLessons[`${moduleSlug}/${courseId}`]?.[lang] ?? null;
}

/** Loads authored content, fetching the lesson chunk when needed. */
export async function loadAuthoredLesson(
  moduleSlug: string,
  courseId: string,
  lang: Language
): Promise<LessonContent | null> {
  const eager = getAuthoredLesson(moduleSlug, courseId, lang);
  if (eager) return eager;
  const loader = authoredLessonLoaders[`${moduleSlug}/${courseId}`];
  if (!loader) return null;
  try {
    return (await loader())[lang] ?? null;
  } catch {
    // Offline / flaky link: the caller falls back to the generated template.
    return null;
  }
}
