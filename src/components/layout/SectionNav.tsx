import type { ReportSection, ScoreSummary } from '../../types/report';
import { formatGrowth } from '../../lib/format';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

interface SectionNavProps {
  sections: ReportSection[];
  scoreSummary: ScoreSummary;
}

export function SectionNav({ sections, scoreSummary }: SectionNavProps) {
  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <aside className="no-print space-y-3 lg:sticky lg:top-32">
      <Card className="p-4" tone="plain">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-600">Report sections</p>
        <nav aria-label="Report sections" className="mt-3">
          <ol className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
            {sections.map((section) => (
              <li className="shrink-0 lg:shrink" key={section.id}>
                <button
                  className="w-full rounded-md px-3 py-2 text-left text-sm font-semibold text-ink-700 transition hover:bg-parchment-100 hover:text-ink-900"
                  onClick={() => scrollToSection(section.id)}
                  type="button"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </Card>
      <Card className="hidden p-4 lg:block" tone="warm">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-600">At a glance</p>
        <dl className="mt-3 space-y-3">
          <div>
            <dt className="text-xs text-ink-600">Overall score</dt>
            <dd className="number-font text-2xl font-bold text-ink-900">
              {scoreSummary.overallScore}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-ink-600">Benchmark</dt>
            <dd>
              <Badge tone="sage">{scoreSummary.benchmarkStatus}</Badge>
            </dd>
          </div>
          <div>
            <dt className="text-xs text-ink-600">Growth</dt>
            <dd className="number-font text-lg font-bold text-sage-600">
              {formatGrowth(scoreSummary.growthSincePrevious)}
            </dd>
          </div>
        </dl>
      </Card>
    </aside>
  );
}
