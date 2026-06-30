import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Fix Lucide Import side-effect (MESSAGESquare -> MessageSquare)
content = content.replace('MESSAGESquare,', 'MessageSquare,');

// 2. Fix Resume Widget Export Button
const oldResumeBtn = `                  <button 
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-on-surface border border-outline-variant/60 transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    Export
                  </button>`;

const newResumeBtn = `                  <button 
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-on-surface border border-outline-variant/60 transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    EXPORT
                  </button>`;

if (content.includes(oldResumeBtn)) {
  content = content.replace(oldResumeBtn, newResumeBtn);
} else {
  console.log('Resume button block mismatch or already replaced');
}

// 3. Fix Contact Widget Message Button
const oldContactBtn = `                  <button 
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-on-surface border border-outline-variant/60 transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    Message
                  </button>`;

const newContactBtn = `                  <button 
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-on-surface border border-outline-variant/60 transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    MESSAGE
                  </button>`;

if (content.includes(oldContactBtn)) {
  content = content.replace(oldContactBtn, newContactBtn);
} else {
  console.log('Contact button block mismatch or already replaced');
}

// 4. Fix Recruiter Widget Configure Button
const oldRecruiterBtn = `                  <button 
                    className={\`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer active:scale-95 border \${
                      isRecruiterMode 
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500' 
                        : 'bg-white hover:bg-slate-50 text-on-surface border-outline-variant/60'
                    }\`}
                  >
                    {isRecruiterMode ? 'Active ✨' : 'Configure'}
                  </button>`;

const newRecruiterBtn = `                  <button 
                    className={\`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer active:scale-95 border \${
                      isRecruiterMode 
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500' 
                        : 'bg-white hover:bg-slate-50 text-on-surface border-outline-variant/60'
                    }\`}
                  >
                    {isRecruiterMode ? 'ACTIVE ✨' : 'CONFIGURE'}
                  </button>`;

if (content.includes(oldRecruiterBtn)) {
  content = content.replace(oldRecruiterBtn, newRecruiterBtn);
} else {
  console.log('Recruiter button block mismatch or already replaced');
}

// 5. Update renamed project client mapping check
content = content.replace('name.includes("qa testing")', 'name.includes("promise")');

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx layout widget button capitalization and import fix completed!');
