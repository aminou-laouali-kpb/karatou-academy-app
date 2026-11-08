import type { Language } from './data/translations';

export type UserRole = 'learner' | 'enterprise_admin' | 'platform_admin';
export type PublicationStatus = 'draft' | 'published';

export interface Rubrique {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  status: PublicationStatus;
}

export interface CourseTranslation {
  title?: string;
  description?: string;
}

export interface ModuleTranslation {
  title?: string;
  subtitle?: string;
  description?: string;
  level?: string;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  initials: string;
  country: string;
  orgId?: string;
  orgName?: string;
}

export interface Organization {
  id: string;
  slug: string;
  name: string;
  industry: string;
  country: string;
  plan: string;
  seatsTotal: number;
  status: 'active' | 'inactive';
  logoUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  order?: number;
  status?: PublicationStatus;
  translations?: Partial<Record<Language, CourseTranslation>>;
  completed?: boolean;
  current?: boolean;
}

export interface LearningModule {
  id: string;
  rubriqueId?: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  lessons: number;
  duration: string;
  level: string;
  enrolled: number;
  rating: number;
  progress: number;
  certified: boolean;
  isFree: boolean;
  order?: number;
  status?: PublicationStatus;
  translations?: Partial<Record<Language, ModuleTranslation>>;
  /** Vidéo d'introduction du cours (URL YouTube embed), par langue. */
  introVideo?: Partial<Record<Language, string>>;
  courses: Course[];
}

export interface Certificate {
  id: string;
  uid: string;
  moduleSlug: string;
  moduleName: string;
  userName: string;
  userId: string;
  issuedAt: string;
  expiresAt: string;
  issuedAtIso?: string;
  expiresAtIso?: string;
  status: 'active' | 'expired' | 'revoked';
  daysLeft: number;
}

export interface EnterpriseMember {
  id: string;
  organizationId: string;
  userId?: string;
  name: string;
  email: string;
  role: 'learner' | 'enterprise_admin';
  progress: number;
  certificates: number;
  certificateUid?: string;
  lastActivity: string;
  status: 'certified' | 'in_progress' | 'not_started';
}

export interface Scholarship {
  id: string;
  organizationId: string;
  code: string;
  status: 'claimed' | 'pending' | 'expired';
  claimedBy: string | null;
  claimedByUserId?: string | null;
  claimedByEmail?: string | null;
  claimedAt?: string | null;
  expiresAt: string;
  expiresAtDate?: string;
}

export type RedeemScholarshipStatus =
  | 'redeemed'
  | 'already_claimed'
  | 'claimed'
  | 'expired'
  | 'invalid'
  | 'auth_required'
  | 'role_not_allowed'
  | 'error';

export interface RedeemScholarshipResult {
  status: RedeemScholarshipStatus;
  message: string;
  organizationId?: string | null;
  organizationName?: string | null;
  scholarshipCode?: string | null;
}

export interface ContentImportRecord {
  id: string;
  fileName: string;
  fileType: 'json' | 'pdf' | 'docx' | 'other';
  status: 'imported' | 'queued' | 'failed';
  message: string;
  createdAt: string;
}

export interface ContentMutationResult {
  ok: boolean;
  message: string;
  persisted: 'local' | 'supabase';
}
