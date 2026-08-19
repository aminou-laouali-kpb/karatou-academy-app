import { describe, expect, it } from 'vitest';
import { toSafeSpaPath } from './spaRedirect';

describe('SPA redirect recovery', () => {
  const origin = 'https://course.karatou.academy';

  it('keeps a deep link, query string, and QR fragment', () => {
    expect(toSafeSpaPath('/verify-attestation?source=qr#signed-payload', origin))
      .toBe('/verify-attestation?source=qr#signed-payload');
  });

  it('rejects absolute and protocol-relative redirect targets', () => {
    expect(toSafeSpaPath('https://malicious.example', origin)).toBeNull();
    expect(toSafeSpaPath('//malicious.example', origin)).toBeNull();
  });
});