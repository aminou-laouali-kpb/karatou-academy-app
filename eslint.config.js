import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // `.local/` et `.agents/` sont écrits par l'espace de travail Replit (templates
  // de skills, mémoire d'agent) : ce n'est pas notre code, et `eslint .` y échouait
  // sur des règles que nous n'avons pas à faire respecter là. `attached_assets/`
  // est du dépôt de fichiers, jamais du source.
  {
    ignores: [
      'dist',
      'coverage',
      'playwright-report',
      'test-results',
      '.local',
      '.agents',
      'attached_assets',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Node-context files: E2E tests, Playwright config, and Vite config.
    files: ['e2e/**/*.ts', 'e2e-prod/**/*.ts', 'playwright.config.ts', 'vite.config.ts'],
    languageOptions: {
      globals: globals.node,
    },
  }
);
