import { ChangeEvent, useMemo, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  FileJson,
  FileText,
  Globe2,
  Layers3,
  Plus,
  Save,
  Trash2,
  Upload,
} from 'lucide-react';
import { AdminNav } from '../layouts/AdminNav';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { useLearning } from '../hooks/useLearning';
import { slugify } from '../lib/strings';
import { Course, LearningModule, Rubrique } from '../types';

const colors = [
  'from-blue-800 to-blue-600',
  'from-emerald-700 to-teal-600',
  'from-cyan-700 to-blue-500',
  'from-gold-500 to-orange-500',
  'from-rose-600 to-pink-500',
];

const sampleJson = JSON.stringify(
  {
    rubriques: [
      {
        id: 'rubrique-productivite',
        slug: 'productivite',
        name: 'Productivite',
        description: 'Outils Google, Notion et methodes simples pour mieux travailler.',
        icon: '⚡',
        color: 'from-cyan-700 to-blue-500',
        order: 5,
        status: 'draft',
      },
    ],
    modules: [
      {
        id: 'module-productivite-google',
        rubriqueId: 'rubrique-productivite',
        slug: 'productivite-google',
        title: 'Productivite avec Google Workspace',
        subtitle: 'Gmail - Docs - Drive',
        description: 'Organiser son travail, collaborer et produire plus vite avec des outils accessibles.',
        emoji: '⚡',
        color: 'from-cyan-700 to-blue-500',
        lessons: 2,
        duration: '45 min',
        level: 'Debutant',
        enrolled: 0,
        rating: 0,
        progress: 0,
        certified: false,
        isFree: true,
        order: 5,
        status: 'draft',
        translations: {
          en: {
            title: 'Productivity with Google Workspace',
            subtitle: 'Gmail - Docs - Drive',
            description: 'Organize work, collaborate and produce faster with accessible tools.',
            level: 'Beginner',
          },
          ha: {
            title: 'Productivity da Google Workspace',
            subtitle: 'Gmail - Docs - Drive',
            description: 'Tsara aiki, hada kai, da samar da sakamako cikin sauki.',
            level: 'Mai farawa',
          },
        },
        courses: [
          {
            id: 'g1',
            title: 'Organiser Gmail',
            duration: '20 min',
            description: 'Utiliser libelles, recherche et reponses courtes.',
            order: 1,
            status: 'published',
            translations: {
              en: { title: 'Organize Gmail', description: 'Use labels, search and short replies.' },
              ha: { title: 'Tsara Gmail', description: 'Yi amfani da labels, bincike da gajerun amsoshi.' },
            },
          },
          {
            id: 'g2',
            title: 'Collaborer dans Docs',
            duration: '25 min',
            description: 'Partager un document, commenter et finaliser une note.',
            order: 2,
            status: 'published',
          },
        ],
      },
    ],
  },
  null,
  2
);

function createEmptyModule(rubriqueId?: string): LearningModule {
  const now = Date.now();
  return {
    id: `module-${now}`,
    rubriqueId,
    slug: '',
    title: 'Nouveau module',
    subtitle: 'Sous-titre du parcours',
    description: 'Promesse claire du module pour les apprenants.',
    emoji: '📚',
    color: colors[0],
    lessons: 0,
    duration: '0 min',
    level: 'Debutant',
    enrolled: 0,
    rating: 0,
    progress: 0,
    certified: false,
    isFree: true,
    order: now,
    status: 'draft',
    translations: {},
    courses: [],
  };
}

function createEmptyCourse(order: number): Course {
  return {
    id: `course-${Date.now()}`,
    title: 'Nouvelle lecon',
    duration: '10 min',
    description: 'Objectif concret de cette lecon.',
    order,
    status: 'published',
    translations: {},
  };
}

function extensionToType(fileName: string) {
  const extension = fileName.split('.').pop()?.toLowerCase();
  if (extension === 'json') return 'json';
  if (extension === 'pdf') return 'pdf';
  if (extension === 'docx') return 'docx';
  return 'other';
}

