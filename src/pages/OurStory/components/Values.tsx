import { motion } from 'motion/react';
import { Cpu, Users, Cloud, Zap, ShieldCheck } from 'lucide-react';

export default function OurStoryValues() {
  const values = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Customer-Centricity',
      description: 'Our solutions are designed around real business needs, ensuring maximum impact for our clients.'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Innovation',
      description: 'Continuous improvement through technology and innovation is at the heart of everything we do.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Quality and Reliability',
      description: 'We are committed to building stable, secure, and dependable systems organizations can count on.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients and stakeholders to achieve mutual success.'
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: 'Adaptability',
      description: 'We create flexible, modular solutions that grow alongside businesses and future technologies.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">NARRATIVES</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#071B52]">Our <span className="text-primary">values</span></h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.34rem)] min-h-[250px] flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-[#071B52] mb-3">{value.title}</h3>
              <p className="text-[#071B52]/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
