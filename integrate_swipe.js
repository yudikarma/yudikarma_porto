import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

const PROJECT_CARD_COMPONENT = `interface ProjectCardProps {
  proj: Project;
  isProjectMatch: boolean;
  onSelect: (proj: Project, initialImageIdx: number) => void;
  isRecruiterMode: boolean;
  recruiterHighlightTech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
  isProjectMatch,
  onSelect,
  isRecruiterMode,
  recruiterHighlightTech,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = proj.images && proj.images.length > 0 ? proj.images : (proj.thumbnail ? [proj.thumbnail] : []);

  const navigateCarousel = (newIdx: number, customDirection?: number) => {
    if (customDirection !== undefined) {
      setDirection(customDirection);
    } else {
      setDirection(newIdx > activeImageIdx ? 1 : -1);
    }
    setActiveImageIdx(newIdx);
  };

  const handleDragEnd = (e: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      // Swiped left -> next
      const newIdx = (activeImageIdx + 1) % images.length;
      navigateCarousel(newIdx, 1);
    } else if (info.offset.x > threshold) {
      // Swiped right -> prev
      const newIdx = (activeImageIdx - 1 + images.length) % images.length;
      navigateCarousel(newIdx, -1);
    }
  };

  return (
    <motion.div
      variants={staggerItemVariants}
      layout
      onClick={() => onSelect(proj, activeImageIdx)}
      className={\`relative overflow-hidden flex flex-col h-full rounded-xl transition-all duration-300 ease-out cursor-pointer group \${
        isProjectMatch 
          ? 'bg-gradient-to-br from-white to-emerald-50/10 border-2 border-emerald-500 shadow-lg shadow-emerald-500/15 scale-[1.02] ring-4 ring-emerald-500/10' 
          : 'bg-white border border-outline-variant/60 shadow-sm hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/50'
      }\`}
    >
      {isProjectMatch && (
        <div className="absolute top-3 right-3 z-30 bg-emerald-500 text-white font-mono text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow flex items-center gap-1 animate-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Requirements Match
        </div>
      )}
      
      {/* Carousel Container */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative border-b border-outline-variant/30 group/carousel">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeImageIdx}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full"
          >
            <ImageWithPlaceholder 
              src={images[activeImageIdx]} 
              alt={\`\${proj.name} \${activeImageIdx + 1}\`} 
              className="group-hover:scale-105 transition-transform duration-500"
              containerClassName="w-full h-full"
              category={proj.category}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md border border-outline-variant/40 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm pointer-events-none">
          {proj.category}
        </div>

        {/* Carousel indicators & buttons */}
        {images.length > 1 && (
          <>
            {/* Dots indicators */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-25 flex gap-1.5 bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={\`w-1.5 h-1.5 rounded-full transition-all duration-300 \${
                    idx === activeImageIdx ? 'bg-white scale-110' : 'bg-white/55'
                  }\`}
                />
              ))}
            </div>

            {/* Left and Right Nav Buttons (hidden by default, shown on hover in desktop, always visible on mobile) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIdx = (activeImageIdx - 1 + images.length) % images.length;
                navigateCarousel(newIdx, -1);
              }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIdx = (activeImageIdx + 1) % images.length;
                navigateCarousel(newIdx, 1);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>

      {/* Info Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">
          {proj.role} • {proj.company}
        </span>
        <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {proj.name}
        </h4>
        <p className="text-slate-700 text-sm mb-5 flex-1 leading-relaxed line-clamp-3">
          {proj.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-outline-variant/30">
          {proj.tech.map((t, k) => {
            const IconComponent = getTechIcon(t);
            const isPillMatch = isRecruiterMode && recruiterHighlightTech.some(highlight => 
              t.toLowerCase().includes(highlight.toLowerCase()) || 
              highlight.toLowerCase().includes(t.toLowerCase())
            );
            return (
              <span 
                key={k} 
                className={\`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded transition-colors border font-medium \${
                  isPillMatch 
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-800 scale-105 ring-1 ring-emerald-500/20 font-bold' 
                    : 'bg-slate-50 border-outline-variant/40 text-slate-600 hover:bg-slate-100 text-opacity-100'
                }\`}
              >
                {IconComponent && <IconComponent className={\`w-3 h-3 \${isPillMatch ? 'text-emerald-600' : 'text-slate-500'}\`} />}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};`;

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Insert ProjectCard component right before "export default function App()"
const appStartMarker = 'export default function App()';
const appStartIndex = content.indexOf(appStartMarker);
if (appStartIndex === -1) {
  console.error('Could not find App startup in App.tsx');
  process.exit(1);
}

content = content.slice(0, appStartIndex) + PROJECT_CARD_COMPONENT + '\n\n' + content.slice(appStartIndex);

// 2. Replace handleSelectProject definition and add handleDetailDragEnd below it
const oldHandleSelectStr = `  const handleSelectProject = (proj: Project | null) => {
    setSelectedProject(proj);
    setActiveImageIdx(0);
    setCarouselDirection(0);
  };`;

