import React from 'react';
import { motion } from 'motion/react';
import { Award, X, Printer } from 'lucide-react';

interface RecruiterConsoleProps {
  onClose: () => void;
  recruiterName: string;
  setRecruiterName: (val: string) => void;
  recruiterCompany: string;
  setRecruiterCompany: (val: string) => void;
  recruiterHighlightTech: string[];
  setRecruiterHighlightTech: React.Dispatch<React.SetStateAction<string[]>>;
  onPrint: () => void;
}

export const RecruiterConsole: React.FC<RecruiterConsoleProps> = ({
  onClose,
  recruiterName,
  setRecruiterName,
  recruiterCompany,
  setRecruiterCompany,
  recruiterHighlightTech,
  setRecruiterHighlightTech,
  onPrint
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 bg-slate-950 border border-slate-800 shadow-2xl rounded-2xl overflow-hidden text-slate-100 flex flex-col"
    >
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-500/15 flex items-center justify-center text-emerald-400">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Recruiter Suite Active</h3>
            <span className="text-[9px] font-mono text-emerald-400 font-medium">Custom Resume Generator</span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Deactivate Recruiter Mode"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content Body */}
      <div className="p-4 flex flex-col gap-4 max-h-[350px] overflow-y-auto custom-scrollbar text-xs">
        {/* Quick Scenario Presets */}
        <div className="space-y-2 border-b border-slate-800 pb-3">
          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-semibold">
            0. Quick Scenario Presets
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              {
                label: "🤖 Android Dev",
                name: "Lead Android",
                company: "Tech Corp",
                tech: ["Kotlin", "Android SDK", "MVVM", "Clean Architecture", "Camera X"]
              },
              {
                label: "📱 Mobile Dev",
                name: "Mobile Lead",
                company: "App Agency",
                tech: ["Flutter", "Dart", "Kotlin", "React Native"]
              },
              {
                label: "🌐 Fullstack Dev",
                name: "Engineering Manager",
                company: "Web Solutions",
                tech: ["React", "TypeScript", "Tailwind CSS", "WebRTC", "Web Portal"]
              },
              {
                label: "🔒 Fintech Security",
                name: "Fintech Lead",
                company: "Acme Bank",
                tech: ["Kotlin", "DexGuard", "ONE SPAN Security", "mTLS"]
              },
              {
                label: "📞 VOIP Telephony",
                name: "Platform Director",
                company: "Avaya Partner",
                tech: ["Kotlin", "Java", "Avaya SDK", "WebRTC"]
              },
              {
                label: "⚡ Performance Eng",
                name: "Principal Architect",
                company: "HighScale Corp",
                tech: ["Kotlin", "Dynatrace APM", "Tetherfi SDK", "Flutter"]
              }
            ].map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => {
                  setRecruiterName(preset.name);
                  setRecruiterCompany(preset.company);
                  setRecruiterHighlightTech(preset.tech);
                }}
                className="px-2 py-1 rounded-lg text-[9px] bg-slate-900 hover:bg-emerald-500/15 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all cursor-pointer font-medium active:scale-95"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic greetings form */}
        <div className="space-y-3">
          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-semibold">
            1. Customize Profile Greetings
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[9px] text-slate-500 font-medium mb-1">Your Name</label>
              <input 
                type="text"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                placeholder="e.g. Sarah"
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[9px] text-slate-500 font-medium mb-1">Target Company</label>
              <input 
                type="text"
                value={recruiterCompany}
                onChange={(e) => setRecruiterCompany(e.target.value)}
                placeholder="e.g. Google"
                className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-700 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Skill highlights switcher */}
        <div className="space-y-2.5">
          <div className="flex justify-between items-center">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-semibold">
              2. Requirements / Skill-Matcher
            </div>
            {recruiterHighlightTech.length > 0 && (
              <button 
                onClick={() => setRecruiterHighlightTech([])}
                className="text-[9px] text-slate-500 hover:text-emerald-400 font-medium cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
          <p className="text-[10px] text-slate-500 leading-normal">
            Toggle key technologies. Relevant experience and matching client production apps will dynamically highlight and pulse on screen.
          </p>
          <div className="flex flex-wrap gap-1 pt-1">
            {['Kotlin', 'Java', 'Android SDK', 'Flutter', 'Dart', 'React Native', 'React', 'TypeScript', 'Tailwind CSS', 'MVVM', 'Clean Architecture', 'DexGuard', 'ONE SPAN Security', 'Avaya SDK', 'Tetherfi SDK', 'Dynatrace APM', 'WebRTC', 'mTLS', 'Camera X', 'SQLite'].map((tech) => {
              const isSelected = recruiterHighlightTech.includes(tech);
              return (
                <button
                  key={tech}
                  onClick={() => {
                    if (isSelected) {
                      setRecruiterHighlightTech(recruiterHighlightTech.filter(t => t !== tech));
                    } else {
                      setRecruiterHighlightTech([...recruiterHighlightTech, tech]);
                    }
                  }}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono border transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold shadow-[0_0_8px_rgba(16,185,129,0.2)]' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Direct print action */}
        <div className="space-y-2 border-t border-slate-800/80 pt-3">
          <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-semibold">
            3. Executive Export
          </div>
          <p className="text-[10px] text-slate-500 leading-normal">
            Generates a crisp, double-column corporate resume tailored with your personalization headers. Built to pass ATS parsers flawlessly.
          </p>
          <button
            onClick={onPrint}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 px-3 rounded text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all active:scale-[0.98] cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Tailored PDF Resume</span>
          </button>
        </div>
      </div>

      {/* Footer status bar */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-2 flex justify-between items-center text-[9px] text-slate-500">
        <span className="flex items-center gap-1.5 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live Matching System
        </span>
        <span>v1.2.0 (Executive)</span>
      </div>
    </motion.div>
  );
};

export default RecruiterConsole;
