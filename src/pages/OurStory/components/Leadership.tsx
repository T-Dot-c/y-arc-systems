import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useState } from 'react';

interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const leaders: Leader[] = [
  {
    name: 'Nebyu Zakariyas',
    role: 'CEO AND CO-FOUNDER',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    bio: 'Nebyu is the founder and CEO of Y Arc Systems. He has over 10 years of experience in the software industry and is passionate about building great products that solve real-world problems.'
  },
  {
    name: 'Yared Taddese',
    role: 'COO AND CO-FOUNDER',
    image: 'https://images.unsplash.com/photo-151908518575a-34575a6be5ef?auto=format&fit=crop&q=80&w=800',
    bio: 'Yared is our Chief Operating Officer and oversees our day-to-day operations. He has a strong business background and is dedicated to our company\'s mission of technical excellence.'
  },
  {
    name: 'Samuel Mussie',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
    bio: 'Samuel leads our technical strategy and R&D. With deep expertise in distributed systems and systems architecture, he ensures our solutions are built for the future.'
  }
];

function LeaderCard({ leader, index }: { leader: Leader; index: number; key?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="perspective-1000 w-full h-[500px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Side (Photo) */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img 
            src={leader.image} 
            alt={leader.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B52]/90 via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-left">
            <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
            <span className="text-white/60 text-[10px] font-bold tracking-widest block uppercase">{leader.role}</span>
          </div>
        </div>

        {/* Back Side (Quote/Bio) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2.5rem] bg-[#0F172A] p-12 flex flex-col justify-center text-left shadow-2xl border border-white/5"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <Quote className="w-16 h-16 text-blue-500 mb-8 opacity-40 -ml-2" />
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{leader.name}</h3>
          <span className="text-blue-400 text-[11px] font-bold tracking-[0.2em] mb-8 block uppercase">{leader.role}</span>
          <p className="text-white/70 text-lg leading-relaxed font-medium italic">
            "{leader.bio}"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function OurStoryLeadership() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-primary font-bold text-[11px] tracking-[0.3em] uppercase mb-4 block">EXECUTIVE LEADERSHIP</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#071B52] mb-8 tracking-tight">The <span className="text-primary">Architects</span> of Our Vision</h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed font-medium">
            Our leadership team embodies the fusion of deep technical expertise with strategic business acumen. 
            They are practicing engineers and client partners who set the standard for the entire organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
