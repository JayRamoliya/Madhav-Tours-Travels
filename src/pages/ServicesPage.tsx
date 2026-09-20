import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles, Phone } from 'lucide-react';
import { FluteDivider } from '../components/common/FluteDivider';
import { PeacockCorner } from '../components/common/PeacockCorner';
import { SEO } from '../components/common/SEO';
import { InquiryModal } from '../components/common/InquiryModal';
import { SERVICES_LIST, COMPANY_DETAILS } from '../data/travelData';

export const ServicesPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleInquire = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="Our Travel Services | Madhav Tours & Travels"
        description="Comprehensive travel concierge offerings: Domestic Tours, International Tours, Hotel Bookings, Air Tickets, Train Ticket Assistance, and Personal Luxury Cabs."
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#072447] via-[#0B5CAD] to-[#072447] text-white p-8 sm:p-12 md:p-16 mb-12 shadow-xl border border-[#D4A017]/40">
          <PeacockCorner position="top-left" size={60} />
          <PeacockCorner position="bottom-right" size={60} />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D4A017]/40 text-[#D4A017] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Comprehensive Concierge Support
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#FAF7F0]">
              Full-Spectrum Luxury Travel Services
            </h1>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed">
              We eliminate the stress of coordinating multiple travel agents, ticketing queues, and unreliable taxi drivers. From certified pilgrimage accommodations to international flight tickets and private chauffeur cars, Madhav Tours & Travels manages every milestone.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4A017] to-[#b38006] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                Inquire For Custom Package
              </Link>
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4A017]" />
                <span>Call {COMPANY_DETAILS.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <FluteDivider />

        {/* Services Grid Layout: Every service has hero banner/image, description, benefits, inquiry button */}
        <div className="space-y-12">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D4A017]/30 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <PeacockCorner position="top-right" size={40} />

              {/* Service Hero Banner Image */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4A017]">
                      Concierge Expertise
                    </span>
                    <h3 className="font-serif text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              </div>

              {/* Service Description & Benefits */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D4A017]/30 text-xs font-semibold text-[#0B5CAD]">
                  {service.title} Overview
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.longDesc}
                </p>

                {/* Benefits List */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C1122F] mb-2.5">
                    Key Traveler Privileges & Benefits:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Inquiry Button & Detailed Route Link */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A86B] hover:bg-[#00925d] text-white font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>

                  <Link
                    to={service.route}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#0B5CAD] text-[#0B5CAD] hover:bg-[#0B5CAD] hover:text-white font-medium text-xs sm:text-sm transition-all"
                  >
                    <span>View Dedicated Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};
