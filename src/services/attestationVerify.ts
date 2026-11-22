import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';
import { isDemoEnabled } from '../lib/demoMode';
import type { AttestationPayload } from '../lib/attestationPayload';

/**
 * Public attestation verification, kept deliberately light.
 *
 * This module is what the QR-code landing page (`/verify-attestation`, root of
 * verify.karatou.academy) loads. It must not import the admin PDF/Excel tooling
 * of `attestationGenerator` (pdf-lib, fontkit, xlsx, jszip…: ~690 kB gzip),
 * which made every scan download the whole issuer before showing a verdict.
 *
 * `unavailable` is deliberately distinct from `invalid`: an unreachable
 * verification service must never tell a holder their attestation is a forgery.
 */
export type VerificationStatus = 'valid' | 'expired' | 'revoked' | 'invalid' | 'unavailable';

export interface VerificationResult {
  status: VerificationStatus;
  payload?: AttestationPayload;
}

const VERDICTS: VerificationStatus[] = ['valid', 'expired', 'revoked', 'invalid'];

/** Maps the Edge Function answer onto a verdict the page knows how to show. */
export function normalizeVerificationResponse(data: unknown): VerificationResult {
  const result = data as { status?: unknown; payload?: AttestationPayload } | null;
  if (!result || typeof result.status !== 'string') return { status: 'unavailable' };
  // A historical-format ID that is not in the reviewed archive was never issued:
  // it is a negative verdict, not a service outage.
  if (result.status === 'unregistered') return { status: 'invalid' };
  return VERDICTS.includes(result.status as VerificationStatus)
    ? { status: result.status as VerificationStatus, payload: result.payload }
    : { status: 'unavailable' };
}

/**
 * Verifies a payload server-side via the attestation-verify Edge Function.
 * Without Supabase, only the demo build may fall back to the local signer; a
 * production build missing its backend answers `unavailable` instead of
 * trusting a secret that ships in the bundle.
 */
export async function verifyAttestation(payload: AttestationPayload): Promise<VerificationResult> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.functions.invoke('attestation-verify', { body: { payload } });
      if (error || !data) return { status: 'unavailable' };
      return normalizeVerificationResponse(data);
    } catch {
      return { status: 'unavailable' };
    }
  }
  if (!isDemoEnabled) return { status: 'unavailable' };
  const { verifyAttestationLocal } = await import('./attestationGenerator');
  return verifyAttestationLocal(payload);
}
