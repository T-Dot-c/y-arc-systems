import { motion } from 'motion/react';

export default function SoftwareDevHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#07090F] overflow-hidden py-24">
      {/* Circuit Board Pattern Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" className="w-full h-full">
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 10 10 L 90 10 M 90 10 L 90 90 M 90 90 L 10 90 M 10 90 L 10 10" fill="none" stroke="#2457FF" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="1.5" fill="#2457FF" />
            <circle cx="90" cy="10" r="1.5" fill="#2457FF" />
            <circle cx="90" cy="90" r="1.5" fill="#2457FF" />
            <circle cx="10" cy="90" r="1.5" fill="#2457FF" />
            <path d="M 50 10 L 50 30 M 50 70 L 50 90" stroke="#2457FF" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10 w-full">
        <div className="lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/60 font-mono text-xs tracking-[0.3em] uppercase">Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-12 leading-tight tracking-tight"
          >
            Custom <br />
            <span className="text-primary italic">Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 border-l-2 border-primary pl-8 ml-1"
          >
            Leverage full-cycle custom development combining robust backend architectures, cross-platform mobile applications, and beautiful frontend product engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-8"
          >
            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group">
              Get Started Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="text-white/40 hover:text-white font-bold text-xs tracking-widest transition-colors flex items-center gap-4">
              <div className="w-12 h-px bg-white/20" />
              EXPLORE OUR SOLUTIONS
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
