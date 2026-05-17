import { motion } from 'motion/react';
import { Database, Code, Globe, Building2, ShoppingCart, Heart, Shield, Users, Truck, Landmark, ChevronRight } from 'lucide-react';

const industries = [
  {
    id: 'healthcare',
    icon: <Heart className="w-8 h-8" />,
    title: 'Healthcare Industry',
    desc: 'Digital healthcare solutions designed to improve patient care, operational efficiency, and regulatory compliance through integrated systems.'
  },
  {
    id: 'real-estate',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Real Estate Industry',
    desc: 'Specialized solutions for developers to manage property listings, unit availability, and high-conversion sales pipelines.'
  },
  {
    id: 'enterprise-corporate',
    icon: <Landmark className="w-8 h-8" />,
    title: 'Enterprise & Corporate',
    desc: 'Comprehensive ERP systems built to centralize and automate organizational operations, finance, and human resources.'
  },
  {
    id: 'retail-distribution',
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Retail & Distribution',
    desc: 'Technology solutions for retail operations, inventory control, and multi-branch supply chain management.'
  },
  {
    id: 'digital-commerce',
    icon: <Globe className="w-8 h-8" />,
    title: 'Digital Commerce',
    desc: 'Modern digital platforms helping businesses establish and grow their online presence with high-performance web solutions.'
  },
  {
    id: 'security-infra-solutions',
    icon: <Shield className="w-8 h-8" />,
    title: 'Security & Infrastructure',
    desc: 'Professional security systems and digital infrastructure designed to support organizational safety and control.'
  },
  {
    id: 'smb-solutions',
    icon: <Users className="w-8 h-8" />,
    title: 'Small & Medium Business',
    desc: 'Affordable and scalable digital systems designed for growing businesses to digitize their manual operations.'
  },
  {
    id: 'import-export',
    icon: <Truck className="w-8 h-8" />,
    title: 'Import and Export',
    desc: 'Digital management of logistics, customs documentation, and global supply chain visibility for international trade.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Industries() {
  return (
    <section id="industries" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 font-display tracking-tight">Industries We Serve</h2>
          <p className="text-xl text-[#64748b] max-w-3xl mx-auto leading-relaxed">
            Deep domain expertise across diverse sectors, delivering technology that powers transformation.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((sector) => (
            <motion.div 
              key={sector.id}
              id={sector.id}
              variants={item}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_15px_40px_rgba(239,246,255,1)] hover:bg-secondary hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left gap-6 group"
            >
              <div className="w-14 h-14 bg-secondary/70 text-white flex items-center justify-center rounded-full shrink-0 group-hover:bg-white group-hover:text-secondary transition-colors duration-300">
                {sector.icon}
              </div>
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-lg font-black text-[#0f172a] group-hover:text-white font-display leading-tight transition-colors">
                  {sector.title}
                </h3>
                <p className="text-xs text-[#64748b] group-hover:text-white/90 font-medium leading-relaxed transition-colors flex-1">
                  {sector.desc}
                </p>
                <div className="flex items-center gap-2 text-secondary group-hover:text-white text-[10px] font-black uppercase tracking-[0.2em] cursor-pointer group-hover:gap-4 transition-all pt-2">
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
