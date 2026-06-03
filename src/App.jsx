import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/home/Hero';

// Lazy-load all below-fold sections — keeps the initial JS bundle small
const Philosophy = lazy(() => import('./components/sections/home/Philosophy'));
const SenLines = lazy(() => import('./components/graphics/SenLines'));
const ServiceList = lazy(() => import('./components/sections/services/ServiceList'));
const AboutIntro = lazy(() => import('./components/sections/about/AboutIntro'));
const BookingPlanner = lazy(() => import('./components/sections/services/BookingPlanner'));
const ContactUs = lazy(() => import('./components/sections/contact/ContactUs'));
const Footer = lazy(() => import('./components/layout/Footer'));
const FloatingActions = lazy(() => import('./components/layout/FloatingActions'));

// Minimal placeholder that preserves page height while sections load
const SectionFallback = () => <div className="min-h-[40px]" aria-hidden="true" />;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedService, setSelectedService] = useState('thai');

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col font-sans relative">
      {/* Top Navbar Header — eagerly loaded */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col">
        {/* 1. Hero Welcome Section — eagerly loaded (above the fold) */}
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          {/* Sen Line Divider */}
          <SenLines />

          {/* 2. Why Choose Us Section */}
          <Philosophy />

          {/* Sen Line Divider */}
          <SenLines className="rotate-180" />

          {/* 3. Signature Treatments Showcase */}
          <ServiceList selectedService={selectedService} setSelectedService={setSelectedService} />

          {/* 4. About Us Section */}
          <AboutIntro />

          {/* Sen Line Divider */}
          <SenLines />

          {/* 5. Interactive Booking Planner */}
          <BookingPlanner selectedService={selectedService} setSelectedService={setSelectedService} />

          {/* Sen Line Divider */}
          <SenLines className="rotate-180" />

          {/* 6. Unified Contact & Booking Section */}
          <ContactUs />
        </Suspense>
      </main>

      {/* Floating Action Buttons */}
      <Suspense fallback={null}>
        <FloatingActions />
      </Suspense>

      {/* Global Page Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
