import { toEmbedUrl } from '../lib/videoUrl';
import { GlossaryItem, LessonContent, QuizQuestion } from './lessonContent';
import { Language } from './translations';

/**
 * Runtime guards for lesson bodies that do NOT come from the TypeScript
 * registry — i.e. rows of `karatou_courses.lesson_content` and drafts returned
 * by the `admin-generate-lesson` Edge Function.
 *
 * The registry is type-checked at build time; these two sources are not, so
 * everything crossing that boundary is parsed here. A malformed field is
 * dropped rather than thrown: a lesson missing its glossary must still render
 * (the alternative is the white screen this app already fought once), while a
 * body missing its core is rejected outright so the caller can fall back to the
 * registry or to the generated template.
 */

export const LESSON_LANGUAGES: Language[] = ['fr', 'en', 'ha'];

export type LessonBundle = Partial<Record<Language, LessonContent>>;

function str(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function list(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function parseSections(value: unknown): LessonContent['content'] {
  return list(value)
    .filter(isRecord)
    .map((section) => ({ title: str(section.title), body: str(section.body) }))
    .filter((section) => section.title || section.body);
}

function parseQuiz(value: unknown): QuizQuestion[] {
  return list(value)
    .filter(isRecord)
    .map((question) => ({
      question: str(question.question),
      options: list(question.options)
        .filter(isRecord)
        .map((option) => ({ key: str(option.key), text: str(option.text) }))
        .filter((option) => option.key && option.text),
      answer: str(question.answer),
      explanation: str(question.explanation),
    }))
    // A question whose answer is not one of its options would soft-lock the
    // quiz (no choice can ever be right), so it is dropped.
    .filter((question) => question.question && question.options.length >= 2)
    .filter((question) => question.options.some((option) => option.key === question.answer));
}

function parseGlossary(value: unknown): GlossaryItem[] {
  return list(value)
    .filter(isRecord)
    .map((item) => ({ term: str(item.term), definition: str(item.definition) }))
    .filter((item) => item.term);
}

function parseVideo(value: unknown): LessonContent['video'] {
  const source = isRecord(value) ? value : {};
  // Only YouTube links survive (see lib/videoUrl): a `javascript:` URL from the
  // CMS or a JSON import would otherwise reach an <iframe src>.
  return { fr: toEmbedUrl(str(source.fr)), en: toEmbedUrl(str(source.en)), ha: toEmbedUrl(str(source.ha)) };
}

/**
 * Parses one lesson body. Returns null when the core (a title plus either an
 * objective or at least one section) is missing — such a body is not worth
 * showing in place of the registry version.
 */
export function parseLessonContent(value: unknown, fallback?: Partial<LessonContent>): LessonContent | null {
  if (!isRecord(value)) return null;

  const title = str(value.title) || str(fallback?.title);
  const objective = str(value.objective);
  const content = parseSections(value.content);
  if (!title || (!objective && content.length === 0)) return null;

  const example = isRecord(value.example) ? value.example : {};
  const practice = isRecord(value.practice) ? value.practice : {};
  const lessonNumber = typeof value.lessonNumber === 'number' && Number.isFinite(value.lessonNumber)
    ? value.lessonNumber
    : fallback?.lessonNumber ?? 1;

  return {
    id: str(value.id) || str(fallback?.id),
    lessonNumber,
    title,
    objective,
    video: parseVideo(value.video),
    content,
    example: {
      title: str(example.title),
      challenge: str(example.challenge),
      solution: str(example.solution),
      impact: str(example.impact),
    },
    practice: {
      title: str(practice.title),
      instructions: list(practice.instructions).map(str).filter(Boolean),
      observation: str(practice.observation),
    },
    quiz: parseQuiz(value.quiz),
    reflection: str(value.reflection),
    glossary: parseGlossary(value.glossary),
  };
}

/** Parses a `{ fr, en, ha }` bundle, keeping only the languages that survive. */
export function parseLessonBundle(value: unknown, fallback?: Partial<LessonContent>): LessonBundle {
  if (!isRecord(value)) return {};
  const bundle: LessonBundle = {};
  LESSON_LANGUAGES.forEach((lang) => {
    const parsed = parseLessonContent(value[lang], fallback);
    if (parsed) bundle[lang] = parsed;
  });
  return bundle;
}

/** A blank body for the editor to fill (or for the generator to overwrite). */
export function emptyLessonContent(id: string, lessonNumber: number, title: string): LessonContent {
  return {
    id,
    lessonNumber,
    title,
    objective: '',
    video: { fr: '', en: '', ha: '' },
    content: [{ title: '', body: '' }],
    example: { title: '', challenge: '', solution: '', impact: '' },
    practice: { title: '', instructions: [''], observation: '' },
    quiz: [],
    reflection: '',
    glossary: [],
  };
}

/**
 * Rough completeness of a body, 0–100, for the editor's progress badge.
 * Weighted by what a learner actually needs, not by field count.
 */
export function lessonCompleteness(content: LessonContent | undefined | null): number {
  if (!content) return 0;
  const checks: boolean[] = [
    Boolean(content.title),
    Boolean(content.objective),
    content.content.some((section) => section.title && section.body),
    content.content.length >= 3,
    Boolean(content.example.challenge && content.example.solution),
    content.practice.instructions.filter(Boolean).length >= 2,
    content.quiz.length >= 3,
    Boolean(content.reflection),
    content.glossary.length >= 3,
    Boolean(content.video.fr || content.video.en || content.video.ha),
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}
