import React from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { FluteDivider } from "../components/common/FluteDivider";
import { SEO } from "../components/common/SEO";
import { InquiryForm } from "../components/common/InquiryForm";
import { COMPANY_DETAILS, createWhatsAppLink } from "../data/travelData";

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Contact Madhav Tours & Travels | Tour Packages, Taxi & Travel Assistance"
        description="Contact Madhav Tours & Travels for tour packages, taxi booking, pilgrimage tours and holiday planning. Call 7069212494 or WhatsApp for instant travel assistance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            Direct Concierge Assistance
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our{" "}
            <span className="text-[#C1122F]">Travel Curators</span>
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            We do not operate impersonal automated call centers. When you call
            or WhatsApp us, you speak directly with experienced tour curators
            who understand your expectations.
          </p>
        </div>

        {/* Contact Info Cards Grid: Phone, WhatsApp, Business Hours, Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-6 border border-[#0B5CAD]/30 shadow-md hover:shadow-lg transition-shadow text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B5CAD] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Direct Phone Call
              </span>
              <h3 className="font-serif text-lg font-bold text-[#0B5CAD] mt-1">
                {COMPANY_DETAILS.phoneDisplay}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Instant travel consultation & cab dispatch
              </p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-[#0B5CAD] text-white text-xs font-medium hover:bg-[#084887] transition-colors"
            >
              <span>Call Now</span>
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 border border-[#00A86B]/30 shadow-md hover:shadow-lg transition-shadow text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#00A86B] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <MessageSquare className="w-6 h-6 fill-current" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Instant WhatsApp
              </span>
              <h3 className="font-serif text-lg font-bold text-[#00A86B] mt-1">
                {COMPANY_DETAILS.whatsappDisplay}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Itineraries, quotation cards & fast answers
              </p>
            </div>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-[#00A86B] text-white text-xs font-medium hover:bg-[#00925d] transition-colors"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-6 border border-[#D4A017]/40 shadow-md text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#D4A017] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Consultation Hours
              </span>
              <h3 className="font-serif text-base font-bold text-slate-900 mt-1">
                Mon - Sat: 8:00 AM - 10:00 PM
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Sunday: 9:00 AM - 8:00 PM
              </p>
            </div>
            <div className="mt-4 text-[11px] font-semibold text-[#00A86B] bg-emerald-50 py-1.5 rounded-lg border border-emerald-100">
              Emergency Active Tour Support 24/7
            </div>
          </div>

          {/* Service Network */}
          <div className="bg-white rounded-2xl p-6 border border-[#C1122F]/30 shadow-md text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-[#C1122F] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Service Footprint
              </span>
              <h3 className="font-serif text-base font-bold text-slate-900 mt-1">
                India &bull; Oman &bull; Global
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Pan-India ground coverage with international hub in Muscat
              </p>
            </div>
            <div className="mt-4 text-[11px] font-semibold text-[#0B5CAD] bg-blue-50 py-1.5 rounded-lg border border-blue-100">
              Direct Travel Concierge
            </div>
          </div>
        </div>

        <FluteDivider />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Inquiry Form */}
          <div className="lg:col-span-7">
            <InquiryForm
              title="Send Us Your Travel Inquiry"
              subtitle="Fill in your travel dates and passenger requirements. We will prepare an honest, comprehensive quotation for your review."
            />
          </div>

          {/* Interactive Information & Google Map Showcase */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D4A017]/30 shadow-md">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                Why Book Inquiries With Us?
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                We believe sacred journeys and relaxing holidays should start
                with complete trust.
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero upfront hidden costs:</strong> We provide
                    detailed breakdown of hotels, vehicles, tolls, and taxes.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct WhatsApp Itinerary cards:</strong> Receive
                    hotel photos, day-by-day sightseeing, and driver contact
                    right on your phone.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Elder-safe & vegetarian friendly:</strong> We
                    prioritize comfort, wheelchair assistance, and vegetarian
                    dining.
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Mail className="w-4 h-4 text-[#0B5CAD]" />
                  <span>Email: {COMPANY_DETAILS.email}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="mt-12">
          <div className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/30 shadow-md">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C1122F]" />
                <span className="font-serif text-lg font-bold text-slate-900">
                  Visit Madhav Tours & Travels
                </span>
              </div>
              <span className="text-xs text-slate-400 uppercase font-semibold">
                Location Map
              </span>
            </div>

            <div className="relative h-[450px] w-full">
              <iframe
                title="Madhav Tours & Travels Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.3775538614555!2d68.968164!3d22.2401336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569d83cc60a3d5%3A0x555166d750e70b7a!2sHotel%20Uttam!5e1!3m2!1sen!2sin!4v1789963702519!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200">
                <h4 className="font-semibold text-slate-900 text-sm">
                  Madhav Tours & Travels
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Professional Tour Planning & Taxi Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
