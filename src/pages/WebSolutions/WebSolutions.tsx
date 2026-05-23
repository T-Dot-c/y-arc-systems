import { motion } from 'motion/react';
import WebSolutionsHero from './components/Hero';
import WebSolutionsProcess from './components/Process';
import WebSolutionsBenefits from './components/Benefits';
import WebSolutionsServices from './components/Services';
import WebSolutionsWhyUs from './components/WhyUs';
import WebSolutionsCTA from './components/CTA';

export default function WebSolutions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <WebSolutionsHero />
      <WebSolutionsWhyUs />
      <WebSolutionsBenefits />
      <WebSolutionsProcess />
      <WebSolutionsServices />
      <WebSolutionsCTA />
    </motion.div>
  );
}
