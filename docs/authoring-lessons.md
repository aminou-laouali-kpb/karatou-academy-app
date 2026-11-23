# Authoring real lesson content

Every course can show a full lesson: a per-language **video**, rich **content
sections**, a worked **example**, a **practice** exercise, a **quiz**, a
**reflection** prompt, and a **glossary**.

Courses without authored content fall back to an auto-generated placeholder
lesson (`buildLesson` in `src/pages/LessonPlayer.tsx`).

## Two ways to author a lesson

| | **Lesson studio** (`/admin/lecons`) | **TypeScript registry** (`src/data/lessons/`) |
|---|---|---|
| Who | A platform admin, in the browser | A developer, in the repo |
| Publish | Immediate — "Enregistrer" writes to Supabase | Needs a commit + a redeploy |
| Stored in | `karatou_courses.lesson_content` (jsonb) | The JS bundle, one chunk per lesson |
| Offline (PWA) | Cached after the learner opens the lesson once (`supabase-rest-content` runtime cache) | Precached with the app |
| AI draft | Yes — "Générer un brouillon" / "Traduire depuis le français" | No |
| Use it for | New lessons, fixes, video URLs, translations | The launch catalogue, and anything you want versioned with the code |

**The database wins.** `resolveLessonContent` (see
[`src/services/lessonContentRepository.ts`](../src/services/lessonContentRepository.ts))
reads `karatou_courses.lesson_content` first and falls back to the registry, so
editing a lesson in the studio overrides its bundled version without touching
the code. Clearing a language in the studio hands that language back to the
registry.

Whatever the source, the body is parsed by `parseLessonContent`
([`src/data/lessonContentSchema.ts`](../src/data/lessonContentSchema.ts)) before it
reaches the player: a malformed field is dropped, a quiz question whose answer
matches no option is removed, and a body with no usable core is refused (the
player then falls back). That is what keeps a bad row — or a surprising AI
response — from blanking the lesson screen.

## Authoring from the studio (no deploy)

1. Open `/admin/lecons` as a platform admin (a **real Supabase** admin session —
   the demo mode shows the form but cannot save).
2. Pick the course and the lesson. The editor pre-fills with what is already
   published: the saved body if there is one, otherwise the registry version.
3. Write the FR version — or click **Générer un brouillon** to have the model
   draft it, then read it and fix it. The guidance box steers the draft ("insist on
   farming cooperatives", "no jargon", …).
4. Switch to EN / HA and click **Traduire depuis le français** for a localised
   draft of the same lesson, then review.
5. Paste the **video** URLs (embed form) — they are shared by the three languages.
6. **Enregistrer**. The lesson is live for the learners of that course.

The generator runs in the `admin-generate-lesson` Edge Function, which holds the
OpenRouter key server-side and re-checks that the caller is a platform admin. It
calls `z-ai/glm-5.3-flash` with a strict JSON schema, low reasoning effort and
throughput-sorted provider routing — about 15 seconds and well under a cent per
lesson. If the project has no `OPENROUTER_API_KEY`, the button returns a clear
error and the manual editor keeps working.

## How the registry works

- The lesson shape is `LessonContent` in [`src/data/lessonContent.ts`](../src/data/lessonContent.ts).
- Authored lessons live in the `authoredLessonLoaders` registry in
  [`src/data/localizedContent.ts`](../src/data/localizedContent.ts), keyed by
  `` `${moduleSlug}/${courseId}` ``. Each entry is a **dynamic import**, so every
  lesson is its own chunk (~15 kB gzip): opening one lesson on a 2G link does not
  download the whole catalogue. Only `intelligence-artificielle/c1` is eager
  (`eagerLessons`), because it is the entry lesson and the fallback.
- `LessonPlayer` calls `loadAuthoredLesson(moduleSlug, courseId, lang)` and shows
  a loading state while the chunk arrives (`hasAuthoredLesson` tells it real
  content exists), then the generated fallback only if there is none.
- `lesson1ByLanguage` (the AI module's first lesson) is a complete, trilingual
  reference — copy its structure.

## Add a lesson in 3 steps

1. **Find the keys.** `moduleSlug` is on the module (e.g. `data-analysis`); the
   `courseId` is the course id (e.g. `d1`) — both are in
   [`src/data/mockData.ts`](../src/data/mockData.ts).

2. **Write the content** as a `Record<Language, LessonContent>` (`fr`, `en`,
   `ha`). For videos, use an **embeddable** URL (e.g. `https://www.youtube.com/embed/VIDEO_ID`);
   leave a string empty to keep the "coming soon" placeholder for that language.
   Split long `content[].body` text with blank lines (`\n\n`) — each block
   renders as its own paragraph.

3. **Register it** in `authoredLessonLoaders` — a loader, not a static import
   (a static import would put the lesson back in the shared chunk):

   ```ts
   const authoredLessonLoaders: Record<string, () => Promise<LessonBundle>> = {
     'data-analysis/d1': () => import('./lessons/da-d1-nettoyage').then((m) => m.daLessonD1),
   };
   ```

   The file must live in `src/data/lessons/` and export the
   `Record<Language, LessonContent>` under a named export.

## Tips

- Keep `id`/`lessonNumber` consistent with the course order.
- The quiz `answer` must match an option `key` (e.g. `'B'`).
- The quiz answers must be in the **same order in all three languages**: the
  server keeps one answer key per lesson and grades every quiz itself
  (`karatou_submit_quiz`) before a lesson counts.

## After adding or changing a quiz (server grading)

The server grades quizzes against `app_private.karatou_quiz_keys`, exported
from the bundled lessons. `npm test` fails (`src/data/quizKeys.test.ts`) until
the export is refreshed:

```bash
UPDATE_QUIZ_KEYS=1 npx vitest run src/data/quizKeys.test.ts
node scripts/quiz-keys-sql.mjs > supabase/migrations/$(date -u +%Y%m%d%H%M%S)_quiz_keys_refresh.sql
```

Apply that migration **with** the deploy of the new lessons. Until it is
applied, learners on the new version get "this quiz has been updated" and their
completion waits on the device. Lessons published from `/admin/lecons` need
nothing: a trigger refreshes their keys on save.
- All three languages are required by the type; if a translation isn't ready
  yet, reuse the FR text as a temporary placeholder so the screen stays usable.
- For many lessons, consider moving each module's content into its own file
  under `src/data/lessons/` and importing them into the registry to keep files small.
