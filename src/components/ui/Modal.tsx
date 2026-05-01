import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { Button } from './Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({ title, isOpen, onClose, children, footer }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEscapeKey(isOpen, onClose);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-labelledby="modal-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink-900/60 px-3 py-4 backdrop-blur-sm md:px-6 md:py-8"
      role="dialog"
    >
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-5xl rounded-[8px] border border-parchment-200 bg-parchment-50 shadow-soft">
        <div className="no-print flex items-center justify-between gap-4 border-b border-parchment-200 bg-white/90 px-4 py-3 md:px-5">
          <h2 className="text-lg font-bold text-ink-900" id="modal-title">
            {title}
          </h2>
          <Button
            aria-label="Close print preview"
            className="h-10 w-10 px-0"
            icon={<X aria-hidden="true" size={18} />}
            onClick={onClose}
            ref={closeButtonRef}
            variant="ghost"
          >
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <div>{children}</div>
        {footer ? (
          <div className="no-print border-t border-parchment-200 bg-white/90 px-4 py-3 md:px-5">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
