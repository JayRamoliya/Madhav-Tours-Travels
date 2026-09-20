import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS, createWhatsAppLink } from '../../data/travelData';

export const FloatingContact: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Mobile Bottom Sticky Bar (Pixel perfect touch friendly buttons) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D4A017]/30 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5">
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          id="mobile-sticky-call-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white border-2 border-[#0B5CAD] text-[#0B5CAD] font-semibold text-xs tracking-wide shadow-xs active:bg-[#0B5CAD]/5"
        >
          <Phone className="w-4 h-4 text-[#0B5CAD]" />
          <span>Call Now</span>
        </a>

        <a
          href={createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-semibold text-xs tracking-wide shadow-md active:opacity-90"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* 2. Desktop Floating Sticky Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto select-none">
        {/* Scroll To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white/90 border border-[#D4A017]/40 text-[#D4A017] shadow-lg flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Quick Phone Call Pill */}
        <a
          href={`tel:${COMPANY_DETAILS.phone}`}
          id="desktop-floating-call-btn"
          className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full bg-white text-slate-800 border border-[#0B5CAD]/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#0B5CAD] transform hover:-translate-y-0.5"
        >
          <div className="w-7 h-7 rounded-full bg-[#0B5CAD] text-white flex items-center justify-center">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-semibold text-slate-500 leading-none">Instant Help</span>
            <span className="text-xs font-bold text-[#0B5CAD] leading-tight">{COMPANY_DETAILS.phoneDisplay}</span>
          </div>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          id="desktop-floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-103"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-300 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-wider font-medium text-emerald-100 leading-none">Direct Chat</span>
            <span className="text-sm font-bold text-white leading-tight">WhatsApp Inquiry</span>
          </div>
        </a>
      </div>
    </>
  );
};
