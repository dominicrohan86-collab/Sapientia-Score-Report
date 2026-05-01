import { useState } from 'react';
import { studentReport } from './data/reportData';
import type { AudienceMode, PrintPreviewState } from './types/report';
import { AppShell } from './components/layout/AppShell';
import type { AppView } from './components/layout/Topbar';
import { ReportView } from './views/ReportView';
import { HandoffView } from './views/HandoffView';
import { PrintPreview } from './components/report/PrintPreview';

function App() {
  const [view, setView] = useState<AppView>('report');
  const [audienceMode, setAudienceMode] = useState<AudienceMode>('student');
  const [printPreview, setPrintPreview] = useState<PrintPreviewState>({
    isOpen: false,
    requestedFrom: null
  });

  function openPrintPreview(requestedFrom: PrintPreviewState['requestedFrom'] = 'topbar') {
    setPrintPreview({ isOpen: true, requestedFrom });
  }

  function closePrintPreview() {
    setPrintPreview({ isOpen: false, requestedFrom: null });
  }

  return (
    <AppShell
      audienceMode={audienceMode}
      onOpenPrint={() => openPrintPreview('topbar')}
      onViewChange={setView}
      view={view}
    >
      {view === 'report' ? (
        <ReportView
          audienceMode={audienceMode}
          onAudienceModeChange={setAudienceMode}
          onOpenPrint={() => openPrintPreview('report')}
          report={studentReport}
        />
      ) : (
        <HandoffView report={studentReport} />
      )}
      <PrintPreview
        audienceMode={audienceMode}
        isOpen={printPreview.isOpen}
        onClose={closePrintPreview}
        report={studentReport}
      />
    </AppShell>
  );
}

export default App;
