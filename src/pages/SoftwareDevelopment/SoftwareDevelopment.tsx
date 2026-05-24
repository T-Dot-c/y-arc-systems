import { motion } from 'motion/react';
import SoftwareDevHero from './components/Hero';
import SoftwareDevProcess from './components/Process';
import SoftwareDevSolutions from './components/Solutions';
import SoftwareDevServices from './components/Services';
import SoftwareDevStrategic from './components/Strategic';
import SoftwareDevIndustries from './components/Industries';
import SoftwareDevTechStack from './components/TechStack';

export default function SoftwareDevelopment() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <SoftwareDevHero />
      <SoftwareDevStrategic />
      <SoftwareDevIndustries />
      <SoftwareDevServices />
      <SoftwareDevProcess />
      <SoftwareDevSolutions />
      <SoftwareDevTechStack />
      
      {/* Final Bottom CTA (Mirroring the vibe from the images) */}
      <section className="py-32 bg-[#071B52] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary to-transparent" />
        <div className="max-w-4xl mx-auto px-4 md:px-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">
            Ready to <span className="text-primary italic">innovate?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with YARC Systems to build your next-generation enterprise software solution. Our experts are ready to strategize with you.
          </p>
          <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20">
            Book a Strategic Consultation
          </button>
        </div>
      </section>
    </motion.div>
  );
}
