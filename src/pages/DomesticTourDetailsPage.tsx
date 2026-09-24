import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Star,
  Clock,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";

import { SEO } from "../components/common/SEO";
import { DOMESTIC_PACKAGES, createWhatsAppLink } from "../data/travelData";

export const DomesticTourDetailsPage: React.FC = () => {
  const { slug } = useParams();

  const tour = DOMESTIC_PACKAGES.find((item) => item.id === slug);

  if (!tour) {
    return <Navigate to="/domestic-tours" replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] pt-24 pb-16">
      <SEO
        title={`${tour.title} | Madhav Tours & Travels`}
        description={`${tour.destination} tour package with sightseeing, hotels, transfers and travel assistance.`}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/domestic-tours"
          className="inline-flex items-center gap-2 text-[#0B5CAD] text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Domestic Tours
        </Link>

        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-[350px] md:h-[550px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            {tour.badge && (
              <span className="inline-flex px-3 py-1 rounded-full bg-[#D4A017] text-black text-xs font-semibold mb-4">
                {tour.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">
              {tour.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {tour.destination}
              </span>

              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {tour.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

        {/* Overview */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Tour Overview
          </h2>

          <p className="text-slate-600 leading-relaxed">
            {tour.tagline}. Experience beautiful landscapes,
            local culture, famous attractions, comfortable stays,
            and memorable sightseeing throughout your journey.
            This package is carefully planned to provide a relaxing
            and enjoyable travel experience for couples, families,
            and groups.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl p-6">
            <Calendar className="w-8 h-8 text-[#0B5CAD] mb-3" />
            <h3 className="font-semibold mb-1">Duration</h3>
            <p className="text-slate-600">{tour.duration}</p>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <MapPin className="w-8 h-8 text-[#0B5CAD] mb-3" />
            <h3 className="font-semibold mb-1">Destination</h3>
            <p className="text-slate-600">{tour.destination}</p>
          </div>

          <div className="bg-white rounded-2xl p-6">
            <Clock className="w-8 h-8 text-[#0B5CAD] mb-3" />
            <h3 className="font-semibold mb-1">Best Time</h3>
            <p className="text-slate-600">{tour.bestTime}</p>
          </div>

        </div>

        {/* Highlights */}
        <div className="bg-white rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Tour Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {tour.highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00A86B] mt-0.5 shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        <div className="bg-white rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6">
            Package Inclusions
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {tour.inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <Star className="w-5 h-5 text-[#D4A017] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl bg-[#0B5CAD] text-white p-10 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Plan Your Trip To {tour.destination}
          </h2>

          <p className="text-slate-200 max-w-2xl mx-auto mb-6">
            Get a personalized itinerary, hotel options,
            transport arrangements, and the best available
            quotation for your travel dates.
          </p>

          <a
            href={createWhatsAppLink(
              `Hi Madhav Tours & Travels, I need details for ${tour.title}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00A86B] text-white font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            Request WhatsApp Quote
          </a>
        </div>
      </div>
    </div>
  );
};
