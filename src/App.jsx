import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/home/Hero';
import PageHeader from './components/layout/PageHeader';
import { useIsMobile } from './hooks/use-mobile';

// Lazy-load all below-fold sections — keeps the initial JS bundle small
const Philosophy = lazy(() => import('./components/sections/home/Philosophy'));
const SenLines = lazy(() => import('./components/graphics/SenLines'));
const ServiceList = lazy(() => import('./components/sections/services/ServiceList'));
const AboutIntro = lazy(() => import('./components/sections/about/AboutIntro'));
const BookingPlanner = lazy(() => import('./components/sections/services/BookingPlanner'));
const ContactUs = lazy(() => import('./components/sections/contact/ContactUs'));
const FAQAccordion = lazy(() => import('./components/sections/faq/FAQAccordion'));
const GalleryGrid = lazy(() => import('./components/sections/gallery/GalleryGrid'));
const PrivacyPolicy = lazy(() => import('./components/sections/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/sections/legal/TermsOfService'));
const Footer = lazy(() => import('./components/layout/Footer'));
const FloatingActions = lazy(() => import('./components/layout/FloatingActions'));

// Minimal placeholder that preserves page height while sections load
const SectionFallback = () => <div className="min-h-[40px]" aria-hidden="true" />;

function App() {
  const isMobile = useIsMobile();
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });
  const [selectedService, setSelectedService] = useState('thai');
  
  // Read hash fragment for initial page routing state on reload
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'about', 'services', 'booking', 'faq', 'contact', 'privacy', 'terms'];
    return validPages.includes(hash) ? hash : 'home';
  });

  // Apply dark mode class to html element and persist preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll management on page transitions and service selections
  useEffect(() => {
    if (currentPage === 'services' && selectedService) {
      const timer = setTimeout(() => {
        const element = document.getElementById(`massage-${selectedService}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 150); // Delay to let DOM rendering settle
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentPage, selectedService]);

  // Dynamic SEO Metadata updates (Title & Meta Tags) for crawlers, tab titles and accessibility
  useEffect(() => {
    const metaDescriptions = {
      home: "Immerse yourself in serenity at RUA Thai Spa. We offer authentic traditional Thai massages, aromatherapy, and deep tissue therapies from Wat Pho certified practitioners in a luxury wellness sanctuary.",
      about: "Discover the heritage of Siamese wellness at RUA Thai Spa. Our practices stem directly from ancient Wat Pho traditions, delivering authentic restoration and stretching rituals.",
      services: "Explore our signature spa treatments, including classical Swedish, deep tissue, aromatherapy, and Balinese massage therapies custom tailored for your relaxation.",
      booking: "Book your path to peace. Schedule a wellness session online at RUA Thai Spa, selecting your preferred signature massage and certified master therapist.",
      faq: "Find guidance on spa etiquette, what to wear, when to arrive, and policies to prepare for your journey into absolute serenity at RUA Thai Spa.",
      contact: "Find our luxury sanctuary at City Centre 2, Kolkata. View hours, get directions, or call our team to book your massage session directly.",
      privacy: "Review our wellness data privacy guidelines. Learn how RUA Thai Spa protects your booking records and medical health disclaimers with absolute integrity.",
      terms: "Read our sanctuary rules, cancellation policies, late arrival conditions, and traditional Nuad Thai physical therapy disclaimers at RUA Thai Spa."
    };

    const titles = {
      home: "RUA Thai Spa | Traditional Thai Massage & Wellness Sanctuary",
      about: "Our Story & Siamese Lineage | RUA Thai Spa",
      services: "Signature Treatments & Massage Rituals | RUA Thai Spa",
      booking: "Reserve Session & Book Online | RUA Thai Spa",
      faq: "Sanctuary Guidelines & FAQs | RUA Thai Spa",
      contact: "Find Sanctuary & Contact Us | RUA Thai Spa",
      privacy: "Privacy Policy | RUA Thai Spa",
      terms: "Terms of Service & Sanctuary Guidelines | RUA Thai Spa"
    };

    // Update Page Tab Title
    document.title = titles[currentPage] || titles.home;

    // Update Meta Description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute("content", metaDescriptions[currentPage] || metaDescriptions.home);
    }

    // Automatically generate/update Canonical URL link in header
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    const baseUrl = window.location.origin + window.location.pathname;
    const canonicalUrl = currentPage === 'home' ? baseUrl : `${baseUrl}#${currentPage}`;
    canonicalTag.setAttribute('href', canonicalUrl);
  }, [currentPage]);

  // Listen to browser hashchange events (supports browser Back/Forward navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'booking', 'faq', 'contact', 'privacy', 'terms'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Wrapper function to keep URL hash in sync with state transitions
  const navigateToPage = (page) => {
    window.location.hash = page === 'home' ? '' : `#${page}`;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground transition-colors duration-300 flex flex-col font-sans relative">
      {/* Global Luxury Glassy Background Video (Home Page Only) */}
      {currentPage === 'home' && !isMobile && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
          <video
            src="/massage.mp4"
            className="w-full h-full object-cover opacity-[0.035] dark:opacity-[0.05] filter grayscale contrast-125 mix-blend-luminosity"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          {/* Subtle gold/teal overlay to tint the video */}
          <div className="absolute inset-0 bg-primary/3 dark:bg-primary/1 mix-blend-overlay" />
          
          {/* Vignette mask to darken edges and focus attention on content */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_100%)] opacity-85 dark:opacity-90" />
        </div>
      )}

      {/* Top Navbar Header — eagerly loaded */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        currentPage={currentPage}
        setCurrentPage={navigateToPage}
      />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col relative z-10">
        {currentPage === 'home' ? (
          <div id="simulated-page-home" className="flex flex-col">
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

              {/* FAQ Section */}
              <FAQAccordion />

              {/* Sen Line Divider */}
              <SenLines />

              {/* 6. Unified Contact & Booking Section */}
              <ContactUs />
            </Suspense>
          </div>
        ) : (
          <Suspense fallback={<SectionFallback />}>
            {currentPage === 'about' && (
              <div id="simulated-page-about" className="flex flex-col">
                <PageHeader
                  title="Our Sanctuary"
                  subtitle="Codified lineage, certified practitioners, and authentic Siamese therapies"
                  bgImage="/orchid_pavilion.webp"
                  breadcrumbs={[{ label: "Sanctuary" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="about"
                />
                <AboutIntro />
                <GalleryGrid />
              </div>
            )}

            {currentPage === 'services' && (
              <div id="simulated-page-services" className="flex flex-col">
                <PageHeader
                  title="Signature Treatments"
                  subtitle="A holistic orchestration of alignment, breath, and structural release"
                  bgImage="/spa_interior.webp"
                  breadcrumbs={[{ label: "Treatments" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="services"
                />
                <ServiceList selectedService={selectedService} setSelectedService={setSelectedService} />
                <BookingPlanner selectedService={selectedService} setSelectedService={setSelectedService} />
                <FAQAccordion />
              </div>
            )}

            {currentPage === 'booking' && (
              <div id="simulated-page-booking" className="flex flex-col">
                <PageHeader
                  title="Reserve Session"
                  subtitle="Select your preferred signature therapy, timing, and master practitioner"
                  bgImage="/siam_suite.webp"
                  breadcrumbs={[{ label: "Booking" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="booking"
                />
                <BookingPlanner selectedService={selectedService} setSelectedService={setSelectedService} />
              </div>
            )}

            {currentPage === 'faq' && (
              <div id="simulated-page-faq" className="flex flex-col">
                <PageHeader
                  title="Sanctuary Guide"
                  subtitle="Pre-treatment advice, check-in instructions, and wellness etiquette"
                  bgImage="/tea_lounge.webp"
                  breadcrumbs={[{ label: "FAQ & Etiquette" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="faq"
                />
                <FAQAccordion />
                <GalleryGrid />
              </div>
            )}

            {currentPage === 'contact' && (
              <div id="simulated-page-contact" className="flex flex-col">
                <PageHeader
                  title="Find Serenity"
                  subtitle="Get directions to our chambers or contact our reception team directly"
                  bgImage="/lotus_pond.webp"
                  breadcrumbs={[{ label: "Contact Us" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="contact"
                />
                <ContactUs />
              </div>
            )}

            {currentPage === 'privacy' && (
              <div id="simulated-page-privacy" className="flex flex-col">
                <PageHeader
                  title="Privacy Policy"
                  subtitle="Sanctuary data practices, information safety, and privacy guidelines"
                  bgImage="/tea_lounge.webp"
                  breadcrumbs={[{ label: "Privacy Policy" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="privacy"
                />
                <PrivacyPolicy />
              </div>
            )}

            {currentPage === 'terms' && (
              <div id="simulated-page-terms" className="flex flex-col">
                <PageHeader
                  title="Terms of Service"
                  subtitle="Agreement terms, booking guidelines, rules of sanctuary etiquette"
                  bgImage="/siam_suite.webp"
                  breadcrumbs={[{ label: "Terms of Service" }]}
                  onNavigateHome={() => navigateToPage('home')}
                  onNavigateSection={(sec) => navigateToPage(sec)}
                  currentSection="terms"
                />
                <TermsOfService />
              </div>
            )}
          </Suspense>
        )}
      </main>

      {/* Floating Action Buttons */}
      <Suspense fallback={null}>
        <FloatingActions />
      </Suspense>

      {/* Global Page Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer setCurrentPage={navigateToPage} setSelectedService={setSelectedService} />
      </Suspense>
    </div>
  );
}

export default App;
