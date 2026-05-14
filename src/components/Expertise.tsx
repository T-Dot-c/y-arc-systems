import { motion } from 'motion/react';
import { Database, Code, Globe, Cloud, Layout, Shield, Handshake, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'enterprise-solutions',
    icon: <Database className="w-8 h-8" />,
    title: 'Enterprise Solutions (ERP)',
    desc: 'Integrated ERP and CRM modules including Finance, HR/Payroll, Inventory, and Real Estate sales automation designed for total financial transparency.'
  },
  {
    id: 'custom-dev',
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Software Development',
    desc: 'Tailored software designed to replace fragmented, manual processes with integrated digital workflows and scalable internal platforms.'
  },
  {
    id: 'web-digital',
    icon: <Globe className="w-8 h-8" />,
    title: 'Web & Digital Solutions',
    desc: 'Custom-designed, professional, and responsive corporate websites and full-scale E-Commerce platforms optimized for engagement.'
  },
  {
    id: 'system-integration',
    icon: <Cloud className="w-8 h-8" />,
    title: 'System Integration',
    desc: 'Connecting third-party services, SMS/payment gateways, and biometric hardware to ensure seamless data flow across platforms.'
  },
  {
    id: 'digital-marketing',
    icon: <Layout className="w-8 h-8" />,
    title: 'Digital Marketing & SEO',
    desc: 'Advanced SEO strategies and social media marketing designed to drive brand awareness and support full digital transformation.'
  },
  {
    id: 'security-infra',
    icon: <Shield className="w-8 h-8" />,
    title: 'Security & Infrastructure',
    desc: 'Professional installation of CCTV surveillance, network infrastructure, and hardware-software synchronization for secure operations.'
  },
  {
    id: 'support-maintenance',
    icon: <Handshake className="w-8 h-8" />,
    title: 'Support & Maintenance',
    desc: 'Regular updates, personalized staff training, and end-to-end implementation services to ensure long-term system stability.'
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

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-8 font-display tracking-tight max-w-4xl mx-auto leading-[1.1]"
          >
            Software engineered for <span className="text-secondary">operational excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-outline max-w-2xl mx-auto text-xl leading-relaxed"
          >
            We deliver industry-specific platforms that solve complex organizational challenges with simple, intuitive experiences.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              id={service.id === 'enterprise-solutions' ? 'expertise-card-erp' : service.id}
              variants={item}
              className="bg-white p-12 rounded-[2.5rem] border border-outline-variant/20 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-secondary/10 text-secondary flex items-center justify-center rounded-full mb-10 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 text-primary font-display leading-tight min-h-[4rem] flex items-center">
                {service.title}
              </h3>
              <p className="text-sm text-outline font-medium leading-[1.8] mb-10 flex-1">
                {service.desc}
              </p>
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
