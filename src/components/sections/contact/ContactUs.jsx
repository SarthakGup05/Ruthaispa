import React, { useState } from "react";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Whatsapp } from "../../icons/whatsapp";
import PetalDivider from "../../ui/PetalDivider";
import MandalaWatermark from "../../graphics/MandalaWatermark";
import IncenseSmoke from "../../graphics/IncenseSmoke";
import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";

export default function ContactUs() {
  const [activeView, setActiveView] = useState("map");
  const [hasToggled, setHasToggled] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-8 md:py-10 px-6 overflow-hidden bg-transparent border-t border-border/10 transition-colors duration-500 z-0"
    >
      {/* Soft atmospheric background glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[50%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />

      {/* MandalaWatermark — centered subtle background ornament */}
      <MandalaWatermark className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 -z-10 opacity-25 dark:opacity-40 hidden md:block" size={450} />

      {/* IncenseSmoke — left edge organic accent */}
      <IncenseSmoke className="absolute top-12 left-6 -z-10 opacity-30 hidden xl:block" height={280} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <FadeIn direction="up" className="text-center mb-6 flex flex-col items-center">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
            Directions & Bookings
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-normal text-foreground mb-6">
            Contact Our Sanctuary
          </h2>
          <PetalDivider />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side: Picture/Map toggleable panel */}
          <FadeIn
            direction="right"
            className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] border border-border/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group min-h-[300px]"
          >
            {/* View Toggle Control Pill */}
            <div className="absolute top-4 right-4 z-30 bg-card/90 dark:bg-card/75 backdrop-blur-md border border-border/25 rounded-full p-1 flex items-center shadow-lg transition-all duration-300">
              <button
                onClick={() => {
                  setActiveView("photo");
                  setHasToggled(true);
                }}
                onMouseEnter={() => setHasToggled(true)}
                className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 hover:scale-105 active:scale-95 ${
                  activeView === "photo"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {!hasToggled && (
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                  </span>
                )}
                Sanctuary
              </button>
              <button
                onClick={() => {
                  setActiveView("map");
                  setHasToggled(true);
                }}
                onMouseEnter={() => setHasToggled(true)}
                className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 hover:scale-105 active:scale-95 ${
                  activeView === "map"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Map
              </button>
            </div>

            {/* Photo View */}
            <div className={`w-full h-full absolute inset-0 transition-opacity duration-500 ease-in-out ${activeView === "photo" ? "opacity-100 z-10" : "opacity-0 pointer-events-none -z-10"}`}>
              {/* Background Zooming Spa Image */}
              <img
                src="/receptionist_rua.webp"
                alt="RUA Thai Spa Guest Relations Receptionist"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Elegant luxury gold-glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

              {/* Tiny visual badge inside image */}
              <div className="absolute bottom-6 left-6 bg-card/85 dark:bg-card/60 backdrop-blur-md border border-border/25 px-4 py-2.5 rounded-2xl z-20 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-foreground">
                  Sanctuary Reception
                </span>
              </div>
            </div>

            {/* Map View */}
            <div className={`w-full h-full absolute inset-0 transition-opacity duration-500 ease-in-out bg-card ${activeView === "map" ? "opacity-100 z-10" : "opacity-0 pointer-events-none -z-10"}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.4795329712763!2d88.44781427602324!3d22.622877930777598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f4bdedfa65f%3A0xf0375f50235da719!2sRua%20Thai%20Spa!5e0!3m2!1sen!2sin!4v1717961234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RUA Thai Spa Map Location"
                className="w-full h-full"
              />
            </div>
          </FadeIn>

          {/* Right Side: Coordinates and Call buttons */}
          <StaggerContainer
            staggerChildren={0.15}
            delayChildren={0.2}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            <StaggerItem direction="left">
              <h3 className="text-3xl font-serif font-normal mb-4 text-foreground leading-snug">
                Begin Your Path to Rest
              </h3>
              <p className="text-muted-foreground text-sm font-light leading-loose mb-6">
                Skip the complicated forms. You can book or inquire directly
                with our reservations team. Let us coordinate your ideal
                treatment times and therapy preferences.
              </p>
            </StaggerItem>

            {/* Coordinates Details Block */}
            <div className="flex flex-col gap-4">
              <StaggerItem direction="left" className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                    Sanctuary Address
                  </span>
                  <span className="text-foreground text-sm leading-relaxed font-light block">
                    RUA Thai Spa, Kolkata
                  </span>
                  <span className="text-muted-foreground text-xs font-light block mb-2">
                    Shop No. B216, 2nd Floor, City Centre 2, Kolkata - 700157
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setActiveView("map");
                        setHasToggled(true);
                      }}
                      className="text-[11px] text-primary hover:text-primary/80 transition-colors uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer bg-transparent border-0 p-0"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Show on Map
                    </button>
                    <span className="text-border/40 text-xs">|</span>
                    <a
                      href="https://maps.app.goo.gl/8sbdzuc8bSzFCSb5A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider font-semibold flex items-center gap-1.5"
                    >
                      Get Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem direction="left" className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5 shrink-0 mt-1">
                  <Clock className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                    Operational Hours
                  </span>
                  <span className="text-foreground text-sm font-light block">
                    Monday – Sunday: 10:00 AM – 9:00 PM
                  </span>
                  <span className="text-muted-foreground text-xs font-light block">
                    Including National & Public Holidays
                  </span>
                </div>
              </StaggerItem>
            </div>

            {/* Contact Action Buttons */}
            <StaggerItem direction="left" className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-border/10">
              <a
                href="https://wa.me/917449962261?text=Hi%20RUA%20Thai%20Spa!%20I'd%20like%20to%20inquire%20about%20booking%20a%20relaxation%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-4 px-6 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:translate-y-[-2px] shadow-lg shadow-primary/10 hover:shadow-primary/20 cursor-pointer text-center"
              >
                <Whatsapp size={20} className="w-5 h-5 shrink-0" />
                <span>Chat WhatsApp</span>
              </a>

              <a
                href="tel:+917449962261"
                className="w-full sm:w-1/2 py-4 px-6 bg-card/80 dark:bg-card/45 text-foreground border border-border/20 hover:border-primary/30 font-semibold uppercase tracking-widest text-xs rounded-full flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Phone className="w-5 h-5 shrink-0 text-primary" />
                <span>Call +91 74499 62261</span>
              </a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
