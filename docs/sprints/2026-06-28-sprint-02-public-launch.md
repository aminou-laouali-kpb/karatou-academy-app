# Sprint 02 - Public Launch

Dates: June 28, 2026 to July 11, 2026
Owner: Karatou Academy product/engineering
Status: Planned

## Sprint Goal

Take Karatou Academy from "production-testable in demo mode" (end state of Sprint 01)
to a real public launch on a live Supabase project: real Auth users, durable
learner/certificate data, no demo fallback, RLS proven across organizations, and a
deployed, monitored, legally-covered web app.

## Why This Sprint Matters

Sprint 01 made every flow work and demo-able without looking like a prototype, but it
was verified largely in local-demo mode and with rollback-wrapped SQL. The remaining
risk is entirely on the "is this real in production" axis: there are no real Auth users,
no durable certificate rows, unaddressed Supabase advisors, and no deployed host. This
sprint closes those gaps so the app can be opened to real learners and partners.

## Scope

In scope:
- Real Supabase Auth users for all three roles, verified end-to-end (not demo fallback).
- Enterprise-admin provisioning (script, not manual dashboard steps).
- Durable certificate issuance and verification against real rows.
- Clear Supabase security/performance advisor findings.
- Cross-organization RLS isolation proven by an automated test (the S01-03 / S01-07 deferral).
- Production hosting + custom domain with demo mode disabled.
- Auth UX completeness (email confirmation, password reset, real error states).
- Error monitoring/observability.
- Privacy policy, terms, and learner-PII handling review.

Out of scope (deferred, same as Sprint 01 plus follow-ups):
- Payments/subscriptions and multi-tenant billing plans.
- Server-side PDF/DOCX lesson extraction (Edge Function workflow).
- Native mobile apps.
- Advanced analytics dashboards.
- Route-level code-splitting/bundle optimization (tracked as a stretch item, S02-10).

## Sprint Backlog

### S02-01 - Real Auth Users And Roles In Production

Status: Partially done. **Platform admin already configured & functional** —
`alaoualiabdou@karatoupostbac.com` has `app_metadata.role = 'admin'` (email confirmed),
which `karatou_is_platform_admin()` accepts and the app normalizes to `platform_admin`.
Remaining: create real **enterprise-admin** and **learner** Auth accounts (needs the
service-role key — use `seed:enterprise-admin` for the admin; learners self-register).
Priority: P0
Estimate: 5 pts

User story:
As Karatou, I want real Supabase Auth accounts for platform admin, enterprise admin, and
learner so launch does not depend on demo fallback.

Tasks:
- Run `seed:admin` to create the production platform admin and confirm `app_metadata.role`.
- Create at least one real enterprise-admin and one real learner Auth user.
- Verify real login (Supabase, not the demo-account fallback) routes each role correctly.
- Confirm the `profiles` bootstrap trigger populates rows for new sign-ups.

Acceptance criteria:
- Each role logs in with real credentials and lands on the correct portal.
- No reliance on `student@karatou.test` / `admin@karatou.test` / `platform@karatou.test`.
- `VITE_DEMO_ENABLED=false` build still authenticates all three real roles.

### S02-02 - Enterprise Admin Provisioning Script

Status: Done. Added `scripts/create-supabase-enterprise-admin.mjs` + `npm run seed:enterprise-admin`:
creates/updates an enterprise-admin Auth user, sets `app_metadata.role = 'enterprise_admin'`,
and links them to an existing org (`karatou_org_memberships` + `karatou_enterprise_members`).
Env vars documented in `.env.example`; usage in the launch checklist.
Priority: P1
Estimate: 3 pts

User story:
As Karatou, I want a repeatable script to provision enterprise admins so onboarding a
partner organization is not a manual dashboard process.

Tasks:
- Add a script (e.g. `seed:enterprise-admin`) that creates/updates an Auth user with
  `app_metadata.role = "enterprise_admin"`.
- Insert/activate the matching `karatou_org_memberships` row for the target organization.
- Document usage in the launch checklist.

Acceptance criteria:
- One command provisions an enterprise admin scoped to a given organization.
- The provisioned admin sees only their organization in `/enterprise`.

### S02-03 - Durable Certificate Issuance

Status: Core done (server issuance). Migration `20260616130000_s02_03_certificate_issuance_rpc` applied to prod.
Priority: P0
Estimate: 8 pts

