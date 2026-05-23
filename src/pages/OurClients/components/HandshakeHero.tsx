import { motion } from 'motion/react';

export default function OurClientsHandshakeHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
  
      <div className="relative z-10 text-center px-4 md:px-16 text-white max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
        >
          Our Clients
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-medium opacity-90 leading-relaxed"
        >
          Since its establishment, Y Arc Systems has contributed to the industry expansion by being a leading company that provides network and IT solutions in major sectors such as financial, governmental, educational, and international organizations.
        </motion.p>
      </div>
    </section>
  );
}
