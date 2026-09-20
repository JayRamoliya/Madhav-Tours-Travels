import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Phone, ArrowLeft, Sparkles, Calendar, User, MapPin } from 'lucide-react';
import { BrandLogo } from '../components/common/BrandLogo';
import { FluteDivider } from '../components/common/FluteDivider';
import { PeacockCorner } from '../components/common/PeacockCorner';
import { SEO } from '../components/common/SEO';
import { COMPANY_DETAILS, createWhatsAppLink } from '../data/travelData';
import { TravelInquiry } from '../types';

export const ThankYouPage: React.FC = () => {
  const [inquiry, setInquiry] = useState<TravelInquiry | null>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('last_travel_inquiry');
      if (stored) {
        setInquiry(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const customWhatsAppMsg = inquiry
    ? `Namaste Madhav Tours & Travels, I just submitted an inquiry on your website for ${inquiry.serviceType || inquiry.destination}. My name is ${inquiry.name}. Please share the itinerary and quotes.`
    : `Namaste Madhav Tours & Travels, I submitted an inquiry on your website. Please connect with me.`;

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16 flex flex-col justify-center">
      <SEO
        title="Thank You | Inquiry Received | Madhav Tours & Travels"
        description="Your travel inquiry has been received. Our dedicated travel advisor will review your preferences and connect via WhatsApp."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#D4A017]/40 shadow-2xl text-center overflow-hidden">
          <PeacockCorner position="top-left" size={60} />
          <PeacockCorner position="top-right" size={60} />
          <PeacockCorner position="bottom-left" size={60} />
          <PeacockCorner position="bottom-right" size={60} />

          {/* Success Checkmark with Gold Ring */}
          <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-[#00A86B] flex items-center justify-center mx-auto mb-6 shadow-md animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-[#00A86B]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D4A017]/40 text-xs font-semibold text-[#0B5CAD] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            Namaste &amp; Jai Shri Krishna
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Your Travel Inquiry Has Been Received!
          </h1>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed mb-6">
            Thank you for placing your trust in <strong className="text-[#C1122F]">Madhav Tours & Travels</strong>. Our personal travel concierge is reviewing your request to prepare an honest, comprehensive itinerary.
          </p>

          {/* Inquiry Summary Box if available */}
          {inquiry && (
            <div className="bg-[#FAF7F0] rounded-2xl p-5 border border-[#D4A017]/30 text-left mb-6 space-y-2 max-w-md mx-auto text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2 font-semibold text-[#0B5CAD] border-b border-[#D4A017]/20 pb-1.5 mb-2">
                <span>Inquiry Reference Details</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Traveler Name:</span>
                <span className="font-medium text-slate-900">{inquiry.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service / Tour:</span>
                <span className="font-medium text-[#C1122F]">{inquiry.serviceType || inquiry.destination}</span>
              </div>
              {inquiry.destination && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-medium text-slate-900">{inquiry.destination}</span>
                </div>
              )}
              {inquiry.travelDate && (
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Date:</span>
                  <span className="font-medium text-slate-900">{inquiry.travelDate}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-slate-500">Party Size:</span>
                <span className="font-medium text-slate-900">{inquiry.travelers}</span>
              </div>
            </div>
          )}

          {/* Direct WhatsApp Callout as requested */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-[#00A86B]/30 max-w-md mx-auto mb-8 text-center space-y-3">
            <p className="text-xs text-slate-700 font-medium">
              Want faster assistance? Ping us right now on WhatsApp to get immediate answers and hotel photos.
            </p>
            <a
              href={createWhatsAppLink(customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              id="thank-you-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00A86B] hover:bg-[#00925d] text-white font-semibold text-xs sm:text-sm shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Connect Immediately on WhatsApp</span>
            </a>
          </div>

          <FluteDivider />

          {/* Return Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B5CAD] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home Page</span>
            </Link>

            <span className="hidden sm:inline text-slate-300">&bull;</span>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0B5CAD]"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B5CAD]" />
              <span>Call Us: {COMPANY_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
