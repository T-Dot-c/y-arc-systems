import { motion } from 'motion/react';
import { BarChart3, Star, ThumbsUp, RefreshCcw, Rocket, Lightbulb } from 'lucide-react';
import { benefitsData } from './data/homeContentData';
import './Benefits.css';

const { benefits, heading, subtext } = benefitsData;

export default function Benefits() {
  return (
    <section className="benefits-section">
      {/* Background Decorative Elements */}
      <div className="benefits-blob-right" />
      <div className="benefits-blob-left" />

      <div className="benefits-container">
        <div className="benefits-layout">
          {/* Left Content */}
          <div className="benefits-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="benefits-header"
            >
              <h2 className="benefits-heading">
                {heading}
              </h2>
              <p className="benefits-subtext">
                {subtext}
              </p>
            </motion.div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="benefits-item"
                >
                  <div className="benefits-item-header">
                    <div className="benefits-icon-wrap">
                      {benefit.icon}
                    </div>
                    <h3 className="benefits-item-title">{benefit.title}</h3>
                  </div>
                  <p className="benefits-item-desc">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Illustration Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="benefits-right"
          >
            <div className="benefits-illustration">
              {/* Background Blobs */}
              <div className="benefits-illust-blob-1" />
              <div className="benefits-illust-blob-2" />

              {/* Iconic Representation */}
              <div className="benefits-illust-inner">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [12, 10, 12] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="benefits-bulb-wrap"
                >
                  <div className="benefits-bulb-circle">
                    <Lightbulb className="benefits-bulb-icon" strokeWidth={1} />
                    <motion.div
                      className="benefits-rocket-wrap"
                      animate={{ height: [20, 40, 20], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Rocket className="benefits-rocket-icon" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <div className="benefits-float-tl">
                  <BarChart3 className="benefits-float-icon" />
                </div>
                <div className="benefits-float-mr">
                  <Star className="benefits-float-icon" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
