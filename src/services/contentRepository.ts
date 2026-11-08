import { ContentImportRecord, Course, LearningModule, Rubrique } from '../types';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const TABLES = {
  rubriques: 'karatou_rubriques',
  modules: 'karatou_modules',
  courses: 'karatou_courses',
  contentImports: 'karatou_content_imports',
};

type DbStatus = 'draft' | 'published';

interface RubriqueRow {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  display_order: number;
  status: DbStatus;
}

interface ModuleRow {
  id: string;
  rubrique_id: string | null;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  color: string;
  duration: string;
  level: string;
  enrolled: number;
  rating: number;
  is_free: boolean;
  display_order: number;
  status: DbStatus;
  translations: LearningModule['translations'];
  intro_video?: LearningModule['introVideo'] | null;
}

interface CourseRow {
  id: string;
  module_id: string;
  title: string;
  duration: string;
  description: string;
  display_order: number;
  status: DbStatus;
  translations: Course['translations'];
}

interface ContentImportRow {
  id: string;
  file_name: string;
  file_type: ContentImportRecord['fileType'];
  status: ContentImportRecord['status'];
  message: string;
  created_at: string;
}

export interface ContentSnapshot {
  rubriques: Rubrique[];
  modules: LearningModule[];
  contentImports: ContentImportRecord[];
}

export function getContentBackend(): 'local' | 'supabase' {
  return isSupabaseConfigured ? 'supabase' : 'local';
}

function requireClient() {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  return supabase;
}

// True when the error means the content schema/RLS isn't ready yet (missing
// table or permission denied), so callers can fall back to seeded content
// instead of surfacing a raw error.
function isSchemaPendingError(error: { code?: string; message?: string } | null): boolean {
  if (!error) return false;
  if (error.code === '42P01' || error.code === '42501') return true;
  return /relation .* does not exist|permission denied/i.test(error.message || '');
}

function mapRubrique(row: RubriqueRow): Rubrique {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    icon: row.icon,
    color: row.color,
    order: row.display_order,
    status: row.status,
  };
}

function mapModule(row: ModuleRow, courses: Course[]): LearningModule {
  return {
    id: row.id,
    rubriqueId: row.rubrique_id || undefined,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    description: row.description,
    emoji: row.emoji,
    color: row.color,
    lessons: courses.length,
    duration: row.duration,
    level: row.level,
    enrolled: row.enrolled,
    rating: row.rating,
    progress: 0,
    certified: false,
    isFree: row.is_free,
    order: row.display_order,
    status: row.status,
    translations: row.translations || {},
    introVideo: row.intro_video || {},
    courses,
  };
}

function mapCourse(row: CourseRow): Course {
  return {
    id: row.id,
    title: row.title,
    duration: row.duration,
    description: row.description,
    order: row.display_order,
    status: row.status,
    translations: row.translations || {},
  };
}

function mapImport(row: ContentImportRow): ContentImportRecord {
  return {
    id: row.id,
    fileName: row.file_name,
    fileType: row.file_type,
    status: row.status,
    message: row.message,
    createdAt: row.created_at,
  };
}

function rubriqueToRow(rubrique: Rubrique) {
  return {
    id: rubrique.id,
    slug: rubrique.slug,
    name: rubrique.name,
    description: rubrique.description,
    icon: rubrique.icon,
    color: rubrique.color,
    display_order: rubrique.order,
    status: rubrique.status,
  };
}

function moduleToRow(module: LearningModule) {
  return {
    id: module.id,
    rubrique_id: module.rubriqueId || null,
    slug: module.slug,
    title: module.title,
    subtitle: module.subtitle,
    description: module.description,
    emoji: module.emoji,
    color: module.color,
    duration: module.duration,
    level: module.level,
    enrolled: module.enrolled,
    rating: module.rating,
    is_free: module.isFree,
    display_order: module.order || 0,
    status: module.status || 'draft',
    translations: module.translations || {},
    // Envoyé seulement s'il a été renseigné : une ligne déjà en base garde sa vidéo,
    // et l'enregistrement fonctionne même avant la migration intro_video.
    ...(module.introVideo && Object.keys(module.introVideo).length > 0
      ? { intro_video: module.introVideo }
      : {}),
  };
}

