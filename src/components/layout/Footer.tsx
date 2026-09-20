import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Mail, MapPin, Clock, Heart, Shield, Award, Sparkles } from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { FluteDivider } from '../common/FluteDivider';
import { COMPANY_DETAILS, createWhatsAppLink } from '../../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#072447] text-white overflow-hidden border-t-2 border-[#D4A017]/40">
      {/* Subtle radial celestial light in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_top,#D4A017,transparent_70%)]" />

      {/* Decorative top flute accent */}
      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <FluteDivider glow={true} className="opacity-80 my-4" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-10">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="bg-white/95 rounded-2xl p-4 inline-block shadow-lg border border-[#D4A017]/50 max-w-[280px]">
              <BrandLogo variant="compact" />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Curating bespoke spiritual yatras, domestic escapes, and international luxury getaways. Inspired by eternal Indian grace, we treat every traveler as a cherished guest.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#D4A017] font-medium bg-white/5 border border-[#D4A017]/30 px-3 py-1.5 rounded-full">
                <Shield className="w-3.5 h-3.5 text-[#00A86B]" />
                Verified Agency
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D4A017] font-medium bg-white/5 border border-[#D4A017]/30 px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-[#D4A017]" />
                Personalized Care
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#FAF7F0] tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
              Quick Exploration
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A017] text-xs">&rsaquo;</span> Home Sanctuary
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A017] text-xs">&rsaquo;</span> Our Story & Values
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A017] text-xs">&rsaquo;</span> Concierge Services
                </Link>
              </li>
              <li>
                <Link to="/domestic-tours" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A017] text-xs">&rsaquo;</span> Domestic Packages
                </Link>
              </li>
              <li>
                <Link to="/international-tours" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A017] text-xs">&rsaquo;</span> International Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4A017] transition-colors flex items-center gap-2">
                  <span className="text-[#D4A017] text-xs">&rsaquo;</span> Request Custom Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Bookings */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#FAF7F0] tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
              Travel Assistance
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/hotel-booking" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Luxury Hotel Bookings
                </Link>
              </li>
              <li>
                <Link to="/air-ticket-booking" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Air Ticket Booking
                </Link>
              </li>
              <li>
                <Link to="/train-ticket-booking" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Train Ticket Assistance
                </Link>
              </li>
              <li>
                <Link to="/taxi-booking" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Outstation & Airport Cabs
                </Link>
              </li>
              <li>
                <Link to="/personal-taxi" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Personal Luxury Chauffeur
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-[#00A86B] transition-colors flex items-center gap-2">
                  <span className="text-[#00A86B] text-xs">&rsaquo;</span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#FAF7F0] tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C1122F]" />
              Inquiry Desk
            </h4>

            <div className="space-y-3 text-sm text-slate-300">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="flex items-start gap-3 hover:text-white group transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-[#D4A017]/30 text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-slate-900 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Calling Helpline</div>
                  <div className="font-semibold text-white">{COMPANY_DETAILS.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white group transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-[#00A86B]/40 text-[#00A86B] group-hover:bg-[#00A86B] group-hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct WhatsApp</div>
                  <div className="font-semibold text-white">{COMPANY_DETAILS.whatsappDisplay}</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-slate-700 text-slate-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Inquiry Hours</div>
                  <div className="text-white text-xs">{COMPANY_DETAILS.workingHours}</div>
                </div>
              </div>
            </div>

            {/* Social Placeholders as requested */}
            <div className="pt-2">
              <div className="text-xs text-slate-400 mb-2 font-medium">Follow Our Journeys:</div>
              <div className="flex items-center gap-2">
                {['Facebook', 'Instagram', 'YouTube', 'WhatsApp'].map((platform) => (
                  <a
                    key={platform}
                    href={platform === 'WhatsApp' ? createWhatsAppLink() : '#'}
                    onClick={(e) => {
                      if (platform !== 'WhatsApp') e.preventDefault();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-slate-300 hover:text-[#D4A017] transition-all"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notice: Inquiry-Only Assurance */}
        <div className="py-4 px-6 rounded-xl bg-white/5 border border-[#D4A017]/20 text-xs text-slate-300 text-center max-w-3xl mx-auto my-4">
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="font-semibold text-white">Direct Traveler Concierge:</span>
            Madhav Tours & Travels provides bespoke travel planning and consultation. All quotes are delivered transparently via WhatsApp and phone call. No automated checkout or gateway fees.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 py-6 pb-24 md:pb-6 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>&copy; {new Date().getFullYear()} Madhav Tours & Travels. All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Crafted with sacred care <Heart className="w-3.5 h-3.5 text-[#C1122F] inline fill-current" /> for discerning travelers.
          </p>
        </div>
      </div>
    </footer>
  );
};
