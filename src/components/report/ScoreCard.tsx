import type { ScoreSummary } from '../../types/report';
import { toPercent } from '../../lib/format';
import { Card } from '../ui/Card';

interface ScoreCardProps {
  scoreSummary: ScoreSummary;
}

export function ScoreCard({ scoreSummary }: ScoreCardProps) {
  const percent = toPercent(scoreSummary.overallScore, scoreSummary.maxScore);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <Card className="flex flex-col gap-5 md:flex-row md:items-center">
      <div className="relative mx-auto h-40 w-40 shrink-0">
        <svg
          aria-hidden="true"
          className="-rotate-90"
          height="160"
          viewBox="0 0 160 160"
          width="160"
        >
          <circle
            cx="80"
            cy="80"
            fill="none"
            r={radius}
            stroke="#eadfc9"
            strokeWidth="14"
          />
          <circle
            cx="80"
            cy="80"
            fill="none"
            r={radius}
            stroke="#426f8e"
            strokeLinecap="round"
            strokeWidth="14"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="number-font text-4xl font-black text-ink-900">
            {scoreSummary.overallScore}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-600">
            of {scoreSummary.maxScore}
          </span>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
          Score meaning
        </p>
        <h2 className="mt-2 text-2xl font-bold text-ink-900">
          Secure progress with one clear focus area
        </h2>
        <p className="mt-3 leading-7 text-ink-700">{scoreSummary.scoreMeaning}</p>
        <p className="mt-4 text-sm leading-6 text-ink-600">
          The circular visualization shows {percent}% of the fictional score scale. The number is
          paired with benchmark and growth context so it does not stand alone as a judgment.
        </p>
      </div>
    </Card>
  );
}
