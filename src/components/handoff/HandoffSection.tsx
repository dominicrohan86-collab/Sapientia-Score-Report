import type { ReactNode } from 'react';

interface HandoffSectionProps {
  title: string;
  eyebrow: string;
  description: string;
  children: ReactNode;
}

export function HandoffSection({ title, eyebrow, description, children }: HandoffSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">{eyebrow}</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900">{title}</h2>
        <p className="mt-2 max-w-3xl leading-7 text-ink-700">{description}</p>
      </div>
      <div>{children}</div>
    </section>
  );
}
