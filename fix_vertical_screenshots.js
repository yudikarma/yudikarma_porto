import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_PLACEHOLDER_PATH = path.join(__dirname, 'src', 'components', 'ImageWithPlaceholder.tsx');
const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

// 1. Modify ImageWithPlaceholder.tsx
let placeholderContent = fs.readFileSync(IMAGE_PLACEHOLDER_PATH, 'utf8');

const oldPlaceholderImg = `      {/* 3. Real High-Res Image with Blur-Up Transition */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={\`w-full h-full object-cover transition-all duration-700 ease-out \${
          isLoaded 
            ? 'opacity-100 blur-0 scale-100' 
            : 'opacity-0 blur-[10px] scale-[1.03]'
        } \${className}\`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />`;

const newPlaceholderImg = `      {/* 3. Blurred Background copy for portrait/vertical images */}
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
        className={\`w-full h-full transition-all duration-700 ease-out \${
          isThumbnail ? 'object-cover' : 'relative z-10 object-contain'
        } \${
          isLoaded 
            ? 'opacity-100 blur-0 scale-100' 
            : 'opacity-0 blur-[10px] scale-[1.03]'
        } \${className}\`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        referrerPolicy="no-referrer"
      />`;

if (placeholderContent.includes(oldPlaceholderImg)) {
  placeholderContent = placeholderContent.replace(oldPlaceholderImg, newPlaceholderImg);
  fs.writeFileSync(IMAGE_PLACEHOLDER_PATH, placeholderContent, 'utf8');
  console.log('ImageWithPlaceholder.tsx updated with object-contain and blurred ambient background.');
} else {
  console.error('Could not find old image rendering block in ImageWithPlaceholder.tsx');
}

// 2. Modify App.tsx for detail modal main view image
let appContent = fs.readFileSync(APP_PATH, 'utf8');

const oldModalImgBlock = `                      <AnimatePresence initial={false} custom={carouselDirection}>
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

const newModalImgBlock = `                      {carouselImagesLoaded[selectedProject.images[activeImageIdx]] && (
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
                          className={\`absolute inset-0 w-full h-full object-contain cursor-grab active:cursor-grabbing select-none transition-opacity duration-550 ease-out z-10 \${
                            carouselImagesLoaded[selectedProject.images[activeImageIdx]] 
                              ? 'opacity-100 blur-0 scale-100' 
                              : 'opacity-0 blur-[8px] scale-[1.02]'
                          }\`}
                          onLoad={() => setCarouselImagesLoaded(prev => ({ ...prev, [selectedProject.images![activeImageIdx]]: true }))}
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>`;

if (appContent.includes(oldModalImgBlock)) {
  appContent = appContent.replace(oldModalImgBlock, newModalImgBlock);
  fs.writeFileSync(APP_PATH, appContent, 'utf8');
  console.log('App.tsx detail modal image updated with object-contain and blurred ambient background.');
} else {
  console.error('Could not find old modal image block in App.tsx');
}
