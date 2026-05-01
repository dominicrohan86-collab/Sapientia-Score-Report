import { Info } from 'lucide-react';
import { useId, useState } from 'react';
import { cn } from '../../lib/cn';

interface InfoTooltipProps {
  label: string;
  definition: string;
  plainLanguage: string;
  className?: string;
}

export function InfoTooltip({ label, definition, plainLanguage, className }: InfoTooltipProps) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  return (
    <span
      className={cn('relative inline-flex items-center', className)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-describedby={open ? tooltipId : undefined}
        aria-expanded={open}
        aria-label={`What does ${label} mean?`}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-parchment-200 bg-white text-ink-600 shadow-line transition hover:border-scholar-300 hover:text-scholar-600"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <Info aria-hidden="true" size={16} />
      </button>
      {open ? (
        <span
          className="absolute right-0 top-10 z-30 w-72 rounded-[8px] border border-parchment-200 bg-white p-4 text-left text-sm leading-6 text-ink-700 shadow-soft"
          id={tooltipId}
          role="tooltip"
        >
          <strong className="mb-1 block text-ink-900">{label}</strong>
          <span className="block">{definition}</span>
          <span className="mt-2 block border-t border-parchment-200 pt-2 text-xs font-semibold text-scholar-600">
            Plain language: {plainLanguage}
          </span>
        </span>
      ) : null}
    </span>
  );
}
