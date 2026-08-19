import { test, expect } from '@playwright/test';
import { demoLogin } from './helpers';

test.describe('Platform admin CMS', () => {
  test('admin content page loads', async ({ page }) => {
    await demoLogin(page, 'platform');
    await expect(page.getByRole('heading', { name: 'Admin contenus' })).toBeVisible();
  });

  test('blocks saving a module with an empty title', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.getByRole('button', { name: 'Nouveau', exact: true }).click();
    await page.getByLabel('Titre FR', { exact: true }).fill('');
    await page.getByRole('button', { name: 'Sauvegarder', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('Le titre FR est obligatoire.');
  });

  test('team page loads with the create-enterprise-admin form', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/team');
    await expect(page.getByRole('heading', { name: 'Équipe & accès' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Créer un admin entreprise' })).toBeVisible();
  });

  test('bulk attestations tool loads', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/attestations');
    await expect(page.getByRole('heading', { name: 'Attestations en masse' })).toBeVisible();
    await expect(page.getByText('Charger le modele (PDF, PNG ou JPG)')).toBeVisible();
  });

  test('saves a new draft module and shows it in the module list', async ({ page }) => {
    await demoLogin(page, 'platform');

    const title = `E2E Smoke Module ${Date.now()}`;
    await page.getByRole('button', { name: 'Nouveau', exact: true }).click();
    await page.getByLabel('Titre FR', { exact: true }).fill(title);
    await page.getByRole('button', { name: 'Sauvegarder', exact: true }).click();

    await expect(page.getByRole('status')).toContainText(title);
    await expect(page.getByRole('button', { name: new RegExp(title) })).toBeVisible({ timeout: 10_000 });
  });
});
