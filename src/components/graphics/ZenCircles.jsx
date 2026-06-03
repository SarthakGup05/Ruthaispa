import React from "react";

/**
 * Animated concentric rings that slowly rotate and breathe.
 * Place behind section headers or alongside imagery for depth.
 */
export default function ZenCircles({ className = "", size = 280 }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="zen-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="zen-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer ring — slow clockwise */}
        <circle
          cx="100" cy="100" r="90"
          stroke="url(#zen-grad-1)"
          strokeWidth="0.6"
          className="animate-zen-spin"
        />
        {/* Middle ring — slower counter-clockwise */}
        <circle
          cx="100" cy="100" r="65"
          stroke="url(#zen-grad-2)"
          strokeWidth="0.5"
          strokeDasharray="8 12"
          className="animate-zen-spin-reverse"
        />
        {/* Inner ring — breathing */}
        <circle
          cx="100" cy="100" r="38"
          stroke="var(--color-primary)"
          strokeWidth="0.4"
          strokeOpacity="0.2"
          className="animate-zen-breathe"
        />
        {/* Center dot */}
        <circle
          cx="100" cy="100" r="3"
          fill="var(--color-primary)"
          fillOpacity="0.15"
          className="animate-pulse"
        />
      </svg>

      <style>{`
        @keyframes zen-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes zen-spin-reverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes zen-breathe {
          0%, 100% { r: 38; stroke-opacity: 0.2; }
          50%      { r: 42; stroke-opacity: 0.35; }
        }
        .animate-zen-spin {
          animation: zen-spin 45s linear infinite;
          transform-origin: center;
        }
        .animate-zen-spin-reverse {
          animation: zen-spin-reverse 60s linear infinite;
          transform-origin: center;
        }
        .animate-zen-breathe {
          animation: zen-breathe 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
