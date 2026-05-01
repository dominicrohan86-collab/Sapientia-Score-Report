import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type BadgeTone = 'neutral' | 'gold' | 'sage' | 'blue' | 'amber' | 'rose';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: 'border-slate-300 bg-slate-50 text-slate-700',
  gold: 'border-gold-500/35 bg-gold-500/10 text-gold-600',
  sage: 'border-sage-300 bg-sage-100 text-sage-600',
  blue: 'border-scholar-300 bg-scholar-100 text-scholar-600',
  amber: 'border-amber-600/30 bg-amber-100 text-amber-600',
  rose: 'border-rose-600/30 bg-rose-100 text-rose-600'
};

export function Badge({ children, className, tone = 'neutral', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em]',
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
