import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

/**
 * Attestation registry (server-side archive of every signed attestation).
 *
 * Search and revocation both go through the `attestation-sign` Edge Function,
 * which re-checks that the caller is a platform admin and holds the only key
 * allowed to write `karatou_attestations`. The table itself is not writable
 * from the browser, so a revocation can never be forged client-side.
 */

export type AttestationStatus = 'active' | 'expired' | 'revoked';

export interface AttestationRecord {
  id: string;
  recipientName: string;
  issuedAt: string;
  expiresAt: string;
  issuedOn: string;
  status: AttestationStatus;
  revokedAt: string | null;
  revocationReason: string | null;
}

interface AttestationRow {
  id: string;
  recipient_name: string;
  issued_at: string;
  expires_at: string;
  issued_on: string;
  status: string;
  revoked_at: string | null;
  revocation_reason: string | null;
}

function mapAttestation(row: AttestationRow): AttestationRecord {
  const expired = new Date(`${row.expires_at}T23:59:59`).getTime() < Date.now();
  const status: AttestationStatus =
    row.status === 'revoked' ? 'revoked' : expired ? 'expired' : 'active';

  return {
    id: row.id,
    recipientName: row.recipient_name,
    issuedAt: row.issued_at,
    expiresAt: row.expires_at,
    issuedOn: row.issued_on,
    status,
    revokedAt: row.revoked_at,
    revocationReason: row.revocation_reason,
  };
}

/** Unwraps the Edge Function error body, which carries the real message. */
async function invokeRegistry<T>(body: Record<string, unknown>): Promise<T> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('registry unavailable: Supabase is not configured');
  }
  const { data, error } = await supabase.functions.invoke('attestation-sign', { body });
  if (error) {
    let message = error.message;
    const context = (error as { context?: Response }).context;
    if (context && typeof context.json === 'function') {
      try {
        const payload = await context.json();
        if (payload?.error) message = String(payload.error);
      } catch {
        // keep the original error message
      }
    }
    throw new Error(message);
  }
  return data as T;
}

/** Most recent 50 attestations, optionally filtered by id or recipient name. */
export async function searchAttestations(query: string): Promise<AttestationRecord[]> {
  const data = await invokeRegistry<{ attestations: AttestationRow[] }>({
    action: 'search',
    query: query.trim(),
  });
  return (data.attestations || []).map(mapAttestation);
}

/** Revokes one attestation. Public verification then reports `revoked`. */
export async function revokeAttestation(id: string, reason: string): Promise<AttestationRecord> {
  const data = await invokeRegistry<{ attestation: AttestationRow }>({
    action: 'revoke',
    id: id.trim().toUpperCase(),
    reason: reason.trim(),
  });
  return mapAttestation(data.attestation);
}
