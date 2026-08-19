// Public attestation verification. Recomputes the HMAC and requires an
// authoritative archive entry, so revoked or never-issued documents cannot pass.
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

    const expected = await hmacHex(
      JSON.stringify({ id: p.id, name: p.name, issuedAt: p.issuedAt, expiresAt: p.expiresAt }),
      attestationSecret()
    );
    if (expected !== p.signature) return json({ status: 'invalid' }, 200);

    const { data: archived, error: archiveError } = await archiveClient()
      .from('karatou_attestations')
      .select('id,recipient_name,issued_at,expires_at,signature,status')
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
