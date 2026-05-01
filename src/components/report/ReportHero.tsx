import { CalendarDays, Printer, TrendingUp } from 'lucide-react';
import type { AudienceMode, StudentReport } from '../../types/report';
import { formatGrowth } from '../../lib/format';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ReportHeroProps {
  report: StudentReport;
  audienceMode: AudienceMode;
  onOpenPrint: () => void;
}

export function ReportHero({ report, audienceMode, onOpenPrint }: ReportHeroProps) {
  const { profile, assessment, scoreSummary } = report;

  return (
    <section
      className="report-section overflow-hidden rounded-[8px] border border-ink-900 bg-ink-900 text-white shadow-soft"
      id="overview"
    >
      <div className="grid gap-0 lg:grid-cols-[1.45fr_0.9fr]">
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-white/25 bg-white/10 text-white" tone="neutral">
              {assessment.sampleNote}
            </Badge>
            <Badge className="border-sage-300/50 bg-sage-100/10 text-sage-100" tone="sage">
              {scoreSummary.benchmarkStatus}
            </Badge>
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-white/72">
            {assessment.name}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-white md:text-6xl">
            {profile.name}
          </h1>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/78">
            <span>{profile.grade}</span>
            <span>{profile.schoolLabel}</span>
            <span className="inline-flex items-center gap-2">
              <CalendarDays aria-hidden="true" size={16} />
              {assessment.testDate}
            </span>
          </div>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white">
            {scoreSummary.benchmarkStatusDetail}
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-white/78">
            {scoreSummary.interpretation[audienceMode]}
          </p>
          <div className="mt-7">
            <Button
              className="border-white/20 bg-white text-ink-900 hover:bg-parchment-100"
              icon={<Printer aria-hidden="true" size={18} />}
              onClick={onOpenPrint}
            >
              Print / PDF Preview
            </Button>
          </div>
        </div>

        <div className="border-t border-white/15 bg-white/7 p-6 md:p-8 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
            Overall score
          </p>
          <div className="mt-3 flex items-end gap-3">
            <span className="number-font text-7xl font-black leading-none md:text-8xl">
              {scoreSummary.overallScore}
            </span>
            <span className="pb-3 text-lg font-semibold text-white/70">
              / {scoreSummary.maxScore}
            </span>
          </div>
          <dl className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-[8px] border border-white/15 bg-white/8 p-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                Percentile
              </dt>
              <dd className="mt-1 number-font text-2xl font-bold">
                {scoreSummary.percentileLabel}
              </dd>
              <p className="mt-1 text-xs leading-5 text-white/65">Compared with a fictional reference group.</p>
            </div>
            <div className="rounded-[8px] border border-white/15 bg-white/8 p-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                Growth
              </dt>
              <dd className="mt-1 flex items-center gap-2 number-font text-2xl font-bold">
                <TrendingUp aria-hidden="true" size={20} />
                {formatGrowth(scoreSummary.growthSincePrevious)}
              </dd>
              <p className="mt-1 text-xs leading-5 text-white/65">Since the winter assessment.</p>
            </div>
            <div className="rounded-[8px] border border-white/15 bg-white/8 p-4">
              <dt className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                Benchmark
              </dt>
              <dd className="mt-1 text-2xl font-bold">{scoreSummary.benchmarkStatus}</dd>
              <p className="mt-1 text-xs leading-5 text-white/65">
                A planning reference, not a permanent label.
              </p>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
