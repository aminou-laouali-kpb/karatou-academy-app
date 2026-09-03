import { useEffect, useState } from 'react';

export interface ProgressBarProps {
  value: number;
  variant?: 'blue' | 'gold' | 'green';
  height?: 'sm' | 'md';
  className?: string;
}

const gradients: Record<NonNullable<ProgressBarProps['variant']>, string> = {
  blue: 'bg-gradient-to-r from-blue-500 to-blue-400',
  gold: 'bg-gradient-to-r from-gold-500 to-gold-400',
  green: 'bg-gradient-to-r from-emerald-600 to-emerald-400',
};

export function ProgressBar({ value, variant = 'blue', height = 'sm', className = '' }: ProgressBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`w-full rounded-full bg-gray-200 overflow-hidden ${height === 'sm' ? 'h-1.5' : 'h-2.5'} ${className}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-700 ease-out ${gradients[variant]}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
