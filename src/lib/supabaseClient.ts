import { createClient } from '@supabase/supabase-js';

const KARATOU_SUPABASE_URL = 'https://pqcovsnomouclkdjhjig.supabase.co';
const KARATOU_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxY292c25vbW91Y2xrZGpoamlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NzMyMDUsImV4cCI6MjA5NjM0OTIwNX0.LNxMDT036mCVqlQYLBJCwChmPjIHVR-hK2G0CqKW4zs';

const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) || KARATOU_SUPABASE_URL;
const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) || KARATOU_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;
