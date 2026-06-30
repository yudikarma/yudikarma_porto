import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Locate and replace the entire <header> tag
const headerStart = content.indexOf('<header');
const headerEnd = content.indexOf('</header>') + '</header>'.length;

if (headerStart === -1 || headerEnd === -1) {
  console.error('Could not find <header> tag in App.tsx');
  process.exit(1);
}

const simplifiedHeader = `<header className={\`fixed top-0 inset-x-0 h-16 lg:h-20 z-40 flex items-center justify-center transition-all duration-300 \${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm' 
          : 'bg-white/50 backdrop-blur-sm border-b border-slate-100'
      }\`}>
        <div className="w-full max-w-5xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-primary font-display font-bold shadow-sm flex items-center justify-center hover:scale-105 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              YK
            </div>
            <div>
              <div className="font-display text-base font-extrabold text-slate-900 tracking-tight leading-none">
                Yudi Karma
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mt-1.5 leading-none">
                SOFTWARE ENGINEER
              </div>
            </div>
          </div>

          {/* Clean Controls (Theme + Hamburger Menu) */}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              title={\`Switch to \${theme === 'light' ? 'Dark' : 'Light'} Mode\`}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-50 relative"
              title="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>`;

content = content.substring(0, headerStart) + simplifiedHeader + content.substring(headerEnd);

// 2. Adjust the Navigation Dropdown Overlay to support both desktop & mobile (remove lg:hidden, center nav)
const oldDropdownStart = '      {/* Mobile Navigation Dropdown */}\n      <div className={`\n        fixed inset-0 z-30 bg-white pt-20 px-6 flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden\n        ${mobileMenuOpen ? \'translate-y-0 opacity-100\' : \'-translate-y-full opacity-0 pointer-events-none\'}\n      `}>\n        <nav className="flex flex-col gap-2 mt-8">';

// Let's use a dynamic search to find the start of the mobile menu dropdown
const dropdownIndex = content.indexOf('fixed inset-0 z-30 bg-white');
if (dropdownIndex !== -1) {
  // We will replace this block programmatically
  const oldMenuDiv = `      {/* Mobile Navigation Dropdown */}
      <div className={\`
        fixed inset-0 z-30 bg-white pt-20 px-6 flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden
        \${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      \`}>
        <nav className="flex flex-col gap-2 mt-8">`;
  
  const newMenuDiv = `      {/* Navigation Dropdown Overlay */}
      <div className={\`
        fixed inset-0 z-30 bg-white/98 backdrop-blur-md pt-24 pb-8 px-6 md:px-12 flex flex-col transform transition-all duration-300 ease-in-out
        \${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      \`}>
        <nav className="flex flex-col gap-2 mt-8 max-w-md mx-auto w-full">`;
  
  if (content.includes(oldMenuDiv)) {
    content = content.replace(oldMenuDiv, newMenuDiv);
  } else {
    // Try without exact whitespaces
    console.log('Exact match not found for menu dropdown div, trying standard replace');
    content = content.replace('lg:hidden', ''); // Remove the large hidden class
    content = content.replace('bg-white pt-20', 'bg-white/98 backdrop-blur-md pt-24 pb-8');
    content = content.replace('<nav className="flex flex-col gap-2 mt-8">', '<nav className="flex flex-col gap-2 mt-8 max-w-md mx-auto w-full">');
  }
}

// 3. Center the dropdown footer socials as well
const oldFooterDiv = '        <div className="mt-auto mb-12 pt-8 border-t border-outline-variant/40">';
const newFooterDiv = '        <div className="mt-auto mb-12 pt-8 border-t border-outline-variant/40 max-w-md mx-auto w-full">';
if (content.includes(oldFooterDiv)) {
  content = content.replace(oldFooterDiv, newFooterDiv);
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('Minimalist header and global overlay menu applied successfully!');
