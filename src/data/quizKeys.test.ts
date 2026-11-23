import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { authoredLessonKeys, loadAuthoredLessonBundle } from './localizedContent';

const LANGUAGES = ['fr', 'en', 'ha'] as const;

/**
 * The server grades quizzes (karatou_submit_quiz) against answer keys stored in
 * app_private.karatou_quiz_keys. Those keys are exported from the bundled
 * lessons into supabase/quiz-keys.json; this test fails as soon as a lesson's
 * quiz changes without the export being refreshed.
 *
 * After editing a quiz:
 *   UPDATE_QUIZ_KEYS=1 npx vitest run src/data/quizKeys.test.ts
 *   node scripts/quiz-keys-sql.mjs > supabase/migrations/<timestamp>_quiz_keys_refresh.sql
 * and apply that migration together with the deploy of the new lessons.
 */
const KEYS_FILE = resolve(__dirname, '../../supabase/quiz-keys.json');

type QuizKeys = Record<string, string[]>;

async function exportKeys(): Promise<QuizKeys> {
  const keys: QuizKeys = {};
  for (const key of [...authoredLessonKeys].sort()) {
    const bundle = await loadAuthoredLessonBundle(key);
    const quiz = bundle?.fr?.quiz ?? [];
    if (quiz.length > 0) keys[key] = quiz.map((question) => question.answer);
  }
  return keys;
}

describe('quiz answer keys exported for server grading', () => {
  it('match the bundled lessons', async () => {
    const current = await exportKeys();
    if (process.env.UPDATE_QUIZ_KEYS) {
      writeFileSync(KEYS_FILE, `${JSON.stringify(current, null, 2)}\n`);
    }
    const committed = JSON.parse(readFileSync(KEYS_FILE, 'utf8')) as QuizKeys;
    expect(committed).toEqual(current);
  });

  it('are the same in every language, and each answer is one of the options', async () => {
    // The server keeps one key per lesson: a translation must not reorder the answers.
    for (const key of authoredLessonKeys) {
      const bundle = await loadAuthoredLessonBundle(key);
      const reference = (bundle?.fr?.quiz ?? []).map((question) => question.answer);
      for (const lang of LANGUAGES) {
        const quiz = bundle?.[lang]?.quiz ?? [];
        expect(quiz.map((question) => question.answer), `${key} ${lang}`).toEqual(reference);
        for (const question of quiz) {
          expect(question.options.map((option) => option.key), `${key} ${lang}`).toContain(question.answer);
        }
      }
    }
  });
});
