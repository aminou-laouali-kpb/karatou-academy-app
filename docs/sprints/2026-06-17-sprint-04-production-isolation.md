# Sprint 04 - Production Isolation & Go-Live Hardening

Dates: June 17, 2026
Owner: Karatou Academy product/engineering
Status: Done (code). Remaining: operator env config on Replit + optional prod DB seed cleanup.

## Why This Sprint

Going to production on Replit surfaced that "everyone with the link sees all dashboards".
Root cause: the app (1) seeded its entire state from `mockData` **unconditionally**, and
(2) trusted `localStorage` for auth synchronously. A focused parallel audit (4 dimensions,
adversarially verified) confirmed **11 real production risks**, including two P0s. This
sprint closes them so that, in production, **each user sees only their own data**.

## Audit summary (11 confirmed)

- **P0 — Forged certificate verification.** `/verify/:uid` (public) resolved DEMO certificates
  from local seed state before the server RPC, so anyone could open `/verify/KA-2026-AI-PN001`
  and get a green "Certificat Verifie" for a fabricated holder — defeating the S02-13 server
  verification.
- **P0 — Auth bypass via localStorage.** In production `authReady`/`isAuthenticated` were seeded
  synchronously from `localStorage`; a crafted `{role:"platform_admin"}` (no password) passed the
  client gate and mounted admin/enterprise UI before the real `getUser()` ran.
- **P1/P2 — Mock data in production.** `defaultState` seeded modules/courses, the PNUD org, its
  members, scholarship codes, and demo certificates regardless of mode; shown to real users and
  re-injected by repair functions / the enterprise null-branch; stale data persisted across logout.

## Fixes (all shipped)

- **Empty-in-production state.** `LearningContext.defaultState = isDemoEnabled ? demoSeedState : emptyState`.
  Production starts empty; real data comes only from Supabase (RLS-scoped per user).
- **Mode-namespaced storage.** `LEARNING_STORAGE_KEY` is `…v6.prod` vs `…v6.demo`, so a demo-populated
  store can never be read in production.
- **Gated repairs.** `repairSeedCertificates` is a no-op when `!isDemoEnabled` (mirrors the existing
  `repairEnterpriseSeed` gate). The enterprise null-branch now yields empty data (not the PNUD seed) in prod.
- **Per-user reset.** On auth-identity change (login/logout/switch), production resets cached
  LearningContext state so one account never inherits another's data on a shared device.
- **Auth-bypass closed.** `readStoredUser()` returns `null` in production (real sessions are never
  persisted to that key), so `authReady` starts `false` and `ProtectedRoute` waits for the real
  `getUser()` validation. Crafted `localStorage` is ignored.
- **Server-only verification.** `Verify.tsx` only consults local certificates in demo mode; in
  production `/verify` is authoritative on the `karatou_verify_certificate` RPC.
- **Empty-state robustness.** Dashboard and LessonPlayer render a clean "no courses yet" state instead
  of crashing when a fresh production tenant has no modules.

## Verification

- New **production-mode E2E suite** (`e2e-prod/`, demo OFF via `.env.e2e-prod`, second Playwright
  project `chromium-prod` on port 4318):
  - login shows no demo affordances;
  - logged-out users are redirected from every dashboard (`/dashboard`, `/admin`, `/admin/team`,
    `/admin/attestations`, `/enterprise`, `/enterprise/members`);
  - `/verify/KA-2026-AI-PN001` returns "Certificat introuvable" (never a green verified);
  - a crafted `localStorage` user cannot reach `/admin`.
- Full gate green: typecheck, lint, build, **27 E2E passed** (demo suite unchanged + 4 prod-gate).
- Backend journey re-validated on prod (rolled back): issuance gated on completion, anon verify
  reflects active/expired/revoked/unknown.

## Designed certificate (Coursera-style) + sponsor logos

Learner certificate download is now a branded PDF (replacing the old `.txt`):
- `src/services/certificatePdf.ts` generates the certificate with `pdf-lib`: recreated
  Karatou Academy logo (gold "K" on a blue rounded mark + serif wordmark + tagline),
  double navy/gold frame, gold corner flourishes, a gold seal/rosette, the recipient
  name, module, issue date, and a **QR + ID** linking to `/verify/:uid`. Verified by a
  Node smoke test (valid PDF, all SVG-path/dashed/QR primitives render).
- **Sponsor logo**: `karatou_organizations.logo_url` (migration) + a public Storage
  bucket `org-logos` (platform-admin write, public read). `/admin/team` org creation
  gains an optional logo upload (`uploadOrgLogo`). When a learner's org has a logo, the
  certificate embeds it top-right ("En partenariat avec"). Resolved at download via
  `fetchOrganizationLogo(user.orgId)`; missing/CORS-failing logos are skipped gracefully.
- Karatou logo is recreated in code (zero asset dependency); drop a real PNG at
  `public/brand/` later for pixel-perfect if desired.
- typecheck, lint, build, 27 E2E all green.

## Remaining (operator)

1. **Replit env (the actual switch to production):** set Secrets and restart the Repl —
   `VITE_DEMO_ENABLED=false`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`. Without all three a
   non-demo login cannot work.
2. **Optional prod DB cleanup:** the PNUD Niger demo org + 6 members + 4 scholarship rows still
   physically exist in the production database (seeded in S01-03). They are RLS-scoped, but for a
   clean launch consider removing them (or keep PNUD as a real first org). The client no longer
   seeds or displays them in production.
