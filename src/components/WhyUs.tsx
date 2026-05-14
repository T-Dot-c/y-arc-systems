import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const advantages = [
  {
    title: 'Senior-Only Talent Pool',
    desc: '2,000+ Vetted Talent Pool with 5+ years average experience'
  },
  {
    title: 'Agile & Transparent',
    desc: 'Daily updates, clear communication, and flexible engagement models'
  },
  {
    title: 'Strategic Project Management',
    desc: 'Rigorous European standards with 98% on-time delivery rate'
  },
  {
    title: 'Latest Technology Stack',
    desc: 'Expertise in cutting-edge frameworks, cloud platforms, and AI/ML'
  },
  {
    title: 'Cost-Effective Excellence',
    desc: 'Achieve 50-70% cost savings without compromising quality'
  },
  {
    title: 'Proven Track Record',
    desc: '100+ successful projects across industries and geographies'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-slate-50 text-primary overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Headline & Intro */}
          <div className="lg:col-span-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black font-display mb-6 tracking-tight text-primary"
            >
              Why build with <br />
              <span className="text-secondary-container">Y ARC Systems PLC?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-outline text-lg md:text-xl max-w-2xl leading-relaxed font-sans"
            >
              We combine meticulous precision with cost-effective offshore talent to deliver world-class software solutions that drive business growth.
            </motion.p>
          </div>

          {/* List Grid */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {advantages.map((adv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-1 group-hover:bg-secondary transition-colors duration-300">
                  <Check className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-black text-[#1E40AF] font-display uppercase tracking-widest">{adv.title}</h4>
                  <p className="text-outline text-xs leading-relaxed font-medium">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="lg:col-span-12 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white border-2 border-primary/20 text-primary font-black uppercase tracking-widest text-xs hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-300 rounded-full shadow-lg shadow-black/5"
              >
                Discover Our Approach
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
