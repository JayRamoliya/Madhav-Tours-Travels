import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Compass,
  Shield,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FluteDivider } from "../components/common/FluteDivider";
import { SEO } from "../components/common/SEO";
import { COMPANY_DETAILS, createWhatsAppLink } from "../data/travelData";

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="About Madhav Tours & Travels Rajkot | Trusted Travel Agency in Gujarat"
        description="Discover Madhav Tours & Travels, a trusted travel agency in Rajkot, Gujarat. We specialize in domestic tours, international holidays, pilgrimage journeys, hotel bookings, flights, and personalized travel planning."
        canonicalPath="/about"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            Sacred Hospitality & Personalized Care
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The Story of{" "}
            <span className="text-[#C1122F]">Madhav Tours & Travels</span>
          </h1>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Founded with the conviction that travel is not just logistics, but a
            soul-enriching experience where every guest deserves honesty,
            comfort, and sincere attention.
          </p>
        </div>

        {/* Brand Emblem Spotlight Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#D4A017]/40 shadow-xl mb-14 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="p-4 bg-[#FAF7F0] rounded-2xl border border-[#D4A017]/30 shadow-inner">
                <img
                  src="/logo.webp"
                  alt="Madhav Tours & Travels Logo"
                  className="w-full max-w-[280px] sm:max-w-[320px] max-h-[290px] object-contain drop-shadow-md mx-auto transition-transform duration-500 hover:scale-102"
                  onError={() => setLogoError(true)}
                  loading="eager"
                />
              </div>
            </div>

            <div className="md:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Inspired by the Divine Grace of{" "}
                <span className="text-[#0B5CAD]">Lord Krishna</span>
              </h2>
              <p>
                The name <strong className="text-[#C1122F]">Madhav</strong>{" "}
                reflects sweetness, guidance, and unwavering companionship. Just
                as Lord Krishna stood as the eternal charioteer (Partha Sarathi)
                offering calm direction through every crossroad, our philosophy
                is to be your steadfast travel guide.
              </p>
              <p>
                From the golden hues of the sacred flute (Bansuri) to the
                iridescent serenity of the peacock feather (Mor Pankh) and
                auspicious call of the conch (Shankha), our visual identity
                reminds us daily to deliver hospitality infused with warmth,
                integrity, and reverence for every traveler.
              </p>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 border border-[#0B5CAD]/20 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-[#0B5CAD]/30 flex items-center justify-center mb-5 text-[#0B5CAD]">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
              Our Sacred Mission
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To strip away the stress, impersonal automated portals, and
              unexpected hidden charges that plague modern tourism. We provide
              human-centric, customized itineraries tailored to elderly
              pilgrims, vacationing couples, and extended families who value
              peace of mind above all else.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Authentic,
                transparent advice without commission bias
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Prioritizing
                comfort, hygiene, and dietary preferences
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Direct
                concierge support through WhatsApp and phone
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-[#D4A017]/30 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-[#D4A017]/40 flex items-center justify-center mb-5 text-[#D4A017]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">
              Our Eternal Vision
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To become India&apos;s and the Gulf&apos;s most cherished luxury
              pilgrimage and bespoke leisure travel partner, celebrated for
              genuine care, impeccable vehicular comfort, and hand-selected
              luxury hotel relationships that turn every tour into a lifelong
              memory.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Setting gold
                standards in elder-friendly pilgrimage yatras
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Expanding
                bespoke global itineraries to Dubai, Bali, and Europe
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Maintaining
                an inquiry-driven, relationship-first ethos
              </li>
            </ul>
          </div>
        </div>

        {/* Personalized Travel Planning & Customer-First Approach */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D4A017]/30 shadow-lg mb-14">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Our Customer-First Pillars
            </h3>
            <p className="text-sm text-slate-600">
              How we differentiate ourselves from mass-market automated travel
              websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#D4A017]/20 text-center">
              <div className="w-10 h-10 rounded-full bg-white text-[#C1122F] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900 mb-1">
                Empathetic Pacing
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never rush your journey. Sightseeing schedules are planned
                with relaxed mornings, comfortable transit stops, and zero
                exhausting checklist marathons.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#D4A017]/20 text-center">
              <div className="w-10 h-10 rounded-full bg-white text-[#0B5CAD] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900 mb-1">
                Tailored To Your Family
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether requesting pure vegetarian / Jain meals in Europe or
                requiring lower berths and wheelchair accessibility for
                grandparents, we take care of it all.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#D4A017]/20 text-center">
              <div className="w-10 h-10 rounded-full bg-white text-[#00A86B] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-slate-900 mb-1">
                Zero Hidden Costs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every quote outlines inclusions with total clarity—driver
                allowances, toll taxes, hotel taxes, and safari permits are
                stated upfront.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-10 text-center border border-[#D4A017]/40 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Speak Directly With Your Personal Tour Planner
          </h3>
          <p className="text-sm text-slate-200 max-w-xl mx-auto mb-6">
            We are just a phone call or WhatsApp message away. Let us craft your
            dream vacation with royal Indian warmth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={createWhatsAppLink(
                "Hi Madhav Tours & Travels, I'd like to consult regarding a custom travel plan.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00A86B] text-white font-medium text-sm shadow-md hover:bg-[#00925d]"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0B5CAD] font-medium text-sm shadow-md hover:bg-slate-100"
            >
              <span>Request Detailed Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
