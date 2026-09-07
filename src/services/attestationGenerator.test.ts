import { describe, expect, it } from 'vitest';
import {
  attestationZipFilename,
  detectTemplateType,
  validateQrPlacement,
} from './attestationGenerator';

/** Minimal stand-in: only `type` and `name` are read by detectTemplateType. */
function fileLike(name: string, type: string): File {
  return { name, type } as File;
}

const A4_LANDSCAPE = { width: 842, height: 595 };
const VERIFY_URL = 'https://verify.karatou.academy/verify-attestation#eyJpZCI6IktBLUFUVC0yMDI2LTAwMSJ9';

describe('detectTemplateType', () => {
  it('recognises PDFs by MIME type and by extension', () => {
    expect(detectTemplateType(fileLike('modele.pdf', 'application/pdf'))).toBe('pdf');
    expect(detectTemplateType(fileLike('modele.pdf', ''))).toBe('pdf');
  });

  it('recognises PNG and JPEG templates', () => {
    expect(detectTemplateType(fileLike('fond.png', 'image/png'))).toBe('image');
    expect(detectTemplateType(fileLike('fond.jpeg', 'image/jpeg'))).toBe('image');
    expect(detectTemplateType(fileLike('fond.JPG', ''))).toBe('image');
  });

  it('rejects anything else', () => {
    expect(detectTemplateType(fileLike('liste.xlsx', 'application/vnd.ms-excel'))).toBeNull();
    expect(detectTemplateType(fileLike('note.txt', 'text/plain'))).toBeNull();
  });
});

describe('attestationZipFilename', () => {
  it('keeps homonyms apart with an index and the signed id', () => {
    const first = attestationZipFilename({ id: 'KA-ATT-2026-AAA', name: 'Ali Hassan' }, 0);
    const second = attestationZipFilename({ id: 'KA-ATT-2026-BBB', name: 'Ali Hassan' }, 1);
    expect(first).toBe('001_Ali_Hassan_KA-ATT-2026-AAA.pdf');
    expect(second).toBe('002_Ali_Hassan_KA-ATT-2026-BBB.pdf');
    expect(first).not.toBe(second);
  });

  it('falls back to a usable name when transliteration empties the string', () => {
    expect(attestationZipFilename({ id: 'KA-ATT-2026-CCC', name: 'أحمد' }, 2)).toBe(
      '003_Participant_KA-ATT-2026-CCC.pdf'
    );
  });
});

describe('validateQrPlacement', () => {
  it('accepts a placement that prints and scans reliably', () => {
    expect(() =>
      validateQrPlacement({ xRatio: 0.8, yRatio: 0.7, sizeRatio: 0.12 }, A4_LANDSCAPE, VERIFY_URL)
    ).not.toThrow();
  });

  it('rejects a QR too small to scan on paper', () => {
    expect(() =>
      validateQrPlacement({ xRatio: 0.8, yRatio: 0.7, sizeRatio: 0.05 }, A4_LANDSCAPE, VERIFY_URL)
    ).toThrow(/trop petit/i);
  });

  it('rejects a QR that runs off the page', () => {
    expect(() =>
      validateQrPlacement({ xRatio: 0.95, yRatio: 0.7, sizeRatio: 0.12 }, A4_LANDSCAPE, VERIFY_URL)
    ).toThrow(/limites de la page/i);
    expect(() =>
      validateQrPlacement({ xRatio: 0.8, yRatio: 0.95, sizeRatio: 0.12 }, A4_LANDSCAPE, VERIFY_URL)
    ).toThrow(/limites de la page/i);
  });

  it('rejects out-of-range ratios', () => {
    expect(() =>
      validateQrPlacement({ xRatio: -0.1, yRatio: 0.7, sizeRatio: 0.12 }, A4_LANDSCAPE, VERIFY_URL)
    ).toThrow(/position X/i);
    expect(() =>
      validateQrPlacement({ xRatio: 0.8, yRatio: 0.7, sizeRatio: 0 }, A4_LANDSCAPE, VERIFY_URL)
    ).toThrow(/taille du QR/i);
  });
});