Implementation:
- Added SECURITY DEFINER RPC `public.karatou_issue_certificate(module_slug)` that verifies the caller completed every course of the module (`karatou_learner_progress` vs `karatou_courses`), generates the UID server-side, sets the dates, and inserts the row. Idempotent (returns the existing active cert). Granted to `authenticated` only.
- App: `issueCertificate` calls the RPC in Supabase mode (saving progress first) and keeps local generation in demo mode. Removed the now-dead client `saveCertificateRecord` / `certificateToRow` (direct writes are blocked by RLS since S03-04).
- Verified on prod (rollback-wrapped): a fully-completed module issues `KA-2026-INT-...` with the real profile name; an incomplete module is refused (`module not completed (0 / 8)`).
- Remaining: optional backfill of certificates for launch learners (none exist yet → with S02-01).


User story:
As a learner, I want a real, verifiable certificate written to the database when I
complete a module so verification works against production data.

Tasks:
- Persist a `karatou_certificates` row on module completion (UID, status, expiry).
- Backfill/seed initial real certificates for launch learners.
- Verify `/verify/:uid` resolves active/expired/revoked against real rows (not demo seed).
- Confirm enterprise certificate search works against real org certificates.

Acceptance criteria:
- Completing a module produces a durable, verifiable certificate.
- Public `/verify/:uid` returns the correct state from the database.
- No dependency on `src/data/mockData.ts` certificates in production.

### S02-04 - Clear Supabase Advisors

Status: Not started
Priority: P0
Estimate: 5 pts

User story:
As Karatou, I want Supabase security and performance advisor findings resolved before
the app is public.

Tasks:
- Run `get_advisors` (security + performance) on the production project.
- Fix or document each finding (RLS gaps, missing indexes, exposed functions, etc.).
- Re-run advisors and confirm a clean (or knowingly-accepted) state.

Acceptance criteria:
- No unaddressed security advisors.
- Performance advisors are resolved or explicitly accepted with rationale.

### S02-05 - Cross-Organization RLS Isolation Test

Status: Not started
Priority: P1
Estimate: 5 pts

User story:
As the team, we want automated proof that one organization cannot see another's learners
or bourses (the fixture deferred from S01-03 / S01-07).

Tasks:
- Seed a second organization plus a second enterprise-admin Auth user.
- Promote the `test.fixme` in `e2e/enterprise.spec.ts` to a real test (browser and/or SQL).
- Assert org A admin cannot read org B members, scholarships, or certificates.

Acceptance criteria:
- The cross-org test passes and fails if RLS is weakened.
- `npm run test:e2e` covers cross-organization isolation.

### S02-06 - Production Hosting And Domain

Status: Not started
Priority: P0
Estimate: 5 pts

User story:
As Karatou, I want the app deployed on a real domain with demo mode off so users can reach it.

Tasks:
- Deploy `dist/` to a static host (Netlify/Vercel/Cloudflare Pages).
- Configure SPA rewrite of all paths to `/index.html` (deep links like `/verify/:uid`).
- Build with `VITE_DEMO_ENABLED=false` and the production Supabase keys.
- Attach a custom domain with HTTPS.

Acceptance criteria:
- The app loads on the production domain over HTTPS.
- Deep links and refreshes resolve (no 404 on client routes).
- No demo badge, switcher, or demo login cards in production.

### S02-07 - Auth UX Completeness

Status: Core done (password reset). Remaining = Supabase dashboard config (email templates + redirect URLs).
Priority: P1
Estimate: 5 pts

Implementation:
- Added `requestPasswordReset` / `updatePassword` to AuthContext (Supabase
  `resetPasswordForEmail` with a `${origin}/reset-password` redirect, and `updateUser`).
- Added `/forgot-password` (request a reset link) and `/reset-password` (set a new
  password from the recovery session) pages, both lazy + trilingual (fr/en/ha), with a
  "Forgot password?" link on `/login`. E2E covers reaching the page.
- Email confirmation is already handled in `register` (returns "confirm your email"
  when no session), and auth error states are surfaced on Login/Register.
- Remaining (operator, no code): set Supabase Auth email templates + add the production
  domain to the allowed redirect URLs so reset/confirmation links resolve.

User story:
As a real user, I want email confirmation and password reset so account management works
without an engineer.

Tasks:
- Wire and test the email confirmation flow for new sign-ups.
- Add a password reset (forgot-password) flow.
- Surface real Supabase auth error states (already-registered, unconfirmed, wrong password).
- Configure Supabase auth email templates and redirect URLs for the production domain.