function translationCompleteness(module: LearningModule, lang: 'en' | 'ha') {
  const moduleFields = [
    module.translations?.[lang]?.title,
    module.translations?.[lang]?.subtitle,
    module.translations?.[lang]?.description,
  ];
  const courseFields = module.courses.flatMap((course) => [
    course.translations?.[lang]?.title,
    course.translations?.[lang]?.description,
  ]);
  const fields = [...moduleFields, ...courseFields];
  const done = fields.filter(Boolean).length;
  return fields.length === 0 ? 0 : Math.round((done / fields.length) * 100);
}

type NoticeTone = 'success' | 'warning' | 'error';

interface AdminNotice {
  tone: NoticeTone;
  message: string;
}

const noticeStyles: Record<NoticeTone, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  warning: 'border-gold-200 bg-gold-50 text-gold-700',
  error: 'border-red-200 bg-red-50 text-red-700',
};

function noticeIcon(tone: NoticeTone) {
  return tone === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />;
}

function normalizeModuleDraft(module: LearningModule): LearningModule {
  return {
    ...module,
    title: module.title.trim(),
    slug: slugify(module.slug || module.title),
    subtitle: module.subtitle.trim(),
    description: module.description.trim(),
    level: module.level.trim(),
    duration: module.duration.trim() || `${Math.max(1, module.courses.length) * 10} min`,
    lessons: module.courses.length,
    courses: module.courses.map((course, index) => ({
      ...course,
      title: course.title.trim(),
      duration: course.duration.trim(),
      description: course.description.trim(),
      order: index + 1,
      status: course.status || 'published',
    })),
  };
}

function validateModuleDraft(module: LearningModule, rubriques: Rubrique[], modules: LearningModule[]) {
  const issues: string[] = [];

  if (!module.title) issues.push('Le titre FR est obligatoire.');
  if (!module.slug) issues.push('Le slug est obligatoire.');
  if (!module.description) issues.push('La description FR est obligatoire.');
  if (!module.rubriqueId || !rubriques.some((rubrique) => rubrique.id === module.rubriqueId)) {
    issues.push('Selectionnez une rubrique valide.');
  }
  if (modules.some((candidate) => candidate.id !== module.id && candidate.slug === module.slug)) {
    issues.push('Ce slug est deja utilise par un autre module.');
  }
  if (module.status === 'published' && module.courses.length === 0) {
    issues.push('Un module publie doit contenir au moins une lecon.');
  }

  module.courses.forEach((course, index) => {
    const prefix = `Lecon ${index + 1}`;
    if (!course.title) issues.push(`${prefix}: titre obligatoire.`);
    if (!course.duration) issues.push(`${prefix}: duree obligatoire.`);
    if (!course.description) issues.push(`${prefix}: description obligatoire.`);
  });

  return issues;
}

