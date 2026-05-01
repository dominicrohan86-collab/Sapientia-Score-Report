export type AudienceMode = 'student' | 'parent' | 'advisor';

export interface StudentProfile {
  id: string;
  name: string;
  grade: string;
  schoolLabel: string;
  pronouns: string;
}

export interface Assessment {
  name: string;
  form: string;
  testDate: string;
  reportingWindow: string;
  scaleMin: number;
  scaleMax: number;
  sampleNote: string;
}

export interface Benchmark {
  id: string;
  label: string;
  score: number;
  description: string;
}

export interface ScoreSummary {
  overallScore: number;
  maxScore: number;
  percentile: number;
  percentileLabel: string;
  growthSincePrevious: number;
  benchmarkStatus: string;
  benchmarkStatusDetail: string;
  interpretation: Record<AudienceMode, string>;
  scoreMeaning: string;
  benchmarks: Benchmark[];
}

export type BandTone = 'strong' | 'onTrack' | 'building' | 'watch';

export interface PerformanceBand {
  id: string;
  label: string;
  tone: BandTone;
  range: string;
  description: string;
}

export interface DomainResult {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  band: PerformanceBand;
  indicator: 'Strength' | 'Steady' | 'Needs practice';
  shortExplanation: string;
  recommendedAction: string;
  measures: string;
  scoreSuggests: string;
  nextStep: Record<AudienceMode, string>;
}

export interface GrowthPoint {
  date: string;
  label: string;
  overallScore: number;
  reading: number;
  grammar: number;
  logic: number;
}

export type RecommendationCategory = 'keepBuilding' | 'focusNext' | 'suggestedPractice';

export interface RecommendationContent {
  title: string;
  description: string;
  whyItMatters: string;
  action: string;
}

export interface Recommendation {
  id: string;
  category: RecommendationCategory;
  domainConnection: string;
  icon: 'spark' | 'target' | 'practice';
  content: Record<AudienceMode, RecommendationContent>;
}

export interface TooltipTerm {
  id: 'percentile' | 'benchmark' | 'growth';
  label: string;
  definition: string;
  plainLanguage: string;
}

export interface ReportSection {
  id: string;
  label: string;
  description: string;
}

export interface PrintPreviewState {
  isOpen: boolean;
  requestedFrom: 'topbar' | 'report' | null;
}

export interface HandoffToken {
  name: string;
  value: string;
  usage: string;
  swatch?: string;
}

export type EmptyStateReason = 'pendingRelease' | 'accessExpired' | 'dataReview';

export interface EmptyStateContent {
  reason: EmptyStateReason;
  title: string;
  explanation: string;
  nextAction: string;
  supportCopy: string;
}

export interface StudentReport {
  profile: StudentProfile;
  assessment: Assessment;
  scoreSummary: ScoreSummary;
  domains: DomainResult[];
  growth: GrowthPoint[];
  recommendations: Recommendation[];
  tooltipTerms: TooltipTerm[];
  sections: ReportSection[];
  audienceIntro: Record<AudienceMode, string>;
  growthInterpretation: Record<AudienceMode, string>;
  parentConversationPrompts: string[];
  advisorNotes: string[];
  printFooter: string;
  unavailable: EmptyStateContent;
}
