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
  use: { trace: 'on-first-retry' },
  projects: [
    // Demo-mode suite (seeded demo data, demo login cards).
    { name: 'chromium', testDir: './e2e', use: { ...devices['Desktop Chrome'], baseURL } },
    // Production-mode suite (VITE_DEMO_ENABLED=false): proves access gating.
    { name: 'chromium-prod', testDir: './e2e-prod', use: { ...devices['Desktop Chrome'], baseURL: prodURL } },
  ],
  webServer: [
    { command: 'npm run dev:e2e', url: baseURL, reuseExistingServer: !process.env.CI, timeout: 120_000 },
    { command: 'npm run dev:e2e-prod', url: prodURL, reuseExistingServer: !process.env.CI, timeout: 120_000 },
  ],
});
