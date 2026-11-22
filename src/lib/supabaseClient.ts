import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/** Database and auth calls give up after this long instead of hanging forever. */
export const REQUEST_TIMEOUT_MS = 20_000;

/**
 * fetch with a deadline. A 2G link often stalls without failing: without a
 * timeout, "Chargement…" stayed on screen indefinitely. Edge Functions are
 * exempt (lesson generation legitimately takes ~1–2 min) and so is any call
 * that already carries its own AbortSignal.
 */
export function fetchWithTimeout(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (init?.signal || url.includes('/functions/v1/') || typeof AbortSignal?.timeout !== 'function') {
    return fetch(input, init);
  }
  return fetch(input, { ...init, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
      global: { fetch: fetchWithTimeout },
    })
  : null;
