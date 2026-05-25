import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { enterpriseSolutionData } from './data/homeContentData';
import './EnterpriseSolution.css';

const { modules, heading, subtext, ctaText, ctaLink } = enterpriseSolutionData;

export default function EnterpriseSolution() {
  return (
    <section id="enterprise-solutions" className="enterprise-section">
      <div className="enterprise-container">
        <div className="enterprise-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="enterprise-heading"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="enterprise-subtext"
          >
            {subtext}
          </motion.p>
        </div>

        <div className="enterprise-grid">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="enterprise-card"
            >
              <div className="enterprise-icon-wrap">
                {mod.icon}
              </div>
              <div className="enterprise-card-body">
                <h3 className="enterprise-card-title">{mod.title}</h3>
                <p className="enterprise-card-desc">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="enterprise-footer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to={ctaLink} className="enterprise-cta">
              <span className="enterprise-cta-text">{ctaText}</span>
              <div className="enterprise-cta-bg" />
              <ChevronRight className="enterprise-cta-icon" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
