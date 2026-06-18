import { ReactNode, useEffect, useState, useRef } from 'react';

interface KpiCardProps {
  icon: ReactNode;
  value: number;
  label: string;
  trend?: string;
  suffix?: string;
  iconBg?: string;
}

export function KpiCard({ icon, value, label, trend, suffix = '', iconBg = 'bg-blue-100' }: KpiCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div ref={ref} className="bg-white rounded-2xl p-5 shadow-blue-sm hover:shadow-blue-md transition-all duration-200">
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="font-playfair text-2xl font-bold text-gray-900">
        {count}{suffix}
      </p>
      <p className="font-mono text-xs uppercase text-gray-500 mt-1 tracking-wide">{label}</p>
      {trend && (
        <p className="text-xs text-emerald-600 font-medium mt-2">{trend}</p>
      )}
    </div>
  );
}
