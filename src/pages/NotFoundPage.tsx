import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Phone, Sparkles } from 'lucide-react';
import { BrandLogo } from '../components/common/BrandLogo';
import { FluteDivider } from '../components/common/FluteDivider';
import { PeacockCorner } from '../components/common/PeacockCorner';
import { SEO } from '../components/common/SEO';
import { COMPANY_DETAILS, createWhatsAppLink } from '../data/travelData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-28 pb-16 flex flex-col justify-center items-center px-4">
      <SEO
        title="Page Not Found | Madhav Tours & Travels"
        description="The travel page you are looking for does not exist. Explore our luxury domestic and international holiday tour packages."
      />

      <div className="relative max-w-xl w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#D4A017]/40 shadow-2xl text-center overflow-hidden">
        <PeacockCorner position="top-left" size={50} />
        <PeacockCorner position="bottom-right" size={50} />

        <div className="mx-auto mb-4 flex justify-center">
          <BrandLogo variant="horizontal" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D4A017]/30 text-xs font-semibold text-[#C1122F] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
          404 Destination Uncharted
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">
          Lost on Your Journey?
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Just as a traveler paused along an unfamiliar mountain path, let us gently guide you back to our curated destinations and personalized travel services.
        </p>

        <FluteDivider />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B5CAD] hover:bg-[#084887] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Main Portal</span>
          </Link>

          <a
            href={createWhatsAppLink("Hi Madhav Tours & Travels, I was looking for a package on your website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00A86B] hover:bg-[#00925d] text-white font-medium text-xs sm:text-sm shadow-md transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Ask Concierge on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
