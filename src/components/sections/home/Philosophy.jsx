import React from 'react';
import { Compass, Flower, Leaf } from 'lucide-react';
import PetalDivider from '../../ui/PetalDivider';
import MandalaWatermark from '../../graphics/MandalaWatermark';
import ZenCircles from '../../graphics/ZenCircles';
import { FadeIn, StaggerContainer, StaggerItem } from '../../ui/motion';

const philosophyPoints = [
  {
    icon: Compass,
    title: 'Authentic Lineages',
    description: 'Our practitioners are masterfully trained in traditional Wat Pho yoga-stretching methodologies directly from Bangkok.'
  },
  {
    icon: Flower,
    title: 'Organic Botanicals',
    description: 'We exclusively utilize pure cold-pressed oils, wild lemongrass, and local organic elements, imported directly from Thai farm partners.'
  },
  {
    icon: Leaf,
    title: 'Post-Therapy Infusions',
    description: 'Complete your wellness ritual with our organic lemongrass and butterfly pea tea blend served in our quiet lounge.'
  }
];

export default function Philosophy() {
  return (
    <section 
      id="why-choose-us" 
      className="relative py-12 md:py-16 px-6 overflow-hidden bg-background transition-colors duration-500 z-0"
    >
      {/* --- PREMIUM BACKGROUND EFFECTS --- */}
      {/* Dynamic Gradients */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-[60%] bg-primary/10 dark:bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#b25338]/10 dark:bg-[#b25338]/15 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      
      {/* Abstract Pattern Overlay (Subtle Texture) */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Qzk5OTkiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMCAwaDQwdjQwSDBWMHptMjAgMjBoMjB2MjBIMjBWMjB6TTAgMjBoMjB2MjBIMFYyMEoyMCAwaDIwdjIwSDIwVjB6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

      {/* Mandala Watermark — large centered background ornament */}
      <MandalaWatermark className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-40 dark:opacity-60" size={600} />

      {/* Zen Circles — top-right corner accent */}
      <ZenCircles className="absolute -top-20 -right-20 -z-10 opacity-50 hidden md:block" size={320} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: HIGH-END PICTURE CONTAINER --- */}
          <FadeIn 
            direction="right"
            className="md:col-span-5 relative group"
          >
            {/* Soft decorative ring behind image */}
            <div className="absolute -inset-4 border border-primary/20 rounded-full scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none" />

            {/* Floating Leaf Icon 1 */}
            <Leaf className="absolute -top-8 -right-8 w-12 h-12 text-primary/20 animate-float opacity-70" style={{ animationDelay: '1s' }} strokeWidth={1} />
            
            {/* Main Image Mask/Container */}
            <div className="relative overflow-hidden rounded-t-full rounded-b-3xl aspect-[3/4] shadow-2xl shadow-primary/10 border-4 border-card/50 backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-500">
              {/* The Image */}
              <img 
                src="/siam_suite.png" 
                alt="Serene spa environment" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              
              {/* Overlay Gradient on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Stylized monogram overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="font-serif text-8xl text-primary/20">R</span>
              </div>
            </div>

            {/* Floating Flower Icon 2 */}
            <Flower className="absolute -bottom-6 -left-10 w-16 h-16 text-[#b25338]/20 animate-float-slow opacity-60" strokeWidth={1} />
          </FadeIn>

          {/* --- RIGHT SIDE: CONTENT & STACKED CARDS --- */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Header */}
            <FadeIn direction="up" delay={0.2} className="w-full">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary font-semibold mb-4 block">
                Why RUA Thai Spa
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground mb-6 leading-tight">
                An Oasis of <br className="hidden lg:block"/>Ancient Wisdom
              </h2>
              <div className="w-40 md:w-full md:flex md:justify-start mb-8">
                <PetalDivider />
              </div>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-2 font-light leading-relaxed mb-6">
                We preserve and honour ancient Thai healing arts, providing an immersive, calming sensory environment to align and restore your inner vitality.
              </p>
            </FadeIn>

            {/* Vertically Stacked Cards */}
            <StaggerContainer className="space-y-6 w-full max-w-3xl" staggerChildren={0.2} delayChildren={0.4}>
              {philosophyPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <StaggerItem 
                    key={index}
                    direction="up"
                  >
                    <div className="group relative p-0.5 rounded-3xl overflow-hidden transition-all duration-300">
                      {/* Animated Gradient Border on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                      
                      {/* Inner Card */}
                      <div className="relative bg-card/40 backdrop-blur-lg border border-white/5 rounded-[22px] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 transition-all duration-300 group-hover:bg-card/60 group-hover:shadow-xl group-hover:shadow-primary/5">
                        
                        {/* Icon Container */}
                        <div className="flex-shrink-0 relative">
                          <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-16 h-16 rounded-full flex items-center justify-center border border-primary/30 bg-background/50 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 ease-out z-10">
                            <Icon className="w-7 h-7" strokeWidth={1.25} />
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow text-center sm:text-left">
                          <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {point.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed font-light">
                            {point.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

        </div>
      </div>

      {/* --- Custom CSS for Keyframes --- */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(10px) translateX(10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}