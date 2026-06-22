import { defineConfig } from 'vitest/config';

// Vitest config kept separate from vite.config.ts so the PWA plugin and the
// React plugin (with HMR) don't run during unit-test boots — tests stay fast.
export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    // Don't accidentally run Playwright specs as unit tests.
    exclude: ['node_modules/**', 'dist/**', 'e2e/**', 'e2e-prod/**'],
    environment: 'node',
    globals: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/lib/**', 'src/services/attestationGenerator.ts'],
    },
  },
});
