import { motion } from 'motion/react';
import { Database, Code, Globe, Building2, ShoppingCart, Heart, Shield, Users, Truck, Landmark, ChevronRight } from 'lucide-react';

const industries = [
  {
    id: 'healthcare',
    icon: <Heart className="w-8 h-8" />,
    title: 'Healthcare Industry',
    desc: 'Digital healthcare solutions designed to improve patient care, operational efficiency, and regulatory compliance through integrated systems.',
    items: ['Healthcare Management', 'Clinic Solutions', 'Laboratory Systems', 'Pharmacy Tracking']
  },
  {
    id: 'real-estate',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Real Estate Industry',
    desc: 'Specialized solutions for developers to manage property listings, unit availability, and high-conversion sales pipelines.',
    items: ['Real Estate CRM', 'Property Management', 'Sales Automation', 'Lead Tracking']
  },
  {
    id: 'enterprise-corporate',
    icon: <Landmark className="w-8 h-8" />,
    title: 'Enterprise & Corporate',
    desc: 'Comprehensive ERP systems built to centralize and automate organizational operations, finance, and human resources.',
    items: ['ERP Platforms', 'Financial Systems', 'HR & Payroll', 'Workflow Automation']
  },
  {
    id: 'retail-distribution',
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'Retail & Distribution',
    desc: 'Technology solutions for retail operations, inventory control, and multi-branch supply chain management.',
    items: ['Inventory Systems', 'POS Solutions', 'Distribution Mgmt', 'Multi-Branch Sync']
  },
  {
    id: 'digital-commerce',
    icon: <Globe className="w-8 h-8" />,
    title: 'Digital Commerce',
    desc: 'Modern digital platforms helping businesses establish and grow their online presence with high-performance web solutions.',
    items: ['Website Dev', 'E-Commerce Stores', 'Customer Engagement', 'Digital Marketing']
  },

  {
    id: 'security-infra-solutions',
    icon: <Shield className="w-8 h-8" />,
    title: 'Security & Infrastructure',
    desc: 'Professional security systems and digital infrastructure designed to support organizational safety and control.',
    items: ['CCTV Monitoring', 'Biometric Access', 'Digital Security', 'Network Config']
  },
  {
    id: 'smb-solutions',
    icon: <Users className="w-8 h-8" />,
    title: 'Small & Medium Business',
    desc: 'Affordable and scalable digital systems designed for growing businesses to digitize their manual operations.',
    items: ['Process Digitization', 'Task Automation', 'Scalable ERP', 'Tech Support']
  },
  {
    id: 'import-export',
    icon: <Truck className="w-8 h-8" />,
    title: 'Import and Export',
    desc: 'Digital management of logistics, customs documentation, and global supply chain visibility for international trade.',
    items: ['Logistics Tracking', 'Customs Doc', 'Global SCM', 'Cross-Border Mgmt']
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
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 font-display tracking-tight">Industries We Serve</h2>
          <p className="text-xl text-outline max-w-3xl mx-auto leading-relaxed">
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
              className="bg-white p-12 rounded-[2.5rem] border border-outline-variant/20 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center rounded-full mb-10 group-hover:scale-110 transition-transform duration-500">
                {sector.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 text-[#1E40AF] font-display leading-tight min-h-[4rem] flex items-center">
                {sector.title}
              </h3>
              <p className="text-sm text-outline font-medium leading-[1.8] mb-10 flex-1">
                {sector.desc}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {sector.items.map((it) => (
                  <span key={it} className="px-3 py-1 bg-slate-50 text-[9px] font-black uppercase tracking-widest text-primary/60 border border-outline-variant/30 rounded-full">
                    {it}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-secondary text-xs font-black uppercase tracking-[0.2em] cursor-pointer group-hover:gap-4 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
