import { createContext } from 'react';
import { DemoUser, UserRole } from '../types';

export interface AuthContextValue {
  user: DemoUser | null;
  authReady: boolean;
  authMode: 'local' | 'supabase';
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  loginAs: (role: UserRole) => Promise<{ ok: boolean; error?: string }>;
  register: (payload: {
    name: string;
    email: string;
    password: string;
    region?: string;
    gender?: string;
  }) => Promise<{ ok: boolean; error?: string }>;
  requestPasswordReset: (email: string) => Promise<{ ok: boolean; error?: string }>;
  updatePassword: (password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | null>(null);
