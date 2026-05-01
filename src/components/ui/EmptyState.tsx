import { AlertCircle } from 'lucide-react';
import type { EmptyStateContent } from '../../types/report';
import { Card } from './Card';
import { Badge } from './Badge';

interface EmptyStateProps {
  content: EmptyStateContent;
}

export function EmptyState({ content }: EmptyStateProps) {
  return (
    <Card className="max-w-3xl border-amber-600/25 bg-amber-100/35">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-amber-600/25 bg-white text-amber-600">
          <AlertCircle aria-hidden="true" size={24} />
        </div>
        <div>
          <Badge tone="amber">{content.reason.replace(/([A-Z])/g, ' $1')}</Badge>
          <h3 className="mt-3 text-xl font-bold text-ink-900">{content.title}</h3>
          <p className="mt-2 leading-7 text-ink-700">{content.explanation}</p>
          <p className="mt-4 text-sm font-semibold text-ink-900">{content.nextAction}</p>
          <p className="mt-2 text-sm leading-6 text-ink-600">{content.supportCopy}</p>
        </div>
      </div>
    </Card>
  );
}
