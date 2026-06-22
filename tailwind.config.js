/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        blue: {
          50: '#F0F7FF',
          100: '#E8F2FF',
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
          300: '#FAC55A',
          400: '#F5A623',
          500: '#E8960C',
          600: '#C47D0A',
        },
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
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
