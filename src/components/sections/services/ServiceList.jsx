import React from "react";
import { ArrowRight, Clock } from "lucide-react";
import PetalDivider from "../../ui/PetalDivider";
import ZenCircles from "../../graphics/ZenCircles";
import FloatingLotus from "../../graphics/FloatingLotus";
import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from "../../ui/motion";

export default function ServiceList({ selectedService, setSelectedService }) {
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
      className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto w-full transition-colors duration-300 overflow-visible"
    >
      {/* ZenCircles — top-left background accent */}
      <ZenCircles className="absolute -top-16 -left-24 -z-10 opacity-40 hidden md:block" size={260} />

      {/* FloatingLotus — bottom-right accent */}
      <FloatingLotus className="absolute bottom-0 right-0 -z-10 opacity-30 hidden lg:block" size={110} />
      
      {/* Header Section */}
      <FadeIn direction="up" className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">
          Signature Rituals
        </span>
        <h2 className="text-4xl md:text-6xl mt-3 font-normal tracking-tight font-serif text-foreground">
          Premium Spa Therapies
        </h2>
        <div className="flex justify-center mt-3">
          <PetalDivider />
        </div>
        <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto font-light leading-relaxed">
          Experience our carefully curated selection of therapeutic massages,
          designed to disconnect you from stress and step into a world of
          wellness.
        </p>
      </FadeIn>

      {/* Services Grid */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12" staggerChildren={0.2}>
        {services.map((item) => (
          <StaggerItem key={item.id} direction="up" distance={40}>
            <HoverLift liftAmount={-6} className="h-full">
              <div
                id={`massage-${item.id}`}
                onClick={() => {
                  setSelectedService(item.id);
                  // Scroll to booking planner smoothly
                  document
                    .getElementById("pricing-planner")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group p-8 bg-card/85 dark:bg-card/50 backdrop-blur-sm border rounded-3xl text-left cursor-pointer transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl hover:shadow-primary/10 ${
                  selectedService === item.id
                    ? "border-primary/60 bg-gradient-to-br from-card/90 to-primary/5 shadow-xl shadow-primary/10"
                    : "border-border/30 dark:border-border/15 hover:border-primary/40"
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/10] mb-6 border border-border/10 shadow-inner">
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
                  <h3 className="text-3xl font-serif font-medium leading-snug tracking-tight text-foreground mb-4">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6 line-clamp-3">
                    {item.desc}
                  </p>

                  {/* Benefits List */}
                  <div className="flex flex-col gap-3.5 mb-8">
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
                  <div className="mb-8">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-semibold flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>Available Durations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.rates.map((rate, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center bg-background border border-border/40 rounded-xl py-2.5 px-4 flex-1 min-w-[90px] transition-colors group-hover:border-primary/30"
                        >
                          <span className="text-xs text-foreground font-medium">
                            {rate.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-5 border-t border-border/10 flex items-center justify-between text-[13px] text-primary tracking-[0.2em] uppercase font-semibold mt-auto">
                  <span className="transition-colors group-hover:text-primary/90">
                    Book This Therapy
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
