// Server-side attestation signing. The HMAC secret stays on the server (derived
// from the service-role key, or ATTESTATION_SECRET if set), so signatures cannot
// be forged from the client. Platform-admin only.
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
    const names: unknown[] = Array.isArray(body.names) ? body.names : [];
    if (names.length === 0) return json({ error: 'names[] required' }, 400);

    const secret = attestationSecret();
    const issuedAt = new Date().toISOString().slice(0, 10);
    const expiry = new Date();
    expiry.setFullYear(expiry.getFullYear() + 1);
    const expiresAt = expiry.toISOString().slice(0, 10);

    const payloads = [];
    for (const raw of names) {
      const name = String(raw ?? '').trim();
      if (!name) continue;
      const id = `KA-ATT-${issuedAt.slice(0, 4)}-${crypto.randomUUID().replace(/-/g, '').slice(0, 10).toUpperCase()}`;
      const signature = await hmacHex(JSON.stringify({ id, name, issuedAt, expiresAt }), secret);
      payloads.push({ id, name, issuedAt, expiresAt, signature });
    }

    return json({ payloads }, 200);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
