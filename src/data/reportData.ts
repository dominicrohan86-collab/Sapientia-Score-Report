import type {
  EmptyStateContent,
  HandoffToken,
  PerformanceBand,
  ReportSection,
  StudentReport,
  TooltipTerm
} from '../types/report';

const bands: Record<string, PerformanceBand> = {
  advanced: {
    id: 'advanced',
    label: 'Strong evidence',
    tone: 'strong',
    range: '780-900',
    description: 'Consistent command with room to keep refining precision.'
  },
  onTrack: {
    id: 'on-track',
    label: 'On Track',
    tone: 'onTrack',
    range: '700-779',
    description: 'Solid progress toward grade-level expectations.'
  },
  building: {
    id: 'building',
    label: 'Building',
    tone: 'building',
    range: '620-699',
    description: 'Developing skill that benefits from focused practice.'
  },
  watch: {
    id: 'watch',
    label: 'Needs support',
    tone: 'watch',
    range: '540-619',
    description: 'A priority area for guided instruction and check-ins.'
  }
};

const sections: ReportSection[] = [
  {
    id: 'overview',
    label: 'Overview',
    description: 'Score highlights and audience-aware interpretation.'
  },
  {
    id: 'summary',
    label: 'Score Summary',
    description: 'Overall score, benchmarks, percentile, and growth context.'
  },
  {
    id: 'domains',
    label: 'Domains',
    description: 'Skill-level strengths, needs, and next steps.'
  },
  {
    id: 'growth',
    label: 'Growth Story',
    description: 'Performance across three assessment moments.'
  },
  {
    id: 'recommendations',
    label: 'Recommendations',
    description: 'Audience-specific actions connected to the score pattern.'
  }
];

const tooltipTerms: TooltipTerm[] = [
  {
    id: 'percentile',
    label: 'Percentile',
    definition:
      'A percentile compares this result with a fictional reference group from the same grade band.',
    plainLanguage:
      '78th percentile means this score is higher than about 78 out of 100 comparable fictional results.'
  },
  {
    id: 'benchmark',
    label: 'Benchmark',
    definition:
      'A benchmark is a planning reference, not a label. It gives families and advisors a shared point of comparison.',
    plainLanguage:
      'On Track means the result is above the readiness marker for this reporting window.'
  },
  {
    id: 'growth',
    label: 'Growth',
    definition:
      'Growth is the score change since the previous assessment on the same fictional scale.',
    plainLanguage:
      '+34 means Eliana gained 34 scale-score points since the winter administration.'
  }
];

const unavailable: EmptyStateContent = {
  reason: 'dataReview',
  title: 'Report unavailable while results are reviewed',
  explanation:
    'This sample state shows how the product would explain a temporary reporting delay without making families feel something has gone wrong.',
  nextAction:
    'Check again after the review window closes or ask the learning office to confirm that the student roster is current.',
  supportCopy:
    'For this fictional demo, support copy would route families to the Sapientia reporting coordinator rather than an external support desk.'
};

