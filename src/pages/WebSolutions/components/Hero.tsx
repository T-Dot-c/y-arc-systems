import { motion } from 'motion/react';
import { MousePointer2, ArrowRight } from 'lucide-react';

export default function WebSolutionsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] bg-blue-400/10 rounded-full blur-[120px]"
        />

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,#071B52_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10 w-full">
        <div className="lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-xl px-4 py-2 rounded-full mb-10 border border-primary/10"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase">Ethiopian's Web Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.95] tracking-tighter text-[#071B52]"
          >
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600 italic">Digital Identity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-16 max-w-2xl font-light"
          >
            We blend world-class engineering with sophisticated design to create web platforms that don't just exist, but perform and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="group relative bg-[#071B52] text-white px-10 py-6 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all shadow-2xl shadow-[#071B52]/20 flex items-center gap-4 overflow-hidden">
              <span className="relative z-10">START YOUR PROJECT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>

            <button className="group flex items-center gap-4 px-8 py-6 text-gray-400 hover:text-[#071B52] transition-colors font-bold text-sm tracking-widest">
              <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <MousePointer2 className="w-5 h-5" />
              </div>
              VIEW SOLUTIONS
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
