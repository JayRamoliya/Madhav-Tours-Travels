import React, { useState } from 'react';
import { Plane, Sparkles, CheckCircle2, ShieldCheck, Clock, Luggage, MessageSquare, Phone } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { PeacockCorner } from '../components/common/PeacockCorner';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { InquiryForm } from '../components/common/InquiryForm';
import { COMPANY_DETAILS, createWhatsAppLink } from '../data/travelData';

export const AirTicketPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Air Ticket Booking Assistance | Madhav Tours & Travels"
        description="Domestic & international flight booking with best route assistance, web check-in support, baggage guidance, and senior citizen priority ticketing."
        breadcrumbs={[{ name: 'Air Ticket Booking', path: '/air-ticket-booking' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Aviation Themed Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#0a4884] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">
          <PeacockCorner position="top-left" size={60} />
          <PeacockCorner position="bottom-right" size={60} />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <Plane className="w-3.5 h-3.5" />
              Aviation Ticketing Concierge
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Domestic & International Flight Assistance
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
              Tired of confusing airline portals, dynamic surge algorithms, and exorbitant cancellation penalties? We search optimal schedules, secure preferential seat allocations, manage web check-in, and help with baggage allowances.
            </p>

            {/* CTA: Send Flight Inquiry */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Flight Inquiry</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4A017]" />
                <span>Call Flight Desk ({COMPANY_DETAILS.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* 3 Core Pillars: Domestic flights, International flights, Best route assistance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5CAD] flex items-center justify-center mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Domestic Flights
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              All major Indian domestic routes covered with Air India, IndiGo, Akasa, and SpiceJet. Punctual connections to pilgrimage sectors like Srinagar, Dehradun, Varanasi, and Ayodhya.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Group discounts for wedding guests</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Senior citizen concession guidance</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Free seat selection advice</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00A86B] flex items-center justify-center mb-4">
              <Luggage className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              International Sectors
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Seamless booking to Dubai, Muscat, Singapore, Bali, Bangkok, London, and European gateways with premier full-service carriers including Emirates, Oman Air, Qatar, and Singapore Airlines.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Extra luggage allowance guidance</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Layover & transit visa advisory</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Pure vegetarian / Jain meal pre-booking</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A017] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Best Route Assistance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Avoid exhausting multi-stop connections. Our experienced ticketing coordinators cross-reference airport hub layouts to ensure stress-free transfers for elder passengers.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Wheelchair assistance arrangement</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Instant alerts on gate or schedule changes</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Dedicated agent on call throughout journey</li>
            </ul>
          </div>
        </div>

        {/* Embedded Inquiry Form */}
        <div className="max-w-4xl mx-auto mt-8">
          <InquiryForm
            initialService="Air Ticket Booking"
            title="Request Flight Schedules & Fare Quotation"
            subtitle="Share your departure city, destination, and travel dates. We will send the best direct and lowest-layover flight combinations on WhatsApp."
          />
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service="Air Ticket Booking Assistance"
        title="Send Flight Inquiry"
      />
    </div>
  );
};
