import { motion } from 'motion/react';

const stats = [
  { value: '20+', label: 'Global Clients' },
  { value: '10+', label: 'ERP Modules' },
  { value: '500+', label: 'Engineering Experts' }
];

export default function Stats() {
  return (
    <section className="py-24 bg-primary-container text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="space-y-4"
          >
            <div className="text-6xl md:text-7xl font-bold font-display text-secondary-container">
              {stat.value}
            </div>
            <div className="text-sm font-bold text-on-primary-container uppercase tracking-[0.2em]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
