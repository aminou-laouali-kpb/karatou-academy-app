import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Languages,
  Plus,
  Save,
  Sparkles,
  Trash2,
  Undo2,
} from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useLearning } from '../hooks/useLearning';
import { LessonContent } from '../data/lessonContent';
import {
  LESSON_LANGUAGES,
  LessonBundle,
  emptyLessonContent,
  lessonCompleteness,
} from '../data/lessonContentSchema';
import { loadAuthoredLesson } from '../data/localizedContent';
import { Language } from '../data/translations';
import {
  fetchLessonBundle,
  generateLessonDraft,
  saveLessonBundle,
} from '../services/lessonContentRepository';

const inputClass =
  'mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-body outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15';
const areaClass = `${inputClass} min-h-28 leading-relaxed`;
const cardClass = 'bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm';

type Notice = { tone: 'success' | 'error' | 'info'; message: string };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-body font-medium text-gray-700">{label}</span>
      {children}
    </label>
  );
}

export function AdminLessonStudio() {
  const { modules } = useLearning();
  const { authMode } = useAuth();
  const { t } = useLanguage();
  const isSupabase = authMode === 'supabase';

  const [moduleSlug, setModuleSlug] = useState('');
  const [courseId, setCourseId] = useState('');
  const [editing, setEditing] = useState<Language>('fr');
  // `stored` is what the database (or the registry) last gave us; `draft` holds
  // the admin's unsaved edits. Keying both by lesson means switching lessons can
  // never show the previous lesson's text, and "revert" is just dropping `draft`.
  const [stored, setStored] = useState<{ key: string; bundle: LessonBundle } | null>(null);
  const [draft, setDraft] = useState<{ key: string; bundle: LessonBundle } | null>(null);
  const [busy, setBusy] = useState<'generate' | 'translate' | 'save' | null>(null);
  const [guidance, setGuidance] = useState('');
  const [notice, setNotice] = useState<Notice | null>(null);

  const module = useMemo(
    () => modules.find((item) => item.slug === moduleSlug) || modules[0],
    [modules, moduleSlug]
  );
  const courses = useMemo(() => module?.courses || [], [module]);
  const course = useMemo(
    () => courses.find((item) => item.id === courseId) || courses[0],
    [courses, courseId]
  );
  const lessonNumber = course ? courses.findIndex((item) => item.id === course.id) + 1 : 1;
  const lessonKey = module && course ? `${module.slug}/${course.id}` : '';

  // Load the saved body for the selected lesson; fall back to the shipped
  // TypeScript registry so an admin starts from the real content instead of a
  // blank page for the 19 lessons that predate the CMS.
  useEffect(() => {
    if (!module || !course || !lessonKey) return;
    let active = true;

    const load = async () => {
      let saved: LessonBundle = {};
      if (isSupabase) {
        try {
          saved = await fetchLessonBundle(course.id);
        } catch (error) {
          if (active) {
            setNotice({ tone: 'error', message: error instanceof Error ? error.message : 'error' });
          }
        }
      }

      const missing = LESSON_LANGUAGES.filter((lang) => !saved[lang]);
      const fromRegistry = await Promise.all(
        missing.map((lang) => loadAuthoredLesson(module.slug, course.id, lang))
      );
      const merged: LessonBundle = { ...saved };
      missing.forEach((lang, index) => {
        const content = fromRegistry[index];
        if (content) merged[lang] = content;
      });

      if (active) setStored({ key: lessonKey, bundle: merged });
    };

    void load();
    return () => { active = false; };
  }, [module, course, lessonKey, isSupabase]);

  const loading = Boolean(course) && stored?.key !== lessonKey;
  const dirty = draft?.key === lessonKey;
  const bundle: LessonBundle = useMemo(
    () => (draft?.key === lessonKey
      ? draft.bundle
      : stored?.key === lessonKey
        ? stored.bundle
        : {}),
    [draft, stored, lessonKey]
  );

  const current = course
    ? bundle[editing] || emptyLessonContent(course.id, lessonNumber, course.title)
    : null;

  const editBundle = useCallback(
    (update: (previous: LessonBundle) => LessonBundle) => {
      if (!lessonKey) return;
      setDraft((previous) => ({
        key: lessonKey,
        bundle: update(previous?.key === lessonKey ? previous.bundle : bundle),
      }));
    },
    [lessonKey, bundle]
  );

  const patch = useCallback(
    (changes: Partial<LessonContent>) => {
      if (!course) return;
      editBundle((previous) => {
        const base = previous[editing] || emptyLessonContent(course.id, lessonNumber, course.title);
        return { ...previous, [editing]: { ...base, ...changes } };
      });
    },
    [course, editing, lessonNumber, editBundle]
  );

  /** Video URLs describe the lesson, not one translation: keep them in sync. */
  const patchVideo = (lang: Language, url: string) => {
    if (!course) return;
    editBundle((previous) => {
      const next: LessonBundle = {};
      LESSON_LANGUAGES.forEach((key) => {
        const body = previous[key];
        if (body) next[key] = { ...body, video: { ...body.video, [lang]: url } };
      });
      const base = previous[editing] || emptyLessonContent(course.id, lessonNumber, course.title);
      if (!next[editing]) next[editing] = { ...base, video: { ...base.video, [lang]: url } };
      return next;
    });
  };

  const handleGenerate = async (mode: 'generate' | 'translate') => {
    if (!module || !course || !current) return;
    if (mode === 'translate' && !bundle.fr) {
      setNotice({ tone: 'error', message: t('lsNoSource') });
      return;
    }
    if (lessonCompleteness(bundle[editing]) > 0 && !window.confirm(t('lsGenerateConfirm'))) return;

    setNotice(null);
    setBusy(mode);
    try {
      const generated = await generateLessonDraft({
        moduleSlug: module.slug,
        moduleTitle: module.title,
        courseId: course.id,
        courseTitle: course.title,
        courseDescription: course.description,
        duration: course.duration,
        lessonNumber,
        language: editing,
        guidance,
        source: mode === 'translate' ? bundle.fr : undefined,
      });
      // The draft carries no video URLs — keep whatever the lesson already has.
      editBundle((previous) => ({
        ...previous,
        [editing]: { ...generated, video: previous[editing]?.video || current.video },
      }));
      setNotice({ tone: 'info', message: t('lsDraftReady') });
    } catch (error) {
      setNotice({ tone: 'error', message: error instanceof Error ? error.message : 'error' });
    } finally {
      setBusy(null);
    }
  };

  const handleSave = async () => {
    if (!course || !lessonKey) return;
    setNotice(null);
    setBusy('save');
    try {
      await saveLessonBundle(course.id, bundle);
      setStored({ key: lessonKey, bundle });
      setDraft(null);
      setNotice({ tone: 'success', message: t('lsSaved') });
    } catch (error) {
      setNotice({ tone: 'error', message: error instanceof Error ? error.message : 'error' });
    } finally {
      setBusy(null);
    }
  };

  const sections = current?.content || [];
  const quiz = current?.quiz || [];
  const glossary = current?.glossary || [];
  const instructions = current?.practice.instructions || [];

  const moveSection = (index: number, delta: number) => {
    const next = [...sections];
    const target = index + delta;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    patch({ content: next });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-7">
          <p className="text-eyebrow text-blue-600">Karatou</p>
          <h1 className="font-heading text-h1 text-gray-900 mt-1">{t('lsTitle')}</h1>
          <p className="text-body text-gray-500 mt-2 max-w-3xl">{t('lsIntro')}</p>
        </div>

        {!isSupabase && (
          <div className="mb-6 flex items-start gap-2 rounded-2xl border border-gold-200 bg-gold-50 px-4 py-3 text-body text-gold-700" role="status">
            <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>{t('lsDemoNote')}</span>
          </div>
        )}

        {notice && (
          <div
            className={`mb-6 flex items-start gap-2 rounded-2xl border px-4 py-3 text-body ${
              notice.tone === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : notice.tone === 'info'
                  ? 'border-blue-200 bg-blue-50 text-blue-700'
                  : 'border-red-200 bg-red-50 text-red-700'
            }`}
            role={notice.tone === 'error' ? 'alert' : 'status'}
          >
            {notice.tone === 'error'
              ? <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              : <CheckCircle2 size={16} className="mt-0.5 shrink-0" aria-hidden="true" />}
            <span>{notice.message}</span>
          </div>
        )}

        {/* Lesson picker */}
        <div className={`${cardClass} mb-5`}>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label={t('lsModule')}>
              <select
                value={module?.slug || ''}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  setModuleSlug(event.target.value);
                  setCourseId('');
                  setNotice(null);
                }}
                className={inputClass}
              >
                {modules.map((item) => (
                  <option key={item.slug} value={item.slug}>{item.title}</option>
                ))}
              </select>
            </Field>
            <Field label={t('lsLesson')}>
              <select
                value={course?.id || ''}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  setCourseId(event.target.value);
                  setNotice(null);
                }}
                className={inputClass}
                disabled={courses.length === 0}
              >
                {courses.map((item, index) => (
                  <option key={item.id} value={item.id}>{index + 1}. {item.title}</option>
                ))}
              </select>
            </Field>
          </div>
          {courses.length === 0 && <p className="mt-3 text-body text-gray-500">{t('lsNoLessons')}</p>}
        </div>

        {course && current && (
          <>
            {/* Language tabs + actions */}
            <div className={`${cardClass} mb-5`}>
              <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={t('lsLanguage')}>
                {LESSON_LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    role="tab"
                    aria-selected={editing === lang}
                    onClick={() => setEditing(lang)}
                    className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-body font-medium transition-colors ${
                      editing === lang ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {lang.toUpperCase()}
                    <Badge variant={lessonCompleteness(bundle[lang]) >= 80 ? 'green' : 'gold'}>
                      {lessonCompleteness(bundle[lang])}%
                    </Badge>
                  </button>
                ))}
                <span className="ml-auto text-meta text-gray-500">
                  {loading ? t('lsLoading') : dirty ? t('lsUnsaved') : t('lsUpToDate')}
                </span>
              </div>

              <div className="mt-4 border-t border-gray-100 pt-4">
                <Field label={t('lsGuidance')}>
                  <textarea
                    value={guidance}
                    onChange={(event) => setGuidance(event.target.value)}
                    placeholder={t('lsGuidanceHint')}
                    className={`${inputClass} min-h-20`}
                  />
                </Field>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button
                    variant="gold"
                    size="sm"
                    disabled={!isSupabase || busy !== null}
                    onClick={() => { void handleGenerate('generate'); }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Sparkles size={15} aria-hidden="true" />
                      {busy === 'generate' ? t('lsGenerating') : t('lsGenerate')}
                    </span>
                  </Button>
                  {editing !== 'fr' && (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={!isSupabase || busy !== null}
                      onClick={() => { void handleGenerate('translate'); }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Languages size={15} aria-hidden="true" />
                        {busy === 'translate' ? t('lsTranslating') : t('lsTranslate')}
                      </span>
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    size="sm"
                    disabled={!isSupabase || busy !== null || !dirty}
                    onClick={() => { void handleSave(); }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Save size={15} aria-hidden="true" />
                      {busy === 'save' ? t('lsSaving') : t('lsSave')}
                    </span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={busy !== null || !dirty}
                    onClick={() => setDraft(null)}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Undo2 size={15} aria-hidden="true" />
                      {t('lsRevert')}
                    </span>
                  </Button>
                </div>
                <p className="mt-3 text-meta text-gray-500">{t('lsGenerateWarning')}</p>
              </div>
            </div>

            {/* Videos — shared by the three languages */}
            <div className={`${cardClass} mb-5`}>
              <h2 className="font-heading text-h3 text-gray-900">{t('lsVideosTitle')}</h2>
              <p className="text-body text-gray-500 mt-1">{t('lsVideosHint')}</p>
              <div className="grid md:grid-cols-3 gap-3 mt-4">
                {LESSON_LANGUAGES.map((lang) => (
                  <Field key={lang} label={lang.toUpperCase()}>
                    <input
                      value={current.video[lang]}
                      onChange={(event) => patchVideo(lang, event.target.value.trim())}
                      placeholder="https://www.youtube.com/embed/ID"
                      className={inputClass}
                      inputMode="url"
                      autoComplete="off"
                    />
                  </Field>
                ))}
              </div>
            </div>

            {/* Core copy */}
            <div className={`${cardClass} mb-5 space-y-4`}>
              <Field label={t('lsFieldTitle')}>
                <input value={current.title} onChange={(e) => patch({ title: e.target.value })} className={inputClass} />
              </Field>
              <Field label={t('lsFieldObjective')}>
                <textarea value={current.objective} onChange={(e) => patch({ objective: e.target.value })} className={areaClass} />
              </Field>
            </div>

            {/* Sections */}
            <div className={`${cardClass} mb-5`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-h3 text-gray-900">{t('lsSections')}</h2>
                <Button variant="gold" size="sm" onClick={() => patch({ content: [...sections, { title: '', body: '' }] })}>
                  <Plus size={14} /> {t('lsAddSection')}
                </Button>
              </div>
              <div className="space-y-4">
                {sections.map((section, index) => (
                  <div key={index} className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <p className="text-body font-semibold text-gray-900">{index + 1}</p>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm" onClick={() => moveSection(index, -1)}>
                          <ArrowUp size={14} /> <span className="sr-only">{t('lsMoveUp')}</span>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => moveSection(index, 1)}>
                          <ArrowDown size={14} /> <span className="sr-only">{t('lsMoveDown')}</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => patch({ content: sections.filter((_, i) => i !== index) })}
                        >
                          <Trash2 size={14} /> <span className="sr-only">{t('lsRemove')}</span>
                        </Button>
                      </div>
                    </div>
                    <Field label={t('lsSectionTitle')}>
                      <input
                        value={section.title}
                        onChange={(e) => patch({
                          content: sections.map((item, i) => (i === index ? { ...item, title: e.target.value } : item)),
                        })}
                        className={inputClass}
                      />
                    </Field>
                    <div className="mt-3">
                      <Field label={t('lsSectionBody')}>
                        <textarea
                          value={section.body}
                          onChange={(e) => patch({
                            content: sections.map((item, i) => (i === index ? { ...item, body: e.target.value } : item)),
                          })}
                          className={`${areaClass} min-h-40`}
                        />
                      </Field>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Worked example */}
            <div className={`${cardClass} mb-5 space-y-4`}>
              <h2 className="font-heading text-h3 text-gray-900">{t('lsExample')}</h2>
              <Field label={t('lsExampleTitle')}>
                <input
                  value={current.example.title}
                  onChange={(e) => patch({ example: { ...current.example, title: e.target.value } })}
                  className={inputClass}
                />
              </Field>
              <Field label={t('lsExChallenge')}>
                <textarea
                  value={current.example.challenge}
                  onChange={(e) => patch({ example: { ...current.example, challenge: e.target.value } })}
                  className={areaClass}
                />
              </Field>
              <Field label={t('lsExSolution')}>
                <textarea
                  value={current.example.solution}
                  onChange={(e) => patch({ example: { ...current.example, solution: e.target.value } })}
                  className={areaClass}
                />
              </Field>
              <Field label={t('lsExImpact')}>
                <textarea
                  value={current.example.impact}
                  onChange={(e) => patch({ example: { ...current.example, impact: e.target.value } })}
                  className={areaClass}
                />
              </Field>
            </div>

            {/* Practice */}
            <div className={`${cardClass} mb-5 space-y-4`}>
              <h2 className="font-heading text-h3 text-gray-900">{t('lsPractice')}</h2>
              <Field label={t('lsPracticeTitle')}>
                <input
                  value={current.practice.title}
                  onChange={(e) => patch({ practice: { ...current.practice, title: e.target.value } })}
                  className={inputClass}
                />
              </Field>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-body font-medium text-gray-700">{t('lsInstructions')}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => patch({ practice: { ...current.practice, instructions: [...instructions, ''] } })}
                  >
                    <Plus size={14} /> {t('lsAddInstruction')}
                  </Button>
                </div>
                <div className="space-y-2 mt-2">
                  {instructions.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        value={step}
                        onChange={(e) => patch({
                          practice: {
                            ...current.practice,
                            instructions: instructions.map((item, i) => (i === index ? e.target.value : item)),
                          },
                        })}
                        className={`${inputClass} mt-0`}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => patch({
                          practice: {
                            ...current.practice,
                            instructions: instructions.filter((_, i) => i !== index),
                          },
                        })}
                      >
                        <Trash2 size={14} /> <span className="sr-only">{t('lsRemove')}</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              <Field label={t('lsObservation')}>
                <textarea
                  value={current.practice.observation}
                  onChange={(e) => patch({ practice: { ...current.practice, observation: e.target.value } })}
                  className={areaClass}
                />
              </Field>
            </div>

            {/* Quiz */}
            <div className={`${cardClass} mb-5`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-h3 text-gray-900">{t('lsQuiz')}</h2>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => patch({
                    quiz: [
                      ...quiz,
                      {
                        question: '',
                        options: ['a', 'b', 'c', 'd'].map((key) => ({ key, text: '' })),
                        answer: 'a',
                        explanation: '',
                      },
                    ],
                  })}
                >
                  <Plus size={14} /> {t('lsAddQuestion')}
                </Button>
              </div>
              <div className="space-y-4">
                {quiz.map((question, index) => (
                  <div key={index} className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <p className="text-body font-semibold text-gray-900">{index + 1}</p>
                      <Button variant="ghost" size="sm" onClick={() => patch({ quiz: quiz.filter((_, i) => i !== index) })}>
                        <Trash2 size={14} /> <span className="sr-only">{t('lsRemove')}</span>
                      </Button>
                    </div>
                    <Field label={t('lsQuestion')}>
                      <input
                        value={question.question}
                        onChange={(e) => patch({
                          quiz: quiz.map((item, i) => (i === index ? { ...item, question: e.target.value } : item)),
                        })}
                        className={inputClass}
                      />
                    </Field>
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      {question.options.map((option, optionIndex) => (
                        <Field key={option.key} label={`${t('lsOption')} ${option.key.toUpperCase()}`}>
                          <input
                            value={option.text}
                            onChange={(e) => patch({
                              quiz: quiz.map((item, i) => (i === index
                                ? {
                                    ...item,
                                    options: item.options.map((opt, oi) => (oi === optionIndex ? { ...opt, text: e.target.value } : opt)),
                                  }
                                : item)),
                            })}
                            className={inputClass}
                          />
                        </Field>
                      ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      <Field label={t('lsCorrect')}>
                        <select
                          value={question.answer}
                          onChange={(e) => patch({
                            quiz: quiz.map((item, i) => (i === index ? { ...item, answer: e.target.value } : item)),
                          })}
                          className={inputClass}
                        >
                          {question.options.map((option) => (
                            <option key={option.key} value={option.key}>{option.key.toUpperCase()}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label={t('lsExplanation')}>
                        <input
                          value={question.explanation}
                          onChange={(e) => patch({
                            quiz: quiz.map((item, i) => (i === index ? { ...item, explanation: e.target.value } : item)),
                          })}
                          className={inputClass}
                        />
                      </Field>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection + glossary */}
            <div className={`${cardClass} mb-5 space-y-4`}>
              <Field label={t('lsReflection')}>
                <textarea
                  value={current.reflection}
                  onChange={(e) => patch({ reflection: e.target.value })}
                  className={areaClass}
                />
              </Field>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-body font-medium text-gray-700">{t('lsGlossary')}</span>
                  <Button variant="ghost" size="sm" onClick={() => patch({ glossary: [...glossary, { term: '', definition: '' }] })}>
                    <Plus size={14} /> {t('lsAddTerm')}
                  </Button>
                </div>
                <div className="space-y-2 mt-2">
                  {glossary.map((item, index) => (
                    <div key={index} className="grid md:grid-cols-[200px_1fr_auto] gap-2 items-center">
                      <input
                        value={item.term}
                        onChange={(e) => patch({
                          glossary: glossary.map((entry, i) => (i === index ? { ...entry, term: e.target.value } : entry)),
                        })}
                        placeholder={t('lsTerm')}
                        className={`${inputClass} mt-0`}
                      />
                      <input
                        value={item.definition}
                        onChange={(e) => patch({
                          glossary: glossary.map((entry, i) => (i === index ? { ...entry, definition: e.target.value } : entry)),
                        })}
                        placeholder={t('lsDefinition')}
                        className={`${inputClass} mt-0`}
                      />
                      <Button variant="ghost" size="sm" onClick={() => patch({ glossary: glossary.filter((_, i) => i !== index) })}>
                        <Trash2 size={14} /> <span className="sr-only">{t('lsRemove')}</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pb-10">
              <Button
                variant="primary"
                disabled={!isSupabase || busy !== null || !dirty}
                onClick={() => { void handleSave(); }}
              >
                <span className="inline-flex items-center gap-2">
                  <Save size={16} aria-hidden="true" />
                  {busy === 'save' ? t('lsSaving') : t('lsSave')}
                </span>
              </Button>
              <p className="text-meta text-gray-500">{t('lsPublishedHint')}</p>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
