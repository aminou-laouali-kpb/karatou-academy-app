/**
 * Deep-link recovery for static hosts without a 200 rewrite to /index.html.
 *
 * The app uses BrowserRouter, so `/verify/:uid`, `/redeem/:code`,
 * `/verify-attestation#<payload>`… are real URLs that the host must serve with
 * index.html. A host that answers 404 instead breaks every shared certificate
 * link and every scanned QR code — which is exactly what happened in
 * production, where a fallback 404 page sent visitors to `/` and dropped the
 * path on the way.
 *
 * Two recoveries, applied once at boot, before React mounts:
 *
 *  1. `?/verify/KA-2026-…` — the query form written by `public/404.html`, which
 *     preserves the original path, query and hash across the redirect.
 *  2. a bare attestation payload in the hash on `/` — what the previously
 *     deployed fallback produced for a scanned attestation QR code. Recovering
 *     it means the attestations already in circulation verify correctly.
 *
 * The right fix is still a host-level rewrite (see `public/_redirects` and
 * docs/go-live-runbook.md); this keeps printed QR codes working meanwhile.
 */
import { decodeAttestationPayload } from './attestationPayload';

/**
 * Rebuilds the intended URL from the `?/path&query` form.
 * `~and~` stands in for `&` so the original query survives the redirect.
 */
export function decodeSpaRedirect(search: string): string | null {
  if (!search.startsWith('?/')) return null;
  const [rawPath, ...rest] = search.slice(1).split('&');
  const path = rawPath.replace(/~and~/g, '&');
  const query = rest.join('&').replace(/~and~/g, '&');
  if (!path.startsWith('/')) return null;
  return query ? `${path}?${query}` : path;
}

/**
 * The URL the app should actually be on, or null when the current one is fine.
 */
export function resolveBootPath(pathname: string, search: string, hash: string): string | null {
  const redirected = decodeSpaRedirect(search);
  if (redirected) return `${redirected}${hash}`;

  // A signed attestation payload stranded on the home page.
  if ((pathname === '/' || pathname === '') && hash.length > 1) {
    const payload = decodeAttestationPayload(hash.replace(/^#/, ''));
    if (payload) return `/verify-attestation${hash}`;
  }

  return null;
}

/** Rewrites the address bar (no reload) so the router sees the real route. */
export function applyBootRedirect(): void {
  if (typeof window === 'undefined') return;
  const { pathname, search, hash } = window.location;
  const target = resolveBootPath(pathname, search, hash);
  if (target) window.history.replaceState(null, '', target);
}
