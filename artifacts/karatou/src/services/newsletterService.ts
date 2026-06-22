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

export function addSubscribers(
  incoming: Omit<NewsletterSubscriber, 'id' | 'joinedAt'>[],
): number {
  const existing = getSubscribers();
  const emailSet = new Set(existing.map((s) => s.email.toLowerCase()));
  let added = 0;
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
    added++;
  }
  save(SUBS_KEY, existing);
  return added;
}

export function removeSubscriber(id: string): void {
  save(SUBS_KEY, getSubscribers().filter((s) => s.id !== id));
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

export function exportSubscribersCSV(): string {
  const subs = getSubscribers();
  const header = ['Nom', 'Email', 'Telephone', 'Source', "Date d'inscription"]
    .map((h) => `"${h}"`)
    .join(',');
  const rows = subs.map((s) =>
    [s.name, s.email, s.phone ?? '', s.source, s.joinedAt.slice(0, 10)]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(','),
  );
  return `\uFEFF${[header, ...rows].join('\r\n')}`;
}
