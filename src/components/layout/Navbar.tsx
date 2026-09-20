import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from '../common/BrandLogo';
import { COMPANY_DETAILS, createWhatsAppLink } from '../../data/travelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTourDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll and prevent layout shift while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    } else {
      // Return focus to menu button when closed
      if (menuButtonRef.current && document.activeElement === closeButtonRef.current) {
        menuButtonRef.current.focus();
      }
    }
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;

      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        return;
      }

      // Simple focus trap inside mobile drawer
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
  ];

  const tourLinks = [
    { name: 'Domestic Tours', path: '/domestic-tours', desc: 'Char Dham, Kashmir, Kerala, Rajasthan & Goa' },
    { name: 'International Tours', path: '/international-tours', desc: 'Dubai, Bali, Singapore, Thailand, Maldives & Europe' },
    { name: 'Hotel Booking', path: '/hotel-booking', desc: 'Luxury Stays, Heritage Haveli & Family Resorts' },
    { name: 'Air Ticket Booking', path: '/air-ticket-booking', desc: 'Domestic & International Flight Assistance' },
    { name: 'Train Ticket Booking', path: '/train-ticket-booking', desc: 'Railway & Tatkal Route Coordination' },
    { name: 'Taxi Booking', path: '/taxi-booking', desc: 'Airport Pickup, Outstation & City Cabs' },
    { name: 'Personal Taxi', path: '/personal-taxi', desc: 'Chauffeur-driven Innova, Fortuner & Sedans' },
  ];

  // Specific order of all links requested for the mobile menu
  const mobileMenuLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Domestic Tours', path: '/domestic-tours' },
    { name: 'International Tours', path: '/international-tours' },
    { name: 'Hotel Booking', path: '/hotel-booking' },
    { name: 'Air Ticket Booking', path: '/air-ticket-booking' },
    { name: 'Train Ticket Booking', path: '/train-ticket-booking' },
    { name: 'Taxi Booking', path: '/taxi-booking' },
    { name: 'Personal Taxi', path: '/personal-taxi' },
    { name: 'Contact', path: '/contact' },
  ];

  const isTourActive = location.pathname.includes('tour') || location.pathname.includes('booking') || location.pathname === '/personal-taxi';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#D4A017]/30 py-2 sm:py-2.5'
            : 'bg-white/90 sm:bg-white/80 backdrop-blur-md border-b border-[#D4A017]/20 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo Link */}
            <Link
              to="/"
              className="group flex items-center transition-transform duration-300 hover:scale-102 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-lg"
              aria-label="Madhav Tours & Travels Home"
            >
              <BrandLogo variant="horizontal" />
            </Link>

            {/* Desktop Navigation Links (Visible on 1024px and above) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] ${
                      isActive
                        ? 'text-[#C1122F] font-semibold bg-[#FAF7F0] border-b-2 border-[#D4A017]'
                        : 'text-slate-700 hover:text-[#0B5CAD] hover:bg-white/60'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Tour Packages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTourDropdownOpen(true)}
                onMouseLeave={() => setTourDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setTourDropdownOpen((prev) => !prev)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] ${
                    isTourActive
                      ? 'text-[#C1122F] font-semibold bg-[#FAF7F0] border-b-2 border-[#D4A017]'
                      : 'text-slate-700 hover:text-[#0B5CAD] hover:bg-white/60'
                  }`}
                  aria-expanded={tourDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Tour Packages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${tourDropdownOpen ? 'rotate-180 text-[#D4A017]' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {tourDropdownOpen && (
                  <div className="absolute top-full left-0 w-84 pt-2 z-50 animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl border border-[#D4A017]/30 p-2 overflow-hidden ring-1 ring-black/5">
                      <div className="px-3 py-1.5 border-b border-slate-100 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#D4A017]">
                        <Sparkles className="w-3 h-3 text-[#D4A017]" />
                        Bespoke Travel Solutions
                      </div>
                      <div className="grid gap-1 mt-1 max-h-[420px] overflow-y-auto">
                        {tourLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setTourDropdownOpen(false)}
                            className="block px-3 py-2 rounded-xl hover:bg-[#FAF7F0] transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
                          >
                            <div className="text-sm font-medium text-slate-800 group-hover:text-[#0B5CAD] flex items-center justify-between">
                              <span>{link.name}</span>
                              <span className="text-xs text-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">{link.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] ${
                  location.pathname === '/contact'
                    ? 'text-[#C1122F] font-semibold bg-[#FAF7F0] border-b-2 border-[#D4A017]'
                    : 'text-slate-700 hover:text-[#0B5CAD] hover:bg-white/60'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Right Side: WhatsApp button & Call button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                id="header-call-btn"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-medium text-[#0B5CAD] bg-white hover:bg-slate-50 border border-[#0B5CAD]/30 shadow-xs hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5CAD]"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B5CAD]" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-medium text-white bg-gradient-to-r from-[#00A86B] to-[#00925d] shadow-sm hover:shadow-md transition-all transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A86B]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Mobile & Tablet Controls (Below 1024px) */}
            <div className="flex items-center gap-1 sm:gap-2 lg:hidden">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] p-2 flex items-center justify-center text-[#0B5CAD] hover:bg-[#FAF7F0] rounded-xl border border-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5CAD]"
                aria-label={`Call Madhav Tours at ${COMPANY_DETAILS.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] p-2 flex items-center justify-center text-[#00A86B] hover:bg-[#FAF7F0] rounded-xl border border-slate-200/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A86B]"
                aria-label="WhatsApp Madhav Tours Inquiry"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              {/* Hamburger Toggle Button (appears below 1024px) */}
              <button
                ref={menuButtonRef}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-white border border-[#D4A017]/40 text-slate-800 hover:text-[#0B5CAD] hover:bg-slate-50 transition-colors shadow-xs flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#C1122F]" /> : <Menu className="w-6 h-6 text-[#0B5CAD]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Full-Screen Slide-In Menu from Right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop Overlay - Clicking outside closes the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-In Drawer Container */}
            <motion.aside
              ref={drawerRef}
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              data-lenis-prevent="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] max-w-full bg-[#FAF7F0] border-l border-[#D4A017]/40 shadow-2xl z-50 flex flex-col justify-between overflow-hidden"
            >
              {/* Drawer Top Header */}
              <div className="px-5 py-4 bg-white/95 backdrop-blur-md border-b border-[#D4A017]/30 flex items-center justify-between shrink-0">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] rounded-lg"
                  aria-label="Madhav Tours & Travels"
                >
                  <BrandLogo variant="compact" />
                </Link>

                <button
                  ref={closeButtonRef}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-[#FAF7F0] hover:bg-slate-100 text-slate-700 hover:text-[#C1122F] border border-[#D4A017]/30 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Decorative divine flute line accent */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0B5CAD] via-[#D4A017] to-[#00A86B] shrink-0" />

              {/* Scrollable Navigation Items List */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 overscroll-contain">
                <div className="px-3 pt-1 pb-2 text-[11px] font-bold uppercase tracking-wider text-[#D4A017] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Explore Offerings</span>
                </div>

                {mobileMenuLinks.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`min-h-[48px] flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] ${
                        isActive
                          ? 'text-[#C1122F] bg-white border-l-4 border-[#D4A017] shadow-sm'
                          : 'text-slate-800 hover:bg-white/80 hover:text-[#0B5CAD]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-[#C1122F] translate-x-0.5' : 'text-slate-400 opacity-60'
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Section: WhatsApp & Call Now Buttons */}
              <div className="p-4 bg-white/95 backdrop-blur-md border-t border-[#D4A017]/30 space-y-2.5 shrink-0 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
                {/* WhatsApp Button */}
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-gradient-to-r from-[#00A86B] to-[#008f5c] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A86B]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp ({COMPANY_DETAILS.whatsappDisplay})</span>
                </a>

                {/* Call Now Button */}
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="min-h-[48px] w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl border-2 border-[#0B5CAD] text-[#0B5CAD] hover:bg-[#0B5CAD]/5 font-semibold text-sm transition-all transform active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5CAD]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now ({COMPANY_DETAILS.phoneDisplay})</span>
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

