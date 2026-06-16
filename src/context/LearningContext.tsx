import { ReactNode, useEffect, useState } from 'react';
import { certificates as seedCertificates, enterpriseData, modules as seedModules, rubriques as seedRubriques } from '../data/mockData';
import { Certificate, ContentImportRecord, ContentMutationResult, DemoUser, EnterpriseMember, LearningModule, Organization, RedeemScholarshipResult, Rubrique, Scholarship } from '../types';
import { LearningContext } from './learningCore';
import { useAuth } from '../hooks/useAuth';
import { canAccessEnterprise } from '../lib/roles';
import { isDemoEnabled } from '../lib/demoMode';
import { slugify } from '../lib/strings';
import {
  getContentBackend,
  loadContentSnapshot,
  removeModuleRecord,
  saveImportRecord,
  saveModuleRecord,
  saveRubriqueRecord,
} from '../services/contentRepository';
import {
  loadLearnerActivity,
  saveCertificateRecord,
  saveCompletedCourseRecord,
  saveCompletedCourseRecords,
} from '../services/learningRepository';
import {
  loadEnterpriseSnapshot,
  redeemScholarshipRecord,
  saveEnterpriseMemberRecord,
  saveScholarshipRecord,
} from '../services/enterpriseRepository';

const LEARNING_STORAGE_KEY = 'karatou.learning.v6';

interface StoredLearningState {
  modules: LearningModule[];
  rubriques: Rubrique[];
  contentImports: ContentImportRecord[];
  completedCourses: Record<string, string[]>;
  certificates: Certificate[];
  organizations: Organization[];
  organization: Organization | null;
  members: EnterpriseMember[];
  scholarships: Scholarship[];
}

const initialCompletedCourses = seedModules.reduce<Record<string, string[]>>((acc, module) => {
  acc[module.slug] = module.courses
    .filter((course) => course.completed)
    .map((course) => course.id);
  return acc;
}, {});

const defaultState: StoredLearningState = {
  modules: seedModules,
  rubriques: seedRubriques,
  contentImports: [],
  completedCourses: initialCompletedCourses,
  certificates: seedCertificates,
  organizations: [enterpriseData.org],
  organization: enterpriseData.org,
  members: enterpriseData.members,
  scholarships: enterpriseData.scholarships,
};

function readStoredState() {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(LEARNING_STORAGE_KEY);
    return raw ? repairStoredState({ ...defaultState, ...JSON.parse(raw) } as StoredLearningState) : defaultState;
  } catch {
    return defaultState;
  }
}

function repairStoredState(state: StoredLearningState): StoredLearningState {
  return repairSeedCertificates(repairEnterpriseSeed(state));
}

function repairSeedCertificates(state: StoredLearningState): StoredLearningState {
  const existingUids = new Set(state.certificates.map((certificate) => certificate.uid));
  const missingSeedCertificates = seedCertificates.filter((certificate) => !existingUids.has(certificate.uid));

  if (missingSeedCertificates.length === 0) {
    return state;
  }

  return {
    ...state,
    certificates: [...state.certificates, ...missingSeedCertificates],
  };
}

function repairEnterpriseSeed(state: StoredLearningState): StoredLearningState {
  const isPnudSeed =
    state.organization?.id === enterpriseData.org.id ||
    state.organizations.some((organization) => organization.id === enterpriseData.org.id) ||
    state.scholarships.some((scholarship) => scholarship.code.startsWith('KA-SCH-PNUD-'));
  // Only re-seed demo data in demo mode; never overwrite a real (possibly
  // empty) organization's data fetched from Supabase.
  const lostSeedMembers =
    isDemoEnabled && isPnudSeed && state.members.length === 0 && enterpriseData.members.length > 0;

  if (!lostSeedMembers) {
    return state;
  }

  return {
    ...state,
    organizations: defaultState.organizations,
    organization: defaultState.organization,
    members: defaultState.members,
    scholarships: defaultState.scholarships,
  };
}

