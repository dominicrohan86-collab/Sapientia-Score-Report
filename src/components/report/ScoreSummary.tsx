import type { StudentReport } from '../../types/report';
import { InfoTooltip } from '../ui/InfoTooltip';
import { ScoreCard } from './ScoreCard';
import { BenchmarkComparison } from './BenchmarkComparison';

interface ScoreSummaryProps {
  report: StudentReport;
}

export function ScoreSummary({ report }: ScoreSummaryProps) {
  const percentile = report.tooltipTerms.find((term) => term.id === 'percentile')!;
  const benchmark = report.tooltipTerms.find((term) => term.id === 'benchmark')!;
  const growth = report.tooltipTerms.find((term) => term.id === 'growth')!;

  return (
    <section className="report-section space-y-5" id="summary">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
            Score Summary
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900">What the score means</h2>
          <p className="mt-2 max-w-2xl leading-7 text-ink-700">
            The report pairs one prominent score with plain-language context, comparison points,
            and growth so families can understand the result without over-reading it.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <InfoTooltip
            definition={percentile.definition}
            label={percentile.label}
            plainLanguage={percentile.plainLanguage}
          />
          <InfoTooltip
            definition={benchmark.definition}
            label={benchmark.label}
            plainLanguage={benchmark.plainLanguage}
          />
          <InfoTooltip
            definition={growth.definition}
            label={growth.label}
            plainLanguage={growth.plainLanguage}
          />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <ScoreCard scoreSummary={report.scoreSummary} />
        <BenchmarkComparison
          assessment={report.assessment}
          benchmarks={report.scoreSummary.benchmarks}
        />
      </div>
    </section>
  );
}
