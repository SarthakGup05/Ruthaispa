import React from 'react';

/**
 * Decorative flower petals divider for section headings.
 * Renders scattered, softly animated petals around a central lotus motif
 * with elegant gradient lines extending outward.
 */
export default function PetalDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-0 my-6 select-none ${className}`}>
      {/* ——— Left decorative arm ——— */}
      <div className="flex items-center gap-1.5">
        {/* Far-left floating petal */}
        <svg className="w-3.5 h-3.5 text-primary/30 animate-petal-float-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 C9 7 8 14 12 22 C16 14 15 7 12 2Z" />
        </svg>

        {/* Gradient line */}
        <div className="h-[1px] w-8 md:w-14 bg-gradient-to-r from-transparent via-primary/20 to-primary/45" />

        {/* Mid-left drifting petal */}
        <svg className="w-4 h-4 text-primary/25 animate-petal-float-2 -rotate-[35deg]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3 C8 8 7 15 12 21 C17 15 16 8 12 3Z" />
        </svg>

        {/* Inner accent line */}
        <div className="h-[1px] w-5 md:w-8 bg-gradient-to-r from-primary/30 to-primary/50" />
      </div>

      {/* ——— Central lotus bloom ——— */}
      <div className="relative mx-1">
        <svg
          className="w-9 h-9 text-primary drop-shadow-[0_0_6px_rgba(230,210,167,0.2)]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Central petal — animated glow */}
          <path
            d="M50 20 C46 36 43 56 50 80 C57 56 54 36 50 20 Z"
            fill="currentColor"
            fillOpacity="0.06"
            className="animate-center-petal-glow"
          />
          {/* Central vein */}
          <path d="M50 22 C49 42 49 62 50 78" strokeWidth="0.6" strokeOpacity="0.4" />

          {/* Left inner petal */}
          <path d="M50 34 C36 42 32 60 50 78" strokeOpacity="0.6" />
          {/* Right inner petal */}
          <path d="M50 34 C64 42 68 60 50 78" strokeOpacity="0.6" />

          {/* Left outer petal — wider sweep */}
          <path
            d="M50 48 C22 52 20 72 50 80"
            strokeOpacity="0.35"
            fill="currentColor"
            fillOpacity="0.02"
          />
          {/* Right outer petal */}
          <path
            d="M50 48 C78 52 80 72 50 80"
            strokeOpacity="0.35"
            fill="currentColor"
            fillOpacity="0.02"
          />

          {/* Crown bud */}
          <circle cx="50" cy="18" r="2" fill="currentColor" fillOpacity="0.2" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <circle cx="50" cy="18" r="1" fill="currentColor" fillOpacity="0.4" />

          {/* Water base ripples */}
          <path d="M28 85 C36 88 64 88 72 85" strokeWidth="0.7" strokeOpacity="0.45" />
          <path d="M20 90 C32 94 68 94 80 90" strokeWidth="0.5" strokeOpacity="0.25" />
        </svg>

        {/* Scattered mini petals around the central lotus */}
        <svg className="absolute -top-1.5 -left-2 w-3 h-3 text-primary/20 animate-petal-scatter-1" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <ellipse cx="8" cy="8" rx="3" ry="6" transform="rotate(-25 8 8)" />
        </svg>
        <svg className="absolute -top-1 -right-2.5 w-2.5 h-2.5 text-primary/15 animate-petal-scatter-2" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <ellipse cx="8" cy="8" rx="2.5" ry="5.5" transform="rotate(30 8 8)" />
        </svg>
        <svg className="absolute -bottom-1 left-0 w-2 h-2 text-primary/15 animate-petal-scatter-3" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <ellipse cx="8" cy="8" rx="3" ry="5" transform="rotate(50 8 8)" />
        </svg>
      </div>

      {/* ——— Right decorative arm ——— */}
      <div className="flex items-center gap-1.5">
        {/* Inner accent line */}
        <div className="h-[1px] w-5 md:w-8 bg-gradient-to-l from-primary/30 to-primary/50" />

        {/* Mid-right drifting petal */}
        <svg className="w-4 h-4 text-primary/25 animate-petal-float-3 rotate-[35deg]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3 C8 8 7 15 12 21 C17 15 16 8 12 3Z" />
        </svg>

        {/* Gradient line */}
        <div className="h-[1px] w-8 md:w-14 bg-gradient-to-l from-transparent via-primary/20 to-primary/45" />

        {/* Far-right floating petal */}
        <svg className="w-3.5 h-3.5 text-primary/30 animate-petal-float-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 C9 7 8 14 12 22 C16 14 15 7 12 2Z" />
        </svg>
      </div>

      {/* Keyframes for petal animations */}
      <style>{`
        @media (min-width: 768px) {
          @keyframes petal-float-1 {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
            50%      { transform: translateY(-4px) rotate(8deg); opacity: 0.5; }
          }
          @keyframes petal-float-2 {
            0%, 100% { transform: translateY(0) rotate(-35deg); opacity: 0.25; }
            50%      { transform: translateY(-3px) rotate(-28deg); opacity: 0.4; }
          }
          @keyframes petal-float-3 {
            0%, 100% { transform: translateY(0) rotate(35deg); opacity: 0.25; }
            50%      { transform: translateY(-3px) rotate(28deg); opacity: 0.4; }
          }
          @keyframes petal-float-4 {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
            50%      { transform: translateY(-4px) rotate(-8deg); opacity: 0.5; }
          }
          @keyframes petal-scatter-1 {
            0%, 100% { transform: translate(0, 0) rotate(-25deg); opacity: 0.2; }
            50%      { transform: translate(-3px, -4px) rotate(-15deg); opacity: 0.35; }
          }
          @keyframes petal-scatter-2 {
            0%, 100% { transform: translate(0, 0) rotate(30deg); opacity: 0.15; }
            50%      { transform: translate(3px, -3px) rotate(40deg); opacity: 0.3; }
          }
          @keyframes petal-scatter-3 {
            0%, 100% { transform: translate(0, 0) rotate(50deg); opacity: 0.15; }
            50%      { transform: translate(-2px, 3px) rotate(60deg); opacity: 0.25; }
          }
          @keyframes center-petal-glow {
            0%, 100% { fill-opacity: 0.06; }
            50%      { fill-opacity: 0.14; }
          }
          .animate-petal-float-1   { animation: petal-float-1   5s ease-in-out infinite; }
          .animate-petal-float-2   { animation: petal-float-2   6s ease-in-out infinite; animation-delay: 0.5s; }
          .animate-petal-float-3   { animation: petal-float-3   6s ease-in-out infinite; animation-delay: 1s; }
          .animate-petal-float-4   { animation: petal-float-4   5s ease-in-out infinite; animation-delay: 1.5s; }
          .animate-petal-scatter-1 { animation: petal-scatter-1  7s ease-in-out infinite; }
          .animate-petal-scatter-2 { animation: petal-scatter-2  8s ease-in-out infinite; animation-delay: 2s; }
          .animate-petal-scatter-3 { animation: petal-scatter-3  9s ease-in-out infinite; animation-delay: 3s; }
          .animate-center-petal-glow { animation: center-petal-glow 4s ease-in-out infinite; }
        }
      `}</style>
    </div>
  );
}
