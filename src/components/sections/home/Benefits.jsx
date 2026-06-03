import React from 'react';
import { Heart, Activity, ShieldAlert, Sparkles, Smile, RefreshCw } from 'lucide-react';
import PetalDivider from '../../ui/PetalDivider';

export default function Benefits() {
  const benefitItems = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Myofascial Stretching & Flexibility",
      desc: "Incorporates deep, passive, yoga-like stretches to open joint corridors, lengthen muscle fibers, and expand natural range of motion."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Circulatory & Lymphatic Flow",
      desc: "Applies palm pressure and compressions along Sen lines to stimulate active blood flow, speeding lactic acid flushing and detoxifying muscle tissues."
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "Nervous System Regulation",
      desc: "Rhythmic pressure coupled with specialized breathing techniques shifts the body into a restorative parasympathetic state, reducing cortisol levels."
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Postural Realignment",
      desc: "Releases tight fascia around the spine, neck, and shoulders, helping to restore optimal natural alignment and relieve desk-fatigue soreness."
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Myofascial Pain Mitigation",
      desc: "Targeted acupressure blocks trigger point signaling, reducing chronic back pain, tension headaches, and localized myofascial spasms."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Prana Energy Pathway Balancing",
      desc: "Inspired by ancient Ayurvedic principles, therapy unblocks dormant energy corridors (Sen Sib) to revitalize overall mental and physical stamina."
    }
  ];

  return (
    <section id="benefits" className="relative py-32 px-6 bg-background overflow-hidden z-0 transition-colors duration-500">
      
      {/* 
        Ambient Background Gradients (The "Lure")
        These create a soft, breathing atmosphere behind the content using brand accents.
      */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#b25338]/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-semibold mb-4">
            Wellness Foundations
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-normal text-foreground mb-6">
            Traditional Healing Benefits
          </h2>
          <PetalDivider />
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Traditional Thai massage works deeper than standard therapies, serving as a physical and mental realignment system to promote long-term vitality.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefitItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative p-1 rounded-3xl overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(230,210,167,0.15)]"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-b from-border/20 to-transparent group-hover:from-primary/40 group-hover:to-transparent transition-colors duration-500 rounded-3xl" />
              
              <div className="relative h-full bg-card/20 backdrop-blur-md border border-white/5 rounded-[22px] p-8 md:p-10 text-left flex flex-col items-start overflow-hidden">
                {/* Internal Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Icon with interactive container */}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-8 border border-primary/20 bg-background/50 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(230,210,167,0.4)] transition-all duration-500 ease-out z-10">
                  {React.cloneElement(item.icon, { className: "w-6 h-6", strokeWidth: 1.5 })}
                </div>

                <h3 className="text-2xl font-serif text-foreground mb-4 relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-loose font-light relative z-10">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}