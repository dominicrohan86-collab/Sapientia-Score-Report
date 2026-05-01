import type { KeyboardEvent } from 'react';
import { cn } from '../../lib/cn';

interface SegmentedControlOption<T extends string> {
  value: T;
  label: string;
  description?: string;
}

interface SegmentedControlProps<T extends string> {
  label: string;
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
  className
}: SegmentedControlProps<T>) {
  function moveSelection(direction: 1 | -1) {
    const currentIndex = options.findIndex((option) => option.value === value);
    const nextIndex = (currentIndex + direction + options.length) % options.length;
    onChange(options[nextIndex].value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      moveSelection(1);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      moveSelection(-1);
    }
  }

  return (
    <div className={cn('space-y-2', className)}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">{label}</p>
      <div
        aria-label={label}
        className="grid gap-1 rounded-[8px] border border-parchment-200 bg-white/80 p-1 shadow-line sm:grid-cols-3"
        onKeyDown={handleKeyDown}
        role="radiogroup"
      >
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              aria-checked={selected}
              className={cn(
                'min-h-11 rounded-md px-3 py-2 text-left text-sm font-semibold transition',
                selected
                  ? 'bg-ink-900 text-white shadow-line'
                  : 'text-ink-700 hover:bg-parchment-100 hover:text-ink-900'
              )}
              key={option.value}
              onClick={() => onChange(option.value)}
              role="radio"
              type="button"
            >
              <span className="block">{option.label}</span>
              {option.description ? (
                <span
                  className={cn(
                    'mt-0.5 block text-xs font-normal',
                    selected ? 'text-white/78' : 'text-ink-600'
                  )}
                >
                  {option.description}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
