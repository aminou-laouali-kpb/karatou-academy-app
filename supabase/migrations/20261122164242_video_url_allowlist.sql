-- Vidéos : seules des URL YouTube https sont acceptées en base (audit du
-- 22/11/2026, S4). Les URL vidéo finissent dans un <iframe src> ; une valeur
-- `javascript:` saisie dans le CMS ou importée en JSON exécutait du script chez
-- chaque apprenant. Le client filtre déjà (src/lib/videoUrl.ts) ; la base
-- refuse désormais aussi. youtu.be et watch?v= restent admis : le client les
-- convertit en URL d'intégration.

create or replace function app_private.karatou_embed_urls_ok(value jsonb, path jsonpath)
returns boolean
language sql
immutable
set search_path = ''
as $$
  select not exists (
    select 1
    from jsonb_path_query(coalesce(value, '{}'::jsonb), path) as found(url)
    where jsonb_typeof(found.url) <> 'string'
       or (
         found.url #>> '{}' <> ''
         and found.url #>> '{}' !~ '^https://((www\.|m\.)?youtube(-nocookie)?\.com/(embed/|watch\?(.*&)?v=|shorts/|live/)|youtu\.be/)[A-Za-z0-9_-]{11}([?&#][^[:space:]"''<>]*)?$'
       )
  );
$$;

alter table public.karatou_modules
  drop constraint if exists karatou_modules_intro_video_youtube;
alter table public.karatou_modules
  add constraint karatou_modules_intro_video_youtube
  check (app_private.karatou_embed_urls_ok(intro_video, '$.*'));

alter table public.karatou_courses
  drop constraint if exists karatou_courses_lesson_video_youtube;
alter table public.karatou_courses
  add constraint karatou_courses_lesson_video_youtube
  check (app_private.karatou_embed_urls_ok(lesson_content, '$.*.video.*'));
