import { describe, expect, it } from 'vitest';
import { getVerificationHosts, isVerificationHost } from './runtimeConfig';

describe('getVerificationHosts', () => {
  it('falls back to the production verification host', () => {
    expect(getVerificationHosts({})).toEqual(['verify.karatou.academy']);
  });

  it('reads a comma-separated list and de-duplicates it', () => {
    expect(
      getVerificationHosts({
        VITE_VERIFY_HOSTS: 'verify.karatou.academy, staging-verify.karatou.academy ,VERIFY.KARATOU.ACADEMY',
      })
    ).toEqual(['verify.karatou.academy', 'staging-verify.karatou.academy']);
  });

  it('ignores a blank override', () => {
    expect(getVerificationHosts({ VITE_VERIFY_HOSTS: '   ' })).toEqual(['verify.karatou.academy']);
  });
});

describe('isVerificationHost', () => {
  it('matches case-insensitively', () => {
    expect(isVerificationHost('VERIFY.KARATOU.ACADEMY', {})).toBe(true);
  });

  it('leaves the course host on the landing page', () => {
    expect(isVerificationHost('course.karatou.academy', {})).toBe(false);
    expect(isVerificationHost('localhost', {})).toBe(false);
  });
});
