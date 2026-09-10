import { createContext } from 'react';
import { DemoUser, UserRole } from '../types';

/**
 * Outcome of an auth operation.
 *
 * `errorKey` is a translation key, never a sentence: this layer runs outside
 * the language provider, so only the page knows which language to render. It
 * also keeps upstream English out of the interface — which is how
 * "New password should be different from the old password" once reached a
 * French screen.
 */
export interface AuthResult {
  ok: boolean;
  /** Translation key describing the failure. */
  errorKey?: string;
  /** Untranslated upstream text, present only when no mapping matched. */
  errorDetail?: string;
  /**
   * Registration succeeded, but the address must be confirmed before signing
   * in. This is NOT a failure: it earns its own flag precisely so the page
   * stops rendering it as one.
   */
  pendingEmailConfirmation?: boolean;
}

export interface AuthContextValue {
  user: DemoUser | null;
  authReady: boolean;
  authMode: 'local' | 'supabase';
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  loginAs: (role: UserRole) => Promise<AuthResult>;
  register: (payload: {
    name: string;
    email: string;
    password: string;
    country?: string;
    gender?: string;
  }) => Promise<AuthResult>;
  requestPasswordReset: (email: string) => Promise<AuthResult>;
  updatePassword: (password: string) => Promise<AuthResult>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
