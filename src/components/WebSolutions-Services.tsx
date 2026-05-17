import { motion } from 'motion/react';
import { Layout, AppWindow, TrendingUp, MonitorCheck } from 'lucide-react';

export default function WebSolutionsServices() {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Web Portal Development Services',
      description: 'The type and kind of designs for a web portal differ from the kind of business it has. Our web designing company in Ethiopia includes all the essentials while providing popular design services.'
    },
    {
      icon: <AppWindow className="w-8 h-8" />,
      title: 'Web Application Interface Design',
      description: 'Outsource web designing and development services to YARC Systems and get great app interface design with a perfect font that defines your businesses’ goods and services in the best possible way.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Better SEO Rankings',
      description: 'We ensure that your website design and development checks all boxes that search engines like Google, Yahoo, Bing, etc ... prefers to give you a high ranking.'
    },
    {
      icon: <MonitorCheck className="w-8 h-8" />,
      title: 'Custom Website Designing and Development',
      description: 'Our website design company in Ethiopia gives impressive visual design with beautiful typography, keeping the target audience in mind. This makes our quality design strike the right chords.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#071B52] mb-12 tracking-tight">
                Work Like a Pro. <span className="text-primary italic">Purchase Essentials.</span>
            </h2>
            <p className="max-w-4xl text-gray-400 text-lg leading-relaxed">
                Our custom web design company offers affordable and creative website design services to startups, SMEs, and enterprises. Our web designers in Ethiopia have been consistently producing innovative & eye-catchy designs. Besides, we are the best partner when it comes to web design in Ethiopia.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-10 rounded-3xl bg-[#F8FAFC] border border-gray-100 group transition-all"
                >
                    <div className="flex gap-8 items-start">
                        <div className="shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary/40 group-hover:text-primary transition-all">
                            {service.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#071B52] mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                                {service.description}
                            </p>
                            <button className="bg-primary text-white text-[10px] font-bold px-6 py-2.5 rounded-full hover:scale-105 transition-all uppercase tracking-widest">
                                Learn More
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