function courseToRow(moduleId: string, course: Course) {
  return {
    id: course.id,
    module_id: moduleId,
    title: course.title,
    duration: course.duration,
    description: course.description,
    display_order: course.order || 0,
    status: course.status || 'published',
    translations: course.translations || {},
  };
}

function importToRow(record: ContentImportRecord) {
  return {
    id: record.id,
    file_name: record.fileName,
    file_type: record.fileType,
    status: record.status,
    message: record.message,
  };
}

export async function loadContentSnapshot(): Promise<ContentSnapshot | null> {
  if (!isSupabaseConfigured) {
    return null;
  }

  const client = requireClient();
  const [rubriquesResult, modulesResult, coursesResult, importsResult] = await Promise.all([
    client.from(TABLES.rubriques).select('*').order('display_order', { ascending: true }),
    client.from(TABLES.modules).select('*').order('display_order', { ascending: true }),
    client.from(TABLES.courses).select('*').order('display_order', { ascending: true }),
    client.from(TABLES.contentImports).select('*').order('created_at', { ascending: false }).limit(20),
  ]);

  // If the content schema/RLS isn't applied yet, fall back to seeded content
  // (return null) rather than throwing a raw error to the UI.
  if (rubriquesResult.error) {
    if (isSchemaPendingError(rubriquesResult.error)) return null;
    throw rubriquesResult.error;
  }
  if (modulesResult.error) {
    if (isSchemaPendingError(modulesResult.error)) return null;
    throw modulesResult.error;
  }
  if (coursesResult.error) {
    if (isSchemaPendingError(coursesResult.error)) return null;
    throw coursesResult.error;
  }
  const contentImports = importsResult.error
    ? []
    : ((importsResult.data || []) as ContentImportRow[]).map(mapImport);

  const coursesByModule = new Map<string, Course[]>();
  ((coursesResult.data || []) as CourseRow[]).forEach((course) => {
    const list = coursesByModule.get(course.module_id) || [];
    list.push(mapCourse(course));
    coursesByModule.set(course.module_id, list);
  });

  return {
    rubriques: ((rubriquesResult.data || []) as RubriqueRow[]).map(mapRubrique),
    modules: ((modulesResult.data || []) as ModuleRow[]).map((module) =>
      mapModule(module, coursesByModule.get(module.id) || [])
    ),
    contentImports,
  };
}

export async function saveRubriqueRecord(rubrique: Rubrique) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.rubriques)
    .upsert(rubriqueToRow(rubrique), { onConflict: 'id' });

  if (error) throw error;
}

export async function saveModuleRecord(module: LearningModule) {
  if (!isSupabaseConfigured) return;

  const client = requireClient();
  const { error: moduleError } = await client
    .from(TABLES.modules)
    .upsert(moduleToRow(module), { onConflict: 'id' });

  if (moduleError) throw moduleError;

  if (module.courses.length > 0) {
    const { error: courseError } = await client
      .from(TABLES.courses)
      .upsert(module.courses.map((course) => courseToRow(module.id, course)), { onConflict: 'id' });

    if (courseError) throw courseError;
  }

  const courseIds = module.courses.map((course) => course.id);
  let deleteQuery = client.from(TABLES.courses).delete().eq('module_id', module.id);
  if (courseIds.length > 0) {
    deleteQuery = deleteQuery.not('id', 'in', `(${courseIds.map((id) => `"${id}"`).join(',')})`);
  }
  const { error: deleteError } = await deleteQuery;
  if (deleteError) throw deleteError;
}

export async function removeModuleRecord(moduleId: string) {
  if (!isSupabaseConfigured) return;

  const client = requireClient();
  // Delete the module's courses first to avoid orphaned rows (in case the FK
  // has no ON DELETE CASCADE).
  const { error: courseError } = await client.from(TABLES.courses).delete().eq('module_id', moduleId);
  if (courseError) throw courseError;

  const { error } = await client.from(TABLES.modules).delete().eq('id', moduleId);
  if (error) throw error;
}

export async function saveImportRecord(record: ContentImportRecord) {
  if (!isSupabaseConfigured) return;

  const { error } = await requireClient()
    .from(TABLES.contentImports)
    .upsert(importToRow(record), { onConflict: 'id' });

  if (error) throw error;
}
