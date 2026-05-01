import type { AudienceMode, RecommendationCategory, StudentReport } from '../../types/report';
import { categoryLabel } from '../../lib/format';
import { RecommendationCard } from './RecommendationCard';

interface RecommendationsProps {
  report: StudentReport;
  audienceMode: AudienceMode;
}

const categories: RecommendationCategory[] = ['keepBuilding', 'focusNext', 'suggestedPractice'];

export function Recommendations({ report, audienceMode }: RecommendationsProps) {
  return (
    <section className="report-section space-y-5" id="recommendations">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
          Recommendations
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-ink-900">
          What to do next
        </h2>
        <p className="mt-2 max-w-3xl leading-7 text-ink-700">
          Recommendations are grouped by intent and rewritten for each audience so the same score
          pattern becomes usable for students, families, and advisors.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {categories.map((category) => {
          const recommendation = report.recommendations.find((item) => item.category === category)!;
          return (
            <div key={category}>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-ink-600">
                {categoryLabel(category)}
              </p>
              <RecommendationCard
                audienceMode={audienceMode}
                recommendation={recommendation}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
