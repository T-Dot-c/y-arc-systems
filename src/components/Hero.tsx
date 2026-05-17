import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* 1. Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
          alt="Team Collaboration" 
          className="w-full h-full object-cover opacity-[0.03] grayscale"
        />
        <div className="absolute inset-0 hero-grid-bg opacity-40" />
      </div>

      {/* 2. Background radial glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none" />
      
      {/* 3. Abstract Tracing Lines (Architectural Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 z-0">
        <div className="absolute top-[10%] left-0 w-full h-[1px] bg-secondary/[0.08]" />
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-secondary/[0.08]" />
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-secondary/[0.08]" />
        <div className="absolute top-[70%] left-0 w-full h-[1px] bg-secondary/[0.08]" />
        <div className="absolute top-[90%] left-0 w-full h-[1px] bg-secondary/[0.08]" />
        
        <div className="absolute top-0 left-[10%] w-[1px] h-full bg-secondary/[0.08]" />
        <div className="absolute top-0 left-[30%] w-[1px] h-full bg-secondary/[0.08]" />
        <div className="absolute top-0 left-[50%] w-[1px] h-full bg-secondary/[0.08]" />
        <div className="absolute top-0 left-[70%] w-[1px] h-full bg-secondary/[0.08]" />
        <div className="absolute top-0 left-[90%] w-[1px] h-full bg-secondary/[0.08]" />
        
        {/* Highlighted tracing lines */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-0 w-[30%] h-[1px] bg-secondary/20" 
        />
        <motion.div 
          animate={{ y: ['-100%', '200%'] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-[65%] w-[1px] h-[30%] bg-secondary/20" 
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Top Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-secondary">
              Technology-Driven Digital Transformation
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-[85px] font-bold font-sans text-primary max-w-6xl mx-auto leading-[1] mb-12 tracking-tight"
          >
            Transforming Businesses Through <br /> <span className="text-secondary text-outline-variant">Smart ERP & Digital Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-[18px] text-outline max-w-4xl mx-auto mb-16 leading-relaxed font-sans font-medium opacity-80"
          >
            YARC Systems PLC is a technology-driven software development and digital transformation company specializing in ERP systems, CRM platforms, healthcare management solutions, and custom business software. Since 2019, we have helped organizations streamline operations, improve efficiency, and make data-driven decisions through scalable and reliable digital systems.
          </motion.p>
          
          {/* Focused CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-32 flex justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-14 py-6 rounded-full bg-primary text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-secondary transition-colors duration-500 hover:shadow-[0_0_40px_rgba(0,81,213,0.5)] shadow-2xl flex items-center justify-center gap-3"
            >
              Request a Demo 
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white transition-colors duration-300" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Animated Partner Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative"
          >
            <p className="text-[10px] font-black text-outline/40 uppercase tracking-[0.4em] mb-14">
              IN PARTNERSHIP WITH
            </p>
            
            <div className="flex overflow-hidden relative mask-fade-edges">
              <motion.div 
                animate={{ x: [0, -1200] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex items-center gap-24 whitespace-nowrap px-10"
              >
                {[
                  'Rebill', 'sleepVoyage', 'tio health', 'NICKLAS', 'NestHub', 'AutoBridge', 'Glimpsey', 'apadua',
                  'Rebill', 'sleepVoyage', 'tio health', 'NICKLAS', 'NestHub', 'AutoBridge', 'Glimpsey', 'apadua'
                ].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-4 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center p-2 group-hover:bg-white group-hover:shadow-lg transition-all">
                       <div className="w-full h-full bg-slate-300 rounded-md" />
                    </div>
                    <span className="text-2xl font-display font-black text-primary tracking-tighter">{name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
