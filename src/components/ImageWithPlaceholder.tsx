import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Globe, Code2, Cpu, Wrench, ShieldAlert, Image as ImageIcon } from 'lucide-react';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  category?: string;
  isThumbnail?: boolean;
}

export const ImageWithPlaceholder: React.FC<ImageWithPlaceholderProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  category = "",
  isThumbnail = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset states if src changes and check if cached
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);

    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  // Helper to get category-based icon for the skeleton screen
  const getCategoryIcon = () => {
    const cat = category.toLowerCase();
    if (cat.includes('mobile') || cat.includes('android')) {
      return <Smartphone className="w-8 h-8 text-slate-300" />;
    }
    if (cat.includes('cross') || cat.includes('flutter')) {
      return <Globe className="w-8 h-8 text-slate-300" />;
    }
    if (cat.includes('architecture') || cat.includes('mvvm')) {
      return <Cpu className="w-8 h-8 text-slate-300" />;
    }
    if (cat.includes('library') || cat.includes('tools')) {
      return <Wrench className="w-8 h-8 text-slate-300" />;
    }
    if (cat.includes('security') || cat.includes('quality')) {
      return <ShieldAlert className="w-8 h-8 text-slate-300" />;
    }
    return <ImageIcon className="w-8 h-8 text-slate-300" />;
  };

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${containerClassName}`}>
      {/* Inline styles for the custom high-performance shimmer keyframe */}
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

      {/* 1. Shimmer Skeleton Screen / Placeholder State */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center animate-custom-shimmer z-10"
          id="skeleton-shimmer"
        >
          {/* Centered category icon or general icon with beautiful soft fade pulse */}
          <div className="flex flex-col items-center gap-2.5 animate-pulse duration-1000">
            <div className="p-3 bg-white/60 rounded-full border border-slate-200/50 shadow-sm">
              {getCategoryIcon()}
            </div>
            {!isThumbnail && (
              <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                Loading Preview...
              </span>
            )}
          </div>
        </div>
      )}

      {/* 2. Error Fallback state */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 border border-slate-200/50 z-10 p-4 text-center">
          <ShieldAlert className="w-8 h-8 text-rose-300 mb-2" />
          <span className="text-[10px] font-mono tracking-wider text-slate-400 font-bold uppercase">
            Image Unavailable
          </span>
        </div>
      )}

      {/* 3. Blurred Background copy for portrait/vertical images */}
      {isLoaded && !hasError && !isThumbnail && (
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 select-none pointer-events-none scale-105"
          referrerPolicy="no-referrer"
        />
      )}

      {/* 4. Real High-Res Image with Blur-Up Transition */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full transition-all duration-700 ease-out ${
          isThumbnail ? 'object-cover' : 'relative z-10 object-contain'
        } ${
          isLoaded 
            ? 'opacity-100 blur-0 scale-100' 
            : 'opacity-0 blur-[10px] scale-[1.03]'
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
