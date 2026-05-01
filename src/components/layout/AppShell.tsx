import type { ReactNode } from 'react';
import type { AudienceMode } from '../../types/report';
import { Topbar, type AppView } from './Topbar';

interface AppShellProps {
  view: AppView;
  audienceMode: AudienceMode;
  onViewChange: (view: AppView) => void;
  onOpenPrint: () => void;
  children: ReactNode;
}

export function AppShell({
  view,
  audienceMode,
  onViewChange,
  onOpenPrint,
  children
}: AppShellProps) {
  return (
    <div className="min-h-screen">
      <Topbar
        audienceMode={audienceMode}
        onOpenPrint={onOpenPrint}
        onViewChange={onViewChange}
        view={view}
      />
      <main>{children}</main>
    </div>
  );
}
