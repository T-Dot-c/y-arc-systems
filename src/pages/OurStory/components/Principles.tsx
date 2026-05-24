import { motion } from 'motion/react';
import { Shield, Target, Zap } from 'lucide-react';

export default function OurStoryPrinciples() {
  return (
    <section className="py-24 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm"
          >
            <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">PURPOSE</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#071B52] mb-8">Our <span className="text-primary">Mission</span></h2>
            <p className="text-[#071B52]/60 text-lg leading-relaxed">
              To design, develop, and deliver reliable, secure, and customizable software solutions that enable organizations to operate efficiently, make informed decisions, and achieve sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#071B52] p-12 rounded-[2.5rem] border border-white/5 shadow-2xl text-white"
          >
            <span className="text-blue-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">ASPIRATION</span>
            <h2 className="text-3xl md:text-5xl font-black mb-8">Our <span className="text-blue-400">Vision</span></h2>
            <p className="text-white/70 text-lg leading-relaxed">
              To become a leading and trusted ERP and technology solutions provider in Ethiopia and the region, recognized for practical innovation, quality delivery, and impactful digital transformation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
