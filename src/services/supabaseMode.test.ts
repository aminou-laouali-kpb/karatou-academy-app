import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createFakeSupabase } from '../test/fakeSupabase';

// Production code paths (Supabase configured, demo off), against a fake client.
const state = vi.hoisted(() => ({ fake: null as null | ReturnType<typeof import('../test/fakeSupabase').createFakeSupabase> }));

vi.mock('../lib/supabaseClient', () => ({
  isSupabaseConfigured: true,
  get supabase() {
    return state.fake?.client;
  },
}));
vi.mock('../lib/demoMode', () => ({ isDemoEnabled: false, parseDemoFlag: () => null }));

import { revokeCertificateRecord, submitQuizRecord } from './learningRepository';
import { createScholarshipRecord, loadEnterpriseSnapshot, saveEnterpriseMemberRecord } from './enterpriseRepository';
import { verifyAttestation } from './attestationVerify';

const payload = { id: 'KA-ATT-2026-ABCDEF0123', name: 'Aïcha', issuedAt: '2026-11-01', expiresAt: '2027-11-01', signature: 'f'.repeat(64) };

describe('Supabase mode: learner progress', () => {
  beforeEach(() => {
    state.fake = createFakeSupabase();
  });

  it('completes a lesson only through the server-graded quiz, never by writing the table', async () => {
    state.fake = createFakeSupabase({
      rpc: { karatou_submit_quiz: { data: [{ status: 'passed', correct: 4, total: 5 }] } },
    });
    const result = await submitQuizRecord({
      moduleSlug: 'data-analysis',
      courseId: 'd1',
      lang: 'ha',
      answers: ['B', 'C', 'A', 'D', 'A'],
      completedAt: '2026-11-20T08:00:00.000Z',
    });
    expect(result).toEqual({ status: 'passed', correct: 4, total: 5 });
    expect(state.fake!.calls.some((call) => call.kind === 'from')).toBe(false);
    expect(state.fake!.calls[0].steps[0].args[0]).toEqual({
      input_module_slug: 'data-analysis',
      input_course_id: 'd1',
      input_lang: 'ha',
      input_answers: ['B', 'C', 'A', 'D', 'A'],
      input_completed_at: '2026-11-20T08:00:00.000Z',
    });
  });

  it('surfaces a server refusal to the caller', async () => {
    state.fake = createFakeSupabase({ rpc: { karatou_revoke_certificate: { error: { code: '42501', message: 'forbidden' } } } });
    await expect(revokeCertificateRecord('KA-2026-INT-ABC123')).rejects.toMatchObject({ code: '42501' });
  });
});

describe('Supabase mode: enterprise', () => {
  const memberRow = {
    id: 'm1', organization_id: 'org-1', user_id: 'learner-1', name: 'Aïcha', email: 'a@x.test', role: 'learner',
    progress: 0, certificates: 0, certificate_uid: null, last_activity: 'Invitation', status: 'not_started',
  };

  it('replaces the frozen member columns with live statistics', async () => {
    state.fake = createFakeSupabase({
      tables: {
        karatou_organizations: { data: [{ id: 'org-1', slug: 'org', name: 'Org', seats_total: 50, status: 'active' }] },
        karatou_enterprise_members: { data: [memberRow] },
        karatou_scholarships: { data: [] },
      },
      rpc: {
        karatou_org_member_stats: {
          data: [{ member_id: 'm1', progress: 60, certificates: 1, certificate_uid: 'KA-2026-INT-1', status: 'certified', last_activity_at: '2026-11-21T10:00:00Z' }],
        },
      },
    });
    const snapshot = await loadEnterpriseSnapshot({ id: 'admin', role: 'enterprise_admin', orgId: 'org-1' } as never);
    expect(snapshot?.members[0]).toMatchObject({ progress: 60, certificates: 1, status: 'certified', lastActivityAt: '2026-11-21T10:00:00Z' });
  });

  it('keeps the stored values when the statistics function is not deployed yet', async () => {
    state.fake = createFakeSupabase({
      tables: {
        karatou_organizations: { data: [{ id: 'org-1', slug: 'org', name: 'Org', seats_total: 50, status: 'active' }] },
        karatou_enterprise_members: { data: [memberRow] },
        karatou_scholarships: { data: [] },
      },
      rpc: { karatou_org_member_stats: { error: { code: 'PGRST202', message: 'function not found' } } },
    });
    const snapshot = await loadEnterpriseSnapshot({ id: 'admin', role: 'enterprise_admin', orgId: 'org-1' } as never);
    expect(snapshot?.members[0]).toMatchObject({ progress: 0, status: 'not_started' });
  });

  it('never sends user_id when an admin saves a member', async () => {
    state.fake = createFakeSupabase();
    await saveEnterpriseMemberRecord({
      id: 'm1', organizationId: 'org-1', userId: 'someone-else', name: 'X', email: 'X@Y.test', role: 'learner',
      progress: 0, certificates: 0, lastActivity: '', status: 'not_started',
    });
    const upsert = state.fake.calls[0].steps.find((step) => step.method === 'upsert')!;
    const row = upsert.args[0] as Record<string, unknown>;
    expect(row).not.toHaveProperty('user_id');
    expect(row.email).toBe('x@y.test');
  });

  it('creates scholarship codes through the server, not in the browser', async () => {
    state.fake = createFakeSupabase({
      rpc: {
        karatou_create_scholarship: {
          data: [{ id: 's1', organization_id: 'org-1', code: 'KA-SCH-ORG-ABCDEF012345', status: 'pending', claimed_by: null, expires_at: '22/11/2027', expires_at_date: '2027-11-22' }],
        },
      },
    });
    const created = await createScholarshipRecord('org-1');
    expect(created).toMatchObject({ code: 'KA-SCH-ORG-ABCDEF012345', expiresAtDate: '2027-11-22', status: 'pending' });
    expect(state.fake.calls.some((call) => call.kind === 'from')).toBe(false);
  });
});

describe('Supabase mode: attestation verification', () => {
  it('turns the server "unregistered" answer into a negative verdict', async () => {
    state.fake = createFakeSupabase({ rpc: { 'fn:attestation-verify': { data: { status: 'unregistered' } } } });
    await expect(verifyAttestation(payload)).resolves.toEqual({ status: 'invalid' });
  });

  it('never calls a genuine attestation forged when the service is unreachable', async () => {
    state.fake = createFakeSupabase({ rpc: { 'fn:attestation-verify': { error: new Error('Failed to fetch') } } });
    await expect(verifyAttestation(payload)).resolves.toEqual({ status: 'unavailable' });
  });

  it('passes valid verdicts through with their payload', async () => {
    state.fake = createFakeSupabase({ rpc: { 'fn:attestation-verify': { data: { status: 'valid', payload } } } });
    await expect(verifyAttestation(payload)).resolves.toEqual({ status: 'valid', payload });
  });
});
