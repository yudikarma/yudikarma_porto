import React from 'react';
import { motion } from 'motion/react';
import { Award, X, Printer, RotateCcw, Check, Sparkles } from 'lucide-react';

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

const PRESET_ROLES = [
  {
    label: "📱 Senior Android",
    role: "Senior Android Developer",
    tech: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "MVVM", "Clean Architecture", "Coroutines", "Room DB"]
  },
  {
    label: "🛡️ Mobile Security",
    role: "Mobile Security Engineer",
    tech: ["ONE SPAN Security", "DexGuard", "FIDO2 / WebAuthn", "Android Keystore", "BiometricPrompt", "mTLS"]
  },
  {
    label: "📞 VoIP & Enterprise SDK",
    role: "Enterprise Solutions Consultant",
    tech: ["Avaya SDK", "WebRTC", "Tetherfi SDK", "Dynatrace APM"]
  },
  {
    label: "⚡ Full-Stack & Mobile",
    role: "Full-Stack Software Engineer",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Kotlin", "Supabase"]
  }
];

const AVAILABLE_TECH = [
  'Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Flutter', 'React Native', 
  'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MVVM', 'Clean Architecture', 
  'DexGuard', 'ONE SPAN Security', 'FIDO2 / WebAuthn', 'Avaya SDK', 'Tetherfi SDK', 
  'Dynatrace APM', 'WebRTC', 'mTLS', 'Supabase', 'Room DB'
];

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
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-50 bg-white/95 backdrop-blur-xl border border-outline-variant/60 shadow-2xl rounded-2xl overflow-hidden text-on-surface flex flex-col transition-colors duration-200"
    >
      {/* Header */}
      <div className="bg-slate-100/80 border-b border-outline-variant/40 px-4 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-xs">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface">Recruiter Suite</h3>
              <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
            <p className="text-[10px] text-on-surface-variant font-medium mt-0.5">Resume Customizer & Skill Filter</p>
          </div>
        </div>
        <button 
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-slate-200/60 transition-colors cursor-pointer"
          title="Close Recruiter Suite"
          aria-label="Close Recruiter Suite"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Content Body */}
      <div className="p-4 flex flex-col gap-4 max-h-[380px] overflow-y-auto custom-scrollbar text-xs">
        {/* 1. Quick Role Presets */}
        <div className="space-y-2 border-b border-outline-variant/30 pb-3.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider">
              1. Quick Role Focus
            </span>
            <span className="text-[9px] text-on-surface-variant">Tap to pre-fill</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {PRESET_ROLES.map((preset) => {
              const isSelected = recruiterName === preset.role;
              return (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setRecruiterName(preset.role);
                    setRecruiterHighlightTech(preset.tech);
                  }}
                  className={`px-2.5 py-1.5 rounded-xl text-[10px] font-medium border text-left transition-all cursor-pointer flex items-center justify-between ${
                    isSelected 
                      ? 'bg-primary/10 border-primary text-primary font-bold shadow-xs' 
                      : 'bg-slate-50 hover:bg-slate-100 border-outline-variant/40 text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span className="truncate">{preset.label}</span>
                  {isSelected && <Check className="w-3 h-3 text-primary shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Target Role & Company Fields */}
        <div className="space-y-2.5 border-b border-outline-variant/30 pb-3.5">
          <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider block">
            2. Target Role & Organization
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="recruiter-role" className="block text-[9px] font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                Position Title
              </label>
              <input 
                type="text"
                id="recruiter-role"
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                placeholder="e.g. Senior Android Engineer"
                className="w-full bg-slate-50 border border-outline-variant/60 rounded-xl px-2.5 py-1.5 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
            <div>
              <label htmlFor="recruiter-company" className="block text-[9px] font-semibold text-on-surface-variant mb-1 uppercase tracking-wider">
                Target Company
              </label>
              <input 
                type="text"
                id="recruiter-company"
                value={recruiterCompany}
                onChange={(e) => setRecruiterCompany(e.target.value)}
                placeholder="e.g. BCA, GoTo, Bank Mandiri"
                className="w-full bg-slate-50 border border-outline-variant/60 rounded-xl px-2.5 py-1.5 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* 3. Skill Matcher / Highlight Tech */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-on-surface uppercase tracking-wider">
                3. Spotlight Key Skills
              </span>
              {recruiterHighlightTech.length > 0 && (
                <span className="text-[9px] font-mono font-bold bg-primary/10 text-primary px-1.5 py-0.2 rounded-full">
                  {recruiterHighlightTech.length}
                </span>
              )}
            </div>
            {recruiterHighlightTech.length > 0 && (
              <button 
                type="button"
                onClick={() => setRecruiterHighlightTech([])}
                className="text-[9px] text-on-surface-variant hover:text-primary font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                Reset
              </button>
            )}
          </div>
          <p className="text-[10.5px] text-on-surface-variant leading-relaxed">
            Toggle skills below. Matching timeline experience and production applications will automatically highlight across the page.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {AVAILABLE_TECH.map((tech) => {
              const isSelected = recruiterHighlightTech.includes(tech);
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => {
                    if (isSelected) {
                      setRecruiterHighlightTech(recruiterHighlightTech.filter(t => t !== tech));
                    } else {
                      setRecruiterHighlightTech([...recruiterHighlightTech, tech]);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-primary border-primary text-on-primary font-semibold shadow-xs' 
                      : 'bg-slate-50 border-outline-variant/40 text-on-surface-variant hover:border-primary/40 hover:text-on-surface'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Action: Direct PDF Export */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onPrint}
            className="w-full bg-primary hover:bg-primary-dark text-on-primary font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:shadow active:scale-[0.98] transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Export Tailored PDF Resume</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-100/80 border-t border-outline-variant/40 px-4 py-2 flex items-center justify-between text-[9px] text-on-surface-variant">
        <span>Portfolio & Resume Customizer</span>
        <span className="font-mono text-[9px]">ATS-Optimized Export</span>
      </div>
    </motion.div>
  );
};

export default RecruiterConsole;
