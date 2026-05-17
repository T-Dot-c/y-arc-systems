import { motion } from 'motion/react';
import { BarChart3, Star, ThumbsUp, RefreshCcw, Rocket, Lightbulb } from 'lucide-react';

const benefits = [
  {
    title: 'Improved Productivity',
    desc: 'Automate redundancy to focus your team on high-value activities.',
    icon: <RefreshCcw className="w-6 h-6" />,
    color: 'text-secondary'
  },
  {
    title: 'Better Analytics',
    desc: 'Centralized data for better intelligence and real-time decisions.',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'text-secondary'
  },
  {
    title: 'Grow Business',
    desc: 'Optimize resources and eliminate inefficiencies to scale your business.',
    icon: <Star className="w-6 h-6" />,
    color: 'text-secondary'
  },
  {
    title: 'Minimize Errors',
    desc: 'Reduce human error with seamless, accurate data flow across departments.',
    icon: <ThumbsUp className="w-6 h-6" />,
    color: 'text-secondary'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 px-6 bg-white text-primary overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#f1f5f9]/80 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

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
              <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-6 font-display tracking-tight leading-tight">
                What Are the <span className="text-secondary">Benefits of Software</span> for Your Business?
              </h2>
              <p className="text-[#64748b] text-base max-w-2xl leading-relaxed font-medium">
                Manage all business functions within a centralized, integrated system to drive operational excellence.
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
                  className="space-y-5 group"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-4 bg-slate-100 border border-slate-200 text-secondary rounded-2xl group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] font-display uppercase tracking-wide">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:w-1/3 relative"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/5 rounded-full blur-3xl opacity-50" />
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-slate-100 rounded-full blur-2xl" />
              
              {/* Iconic Representation */}
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
                  <div className="w-48 h-48 bg-yellow-400/20 flex items-center justify-center rounded-full mb-4 shadow-[0_0_50px_rgba(250,204,21,0.15)] relative border border-yellow-400/20">
                    <Lightbulb className="w-24 h-24 text-[#eab308]" strokeWidth={1} />
                    <motion.div 
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2"
                      animate={{ height: [20, 40, 20], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Rocket className="w-12 h-12 text-secondary -rotate-45" />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10 p-4 bg-white border border-slate-100 shadow-xl rounded-2xl">
                  <BarChart3 className="w-6 h-6 text-secondary" />
                </div>
                <div className="absolute top-1/2 -right-10 p-4 bg-white border border-slate-100 shadow-xl rounded-2xl">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
