import { ReactNode, useEffect, useRef, useState } from 'react';
import { User as SupabaseAuthUser } from '@supabase/supabase-js';
import { demoUsers } from '../data/mockData';
import { isDemoEnabled } from '../lib/demoMode';
import { authErrorDetail, mapAuthError } from '../lib/authErrors';
import { normalizeCountryCode } from '../data/westAfricaCountries';
import { normalizeUserRole, resolveServerAuthorizedRole } from '../lib/roles';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';
import { DemoUser, UserRole } from '../types';
import { AuthContext } from './authCore';
import type { AuthResult } from './authCore';
import { purgeSessionDataCaches } from '../lib/swCache';

const AUTH_STORAGE_KEY = 'karatou.auth.v1';

interface ProfileRow {
  id: string;
  full_name: string | null;
  country: string | null;
}

interface UserOrganizationRow {
  id: string;
  name: string;
}

function readStoredUser() {
  if (typeof window === 'undefined') {
    return null;
  }

  // Production never trusts the local auth store: real Supabase sessions are not
  // persisted to this key (login/register/hydrate call persistUser(null)), so this
  // key only ever holds demo users. Ignoring it in production prevents a crafted
  // localStorage entry from granting a synchronous "authenticated" state before the
  // real getUser() validation runs.
  if (!isDemoEnabled) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    const storedUser =
      parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? (parsed as DemoUser) : null;

    if (storedUser?.password && !isDemoEnabled) {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }

    if (storedUser?.password) {
      const refreshedDemoUser = demoUsers.find(
        (candidate) => candidate.email.toLowerCase() === storedUser.email.toLowerCase()
      );

      if (refreshedDemoUser) {
        return refreshedDemoUser;
      }
    }

    return storedUser ? { ...storedUser, role: normalizeUserRole(storedUser.role) } : null;
  } catch {
    return null;
  }
}

