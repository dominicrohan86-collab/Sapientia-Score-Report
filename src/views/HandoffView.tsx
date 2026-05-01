import {
  BarChart3,
  CheckCircle2,
  CircleHelp,
  FileText,
  Palette,
  Ruler,
  ShieldCheck,
  Smartphone,
  Type,
  Wrench
} from 'lucide-react';
import type { StudentReport } from '../types/report';
import { colorTokens, spacingTokens, typographyTokens } from '../data/reportData';
import { PageHeader } from '../components/layout/PageHeader';
import { HandoffSection } from '../components/handoff/HandoffSection';
import { DesignTokenSwatch } from '../components/handoff/DesignTokenSwatch';
import { EmptyState } from '../components/ui/EmptyState';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

interface HandoffViewProps {
  report: StudentReport;
}

const patternNotes = [
  {
    icon: FileText,
    title: 'Report card components',
    copy:
      'Cards use a restrained 8px radius, clear section headings, and enough padding for parent-friendly reading. Repeated cards are individual units, while page sections remain unframed.'
  },
  {
    icon: BarChart3,
    title: 'Chart usage',
    copy:
      'Charts are paired with captions and written summaries. Bars and lines use color plus labels, values, and domain names so meaning is not color-only.'
  },
  {
    icon: CircleHelp,
    title: 'Tooltip/info pattern',
    copy:
      'Info buttons are keyboard-focusable and expose plain-language definitions for percentile, benchmark, and growth. The same terms appear in visible copy.'
  },
  {
    icon: ShieldCheck,
    title: 'Benchmark visual pattern',
    copy:
      'Benchmark comparisons are reference points, not judgments. Student, school median, and national reference group are all labeled with scores and descriptions.'
  }
];

