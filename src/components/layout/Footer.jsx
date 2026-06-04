import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { InstagramIcon } from '../icons/lucide-instagram';
import { Whatsapp } from '../icons/whatsapp';
import Logo from '../ui/Logo';
import { FadeIn } from '../ui/motion';

function Footer({ setCurrentPage, setSelectedService }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-transparent pt-8 pb-4 text-sm transition-colors duration-300 border-t border-border/10">
      
      {/* Minimal Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <FadeIn direction="up" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-6 relative z-10">
        
        {/* Brand & Contact Section */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col pr-0 lg:pr-8">
          <a
            id="footer-brand-logo"
            data-testid="footer-brand-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage?.("home");
            }}
            className="inline-block mb-2 group"
            aria-label="RUA Thai Spa Home"
          >
            <div className="flex items-center gap-3.5 select-none">
              <Logo
                showText={false}
                className="h-16 md:h-20 w-auto transition-transform duration-700 ease-out group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(230,210,167,0.1)]"
              />
              <div className="flex flex-col text-left font-serif leading-none mt-0.5">
                <span className="font-serif tracking-[0.15em] font-medium uppercase text-2xl md:text-3xl text-foreground">
                  RUA
                </span>
                <span className="font-sans tracking-[0.3em] font-semibold uppercase text-[10px] md:text-[11px] text-primary mt-1.5">
                  Thai Spa
                </span>
              </div>
            </div>
          </a>
          
          <address className="flex flex-col gap-2 not-italic">
            <a
              id="footer-contact-address"
              data-testid="footer-contact-address"
              href="#"
              className="flex items-start gap-4 text-[13px] text-muted-foreground hover:text-primary transition-colors group"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="leading-relaxed font-light">
                Shop No. B216, 2nd Floor, City Centre 2<br />
                Kolkata - 700157
              </span>
            </a>
            <a
              id="footer-contact-phone"
              data-testid="footer-contact-phone"
              href="tel:+917449962261"
              className="flex items-center gap-4 text-[13px] text-muted-foreground hover:text-primary transition-colors group"
            >
              <Phone className="w-4 h-4 text-primary shrink-0 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="font-light tracking-wide">+91 74499 62261</span>
            </a>
            <a
              id="footer-contact-email"
              data-testid="footer-contact-email"
              href="mailto:bookings@ruathaispa.com"
              className="flex items-center gap-4 text-[13px] text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 text-primary shrink-0 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="font-light tracking-wide">bookings@ruathaispa.com</span>
            </a>
          </address>
        </div>

        {/* Navigation - Explore */}
        <nav className="md:col-span-4 lg:col-span-2 pt-1 font-sans">
          <h4 className="font-serif text-xs tracking-[0.2em] text-foreground uppercase mb-2.5 font-semibold">
            Explore
          </h4>
          <ul className="flex flex-col gap-2 text-[13px] font-light text-muted-foreground">
            {[
              { name: 'Home', page: 'home' },
              { name: 'About Us', page: 'about' },
              { name: 'Services', page: 'services' },
              { name: 'Contact Us', page: 'contact' }
            ].map((item) => (
              <li key={item.page}>
                <a
                  id={`footer-link-explore-${item.page}`}
                  data-testid={`footer-link-explore-${item.page}`}
                  href={`#${item.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage?.(item.page);
                  }}
                  className="group relative inline-block transition-colors hover:text-primary pb-1 cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navigation - Signature Treatments */}
        <nav className="md:col-span-4 lg:col-span-3 pt-1 font-sans">
          <h4 className="font-serif text-xs tracking-[0.2em] text-foreground uppercase mb-2.5 font-semibold">
            Treatments
          </h4>
          <ul className="flex flex-col gap-2 text-[13px] font-light text-muted-foreground">
            {[
              { name: 'Swedish Massage', id: 'swedish' },
              { name: 'Deep Tissue Massage', id: 'deep-tissue' },
              { name: 'Aromatherapy Massage', id: 'aroma' },
              { name: 'Balinese Massage', id: 'balinese' }
            ].map((item) => (
              <li key={item.id}>
                <a
                  id={`footer-link-treatment-${item.id}`}
                  data-testid={`footer-link-treatment-${item.id}`}
                  href={`#services`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (setCurrentPage && setSelectedService) {
                      setSelectedService(item.id);
                      setCurrentPage('services');
                    }
                  }}
                  className="group relative inline-block transition-colors hover:text-primary pb-1 cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours & Socials */}
        <div className="md:col-span-4 lg:col-span-3 pt-1">
          <h4 className="font-serif text-xs tracking-[0.2em] text-foreground uppercase mb-2.5">
            Sanctuary Hours
          </h4>
          <ul className="flex flex-col gap-2 text-[13px] font-light text-muted-foreground mb-4">
            <li className="flex justify-between items-end border-b border-border/10 pb-2">
              <span>Monday - Sunday</span>
              <span className="text-foreground tracking-wide">10:00 AM - 09:00 PM</span>
            </li>
            <li className="flex justify-between items-end border-b border-border/10 pb-2">
              <span>Holidays</span>
              <span className="text-foreground tracking-wide">10:00 AM - 09:00 PM</span>
            </li>
          </ul>

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-2.5 font-semibold">Connect With Us</p>
            <div className="flex gap-4">
              <a 
                id="footer-social-instagram"
                data-testid="footer-social-instagram"
                href="https://instagram.com/ruathaispa" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram" 
                className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                id="footer-social-whatsapp"
                data-testid="footer-social-whatsapp"
                href="https://wa.me/917449962261?text=Hi%20RUA%20Thai%20Spa!%20I'd%20like%20to%20inquire%20about%20booking%20a%20relaxation%20session." 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Message us on WhatsApp" 
                className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <Whatsapp size={18} />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-border/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
          <p>© {currentYear} RUA Thai Spa Wellness. All rights reserved.</p>
          <p className="flex items-center gap-1 normal-case tracking-normal font-sans text-xs text-muted-foreground">
            Made with <Heart className="w-3 h-3 text-destructive fill-destructive animate-pulse mx-0.5" /> by{" "}
            <a
              id="footer-credits-author"
              data-testid="footer-credits-author"
              href="https://saarthak.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors hover:underline ml-1"
            >
              saarthak.xyz
            </a>
          </p>
          <div className="flex gap-6 font-medium">
            <a
              id="footer-legal-privacy"
              data-testid="footer-legal-privacy"
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage?.("privacy");
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              id="footer-legal-terms"
              data-testid="footer-legal-terms"
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage?.("terms");
              }}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);