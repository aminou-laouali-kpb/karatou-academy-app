import { describe, expect, it } from 'vitest';
import { getVerificationHosts, isVerificationHost } from './runtimeConfig';

describe('verification host configuration', () => {
  it('uses the production verification hostname by default', () => {
    expect(getVerificationHosts({})).toEqual(['verify.karatou.academy']);
    expect(isVerificationHost('VERIFY.KARATOU.ACADEMY', {})).toBe(true);
  });

  it('accepts a comma-separated allowlist for aliases and staging', () => {
    const environment = {
      VITE_VERIFY_HOSTS: 'verify.karatou.academy, verify-staging.karatou.academy, verify.karatou.academy',
    };

    expect(getVerificationHosts(environment)).toEqual([
      'verify.karatou.academy',
      'verify-staging.karatou.academy',
    ]);
    expect(isVerificationHost('verify-staging.karatou.academy', environment)).toBe(true);
    expect(isVerificationHost('course.karatou.academy', environment)).toBe(false);
  });
});