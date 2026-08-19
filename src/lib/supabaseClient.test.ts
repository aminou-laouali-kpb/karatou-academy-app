import { describe, expect, it } from 'vitest';
import { resolveSupabaseConfig } from './supabaseClient';

describe('Supabase browser configuration', () => {
  it('stays disconnected when either required Vite value is blank', () => {
    expect(resolveSupabaseConfig({
      VITE_SUPABASE_URL: '',
      VITE_SUPABASE_ANON_KEY: '',
    })).toBeNull();
    expect(resolveSupabaseConfig({
      VITE_SUPABASE_URL: 'https://example.supabase.co',
      VITE_SUPABASE_ANON_KEY: '   ',
    })).toBeNull();
  });

  it('uses only explicitly supplied values', () => {
    expect(resolveSupabaseConfig({
      VITE_SUPABASE_URL: ' https://example.supabase.co ',
      VITE_SUPABASE_ANON_KEY: ' public-anon-key ',
    })).toEqual({
      url: 'https://example.supabase.co',
      anonKey: 'public-anon-key',
    });
  });
});