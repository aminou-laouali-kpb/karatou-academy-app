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
  // The preview and two hermetic E2E servers can run together. Sharing an
  // optimizer directory lets one mode invalidate another server's imports.
  cacheDir: isE2E(mode) ? `node_modules/.vite-${mode}` : 'node_modules/.vite',
  plugins: [
    react(),
    VitePWA({
      // The service worker auto-updates on every visit: new shell takes effect
      // on next page load (no manual prompt — keep UX simple for low-literacy users).
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      disable: isE2E(mode),
      // opengraph.jpg is only for link previews (crawlers): never precached.
      includeAssets: ['favicon.svg', 'robots.txt'],
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
          // Lesson bodies (~15 kB gzip each, 52 of them): named `lesson-*` by
          // `chunkFileNames` below, whatever folder they live in, so a new
          // module can no longer slip into the precache by accident.
          'assets/lesson-*.js',
          'assets/attestationGenerator-*.js',
          // fontkit + the Noto subsets: ~500 KiB gzip, needed only when a PDF is
          // actually generated. The runtime /assets/ rule caches it on first use.
          'assets/pdfFonts-*.js',
          'assets/certificatePdf-*.js',
          'assets/AdminAttestations-*.js',
          'assets/FileSaver.min-*.js',
          // Font subsets FR/EN/HA never use (the browser would not download
          // them either: unicode-range). Hausa letters live in latin-ext.
          'assets/*-cyrillic-*.woff2',
          'assets/*-cyrillic-ext-*.woff2',
          'assets/*-greek-*.woff2',
          'assets/*-greek-ext-*.woff2',
          'assets/*-vietnamese-*.woff2',
          'opengraph.jpg',
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
          // Public catalogue only (rubriques, modules, courses): lets learners
          // revisit what they already loaded when the network drops. NetworkFirst
          // with a short timeout, so a fresh answer wins whenever the link holds.
          // Personal tables (progress, certificates, members, scholarships,
          // memberships, organizations) are NEVER cached: a stale copy made
          // progress look lost, and on a shared phone or cybercafé PC the next
          // person could read the previous account's data in Cache Storage.
          {
            urlPattern: ({ url, request }) =>
              request.method === 'GET' &&
              url.hostname.endsWith('.supabase.co') &&
              /\/rest\/v1\/karatou_(rubriques|modules|courses)$/.test(url.pathname),
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-catalog',
              networkTimeoutSeconds: 4,
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 7 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) => url.hostname.endsWith('.supabase.co') && url.pathname.startsWith('/rest/v1/'),
            handler: 'NetworkOnly',
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
  build: {
    rolldownOptions: {
      output: {
        // Every lesson body gets a stable `lesson-` prefix so the service worker
        // can exclude them from the precache with a single pattern (see
        // globIgnores above and scripts/validate-release.mjs).
        chunkFileNames: (chunk) =>
          chunk.facadeModuleId && /[\\/]src[\\/]data[\\/]lessons[\\/]/.test(chunk.facadeModuleId)
            ? 'assets/lesson-[name]-[hash].js'
            : 'assets/[name]-[hash].js',
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Bind 0.0.0.0 so a hosted preview proxy can reach the dev server.
    host: true,
    // Allow the dev server to be served through hosted preview domains.
    allowedHosts: true,
    // On Replit the public HTTPS proxy terminates on 443, so HMR must target it.
    ...(isE2E(mode)
      ? { hmr: false as const }
      : isReplit && process.env.REPLIT_DEV_DOMAIN
        ? { hmr: { host: process.env.REPLIT_DEV_DOMAIN, protocol: 'wss' as const, clientPort: 443 } }
        : {}),
    // Directories the workspace writes to but that are never sources. Watching
    // them exhausts the host's file-watcher limit, and the e2e servers then die
    // before Playwright can start a browser.
    watch: {
      ignored: [
        /[\\/]\.local[\\/]/,
        /[\\/]\.agents[\\/]/,
        '**/dist/**',
        '**/coverage/**',
        '**/playwright-report/**',
        '**/test-results/**',
      ],
    },
  },
}));
