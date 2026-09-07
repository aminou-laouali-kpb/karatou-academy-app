import { describe, expect, it } from 'vitest';
import { canAccessEnterprise, canAccessRole, defaultRouteForRole, normalizeUserRole, resolveServerAuthorizedRole } from './roles';

describe('normalizeUserRole', () => {
  it('keeps canonical roles', () => {
    expect(normalizeUserRole('platform_admin')).toBe('platform_admin');
    expect(normalizeUserRole('enterprise_admin')).toBe('enterprise_admin');
    expect(normalizeUserRole('learner')).toBe('learner');
  });

  it('maps legacy aliases', () => {
    expect(normalizeUserRole('admin')).toBe('platform_admin');
    expect(normalizeUserRole('org_admin')).toBe('enterprise_admin');
  });

  it('is case-insensitive and trims whitespace', () => {
    expect(normalizeUserRole('  PLATFORM_ADMIN ')).toBe('platform_admin');
  });

  it('defaults to learner for unknown / falsy / non-string input', () => {
    expect(normalizeUserRole(undefined)).toBe('learner');
    expect(normalizeUserRole(null)).toBe('learner');
    expect(normalizeUserRole(42)).toBe('learner');
    expect(normalizeUserRole('hacker')).toBe('learner');
    expect(normalizeUserRole('')).toBe('learner');
  });
});

describe('defaultRouteForRole', () => {
  it('routes each role to its home', () => {
    expect(defaultRouteForRole('platform_admin')).toBe('/admin');
    expect(defaultRouteForRole('enterprise_admin')).toBe('/enterprise');
    expect(defaultRouteForRole('learner')).toBe('/dashboard');
  });
});

describe('canAccessRole', () => {
  it('returns true when no role is required', () => {
    expect(canAccessRole(undefined)).toBe(true);
    expect(canAccessRole('learner')).toBe(true);
  });

  it('returns false when no user role and a role is required', () => {
    expect(canAccessRole(undefined, 'learner')).toBe(false);
  });

  it('matches identical roles', () => {
    expect(canAccessRole('learner', 'learner')).toBe(true);
    expect(canAccessRole('enterprise_admin', 'enterprise_admin')).toBe(true);
    expect(canAccessRole('platform_admin', 'platform_admin')).toBe(true);
  });

  it('grants platform_admin access to enterprise routes', () => {
    expect(canAccessRole('platform_admin', 'enterprise_admin')).toBe(true);
  });

  it('does NOT grant lower roles access to higher routes', () => {
    expect(canAccessRole('learner', 'enterprise_admin')).toBe(false);
    expect(canAccessRole('learner', 'platform_admin')).toBe(false);
    expect(canAccessRole('enterprise_admin', 'platform_admin')).toBe(false);
  });
});

describe('canAccessEnterprise', () => {
  it('allows enterprise_admin and platform_admin only', () => {
    expect(canAccessEnterprise('enterprise_admin')).toBe(true);
    expect(canAccessEnterprise('platform_admin')).toBe(true);
    expect(canAccessEnterprise('learner')).toBe(false);
    expect(canAccessEnterprise(undefined)).toBe(false);
  });
});

describe('resolveServerAuthorizedRole', () => {
  it('downgrades an enterprise-admin claim with no active membership', () => {
    expect(resolveServerAuthorizedRole('enterprise_admin', false)).toBe('learner');
    expect(resolveServerAuthorizedRole('org_admin', false)).toBe('learner');
  });

  it('keeps the claim when a membership backs it', () => {
    expect(resolveServerAuthorizedRole('enterprise_admin', true)).toBe('enterprise_admin');
  });

  it('leaves platform admins and learners untouched', () => {
    expect(resolveServerAuthorizedRole('platform_admin', false)).toBe('platform_admin');
    expect(resolveServerAuthorizedRole('admin', false)).toBe('platform_admin');
    expect(resolveServerAuthorizedRole(undefined, true)).toBe('learner');
  });
});
