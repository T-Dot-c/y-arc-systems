import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Code2,
  RefreshCw,
  Network,
  Combine,
  ChevronRight
} from 'lucide-react';

const developmentSolutions = [
  {
    title: 'Ready-made Software Development',
    desc: 'Support your business infrastructure with scalable software that improves key facets of your enterprise, from automation to employee collaboration.',
    icon: <Code2 className="w-6 h-6 text-primary" />
  },
  {
    title: 'Legacy Modernization',
    desc: 'Transform your aging systems into modern, high-performance applications. We upgrade your infrastructure while preserving business logic and critical data.',
    icon: <RefreshCw className="w-6 h-6 text-primary" />
  },
  {
    title: 'Software Integration',
    desc: 'Improve your software infrastructure with well-built microservices, reliable API, and data integration for well-coordinated SaaS and on-premise apps.',
    icon: <Network className="w-6 h-6 text-primary" />
  },
  {
    title: 'Consolidation',
    desc: 'Consolidate, integrate, and refactor your enterprise software as necessary, moving them to modern software stacks and cloud hosting to minimize costs.',
    icon: <Combine className="w-6 h-6 text-primary" />
  }
];

export default function ERPSystemSolutions() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 font-display tracking-tight">
            Enterprise Software Development <span className="text-secondary">Solutions In Ethiopia</span>
          </h2>
          <p className="text-outline max-w-3xl mx-auto leading-relaxed">
            Ethiopian business needs a reliable enterprise software solution to support your many operations. It needs to scale, coordinate other software and mobile apps, incorporate advance tech, and cover an extensive list of other objectives. Y ARC Systems has the experience, tools, and technologies to create such demanding custom software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {developmentSolutions.map((solution, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {solution.icon}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-black text-primary font-display">{solution.title}</h3>
                <p className="text-outline text-sm leading-relaxed">{solution.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-secondary transition-all duration-300 rounded-full shadow-2xl shadow-primary/20"
          >
            Get a Free Consultation
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
