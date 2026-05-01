import { Printer } from 'lucide-react';
import type { AudienceMode, StudentReport } from '../../types/report';
import { categoryLabel, formatGrowth } from '../../lib/format';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

interface PrintPreviewProps {
  report: StudentReport;
  audienceMode: AudienceMode;
  isOpen: boolean;
  onClose: () => void;
}

export function PrintPreview({ report, audienceMode, isOpen, onClose }: PrintPreviewProps) {
  const { profile, assessment, scoreSummary } = report;

  function handlePrint() {
    window.print();
  }

  return (
    <Modal
      footer={
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-600">
            Print styling hides app navigation and preserves this document layout.
          </p>
          <div className="flex gap-2">
            <Button onClick={onClose} variant="secondary">
              Close
            </Button>
            <Button
              icon={<Printer aria-hidden="true" size={18} />}
              onClick={handlePrint}
              variant="primary"
            >
              Print Report
            </Button>
          </div>
        </div>
      }
      isOpen={isOpen}
      onClose={onClose}
      title="Print / PDF Preview"
    >
      <div className="bg-slate-200/70 p-3 md:p-6">
        <article className="print-document mx-auto max-w-[8.5in] bg-white text-ink-900 shadow-soft">
          <section className="print-page avoid-break min-h-[10.7in] p-8">
            <header className="flex items-start justify-between gap-6 border-b-2 border-ink-900 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                  {assessment.reportingWindow}
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold">{assessment.name}</h2>
                <p className="mt-1 text-sm text-ink-600">{assessment.form}</p>
              </div>
              <div className="text-right text-sm text-ink-700">
                <p className="font-bold text-ink-900">{profile.name}</p>
                <p>{profile.grade}</p>
                <p>{assessment.testDate}</p>
              </div>
            </header>

            <div className="mt-6 grid grid-cols-[1fr_1.1fr] gap-5">
              <div className="rounded-[8px] border border-parchment-200 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-600">
                  Overall score
                </p>
                <p className="number-font mt-2 text-6xl font-black">{scoreSummary.overallScore}</p>
                <p className="mt-1 text-sm text-ink-600">out of {scoreSummary.maxScore}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="font-bold">{scoreSummary.percentileLabel}</p>
                    <p className="text-ink-600">Percentile</p>
                  </div>
                  <div>
                    <p className="number-font font-bold">
                      {formatGrowth(scoreSummary.growthSincePrevious)}
                    </p>
                    <p className="text-ink-600">Growth</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[8px] border border-parchment-200 bg-parchment-50 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold-600">
                  Interpretation
                </p>
                <h3 className="mt-2 text-2xl font-bold">{scoreSummary.benchmarkStatus}</h3>
                <p className="mt-2 text-sm leading-6">{scoreSummary.interpretation[audienceMode]}</p>
                <p className="mt-3 text-xs leading-5 text-ink-600">{assessment.sampleNote}</p>
              </div>
            </div>

            <section className="avoid-break mt-7">
              <h3 className="text-lg font-bold">Benchmark comparison</h3>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {scoreSummary.benchmarks.map((benchmark) => (
                  <div className="rounded-[8px] border border-parchment-200 p-3" key={benchmark.id}>
                    <p className="text-xs font-bold uppercase tracking-[0.1em] text-ink-600">
                      {benchmark.label}
                    </p>
                    <p className="number-font mt-2 text-2xl font-black">{benchmark.score}</p>
                    <p className="mt-1 text-xs leading-5 text-ink-600">{benchmark.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="avoid-break mt-7">
              <h3 className="text-lg font-bold">Domain table</h3>
              <table className="mt-3 w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-ink-900">
                    <th className="py-2 pr-3">Domain</th>
                    <th className="py-2 pr-3">Score</th>
                    <th className="py-2 pr-3">Band</th>
                    <th className="py-2">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {report.domains.map((domain) => (
                    <tr className="border-b border-parchment-200" key={domain.id}>
                      <td className="py-2 pr-3 font-semibold">{domain.name}</td>
                      <td className="number-font py-2 pr-3 font-bold">{domain.score}</td>
                      <td className="py-2 pr-3">{domain.band.label}</td>
                      <td className="py-2">{domain.indicator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>

            <section className="avoid-break mt-7 grid grid-cols-[0.9fr_1.1fr] gap-5">
              <div>
                <h3 className="text-lg font-bold">Growth summary</h3>
                <p className="mt-2 text-sm leading-6">{report.growthInterpretation[audienceMode]}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Recommendations</h3>
                <ul className="mt-2 space-y-2 text-sm leading-6">
                  {report.recommendations.map((recommendation) => (
                    <li key={recommendation.id}>
                      <strong>{categoryLabel(recommendation.category)}:</strong>{' '}
                      {recommendation.content[audienceMode].action}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <footer className="mt-8 border-t border-parchment-200 pt-4 text-xs leading-5 text-ink-600">
              {report.printFooter}
            </footer>
          </section>
        </article>
      </div>
    </Modal>
  );
}
