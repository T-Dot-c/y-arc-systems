import { motion } from 'motion/react';
import { ShieldCheck, Database, Maximize } from 'lucide-react';

const coreBenefits = [
  {
    title: 'Future Reliability',
    desc: 'Work with an ERP provider that offers a vision - and the technological expertise - for how it will continue upgrading the software to the state of the art for many years to come.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />
  },
  {
    title: 'Centered Data',
    desc: 'ERP software that incorporates all business areas and locations, provides data centrally, and automates processes is much more efficient than siloed information systems.',
    icon: <Database className="w-8 h-8 text-primary" />
  },
  {
    title: 'Scalability',
    desc: 'ERP software should be able to grow with the company - whether establishing several domestic sites or expanding internationally. A local presence makes implementation efficient.',
    icon: <Maximize className="w-8 h-8 text-primary" />
  }
];

export default function ERPSystemHero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-primary mb-8 font-display tracking-tight"
        >
          ERP Software for <span className="text-secondary">Ethiopian Business Organizations</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-outline max-w-4xl mx-auto text-lg leading-relaxed mb-20"
        >
          ERP stands for Enterprise Resource Planning. ERP software provides a backbone to all the operations in industries. 
          Industries has myriad of intricate operations and processes that needs to be taken care of. 
          ERP software meticulously utilizes all the resources in the industry to ensure that these operations are executed successfully 
          and keeps the workflow smoother.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreBenefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 font-display">{benefit.title}</h3>
              <p className="text-outline text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
