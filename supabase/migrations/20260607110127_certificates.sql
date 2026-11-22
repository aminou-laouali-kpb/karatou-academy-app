-- Rapatrié depuis l'historique de production : schéma hérité de l'implémentation Next.js,
-- appliqué avant les tables karatou_*. Conservé tel quel pour que le dépôt reflète la prod
-- (`supabase db push` exige que chaque version distante existe localement).
CREATE TABLE certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
  certificate_uid TEXT UNIQUE NOT NULL,
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','expired','revoked')),
  pdf_url TEXT,
  qr_code_url TEXT,
  granted_by_org_id UUID REFERENCES organizations(id) ON DELETE SET NULL,
  UNIQUE(user_id, module_id)
);

ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can verify certificate" ON certificates FOR SELECT USING (TRUE);
