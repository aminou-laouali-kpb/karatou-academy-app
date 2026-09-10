import { describe, expect, it } from 'vitest';
import { AUTH_ERROR_FALLBACK, authErrorDetail, mapAuthError } from './authErrors';

describe('mapAuthError', () => {
  it('prefers the stable error code over the prose', () => {
    expect(mapAuthError({ code: 'invalid_credentials', message: 'anything' })).toBe(
      'authErrInvalidCredentials'
    );
    expect(mapAuthError({ code: 'SAME_PASSWORD' })).toBe('authErrSamePassword');
  });

  it('translates the message reported from production', () => {
    // Seen on the reset-password screen: an English sentence on a French page.
    expect(mapAuthError({ message: 'New password should be different from the old password.' })).toBe(
      'authErrSamePassword'
    );
  });

  it('falls back to the prose when the SDK sends no code', () => {
    expect(mapAuthError({ message: 'Invalid login credentials' })).toBe('authErrInvalidCredentials');
    expect(mapAuthError({ message: 'Email not confirmed' })).toBe('authErrEmailNotConfirmed');
    expect(mapAuthError({ message: 'User already registered' })).toBe('authErrEmailTaken');
    expect(mapAuthError({ message: 'Password should be at least 8 characters' })).toBe(
      'authErrWeakPassword'
    );
    expect(
      mapAuthError({ message: 'For security purposes, you can only request this after 51 seconds' })
    ).toBe('authErrRateLimit');
  });

  it('returns the generic key rather than leaking an unknown message', () => {
    expect(mapAuthError({ message: 'Some brand new upstream failure' })).toBe(AUTH_ERROR_FALLBACK);
    expect(mapAuthError(null)).toBe(AUTH_ERROR_FALLBACK);
    expect(mapAuthError(undefined)).toBe(AUTH_ERROR_FALLBACK);
    expect(mapAuthError({})).toBe(AUTH_ERROR_FALLBACK);
    expect(mapAuthError('plain string')).toBe(AUTH_ERROR_FALLBACK);
  });
});

describe('authErrorDetail', () => {
  it('keeps the raw text only when nothing matched', () => {
    expect(authErrorDetail({ message: 'Some brand new upstream failure' })).toBe(
      'Some brand new upstream failure'
    );
  });

  it('stays silent once the error is translated', () => {
    expect(authErrorDetail({ code: 'same_password', message: 'New password should be...' })).toBeUndefined();
    expect(authErrorDetail({ message: 'Invalid login credentials' })).toBeUndefined();
  });

  it('ignores empty or missing text', () => {
    expect(authErrorDetail({ message: '   ' })).toBeUndefined();
    expect(authErrorDetail(null)).toBeUndefined();
  });
});
