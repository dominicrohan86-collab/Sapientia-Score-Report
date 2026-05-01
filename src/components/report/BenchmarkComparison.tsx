import type { Assessment, Benchmark } from '../../types/report';
import { Badge } from '../ui/Badge';

interface BenchmarkComparisonProps {
  benchmarks: Benchmark[];
  assessment: Assessment;
}

const benchmarkTones: Record<string, 'blue' | 'gold' | 'neutral'> = {
  student: 'blue',
  school: 'gold',
  national: 'neutral'
};

export function BenchmarkComparison({ benchmarks, assessment }: BenchmarkComparisonProps) {
  const range = assessment.scaleMax - assessment.scaleMin;

  return (
    <div className="rounded-[8px] border border-parchment-200 bg-white p-5 shadow-soft">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-ink-900">Benchmark comparison</h3>
          <p className="mt-1 text-sm leading-6 text-ink-600">
            Three labeled reference points on the same fictional 500-900 scale.
          </p>
        </div>
        <Badge tone="sage">On Track</Badge>
      </div>

      <div className="mt-5 space-y-4">
        {benchmarks.map((benchmark) => {
          const position = ((benchmark.score - assessment.scaleMin) / range) * 100;

          return (
            <div key={benchmark.id}>
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink-900">{benchmark.label}</p>
                  <p className="text-xs text-ink-600">{benchmark.description}</p>
                </div>
                <span className="number-font text-lg font-bold text-ink-900">{benchmark.score}</span>
              </div>
              <div
                aria-label={`${benchmark.label} scored ${benchmark.score}`}
                className="h-4 rounded-md border border-parchment-200 bg-parchment-100"
                role="img"
              >
                <div
                  className="h-full rounded-md bg-scholar-600"
                  style={{ width: `${Math.max(4, Math.min(100, position))}%` }}
                />
              </div>
              <Badge className="mt-2" tone={benchmarkTones[benchmark.id] ?? 'neutral'}>
                {benchmark.id === 'student' ? 'Student score' : 'Reference point'}
              </Badge>
            </div>
          );
        })}
      </div>

      <p className="mt-5 rounded-[8px] border border-parchment-200 bg-parchment-50 p-3 text-sm leading-6 text-ink-700">
        Eliana is above both comparison points in this fictional dataset. The difference is useful
        for context, but the next step still comes from the domain pattern: reasoning is strong,
        expression needs more deliberate practice.
      </p>
    </div>
  );
}
