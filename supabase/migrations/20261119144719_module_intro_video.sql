-- Vidéo d'introduction par cours (module), une URL YouTube embed par langue.
-- Exemple : {"fr": "https://www.youtube.com/embed/XXXX", "en": "...", "ha": "..."}
alter table public.karatou_modules
  add column if not exists intro_video jsonb not null default '{}'::jsonb;

comment on column public.karatou_modules.intro_video is
  'Vidéo d''introduction du cours : URL YouTube embed par langue (fr, en, ha).';
