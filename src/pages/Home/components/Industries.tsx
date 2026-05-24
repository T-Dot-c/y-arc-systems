import { motion } from 'motion/react';
import { Globe, Building2, ShoppingCart, Heart, Shield, Users, Truck, Landmark, ChevronRight } from 'lucide-react';
import './Industries.css';

const industries = [
  { id: 'healthcare', icon: <Heart className="w-8 h-8" />, title: 'Healthcare Industry', desc: 'Digital healthcare solutions designed to improve patient care, operational efficiency, and regulatory compliance through integrated systems.' },
  { id: 'real-estate', icon: <Building2 className="w-8 h-8" />, title: 'Real Estate Industry', desc: 'Specialized solutions for developers to manage property listings, unit availability, and high-conversion sales pipelines.' },
  { id: 'enterprise-corporate', icon: <Landmark className="w-8 h-8" />, title: 'Enterprise & Corporate', desc: 'Comprehensive ERP systems built to centralize and automate organizational operations, finance, and human resources.' },
  { id: 'retail-distribution', icon: <ShoppingCart className="w-8 h-8" />, title: 'Retail & Distribution', desc: 'Technology solutions for retail operations, inventory control, and multi-branch supply chain management.' },
  { id: 'digital-commerce', icon: <Globe className="w-8 h-8" />, title: 'Digital Commerce', desc: 'Modern digital platforms helping businesses establish and grow their online presence with high-performance web solutions.' },
  { id: 'security-infra-solutions', icon: <Shield className="w-8 h-8" />, title: 'Security & Infrastructure', desc: 'Professional security systems and digital infrastructure designed to support organizational safety and control.' },
  { id: 'smb-solutions', icon: <Users className="w-8 h-8" />, title: 'Small & Medium Business', desc: 'Affordable and scalable digital systems designed for growing businesses to digitize their manual operations.' },
  { id: 'import-export', icon: <Truck className="w-8 h-8" />, title: 'Import and Export', desc: 'Digital management of logistics, customs documentation, and global supply chain visibility for international trade.' },
];

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
          <h2 className="industries-heading">Industries We Serve</h2>
          <p className="industries-subtext">
            Deep domain expertise across diverse sectors, delivering technology that powers transformation.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="industries-grid"
        >
          {industries.map((sector) => (
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
