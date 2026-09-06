# karatou-academy

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-1s97mn1z)

> **Launching?** Start with the [Go-live runbook](docs/go-live-runbook.md): it records
> the real state of production and the operator actions that remain.
> For the full local-demo / staging / production deployment procedure, see the
> [Production Launch Checklist](docs/production-launch-checklist.md).

## Production Supabase Bootstrap

This app runs in local demo mode until Supabase env vars are configured.

The current production target is the existing Supabase project `Karatou Academy`
(`pqcovsnomouclkdjhjig`). Because that project already has legacy `modules`,
`courses`, and `certificates` tables, the MVP app uses namespaced `karatou_*`
tables to avoid collisions.

### 1. Configure env

Copy `.env.example` to `.env.local` and fill:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_DEMO_ENABLED` (`true` for local demos, `false` for staging/production)
- `SUPABASE_SERVICE_ROLE_KEY` for local seed/admin scripts only
- `KARATOU_ADMIN_EMAIL`
- `KARATOU_ADMIN_PASSWORD`
- `KARATOU_ADMIN_NAME`

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client code and never prefix it with `VITE_`.

### 2. Link and push migrations

```bash
supabase link --project-ref <your-project-ref>
npm run supabase:push:dry
npm run supabase:push
```

The migrations create:

- content CMS tables: `karatou_rubriques`, `karatou_modules`, `karatou_courses`, `karatou_content_imports`
- learner progress: `karatou_learner_progress`
- verifiable certificates: `karatou_certificates`
- organizations and memberships: `karatou_organizations`, `karatou_org_memberships`
- organization-scoped enterprise members and bourses: `karatou_enterprise_members`, `karatou_scholarships`
- a private profile bootstrap trigger for new Supabase Auth users

### 3. Seed content and admin

```bash
npm run seed:content
npm run seed:admin
```

`seed:content` upserts the current rubriques/modules/courses plus the PNUD demo
organization, org memberships, enterprise members, and bourses from `src/data/mockData.ts`.
`seed:admin` creates or updates the platform admin user and assigns
`app_metadata.role = "platform_admin"`. Enterprise managers should use
`app_metadata.role = "enterprise_admin"`.

### 4. Run production-mode MVP locally

```bash
npm run dev
```

With Supabase env vars present, register/login for real users, learner progress,
certificates, admin CMS content, and certificate verification use Supabase. The
demo account buttons only work when `VITE_DEMO_ENABLED=true`, which keeps the
MVP testable during local setup.

For staging/production, set:

```bash
VITE_DEMO_ENABLED=false
```

That removes the demo badge, demo account cards, demo switcher, local demo
sessions, and Supabase-login fallback to demo accounts.

## Authoring lessons

Lesson bodies come from two places, and the database wins:

1. **`/admin/lecons` (lesson studio)** — a platform admin writes the objective,
   sections, worked example, practice, quiz, reflection, glossary and the FR/EN/HA
   video URLs, and publishes without a redeploy. Stored in
   `karatou_courses.lesson_content`. A **Générer un brouillon** button drafts the
   lesson with Claude through the `admin-generate-lesson` Edge Function, and
   **Traduire depuis le français** produces the EN/HA versions; nothing is
   published until the admin saves. The generator needs a server-side key:

   ```bash
   supabase secrets set ANTHROPIC_API_KEY=sk-ant-... --project-ref <project-ref>
   ```

   Without it the manual editor still works and the button returns a clear error.
   `LESSON_MODEL` overrides the default model (`claude-opus-5`).

2. **The TypeScript registry** (`src/data/lessons/`, wired in
   `src/data/localizedContent.ts`) — the 19 launch lessons, versioned with the
   code and precached for offline use. Used whenever the database has nothing for
   that lesson and language.

See [docs/authoring-lessons.md](docs/authoring-lessons.md) for the full workflow.

## End-to-End Smoke Tests

Playwright smoke tests cover the production-core flows: role-based login and
route guards, the admin CMS (load + draft module save + validation), enterprise
bourse creation, and public certificate verification.

```bash
npx playwright install chromium   # one-time browser download
npm run test:e2e                  # run the suite
npm run test:e2e:ui               # interactive runner
npm run test:e2e:report           # open the last HTML report
```

Cross-organization RLS isolation is proven separately, against a real Postgres:

```bash
npm run test:rls   # psql "$DATABASE_URL" -f scripts/verify-cross-org-rls.sql
```

The script seeds two throwaway organizations, switches to the `authenticated` /
`anon` roles, asserts that neither admin can see the other's data, and cleans up
after itself (including on failure).

The Playwright tests run against a deterministic local-demo build: `npm run test:e2e`
auto-starts `npm run dev:e2e` (`vite --mode e2e` on `127.0.0.1:4317`), which
loads `.env.e2e` to force `VITE_DEMO_ENABLED=true` with empty Supabase vars.
This keeps the suite hermetic — it never touches the real Supabase project and
does not depend on your local `.env.local`. That is also why cross-organization
RLS isolation stays a documented `test.fixme` here: with no Supabase, the browser
suite cannot exercise RLS at all. It is covered by `npm run test:rls` above.
