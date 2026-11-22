/** Scholarship codes are valid for one year from creation (was a fixed 2026-12-31). */
export const SCHOLARSHIP_VALIDITY_MONTHS = 12;

export function scholarshipExpiry(from: Date = new Date()) {
  const expiry = new Date(from);
  expiry.setMonth(expiry.getMonth() + SCHOLARSHIP_VALIDITY_MONTHS);
  const iso = expiry.toISOString().slice(0, 10);
  const [year, month, day] = iso.split('-');
  return { expiresAtDate: iso, expiresAt: `${day}/${month}/${year}` };
}

/** Org-specific, unguessable code: KA-SCH-<ORG>-<10 random base32 chars>. */
export function generateScholarshipCode(organizationLabel: string) {
  const orgCode =
    organizationLabel
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/gi, '')
      .toUpperCase()
      .slice(0, 6) || 'ORG';
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = new Uint8Array(10);
  crypto.getRandomValues(bytes);
  const random = Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join('');
  return `KA-SCH-${orgCode}-${random}`;
}
