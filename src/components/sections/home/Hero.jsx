import React, { useState, useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Whatsapp } from "../../icons/whatsapp";

// Example Data Structure
const SLIDES = [
  {
    id: 1,
    videoSrc: "/massage.webm",
    title: "Deep Restoration",
    subtitle: "Ancient therapies for modern living",
  },
];

export default function VideoSlider({ slides = SLIDES }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  // Auto-progress slide every 8 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle Video Play/Pause synchronization
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentIndex) {
        // Enforce muted and playsInline programmatically to guarantee mobile browser compatibility
        video.defaultMuted = true;
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        
        video.play().catch(() => {
          // Silent catch for browser autoplay restrictions
        });
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  // Interaction fallback to start playback on iOS Safari / Low Power Mode
  useEffect(() => {
    const handleInteraction = () => {
      videoRefs.current.forEach((video, index) => {
        if (video && index === currentIndex && video.paused) {
          video.defaultMuted = true;
          video.muted = true;
          video.playsInline = true;
          video.setAttribute("muted", "");
          video.setAttribute("playsinline", "");
          
          video.play().catch(() => {
            // Silent catch
          });
        }
      });
      // Cleanup listener after first interaction
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [currentIndex]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-transparent flex items-center justify-center group"
      aria-label="Video Showcase"
    >
      {/* Video Layers / Static Background */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Black overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

          <video
            ref={(el) => {
              videoRefs.current[index] = el;
              if (el) {
                el.defaultMuted = true;
                el.muted = true;
              }
            }}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
            muted
            defaultMuted
            loop
            autoPlay
            preload="metadata"
            poster="/spa_interior.webp"
          >
            {/* Prioritize WebM format for modern browsers */}
            <source src={slide.videoSrc} type="video/webm" />
            <source src={slide.videoSrc.replace(".webm", ".mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Text Content & Action Buttons */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
            {index === currentIndex && (
              <div className="flex flex-col items-center justify-center text-center max-w-4xl">
                <h2 className="text-4xl md:text-7xl font-light tracking-[0.15em] text-white uppercase mb-4 animate-title-reveal">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg font-serif tracking-[0.2em] text-[#E6D2A7] uppercase mb-8 animate-subtitle-reveal">
                  {slide.subtitle}
                </p>

                {/* Call and WhatsApp Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-buttons-reveal">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-[#E6D2A7] text-[#0b5a60] hover:bg-[#E6D2A7]/95 hover:scale-105 active:scale-[0.98] hover:shadow-[0_10px_25px_rgba(230,210,167,0.35)] uppercase font-bold tracking-widest text-xs rounded-full px-6 py-5 cursor-pointer shadow-lg shadow-black/25 transition-all duration-300 ease-out"
                  >
                    <a href="tel:+917449962261">
                      <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                      Call Now
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="group border-white/30 text-white bg-black/25 hover:bg-white hover:text-[#0b5a60] hover:border-white hover:scale-105 active:scale-[0.98] hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] uppercase font-bold tracking-widest text-xs rounded-full px-6 py-5 cursor-pointer shadow-lg shadow-black/25 transition-all duration-300 ease-out"
                  >
                    <a
                      href="https://wa.me/917449962261?text=Hi%20RUA%20Thai%20Spa!%20I'd%20like%20to%20inquire%20about%20booking%20a%20relaxation%20session."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Whatsapp size={20} className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* CSS-based reveal transitions for mount */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-title-reveal {
          animation: fadeInUp 0.9s cubic-bezier(0.21, 1.02, 0.43, 1.01) forwards;
          will-change: transform, opacity;
        }
        .animate-subtitle-reveal {
          animation: fadeInUp 0.9s cubic-bezier(0.21, 1.02, 0.43, 1.01) 0.15s forwards;
          opacity: 0;
          will-change: transform, opacity;
        }
        .animate-buttons-reveal {
          animation: fadeInUp 0.9s cubic-bezier(0.21, 1.02, 0.43, 1.01) 0.3s forwards;
          opacity: 0;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}


