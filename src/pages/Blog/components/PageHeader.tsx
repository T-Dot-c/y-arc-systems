import { motion } from 'motion/react';
import { Tag } from 'lucide-react';

export default function BlogPageHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-outline-variant/30 text-secondary text-xs font-bold uppercase tracking-widest mb-6"
      >
        <Tag className="w-3.5 h-3.5" />
        Resources & Insights
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-6"
      >
        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Notes</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-outline leading-relaxed max-w-2xl mx-auto"
      >
        Thoughts, technical deep-dives, and company news from the team building systems that scale.
      </motion.p>
    </div>
  );
}
