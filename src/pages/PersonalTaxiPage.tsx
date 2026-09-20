import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Users, Briefcase, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { PeacockCorner } from '../components/common/PeacockCorner';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { InquiryForm } from '../components/common/InquiryForm';
import { COMPANY_DETAILS, VEHICLE_FLEET, createWhatsAppLink } from '../data/travelData';

export const PersonalTaxiPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Toyota Innova Crysta');

  const handleVehicleInquiry = (name: string) => {
    setSelectedVehicle(name);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Personal Taxi & Luxury Chauffeur Service | Madhav Tours & Travels"
        description="Private chauffeur driven luxury Sedans, Toyota Innova Crysta, Fortuner, and Maharaja Tempo Travellers. Dedicated personal drivers for VIP and family travel."
        breadcrumbs={[{ name: 'Personal Taxi', path: '/personal-taxi' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Chauffeur Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">
          <PeacockCorner position="top-left" size={60} />
          <PeacockCorner position="bottom-right" size={60} />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A86B]" />
              Elite Personal Chauffeur Fleet
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Personal Taxi & Private Chauffeur Excellence
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
              Step into an elevated realm of road travel. Our personal taxi service assigns a dedicated, verified driver and pristine vehicle exclusively to your family or delegates for the entirety of your journey.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button
                onClick={() => {
                  setSelectedVehicle('Personal Chauffeur Service');
                  setModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire For Personal Chauffeur</span>
              </button>

              <a
                href={createWhatsAppLink("Hi Madhav Tours & Travels, I'm interested in booking a Personal Chauffeur Driven Vehicle. Please share options.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <span>WhatsApp Chauffeur Concierge</span>
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* Vehicles Section: Sedan, SUV, Tempo Traveller as requested */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Luxury Vehicle Fleet
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select your preferred category. All fleet options are inquiry-only with custom quotations tailored to your exact route.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VEHICLE_FLEET.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#0B5CAD] shadow-xs">
                      {vehicle.type}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-serif text-xl font-bold">{vehicle.name}</h3>
                      <div className="flex items-center gap-4 text-xs text-slate-200 mt-1">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#D4A017]" /> {vehicle.seating}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-[#D4A017]" /> {vehicle.luggage}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 italic">
                      Ideal for: {vehicle.idealFor}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD] mb-2">
                        Premium Comfort Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {vehicle.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inquiry Only CTA */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Pricing</span>
                    <span className="text-xs font-bold text-[#00A86B]">Inquiry Only</span>
                  </div>

                  <button
                    onClick={() => handleVehicleInquiry(vehicle.name)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B5CAD] hover:bg-[#084887] text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire for this Vehicle</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Inquiry Form */}
        <div className="max-w-4xl mx-auto mt-10">
          <InquiryForm
            initialService="Personal Taxi Chauffeur"
            title="Book Your Chauffeur Driven Vehicle"
            subtitle="Tell us your itinerary and vehicle preference. We will send quotes with driver details on WhatsApp."
          />
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={`Personal Taxi Fleet: ${selectedVehicle}`}
        title={`Chauffeur Inquiry: ${selectedVehicle}`}
      />
    </div>
  );
};
