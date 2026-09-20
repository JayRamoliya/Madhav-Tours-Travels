import React, { useState } from 'react';
import { Building2, Sparkles, CheckCircle2, Shield, Heart, Coffee, Utensils, MessageSquare } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { PeacockCorner } from '../components/common/PeacockCorner';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { InquiryForm } from '../components/common/InquiryForm';
import { COMPANY_DETAILS, createWhatsAppLink } from '../data/travelData';

export const HotelBookingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Luxury Stays');

  const categories = [
    {
      title: 'Luxury Heritage & 5-Star Stays',
      desc: 'Royal palaces in Rajasthan, world-class five-star properties in Dubai and Singapore, and private beachfront pool villas in Bali.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      features: ['Personalized VIP welcome', 'Complimentary room upgrades where available', 'Bespoke fine-dining & high tea', 'Private butler assistance'],
    },
    {
      title: 'Family Comfort Resorts',
      desc: 'Spacious interconnecting suites, child-friendly swimming pools, pure vegetarian food availability, and lush resort lawns in Goa, Kerala, and Himachal.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      features: ['Spacious multi-bedroom setups', 'Kids activity clubs & safe swimming pools', 'Dedicated pure veg / Jain kitchen options', 'Peaceful scenic settings'],
    },
    {
      title: 'Spiritual & Pilgrimage Stays',
      desc: 'Clean, sanitized, and elderly-friendly hotels and premium dharamshalas in Haridwar, Badrinath, Kedarnath, Ayodhya, and Varanasi.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      features: ['Proximity to temple ghats & shrines', 'Hot running water & elevator access for elders', 'Sattvik breakfast & dinner arrangements', 'Quiet and holy atmosphere'],
    },
    {
      title: 'Executive Business Hotels',
      desc: 'High-speed fiber Wi-Fi, premium conference facilities, express dry cleaning, and prime city centre connectivity for professionals in Mumbai, Delhi, and Bangalore.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      features: ['Airport expressway proximity', 'Soundproof executive suites', '24-hour business desk & lounge access', 'Early breakfast & late express check-out'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Luxury Hotel Booking Assistance | Madhav Tours & Travels"
        description="Handpicked family resorts, luxury heritage havelis, pilgrimage guest houses, and 5-star executive hotels. No markup surprises; direct hotel concierge assistance."
        breadcrumbs={[{ name: 'Hotel Booking', path: '/hotel-booking' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Banner with Luxury Hotel Imagery */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">
          <PeacockCorner position="top-left" size={60} />
          <PeacockCorner position="bottom-right" size={60} />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              Verified Accommodations
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Handpicked Luxury & Heritage Accommodations
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
              Never gamble with fake online hotel photos again. We inspect hygiene standards, ensure dietary preferences (pure veg, Jain, sattvik), and negotiate special corporate and seasonal privileges for our travelers.
            </p>

            {/* Main CTA: Request Hotel Assistance as requested */}
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button
                onClick={() => {
                  setSelectedCategory('General Hotel Inquiry');
                  setModalOpen(true);
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Hotel Assistance</span>
              </button>

              <a
                href={createWhatsAppLink("Hi Madhav Tours & Travels, I need hotel booking assistance. Please share verified recommendations.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <span>WhatsApp Hotel Desk</span>
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* 4 Hotel Categories: Family hotels, Luxury stays, Budget stays, Business hotels */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Our Curated Accommodation Tiers
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Select the style that aligns with your family or business trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 font-serif text-xl font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.desc}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD] mb-2">
                        Guaranteed Amenities:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cat.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00A86B] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C1122F]">Custom Quotations</span>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat.title);
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B5CAD] hover:bg-[#084887] text-white text-xs font-medium transition-all cursor-pointer"
                  >
                    <span>Request Hotel Assistance</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Form for direct inquiries */}
        <div className="max-w-4xl mx-auto mt-12">
          <InquiryForm
            initialService="Hotel Booking Assistance"
            title="Book Your Verified Hotel Stay"
            subtitle="Tell us your destination, check-in date, and room preferences. We'll send vetted photos, inclusions, and quotes via WhatsApp."
          />
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={`Hotel Booking: ${selectedCategory}`}
        title={`Inquiry: ${selectedCategory}`}
      />
    </div>
  );
};
