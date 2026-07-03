import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Smartphone, 
  ShieldCheck, 
  Database, 
  Globe, 
  Cpu, 
  Server, 
  Layers, 
  Search, 
  LineChart, 
  Code2 
} from 'lucide-react';
import { ImageWithPlaceholder } from './ImageWithPlaceholder';
import { Project } from '../types';

interface ProjectDetailsModalProps {
  selectedProject: Project;
  initialImageIdx: number;
  onClose: () => void;
}

const getTechIcon = (techName: string) => {
  const name = techName.toLowerCase();
  
  if (name.includes('android') || name.includes('kotlin') || name.includes('flutter') || name.includes('dart') || name.includes('mobile') || name.includes('ios')) {
    return Smartphone;
  }
  if (name.includes('security') || name.includes('token') || name.includes('onespan') || name.includes('dexguard') || name.includes('cryptography') || name.includes('mtls') || name.includes('testing') || name.includes('bug') || name.includes('qa')) {
    return ShieldCheck;
  }
  if (name.includes('database') || name.includes('sqlite') || name.includes('room') || name.includes('sync') || name.includes('localstorage')) {
    return Database;
  }
  if (name.includes('web portal') || name.includes('react') || name.includes('tailwind') || name.includes('globe')) {
    return Globe;
  }
  if (name.includes('camera') || name.includes('exif') || name.includes('image')) {
    return Camera;
  }
  if (name.includes('voip') || name.includes('webrtc') || name.includes('avaya') || name.includes('sip') || name.includes('websockets') || name.includes('operations')) {
    return Cpu;
  }
  if (name.includes('api') || name.includes('rest') || name.includes('fcm') || name.includes('push') || name.includes('payment') || name.includes('gateway') || name.includes('integration') || name.includes('ppob')) {
    return Server;
  }
  if (name.includes('architecture') || name.includes('mvvm') || name.includes('structure') || name.includes('design')) {
    return Layers;
  }
  if (name.includes('search') || name.includes('find') || name.includes('filter')) {
    return Search;
  }
  if (name.includes('chart') || name.includes('recharts') || name.includes('d3') || name.includes('rate') || name.includes('trading') || name.includes('market') || name.includes('gold') || name.includes('finance') || name.includes('planning') || name.includes('pos') || name.includes('inventory')) {
    return LineChart;
  }
  
  return Code2; // Fallback
};

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  selectedProject,
  initialImageIdx,
  onClose
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(initialImageIdx);
  const [carouselDirection, setCarouselDirection] = useState(0);
  const [carouselImagesLoaded, setCarouselImagesLoaded] = useState<Record<string, boolean>>({});

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalContentPanelVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.95, opacity: 0 }
  };

  const modalElementVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const navigateCarousel = (newIdx: number, customDirection?: number) => {
    if (customDirection !== undefined) {
      setCarouselDirection(customDirection);
    } else {
      setCarouselDirection(newIdx > activeImageIdx ? 1 : -1);
    }
    setActiveImageIdx(newIdx);
  };

  const handleDetailDragEnd = (e: any, info: any) => {
    if (!selectedProject.images) return;
    const threshold = 50;
    if (info.offset.x < -threshold) {
      // Swiped left -> next
      const newIdx = (activeImageIdx + 1) % selectedProject.images.length;
      navigateCarousel(newIdx, 1);
    } else if (info.offset.x > threshold) {
      // Swiped right -> prev
      const newIdx = (activeImageIdx - 1 + selectedProject.images.length) % selectedProject.images.length;
      navigateCarousel(newIdx, -1);
    }
  };

  return (
    <motion.div 
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        variants={modalContentPanelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-outline-variant/40 px-6 md:px-8 py-4 flex justify-between items-center z-10">
          <h2 className="font-display text-2xl font-bold text-on-surface">{selectedProject.name}</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-on-surface-variant hover:bg-slate-100 rounded-full transition-colors shrink-0"
            aria-label="Close Details Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 md:p-8 flex flex-col gap-8">
          {/* Image Carousel / Horizontal Scroll */}
          {selectedProject.images && selectedProject.images.length > 0 ? (
            <motion.div variants={modalElementVariants} className="flex flex-col gap-3">
              {/* Main Display Image */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-outline-variant/40 shadow-sm bg-slate-100 relative group">
                <style>{`
                  @keyframes custom-shimmer {
                    0% {
                      background-position: -200% 0;
                    }
                    100% {
                      background-position: 200% 0;
                    }
                  }
                  .animate-custom-shimmer {
                    background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
                    background-size: 200% 100%;
                    animation: custom-shimmer 1.8s infinite linear;
                  }
                `}</style>

                {/* Premium Shimmer Skeleton Background */}
                {!carouselImagesLoaded[selectedProject.images[activeImageIdx]] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center animate-custom-shimmer z-0">
                    <div className="flex flex-col items-center gap-2.5 animate-pulse duration-1000">
                      <div className="p-3 bg-white/60 rounded-full border border-slate-200/50 shadow-sm text-slate-400">
                        <Camera className="w-8 h-8 text-slate-300" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                        Loading Screenshot...
                      </span>
                    </div>
                  </div>
                )}

                {carouselImagesLoaded[selectedProject.images[activeImageIdx]] && (
                  <img
                    src={selectedProject.images[activeImageIdx]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 select-none pointer-events-none scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}

                <AnimatePresence initial={false} custom={carouselDirection}>
                  <motion.img 
                    key={activeImageIdx}
                    src={selectedProject.images[activeImageIdx]} 
                    alt={`${selectedProject.name} screenshot ${activeImageIdx + 1}`} 
                    custom={carouselDirection}
                    variants={carouselVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.8}
                    onDragEnd={handleDetailDragEnd}
                    className={`absolute inset-0 w-full h-full object-contain cursor-grab active:cursor-grabbing select-none transition-opacity duration-550 ease-out z-10 ${
                      carouselImagesLoaded[selectedProject.images[activeImageIdx]] 
                        ? 'opacity-100 blur-0 scale-100' 
                        : 'opacity-0 blur-[8px] scale-[1.02]'
                    }`}
                    onLoad={() => setCarouselImagesLoaded(prev => ({ ...prev, [selectedProject.images![activeImageIdx]]: true }))}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                
                {/* Overlay Indicator Badge */}
                <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider shadow z-10">
                  {activeImageIdx + 1} / {selectedProject.images.length}
                </div>

                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() => {
                        const newIdx = (activeImageIdx - 1 + selectedProject.images!.length) % selectedProject.images!.length;
                        navigateCarousel(newIdx, -1);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-on-surface rounded-full shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all focus:opacity-100 cursor-pointer border border-outline-variant/30 flex items-center justify-center hover:scale-105 active:scale-95 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        const newIdx = (activeImageIdx + 1) % selectedProject.images!.length;
                        navigateCarousel(newIdx, 1);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white text-on-surface rounded-full shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all focus:opacity-100 cursor-pointer border border-outline-variant/30 flex items-center justify-center hover:scale-105 active:scale-95 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Horizontal Scroll Thumbnails Strip */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-200">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => navigateCarousel(idx)}
                      className={`relative aspect-[4/3] w-20 md:w-24 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        activeImageIdx === idx 
                          ? 'border-primary scale-[1.02] ring-2 ring-primary/10 shadow-sm' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <ImageWithPlaceholder 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        containerClassName="w-full h-full"
                        category={selectedProject.category}
                        isThumbnail={true}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          ) : selectedProject.thumbnail ? (
            <motion.div variants={modalElementVariants} className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-outline-variant/40 shadow-sm bg-slate-50 relative">
              <ImageWithPlaceholder 
                src={selectedProject.thumbnail} 
                alt={selectedProject.name} 
                containerClassName="w-full h-full"
                category={selectedProject.category}
              />
            </motion.div>
          ) : null}

          {/* Project Action Links */}
          {(selectedProject.demoUrl || selectedProject.playStoreUrl) && (
            <motion.div variants={modalElementVariants} className="flex flex-wrap gap-3.5 p-4 bg-slate-50 border border-outline-variant/60 rounded-xl">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-primary/95 hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Live Demo
                </a>
              )}
              {selectedProject.playStoreUrl && (
                <a
                  href={selectedProject.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-slate-800 hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  View Google Play Store
                </a>
              )}
            </motion.div>
          )}

          <motion.div variants={modalElementVariants} className="flex flex-wrap gap-2">
            {selectedProject.tech.map((t, k) => {
              const IconComponent = getTechIcon(t);
              return (
                <span key={k} className="inline-flex items-center gap-1.5 font-mono text-[11px] bg-slate-50 border border-outline-variant/60 px-3 py-1.5 rounded text-on-surface font-medium shadow-sm hover:bg-slate-100 transition-colors">
                  {IconComponent && <IconComponent className="w-3.5 h-3.5 text-slate-500" />}
                  {t}
                </span>
              );
            })}
          </motion.div>

          <motion.div variants={modalElementVariants}>
            <h3 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">Project Description</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {selectedProject.desc}
            </p>
          </motion.div>

          <motion.div variants={modalElementVariants}>
            <h3 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">Technical Documentation</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {selectedProject.technicalDoc}
            </p>
          </motion.div>

          <motion.div variants={modalElementVariants}>
            <h3 className="text-[11px] font-bold text-primary uppercase tracking-widest mb-3">Key Collaborators</h3>
            <ul className="list-disc list-inside text-on-surface-variant text-sm space-y-2 marker:text-primary">
              {selectedProject.collaborators.map((collab, idx) => (
                <li key={idx} className="pl-2">{collab}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsModal;
