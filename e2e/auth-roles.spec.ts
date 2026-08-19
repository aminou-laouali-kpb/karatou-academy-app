import { test, expect } from '@playwright/test';
import { demoLogin } from './helpers';

test.describe('Auth and role-based routing', () => {
  test('learner demo login lands on /dashboard', async ({ page }) => {
    await demoLogin(page, 'learner');
    await expect(page).toHaveURL(/\/dashboard$/);
  });

  test('enterprise admin demo login lands on /enterprise', async ({ page }) => {
    await demoLogin(page, 'enterprise');
    await expect(page).toHaveURL(/\/enterprise$/);
  });

  test('platform admin demo login lands on /admin', async ({ page }) => {
    await demoLogin(page, 'platform');
    await expect(page).toHaveURL(/\/admin$/);
  });

  test('unauthenticated visit to a protected route redirects to /login', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });

  test('forgot-password page is reachable from login', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('link', { name: 'Mot de passe oublié ?' }).click();
    await expect(page).toHaveURL(/\/forgot-password$/);
    await expect(page.getByRole('heading', { name: 'Mot de passe oublié' })).toBeVisible();
  });

  test('learner cannot access the platform admin portal', async ({ page }) => {
    await demoLogin(page, 'learner');
    await page.goto('/admin');
    await expect(page).toHaveURL(/\/dashboard$/);
  });

  test('learner cannot access the enterprise portal', async ({ page }) => {
    await demoLogin(page, 'learner');
    await page.goto('/enterprise');
    await expect(page).toHaveURL(/\/dashboard$/);
  });

  test('learner cannot access enterprise member management', async ({ page }) => {
    await demoLogin(page, 'learner');
    await page.goto('/enterprise/members');
    await expect(page).toHaveURL(/\/dashboard$/);
  });

  test('enterprise admin cannot access the platform admin portal', async ({ page }) => {
    await demoLogin(page, 'enterprise');
    await page.goto('/admin');
    await expect(page).toHaveURL(/\/enterprise$/);
  });

  test('platform admin can also access the enterprise portal', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/enterprise');
    await expect(page).toHaveURL(/\/enterprise$/);
  });
});
