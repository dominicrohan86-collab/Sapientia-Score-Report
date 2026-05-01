import { Lightbulb, Sparkles, Target } from 'lucide-react';
import type { AudienceMode, Recommendation } from '../../types/report';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface RecommendationCardProps {
  recommendation: Recommendation;
  audienceMode: AudienceMode;
}

const iconMap = {
  spark: Sparkles,
  target: Target,
  practice: Lightbulb
};

export function RecommendationCard({ recommendation, audienceMode }: RecommendationCardProps) {
  const content = recommendation.content[audienceMode];
  const Icon = iconMap[recommendation.icon];

  return (
    <Card className="h-full">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] border border-gold-500/30 bg-gold-500/10 text-gold-600">
          <Icon aria-hidden="true" size={22} />
        </div>
        <div>
          <Badge tone={recommendation.category === 'focusNext' ? 'amber' : 'blue'}>
            {recommendation.domainConnection}
          </Badge>
          <h3 className="mt-3 text-xl font-bold text-ink-900">{content.title}</h3>
        </div>
      </div>
      <p className="mt-4 leading-7 text-ink-700">{content.description}</p>
      <div className="mt-5 space-y-3 border-t border-parchment-200 pt-4">
        <p className="text-sm leading-6 text-ink-700">
          <span className="font-bold text-ink-900">Why it matters: </span>
          {content.whyItMatters}
        </p>
        <p className="rounded-[8px] border border-parchment-200 bg-parchment-50 p-3 text-sm font-semibold leading-6 text-ink-800">
          {content.action}
        </p>
      </div>
    </Card>
  );
}
