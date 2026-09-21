import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, CheckCircle2, MessageSquare, Filter } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { DOMESTIC_PACKAGES, createWhatsAppLink } from '../data/travelData';

export const DomesticToursPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pilgrimage' | 'family' | 'couple' | 'group'>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState('');

  const handleQuoteClick = (title: string) => {
    setSelectedTour(title);
    setModalOpen(true);
  };

  const filteredPackages = DOMESTIC_PACKAGES.filter((pkg) => {
    if (filter === 'all') return true;
    if (filter === 'pilgrimage') return pkg.category === 'pilgrimage';
    if (filter === 'couple') return pkg.id === 'kashmir' || pkg.id === 'kerala' || pkg.id === 'goa';
    if (filter === 'family') return pkg.id === 'rajasthan' || pkg.id === 'himachal' || pkg.id === 'kashmir';
    if (filter === 'group') return pkg.category === 'pilgrimage' || pkg.id === 'rajasthan';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Domestic Luxury Tours & Pilgrimages | Madhav Tours & Travels"
        description="Bespoke domestic tours across India: Char Dham Yatra, Kashmir Valley, Kerala Backwaters, Royal Rajasthan, Himachal, and Goa. Get custom quotations without online booking fees."
        breadcrumbs={[{ name: 'Domestic Tours', path: '/domestic-tours' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Showcase */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            Sacred Pilgrimages & Royal Heritage
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Discover India in <span className="text-[#C1122F]">Royal Comfort</span>
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            From the spiritual silence of the Himalayas to the tranquil tropical lagoons of the South. Tailor-made with private vehicles, verified hotels, and elder-friendly pacing.
          </p>
        </div>

        {/* Category Filters: Popular Indian destinations, Family tours, Couple tours, Group tours, Pilgrimage tours */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#0B5CAD] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Destinations
          </button>
          <button
            onClick={() => setFilter('pilgrimage')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filter === 'pilgrimage'
                ? 'bg-[#C1122F] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Pilgrimage & Char Dham
          </button>
          <button
            onClick={() => setFilter('family')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filter === 'family'
                ? 'bg-[#0B5CAD] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Family Tours
          </button>
          <button
            onClick={() => setFilter('couple')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filter === 'couple'
                ? 'bg-[#0B5CAD] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Couple & Honeymoon
          </button>
          <button
            onClick={() => setFilter('group')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              filter === 'group'
                ? 'bg-[#0B5CAD] text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Group & Elder Special
          </button>
        </div>

        <FluteDivider />

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

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

                {/* Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 italic">
                    &ldquo;{pkg.tagline}&rdquo;
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD] mb-2">
                      Key Experiences:
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
                      Inclusions:
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

              {/* Every package has: Get Custom Quote button as requested */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Pricing</span>
                  <span className="text-xs font-bold text-[#C1122F]">Custom Quote</span>
                </div>

                <button
                  onClick={() => handleQuoteClick(pkg.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0B5CAD] to-[#084887] text-white text-xs font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get Custom Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sacred Pilgrimage Special Banner */}
        <div className="relative rounded-3xl bg-white p-8 sm:p-10 border-2 border-[#D4A017]/50 shadow-xl overflow-hidden text-center max-w-4xl mx-auto">

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Planning Char Dham, Vaishno Devi, or Ayodhya-Kashi?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            We specialize in providing elder-accessible vehicles, helicopter tickets, VIP darshan assistance, and pure sattvik meals for holy pilgrimages.
          </p>
          <a
            href={createWhatsAppLink("Hi Madhav Tours & Travels, I need assistance for a sacred Pilgrimage Yatra. Please share details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#00A86B] text-white font-medium text-sm shadow-md hover:bg-[#00925d]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult on Pilgrimage Requirements</span>
          </a>
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destination={selectedTour}
        title={`Custom Quote for ${selectedTour}`}
      />
    </div>
  );
};
