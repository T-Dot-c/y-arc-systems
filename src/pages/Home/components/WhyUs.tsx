import { motion } from 'motion/react';
import { Package, ShieldCheck, Star } from 'lucide-react';
import './WhyUs.css';

const reasons = [
  { title: 'All-In-One Approach', desc: 'End-to-end IT services, design, and development across industrial sectors.', icon: <Package className="w-6 h-6" /> },
  { title: 'Customer Service', desc: 'Tailored expert advice to help you achieve goals in demanding environments.', icon: <ShieldCheck className="w-6 h-6" /> },
  { title: 'Commitment', desc: 'Your trusted partner, aligning our technology with your business success.', icon: <Star className="w-6 h-6" /> },
];

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
                Why Y ARC <br />
                Systems
              </h2>
              <p className="whyus-subtext">
                We draw on deep expertise and qualified resources to deliver leading IT services for Ethiopian enterprises, building enduring relationships based on trust.
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
