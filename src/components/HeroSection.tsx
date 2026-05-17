import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-primary mb-8 font-display tracking-tight"
        >
          ERP Software for <span className="text-secondary">Ethiopian Business Organizations</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-outline max-w-4xl mx-auto text-lg leading-relaxed mb-20"
        >
          ERP stands for Enterprise Resource Planning. ERP software provides a backbone to all the operations in industries. Industries has myriad of intricate operations and processes that needs to be taken care of. ERP software meticulously utilizes all the resources in the industry to ensure that these operations are executed successfully and keeps the workflow smoother.
        </motion.p>
      </div>
    </section>
  );
}
