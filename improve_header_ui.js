import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

const oldHeaderBlock = `      <header className={\`fixed top-0 inset-x-0 h-16 lg:h-20 z-40 flex items-center justify-center transition-all duration-300 \${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-outline-variant/50 shadow-md shadow-slate-200/50' 
          : 'bg-transparent border-b border-transparent'
      }\`}>
        <div className="w-full max-w-5xl px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-primary font-display font-bold shadow-sm">
              YK
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold text-on-surface tracking-tight leading-none">Yudi Karma</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1 leading-none">Software Engineer</div>
            </div>
          </div>

          {/* Desktop Nav */}
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
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => setIsRecruiterMode(true)}
              className={\`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all cursor-pointer mr-1 shadow-sm \${
                isRecruiterMode 
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100' 
                  : 'border-outline-variant/60 bg-white hover:bg-slate-100 text-on-surface'
              }\`}
              title="Activate Recruiter Suite with Custom PDF Generator"
            >
              <Award className={\`w-3.5 h-3.5 \${isRecruiterMode ? 'text-emerald-600 animate-pulse' : 'text-primary'}\`} />
              <span>Recruiter Mode</span>
            </button>
            <button 
              onClick={handlePrint} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/60 bg-white hover:bg-slate-100 text-xs font-bold text-on-surface shadow-sm transition-all cursor-pointer mr-1 group"
              title="Export formatted PDF Resume"
            >
              <Printer className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
              <span>Export PDF</span>
            </button>
            <a href="https://github.com/yudikarma" target="_blank" rel="noopener noreferrer" className="p-2 text-on-surface-variant hover:text-primary transition-colors" title="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yudikarma" target="_blank" rel="noopener noreferrer" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://yudikarma.page.link/6RQi" target="_blank" rel="noopener noreferrer" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <button onClick={() => setIsContactModalOpen(true)} className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleTheme} 
              className="p-2 text-on-surface-variant hover:text-primary hover:bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-sm border border-outline-variant/30 bg-white"
              title={\`Switch to \${theme === 'light' ? 'Dark' : 'Light'} Mode\`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-on-surface-variant hover:text-primary hover:bg-slate-100 rounded-lg transition-colors cursor-pointer border border-outline-variant/30 bg-white shadow-sm"
              title={\`Switch to \${theme === 'light' ? 'Dark' : 'Light'} Mode\`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-on-surface-variant hover:text-primary transition-colors z-50 relative">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>`;

// Note: since update_theme_and_layout.js already changed the nav buttons, let's verify if the oldHeaderBlock matches.
// Because it was modified, the script should use a looser replacement strategy or search for the outer tags.
// Let's find the start index of "<header" and end index of "</header>" in App.tsx and replace that section directly! This is much more robust!

const startIndex = content.indexOf('<header');
const endIndex = content.indexOf('</header>') + '</header>'.length;

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find <header> tag in App.tsx');
  process.exit(1);
}

const newHeaderBlock = `<header className={\`fixed top-0 inset-x-0 h-16 lg:h-20 z-40 flex items-center justify-center transition-all duration-300 \${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-outline-variant/50 shadow-md shadow-slate-200/50' 
          : 'bg-transparent border-b border-transparent'
      }\`}>
        <div className="w-full max-w-5xl px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 text-primary font-display font-extrabold shadow-sm flex items-center justify-center hover:scale-105 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              YK
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-base font-extrabold text-on-surface tracking-tight leading-none flex items-center gap-1.5">
                Yudi Karma
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mt-1.5 leading-none">Software Engineer</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className={\`hidden lg:flex items-center gap-1 border rounded-full p-1 transition-all duration-300 \${
            scrolled 
              ? 'bg-slate-50 border-outline-variant/60 shadow-sm' 
              : 'bg-white/70 backdrop-blur-sm border-outline-variant/40 shadow-sm'
          }\`}>
            <button onClick={() => scrollToSection('overview')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'overview' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Overview</button>
            <button onClick={() => scrollToSection('credentials')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'credentials' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Certifications</button>
            <button onClick={() => scrollToSection('stack')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'stack' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Tech Stack</button>
            <button onClick={() => scrollToSection('experience')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'experience' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Experience</button>
            <button onClick={() => scrollToSection('gallery')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'gallery' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Gallery</button>
            <button onClick={() => scrollToSection('endorsements')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'endorsements' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Endorsements</button>
            <button onClick={() => scrollToSection('education')} className={\`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all \${activeSection === 'education' ? 'bg-white text-primary shadow-sm border border-slate-200/50 font-extrabold scale-[1.03]' : 'text-on-surface-variant hover:text-primary hover:bg-white/40'}\`}>Education</button>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsRecruiterMode(true)}
                className={\`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 \${
                  isRecruiterMode 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100/80 shadow-emerald-100/50' 
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                }\`}
                title="Activate Recruiter Suite with Custom PDF Generator"
              >
                <Award className={\`w-3.5 h-3.5 \${isRecruiterMode ? 'text-emerald-600 animate-pulse' : 'text-primary'}\`} />
                <span>Recruiter Mode</span>
              </button>
              <button 
                onClick={handlePrint} 
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all cursor-pointer active:scale-95 group"
                title="Export formatted PDF Resume"
              >
                <Printer className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                <span>Export PDF</span>
              </button>
            </div>

            {/* Socials & Theme Toggle toolbar */}
            <div className="flex items-center gap-1 bg-slate-100/80 border border-slate-200/50 rounded-full p-1 shadow-sm">
              <a 
                href="https://github.com/yudikarma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200" 
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/in/yudikarma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://yudikarma.page.link/6RQi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200"
                title="Personal Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setIsContactModalOpen(true)} 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer"
                title="Send Message"
              >
                <Mail className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-4 bg-slate-200/60 mx-1" />
              <button 
                onClick={toggleTheme} 
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer"
                title={\`Switch to \${theme === 'light' ? 'Dark' : 'Light'} Mode\`}
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-1.5 bg-slate-100/80 border border-slate-200/50 rounded-full p-1 shadow-sm">
            <button 
              onClick={toggleTheme} 
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer"
              title={\`Switch to \${theme === 'light' ? 'Dark' : 'Light'} Mode\`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer relative z-50"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>
      </header>`;

content = content.substring(0, startIndex) + newHeaderBlock + content.substring(endIndex);

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx header UI design improved successfully!');
