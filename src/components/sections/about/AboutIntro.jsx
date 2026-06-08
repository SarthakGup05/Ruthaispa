import React from "react";
import { Crown, Star, Gem, Lock, Phone } from "lucide-react";
import PetalDivider from "../../ui/PetalDivider";
import FloatingLotus from "../../graphics/FloatingLotus";
import IncenseSmoke from "../../graphics/IncenseSmoke";
import { FadeIn, StaggerContainer, StaggerItem } from "../../ui/motion";
import { Button } from "../../ui/button";
import { Whatsapp } from "../../icons/whatsapp";
import FactualCounter from "../../ui/FactualCounter";

const PHONE = "+917449962261";
const WHATSAPP_LINK = `https://wa.me/917449962261?text=Hi%20RUA%20Thai%20Spa!%20I'd%20like%20to%20pre-book%20a%20luxury%20session.`;

function AboutIntro() {
  return (
    <section
      id="about"
      className="relative py-14 md:py-20 px-6 bg-transparent transition-colors duration-500 overflow-hidden z-0"
    >
      {/* Atmospheric glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[55%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[40%] bg-primary/5 dark:bg-primary/8 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

      {/* Decorative accents */}
      <FloatingLotus className="absolute -top-6 right-8 -z-10 opacity-50 hidden lg:block" size={140} />
      <FloatingLotus className="absolute bottom-10 -left-4 -z-10 opacity-30 rotate-12 hidden lg:block" size={100} />
      <IncenseSmoke className="absolute top-16 right-4 -z-10 opacity-40 hidden xl:block" height={350} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left Column: Content ── */}
          <FadeIn direction="right" className="lg:col-span-7 flex flex-col gap-5 text-left">

            {/* Eyebrow */}
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-3 block">
                India's First Aesthetic Spa
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-foreground mb-4 leading-tight">
                A New Standard of <br />
                <span className="text-primary italic">Luxury Wellness</span>
              </h2>
              <div className="flex justify-start">
                <PetalDivider />
              </div>
            </div>

            {/* Body copy */}
            <div className="flex flex-col gap-4 text-muted-foreground text-sm font-light leading-relaxed">
              <p>
                Welcome to <strong className="text-foreground font-semibold">RUA Thai Spa</strong> — India's first
                aesthetic spa concept, where ancient Siamese healing traditions meet
                a truly luxurious ambience. Every corner has been thoughtfully curated
                to offer an unparalleled sensory escape from the everyday.
              </p>
              <p>
                We offer <strong className="text-foreground font-semibold">luxury private rooms</strong> adorned
                with bespoke décor, premium organic oils, and a selection of
                specially crafted amenities — from aromatic steam baths to
                personalised therapy rituals — all designed to rejuvenate body,
                mind, and spirit.
              </p>

              {/* Pull-quote */}
              <p className="border-l-2 border-primary pl-4 py-1 text-xs italic text-primary uppercase tracking-wider font-semibold">
                "We do not merely apply pressure. We orchestrate a dance of
                alignment, breath, and profound muscular release."
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: <Crown size={13} />, label: "Luxury Ambience" },
                { icon: <Gem size={13} />, label: "Private Luxury Rooms" },
                { icon: <Star size={13} />, label: "Special Amenities" },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-primary/10 text-primary border border-primary/20"
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>

            {/* Stats grid */}
            <StaggerContainer
              className="grid grid-cols-3 gap-3 pt-4 border-t border-border/10 mt-1"
              staggerChildren={0.15}
              delayChildren={0.3}
            >
              <StaggerItem direction="up" className="p-3 bg-card/75 dark:bg-card/30 border border-border/25 rounded-2xl backdrop-blur-sm">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                  <FactualCounter value={18} suffix="+" delay={0.4} />
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">Yrs Pedigree</span>
              </StaggerItem>
              <StaggerItem direction="up" className="p-3 bg-card/75 dark:bg-card/30 border border-border/25 rounded-2xl backdrop-blur-sm">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">
                  <FactualCounter value={100} suffix="%" delay={0.55} />
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">Female Certified</span>
              </StaggerItem>
              <StaggerItem direction="up" className="p-3 bg-card/75 dark:bg-card/30 border border-border/25 rounded-2xl backdrop-blur-sm">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-primary mb-1">Organic</span>
                <span className="block text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">Siamese Oils</span>
              </StaggerItem>
            </StaggerContainer>

            {/* Members-only pre-booking highlight */}
            <div className="flex items-start gap-3 mt-1 p-4 rounded-2xl bg-primary/8 border border-primary/25 backdrop-blur-sm">
              <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                <Lock size={15} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-1">
                  Exclusively for Our Valued Members
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Our luxury experience is{" "}
                  <span className="text-foreground font-semibold">specially designed for members</span> and is{" "}
                  <span className="text-primary font-semibold">only available via pre-booking</span>.
                  Secure your sanctuary in advance to guarantee your preferred time,
                  private room, and bespoke amenities.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">

              {/* WhatsApp — pill, champagne gold */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-1 inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8C495]"
                style={{
                  background: "#D8C495",
                  color: "#1a1208",
                  boxShadow: "0 4px 18px rgba(216,196,149,0.38)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(216,196,149,0.58)"; e.currentTarget.style.background = "#cdb97e"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 18px rgba(216,196,149,0.38)"; e.currentTarget.style.background = "#D8C495"; }}
              >
                {/* shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />

                {/* icon bubble — white bg, green icon */}
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm shrink-0 transition-transform duration-200 group-hover:scale-110" style={{ color: "#25D366" }}>
                  <Whatsapp size={18} />
                </span>
                <span className="tracking-wide">Book via WhatsApp</span>
              </a>

              {/* Call — pill, outline with primary glow */}
              <a
                href={`tel:${PHONE}`}
                className="group relative flex-1 inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  background: "transparent",
                  border: "1.5px solid",
                  borderColor: "hsl(var(--primary) / 0.45)",
                  color: "hsl(var(--primary))",
                  boxShadow: "0 2px 12px hsl(var(--primary) / 0.08)",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px hsl(var(--primary) / 0.25)"; e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.8)"; e.currentTarget.style.background = "hsl(var(--primary) / 0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px hsl(var(--primary) / 0.08)"; e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.45)"; e.currentTarget.style.background = "transparent"; }}
              >
                {/* icon bubble */}
                <span className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 shrink-0"
                  style={{ background: "hsl(var(--primary) / 0.12)" }}
                >
                  <Phone size={14} />
                </span>
                <span className="tracking-wide">Call Us Now</span>
              </a>

            </div>
          </FadeIn>

          {/* ── Right Column: Diagonal Collage ── */}
          <FadeIn direction="left" className="lg:col-span-5 relative flex justify-center items-start">

            {/*
              Collage strategy (senior FE approach):
              - Container is 560px tall with full width
              - Image 1: top-left anchor, 78% wide, 52% tall — clearly shows top interior
              - Image 2: bottom-right anchor, 78% wide, 52% tall — clearly shows bottom interior
              - Overlap is only ~8% in the middle seam, masked by a border ring on the front card
              - Neither image ever bleeds behind the other at its primary focal area
            */}
            <div className="relative w-full" style={{ height: "560px" }}>

              {/* ── Image 1: Top-left ── */}
              <div
                className="absolute rounded-3xl overflow-hidden border-2 border-background/80 dark:border-[#150f0c]/90 shadow-[0_16px_48px_rgba(0,0,0,0.30)] group"
                style={{
                  width: "80%",
                  height: "50%",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
              >
                <img
                  src="/Interior_1.jpeg"
                  alt="RUA Thai Spa — Aesthetic Interior View 1"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* subtle bottom fade so the seam looks intentional */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />

                {/* Pre-Booking Only pill — top-right corner of this card */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-primary text-primary-foreground rounded-lg px-2.5 py-1.5 shadow-lg">
                  <Lock size={10} />
                  <span className="text-[9px] uppercase tracking-widest font-bold whitespace-nowrap">Pre-Booking Only</span>
                </div>
              </div>

              {/* ── Image 2: Bottom-right ── */}
              <div
                className="absolute rounded-3xl overflow-hidden border-2 border-background/80 dark:border-[#150f0c]/90 shadow-[0_16px_48px_rgba(0,0,0,0.30)] group"
                style={{
                  width: "80%",
                  height: "50%",
                  bottom: 0,
                  right: 0,
                  zIndex: 2,
                }}
              >
                <img
                  src="/Interior_2.jpeg"
                  alt="RUA Thai Spa — Luxury Interior View 2"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* subtle top fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/25 pointer-events-none" />
              </div>

              {/* ── Floating badge anchored at the centre seam ── */}
              <div
                className="absolute z-10 left-1/2 -translate-x-1/2 bg-background/95 dark:bg-[#1e1510]/95 backdrop-blur-md border border-primary/35 rounded-2xl shadow-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ top: "50%", transform: "translate(-50%, -50%)" }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Crown size={15} />
                </span>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-primary font-bold leading-tight whitespace-nowrap">India's First</p>
                  <p className="text-[11px] text-foreground font-semibold leading-tight whitespace-nowrap">Aesthetic Spa Concept</p>
                </div>
              </div>

              {/* ── Decorative corner accent — bottom-left of Image 1 ── */}
              <div
                className="absolute z-3 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm flex items-center justify-center"
                style={{ bottom: "50%", left: 0, transform: "translateY(50%) translateX(-30%) rotate(-6deg)" }}
              >
                <Gem size={22} className="text-primary/60" />
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

export default React.memo(AboutIntro);
