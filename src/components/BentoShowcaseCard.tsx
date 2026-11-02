import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  ExternalLink,
  Laptop,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Lock
} from 'lucide-react';
import { ImageWithPlaceholder } from './ImageWithPlaceholder';
import { Project } from '../types';

interface BentoShowcaseCardProps {
  proj: Project;
  featured?: boolean;
  isProjectMatch?: boolean;
  onSelect: (proj: Project, imageIdx?: number) => void;
  isRecruiterMode?: boolean;
  recruiterHighlightTech?: string[];
  mockupType?: 'browser' | 'phone' | 'dual' | 'card';
}

export const BentoShowcaseCard: React.FC<BentoShowcaseCardProps> = ({
  proj,
  featured = false,
  isProjectMatch = false,
  onSelect,
  isRecruiterMode = false,
  recruiterHighlightTech = [],
  mockupType = 'card'
}) => {
  const images = proj.images && proj.images.length > 0 ? proj.images : (proj.thumbnail ? [proj.thumbnail] : []);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigateCarousel = (newIdx: number, customDir?: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDirection(customDir !== undefined ? customDir : (newIdx > activeImgIdx ? 1 : -1));
    setActiveImgIdx(newIdx);
  };

  const handleDragEnd = (e: any, info: any) => {
    const threshold = 40;
    if (info.offset.x < -threshold) {
      const nextIdx = (activeImgIdx + 1) % images.length;
      navigateCarousel(nextIdx, 1);
    } else if (info.offset.x > threshold) {
      const prevIdx = (activeImgIdx - 1 + images.length) % images.length;
      navigateCarousel(prevIdx, -1);
    }
  };

  const isDualDevice = mockupType === 'dual' || (featured && images.length >= 2);
  const isBrowserMockup = mockupType === 'browser' || (!isDualDevice && proj.category?.includes('Web'));
  const isPhoneMockup = mockupType === 'phone' || (!isDualDevice && !isBrowserMockup);

  // If featured, we render an expansive 2-column Bento card
  if (featured) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => onSelect(proj, activeImgIdx)}
        className={`group relative overflow-hidden rounded-2xl bg-white border transition-all duration-300 cursor-pointer col-span-1 lg:col-span-2 shadow-sm hover:shadow-xl hover:border-primary/50 ${
          isProjectMatch 
            ? 'ring-2 ring-emerald-500/50 border-emerald-500 bg-gradient-to-br from-white via-white to-emerald-50/20' 
            : 'border-outline-variant/60 hover:-translate-y-1'
        }`}
      >
        {/* Subtle decorative background gradient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 via-sky-500/5 to-transparent rounded-bl-full pointer-events-none" />

        {/* Top Badging Bar */}
        <div className="p-6 md:p-8 pb-4 flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant/30">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary text-white shadow-sm">
              <Sparkles className="w-3 h-3 text-sky-200" />
              Flagship Showcase
            </span>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hidden sm:inline">
              {proj.company || 'Enterprise Solutions'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isProjectMatch && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Match
              </span>
            )}
            <span className="text-xs font-bold text-primary group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
              Explore Architecture →
            </span>
          </div>
        </div>

        {/* Main Grid: Content (Left) + Interactive Device Showcase (Right) */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Spec Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
            <div>
              <h3 className="font-display font-bold text-slate-900 text-2xl md:text-3xl tracking-tight group-hover:text-primary transition-colors">
                {proj.name}
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {proj.desc}
              </p>
            </div>

            {/* Key Capabilities Bullet Points */}
            <div className="bg-slate-50/80 border border-outline-variant/40 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Enterprise Dual-Channel Security Architecture
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">
                Adhering to strict enterprise banking standards with hardware-backed encryption, anti-tampering, and real-time validation.
              </p>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                Integrated Technology Stack
              </span>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, idx) => {
                  const isMatch = isRecruiterMode && recruiterHighlightTech.some(h => 
                    t.toLowerCase().includes(h.toLowerCase())
                  );
                  return (
                    <span 
                      key={idx}
                      className={`font-mono text-[10px] px-2.5 py-1 rounded-md border font-medium transition-all ${
                        isMatch 
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' 
                          : 'bg-white border-outline-variant/50 text-slate-700 shadow-2xs'
                      }`}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Device Mockup Frame */}
          <div className="lg:col-span-7 w-full flex flex-col items-center justify-center">
            
            {/* Browser Frame Mockup */}
            <div className="w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl relative group/frame">
              {/* Browser Window Header Chrome */}
              <div className="bg-slate-800 px-4 py-2.5 border-b border-slate-700/80 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                {/* Browser URL bar */}
                <div className="bg-slate-900/90 text-slate-400 text-[10px] font-mono px-4 py-1 rounded-md border border-slate-700/60 flex items-center gap-2 w-3/5 max-w-xs truncate justify-center">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="text-slate-300 truncate">https://secure.banking.local/console</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 font-bold">
                  {activeImgIdx + 1} / {images.length}
                </div>
              </div>

              {/* Main Display Screen */}
              <div className="aspect-[16/10] w-full bg-slate-950 relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={activeImgIdx}
                    custom={direction}
                    initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    drag={images.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.8}
                    onDragEnd={handleDragEnd}
                    className="absolute inset-0 w-full h-full"
                  >
                    <ImageWithPlaceholder
                      src={images[activeImgIdx]}
                      alt={`${proj.name} ${activeImgIdx + 1}`}
                      containerClassName="w-full h-full"
                      category={proj.category}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left & Right navigation overlays */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        const newIdx = (activeImgIdx - 1 + images.length) % images.length;
                        navigateCarousel(newIdx, -1, e);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg border border-slate-700/60 transition-all opacity-90 md:opacity-0 md:group-hover/frame:opacity-100 z-20 cursor-pointer"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        const newIdx = (activeImgIdx + 1) % images.length;
                        navigateCarousel(newIdx, 1, e);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full shadow-lg border border-slate-700/60 transition-all opacity-90 md:opacity-0 md:group-hover/frame:opacity-100 z-20 cursor-pointer"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail pagination pills */}
            {images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-1 scrollbar-none">
                {images.slice(0, 6).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => navigateCarousel(idx, undefined, e)}
                    className={`relative w-14 h-9 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                      activeImgIdx === idx 
                        ? 'border-primary ring-2 ring-primary/20 scale-105 shadow-sm' 
                        : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ImageWithPlaceholder
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      containerClassName="w-full h-full"
                      isThumbnail={true}
                    />
                  </button>
                ))}
                {images.length > 6 && (
                  <div className="flex items-center justify-center px-2 text-[10px] font-mono text-slate-400 font-bold">
                    +{images.length - 6} more
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </motion.div>
    );
  }

  // Standard Compact Bento Card (1-Column)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => onSelect(proj, activeImgIdx)}
      className={`group relative overflow-hidden flex flex-col h-full rounded-2xl bg-white border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:border-primary/50 ${
        isProjectMatch 
          ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-gradient-to-b from-white to-emerald-50/10' 
          : 'border-outline-variant/60 hover:-translate-y-1'
      }`}
    >
      {/* Device Header Bar */}
      <div className="bg-slate-100 border-b border-outline-variant/40 px-3.5 py-2 flex items-center justify-between text-slate-600">
        <div className="flex items-center gap-1.5">
          {isBrowserMockup ? (
            <>
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <div className="w-2 h-2 rounded-full bg-slate-300" />
            </>
          ) : (
            <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 font-semibold">
              <Smartphone className="w-3 h-3 text-slate-400" />
              <span>Mobile Client</span>
            </div>
          )}
        </div>
        <span className="text-[9px] font-bold tracking-wider uppercase text-slate-500 bg-white/80 border border-slate-200/80 px-2 py-0.5 rounded-full">
          {proj.category}
        </span>
      </div>

      {/* Screen Container */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative group/carousel">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeImgIdx}
            custom={direction}
            initial={{ x: direction > 0 ? 250 : -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 250 : -250, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full"
          >
            <ImageWithPlaceholder
              src={images[activeImgIdx]}
              alt={`${proj.name} ${activeImgIdx + 1}`}
              containerClassName="w-full h-full"
              category={proj.category}
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                const newIdx = (activeImgIdx - 1 + images.length) % images.length;
                navigateCarousel(newIdx, -1, e);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity z-20 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                const newIdx = (activeImgIdx + 1) % images.length;
                navigateCarousel(newIdx, 1, e);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity z-20 cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Bottom dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1 bg-slate-900/50 backdrop-blur-xs px-2 py-0.5 rounded-full pointer-events-none">
              {images.slice(0, 5).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1 h-1 rounded-full transition-all ${i === activeImgIdx ? 'bg-white scale-125' : 'bg-white/40'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Info Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
          <span>{proj.company || 'Engineering'}</span>
          {proj.role && <span className="text-slate-500 font-medium">{proj.role}</span>}
        </div>

        <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {proj.name}
        </h4>

        <p className="text-slate-600 text-xs mb-4 flex-1 leading-relaxed line-clamp-2">
          {proj.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-outline-variant/30 mt-auto">
          {proj.tech.slice(0, 4).map((t, idx) => {
            const isMatch = isRecruiterMode && recruiterHighlightTech.some(h => 
              t.toLowerCase().includes(h.toLowerCase())
            );
            return (
              <span 
                key={idx}
                className={`font-mono text-[9px] px-2 py-0.5 rounded border ${
                  isMatch 
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold' 
                    : 'bg-slate-50 border-outline-variant/40 text-slate-600'
                }`}
              >
                {t}
              </span>
            );
          })}
          {proj.tech.length > 4 && (
            <span className="text-[9px] font-mono text-slate-400 self-center">
              +{proj.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
