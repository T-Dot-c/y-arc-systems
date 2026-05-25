import { motion } from 'motion/react';
import { whyUsData } from './data/homeContentData';
import './WhyUs.css';

const { reasons, heading, subtext } = whyUsData;

export default function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <div className="whyus-layout">
          {/* Left Side: Content */}
          <div className="whyus-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="whyus-heading">
                {heading}
              </h2>
              <p className="whyus-subtext">
                {subtext}
              </p>
            </motion.div>
          </div>

          {/* Right Side: Cards */}
          <div className="whyus-cards">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="whyus-card"
              >
                <div className="whyus-icon-wrap">
                  {reason.icon}
                </div>
                <div className="whyus-card-body">
                  <h3 className="whyus-card-title">{reason.title}</h3>
                  <p className="whyus-card-desc">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
