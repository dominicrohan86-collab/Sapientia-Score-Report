import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'quiet';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border-ink-900 bg-ink-900 text-white shadow-soft hover:bg-ink-800 active:bg-ink-700',
  secondary:
    'border-parchment-200 bg-white text-ink-900 shadow-line hover:border-gold-500 hover:bg-parchment-50',
  ghost:
    'border-transparent bg-transparent text-ink-700 hover:bg-white/70 hover:text-ink-900',
  quiet:
    'border-transparent bg-parchment-100 text-ink-700 hover:bg-parchment-200 hover:text-ink-900'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, variant = 'secondary', icon, type = 'button', ...props },
  ref
) {
  return (
    <button
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition',
        'disabled:cursor-not-allowed disabled:opacity-55',
        variantClasses[variant],
        className
      )}
      ref={ref}
      type={type}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
});
