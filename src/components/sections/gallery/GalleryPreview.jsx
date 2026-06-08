import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import PetalDivider from '../../ui/PetalDivider';
import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from '../../ui/motion';
import { Button } from '../../ui/button';

function GalleryPreview({ setCurrentPage }) {
  const previewImages = [
    {
      id: 'IMG_1198',
      src: '/gellary/IMG_1198.webp',
      title: 'Siamese Wellness Entry',
      tag: 'Reception',
      className: 'w-[42%] aspect-[4/5] top-[5%] left-[5%] z-20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]',
    },
    {
      id: 'IMG_1184',
      src: '/gellary/IMG_1184.webp',
      title: 'Siam Serenity Chamber',
      tag: 'Treatment Rooms',
      className: 'w-[48%] aspect-[4/3] top-[22%] right-[5%] z-10 shadow-[0_15px_40px_rgba(0,0,0,0.3)]',
    },
    {
      id: 'IMG_1192',
      src: '/gellary/IMG_1192.webp',
      title: 'Lanna Rest Lounge',
      tag: 'Relaxation Areas',
      className: 'w-[38%] aspect-square bottom-[5%] left-[22%] z-30 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border-2 border-background/90 dark:border-[#150f0c]',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-6 bg-secondary/5 dark:bg-[#150f0c] transition-colors duration-500 border-y border-border/10 overflow-hidden z-0">
      {/* Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[55%] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[40%] bg-primary/5 dark:bg-primary/8 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <FadeIn direction="right" className="lg:col-span-5 flex flex-col items-start text-left gap-5">
            <div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-bold mb-3.5 block flex items-center gap-1.5">
                <Sparkles size={12} className="text-primary animate-pulse" />
                Sanctuary Tour
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-4 leading-tight">
                Step Into Our <br />
                <span className="text-primary italic">Temple of Calm</span>
              </h2>
              <PetalDivider />
            </div>

            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-md">
              Every space at RUA Thai Spa is carefully crafted to embody local Lanna architecture, authentic Siamese materials, and peaceful ambient illumination. Browse our curated photographic journey to see the luxury, design, and attention to detail that awaits your arrival.
            </p>

            <div className="flex flex-col gap-4 text-xs tracking-wider text-muted-foreground/80 font-medium">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Bespoke Teakwood Treatment Rooms</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Meditation Lounges & Infusion Corners</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Traditional Copper Foot Bath Basins</span>
              </div>
            </div>

            <Button
              onClick={() => setCurrentPage?.('gallery')}
              size="lg"
              className="mt-2 rounded-full px-8 py-6 uppercase tracking-widest text-xs font-bold shadow-lg shadow-black/10 hover:shadow-black/15 cursor-pointer flex items-center gap-2 group w-full sm:w-auto"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </FadeIn>

          {/* Collage / Carousel Column */}
          <FadeIn direction="left" className="lg:col-span-7 w-full">
            
            {/* Desktop Mosaic Collage (hidden on mobile, visible on md+) */}
            <div className="hidden md:block relative w-full max-w-[580px] h-[550px] mx-auto">
              {previewImages.map((img) => (
                <div
                  key={img.id}
                  className={`absolute rounded-2xl overflow-hidden border border-border/10 transition-transform duration-500 hover:z-40 hover:scale-102 group/card ${img.className}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  
                  {/* Subtle glass overlay info on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-background/85 dark:bg-[#1a120e]/90 backdrop-blur-md border-t border-border/10 p-3.5 transform translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-out flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-wider text-primary font-bold mb-0.5">
                      {img.tag}
                    </span>
                    <span className="text-xs font-serif font-bold text-foreground">
                      {img.title}
                    </span>
                  </div>
                  
                  {/* Static Category Tag */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white/90 text-[8px] uppercase tracking-widest px-2.5 py-1 rounded font-bold group-hover/card:opacity-0 transition-opacity duration-200">
                    {img.tag}
                  </div>
                </div>
              ))}

              {/* Decorative gold leaf element */}
              <div className="absolute top-[10%] right-[45%] w-12 h-12 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm flex items-center justify-center -rotate-12 z-0">
                <span className="text-primary/40 text-lg">✿</span>
              </div>
            </div>

            {/* Mobile Touch Carousel (visible on mobile, hidden on md+) */}
            <div className="block md:hidden w-full relative">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pb-4 px-4 scroll-smooth">
                {previewImages.map((img) => (
                  <div
                    key={img.id}
                    className="snap-center shrink-0 w-[82vw] aspect-[4/5] rounded-3xl overflow-hidden border border-border/10 shadow-[0_15px_30px_rgba(0,0,0,0.25)] relative group/card"
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Visual indicators / overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent z-10" />
                    
                    {/* Information Text at the bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-20 flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-extrabold mb-1">
                        {img.tag}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-foreground mb-0.5">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Touch Helper Indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-2 text-muted-foreground/60 text-[10px] uppercase tracking-[0.2em] font-semibold">
                <span>← Swipe to Tour →</span>
              </div>
            </div>

          </FadeIn>

        </div>
      </div>
      
      {/* Hide scrollbars for the carousel */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default React.memo(GalleryPreview);
