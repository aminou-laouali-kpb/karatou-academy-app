// Thin Sentry wrapper. Strictly opt-in: if VITE_SENTRY_DSN is empty, every call
// is a no-op — Sentry is not initialised, no network traffic, no PII leak. The
// rest of the app imports `captureError` without caring whether monitoring is
// configured, so wiring it in is safe by default.

import * as Sentry from '@sentry/react';

const DSN = import.meta.env.VITE_SENTRY_DSN as string | undefined;
const ENV = (import.meta.env.VITE_SENTRY_ENV as string | undefined) ?? import.meta.env.MODE;

let started = false;

export function initMonitoring(): void {
  if (started || !DSN) return;
  started = true;
  Sentry.init({
    dsn: DSN,
    environment: ENV,
    // Conservative sampling: errors only. Performance/replay can be turned on
    // later via separate VITE_SENTRY_TRACES_SAMPLE_RATE etc. if needed.
    tracesSampleRate: 0,
    // Privacy: drop common PII before sending. Email addresses, IPs, user
    // names, and free-text fields can otherwise sneak in via breadcrumbs.
    sendDefaultPii: false,
    beforeBreadcrumb(crumb) {
      // Drop body of fetch/xhr breadcrumbs (might contain user content / tokens).
      if (crumb.category === 'fetch' || crumb.category === 'xhr') {
        if (crumb.data) {
          delete (crumb.data as Record<string, unknown>).request_body;
          delete (crumb.data as Record<string, unknown>).response_body;
        }
      }
      return crumb;
    },
  });
}

export function captureError(error: unknown, context?: Record<string, unknown>): void {
  if (!DSN) {
    // Local fallback so developers still see something when monitoring is off.
    console.error('[monitoring]', error, context ?? '');
    return;
  }
  Sentry.captureException(error, context ? { extra: context } : undefined);
}

/** Tag the current user (id only — no email/name) so Sentry events are scoped. */
export function setMonitoringUser(userId: string | null): void {
  if (!DSN) return;
  Sentry.setUser(userId ? { id: userId } : null);
}
