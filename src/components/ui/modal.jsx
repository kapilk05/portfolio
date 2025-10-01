import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 dark:bg-white/90 bg-black/90 backdrop-blur-sm flex justify-center items-start overflow-y-auto z-50 p-4">
      <div className="dark:bg-gray-900 bg-white border border-border text-foreground min-h-[50vh] w-full max-w-4xl rounded-xl shadow-2xl mt-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-8 overflow-y-auto max-h-[85vh]">
          {children}
        </div>
      </div>
    </div>
  );
}