/**
 * Attestation payload codec: URL-safe base64 of the signed JSON payload.
 *
 * This lives in `lib/` rather than in `services/attestationGenerator.ts` on
 * purpose: the generator pulls in pdf-lib / pdfjs / xlsx / jszip (~1.4 MB, an
 * admin-only lazy chunk), while the codec is needed by two lightweight paths —
 * the public verification page and the boot-time deep-link recovery in
 * `lib/spaRedirect.ts`. It has no dependencies at all.
 */

export interface AttestationPayload {
  id: string;
  name: string;
  issuedAt: string;
  expiresAt: string;
  signature: string;
}

export function encodeAttestationPayload(payload: AttestationPayload): string {
  const bytes = new TextEncoder().encode(JSON.stringify(payload));
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function decodeAttestationPayload(encoded: string): AttestationPayload | null {
  try {
    const padded = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    return parsed && typeof parsed === 'object' && parsed.id && parsed.signature
      ? (parsed as AttestationPayload)
      : null;
  } catch {
    return null;
  }
}
