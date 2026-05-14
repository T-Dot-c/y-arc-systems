import { motion } from 'motion/react';
import { BarChart3, Star, ThumbsUp, RefreshCcw, Rocket, Lightbulb } from 'lucide-react';

const benefits = [
  {
    title: 'Improved Productivity',
    desc: 'Software can automate your most tedious tasks. The database within software eliminates redundant tasks such as data entry and allows the system to perform advanced calculations within minutes.',
    icon: <RefreshCcw className="w-6 h-6" />,
    color: 'text-secondary'
  },
  {
    title: 'Better Analytics',
    desc: 'A central database of information also aids in improving your analytics and reporting. Software records and stores all the data users input, it makes for an excellent business intelligence tool.',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'text-secondary'
  },
  {
    title: 'Grow Business',
    desc: 'An ERP system can eliminate inefficiencies, wasted time and wasted resources, empowering your business to thrive and flourish.',
    icon: <Star className="w-6 h-6" />,
    color: 'text-secondary'
  },
  {
    title: 'Minimize Errors',
    desc: 'Custom software offers you the opportunity to reduce human error significantly. Information flows through the whole system, with each department accessing the correct original data.',
    icon: <ThumbsUp className="w-6 h-6" />,
    color: 'text-secondary'
  }
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-[#020617] text-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-display tracking-tight leading-tight">
                What Are the <span className="text-secondary">Benefits of Software</span> for Your Business?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                Custom software is used by organizations looking to manage their business functions within a centralized and integrated system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-white/5 border border-white/10 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white transition-all">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Illustration Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:w-1/3 relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl opacity-50" />
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              {/* Iconic Representation of the Image */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                   animate={{ 
                     y: [0, -20, 0],
                     rotate: [12, 10, 12]
                   }}
                   transition={{ 
                     duration: 4,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                   className="relative"
                >
                  <div className="w-48 h-48 bg-yellow-400/20 flex items-center justify-center rounded-full mb-4 shadow-[0_0_50px_rgba(250,204,21,0.2)] relative border border-yellow-400/30">
                    <Lightbulb className="w-24 h-24 text-yellow-500" strokeWidth={1} />
                    <motion.div 
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                      animate={{ height: [20, 40, 20], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Rocket className="w-12 h-12 text-secondary -rotate-45" />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Floatings Clouds/Icons */}
                <div className="absolute -top-10 -left-10 p-4 bg-slate-800 border border-white/10 shadow-2xl rounded-2xl">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <div className="absolute top-1/2 -right-10 p-4 bg-slate-800 border border-white/10 shadow-2xl rounded-2xl">
                  <Star className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
