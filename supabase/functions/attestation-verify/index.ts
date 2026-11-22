// Public attestation verification: current certificates use HMAC + archive;
// historical certificates use an exact match in a reviewed official export.
// Deployed with `verify_jwt = false`: verification must work for anyone who
// scans a QR code, and the function performs no privileged action.
//
// Source synchronisée avec la version déployée en production (v7, 23/09/2026).
// Déployer : supabase functions deploy attestation-verify --no-verify-jwt
import { createClient } from 'jsr:@supabase/supabase-js@2';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}

async function hmacHex(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function archiveClient() {
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) throw new Error('service configuration unavailable');
  return createClient(url, key, { auth: { persistSession: false } });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  try {
    const body = await req.json().catch(() => ({}));
    const p = body.payload;
    if (
      !p || typeof p !== 'object' ||
      typeof p.id !== 'string' || typeof p.name !== 'string' ||
      typeof p.issuedAt !== 'string' || typeof p.expiresAt !== 'string' ||
      typeof p.signature !== 'string'
    ) return json({ status: 'invalid' }, 200);

    const isLegacyId = /^KA-ATT-\d{4}-[A-F0-9]{12}$/.test(p.id);
    if (isLegacyId) {
      const { data: historical, error: archiveError } = await archiveClient()
        .from('karatou_legacy_attestations')
        .select('id,recipient_name,issued_at,expires_at,signature,status')
        .eq('id', p.id)
        .maybeSingle();
      if (archiveError) return json({ error: 'historical archive unavailable' }, 500);
      if (!historical) return json({ status: 'unregistered' }, 200);
      if (
        historical.recipient_name !== p.name ||
        historical.issued_at !== p.issuedAt ||
        historical.expires_at !== p.expiresAt ||
        historical.signature !== p.signature
      ) return json({ status: 'invalid' }, 200);
      const payload = {
        id: historical.id,
        name: historical.recipient_name,
        issuedAt: historical.issued_at,
        expiresAt: historical.expires_at,
        signature: historical.signature,
      };
      if (historical.status === 'revoked') return json({ status: 'revoked', payload, legacy: true }, 200);
      const expired = new Date(`${payload.expiresAt}T23:59:59`).getTime() < Date.now();
      return json({ status: expired ? 'expired' : 'valid', payload, legacy: true }, 200);
    }
    const { data: archived, error: archiveError } = await archiveClient()
      .from('karatou_attestations')
      .select('id,recipient_name,issued_at,expires_at,signature,status,signing_key_id')
      .eq('id', p.id)
      .maybeSingle();
    if (archiveError) return json({ error: 'attestation archive unavailable' }, 500);
    if (
      !archived ||
      archived.recipient_name !== p.name ||
      archived.issued_at !== p.issuedAt ||
      archived.expires_at !== p.expiresAt ||
      archived.signature !== p.signature
    ) return json({ status: 'invalid' }, 200);

    // Earlier server-signed QR codes have already been authoritatively archived.
    // Requiring their original HMAC key here would invalidate issued QR codes
    // after a service-role rotation. Only exact archived matches are accepted.
    if (archived.signing_key_id === 'hmac-v2') {
      const secret = Deno.env.get('ATTESTATION_SIGNING_KEY_V2');
      if (!secret) return json({ error: 'v2 verification key unavailable' }, 503);
      const message = JSON.stringify({ id: p.id, name: p.name, issuedAt: p.issuedAt, expiresAt: p.expiresAt });
      if (await hmacHex(message, secret) !== p.signature) return json({ status: 'invalid' }, 200);
    } else if (archived.signing_key_id !== 'archive-v1') {
      return json({ error: 'unsupported signing key version' }, 503);
    }

    const payload = {
      id: archived.id,
      name: archived.recipient_name,
      issuedAt: archived.issued_at,
      expiresAt: archived.expires_at,
      signature: archived.signature,
    };
    if (archived.status === 'revoked') return json({ status: 'revoked', payload }, 200);
    const expired = new Date(`${payload.expiresAt}T23:59:59`).getTime() < Date.now();
    return json({ status: expired ? 'expired' : 'valid', payload }, 200);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
