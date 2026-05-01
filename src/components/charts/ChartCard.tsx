import type { ReactNode } from 'react';
import { Card } from '../ui/Card';

interface ChartCardProps {
  title: string;
  description: string;
  children: ReactNode;
  summary: string;
}

export function ChartCard({ title, description, children, summary }: ChartCardProps) {
  return (
    <Card className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-ink-600">{description}</p>
      </div>
      <div className="min-h-[260px]" aria-hidden="true">
        {children}
      </div>
      <p className="rounded-[8px] border border-parchment-200 bg-parchment-50 p-3 text-sm leading-6 text-ink-700">
        <span className="font-semibold text-ink-900">Chart summary: </span>
        {summary}
      </p>
    </Card>
  );
}
