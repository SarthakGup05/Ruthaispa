import React, { useState } from 'react';
import PetalDivider from '../../ui/PetalDivider';

function GalleryGrid() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Sanctuary' },
    { id: 'rooms', name: 'Treatment Rooms' },
    { id: 'lounges', name: 'Relaxation Lounges' },
    { id: 'gardens', name: 'Zen Gardens' }
  ];

  const galleryItems = [
    { id: 1, category: 'rooms', title: 'Traditional Siam Suite', desc: 'Mat-aligned floor therapies with custom teak dividers', image: '/siam_suite.webp' },
    { id: 2, category: 'lounges', title: 'Orchid Rest Pavilion', desc: 'Post-treatment infusion lounges with ambient water flows', image: '/orchid_pavilion.webp' },
    { id: 3, category: 'gardens', title: 'Lotus Pond Pathways', desc: 'Verdant tropical paths designed for meditative strolls', image: '/lotus_pond.webp' },
    { id: 4, category: 'rooms', title: 'VIP Herbal Steam Chamber', desc: 'Private local herb-infused steam chambers', image: '/steam_chamber.webp' },
    { id: 5, category: 'lounges', title: 'Siam Tea Lounge', desc: 'Organic herbal tea service under soft gold lighting', image: '/tea_lounge.webp' },
    { id: 6, category: 'gardens', title: 'Zen Meditation Alcove', desc: 'Quiet outdoor platforms shaded by organic bamboo', image: '/zen_alcove.webp' }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-12 md:py-16 px-6 bg-card/10 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Visual Sanctuary</span>
          <h2 className="text-3xl md:text-5xl mt-2 font-normal">Our Space</h2>
          <PetalDivider />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mt-2 font-light">
            Take a virtual journey through our custom-designed therapy suites and lush meditation corners.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/10'
                  : 'border-border/15 text-muted-foreground hover:border-primary/20 hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/15 aspect-[4/3] flex flex-col justify-end p-4 md:p-5 hover:border-primary/30 transition-all duration-300"
            >
              
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-10" />

              <div className="relative z-20 transition-transform duration-300 group-hover:translate-y-[-2px]">
                <span className="text-[9px] uppercase tracking-widest font-bold text-primary mb-1 block">
                  {categories.find(c => c.id === item.category)?.name}
                </span>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-0.5">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs font-light leading-relaxed">
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

export default React.memo(GalleryGrid);
