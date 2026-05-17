import { motion } from 'motion/react';
import { Code2, History, Share2, Layers } from 'lucide-react';

export default function SoftwareDevSolutions() {
  const solutions = [
    {
      icon: <Code2 className="w-10 h-10" />,
      title: 'Ready-made Software Development',
      description: 'Support your business infrastructure with scalable software that improves key facets of your enterprise, from automation to employee collaboration. Leverage our decade-long expertise to build an enterprise software solution that solves a particular business objective in one of your departments.'
    },
    {
      icon: <History className="w-10 h-10" />,
      title: 'Legacy Modernization',
      description: 'Support your business infrastructure with scalable software that improves key facets of your enterprise, from automation to employee collaboration. Leverage our decade-long expertise to build an enterprise software solution that solves a particular business objective in one of your departments.'
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: 'Software Integration',
      description: 'Enterprises like yours rely on well-coordinated SaaS and on-premise third-party applications. Improve your software infrastructure with well-built microservices, reliable API, and data integration. Launch your mobile strategy with our comprehensive enterprise application development, or use our enterprise app integration solutions.'
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: 'Consolidation',
      description: 'Frequent mergers and acquisitions leave enterprises with a wide variety of uncoordinated software solutions. Our experts will help you consolidate, integrate, and refactor your enterprise software as necessary, moving them to modern software stacks and cloud hosting. You will streamline IT operations, minimize costs, and increase employee efficiency.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071B52] mb-6 tracking-tight">
            Enterprise Software Development Solutions In Ethiopia
          </h2>
          <p className="max-w-4xl mx-auto text-gray-500 text-lg leading-relaxed">
            Ethiopian business needs a reliable enterprise software solution to support your many operations. It needs to scale, coordinate other software and mobile apps, incorporate advance tech, and cover an extensive list of other objectives. Intellectsoft has the experience, tools, and technologies to create such demanding custom software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-10 group"
            >
              <div className="shrink-0">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#071B52] mb-6 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
