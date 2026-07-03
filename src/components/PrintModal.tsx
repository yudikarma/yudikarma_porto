import React from 'react';
import { motion } from 'motion/react';
import { Printer, X, Globe } from 'lucide-react';

interface PrintModalProps {
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ onClose }) => {
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

  return (
    <motion.div 
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        variants={modalContentPanelVariants}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-slate-950 px-6 py-5 text-white flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
              <Printer className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider">PDF Export Helper</h3>
              <p className="text-[10px] text-slate-400 font-mono">IFrame Environment detected</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Close PDF Helper Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div className="text-center">
            <div className="text-xs text-slate-600 leading-relaxed text-left space-y-4">
              <p className="font-medium text-slate-800">
                Because you are viewing Yudi's portfolio within a secure chat preview pane, browsers block direct printing from sandboxed frames for security reasons.
              </p>
              <p className="p-3 bg-emerald-50 border border-emerald-200/50 rounded-xl text-[11px] text-emerald-800 font-medium">
                💡 To generate and download your high-fidelity, customized PDF resume, please follow these simple steps:
              </p>
              <ol className="list-decimal pl-5 space-y-2.5 text-slate-700 font-medium">
                <li>
                  Click the <strong className="text-primary">"Open in New Tab"</strong> button in the top-right corner of this chat preview window or the green button below.
                </li>
                <li>
                  Once the app opens in its own tab, click the <strong className="text-primary">"Export PDF Resume"</strong> (or customized print button in Hire Mode) again.
                </li>
                <li>
                  Your browser's standard print dialogue will open perfectly, allowing you to save as a flawless, ATS-parsed PDF!
                </li>
              </ol>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a 
              href={window.location.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all active:scale-[0.98] cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
            <button 
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrintModal;
