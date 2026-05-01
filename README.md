# Sapientia Score Report

Sapientia Score Report is a fictional portfolio project: a polished digital score report experience for a classical education assessment product. It is designed for students, parents, and educators who need to understand performance, growth, strengths, and next steps without feeling overwhelmed by assessment jargon.

No real company names, logos, copied brand language, real test content, APIs, or real student data are used. All reporting content is fictional sample data.

## Product problem

Assessment reports often over-index on numbers and under-explain what families should do next. This project explores how a score report can feel credible, humane, and actionable while still respecting the complexity of performance data.

## Target users

- Students who need encouragement and one manageable next step.
- Parents who need clear interpretation and conversation prompts.
- Educators/advisors who need support signals, instructional planning notes, and follow-up priorities.

## Design goals

- Make the overall score prominent without making it punitive.
- Pair every chart with plain-language interpretation.
- Show benchmark context without implying a fixed student label.
- Make domain strengths and needs specific enough to guide action.
- Provide audience-specific copy for students, parents, and advisors.
- Include a print/PDF-style view that feels intentionally designed.
- Document implementation patterns in a handoff page.

## Key screens

- Full score report with report hero, score summary, domains, growth story, and recommendations.
- Score summary with overall score, percentile, growth, and benchmark comparison.
- Domain breakdown with Recharts visualization and expandable domain cards.
- Growth story with a three-date line chart and narrative interpretation.
- Audience-specific recommendations for Keep Building, Focus Next, and Suggested Practice.
- Print/PDF preview with compact document layout and print styles.
- Handoff/design system page documenting tokens, patterns, accessibility, print, responsive behavior, and empty states.

## Audience mode strategy

The segmented control changes more than labels. Student View uses direct "you" language and manageable actions. Parent View adds warm interpretation, home-support suggestions, and conversation prompts. Advisor View becomes more precise, with intervention notes and follow-up planning language.

## Score report UX writing strategy

The copy avoids alarm, jargon, and vague praise. It names the score pattern honestly: strong overall performance, strongest growth in Logic & Analysis, and uneven Grammar & Expression. Recommendations connect directly to those patterns.

## Data visualization rationale

The overall score is paired with a circular progress visualization, benchmark comparison, and explanatory text. Domain scores use a horizontal Recharts bar chart with labels and values. Growth uses a line chart across three fictional dates, with Overall, Logic, and Grammar shown together to reveal nuance behind the headline gain.

## Accessibility considerations

- Semantic sections and headings structure the report.
- Icon-only controls have accessible names.
- Audience switcher uses a radiogroup pattern and arrow-key support.
- Domain cards expose expanded/collapsed state with `aria-expanded`.
- Info tooltips are focusable and paired with visible plain-language explanations.
- Charts include written summaries below the visual.
- Scores, status, and growth do not rely on color alone.
- Focus states are visible.
- Mobile tap targets remain comfortable.
- Reduced motion preferences are respected in CSS.

## Print/PDF strategy

The Print/PDF Preview is not a raw browser dump. It uses a compact document layout with student summary, score highlights, benchmark comparison, domain table, growth summary, recommendations, footer, and fictional sample-data note. `@media print` hides app navigation and interactive controls, preserves print-safe colors, and avoids awkward page breaks where practical.

## Responsive behavior

Desktop uses a spacious report layout with sticky section navigation and two-column report sections where helpful. Tablet stacks major panels while keeping charts readable. Mobile moves to one column, keeps the section nav horizontally scrollable, and preserves comfortable control sizing.

## Mock data disclaimer

All names, scores, dates, recommendations, benchmark values, and report language are fictional. The sample student is Eliana Mercer, Grade 8, with a fictional Sapientia Classical Assessment result.

## How to run locally

```bash
npm install
npm run dev
npm run build
```

## Testing / QA

Automated tests are included with Vitest and React Testing Library.

```bash
npm run test
npm run typecheck
```

Manual QA checklist:

- Audience switcher changes interpretation, recommendations, growth copy, and domain next steps.
- Print preview opens and closes.
- Print Report button calls the browser print dialog.
- Section nav scrolls to Overview, Score Summary, Domains, Growth Story, and Recommendations.
- Domain cards expand and collapse.
- Tooltips/popovers work for percentile, benchmark, and growth.
- Mobile layout is checked for no horizontal overflow.
- Keyboard navigation is checked for top navigation, audience switcher, tooltips, domain cards, and modal close.
- Color contrast is checked for body copy, labels, chart colors, and status badges.
- Build command passes.

## Suggested portfolio screenshots

- Full score report at desktop width.
- Report hero and score summary.
- Domain breakdown with Grammar & Expression expanded.
- Audience-specific recommendations after switching to Parent View or Advisor View.
- Print/PDF preview document.
- Handoff/design system page.

## Case Study Notes

This project demonstrates score report design through a full reporting flow rather than a static dashboard. It shows parent/student-friendly UX writing by changing tone by audience. It demonstrates assessment data storytelling through benchmark, domain, and growth narratives. It uses Recharts for data visualization while pairing charts with text summaries. It includes print/PDF-style layout thinking, a design handoff page, responsive UI behavior, accessible interaction patterns, and a modular React/TypeScript/Tailwind implementation.
