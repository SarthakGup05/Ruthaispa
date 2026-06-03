import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { InstagramIcon } from "../icons/lucide-instagram";
import { Whatsapp } from "../icons/whatsapp";

export default function FloatingActions({ loading }) {
  const whatsappLink = "https://wa.me/917449962261?text=Hi%20RUA%20Thai%20Spa!%20I'd%20like%20to%20inquire%20about%20booking%20a%20relaxation%20session.";
  const phoneLink = "tel:+917449962261";
  const instagramLink = "https://instagram.com/ruathaispa";

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (loading === undefined) {
      // Fallback if loading prop is not passed directly (e.g. initial mount checks)
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 3500);
      const retractTimer = setTimeout(() => {
        setShowPopup(false);
      }, 10500);
      return () => {
        clearTimeout(timer);
        clearTimeout(retractTimer);
      };
    } else if (!loading) {
      // Wait for the page preloader to finish fading out, then slide in the popup
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 800);
      const retractTimer = setTimeout(() => {
        setShowPopup(false);
      }, 7800); // Popup stays for 7 seconds to grab attention, then retracts smoothly
      return () => {
        clearTimeout(timer);
        clearTimeout(retractTimer);
      };
    }
  }, [loading]);

  const closePopup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <>
      {/* ================= DESKTOP FLOATING BAR (RIGHT SIDE) ================= */}
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        <div className="bg-background/80 dark:bg-background/40 border border-border/15 p-2.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-md flex flex-col gap-3 relative">
          
          {/* Subtle Golden Glow behind the bar */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[8px] pointer-events-none -z-10" />

          {/* Call Button */}
          <a
            href={phoneLink}
            aria-label="Call RUA Thai Spa"
            className="w-11 h-11 rounded-full border border-border/25 bg-card/65 hover:bg-primary/5 text-foreground hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm group relative"
          >
            <Phone size={18} strokeWidth={1.8} />
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-background/95 dark:bg-card/95 border border-border/25 text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shadow-md backdrop-blur-sm whitespace-nowrap">
              Call to Reserve
            </span>
          </a>

          {/* WhatsApp Button container to anchor popup and tooltip */}
          <div className="relative">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat via WhatsApp"
              className={`w-11 h-11 rounded-full border bg-card/65 text-foreground flex items-center justify-center transition-all duration-300 shadow-sm group relative ${
                showPopup 
                  ? "border-primary text-primary scale-110 shadow-[0_0_15px_rgba(230,210,167,0.3)] animate-pulse-gentle" 
                  : "border-border/25 hover:bg-primary/5 hover:text-primary hover:border-primary/40 hover:scale-105"
              }`}
            >
              <Whatsapp size={18} />
              
              {/* Tooltip */}
              {!showPopup && (
                <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-background/95 dark:bg-card/95 border border-border/25 text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shadow-md backdrop-blur-sm whitespace-nowrap">
                  Chat on WhatsApp
                </span>
              )}
            </a>

            {/* Desktop Pop-Up Card */}
            <div
              className={`absolute right-14 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out z-50 ${
                showPopup 
                  ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" 
                  : "opacity-0 translate-x-4 scale-90 pointer-events-none"
              }`}
            >
              <div className="bg-background/95 dark:bg-card/95 border border-primary/30 p-3 rounded-2xl shadow-[0_15px_35px_rgba(230,210,167,0.15)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-3 relative min-w-[245px] hover:border-primary/50 transition-colors">
                
                {/* Arrow pointer */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-background dark:bg-card border-t border-r border-primary/30 rotate-45" />

                {/* Avatar with WhatsApp icon & pulsing online dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    <Whatsapp size={18} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-background dark:border-card rounded-full animate-ping-slow" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-background dark:border-card rounded-full" />
                </div>

                {/* Text content */}
                <div className="flex flex-col text-left pr-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-primary">
                      RUA Spa
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-muted-foreground uppercase font-semibold">Online</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground tracking-wide mt-0.5">
                    Chat with us for booking!
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-2.5 right-2.5 text-foreground/35 hover:text-foreground/85 transition-colors p-0.5 rounded-full hover:bg-foreground/5 cursor-pointer"
                  aria-label="Dismiss chat prompt"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Instagram Button */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="w-11 h-11 rounded-full border border-border/25 bg-card/65 hover:bg-primary/5 text-foreground hover:text-primary hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-sm group relative"
          >
            <InstagramIcon size={18} />
            {/* Tooltip */}
            <span className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-background/95 dark:bg-card/95 border border-border/25 text-[10px] uppercase tracking-[0.15em] font-semibold text-foreground opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 shadow-md backdrop-blur-sm whitespace-nowrap">
              Follow Instagram
            </span>
          </a>
        </div>
      </div>

      {/* ================= MOBILE FLOATING BOTTOM DOCK ================= */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-[340px] px-1 animate-slide-up">
        <div className="bg-background/90 dark:bg-background/85 border border-border/25 p-2 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.18)] backdrop-blur-lg flex gap-2.5 relative items-center justify-between">
          
          {/* Subtle Golden Glow */}
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[8px] pointer-events-none -z-10" />

          {/* Call Actions */}
          <a
            href={phoneLink}
            className="flex-1 py-3 px-4 rounded-full bg-card/45 dark:bg-card/20 hover:bg-card/85 text-foreground border border-border/15 flex items-center justify-center gap-2 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest active:scale-[0.98]"
          >
            <Phone size={13} className="text-primary animate-pulse" />
            <span>Call Spa</span>
          </a>

          {/* WhatsApp Actions */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest active:scale-[0.98] shadow-md ${
              showPopup
                ? "bg-primary text-primary-foreground shadow-primary/25 scale-[1.03] ring-2 ring-primary/40"
                : "bg-primary text-primary-foreground shadow-primary/10 hover:shadow-primary/25"
            }`}
          >
            <Whatsapp size={13} />
            <span>Book WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Mobile Pop-Up Bubble */}
      <div
        className={`md:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out ${
          showPopup
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 dark:bg-card/95 border border-primary/30 py-2 px-3 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.4)] backdrop-blur-md flex items-center gap-2 relative max-w-[290px] whitespace-nowrap">
          {/* Arrow pointing down to WhatsApp button */}
          <div className="absolute bottom-[-5px] left-[72%] -translate-x-1/2 w-2.5 h-2.5 bg-background dark:bg-card border-b border-r border-primary/30 rotate-45" />
          
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            We are Online!
          </span>
          <span className="text-[10px] text-foreground font-medium">
            Tap to book instantly
          </span>
          
          {/* Close button */}
          <button
            onClick={closePopup}
            className="text-foreground/40 hover:text-foreground/80 transition-colors p-0.5 ml-1 rounded-full hover:bg-foreground/5 cursor-pointer"
            aria-label="Dismiss notification"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        @keyframes slide-up {
          0% { transform: translate(-50%, 20px); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1.1); box-shadow: 0 0 15px rgba(230,210,167,0.3); }
          50% { transform: scale(1.15); box-shadow: 0 0 22px rgba(230,210,167,0.5); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
}