function persistUser(user: DemoUser | null) {
  if (typeof window === 'undefined') {
    return;
  }

  if (user) {
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  } else {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'KA';
}

function roleFromSupabase(user: SupabaseAuthUser): UserRole {
  // RLS reads app_metadata from the JWT. `profiles.role` is display data that
  // the account holder can write, so it must never grant the browser more
  // access than the database will allow.
  return normalizeUserRole(user.app_metadata?.role);
}

/**
 * Resolves the organization this user actually belongs to. Picking the first
 * organization alphabetically would hand an enterprise admin someone else's
 * dashboard, so the membership is looked up by user id, then by invited email
 * for an admin who has not been linked to their auth user yet.
 */
async function loadPrimaryOrganization(
  authUser: SupabaseAuthUser,
  role: UserRole
): Promise<UserOrganizationRow | null> {
  if (!supabase || role !== 'enterprise_admin') {
    return null;
  }

  const client = supabase;
  const findMembership = async (column: 'user_id' | 'email', value: string) =>
    client
      .from('karatou_org_memberships')
      .select('organization_id')
      .eq(column, value)
      .eq('role', 'enterprise_admin')
      .eq('status', 'active')
      .limit(1)
      .maybeSingle();

  const byUserId = await findMembership('user_id', authUser.id);
  if (byUserId.error) {
    return null;
  }

  const email = authUser.email?.trim().toLowerCase();
  const byEmail = !byUserId.data && email ? await findMembership('email', email) : null;

  if (byEmail?.error) {
    return null;
  }

  const organizationId =
    (byUserId.data as { organization_id?: string } | null)?.organization_id ||
    (byEmail?.data as { organization_id?: string } | null)?.organization_id;

  if (!organizationId) {
    return null;
  }

  const { data, error } = await client
    .from('karatou_organizations')
    .select('id,name')
    .eq('id', organizationId)
    .maybeSingle();

  if (error) return null;
  return (data as UserOrganizationRow | null) || null;
}

async function buildSupabaseUser(authUser: SupabaseAuthUser): Promise<DemoUser> {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('id,full_name,country')
    .eq('id', authUser.id)
    .maybeSingle();

  const profileRow = profile as ProfileRow | null;
  const name =
    profileRow?.full_name ||
    (authUser.user_metadata?.full_name as string | undefined) ||
    (authUser.user_metadata?.name as string | undefined) ||
    authUser.email?.split('@')[0] ||
    'Karatou Learner';
  const claimedRole = roleFromSupabase(authUser);
  const organization = await loadPrimaryOrganization(authUser, claimedRole);
  const role = resolveServerAuthorizedRole(authUser.app_metadata?.role, Boolean(organization));

  return {
    id: authUser.id,
    name,
    email: authUser.email || '',
    password: '',
    role,
    initials: getInitials(name),
    country: profileRow?.country || 'NE',
    orgId: organization?.id,
    orgName: role === 'enterprise_admin' ? organization?.name : undefined,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<DemoUser | null>(() => readStoredUser());
  const [authReady, setAuthReady] = useState(() => !isSupabaseConfigured || Boolean(readStoredUser()));
  // Tracks whether a local demo session is active so the Supabase auth listener
  // (which fires on the demo sign-out) doesn't clear it. Initialized from a
  // stored demo user so a page reload preserves it.
  const demoSessionActive = useRef<boolean>(Boolean(readStoredUser()?.password));

  const setLocalSession = (nextUser: DemoUser | null) => {
    setUser(nextUser);
    persistUser(nextUser);
  };

  useEffect(() => {
    if (!supabase) {
      return;
    }

    let active = true;

    const hydrate = async (authUser: SupabaseAuthUser | null) => {
      if (!authUser) {
        if (active) {
          // Preserve an active local demo session (it has no Supabase JWT).
          if (!demoSessionActive.current) {
            setUser(null);
          }
          setAuthReady(true);
        }
        return;
      }

      try {
        const mappedUser = await buildSupabaseUser(authUser);
        if (active) {
          demoSessionActive.current = false;
          persistUser(null);
          setUser(mappedUser);
          setAuthReady(true);
        }
      } catch {
        if (active) {
          setUser(null);
          setAuthReady(true);
        }
      }
    };

    supabase.auth
      .getUser()
      .then(({ data }) => hydrate(data.user))
      .catch(() => {
        if (active) setAuthReady(true);
      });
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      hydrate(session?.user || null);
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<AuthResult> => {
    const tryLocalDemoLogin = () => {
      if (!isDemoEnabled) {
        return false;
      }

      const normalizedEmail = email.trim().toLowerCase();
      const found = demoUsers.find(
        (candidate) =>
          candidate.email.toLowerCase() === normalizedEmail &&
          candidate.password === password
      );

      if (!found) {
        return false;
      }

      demoSessionActive.current = true;
      setLocalSession(found);
      setAuthReady(true);
      return true;
    };

    if (supabase) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error || !data.user) {
        if (tryLocalDemoLogin()) {
          await supabase.auth.signOut().catch(() => undefined);
          return { ok: true };
        }

        return {
          ok: false,
          errorKey: mapAuthError(error),
          errorDetail: authErrorDetail(error),
        };
      }

      demoSessionActive.current = false;
      persistUser(null);
      setUser(await buildSupabaseUser(data.user));
      setAuthReady(true);
      return { ok: true };
    }

    return tryLocalDemoLogin()
      ? { ok: true }
      : {
          ok: false,
          errorKey: isDemoEnabled ? 'authErrInvalidCredentialsDemo' : 'authErrInvalidCredentials',
        };
  };

  const loginAs = async (role: UserRole): Promise<AuthResult> => {
    if (!isDemoEnabled) {
      return { ok: false, errorKey: 'authErrDemoDisabled' };
    }

    const found = demoUsers.find((candidate) => candidate.role === role);
    if (!found) {
      return { ok: false, errorKey: 'authErrDemoMissing' };
    }

    if (supabase) {
      return login(found.email, found.password);
    }

    demoSessionActive.current = true;
    setLocalSession(found);
    return { ok: true };
  };

  const register = async (payload: {
    name: string;
    email: string;
    password: string;
    country?: string;
    gender?: string;
  }): Promise<AuthResult> => {
    const cleanName = payload.name.trim() || 'Nouvel apprenant';
    const normalizedEmail = payload.email.trim().toLowerCase();
    // Anything unrecognised collapses to 'XX' rather than reaching the column
    // the public impact statistics group on.
    const country = normalizeCountryCode(payload.country);
    const gender = payload.gender?.trim() || undefined;

    if (supabase) {
      // La confirmation d'email est active : le lien reçu doit ramener sur le
      // domaine où la personne s'est inscrite, pas sur la « Site URL » du
      // projet Supabase. Une URL absente de la liste blanche est ignorée et
      // retombe sur cette Site URL — l'option ne peut donc rien dégrader.
      const emailRedirectTo =
        typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : undefined;

      const { data, error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password: payload.password,
        options: {
          emailRedirectTo,
          data: {
            full_name: cleanName,
            ...(country ? { country } : {}),
            ...(gender ? { gender } : {}),
          },
        },
      });

      if (error || !data.user) {
        return {
          ok: false,
          errorKey: mapAuthError(error),
          errorDetail: authErrorDetail(error),
        };
      }

      if (!data.session) {
        // The account exists; Supabase is simply waiting for the address to be
        // confirmed. Reporting this as a failure made a success look like a
        // crash, in red, to every person who signed up.
        setAuthReady(true);
        return { ok: true, pendingEmailConfirmation: true };
      }

      const { error: profileError } = await supabase
        .from('profiles')
        .upsert(
          {
            id: data.user.id,
            full_name: cleanName,
            ...(country ? { country } : {}),
            ...(gender ? { gender } : {}),
          },
          { onConflict: 'id' }
        );

      if (profileError) {
        return { ok: false, errorKey: 'authErrProfile' };
      }

      setUser(await buildSupabaseUser(data.user));
      setAuthReady(true);
      return { ok: true };
    }

    if (!isDemoEnabled) {
      return { ok: false, errorKey: 'authErrSupabaseRequired' };
    }

    const newUser: DemoUser = {
      id: `learner-${Date.now()}`,
      name: cleanName,
      email: normalizedEmail,
      password: payload.password,
      role: 'learner',
      initials: getInitials(cleanName),
      country: country || 'NE',
    };

    demoSessionActive.current = true;
    setLocalSession(newUser);
    return { ok: true };
  };

  const requestPasswordReset = async (email: string): Promise<AuthResult> => {
    if (!supabase) {
      return {
        ok: false,
        errorKey: isDemoEnabled ? 'authErrResetDemo' : 'authErrServiceUnavailable',
      };
    }

    const redirectTo =
      typeof window !== 'undefined' ? `${window.location.origin}/reset-password` : undefined;
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), { redirectTo });
    if (error) {
      return { ok: false, errorKey: mapAuthError(error), errorDetail: authErrorDetail(error) };
    }
    return { ok: true };
  };

  const updatePassword = async (password: string): Promise<AuthResult> => {
    if (!supabase) {
      return { ok: false, errorKey: 'authErrServiceUnavailable' };
    }

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      return { ok: false, errorKey: mapAuthError(error), errorDetail: authErrorDetail(error) };
    }
    return { ok: true };
  };

  const logout = async () => {
    if (supabase) {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }

    demoSessionActive.current = false;
    setLocalSession(null);
    setAuthReady(true);
    void purgeSessionDataCaches();
  };

  const value = {
    user,
    authReady,
    authMode: isSupabaseConfigured && !user?.password ? 'supabase' as const : 'local' as const,
    isAuthenticated: Boolean(user),
    login,
    loginAs,
    register,
    requestPasswordReset,
    updatePassword,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
