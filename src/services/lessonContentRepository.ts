import { LessonContent } from '../data/lessonContent';
import {
  LESSON_LANGUAGES,
  LessonBundle,
  parseLessonBundle,
  parseLessonContent,
} from '../data/lessonContentSchema';
import { loadAuthoredLesson } from '../data/localizedContent';
import { Language } from '../data/translations';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

/**
 * Lesson bodies stored in `karatou_courses.lesson_content` (migration S06).
 *
 * Two sources of lesson content coexist on purpose:
 *   1. this column — authored from /admin/lecons, publishable without a deploy;
 *   2. the TypeScript registry in `data/localizedContent` — the 19 launch
 *      lessons, versioned with the code and available offline in the PWA.
 * The database wins when it has a body for the requested language; otherwise
 * the registry answers, and the player falls back to its generated template.
 *
 * Writes are RLS-restricted to platform admins, so the browser never needs a
 * privileged key. Everything read back is run through `parseLessonContent`.
 */

const COURSES_TABLE = 'karatou_courses';

function requireClient() {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  return supabase;
}

/** One language only — keeps the lesson payload small on a 2G link. */
export async function fetchLessonContentFromDb(
  courseId: string,
  lang: Language
): Promise<LessonContent | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  // `lang` indexes into the jsonb column, so it must come from the known set.
  if (!LESSON_LANGUAGES.includes(lang)) return null;

  const { data, error } = await supabase
    .from(COURSES_TABLE)
    .select(`body:lesson_content->${lang}`)
    .eq('id', courseId)
    .maybeSingle();

  // A missing column (schema not migrated yet) or an unreadable row must not
  // break the lesson: the registry still has the launch content.
  if (error || !data) return null;
  return parseLessonContent((data as { body: unknown }).body, { id: courseId });
}

/**
 * Resolves the body the learner should see: database first, then the
 * TypeScript registry. Returns null when neither has authored content.
 */
export async function resolveLessonContent(
  moduleSlug: string,
  courseId: string,
  lang: Language
): Promise<LessonContent | null> {
  try {
    const fromDb = await fetchLessonContentFromDb(courseId, lang);
    if (fromDb) return fromDb;
  } catch {
    // fall through to the bundled registry
  }
  return loadAuthoredLesson(moduleSlug, courseId, lang);
}

/** Every language at once — the admin editor needs the whole bundle. */
export async function fetchLessonBundle(courseId: string): Promise<LessonBundle> {
  const client = requireClient();
  const { data, error } = await client
    .from(COURSES_TABLE)
    .select('lesson_content')
    .eq('id', courseId)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return parseLessonBundle((data as { lesson_content: unknown } | null)?.lesson_content, {
    id: courseId,
  });
}

/**
 * Persists the bundle. Languages absent from `bundle` are removed from the
 * column, so clearing a translation in the editor clears it in production too.
 */
export async function saveLessonBundle(courseId: string, bundle: LessonBundle): Promise<void> {
  const client = requireClient();
  const payload = Object.keys(bundle).length > 0 ? bundle : null;
  const { error } = await client
    .from(COURSES_TABLE)
    .update({ lesson_content: payload })
    .eq('id', courseId);

  if (error) throw new Error(error.message);
}

export interface LessonDraftRequest {
  moduleSlug: string;
  moduleTitle: string;
  courseId: string;
  courseTitle: string;
  courseDescription: string;
  duration: string;
  lessonNumber: number;
  language: Language;
  guidance?: string;
  /** Source body to translate; when set, the function translates instead of writing from scratch. */
  source?: LessonContent;
}

/** Unwraps the Edge Function error body, which carries the real message. */
async function invokeGenerator(body: Record<string, unknown>): Promise<unknown> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase is not configured.');
  }
  const { data, error } = await supabase.functions.invoke('admin-generate-lesson', { body });
  if (error) {
    let message = error.message;
    const context = (error as { context?: Response }).context;
    if (context && typeof context.json === 'function') {
      try {
        const payload = await context.json();
        if (payload?.error) message = String(payload.error);
      } catch {
        // keep the original error message
      }
    }
    throw new Error(message);
  }
  return data;
}

/**
 * Asks the `admin-generate-lesson` Edge Function (Claude, server-side key) for
 * a draft body. The result is parsed like any untrusted input before it reaches
 * the editor — a model can always return a surprising shape.
 */
export async function generateLessonDraft(request: LessonDraftRequest): Promise<LessonContent> {
  const data = await invokeGenerator({
    action: request.source ? 'translate' : 'generate',
    moduleSlug: request.moduleSlug,
    moduleTitle: request.moduleTitle,
    courseId: request.courseId,
    courseTitle: request.courseTitle,
    courseDescription: request.courseDescription,
    duration: request.duration,
    lessonNumber: request.lessonNumber,
    language: request.language,
    guidance: request.guidance || '',
    source: request.source,
  });

  const lesson = parseLessonContent((data as { lesson?: unknown } | null)?.lesson, {
    id: request.courseId,
    lessonNumber: request.lessonNumber,
    title: request.courseTitle,
  });
  if (!lesson) throw new Error('The generated lesson could not be read.');
  return lesson;
}
