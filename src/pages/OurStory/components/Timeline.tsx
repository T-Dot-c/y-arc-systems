import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function OurStoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const phases = [
    {
      id: '01',
      period: '2019',
      title: 'Foundation: Hybrid Solution SC',
      description: 'The company was established by a team of technology and management professionals focused on practical and reliable software solutions. We launched Pharma Care, a pharmacy management system designed to improve inventory and operational efficiency.',
      summary: ['Pharma Care Launch', 'Pharmacy Management', 'Operational Efficiency'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: '02',
      period: '2021',
      title: 'Expansion and Product Development',
      description: 'We expanded our portfolio with Med E-Care for small and medium healthcare facilities and developed our initial Customer Relationship Management (CRM) system to improve engagement and sales management.',
      summary: ['Med E-Care Launch', 'CRM Development', 'Healthcare Solutions'],
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: '03',
      period: '2022',
      title: 'Enterprise ERP Breakthrough',
      description: 'A major milestone was achieved with the deployment of a comprehensive ERP platform containing more than ten integrated modules, including Finance, HR, and Real Estate solutions.',
      summary: ['Enterprise ERP', '10+ Integrated Modules', 'Real Estate Solutions'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: '04',
      period: '2023—2024',
      title: 'Growth and Market Maturity',
      description: 'We expanded our client base across multiple sectors, focused on automation, scalability, and data security, and strengthened our technical capabilities in long-term implementation support.',
      summary: ['Sector Expansion', 'Data Security', 'Automation & Scalability'],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
    },
    {
      id: '05',
      period: '2025',
      title: 'Rebranding to YARC Systems PLC',
      description: 'Officially rebranded to reflect organizational growth, expanded enterprise focus, and a long-term strategic maturity for digital transformation services.',
      summary: ['Rebranding', 'Strategic Maturity', 'Digital Transformation'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    }
  ];

  return (
    <section ref={containerRef} className="bg-white py-32 relative overflow-hidden">
      {/* Central Progress Line */}
      <div className="absolute left-1/2 top-48 bottom-48 w-0.5 bg-gray-100 hidden lg:block -translate-x-1/2">
        <motion.div 
          style={{ scaleY }}
          className="w-full h-full bg-primary origin-top"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative">
        <div className="space-y-48">
          {phases.map((phase, index) => (
            <div key={phase.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-gray-200"
                >
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B52]/40 to-transparent" />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 relative text-center lg:text-left">
                {/* Timeline Dot (Desktop) */}
                <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-4 h-4 rounded-full border-4 border-white bg-primary shadow-[0_0_0_4px_rgba(36,87,255,0.1)] z-20 ${index % 2 === 1 ? '-right-14 lg:-mr-0.5' : '-left-14 lg:-ml-0.5'}`} />

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="inline-block text-primary font-mono text-sm tracking-[0.3em] font-bold mb-4">
                    {phase.period}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#071B52] mb-6 leading-tight">
                    {phase.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                    {phase.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {phase.summary.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Signature CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-64 relative text-center"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent hidden lg:block" />
          <h3 className="text-3xl md:text-5xl font-black text-[#071B52] mb-8 tracking-tight">
            The next chapter is <br /> <span className="text-primary italic">yours.</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-12">
            We are currently accepting a limited number of strategic partnerships for our 2025 Sovereign Infrastructure rollout.
          </p>
          <button className="bg-[#071B52] text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest hover:scale-105 transition-all shadow-xl shadow-gray-200">
            Apply for Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}

