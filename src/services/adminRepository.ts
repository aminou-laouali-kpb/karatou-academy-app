import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

export interface ProvisionEnterpriseAdminInput {
  email: string;
  password: string;
  name: string;
  orgId: string;
}

export interface ProvisionResult {
  ok: boolean;
  message: string;
  updated?: boolean;
}

// Calls the admin-provision-enterprise-admin Edge Function. The function holds
// the service-role key and re-checks that the caller is a platform admin; the
// logged-in user's JWT is attached automatically by supabase-js.
export async function provisionEnterpriseAdmin(
  input: ProvisionEnterpriseAdminInput
): Promise<ProvisionResult> {
  if (!isSupabaseConfigured || !supabase) {
    return { ok: false, message: 'Supabase est requis pour creer un compte reel.' };
  }

  const { data, error } = await supabase.functions.invoke('admin-provision-enterprise-admin', {
    body: input,
  });

  if (error) {
    let message = error.message;
    const context = (error as { context?: Response }).context;
    if (context && typeof context.json === 'function') {
      try {
        const payload = await context.json();
        if (payload?.error) message = String(payload.error);
      } catch {
        // keep the original error message
      }
    }
    return { ok: false, message };
  }

  const payload = data as { ok?: boolean; error?: string; email?: string; orgName?: string; updated?: boolean };
  if (!payload?.ok) {
    return { ok: false, message: payload?.error || 'Creation impossible.' };
  }

  return { ok: true, updated: payload.updated, message: `${payload.email} - ${payload.orgName}` };
}
