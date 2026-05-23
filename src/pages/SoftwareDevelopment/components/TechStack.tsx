import { motion } from 'motion/react';
import { Database, Cloud, Smartphone, Globe, Code2, Terminal } from 'lucide-react';

export default function SoftwareDevTechStack() {
  const stacks = [
    {
      title: 'Frontend',
      icon: <Globe className="w-5 h-5" />,
      items: [
        { name: 'React', color: 'bg-blue-50 text-blue-600' },
        { name: 'Next.js', color: 'bg-gray-50 text-gray-900' },
        { name: 'TypeScript', color: 'bg-blue-50 text-blue-700' },
        { name: 'Vue', color: 'bg-green-50 text-green-600' },
        { name: 'Angular', color: 'bg-red-50 text-red-600' },
        { name: 'Tailwind CSS', color: 'bg-sky-50 text-sky-500' },
      ]
    },
    {
      title: 'Backend',
      icon: <Terminal className="w-5 h-5" />,
      items: [
        { name: 'Node.js', color: 'bg-green-50 text-green-700' },
        { name: 'Python (Django/FastAPI)', color: 'bg-emerald-50 text-emerald-600' },
        { name: 'Go', color: 'bg-cyan-50 text-cyan-600' },
        { name: 'Java Spring Boot', color: 'bg-green-50 text-green-600' },
        { name: '.NET Core', color: 'bg-purple-50 text-purple-600' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-5 h-5" />,
      items: [
        { name: 'PostgreSQL', color: 'bg-slate-50 text-slate-700' },
        { name: 'MongoDB', color: 'bg-green-50 text-green-600' },
        { name: 'MySQL', color: 'bg-blue-50 text-blue-600' },
        { name: 'AWS', color: 'bg-orange-50 text-orange-600' },
        { name: 'Google Cloud', color: 'bg-blue-50 text-blue-500' },
        { name: 'Azure', color: 'bg-blue-50 text-blue-700' },
      ]
    },
    {
      title: 'Mobile Tech',
      icon: <Smartphone className="w-5 h-5" />,
      items: [
        { name: 'React Native', color: 'bg-sky-50 text-sky-600' },
        { name: 'Flutter', color: 'bg-indigo-50 text-indigo-500' },
        { name: 'Swift', color: 'bg-orange-50 text-orange-500' },
        { name: 'Kotlin', color: 'bg-purple-50 text-purple-500' },
        { name: 'Ionic', color: 'bg-blue-50 text-blue-400' },
      ]
    }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#071B52] mb-12 tracking-tight">
            Building <span className="text-primary">innovation</span> with our expertise in tech stack
          </h2>
          <p className="max-w-3xl text-gray-500 text-lg leading-relaxed font-medium">
            With our experience and advanced tech stack, we build solutions that meet the highest industry standards. Our experts ensure the smooth integration of technology to maximize impact and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary">
                  {stack.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#071B52]">{stack.title}</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {stack.items.map((tech) => (
                  <div 
                    key={tech.name}
                    className={`px-6 py-4 rounded-2xl ${tech.color} font-bold text-xs tracking-wider uppercase border border-current opacity-70 hover:opacity-100 transition-opacity cursor-default`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
