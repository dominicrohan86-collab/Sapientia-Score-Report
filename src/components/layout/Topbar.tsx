import { FileText, GraduationCap, Printer, Wrench } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { AudienceMode } from '../../types/report';
import { Button } from '../ui/Button';

export type AppView = 'report' | 'handoff';

interface TopbarProps {
  view: AppView;
  audienceMode: AudienceMode;
  onViewChange: (view: AppView) => void;
  onOpenPrint: () => void;
}

export function Topbar({ view, audienceMode, onViewChange, onOpenPrint }: TopbarProps) {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-parchment-200 bg-parchment-50/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-gold-500/35 bg-white text-gold-600 shadow-line">
            <GraduationCap aria-hidden="true" size={23} />
          </div>
          <div>
            <p className="font-serif text-xl font-bold text-ink-900">Sapientia Score Report</p>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
              Fictional assessment portfolio
            </p>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-2">
          <button
            aria-current={view === 'report' ? 'page' : undefined}
            className={cn(
              'inline-flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition',
              view === 'report'
                ? 'bg-ink-900 text-white'
                : 'text-ink-700 hover:bg-white hover:text-ink-900'
            )}
            onClick={() => onViewChange('report')}
            type="button"
          >
            <FileText aria-hidden="true" size={17} />
            Score Report
          </button>
          <button
            aria-current={view === 'handoff' ? 'page' : undefined}
            className={cn(
              'inline-flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition',
              view === 'handoff'
                ? 'bg-ink-900 text-white'
                : 'text-ink-700 hover:bg-white hover:text-ink-900'
            )}
            onClick={() => onViewChange('handoff')}
            type="button"
          >
            <Wrench aria-hidden="true" size={17} />
            Handoff
          </button>
          <Button
            className="min-h-10"
            icon={<Printer aria-hidden="true" size={17} />}
            onClick={onOpenPrint}
            variant="primary"
          >
            Print / PDF Preview
          </Button>
        </nav>
      </div>
      <div className="border-t border-parchment-200/70 bg-white/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs text-ink-600 md:px-6">
          <span>
            Current audience mode:{' '}
            <strong className="capitalize text-ink-900">{audienceMode}</strong>
          </span>
          <span className="hidden sm:inline">No real student data or real test content is used.</span>
        </div>
      </div>
    </header>
  );
}
