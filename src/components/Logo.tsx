import { useNavigate } from 'react-router-dom';

export type LogoVariant = 'default' | 'dark' | 'compact';
export type LogoSize = 'sm' | 'md' | 'lg';

export interface LogoProps {
  /**
   * `default` — lockup complet sur fond clair.
   * `dark` — lockup complet sur fond marine (nav marketing, pied de page).
   * `compact` — logotype seul, sans le nom.
   */
  variant?: LogoVariant;
  /** Taille du logotype : sm 28px, md 36px, lg 48px. */
  size?: LogoSize;
  className?: string;
}

// Le design system livre le lockup sous forme d'image (`logo-karatou-academy.png`),
// mais l'export ne contient qu'un fichier vide. On conserve donc le logotype
// dessiné en CSS — la tuile dégradée bleue au « K » or — et on reprend du
// design system le traitement du nom : « Karatou » en teinte principale,
// « Academy » en accent bleu, inversé sur fond sombre.
const MARK_SIZES: Record<LogoSize, string> = {
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-12 h-12',
};

const MARK_RADIUS: Record<LogoSize, string> = {
  sm: 'rounded-[9px]',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
};

const MARK_GLYPH: Record<LogoSize, string> = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-2xl',
};

const WORDMARK_SIZES: Record<LogoSize, string> = {
  sm: 'text-[13px]',
  md: 'text-[15px]',
  lg: 'text-[19px]',
};

export function Logo({ variant = 'default', size = 'md', className = '' }: LogoProps) {
  const navigate = useNavigate();
  const isDark = variant === 'dark';
  const primary = isDark ? 'text-white' : 'text-gray-900';
  const accent = isDark ? 'text-blue-300' : 'text-blue-500';

  return (
    <button
      type="button"
      onClick={() => navigate('/')}
      aria-label="Karatou Academy — accueil"
      className={`inline-flex items-center gap-2.5 rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${className}`}
    >
      <span
        className={`${MARK_SIZES[size]} ${MARK_RADIUS[size]} shrink-0 bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-blue-sm`}
      >
        <span
          className={`text-gold-400 font-heading font-black leading-none ${MARK_GLYPH[size]}`}
          aria-hidden="true"
        >
          K
        </span>
      </span>
      {variant !== 'compact' && (
        <span
          className={`font-heading font-bold tracking-tight leading-none ${WORDMARK_SIZES[size]}`}
        >
          <span className={primary}>Karatou</span> <span className={accent}>Academy</span>
        </span>
      )}
    </button>
  );
}