export const studentReport: StudentReport = {
  profile: {
    id: 'sample-eliana-mercer',
    name: 'Eliana Mercer',
    grade: 'Grade 8',
    schoolLabel: 'Northfield Tutorial House',
    pronouns: 'she/her'
  },
  assessment: {
    name: 'Sapientia Classical Assessment',
    form: 'Spring Form B',
    testDate: 'April 18, 2026',
    reportingWindow: 'Spring 2026',
    scaleMin: 500,
    scaleMax: 900,
    sampleNote: 'Fictional sample data for portfolio demonstration'
  },
  scoreSummary: {
    overallScore: 742,
    maxScore: 900,
    percentile: 78,
    percentileLabel: '78th percentile',
    growthSincePrevious: 34,
    benchmarkStatus: 'On Track',
    benchmarkStatusDetail:
      'Above the spring readiness marker, with writing precision still worth watching.',
    interpretation: {
      student:
        'You are showing steady command of the assessment, especially where you explain patterns and weigh evidence. Grammar and expression are the best places to practice next.',
      parent:
        'Eliana is showing steady growth overall. A helpful conversation might begin with: "Which section felt most manageable this time, and which one needed the most patience?"',
      advisor:
        'Overall performance is secure for the spring benchmark. Consider targeted writing support and a short-cycle check-in focused on claim-evidence structure.'
    },
    scoreMeaning:
      'A 742 indicates secure progress on the fictional Sapientia scale. The result is strongest in reasoning-heavy tasks and more uneven in written expression.',
    benchmarks: [
      {
        id: 'student',
        label: 'Eliana',
        score: 742,
        description: 'Current spring score'
      },
      {
        id: 'school',
        label: 'School median',
        score: 718,
        description: 'Fictional middle score for this tutorial house'
      },
      {
        id: 'national',
        label: 'National reference group',
        score: 705,
        description: 'Fictional comparison group for Grade 8'
      }
    ]
  },
  domains: [
    {
      id: 'reading',
      name: 'Reading & Interpretation',
      score: 770,
      maxScore: 900,
      band: bands.onTrack,
      indicator: 'Strength',
      shortExplanation:
        'Eliana reads closely and usually connects textual details to a larger claim.',
      recommendedAction:
        'Practice naming the evidence that makes an interpretation convincing.',
      measures:
        'Close reading, inference, vocabulary in context, and interpretation of literary and historical passages.',
      scoreSuggests:
        'The score suggests consistent comprehension with especially strong work on inference questions.',
      nextStep: {
        student:
          'When you choose an answer, say the line or phrase that proved it before moving on.',
        parent:
          'Ask Eliana to point to one sentence that changed how she understood a passage.',
        advisor:
          'Use short evidence annotation routines to preserve strength while building transfer to writing.'
      }
    },
    {
      id: 'grammar',
      name: 'Grammar & Expression',
      score: 681,
      maxScore: 900,
      band: bands.building,
      indicator: 'Needs practice',
      shortExplanation:
        'Sentence control is improving, but revision choices are less consistent under timed conditions.',
      recommendedAction:
        'Use brief revision drills focused on sentence boundaries and claim-evidence flow.',
      measures:
        'Grammar, sentence clarity, usage, revision judgment, and concise written expression.',
      scoreSuggests:
        'The score suggests a real foundation, with uneven accuracy when several grammar choices compete.',
      nextStep: {
        student:
          'Read one revised sentence aloud and ask: "Does this sound clear, complete, and specific?"',
        parent:
          'Invite Eliana to revise one paragraph from schoolwork for clarity, not length.',
        advisor:
          'Plan two-week microcycles on sentence boundaries, transitions, and claim-evidence cohesion.'
      }
    },
    {
      id: 'quantitative',
      name: 'Quantitative Reasoning',
      score: 735,
      maxScore: 900,
      band: bands.onTrack,
      indicator: 'Steady',
      shortExplanation:
        'Problem solving is dependable, especially when the task is presented visually or step by step.',
      recommendedAction:
        'Keep practicing how to explain the reasoning path, not just the final answer.',
      measures:
        'Number sense, proportional reasoning, visual models, multi-step problem solving, and estimation.',
      scoreSuggests:
        'The score suggests readiness with occasional slips on multi-step setup or checking reasonableness.',
      nextStep: {
        student:
          'Write one line that explains why your setup fits the question before calculating.',
        parent:
          'When homework allows, ask Eliana to explain the first step before solving the full problem.',
        advisor:
          'Continue mixed practice with emphasis on setup language and error-checking routines.'
      }
    },
    {
      id: 'logic',
      name: 'Logic & Analysis',
      score: 790,
      maxScore: 900,
      band: bands.advanced,
      indicator: 'Strength',
      shortExplanation:
        'This is the strongest domain. Eliana recognizes patterns and evaluates arguments with care.',
      recommendedAction:
        'Stretch this strength by asking for written explanations of reasoning.',
      measures:
        'Argument structure, pattern recognition, analogical reasoning, evidence evaluation, and inference chains.',
      scoreSuggests:
        'The score suggests confident analysis and the ability to track multi-step reasoning.',
      nextStep: {
        student:
          'You grew most in Logic & Analysis. Keep practicing how you explain your reasoning step by step.',
        parent:
          'Celebrate the reasoning strength, then ask Eliana to teach one logic problem back in her own words.',
        advisor:
          'Use logic tasks as a bridge into structured analytical writing and Socratic discussion.'
      }
    },
    {
      id: 'classical',
      name: 'Classical Knowledge',
      score: 724,
      maxScore: 900,
      band: bands.onTrack,
      indicator: 'Steady',
      shortExplanation:
        'Background knowledge is solid and helps Eliana make sense of classical references.',
      recommendedAction:
        'Build fluency by connecting names, places, and ideas to short source passages.',
      measures:
        'Classical vocabulary, historical context, cultural references, and source-based understanding.',
      scoreSuggests:
        'The score suggests useful recall with room to strengthen connections across periods and texts.',
      nextStep: {
        student:
          'Make a small map of names, places, and ideas after each reading so connections stay visible.',
        parent:
          'Use a short dinner-table prompt: "What old idea showed up in a new way this week?"',
        advisor:
          'Pair retrieval practice with source excerpts so recall supports interpretation rather than memorization alone.'
      }
    }
  ],
  growth: [
    {
      date: '2025-10-22',
      label: 'Oct 2025',
      overallScore: 694,
      reading: 728,
      grammar: 660,
      logic: 724
    },
    {
      date: '2026-01-29',
      label: 'Jan 2026',
      overallScore: 708,
      reading: 742,
      grammar: 672,
      logic: 748
    },
    {
      date: '2026-04-18',
      label: 'Apr 2026',
      overallScore: 742,
      reading: 770,
      grammar: 681,
      logic: 790
    }
  ],
  recommendations: [
    {
      id: 'reasoning-to-writing',
      category: 'keepBuilding',
      domainConnection: 'Logic & Analysis',
      icon: 'spark',
      content: {
        student: {
          title: 'Use your reasoning strength',
          description:
            'You are good at seeing how ideas fit together. Bring that same step-by-step thinking into written answers.',
          whyItMatters:
            'Strong reasoning becomes easier for others to see when you name each step clearly.',
          action:
            'After a logic or reading question, write one sentence that begins, "I know this because..."'
        },
        parent: {
          title: 'Invite reasoning out loud',
          description:
            'Eliana can often see the logic of a problem before she explains it fully.',
          whyItMatters:
            'Talking through reasoning helps her transfer a strength into writing and discussion.',
          action:
            'Ask, "What made that answer make sense to you?" and give her time to explain without rushing.'
        },
        advisor: {
          title: 'Transfer analysis into written claims',
          description:
            'Logic & Analysis is a clear asset. Use it as the entry point for stronger written explanation.',
          whyItMatters:
            'The score pattern suggests reasoning is ahead of expression, so transfer work should be explicit.',
          action:
            'Use claim-evidence-reasoning frames after logic tasks twice weekly for three weeks.'
        }
      }
    },
    {
      id: 'grammar-expression-cycle',
      category: 'focusNext',
      domainConnection: 'Grammar & Expression',
      icon: 'target',
      content: {
        student: {
          title: 'Make revision smaller',
          description:
            'You do not need to fix everything at once. Start by checking sentence boundaries and the clearest evidence.',
          whyItMatters:
            'Small revision habits make timed writing feel less crowded.',
          action:
            'Circle one sentence per paragraph and revise it for clarity before checking anything else.'
        },
        parent: {
          title: 'Support calm revision',
          description:
            'Writing accuracy is the most uneven area, but the data points to practice rather than alarm.',
          whyItMatters:
            'Short, low-pressure revision routines build confidence faster than long correction sessions.',
          action:
            'Use this prompt: "Which sentence says your idea most clearly, and which sentence needs one more pass?"'
        },
        advisor: {
          title: 'Target sentence control',
          description:
            'Grammar & Expression remains below the other domains and should anchor the next support cycle.',
          whyItMatters:
            'Improved sentence boundaries and transitions will make reasoning visible across constructed responses.',
          action:
            'Schedule a two-week intervention on sentence completeness, transition choice, and evidence integration.'
        }
      }
    },
    {
      id: 'classical-fluency-practice',
      category: 'suggestedPractice',
      domainConnection: 'Classical Knowledge',
      icon: 'practice',
      content: {
        student: {
          title: 'Build a quick connection habit',
          description:
            'Classical references are easier to remember when you connect each one to a person, place, or idea.',
          whyItMatters:
            'The score is on track, and better connections can help reading feel smoother.',
          action:
            'Make a three-column note after reading: name, context, why it matters.'
        },
        parent: {
          title: 'Use short recall conversations',
          description:
            'A few minutes of discussion can help classical knowledge become more flexible and useful.',
          whyItMatters:
            'The goal is not memorizing isolated facts. The goal is recognizing meaning in context.',
          action:
            'Ask, "Where have you seen this idea before?" during reading or review.'
        },
        advisor: {
          title: 'Pair retrieval with source context',
          description:
            'Classical Knowledge is secure but can become more connected across readings.',
          whyItMatters:
            'Contextual retrieval supports both interpretation and durable recall.',
          action:
            'Add five-minute retrieval warmups tied to a short excerpt, then ask for one cross-text connection.'
        }
      }
    }
  ],
  tooltipTerms,
  sections,
  audienceIntro: {
    student:
      'This view is written for Eliana: clear, direct, and focused on what to try next.',
    parent:
      'This view is written for a family conversation: warm context, practical prompts, and a calm next step.',
    advisor:
      'This view is written for planning: concise interpretation, instructional focus, and follow-up signals.'
  },
  growthInterpretation: {
    student:
      'Your biggest jump was in Logic & Analysis, and your overall score rose 34 points. Grammar is moving more slowly, so keep the next practice routine small and steady.',
    parent:
      'The growth pattern is encouraging: Eliana made the strongest gain in reasoning while writing skills improved more gradually. That is a useful, manageable focus for the next cycle.',
    advisor:
      'Growth is strongest in Logic & Analysis (+42 since winter) and solid overall (+34). Grammar & Expression remains comparatively flat, suggesting targeted writing intervention rather than broad remediation.'
  },
  parentConversationPrompts: [
    'Which section felt most manageable this time?',
    'Where did you slow down and check your thinking?',
    'What is one writing habit that would make the next test feel easier?'
  ],
  advisorNotes: [
    'Use Logic & Analysis as an instructional bridge into written reasoning.',
    'Prioritize short-cycle writing support before the next administration.',
    'Watch whether grammar gains transfer into reading-response explanations.'
  ],
  printFooter:
    'Sapientia Score Report is a fictional portfolio project. All names, scores, references, and reporting language are sample content.',
  unavailable
};

