import type { HandoffToken } from '../../types/report';

interface DesignTokenSwatchProps {
  token: HandoffToken;
}

export function DesignTokenSwatch({ token }: DesignTokenSwatchProps) {
  return (
    <div className="rounded-[8px] border border-parchment-200 bg-white p-4">
      {token.swatch ? (
        <div
          aria-hidden="true"
          className="mb-3 h-14 rounded-md border border-ink-900/10"
          style={{ background: token.swatch }}
        />
      ) : null}
      <p className="font-bold text-ink-900">{token.name}</p>
      <p className="number-font mt-1 text-sm text-ink-600">{token.value}</p>
      <p className="mt-2 text-sm leading-6 text-ink-700">{token.usage}</p>
    </div>
  );
}
