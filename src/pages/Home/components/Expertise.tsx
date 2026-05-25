import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { expertiseData } from './data/homeContentData';

import './Expertise.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Expertise() {
  const { services, heading, paragraph } = expertiseData;

  return (
    <section id="expertise" className="py-20 px-2 relative overflow-hidden expertise-section">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-5 font-display tracking-tight max-w-8xl mx-auto leading-[1.1] expertise-heading"
          >{heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-15 text-xl leading-relaxed expertise-paragraph"
          >
            {paragraph}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id === 'enterprise-solutions' ? 'expertise-card-erp' : service.id}
              variants={item}
              className="p-8 rounded-2xl border flex flex-col items-start text-left gap-6 group hover:-translate-y-1 transition-all duration-300 expertise-card"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full shrink-0 transition-colors duration-300 expertise-icon-wrapper">
                {service.icon}
              </div>
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold font-display leading-tight transition-colors group-hover:text-white expertise-card-title">
                  {service.title}
                </h3>
                <p className="text-xs font-medium leading-relaxed transition-colors flex-1 group-hover:text-white/90 expertise-card-desc">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] cursor-pointer group-hover:gap-4 transition-all pt-2 expertise-link">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
