import React, { useState } from 'react';
import {
  Home,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Users,
  MessageSquare,
  Trees,
} from 'lucide-react';

import { FluteDivider } from '../components/common/FluteDivider';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { InquiryForm } from '../components/common/InquiryForm';
import { createWhatsAppLink } from '../data/travelData';

export const HomestayBookingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Homestay Booking Assistance | Madhav Tours & Travels"
        description="Book verified homestays, cottages, villas, mountain retreats and family stays across India with Madhav Tours & Travels."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <Home className="w-3.5 h-3.5" />
              Premium Homestay Assistance
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Comfortable Homestays For Memorable Holidays
            </h1>

            <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed">
              Enjoy authentic local experiences with carefully selected
              homestays, villas, cottages, mountain retreats and family stays.
              Perfect for couples, families, groups and long vacations.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-medium text-sm shadow-md"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Request Homestay Inquiry
                </span>
              </button>

              <a
                href={createWhatsAppLink(
                  'Hi Madhav Tours & Travels, I need Homestay Booking Assistance.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium"
              >
                WhatsApp Homestay Desk
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5CAD] flex items-center justify-center mb-4">
              <Home className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold mb-2">
              Premium Villas & Cottages
            </h3>

            <p className="text-sm text-slate-600 mb-4">
              Handpicked villas, private cottages and luxury homestays in
              popular destinations across India.
            </p>

            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                Private villa options
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                Family-friendly stays
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00A86B] flex items-center justify-center mb-4">
              <Trees className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold mb-2">
              Nature & Mountain Retreats
            </h3>

            <p className="text-sm text-slate-600 mb-4">
              Experience peaceful stays near forests, rivers, hills and scenic
              mountain locations.
            </p>

            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                Hill station cottages
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                Valley & lake view stays
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-[#D4A017]/30 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A017] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold mb-2">
              Verified & Safe Properties
            </h3>

            <p className="text-sm text-slate-600 mb-4">
              We recommend trusted and verified properties with quality service
              and reliable hosts.
            </p>

            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                Verified hosts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                Family & group stays
              </li>
            </ul>
          </div>

        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <InquiryForm
            initialService="Homestay Booking"
            title="Request Homestay Booking Assistance"
            subtitle="Share your destination, travel dates and number of guests. Our team will suggest the best homestay options."
          />
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service="Homestay Booking"
        title="Request Homestay Inquiry"
      />
    </div>
  );
};