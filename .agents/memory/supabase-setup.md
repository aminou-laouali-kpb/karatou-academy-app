---
name: Supabase setup
description: Karatou Academy Supabase project configuration and what's been wired up
---
- Project ID: pqcovsnomouclkdjhjig, region eu-west-3, status ACTIVE_HEALTHY
- VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY set as shared env vars (anon/legacy key)
- newsletter_subscribers table created with RLS: admin-only read, open insert for anon+auth
- attestation-sign and attestation-verify edge functions deployed (verify_jwt: false)
- org loading fixed: queries org_members!inner(organizations) by user_id, not karatou_organizations
- ATTESTATION_SECRET env var should be set in Supabase dashboard Edge Functions secrets for production

**Why:** Needed to activate real auth instead of demo mode; edge functions needed for server-side attestation signing.
**How to apply:** When adding new tables, always add RLS policies. When touching org queries, use org_members join not organizations directly.
