import { DemoUser, EnterpriseMember, Organization, RedeemScholarshipResult, Scholarship } from '../types';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const TABLES = {
  organizations: 'karatou_organizations',
  members: 'karatou_enterprise_members',
  scholarships: 'karatou_scholarships',
};

interface OrganizationRow {
  id: string;
  slug: string;
  name: string;
  industry: string;
  country: string;
  plan: string;
  seats_total: number;
  status: Organization['status'];
  logo_url: string | null;
}

interface EnterpriseMemberRow {
  id: string;
  organization_id: string;
  user_id: string | null;
  name: string;
  email: string;
  role: EnterpriseMember['role'] | 'admin' | 'org_admin';
  progress: number;
  certificates: number;
  certificate_uid: string | null;
  last_activity: string;
  status: EnterpriseMember['status'];
}

interface ScholarshipRow {
  id: string;
  organization_id: string;
  code: string;
  status: Scholarship['status'];
  claimed_by: string | null;
  claimed_by_user_id?: string | null;
  claimed_by_email?: string | null;
  claimed_at?: string | null;
  expires_at: string;
  expires_at_date?: string | null;
}

interface RedeemScholarshipRow {
  result: RedeemScholarshipResult['status'];
  message: string;
  organization_id: string | null;
  organization_name: string | null;
  scholarship_code: string | null;
}

export interface EnterpriseSnapshot {
  organizations: Organization[];
  organization: Organization | null;
  members: EnterpriseMember[];
  scholarships: Scholarship[];
}

function requireClient() {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  return supabase;
}

function mapOrganization(row: OrganizationRow): Organization {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    industry: row.industry,
    country: row.country,
    plan: row.plan,
    seatsTotal: row.seats_total,
    status: row.status,
    logoUrl: row.logo_url ?? undefined,
  };
}

function mapMember(row: EnterpriseMemberRow): EnterpriseMember {
  const role = row.role === 'admin' || row.role === 'org_admin' ? 'enterprise_admin' : row.role;

  return {
    id: row.id,
    organizationId: row.organization_id,
    userId: row.user_id || undefined,
    name: row.name,
    email: row.email,
    role,
    progress: row.progress,
    certificates: row.certificates,
    certificateUid: row.certificate_uid || undefined,
    lastActivity: row.last_activity,
    status: row.status,
  };
}

function memberToRow(member: EnterpriseMember) {
  return {
    id: member.id,
    organization_id: member.organizationId,
    user_id: member.userId || null,
    name: member.name,
    email: member.email.trim().toLowerCase(),
    role: member.role,
    progress: member.progress,
    certificates: member.certificates,
    certificate_uid: member.certificateUid || null,
    last_activity: member.lastActivity,
    status: member.status,
  };
}

function mapScholarship(row: ScholarshipRow): Scholarship {
  return {
    id: row.id,
    organizationId: row.organization_id,
    code: row.code,
    status: row.status,
    claimedBy: row.claimed_by,
    claimedByUserId: row.claimed_by_user_id || null,
    claimedByEmail: row.claimed_by_email || null,
    claimedAt: row.claimed_at || null,
    expiresAt: row.expires_at,
    expiresAtDate: row.expires_at_date || undefined,
  };
}

function scholarshipToRow(scholarship: Scholarship) {
  return {
    id: scholarship.id,
    organization_id: scholarship.organizationId,
    code: scholarship.code,
    status: scholarship.status,
    claimed_by: scholarship.claimedBy,
    claimed_by_user_id: scholarship.claimedByUserId || null,
    claimed_by_email: scholarship.claimedByEmail || null,
    claimed_at: scholarship.claimedAt || null,
    expires_at: scholarship.expiresAt,
    expires_at_date: scholarship.expiresAtDate || null,
  };
}

function mapRedeemScholarshipResult(row: RedeemScholarshipRow): RedeemScholarshipResult {
  return {
    status: row.result,
    message: row.message,
    organizationId: row.organization_id,
    organizationName: row.organization_name,
    scholarshipCode: row.scholarship_code,
  };
}

function chooseOrganization(organizations: Organization[], user?: DemoUser | null) {
  if (user?.orgId) {
    return organizations.find((organization) => organization.id === user.orgId) || organizations[0] || null;
  }

  return organizations[0] || null;
}

function isEnterpriseSchemaPending(error: unknown) {
  const candidate = error as { code?: string; message?: string } | null;
  const code = candidate?.code || '';
  const message = (candidate?.message || '').toLowerCase();

  return (
    ['42P01', '42703', 'PGRST204', 'PGRST205'].includes(code) ||
    message.includes('karatou_organizations') ||
    message.includes('organization_id') ||
    message.includes('user_id') ||
    message.includes('expires_at_date') ||
    message.includes('claimed_by_user_id') ||
    message.includes('could not find the table') ||
    message.includes('could not find the column')
  );
}

