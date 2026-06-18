import { defineConfig, devices } from '@playwright/test';

// Dedicated port so E2E never collides with a running `npm run dev` (5173).
const PORT = 4317;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // Starts the app in forced local-demo mode (see .env.e2e). reuseExistingServer
  // lets a developer keep `npm run dev:e2e` running between test invocations.
  webServer: {
    command: 'npm run dev:e2e',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
