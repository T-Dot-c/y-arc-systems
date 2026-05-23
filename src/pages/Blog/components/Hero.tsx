import { motion } from 'motion/react';

export default function BlogHero() {
  return (
    <section className="relative pt-12 md:pt-24 pb-20 md:pb-32 grid-pattern bg-white/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-widest font-medium">Engineering Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-6 leading-tight">
            Engineering Insights <br />
            <span className="text-primary">That Drive Real Decisions</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Practical, in-depth analysis from senior engineers, architects and tech leaders. Cut through the hype with insights on technology trends, best practices, and strategies for business leaders.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            EXPLORE ARTICLES
          </button>
        </motion.div>

        {/* Hero Floating Cards */}
        <div className="relative hidden lg:block h-[500px]">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-80 glass-card p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Executive</span>
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Poland IT</span>
            </div>
            <h3 className="font-bold text-on-surface mb-4 leading-snug">Why YARC Systems Is One of the Best IT Outsourcing Companies in...</h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">YST</div>
              <div>
                <p className="text-[12px] font-bold text-on-surface">YARC Strategy Team</p>
                <p className="text-[10px] text-on-surface-variant">11 MAY 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-80 glass-card p-6 rounded-2xl shadow-xl z-20"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Executive</span>
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Hybrid Model</span>
            </div>
            <h3 className="font-bold text-on-surface mb-4 leading-snug">The Hybrid Outsourcing Model: Redefining Cost Efficiency for European...</h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-on-primary">YAC</div>
              <div>
                <p className="text-[12px] font-bold text-on-surface">YARC Architecture Council</p>
                <p className="text-[10px] text-on-surface-variant">11 MAY 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 right-12 w-80 glass-card p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Executive</span>
              <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">Germany</span>
            </div>
            <h3 className="font-bold text-on-surface mb-4 leading-snug">How to Choose a Reliable Nearshoring Partner in Poland: A Guide for...</h3>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">DoP</div>
              <div>
                <p className="text-[12px] font-bold text-on-surface">Director of Partnerships</p>
                <p className="text-[10px] text-on-surface-variant">11 MAY 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
