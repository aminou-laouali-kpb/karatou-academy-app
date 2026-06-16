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
- Authored lessons live in the `authoredLessons` registry in
  [`src/data/localizedContent.ts`](../src/data/localizedContent.ts), keyed by
  `` `${moduleSlug}/${courseId}` ``.
- `LessonPlayer` calls `getAuthoredLesson(moduleSlug, courseId, lang)` and uses
  the registry entry when present, otherwise the generated fallback.
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

3. **Register it** in `authoredLessons`:

   ```ts
   const authoredLessons: Record<string, Record<Language, LessonContent>> = {
     'intelligence-artificielle/c1': lesson1ByLanguage,
     'data-analysis/d1': dataAnalysisLesson1, // <- your new entry
   };
   ```

## Tips

- Keep `id`/`lessonNumber` consistent with the course order.
- The quiz `answer` must match an option `key` (e.g. `'B'`).
- All three languages are required by the type; if a translation isn't ready
  yet, reuse the FR text as a temporary placeholder so the screen stays usable.
- For many lessons, consider moving each module's content into its own file
  under `src/data/lessons/` and importing them into the registry to keep files small.
