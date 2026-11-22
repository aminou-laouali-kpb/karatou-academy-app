import { describe, expect, it } from 'vitest';
import { generateScholarshipCode, scholarshipExpiry } from './scholarship';

describe('scholarship codes', () => {
  it('expire one year after creation, not on a fixed date', () => {
    expect(scholarshipExpiry(new Date('2026-11-22T10:00:00Z'))).toEqual({
      expiresAtDate: '2027-11-22',
      expiresAt: '22/11/2027',
    });
    expect(scholarshipExpiry(new Date('2027-06-01T10:00:00Z')).expiresAtDate).toBe('2028-06-01');
  });

  it('carry the organization, not "PNUD" for everyone', () => {
    expect(generateScholarshipCode('Illimi')).toMatch(/^KA-SCH-ILLIMI-[A-Z2-9]{10}$/);
    expect(generateScholarshipCode('Université Abdou Moumouni')).toMatch(/^KA-SCH-UNIVER-/);
    expect(generateScholarshipCode('—')).toMatch(/^KA-SCH-ORG-/);
  });

  it('are not repeated', () => {
    const codes = new Set(Array.from({ length: 200 }, () => generateScholarshipCode('Org')));
    expect(codes.size).toBe(200);
  });
});
