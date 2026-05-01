import type { AudienceMode, StudentReport } from '../../types/report';
import { ChartCard } from '../charts/ChartCard';
import { DomainBarChart } from '../charts/DomainBarChart';
import { DomainCard } from './DomainCard';

interface DomainBreakdownProps {
  report: StudentReport;
  audienceMode: AudienceMode;
}

export function DomainBreakdown({ report, audienceMode }: DomainBreakdownProps) {
  return (
    <section className="report-section space-y-5" id="domains">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
          Domain Breakdown
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900">
          Strengths, needs, and next steps
        </h2>
        <p className="mt-2 max-w-3xl leading-7 text-ink-700">
          Domain scores make the report useful. Each domain includes a score, a text band, a
          strength or need indicator, and an expandable explanation that changes with the audience.
        </p>
      </div>

      <ChartCard
        description="Horizontal bars compare five domains on the same fictional score scale."
        summary="Logic & Analysis is the highest domain at 790. Grammar & Expression is the lowest at 681 and is the clearest focus area."
        title="Domain score pattern"
      >
        <DomainBarChart domains={report.domains} />
      </ChartCard>

      <div className="space-y-3">
        {report.domains.map((domain) => (
          <DomainCard
            audienceMode={audienceMode}
            defaultOpen={domain.id === 'logic' || domain.id === 'grammar'}
            domain={domain}
            key={domain.id}
          />
        ))}
      </div>
    </section>
  );
}
