import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../../Assets/images/Background/Hero2.jpg';
import './Hero.css';

export default function Hero() {
  const partners = [
    { name: 'Meydan Happy Import', logo: '/src/Assets/images/Partners/Meydan-Happy-Import.png' },
    { name: 'Deluxe Properties', logo: '/src/Assets/images/Partners/Deluxe-Properties.png' },
    { name: 'Sprinttech', logo: '/src/Assets/images/Partners/Sprinttech.png' },
    { name: 'Arif Discount', logo: '/src/Assets/images/Partners/Arif-Discount.png' },
    { name: 'Key Housing', logo: '/src/Assets/images/Partners/Key-Housing-Finance-Solution-PLC.png' },
    { name: 'Oftana Business Trading', logo: '/src/Assets/images/Partners/Oftana-Business-Trading.png' },
    { name: 'Abed Dermatology', logo: '/src/Assets/images/Partners/Abed-Dermatology-Venerology-Clinic.png' },
    { name: 'Amenti Pharmacy', logo: '/src/Assets/images/Partners/Amenti-Pharmacy.png' },
    { name: 'Blu Pharmacy', logo: '/src/Assets/images/Partners/Blu-Pharmacy.png' },
    { name: 'Carefirst', logo: '/src/Assets/images/Partners/Carefirst.png' },
    { name: 'DAE Pharmacy', logo: '/src/Assets/images/Partners/DAE-Pharmacy.png' },
    { name: 'Ethio Best Real Estate', logo: '/src/Assets/images/Partners/Ethio-Best-Real-Estate.png' },
    { name: 'Home Elements', logo: '/src/Assets/images/Partners/Home-Elements-Luxury-Apartment.png' },
    { name: 'Kelela Clinic', logo: '/src/Assets/images/Partners/Kelela-Dermatovenereology-Clinic.png' },
    { name: 'Nestle Properties', logo: '/src/Assets/images/Partners/Nestle-Properties.png' },
    { name: 'Vista Banquet Hall', logo: '/src/Assets/images/Partners/Vista-Banquet-Hall.png' },
    { name: 'Zerihun Law Office', logo: '/src/Assets/images/Partners/Zerihun-Law-Office.png' },
  ];

  // Double for continuous scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg-wrapper">
        <img src={heroBg} alt="Background" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-content">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="hero-inner">
            {/* Top Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="hero-subtitle-wrap"
            >
              <span className="hero-subtitle-text">
                Technology-Driven Digital Transformation
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-headline"
            >
              Transforming Businesses Through <br />
              <span className="hero-headline-highlight">
                Smart ERP &amp; Digital Solutions
              </span>
            </motion.h1>

            {/* Focused CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-cta-wrap"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta-button"
              >
                Request a Demo
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-cta-icon-wrap"
                >
                  <ArrowRight className="hero-cta-icon" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Animated Partner Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-partner-section"
          >
            <p className="hero-partner-title">IN PARTNERSHIP WITH</p>

            <div className="hero-partner-scroller mask-fade-edges">
              <motion.div
                animate={{ x: [0, -4500] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="hero-partner-marquee"
              >
                {allPartners.map((partner, idx) => (
                  <div key={`${partner.name}-${idx}`} className="hero-partner-item">
                    <div className="hero-partner-logo-wrap">
                      <img src={partner.logo} alt={partner.name} className="hero-partner-logo" />
                    </div>
                    <span className="hero-partner-name">{partner.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
