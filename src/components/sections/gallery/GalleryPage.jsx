import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import FactualCounter from '../../ui/FactualCounter';

const categories = [
  { id: 'all', name: 'All Sanctuary' },
  { id: 'rooms', name: 'Treatment Rooms' },
  { id: 'lounges', name: 'Relaxation Areas' },
  { id: 'reception', name: 'Reception & Spaces' },
  { id: 'details', name: 'Wellness Details' }
];

const galleryItems = [
  { id: 1, src: '/gellary/IMG_1198.webp', category: 'reception', title: 'Siamese Wellness Entry', desc: 'Welcome lobby featuring local brass accents and fresh orchids.' },
  { id: 2, src: '/gellary/IMG_1184.webp', category: 'rooms', title: 'Siam Serenity Chamber', desc: 'Mat-aligned Nuad Thai stretching mats with organic cotton dividers.' },
  { id: 3, src: '/gellary/IMG_1189.webp', category: 'rooms', title: 'Teakwood Therapy Suite', desc: 'Bespoke therapy chamber with ambient water flows and soft warm light.' },
  { id: 4, src: '/gellary/IMG_1190.webp', category: 'details', title: 'Aromatic Herbal Station', desc: 'Hand-prepared lemongrass, Kaffir lime, and warm compress herbal packs.' },
  { id: 5, src: '/gellary/IMG_1192.webp', category: 'lounges', title: 'Lanna Rest Lounge', desc: 'Relaxation lounge chairs featuring custom tea sets for post-therapy recovery.' },
  { id: 6, src: '/gellary/IMG_1194.webp', category: 'rooms', title: 'Hot Stone Therapy Bed', desc: 'Smooth heated basalt stones rested over organic wellness mats.' },
  { id: 7, src: '/gellary/IMG_1199.webp', category: 'details', title: 'Relaxation Infusion Corner', desc: 'Ceramic teaware containing organic Lanna tea blends brewed daily.' },
  { id: 8, src: '/gellary/IMG_1200.webp', category: 'details', title: 'Traditional Thai Foot Bath', desc: 'Warm copper basins infused with fresh lime slices and local rose petals.' },
  { id: 9, src: '/gellary/IMG_1202.webp', category: 'lounges', title: 'Bamboo Meditative Alcove', desc: 'Semi-private relaxation zone lined with authentic organic bamboo partitions.' }
];

function GalleryPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const isMobile = useIsMobile();

  // Filter gallery items based on active tab
  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  // Navigate lightbox next
  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
    });
  }, [filteredItems]);

  // Navigate lightbox prev
  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
    });
  }, [filteredItems]);

  // Close lightbox
  const handleClose = useCallback(() => {
    setLightboxIndex(null);
    setIsZoomed(false);
  }, []);

  // Keyboard navigation listeners
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev, handleClose]);

  // Prevent scroll when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const activeImage = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section className="py-14 md:py-20 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Curated Stats Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-border/10 pb-8 mb-10 text-left w-full">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.35em] text-primary font-bold mb-2.5 block flex items-center gap-2">
              <Sparkles size={11} className="text-primary animate-pulse" />
              Siamese Sanctuary Details
            </span>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xl">
              Take a walk through our luxury chambers. Every detail has been curated by interior specialists to ensure a harmonious, authentic Thai wellness experience in Kolkata.
            </p>
          </div>
          <div className="flex gap-4 self-stretch md:self-auto items-center justify-between border-t md:border-t-0 md:border-l border-border/10 pt-4 md:pt-0 md:pl-8">
            <div className="text-center md:text-left">
              <span className="block text-2xl font-serif text-primary">
                <FactualCounter value={9} delay={0.25} />
              </span>
              <span className="block text-[8px] uppercase tracking-widest text-muted-foreground font-semibold">Total Spaces</span>
            </div>
            <div className="text-center md:text-left ml-6 md:ml-10">
              <span className="block text-2xl font-serif text-primary">
                <FactualCounter value={4} suffix="+" delay={0.4} />
              </span>
              <span className="block text-[8px] uppercase tracking-widest text-muted-foreground font-semibold">Sanctuary Zones</span>
            </div>
          </div>
        </div>

        {/* Tab Filters Bar */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12" id="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setLightboxIndex(null); // Reset lightbox when tab changes to avoid Index mismatches
              }}
              className={`relative px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/15'
                  : 'border-border/15 text-muted-foreground hover:border-primary/30 hover:text-foreground bg-card/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.4, ease: [0.21, 1.02, 0.43, 1.01] }}
                onClick={() => setLightboxIndex(index)}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border/15 aspect-[4/3] flex flex-col justify-end p-5 md:p-6 hover:border-primary/45 hover:shadow-[0_12px_36px_rgba(216,196,149,0.08)] cursor-pointer transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/45 to-transparent z-10 transition-opacity duration-300" />
                
                {/* Gold Border Highlight on Hover */}
                <div className="absolute inset-3 border border-primary/0 group-hover:border-primary/20 rounded-2xl pointer-events-none z-20 transition-all duration-500" />

                {/* Text Content */}
                <div className="relative z-20 transition-transform duration-300 group-hover:translate-y-[-4px] text-left">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-primary mb-1.5 block">
                    {categories.find(c => c.id === item.category)?.name}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs font-light leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-sm font-light">No spaces found in this category.</p>
          </div>
        )}
      </div>

      {/* --- Advanced Custom Lightbox --- */}
      <AnimatePresence>
        {lightboxIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 backdrop-blur-md select-none"
            onClick={handleClose}
          >
            {/* Lightbox Header */}
            <div className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-b from-black/60 to-transparent relative z-20">
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-widest font-bold text-primary mb-0.5 block">
                  {categories.find(c => c.id === activeImage.category)?.name}
                </span>
                <span className="text-white text-xs font-medium opacity-80">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className="p-2.5 rounded-full bg-white/10 text-white/85 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="p-2.5 rounded-full bg-white/10 text-white/85 hover:bg-white/20 hover:text-white transition-all cursor-pointer"
                  title="Close Lightbox"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Lightbox Image Stage */}
            <div className="flex-grow flex items-center justify-center relative px-4 md:px-16 overflow-hidden">
              
              {/* Prev Button */}
              {!isMobile && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-6 p-4 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/15 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer z-20"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Central Image Container */}
              <div className="w-full h-full max-w-5xl max-h-[70vh] flex items-center justify-center relative">
                <motion.div
                  key={activeImage.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isZoomed ? 1.5 : 1,
                    // If zoomed, allow panning around, else allow swiping
                    x: 0,
                    y: 0
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", damping: 25, stiffness: 220 }}
                  drag={isZoomed ? true : "x"}
                  dragConstraints={
                    isZoomed 
                      ? { left: -250, right: 250, top: -200, bottom: 200 }
                      : { left: 0, right: 0 }
                  }
                  dragElastic={isZoomed ? 0.25 : 0.4}
                  onDragEnd={(event, info) => {
                    if (isZoomed) return; // Do not trigger swipe navigation when zoomed
                    if (info.offset.x < -60) {
                      handleNext();
                    } else if (info.offset.x > 60) {
                      handlePrev();
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className={`relative max-w-full max-h-full ${isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
                >
                  <img
                    src={activeImage.src}
                    alt={activeImage.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border border-white/5 pointer-events-none"
                  />
                </motion.div>
              </div>

              {/* Next Button */}
              {!isMobile && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-6 p-4 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/15 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer z-20"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Lightbox Footer Detail Overlay */}
            <div 
              className="w-full bg-gradient-to-t from-black/85 via-black/70 to-transparent pt-12 pb-8 px-6 text-center relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-xl mx-auto flex flex-col items-center">
                <h4 className="text-xl font-serif text-white font-semibold mb-2">
                  {activeImage.title}
                </h4>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {activeImage.desc}
                </p>
                {isMobile && (
                  <span className="mt-4 text-[10px] text-white/40 uppercase tracking-widest font-semibold">
                    ← Swipe to view more →
                  </span>
                )}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default React.memo(GalleryPage);
