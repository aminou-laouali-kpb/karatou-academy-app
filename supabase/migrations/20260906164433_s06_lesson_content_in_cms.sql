-- S06 — Lesson bodies editable from the admin CMS.
--
-- Until now the body of a lesson (objective, sections, worked example, practice,
-- quiz, reflection, glossary and the video URLs) only existed in the TypeScript
-- registry `authoredLessonLoaders` (src/data/localizedContent.ts), so publishing
-- a lesson required a commit and a redeploy. This column lets a platform admin
-- author and publish a lesson from /admin/lecons instead.
--
-- Shape: { "fr": LessonContent, "en": LessonContent, "ha": LessonContent } —
-- the same `Record<Language, LessonContent>` the TS registry uses, so the player
-- reads both sources through one code path. Any missing language simply falls
-- back to the TS registry, then to the generated template: this column is
-- additive and never breaks an existing lesson.
--
-- Access is inherited from the table's existing policies, which are already what
-- we want: "Karatou public can read published courses" (a lesson body is public
-- content — it ships in the JS bundle today), and insert/update/delete reserved
-- to `app_private.karatou_is_platform_admin()`. A learner therefore cannot write
-- a lesson, and the CMS never needs a service-role key in the browser.

alter table public.karatou_courses
  add column if not exists lesson_content jsonb;

comment on column public.karatou_courses.lesson_content is
  'Trilingual lesson body: {"fr":LessonContent,"en":LessonContent,"ha":LessonContent}. Null = fall back to the TypeScript registry. Written only by platform admins (RLS).';

-- Guard against an accidental blob (a full trilingual lesson is ~60 kB of JSON).
alter table public.karatou_courses
  drop constraint if exists karatou_courses_lesson_content_size_check;

alter table public.karatou_courses
  add constraint karatou_courses_lesson_content_size_check
  check (lesson_content is null or octet_length(lesson_content::text) <= 400000);
