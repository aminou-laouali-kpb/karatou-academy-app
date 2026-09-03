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
    await expect(page.getByText('Charger le modele PDF')).toBeVisible();
  });

  test('attestation registry page loads and is gated in demo mode', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.goto('/admin/attestations/registry');
    await expect(page.getByRole('heading', { name: 'Registre des attestations' })).toBeVisible();
    // No Supabase session in demo mode: searching the real registry is refused,
    // with the same notice as the other server-backed admin tools.
    await expect(page.getByRole('button', { name: /Rechercher/ })).toBeDisabled();
    await expect(page.getByRole('status')).toContainText('platform admin Supabase');
  });

  test('the registry is reachable from the admin navigation', async ({ page }) => {
    await demoLogin(page, 'platform');
    await page.getByRole('link', { name: 'Registre' }).click();
    await expect(page).toHaveURL(/\/admin\/attestations\/registry$/);
  });

  test('saves a new draft module and shows it in the module list', async ({ page }) => {
    await demoLogin(page, 'platform');

    const title = `E2E Smoke Module ${Date.now()}`;
    await page.getByRole('button', { name: 'Nouveau', exact: true }).click();
    await page.getByLabel('Titre FR', { exact: true }).fill(title);
    await page.getByRole('button', { name: 'Sauvegarder', exact: true }).click();

    await expect(page.getByRole('status')).toContainText(title);
    await expect(page.getByRole('button', { name: new RegExp(title) })).toBeVisible();
  });
});
