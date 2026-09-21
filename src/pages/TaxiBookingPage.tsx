import React, { useState } from 'react';
import { Car, Sparkles, CheckCircle2, ShieldCheck, MapPin, Clock, MessageSquare, Phone } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { InquiryForm } from '../components/common/InquiryForm';
import { COMPANY_DETAILS, VEHICLE_FLEET, createWhatsAppLink } from '../data/travelData';

export const TaxiBookingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState('Outstation Travel');

  const rideTypes = [
    {
      title: 'Punctual Airport Pickup & Drop',
      desc: 'Never miss a flight or wait endlessly at arrivals. Our driver tracks your flight status, greets you at the terminal gate, and assists with heavy luggage.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      highlights: ['Free 45-minute flight delay waiting time', 'Terminal nameplate greeting', 'Clean bottled water in car', 'Fixed transparent rate—zero surge pricing'],
    },
    {
      title: 'Local City Sightseeing & Chauffeur',
      desc: 'Explore Jaipur, Delhi, Mumbai, Srinagar, or Kochi with a dedicated car and polite local chauffeur for 8 hours / 80 kms or 12 hours full-day packages.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      highlights: ['Multi-stop flexibility without meter ticking panic', 'Chauffeur knowledgeable with monuments & parking', 'Air-conditioned comfort during shopping runs', 'Perfect for families and wedding shopping'],
    },
    {
      title: 'Outstation One-Way & Round Trips',
      desc: 'Comfortable road trips to hill stations, pilgrimage temples, and cross-state journeys with experienced highway and ghat drivers.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      highlights: ['All driver night allowances & tolls explained upfront', 'Clean, well-maintained vehicles with pristine suspension', 'Freedom to stop at clean highway dhabas & restrooms', 'One-way drop discounts available on popular corridors'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Taxi Booking & Chauffeur Services | Madhav Tours & Travels"
        description="Premium sanitized taxi service for airport transfers, local city tours, and outstation road trips. Courteous verified chauffeurs, zero surge pricing."
        breadcrumbs={[{ name: 'Taxi Booking', path: '/taxi-booking' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <Car className="w-3.5 h-3.5" />
              Verified Fleet & Professional Chauffeurs
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Pristine Cabs & Dedicated Chauffeur Service
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
              Travel across cities, hill stations, and pilgrimage circuits without the uncertainties of unreliable rideshare apps. Enjoy guaranteed on-time pickups, polite drivers, and spotlessly sanitized vehicles.
            </p>

            {/* CTA: Get Taxi Quote */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button
                onClick={() => {
                  setSelectedRide('General Taxi Booking');
                  setModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#b08006] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Taxi Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4A017]" />
                <span>Call Cab Desk ({COMPANY_DETAILS.phoneDisplay})</span>
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* 3 Core Services: Airport pickup, Local travel, Outstation travel */}
        <div className="space-y-8 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Primary Taxi & Cab Services
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select your travel purpose to receive an instant, all-inclusive quotation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rideTypes.map((ride, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={ride.image}
                      alt={ride.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 font-serif text-lg sm:text-xl font-bold text-white">
                      {ride.title}
                    </h3>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ride.desc}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD] mb-2">
                        Service Features:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {ride.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C1122F]">Fixed Fair Quote</span>
                  <button
                    onClick={() => {
                      setSelectedRide(ride.title);
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B5CAD] hover:bg-[#084887] text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    <span>Get Taxi Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Inquiry Form */}
        <div className="max-w-4xl mx-auto mt-12">
          <InquiryForm
            initialService="Taxi Booking"
            title="Book Your Taxi or Airport Transfer"
            subtitle="Share pickup location, destination, date & time, and passenger count. We will send car options and quotation via WhatsApp."
          />
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={`Taxi Booking: ${selectedRide}`}
        title={`Get Taxi Quote - ${selectedRide}`}
      />
    </div>
  );
};
