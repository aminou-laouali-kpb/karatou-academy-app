// Server-side attestation signing, revocation and registry search.
// The HMAC secret stays on the server (derived from the service-role key, or
// ATTESTATION_SECRET if set), so signatures cannot be forged from the client.
// Every signed attestation is archived in `karatou_attestations`, which makes
// verification authoritative (see attestation-verify) and revocation possible.
// Platform-admin only — the caller's JWT is re-checked here, so the function is
// deployed with `verify_jwt = false` and does its own authentication.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}

function attestationSecret(): string {
  return Deno.env.get('ATTESTATION_SECRET') || `attestation:${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? 'fallback'}`;
}

async function hmacHex(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function serviceClient() {
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) throw new Error('service configuration unavailable');
  return createClient(url, key, { auth: { persistSession: false } });
}

function normalizedName(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const name = value.normalize('NFC').trim();
  return name && name.length <= 240 ? name : null;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  try {
    const url = Deno.env.get('SUPABASE_URL')!;
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const authHeader = req.headers.get('Authorization') ?? '';

    // Only platform admins may issue attestations.
    const caller = createClient(url, anonKey, { global: { headers: { Authorization: authHeader } }, auth: { persistSession: false } });
    const { data: { user }, error } = await caller.auth.getUser();
    if (error || !user) return json({ error: 'unauthorized' }, 401);
    const role = (user.app_metadata as { role?: string } | null)?.role;
    if (role !== 'platform_admin' && role !== 'admin') return json({ error: 'forbidden: platform admin required' }, 403);

    const body = await req.json().catch(() => ({}));
    const action = typeof body.action === 'string' ? body.action : 'sign';
    const archive = serviceClient();

    if (action === 'search') {
      const rawQuery = typeof body.query === 'string' ? body.query.normalize('NFC').trim().slice(0, 120) : '';
      // PostgREST filters use punctuation as syntax; remove it so a search can
      // never turn into another filter.
      const query = rawQuery.replace(/[,%_()]/g, ' ').trim();
      let request = archive
        .from('karatou_attestations')
        .select('id,recipient_name,issued_at,expires_at,issued_on,status,revoked_at,revocation_reason')
        .order('issued_on', { ascending: false })
        .limit(50);
      if (query) {
        request = request.or(`id.ilike.%${query}%,recipient_name.ilike.%${query}%`);
      }
      const { data, error: archiveError } = await request;
      if (archiveError) return json({ error: 'archive search failed' }, 500);
      return json({ attestations: data || [] }, 200);
    }

    if (action === 'revoke') {
      const id = typeof body.id === 'string' ? body.id.trim().toUpperCase() : '';
      const reason = typeof body.reason === 'string' ? body.reason.normalize('NFC').trim().slice(0, 500) : null;
      if (!/^KA-ATT-\d{4}-[A-F0-9]{10}$/.test(id)) return json({ error: 'invalid attestation id' }, 400);
      const { data, error: archiveError } = await archive
        .from('karatou_attestations')
        .update({
          status: 'revoked',
          revoked_at: new Date().toISOString(),
          revoked_by: user.id,
          revocation_reason: reason || null,
        })
        .eq('id', id)
        .neq('status', 'revoked')
        .select('id,recipient_name,issued_at,expires_at,issued_on,status,revoked_at,revocation_reason')
        .maybeSingle();
      if (archiveError) return json({ error: 'attestation revocation failed' }, 500);
      if (!data) return json({ error: 'attestation not found or already revoked' }, 404);
      return json({ attestation: data }, 200);
    }

    if (action !== 'sign') return json({ error: 'unknown action' }, 400);
    const names: unknown[] = Array.isArray(body.names) ? body.names : [];
    if (names.length === 0 || names.length > 500) return json({ error: 'between 1 and 500 names are required' }, 400);
    const clean = names.map(normalizedName);
    if (clean.some((name) => !name)) return json({ error: 'each name must be a non-empty text of 240 characters or fewer' }, 400);

    const secret = attestationSecret();
    const issuedAt = new Date().toISOString().slice(0, 10);
    const expiry = new Date();
    expiry.setFullYear(expiry.getFullYear() + 1);
    const expiresAt = expiry.toISOString().slice(0, 10);

    const payloads = [];
    for (const name of clean as string[]) {
      const id = `KA-ATT-${issuedAt.slice(0, 4)}-${crypto.randomUUID().replace(/-/g, '').slice(0, 10).toUpperCase()}`;
      const signature = await hmacHex(JSON.stringify({ id, name, issuedAt, expiresAt }), secret);
      payloads.push({ id, name, issuedAt, expiresAt, signature });
    }

    const { error: archiveError } = await archive.from('karatou_attestations').insert(
      payloads.map((payload) => ({
        id: payload.id,
        recipient_name: payload.name,
        issued_at: payload.issuedAt,
        expires_at: payload.expiresAt,
        signature: payload.signature,
        issued_by: user.id,
      }))
    );
    if (archiveError) return json({ error: 'attestation archive failed' }, 500);

    return json({ payloads }, 200);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
