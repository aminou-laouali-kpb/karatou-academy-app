import { describe, expect, it } from 'vitest';
import { PDFDocument } from 'pdf-lib';
import {
  attestationZipFilename,
  decodeAttestationPayload,
  detectTemplateType,
  encodeAttestationPayload,
  validateTemplate,
  validateQrPlacement,
} from './attestationGenerator';
import type { CertificatePayload } from './attestationGenerator';

const samplePayload: CertificatePayload = {
  id: 'KA-ATT-ABC123',
  name: 'Amina Garba',
  issuedAt: '2026-06-22',
  expiresAt: '2027-06-22',
  signature: 'deadbeefcafef00d',
};

describe('attestation payload codec (URL-safe base64 + JSON)', () => {
  it('roundtrips a typical payload', () => {
    const encoded = encodeAttestationPayload(samplePayload);
    const decoded = decodeAttestationPayload(encoded);
    expect(decoded).toEqual(samplePayload);
  });

  it('produces a URL-safe encoding (no +, /, or trailing =)', () => {
    const encoded = encodeAttestationPayload(samplePayload);
    expect(encoded).not.toMatch(/[+/=]/);
  });

  it('survives non-ASCII / accented names (UTF-8 safe)', () => {
    const accented: CertificatePayload = { ...samplePayload, name: 'Élève François Dupré' };
    expect(decodeAttestationPayload(encodeAttestationPayload(accented))).toEqual(accented);
  });

  it('survives Hausa and Arabic names (UTF-8 safe)', () => {
    const unicode: CertificatePayload = { ...samplePayload, name: 'Ɗanladi ɓello أحمد محمد' };
    expect(decodeAttestationPayload(encodeAttestationPayload(unicode))).toEqual(unicode);
  });

  it('returns null on invalid base64', () => {
    expect(decodeAttestationPayload('!!!not base64!!!')).toBeNull();
  });

  it('returns null on valid base64 that is not valid JSON', () => {
    // "hello" base64-encoded
    const notJson = btoa('hello').replace(/=+$/, '');
    expect(decodeAttestationPayload(notJson)).toBeNull();
  });

  it('returns null when payload is missing the required id or signature fields', () => {
    const missingId = btoa(JSON.stringify({ name: 'x', signature: 'y' })).replace(/=+$/, '');
    const missingSig = btoa(JSON.stringify({ id: 'x', name: 'y' })).replace(/=+$/, '');
    expect(decodeAttestationPayload(missingId)).toBeNull();
    expect(decodeAttestationPayload(missingSig)).toBeNull();
  });

  it('makes duplicate participant names distinct ZIP entries', () => {
    const first = attestationZipFilename({ id: 'KA-ATT-2026-AAAAAAAAAA', name: 'Aïssata Garba' }, 0);
    const second = attestationZipFilename({ id: 'KA-ATT-2026-BBBBBBBBBB', name: 'Aïssata Garba' }, 1);
    expect(first).not.toEqual(second);
    expect(first).toContain('KA-ATT-2026-AAAAAAAAAA');
    expect(second).toContain('KA-ATT-2026-BBBBBBBBBB');
  });

  it('rejects a QR that is too small or clipped before generation', () => {
    expect(() => validateQrPlacement(
      { xRatio: 0.98, yRatio: 0.98, sizeRatio: 0.03 },
      { width: 842, height: 595 },
      'https://verify.karatou.academy/#payload'
    )).toThrow(/trop petit|limites/i);
  });

  it('accepts a printable QR inside the page', () => {
    expect(() => validateQrPlacement(
      { xRatio: 0.72, yRatio: 0.65, sizeRatio: 0.12 },
      { width: 842, height: 595 },
      'https://verify.karatou.academy/#payload'
    )).not.toThrow();
  });

  it('only accepts image formats the generator can embed', () => {
    expect(detectTemplateType({ name: 'modele.png', type: 'image/png' } as File)).toBe('image');
    expect(detectTemplateType({ name: 'modele.gif', type: 'image/gif' } as File)).toBeNull();
    expect(detectTemplateType({ name: 'modele.webp', type: 'image/webp' } as File)).toBeNull();
  });

  it('rejects multi-page PDF templates explicitly', async () => {
    const document = await PDFDocument.create();
    document.addPage([842, 595]);
    document.addPage([842, 595]);
    const bytes = await document.save();
    const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
    await expect(validateTemplate(buffer, 'pdf')).rejects.toThrow(/une seule page/i);
  });
});
