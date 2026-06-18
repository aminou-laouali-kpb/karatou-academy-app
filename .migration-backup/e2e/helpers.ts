import { Page, expect } from '@playwright/test';

export type DemoRole = 'learner' | 'enterprise' | 'platform';

// The demo login cards render the account email, which is a stable, unique,
// language-independent anchor for each role.
const DEMO_EMAIL: Record<DemoRole, RegExp> = {
  learner: /student@karatou\.test/,
  enterprise: /admin@karatou\.test/,
  platform: /platform@karatou\.test/,
};

export const HOME_ROUTE: Record<DemoRole, RegExp> = {
  learner: /\/dashboard$/,
  enterprise: /\/enterprise$/,
  platform: /\/admin$/,
};

/** Logs in via the demo card for `role` and waits for the role's home route. */
export async function demoLogin(page: Page, role: DemoRole): Promise<void> {
  await page.goto('/login');
  await page.getByRole('button', { name: DEMO_EMAIL[role] }).click();
  await expect(page).toHaveURL(HOME_ROUTE[role]);
}
