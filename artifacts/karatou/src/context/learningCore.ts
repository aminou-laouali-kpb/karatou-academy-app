import { createContext } from 'react';
import { Certificate, ContentImportRecord, ContentMutationResult, DemoUser, EnterpriseMember, LearningModule, Organization, RedeemScholarshipResult, Rubrique, Scholarship } from '../types';

export interface LearningContextValue {
  modules: LearningModule[];
  rubriques: Rubrique[];
  contentImports: ContentImportRecord[];
  contentBackend: 'local' | 'supabase';
  contentSyncStatus: string;
  completedCourses: Record<string, string[]>;
  certificates: Certificate[];
  organizations: Organization[];
  organization: Organization | null;
  members: EnterpriseMember[];
  scholarships: Scholarship[];
  saveRubrique: (rubrique: Rubrique) => Promise<ContentMutationResult>;
  saveModule: (module: LearningModule) => Promise<ContentMutationResult>;
  removeModule: (moduleId: string) => Promise<ContentMutationResult>;
  importContentJson: (jsonText: string) => { ok: boolean; message: string; imported: number };
  registerSourceImport: (fileName: string, fileType: ContentImportRecord['fileType']) => ContentImportRecord;
  getCompletedCourseIds: (moduleSlug: string) => string[];
  isCourseCompleted: (moduleSlug: string, courseId: string) => boolean;
  getProgress: (moduleSlug: string) => number;
  completeCourse: (moduleSlug: string, courseId: string) => string[];
  issueCertificate: (user: DemoUser, moduleSlug: string, completedCourseIds?: string[]) => Promise<Certificate | null>;
  getUserCertificates: (userId: string) => Certificate[];
  addMember: (payload: { name: string; email: string; role: EnterpriseMember['role'] }) => void;
  createScholarship: () => Scholarship;
  createOrganization: (payload: { name: string; country?: string; industry?: string; seatsTotal?: number }) => Organization;
  redeemScholarship: (code: string) => Promise<RedeemScholarshipResult>;
  resetDemoData: () => void;
}

export const LearningContext = createContext<LearningContextValue | null>(null);
