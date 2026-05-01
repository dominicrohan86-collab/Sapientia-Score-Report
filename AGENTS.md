# AGENTS.md

## Project

This repository is a portfolio-quality React + TypeScript + Vite project for a fictional education assessment score report product called Sapientia Score Report.

The product must feel like a polished student, parent, and advisor score report experience for an education assessment organization.

## Quality bar

Prioritize:
- Product design polish
- Parent/student-friendly UX writing
- Humane score interpretation
- Clear visual hierarchy
- Assessment data storytelling
- Accessible charts and status indicators
- Print/PDF-style layout thinking
- Responsive layouts
- Reusable components
- Type-safe implementation
- Realistic fictional data
- Strong README/case-study documentation

Avoid:
- Real company names
- Real logos
- Real student data
- Copyrighted assets
- Lorem ipsum
- Placeholder TODO content
- Default Vite screens
- Generic dashboard or SaaS template visuals
- Color-only status indicators
- Charts without explanatory captions
- Giant monolithic components
- Fake buttons that do nothing

## Commands

Use these commands to validate changes:

```bash
npm install
npm run build
```

Also run these if available:

```bash
npm run lint
npm run test
npm run typecheck
```

Do not claim validation passed unless the commands actually pass.

Design direction

The product should feel:
- Warm
- Academic
- Humane
- Trustworthy
- Editorial
- Calm
- Premium but not flashy

Use:
- Parchment/off-white backgrounds
- Deep navy/ink text
- Muted gold accents
- Soft blue and sage supporting colors
- Slate neutrals
- Restrained amber caution states
- Restrained red only for urgent states
- Audience modes

The app must support:
- Student View
- Parent View
- Advisor View

Audience mode changes must affect real content, not only labels. Recommendations, interpretation copy, and next steps should adapt to the selected audience.

Print expectations

Print/PDF preview must feel intentionally designed, not like a raw browser printout.

Print CSS should:
- Hide app navigation
- Hide interactive-only controls
- Preserve report hierarchy
- Avoid awkward page breaks where practical
- Include a footer and fictional sample-data note