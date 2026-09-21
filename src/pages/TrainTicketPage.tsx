import React, { useState } from 'react';
import { Train, Sparkles, CheckCircle2, ShieldCheck, Clock, Users, MessageSquare, Phone } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { InquiryForm } from '../components/common/InquiryForm';
import { COMPANY_DETAILS, createWhatsAppLink } from '../data/travelData';

export const TrainTicketPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Indian Railways Train Ticket Booking Assistance | Madhav Tours & Travels"
        description="Dedicated railway ticketing assistance for Vande Bharat, Rajdhani, Tejas, and Tatkal routes. Senior citizen lower berth priority and group pilgrimage coordination."
        breadcrumbs={[{ name: 'Train Ticket Booking', path: '/train-ticket-booking' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Railway Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <Train className="w-3.5 h-3.5" />
              Railway Concierge Support
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Stress-Free Indian Railways Ticketing
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
              Don&apos;t lose sleep fighting morning Tatkal counters or puzzling over waitlist charts. Madhav Tours & Travels tracks seat availability, suggests premium Vande Bharat expresses, and arranges contiguous family berths.
            </p>

            {/* CTA: Request Train Inquiry */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Train Inquiry</span>
              </button>

              <a
                href={createWhatsAppLink("Hi Madhav Tours & Travels, I need train ticket booking assistance. Please help.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <span>WhatsApp Railway Desk</span>
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* Assistance Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5CAD] flex items-center justify-center mb-4">
              <Train className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Vande Bharat & Premium Trains
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Experience the comfort of modern high-speed Vande Bharat, Tejas, and Rajdhani express trains connecting Delhi, Gujarat, Mumbai, Varanasi, and Haridwar.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Executive AC chair car & sleeper berths</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Clean onboard meals pre-selection</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00A86B] flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Senior & Family Berth Priority
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              We understand how difficult upper and middle berths are for elderly grandparents. We actively optimize booking strategies to secure lower berths.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Contiguous berths for family groups</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Station coolie & battery cart guidance</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A017] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
              Tatkal & Waitlist Advisory
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Emergency travel plan? Our railway specialists provide guidance on alternative boarding stations, Tatkal quotas, and confirmed connecting train alternatives.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> PNR confirmation probability analysis</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B]" /> Direct taxi pickup sync at destination station</li>
            </ul>
          </div>
        </div>

        {/* Embedded Form */}
        <div className="max-w-4xl mx-auto mt-8">
          <InquiryForm
            initialService="Train Ticket Assistance"
            title="Request Train Ticket Availability & Assistance"
            subtitle="Enter your origin, destination station, and journey date. Our railway desk will check availability and message you with options."
          />
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service="Train Ticket Assistance"
        title="Request Train Inquiry"
      />
    </div>
  );
};