const newHandleSelectStr = `  const handleSelectProject = (proj: Project | null, initialImageIdx = 0) => {
    setSelectedProject(proj);
    setActiveImageIdx(initialImageIdx);
    setCarouselDirection(0);
  };

  const handleDetailDragEnd = (e: any, info: any) => {
    if (!selectedProject || !selectedProject.images) return;
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
  };`;

if (!content.includes(oldHandleSelectStr)) {
  console.error('Could not find old handleSelectProject definition in App.tsx');
  process.exit(1);
}
content = content.replace(oldHandleSelectStr, newHandleSelectStr);

// 3. Replace the gallery grid mapping section
// The map looks like:
//                 {ALL_PROJECTS.filter(p => {
//                   const matchesScope = galleryScope === 'All' || p.projectType === galleryScope;
//                   const matchesCategory = galleryFilter === 'All' || p.category === galleryFilter;
//                   return matchesScope && matchesCategory;
//                 }).map((proj) => {
//                   const isProjectMatch = isRecruiterMode && ...
//                   return (
//                     <motion.div
//                       key={proj.name}
//                       ...
//                     </motion.div>
//                   );
//                 })}

const mapStart = '.map((proj) => {';
const mapStartIndex = content.indexOf(mapStart, content.indexOf('Gallery Grid'));

if (mapStartIndex === -1) {
  console.error('Could not find map function inside Gallery Grid in App.tsx');
  process.exit(1);
}

// Let's find the closing map call. We search for the map return and matching end
// Since we know the return starts with:
//                   return (
//                     <motion.div
//                       key={proj.name}
//                       variants={staggerItemVariants}

const searchStr = `                  return (
                    <motion.div
                      key={proj.name}`;

const matchIdx = content.indexOf(searchStr, mapStartIndex);
if (matchIdx === -1) {
  console.error('Could not find motion.div inside map function in App.tsx');
  process.exit(1);
}

// Find the corresponding end of the motion.div return block
// It ends with:
//                     </motion.div>
//                   );
//                 })}

const searchEndStr = `                    </motion.div>
                  );
                })`;

const endIdx = content.indexOf(searchEndStr, matchIdx);
if (endIdx === -1) {
  console.error('Could not find end of map block in App.tsx');
  process.exit(1);
}

const originalMapBlock = content.slice(matchIdx, endIdx + searchEndStr.length);

const newMapBlock = `                  return (
                    <ProjectCard
                      key={proj.name}
                      proj={proj}
                      isProjectMatch={isProjectMatch}
                      onSelect={(p, idx) => handleSelectProject(p, idx)}
                      isRecruiterMode={isRecruiterMode}
                      recruiterHighlightTech={recruiterHighlightTech}
                    />
                  );
                })`;

content = content.replace(originalMapBlock, newMapBlock);

// 4. Update the modal motion.img to support drag and drop swipe, and use transition-opacity instead of transition-all
const modalImgOld = `                      <AnimatePresence initial={false} custom={carouselDirection}>
                        <motion.img 
                          key={activeImageIdx}
                          src={selectedProject.images[activeImageIdx]} 
                          alt={\`\${selectedProject.name} screenshot \${activeImageIdx + 1}\`} 
                          custom={carouselDirection}
                          variants={carouselVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          className={\`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out \${
                            carouselImagesLoaded[selectedProject.images[activeImageIdx]] 
                              ? 'opacity-100 blur-0 scale-100 z-10' 
                              : 'opacity-0 blur-[8px] scale-[1.02] z-0'
                          }\`}
                          onLoad={() => setCarouselImagesLoaded(prev => ({ ...prev, [selectedProject.images![activeImageIdx]]: true }))}
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>`;

const modalImgNew = `                      <AnimatePresence initial={false} custom={carouselDirection}>
                        <motion.img 
                          key={activeImageIdx}
                          src={selectedProject.images[activeImageIdx]} 
                          alt={\`\${selectedProject.name} screenshot \${activeImageIdx + 1}\`} 
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
                          className={\`absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing select-none transition-opacity duration-550 ease-out \${
                            carouselImagesLoaded[selectedProject.images[activeImageIdx]] 
                              ? 'opacity-100 blur-0 scale-100 z-10' 
                              : 'opacity-0 blur-[8px] scale-[1.02] z-0'
                          }\`}
                          onLoad={() => setCarouselImagesLoaded(prev => ({ ...prev, [selectedProject.images![activeImageIdx]]: true }))}
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>`;

if (!content.includes(modalImgOld)) {
  // Let's print out lines around the modal image to see why it didn't match
  console.error('Could not find modal motion.img placeholder in App.tsx');
  process.exit(1);
}

content = content.replace(modalImgOld, modalImgNew);

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx integrated swipe components successfully!');
