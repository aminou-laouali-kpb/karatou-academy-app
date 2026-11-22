import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StudentNav } from '../layouts/StudentNav';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { LessonContent } from '../data/lessonContent';
import { getAuthoredLesson, hasAuthoredLesson, localizeModule } from '../data/localizedContent';
import { resolveLessonContent } from '../services/lessonContentRepository';
import { isSupabaseConfigured } from '../lib/supabaseClient';
import { useAuth } from '../hooks/useAuth';
import { useLearning } from '../hooks/useLearning';
import { useLanguage } from '../hooks/useLanguage';
import { useLessonNote } from '../hooks/useLessonNote';
import { Language } from '../data/translations';
import {
  Check,
  Play,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Target,
  BookOpen,
  Lightbulb,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const tabs = ['objective', 'video', 'content', 'example', 'practice', 'quiz', 'reflection', 'glossary'] as const;
type LessonTab = typeof tabs[number];

/** Share of correct answers needed to complete a lesson. */
const QUIZ_PASS_RATIO = 0.7;

function buildLesson(moduleTitle: string, courseTitle: string, courseIndex: number, description: string, lang: Language): LessonContent {
  const generated = {
    fr: {
      objective: `A la fin de cette lecon, vous saurez appliquer "${courseTitle}" dans un contexte professionnel concret pour le module ${moduleTitle}.`,
      why: 'Pourquoi cette competence compte',
      whyBody: `${description}\n\nDans un MVP, l'objectif est de tester que l'apprenant comprend la valeur pratique du concept avant de passer a l'etape suivante.`,
      method: 'Methode simple',
      methodBody: 'Commencez par identifier le probleme, choisissez un exemple reel, appliquez une methode courte, puis documentez le resultat obtenu. Cette sequence rend le cours testable et utile.',
      quality: 'Controle qualite',
      qualityBody: "Avant de valider, verifiez que la reponse est comprehensible par un collegue, qu'elle respecte les contraintes locales et qu'elle peut etre expliquee en moins de deux minutes.",
      exampleTitle: `Application terrain: ${courseTitle}`,
      challenge: 'Une equipe doit comprendre rapidement comment utiliser cette competence sans formation longue.',
      solution: 'Le cours propose un exemple court, une pratique guidee et un quiz de validation.',
      impact: "L'equipe peut tester la comprehension, suivre la progression et debloquer une certification quand le module est termine.",
      practiceTitle: `Mini-exercice: ${courseTitle}`,
      steps: [
        'Choisissez un cas reel lie a votre travail ou a vos etudes.',
        'Ecrivez en trois lignes le probleme, la solution possible et le resultat attendu.',
        'Verifiez si la solution peut etre mesuree avec un indicateur simple.',
      ],
      observation: 'Une bonne reponse doit etre concrete, mesurable et facile a expliquer.',
      q1: `Quel est le meilleur signe que vous avez compris "${courseTitle}" ?`,
      q1a: 'Je peux recopier la definition exacte.',
      q1b: 'Je peux appliquer le concept a un cas reel et expliquer mon choix.',
      q1c: 'Je passe directement a la certification sans pratique.',
      q1d: 'Je garde le concept theorique uniquement.',
      q1exp: 'Le MVP doit valider une competence applicable, pas seulement une memorisation.',
      q2: 'Que faut-il faire avant de marquer une lecon comme terminee ?',
      q2a: 'Lire le contenu, faire la pratique et verifier le quiz.',
      q2b: 'Cliquer le plus vite possible.',
      q2c: 'Ignorer les exemples.',
      q2d: 'Fermer le navigateur.',
      q2exp: 'Le cours est pret pour test quand le parcours lecture, pratique et validation fonctionne.',
      reflection: `Comment pourriez-vous utiliser "${courseTitle}" cette semaine dans une activite reelle ?`,
      glossaryMvp: 'Version minimale mais testable qui prouve les parcours essentiels.',
      glossaryValidation: "Action de confirmer qu'une competence est comprise et applicable.",
      glossaryProgression: 'Mesure des lecons terminees dans un module.',
    },
    en: {
      objective: `By the end of this lesson, you will be able to apply "${courseTitle}" in a concrete professional context for the ${moduleTitle} module.`,
      why: 'Why this skill matters',
      whyBody: `${description}\n\nIn an MVP, the goal is to test that the learner understands the practical value before moving forward.`,
      method: 'Simple method',
      methodBody: 'Start with the problem, choose a real example, apply a short method, then document the result. This makes the course testable and useful.',
      quality: 'Quality check',
      qualityBody: 'Before validating, make sure the answer is clear to a colleague, fits local constraints and can be explained in under two minutes.',
      exampleTitle: `Field application: ${courseTitle}`,
      challenge: 'A team needs to understand how to use this skill without a long training cycle.',
      solution: 'The course provides a short example, guided practice and a validation quiz.',
      impact: 'The team can test understanding, track progress and unlock certification when the module is completed.',
      practiceTitle: `Mini exercise: ${courseTitle}`,
      steps: [
        'Choose a real case from your work or studies.',
        'Write the problem, possible solution and expected result in three lines.',
        'Check whether the solution can be measured with a simple indicator.',
      ],
      observation: 'A good answer should be concrete, measurable and easy to explain.',
      q1: `What is the best sign that you understood "${courseTitle}"?`,
      q1a: 'I can copy the exact definition.',
      q1b: 'I can apply the concept to a real case and explain my choice.',
      q1c: 'I go straight to certification without practice.',
      q1d: 'I keep the concept theoretical only.',
      q1exp: 'The MVP validates an applicable skill, not only memorization.',
      q2: 'What should you do before marking a lesson completed?',
      q2a: 'Read the content, do the practice and check the quiz.',
      q2b: 'Click as fast as possible.',
      q2c: 'Ignore the examples.',
      q2d: 'Close the browser.',
      q2exp: 'The course is ready to test when reading, practice and validation all work.',
      reflection: `How could you use "${courseTitle}" this week in a real activity?`,
      glossaryMvp: 'A minimal but testable version that proves the essential journeys.',
      glossaryValidation: 'The act of confirming that a skill is understood and applicable.',
      glossaryProgression: 'A measure of completed lessons inside a module.',
    },
    ha: {
      objective: `A karshen wannan darasi, za ka iya amfani da "${courseTitle}" a aiki na gaske a cikin darasin ${moduleTitle}.`,
      why: 'Dalilin da wannan kwarewa take da amfani',
      whyBody: `${description}\n\nA MVP, burin shi ne a gwada ko dalibi ya fahimci amfanin wannan kwarewa kafin ya ci gaba.`,
      method: 'Hanya mai sauki',
      methodBody: 'Fara da matsala, zabi misali na gaske, yi amfani da hanya gajeriya, sannan rubuta sakamako.',
      quality: 'Duba inganci',
      qualityBody: 'Kafin tabbatarwa, ka duba ko amsar ta bayyana, ta dace da yanayin gida, kuma za a iya bayyanata cikin minti biyu.',
      exampleTitle: `Aiki a fili: ${courseTitle}`,
      challenge: 'Tawaga tana bukatar fahimtar wannan kwarewa ba tare da dogon horo ba.',
      solution: 'Darasin yana bada misali, aiki na gwaji da quiz.',
      impact: 'Tawaga za ta iya gwada fahimta, bibiyar ci gaba, kuma bude takardar shaida.',
      practiceTitle: `Karamin aiki: ${courseTitle}`,
      steps: [
        'Zabi misali na gaske daga aiki ko karatu.',
        'Rubuta matsala, mafita da sakamako a layi uku.',
        'Duba ko za a iya auna sakamakon da alama mai sauki.',
      ],
      observation: 'Amsa mai kyau ta zama takamaimai, mai aunuwa, kuma mai saukin bayani.',
      q1: `Menene alamar cewa ka fahimci "${courseTitle}"?`,
      q1a: 'Zan iya kwafi maanar kawai.',
      q1b: 'Zan iya amfani da shi a misali na gaske kuma in bayyana zabina.',
      q1c: 'Zan wuce kai tsaye zuwa takarda ba tare da aiki ba.',
      q1d: 'Zan bar shi a matsayin tunani kawai.',
      q1exp: 'MVP yana tabbatar da kwarewa da za a iya amfani da ita, ba haddacewa kadai ba.',
      q2: 'Me ya kamata ka yi kafin ka sanya alama cewa an gama darasi?',
      q2a: 'Karanta abun ciki, yi aiki, kuma duba quiz.',
      q2b: 'Danna da sauri kawai.',
      q2c: 'Wuce misalai.',
      q2d: 'Rufe browser.',
      q2exp: 'Darasi yana shirye don gwaji idan karatu, aiki da tabbatarwa suna aiki.',
      reflection: `Ta yaya za ka yi amfani da "${courseTitle}" wannan mako a aiki na gaske?`,
      glossaryMvp: 'Sigar farko mai karanci amma ana iya gwadawa.',
      glossaryValidation: 'Tabbatar da cewa an fahimci kwarewa kuma ana iya amfani da ita.',
      glossaryProgression: 'Auna darussan da aka gama a cikin module.',
    },
  }[lang];

  return {
    id: `generated-${courseIndex + 1}`,
    lessonNumber: courseIndex + 1,
    title: courseTitle,
    objective: generated.objective,
    video: { fr: '', en: '', ha: '' },
    content: [
      {
        title: generated.why,
        body: generated.whyBody,
      },
      {
        title: generated.method,
        body: generated.methodBody,
      },
      {
        title: generated.quality,
        body: generated.qualityBody,
      },
    ],
    example: {
      title: generated.exampleTitle,
      challenge: generated.challenge,
      solution: generated.solution,
      impact: generated.impact,
    },
    practice: {
      title: generated.practiceTitle,
      instructions: generated.steps,
      observation: generated.observation,
    },
    quiz: [
      {
        question: generated.q1,
        options: [
          { key: 'A', text: generated.q1a },
          { key: 'B', text: generated.q1b },
          { key: 'C', text: generated.q1c },
          { key: 'D', text: generated.q1d },
        ],
        answer: 'B',
        explanation: generated.q1exp,
      },
      {
        question: generated.q2,
        options: [
          { key: 'A', text: generated.q2a },
          { key: 'B', text: generated.q2b },
          { key: 'C', text: generated.q2c },
          { key: 'D', text: generated.q2d },
        ],
        answer: 'A',
        explanation: generated.q2exp,
      },
    ],
    reflection: generated.reflection,
    glossary: [
      { term: 'MVP', definition: generated.glossaryMvp },
      { term: 'Validation', definition: generated.glossaryValidation },
      { term: 'Progression', definition: generated.glossaryProgression },
    ],
  };
}

export function LessonPlayer() {
  const navigate = useNavigate();
  const { moduleSlug, courseId } = useParams();
  const { user } = useAuth();
  const { lang, t } = useLanguage();
  const {
    modules,
    contentLoading,
    getCompletedCourseIds,
    isCourseCompleted,
    getProgress,
    completeCourse,
    issueCertificate,
    getUserCertificates,
  } = useLearning();
  const [activeTab, setActiveTab] = useState<LessonTab>('objective');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});
  const [videoLang, setVideoLang] = useState<Language>(lang);
  // null = choix automatique : la présentation s'ouvre quand on arrive sur le cours sans leçon choisie.
  const [introOpen, setIntroOpen] = useState<boolean | null>(null);
  const [expandedBloc, setExpandedBloc] = useState<number | null>(0);
  const [issuedUid, setIssuedUid] = useState('');
  const openSidebarBtnRef = useRef<HTMLButtonElement>(null);
  const closeSidebarBtnRef = useRef<HTMLButtonElement>(null);

  const closeSidebar = () => {
    setSidebarOpen(false);
    openSidebarBtnRef.current?.focus();
  };

  // Mobile sidebar a11y: move focus into the panel on open, close on Escape,
  // and restore focus to the toggle on close.
  useEffect(() => {
    if (!sidebarOpen) return;
    closeSidebarBtnRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
        openSidebarBtnRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [sidebarOpen]);

  // Keep the active tab visible inside the horizontally scrollable strip when
  // navigating with the previous/next section arrows.
  const activeTabRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    activeTabRef.current?.scrollIntoView?.({ block: 'nearest', inline: 'center' });
  }, [activeTab]);

  const module = useMemo(() => {
    const sourceModule = moduleSlug
      ? modules.find((candidate) => candidate.slug === moduleSlug)
      : modules[0];
    if (!sourceModule || sourceModule.status === 'draft') return null;
    const localized = localizeModule(sourceModule, lang);
    return {
      ...localized,
      courses: localized.courses.filter((candidate) => candidate.status !== 'draft'),
    };
  }, [modules, moduleSlug, lang]);
  const courseIndex = module ? (courseId ? module.courses.findIndex((candidate) => candidate.id === courseId) : 0) : -1;
  const course = module && courseIndex >= 0 ? module.courses[courseIndex] : undefined;
  const completedIds = module ? getCompletedCourseIds(module.slug) : [];
  const progress = module ? getProgress(module.slug) : 0;
  const hasModuleAccess = Boolean(module && (module.isFree || progress > 0));
  const practiceNote = useLessonNote(user?.id, module?.slug, course?.id, 'practice');
  const reflectionNote = useLessonNote(user?.id, module?.slug, course?.id, 'reflection');
  // A lesson body can come from the CMS (karatou_courses.lesson_content) or
  // from the per-lesson chunks of the TypeScript registry. `resolveLessonContent`
  // tries them in that order; the one lesson bundled with the shell also renders
  // synchronously so the entry point never waits on a round trip.
  const lessonKey = module && course ? `${module.slug}/${course.id}` : null;
  // Quiz answers belong to one lesson. Browser back/forward changes the lesson
  // without going through goToCourse, so reset here — adjusting state during
  // render is React's recommended alternative to an effect for this.
  const quizScopeKey = `${lessonKey ?? ''}|${lang}`;
  const [quizScope, setQuizScope] = useState(quizScopeKey);
  if (quizScope !== quizScopeKey) {
    setQuizScope(quizScopeKey);
    setCurrentQuiz(0);
    setQuizAnswers({});
    setQuizSubmitted({});
  }
  const [loadedLesson, setLoadedLesson] = useState<
    { key: string; lang: Language; content: LessonContent | null } | null
  >(null);
  // Bumped by "Try again" (and by the connection coming back) when a lesson
  // that ships with the app could not be downloaded.
  const [lessonAttempt, setLessonAttempt] = useState(0);

  useEffect(() => {
    if (!module || !course || !lessonKey || !hasModuleAccess) return;
    let active = true;
    resolveLessonContent(module.slug, course.id, lang).then((content) => {
      if (active) setLoadedLesson({ key: lessonKey, lang, content });
    });
    return () => { active = false; };
  }, [module, course, lessonKey, lang, hasModuleAccess, lessonAttempt]);

  const resolvedLesson =
    loadedLesson && loadedLesson.key === lessonKey && loadedLesson.lang === lang
      ? loadedLesson.content
      : undefined;
  const eagerLesson = module && course ? getAuthoredLesson(module.slug, course.id, lang) : null;
  // The resolver wins once it answers (an admin edit must override the bundled
  // copy); until then the eager body keeps the first paint instant.
  const authoredLesson = resolvedLesson ?? eagerLesson;
  // Real content may still be in flight — a lesson chunk, or the CMS lookup:
  // wait rather than flash the generated template.
  const lessonPending = Boolean(
    lessonKey &&
      module &&
      course &&
      !authoredLesson &&
      resolvedLesson === undefined &&
      (isSupabaseConfigured || hasAuthoredLesson(module.slug, course.id))
  );
  // A real lesson exists but its file could not be fetched (offline, 2G drop,
  // stale deploy). Showing the generic template here let learners "complete" a
  // fake lesson; say what happened and offer to try again instead.
  const lessonMissing = Boolean(
    module && course && resolvedLesson === null && !eagerLesson && hasAuthoredLesson(module.slug, course.id)
  );
  useEffect(() => {
    if (!lessonMissing) return;
    const retry = () => setLessonAttempt((value) => value + 1);
    window.addEventListener('online', retry);
    return () => window.removeEventListener('online', retry);
  }, [lessonMissing]);
  const lesson = useMemo(
    () =>
      module && course && !lessonPending && !lessonMissing
        ? authoredLesson ||
          buildLesson(module.title, course.title, courseIndex, course.description, lang)
        : null,
    [module, course, courseIndex, lang, authoredLesson, lessonPending, lessonMissing]
  );

  if (module && !hasModuleAccess) {
    return (
      <div className="min-h-screen bg-gray-50">
        <StudentNav />
        <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="font-heading text-h2 text-gray-900">{t('subscription')}</h1>
          <p className="text-body text-gray-600 mt-3">{t('lockedSubscription')}</p>
          <Button variant="outline" className="mt-6" onClick={() => navigate('/dashboard')}>
            {t('home')}
          </Button>
        </main>
      </div>
    );
  }

  // Empty production tenant (no published modules / course): clean empty state.
  // While the catalog fetch is still in flight (hard refresh), show a loading
  // message instead of the misleading "no courses yet".
  if (lessonMissing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <StudentNav />
        <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="font-heading text-h3 text-gray-900">{t('lessonUnavailableTitle')}</h1>
          <p role="status" className="text-body text-gray-600 mt-3">{t('lessonUnavailableBody')}</p>
          <Button variant="primary" className="mt-6" onClick={() => setLessonAttempt((value) => value + 1)}>
            {t('retry')}
          </Button>
        </main>
      </div>
    );
  }

  if (!module || !course || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <StudentNav />
        <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center" role="status">
          <p className="text-body text-gray-500">
            {contentLoading || lessonPending ? t('loadingCourses') : t('noCoursesYet')}
          </p>
        </main>
      </div>
    );
  }
  const userCertificates = user ? getUserCertificates(user.id) : [];
  const activeCertificate = userCertificates.find(
    (certificate) => certificate.moduleSlug === module.slug && certificate.status === 'active'
  );
  const currentDone = isCourseCompleted(module.slug, course.id);
  // A lesson is completed only once its quiz is passed: answering every
  // question with at least QUIZ_PASS_RATIO correct. (Server-side grading is the
  // next step; this already stops "5 clicks = certificate" in the app.)
  const quizTotal = lesson.quiz.length;
  const quizIndex = quizTotal > 0 ? Math.min(currentQuiz, quizTotal - 1) : 0;
  const quizQuestion = quizTotal > 0 ? lesson.quiz[quizIndex] : null;
  const quizAnsweredCount = lesson.quiz.filter((_, index) => quizSubmitted[index]).length;
  const quizCorrectCount = lesson.quiz.filter(
    (question, index) => quizSubmitted[index] && quizAnswers[index] === question.answer
  ).length;
  const quizFinished = quizTotal > 0 && quizAnsweredCount === quizTotal;
  const quizPassed = quizTotal === 0 || (quizFinished && quizCorrectCount / quizTotal >= QUIZ_PASS_RATIO);
  const quizScorePercent = quizTotal > 0 ? Math.round((quizCorrectCount / quizTotal) * 100) : 100;
  const retakeQuiz = () => {
    setCurrentQuiz(0);
    setQuizAnswers({});
    setQuizSubmitted({});
  };
  const previousCourse = module.courses[courseIndex - 1];
  const nextCourse = module.courses[courseIndex + 1];
  const videoUrl = lesson.video[videoLang];
  const introUrl = module.introVideo?.[lang] || module.introVideo?.fr || '';
  const showIntro = Boolean(introUrl) && (introOpen ?? !courseId);

  const handleComplete = async () => {
    if (!user) {
      return;
    }
    if (!quizPassed) {
      // Send the learner to the quiz instead of silently refusing.
      setActiveTab('quiz');
      return;
    }

    const nextCompletedIds = completeCourse(module.slug, course.id);
    const nextCompleted = new Set(nextCompletedIds);

    if (nextCompleted.size >= module.courses.length) {
      const certificate = await issueCertificate(user, module.slug, nextCompletedIds);
      if (certificate) {
        setIssuedUid(certificate.uid);
      }
    }
  };

  const openIntro = () => {
    setIntroOpen(true);
    setSidebarOpen(false);
  };

  const goToCourse = (targetCourseId: string) => {
    setIntroOpen(false);
    navigate(`/learn/${module.slug}/${targetCourseId}`);
    setActiveTab('objective');
    setCurrentQuiz(0);
    setQuizAnswers({});
    setQuizSubmitted({});
    setSidebarOpen(false);
  };

  const activeTabIndex = tabs.indexOf(activeTab);
  const goToTab = (index: number) => {
    const target = tabs[index];
    if (target) {
      setActiveTab(target);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentNav />

      <div className="flex">
        <button
          ref={openSidebarBtnRef}
          onClick={() => setSidebarOpen(true)}
          aria-label={t('lessonsList')}
          aria-expanded={sidebarOpen}
          className="lg:hidden fixed bottom-20 left-4 z-30 bg-blue-600 text-white w-10 h-10 rounded-full shadow-blue-lg flex items-center justify-center"
        >
          <Menu size={18} aria-hidden="true" />
        </button>

        <aside className={`
          fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] w-80 bg-white border-r border-gray-200 overflow-y-auto
          transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-eyebrow text-blue-500">{t('module')}</p>
                <h2 className="font-heading text-title text-gray-900">{module.title}</h2>
              </div>
              <button ref={closeSidebarBtnRef} onClick={closeSidebar} className="lg:hidden" aria-label={t('closeMenu')}>
                <X size={20} className="text-gray-500" aria-hidden="true" />
              </button>
            </div>

            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-meta text-gray-500">{t('moduleProgress')}</span>
                <span className="text-meta font-semibold text-blue-600">{progress}%</span>
              </div>
              <ProgressBar value={progress} ariaLabel={t('moduleProgress')} />
            </div>

            <div className="space-y-1">
              {introUrl && (
                <button
                  onClick={openIntro}
                  aria-current={showIntro ? 'page' : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-body transition-colors text-left ${
                    showIntro ? 'bg-amber-50 text-amber-800 font-medium' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Play size={14} className={showIntro ? 'text-amber-600' : 'text-gray-400'} />
                  </span>
                  <span className="flex-1 truncate">{t('courseIntro')}</span>
                </button>
              )}
              {module.courses.map((item, index) => {
                const isCurrent = !showIntro && item.id === course.id;
                const isCompleted = isCourseCompleted(module.slug, item.id);

                return (
                  <button
                    key={item.id}
                    onClick={() => goToCourse(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-body transition-colors text-left ${
                      isCurrent
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : isCompleted
                          ? 'text-gray-600 hover:bg-gray-50'
                          : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {isCompleted ? (
                        <Check size={16} className="text-emerald-500" />
                      ) : isCurrent ? (
                        <Play size={14} className="text-blue-600" />
                      ) : (
                        <BookOpen size={13} className="text-gray-400" />
                      )}
                    </span>
                    <span className="flex-1 truncate">{t('lesson')} {index + 1} - {item.title}</span>
                    <span className="text-meta text-gray-400">{item.duration}</span>
                  </button>
                );
              })}
            </div>

            {activeCertificate && (
              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold text-body">
                  <ShieldCheck size={16} />
                  {t('activeCertificate')}
                </div>
                <p className="text-meta text-emerald-700 mt-2 font-mono">{activeCertificate.uid}</p>
              </div>
            )}
          </div>
        </aside>

        <main id="main-content" className="flex-1 min-w-0 pb-24">
          {showIntro ? (
            <div className="px-4 sm:px-8 py-6 max-w-4xl">
              <p className="text-eyebrow text-amber-600">{t('courseIntro')}</p>
              <h1 className="font-heading text-h3 sm:text-h2 text-gray-900 mb-4">{module.title}</h1>
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-900">
                <iframe
                  src={introUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${t('courseIntro')} - ${module.title}`}
                />
              </div>
              <p className="text-body text-gray-600 mb-6">{module.description}</p>
              <Button variant="gold" onClick={() => goToCourse(module.courses[0].id)}>
                {t('start')} - {t('lesson')} 1 <ChevronRight size={16} />
              </Button>
            </div>
          ) : (
          <>
          <div className="bg-white border-b border-gray-100 px-4 sm:px-8 py-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <p className="text-eyebrow text-blue-500">{t('lesson')} {courseIndex + 1}</p>
              {currentDone && <Badge variant="green">{t('completedBadge')}</Badge>}
            </div>
            <h1 className="font-heading text-h3 sm:text-h2 text-gray-900">{lesson.title}</h1>
          </div>

          <div className="sticky top-16 z-20 bg-white border-b border-gray-200 px-2 sm:px-4">
            <div className="flex items-center">
              <button
                onClick={() => goToTab(activeTabIndex - 1)}
                disabled={activeTabIndex === 0}
                aria-label={t('previousSection')}
                title={t('previousSection')}
                className="flex-shrink-0 p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-colors"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <div className="overflow-x-auto flex-1">
                <div className="flex gap-0 min-w-max">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab}
                      ref={activeTab === tab ? activeTabRef : undefined}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3.5 text-body font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                        activeTab === tab
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <span className="text-meta text-gray-400 font-mono">{index + 1}</span>
                      {t(tab)}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => goToTab(activeTabIndex + 1)}
                disabled={activeTabIndex === tabs.length - 1}
                aria-label={t('nextSection')}
                title={t('nextSection')}
                className="flex-shrink-0 p-2 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-500 transition-colors"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-8 max-w-3xl">
            {issuedUid && (
              <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={22} className="text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-800">{t('certificationIssued')}</p>
                    <p className="text-body text-emerald-700 mt-1">{t('verifiableId')}: {issuedUid}</p>
                    <Button variant="outline" size="sm" className="mt-3" onClick={() => navigate('/certificates')}>
                      {t('seeMyCertificates')}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'objective' && (
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">{t('lessonObjective')}</h3>
                      <p className="text-blue-800 leading-relaxed">{lesson.objective}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                    <Clock size={18} className="text-gray-400" />
                    <div>
                      <p className="text-meta text-gray-500">{t('estimatedDuration')}</p>
                      <p className="text-body font-medium text-gray-900">{course.duration}</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
                    <BookOpen size={18} className="text-gray-400" />
                    <div>
                      <p className="text-meta text-gray-500">{t('level')}</p>
                      <p className="text-body font-medium text-gray-900">{module.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'video' && (
              <div>
                {videoUrl ? (
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                    <iframe
                      src={videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Lecon video - ${videoLang.toUpperCase()}`}
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl flex flex-col items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                      <Play size={28} className="text-white ml-1" />
                    </div>
                    <p className="text-white/90 text-body">{t('videoComingSoon')}</p>
                    <p className="text-white/70 text-meta mt-1">Version {videoLang.toUpperCase()}</p>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-body text-gray-500">{course.title}</p>
                  <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
                    {[
                      { code: 'fr' as const, label: 'FR' },
                      { code: 'en' as const, label: 'EN' },
                      { code: 'ha' as const, label: 'HA' },
                    ].map((item) => (
                      <button
                        key={item.code}
                        onClick={() => setVideoLang(item.code)}
                        className={`px-3 py-1.5 text-meta font-medium rounded-full transition-all ${
                          videoLang === item.code ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="space-y-4">
                {lesson.content.map((bloc, index) => (
                  <div key={bloc.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-blue-sm transition-all">
                    <button
                      onClick={() => setExpandedBloc(expandedBloc === index ? null : index)}
                      className="w-full px-5 py-4 flex items-center gap-3 text-left"
                    >
                      <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 text-body font-bold text-blue-600">
                        {index + 1}
                      </span>
                      <h3 className="font-semibold text-gray-900 flex-1">{bloc.title}</h3>
                      <ChevronRight
                        size={18}
                        className={`text-gray-400 transition-transform duration-200 ${expandedBloc === index ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {expandedBloc === index && (
                      <div className="px-5 pb-5 border-t border-gray-100">
                        <div className="pt-4 space-y-3">
                          {bloc.body.split('\n\n').map((paragraph) => (
                            <p key={paragraph} className="text-body text-gray-700 leading-relaxed">{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'example' && (
              <div className="bg-gold-50 border border-gold-300 rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-eyebrow text-gold-600 mb-1">{t('realCase')}</p>
                    <h3 className="font-heading text-title text-gray-900">{lesson.example.title}</h3>
                  </div>
                </div>
                <div className="space-y-5 sm:ml-8">
                  <div>
                    <p className="text-eyebrow text-gray-500 mb-1">{t('challenge')}</p>
                    <p className="text-body text-gray-800 leading-relaxed">{lesson.example.challenge}</p>
                  </div>
                  <div>
                    <p className="text-eyebrow text-gray-500 mb-1">{t('solution')}</p>
                    <p className="text-body text-gray-800 leading-relaxed">{lesson.example.solution}</p>
                  </div>
                  <div className="bg-white/60 rounded-xl p-4 border border-gold-200">
                    <p className="text-eyebrow text-emerald-600 mb-1">{t('measurableImpact')}</p>
                    <p className="text-body text-gray-800 leading-relaxed">{lesson.example.impact}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'practice' && (
              <div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
                  <h3 className="text-title text-gray-900 mb-4">{lesson.practice.title}</h3>
                  <ol className="space-y-3">
                    {lesson.practice.instructions.map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-meta font-bold text-blue-600 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="text-body text-gray-700 leading-relaxed">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                  <p className="text-body text-blue-800 leading-relaxed">
                    <strong>{t('observe')} :</strong> {lesson.practice.observation}
                  </p>
                </div>
                <textarea
                  aria-label={t('practice')}
                  value={practiceNote.value}
                  onChange={(event) => practiceNote.change(event.target.value)}
                  className="w-full h-40 border border-gray-200 rounded-xl p-4 text-body text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                  placeholder={t('notesPlaceholder')}
                />
                <p className="text-meta text-gray-500 mt-2">
                  {practiceNote.status === 'saved' ? t('noteSaved') : practiceNote.status === 'error' ? t('noteSaveFailed') : ''}
                </p>
                <p className="text-meta text-gray-500 mt-1">{t('localSave')}</p>
              </div>
            )}

            {activeTab === 'quiz' && quizQuestion && (
              <div>
                {!currentDone && (
                  <p
                    role="status"
                    className={`mb-5 rounded-xl border px-4 py-3 text-body ${
                      quizPassed
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                        : quizFinished
                          ? 'border-amber-200 bg-amber-50 text-amber-800'
                          : 'border-blue-100 bg-blue-50 text-blue-800'
                    }`}
                  >
                    {quizPassed
                      ? `${t('quizPassed')} — ${t('quizScore')} : ${quizScorePercent} %`
                      : quizFinished
                        ? `${t('quizScore')} : ${quizScorePercent} %. ${t('quizRequiredHint')}`
                        : t('quizRequiredHint')}
                    {quizFinished && !quizPassed && (
                      <button type="button" onClick={retakeQuiz} className="ml-2 font-semibold underline">
                        {t('quizRetry')}
                      </button>
                    )}
                  </p>
                )}
                <div className="flex items-center gap-2 mb-6">
                  {lesson.quiz.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuiz(index)}
                      className={`w-8 h-8 rounded-full text-meta font-bold flex items-center justify-center transition-all ${
                        index === quizIndex
                          ? 'bg-blue-500 text-white'
                          : quizSubmitted[index]
                            ? quizAnswers[index] === lesson.quiz[index].answer
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <span className="text-meta text-gray-500 ml-2">
                    {quizAnsweredCount}/{quizTotal} {t('answered')}
                  </span>
                </div>

                <p id="quiz-question" className="text-title text-gray-900 mb-5">{quizQuestion.question}</p>
                <div className="space-y-3 mb-6" role="radiogroup" aria-labelledby="quiz-question">
                  {quizQuestion.options.map((option) => {
                    const isCorrect = option.key === quizQuestion.answer;
                    const isSelected = quizAnswers[quizIndex] === option.key;
                    const isSubmitted = quizSubmitted[quizIndex];

                    return (
                      <label
                        key={option.key}
                        className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                          isSubmitted && isCorrect
                            ? 'border-emerald-400 bg-emerald-50'
                            : isSubmitted && isSelected && !isCorrect
                              ? 'border-red-400 bg-red-50'
                              : isSelected
                                ? 'border-blue-400 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`quiz-${quizIndex}`}
                          value={option.key}
                          checked={isSelected}
                          onChange={() => !isSubmitted && setQuizAnswers({ ...quizAnswers, [quizIndex]: option.key })}
                          className="w-4 h-4 text-blue-500"
                        />
                        <span className="text-body text-gray-700">
                          <strong>{option.key})</strong> {option.text}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {!quizSubmitted[quizIndex] ? (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setQuizSubmitted({ ...quizSubmitted, [quizIndex]: true })}
                    disabled={!quizAnswers[quizIndex]}
                  >
                    {t('validateAnswer')}
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <p className={`text-body font-medium ${
                      quizAnswers[quizIndex] === quizQuestion.answer ? 'text-emerald-600' : 'text-red-600'
                    }`}>
                      {quizAnswers[quizIndex] === quizQuestion.answer
                        ? t('goodAnswer')
                        : `${t('wrongAnswer')} ${quizQuestion.answer}.`}
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <p className="text-body text-gray-700 leading-relaxed">
                        <strong>{t('explanation')} :</strong> {quizQuestion.explanation}
                      </p>
                    </div>
                    {quizIndex < quizTotal - 1 && (
                      <Button variant="outline" size="sm" onClick={() => setCurrentQuiz(quizIndex + 1)}>
                        {t('nextQuestion')} <ChevronRight size={14} />
                      </Button>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'reflection' && (
              <div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6 mb-5">
                  <p className="font-semibold text-gray-900 leading-relaxed">{lesson.reflection}</p>
                </div>
                <textarea
                  aria-label={t('reflection')}
                  value={reflectionNote.value}
                  onChange={(event) => reflectionNote.change(event.target.value)}
                  className="w-full h-48 border border-gray-200 rounded-xl p-4 text-body text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                  placeholder={t('reflectionPlaceholder')}
                />
                <p className="text-meta text-gray-500 mt-2">
                  {reflectionNote.status === 'saved' ? t('noteSaved') : reflectionNote.status === 'error' ? t('noteSaveFailed') : ''}
                </p>
                <p className="text-meta text-gray-500 mt-1">{t('localSave')}</p>
              </div>
            )}

            {activeTab === 'glossary' && (
              <div className="space-y-3">
                {lesson.glossary.map((item) => (
                  <div key={item.term} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-blue-sm transition-all">
                    <p className="font-semibold text-gray-900 mb-1.5">{item.term}</p>
                    <p className="text-body text-gray-600 leading-relaxed">{item.definition}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="fixed bottom-0 left-0 right-0 lg:left-80 bg-white border-t border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 z-20">
            <Button variant="ghost" size="sm" disabled={!previousCourse} onClick={() => previousCourse && goToCourse(previousCourse.id)}>
              <ChevronLeft size={16} /> {t('previous')}
            </Button>
            <div className="hidden sm:flex items-center gap-3">
              <ProgressBar value={progress} ariaLabel={t('moduleProgress')} className="w-32" />
              <span className="text-meta text-gray-500 font-mono">{completedIds.length}/{module.courses.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={currentDone ? 'outline' : 'gold'} size="sm" onClick={handleComplete} disabled={currentDone}>
                {currentDone ? t('alreadyDone') : t('markDone')}
              </Button>
              <Button variant="primary" size="sm" disabled={!nextCourse} onClick={() => nextCourse && goToCourse(nextCourse.id)}>
                {t('next')} <ChevronRight size={16} />
              </Button>
            </div>
          </div>
          </>
          )}
        </main>
      </div>
    </div>
  );
}
