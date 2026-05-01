import { TrendingUp } from 'lucide-react';
import type { AudienceMode, StudentReport } from '../../types/report';
import { formatGrowth } from '../../lib/format';
import { ChartCard } from '../charts/ChartCard';
import { GrowthLineChart } from '../charts/GrowthLineChart';
import { Card } from '../ui/Card';
import { InfoTooltip } from '../ui/InfoTooltip';

interface GrowthStoryProps {
  report: StudentReport;
  audienceMode: AudienceMode;
}

export function GrowthStory({ report, audienceMode }: GrowthStoryProps) {
  const growthTerm = report.tooltipTerms.find((term) => term.id === 'growth')!;
  const first = report.growth[0];
  const latest = report.growth[report.growth.length - 1];
  const totalGrowth = latest.overallScore - first.overallScore;

  return (
    <section className="report-section space-y-5" id="growth">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
            Growth Story
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900">
            What changed since the last assessment?
          </h2>
          <p className="mt-2 max-w-3xl leading-7 text-ink-700">
            Growth is shown as a pattern over time, then translated into a useful next-step story.
          </p>
        </div>
        <InfoTooltip
          definition={growthTerm.definition}
          label={growthTerm.label}
          plainLanguage={growthTerm.plainLanguage}
        />
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <ChartCard
          description="The primary line shows overall performance across three fictional test dates. Logic and Grammar are included to show the uneven pattern behind the overall score."
          summary={`Overall score rose from ${first.overallScore} to ${latest.overallScore}, a ${formatGrowth(totalGrowth)} point change since October. Logic accelerated, while Grammar moved more gradually.`}
          title="Performance across test dates"
        >
          <GrowthLineChart growth={report.growth} />
        </ChartCard>

        <Card className="space-y-5" tone="warm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-sage-300 bg-sage-100 text-sage-600">
              <TrendingUp aria-hidden="true" size={23} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                Narrative interpretation
              </p>
              <h3 className="text-xl font-bold text-ink-900">
                What changed since the last assessment?
              </h3>
            </div>
          </div>
          <p className="leading-7 text-ink-700">{report.growthInterpretation[audienceMode]}</p>
          <dl className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-[8px] border border-parchment-200 bg-white p-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                Overall change
              </dt>
              <dd className="number-font mt-1 text-2xl font-black text-sage-600">
                {formatGrowth(report.scoreSummary.growthSincePrevious)}
              </dd>
            </div>
            <div className="rounded-[8px] border border-parchment-200 bg-white p-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                Strongest growth
              </dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">Logic & Analysis</dd>
            </div>
            <div className="rounded-[8px] border border-parchment-200 bg-white p-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                Watch area
              </dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">Grammar & Expression</dd>
            </div>
          </dl>
        </Card>
      </div>
    </section>
  );
}
