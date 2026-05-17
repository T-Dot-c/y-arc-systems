import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function TestimonialsConsultationCTA() {
  return (
    <section className="py-24 px-4 md:px-16">
      <div className="max-w-5xl mx-auto bg-[#F7F8FC] border border-outline rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Ready to build your own success story?
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Join our roster of satisfied partners and experience software development the Y Arc way—transparent, precise, and result-oriented.
          </p>
          <button className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 mx-auto">
            Start Free Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
