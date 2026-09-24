import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Globe,
  Plane,
  Grid3X3,
  List,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { FluteDivider } from "../components/common/FluteDivider";
import { SEO } from "../components/common/SEO";
import { InquiryModal } from "../components/common/InquiryModal";
import {
  COMPANY_DETAILS,
  INTERNATIONAL_PACKAGES,
  createWhatsAppLink,
} from "../data/travelData";
import { Link } from "react-router-dom";

export const InternationalToursPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDest, setSelectedDest] = useState("");
  const [view, setView] = useState<"card" | "list">("list");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    tourType: "All",
    month: "All",
    departureCity: "All",
    theme: "All",
    season: "All",
    minBudget: 0,
    maxBudget: 200000,
    minDays: 1,
    maxDays: 15,
  });

  const handleInquiry = (title: string) => {
    setSelectedDest(title);
    setModalOpen(true);
  };

  const tourTypes = [
    "All",
    ...new Set(INTERNATIONAL_PACKAGES.map((p) => p.tourType).filter(Boolean)),
  ];

  const months = [
    "All",
    ...new Set(INTERNATIONAL_PACKAGES.map((p) => p.month).filter(Boolean)),
  ];

  const departureCities = [
    "All",
    ...new Set(
      INTERNATIONAL_PACKAGES.map((p) => p.departureCity).filter(Boolean),
    ),
  ];

  const themes = [
    "All",
    ...new Set(INTERNATIONAL_PACKAGES.map((p) => p.theme).filter(Boolean)),
  ];

  const seasons = [
    "All",
    ...new Set(INTERNATIONAL_PACKAGES.map((p) => p.season).filter(Boolean)),
  ];

  const filteredPackages = INTERNATIONAL_PACKAGES.filter((pkg) => {
    const days = pkg.days ?? 0;

    return (
      (filters.tourType === "All" || pkg.tourType === filters.tourType) &&
      (filters.month === "All" || pkg.month === filters.month) &&
      (filters.departureCity === "All" ||
        pkg.departureCity === filters.departureCity) &&
      (filters.theme === "All" || pkg.theme === filters.theme) &&
      (filters.season === "All" || pkg.season === filters.season) &&
      pkg.startingPrice >= filters.minBudget &&
      pkg.startingPrice <= filters.maxBudget &&
      days >= filters.minDays &&
      days <= filters.maxDays
    );
  });

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-slate-800 pt-24 pb-16">
      <SEO
        title="International Luxury Holiday Packages | Madhav Tours & Travels"
        description="Exclusive bespoke international holidays to Dubai, Bali, Singapore, Thailand, Malaysia, Maldives, and Europe. Customized visa, flight, and hotel assistance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-[#00A86B]" />
            Global Escapes & Private Chauffeur Packages
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Curated International{" "}
            <span className="text-[#0B5CAD]">Wonders</span>
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            World-class holidays designed around your personal pace. We
            coordinate your tourist visas, premium airport transfers, private
            speedboats, and 4-star / 5-star properties. No hidden costs.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-5 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Find Your Perfect Tour
              </h3>
              <p className="text-sm text-slate-500">
                Filter destinations by type, budget, duration and season
              </p>
            </div>

            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 h-11 rounded-xl bg-[#0B5CAD] text-white text-sm font-medium"
              >
                <Filter size={16} />
                Filters
                {showFilters ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setView("card")}
                  className={`p-3 rounded-xl transition ${
                    view === "card"
                      ? "bg-[#0B5CAD] text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>

                <button
                  onClick={() => setView("list")}
                  className={`p-3 rounded-xl transition ${
                    view === "list"
                      ? "bg-[#0B5CAD] text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              showFilters
                ? "max-h-[2000px] opacity-100"
                : "max-h-0 opacity-0 md:max-h-[2000px] md:opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tour Type
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50"
                  value={filters.tourType}
                  onChange={(e) =>
                    setFilters({ ...filters, tourType: e.target.value })
                  }
                >
                  {tourTypes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Travel Month
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50"
                  value={filters.month}
                  onChange={(e) =>
                    setFilters({ ...filters, month: e.target.value })
                  }
                >
                  {months.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Departure City
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50"
                  value={filters.departureCity}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      departureCity: e.target.value,
                    })
                  }
                >
                  {departureCities.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Theme
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50"
                  value={filters.theme}
                  onChange={(e) =>
                    setFilters({ ...filters, theme: e.target.value })
                  }
                >
                  {themes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Season
                </label>
                <select
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-slate-50"
                  value={filters.season}
                  onChange={(e) =>
                    setFilters({ ...filters, season: e.target.value })
                  }
                >
                  {seasons.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Maximum Budget
                </label>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                  <div className="flex justify-between text-xs mb-2">
                    <span>Budget</span>
                    <span className="font-semibold">
                      ₹{filters.maxBudget.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={300000}
                    step={5000}
                    value={filters.maxBudget}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        maxBudget: Number(e.target.value),
                      })
                    }
                    className="w-full accent-[#0B5CAD]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Trip Duration
                </label>
                <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                  <div className="flex justify-between text-xs mb-2">
                    <span>Duration</span>
                    <span className="font-semibold">
                      {filters.maxDays} Days
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={filters.maxDays}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        maxDays: Number(e.target.value),
                      })
                    }
                    className="w-full accent-[#0B5CAD]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Actions
                </label>
                <button
                  onClick={() =>
                    setFilters({
                      tourType: "All",
                      month: "All",
                      departureCity: "All",
                      theme: "All",
                      season: "All",
                      minBudget: 0,
                      maxBudget: 200000,
                      minDays: 1,
                      maxDays: 15,
                    })
                  }
                  className="w-full h-12 rounded-xl bg-[#C1122F] text-white font-medium hover:opacity-90"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        <FluteDivider />

        <div className="mb-16">
          {view === "card" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="h-48 sm:h-56 w-full object-cover"
                    />

                    {pkg.badge && (
                      <span className="absolute top-3 left-3 bg-white text-[#0B5CAD] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 line-clamp-2">
                      {pkg.title}
                    </h3>

                    <div className="flex items-start gap-2 mt-2 text-sm text-slate-500">
                      <MapPin size={14} className="shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{pkg.destination}</span>
                    </div>

                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                      <Calendar size={14} />
                      {pkg.duration}
                    </div>

                    <p className="text-sm text-slate-600 mt-3 line-clamp-2">
                      {pkg.tagline}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {pkg.inclusions?.slice(0, 2).map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-slate-100 rounded-full text-[11px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl font-bold text-[#0B5CAD]">
                            ₹{(pkg.startingPrice ?? 0).toLocaleString()}
                          </div>
                          <div className="text-xs text-slate-500">
                            per person
                          </div>
                        </div>

                        <div className="text-xs px-2 py-1 rounded-lg bg-blue-50 text-[#0B5CAD]">
                          {pkg.duration}
                        </div>
                      </div>

                      <Link
                        to={`/international-tours/${pkg.id}`}
                        className="mt-4 block text-center bg-[#C1122F] text-white py-3 rounded-xl font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-lg transition p-5 flex flex-col lg:flex-row gap-6"
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full lg:w-72 h-56 object-cover rounded-2xl"
                  />

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {pkg.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                      <MapPin size={16} />
                      {pkg.destination}
                    </div>

                    <p className="text-sm text-slate-600 mt-3">{pkg.tagline}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {pkg.inclusions?.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-slate-100 rounded-full text-xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {pkg.badge && (
                        <span className="px-3 py-1 rounded-lg bg-blue-50 text-[#0B5CAD] text-xs font-semibold">
                          {pkg.badge}
                        </span>
                      )}

                      <span className="px-3 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-semibold">
                        Best Time: {pkg.bestTime}
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-64 flex flex-col justify-between items-end">
                    <div className="border border-slate-300 rounded-xl px-4 py-2 text-sm font-medium">
                      {pkg.duration}
                    </div>

                    <div className="text-right mt-5 lg:mt-0">
                      <div className="text-4xl font-bold text-[#0B5CAD]">
                        ₹{(pkg.startingPrice ?? 0).toLocaleString()}
                      </div>

                      <div className="text-sm text-slate-500">per person</div>
                    </div>

                    <div className="flex gap-2 mt-5">
                      <a
                        href={`tel:${COMPANY_DETAILS.phone}`}
                        className="px-4 py-2 border border-[#0B5CAD] text-[#0B5CAD] rounded-xl text-sm font-medium"
                      >
                        Call Now
                      </a>

                      <Link
                        to={`/international-tours/${pkg.id}`}
                        className="px-4 py-2 bg-[#C1122F] text-white rounded-xl text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-3xl p-8 border border-[#D4A017]/30 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF7F0] border border-[#D4A017]/40 text-[#0B5CAD] flex items-center justify-center shrink-0">
            <Plane className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-slate-900">
              Need International Tourist Visa or Flight Support?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We provide full document checking, embassy appointment assistance,
              flight tickets, and travel insurance for UAE, Schengen Europe,
              Indonesia, Singapore, and Thailand.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href={createWhatsAppLink(
                "Hi Madhav Tours & Travels, I need assistance with an International Tour and Tourist Visa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B5CAD] text-white font-medium text-xs sm:text-sm whitespace-nowrap"
            >
              <span>Ask a Specialist</span>
            </a>
          </div>
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destination={selectedDest}
        title={`International Inquiry: ${selectedDest}`}
      />
    </div>
  );
};
