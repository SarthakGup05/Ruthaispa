import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { InstagramIcon } from '../icons/lucide-instagram';
import { Whatsapp } from '../icons/whatsapp';
import Logo from '../ui/Logo';
import { FadeIn } from '../ui/motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-background pt-12 pb-6 text-sm transition-colors duration-300 border-t border-border/10">
      
      {/* Minimal Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-50" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <FadeIn direction="up" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-8 relative z-10">
        
        {/* Brand & Contact Section */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col pr-0 lg:pr-8">
          <a href="#" className="inline-block mb-4 group">
            <Logo
              className="h-32 md:h-36 w-auto transition-transform duration-700 ease-out group-hover:scale-105 filter drop-shadow-[0_4px_12px_rgba(230,210,167,0.1)]"
            />
          </a>
          
          <address className="flex flex-col gap-3.5 not-italic">
            <a href="#" className="flex items-start gap-4 text-[13px] text-muted-foreground hover:text-primary transition-colors group">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="leading-relaxed font-light">
                Shop No. B216, 2nd Floor, City Centre 2<br />
                Kolkata - 700157
              </span>
            </a>
            <a href="tel:+917449962261" className="flex items-center gap-4 text-[13px] text-muted-foreground hover:text-primary transition-colors group">
              <Phone className="w-4 h-4 text-primary shrink-0 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="font-light tracking-wide">+91 74499 62261</span>
            </a>
            <a href="mailto:bookings@ruathaispa.com" className="flex items-center gap-4 text-[13px] text-muted-foreground hover:text-primary transition-colors group">
              <Mail className="w-4 h-4 text-primary shrink-0 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="font-light tracking-wide">bookings@ruathaispa.com</span>
            </a>
          </address>
        </div>

        {/* Navigation - Explore */}
        <nav className="md:col-span-4 lg:col-span-2 pt-1">
          <h4 className="font-serif text-xs tracking-[0.2em] text-foreground uppercase mb-4">
            Explore
          </h4>
          <ul className="flex flex-col gap-3 text-[13px] font-light text-muted-foreground">
            {['Home', 'About Us', 'Services', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="group relative inline-block transition-colors hover:text-primary pb-1">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navigation - Wellness */}
        <nav className="md:col-span-4 lg:col-span-3 pt-1">
          <h4 className="font-serif text-xs tracking-[0.2em] text-foreground uppercase mb-4">
            Wellness
          </h4>
          <ul className="flex flex-col gap-3 text-[13px] font-light text-muted-foreground">
            {[
              'Traditional Thai Massage',
              'Aromatherapy Rituals',
              'Deep Tissue Therapy',
              'Hot Herbal Compress',
              'Couples Retreat'
            ].map((item) => (
              <li key={item}>
                <a href="#" className="group relative inline-block transition-colors hover:text-primary pb-1">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours & Socials */}
        <div className="md:col-span-4 lg:col-span-3 pt-1">
          <h4 className="font-serif text-xs tracking-[0.2em] text-foreground uppercase mb-4">
            Sanctuary Hours
          </h4>
          <ul className="flex flex-col gap-3 text-[13px] font-light text-muted-foreground mb-6">
            <li className="flex justify-between items-end border-b border-border/10 pb-3">
              <span>Monday - Sunday</span>
              <span className="text-foreground tracking-wide">10:00 AM - 09:00 PM</span>
            </li>
            <li className="flex justify-between items-end border-b border-border/10 pb-3">
              <span>Holidays</span>
              <span className="text-foreground tracking-wide">10:00 AM - 09:00 PM</span>
            </li>
          </ul>

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-2.5 font-semibold">Connect With Us</p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/ruathaispa" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow us on Instagram" 
                className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
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
        <div className="border-t border-border/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
          <p>© {currentYear} RUA Thai Spa Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}