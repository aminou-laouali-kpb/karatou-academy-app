import { defineConfig, devices } from '@playwright/test';

// Production-optimized, service-worker-enabled test build. The demo flag and
// empty backend settings apply ONLY to this isolated output, never dist/.
const baseURL = 'http://127.0.0.1:4320';

export default defineConfig({
  testDir: './e2e-pwa',
  outputDir: './generated-artifacts/pwa-results',
  workers: 1,
  retries: 0,
  reporter: 'list',
  use: { ...devices['Desktop Chrome'], baseURL, serviceWorkers: 'allow' },
  webServer: {
    command: 'VITE_DEMO_ENABLED=true VITE_SUPABASE_URL= VITE_SUPABASE_ANON_KEY= npm run build -- --mode offline-check --outDir generated-artifacts/pwa && npm run preview -- --host 127.0.0.1 --port 4320 --strictPort --outDir generated-artifacts/pwa',
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
