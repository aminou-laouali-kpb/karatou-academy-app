const REDIRECT_STORAGE_KEY = 'karatou:spa-redirect';

/**
 * Validates a same-origin SPA path recovered by public/404.html. Rejecting
 * protocol-relative or absolute URLs prevents an open-redirect on 404 hosts.
 */
export function toSafeSpaPath(value: string | null, origin: string): string | null {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return null;

  try {
    const url = new URL(value, origin);
    return url.origin === origin ? `${url.pathname}${url.search}${url.hash}` : null;
  } catch {
    return null;
  }
}

export function consumeSpaRedirect(): string | null {
  const stored = window.sessionStorage.getItem(REDIRECT_STORAGE_KEY);
  window.sessionStorage.removeItem(REDIRECT_STORAGE_KEY);
  return toSafeSpaPath(stored, window.location.origin);
}