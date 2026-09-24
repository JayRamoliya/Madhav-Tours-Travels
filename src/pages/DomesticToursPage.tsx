import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  MessageSquare,
  Grid3X3,
  List,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FluteDivider } from "../components/common/FluteDivider";
import { SEO } from "../components/common/SEO";
import { InquiryModal } from "../components/common/InquiryModal";
import {
  DOMESTIC_PACKAGES,
  COMPANY_DETAILS,
  createWhatsAppLink,
} from "../data/travelData";
export const DomesticToursPage: React.FC = () => {
  const [filter, setFilter] = useState<
    "all" | "pilgrimage" | "family" | "couple" | "group"
  >("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
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

  const handleQuoteClick = (title: string) => {
    setSelectedTour(title);
    setModalOpen(true);
  };

  const tourTypes = [
    "All",
    ...new Set(DOMESTIC_PACKAGES.map((p) => p.tourType).filter(Boolean)),
  ];

  const months = [
    "All",
    ...new Set(DOMESTIC_PACKAGES.map((p) => p.month).filter(Boolean)),
  ];

  const departureCities = [
    "All",
    ...new Set(DOMESTIC_PACKAGES.map((p) => p.departureCity).filter(Boolean)),
  ];

  const themes = [
    "All",
    ...new Set(DOMESTIC_PACKAGES.map((p) => p.theme).filter(Boolean)),
  ];

  const seasons = [
    "All",
    ...new Set(DOMESTIC_PACKAGES.map((p) => p.season).filter(Boolean)),
  ];

  const filteredPackages = DOMESTIC_PACKAGES.filter((pkg) => {
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
        title="Domestic Luxury Tours & Pilgrimages | Madhav Tours & Travels"
        description="Bespoke domestic tours across India: Char Dham Yatra, Kashmir Valley, Kerala Backwaters, Royal Rajasthan, Himachal, and Goa. Get custom quotations without online booking fees."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            Sacred Pilgrimages & Royal Heritage
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Discover India in{" "}
            <span className="text-[#C1122F]">Royal Comfort</span>
          </h1>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            From the spiritual silence of the Himalayas to the tranquil tropical
            lagoons of the South. Tailor-made with private vehicles, verified
            hotels, and elder-friendly pacing.
          </p>
        </div>

        <FluteDivider />

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
                className="md:hidden px-4 h-11 rounded-xl bg-[#0B5CAD] text-white text-sm font-medium"
              >
                {showFilters ? "Close Filters" : "Filters"}
              </button>

              {/* View Toggle */}
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
          <div className={`${showFilters ? "block" : "hidden"} md:block`}>
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

        <div className="mb-16">
          {view === "card" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
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
                        to={`/domestic-tours/${pkg.id}`}
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
                        to={`/domestic-tours/${pkg.id}`}
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

        <div className="relative rounded-3xl bg-white p-8 sm:p-10 border-2 border-[#D4A017]/50 shadow-xl overflow-hidden text-center max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Planning Char Dham, Vaishno Devi, or Ayodhya-Kashi?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            We specialize in providing elder-accessible vehicles, helicopter
            tickets, VIP darshan assistance, and pure sattvik meals for holy
            pilgrimages.
          </p>
          <a
            href={createWhatsAppLink(
              "Hi Madhav Tours & Travels, I need assistance for a sacred Pilgrimage Yatra. Please share details.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#00A86B] text-white font-medium text-sm shadow-md hover:bg-[#00925d]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult on Pilgrimage Requirements</span>
          </a>
        </div>
      </div>

      <InquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        destination={selectedTour}
        title={`Custom Quote for ${selectedTour}`}
      />
    </div>
  );
};