export function AdminContent() {
  const {
    modules,
    rubriques,
    contentImports,
    contentBackend,
    contentSyncStatus,
    saveRubrique,
    saveModule,
    removeModule,
    importContentJson,
    registerSourceImport,
  } = useLearning();
  const sortedRubriques = useMemo(
    () => [...rubriques].sort((a, b) => a.order - b.order),
    [rubriques]
  );
  const sortedModules = useMemo(
    () => [...modules].sort((a, b) => (a.order || 0) - (b.order || 0)),
    [modules]
  );
  const [selectedModuleId, setSelectedModuleId] = useState(sortedModules[0]?.id || '');
  const selectedModule = sortedModules.find((module) => module.id === selectedModuleId) || sortedModules[0];
  const [draft, setDraft] = useState<LearningModule>(() => selectedModule || createEmptyModule(sortedRubriques[0]?.id));
  const [newRubrique, setNewRubrique] = useState('');
  const [jsonText, setJsonText] = useState(sampleJson);
  const [notice, setNotice] = useState<AdminNotice | null>(null);
  const [pendingAction, setPendingAction] = useState<'save' | 'delete' | 'rubrique' | null>(null);
  const [deleteRequested, setDeleteRequested] = useState(false);

  const moduleCount = sortedModules.length;
  const publishedCount = sortedModules.filter((module) => module.status !== 'draft').length;
  const draftCount = moduleCount - publishedCount;
  const courseCount = sortedModules.reduce((total, module) => total + module.courses.length, 0);

  const patchDraft = (patch: Partial<LearningModule>) => {
    setDraft((current) => ({
      ...current,
      ...patch,
      slug: patch.title && !current.slug ? slugify(patch.title) : patch.slug ?? current.slug,
    }));
  };

  const patchTranslation = (lang: 'en' | 'ha', patch: NonNullable<LearningModule['translations']>['en']) => {
    setDraft((current) => ({
      ...current,
      translations: {
        ...current.translations,
        [lang]: {
          ...current.translations?.[lang],
          ...patch,
        },
      },
    }));
  };

  const patchCourse = (courseId: string, patch: Partial<Course>) => {
    setDraft((current) => ({
      ...current,
      courses: current.courses.map((course) =>
        course.id === courseId ? { ...course, ...patch } : course
      ),
    }));
  };

  const patchCourseTranslation = (courseId: string, lang: 'en' | 'ha', patch: NonNullable<Course['translations']>['en']) => {
    setDraft((current) => ({
      ...current,
      courses: current.courses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              translations: {
                ...course.translations,
                [lang]: {
                  ...course.translations?.[lang],
                  ...patch,
                },
              },
            }
          : course
      ),
    }));
  };

  const handleSaveModule = async () => {
    const next = normalizeModuleDraft(draft);
    const issues = validateModuleDraft(next, sortedRubriques, sortedModules);

    if (issues.length > 0) {
      setNotice({ tone: 'error', message: issues.join(' ') });
      return;
    }

    setPendingAction('save');
    setDeleteRequested(false);
    const result = await saveModule(next);
    setPendingAction(null);

    if (!result.ok) {
      setNotice({ tone: 'error', message: result.message });
      return;
    }

    setDraft(next);
    setSelectedModuleId(next.id);
    setNotice({
      tone: 'success',
      message:
        result.persisted === 'supabase'
          ? `Module sauvegarde dans Supabase: ${next.title}`
          : `Module sauvegarde localement: ${next.title}`,
    });
  };

  const handleSelectModule = (module: LearningModule) => {
    setSelectedModuleId(module.id);
    setDraft(module);
    setDeleteRequested(false);
  };

  const handleNewModule = () => {
    const next = createEmptyModule(sortedRubriques[0]?.id);
    setDraft(next);
    setSelectedModuleId(next.id);
    setDeleteRequested(false);
    setNotice({ tone: 'warning', message: 'Nouveau module en brouillon. Completez les champs requis avant de sauvegarder.' });
  };

  const handleRequestRemoveModule = () => {
    const exists = sortedModules.some((module) => module.id === draft.id);
    if (!exists) {
      const next = sortedModules[0] || createEmptyModule(sortedRubriques[0]?.id);
      setDraft(next);
      setSelectedModuleId(next.id);
      setDeleteRequested(false);
      setNotice({ tone: 'warning', message: 'Brouillon non sauvegarde abandonne.' });
      return;
    }

    setDeleteRequested(true);
    setNotice({ tone: 'warning', message: `Confirmez la suppression definitive du module: ${draft.title}` });
  };

  const handleConfirmRemoveModule = async () => {
    setPendingAction('delete');
    const result = await removeModule(draft.id);
    setPendingAction(null);

    if (!result.ok) {
      setNotice({ tone: 'error', message: result.message });
      return;
    }

    const next = sortedModules.find((module) => module.id !== draft.id);
    setDraft(next || createEmptyModule(sortedRubriques[0]?.id));
    setSelectedModuleId(next?.id || '');
    setDeleteRequested(false);
    setNotice({
      tone: 'success',
      message:
        result.persisted === 'supabase'
          ? `Module supprime dans Supabase: ${draft.title}`
          : `Module supprime localement: ${draft.title}`,
    });
  };

  const handleAddCourse = () => {
    setDraft((current) => ({
      ...current,
      courses: [...current.courses, createEmptyCourse(current.courses.length + 1)],
    }));
  };

  const handleRemoveCourse = (courseId: string) => {
    setDraft((current) => ({
      ...current,
      courses: current.courses.filter((course) => course.id !== courseId),
    }));
  };

  const handleCreateRubrique = async () => {
    const name = newRubrique.trim();
    if (!name) {
      setNotice({ tone: 'error', message: 'Le nom de la rubrique est obligatoire.' });
      return;
    }
    if (sortedRubriques.some((rubrique) => rubrique.slug === slugify(name))) {
      setNotice({ tone: 'error', message: 'Cette rubrique existe deja.' });
      return;
    }

    const rubrique: Rubrique = {
      id: `rubrique-${Date.now()}`,
      slug: slugify(name),
      name,
      description: 'Nouvelle rubrique de contenus FuturSkills.',
      icon: '📚',
      color: colors[sortedRubriques.length % colors.length],
      order: sortedRubriques.length + 1,
      status: 'draft',
    };
    setPendingAction('rubrique');
    const result = await saveRubrique(rubrique);
    setPendingAction(null);

    if (!result.ok) {
      setNotice({ tone: 'error', message: result.message });
      return;
    }

    setNewRubrique('');
    setNotice({
      tone: 'success',
      message:
        result.persisted === 'supabase'
          ? `Rubrique creee dans Supabase: ${rubrique.name}`
          : `Rubrique creee localement: ${rubrique.name}`,
    });
  };

  const handleJsonImport = () => {
    const result = importContentJson(jsonText);
    setNotice({ tone: result.ok ? 'success' : 'error', message: result.message });
  };

  const handleFileImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = extensionToType(file.name);
    if (fileType === 'json') {
      const text = await file.text();
      const result = importContentJson(text);
      setNotice({ tone: result.ok ? 'success' : 'error', message: result.message });
      return;
    }

    const record = registerSourceImport(file.name, fileType);
    setNotice({ tone: record.status === 'failed' ? 'error' : 'warning', message: record.message });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-7">
          <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Karatou CMS</p>
          <h1 className="font-playfair text-3xl font-bold text-gray-900 mt-1">Admin contenus</h1>
          <p className="text-sm text-gray-500 mt-2 max-w-2xl">
            Creez des rubriques, modules et lecons sans redeploiement. Cette surface prepare le passage production vers Supabase.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Stockage {contentBackend === 'supabase' ? 'Supabase' : 'local demo'} - {contentSyncStatus}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          {[
            { icon: <Layers3 size={18} />, value: sortedRubriques.length, label: 'Rubriques' },
            { icon: <BookOpen size={18} />, value: moduleCount, label: 'Modules' },
            { icon: <CheckCircle2 size={18} />, value: publishedCount, label: 'Publies' },
            { icon: <Globe2 size={18} />, value: courseCount, label: 'Lecons' },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-blue-sm">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <p className="font-playfair text-2xl font-bold text-gray-900">{item.value}</p>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {notice && (
          <div
            className={`mb-6 flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${noticeStyles[notice.tone]}`}
            role={notice.tone === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            <span className="mt-0.5 shrink-0">{noticeIcon(notice.tone)}</span>
            <span>{notice.message}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-[310px_1fr] gap-6">
          <aside className="space-y-5">
            <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Rubriques</h2>
                <Badge variant="blue">{draftCount} brouillons</Badge>
              </div>
              <div className="space-y-2 mb-4">
                {sortedRubriques.map((rubrique) => (
                  <div key={rubrique.id} className="rounded-xl border border-gray-100 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium text-gray-900">{rubrique.icon} {rubrique.name}</span>
                      <Badge variant={rubrique.status === 'published' ? 'green' : 'gold'}>
                        {rubrique.status === 'published' ? 'Publie' : 'Brouillon'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{rubrique.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={newRubrique}
                  onChange={(event) => setNewRubrique(event.target.value)}
                  placeholder="Nouvelle rubrique"
                  className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
                <Button variant="primary" size="sm" onClick={handleCreateRubrique}>
                  <Plus size={15} />
                  {pendingAction === 'rubrique' ? '...' : ''}
                </Button>
              </div>
            </section>

            <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Modules</h2>
                <Button variant="outline" size="sm" onClick={handleNewModule}>
                  <Plus size={14} /> Nouveau
                </Button>
              </div>
              <div className="space-y-2">
                {sortedModules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => handleSelectModule(module)}
                    className={`w-full rounded-xl border px-3 py-3 text-left transition-colors ${
                      draft.id === module.id ? 'border-blue-300 bg-blue-50' : 'border-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-900">{module.emoji} {module.title}</span>
                      <Badge variant={module.status === 'published' ? 'green' : 'gold'}>
                        {module.status === 'published' ? 'Publie' : 'Brouillon'}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{module.courses.length} lecons - EN {translationCompleteness(module, 'en')}% - HA {translationCompleteness(module, 'ha')}%</p>
                  </button>
                ))}
              </div>
            </section>
          </aside>

          <section className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                  <h2 className="font-playfair text-xl font-bold text-gray-900">Editeur module</h2>
                  <p className="text-sm text-gray-500">FR est la source de verite. EN et HA restent des adaptations.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRequestRemoveModule}
                    disabled={pendingAction !== null}
                  >
                    <Trash2 size={15} /> Supprimer
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleSaveModule}
                    disabled={pendingAction !== null}
                  >
                    <Save size={15} /> {pendingAction === 'save' ? 'Sauvegarde...' : 'Sauvegarder'}
                  </Button>
                </div>
              </div>

              {deleteRequested && (
                <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium text-red-700">
                      Suppression definitive de {draft.title}. Les lecons associees seront aussi supprimees.
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDeleteRequested(false)}
                        disabled={pendingAction !== null}
                      >
                        Annuler
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={handleConfirmRemoveModule}
                        disabled={pendingAction !== null}
                      >
                        {pendingAction === 'delete' ? 'Suppression...' : 'Confirmer'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Titre FR</span>
                  <input
                    value={draft.title}
                    onChange={(event) => patchDraft({ title: event.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Slug</span>
                  <input
                    value={draft.slug}
                    onChange={(event) => patchDraft({ slug: slugify(event.target.value) })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Rubrique</span>
                  <select
                    value={draft.rubriqueId || ''}
                    onChange={(event) => patchDraft({ rubriqueId: event.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  >
                    {sortedRubriques.map((rubrique) => (
                      <option key={rubrique.id} value={rubrique.id}>{rubrique.name}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Statut</span>
                  <select
                    value={draft.status || 'draft'}
                    onChange={(event) => patchDraft({ status: event.target.value as LearningModule['status'] })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publie</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Sous-titre FR</span>
                  <input
                    value={draft.subtitle}
                    onChange={(event) => patchDraft({ subtitle: event.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700">Niveau</span>
                  <input
                    value={draft.level}
                    onChange={(event) => patchDraft({ level: event.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-sm font-medium text-gray-700">Description FR</span>
                  <textarea
                    value={draft.description}
                    onChange={(event) => patchDraft({ description: event.target.value })}
                    className="mt-1.5 h-24 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                  />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-5">
                {(['en', 'ha'] as const).map((lang) => (
                  <div key={lang} className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{lang.toUpperCase()} adaptation</h3>
                      <Badge variant={translationCompleteness(draft, lang) >= 80 ? 'green' : 'gold'}>
                        {translationCompleteness(draft, lang)}%
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <input
                        value={draft.translations?.[lang]?.title || ''}
                        onChange={(event) => patchTranslation(lang, { title: event.target.value })}
                        placeholder={`Titre ${lang.toUpperCase()}`}
                        className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      />
                      <input
                        value={draft.translations?.[lang]?.subtitle || ''}
                        onChange={(event) => patchTranslation(lang, { subtitle: event.target.value })}
                        placeholder={`Sous-titre ${lang.toUpperCase()}`}
                        className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      />
                      <textarea
                        value={draft.translations?.[lang]?.description || ''}
                        onChange={(event) => patchTranslation(lang, { description: event.target.value })}
                        placeholder={`Description ${lang.toUpperCase()}`}
                        className="h-20 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-playfair text-xl font-bold text-gray-900">Lecons du module</h2>
                  <p className="text-sm text-gray-500">Chaque ligne deviendra une lecon editable dans la base.</p>
                </div>
                <Button variant="gold" size="sm" onClick={handleAddCourse}>
                  <Plus size={15} /> Ajouter lecon
                </Button>
              </div>

              <div className="space-y-4">
                {draft.courses.map((course, index) => (
                  <div key={course.id} className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-sm font-semibold text-gray-900">Lecon {index + 1}</p>
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveCourse(course.id)}>
                        <Trash2 size={14} /> Retirer
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-[1fr_120px] gap-3">
                      <input
                        value={course.title}
                        onChange={(event) => patchCourse(course.id, { title: event.target.value })}
                        className="rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      />
                      <input
                        value={course.duration}
                        onChange={(event) => patchCourse(course.id, { duration: event.target.value })}
                        className="rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                      />
                    </div>
                    <textarea
                      value={course.description}
                      onChange={(event) => patchCourse(course.id, { description: event.target.value })}
                      className="mt-3 h-20 w-full rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                    />
                    <div className="grid md:grid-cols-2 gap-3 mt-3">
                      {(['en', 'ha'] as const).map((lang) => (
                        <div key={lang} className="rounded-xl bg-gray-50 p-3">
                          <p className="text-xs font-semibold text-gray-500 mb-2">{lang.toUpperCase()}</p>
                          <input
                            value={course.translations?.[lang]?.title || ''}
                            onChange={(event) => patchCourseTranslation(course.id, lang, { title: event.target.value })}
                            placeholder="Titre"
                            className="mb-2 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
                          />
                          <input
                            value={course.translations?.[lang]?.description || ''}
                            onChange={(event) => patchCourseTranslation(course.id, lang, { description: event.target.value })}
                            placeholder="Description"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {draft.courses.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center">
                    <BookOpen size={24} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Aucune lecon. Ajoutez une premiere lecon pour rendre ce module testable.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FileJson size={18} className="text-blue-600" />
                  <h2 className="font-semibold text-gray-900">Import JSON</h2>
                </div>
                <textarea
                  value={jsonText}
                  onChange={(event) => setJsonText(event.target.value)}
                  className="h-72 w-full rounded-xl border border-gray-200 px-3 py-2 text-xs font-mono outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button variant="primary" size="sm" onClick={handleJsonImport}>
                    <Upload size={15} /> Importer JSON
                  </Button>
                  <label className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-50">
                    <FileJson size={15} /> Fichier JSON/PDF/DOCX
                    <input type="file" accept=".json,.pdf,.docx" className="hidden" onChange={handleFileImport} />
                  </label>
                </div>
              </section>

              <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-blue-sm">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={18} className="text-gold-500" />
                  <h2 className="font-semibold text-gray-900">Sources PDF / DOCX</h2>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-blue-600 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      Les fichiers PDF/DOCX sont acceptes comme sources. En production, l extraction automatique doit passer par une Edge Function Supabase pour creer les blocs de lecon a valider.
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {contentImports.map((record) => (
                    <div key={record.id} className="rounded-xl border border-gray-100 px-3 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-gray-900 truncate">{record.fileName}</span>
                        <Badge variant={record.status === 'imported' ? 'green' : record.status === 'queued' ? 'blue' : 'red'}>
                          {record.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{record.message}</p>
                    </div>
                  ))}
                  {contentImports.length === 0 && (
                    <p className="text-sm text-gray-500">Aucune source importee pour le moment.</p>
                  )}
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
