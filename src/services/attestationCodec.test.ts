import { describe, expect, it } from 'vitest';
import {
  decodeAttestationPayload,
  encodeAttestationPayload,
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
});
