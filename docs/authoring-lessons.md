# Authoring real lesson content

Every course can show a full lesson: a per-language **video**, rich **content
sections**, a worked **example**, a **practice** exercise, a **quiz**, a
**reflection** prompt, and a **glossary**.

Courses without authored content fall back to an auto-generated placeholder
lesson (`buildLesson` in `src/pages/LessonPlayer.tsx`). That fallback is what
makes most lessons currently feel generic — replace it course by course using
the registry below.

## How it works

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
- All three languages are required by the type; if a translation isn't ready
  yet, reuse the FR text as a temporary placeholder so the screen stays usable.
- For many lessons, consider moving each module's content into its own file
  under `src/data/lessons/` and importing them into the registry to keep files small.
