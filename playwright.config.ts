import { defineConfig, devices } from '@playwright/test';

// Dedicated ports so E2E never collides with a running `npm run dev` (5173).
const PORT = 4317; // demo mode (default suite)
const PROD_PORT = 4318; // production mode (demo off — access-gating suite)
const baseURL = `http://127.0.0.1:${PORT}`;
const prodURL = `http://127.0.0.1:${PROD_PORT}`;

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  // The app follows the phone's language; the suites assert French copy, so
  // they browse as a French-speaking user (Chromium defaults to en-US).
  use: { trace: 'on-first-retry', locale: 'fr-FR' },
  projects: [
    // Demo-mode suite (seeded demo data, demo login cards).
    { name: 'chromium', testDir: './e2e', use: { ...devices['Desktop Chrome'], locale: 'fr-FR', baseURL } },
    // Production-mode suite (VITE_DEMO_ENABLED=false): proves access gating.
    { name: 'chromium-prod', testDir: './e2e-prod', use: { ...devices['Desktop Chrome'], locale: 'fr-FR', baseURL: prodURL } },
    // Phone-width smoke tests (Chromium, touch): most learners use cheap Android phones.
    { name: 'mobile', testDir: './e2e-mobile', use: { ...devices['Pixel 5'], locale: 'fr-FR', baseURL } },
  ],
  webServer: [
    { command: 'npm run dev:e2e', url: baseURL, reuseExistingServer: !process.env.CI, timeout: 120_000 },
    { command: 'npm run dev:e2e-prod', url: prodURL, reuseExistingServer: !process.env.CI, timeout: 120_000 },
  ],
});
