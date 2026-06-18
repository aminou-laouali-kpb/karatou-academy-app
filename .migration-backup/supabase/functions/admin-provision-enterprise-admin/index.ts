// Provision an enterprise-admin Auth user from the platform-admin UI.
// The service-role key stays server-side here; the function verifies the caller
// is a platform admin before doing any privileged work.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405);

  try {
    const url = Deno.env.get('SUPABASE_URL')!;
    const anonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const authHeader = req.headers.get('Authorization') ?? '';

    // 1) Verify the caller is a platform admin (uses their JWT).
    const caller = createClient(url, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const { data: { user }, error: userErr } = await caller.auth.getUser();
    if (userErr || !user) return json({ error: 'unauthorized' }, 401);
    const role = (user.app_metadata as { role?: string } | null)?.role;
    if (role !== 'platform_admin' && role !== 'admin') return json({ error: 'forbidden: platform admin required' }, 403);

    // 2) Validate input.
    const body = await req.json().catch(() => ({}));
    const email = String(body.email ?? '').trim().toLowerCase();
    const password = String(body.password ?? '');
    const name = String(body.name ?? '').trim() || 'Enterprise Admin';
    const orgId = String(body.orgId ?? '').trim();
    if (!email || !password || !orgId) return json({ error: 'email, password and orgId are required' }, 400);
    if (password.length < 8) return json({ error: 'password must be at least 8 characters' }, 400);

    const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

    // 3) Organization must exist.
    const { data: org, error: orgErr } = await admin
      .from('karatou_organizations').select('id,name').eq('id', orgId).maybeSingle();
    if (orgErr) throw orgErr;
    if (!org) return json({ error: 'organization not found' }, 404);

    // 4) Find or create the Auth user.
    let existing: { id: string; app_metadata: Record<string, unknown> } | null = null;
    let page = 1;
    while (page <= 20) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage: 1000 });
      if (error) throw error;
      const found = data.users.find((u) => u.email?.toLowerCase() === email);
      if (found) { existing = found as typeof existing; break; }
      if (data.users.length < 1000) break;
      page += 1;
    }

    const result = existing
      ? await admin.auth.admin.updateUserById(existing.id, {
          password, email_confirm: true,
          user_metadata: { full_name: name, country: 'NE' },
          app_metadata: { ...(existing.app_metadata ?? {}), role: 'enterprise_admin' },
        })
      : await admin.auth.admin.createUser({
          email, password, email_confirm: true,
          user_metadata: { full_name: name, country: 'NE' },
          app_metadata: { role: 'enterprise_admin' },
        });
    if (result.error || !result.data.user) throw result.error ?? new Error('user not created');
    const newUser = result.data.user;

    // 5) Profile + org membership + enterprise member.
    const upserts = await Promise.all([
      admin.from('profiles').upsert(
        { id: newUser.id, full_name: name, role: 'enterprise_admin', country: 'NE' },
        { onConflict: 'id' }
      ),
      admin.from('karatou_org_memberships').upsert(
        { id: `membership-${newUser.id}`, organization_id: orgId, email, role: 'enterprise_admin', status: 'active' },
        { onConflict: 'organization_id,email' }
      ),
      admin.from('karatou_enterprise_members').upsert(
        {
          id: `member-${newUser.id}`, organization_id: orgId, user_id: newUser.id, name, email,
          role: 'enterprise_admin', progress: 0, certificates: 0, last_activity: 'Compte cree', status: 'not_started',
        },
        { onConflict: 'organization_id,email' }
      ),
    ]);
    for (const r of upserts) if (r.error) throw r.error;

    return json({ ok: true, userId: newUser.id, email, orgId, orgName: org.name, updated: Boolean(existing) }, 200);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : 'unexpected error' }, 500);
  }
});
