import { ReactNode, useEffect, useRef, useState } from 'react';
import { User as SupabaseAuthUser } from '@supabase/supabase-js';
import { demoUsers } from '../data/mockData';
import { isDemoEnabled } from '../lib/demoMode';
import { normalizeUserRole } from '../lib/roles';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';
import { DemoUser, UserRole } from '../types';
import { AuthContext } from './authCore';

const AUTH_STORAGE_KEY = 'karatou.auth.v1';

interface ProfileRow {
  id: string;
  full_name: string | null;
  role: string | null;
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

  try {
    const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
    const storedUser = raw ? (JSON.parse(raw) as DemoUser) : null;

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

function roleFromSupabase(user: SupabaseAuthUser, profile?: ProfileRow | null): UserRole {
  return normalizeUserRole(user.app_metadata?.role || profile?.role);
}

async function loadPrimaryOrganization(role: UserRole): Promise<UserOrganizationRow | null> {
  if (!supabase || role !== 'enterprise_admin') {
    return null;
  }

  const { data, error } = await supabase
    .from('karatou_organizations')
    .select('id,name')
    .order('name', { ascending: true })
    .limit(1);

  if (error) {
    return null;
  }

  return (data?.[0] as UserOrganizationRow | undefined) || null;
}

async function buildSupabaseUser(authUser: SupabaseAuthUser): Promise<DemoUser> {
  if (!supabase) {
    throw new Error('Supabase is not configured.');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('id,full_name,role,country')
    .eq('id', authUser.id)
    .maybeSingle();

  const profileRow = profile as ProfileRow | null;
  const name =
    profileRow?.full_name ||
    (authUser.user_metadata?.full_name as string | undefined) ||
    (authUser.user_metadata?.name as string | undefined) ||
    authUser.email?.split('@')[0] ||
    'Karatou Learner';
  const role = roleFromSupabase(authUser, profileRow);
  const organization = await loadPrimaryOrganization(role);

  return {
    id: authUser.id,
    name,
    email: authUser.email || '',
    password: '',
    role,
    initials: getInitials(name),
    country: profileRow?.country || 'NE',
    orgId: organization?.id,
    orgName: role === 'enterprise_admin' ? organization?.name || 'Enterprise Karatou' : undefined,
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

  const login = async (email: string, password: string) => {
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
          error: error?.message || 'Connexion impossible.',
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
          error: isDemoEnabled
            ? 'Email ou mot de passe incorrect. Essayez un compte demo.'
            : 'Email ou mot de passe incorrect.',
        };
  };

  const loginAs = async (role: UserRole) => {
    if (!isDemoEnabled) {
      return { ok: false, error: 'Les comptes demo sont desactives.' };
    }

    const found = demoUsers.find((candidate) => candidate.role === role);
    if (!found) {
      return { ok: false, error: 'Compte demo introuvable.' };
    }

    if (supabase) {
      return login(found.email, found.password);
    }

    demoSessionActive.current = true;
    setLocalSession(found);
    return { ok: true };
  };

  const register = async (payload: { name: string; email: string; password: string }) => {
    const cleanName = payload.name.trim() || 'Nouvel apprenant';
    const normalizedEmail = payload.email.trim().toLowerCase();

    if (supabase) {
      const { data, error } = await supabase.auth.signUp({
        email: normalizedEmail,
        password: payload.password,
        options: {
          data: {
            full_name: cleanName,
            country: 'NE',
          },
        },
      });

      if (error || !data.user) {
        return {
          ok: false,
          error: error?.message || 'Creation de compte impossible.',
        };
      }

      if (!data.session) {
        setAuthReady(true);
        return {
          ok: false,
          error: 'Compte cree. Confirmez votre email, puis connectez-vous.',
        };
      }

      const { error: profileError } = await supabase
        .from('profiles')
        .upsert(
          {
            id: data.user.id,
            full_name: cleanName,
            country: 'NE',
          },
          { onConflict: 'id' }
        );

      if (profileError) {
        return { ok: false, error: profileError.message };
      }

      setUser(await buildSupabaseUser(data.user));
      setAuthReady(true);
      return { ok: true };
    }

    if (!isDemoEnabled) {
      return {
        ok: false,
        error: 'Creation de compte indisponible: Supabase doit etre configure.',
      };
    }

    const newUser: DemoUser = {
      id: `learner-${Date.now()}`,
      name: cleanName,
      email: normalizedEmail,
      password: payload.password,
      role: 'learner',
      initials: getInitials(cleanName),
      country: 'NE',
    };

    demoSessionActive.current = true;
    setLocalSession(newUser);
    return { ok: true };
  };

  const logout = async () => {
    if (supabase) {
      await supabase.auth.signOut().catch(() => undefined);
    }

    demoSessionActive.current = false;
    setLocalSession(null);
    setAuthReady(true);
  };

  const value = {
    user,
    authReady,
    authMode: isSupabaseConfigured && !user?.password ? 'supabase' as const : 'local' as const,
    isAuthenticated: Boolean(user),
    login,
    loginAs,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
