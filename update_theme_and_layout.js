import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Update default theme to light (ignore prefers-color-scheme)
const oldThemeHook = `  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });`;

const newThemeHook = `  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'light';
    }
    return 'light';
  });`;

if (content.includes(oldThemeHook)) {
  content = content.replace(oldThemeHook, newThemeHook);
}

// 2. Add activeSection state and update scroll useEffect hook
const oldStateMarker = `  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);`;
const newStateMarker = `  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');`;

if (content.includes(oldStateMarker) && !content.includes('activeSection')) {
  content = content.replace(oldStateMarker, newStateMarker);
}

const oldScrollHook = `  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`;

const newScrollHook = `  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['overview', 'credentials', 'stack', 'experience', 'gallery', 'endorsements', 'education'];
      const scrollPosition = window.scrollY + 250;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);`;

if (content.includes(oldScrollHook)) {
  content = content.replace(oldScrollHook, newScrollHook);
}

// 3. Make the "Available for Opportunities" badge text uppercase
content = content.replace('Available for Opportunities', 'AVAILABLE FOR OPPORTUNITIES');

// 4. Change rounded-xl to rounded-full for the action card icon containers
const oldExperienceIcon = `                  <div 
                    onClick={() => scrollToSection('experience')}
                    className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"
                  >`;
const newExperienceIcon = `                  <div 
                    onClick={() => scrollToSection('experience')}
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                  >`;
if (content.includes(oldExperienceIcon)) {
  content = content.replace(oldExperienceIcon, newExperienceIcon);
}

const oldResumeIcon = `                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </div>`;
const newResumeIcon = `                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </div>`;
if (content.includes(oldResumeIcon)) {
  content = content.replace(oldResumeIcon, newResumeIcon);
}

const oldContactIcon = `                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>`;
const newContactIcon = `                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>`;
if (content.includes(oldContactIcon)) {
  content = content.replace(oldContactIcon, newContactIcon);
}

const oldRecruiterIcon = `                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className={\`w-5 h-5 \${isRecruiterMode ? 'animate-bounce text-emerald-500' : 'animate-pulse'}\`} />
                  </div>`;
const newRecruiterIcon = `                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className={\`w-5 h-5 \${isRecruiterMode ? 'animate-bounce text-emerald-500' : 'animate-pulse'}\`} />
                  </div>`;
if (content.includes(oldRecruiterIcon)) {
  content = content.replace(oldRecruiterIcon, newRecruiterIcon);
}

// 5. Capitalize Action Buttons inside widgets
content = content.replace('Explore', 'EXPLORE');
content = content.replace('Export', 'EXPORT');
content = content.replace('Message', 'MESSAGE');
content = content.replace('Configure', 'CONFIGURE');
content = content.replace('Active ✨', 'ACTIVE ✨');

// 6. Highlight active menu button in Desktop Nav Header
const oldDesktopNav = `          {/* Desktop Nav */}
          <nav className={\`hidden lg:flex items-center gap-1 border rounded-full p-1 transition-all duration-300 \${
            scrolled 
              ? 'bg-slate-50 border-outline-variant/60 shadow-sm' 
              : 'bg-white/70 backdrop-blur-sm border-outline-variant/40 shadow-sm'
          }\`}>
            <button onClick={() => scrollToSection('overview')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Overview</button>
            <button onClick={() => scrollToSection('credentials')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Certifications</button>
            <button onClick={() => scrollToSection('stack')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Tech Stack</button>
            <button onClick={() => scrollToSection('experience')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Experience</button>
            <button onClick={() => scrollToSection('gallery')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Gallery</button>
            <button onClick={() => scrollToSection('endorsements')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Endorsements</button>
            <button onClick={() => scrollToSection('education')} className="px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant hover:text-primary hover:bg-white transition-all">Education</button>
          </nav>`;

const newDesktopNav = `          {/* Desktop Nav */}
          <nav className={\`hidden lg:flex items-center gap-1 border rounded-full p-1 transition-all duration-300 \${
            scrolled 
              ? 'bg-slate-50 border-outline-variant/60 shadow-sm' 
              : 'bg-white/70 backdrop-blur-sm border-outline-variant/40 shadow-sm'
          }\`}>
            <button onClick={() => scrollToSection('overview')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'overview' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Overview</button>
            <button onClick={() => scrollToSection('credentials')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'credentials' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Certifications</button>
            <button onClick={() => scrollToSection('stack')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'stack' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Tech Stack</button>
            <button onClick={() => scrollToSection('experience')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'experience' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Experience</button>
            <button onClick={() => scrollToSection('gallery')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'gallery' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Gallery</button>
            <button onClick={() => scrollToSection('endorsements')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'endorsements' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Endorsements</button>
            <button onClick={() => scrollToSection('education')} className={\`px-4 py-2 rounded-full text-xs font-bold transition-all \${activeSection === 'education' ? 'bg-white text-primary shadow-sm font-extrabold' : 'text-on-surface-variant hover:text-primary hover:bg-white/50'}\`}>Education</button>
          </nav>`;

if (content.includes(oldDesktopNav)) {
  content = content.replace(oldDesktopNav, newDesktopNav);
}

// 7. Programmatically replace the buttons in the mobile navigation dropdown to inject activeSection styling
const navSectionKeys = [
  { section: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
  { section: 'experience', label: 'Experience', icon: 'History' },
  { section: 'gallery', label: 'Project Gallery', icon: 'Grid' },
  { section: 'credentials', label: 'Certifications', icon: 'Award' },
  { section: 'stack', label: 'Tech Stack', icon: 'Layers' },
  { section: 'endorsements', label: 'Endorsements', icon: 'MessageSquare' },
  { section: 'education', label: 'Education', icon: 'Award' }
];

for (const item of navSectionKeys) {
  // Try to match the button with simple flexible regex matching scrollToSection('section') and ending with </button>
  const regex = new RegExp(
    `\\s*<button\\s+onClick=\\{\\(\\)\\s*=>\\s*\\{\\s*scrollToSection\\('${item.section}'\\);\\s*setMobileMenuOpen\\(false\\);\\s*\\}\\}\\s+className="[^"]+"\\s*>\\s*${item.label}\\s*<${item.icon}\\s+className="[^"]+"\\s*/>\\s*</button>`,
    'g'
  );

  const newButtonString = `\n          <button 
            onClick={() => { scrollToSection('${item.section}'); setMobileMenuOpen(false); }} 
            className={\`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border \${
              activeSection === '${item.section}' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }\`}
          >
            ${item.label} <${item.icon} className="w-5 h-5 text-on-surface-variant" />
          </button>`;

  content = content.replace(regex, newButtonString);
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx theme defaults and layout adjusted successfully!');
