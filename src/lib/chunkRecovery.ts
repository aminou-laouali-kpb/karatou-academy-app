/**
 * Recovery from "stale build" chunk failures.
 *
 * After a deploy, the service worker activates the new build while a tab may
 * still run the old shell. A lazy page then asks for a chunk hash that no longer
 * exists; the host's SPA rewrite answers index.html (200), the module import
 * fails, and the learner used to land on the full-screen error page.
 * One guarded reload picks up the new shell instead. The guard stops a reload
 * loop when the failure is something else (e.g. really offline).
 */
const RELOAD_FLAG = 'karatou.chunkReloadAt';
const RELOAD_WINDOW_MS = 30_000;

export function reloadOnceForStaleBuild(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_FLAG) || 0);
    if (Date.now() - last < RELOAD_WINDOW_MS) return false;
    sessionStorage.setItem(RELOAD_FLAG, String(Date.now()));
  } catch {
    return false;
  }
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
  window.location.reload();
  return true;
}

export function installChunkRecovery() {
  window.addEventListener('vite:preloadError', (event) => {
    if (reloadOnceForStaleBuild()) event.preventDefault();
  });
}
