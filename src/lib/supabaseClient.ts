import { createClient } from '@supabase/supabase-js';

type ClientEnvironment = Record<string, string | undefined>;

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

/**
 * Resolves an explicit browser configuration only. In particular, test modes
 * can set both VITE variables to empty strings and remain fully offline.
 */
export function resolveSupabaseConfig(environment: ClientEnvironment): SupabaseConfig | null {
  const url = environment.VITE_SUPABASE_URL?.trim();
  const anonKey = environment.VITE_SUPABASE_ANON_KEY?.trim();

  return url && anonKey ? { url, anonKey } : null;
}

const config = resolveSupabaseConfig(import.meta.env);

export const isSupabaseConfigured = config !== null;

export const supabase = config
  ? createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;
