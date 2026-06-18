import type { UserRole } from '../types';

export type RouteRole = UserRole;

export function normalizeUserRole(value: unknown): UserRole {
  const role = typeof value === 'string' ? value.trim().toLowerCase() : '';

  if (role === 'platform_admin' || role === 'admin') {
    return 'platform_admin';
  }

  if (role === 'enterprise_admin' || role === 'org_admin') {
    return 'enterprise_admin';
  }

  return 'learner';
}

export function defaultRouteForRole(role: UserRole) {
  switch (role) {
    case 'platform_admin':
      return '/admin';
    case 'enterprise_admin':
      return '/enterprise';
    case 'learner':
    default:
      return '/dashboard';
  }
}

export function canAccessRole(userRole: UserRole | undefined, requiredRole?: RouteRole) {
  if (!requiredRole) {
    return true;
  }

  if (!userRole) {
    return false;
  }

  if (userRole === requiredRole) {
    return true;
  }

  return userRole === 'platform_admin' && requiredRole === 'enterprise_admin';
}

export function canAccessEnterprise(userRole: UserRole | undefined) {
  return canAccessRole(userRole, 'enterprise_admin');
}
