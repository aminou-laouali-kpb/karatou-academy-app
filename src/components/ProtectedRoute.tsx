import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { canAccessRole, defaultRouteForRole } from '../lib/roles';
import { UserRole } from '../types';

interface ProtectedRouteProps {
  children: ReactNode;
  role?: UserRole;
}

export function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const { user, authReady, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!authReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="rounded-2xl border border-blue-100 bg-white px-5 py-4 text-body font-medium text-blue-700 shadow-blue-sm">
          Connexion en cours...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  if (role && !canAccessRole(user?.role, role)) {
    return <Navigate to={defaultRouteForRole(user?.role || 'learner')} replace />;
  }

  return <>{children}</>;
}
