#!/usr/bin/env node
// B1 (fiche app mobile §8.5) : recopie en base le contenu des leçons du
// registre TypeScript, pour que l'app mobile (qui ne lit que Supabase) ait
// les mêmes leçons que le web.
//
//   node scripts/backfill-lesson-content.mjs            # simulation (par défaut)
//   node scripts/backfill-lesson-content.mjs --apply    # écrit en base
//
// Ce qui est écrit, et seulement là où c'est vide :
//   * karatou_courses.lesson_content = { fr, en, ha } depuis
//     src/data/localizedContent.ts (loadAuthoredLessonBundle), uniquement si
//     la colonne est NULL : une leçon déjà éditée dans le studio /admin/lecons
//     n'est JAMAIS écrasée (la mise à jour porte aussi la condition IS NULL) ;
//   * karatou_modules.translations.{en,ha} et karatou_courses.translations.{en,ha}
//     depuis les titres traduits du registre, uniquement pour une langue
//     absente ou vide ; les autres langues déjà présentes sont conservées.
//
// Identifiants : SUPABASE_URL (ou VITE_SUPABASE_URL) et
// SUPABASE_SERVICE_ROLE_KEY, lus dans l'environnement ou dans .env, .env.local,
// .env.seed (jamais en dur). En simulation, VITE_SUPABASE_ANON_KEY suffit
// (lecture seule ; les leçons en brouillon ne sont alors pas visibles).
//
// Ce script est le pendant reproductible du rattrapage ponctuel fait en
// production : relancé aujourd'hui, il ne devrait rien avoir à écrire.
import { createClient } from '@supabase/supabase-js';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const rootDir = process.cwd();
const APPLY = process.argv.includes('--apply');
const LANGS = ['fr', 'en', 'ha'];
const TRANSLATED_LANGS = ['en', 'ha'];
const MAX_LESSON_BYTES = 400_000; // contrainte karatou_courses_lesson_content_size_check

for (const arg of process.argv.slice(2)) {
  if (!['--apply', '--dry-run'].includes(arg)) {
    console.error(`Option inconnue : ${arg}. Options : --dry-run (défaut), --apply.`);
    process.exit(2);
  }
}

async function loadDotEnvFile(fileName) {
  const filePath = path.join(rootDir, fileName);
  if (!existsSync(filePath)) return;
  const text = await readFile(filePath, 'utf8');
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separator = trimmed.indexOf('=');
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    if (!key || process.env[key]) continue;
    process.env[key] = trimmed.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '');
  }
}

function createDbClient() {
  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url) throw new Error('SUPABASE_URL (ou VITE_SUPABASE_URL) manquant.');
  if (APPLY && !serviceKey) throw new Error('--apply exige SUPABASE_SERVICE_ROLE_KEY.');
  const key = serviceKey || anonKey;
  if (!key) throw new Error('SUPABASE_SERVICE_ROLE_KEY (ou, en simulation, VITE_SUPABASE_ANON_KEY) manquant.');
  if (!serviceKey) console.warn('Simulation avec la clé anon : les leçons en brouillon ne sont pas visibles.');
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

