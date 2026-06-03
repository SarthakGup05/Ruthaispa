import React from "react";

/**
 * Floating lotus line-art that drifts gently.
 * A Thai-inspired decorative motif for section backgrounds.
 */
export default function FloatingLotus({ className = "", size = 120 }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full animate-lotus-drift drop-shadow-[0_0_8px_rgba(230,210,167,0.1)]"
        aria-hidden="true"
      >
        {/* Central petal */}
        <path
          d="M50 18 C46 35 42 55 50 82 C58 55 54 35 50 18 Z"
          fill="var(--color-primary)"
          fillOpacity="0.04"
          className="animate-petal-glow"
        />
        {/* Left inner petal */}
        <path d="M50 30 C35 42 32 62 50 82" strokeOpacity="0.5" />
        {/* Right inner petal */}
        <path d="M50 30 C65 42 68 62 50 82" strokeOpacity="0.5" />
        {/* Left outer petal */}
        <path d="M50 45 C22 50 20 72 50 82" strokeOpacity="0.3" fill="var(--color-primary)" fillOpacity="0.015" />
        {/* Right outer petal */}
        <path d="M50 45 C78 50 80 72 50 82" strokeOpacity="0.3" fill="var(--color-primary)" fillOpacity="0.015" />
        {/* Stem vein */}
        <path d="M50 18 C49 40 49 62 50 82" strokeWidth="0.4" strokeOpacity="0.35" />
        {/* Crown bud */}
        <circle cx="50" cy="16" r="1.8" fill="var(--color-primary)" fillOpacity="0.2" />
        {/* Water ripples */}
        <path d="M30 88 C38 91 62 91 70 88" strokeOpacity="0.4" strokeWidth="0.6" />
        <path d="M22 93 C34 96 66 96 78 93" strokeOpacity="0.25" strokeWidth="0.5" />
      </svg>

      <style>{`
        @keyframes lotus-drift {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          33%      { transform: translateY(-8px) rotate(1deg); }
          66%      { transform: translateY(4px) rotate(-1deg); }
        }
        @keyframes petal-glow {
          0%, 100% { fill-opacity: 0.04; }
          50%      { fill-opacity: 0.12; }
        }
        .animate-lotus-drift {
          animation: lotus-drift 12s ease-in-out infinite;
        }
        .animate-petal-glow {
          animation: petal-glow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