Acceptance criteria:
- A new learner can register, confirm by email, and log in.
- A user can reset a forgotten password end-to-end.
- Auth errors show clear, localized messages.

### S02-08 - Observability And Error Monitoring

Status: Not started
Priority: P2
Estimate: 3 pts

User story:
As the team, we want to see client errors and key events in production so we can react to issues.

Tasks:
- Add client-side error monitoring (e.g. Sentry or equivalent).
- Confirm Supabase logs are reviewable for auth/database errors.
- Add lightweight launch analytics (sign-ups, completions, verifications) if privacy allows.

Acceptance criteria:
- A thrown client error is captured with enough context to debug.
- An operator can find auth/DB errors after a report.

### S02-09 - Privacy, Terms, And PII Review

Status: Core done (pages live + PII documented). Needs counsel review + real contact before launch.
Priority: P1
Estimate: 3 pts

Implementation:
- Added `/privacy` and `/terms` pages (lazy, trilingual fr/en/ha) sourced from
  `src/data/legalContent.ts`, linked from the Landing footer. E2E covers both.
- PII documented in the privacy policy: name, email, country, learning progress,
  certificates; purpose, Supabase as processor, retention, and user rights (access/
  rectify/delete). No payment or unnecessary sensitive data is collected.
- Caveats (operator): the legal text is a reviewed-by-counsel starting template, not
  legal advice — have counsel review it and replace the placeholder `contact@karatou.academy`
  with the real address before a public launch.

User story:
As Karatou, I want privacy/terms pages and a PII review so a public education platform
handling learner data is compliant.

Tasks:
- Publish a privacy policy and terms of service (linked from footer/auth pages).
- Review what learner PII is stored (name, email, country, progress) and document retention.
- Add consent/cookie handling if required by the launch region.

Acceptance criteria:
- Privacy policy and terms are reachable from the app.
- Learner PII storage and retention are documented and justified.

### S02-10 - Bundle Optimization (Stretch)

Status: Not started
Priority: P2
Estimate: 3 pts

User story:
As a user on a low-bandwidth connection, I want faster first load.

Tasks:
- Route-level code-splitting / lazy loading for admin, enterprise, and lesson player.
- Re-measure the bundle (currently ~497 KB JS / 143 KB gzip).

Acceptance criteria:
- Initial route loads a meaningfully smaller bundle.
- `npm run build` and `npm run test:e2e` still pass.

### S02-11 - Certificate And Cross-Org RLS Hardening (from code review)

Status: Not started
Priority: P0
Estimate: 8 pts

User story:
As Karatou, I want certificates to be confidential and unforgeable, and organization
data strictly isolated, so the credential and multi-tenant model can be trusted publicly.

Context: a June 2026 code review found these server-side (RLS/migration) issues. They do
not affect local-demo mode but must be fixed before any real-data launch.

Tasks:
- Certificate confidentiality: the verification SELECT policy currently allows any anon/
  authenticated user to read the entire `karatou_certificates` table (PII leak). Replace
  the blanket read with a `SECURITY DEFINER` RPC that returns only the single matching
  UID's minimal fields; restrict the table SELECT to owner + org admins.
- Certificate integrity: `INSERT/UPDATE` only check `user_id = auth.uid()`, so a user can
  self-issue a certificate with arbitrary name/module/dates and a guessable UID. Move
  issuance to a server-authoritative RPC that verifies module completion and generates the
  UID with a random component; revoke direct client INSERT/UPDATE.
