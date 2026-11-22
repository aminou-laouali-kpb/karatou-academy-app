import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

export interface NewsletterSubscriber {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: 'attestation' | 'popup' | 'manual';
  joinedAt: string;
}

export interface NewsletterDraft {
  id: string;
  subject: string;
  body: string;
  createdAt: string;
  sentAt?: string;
  recipientCount?: number;
}

const SUBS_KEY = 'karatou_newsletter_subs_v1';
const DRAFTS_KEY = 'karatou_newsletter_drafts_v1';
export const POPUP_SEEN_KEY = 'karatou_newsletter_popup_v1';

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage quota — silently ignore
  }
}

export function getSubscribers(): NewsletterSubscriber[] {
  return load<NewsletterSubscriber[]>(SUBS_KEY, []);
}

export async function fetchSubscribers(): Promise<NewsletterSubscriber[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('id,name,email,phone,source,created_at')
      .order('created_at', { ascending: false });

    if (!error && data) {
      return data.map((row: { id: string; name: string; email: string; phone?: string; source: NewsletterSubscriber['source']; created_at: string }) => ({
        id: row.id,
        name: row.name,
        email: row.email,
        phone: row.phone,
        source: row.source,
        joinedAt: row.created_at,
      }));
    }
  }
  return getSubscribers();
}

export function addSubscribers(
  incoming: Omit<NewsletterSubscriber, 'id' | 'joinedAt'>[],
): number {
  const existing = getSubscribers();
  const emailSet = new Set(existing.map((s) => s.email.toLowerCase()));
  const toAdd: Omit<NewsletterSubscriber, 'id' | 'joinedAt'>[] = [];
  for (const sub of incoming) {
    const key = sub.email.trim().toLowerCase();
    if (!key || emailSet.has(key)) continue;
    emailSet.add(key);
    existing.push({
      ...sub,
      email: key,
      id: `ns-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      joinedAt: new Date().toISOString(),
    });
    toAdd.push({ ...sub, email: key });
  }
  save(SUBS_KEY, existing);

  if (isSupabaseConfigured && supabase && toAdd.length > 0) {
    supabase
      .from('newsletter_subscribers')
      .upsert(
        toAdd.map((s) => ({
          name: s.name,
          email: s.email,
          phone: s.phone || null,
          source: s.source,
        })),
        { onConflict: 'email', ignoreDuplicates: true },
      )
      .then(({ error }) => {
        if (error) {
          console.warn('[newsletter] Supabase upsert failed:', error.message);
        }
      });
  }

  return toAdd.length;
}

export async function removeSubscriber(id: string): Promise<void> {
  save(SUBS_KEY, getSubscribers().filter((s) => s.id !== id));

  if (isSupabaseConfigured && supabase) {
    await supabase.from('newsletter_subscribers').delete().eq('id', id);
  }
}

export function getDrafts(): NewsletterDraft[] {
  return load<NewsletterDraft[]>(DRAFTS_KEY, []);
}

export function saveDraft(
  draft: Omit<NewsletterDraft, 'id' | 'createdAt'>,
): NewsletterDraft {
  const drafts = getDrafts();
  const full: NewsletterDraft = {
    ...draft,
    id: `nd-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  drafts.unshift(full);
  save(DRAFTS_KEY, drafts);
  return full;
}

export function markSent(id: string, recipientCount: number): void {
  save(
    DRAFTS_KEY,
    getDrafts().map((d) =>
      d.id === id
        ? { ...d, sentAt: new Date().toISOString(), recipientCount }
        : d,
    ),
  );
}

export function deleteDraft(id: string): void {
  save(DRAFTS_KEY, getDrafts().filter((d) => d.id !== id));
}

/**
 * Anyone can type a name in the public popup. A value starting with = + - @
 * (or a tab / carriage return) runs as a formula when the admin opens the CSV
 * in Excel or Sheets (e.g. =HYPERLINK to exfiltrate the row). Prefixing a quote
 * keeps it as plain text.
 */
export function neutralizeSpreadsheetFormula(value: string): string {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export function exportSubscribersCSV(subs: NewsletterSubscriber[]): string {
  const header = ['Nom', 'Email', 'Telephone', 'Source', "Date d'inscription"]
    .map((h) => `"${h}"`)
    .join(',');
  const rows = subs.map((s) =>
    [s.name, s.email, s.phone ?? '', s.source, s.joinedAt.slice(0, 10)]
      .map((v) => `"${neutralizeSpreadsheetFormula(String(v)).replace(/"/g, '""')}"`)
      .join(','),
  );
  return `\uFEFF${[header, ...rows].join('\r\n')}`;
}
