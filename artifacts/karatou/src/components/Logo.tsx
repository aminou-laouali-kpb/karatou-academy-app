import { useNavigate } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'dark' | 'compact';
  className?: string;
}

export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const navigate = useNavigate();
  const textColor = variant === 'dark' ? 'text-white' : 'text-blue-900';

  return (
    <button
      onClick={() => navigate('/')}
      className={`flex items-center gap-2.5 ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow-blue-sm">
        <span className="text-gold-400 font-playfair font-black text-lg leading-none">K</span>
      </div>
      {variant !== 'compact' && (
        <span className={`font-semibold text-[15px] tracking-tight ${textColor}`}>
          Karatou Academy
        </span>
      )}
    </button>
  );
}