function persistState(state: StoredLearningState) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LEARNING_STORAGE_KEY, JSON.stringify(state));
  }
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function daysBetween(from: Date, to: Date) {
  return Math.max(0, Math.ceil((to.getTime() - from.getTime()) / 86_400_000));
}

function buildCertificateUid(moduleSlug: string, userId: string) {
  const moduleCode =
    moduleSlug
      .split('-')
      .map((part) => part[0])
      .filter(Boolean)
      .join('')
      .slice(0, 3)
      .toUpperCase() || 'GEN';
  const userCode = userId.replace(/[^a-z0-9]/gi, '').slice(-4).toUpperCase().padStart(4, '0');
  // Random suffix to avoid UID collisions between users whose id tails match.
  // (A server-authoritative UID + DB unique index is the full fix \u2014 see Sprint 03 S03-03.)
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KA-2026-${moduleCode}-${userCode}-${random}`;
}

function normalizeScholarshipCode(code: string) {
  return code.trim().toUpperCase();
}

function isScholarshipExpired(scholarship: Scholarship) {
  const expiry = scholarship.expiresAtDate || '2026-12-31';
  return new Date(`${expiry}T23:59:59`).getTime() < Date.now();
}

function createRedeemResult(
  status: RedeemScholarshipResult['status'],
  message: string,
  scholarshipCode?: string | null,
  organization?: Organization | null
): RedeemScholarshipResult {
  return {
    status,
    message,
    organizationId: organization?.id,
    organizationName: organization?.name,
    scholarshipCode,
  };
}

export function LearningProvider({ children }: { children: ReactNode }) {
  const { user, authReady, authMode } = useAuth();
  // Stable identity fields: sync effects key on these instead of the whole
  // `user` object, which gets a new identity on every auth event (token refresh).
  const userId = user?.id;
  const userRole = user?.role;
  const userOrgId = user?.orgId;
  const [state, setState] = useState<StoredLearningState>(() => readStoredState());
  const [contentSyncStatus, setContentSyncStatus] = useState(
    getContentBackend() === 'supabase' ? 'Connexion Supabase en attente...' : 'Mode demo local'
  );

  useEffect(() => {
    let active = true;

    loadContentSnapshot()
      .then((snapshot) => {
        if (!active || !snapshot) {
          return;
        }

        setState((current) => {
          const hasRemoteContent = snapshot.modules.length > 0;
          const next = hasRemoteContent
            ? {
                ...current,
                rubriques: snapshot.rubriques,
                modules: snapshot.modules,
                contentImports: snapshot.contentImports,
              }
            : {
                ...current,
                contentImports: snapshot.contentImports,
              };
          persistState(next);
          return next;
        });
        setContentSyncStatus(
          snapshot.modules.length > 0
            ? `Supabase connecte - ${snapshot.modules.length} modules charges`
            : 'Supabase connecte - aucun contenu publie pour le moment'
        );
      })
      .catch((error: Error) => {
        if (active) {
          setContentSyncStatus(`Supabase indisponible - fallback local (${error.message})`);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (authMode !== 'supabase' || !authReady || !userId) {
      return;
    }

    let active = true;

    loadLearnerActivity(userId)
      .then((snapshot) => {
        if (!active || !snapshot) {
          return;
        }

        setState((current) => {
          const next = {
            ...current,
            completedCourses: snapshot.completedCourses,
            certificates: snapshot.certificates,
          };
          persistState(next);
          return next;
        });
      })
      .catch((error: Error) => {
        if (active) {
          setContentSyncStatus(`Echec sync apprenant: ${error.message}`);
        }
      });

    return () => {
      active = false;
    };
  }, [authMode, authReady, userId]);

  useEffect(() => {
    if (authMode !== 'supabase' || !authReady || !canAccessEnterprise(userRole)) {
      return;
    }

    let active = true;

    loadEnterpriseSnapshot(user)
      .then((snapshot) => {
        if (!active) {
          return;
        }

        if (!snapshot) {
          setState((current) => {
            const next = {
              ...current,
              organizations: defaultState.organizations,
              organization: defaultState.organization,
              members: defaultState.members,
              scholarships: defaultState.scholarships,
            };
            persistState(next);
            return next;
          });
          setContentSyncStatus('Supabase enterprise en attente - schema organisations a appliquer, donnees locales actives');
          return;
        }

        setState((current) => {
          const next = {
            ...current,
            organizations: snapshot.organizations,
            organization: snapshot.organization,
            members: snapshot.members,
            scholarships: snapshot.scholarships,
          };
          persistState(next);
          return next;
        });
        setContentSyncStatus(
          `Supabase enterprise connecte - ${snapshot.organizations.length} organisations, ${snapshot.members.length} membres, ${snapshot.scholarships.length} bourses`
        );
      })
      .catch((error: Error) => {
        if (active) {
          setContentSyncStatus(`Echec sync enterprise: ${error.message}`);
        }
      });

    return () => {
      active = false;
    };
    // `user` is read inside loadEnterpriseSnapshot, but we only need to re-run
    // when the admin's identity fields change, not on every token refresh.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authMode, authReady, userId, userRole, userOrgId]);

  const commit = (updater: (current: StoredLearningState) => StoredLearningState) => {
    setState((current) => {
      const next = updater(current);
      persistState(next);
      return next;
    });
  };

  const runContentSync = async (
    taskFactory: () => Promise<unknown>,
    successMessage: string,
    localMessage = successMessage
  ): Promise<ContentMutationResult> => {
    if (getContentBackend() !== 'supabase') {
      setContentSyncStatus('Mode demo local');
      return { ok: true, message: localMessage, persisted: 'local' };
    }

    if (authMode !== 'supabase' || user?.role !== 'platform_admin') {
      const message = 'Mode demo local - connectez un admin Supabase pour persister les contenus.';
      setContentSyncStatus(message);
      return { ok: true, message: localMessage, persisted: 'local' };
    }

    try {
      await taskFactory();
      setContentSyncStatus(successMessage);
      return { ok: true, message: successMessage, persisted: 'supabase' };
    } catch (error) {
      const message = `Echec sync Supabase: ${error instanceof Error ? error.message : 'erreur inconnue'}`;
      setContentSyncStatus(message);
      return { ok: false, message, persisted: 'supabase' };
    }
  };

  const syncContent = (taskFactory: () => Promise<unknown>, successMessage: string) => {
    void runContentSync(taskFactory, successMessage);
  };

  const syncLearnerActivity = (task: Promise<unknown>, successMessage: string) => {
    if (authMode !== 'supabase') {
      return;
    }

    task
      .then(() => setContentSyncStatus(successMessage))
      .catch((error: Error) => setContentSyncStatus(`Echec sync apprenant: ${error.message}`));
  };

  const syncEnterprise = (task: Promise<unknown>, successMessage: string) => {
    if (authMode !== 'supabase' || !canAccessEnterprise(user?.role)) {
      return;
    }

    task
      .then(() => setContentSyncStatus(successMessage))
      .catch((error: Error) => setContentSyncStatus(`Echec sync enterprise: ${error.message}`));
  };

  const saveRubrique = async (rubrique: Rubrique): Promise<ContentMutationResult> => {
    const normalized: Rubrique = {
      ...rubrique,
      slug: rubrique.slug || slugify(rubrique.name),
      order: Number.isFinite(rubrique.order) ? rubrique.order : state.rubriques.length + 1,
    };
    const result = await runContentSync(
      () => saveRubriqueRecord(normalized),
      `Rubrique synchronisee: ${normalized.name}`,
      `Rubrique sauvegardee localement: ${normalized.name}`
    );

    if (!result.ok) {
      return result;
    }

    commit((current) => {
      const exists = current.rubriques.some((candidate) => candidate.id === normalized.id);

      return {
        ...current,
        rubriques: exists
          ? current.rubriques.map((candidate) => (candidate.id === normalized.id ? normalized : candidate))
          : [...current.rubriques, normalized],
      };
    });

    return result;
  };

  const saveModule = async (module: LearningModule): Promise<ContentMutationResult> => {
    const normalized: LearningModule = {
      ...module,
      slug: module.slug || slugify(module.title),
      lessons: module.courses.length,
      order: Number.isFinite(module.order || 0) ? module.order : state.modules.length + 1,
      status: module.status || 'draft',
      courses: module.courses.map((course, index) => ({
        ...course,
        order: course.order || index + 1,
        status: course.status || 'published',
      })),
    };
    const result = await runContentSync(
      () => saveModuleRecord(normalized),
      `Module synchronise: ${normalized.title}`,
      `Module sauvegarde localement: ${normalized.title}`
    );

    if (!result.ok) {
      return result;
    }

    commit((current) => {
      const exists = current.modules.some((candidate) => candidate.id === normalized.id);

      return {
        ...current,
        modules: exists
          ? current.modules.map((candidate) => (candidate.id === normalized.id ? normalized : candidate))
          : [...current.modules, normalized],
        completedCourses: current.completedCourses[normalized.slug]
          ? current.completedCourses
          : { ...current.completedCourses, [normalized.slug]: [] },
      };
    });

    return result;
  };

  const removeModule = async (moduleId: string): Promise<ContentMutationResult> => {
    const module = state.modules.find((candidate) => candidate.id === moduleId);
    const result = await runContentSync(
      () => removeModuleRecord(moduleId),
      'Module supprime dans Supabase',
      module ? `Module supprime localement: ${module.title}` : 'Module supprime localement'
    );

    if (!result.ok) {
      return result;
    }

    commit((current) => {
      const module = current.modules.find((candidate) => candidate.id === moduleId);
      const nextCompleted = { ...current.completedCourses };
      if (module) {
        delete nextCompleted[module.slug];
      }

      return {
        ...current,
        modules: current.modules.filter((candidate) => candidate.id !== moduleId),
        completedCourses: nextCompleted,
      };
    });

    return result;
  };

  const importContentJson = (jsonText: string) => {
    try {
      const parsed = JSON.parse(jsonText) as {
        rubriques?: Rubrique[];
        modules?: LearningModule[];
      } | LearningModule[];
      const importedRubriques = Array.isArray(parsed) ? [] : parsed.rubriques || [];
      const importedModules = Array.isArray(parsed) ? parsed : parsed.modules || [];

      if (importedModules.length === 0 && importedRubriques.length === 0) {
        return { ok: false, message: 'Aucun module ou rubrique trouve dans le JSON.', imported: 0 };
      }

      const now = new Date().toISOString();
      const normalizedRubriques = importedRubriques.map((rubrique, index) => ({
        ...rubrique,
        id: rubrique.id || `rubrique-import-${Date.now()}-${index}`,
        slug: rubrique.slug || slugify(rubrique.name),
        icon: rubrique.icon || '\u{1F4DA}',
        color: rubrique.color || 'from-blue-700 to-blue-500',
        order: rubrique.order || state.rubriques.length + index + 1,
        status: rubrique.status || 'draft',
      }));
      const normalizedModules = importedModules.map((module, index) => ({
        ...module,
        id: module.id || `module-import-${Date.now()}-${index}`,
        slug: module.slug || slugify(module.title),
        rubriqueId: module.rubriqueId || normalizedRubriques[0]?.id || state.rubriques[0]?.id,
        emoji: module.emoji || '\u{1F4DA}',
        color: module.color || 'from-blue-700 to-blue-500',
        lessons: module.courses?.length || module.lessons || 0,
        duration: module.duration || `${Math.max(1, module.courses?.length || 1) * 10} min`,
        level: module.level || 'Debutant',
        enrolled: module.enrolled || 0,
        rating: module.rating || 0,
        progress: module.progress || 0,
        certified: Boolean(module.certified),
        isFree: module.isFree ?? true,
        order: module.order || state.modules.length + index + 1,
        status: module.status || 'draft',
        courses: (module.courses || []).map((course, courseIndex) => ({
          ...course,
          id: course.id || `course-import-${Date.now()}-${index}-${courseIndex}`,
          duration: course.duration || '10 min',
          order: course.order || courseIndex + 1,
          status: course.status || 'published',
        })),
      }));
      const importRecord: ContentImportRecord = {
        id: `import-${Date.now()}`,
        fileName: 'admin-json-import.json',
        fileType: 'json',
        status: 'imported',
        message: `${normalizedRubriques.length} rubriques, ${normalizedModules.length} modules importes`,
        createdAt: now,
      };

      commit((current) => ({
        ...current,
        rubriques: [
          ...current.rubriques.filter((rubrique) => !normalizedRubriques.some((next) => next.id === rubrique.id)),
          ...normalizedRubriques,
        ],
        modules: [
          ...current.modules.filter((module) => !normalizedModules.some((next) => next.id === module.id)),
          ...normalizedModules,
        ],
        completedCourses: normalizedModules.reduce(
          (acc, module) => ({ ...acc, [module.slug]: acc[module.slug] || [] }),
          current.completedCourses
        ),
        contentImports: [importRecord, ...current.contentImports],
      }));

      syncContent(
        () => Promise.all([
          ...normalizedRubriques.map((rubrique) => saveRubriqueRecord(rubrique)),
          ...normalizedModules.map((module) => saveModuleRecord(module)),
          saveImportRecord(importRecord),
        ]),
        `${normalizedRubriques.length + normalizedModules.length} contenus synchronises avec Supabase`
      );

      return {
        ok: true,
        message: `${normalizedRubriques.length} rubriques et ${normalizedModules.length} modules importes.`,
        imported: normalizedRubriques.length + normalizedModules.length,
      };
    } catch {
      return { ok: false, message: 'JSON invalide. Verifiez les virgules, guillemets et crochets.', imported: 0 };
    }
  };

  const registerSourceImport = (fileName: string, fileType: ContentImportRecord['fileType']) => {
    const record: ContentImportRecord = {
      id: `source-${Date.now()}`,
      fileName,
      fileType,
      status: fileType === 'json' ? 'failed' : 'queued',
      message:
        fileType === 'json'
          ? 'Utilisez l import JSON structure pour transformer ce fichier en modules.'
          : 'Source recue. Extraction automatique a connecter a une Edge Function Supabase.',
      createdAt: new Date().toISOString(),
    };

    commit((current) => ({
      ...current,
      contentImports: [record, ...current.contentImports],
    }));
    syncContent(() => saveImportRecord(record), `Import source synchronise: ${record.fileName}`);

    return record;
  };

  const getCompletedCourseIds = (moduleSlug: string) => state.completedCourses[moduleSlug] || [];

  const isCourseCompleted = (moduleSlug: string, courseId: string) =>
    getCompletedCourseIds(moduleSlug).includes(courseId);

  const getProgress = (moduleSlug: string) => {
    const module = state.modules.find((candidate) => candidate.slug === moduleSlug);
    if (!module || module.courses.length === 0) {
      return 0;
    }

    return Math.round((getCompletedCourseIds(moduleSlug).length / module.courses.length) * 100);
  };

  const completeCourse = (moduleSlug: string, courseId: string) => {
    const currentIds = state.completedCourses[moduleSlug] || [];
    const nextIds = currentIds.includes(courseId) ? currentIds : [...currentIds, courseId];

    commit((current) => {
      const persistedIds = current.completedCourses[moduleSlug] || [];
      if (persistedIds.includes(courseId)) {
        return current;
      }

      return {
        ...current,
        completedCourses: {
          ...current.completedCourses,
          [moduleSlug]: [...persistedIds, courseId],
        },
      };
    });

    if (user) {
      syncLearnerActivity(
        saveCompletedCourseRecord(user.id, moduleSlug, courseId),
        `Progression synchronisee: ${moduleSlug}`
      );
    }

    return nextIds;
  };

  const issueCertificate = (user: DemoUser, moduleSlug: string, completedCourseIds?: string[]) => {
    const module = state.modules.find((candidate) => candidate.slug === moduleSlug);
    if (!module) {
      return null;
    }

    const existing = state.certificates.find(
      (certificate) =>
        certificate.userId === user.id &&
        certificate.moduleSlug === moduleSlug &&
        certificate.status === 'active'
    );
    if (existing) {
      return existing;
    }

    const issued = new Date();
    const expires = new Date(issued);
    expires.setFullYear(issued.getFullYear() + 1);
    const issuedAtIso = issued.toISOString();
    const expiresAtIso = expires.toISOString();

    const certificate: Certificate = {
      id: `cert-${Date.now()}`,
      uid: buildCertificateUid(moduleSlug, user.id),
      moduleSlug,
      moduleName: module.title,
      userName: user.name,
      userId: user.id,
      issuedAt: formatDate(issued),
      expiresAt: formatDate(expires),
      issuedAtIso,
      expiresAtIso,
      status: 'active',
      daysLeft: daysBetween(issued, expires),
    };

    commit((current) => ({
      ...current,
      certificates: [...current.certificates, certificate],
    }));

    const syncTask = completedCourseIds
      ? saveCompletedCourseRecords(user.id, module.slug, completedCourseIds).then(() => saveCertificateRecord(certificate))
      : saveCertificateRecord(certificate);
    syncLearnerActivity(syncTask, `Certification synchronisee: ${certificate.uid}`);

    return certificate;
  };

  const getUserCertificates = (userId: string) =>
    state.certificates.filter((certificate) => certificate.userId === userId);

  const redeemLocalScholarship = (code: string, learner: DemoUser): RedeemScholarshipResult => {
    const normalizedCode = normalizeScholarshipCode(code);

    if (!normalizedCode) {
      return createRedeemResult('invalid', 'Saisissez un code bourse valide.', normalizedCode);
    }

    const scholarship = state.scholarships.find(
      (candidate) => normalizeScholarshipCode(candidate.code) === normalizedCode
    );

    if (!scholarship) {
      return createRedeemResult('invalid', 'Code bourse introuvable.', normalizedCode);
    }

    const organization =
      state.organizations.find((candidate) => candidate.id === scholarship.organizationId) ||
      state.organization ||
      enterpriseData.org;

    if (scholarship.status === 'claimed') {
      const claimedByLearner =
        scholarship.claimedByUserId === learner.id ||
        scholarship.claimedByEmail?.toLowerCase() === learner.email.toLowerCase() ||
        scholarship.claimedBy === learner.name;

      return createRedeemResult(
        claimedByLearner ? 'already_claimed' : 'claimed',
        claimedByLearner ? 'Cette bourse est deja active sur votre compte.' : 'Cette bourse a deja ete reclamee.',
        scholarship.code,
        organization
      );
    }

    if (scholarship.status === 'expired' || isScholarshipExpired(scholarship)) {
      commit((current) => ({
        ...current,
        scholarships: current.scholarships.map((candidate) =>
          candidate.id === scholarship.id ? { ...candidate, status: 'expired' as const } : candidate
        ),
      }));
      return createRedeemResult('expired', 'Ce code bourse a expire.', scholarship.code, organization);
    }

    const memberExists = state.members.some(
      (member) =>
        member.organizationId === scholarship.organizationId &&
        member.email.toLowerCase() === learner.email.toLowerCase()
    );
    const redeemedScholarship: Scholarship = {
      ...scholarship,
      status: 'claimed',
      claimedBy: learner.name,
      claimedByUserId: learner.id,
      claimedByEmail: learner.email,
      claimedAt: new Date().toISOString(),
    };
    const redeemedMember: EnterpriseMember = {
      id: `member-${learner.id}`,
      organizationId: scholarship.organizationId,
      userId: learner.id,
      name: learner.name,
      email: learner.email,
      role: 'learner',
      progress: 0,
      certificates: 0,
      lastActivity: "Bourse activee aujourd'hui",
      status: 'not_started',
    };

    commit((current) => ({
      ...current,
      scholarships: current.scholarships.map((candidate) =>
        candidate.id === scholarship.id ? redeemedScholarship : candidate
      ),
      members: memberExists ? current.members : [redeemedMember, ...current.members],
    }));

    return createRedeemResult('redeemed', 'Bourse activee avec succes.', scholarship.code, organization);
  };

  const redeemScholarship = async (code: string): Promise<RedeemScholarshipResult> => {
    if (!user) {
      return createRedeemResult('auth_required', 'Connectez-vous pour activer cette bourse.', normalizeScholarshipCode(code));
    }

    if (user.role !== 'learner') {
      return createRedeemResult('role_not_allowed', 'Connectez-vous avec un compte apprenant pour activer cette bourse.', normalizeScholarshipCode(code));
    }

    if (authMode === 'supabase') {
      try {
        const remoteResult = await redeemScholarshipRecord(code);

        if (remoteResult) {
          if (remoteResult.status === 'redeemed' || remoteResult.status === 'already_claimed') {
            commit((current) => ({
              ...current,
              scholarships: current.scholarships.map((scholarship) =>
                normalizeScholarshipCode(scholarship.code) === normalizeScholarshipCode(remoteResult.scholarshipCode || code)
                  ? {
                      ...scholarship,
                      status: 'claimed',
                      claimedBy: user.name,
                      claimedByUserId: user.id,
                      claimedByEmail: user.email,
                      claimedAt: new Date().toISOString(),
                    }
                  : scholarship
              ),
            }));
          }

          return remoteResult;
        }
      } catch (error) {
        return createRedeemResult(
          'error',
          error instanceof Error ? error.message : 'Activation de la bourse impossible.',
          normalizeScholarshipCode(code)
        );
      }
    }

    return redeemLocalScholarship(code, user);
  };

  const addMember = (payload: { name: string; email: string; role: EnterpriseMember['role'] }) => {
    const organizationId = state.organization?.id || user?.orgId || enterpriseData.org.id;
    const member: EnterpriseMember = {
      id: `member-${Date.now()}`,
      organizationId,
      userId: undefined,
      name: payload.name,
      email: payload.email,
      role: payload.role,
      progress: 0,
      certificates: 0,
      lastActivity: "Invitation envoyee aujourd'hui",
      status: 'not_started',
    };

    commit((current) => ({
      ...current,
      members: [member, ...current.members],
    }));
    syncEnterprise(saveEnterpriseMemberRecord(member), `Membre synchronise: ${member.email}`);
  };

  const createScholarship = () => {
    const organizationId = state.organization?.id || user?.orgId || enterpriseData.org.id;
    const code = `KA-SCH-PNUD-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const scholarship: Scholarship = {
      id: `scholarship-${Date.now()}`,
      organizationId,
      code,
      status: 'pending',
      claimedBy: null,
      expiresAt: '31 dec 2026',
      expiresAtDate: '2026-12-31',
    };

    commit((current) => ({
      ...current,
      scholarships: [scholarship, ...current.scholarships],
    }));
    syncEnterprise(saveScholarshipRecord(scholarship), `Bourse synchronisee: ${scholarship.code}`);

    return scholarship;
  };

  const resetDemoData = () => {
    commit(() => defaultState);
  };

  const value = {
    modules: state.modules,
    rubriques: state.rubriques,
    contentImports: state.contentImports,
    contentBackend: getContentBackend(),
    contentSyncStatus,
    completedCourses: state.completedCourses,
    certificates: state.certificates,
    organizations: state.organizations,
    organization: state.organization,
    members: state.members,
    scholarships: state.scholarships,
    saveRubrique,
    saveModule,
    removeModule,
    importContentJson,
    registerSourceImport,
    getCompletedCourseIds,
    isCourseCompleted,
    getProgress,
    completeCourse,
    issueCertificate,
    getUserCertificates,
    addMember,
    createScholarship,
    redeemScholarship,
    resetDemoData,
  };

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}
