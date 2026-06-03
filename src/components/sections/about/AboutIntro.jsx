import React from "react";
import { ShieldCheck, Award } from "lucide-react";
import PetalDivider from "../../ui/PetalDivider";
import FloatingLotus from "../../graphics/FloatingLotus";
import IncenseSmoke from "../../graphics/IncenseSmoke";
import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";

export default function AboutIntro() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-24 px-6 bg-secondary/5 dark:bg-[#150f0c] transition-colors duration-500 border-y border-border/10 overflow-hidden z-0"
    >
      {/* Soft atmospheric background glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[55%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />

      {/* FloatingLotus — top-right decorative accent */}
      <FloatingLotus className="absolute -top-6 right-8 -z-10 opacity-50 hidden lg:block" size={140} />

      {/* FloatingLotus — bottom-left mirrored */}
      <FloatingLotus className="absolute bottom-10 -left-4 -z-10 opacity-30 rotate-12 hidden lg:block" size={100} />

      {/* IncenseSmoke — right edge organic accent */}
      <IncenseSmoke className="absolute top-16 right-4 -z-10 opacity-40 hidden xl:block" height={350} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative Story & Credentials */}
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-3 block">
                Our Lineage & Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-6 leading-tight">
                Preserving Ancient <br />
                Siamese Wellness
              </h2>
              <div className="flex justify-start">
                <PetalDivider />
              </div>
            </div>

            <div className="flex flex-col gap-5 text-muted-foreground text-sm font-light leading-relaxed">
              <p>
                RUA Thai Spa was founded on a singular commitment: to deliver
                traditional, uncompromised Thai therapeutic massage. Our
                practices stem directly from the ancient medical manuscripts of
                Siam, codified at Wat Pho temple in Bangkok.
              </p>
              <p>
                Unlike western styles, traditional Thai massage (Nuad Thai) is
                an active, cooperative healing art. Our practitioners work with
                you, aligning energy pathways (Sen lines) and using passive yoga
                stretching to unlock structural joints and release deep-seated
                physical blockages.
              </p>
              <p className="border-l-2 border-primary pl-4 py-1 text-xs italic text-primary uppercase tracking-wider font-semibold">
                "We do not merely apply pressure. We orchestrate a dance of
                alignment, breath, and profound muscular release."
              </p>
            </div>

            {/* Badges / Stats grid */}
            <StaggerContainer className="grid grid-cols-3 gap-4 pt-6 border-t border-border/10 mt-2" staggerChildren={0.15} delayChildren={0.3}>
              <StaggerItem direction="up" className="p-4 bg-card/30 border border-border/10 rounded-2xl backdrop-blur-sm">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                  18+
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Yrs Pedigree
                </span>
              </StaggerItem>
              <StaggerItem direction="up" className="p-4 bg-card/30 border border-border/10 rounded-2xl backdrop-blur-sm">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                  100%
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Female Certified
                </span>
              </StaggerItem>
              <StaggerItem direction="up" className="p-4 bg-card/30 border border-border/10 rounded-2xl backdrop-blur-sm">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                  Organic
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Siamese Oils
                </span>
              </StaggerItem>
            </StaggerContainer>
          </FadeIn>

          {/* Right Column: Single Visual Panel */}
          <FadeIn direction="left" className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] border border-border/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
            <img
              src="/about_siamese_wellness.webp"
              alt="Traditional Thai Siamese Wellness Settings and Luk Prakob"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
