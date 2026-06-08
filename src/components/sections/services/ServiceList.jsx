import React from "react";
import { Clock, Phone } from "lucide-react";
import PetalDivider from "../../ui/PetalDivider";
import ZenCircles from "../../graphics/ZenCircles";
import FloatingLotus from "../../graphics/FloatingLotus";
import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from "../../ui/motion";
import { Whatsapp } from "../../icons/whatsapp";

const PHONE = "+917449962261";
const buildWhatsAppLink = (serviceName) =>
  `https://wa.me/917449962261?text=Hi%20RUA%20Thai%20Spa!%20I'd%20like%20to%20pre-book%20a%20${encodeURIComponent(serviceName)}%20session.`;

function ServiceList({ selectedService, setSelectedService }) {
  // Data strictly extracted from the provided menu
  const services = [
    {
      id: "swedish",
      name: "Swedish Massage",
      desc: "A classic, gentle, full-body massage focused on relaxation, stress relief, and improving circulation using long strokes, kneading, friction, tapping, and joint movement with oil.",
      rates: [
        { time: "60 min", price: "3,000" },
        { time: "90 min", price: "4,000" },
        { time: "120 min", price: "5,000" },
      ],
      benefits: [
        "Perfect for first-timers",
        "Stress relief",
        "Improves circulation",
      ],
      image: "/swedish_massage.webp",
    },
    {
      id: "deep-tissue",
      name: "Deep Tissue Massage",
      desc: "A therapeutic technique using firm pressure and slow strokes to reach deeper layers of muscle and connective tissue, targeting chronic tension, knots, and stiffness.",
      rates: [
        { time: "60 min", price: "3,600" },
        { time: "90 min", price: "4,600" },
        { time: "120 min", price: "5,700" },
      ],
      benefits: [
        "Targets chronic tension",
        "Relieves muscle knots",
        "Heals injury & stress",
      ],
      image: "/deep_tissue.webp",
    },
    {
      id: "aroma",
      name: "Aromatherapy Massage",
      desc: "Combines traditional massage techniques with essential oils for enhanced relaxation and well-being, using inhalation or skin absorption for therapeutic effects.",
      rates: [
        { time: "60 min", price: "3,000" },
        { time: "90 min", price: "4,000" },
        { time: "120 min", price: "5,000" },
      ],
      benefits: [
        "Enhances mood & well-being",
        "Pain & stress relief",
        "Plant extract therapy",
      ],
      image: "/aroma_therapy.webp",
    },
    {
      id: "balinese",
      name: "Balinese Massage",
      desc: "A holistic, deep-tissue therapy from Bali blending acupressure, aroma therapy, skin rolling, and gentle stretching to harmonize the body, mind, and spirit.",
      rates: [
        { time: "60 min", price: "3,500" },
        { time: "90 min", price: "4,500" },
        { time: "120 min", price: "5,700" },
      ],
      benefits: [
        "Stimulates energy flow",
        "Uses fragrant essential oils",
        "Rhythmic full-body treatment",
      ],
      image: "/balinese_massage.webp",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-12 md:py-16 px-6 max-w-7xl mx-auto w-full transition-colors duration-300 overflow-visible"
    >
      {/* ZenCircles — top-left background accent */}
      <ZenCircles className="absolute -top-16 -left-24 -z-10 opacity-40 hidden md:block" size={260} />

      {/* FloatingLotus — bottom-right accent */}
      <FloatingLotus className="absolute bottom-0 right-0 -z-10 opacity-30 hidden lg:block" size={110} />
      
      {/* Header Section */}
      <FadeIn direction="up" className="text-center mb-10">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
          Signature Rituals
        </span>
        <h2 className="text-4xl md:text-6xl mt-2 font-normal tracking-tight font-serif text-foreground">
          Premium Spa Therapies
        </h2>
        <div className="flex justify-center mt-2">
          <PetalDivider />
        </div>
        <p className="text-muted-foreground text-base mt-3 max-w-xl mx-auto font-light leading-relaxed">
          Experience our carefully curated selection of therapeutic massages,
          designed to disconnect you from stress and step into a world of
          wellness.
        </p>
      </FadeIn>

      {/* Services Grid */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8" staggerChildren={0.2}>
        {services.map((item) => (
          <StaggerItem key={item.id} direction="up" distance={40}>
            <HoverLift liftAmount={-6} className="h-full">
              <div
                id={`massage-${item.id}`}
                className={`group p-5 md:p-6 bg-card/85 dark:bg-card/50 backdrop-blur-sm border rounded-3xl text-left transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl hover:shadow-primary/10 ${
                  selectedService === item.id
                    ? "border-primary/60 bg-gradient-to-br from-card/90 to-primary/5 shadow-xl shadow-primary/10"
                    : "border-border/30 dark:border-border/15 hover:border-primary/40"
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-4 border border-border/10 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-3xl font-serif font-medium leading-snug tracking-tight text-foreground mb-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4 line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Benefits List */}
                  <div className="flex flex-col gap-3.5 mb-5">
                    {item.benefits.map((b, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3.5 text-[13px] text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/80 shrink-0" />
                        <span className="font-light leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Durations Display */}
                  <div className="mb-5">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>Available Durations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.rates.map((rate, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center bg-background border border-border/40 rounded-xl py-1.5 px-3 flex-1 min-w-[90px] transition-colors group-hover:border-primary/30"
                        >
                          <span className="text-xs text-foreground font-medium">
                            {rate.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer — WhatsApp + Call CTAs */}
                <div className="pt-4 border-t border-border/10 mt-auto flex gap-2.5">

                  {/* WhatsApp pill */}
                  <a
                    href={buildWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/wa relative flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8C495]"
                    style={{
                      background: "#D8C495",
                      color: "#1a1208",
                      boxShadow: "0 3px 14px rgba(216,196,149,0.35)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 6px 22px rgba(216,196,149,0.55)"; e.currentTarget.style.background = "#cdb97e"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 3px 14px rgba(216,196,149,0.35)"; e.currentTarget.style.background = "#D8C495"; }}
                  >
                    {/* shimmer */}
                    <span className="absolute inset-0 -translate-x-full group-hover/wa:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                    {/* icon bubble — white bg so green icon pops on gold */}
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm shrink-0 transition-transform duration-200 group-hover/wa:scale-110"
                      style={{ color: "#25D366" }}
                    >
                      <Whatsapp size={13} />
                    </span>
                    <span className="tracking-wide">Book via WhatsApp</span>
                  </a>

                  {/* Call pill */}
                  <a
                    href={`tel:${PHONE}`}
                    onClick={(e) => e.stopPropagation()}
                    className="group/call relative flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    style={{
                      background: "transparent",
                      border: "1.5px solid hsl(var(--primary) / 0.4)",
                      color: "hsl(var(--primary))",
                      boxShadow: "0 2px 10px hsl(var(--primary) / 0.07)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 5px 20px hsl(var(--primary) / 0.22)";
                      e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.75)";
                      e.currentTarget.style.background = "hsl(var(--primary) / 0.07)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 2px 10px hsl(var(--primary) / 0.07)";
                      e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.4)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {/* icon bubble */}
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 transition-transform duration-200 group-hover/call:scale-110"
                      style={{ background: "hsl(var(--primary) / 0.12)" }}
                    >
                      <Phone size={12} />
                    </span>
                    <span className="tracking-wide">Call Now</span>
                  </a>

                </div>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

export default React.memo(ServiceList);
