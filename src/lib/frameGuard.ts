/**
 * Anti-clickjacking for the pages where one click has consequences: a learner
 * tricked into clicking "redeem" inside another site's invisible frame would
 * join that site's organization (and expose their progress to its admin).
 * frame-ancestors / X-Frame-Options would do this server-side, but the current
 * static host does not let us set headers (see public/_headers).
 */
const SENSITIVE_PREFIXES = ['/redeem', '/admin', '/enterprise', '/reset-password'];

export function isFramedByAnotherSite(win: Window = window): boolean {
  if (win.top === win.self) return false;
  try {
    // Same-origin parents (e.g. a preview of the app itself) are readable.
    return win.top?.location.origin !== win.location.origin;
  } catch {
    return true;
  }
}

export function guardAgainstFraming(win: Window = window): boolean {
  const sensitive = SENSITIVE_PREFIXES.some((prefix) => win.location.pathname.startsWith(prefix));
  if (!sensitive || !isFramedByAnotherSite(win)) return false;
  const link = win.document.createElement('a');
  link.href = win.location.href;
  link.target = '_top';
  link.rel = 'noopener';
  link.textContent = 'Ouvrir Karatou Academy dans un nouvel onglet / Open Karatou Academy in a new tab';
  link.style.cssText = 'display:block;margin:2rem;font:16px sans-serif;';
  win.document.body.replaceChildren(link);
  return true;
}
