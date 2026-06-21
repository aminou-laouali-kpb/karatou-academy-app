# AGENTS.md

## Cursor Cloud specific instructions

Karatou Academy is a single-product Vite + React 18 + TypeScript SPA (French UI) backed
by Supabase. The app runs fully in **local demo mode** (mock data, no backend) when the
`VITE_SUPABASE_*` env vars are absent, so the front end is the only service required to
develop and test the core flows. The update script already runs `npm install`.

### Services / commands

The only service is the Vite dev server. Standard commands live in `package.json` and the
`README.md`; key ones:

- Dev server (demo mode): `npm run dev` → http://localhost:5173
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build`
- E2E tests: `npm run test:e2e` (Playwright auto-starts `dev:e2e` on :4317 and
  `dev:e2e-prod` on :4318; both are hermetic and never touch real Supabase)

### Non-obvious notes

- **Playwright browser**: the e2e suite needs the Chromium browser, which is NOT installed
  by `npm install`. Run `npx playwright install chromium` once before `npm run test:e2e`
  (it is cached under `~/.cache/ms-playwright`, so it usually survives across sessions).
- **Demo login**: with demo mode on (default in dev), the `/login` page shows demo account
  cards (Apprenant / Entreprise / Admin plateforme). Click a card to log in without real
  credentials — this is the fastest way to exercise learner, enterprise, and admin flows.
- **Supabase is optional**: real auth, persisted progress, certificates, CMS, and the
  cross-org RLS e2e test require a hosted Supabase project (no local Supabase/Docker config
  exists in-repo). One e2e test is intentionally `test.fixme`'d for this reason. Only set up
  Supabase (`.env.local`, `supabase link`, `npm run prod:bootstrap`) when explicitly testing
  production mode; see `README.md`.
