import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { heroData } from './data/homeContentData';
import './Hero.css';

export default function Hero() {
  const { subtitle, headline, headlineHighlight, ctaText, ctaLink, partnerTitle } = heroData;
  const allPartners = [...heroData.partners, ...heroData.partners];

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg-wrapper">
<img src={heroData.heroBg} alt="Background" className="hero-bg-img" />
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
                {subtitle}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-headline"
            >
              {headline} <br />
              <span className="hero-headline-highlight">
                {headlineHighlight}
              </span>
            </motion.h1>

            {/* Focused CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-cta-wrap"
            >
              <motion.a
                href={ctaLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta-button"
                aria-label={ctaText}
              >
                {ctaText}
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="hero-cta-icon-wrap"
                >
                  <ArrowRight className="hero-cta-icon" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>

          {/* Animated Partner Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hero-partner-section"
          >
            <p className="hero-partner-title">{partnerTitle}</p>

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
