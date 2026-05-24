import { motion } from 'motion/react';

export default function OurStoryHero() {
  return (
    <section className="bg-white mt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block"
        >
          JOURNEY
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-[#071B52] mb-8"
        >
          The epic <span className="text-primary">journey</span> of YARC Systems PLC
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-[#071B52]/60 leading-relaxed"
        >
          Established in 2019, we've evolved from Hybrid Solution SC into a leading technology-driven partner, helping organizations replace fragmented processes with centralized, high-efficiency digital ecosystems.
        </motion.p>
      </div>
    </section>
  );
}
