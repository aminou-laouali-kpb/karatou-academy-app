import { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'blue' | 'gold' | 'green' | 'red' | 'gray';
  className?: string;
}

const variantStyles = {
  blue: 'bg-blue-100 text-blue-700',
  gold: 'bg-gold-100 text-gold-600',
  green: 'bg-emerald-100 text-emerald-700',
  red: 'bg-red-100 text-red-700',
  gray: 'bg-gray-100 text-gray-600',
};

export function Badge({ children, variant = 'blue', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-meta font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
