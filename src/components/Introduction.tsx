import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Introduction() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Headline Section */}
          <div className="lg:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black font-display leading-[1.1] tracking-tight"
            >
              <span className="text-secondary block mb-2">Leading Ethiopian Tech Company</span>
              <span className="text-primary block">Specializing in ERP, Web, and Software Solutions</span>
            </motion.h2>
          </div>

          {/* Body Text & CTA Section */}
          <div className="lg:col-span-4 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg text-outline leading-relaxed font-sans">
                <span className="font-bold text-primary">Y Arc System</span> transforms your operations with cutting-edge digital solutions. From comprehensive <span className="text-primary font-medium">ERP systems</span> and <span className="text-primary font-medium">user-friendly websites</span> to <span className="text-primary font-medium">custom software</span> tailored to your unique needs, we provide the scalable technology required to thrive in Ethiopia’s growing tech landscape.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-secondary/30 via-primary/30 to-transparent mt-24 origin-left"
        />
      </div>
    </section>
  );
}
