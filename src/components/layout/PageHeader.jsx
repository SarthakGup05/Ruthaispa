import React from "react";
import { Home, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import PetalDivider from "../ui/PetalDivider";
import { FadeIn } from "../ui/motion";

/**
 * Reusable premium top banner for internal pages.
 * Features a Ken Burns background effect, floating organic petals,
 * glassmorphic breadcrumb trail, and an interactive quick-action dropdown.
 */
function PageHeader({
  title,
  subtitle,
  bgImage = "/spa_interior.webp",
  breadcrumbs = [],
  height = "medium",
  align = "center",
  showPetals = true,
  onNavigateHome,
  onNavigateSection,
  currentSection,
}) {
  // Height options mapping
  const heightClasses = {
    compact: "h-[180px] md:h-[220px]",
    medium: "h-[240px] md:h-[300px]",
    large: "h-[320px] md:h-[400px]",
  };

  // Text alignment classes mapping
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
  };

  // Dynamic content padding based on banner height
  const paddingClasses = {
    compact: "pt-16 md:pt-20 pb-3",
    medium: "pt-20 md:pt-24 pb-4",
    large: "pt-24 md:pt-32 pb-6",
  };

  const sectionsList = [
    { id: "about", name: "About Our Sanctuary" },
    { id: "services", name: "Signature Treatments" },
    { id: "booking", name: "Interactive Booking" },
    { id: "faq", name: "FAQ & Guidelines" },
    { id: "contact", name: "Contact & Location" },
  ];

  return (
    <section
      className={`relative w-full ${heightClasses[height]} flex items-start justify-center overflow-hidden bg-transparent select-none group border-b border-border/10`}
      aria-label={`${title} Header Banner`}
    >
      {/* 1. Ken Burns Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Luxury Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-background z-10" />
        
        {/* Image with scale animation */}
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover animate-ken-burns scale-[1.05]"
          style={{ transformOrigin: "center 80%" }}
        />
      </div>

      {/* 2. Ambient Gold Highlights (Atmospheric Glow) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#E6D2A7]/10 dark:bg-[#E6D2A7]/5 blur-[90px] mix-blend-screen pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/15 dark:bg-primary/5 blur-[80px] mix-blend-screen pointer-events-none z-10" />

      {/* 3. Floating Organic Petals (Drifting Elements) */}
      {showPetals && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* Petal 1 */}
          <svg className="absolute w-4 h-4 text-[#E6D2A7]/30 animate-petal-drift-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 C9 7 8 14 12 22 C16 14 15 7 12 2Z" />
          </svg>
          {/* Petal 2 */}
          <svg className="absolute w-5 h-5 text-primary/20 animate-petal-drift-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 C8 8 7 15 12 21 C17 15 16 8 12 3Z" />
          </svg>
          {/* Petal 3 */}
          <svg className="absolute w-3.5 h-3.5 text-[#E6D2A7]/25 animate-petal-drift-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 C9 7 8 14 12 22 C16 14 15 7 12 2Z" />
          </svg>
          {/* Petal 4 */}
          <svg className="absolute w-4 h-4 text-primary/15 animate-petal-drift-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3 C8 8 7 15 12 21 C17 15 16 8 12 3Z" />
          </svg>
        </div>
      )}

      {/* 4. Foreground Content Container */}
      <div className={`relative w-full max-w-7xl mx-auto px-6 md:px-8 z-20 flex flex-col items-center justify-center ${paddingClasses[height]}`}>
        <div className={`flex flex-col ${alignClasses[align]} w-full`}>
          
          {/* Breadcrumb Trail */}
          {breadcrumbs.length > 0 && (
            <FadeIn direction="down" delay={0.05} duration={0.6}>
              <Breadcrumb className="mb-4 md:mb-5 select-none">
                <BreadcrumbList className="flex items-center text-white/50 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      id="breadcrumb-link-home"
                      data-testid="breadcrumb-link-home"
                      onClick={onNavigateHome}
                      className="cursor-pointer hover:text-[#E6D2A7] flex items-center gap-1 transition-colors duration-300"
                    >
                      <Home className="w-3.5 h-3.5 inline mr-1 md:mr-1.5" />
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  
                  {breadcrumbs.map((crumb, idx) => {
                    const isLast = idx === breadcrumbs.length - 1;
                    const crumbId = crumb.label.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <React.Fragment key={idx}>
                        <BreadcrumbSeparator className="text-white/20 px-1 select-none text-[9px] md:text-xs">
                          /
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                          {isLast ? (
                            <span
                              id={`breadcrumb-page-${crumbId}`}
                              data-testid={`breadcrumb-page-${crumbId}`}
                              className="text-[#E6D2A7] font-semibold tracking-[0.25em]"
                            >
                              {crumb.label}
                            </span>
                          ) : (
                            <BreadcrumbLink
                              id={`breadcrumb-link-${crumbId}`}
                              data-testid={`breadcrumb-link-${crumbId}`}
                              onClick={() => crumb.id ? onNavigateSection?.(crumb.id) : crumb.action?.()}
                              className="cursor-pointer hover:text-[#E6D2A7] transition-colors duration-300"
                            >
                              {crumb.label}
                            </BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                      </React.Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </FadeIn>
          )}

          {/* Heading Title */}
          <FadeIn direction="up" delay={0.1} duration={0.8}>
            <h1 className="text-3xl md:text-6xl font-light tracking-[0.18em] text-white uppercase mb-1">
              {title}
            </h1>
          </FadeIn>

          {/* Decorative Divider */}
          <FadeIn direction="up" delay={0.2} duration={0.8} className="w-full flex justify-center">
            <PetalDivider className="my-1 select-none opacity-85" />
          </FadeIn>

          {/* Subtitle Description */}
          {subtitle && (
            <FadeIn direction="up" delay={0.25} duration={0.8}>
              <p className="text-xs md:text-sm font-serif tracking-[0.25em] text-[#E6D2A7] uppercase max-w-xl line-clamp-2 leading-relaxed opacity-90">
                {subtitle}
              </p>
            </FadeIn>
          )}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none hidden md:flex animate-pulse-subtle">
        <span className="text-[8px] uppercase tracking-[0.3em] text-[#E6D2A7]/70 font-semibold mb-1">
          Scroll
        </span>
        <div className="w-4 h-7 rounded-full border border-[#E6D2A7]/45 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#E6D2A7] animate-bounce-slow" />
        </div>
      </div>

      {/* Keyframes for premium animations */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.04) translate(0px, 0px); }
          50% { transform: scale(1.09) translate(6px, -4px); }
          100% { transform: scale(1.04) translate(0px, 0px); }
        }
        .animate-ken-burns {
          animation: kenburns 22s ease-in-out infinite;
          will-change: transform;
        }

        /* Ambient spinning for exploration Compass icon */
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Bounce slow for mouse scroll dot */
        .animate-bounce-slow {
          animation: bounce-slow 2.2s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        /* Floating Lotus Petals drifts - absolute paths sliding from bottom-left to top-right */
        @keyframes petal-drift-1-anim {
          0%   { transform: translate(-20vw, 400px) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.35; }
          90%  { opacity: 0.35; }
          100% { transform: translate(120vw, -100px) rotate(270deg); opacity: 0; }
        }
        @keyframes petal-drift-2-anim {
          0%   { transform: translate(-10vw, 400px) rotate(45deg); opacity: 0; }
          15%  { opacity: 0.25; }
          85%  { opacity: 0.25; }
          100% { transform: translate(110vw, -150px) rotate(315deg); opacity: 0; }
        }
        @keyframes petal-drift-3-anim {
          0%   { transform: translate(-30vw, 400px) rotate(-45deg); opacity: 0; }
          20%  { opacity: 0.3; }
          80%  { opacity: 0.3; }
          100% { transform: translate(100vw, -80px) rotate(180deg); opacity: 0; }
        }
        @keyframes petal-drift-4-anim {
          0%   { transform: translate(-5vw, 400px) rotate(90deg); opacity: 0; }
          12%  { opacity: 0.2; }
          88%  { opacity: 0.2; }
          100% { transform: translate(115vw, -200px) rotate(450deg); opacity: 0; }
        }

        .animate-petal-drift-1 { animation: petal-drift-1-anim 16s linear infinite; top: 0; left: 0; }
        .animate-petal-drift-2 { animation: petal-drift-2-anim 20s linear infinite; animation-delay: 4s; top: 0; left: 0; }
        .animate-petal-drift-3 { animation: petal-drift-3-anim 18s linear infinite; animation-delay: 8s; top: 0; left: 0; }
        .animate-petal-drift-4 { animation: petal-drift-4-anim 22s linear infinite; animation-delay: 12s; top: 0; left: 0; }

        @media (max-width: 767px) {
          .animate-ken-burns {
            animation: none !important;
            transform: scale(1.05) !important;
          }
          .animate-petal-drift-1,
          .animate-petal-drift-2,
          .animate-petal-drift-3,
          .animate-petal-drift-4 {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default React.memo(PageHeader);
