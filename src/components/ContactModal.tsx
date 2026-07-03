import React from 'react';
import { motion } from 'motion/react';
import { X, Mail } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
  contactForm: { name: string; email: string; message: string; };
  setContactForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string; }>>;
  isSubmittingContact: boolean;
  submitSuccess: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  onClose,
  contactForm,
  setContactForm,
  isSubmittingContact,
  submitSuccess,
  onSubmit
}) => {
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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        variants={modalContentPanelVariants}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-outline-variant/40 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="font-display text-xl font-bold text-on-surface">Get in Touch</h2>
          <button 
            onClick={onClose} 
            className="p-2 text-on-surface-variant hover:bg-slate-100 rounded-full transition-colors shrink-0"
            aria-label="Close Contact Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Message Prepared!</h3>
              <p className="text-on-surface-variant text-sm">
                Redirecting you to WhatsApp to send your message...
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <span className="block text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Message Presets</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                  {[
                    { 
                      label: "🤝 Hire / Interview", 
                      text: "Hi Yudi, I am interested in scheduling a technical interview with you regarding a Senior Android Engineer opportunity!",
                      themeClass: "bg-blue-50/40 dark:bg-blue-950/15 border-blue-200/60 dark:border-blue-900/30 text-blue-955 dark:text-blue-100 border-l-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-300 dark:hover:border-blue-700"
                    },
                    { 
                      label: "🛡️ SDK Consultation", 
                      text: "Hi Yudi, we are looking for architectural consultation on secure mobile SDK integrations (biometrics/cryptography).",
                      themeClass: "bg-indigo-50/40 dark:bg-indigo-950/15 border-indigo-200/60 dark:border-indigo-900/30 text-indigo-955 dark:text-indigo-100 border-l-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:border-indigo-300 dark:hover:border-indigo-700"
                    },
                    { 
                      label: "📱 Secure App Dev", 
                      text: "Hi Yudi, we are looking to develop a secure Fintech or VOIP product on Android. Let's connect!",
                      themeClass: "bg-emerald-50/40 dark:bg-emerald-950/15 border-emerald-200/60 dark:border-emerald-900/30 text-emerald-955 dark:text-emerald-100 border-l-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:border-emerald-300 dark:hover:border-emerald-700"
                    },
                    { 
                      label: "☕ Say Hello", 
                      text: "Hi Yudi! Just wanted to reach out, say hello, and connect about your secure Android development work.",
                      themeClass: "bg-amber-50/40 dark:bg-amber-950/15 border-amber-200/60 dark:border-amber-900/30 text-amber-955 dark:text-amber-100 border-l-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 hover:border-amber-300 dark:hover:border-amber-700"
                    }
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setContactForm(prev => ({
                          ...prev,
                          message: preset.text
                        }));
                      }}
                      className={`text-left px-3 py-2 rounded-lg border border-l-4 transition-all duration-300 cursor-pointer active:scale-95 flex flex-col gap-0.5 ${preset.themeClass}`}
                    >
                      <span className="font-bold text-[10px] tracking-wide">{preset.label}</span>
                      <span className="text-[9px] opacity-80 line-clamp-1 font-normal leading-tight">{preset.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={contactForm.name}
                  onChange={e => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full bg-slate-50 border border-outline-variant/60 rounded-lg px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={e => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full bg-slate-50 border border-outline-variant/60 rounded-lg px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={e => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full bg-slate-50 border border-outline-variant/60 rounded-lg px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="How can we collaborate?"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmittingContact}
                className="mt-2 w-full bg-primary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmittingContact ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Processing...
                  </>
                ) : (
                  'Send via WhatsApp'
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
