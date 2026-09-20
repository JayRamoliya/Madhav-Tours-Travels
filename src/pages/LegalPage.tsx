import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowLeft, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { FluteDivider } from '../components/common/FluteDivider';
import { COMPANY_DETAILS } from '../data/travelData';

interface LegalPageProps {
  type: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title={isPrivacy ? "Privacy Policy | Madhav Tours & Travels" : "Terms & Conditions | Madhav Tours & Travels"}
        description={
          isPrivacy
            ? "Read how Madhav Tours & Travels safeguards your travel inquiry details and contact information."
            : "Review the service consultation and tour booking policies of Madhav Tours & Travels."
        }
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D4A017]/30 shadow-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D4A017]/30 text-xs font-semibold text-[#0B5CAD]">
            {isPrivacy ? <ShieldCheck className="w-3.5 h-3.5 text-[#00A86B]" /> : <FileText className="w-3.5 h-3.5 text-[#D4A017]" />}
            <span>{isPrivacy ? 'Data Protection & Trust' : 'Travel Policies & Guidelines'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions of Service'}
          </h1>
          <p className="text-xs text-slate-400">
            Last updated: March 2025 &bull; Madhav Tours & Travels
          </p>

          <FluteDivider />

          {isPrivacy ? (
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">1. Inquiry-Based Platform Notice</h2>
                <p>
                  Madhav Tours & Travels operates as a dedicated travel consultation agency. We do <strong>NOT</strong> process digital payments, charge credit cards, or collect banking credentials directly through this website. All payments or security deposits are arranged strictly via verified bank invoices or official counter procedures after mutual agreement.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">2. Collection of Travel Information</h2>
                <p>
                  When you submit an inquiry through our consultation forms or communicate with us via WhatsApp, we collect only necessary trip coordination data: your full name, telephone number, email address, chosen destinations, preferred dates, and party size.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">3. How Your Information is Used</h2>
                <p>
                  Your details are used exclusively to craft personalized travel itineraries, quote transparent package costs, verify hotel rooms, and assign vetted private chauffeurs. We strictly do not sell, lease, or distribute your personal contact info to third-party telemarketers.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">4. WhatsApp Communication</h2>
                <p>
                  By initiating an inquiry or providing your WhatsApp mobile number, you agree to receive direct travel quotations, schedule updates, and hotel recommendations from our official concierge numbers ({COMPANY_DETAILS.whatsappDisplay} and {COMPANY_DETAILS.phoneDisplay}).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">5. Contact Our Privacy Officer</h2>
                <p>
                  If you wish to remove your inquiry history or amend your contact details, please reach out directly to {COMPANY_DETAILS.email} or call {COMPANY_DETAILS.phoneDisplay}.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">1. Scope of Travel Advisory Services</h2>
                <p>
                  Madhav Tours & Travels acts as an experienced tour operator and travel facilitator connecting travelers with licensed transport operators, airlines, Indian Railways, and verified hotels. Submitting a website form does not constitute a guaranteed reservation until mutual confirmation is issued.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">2. Itinerary Customization & Pricing</h2>
                <p>
                  All itineraries presented on our website are sample representations. Final quotations depend on seasonal hotel tariffs, room availability, fuel surcharges, flight airfares, and specific client customizations. All inclusions and exclusions are detailed transparently before trip confirmation.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">3. Identity Documents & Visas</h2>
                <p>
                  Travelers are personally responsible for holding valid original government IDs (Aadhaar Card, Voter ID, or Passport) for domestic hotel check-ins and Indian border/pilgrimage permits, and minimum 6-month validity passports plus required entry visas for all international journeys.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">4. Unforeseen Weather & Natural Events (Force Majeure)</h2>
                <p>
                  In the event of landslides, snowfall blockages, helicopter weather cancellations (e.g., in Kedarnath/Amarnath), train delays, or political strikes, Madhav Tours & Travels will make every effort to arrange alternative routing; however, additional accommodation or rerouting costs incurred during unforeseen events remain subject to operator policies.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="font-serif text-lg font-bold text-slate-900">5. Vehicle & Chauffeur Etiquette</h2>
                <p>
                  Our chauffeurs adhere to highway safety and statutory speed limits. Standard outstation travel is governed by mutually agreed point-to-point itineraries.
                </p>
              </section>
            </div>
          )}

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B5CAD] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Home</span>
            </Link>

            <Link
              to={isPrivacy ? '/terms-and-conditions' : '/privacy-policy'}
              className="text-xs font-medium text-slate-500 hover:text-slate-800 underline"
            >
              {isPrivacy ? 'View Terms & Conditions' : 'View Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
