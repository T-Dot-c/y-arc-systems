import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import heroBg from '../../../Assets/images/Background/Hero2.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-transparent">

      <div className="max-w-[1440px] mx-auto px-2 text-center relative z-10 w-full pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center justify-center mt-20">
            {/* Top Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-15"
            >
              <span className="text-[11px] font-bold uppercase tracking-[1em] text-white/60">
                Technology-Driven Digital Transformation
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-[75px] font-bold font-geist text-white max-w-6xl mx-auto leading-[1] mb-20 tracking-tight"
            >
              Transforming Businesses Through <br />
              <span className="text-[#F0F4F8]">
                Smart ERP & Digital Solutions
              </span>
            </motion.h1>

            {/* Focused CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-30 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-14 py-6 rounded-full bg-none border border-white/20 text-white font-black text-xs tracking-[0.2em] uppercase hover:bg-secondary hover:text-white hover:border-none transition-colors duration-500 hover:shadow-[0_0_40px_rgba(0,81,213,0.5)] shadow-sm flex items-center justify-center gap-3"
              >
                Request a Demo
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Animated Partner Showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="relative"
          >
            <p className="text-[15px] font-bold text-white/80 uppercase tracking-[0.4em] mb-14">
              IN PARTNERSHIP WITH
            </p>

            <div className="flex overflow-hidden relative mask-fade-edges">
              <motion.div
                animate={{ x: [0, -4500] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex items-center gap-24 whitespace-nowrap px-1s"
              >
                {[
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
                  // Repeating for continuous scroll effect
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
                ].map((partner, idx) => (
                  <div key={`${partner.name}-${idx}`} className="flex items-center gap-4 opacity-100  hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:bg-white group-hover:shadow-lg transition-all">
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-2xl font-display font-black text-white/40 tracking-tighter group-hover:text-white transition-colors">{partner.name}</span>
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
