import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initMonitoring } from './lib/monitoring';
import { applyBootRedirect } from './lib/spaRedirect';
import { installChunkRecovery } from './lib/chunkRecovery';
import { purgeLegacyDataCache } from './lib/swCache';
// Self-hosted fonts (bundled, no CDN). Variable fonts ship the whole weight axis
// in a single woff2, so Inter/Literata cover all weights with one file each.
// DM Mono is not yet variable on fontsource, so only the weights we actually use.
import '@fontsource-variable/inter';
import '@fontsource-variable/literata';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';
import App from './App.tsx';
import './index.css';

// Recover a deep link that a static host answered with its 404 fallback
// (shared certificate URLs, scanned attestation QR codes). Must run before the
// router reads the location.
applyBootRedirect();

// Reload once (guarded) when a lazy chunk from a previous deploy is gone.
installChunkRecovery();

// Builds before 2026-11-22 cached personal Supabase reads in this cache.
void purgeLegacyDataCache();

// Opt-in: no-op unless VITE_SENTRY_DSN is set in the environment.
initMonitoring();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
