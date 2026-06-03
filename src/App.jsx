import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PremiumLoader from './components/ui/PremiumLoader';
import FloatingActions from './components/layout/FloatingActions';
import Hero from './components/sections/home/Hero';
import Philosophy from './components/sections/home/Philosophy';
import AboutIntro from './components/sections/about/AboutIntro';
import ServiceList from './components/sections/services/ServiceList';
import BookingPlanner from './components/sections/services/BookingPlanner';
import ContactUs from './components/sections/contact/ContactUs';
import SenLines from './components/graphics/SenLines';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedService, setSelectedService] = useState('thai');
  const [loading, setLoading] = useState(true);

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
      {loading && (
        <PremiumLoader 
          fullScreen={true} 
          onComplete={() => setLoading(false)} 
          duration={2200} 
        />
      )}
      
      {/* Top Navbar Header */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col">
        {/* 1. Hero Welcome Section */}
        <Hero />

        {/* Sen Line Divider */}
        <SenLines />

        {/* 2. Why Choose Us Section */}
        <Philosophy />

        {/* Sen Line Divider */}
        <SenLines className="rotate-180" />

        {/* 4. Signature Treatments Showcase */}
        <ServiceList selectedService={selectedService} setSelectedService={setSelectedService} />

        {/* 3. About Us Section */}
        <AboutIntro />

        {/* Sen Line Divider */}
        <SenLines />

        {/* 5. Interactive Booking Planner */}
        <BookingPlanner selectedService={selectedService} setSelectedService={setSelectedService} />

        {/* Sen Line Divider */}
        <SenLines className="rotate-180" />

        {/* 6. Unified Contact & Booking Section */}
        <ContactUs />
      </main>

      {/* Floating Action Buttons */}
      <FloatingActions loading={loading} />

      {/* Global Page Footer */}
      <Footer />

    </div>
  );
}

export default App;
