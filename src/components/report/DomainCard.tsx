import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { AudienceMode, DomainResult } from '../../types/report';
import { cn } from '../../lib/cn';
import { Badge } from '../ui/Badge';

interface DomainCardProps {
  domain: DomainResult;
  audienceMode: AudienceMode;
  defaultOpen?: boolean;
}

const bandToneToBadge = {
  strong: 'sage',
  onTrack: 'blue',
  building: 'amber',
  watch: 'rose'
} as const;

const indicatorTone = {
  Strength: 'sage',
  Steady: 'blue',
  'Needs practice': 'amber'
} as const;

export function DomainCard({ domain, audienceMode, defaultOpen = false }: DomainCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = `${domain.id}-details`;

  return (
    <article className="rounded-[8px] border border-parchment-200 bg-white shadow-line">
      <button
        aria-controls={contentId}
        aria-expanded={open}
        className="flex w-full flex-col gap-4 rounded-[8px] p-4 text-left transition hover:bg-parchment-50 sm:flex-row sm:items-start sm:justify-between md:p-5"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span>
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-bold text-ink-900">{domain.name}</span>
            <Badge tone={bandToneToBadge[domain.band.tone]}>{domain.band.label}</Badge>
            <Badge tone={indicatorTone[domain.indicator]}>{domain.indicator}</Badge>
          </span>
          <span className="mt-2 block max-w-3xl text-sm leading-6 text-ink-700">
            {domain.shortExplanation}
          </span>
        </span>
        <span className="flex items-center gap-3">
          <span className="number-font text-3xl font-black text-ink-900">{domain.score}</span>
          <span className="text-ink-600">
            {open ? <ChevronDown aria-hidden="true" /> : <ChevronRight aria-hidden="true" />}
          </span>
        </span>
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-200',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-parchment-200 p-4 md:p-5">
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  What this measures
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-700">{domain.measures}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  What the score suggests
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-700">{domain.scoreSuggests}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Helpful next step
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-700">
                  {domain.nextStep[audienceMode]}
                </p>
              </div>
            </div>
            <p className="mt-4 rounded-[8px] border border-parchment-200 bg-parchment-50 p-3 text-sm font-semibold leading-6 text-ink-700">
              Recommended action: {domain.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
