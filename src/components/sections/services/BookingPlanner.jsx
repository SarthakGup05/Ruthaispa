import React, { useState, useEffect } from "react";
import { Phone, Clock, Sparkles } from 'lucide-react';
import { Whatsapp } from '../../icons/whatsapp';
import PetalDivider from "../../ui/PetalDivider";
import { FadeIn, ScaleIn } from "../../ui/motion";

export default function BookingPlanner({
  selectedService,
  setSelectedService,
}) {
  const services = [
    { id: "swedish", name: "Swedish Massage", timeOptions: [60, 90, 120] },
    {
      id: "deep-tissue",
      name: "Deep Tissue Massage",
      timeOptions: [60, 90, 120],
    },
    { id: "aroma", name: "Aromatherapy Massage", timeOptions: [60, 90, 120] },
    { id: "balinese", name: "Balinese Massage", timeOptions: [60, 90, 120] },
    {
      id: "thai",
      name: "Traditional Thai Massage",
      timeOptions: [60, 90, 120],
    },
    { id: "head-neck-shoulder", name: "Head Neck Shoulder", timeOptions: [30] },
    { id: "hot-compress", name: "Hot Compress Massage", timeOptions: [60, 90] },
    { id: "hot-stone", name: "Hot Stone Therapy", timeOptions: [60, 90] },
    {
      id: "two-therapists",
      name: "Signature Therapy By Two",
      timeOptions: [60, 90],
    },
    { id: "body-polishing", name: "Body Polishing Massage", timeOptions: [90] },
  ];

  const serviceImages = {
    swedish: "/swedish_massage.webp",
    "deep-tissue": "/deep_tissue.webp",
    aroma: "/aroma_therapy.webp",
    balinese: "/balinese_massage.webp",
    thai: "/thai_massage.webp",
    "hot-compress": "/herbal_poultice.webp",
    "hot-stone": "/hot_stone.webp",
    "two-therapists": "/siam_suite.webp",
    "body-polishing": "/steam_chamber.webp",
    "head-neck-shoulder": "/tea_lounge.webp",
  };

  const currentBgImage = serviceImages[selectedService] || "/spa_interior.webp";

  const [prevBg, setPrevBg] = useState(currentBgImage);
  const [activeBg, setActiveBg] = useState(currentBgImage);
  const [fadeState, setFadeState] = useState(true);

  const currentService =
    services.find((s) => s.id === selectedService) || services[0];
  const [duration, setDuration] = useState(currentService.timeOptions[0]);
  const [pressure, setPressure] = useState("medium");
  const [focusArea, setFocusArea] = useState("full-body");

  // Sync duration when selectedService changes
  useEffect(() => {
    if (!currentService.timeOptions.includes(duration)) {
      setDuration(currentService.timeOptions[0]);
    }
  }, [selectedService]);

  // Handle background crossfade
  useEffect(() => {
    if (currentBgImage !== activeBg) {
      setPrevBg(activeBg);
      setActiveBg(currentBgImage);
      setFadeState(false);
      const timer = setTimeout(() => {
        setFadeState(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentBgImage, activeBg]);

  const generateWhatsAppLink = () => {
    const text = `Hi RUA Thai Spa! I would like to book a session:
- Treatment: ${currentService.name}
- Duration: ${duration} minutes
- Preferred Pressure: ${pressure.toUpperCase()}
- Focus Area: ${focusArea.replace("-", " ").toUpperCase()}

Please check availability for me!`;

    return `https://wa.me/917449962261?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="pricing-planner"
      className="relative py-12 md:py-16 px-6 bg-background/50 border-t border-border/10 transition-colors duration-500 z-0 overflow-hidden"
    >
      {/* Base background layer (previous image) */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[8px] opacity-[0.06] dark:opacity-[0.12] pointer-events-none -z-35"
        style={{
          backgroundImage: `url(${prevBg})`,
        }}
      />
      
      {/* Transitioning background layer (current image) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center scale-105 blur-[8px] pointer-events-none -z-30 transition-opacity duration-1000 ease-in-out ${
          fadeState ? "opacity-[0.06] dark:opacity-[0.12]" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${activeBg})`,
        }}
      />
      
      {/* Dark overlay gradients for text readability and luxury blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none -z-10" />

      {/* Soft atmospheric gold/teal background glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[50%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] bg-primary/5 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn direction="up" className="text-center mb-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
            Interactive Booking
          </span>
          <h2 className="text-3xl md:text-5xl mt-2 font-normal font-serif">
            Treatment Planner
          </h2>
          <PetalDivider />
          <p className="text-muted-foreground text-sm mt-4 max-w-md mx-auto font-light leading-relaxed">
            Configure your custom therapy ritual, select duration and pressure
            preferences, and easily book your slot.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-background/90 dark:bg-background/70 border border-border/20 rounded-3xl p-5 md:p-8 backdrop-blur-xl shadow-2xl relative">
          {/* Left panel: Booking configuration options */}
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-5">
            {/* Step 1: Select Massage */}
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold block text-primary mb-4">
                1. Select Massage or Therapy
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(s.id);
                      setDuration(s.timeOptions[0]);
                    }}
                    className={`p-4 rounded-2xl text-left border text-sm transition-all duration-300 flex items-center justify-between cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 ${
                      selectedService === s.id
                        ? "border-primary bg-primary/10 text-foreground font-semibold shadow-lg shadow-primary/5"
                        : "border-border/30 dark:border-border/15 bg-secondary/35 dark:bg-card/25 hover:bg-secondary/55 dark:hover:bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="font-medium tracking-wide">{s.name}</span>
                    {selectedService === s.id && (
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Duration */}
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold block text-primary mb-4">
                2. Choose Duration
              </label>
              <div className="flex flex-wrap gap-3">
                {currentService.timeOptions.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setDuration(time)}
                    className={`flex-1 min-w-[90px] py-3.5 px-6 rounded-2xl border text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
                      duration === time
                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "border-border/30 dark:border-border/15 bg-secondary/35 dark:bg-card/25 hover:bg-secondary/55 dark:hover:bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {time} Mins
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Pressure preference */}
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold block text-primary mb-4">
                3. Choose Pressure Preference
              </label>
              <div className="flex gap-3">
                {["light", "medium", "deep"].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setPressure(lvl)}
                    className={`flex-1 py-3 px-4 rounded-xl border text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-sm ${
                      pressure === lvl
                        ? "border-primary bg-primary/10 text-foreground font-semibold shadow-md shadow-primary/5"
                        : "border-border/30 dark:border-border/15 bg-secondary/35 dark:bg-card/25 hover:bg-secondary/55 dark:hover:bg-card/50 text-muted-foreground"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Focus Area */}
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold block text-primary mb-4">
                4. Select Target Focus Area
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "full-body", name: "Full Body" },
                  { id: "back-shoulders", name: "Back & Shoulders" },
                  { id: "lower-body", name: "Lower Body / Legs" },
                  { id: "neck-head", name: "Neck & Head" },
                ].map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setFocusArea(area.id)}
                    className={`py-3.5 px-4 rounded-xl border text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-sm ${
                      focusArea === area.id
                        ? "border-primary bg-primary/10 text-foreground font-semibold shadow-md shadow-primary/5"
                        : "border-border/30 dark:border-border/15 bg-secondary/35 dark:bg-card/25 hover:bg-secondary/55 dark:hover:bg-card/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right panel: Live Summary & Direct Booking Buttons */}
          <FadeIn direction="left" className="lg:col-span-5 flex flex-col justify-between bg-background/95 dark:bg-background/80 border border-primary/15 hover:border-primary/30 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl transition-all duration-500">
            {/* Card Background Image Watermark - Base Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.03] dark:opacity-[0.06] pointer-events-none -z-25"
              style={{
                backgroundImage: `url(${prevBg})`,
              }}
            />
            {/* Card Background Image Watermark - Active Transition Layer */}
            <div 
              className={`absolute inset-0 bg-cover bg-center pointer-events-none -z-20 transition-opacity duration-1000 ease-in-out ${
                fadeState ? "opacity-[0.03] dark:opacity-[0.06]" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${activeBg})`,
              }}
            />
            
            {/* Soft gold border glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 pointer-events-none -z-10" />
            
            <div className="flex flex-col justify-between h-full gap-5 relative z-10">
              <div>
                {/* Elegant Luxury Spa Ornament */}
                <div className="flex justify-center mb-6 opacity-80">
                  <svg className="w-16 h-8 text-primary" viewBox="0 0 100 50" fill="none" stroke="currentColor">
                    <path d="M50 5 C43 22, 15 28, 50 45 C85 28, 57 22, 50 5" strokeWidth="1" />
                    <path d="M50 15 C45 25, 25 30, 50 40 C75 30, 55 25, 50 15" strokeWidth="0.8" opacity="0.6" />
                    <circle cx="50" cy="27" r="1.5" fill="currentColor" />
                  </svg>
                </div>

                <h3 className="text-xl font-serif text-center tracking-wider text-foreground flex items-center justify-center gap-2 mb-6">
               
                  <span>Session Summary</span>
                </h3>

                <div className="flex flex-col gap-4 text-[13px] border border-border/25 dark:border-border/20 p-5 rounded-2xl bg-card/85 dark:bg-card/40 shadow-inner">
                  <div className="flex justify-between items-start pb-3 border-b border-border/10">
                    <span className="text-muted-foreground font-medium">
                      Selected Therapy:
                    </span>
                    <span className="font-semibold text-foreground text-right max-w-[180px] leading-tight">
                      {currentService.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/10">
                    <span className="text-muted-foreground font-light">
                      Duration:
                    </span>
                    <span className="font-semibold text-foreground">
                      {duration} minutes
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-border/10">
                    <span className="text-muted-foreground font-light">
                      Pressure Level:
                    </span>
                    <span className="font-bold text-primary uppercase tracking-widest text-xs">
                      {pressure}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-light">
                      Focus Target:
                    </span>
                    <span className="font-semibold text-foreground uppercase tracking-wider text-xs">
                      {focusArea.replace("-", " ")}
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-2xl text-xs flex flex-col gap-2.5 shadow-sm">
                  <span className="font-bold block uppercase tracking-widest text-[9px] text-primary">
                    Reservations Guide
                  </span>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Review your session parameters. You can connect via WhatsApp
                    to instantly send this itinerary, or call to secure your
                    therapist slot.
                  </p>
                </div>
              </div>

              {/* Instant Call and WhatsApp buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs rounded-full shadow-lg shadow-primary/15 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-center"
                >
                  <Whatsapp size={20} className="w-5 h-5 shrink-0" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href="tel:+917449962261"
                  className="w-full py-4 bg-card/90 dark:bg-card/75 text-foreground border border-border/20 hover:border-primary/45 font-bold uppercase tracking-widest text-xs rounded-full hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer text-center shadow-sm"
                >
                  <Phone className="w-5 h-5 shrink-0 text-primary" />
                  <span>Call to Reserve</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Custom Styles for scrollbar inside category select */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: oklch(0.85 0.07 85 / 20%);
          border-radius: 99px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: oklch(0.85 0.07 85 / 45%);
        }
      `}</style>
    </section>
  );
}
