#!/usr/bin/env node

/**
 * Live smoke test for the Supabase attestation archive.
 *
 * This intentionally writes one technical record and revokes it before
 * exiting. Run it after deploying the archive migration and the
 * attestation-sign / attestation-verify Edge Functions.
 */
if (!process.argv.includes('--live')) {
  console.error('Refusing to write to the attestation registry without --live.');
  process.exit(1);
}

const required = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
  'KARATOU_ADMIN_EMAIL',
  'KARATOU_ADMIN_PASSWORD',
];

const missing = required.filter((key) => !process.env[key]?.trim());
if (missing.length > 0) {
  console.error(`Missing required runtime configuration: ${missing.join(', ')}.`);
  process.exit(1);
}

const baseUrl = process.env.VITE_SUPABASE_URL.replace(/\/+$/, '');
const anonKey = process.env.VITE_SUPABASE_ANON_KEY;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function requestJson(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  let data = null;
  try {
    data = await response.json();
  } catch {
    // Status-based error below is enough; never print an untrusted response.
  }

  if (!response.ok) throw new Error(`${path} returned HTTP ${response.status}.`);
  return data;
}

async function invokeFunction(name, body, accessToken) {
  return requestJson(`/functions/v1/${name}`, {
    method: 'POST',
    headers: {
      apikey: anonKey,
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

try {
  const session = await requestJson('/auth/v1/token?grant_type=password', {
    method: 'POST',
    headers: { apikey: anonKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: process.env.KARATOU_ADMIN_EMAIL,
      password: process.env.KARATOU_ADMIN_PASSWORD,
    }),
  });
  const accessToken = session?.access_token;
  assert(typeof accessToken === 'string' && accessToken.length > 0, 'Admin authentication did not return a session.');

  const name = `Contrôle technique du registre ${new Date().toISOString()}`;
  const issued = await invokeFunction('attestation-sign', { names: [name] }, accessToken);
  const payload = issued?.payloads?.[0];
  assert(
    payload
      && /^KA-ATT-\d{4}-[A-F0-9]{10}$/.test(payload.id)
      && typeof payload.signature === 'string'
      && /^[a-f0-9]{64}$/.test(payload.signature),
    'Issuance did not return an archived attestation payload.'
  );

  const search = await invokeFunction('attestation-sign', { action: 'search', query: payload.id }, accessToken);
  assert(
    Array.isArray(search?.attestations)
      && search.attestations.some((record) => record.id === payload.id && record.status === 'active'),
    'The issued attestation was not found as active in the register.'
  );

  const beforeRevocation = await invokeFunction('attestation-verify', { payload });
  assert(beforeRevocation?.status === 'valid', 'Public verification did not accept the issued attestation.');

  const tampered = await invokeFunction('attestation-verify', {
    payload: { ...payload, name: `${payload.name} altéré` },
  });
  assert(tampered?.status === 'invalid', 'A tampered attestation was not rejected.');

  const revoked = await invokeFunction(
    'attestation-sign',
    { action: 'revoke', id: payload.id, reason: 'Contrôle technique du registre' },
    accessToken
  );
  assert(revoked?.attestation?.status === 'revoked', 'The registry did not revoke the issued attestation.');

  const afterRevocation = await invokeFunction('attestation-verify', { payload });
  assert(afterRevocation?.status === 'revoked', 'Public verification did not report the revocation.');

  console.log('Live attestation registry validation passed: issued, found, rejected when altered, revoked, and publicly verified.');
} catch (error) {
  console.error(`Live attestation registry validation failed: ${error instanceof Error ? error.message : 'unexpected error'}`);
  process.exit(1);
}