import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

export interface PublicImpactStats {
  learners: number;
  certificates: number;
  countries: number;
  regions: number;
  byRegion: Record<string, number>;
  byGender: Record<string, number>;
  byCountry: Record<string, number>;
}

interface ImpactRow {
  learners: number;
  certificates: number;
  countries: number;
  regions: number;
  by_region: Record<string, number>;
  by_gender: Record<string, number>;
  by_country: Record<string, number>;
}

function mapRow(row: ImpactRow): PublicImpactStats {
  return {
    learners: Number(row.learners ?? 0),
    certificates: Number(row.certificates ?? 0),
    countries: Number(row.countries ?? 0),
    regions: Number(row.regions ?? 0),
    byRegion: row.by_region ?? {},
    byGender: row.by_gender ?? {},
    byCountry: row.by_country ?? {},
  };
}

/**
 * Fetches the public aggregate KPIs via the karatou_public_impact_stats RPC
 * (no PII — counts only). Returns null when Supabase is not configured (demo
 * mode), so callers can render the legacy placeholder.
 */
export async function fetchPublicImpactStats(): Promise<PublicImpactStats | null> {
  if (!isSupabaseConfigured || !supabase) return null;
  const { data, error } = await supabase.rpc('karatou_public_impact_stats');
  if (error) return null;
  const row = (Array.isArray(data) ? data[0] : data) as ImpactRow | undefined;
  return row ? mapRow(row) : null;
}
