import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle, X, Hexagon } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      if (window.scrollY > 100) setShowChatTooltip(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-8 right-8 pointer-events-none z-50 flex justify-between items-end">
      {/* Back to Top - Bottom Left */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
            className="pointer-events-auto w-12 h-12 bg-white border border-outline-variant/30 text-primary rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Live Chat - Bottom Right */}
      <div className="pointer-events-auto flex flex-col items-end gap-4">
        <AnimatePresence>
          {showChatTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-primary text-white text-[11px] font-black uppercase tracking-widest py-2 px-4 rounded-lg shadow-xl relative"
            >
              Chat now
              <div className="absolute right-4 bottom-0 translate-y-1/2 w-2 h-2 bg-primary rotate-45" />
              <button 
                onClick={() => setShowChatTooltip(false)}
                className="ml-3 text-white/50 hover:text-white"
                aria-label="Close chat tooltip"
                title="Close tooltip"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open live chat"
          title="Open live chat"
          className="w-16 h-16 bg-secondary text-white rounded-full shadow-2xl flex items-center justify-center relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Hexagon className="w-8 h-8 relative z-10 animate-pulse" />
        </motion.button>
      </div>
    </div>
  );
}
