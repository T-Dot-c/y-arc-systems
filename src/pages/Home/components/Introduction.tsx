import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center px-6 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        {/* Headline Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-[45px] font-black font-display leading-[1.1] tracking-tight"
          >
            <span className="text-secondary-fixed block mb-1">Ethiopia’s Go-To <span className="text-white/90">for<br />ERP</span>, and Web Solutions</span>
          </motion.h2>
        </div>

        {/* Body Text & CTA Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-[18px] text-white/70 leading-relaxed font-sans">
              <span className="font-bold text-secondary-fixed">Y Arc System</span> transforms your operations with cutting-edge digital solutions. From comprehensive <span className="text-white/80 font-medium">ERP systems</span> and <span className="text-white/80 font-medium">user-friendly websites</span> to <span className="text-white/80 font-medium">custom software</span> tailored to your unique needs, we provide the scalable technology required to thrive in Ethiopia’s growing tech landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
