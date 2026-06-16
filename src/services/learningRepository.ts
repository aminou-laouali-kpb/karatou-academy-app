import { Certificate } from '../types';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const TABLES = {
  learnerProgress: 'karatou_learner_progress',
  certificates: 'karatou_certificates',
};

interface LearnerProgressRow {
  user_id: string;
  module_slug: string;
  course_id: string;
  completed_at: string;
}

interface CertificateRow {
  id: string;
  uid: string;
  user_id: string;
  user_name: string;
  module_slug: string;
  module_name: string;
  issued_at: string;
  expires_at: string;
  status: Certificate['status'];
}

export interface LearnerActivitySnapshot {
  completedCourses: Record<string, string[]>;
  certificates: Certificate[];
}

function requireClient() {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  return supabase;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value));
}

function daysLeft(expiresAt: string) {
  return Math.max(0, Math.ceil((new Date(expiresAt).getTime() - Date.now()) / 86_400_000));
}

function normalizeCertificateUid(uid: string) {
  return uid.trim().toUpperCase();
}

function resolveCertificateStatus(row: CertificateRow): Certificate['status'] {
  if (row.status === 'active' && new Date(row.expires_at).getTime() < Date.now()) {
    return 'expired';
  }

  return row.status;
}

function oneYearFromNow() {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  return expires.toISOString();
}

function mapCertificate(row: CertificateRow): Certificate {
  return {
    id: row.id,
    uid: row.uid,
    moduleSlug: row.module_slug,
    moduleName: row.module_name,
    userName: row.user_name,
    userId: row.user_id,
    issuedAt: formatDate(row.issued_at),
    expiresAt: formatDate(row.expires_at),
    issuedAtIso: row.issued_at,
    expiresAtIso: row.expires_at,
    status: resolveCertificateStatus(row),
    daysLeft: daysLeft(row.expires_at),
  };
}

function certificateToRow(certificate: Certificate) {
  return {
    id: certificate.id,
    uid: certificate.uid,
    user_id: certificate.userId,
    user_name: certificate.userName,
    module_slug: certificate.moduleSlug,
    module_name: certificate.moduleName,
    issued_at: certificate.issuedAtIso || new Date().toISOString(),
    expires_at: certificate.expiresAtIso || oneYearFromNow(),
    status: certificate.status,
  };
}

export async function loadLearnerActivity(userId: string): Promise<LearnerActivitySnapshot | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const client = requireClient();
  const [progressResult, certificatesResult] = await Promise.all([
    client
      .from(TABLES.learnerProgress)
      .select('user_id,module_slug,course_id,completed_at')
      .eq('user_id', userId)
      .order('completed_at', { ascending: true }),
    client
      .from(TABLES.certificates)
      .select('*')
      .eq('user_id', userId)
      .order('issued_at', { ascending: false }),
  ]);

  if (progressResult.error) throw progressResult.error;
  if (certificatesResult.error) throw certificatesResult.error;

  const completedCourses = ((progressResult.data || []) as LearnerProgressRow[]).reduce<Record<string, string[]>>(
    (acc, row) => {
      const list = acc[row.module_slug] || [];
      if (!list.includes(row.course_id)) {
        list.push(row.course_id);
      }
      acc[row.module_slug] = list;
      return acc;
    },
    {}
  );

  return {
    completedCourses,
    certificates: ((certificatesResult.data || []) as CertificateRow[]).map(mapCertificate),
  };
}

export async function saveCompletedCourseRecord(userId: string, moduleSlug: string, courseId: string) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.learnerProgress)
    .upsert(
      {
        user_id: userId,
        module_slug: moduleSlug,
        course_id: courseId,
        completed_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,module_slug,course_id' }
    );

  if (error) throw error;
}

export async function saveCompletedCourseRecords(userId: string, moduleSlug: string, courseIds: string[]) {
  if (!isSupabaseConfigured || courseIds.length === 0) return;

  await Promise.all(courseIds.map((courseId) => saveCompletedCourseRecord(userId, moduleSlug, courseId)));
}

export async function saveCertificateRecord(certificate: Certificate) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.certificates)
    .upsert(certificateToRow(certificate), { onConflict: 'uid' });

  if (error) throw error;
}

export async function fetchCertificateByUid(uid: string): Promise<Certificate | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const normalizedUid = normalizeCertificateUid(uid);
  if (!normalizedUid) {
    return null;
  }

  // Public verification goes through a SECURITY DEFINER RPC: the certificate
  // table is no longer directly readable (confidentiality hardening).
  const { data, error } = await requireClient().rpc('karatou_verify_certificate', {
    input_uid: normalizedUid,
  });

  if (error) throw error;
  const row = (Array.isArray(data) ? data[0] : data) as CertificateRow | undefined;
  return row ? mapCertificate(row) : null;
}
