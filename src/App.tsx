import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/common/SmoothScroll';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingContact } from './components/layout/FloatingContact';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DomesticToursPage } from './pages/DomesticToursPage';
import { InternationalToursPage } from './pages/InternationalToursPage';
import { HotelBookingPage } from './pages/HotelBookingPage';
import { AirTicketPage } from './pages/AirTicketPage';
import { TrainTicketPage } from './pages/TrainTicketPage';
import { TaxiBookingPage } from './pages/TaxiBookingPage';
import { PersonalTaxiPage } from './pages/PersonalTaxiPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="flex flex-col min-h-screen font-sans bg-[#FAF7F0] text-slate-800 antialiased selection:bg-[#D4A017]/30 selection:text-[#0B5CAD]">
          {/* Main Navigation */}
          <Navbar />

          {/* Page Routing */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/domestic-tours" element={<DomesticToursPage />} />
              <Route path="/international-tours" element={<InternationalToursPage />} />
              <Route path="/hotel-booking" element={<HotelBookingPage />} />
              <Route path="/air-ticket-booking" element={<AirTicketPage />} />
              <Route path="/train-ticket-booking" element={<TrainTicketPage />} />
              <Route path="/taxi-booking" element={<TaxiBookingPage />} />
              <Route path="/personal-taxi" element={<PersonalTaxiPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
              <Route path="/terms-and-conditions" element={<LegalPage type="terms" />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Luxury Footer */}
          <Footer />

          {/* Sticky Mobile Bar & Desktop Quick Floating Contacts */}
          <FloatingContact />
        </div>
      </SmoothScroll>
    </Router>
  );
}

