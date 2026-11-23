-- B2 (fiche app mobile §7 et §8.3) : objets de la gamification.
--
-- Tables partagées par le web et l'app mobile : XP, niveau, série, quêtes du
-- jour, badges, ligues hebdomadaires, paquet de révision (Leitner), tentatives
-- de leçon. Le client ne les écrit JAMAIS directement : tout passe par les
-- RPC SECURITY DEFINER de 20261124090200 et par les triggers de
-- 20261124090100, qui appellent un point d'entrée unique
-- (app_private.karatou_apply_xp).
--
-- Ordre d'application : 090000 (ce fichier) → 090100 (moteur) → 090200 (RPC)
-- → 090300 (clôture des ligues) → 090400 (rattrapage de l'XP historique).
--
-- Rien ici ne modifie les données existantes, à part l'ajout de la colonne
-- nullable karatou_courses.interactive_steps.

-- ---------------------------------------------------------------------------
-- Étapes interactives rédigées pour le mobile (§6.1).
-- Colonne séparée de lesson_content : le studio web réécrit lesson_content en
-- entier à chaque sauvegarde et effacerait des champs qu'il ne connaît pas.
-- Lecture et écriture héritent des politiques de karatou_courses (lecture
-- publique des cours publiés, écriture réservée aux admins plateforme).
-- ---------------------------------------------------------------------------
alter table public.karatou_courses
  add column if not exists interactive_steps jsonb;

comment on column public.karatou_courses.interactive_steps is
  'Étapes interactives du mobile : {"fr":Step[],"en":Step[],"ha":Step[]} (fiche app mobile §6.2). Null = étapes dérivées de lesson_content.';

alter table public.karatou_courses
  drop constraint if exists karatou_courses_interactive_steps_check;
alter table public.karatou_courses
  add constraint karatou_courses_interactive_steps_check
  check (
    interactive_steps is null
    or (jsonb_typeof(interactive_steps) = 'object'
        and octet_length(interactive_steps::text) <= 400000)
  );

-- ---------------------------------------------------------------------------
-- Statistiques de l'apprenant : une ligne par utilisateur, créée à la volée.
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_learner_stats (
  user_id uuid primary key references auth.users(id) on delete cascade,
  total_xp integer not null default 0 check (total_xp >= 0),
  level integer not null default 1 check (level >= 1),
  current_streak integer not null default 0 check (current_streak >= 0),
  longest_streak integer not null default 0 check (longest_streak >= 0),
  last_active_date date,
  streak_freezes smallint not null default 0 check (streak_freezes between 0 and 2),
  daily_goal_xp smallint not null default 30 check (daily_goal_xp in (30, 60, 100)),
  timezone text not null default 'Africa/Niamey' check (char_length(timezone) between 1 and 64),
  -- Fuseau précédent, gardé 48 h après un changement : une activité juste
  -- après un voyage vers l'est ne doit pas casser la série (§7.3).
  previous_timezone text check (previous_timezone is null or char_length(previous_timezone) between 1 and 64),
  timezone_changed_at timestamptz,
  -- 1 Bronze, 2 Argent, 3 Or, 4 Saphir, 5 Diamant (§7.6).
  league_tier smallint not null default 1 check (league_tier between 1 and 5),
  show_in_leaderboards boolean not null default true,
  onboarding jsonb not null default '{}'::jsonb
    check (jsonb_typeof(onboarding) = 'object' and octet_length(onboarding::text) <= 4000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.karatou_learner_stats is
  'Gamification : XP, niveau, série, objectif quotidien, préférences. Écrit uniquement par app_private.karatou_apply_xp et les RPC karatou_*.';

-- ---------------------------------------------------------------------------
-- Journal des gains d'XP. L'unicité (user_id, reason, ref) rend chaque gain
-- idempotent : un renvoi (file hors ligne, double clic, trigger rejoué) ne
-- crédite rien de plus.
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_xp_events (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  amount integer not null check (amount between 0 and 1000),
  reason text not null check (reason in (
    'lesson_completed',   -- 20 XP, 1re complétion d'une leçon (trigger, web et mobile)
    'lesson_bonus',       -- bonus de la 1re complétion sur mobile (étapes, parfait, vidéo)
    'lesson_replay',      -- 25 % du bonus, une fois par leçon et par jour
    'review_session',     -- 10 XP par session de révision
    'quest',              -- 10 XP par quête du jour
    'quest_all',          -- +20 XP quand les 3 quêtes sont faites
    'certificate_earned', -- 100 XP (trigger)
    'streak_freeze'       -- 0 XP : trace d'un gel consommé (calendrier)
  )),
  ref text not null check (char_length(ref) between 1 and 200),
  -- Jour de l'activité dans le fuseau de l'apprenant au moment du gain.
  local_date date not null,
  occurred_at timestamptz not null,
  created_at timestamptz not null default now(),
  constraint karatou_xp_events_once unique (user_id, reason, ref)
);
create index if not exists karatou_xp_events_user_day_idx
  on public.karatou_xp_events (user_id, local_date);
create index if not exists karatou_xp_events_user_time_idx
  on public.karatou_xp_events (user_id, occurred_at);

-- ---------------------------------------------------------------------------
-- Tentatives de leçon envoyées par le mobile. L'id est fourni par le client :
-- c'est la clé d'idempotence de la file hors ligne.
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_lesson_attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  module_slug text not null check (char_length(module_slug) between 1 and 120),
  course_id text not null check (char_length(course_id) between 1 and 120),
  language text not null check (language in ('fr', 'en', 'ha')),
  platform text not null check (platform in ('ios', 'android', 'web')),
  started_at timestamptz,
  finished_at timestamptz not null,
  graded_steps smallint not null default 0 check (graded_steps between 0 and 30),
  correct_first_try smallint not null default 0 check (correct_first_try >= 0),
  correct_after_retry smallint not null default 0 check (correct_after_retry >= 0),
  video_watched boolean not null default false,
  duration_seconds integer check (duration_seconds is null or duration_seconds between 0 and 86400),
  step_results jsonb not null default '[]'::jsonb
    check (jsonb_typeof(step_results) in ('array', 'object') and octet_length(step_results::text) <= 20000),
  -- 'completed' (1re complétion), 'replayed' (déjà terminée), ou le statut de
  -- la correction du quiz quand la leçon n'est pas validée.
  outcome text not null check (outcome in ('completed', 'replayed', 'failed', 'mismatch', 'rate_limited', 'quiz_required')),
  xp_breakdown jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  constraint karatou_lesson_attempts_counters
    check (correct_first_try + correct_after_retry <= graded_steps)
);
create index if not exists karatou_lesson_attempts_user_time_idx
  on public.karatou_lesson_attempts (user_id, created_at desc);
create index if not exists karatou_lesson_attempts_user_course_idx
  on public.karatou_lesson_attempts (user_id, module_slug, course_id);

-- ---------------------------------------------------------------------------
-- Quêtes du jour (§7.4), tirées de façon déterministe et créées à la volée.
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_daily_quests (
  user_id uuid not null references auth.users(id) on delete cascade,
  quest_date date not null,
  quest_key text not null check (quest_key in (
    'earn_xp_30', 'earn_xp_50', 'complete_lessons_1', 'complete_lessons_2',
    'correct_first_try_5', 'watch_video', 'review_session', 'daily_goal'
  )),
  target integer not null check (target > 0),
  progress integer not null default 0 check (progress >= 0),
  completed_at timestamptz,
  primary key (user_id, quest_date, quest_key)
);

-- ---------------------------------------------------------------------------
-- Badges (§7.5) : catalogue public + badges gagnés.
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_badges (
  key text primary key check (key ~ '^[a-z0-9_]{2,40}$'),
  name jsonb not null check (jsonb_typeof(name) = 'object'),
  description jsonb not null check (jsonb_typeof(description) = 'object'),
  icon text not null,
  category text not null check (category in (
    'start', 'consistency', 'quality', 'volume', 'achievement', 'exploration', 'habits', 'league'
  )),
  -- Documentation lisible du critère. Le calcul est dans
  -- app_private.karatou_evaluate_badges (une clé inconnue n'est jamais attribuée).
  criteria jsonb not null default '{}'::jsonb,
  display_order integer not null default 0
);

create table if not exists public.karatou_user_badges (
  user_id uuid not null references auth.users(id) on delete cascade,
  badge_key text not null references public.karatou_badges(key) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (user_id, badge_key)
);

insert into public.karatou_badges (key, name, description, icon, category, criteria, display_order) values
  ('first_lesson',
   '{"fr":"Premier pas","en":"First step","ha":"Matakin farko"}',
   '{"fr":"Terminer sa première leçon.","en":"Complete your first lesson.","ha":"Kammala darasinka na farko."}',
   'footprints', 'start', '{"lessons_completed":1}', 10),
  ('streak_3',
   '{"fr":"Série de 3","en":"3-day streak","ha":"Jerin kwana 3"}',
   '{"fr":"Apprendre 3 jours de suite.","en":"Learn 3 days in a row.","ha":"Koya kwana 3 a jere."}',
   'flame', 'consistency', '{"streak":3}', 20),
  ('streak_7',
   '{"fr":"Série de 7","en":"7-day streak","ha":"Jerin kwana 7"}',
   '{"fr":"Apprendre 7 jours de suite.","en":"Learn 7 days in a row.","ha":"Koya kwana 7 a jere."}',
   'flame', 'consistency', '{"streak":7}', 21),
  ('streak_30',
   '{"fr":"Série de 30","en":"30-day streak","ha":"Jerin kwana 30"}',
   '{"fr":"Apprendre 30 jours de suite.","en":"Learn 30 days in a row.","ha":"Koya kwana 30 a jere."}',
   'flame', 'consistency', '{"streak":30}', 22),
  ('streak_100',
   '{"fr":"Série de 100","en":"100-day streak","ha":"Jerin kwana 100"}',
   '{"fr":"Apprendre 100 jours de suite.","en":"Learn 100 days in a row.","ha":"Koya kwana 100 a jere."}',
   'flame', 'consistency', '{"streak":100}', 23),
  ('flawless',
   '{"fr":"Sans faute","en":"Flawless","ha":"Babu kuskure"}',
   '{"fr":"Réussir 5 leçons parfaites (tout juste du premier coup).","en":"Get 5 perfect lessons (everything right first time).","ha":"Samu darussa 5 cikakku (komai daidai a karon farko)."}',
   'sparkles', 'quality', '{"perfect_lessons":5}', 30),
  ('lessons_10',
   '{"fr":"10 leçons","en":"10 lessons","ha":"Darussa 10"}',
   '{"fr":"Terminer 10 leçons.","en":"Complete 10 lessons.","ha":"Kammala darussa 10."}',
   'book-open', 'volume', '{"lessons_completed":10}', 40),
  ('lessons_50',
   '{"fr":"50 leçons","en":"50 lessons","ha":"Darussa 50"}',
   '{"fr":"Terminer 50 leçons.","en":"Complete 50 lessons.","ha":"Kammala darussa 50."}',
   'library', 'volume', '{"lessons_completed":50}', 41),
  ('marathon',
   '{"fr":"Marathon","en":"Marathon","ha":"Gudun fanfalaki"}',
   '{"fr":"Terminer 5 leçons dans la même journée.","en":"Complete 5 lessons in one day.","ha":"Kammala darussa 5 a rana guda."}',
   'timer', 'volume', '{"lessons_in_one_day":5}', 42),
  ('module_complete',
   '{"fr":"Module bouclé","en":"Module done","ha":"An gama kwas"}',
   '{"fr":"Terminer toutes les leçons d''un module.","en":"Complete every lesson of a module.","ha":"Kammala dukkan darussan wani kwas."}',
   'check-circle', 'achievement', '{"modules_completed":1}', 50),
  ('certified',
   '{"fr":"Certifié·e","en":"Certified","ha":"An ba da shaida"}',
   '{"fr":"Obtenir son premier certificat.","en":"Earn your first certificate.","ha":"Samu takardar shaidarka ta farko."}',
   'award', 'achievement', '{"certificates":1}', 51),
  ('explorer',
   '{"fr":"Explorateur·rice","en":"Explorer","ha":"Mai bincike"}',
   '{"fr":"Terminer une leçon dans chaque rubrique publiée.","en":"Complete a lesson in every published category.","ha":"Kammala darasi a kowane rukuni da aka wallafa."}',
   'compass', 'exploration', '{"one_lesson_per_rubrique":true}', 60),
  ('polyglot',
   '{"fr":"Polyglotte","en":"Polyglot","ha":"Mai harsuna da yawa"}',
   '{"fr":"Suivre des leçons dans 2 langues.","en":"Take lessons in 2 languages.","ha":"Yi darussa da harsuna 2."}',
   'languages', 'exploration', '{"languages":2}', 61),
  ('early_bird',
   '{"fr":"Lève-tôt","en":"Early bird","ha":"Mai tashi da wuri"}',
   '{"fr":"Terminer une leçon avant 7 h.","en":"Complete a lesson before 7 a.m.","ha":"Kammala darasi kafin karfe 7 na safe."}',
   'sunrise', 'habits', '{"local_hour_before":7}', 70),
  ('night_owl',
   '{"fr":"Oiseau de nuit","en":"Night owl","ha":"Mujiya"}',
   '{"fr":"Terminer une leçon après 22 h.","en":"Complete a lesson after 10 p.m.","ha":"Kammala darasi bayan karfe 10 na dare."}',
   'moon', 'habits', '{"local_hour_from":22}', 71),
  ('podium',
   '{"fr":"Podium","en":"Podium","ha":"Matsayi na uku na farko"}',
   '{"fr":"Finir une semaine de ligue dans le top 3.","en":"Finish a league week in the top 3.","ha":"Gama makon gasa cikin uku na farko."}',
   'trophy', 'league', '{"league_rank_at_most":3}', 80),
  ('promoted',
   '{"fr":"Promu·e","en":"Promoted","ha":"An daukaka"}',
   '{"fr":"Monter dans la ligue supérieure.","en":"Move up to the next league.","ha":"Haura zuwa gasar gaba."}',
   'trending-up', 'league', '{"league_outcome":"promoted"}', 81)
on conflict (key) do update set
  name = excluded.name,
  description = excluded.description,
  icon = excluded.icon,
  category = excluded.category,
  criteria = excluded.criteria,
  display_order = excluded.display_order;

-- ---------------------------------------------------------------------------
-- Ligues hebdomadaires (§7.6). Lues uniquement via karatou_get_league().
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_league_groups (
  id bigserial primary key,
  week_start date not null check (extract(isodow from week_start) = 1),
  tier smallint not null check (tier between 1 and 5),
  created_at timestamptz not null default now(),
  closed_at timestamptz
);
create index if not exists karatou_league_groups_week_tier_idx
  on public.karatou_league_groups (week_start, tier);

create table if not exists public.karatou_league_members (
  group_id bigint not null references public.karatou_league_groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  week_start date not null,
  -- Tier de l'apprenant à son entrée (un groupe fusionné peut mêler deux tiers).
  tier smallint not null check (tier between 1 and 5),
  weekly_xp integer not null default 0 check (weekly_xp >= 0),
  joined_at timestamptz not null default now(),
  final_rank integer,
  outcome text check (outcome in ('promoted', 'stayed', 'demoted')),
  primary key (group_id, user_id),
  constraint karatou_league_members_one_per_week unique (user_id, week_start)
);
create index if not exists karatou_league_members_group_xp_idx
  on public.karatou_league_members (group_id, weekly_xp desc);

-- ---------------------------------------------------------------------------
-- Paquet de révision (Leitner, boîtes 1 à 5).
-- item_key : 'gloss:<course_id>:<terme>' ou 'q:<course_id>:<n° de question>'.
-- ---------------------------------------------------------------------------
create table if not exists public.karatou_review_items (
  user_id uuid not null references auth.users(id) on delete cascade,
  item_key text not null check (item_key ~ '^(gloss|q):[A-Za-z0-9_-]{1,120}:.{1,200}$'),
  module_slug text not null check (char_length(module_slug) between 1 and 120),
  course_id text not null check (char_length(course_id) between 1 and 120),
  kind text not null check (kind in ('glossary', 'quiz')),
  box smallint not null default 1 check (box between 1 and 5),
  due_date date not null,
  last_result text check (last_result in ('correct', 'wrong')),
  last_reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (user_id, item_key)
);
create index if not exists karatou_review_items_user_due_idx
  on public.karatou_review_items (user_id, due_date);

-- ---------------------------------------------------------------------------
-- RLS et privilèges. Supabase accorde par défaut tous les droits sur les
-- nouvelles tables à anon et authenticated : on retire tout explicitement,
-- puis on rend uniquement la lecture de ses propres lignes.
-- ---------------------------------------------------------------------------
alter table public.karatou_learner_stats enable row level security;
alter table public.karatou_xp_events enable row level security;
alter table public.karatou_lesson_attempts enable row level security;
alter table public.karatou_daily_quests enable row level security;
alter table public.karatou_badges enable row level security;
alter table public.karatou_user_badges enable row level security;
alter table public.karatou_league_groups enable row level security;
alter table public.karatou_league_members enable row level security;
alter table public.karatou_review_items enable row level security;

revoke all on public.karatou_learner_stats, public.karatou_xp_events, public.karatou_lesson_attempts,
  public.karatou_daily_quests, public.karatou_badges, public.karatou_user_badges,
  public.karatou_league_groups, public.karatou_league_members, public.karatou_review_items
  from public, anon, authenticated;
revoke all on sequence public.karatou_xp_events_id_seq, public.karatou_league_groups_id_seq
  from public, anon, authenticated;

grant select on public.karatou_learner_stats, public.karatou_xp_events, public.karatou_lesson_attempts,
  public.karatou_daily_quests, public.karatou_user_badges, public.karatou_review_items
  to authenticated;
grant select on public.karatou_badges to anon, authenticated;
-- karatou_league_groups / karatou_league_members : aucun accès direct ; le
-- classement passe par karatou_get_league() (noms abrégés, pas d'user_id).

drop policy if exists "Karatou users read own stats" on public.karatou_learner_stats;
create policy "Karatou users read own stats" on public.karatou_learner_stats
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Karatou users read own xp events" on public.karatou_xp_events;
create policy "Karatou users read own xp events" on public.karatou_xp_events
  for select to authenticated
  using (user_id = (select auth.uid()));

-- Comme karatou_learner_progress : soi-même, admin plateforme, admin de
-- l'organisation qui suit l'apprenant.
drop policy if exists "Karatou users read own lesson attempts" on public.karatou_lesson_attempts;
create policy "Karatou users read own lesson attempts" on public.karatou_lesson_attempts
  for select to authenticated
  using (
    user_id = (select auth.uid())
    or (select app_private.karatou_is_platform_admin())
    or exists (
      select 1 from public.karatou_enterprise_members m
      where m.user_id = karatou_lesson_attempts.user_id
        and (select app_private.karatou_is_org_admin(m.organization_id))
    )
  );

drop policy if exists "Karatou users read own daily quests" on public.karatou_daily_quests;
create policy "Karatou users read own daily quests" on public.karatou_daily_quests
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Karatou public reads badges" on public.karatou_badges;
create policy "Karatou public reads badges" on public.karatou_badges
  for select to anon, authenticated
  using (true);

drop policy if exists "Karatou users read own badges" on public.karatou_user_badges;
create policy "Karatou users read own badges" on public.karatou_user_badges
  for select to authenticated
  using (user_id = (select auth.uid()));

drop policy if exists "Karatou users read own review items" on public.karatou_review_items;
create policy "Karatou users read own review items" on public.karatou_review_items
  for select to authenticated
  using (user_id = (select auth.uid()));
