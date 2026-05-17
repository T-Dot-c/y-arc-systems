import { motion } from 'motion/react';
import WebSolutionsHero from '../components/WebSolutions-Hero';
import WebSolutionsProcess from '../components/WebSolutions-Process';
import WebSolutionsBenefits from '../components/WebSolutions-Benefits';
import WebSolutionsServices from '../components/WebSolutions-Services';
import WebSolutionsWhyUs from '../components/WebSolutions-WhyUs';
import WebSolutionsCTA from '../components/WebSolutions-CTA';

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
