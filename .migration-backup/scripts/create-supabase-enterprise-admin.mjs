import { createClient } from '@supabase/supabase-js';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();

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

async function findUserByEmail(client, email) {
  const normalized = email.toLowerCase();
  let page = 1;

  while (page <= 20) {
    const { data, error } = await client.auth.admin.listUsers({ page, perPage: 1000 });
    if (error) throw error;

    const user = data.users.find((candidate) => candidate.email?.toLowerCase() === normalized);
    if (user) return user;
    if (data.users.length < 1000) return null;

    page += 1;
  }

  return null;
}

async function main() {
  await loadEnv();
  const client = createServerClient();
  const email = requireEnv('KARATOU_ENTERPRISE_EMAIL').toLowerCase();
  const password = requireEnv('KARATOU_ENTERPRISE_PASSWORD');
  const orgId = requireEnv('KARATOU_ENTERPRISE_ORG_ID');
  const name = process.env.KARATOU_ENTERPRISE_NAME || 'Karatou Enterprise Admin';

  // The organization must already exist (seeded by `npm run seed:content`).
  const { data: org, error: orgError } = await client
    .from('karatou_organizations')
    .select('id,name')
    .eq('id', orgId)
    .maybeSingle();
  if (orgError) throw orgError;
  if (!org) {
    throw new Error(`Organization ${orgId} not found. Run "npm run seed:content" first or pass a valid KARATOU_ENTERPRISE_ORG_ID.`);
  }

  const existing = await findUserByEmail(client, email);
  const authResult = existing
    ? await client.auth.admin.updateUserById(existing.id, {
        password,
        email_confirm: true,
        user_metadata: { full_name: name, country: 'NE' },
        app_metadata: { ...(existing.app_metadata || {}), role: 'enterprise_admin' },
      })
    : await client.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { full_name: name, country: 'NE' },
        app_metadata: { role: 'enterprise_admin' },
      });

  if (authResult.error || !authResult.data.user) {
    throw authResult.error || new Error('Enterprise admin user was not returned by Supabase.');
  }

  const user = authResult.data.user;

  const { error: profileError } = await client
    .from('profiles')
    .upsert({ id: user.id, full_name: name, role: 'enterprise_admin', country: 'NE' }, { onConflict: 'id' });
  if (profileError) throw profileError;

  const { error: membershipError } = await client
    .from('karatou_org_memberships')
    .upsert(
      { id: `membership-${user.id}`, organization_id: orgId, email, role: 'enterprise_admin', status: 'active' },
      { onConflict: 'organization_id,email' }
    );
  if (membershipError) throw membershipError;

  const { error: memberError } = await client
    .from('karatou_enterprise_members')
    .upsert(
      {
        id: `member-${user.id}`,
        organization_id: orgId,
        user_id: user.id,
        name,
        email,
        role: 'enterprise_admin',
        progress: 0,
        certificates: 0,
        last_activity: 'Compte cree',
        status: 'not_started',
      },
      { onConflict: 'organization_id,email' }
    );
  if (memberError) throw memberError;

  console.log(existing ? 'Enterprise admin updated' : 'Enterprise admin created');
  console.log(`Email: ${email}`);
  console.log(`User ID: ${user.id}`);
  console.log(`Organization: ${org.name} (${orgId})`);
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
