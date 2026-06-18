import { createClient } from '@supabase/supabase-js';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const rootDir = process.cwd();
const TABLES = {
  rubriques: 'karatou_rubriques',
  modules: 'karatou_modules',
  courses: 'karatou_courses',
  organizations: 'karatou_organizations',
  memberships: 'karatou_org_memberships',
  members: 'karatou_enterprise_members',
  scholarships: 'karatou_scholarships',
};

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
    const rawValue = trimmed.slice(separator + 1).trim();
    if (!key || process.env[key]) continue;

    process.env[key] = rawValue.replace(/^['"]|['"]$/g, '');
  }
}

async function loadEnv() {
  await loadDotEnvFile('.env');
  await loadDotEnvFile('.env.local');
  await loadDotEnvFile('.env.seed');
}

async function loadMockData() {
  const sourcePath = path.join(rootDir, 'src/data/mockData.ts');
  const source = await readFile(sourcePath, 'utf8');
  const sanitized = source.replace(/^import\s+\{[^}]+\}\s+from\s+['"]\.\.\/types['"];\n/, '');
  const compiled = ts.transpileModule(sanitized, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'karatou-seed-'));
  const tempFile = path.join(tempDir, 'mockData.mjs');

  await writeFile(tempFile, compiled);
  try {
    return await import(pathToFileURL(tempFile).href);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

function requireEnv(name, fallbackName) {
  const value = process.env[name] || (fallbackName ? process.env[fallbackName] : undefined);
  if (!value) {
    throw new Error(`Missing ${name}${fallbackName ? ` or ${fallbackName}` : ''}. Copy .env.example to .env.local and fill it.`);
  }
  return value;
}

function createServerClient() {
  const supabaseUrl = requireEnv('SUPABASE_URL', 'VITE_SUPABASE_URL');
  const serviceRoleKey = requireEnv('SUPABASE_SERVICE_ROLE_KEY');

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

function rubriqueToRow(rubrique) {
  return {
    id: rubrique.id,
    slug: rubrique.slug,
    name: rubrique.name,
    description: rubrique.description,
    icon: rubrique.icon,
    color: rubrique.color,
    display_order: rubrique.order || 0,
    status: rubrique.status || 'draft',
  };
}

function moduleToRow(module) {
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
    enrolled: module.enrolled || 0,
    rating: module.rating || 0,
    is_free: module.isFree ?? true,
    display_order: module.order || 0,
    status: module.status || 'draft',
    translations: module.translations || {},
  };
}

function courseToRow(moduleId, course, index) {
  return {
    id: course.id,
    module_id: moduleId,
    title: course.title,
    duration: course.duration || '10 min',
    description: course.description || '',
    display_order: course.order || index + 1,
    status: course.status || 'published',
    translations: course.translations || {},
  };
}

function organizationToRow(org) {
  return {
    id: org.id,
    slug: org.slug,
    name: org.name,
    industry: org.industry,
    country: org.country,
    plan: org.plan,
    seats_total: org.seatsTotal,
    status: org.status || 'active',
  };
}

function membershipToRow(member) {
  return {
    id: `membership-${member.id}`,
    organization_id: member.organizationId,
    email: member.email.trim().toLowerCase(),
    role: member.role,
    status: 'active',
  };
}

function memberToRow(member) {
  return {
    id: member.id,
    organization_id: member.organizationId,
    user_id: member.userId || null,
    name: member.name,
    email: member.email,
    role: member.role,
    progress: member.progress,
    certificates: member.certificates,
    certificate_uid: member.certificateUid || null,
    last_activity: member.lastActivity,
    status: member.status,
  };
}

function scholarshipToRow(scholarship) {
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
    expires_at_date: scholarship.expiresAtDate || '2026-12-31',
  };
}

async function upsertOrThrow(client, table, rows, options) {
  if (rows.length === 0) return [];

  const { data, error } = await client
    .from(table)
    .upsert(rows, options)
    .select();

  if (error) {
    throw new Error(`${table}: ${error.message}`);
  }

  return data || [];
}

async function main() {
  if (process.argv.includes('--dry-run')) {
    const { rubriques, modules, enterpriseData } = await loadMockData();
    const courses = modules.flatMap((module) => module.courses);

    console.log('Seed dry run');
    console.log(`Organization: ${enterpriseData.org.name}`);
    console.log(`Rubriques: ${rubriques.length}`);
    console.log(`Modules: ${modules.length}`);
    console.log(`Courses: ${courses.length}`);
    console.log('Organizations: 1');
    console.log(`Org memberships: ${enterpriseData.members.length}`);
    console.log(`Enterprise members: ${enterpriseData.members.length}`);
    console.log(`Scholarships: ${enterpriseData.scholarships.length}`);
    return;
  }

  await loadEnv();
  const client = createServerClient();
  const { rubriques, modules, enterpriseData } = await loadMockData();

  const rubriqueRows = rubriques.map(rubriqueToRow);
  const moduleRows = modules.map(moduleToRow);
  const courseRows = modules.flatMap((module) =>
    module.courses.map((course, index) => courseToRow(module.id, course, index))
  );
  const organizationRows = [organizationToRow(enterpriseData.org)];
  const membershipRows = enterpriseData.members.map(membershipToRow);
  const memberRows = enterpriseData.members.map(memberToRow);
  const scholarshipRows = enterpriseData.scholarships.map(scholarshipToRow);

  await upsertOrThrow(client, TABLES.rubriques, rubriqueRows, { onConflict: 'id' });
  await upsertOrThrow(client, TABLES.modules, moduleRows, { onConflict: 'id' });
  await upsertOrThrow(client, TABLES.courses, courseRows, { onConflict: 'id' });
  await upsertOrThrow(client, TABLES.organizations, organizationRows, { onConflict: 'id' });
  await upsertOrThrow(client, TABLES.memberships, membershipRows, { onConflict: 'organization_id,email' });
  await upsertOrThrow(client, TABLES.members, memberRows, { onConflict: 'organization_id,email' });
  await upsertOrThrow(client, TABLES.scholarships, scholarshipRows, { onConflict: 'id' });

  const [rubriquesCount, modulesCount, coursesCount, organizationsCount, membershipsCount, membersCount, scholarshipsCount] = await Promise.all([
    client.from(TABLES.rubriques).select('id', { count: 'exact', head: true }),
    client.from(TABLES.modules).select('id', { count: 'exact', head: true }),
    client.from(TABLES.courses).select('id', { count: 'exact', head: true }),
    client.from(TABLES.organizations).select('id', { count: 'exact', head: true }),
    client.from(TABLES.memberships).select('id', { count: 'exact', head: true }),
    client.from(TABLES.members).select('id', { count: 'exact', head: true }),
    client.from(TABLES.scholarships).select('id', { count: 'exact', head: true }),
  ]);

  for (const result of [rubriquesCount, modulesCount, coursesCount, organizationsCount, membershipsCount, membersCount, scholarshipsCount]) {
    if (result.error) throw result.error;
  }

  console.log('Seed complete');
  console.log(`Organization seed source: ${enterpriseData.org.name}`);
  console.log(`Rubriques: ${rubriquesCount.count}`);
  console.log(`Modules: ${modulesCount.count}`);
  console.log(`Courses: ${coursesCount.count}`);
  console.log(`Organizations: ${organizationsCount.count}`);
  console.log(`Org memberships: ${membershipsCount.count}`);
  console.log(`Enterprise members: ${membersCount.count}`);
  console.log(`Scholarships: ${scholarshipsCount.count}`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
