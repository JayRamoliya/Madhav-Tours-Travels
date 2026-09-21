import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, CheckCircle2, MessageSquare, Globe, Plane } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { INTERNATIONAL_PACKAGES, createWhatsAppLink } from '../data/travelData';

export const InternationalToursPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState('');

  const handleInquiry = (title: string) => {
    setSelectedDest(title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="International Luxury Holiday Packages | Madhav Tours & Travels"
        description="Exclusive bespoke international holidays to Dubai, Bali, Singapore, Thailand, Malaysia, Maldives, and Europe. Customized visa, flight, and hotel assistance."
        breadcrumbs={[{ name: 'International Tours', path: '/international-tours' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* International Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#00A86B]" />
            Global Escapes & Private Chauffeur Packages
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curated International <span className="text-[#0B5CAD]">Wonders</span>
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            World-class holidays designed around your personal pace. We coordinate your tourist visas, premium airport transfers, private speedboats, and 4-star / 5-star properties. No hidden costs.
          </p>
        </div>

        {/* Global Key Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs font-semibold text-slate-700">
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Dubai & Abu Dhabi
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Bali & Nusa Penida
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Singapore & Sentosa
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Thailand & Phuket
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Malaysia & Langkawi
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Maldives Overwater Villas
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            &bull; Swiss Alps & Paris
          </span>
        </div>

        <FluteDivider />

        {/* International Grid: No prices, inquiry only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {INTERNATIONAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {pkg.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0B5CAD] shadow-xs">
                      {pkg.badge}
                    </span>
                  )}

                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/60 text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D4A017]" />
                    <span>{pkg.duration}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-[#D4A017] uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {pkg.destination}
                    </span>
                    <h3 className="font-serif text-xl font-bold leading-snug">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 italic">
                    &ldquo;{pkg.tagline}&rdquo;
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD] mb-2">
                      Curated Inclusions:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Included Facilities:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.inclusions.map((inc, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#D4A017]/30 text-[11px] text-slate-700"
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry-only footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Quotation</span>
                  <span className="text-xs font-bold text-[#00A86B]">Inquiry Only</span>
                </div>

                <button
                  onClick={() => handleInquiry(pkg.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white text-xs font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request WhatsApp Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visa & International Guidance Card */}
        <div className="bg-white rounded-3xl p-8 border border-[#D4A017]/30 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF7F0] border border-[#D4A017]/40 text-[#0B5CAD] flex items-center justify-center shrink-0">
            <Plane className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-slate-900">
              Need International Tourist Visa or Flight Support?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We provide full document checking, embassy appointment assistance, flight tickets, and travel insurance for UAE, Schengen Europe, Indonesia, Singapore, and Thailand.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={createWhatsAppLink("Hi Madhav Tours & Travels, I need assistance with an International Tour and Tourist Visa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B5CAD] text-white font-medium text-xs sm:text-sm whitespace-nowrap"
            >
              <span>Ask a Specialist</span>
            </a>
          </div>
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destination={selectedDest}
        title={`International Inquiry: ${selectedDest}`}
      />
    </div>
  );
};
