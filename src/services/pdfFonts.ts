import { Color, PDFDocument, PDFFont, PDFPage } from 'pdf-lib';
import * as fontkit from '@pdf-lib/fontkit';
import latinFontUrl from '@fontsource/noto-sans/files/noto-sans-latin-ext-400-normal.woff?url';
import arabicFontUrl from '@fontsource/noto-sans-arabic/files/noto-sans-arabic-arabic-400-normal.woff?url';

const ARABIC_CHAR_RE = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
const ARABIC_RUN_RE = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+|[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+/g;

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
  arabic: PDFFont;
}

export interface UnicodeNameRun {
  value: string;
  font: PDFFont;
  isArabic: boolean;
}

/**
 * Embeds complementary Unicode subsets. Noto Sans Latin Extended covers Hausa
 * letters, while Noto Sans Arabic contains the Arabic glyphs and shaping data.
 */
export async function embedNameFonts(document: PDFDocument): Promise<EmbeddedNameFonts> {
  document.registerFontkit(fontkit);
  const [latinBytes, arabicBytes] = await Promise.all([loadFont(latinFontUrl), loadFont(arabicFontUrl)]);
  const [latin, arabic] = await Promise.all([
    document.embedFont(latinBytes, { subset: true }),
    document.embedFont(arabicBytes, { subset: true }),
  ]);
  return { latin, arabic };
}

export function unicodeNameRuns(value: string, fonts: EmbeddedNameFonts): UnicodeNameRun[] {
  return (value.normalize('NFC').match(ARABIC_RUN_RE) || []).map((part) => ({
    value: part,
    isArabic: ARABIC_CHAR_RE.test(part),
    font: ARABIC_CHAR_RE.test(part) ? fonts.arabic : fonts.latin,
  }));
}

export function unicodeNameWidth(value: string, fonts: EmbeddedNameFonts, size: number): number {
  return unicodeNameRuns(value, fonts).reduce((total, run) => total + run.font.widthOfTextAtSize(run.value, size), 0);
}

/**
 * Draws a mixed Latin/Arabic name as font-specific runs. The run order follows
 * the first strong direction so a name mixing Hausa and Arabic retains readable
 * visual order while every character uses a font that contains its glyph.
 */
export function isRightToLeft(value: string): boolean {
  for (const char of value) {
    if (!/\s|\d|[.,'’-]/.test(char)) return ARABIC_CHAR_RE.test(char);
  }
  return false;
}

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