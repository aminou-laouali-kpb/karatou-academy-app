// Canonical root URL for all certificate/attestation verification links.
// QR codes printed on certificates must always point here, regardless of where
// they were generated (preview, karatou.academy, etc.).
export const VERIFY_BASE_URL = 'https://verify.karatou.academy';

/** Display label (no scheme) for the verification domain. */
export const VERIFY_DISPLAY_HOST = 'verify.karatou.academy';

/** URL for verifying a certificate by its UID. */
export function certificateVerifyUrl(uid: string): string {
  return `${VERIFY_BASE_URL}/verify/${encodeURIComponent(uid)}`;
}
