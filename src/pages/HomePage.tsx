import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  MessageSquare,
  Phone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  BadgePercent,
  Sliders,
  HeartHandshake,
  PhoneCall,
  Star,
  MapPin,
  Calendar,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { BrandLogo } from "../components/common/BrandLogo";
import { FluteDivider } from "../components/common/FluteDivider";
import { PeacockCorner } from "../components/common/PeacockCorner";
import { SEO } from "../components/common/SEO";
import { InquiryModal } from "../components/common/InquiryModal";
import { InquiryForm } from "../components/common/InquiryForm";
import { HeroSlider } from "../components/home/HeroSlider";
import {
  COMPANY_DETAILS,
  SERVICES_LIST,
  POPULAR_DESTINATIONS,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  createWhatsAppLink,
} from "../data/travelData";

export const HomePage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);

  const openInquiryFor = (destinationTitle?: string) => {
    setSelectedDestination(destinationTitle || "General Travel Inquiry");
    setModalOpen(true);
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-[#00A86B]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#D4A017]" />;
      case "BadgePercent":
        return <BadgePercent className="w-6 h-6 text-[#C1122F]" />;
      case "Sliders":
        return <Sliders className="w-6 h-6 text-[#0B5CAD]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#00A86B]" />;
      case "PhoneCall":
        return <PhoneCall className="w-6 h-6 text-[#D4A017]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4A017]" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F0] text-slate-800 overflow-x-hidden pt-20">
      <SEO
        title="Madhav Tours & Travels | Domestic & International Tour Packages"
        description="Experience sacred pilgrimages, domestic escapes, and international luxury holidays with Madhav Tours & Travels. Tailored tour quotes, luxury hotels, flights, and personal chauffeur cabs."
      />

      <HeroSlider onOpenInquiry={openInquiryFor} />

      <FluteDivider />

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8E1] text-[#D4A017] text-xs font-semibold border border-[#D4A017]/30">
            <ShieldCheck className="w-4 h-4" />
            The Madhav Promise
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Your Journey, Planned With Care
          </h2>

          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            From sacred pilgrimages and family vacations to international
            holidays, every journey is personally planned with comfort,
            transparency, and dedicated travel assistance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl p-6 text-center border border-[#D4A017]/20 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-3xl font-bold text-[#0B5CAD]">100%</h3>
            <p className="text-sm text-slate-600 mt-1">Personal Assistance</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-[#D4A017]/20 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-3xl font-bold text-[#00A86B]">Tailored</h3>
            <p className="text-sm text-slate-600 mt-1">Travel Itineraries</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-[#D4A017]/20 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-3xl font-bold text-[#D4A017]">24/7</h3>
            <p className="text-sm text-slate-600 mt-1">Travel Support</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center border border-[#D4A017]/20 shadow-sm hover:shadow-lg transition-all">
            <h3 className="text-3xl font-bold text-[#C1122F]">Direct</h3>
            <p className="text-sm text-slate-600 mt-1">WhatsApp Assistance</p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#05325f] rounded-2xl p-6 border border-[#D4A017]/20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017]" />
              <span className="text-sm text-white">Transparent Pricing</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017]" />
              <span className="text-sm text-white">
                Hotel & Flight Assistance
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017]" />
              <span className="text-sm text-white">
                Pilgrimage Tour Specialists
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D4A017]" />
              <span className="text-sm text-white">
                Private Cab Arrangements
              </span>
            </div>
          </div>
        </div>
      </section>

      <FluteDivider />

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A017] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#D4A017]/30 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#00A86B]" />
            End-To-End Travel Assistance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Bespoke Travel Offerings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Every service is handled by personal specialists. Inquire directly
            for tailored quotations, flight selections, and private chauffeurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white rounded-2xl p-5 border border-[#D4A017]/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B5CAD] via-[#D4A017] to-[#00A86B] opacity-70 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Image thumbnail */}
                <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      Curated Assistance
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0B5CAD] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={service.route}
                  className="text-xs font-semibold text-[#0B5CAD] group-hover:text-[#C1122F] transition-colors flex items-center gap-1"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => openInquiryFor(service.title)}
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F0] text-[#D4A017] font-medium border border-[#D4A017]/30 hover:bg-[#D4A017] hover:text-white transition-all cursor-pointer"
                >
                  Quick Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FluteDivider />

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A86B] uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-[#00A86B]/30 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              Handcrafted Itineraries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Signature Destinations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              From the sacred peaks of Kedarnath and backwaters of Kerala to the
              glittering skyscrapers of Dubai and tranquil villas of Bali.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/domestic-tours"
              className="text-xs font-semibold text-[#0B5CAD] hover:underline"
            >
              All Domestic &rarr;
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              to="/international-tours"
              className="text-xs font-semibold text-[#0B5CAD] hover:underline"
            >
              All International &rarr;
            </Link>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {POPULAR_DESTINATIONS.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#D4A017]/30 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Full-width Image */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Badge */}
                {dest.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0B5CAD] border border-[#D4A017]/40 shadow-xs">
                    {dest.badge}
                  </span>
                )}

                {/* Duration */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/50 text-white backdrop-blur-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#D4A017]" />
                  <span>{dest.duration}</span>
                </div>

                {/* Title & Tagline in image overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] font-semibold text-[#D4A017] uppercase tracking-wider">
                    {dest.destination}
                  </div>
                  <h3 className="font-serif text-lg font-bold leading-snug">
                    {dest.title}
                  </h3>
                </div>
              </div>

              {/* Content body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 italic line-clamp-2 mb-3">
                    &ldquo;{dest.tagline}&rdquo;
                  </p>

                  <div className="space-y-1 text-xs text-slate-700 mb-4">
                    {dest.highlights.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A86B] shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instead of pricing show: Custom Quote Available & Inquire Now button */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      Pricing
                    </span>
                    <span className="text-xs font-bold text-[#C1122F]">
                      Custom Quote Available
                    </span>
                  </div>

                  <button
                    onClick={() => openInquiryFor(dest.title)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B5CAD] hover:bg-[#084887] text-white text-xs font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FluteDivider />

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B5CAD] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-[#0B5CAD]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            The Madhav Promise
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We treat your pilgrimage or luxury holiday with sacred devotion.
            Honest guidance, punctual chauffeurs, and zero unexpected charges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-[#D4A017]/30 shadow-sm hover:shadow-lg transition-all hover:border-[#D4A017]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-[#D4A017]/40 flex items-center justify-center mb-4 shadow-xs">
                {getWhyIcon(item.icon)}
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A017] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-[#D4A017]/30 mb-2">
            <Star className="w-3.5 h-3.5 text-[#D4A017] fill-current" />
            Traveler Reflections
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Stories From Our Valued Guests
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Genuine experiences shared by families, pilgrims, and luxury
            travelers who trusted our personal coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative bg-white rounded-2xl p-6 sm:p-8 border border-[#D4A017]/30 shadow-md flex flex-col justify-between"
            >
              <PeacockCorner position="top-right" size={36} />

              <div className="mb-4">
                <div className="text-[#D4A017] text-2xl font-serif leading-none mb-2">
                  &ldquo;
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  {t.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-slate-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#0B5CAD] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                  {t.tour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FluteDivider />

      <section
        id="inquiry-section"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-[#072447] via-[#0B5CAD] to-[#05325f] text-white p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden border-2 border-[#D4A017]/40">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
              Start Your Sacred or Leisure Escape
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#FAF7F0]">
              Ready For Your Next Journey?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              No rigid group tours. No automated online bookings. Speak directly
              with your dedicated travel advisor and receive a tailored
              quotation via WhatsApp or phone.
            </p>

            {/* Buttons: WhatsApp & Call Now as requested */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="cta-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp: {COMPANY_DETAILS.whatsappDisplay}</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                id="cta-call-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-[#0B5CAD] hover:bg-slate-50 font-semibold text-sm shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-[#0B5CAD]" />
                <span>Call Now: {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Inquiry Form for easy completion on home page */}
        <div className="mt-12">
          <InquiryForm
            title="Or Fill Our Quick Consultation Request"
            subtitle="Submit your travel dates and passenger count. We will send options and pricing directly to your WhatsApp."
          />
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B5CAD] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-[#0B5CAD]/30 mb-2">
            <MapPin className="w-3.5 h-3.5" />
            Visit Our Office
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Find Us On Google Maps
          </h2>

          <p className="text-sm text-slate-600 mt-2">
            Meet our travel experts and discuss your next pilgrimage, family
            vacation, or international holiday.
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#D4A017]/20 h-[450px]">
          <iframe
            title="Madhav Tours & Travels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.3775538614555!2d68.968164!3d22.2401336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39569d83cc60a3d5%3A0x555166d750e70b7a!2sHotel%20Uttam!5e1!3m2!1sen!2sin!4v1789963702519!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </section>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destination={selectedDestination || ""}
      />
    </div>
  );
};
