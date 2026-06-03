import React from "react";

/**
 * Flowing curved Sen lines inspired by Thai energy meridians.
 * A full-width horizontal decorative separator between sections.
 */
export default function SenLines({ className = "" }) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
      >
        <defs>
          <linearGradient id="sen-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
            <stop offset="20%" stopColor="var(--color-primary)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.35" />
            <stop offset="80%" stopColor="var(--color-primary)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="sen-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0" />
            <stop offset="30%" stopColor="var(--color-primary)" stopOpacity="0.12" />
            <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.22" />
            <stop offset="70%" stopColor="var(--color-primary)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary flowing line */}
        <path
          d="M0 80 C200 30, 400 100, 600 60 C800 20, 1000 90, 1200 50"
          stroke="url(#sen-grad)"
          strokeWidth="1.2"
          className="animate-sen-flow"
        />
        {/* Secondary flowing line — slightly offset */}
        <path
          d="M0 65 C180 95, 380 25, 600 70 C820 115, 980 35, 1200 75"
          stroke="url(#sen-grad-2)"
          strokeWidth="0.8"
          className="animate-sen-flow-delayed"
        />
        {/* Tertiary thin accent */}
        <path
          d="M0 90 C300 55, 600 95, 900 45 C1050 25, 1150 65, 1200 55"
          stroke="var(--color-primary)"
          strokeWidth="0.4"
          strokeOpacity="0.1"
          className="animate-sen-flow-slow"
        />

        {/* Small energy nodes along the primary line */}
        <circle cx="300" cy="68" r="2.5" fill="var(--color-primary)" fillOpacity="0.15" className="animate-pulse" />
        <circle cx="600" cy="60" r="3" fill="var(--color-primary)" fillOpacity="0.2" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <circle cx="900" cy="52" r="2.5" fill="var(--color-primary)" fillOpacity="0.15" className="animate-pulse" style={{ animationDelay: "2s" }} />
      </svg>

      <style>{`
        @media (min-width: 768px) {
          @keyframes sen-flow {
            0%   { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -80; }
          }
          .animate-sen-flow {
            stroke-dasharray: 20 30;
            animation: sen-flow 8s linear infinite;
          }
          .animate-sen-flow-delayed {
            stroke-dasharray: 15 25;
            animation: sen-flow 12s linear infinite;
            animation-delay: 2s;
          }
          .animate-sen-flow-slow {
            stroke-dasharray: 10 40;
            animation: sen-flow 18s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
