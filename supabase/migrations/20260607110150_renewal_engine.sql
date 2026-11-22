-- Rapatrié depuis l'historique de production : schéma hérité de l'implémentation Next.js,
-- appliqué avant les tables karatou_*. Conservé tel quel pour que le dépôt reflète la prod
-- (`supabase db push` exige que chaque version distante existe localement).
CREATE TABLE renewal_notifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  certificate_id UUID REFERENCES certificates(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  notification_type TEXT CHECK (notification_type IN (
    'expires_30_days',
    'expires_7_days',
    'expires_today',
    'expired'
  )),
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(certificate_id, notification_type)
);

ALTER TABLE renewal_notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own notifications"
  ON renewal_notifications FOR SELECT USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION update_expired_certificates()
RETURNS void AS $$
BEGIN
  UPDATE certificates
  SET status = 'expired'
  WHERE status = 'active'
    AND expires_at < NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE VIEW certificate_status_view AS
SELECT
  c.*,
  p.full_name,
  u.email,
  p.preferred_language,
  m.title_fr AS module_title_fr,
  m.title_en AS module_title_en,
  m.title_ha AS module_title_ha,
  CASE
    WHEN c.status = 'expired' OR c.expires_at < NOW() THEN 'expired'
    WHEN c.expires_at < NOW() + INTERVAL '7 days'  THEN 'expires_soon_7'
    WHEN c.expires_at < NOW() + INTERVAL '30 days' THEN 'expires_soon_30'
    ELSE 'active'
  END AS computed_status,
  EXTRACT(DAY FROM (c.expires_at - NOW()))::INTEGER AS days_until_expiry
FROM certificates c
JOIN profiles p ON p.id = c.user_id
JOIN auth.users u ON u.id = c.user_id
JOIN modules m ON m.id = c.module_id;
