import React from "react";

/**
 * A mandala-inspired radial pattern that slowly rotates.
 * Perfect as a large background watermark behind key content sections.
 */
export default function MandalaWatermark({ className = "", size = 500 }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="w-full h-full animate-mandala-rotate"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="mandala-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.08" />
            <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow disc */}
        <circle cx="200" cy="200" r="180" fill="url(#mandala-fade)" />

        {/* Generate 12 petal arcs */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <g key={i} transform={`rotate(${angle} 200 200)`}>
              {/* Outer petal arc */}
              <path
                d="M200 50 C215 100, 230 140, 200 200 C170 140, 185 100, 200 50 Z"
                stroke="var(--color-primary)"
                strokeWidth="0.5"
                strokeOpacity="0.15"
                fill="var(--color-primary)"
                fillOpacity="0.01"
              />
              {/* Inner accent line */}
              <line
                x1="200" y1="80"
                x2="200" y2="160"
                stroke="var(--color-primary)"
                strokeWidth="0.3"
                strokeOpacity="0.1"
              />
            </g>
          );
        })}

        {/* Concentric guide rings */}
        <circle cx="200" cy="200" r="150" stroke="var(--color-primary)" strokeWidth="0.3" strokeOpacity="0.08" />
        <circle cx="200" cy="200" r="100" stroke="var(--color-primary)" strokeWidth="0.3" strokeOpacity="0.06" />
        <circle cx="200" cy="200" r="50" stroke="var(--color-primary)" strokeWidth="0.4" strokeOpacity="0.1" />

        {/* Centre ornament */}
        <circle cx="200" cy="200" r="8" fill="var(--color-primary)" fillOpacity="0.06" />
        <circle cx="200" cy="200" r="3" fill="var(--color-primary)" fillOpacity="0.12" />
      </svg>

      <style>{`
        @media (min-width: 768px) {
          @keyframes mandala-rotate {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
          .animate-mandala-rotate {
            animation: mandala-rotate 120s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
