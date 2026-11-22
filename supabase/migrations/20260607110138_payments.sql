-- Rapatrié depuis l'historique de production : schéma hérité de l'implémentation Next.js,
-- appliqué avant les tables karatou_*. Conservé tel quel pour que le dépôt reflète la prod
-- (`supabase db push` exige que chaque version distante existe localement).
CREATE TABLE scholarships (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  code TEXT UNIQUE NOT NULL,
  email_sent_to TEXT,
  module_id UUID REFERENCES modules(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','claimed','expired')),
  expires_at TIMESTAMPTZ,
  claimed_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('certificate','plus_monthly','plus_annual','enterprise')),
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'XOF' CHECK (currency IN ('XOF','USD','EUR')),
  provider TEXT CHECK (provider IN ('stripe','cinetpay')),
  provider_order_id TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','paid','failed','refunded')),
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  plan TEXT CHECK (plan IN ('plus_monthly','plus_annual')),
  stripe_subscription_id TEXT,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  status TEXT DEFAULT 'active' CHECK (status IN ('active','cancelled','past_due')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own orders" ON orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users view own subscriptions" ON subscriptions FOR SELECT USING (auth.uid() = user_id);
