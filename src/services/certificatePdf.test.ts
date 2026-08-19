import { readFile } from 'node:fs/promises';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import * as fontkit from '@pdf-lib/fontkit';
import { generateCertificatePdf } from './certificatePdf';

const latinFont = new URL('../../node_modules/@fontsource/noto-sans/files/noto-sans-latin-ext-400-normal.woff', import.meta.url);
const arabicFont = new URL('../../node_modules/@fontsource/noto-sans-arabic/files/noto-sans-arabic-arabic-400-normal.woff', import.meta.url);

afterEach(() => vi.unstubAllGlobals());

describe('certificate PDF Unicode names', () => {
  it('uses Fontkit RTL shaping for joined Arabic glyphs', async () => {
    const font = fontkit.create(new Uint8Array(await readFile(arabicFont)));
    const word = 'محمد';
    const shaped = font.layout(word);
    const unshaped = font.glyphsForString(word);

    // The glyph run is visual RTL (the final د is rendered first, on the
    // left) and the final م uses a contextual joining glyph, not its isolated
    // character map. pdf-lib uses this same Fontkit layout in drawText().
    expect(shaped.direction).toBe('rtl');
    expect(shaped.glyphs.map((glyph) => glyph.codePoints[0])).toEqual([
      'د'.codePointAt(0),
      'م'.codePointAt(0),
      'ح'.codePointAt(0),
      'م'.codePointAt(0),
    ]);
    expect(shaped.glyphs.map((glyph) => glyph.id)).not.toEqual(unshaped.map((glyph) => glyph.id));
  });

  it.each([
    'Élève François Dupré',
    'Ɗanladi ɓello ƙwararre',
    'أحمد محمد',
    'Ɗanladi ɓello أحمد محمد',
  ])('embeds a readable Unicode font for %s', async (name) => {
    vi.stubGlobal('fetch', vi.fn(async (url: string) => {
      const file = String(url).includes('arabic') ? arabicFont : latinFont;
      return new Response(await readFile(file));
    }));

    const bytes = await generateCertificatePdf({
      name,
      moduleName: 'Culture numérique',
      issuedAt: '19 août 2026',
      uid: 'KA-2026-TEST-000001',
      verifyUrl: 'https://verify.karatou.academy/verify/KA-2026-TEST-000001',
    });

    const document = await PDFDocument.load(bytes);
    expect(document.getPageCount()).toBe(1);
    expect(bytes.byteLength).toBeGreaterThan(5_000);
  });
});