export const colorTokens: HandoffToken[] = [
  {
    name: 'Ink 900',
    value: '#142033',
    usage: 'Primary text, headings, and score numerals',
    swatch: '#142033'
  },
  {
    name: 'Parchment 50',
    value: '#fffdf7',
    usage: 'Page canvas and print background',
    swatch: '#fffdf7'
  },
  {
    name: 'Muted Gold',
    value: '#b08a32',
    usage: 'Benchmark accents, dividers, and premium academic emphasis',
    swatch: '#b08a32'
  },
  {
    name: 'Scholar Blue',
    value: '#426f8e',
    usage: 'Charts, links, and selected controls',
    swatch: '#426f8e'
  },
  {
    name: 'Sage',
    value: '#54775d',
    usage: 'Strength states and positive growth cues',
    swatch: '#54775d'
  },
  {
    name: 'Amber',
    value: '#9c6316',
    usage: 'Watch states and focus-next signals',
    swatch: '#9c6316'
  }
];

export const spacingTokens: HandoffToken[] = [
  { name: 'Space 2', value: '8px', usage: 'Inline gaps and compact control padding' },
  { name: 'Space 4', value: '16px', usage: 'Card internal rhythm and mobile spacing' },
  { name: 'Space 6', value: '24px', usage: 'Section grouping and chart breathing room' },
  { name: 'Space 10', value: '40px', usage: 'Major report section separation' },
  { name: 'Space 16', value: '64px', usage: 'Page-level vertical rhythm on desktop' }
];

export const typographyTokens: HandoffToken[] = [
  { name: 'Display', value: '40px / 1.05', usage: 'Report title and portfolio hero moments' },
  { name: 'Report heading', value: '30px / 1.15', usage: 'Major score report section headings' },
  { name: 'Section heading', value: '22px / 1.25', usage: 'Cards and handoff sections' },
  { name: 'Body', value: '16px / 1.65', usage: 'Interpretive copy and recommendations' },
  { name: 'Caption', value: '13px / 1.45', usage: 'Chart summaries, footnotes, and labels' },
  { name: 'Metric', value: '56px / 1', usage: 'Overall score and key numeric moments' }
];