// Le registre est du TypeScript avec des imports dynamiques : on le charge
// par Vite (comme les tests), sans démarrer de serveur HTTP.
async function loadRegistry() {
  const vite = await createServer({
    root: rootDir,
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    const registry = await vite.ssrLoadModule('/src/data/localizedContent.ts');
    const schema = await vite.ssrLoadModule('/src/data/lessonContentSchema.ts');
    const bundles = new Map();
    for (const key of registry.authoredLessonKeys) {
      bundles.set(key, await registry.loadAuthoredLessonBundle(key));
    }
    return { bundles, localizeModule: registry.localizeModule, parseLessonContent: schema.parseLessonContent };
  } finally {
    await vite.close();
  }
}

const isFilled = (value) =>
  value && typeof value === 'object' && Object.values(value).some((v) => typeof v === 'string' && v.trim() !== '');

function pickStrings(source, fields) {
  const result = {};
  for (const field of fields) {
    const value = source?.[field];
    if (typeof value === 'string' && value.trim() !== '') result[field] = value;
  }
  return result;
}

async function main() {
  await loadDotEnvFile('.env');
  await loadDotEnvFile('.env.local');
  await loadDotEnvFile('.env.seed');

  console.log(APPLY ? '== MODE ÉCRITURE (--apply) ==' : '== SIMULATION (aucune écriture ; --apply pour écrire) ==');
  const { bundles, localizeModule, parseLessonContent } = await loadRegistry();
  console.log(`Registre TS : ${bundles.size} leçons.`);

  const db = createDbClient();
  const { data: modules, error: modulesError } = await db
    .from('karatou_modules')
    .select('id, slug, title, status, translations');
  if (modulesError) throw new Error(`Lecture des modules : ${modulesError.message}`);
  const { data: courses, error: coursesError } = await db
    .from('karatou_courses')
    .select('id, module_id, title, status, translations');
  if (coursesError) throw new Error(`Lecture des leçons : ${coursesError.message}`);
  // Seules les leçons dont la colonne ENTIÈRE est NULL sont candidates.
  const { data: emptyRows, error: emptyError } = await db
    .from('karatou_courses')
    .select('id')
    .is('lesson_content', null);
  if (emptyError) throw new Error(`Lecture des leçons vides : ${emptyError.message}`);
  const emptyIds = new Set(emptyRows.map((row) => row.id));

  const moduleBySlug = new Map(modules.map((m) => [m.slug, m]));
  const plan = { lessons: [], moduleTranslations: [], courseTranslations: [] };
  const report = { alreadyFilled: 0, missingInDb: [], invalid: [] };

  // ---- 1. Corps des leçons ------------------------------------------------
  for (const [key, bundle] of bundles) {
    const [slug, courseId] = key.split('/');
    const module = moduleBySlug.get(slug);
    const course = module && courses.find((c) => c.id === courseId && c.module_id === module.id);
    if (!course) {
      report.missingInDb.push(key);
      continue;
    }
    if (!emptyIds.has(course.id)) {
      report.alreadyFilled += 1;
      continue;
    }
    // Même filtre que le lecteur web : un champ mal formé ferait échouer la leçon.
    const payload = {};
    for (const lang of LANGS) {
      const parsed = bundle?.[lang] ? parseLessonContent(bundle[lang]) : null;
      if (parsed) payload[lang] = parsed;
    }
    const bytes = Buffer.byteLength(JSON.stringify(payload));
    if (!payload.fr || bytes > MAX_LESSON_BYTES) {
      report.invalid.push(`${key} (${!payload.fr ? 'pas de FR valide' : `${bytes} octets`})`);
      continue;
    }
    plan.lessons.push({ key, courseId: course.id, payload, langs: Object.keys(payload), bytes });
  }

  // ---- 2. Traductions des modules et des leçons ------------------------------
  for (const module of modules) {
    const existing = module.translations && typeof module.translations === 'object' ? module.translations : {};
    const moduleCourses = courses.filter((c) => c.module_id === module.id);
    const probe = {
      id: module.id,
      slug: module.slug,
      title: '',
      subtitle: '',
      description: '',
      level: '',
      translations: {},
      courses: moduleCourses.map((c) => ({ id: c.id, title: '', description: '', translations: {} })),
    };
    const additions = {};
    const courseAdditions = new Map();
    for (const lang of TRANSLATED_LANGS) {
      const copy = localizeModule(probe, lang);
      if (!isFilled(existing[lang])) {
        const fields = pickStrings(copy, ['title', 'subtitle', 'description', 'level']);
        if (fields.title) additions[lang] = fields;
      }
      for (const courseCopy of copy.courses) {
        const course = moduleCourses.find((c) => c.id === courseCopy.id);
        const courseExisting = course.translations && typeof course.translations === 'object' ? course.translations : {};
        if (isFilled(courseExisting[lang])) continue;
        const fields = pickStrings(courseCopy, ['title', 'description']);
        if (!fields.title) continue;
        const entry = courseAdditions.get(course.id) ?? { course, existing: courseExisting, additions: {} };
        entry.additions[lang] = fields;
        courseAdditions.set(course.id, entry);
      }
    }
    if (Object.keys(additions).length > 0) {
      plan.moduleTranslations.push({ module, merged: { ...existing, ...additions }, langs: Object.keys(additions) });
    }
    for (const entry of courseAdditions.values()) {
      plan.courseTranslations.push({
        module,
        course: entry.course,
        merged: { ...entry.existing, ...entry.additions },
        langs: Object.keys(entry.additions),
      });
    }
  }

  // ---- Rapport ------------------------------------------------------------
  console.log(`\nLeçons déjà remplies en base : ${report.alreadyFilled}`);
  if (report.missingInDb.length) console.log(`Leçons du registre absentes de la base (ignorées) : ${report.missingInDb.join(', ')}`);
  if (report.invalid.length) console.log(`Leçons ignorées (contenu invalide) : ${report.invalid.join(', ')}`);
  console.log(`\nlesson_content à écrire : ${plan.lessons.length}`);
  for (const item of plan.lessons) console.log(`  ${item.key}  [${item.langs.join(', ')}]  ${(item.bytes / 1024).toFixed(1)} ko`);
  console.log(`translations de modules à compléter : ${plan.moduleTranslations.length}`);
  for (const item of plan.moduleTranslations) console.log(`  ${item.module.slug}  + [${item.langs.join(', ')}]`);
  console.log(`translations de leçons à compléter : ${plan.courseTranslations.length}`);
  for (const item of plan.courseTranslations) console.log(`  ${item.module.slug}/${item.course.id}  + [${item.langs.join(', ')}]`);

  if (!APPLY) {
    console.log('\nSimulation terminée : rien n\'a été écrit.');
    return;
  }

  // ---- Écriture -----------------------------------------------------------
  let written = 0;
  for (const item of plan.lessons) {
    const { data, error } = await db
      .from('karatou_courses')
      .update({ lesson_content: item.payload })
      .eq('id', item.courseId)
      .is('lesson_content', null) // jamais d'écrasement, même si quelqu'un vient d'éditer
      .select('id');
    if (error) throw new Error(`${item.key} : ${error.message}`);
    if (data.length === 0) console.log(`  ${item.key} : rempli entre-temps, laissé tel quel`);
    else written += 1;
  }
  for (const item of plan.moduleTranslations) {
    const { error } = await db.from('karatou_modules').update({ translations: item.merged }).eq('id', item.module.id);
    if (error) throw new Error(`module ${item.module.slug} : ${error.message}`);
  }
  for (const item of plan.courseTranslations) {
    const { error } = await db.from('karatou_courses').update({ translations: item.merged }).eq('id', item.course.id);
    if (error) throw new Error(`leçon ${item.course.id} : ${error.message}`);
  }
  console.log(`\nÉcrit : ${written} leçon(s), ${plan.moduleTranslations.length} module(s), ${plan.courseTranslations.length} traduction(s) de leçon.`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