export function HandoffView({ report }: HandoffViewProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
      <PageHeader
        description="A compact design handoff for the score report system: tokens, patterns, responsive behavior, print rules, accessibility, and implementation notes."
        eyebrow="Design handoff"
        title="Sapientia reporting system"
      />

      <div className="space-y-10">
        <HandoffSection
          description="The palette is warm and academic without copying any real assessment brand. Parchment reduces the clinical feel of score reporting; ink and scholar blue keep the interface credible and readable."
          eyebrow="Foundation"
          title="Color tokens"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {colorTokens.map((token) => (
              <DesignTokenSwatch key={token.name} token={token} />
            ))}
          </div>
        </HandoffSection>

        <HandoffSection
          description="The type scale separates report hierarchy from card hierarchy. Large numerals are reserved for assessment outcomes; body copy stays editorial and calm."
          eyebrow="Foundation"
          title="Typography and spacing"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2 text-ink-700">
                <Type aria-hidden="true" size={19} />
                <h3 className="font-bold text-ink-900">Typography scale</h3>
              </div>
              <div className="grid gap-3">
                {typographyTokens.map((token) => (
                  <DesignTokenSwatch key={token.name} token={token} />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2 text-ink-700">
                <Ruler aria-hidden="true" size={19} />
                <h3 className="font-bold text-ink-900">Spacing scale</h3>
              </div>
              <div className="grid gap-3">
                {spacingTokens.map((token) => (
                  <DesignTokenSwatch key={token.name} token={token} />
                ))}
              </div>
            </div>
          </div>
        </HandoffSection>

        <HandoffSection
          description="These are the key patterns a developer would reuse across future reports and reporting states."
          eyebrow="Components"
          title="Report patterns"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {patternNotes.map((note) => {
              const Icon = note.icon;
              return (
                <div className="rounded-[8px] border border-parchment-200 bg-white p-4" key={note.title}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold-500/30 bg-gold-500/10 text-gold-600">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <h3 className="font-bold text-ink-900">{note.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-700">{note.copy}</p>
                </div>
              );
            })}
          </div>
        </HandoffSection>

        <HandoffSection
          description="The audience switcher is part of the product strategy. It changes interpretation, recommendations, domain next steps, and growth narrative rather than only changing labels."
          eyebrow="Content strategy"
          title="Audience mode behavior"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            <Card className="p-4" tone="plain">
              <Badge tone="blue">Student</Badge>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                Encouraging, direct, and manageable. Copy uses "you" and turns scores into one
                next action a student can try.
              </p>
            </Card>
            <Card className="p-4" tone="plain">
              <Badge tone="gold">Parent</Badge>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                Warm and conversation-oriented. Parent copy includes prompts such as "
                {report.parentConversationPrompts[0]}".
              </p>
            </Card>
            <Card className="p-4" tone="plain">
              <Badge tone="sage">Advisor</Badge>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                Precise and support-oriented. Advisor copy includes intervention notes such as "
                {report.advisorNotes[1]}".
              </p>
            </Card>
          </div>
        </HandoffSection>

        <HandoffSection
          description="The web report is spacious, interactive, and section-based. The print view becomes a compact document with app navigation hidden and page-break controls applied."
          eyebrow="Print and responsive"
          title="Print styles and responsive states"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[8px] border border-parchment-200 bg-white p-4">
              <div className="flex items-center gap-2 text-ink-700">
                <FileText aria-hidden="true" size={19} />
                <h3 className="font-bold text-ink-900">Print layout</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                The print preview uses a document-specific layout, compact tables, print-safe
                contrast, a sample-data footer, and @media print rules that hide navigation and
                interactive controls.
              </p>
            </div>
            <div className="rounded-[8px] border border-parchment-200 bg-white p-4">
              <div className="flex items-center gap-2 text-ink-700">
                <Smartphone aria-hidden="true" size={19} />
                <h3 className="font-bold text-ink-900">Responsive behavior</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                Desktop uses sticky section navigation and multi-column report sections. Tablet
                stacks chart and narrative cards. Mobile moves to one column with horizontal
                section navigation and comfortable tap targets.
              </p>
            </div>
          </div>
        </HandoffSection>

        <HandoffSection
          description="The interface uses semantic sections, accessible names for icon controls, visible focus states, text equivalents for charts, keyboard-operable expand/collapse cards, and color-plus-text status labels."
          eyebrow="Quality"
          title="Accessibility notes"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              'Audience switcher exposes a radiogroup pattern and supports arrow keys.',
              'Domain cards use aria-expanded and aria-controls.',
              'Print preview is a modal dialog with Escape-to-close behavior.',
              'Charts include written summaries directly below the visuals.',
              'Benchmark, percentile, and growth definitions are available from focusable info buttons.',
              'Status is communicated with labels, scores, and explanations rather than color alone.'
            ].map((item) => (
              <div className="flex gap-3 rounded-[8px] border border-parchment-200 bg-white p-4" key={item}>
                <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-sage-600" size={19} />
                <p className="text-sm leading-6 text-ink-700">{item}</p>
              </div>
            ))}
          </div>
        </HandoffSection>

        <HandoffSection
          description="Unavailable states should be calm, helpful, and specific. They should tell families what is happening and what to do next without implying failure."
          eyebrow="States"
          title="Empty, loading, and error states"
        >
          <div className="mb-5 flex items-center gap-2 text-ink-700">
            <Wrench aria-hidden="true" size={19} />
            <p className="text-sm font-semibold">Report unavailable component example</p>
          </div>
          <EmptyState content={report.unavailable} />
        </HandoffSection>

        <HandoffSection
          description="These notes frame the portfolio story behind the implementation."
          eyebrow="Case study"
          title="Design rationale"
        >
          <div className="space-y-4 text-sm leading-7 text-ink-700">
            <p>
              Warm academic styling helps the report feel credible without becoming punitive. The
              highest hierarchy is reserved for the student, the assessment, and the overall score,
              while interpretive copy appears immediately nearby to make the meaning humane.
            </p>
            <p>
              Charts are never left alone. Every visualization is paired with a sentence that
              explains the "so what," which is essential in score reporting for students and
              families who may not read charts every day.
            </p>
            <p>
              The implementation stays modular so a designer or engineer could extend the score
              model, add additional domains, or adapt the print layout without rewriting the whole
              application.
            </p>
          </div>
        </HandoffSection>
      </div>
    </div>
  );
}
