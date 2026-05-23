import { motion } from 'motion/react';

export default function TestimonialsHero() {
  return (
    <section className="mt-32 pb-24 px-4 md:px-16 text-center">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
          Client Feedback: Shaping <span className="text-primary">Success Stories</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Read full experiences from our global partners. We pride ourselves on delivering world-class software engineering that drives impact across industries, from AgriTech to Enterprise SaaS.
        </p>
      </motion.div>
    </section>
  );
}
