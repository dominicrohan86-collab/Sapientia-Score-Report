import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'default' | 'warm' | 'ink' | 'plain';
}

const toneClasses = {
  default: 'border-parchment-200 bg-white/92 shadow-soft',
  warm: 'border-gold-500/25 bg-parchment-50 shadow-soft',
  ink: 'border-ink-900 bg-ink-900 text-white shadow-soft',
  plain: 'border-parchment-200 bg-white'
};

export function Card({ className, tone = 'default', ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-[8px] border p-5 md:p-6', toneClasses[tone], className)}
      {...props}
    />
  );
}
