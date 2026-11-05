import { Color, PDFDocument, PDFFont, PDFPage } from 'pdf-lib';
// Default import, not a namespace import: @pdf-lib/fontkit is CommonJS, and
// under Vite's interop `import * as` yields a wrapper whose `create` is
// undefined — pdf-lib then throws "fontkit.create is not a function" on the
// first embed, i.e. on every certificate.
import fontkit from '@pdf-lib/fontkit';
// Fontsource ships Noto Sans as unicode-range slices: the `latin` file holds
// U+0000-00FF (A-Z, a-z, é, à…) and `latin-ext` holds U+0100+ (ɓ ɗ ƙ ƴ…).
// Neither covers a Hausa name on its own — embedding latin-ext alone rendered
// every plain Latin letter as a .notdef box. Both are embedded and each
// character is routed to the slice that actually contains its glyph.
import latinFontUrl from '@fontsource/noto-sans/files/noto-sans-latin-400-normal.woff?url';
import latinExtFontUrl from '@fontsource/noto-sans/files/noto-sans-latin-ext-400-normal.woff?url';
import arabicFontUrl from '@fontsource/noto-sans-arabic/files/noto-sans-arabic-arabic-400-normal.woff?url';

/**
 * Unicode text for generated PDFs.
 *
 * pdf-lib's StandardFonts are WinAnsi-encoded, so anything above U+00FF is
 * either dropped by a sanitiser or throws at encoding time. That silently
 * mutilated the very names this platform exists to certify: Hausa hooked
 * letters (ɓ ɗ ƙ ƴ), the curly apostrophe in Sa’adou, and Arabic entirely.
 * Embedding subsetted Noto faces is the only way a certificate can carry the
 * learner's actual name.
 */

const ARABIC_CHAR_RE = /[؀-ۿݐ-ݿࢠ-ࣿ]/;

const fontBytes = new Map<string, Promise<ArrayBuffer>>();

function loadFont(url: string): Promise<ArrayBuffer> {
  const existing = fontBytes.get(url);
  if (existing) return existing;

  const request = fetch(url).then(async (response) => {
    if (!response.ok) {
      throw new Error('La police Unicode requise ne peut pas être chargée.');
    }
    return response.arrayBuffer();
  });
  fontBytes.set(url, request);
  return request;
}

export interface EmbeddedNameFonts {
  latin: PDFFont;
  latinExt: PDFFont;
  arabic: PDFFont;
}

export interface UnicodeNameRun {
  value: string;
  font: PDFFont;
  isArabic: boolean;
}

/**
 * Embeds complementary Unicode subsets: Noto Sans Latin (basic Latin +
 * Latin-1), Latin Extended (Hausa hooked letters) and Arabic (glyphs and
 * shaping data).
 */
export async function embedNameFonts(document: PDFDocument): Promise<EmbeddedNameFonts> {
  document.registerFontkit(fontkit);
  const [latinBytes, latinExtBytes, arabicBytes] = await Promise.all([
    loadFont(latinFontUrl),
    loadFont(latinExtFontUrl),
    loadFont(arabicFontUrl),
  ]);
  const [latin, latinExt, arabic] = await Promise.all([
    document.embedFont(latinBytes, { subset: true }),
    document.embedFont(latinExtBytes, { subset: true }),
    document.embedFont(arabicBytes, { subset: true }),
  ]);
  return { latin, latinExt, arabic };
}

const characterSets = new WeakMap<PDFFont, Set<number>>();

function hasGlyph(font: PDFFont, codePoint: number): boolean {
  let set = characterSets.get(font);
  if (!set) {
    set = new Set(font.getCharacterSet());
    characterSets.set(font, set);
  }
  return set.has(codePoint);
}

function fontFor(char: string, fonts: EmbeddedNameFonts): PDFFont {
  if (ARABIC_CHAR_RE.test(char)) return fonts.arabic;
  const codePoint = char.codePointAt(0) ?? 0;
  if (hasGlyph(fonts.latin, codePoint)) return fonts.latin;
  if (hasGlyph(fonts.latinExt, codePoint)) return fonts.latinExt;
  return fonts.latin;
}

/** Splits a name into consecutive runs that share the font holding their glyphs. */
export function unicodeNameRuns(value: string, fonts: EmbeddedNameFonts): UnicodeNameRun[] {
  const runs: UnicodeNameRun[] = [];
  for (const char of value.normalize('NFC')) {
    // Spaces and combining marks stay with the preceding run so Arabic words
    // keep shaping together and runs are not needlessly fragmented.
    const last = runs[runs.length - 1];
    const font = last && /\s|\p{M}/u.test(char) ? last.font : fontFor(char, fonts);
    if (last && last.font === font) {
      last.value += char;
    } else {
      runs.push({ value: char, font, isArabic: font === fonts.arabic });
    }
  }
  return runs;
}

export function unicodeNameWidth(value: string, fonts: EmbeddedNameFonts, size: number): number {
  return unicodeNameRuns(value, fonts).reduce((total, run) => total + run.font.widthOfTextAtSize(run.value, size), 0);
}

/** The first strong character decides the visual order of mixed-script runs. */
export function isRightToLeft(value: string): boolean {
  for (const char of value) {
    if (!/\s|\d|[.,'’-]/.test(char)) return ARABIC_CHAR_RE.test(char);
  }
  return false;
}

/**
 * Draws a mixed Latin/Arabic name as font-specific runs. The run order follows
 * the first strong direction so a name mixing Hausa and Arabic retains readable
 * visual order while every character uses a font that contains its glyph.
 */
export function drawUnicodeName(
  page: PDFPage,
  value: string,
  fonts: EmbeddedNameFonts,
  options: { x: number; y: number; size: number; color: Color }
): void {
  const runs = unicodeNameRuns(value, fonts);
  // pdf-lib delegates custom-font layout to Fontkit. For Arabic, Fontkit
  // shapes joining forms and returns glyphs in visual RTL order; reversing
  // characters here would break both shaping and reading order. Only the
  // order of mixed-direction runs needs resolving at the line level.
  const visualRuns = isRightToLeft(value) ? [...runs].reverse() : runs;
  let cursorX = options.x;
  for (const run of visualRuns) {
    page.drawText(run.value, { ...options, x: cursorX, font: run.font });
    cursorX += run.font.widthOfTextAtSize(run.value, options.size);
  }
}
