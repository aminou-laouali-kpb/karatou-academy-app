-- Rapatrié depuis l'historique de production : schéma hérité de l'implémentation Next.js,
-- appliqué avant les tables karatou_*. Conservé tel quel pour que le dépôt reflète la prod
-- (`supabase db push` exige que chaque version distante existe localement).
ALTER TABLE organizations
  ADD COLUMN IF NOT EXISTS description TEXT,
  ADD COLUMN IF NOT EXISTS website TEXT,
  ADD COLUMN IF NOT EXISTS industry TEXT,
  ADD COLUMN IF NOT EXISTS size_range TEXT CHECK (
    size_range IN ('1-10','11-50','51-200','201-500','500+')
  ),
  ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES profiles(id);

CREATE POLICY "Org members can view their org"
  ON organizations FOR SELECT
  USING (
    id IN (
      SELECT org_id FROM org_members WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Org admins can update their org"
  ON organizations FOR UPDATE
  USING (
    id IN (
      SELECT org_id FROM org_members
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Members can view own org members"
  ON org_members FOR SELECT
  USING (
    org_id IN (
      SELECT org_id FROM org_members WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Org admins can manage members"
  ON org_members FOR ALL
  USING (
    org_id IN (
      SELECT org_id FROM org_members
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Users can insert themselves as member"
  ON org_members FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE TABLE org_invitations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'learner' CHECK (role IN ('admin','learner')),
  invited_by UUID REFERENCES profiles(id),
  token TEXT UNIQUE NOT NULL DEFAULT gen_random_uuid()::TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','accepted','expired','cancelled')),
  expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '7 days',
  accepted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(org_id, email)
);

ALTER TABLE org_invitations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Org admins can manage invitations"
  ON org_invitations FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM org_members
      WHERE org_id = org_invitations.org_id
        AND user_id = auth.uid()
        AND role = 'admin'
    )
  );

CREATE POLICY "Anyone can read invitation by token"
  ON org_invitations FOR SELECT
  USING (TRUE);

ALTER TABLE scholarships
  ADD COLUMN IF NOT EXISTS created_by UUID REFERENCES profiles(id),
  ADD COLUMN IF NOT EXISTS label TEXT,
  ADD COLUMN IF NOT EXISTS batch_name TEXT;

CREATE INDEX IF NOT EXISTS idx_scholarships_code ON scholarships(code);
CREATE INDEX IF NOT EXISTS idx_scholarships_org ON scholarships(org_id);

CREATE POLICY "Org admins and super-admins can manage scholarships"
  ON scholarships FOR ALL
  USING (
    org_id IN (
      SELECT org_id FROM org_members
      WHERE user_id = auth.uid() AND role = 'admin'
    )
    OR EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Anyone can read scholarships by code"
  ON scholarships FOR SELECT
  USING (TRUE);

CREATE OR REPLACE VIEW org_member_progress_view AS
SELECT
  om.org_id,
  om.user_id,
  om.role AS member_role,
  p.full_name,
  p.preferred_language,
  COUNT(DISTINCT up.course_id) FILTER (WHERE up.status = 'completed') AS courses_completed,
  COUNT(DISTINCT c.id) FILTER (WHERE c.status = 'active') AS certificates_active,
  COUNT(DISTINCT c.id) FILTER (WHERE c.status = 'expired') AS certificates_expired,
  MAX(up.updated_at) AS last_activity_at
FROM org_members om
JOIN profiles p ON p.id = om.user_id
LEFT JOIN user_progress up ON up.user_id = om.user_id
LEFT JOIN certificates c ON c.user_id = om.user_id
GROUP BY om.org_id, om.user_id, om.role, p.full_name, p.preferred_language;
