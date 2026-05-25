import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { industriesData } from './data/homeContentData';
import './Industries.css';

const { sectors, heading, subtext } = industriesData;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="industries-container">
        <div className="industries-header">
          <h2 className="industries-heading">{heading}</h2>
          <p className="industries-subtext">
            {subtext}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="industries-grid"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.id}
              id={sector.id}
              variants={item}
              className="industries-card"
            >
              <div className="industries-icon-wrap">
                {sector.icon}
              </div>
              <div className="industries-card-body">
                <h3 className="industries-card-title">{sector.title}</h3>
                <p className="industries-card-desc">{sector.desc}</p>
                <div className="industries-card-link">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
