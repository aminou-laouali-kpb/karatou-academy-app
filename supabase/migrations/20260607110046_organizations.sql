-- Rapatrié depuis l'historique de production : schéma hérité de l'implémentation Next.js,
-- appliqué avant les tables karatou_*. Conservé tel quel pour que le dépôt reflète la prod
-- (`supabase db push` exige que chaque version distante existe localement).
CREATE TABLE organizations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  contact_email TEXT NOT NULL,
  country TEXT DEFAULT 'NE',
  subscription_plan TEXT DEFAULT 'free' CHECK (subscription_plan IN ('free','starter','professional','enterprise')),
  subscription_expires_at TIMESTAMPTZ,
  seats_total INTEGER DEFAULT 0,
  seats_used INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE org_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'learner' CHECK (role IN ('admin','learner')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(org_id, user_id)
);

ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE org_members ENABLE ROW LEVEL SECURITY;