- Cross-org isolation: scope the `karatou_learner_progress` read policy to the admin's
  organization (currently any enterprise admin can read all orgs' progress). Re-harden the
  `karatou_content_imports` policy to platform-admin only.
- Redemption: generate bourse codes server-side with a CSPRNG and adequate length; add
  rate limiting on the redeem RPC.
- Demo gate: source demo-login availability from `import.meta.env.DEV` so demo accounts are
  physically impossible in a production bundle.

Acceptance criteria:
- Anonymous/authenticated REST cannot dump the certificate table; only single-UID verify works.
- A user cannot create or alter a certificate directly; issuance requires real completion.
- An enterprise admin cannot read another organization's progress/members/scholarships.
- New migrations applied and re-verified with rollback-wrapped SQL + the S02-05 cross-org test.

### S02-12 - In-app Admin Provisioning (Edge Function)

Status: Core done (create enterprise admin from `/admin`). Function deployed to prod.
Priority: P1
Estimate: 5 pts

User story:
As a platform admin, I want to create enterprise admins from the admin UI in
production, without running scripts or sharing the service-role key.

Implementation:
- Deployed Edge Function `admin-provision-enterprise-admin` (holds the service-role
  key server-side; `verify_jwt` on; re-checks the caller is a platform admin via
  their JWT) that creates/updates the Auth user, sets `app_metadata.role`, and links
  org membership + enterprise member. Verified: unauthenticated call returns 401.
- Added `/admin/team` page (lazy) + AdminNav tab + `provisionEnterpriseAdmin` service
  (`supabase.functions.invoke`, JWT attached automatically) + FR/EN/HA copy.
- Demo mode shows a notice that a real Supabase platform-admin session is required.
- E2E: the team page loads with the create-admin form.

- In-app **organization creation** added to `/admin/team` (platform-admin RLS allows the
  insert directly; demo mode keeps it local). The org then appears in the enterprise-admin
  form's org picker. Learner self-registration already exists.
Why this matters: this is the production-grade replacement for the `seed:enterprise-admin`
script (which stays only for the very first bootstrap).

### S02-13 - Bulk Attestation Generator

Status: Done (client tool). Lazy-loaded admin page.
Priority: P2
Estimate: 8 pts

User story:
As a platform admin, I want to generate signed attestation PDFs in bulk from a PDF
template and an Excel list, positioning the name and QR visually.

Implementation:
- `/admin/attestations` page (lazy, platform-admin) with a left config panel and a
  live `react-pdf` preview. Upload a PDF template + an `.xlsx/.xls` list (parsed with
  `xlsx`, first column = names). Drag-and-drop the name and QR over the preview
  (pointer events), resize the name box (handle), and control font size/colour/X-Y/
  alignment/width; per-participant navigation.
- `src/services/attestationGenerator.ts`: per name, builds a QR payload
  (random id, name, issue/expiry dates, **HMAC-SHA256** signature via `crypto-js`),
  stamps the template with `pdf-lib`, embeds the QR, and zips all PDFs + a
  `Tracabilite_Certificats.csv` with `jszip` + `file-saver`.
- Heavy libs (pdf-lib, pdfjs, xlsx, jszip) live only in this lazy chunk (~1.4 MB),
  so the main bundle is unaffected. `tsconfig` gained `esModuleInterop` for the CJS libs.
- E2E: the tool page loads.
- Verification: the QR now encodes a scannable `/verify-attestation#<signed-payload>` URL
  (the signed JSON is base64 in the hash, so it stays self-contained/offline-verifiable).
  The public `/verify-attestation` page recomputes the HMAC and shows authentic / expired /
  tampered, with a paste fallback. E2E covers the tamper-detection path.

Caveats:
- The HMAC secret is a `VITE_` var, so it is bundled into the client and not truly
  secret (deters casual tampering only) — per the chosen design. For real
  tamper-resistance, sign server-side.
- `xlsx@0.18.5` carries a known advisory; acceptable for an admin-only upload, but
  consider the SheetJS CDN build before wider exposure.

## Definition Of Done

Every completed item must:
- Pass `npm run typecheck`, `npm run lint`, and `npm run build`.
- Pass `npm run test:e2e` (including new tests added this sprint).
- Include a Supabase migration when schema changes are made.
- Be verified against the live production project (not only demo mode), where applicable.
- Preserve RLS: no anonymous or cross-organization leakage.
- Update README, the launch checklist, or this doc when behavior changes.

## Sprint Review Demo Script

1. Load the production domain over HTTPS and confirm no demo affordances.
2. Register a real learner, confirm by email, log in, and reach `/dashboard`.
3. Log in as a real enterprise admin and create/redeem a bourse for the learner.
4. Complete a module and confirm a durable certificate is issued.
5. Verify the certificate at `/verify/:uid` against the live database.
6. Show the cross-organization isolation test passing in `npm run test:e2e`.
7. Show a clean Supabase advisors report.

## Risks

- Most P0 work needs live Supabase access (service-role key, project admin) and a hosting
  account; these are operator/credential dependencies, not just code.
- Email deliverability and auth redirect URLs must match the production domain or
  confirmation/reset flows break.
- Backfilling real certificates must not collide with the demo UIDs still referenced in tests.
- Advisor fixes that change RLS must be re-tested for cross-organization isolation.

## Success Metric

At sprint end, a real learner can sign up, complete a module, earn a verifiable certificate,
and a partner organization can manage its own learners and bourses on a live, monitored,
demo-free production domain, with Supabase advisors clean and cross-organization isolation
proven by automated tests.
