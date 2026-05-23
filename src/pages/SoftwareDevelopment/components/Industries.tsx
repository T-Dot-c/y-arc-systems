import { motion } from 'motion/react';

export default function SoftwareDevIndustries() {
  const industries = [
    {
      id: 'F',
      title: 'Fintech',
      description: 'Bespoke financial software for banking, payments, and insurance.',
      quote: 'Empowering the fintech sector with scalable and resilient robust technical solutions.'
    },
    {
      id: 'L',
      title: 'Logistics',
      description: 'Advanced supply chain and warehouse management software.',
      quote: 'Empowering the logistics sector with scalable and resilient robust technical solutions.'
    },
    {
      id: 'E',
      title: 'EdTech',
      description: 'Learning management systems and educational software.',
      quote: 'Empowering the edtech sector with scalable and resilient robust technical solutions.'
    },
    {
      id: 'H',
      title: 'Healthcare',
      description: 'HIPAA-compliant platforms for hospitals and medical providers.',
      quote: 'Empowering the healthcare sector with scalable and resilient robust technical solutions.'
    },
    {
      id: 'R',
      title: 'Retail',
      description: 'Scalable e-commerce and point-of-sale systems.',
      quote: 'Empowering the retail sector with scalable and resilient robust technical solutions.'
    },
    {
      id: 'M',
      title: 'Media & Entertainment',
      description: 'Digital delivery and personalized content experiences.',
      quote: 'Empowering the media & entertainment sector with scalable and resilient robust technical solutions.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#071B52] mb-12 tracking-tight">
            Transforming industries <span className="text-primary">proven expertise</span>
          </h2>
          <p className="max-w-3xl text-gray-500 text-lg leading-relaxed">
            We serve multiple industries by offering solutions designed to solve domain-specific challenges. Our services address industry-specific needs, driving efficiency and delivering impactful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl border border-gray-50 bg-white hover:shadow-2xl hover:shadow-gray-100 transition-all group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all">
                  {item.id}
                </div>
                <h3 className="text-2xl font-bold text-[#071B52] group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="border-l-2 border-primary/20 pl-6 italic text-gray-500/60 text-xs py-1">
                {item.quote}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
