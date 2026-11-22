/**
 * Service-worker data caches that may hold another account's view.
 *
 * - `supabase-rest-content`: used by builds before 2026-11-22 for EVERY
 *   karatou_* GET, personal tables included. Nothing reads it any more; it is
 *   deleted at boot so learner progress, member e-mails and scholarship codes
 *   cached by an older build do not linger on the device.
 * - `supabase-catalog`: public catalogue, but an admin session sees drafts
 *   under the same URLs, so it is dropped on logout.
 */
const LEGACY_PRIVATE_CACHE = 'supabase-rest-content';
const CATALOG_CACHE = 'supabase-catalog';

function cacheStorage(): CacheStorage | null {
  try {
    return typeof caches === 'undefined' ? null : caches;
  } catch {
    return null;
  }
}

export function purgeLegacyDataCache(): Promise<void> {
  const storage = cacheStorage();
  return storage ? storage.delete(LEGACY_PRIVATE_CACHE).then(() => undefined, () => undefined) : Promise.resolve();
}

export function purgeSessionDataCaches(): Promise<void> {
  const storage = cacheStorage();
  if (!storage) return Promise.resolve();
  return Promise.all([storage.delete(LEGACY_PRIVATE_CACHE), storage.delete(CATALOG_CACHE)]).then(
    () => undefined,
    () => undefined
  );
}
