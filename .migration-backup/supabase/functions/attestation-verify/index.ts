// Public attestation verification. Recomputes the HMAC with the server-only
// secret and reports authentic / expired / tampered. No privileged action.
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
    const body = await req.json().catch(() => ({}));
    const p = body.payload;
    if (!p || typeof p !== 'object' || !p.id || !p.signature) return json({ status: 'invalid' }, 200);

    const expected = await hmacHex(
      JSON.stringify({ id: p.id, name: p.name, issuedAt: p.issuedAt, expiresAt: p.expiresAt }),
      attestationSecret()
    );
    if (expected !== p.signature) return json({ status: 'invalid' }, 200);

    const expired = new Date(`${p.expiresAt}T23:59:59`).getTime() < Date.now();
    return json({ status: expired ? 'expired' : 'valid', payload: p }, 200);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
