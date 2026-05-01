import { MessageCircle } from 'lucide-react';
import type { AudienceMode, StudentReport } from '../types/report';
import { PageHeader } from '../components/layout/PageHeader';
import { SectionNav } from '../components/layout/SectionNav';
import { AudienceSwitcher } from '../components/report/AudienceSwitcher';
import { ReportHero } from '../components/report/ReportHero';
import { ScoreSummary } from '../components/report/ScoreSummary';
import { DomainBreakdown } from '../components/report/DomainBreakdown';
import { GrowthStory } from '../components/report/GrowthStory';
import { Recommendations } from '../components/report/Recommendations';
import { Card } from '../components/ui/Card';

interface ReportViewProps {
  report: StudentReport;
  audienceMode: AudienceMode;
  onAudienceModeChange: (mode: AudienceMode) => void;
  onOpenPrint: () => void;
}

export function ReportView({
  report,
  audienceMode,
  onAudienceModeChange,
  onOpenPrint
}: ReportViewProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <PageHeader
        actions={
          <AudienceSwitcher onChange={onAudienceModeChange} value={audienceMode} />
        }
        description="A clear, humane score report experience for helping students and families understand growth, strengths, and next steps."
        eyebrow="Digital score report"
        title="Sapientia Classical Assessment"
      />

      <Card className="mb-6 flex flex-col gap-3 border-scholar-300/35 bg-scholar-100/55 md:flex-row md:items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] border border-scholar-300 bg-white text-scholar-600">
          <MessageCircle aria-hidden="true" size={20} />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-scholar-600">
            Mode-specific framing
          </p>
          <p className="mt-1 leading-7 text-ink-700">{report.audienceIntro[audienceMode]}</p>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[250px_1fr] lg:items-start">
        <SectionNav sections={report.sections} scoreSummary={report.scoreSummary} />
        <div className="space-y-10">
          <ReportHero
            audienceMode={audienceMode}
            onOpenPrint={onOpenPrint}
            report={report}
          />
          <ScoreSummary report={report} />
          <DomainBreakdown audienceMode={audienceMode} report={report} />
          <GrowthStory audienceMode={audienceMode} report={report} />
          <Recommendations audienceMode={audienceMode} report={report} />
        </div>
      </div>
    </div>
  );
}
