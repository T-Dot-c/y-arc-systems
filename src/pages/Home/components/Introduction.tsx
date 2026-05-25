import { motion } from 'motion/react';
import { introductionData } from './data/homeContentData';
import './Introduction.css';

export default function Introduction() {
  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* Headline Section */}
        <div className="intro-headline-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-heading"
          >
            <span className="intro-heading-accent">
              {introductionData.headingLine1}{' '}
              <span className="intro-heading-white">
                {introductionData.headingLine2}
              </span>
            </span>
          </motion.h2>
        </div>

        {/* Body Text & CTA Section */}
        <div className="intro-body-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="intro-body-inner"
          >
            <p className="intro-body-text">
              {introductionData.body}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
