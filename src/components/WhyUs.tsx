import { motion } from 'motion/react';
import { Package, ShieldCheck, Star } from 'lucide-react';

const reasons = [
  {
    title: 'All-In-One Approach',
    desc: 'End-to-end IT services, design, and development across industrial sectors.',
    icon: <Package className="w-6 h-6" />
  },
  {
    title: 'Customer Service',
    desc: 'Tailored expert advice to help you achieve goals in demanding environments.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Commitment',
    desc: 'Your trusted partner, aligning our technology with your business success.',
    icon: <Star className="w-6 h-6" />
  }
];

export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-7xl font-black font-display text-[#1E40AF] leading-[1.1] mb-8">
                Why Y ARC <br />
                Systems
              </h2>
              <p className="text-lg text-[#545454] leading-relaxed max-w-xl">
                We draw on deep expertise and qualified resources to deliver leading IT services for Ethiopian enterprises, building enduring relationships based on trust.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Cards */}
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-black/5 border border-slate-50 flex items-start gap-6 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#EBF5FF] text-[#1E40AF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-[#1E40AF] font-display">
                    {reason.title}
                  </h3>
                  <p className="text-[#545454] text-base leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
