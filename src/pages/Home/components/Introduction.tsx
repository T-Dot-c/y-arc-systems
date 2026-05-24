import { motion } from 'motion/react';
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
            <span className="intro-heading-accent">Ethiopia's Go-To <span className="intro-heading-white">for<br />ERP</span>, and Web Solutions</span>
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
              <span className="intro-bold-accent">Y Arc System</span> transforms your operations with cutting-edge digital solutions. From comprehensive <span className="intro-highlight">ERP systems</span> and <span className="intro-highlight">user-friendly websites</span> to <span className="intro-highlight">custom software</span> tailored to your unique needs, we provide the scalable technology required to thrive in Ethiopia's growing tech landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
