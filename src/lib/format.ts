export function formatScore(score: number) {
  return new Intl.NumberFormat('en-US').format(score);
}

export function formatGrowth(growth: number) {
  return growth > 0 ? `+${growth}` : String(growth);
}

export function toPercent(value: number, max: number) {
  return Math.round((value / max) * 100);
}

export function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    keepBuilding: 'Keep Building',
    focusNext: 'Focus Next',
    suggestedPractice: 'Suggested Practice'
  };

  return labels[category] ?? category;
}
