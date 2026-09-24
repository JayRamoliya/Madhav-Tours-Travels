import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  Globe,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Star,
  Plane,
  ArrowLeft,
  MessageSquare,
  Phone,
} from "lucide-react";

import { SEO } from "../components/common/SEO";
import { INTERNATIONAL_PACKAGES, createWhatsAppLink } from "../data/travelData";

export const InternationalTourDetailsPage: React.FC = () => {
  const { slug } = useParams();

  const tour = INTERNATIONAL_PACKAGES.find((item) => item.id === slug);

  if (!tour) {
    return <Navigate to="/international-tours" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-24 pb-16">
      <SEO
        title={`${tour.title} | International Tour Package`}
        description={`${tour.destination} international holiday package with premium hotels, sightseeing, transfers and travel assistance.`}
      />

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/international-tours"
          className="inline-flex items-center gap-2 text-[#0B5CAD] text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to International Tours
        </Link>

        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-[350px] md:h-[600px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            {tour.badge && (
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4A017] text-black text-xs font-bold uppercase tracking-wide mb-4">
                {tour.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              {tour.title}
            </h1>

            <p className="text-slate-200 text-base md:text-lg mb-4 max-w-3xl">
              {tour.tagline}
            </p>

            <div className="flex flex-wrap gap-5 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4A017]" />
                {tour.destination}
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#D4A017]" />
                {tour.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 border border-[#D4A017]/20 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[#0B5CAD]" />
                <h2 className="text-2xl font-bold">Tour Overview</h2>
              </div>

              <p className="text-slate-600 leading-relaxed">
                Discover the beauty of {tour.destination} with a carefully
                curated international holiday experience. Enjoy premium
                accommodations, guided sightseeing, local experiences,
                comfortable transfers and unforgettable attractions.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Calendar className="w-8 h-8 text-[#0B5CAD] mb-3" />
                <h3 className="font-semibold">Duration</h3>
                <p className="text-slate-600 mt-1">{tour.duration}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <MapPin className="w-8 h-8 text-[#0B5CAD] mb-3" />
                <h3 className="font-semibold">Destination</h3>
                <p className="text-slate-600 mt-1">{tour.destination}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <Clock className="w-8 h-8 text-[#0B5CAD] mb-3" />
                <h3 className="font-semibold">Best Time</h3>
                <p className="text-slate-600 mt-1">{tour.bestTime}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Tour Highlights</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {tour.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00A86B] mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Package Inclusions</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {tour.inclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#D4A017] mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Assistance */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Plane className="w-6 h-6 text-[#0B5CAD]" />
                <h2 className="text-2xl font-bold">Travel Assistance</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Tourist Visa Guidance",
                  "Flight Ticket Assistance",
                  "Hotel Reservation Support",
                  "Travel Insurance Assistance",
                  "Airport Transfers",
                  "Dedicated Travel Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00A86B]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="bg-white rounded-3xl overflow-hidden border border-[#D4A017]/20 shadow-xl">
              <div className="bg-[#0B5CAD] text-white p-6">
                <p className="text-xs uppercase tracking-wider opacity-80">
                  Starting From
                </p>

                <h3 className="text-4xl font-bold mt-2">
                  ₹{tour.startingPrice?.toLocaleString() || "On Request"}
                </h3>

                <span className="text-sm opacity-80">Per Person</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Duration</span>

                  <span className="font-semibold">{tour.duration}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Best Time</span>

                  <span className="font-semibold">{tour.bestTime}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Destination</span>

                  <span className="font-semibold text-right">
                    {tour.destination}
                  </span>
                </div>

                <div className="border-t pt-5 space-y-3">
                  <a
                    href={createWhatsAppLink(
                      `Hi Madhav Tours & Travels, I would like details for ${tour.title}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#00A86B] text-white py-3 rounded-xl font-semibold hover:bg-[#00945d] transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Inquiry
                  </a>

                  <a
                    href="tel:+919999999999"
                    className="w-full flex items-center justify-center gap-2 border border-[#0B5CAD] text-[#0B5CAD] py-3 rounded-xl font-semibold hover:bg-[#0B5CAD] hover:text-white transition"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
