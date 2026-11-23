/**
 * Lesson completions waiting to reach the server ("outbox"), with the quiz
 * answers the server grades before recording them.
 *
 * On a 2G link or offline, the single upsert sent when a learner finished a
 * lesson could fail; the completion then lived only in the in-memory state and
 * was wiped at the next launch, when the server snapshot replaced it. Now every
 * completion is written here first (per user), merged into whatever the server
 * returns, and replayed until the server confirms it.
 */
export interface PendingCompletion {
  moduleSlug: string;
  courseId: string;
  completedAt: string;
  /** Language of the quiz the learner answered, and their answers in order:
   * the server grades them (karatou_submit_quiz) before recording the lesson. */
  lang?: string;
  answers?: string[];
}

const KEY_PREFIX = 'karatou.progress.outbox.';

function storageKey(userId: string) {
  return `${KEY_PREFIX}${userId}`;
}

function isPendingCompletion(value: unknown): value is PendingCompletion {
  const item = value as Partial<PendingCompletion> | null;
  return Boolean(
    item &&
      typeof item.moduleSlug === 'string' &&
      typeof item.courseId === 'string' &&
      typeof item.completedAt === 'string' &&
      (item.lang === undefined || typeof item.lang === 'string') &&
      (item.answers === undefined ||
        (Array.isArray(item.answers) && item.answers.every((answer) => typeof answer === 'string')))
  );
}

export function readOutbox(userId: string, storage: Storage | null = safeLocalStorage()): PendingCompletion[] {
  if (!storage) return [];
  try {
    const parsed: unknown = JSON.parse(storage.getItem(storageKey(userId)) || '[]');
    return Array.isArray(parsed) ? parsed.filter(isPendingCompletion) : [];
  } catch {
    return [];
  }
}

function writeOutbox(userId: string, items: PendingCompletion[], storage: Storage | null) {
  if (!storage) return;
  try {
    if (items.length === 0) storage.removeItem(storageKey(userId));
    else storage.setItem(storageKey(userId), JSON.stringify(items));
  } catch {
    // Quota or blocked storage: the completion still exists in memory and will
    // be re-sent with the next issuance attempt.
  }
}

export function enqueueCompletion(
  userId: string,
  completion: PendingCompletion,
  storage: Storage | null = safeLocalStorage()
): PendingCompletion[] {
  // One entry per lesson: a newer attempt replaces the queued one (it carries
  // the answers the learner actually passed with).
  const items = readOutbox(userId, storage);
  const sameLesson = (item: PendingCompletion) =>
    item.moduleSlug === completion.moduleSlug && item.courseId === completion.courseId;
  const earlier = items.find(sameLesson);
  const next = [
    ...items.filter((item) => !sameLesson(item)),
    earlier ? { ...completion, completedAt: earlier.completedAt } : completion,
  ];
  writeOutbox(userId, next, storage);
  return next;
}

/** Removes the completions the server has confirmed. */
export function acknowledgeCompletions(
  userId: string,
  confirmed: PendingCompletion[],
  storage: Storage | null = safeLocalStorage()
): PendingCompletion[] {
  const done = new Set(confirmed.map((item) => `${item.moduleSlug}/${item.courseId}`));
  const next = readOutbox(userId, storage).filter((item) => !done.has(`${item.moduleSlug}/${item.courseId}`));
  writeOutbox(userId, next, storage);
  return next;
}

/** Server progress ∪ pending completions: nothing finished on the device is lost. */
export function mergeCompletedCourses(
  server: Record<string, string[]>,
  pending: PendingCompletion[]
): Record<string, string[]> {
  const merged: Record<string, string[]> = {};
  for (const [moduleSlug, ids] of Object.entries(server)) merged[moduleSlug] = [...ids];
  for (const item of pending) {
    const ids = merged[item.moduleSlug] || [];
    if (!ids.includes(item.courseId)) ids.push(item.courseId);
    merged[item.moduleSlug] = ids;
  }
  return merged;
}


function safeLocalStorage(): Storage | null {
  try {
    return typeof window === 'undefined' ? null : window.localStorage;
  } catch {
    return null;
  }
}
