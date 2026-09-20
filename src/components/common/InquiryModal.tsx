import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { InquiryForm } from './InquiryForm';
import { PeacockCorner } from './PeacockCorner';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination?: string;
  service?: string;
  title?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  destination = '',
  service = 'Tour Package',
  title,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#D4A017]/40 max-h-[90vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <PeacockCorner position="top-left" size={48} />
        <PeacockCorner position="top-right" size={48} />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Inquiry Modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <InquiryForm
          initialDestination={destination}
          initialService={service}
          title={title || `Inquiry for ${destination || service}`}
          subtitle="Direct WhatsApp quotation with verified itineraries and personalized pricing."
          onSuccess={onClose}
        />
      </div>
    </div>
  );
};
