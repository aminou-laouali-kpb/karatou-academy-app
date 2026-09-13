import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Replit (and similar) serve the Vite dev server behind an HTTPS proxy on a
// *.replit.dev host. Detecting it lets us fix the HMR websocket port.
const isReplit = Boolean(process.env.REPL_ID);

// E2E tests run against the dev server (vite --mode e2e / e2e-prod). Workbox
// would intercept and confuse the fetch flow; disable it for those modes.
const isE2E = (mode: string) => mode === 'e2e' || mode === 'e2e-prod';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    VitePWA({
      // The service worker auto-updates on every visit: new shell takes effect
      // on next page load (no manual prompt — keep UX simple for low-literacy users).
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      disable: isE2E(mode),
      includeAssets: ['favicon.svg', 'opengraph.jpg', 'robots.txt'],
      manifest: {
        name: 'Karatou Academy',
        short_name: 'Karatou',
        description:
          "Plateforme trilingue d'apprentissage et de certification en IA pour le Niger et l'Afrique de l'Ouest.",
        lang: 'fr',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#0b1c4b',
        theme_color: '#0b1c4b',
        icons: [
          // The single SVG favicon serves all sizes (vector). Maskable means
          // Android adaptive icons display correctly.
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
      workbox: {
        // Precache the application shell (Vite-built JS/CSS/HTML).
        globPatterns: ['**/*.{js,css,html,svg,jpg,jpeg,png,woff2}'],
        // ...but not the heavy on-demand chunks: the 19 lesson bodies (~15 kB
        // gzip each) and the admin attestation tooling (pdf-lib / xlsx / jszip,
        // ~480 kB gzip). Precaching them made the first visit pay ~3.2 MB on a
        // 2G link for content most learners never open. They are cached on
        // first use instead (the runtime rule below), which is the promise the
        // PWA actually makes: shell precached, visited content available offline.
        globIgnores: [
          'assets/ia-c*.js',
          'assets/pm-p*.js',
          'assets/da-d*.js',
          'assets/attestationGenerator-*.js',
          'assets/AdminAttestations-*.js',
          'assets/FileSaver.min-*.js',
        ],
        // Bigger PDF/Excel chunks may exceed the default 2 MiB cap — bump it
        // so any large precached asset still fits.
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        navigateFallback: '/index.html',
        // SPA routes the SW must NOT intercept (server-authoritative paths or
        // OAuth callbacks that may need real network responses).
        navigateFallbackDenylist: [/^\/api\//, /^\/auth\//],
        runtimeCaching: [
          // (Fonts are now self-hosted via @fontsource — included in the SW
          // precache as woff2 assets; no Google Fonts CDN runtime rule needed.)
          // Build assets that are deliberately not precached (lesson bodies,
          // admin tooling). Filenames are content-hashed, so CacheFirst is safe
          // and a visited lesson stays readable offline.
          {
            urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith('/assets/'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'karatou-assets',
              expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 90 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          // Supabase Storage (public org logos used on certificates).
          {
            urlPattern: ({ url }) =>
              url.hostname.endsWith('.supabase.co') && url.pathname.startsWith('/storage/v1/object/public/'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'supabase-storage',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          // Karatou content tables — let learners revisit what they've already
          // loaded when the network drops. GET-only queries to /rest/v1/karatou_*.
          {
            urlPattern: ({ url, request }) =>
              request.method === 'GET' &&
              url.hostname.endsWith('.supabase.co') &&
              /\/rest\/v1\/karatou_/.test(url.pathname),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'supabase-rest-content',
              expiration: { maxEntries: 80, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          // NEVER cache auth / Edge Functions (sign-in, certificate issuance,
          // attestation signing). They must hit the network.
          {
            urlPattern: ({ url }) =>
              url.hostname.endsWith('.supabase.co') &&
              (url.pathname.startsWith('/auth/') || url.pathname.startsWith('/functions/')),
            handler: 'NetworkOnly',
          },
        ],
      },
      devOptions: {
        // Enable the SW in dev for the main mode only, so manual testing works.
        // Stays off for the E2E modes (handled by `disable` above).
        enabled: false,
        type: 'module',
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Bind 0.0.0.0 so a hosted preview proxy can reach the dev server.
    host: true,
    // Allow the dev server to be served through hosted preview domains.
    allowedHosts: true,
    // On Replit the public HTTPS proxy terminates on 443, so HMR must target it.
    ...(isReplit ? { hmr: { clientPort: 443 } } : {}),
  },
}));
