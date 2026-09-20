import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import gsap from 'gsap';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Plane,
  Building2,
  Train,
  Car,
  Luggage,
  Star,
  MapPin,
} from 'lucide-react';
import { BrandLogo } from '../common/BrandLogo';
import { COMPANY_DETAILS, createWhatsAppLink } from '../../data/travelData';

interface HeroSliderProps {
  onOpenInquiry?: (serviceOrDest?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenInquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const decorativeRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const TOTAL_SLIDES = 4;
  const AUTOPLAY_DELAY = 6000;

  // Next and Prev handlers
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TOTAL_SLIDES);
  }, [TOTAL_SLIDES]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, [TOTAL_SLIDES]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // GSAP Subtle Ambient Animation for Decorative Background Elements
  useEffect(() => {
    if (!decorativeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.hero-gold-glow', {
        scale: 1.15,
        opacity: 0.45,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.hero-ambient-float', {
        y: -10,
        rotation: 4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
        ease: 'power1.inOut',
      });
    }, decorativeRef);

    return () => ctx.revert();
  }, []);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Trigger only if horizontal swipe dominates vertical scrolling
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 35 : -35,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: "easeOut" as const,
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -35 : 35,
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.45,
        ease: "easeIn" as const,
      },
    }),
  };

  return (
    <section
      ref={decorativeRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Madhav Tours & Travels Highlights"
      className="relative overflow-hidden pt-6 pb-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F0] via-white to-[#FAF7F0] select-none"
    >
      {/* Background Subtle Divine Halo Glow */}
      <div className="hero-gold-glow absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] rounded-full bg-radial from-[#D4A017]/15 via-[#0B5CAD]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Krishna Flute Watermark in top right */}
      <div className="absolute -top-12 -right-16 w-80 h-80 opacity-5 pointer-events-none hidden sm:block">
        {/* <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-slate-900">
          <path d="M20 180 L180 20" strokeWidth="3" />
          <circle cx="60" cy="140" r="4" fill="currentColor" />
          <circle cx="80" cy="120" r="4" fill="currentColor" />
          <circle cx="100" cy="100" r="4" fill="currentColor" />
          <circle cx="120" cy="80" r="4" fill="currentColor" />
          <circle cx="140" cy="60" r="4" fill="currentColor" />
        </svg> */}
      </div>

      {/* Floating Krishna Peacock Feather Motif on the Left */}
      <div className="hero-ambient-float absolute top-12 left-4 sm:left-12 pointer-events-none hidden md:block opacity-70">
        {/* <svg viewBox="0 0 80 120" className="w-14 h-20 filter drop-shadow-[0_4px_10px_rgba(0,168,107,0.2)]">
          <path d="M40 10 C20 30 15 70 40 100 C65 70 60 30 40 10 Z" fill="url(#heroFeatherGrad)" stroke="#00A86B" strokeWidth="1" />
          <ellipse cx="40" cy="48" rx="12" ry="18" fill="#0B5CAD" />
          <ellipse cx="40" cy="52" rx="8" ry="12" fill="#00A86B" />
          <circle cx="40" cy="54" r="4" fill="#D4A017" />
          <defs>
            <linearGradient id="heroFeatherGrad" x1="15" y1="10" x2="65" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00A86B" />
              <stop offset="50%" stopColor="#0B5CAD" />
              <stop offset="100%" stopColor="#D4A017" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 min-h-[520px] sm:min-h-[560px] md:min-h-[600px] flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          {currentIndex === 0 && (
            <motion.div
              key="slide-signature-journeys"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: 7 cols */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Bespoke Indian Luxury & Global Journeys</span>
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="space-y-2"
                >
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                    Experience Journeys Blessed With{' '}
                    <span className="text-[#C1122F] italic">Elegance</span> &{' '}
                    <span className="text-[#0B5CAD]">Devotion</span>
                  </h1>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#0B5CAD] font-medium pt-1">
                    Madhav Tours & Travels
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                >
                  Domestic &amp; International Tours &bull; Hotel, Air, Train &amp; Taxi Assistance.
                  We craft personalized journeys with thoughtful planning, premium stays and dedicated travel assistance.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
                >
                  <a
                    href="#inquiry-section"
                    id="hero-quote-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#0B5CAD] to-[#084887] text-white font-medium text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-whatsapp-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-[#00A86B] hover:bg-[#00945e] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-500 font-medium"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>No Booking Fees</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Customized Itineraries</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Personalized Travel Assistance</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: 5 cols with /logo.webp prominent presentation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-[#D4A017]/40 shadow-2xl gold-glow group max-w-md w-full">

                  {/* Soft Divine Glow inside card */}
                  <div className="absolute inset-0 bg-radial from-[#D4A017]/10 via-transparent to-transparent pointer-events-none rounded-3xl" />

                  <div className="relative flex flex-col items-center justify-center py-2">
                    {/* Render /logo.webp with fallback to vector BrandLogo */}
                    {!logoError ? (
                      <img
                        src="/logo.webp"
                        alt="Madhav Tours & Travels Logo"
                        className="w-full max-w-[280px] sm:max-w-[320px] max-h-[290px] object-contain drop-shadow-md mx-auto transition-transform duration-500 hover:scale-102"
                        onError={() => setLogoError(true)}
                        loading="eager"
                      />
                    ) : (
                      <BrandLogo variant="hero" />
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-center relative z-10">
                    <span className="inline-block text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                      Trusted Tour Curator &bull; India &bull; Oman &bull; Global
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {currentIndex === 1 && (
            <motion.div
              key="slide-discover-india"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: 7 cols */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#D4A017]/40 text-[#00A86B] text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  <Compass className="w-3.5 h-3.5 text-[#00A86B]" />
                  <span>Explore Incredible India</span>
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="space-y-2"
                >
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                    India, Curated For Your{' '}
                    <span className="text-[#0B5CAD]">Perfect Journey</span>
                  </h1>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#C1122F] font-medium pt-1">
                    From Mountains To Temples, Beaches To Heritage
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                >
                  Discover Kashmir, Kerala, Goa, Rajasthan, Himachal, Char Dham and more with customized itineraries designed around your travel style.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
                >
                  <Link
                    to="/domestic-tours"
                    id="hero-domestic-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#0B5CAD] to-[#084887] text-white font-medium text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Explore Domestic Tours</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#inquiry-section"
                    id="hero-plan-trip-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl border-2 border-[#D4A017] text-[#0B5CAD] bg-white hover:bg-[#FAF7F0] font-medium text-sm shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Plan My Trip</span>
                  </a>
                </motion.div>

                {/* Destination Chips */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5"
                >
                  {['Sacred Char Dham', 'Kashmir Valleys', 'Royal Rajasthan', 'Kerala Backwaters', 'Goa Coast'].map((dest) => (
                    <span
                      key={dest}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      <MapPin className="w-3 h-3 text-[#C1122F]" />
                      {dest}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right Column: 5 cols with Kashmir / Rajasthan Full Destination Artwork */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative rounded-3xl overflow-hidden border border-[#D4A017]/50 shadow-2xl max-w-md w-full aspect-[4/5] sm:aspect-[3/4] group">

                  {/* High Quality Indian Destination Image */}
                  <img
                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=85"
                    alt="Kashmir Valley & Shikaras on Dal Lake"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Floating Destination Card */}
                  <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4A017]/40 shadow-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD]">
                        Customized Indian Tours
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#D4A017]">
                        <Star className="w-3.5 h-3.5 fill-[#D4A017] text-[#D4A017]" />
                        <span>5.0 Verified</span>
                      </div>
                    </div>
                    <p className="text-xs font-medium text-slate-600">
                      Family &bull; Couple &bull; Group &bull; Pilgrimage
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                      <span>Kashmir, Kerala, Rajasthan &amp; more</span>
                      <span className="text-[#C1122F] font-semibold">Private Chauffeur</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* SLIDE 3 — GLOBAL ESCAPES */}
          {/* ======================================================== */}
          {currentIndex === 2 && (
            <motion.div
              key="slide-global-escapes"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: 7 cols */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  <Globe className="w-3.5 h-3.5 text-[#0B5CAD]" />
                  <span>Your World, Your Journey</span>
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="space-y-2"
                >
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                    Go <span className="text-[#C1122F]">Beyond Borders</span>. Create Unforgettable Memories.
                  </h1>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#00A86B] font-medium pt-1">
                    International Tours Designed Around You
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                >
                  Explore Dubai, Bali, Singapore, Thailand, Malaysia, Maldives and Europe with personalized travel assistance and carefully planned itineraries.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
                >
                  <Link
                    to="/international-tours"
                    id="hero-intl-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#0B5CAD] to-[#084887] text-white font-medium text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Explore International Tours</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#inquiry-section"
                    id="hero-intl-quote-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl border-2 border-[#D4A017] text-[#0B5CAD] bg-white hover:bg-[#FAF7F0] font-medium text-sm shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Get Custom Quote</span>
                  </a>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-500 font-medium"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Visa Application Guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Private Airport Meet &amp; Greet</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A86B]" />
                    <span>Handpicked Luxury Stays</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: 5 cols with Maldives / Dubai Luxury Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative rounded-3xl overflow-hidden border border-[#D4A017]/50 shadow-2xl max-w-md w-full aspect-[4/5] sm:aspect-[3/4] group">

                  {/* International Luxury Destination Image: Maldives Resort */}
                  <img
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85"
                    alt="Maldives Luxury Overwater Villas"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Floating Mini Card */}
                  <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4A017]/40 shadow-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C1122F]">
                        Popular Escapes
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#0B5CAD]/10 text-[#0B5CAD] font-bold">
                        Bespoke
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-800">
                      Dubai &bull; Bali &bull; Maldives
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      Private beach villas, dessert safaris &amp; city lights.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* SLIDE 4 — COMPLETE TRAVEL ASSISTANCE */}
          {/* ======================================================== */}
          {currentIndex === 3 && (
            <motion.div
              key="slide-complete-travel-assistance"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: 7 cols */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-6">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#D4A017]/40 text-[#0B5CAD] text-xs font-semibold uppercase tracking-wider shadow-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>One Brand. Every Journey.</span>
                </motion.div>

                {/* Headline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                  className="space-y-2"
                >
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.16]">
                    From Flights To Hotels,{' '}
                    <span className="text-[#0B5CAD]">We Handle The Journey.</span>
                  </h1>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#C1122F] font-medium pt-1">
                    End-to-End Travel Concierge &amp; Personal Bookings
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
                >
                  Get personalized assistance for air tickets, train tickets, hotels, taxis, personal chauffeur travel and complete tour planning.
                </motion.p>

                {/* Service Chips/Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1"
                >
                  <Link
                    to="/air-ticket-booking"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0B5CAD] hover:bg-[#FAF7F0] transition-colors shadow-2xs group"
                  >
                    <Plane className="w-4 h-4 text-[#0B5CAD] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800">Air Tickets</span>
                  </Link>

                  <Link
                    to="/hotel-booking"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0B5CAD] hover:bg-[#FAF7F0] transition-colors shadow-2xs group"
                  >
                    <Building2 className="w-4 h-4 text-[#C1122F] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800">Hotels</span>
                  </Link>

                  <Link
                    to="/train-ticket-booking"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0B5CAD] hover:bg-[#FAF7F0] transition-colors shadow-2xs group"
                  >
                    <Train className="w-4 h-4 text-[#00A86B] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800">Train Tickets</span>
                  </Link>

                  <Link
                    to="/taxi-booking"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0B5CAD] hover:bg-[#FAF7F0] transition-colors shadow-2xs group"
                  >
                    <Car className="w-4 h-4 text-[#D4A017] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800">Taxi</span>
                  </Link>

                  <Link
                    to="/domestic-tours"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0B5CAD] hover:bg-[#FAF7F0] transition-colors shadow-2xs group"
                  >
                    <Luggage className="w-4 h-4 text-[#0B5CAD] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800">Tours</span>
                  </Link>

                  <Link
                    to="/personal-taxi"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#0B5CAD] hover:bg-[#FAF7F0] transition-colors shadow-2xs group"
                  >
                    <Car className="w-4 h-4 text-[#C1122F] group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-slate-800">Personal Taxi</span>
                  </Link>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
                >
                  <a
                    href="#inquiry-section"
                    id="hero-assistance-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#0B5CAD] to-[#084887] text-white font-medium text-sm shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Request Assistance</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={createWhatsAppLink("Hi Madhav Tours & Travels, I need assistance with travel tickets, hotels and taxi arrangements.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-whatsapp-assist-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-[#00A86B] hover:bg-[#00945e] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp Us</span>
                  </a>
                </motion.div>
              </div>

              {/* Right Column: 5 cols with Luxury Travel Composition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="relative rounded-3xl overflow-hidden border border-[#D4A017]/50 shadow-2xl max-w-md w-full aspect-[4/5] sm:aspect-[3/4] group">

                  {/* Luxury Flight Departure & Chauffeur Travel */}
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85"
                    alt="Luxury Flight & Travel Departure"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Floating Multi-Service Concierge Card */}
                  <div className="absolute bottom-5 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4A017]/40 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B5CAD]">
                        Dedicated 24/7 Concierge
                      </span>
                      <span className="text-[11px] font-bold text-[#00A86B] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">
                      Flights &bull; Hotels &bull; Tatkal Trains &bull; Cabs
                    </p>
                    <div className="pt-1.5 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                      <span>Zero Hidden Charges</span>
                      <span className="text-[#D4A017] font-bold">Fast Turnaround</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ======================================================== */}
      {/* SLIDER CONTROLS & PROGRESS INDICATORS */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto w-full pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D4A017]/20 relative z-10">
        {/* 4 Elegant Pagination Indicators (01 ━━━━, 02 ━━━━, etc.) */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto max-w-full py-1">
          {[
            { id: 0, label: '01', title: 'Signature' },
            { id: 1, label: '02', title: 'Incredible India' },
            { id: 2, label: '03', title: 'Global Escapes' },
            { id: 3, label: '04', title: 'All Assistance' },
          ].map((item) => {
            const isActive = currentIndex === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(item.id)}
                className="group flex items-center gap-2 py-1.5 focus-visible:outline-none cursor-pointer text-left"
                aria-label={`Switch to slide ${item.label}: ${item.title}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <span
                  className={`font-mono text-xs font-bold transition-colors ${
                    isActive ? 'text-[#D4A017]' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                >
                  {item.label}
                </span>

                {/* Progress bar line */}
                <div className="relative w-10 sm:w-16 md:w-20 h-1 sm:h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  {isActive && (
                    <motion.div
                      key={`progress-${currentIndex}`}
                      className="absolute inset-y-0 left-0 bg-[#D4A017] rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: isHovered ? undefined : '100%' }}
                      transition={{
                        duration: isHovered ? 0 : AUTOPLAY_DELAY / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                  {!isActive && (
                    <div
                      className={`h-full ${
                        item.id < currentIndex ? 'bg-[#D4A017]/40 w-full' : 'w-0'
                      }`}
                    />
                  )}
                </div>

                <span className="hidden lg:inline text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Slide Counter + Prev/Next Buttons */}
        <div className="flex items-center gap-4">
          {/* Slide counter */}
          <div className="font-mono text-xs font-bold text-slate-500 tracking-wider">
            <span className="text-[#D4A017]">0{currentIndex + 1}</span>
            <span className="text-slate-300 mx-1">/</span>
            <span>0{TOTAL_SLIDES}</span>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D4A017]/40 shadow-2xs hover:shadow-md hover:border-[#D4A017] hover:bg-[#FAF7F0] text-slate-700 hover:text-[#D4A017] transition-all flex items-center justify-center cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D4A017]/40 shadow-2xs hover:shadow-md hover:border-[#D4A017] hover:bg-[#FAF7F0] text-slate-700 hover:text-[#D4A017] transition-all flex items-center justify-center cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