export async function loadEnterpriseSnapshot(user?: DemoUser | null): Promise<EnterpriseSnapshot | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const client = requireClient();
  const organizationsResult = await client
    .from(TABLES.organizations)
    .select('*')
    .order('name', { ascending: true });

  if (organizationsResult.error) {
    if (isEnterpriseSchemaPending(organizationsResult.error)) return null;
    throw organizationsResult.error;
  }

  const organizations = ((organizationsResult.data || []) as OrganizationRow[]).map(mapOrganization);
  const organization = chooseOrganization(organizations, user);
  const shouldFilterToOrganization = user?.role !== 'platform_admin' && Boolean(organization?.id);
  let membersQuery = client.from(TABLES.members).select('*').order('created_at', { ascending: true });
  let scholarshipsQuery = client.from(TABLES.scholarships).select('*').order('created_at', { ascending: false });

  if (shouldFilterToOrganization && organization) {
    membersQuery = membersQuery.eq('organization_id', organization.id);
    scholarshipsQuery = scholarshipsQuery.eq('organization_id', organization.id);
  }

  const [membersResult, scholarshipsResult] = await Promise.all([membersQuery, scholarshipsQuery]);

  if (membersResult.error) {
    if (isEnterpriseSchemaPending(membersResult.error)) return null;
    throw membersResult.error;
  }
  if (scholarshipsResult.error) {
    if (isEnterpriseSchemaPending(scholarshipsResult.error)) return null;
    throw scholarshipsResult.error;
  }

  return {
    organizations,
    organization,
    members: ((membersResult.data || []) as EnterpriseMemberRow[]).map(mapMember),
    scholarships: ((scholarshipsResult.data || []) as ScholarshipRow[]).map(mapScholarship),
  };
}

export async function saveEnterpriseMemberRecord(member: EnterpriseMember) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.members)
    .upsert(memberToRow(member), { onConflict: 'organization_id,email' });

  if (isEnterpriseSchemaPending(error)) return;
  if (error) throw error;
}

export async function saveScholarshipRecord(scholarship: Scholarship) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.scholarships)
    .upsert(scholarshipToRow(scholarship), { onConflict: 'code' });

  if (isEnterpriseSchemaPending(error)) return;
  if (error) throw error;
}

function organizationToRow(org: Organization) {
  return {
    id: org.id,
    slug: org.slug,
    name: org.name,
    industry: org.industry,
    country: org.country,
    plan: org.plan,
    seats_total: org.seatsTotal,
    status: org.status,
    logo_url: org.logoUrl ?? null,
  };
}

export async function saveOrganizationRecord(org: Organization) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.organizations)
    .upsert(organizationToRow(org), { onConflict: 'id' });

  if (isEnterpriseSchemaPending(error)) return;
  if (error) throw error;
}

const ORG_LOGO_BUCKET = 'org-logos';

// Uploads a sponsor logo to the public Storage bucket (platform-admin only by
// RLS) and returns its public URL.
export async function uploadOrgLogo(orgId: string, file: File): Promise<string> {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error('Supabase requis pour televerser un logo.');
  }
  const ext = (file.name.split('.').pop() || 'png').toLowerCase().replace(/[^a-z0-9]/g, '') || 'png';
  const path = `${orgId}/logo.${ext}`;
  const { error } = await supabase.storage
    .from(ORG_LOGO_BUCKET)
    .upload(path, file, { upsert: true, contentType: file.type || undefined });
  if (error) throw error;
  const { data } = supabase.storage.from(ORG_LOGO_BUCKET).getPublicUrl(path);
  return `${data.publicUrl}?v=${Date.now()}`;
}

export async function fetchOrganizationLogo(orgId: string): Promise<string | null> {
  if (!isSupabaseConfigured || !supabase || !orgId) {
    return null;
  }
  const { data, error } = await requireClient()
    .from(TABLES.organizations)
    .select('logo_url')
    .eq('id', orgId)
    .maybeSingle();
  if (error) {
    return null;
  }
  return (data as { logo_url: string | null } | null)?.logo_url ?? null;
}

export async function redeemScholarshipRecord(code: string): Promise<RedeemScholarshipResult | null> {
  if (!isSupabaseConfigured) return null;

  const { data, error } = await requireClient().rpc('karatou_redeem_scholarship', {
    input_code: code.trim().toUpperCase(),
  });

  if (error) {
    if (isEnterpriseSchemaPending(error)) return null;
    throw error;
  }

  const row = Array.isArray(data) ? data[0] : data;
  return row ? mapRedeemScholarshipResult(row as RedeemScholarshipRow) : null;
}
