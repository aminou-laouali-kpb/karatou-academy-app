import { describe, expect, it } from 'vitest';
import { decodeSpaRedirect, resolveBootPath } from './spaRedirect';
import { encodeAttestationPayload } from './attestationPayload';

const payloadHash = `#${encodeAttestationPayload({
  id: 'KA-ATT-2026-ABCDEF0123',
  name: 'Amina Garba',
  issuedAt: '2026-08-24',
  expiresAt: '2027-08-24',
  signature: 'a'.repeat(64),
})}`;

describe('decodeSpaRedirect', () => {
  it('rebuilds a plain path', () => {
    expect(decodeSpaRedirect('?/verify/KA-2026-INT-0001')).toBe('/verify/KA-2026-INT-0001');
  });

  it('rebuilds a path with its query string', () => {
    expect(decodeSpaRedirect('?/redeem&code=ABC&lang=ha')).toBe('/redeem?code=ABC&lang=ha');
  });

  it('restores an escaped ampersand from the original query', () => {
    expect(decodeSpaRedirect('?/search&q=a~and~b')).toBe('/search?q=a&b');
  });

  it('ignores a normal query string', () => {
    expect(decodeSpaRedirect('?code=ABC')).toBeNull();
    expect(decodeSpaRedirect('')).toBeNull();
  });

  it('never rebuilds an absolute URL', () => {
    expect(decodeSpaRedirect('?https://evil.example/x')).toBeNull();
  });
});

describe('decodeSpaRedirect (cross-origin)', () => {
  it('rejects protocol-relative and backslash paths that resolve off-origin', () => {
    expect(decodeSpaRedirect('?//evil.example/x')).toBeNull();
    expect(decodeSpaRedirect('?/\\evil.example/x')).toBeNull();
  });

  it('still accepts a normal deep link', () => {
    expect(decodeSpaRedirect('?/verify/KA-2026-1')).toBe('/verify/KA-2026-1');
  });
});

describe('resolveBootPath', () => {
  it('keeps the hash when recovering a deep link', () => {
    expect(resolveBootPath('/', '?/verify-attestation', payloadHash))
      .toBe(`/verify-attestation${payloadHash}`);
  });

  it('recovers an attestation payload stranded on the home page', () => {
    expect(resolveBootPath('/', '', payloadHash)).toBe(`/verify-attestation${payloadHash}`);
  });

  it('leaves the home page alone when the hash is not a payload', () => {
    expect(resolveBootPath('/', '', '#section-tarifs')).toBeNull();
    expect(resolveBootPath('/', '', '#')).toBeNull();
  });

  it('leaves a route that the host served correctly alone', () => {
    expect(resolveBootPath('/verify/KA-2026-INT-0001', '', '')).toBeNull();
    expect(resolveBootPath('/dashboard', '?tab=modules', '')).toBeNull();
  });
});
