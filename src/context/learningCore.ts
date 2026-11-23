import { createContext } from 'react';
import { Certificate, ContentImportRecord, ContentMutationResult, DemoUser, EnterpriseMember, LearningModule, Organization, RedeemScholarshipResult, Rubrique, Scholarship } from '../types';

export interface LearningContextValue {
  modules: LearningModule[];
  rubriques: Rubrique[];
  contentImports: ContentImportRecord[];
  contentBackend: 'local' | 'supabase';
  contentSyncStatus: string;
  contentLoading: boolean;
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
  /** `quiz`: the learner's answers, graded by the server before the lesson counts. */
  completeCourse: (moduleSlug: string, courseId: string, quiz?: { lang: string; answers: string[] }) => string[];
  rejectedCompletion: RejectedCompletion | null;
  clearRejectedCompletion: () => void;
  issueCertificate: (user: DemoUser, moduleSlug: string) => Promise<Certificate | null>;
  getUserCertificates: (userId: string) => Certificate[];
  addMember: (payload: { name: string; email: string; role: EnterpriseMember['role'] }) => void;
  /** null when the session has no real organization to attach the code to. */
  createScholarship: () => Promise<Scholarship | null>;
  createOrganization: (payload: { name: string; country?: string; industry?: string; seatsTotal?: number }) => Organization;
  redeemScholarship: (code: string) => Promise<RedeemScholarshipResult>;
  resetDemoData: () => void;
}

/** A lesson the server did not validate: quiz below 70 %, or an outdated quiz. */
export interface RejectedCompletion {
  moduleSlug: string;
  courseId: string;
  status: 'failed' | 'mismatch';
}

export const LearningContext = createContext<LearningContextValue | null>(null);
