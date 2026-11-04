import { test, expect, Locator } from '@playwright/test';

async function contrast(locator: Locator) {
  return locator.evaluate((element) => {
    const rgba = (color: string) => {
      const parts = color.match(/[\d.]+/g)!.map(Number);
      return [parts[0], parts[1], parts[2], parts[3] ?? 1];
    };
    const blend = (fg: number[], bg: number[]) => fg.slice(0, 3).map((v, i) => v * fg[3] + bg[i] * (1 - fg[3]));
    const ancestors: Element[] = [];
    for (let node: Element | null = element; node; node = node.parentElement) ancestors.unshift(node);
    let background = [255, 255, 255];
    for (const node of ancestors) background = blend(rgba(getComputedStyle(node).backgroundColor), background);
    const foreground = blend(rgba(getComputedStyle(element).color), background);
    const luminance = (color: number[]) => color.map((v) => {
      const n = v / 255;
      return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
    }).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
    const a = luminance(foreground);
    const b = luminance(background);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  });
}

test('dark-header language and sign-in text meet 4.5:1 in normal, hover and focus states', async ({ page }) => {
  await page.goto('/');
  for (const control of [
    page.getByRole('button', { name: 'FR', exact: true }),
    page.getByRole('button', { name: 'EN', exact: true }),
    page.getByRole('button', { name: 'Se connecter', exact: true }),
  ]) {
    expect(await contrast(control)).toBeGreaterThanOrEqual(4.5);
    await control.hover();
    expect(await contrast(control)).toBeGreaterThanOrEqual(4.5);
    await control.focus();
    expect(await contrast(control)).toBeGreaterThanOrEqual(4.5);
  }
});

test('375px mobile and 200%-equivalent desktop reflow work in all three languages', async ({ page }) => {
  // 640 CSS px is the reflow width of a 1280px desktop viewport at 200% zoom.
  for (const width of [375, 640]) {
    await page.setViewportSize({ width, height: 812 });
    for (const code of ['FR', 'EN', 'HA']) {
      await page.goto('/');
      await page.locator('nav button[aria-expanded]').click();
      await page.getByRole('button', { name: code, exact: true }).click();
      await page.locator('nav').first().locator('a[href="#modules"]:visible').click();
      await expect(page.locator('nav button[aria-expanded]')).toHaveAttribute('aria-expanded', 'false');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.goto('/register');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  }
});
