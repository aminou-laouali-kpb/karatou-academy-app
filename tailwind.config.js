/** @type {import('tailwindcss').Config} */

// Charte graphique Karatou Academy — alignée sur le design system
// (Magic Patterns ds-bdba3ec2-3e08-4f0e-bfa6-dc8cce1c9911).
//
// Deux écarts assumés par rapport au fichier livré par le design system :
//
// 1. Les couleurs sont écrites en hexadécimal littéral, et non en `var(--token)`.
//    Tailwind ne sait pas calculer d'alpha sur une couleur portée par une
//    variable CSS : `ring-blue-500/15` ou `bg-white/10` deviendraient inertes.
//    L'app en compte une quarantaine. Les mêmes tokens restent exposés en
//    variables CSS dans `src/index.css` (référence + surfaces translucides).
// 2. `mono` (DM Mono) est conservé : le design system n'a pas de famille
//    monospace, alors que l'app en dépend pour les UID de certificats, les
//    codes bourse et les zones de saisie de données brutes.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Literata Variable', 'Literata', 'Georgia', 'serif'],
        body: ['Inter Variable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter Variable', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        // Déprécié — alias de `font-heading`, conservé le temps que les pages
        // migrent. Pointe désormais sur Literata, plus sur Playfair Display.
        playfair: ['Literata Variable', 'Literata', 'Georgia', 'serif'],
      },
      fontSize: {
        // `display-xl` et `display-lg` prolongent l'échelle du design system,
        // qui s'arrête à `display` (40px) : il ne contient aucun composant de
        // héros marketing. Ces deux crans nomment les tailles déjà en place
        // sur la page d'accueil (48px et 60px) au lieu de les laisser en
        // classes brutes `text-5xl` / `text-6xl`.
        'display-xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        display: ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h1: ['2rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        h2: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '600' }],
        title: ['1.0625rem', { lineHeight: '1.4', letterSpacing: '-0.006em', fontWeight: '600' }],
        'body-lg': ['1.0625rem', { lineHeight: '1.65' }],
        body: ['0.9375rem', { lineHeight: '1.6' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.5' }],
        label: ['0.8125rem', { lineHeight: '1.35', fontWeight: '500' }],
        meta: ['0.75rem', { lineHeight: '1.35' }],
      },
      colors: {
        blue: {
          50: '#F0F7FF',
          100: '#E8F2FF',
          200: '#BFDBFE',
          300: '#8EC5FF',
          400: '#4A9EF5',
          500: '#1A73E8',
          600: '#1A52CC',
          700: '#1035A0',
          800: '#0D2245',
          900: '#0A1628',
        },
        gold: {
          50: '#FFFBF0',
          100: '#FEF3D8',
          // 200 et 700 complètent la rampe : le design system ne les publie pas,
          // mais cinq bandeaux d'avertissement de l'app les utilisent déjà
          // (`border-gold-200 bg-gold-50 text-gold-700`) et rendaient sans
          // couleur, faute de token correspondant.
          200: '#FCDC99',
          300: '#FAC55A',
          400: '#F5A623',
          500: '#E8960C',
          600: '#C47D0A',
          700: '#A06608',
          // 800 : texte or sur fond or clair, au contraste AA (gold-600 sur
          // gold-100 n'atteignait que 3:1).
          800: '#7C4F05',
        },
        // Gris, sémantiques (emerald/amber/red) et identité décorative
        // (rose/cyan/orange) sont alignés sur le design system ; les nuances
        // qu'il ne publie pas restent héritées de la palette Tailwind.
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          900: '#111827',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          500: '#F59E0B',
          600: '#D97706',
          900: '#78350F',
        },
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        rose: { 400: '#FB7185', 600: '#E11D48' },
        cyan: { 500: '#06B6D4', 700: '#0E7490' },
        orange: { 100: '#FFEDD5', 400: '#FB923C', 500: '#F97316', 600: '#EA580C' },
        success: '#16A34A',
        error: '#DC2626',
        warning: '#D97706',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #1A73E8, #1A52CC)',
        'gradient-gold': 'linear-gradient(135deg, #F5A623, #E8960C)',
        'gradient-dark': 'linear-gradient(135deg, #0A1628, #0D2245)',
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      // Élévation — toujours teintée bleu/or, jamais gris neutre.
      boxShadow: {
        'blue-sm': '0 2px 8px rgba(26, 115, 232, 0.08)',
        'blue-md': '0 4px 16px rgba(26, 115, 232, 0.12)',
        'blue-lg': '0 8px 32px rgba(26, 115, 232, 0.16)',
        'blue-xl': '0 12px 48px rgba(26, 115, 232, 0.2)',
        'gold-md': '0 4px 16px rgba(245, 166, 35, 0.15)',
      },
      keyframes: {
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
