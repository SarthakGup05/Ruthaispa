import React from "react";

/**
 * Animated incense smoke wisps rising gently.
 * A vertical decorative element that brings organic life to empty margins.
 */
export default function IncenseSmoke({ className = "", height = 300 }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: 60, height }}
    >
      <svg
        viewBox="0 0 60 300"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="smoke-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.2" />
            <stop offset="40%" stopColor="var(--color-primary)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary wisp */}
        <path
          d="M30 290 C30 260, 20 240, 25 210 C30 180, 38 160, 32 130 C26 100, 35 80, 30 50 C25 20, 28 10, 30 0"
          stroke="url(#smoke-grad)"
          strokeWidth="1.5"
          className="animate-smoke-rise"
        />
        {/* Secondary wisp — slightly offset */}
        <path
          d="M28 290 C33 255, 22 235, 28 200 C34 165, 20 145, 28 115 C36 85, 25 60, 30 30"
          stroke="var(--color-primary)"
          strokeWidth="0.8"
          strokeOpacity="0.08"
          className="animate-smoke-rise-slow"
        />

        {/* Incense stick tip */}
        <line x1="30" y1="290" x2="30" y2="300" stroke="var(--color-primary)" strokeWidth="1.5" strokeOpacity="0.3" />
        {/* Ember glow */}
        <circle cx="30" cy="290" r="2" fill="var(--color-primary)" fillOpacity="0.35" className="animate-pulse" />
      </svg>

      <style>{`
        @media (min-width: 768px) {
          @keyframes smoke-rise {
            0%   { stroke-dashoffset: 0; opacity: 0.6; }
            100% { stroke-dashoffset: -120; opacity: 0.3; }
          }
          @keyframes smoke-rise-slow {
            0%   { stroke-dashoffset: 0; opacity: 0.4; }
            100% { stroke-dashoffset: -80; opacity: 0.15; }
          }
          .animate-smoke-rise {
            stroke-dasharray: 30 20;
            animation: smoke-rise 10s linear infinite;
          }
          .animate-smoke-rise-slow {
            stroke-dasharray: 20 30;
            animation: smoke-rise-slow 14s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
