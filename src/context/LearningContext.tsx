import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
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
  issueCertificateRecord,
  loadLearnerActivity,
  saveCompletedCourseRecords,
} from '../services/learningRepository';
import {
  loadEnterpriseSnapshot,
  redeemScholarshipRecord,
  saveEnterpriseMemberRecord,
  saveOrganizationRecord,
  createScholarshipRecord,
} from '../services/enterpriseRepository';
import { generateScholarshipCode, scholarshipExpiry } from '../lib/scholarship';
import {
  acknowledgeCompletions,
  enqueueCompletion,
  groupByModule,
  mergeCompletedCourses,
  readOutbox,
} from '../lib/progressOutbox';

// Namespaced per mode so a demo-populated store can never be read in production.
const LEARNING_STORAGE_KEY = isDemoEnabled ? 'karatou.learning.v6.demo' : 'karatou.learning.v6.prod';

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
  /** Account the personal data (progress, certificates…) belongs to. */
  ownerUserId?: string | null;
}

const initialCompletedCourses = seedModules.reduce<Record<string, string[]>>((acc, module) => {
  acc[module.slug] = module.courses
    .filter((course) => course.completed)
    .map((course) => course.id);
  return acc;
}, {});

// Demo seed (mockData) — used ONLY in demo mode.
const demoSeedState: StoredLearningState = {
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

// Empty state — the production default. Real data comes only from Supabase, so
// no shared/mock/demo data is ever shown to a real user.
const emptyState: StoredLearningState = {
  modules: [],
  rubriques: [],
  contentImports: [],
  completedCourses: {},
  certificates: [],
  organizations: [],
  organization: null,
  members: [],
  scholarships: [],
};

const defaultState: StoredLearningState = isDemoEnabled ? demoSeedState : emptyState;

function readStoredState() {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  try {
    const raw = window.localStorage.getItem(LEARNING_STORAGE_KEY);
    if (!raw) {
      return defaultState;
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return defaultState;
    }
    return repairStoredState({ ...defaultState, ...(parsed as Partial<StoredLearningState>) } as StoredLearningState);
  } catch {
    return defaultState;
  }
}

function repairStoredState(state: StoredLearningState): StoredLearningState {
  return repairSeedCertificates(repairEnterpriseSeed(state));
}

function repairSeedCertificates(state: StoredLearningState): StoredLearningState {
  // Never inject demo certificates in production (they would let /verify validate fakes).
  if (!isDemoEnabled) {
    return state;
  }
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
  // No date: the server is the authority (its RPC checks expires_at_date).
  if (!scholarship.expiresAtDate) return false;
  return new Date(`${scholarship.expiresAtDate}T23:59:59`).getTime() < Date.now();
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
  // True while the initial catalog fetch is in flight — lets pages show a
  // loading state instead of "no courses yet" during a hard refresh.
  const [contentLoading, setContentLoading] = useState(getContentBackend() === 'supabase');
  // Bumped on auth identity changes to refetch the catalog under the new
  // identity's RLS visibility (admins see drafts, learners do not).
  const [contentReloadKey, setContentReloadKey] = useState(0);

  // Sends pending lesson completions in one bulk insert per module. Concurrent
  // calls share the same in-flight run; failures keep the items for next time.
  const flushInFlight = useRef<Promise<void> | null>(null);
  const flushProgressOutbox = useCallback((ownerId: string): Promise<void> => {
    if (getContentBackend() !== 'supabase') return Promise.resolve();
    if (flushInFlight.current) return flushInFlight.current;
    const run = (async () => {
      const pending = readOutbox(ownerId);
      for (const [moduleSlug, items] of Object.entries(groupByModule(pending))) {
        try {
          await saveCompletedCourseRecords(ownerId, moduleSlug, items);
          acknowledgeCompletions(ownerId, items);
        } catch (error) {
          setContentSyncStatus(`Echec sync apprenant: ${error instanceof Error ? error.message : 'erreur inconnue'}`);
        }
      }
    })().finally(() => {
      flushInFlight.current = null;
    });
    flushInFlight.current = run;
    return run;
  }, []);

  // Replay the outbox when the connection comes back or the app returns to the
  // foreground (Android often kills the tab of a backgrounded browser).
  useEffect(() => {
    if (authMode !== 'supabase' || !userId) return;
    const flush = () => {
      if (document.visibilityState === 'visible') void flushProgressOutbox(userId);
    };
    window.addEventListener('online', flush);
    document.addEventListener('visibilitychange', flush);
    return () => {
      window.removeEventListener('online', flush);
      document.removeEventListener('visibilitychange', flush);
    };
  }, [authMode, userId, flushProgressOutbox]);

  // Per-user isolation: when the auth identity changes (login / logout / switch on
  // a shared device), drop the previous session's personal data. Real data reloads
  // via the snapshot effects below. Demo mode keeps its seed.
  // The published course catalog is shared tenant content, not per-user data: it
  // must survive the identity change. On a hard refresh the identity resolves
  // undefined -> uuid after mount, and the content fetch below may already have
  // settled — wiping the catalog here left the app blank. Only publicly visible
  // entries are carried over: a privileged session (admin) may have cached draft
  // modules/courses that the next identity must not see. The catalog is then
  // refetched under the new identity's RLS visibility.
  const lastUserIdRef = useRef(userId);
  useEffect(() => {
    if (lastUserIdRef.current === userId) {
      return;
    }
    const previousUserId = lastUserIdRef.current;
    lastUserIdRef.current = userId;
    if (!isDemoEnabled) {
      setState((current) => {
        // A hard refresh resolves the session undefined -> uuid after mount. That
        // is the same person: keep their progress (it used to be wiped at every
        // launch, losing completions not yet synced). Wipe only on logout or when
        // another account takes over the device.
        const sameOwner = !previousUserId && userId && current.ownerUserId === userId;
        if (sameOwner) return current;
        const next: StoredLearningState = {
          ...emptyState,
          modules: current.modules
            .filter((module) => module.status !== 'draft')
            .map((module) => ({
              ...module,
              courses: module.courses.filter((course) => course.status !== 'draft'),
            })),
          rubriques: current.rubriques.filter((rubrique) => rubrique.status !== 'draft'),
          ownerUserId: userId ?? null,
        };
        persistState(next);
        return next;
      });
      setContentReloadKey((key) => key + 1);
    }
  }, [userId]);

  useEffect(() => {
    let active = true;

    if (getContentBackend() === 'supabase') {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- loading flag for the fetch below
      setContentLoading(true);
    }

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
      })
      .finally(() => {
        if (active) {
          setContentLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [contentReloadKey]);

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
            // Server progress ∪ completions still waiting in the outbox.
            completedCourses: mergeCompletedCourses(snapshot.completedCourses, readOutbox(userId)),
            certificates: snapshot.certificates,
            ownerUserId: userId,
          };
          persistState(next);
          return next;
        });
        void flushProgressOutbox(userId);
      })
      .catch((error: Error) => {
        if (active) {
          setContentSyncStatus(`Echec sync apprenant: ${error.message}`);
        }
      });

    return () => {
      active = false;
    };
  }, [authMode, authReady, userId, flushProgressOutbox]);

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
          setContentSyncStatus(
            isDemoEnabled
              ? 'Supabase enterprise en attente - schema organisations a appliquer, donnees demo actives'
              : 'Supabase enterprise en attente - aucune donnee (schema a appliquer)'
          );
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

    if (user && authMode === 'supabase') {
      // Written to the per-user outbox first, then sent: a failed or offline
      // send is retried on reconnection instead of being lost.
      enqueueCompletion(user.id, { moduleSlug, courseId, completedAt: new Date().toISOString() });
      void flushProgressOutbox(user.id);
    }

    return nextIds;
  };

  const issueCertificate = async (
    user: DemoUser,
    moduleSlug: string,
    completedCourseIds?: string[]
  ): Promise<Certificate | null> => {
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

    // Production: issuance is server-authoritative (the RPC verifies completion
    // and generates the UID). Direct client writes are blocked by RLS.
    if (authMode === 'supabase') {
      try {
        await flushProgressOutbox(user.id);
        if (completedCourseIds && completedCourseIds.length > 0) {
          await saveCompletedCourseRecords(user.id, moduleSlug, completedCourseIds);
        }
        const issued = await issueCertificateRecord(moduleSlug);
        if (issued) {
          commit((current) => ({
            ...current,
            certificates: [...current.certificates.filter((c) => c.uid !== issued.uid), issued],
          }));
          setContentSyncStatus(`Certification synchronisee: ${issued.uid}`);
        }
        return issued;
      } catch (error) {
        setContentSyncStatus(
          `Echec certification: ${error instanceof Error ? error.message : 'erreur inconnue'}`
        );
        return null;
      }
    }

    // Local demo: generate the certificate client-side.
    const issued = new Date();
    const expires = new Date(issued);
    expires.setFullYear(issued.getFullYear() + 1);

    const certificate: Certificate = {
      id: `cert-${Date.now()}`,
      uid: buildCertificateUid(moduleSlug, user.id),
      moduleSlug,
      moduleName: module.title,
      userName: user.name,
      userId: user.id,
      issuedAt: formatDate(issued),
      expiresAt: formatDate(expires),
      issuedAtIso: issued.toISOString(),
      expiresAtIso: expires.toISOString(),
      status: 'active',
      daysLeft: daysBetween(issued, expires),
    };

    commit((current) => ({
      ...current,
      certificates: [...current.certificates, certificate],
    }));

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

  const createScholarship = async (): Promise<Scholarship | null> => {
    // Falling back to the demo organization would mint a code that RLS refuses
    // to persist, leaving the admin with a reference that verifies nowhere.
    const organizationId = state.organization?.id || user?.orgId;
    if (!organizationId) {
      return null;
    }

    // Production: the server generates the code (within the seat limit) and
    // only then is it shown — a code displayed but never saved used to give
    // learners "invalid code" later.
    if (authMode === 'supabase') {
      try {
        const created = await createScholarshipRecord(organizationId);
        commit((current) => ({ ...current, scholarships: [created, ...current.scholarships] }));
        return created;
      } catch (error) {
        setContentSyncStatus(`Echec creation bourse: ${error instanceof Error ? error.message : 'erreur inconnue'}`);
        return null;
      }
    }

    // The "PNUD" prefix and the 2026-12-31 expiry used to be hard-coded for
    // every organization: all codes would have died on 2027-01-01.
    const code = generateScholarshipCode(state.organization?.name || organizationId);
    const scholarship: Scholarship = {
      id: `scholarship-${Date.now()}`,
      organizationId,
      code,
      status: 'pending',
      claimedBy: null,
      ...scholarshipExpiry(),
    };

    commit((current) => ({
      ...current,
      scholarships: [scholarship, ...current.scholarships],
    }));

    return scholarship;
  };

  const createOrganization = (payload: { name: string; country?: string; industry?: string; seatsTotal?: number }) => {
    const name = payload.name.trim();
    const slug = slugify(name) || `org-${Date.now()}`;
    const organization: Organization = {
      id: `org-${slug}-${Math.random().toString(36).slice(2, 6)}`,
      slug,
      name,
      industry: payload.industry?.trim() || 'Organisation',
      country: payload.country?.trim() || 'NE',
      plan: 'Enterprise',
      seatsTotal: payload.seatsTotal && payload.seatsTotal > 0 ? payload.seatsTotal : 50,
      status: 'active',
    };

    commit((current) => ({
      ...current,
      organizations: [
        ...current.organizations.filter((candidate) => candidate.id !== organization.id),
        organization,
      ],
    }));
    syncEnterprise(saveOrganizationRecord(organization), `Organisation synchronisee: ${organization.name}`);

    return organization;
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
    contentLoading,
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
    createOrganization,
    redeemScholarship,
    resetDemoData,
  };

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>;
}
