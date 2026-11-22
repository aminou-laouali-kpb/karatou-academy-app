-- Rapatrié depuis l'historique de production : schéma hérité de l'implémentation Next.js,
-- appliqué avant les tables karatou_*. Conservé tel quel pour que le dépôt reflète la prod
-- (`supabase db push` exige que chaque version distante existe localement).
CREATE TABLE modules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title_fr TEXT NOT NULL,
  title_en TEXT,
  title_ha TEXT,
  description_fr TEXT,
  description_en TEXT,
  description_ha TEXT,
  thumbnail_url TEXT,
  order_index INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN DEFAULT FALSE,
  is_free_preview BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  title_fr TEXT NOT NULL,
  title_en TEXT,
  title_ha TEXT,
  duration_minutes INTEGER DEFAULT 10,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(module_id, slug)
);

CREATE TYPE block_type AS ENUM (
  'objective','video','text','example',
  'practice','quiz','reflection','glossary_highlight'
);

CREATE TABLE content_blocks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  block_type block_type NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  content_fr JSONB,
  content_en JSONB,
  content_ha JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE course_videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  language TEXT CHECK (language IN ('fr','en','ha')),
  provider TEXT DEFAULT 'youtube' CHECK (provider IN ('youtube','bunny','upload')),
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration_seconds INTEGER,
  UNIQUE(course_id, language)
);

CREATE TABLE quiz_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  block_id UUID REFERENCES content_blocks(id) ON DELETE CASCADE,
  question_fr TEXT NOT NULL,
  question_en TEXT,
  question_ha TEXT,
  options_fr JSONB NOT NULL,
  options_en JSONB,
  options_ha JSONB,
  correct_index INTEGER NOT NULL,
  explanation_fr TEXT,
  explanation_en TEXT,
  explanation_ha TEXT,
  order_index INTEGER DEFAULT 0
);

CREATE TABLE glossary_terms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID REFERENCES modules(id) ON DELETE SET NULL,
  term_fr TEXT NOT NULL,
  term_en TEXT,
  term_ha TEXT,
  definition_fr TEXT NOT NULL,
  definition_en TEXT,
  definition_ha TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE glossary_terms ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published modules" ON modules FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Anyone can view published courses" ON courses FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Anyone can view content blocks" ON content_blocks FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view videos" ON course_videos FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view quiz questions" ON quiz_questions FOR SELECT USING (TRUE);
CREATE POLICY "Anyone can view glossary" ON glossary_terms FOR SELECT USING (TRUE);
