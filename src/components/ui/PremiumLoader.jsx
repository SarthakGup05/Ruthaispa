import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function PremiumLoader({
  fullScreen = true,
  text,
  onComplete,
  duration = 2500, // Duration in ms before it auto-fades out if onComplete is used
}) {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const loadingMessages = [
    "Entering the sanctuary...",
    "Aligning the senses...",
    "Calming the mind...",
    "Preparing organic Siamese oils...",
    "Harmonizing body and breath...",
  ];

  // Rotate messages
  useEffect(() => {
    if (!fullScreen) return;
    const interval = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [fullScreen]);

  // Handle auto-completion if used as a preloader
  useEffect(() => {
    if (!onComplete) return;
    let unmountTimer;
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for the opacity fade transition to finish (700ms) before unmounting
      unmountTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 700);
    }, duration);
    return () => {
      clearTimeout(fadeTimer);
      if (unmountTimer) clearTimeout(unmountTimer);
    };
  }, [onComplete, duration]);

  if (!isVisible) return null;

  if (fullScreen) {
    return (
      <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}>
        {/* Soft Background Radial Light Leak */}
        <div className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
        
        <div className="flex flex-col items-center max-w-sm text-center px-6 relative">
          {/* Concentric Water Ripples */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 scale-75">
            <div className="absolute w-44 h-44 rounded-full border border-primary/20 animate-ripple-1" />
            <div className="absolute w-44 h-44 rounded-full border border-primary/15 animate-ripple-2" />
            <div className="absolute w-44 h-44 rounded-full border border-primary/10 animate-ripple-3" />
          </div>

          {/* Golden Blooming Lotus SVG */}
          <div className="relative mb-8 text-primary group">
            <svg
              className="w-24 h-24 animate-lotus-bloom drop-shadow-[0_0_15px_rgba(230,210,167,0.25)]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Central Petal */}
              <path 
                d="M50 20 C45 35 40 55 50 80 C60 55 55 35 50 20 Z" 
                className="animate-petal-pulse"
                fill="currentColor"
                fillOpacity="0.05"
              />
              {/* Inner Petal Lines */}
              <path d="M50 20 C48 38 48 62 50 80" strokeWidth="0.6" opacity="0.5" />
              
              {/* Left Petal 1 */}
              <path d="M50 32 C30 42 30 65 50 80" fill="currentColor" fillOpacity="0.02" />
              {/* Right Petal 1 */}
              <path d="M50 32 C70 42 70 65 50 80" fill="currentColor" fillOpacity="0.02" />
              
              {/* Left Petal 2 */}
              <path d="M50 48 C16 52 18 75 50 80" fill="currentColor" fillOpacity="0.01" />
              {/* Right Petal 2 */}
              <path d="M50 48 C84 52 82 75 50 80" fill="currentColor" fillOpacity="0.01" />
              
              {/* Floating Lotus Bud details */}
              <circle cx="50" cy="18" r="1.5" fill="currentColor" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="50" cy="18" r="1.2" fill="currentColor" />

              {/* Water Base Waves */}
              <path d="M25 85 C35 88 65 88 75 85" strokeWidth="0.8" opacity="0.6" />
              <path d="M15 90 C30 94 70 94 85 90" strokeWidth="0.6" opacity="0.4" />
            </svg>

            {/* Sparkle icon overlapping lotus */}
            <div className="absolute top-[-5px] right-[-5px] text-primary/70 animate-bounce" style={{ animationDuration: '3s' }}>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="font-serif text-3xl tracking-[0.25em] text-foreground uppercase mb-3 animate-fade-in font-normal">
            RUA Thai Spa
          </h1>
          
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-5" />

          {/* Changing Zen Messages */}
          <div className="h-6 overflow-hidden relative w-full">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80 font-medium animate-message-shift">
              {text || loadingMessages[activeMessageIndex]}
            </p>
          </div>
        </div>

        {/* Custom CSS for loaders */}
        <style>{`
          @keyframes lotus-bloom {
            0% { transform: scale(0.9) rotate(-3deg); }
            50% { transform: scale(1.03) rotate(3deg); }
            100% { transform: scale(0.9) rotate(-3deg); }
          }
          @keyframes petal-pulse {
            0%, 100% { fill-opacity: 0.05; }
            50% { fill-opacity: 0.15; }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; transform: scale(0.95); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          @keyframes ripple-expand {
            0% { transform: scale(0.5); opacity: 0; }
            10% { opacity: 0.6; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          .animate-lotus-bloom {
            animation: lotus-bloom 6s ease-in-out infinite;
          }
          .animate-petal-pulse {
            animation: petal-pulse 3s ease-in-out infinite;
          }
          .animate-pulse-glow {
            animation: pulse-glow 5s ease-in-out infinite;
          }
          .animate-ripple-1 {
            animation: ripple-expand 4s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
          }
          .animate-ripple-2 {
            animation: ripple-expand 4s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
            animation-delay: 1.3s;
          }
          .animate-ripple-3 {
            animation: ripple-expand 4s cubic-bezier(0.1, 0.8, 0.3, 1) infinite;
            animation-delay: 2.6s;
          }
          .animate-message-shift {
            animation: message-fade 1.8s ease-in-out infinite;
          }
          @keyframes message-fade {
            0%, 100% { opacity: 0; transform: translateY(5px); }
            15%, 85% { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  // Inline loader for normal components
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="relative text-primary flex items-center justify-center mb-3">
        {/* Spinner ripple rings */}
        <div className="absolute w-12 h-12 rounded-full border border-primary/20 animate-ping opacity-60" style={{ animationDuration: '2.5s' }} />
        <div className="absolute w-12 h-12 rounded-full border border-primary/10 animate-ping opacity-30" style={{ animationDuration: '2.5s', animationDelay: '1.2s' }} />
        
        {/* Center Golden Lotus icon */}
        <svg
          className="w-10 h-10 animate-spin-slow text-primary drop-shadow-[0_0_4px_rgba(230,210,167,0.2)]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M50 15 C45 35 40 55 50 85 C60 55 55 35 50 15 Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M50 30 C30 40 30 65 50 85" />
          <path d="M50 30 C70 40 70 65 50 85" />
          <path d="M25 85 C35 88 65 88 75 85" />
        </svg>
      </div>
      {text !== false && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mt-2 animate-pulse">
          {text || "Relaxing..."}
        </span>
      )}

      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
