// B5 (fiche app mobile §8.4) : suppression de son propre compte depuis l'app.
// Exigence Apple App Store et Google Play.
//
// POST /functions/v1/delete-account
//   Authorization: Bearer <JWT de l'apprenant>
//   Body: { "confirm": "DELETE" }
//
// La fonction vérifie le JWT de l'appelant, puis supprime SON utilisateur Auth
// (jamais un autre : l'identifiant vient du jeton, pas du corps). La clé
// service est lue dans l'environnement de la fonction (secret fourni par
// Supabase), jamais en dur. La suppression cascade sur profiles et sur toutes
// les tables karatou_* liées à auth.users (progression, certificats, XP,
// badges, ligues, révisions…).
//
// Réponses : 200 { deleted: true } ; 400 confirmation manquante ; 401 jeton
// absent ou invalide ; 403 compte administrateur ; 405 méthode ; 409 compte
// encore référencé (créateur d'organisation, émetteur d'attestations) ; 500.
import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return json({ error: 'method_not_allowed', message: 'Use POST.' }, 405);

  const url = Deno.env.get('SUPABASE_URL');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !anonKey || !serviceKey) {
    console.error('delete-account: missing SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY');
    return json({ error: 'server_misconfigured', message: 'Account deletion is temporarily unavailable.' }, 500);
  }

  const authHeader = req.headers.get('Authorization') ?? '';
  if (!/^Bearer\s+\S+/i.test(authHeader)) {
    return json({ error: 'unauthorized', message: 'Sign in again, then retry.' }, 401);
  }

  // 1) Qui appelle ? Le jeton est vérifié par Auth, pas seulement décodé.
  const caller = createClient(url, anonKey, {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: userData, error: userError } = await caller.auth.getUser();
  const user = userData?.user;
  if (userError || !user) {
    return json({ error: 'unauthorized', message: 'Sign in again, then retry.' }, 401);
  }

  // 2) Confirmation explicite : un appel accidentel ne supprime rien.
  const body = await req.json().catch(() => null) as { confirm?: unknown } | null;
  if (body?.confirm !== 'DELETE') {
    return json({ error: 'confirmation_required', message: 'Send { "confirm": "DELETE" } to delete this account.' }, 400);
  }

  // 3) Les comptes d'administration se suppriment depuis le web, par un autre admin.
  const role = String((user.app_metadata as { role?: unknown } | null)?.role ?? '');
  if (role === 'platform_admin' || role === 'admin') {
    return json({ error: 'admin_account', message: 'Administrator accounts cannot be deleted from the app.' }, 403);
  }

  // 4) Suppression définitive de l'utilisateur Auth (cascade en base).
  const admin = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
  let deleteError: { message?: string } | null = null;
  try {
    ({ error: deleteError } = await admin.auth.admin.deleteUser(user.id));
  } catch (thrown) {
    deleteError = { message: thrown instanceof Error ? thrown.message : String(thrown) };
  }
  if (deleteError) {
    const text = `${deleteError.message ?? ''}`;
    // Clé étrangère sans cascade (organisation créée, attestation émise…).
    if (/foreign key|violates|23503/i.test(text)) {
      console.warn(`delete-account: ${user.id} still referenced: ${text}`);
      return json({
        error: 'account_in_use',
        message: 'This account still owns organization records. Contact support to delete it.',
      }, 409);
    }
    console.error(`delete-account: deleteUser failed for ${user.id}: ${text}`);
    return json({ error: 'delete_failed', message: 'Account deletion failed. Please retry later.' }, 500);
  }

  return json({ deleted: true }, 200);
});
