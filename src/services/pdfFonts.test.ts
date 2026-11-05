import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import { embedNameFonts, unicodeNameRuns } from './pdfFonts';

// Vite `?url` imports resolve to "/node_modules/..." paths; serve them from disk.
vi.stubGlobal('fetch', async (url: string) => {
  const bytes = await readFile(path.join(process.cwd(), decodeURIComponent(url.replace(/^\/@fs/, '').split('?')[0])));
  return new Response(bytes);
});

afterEach(() => vi.clearAllMocks());

describe('pdfFonts', () => {
  it.each(['Idriss Laouali Abdou', 'Hadiza Ɗan Ƙasa', 'Sa’adou Ɓako ƴaƴa', 'Élodie Müller', 'محمد Abdou'])(
    'routes every character of "%s" to a font that has its glyph',
    async (name) => {
      const doc = await PDFDocument.create();
      const fonts = await embedNameFonts(doc);
      const runs = unicodeNameRuns(name, fonts);
      expect(runs.map((run) => run.value).join('')).toBe(name.normalize('NFC'));
      for (const run of runs) {
        const charset = new Set(run.font.getCharacterSet());
        for (const char of run.value) {
          if (/\s/.test(char)) continue;
          expect(charset.has(char.codePointAt(0)!), `${char} missing from its font`).toBe(true);
        }
      }
    }
  );

  it('uses the basic Latin slice for plain ASCII names', async () => {
    const doc = await PDFDocument.create();
    const fonts = await embedNameFonts(doc);
    const runs = unicodeNameRuns('Idriss Laouali Abdou', fonts);
    expect(runs).toHaveLength(1);
    expect(runs[0].font).toBe(fonts.latin);
  });
});
