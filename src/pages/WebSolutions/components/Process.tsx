import { motion } from 'motion/react';
import { PenTool, Laptop, Microscope, Rocket } from 'lucide-react';

export default function WebSolutionsProcess() {
  const steps = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Planning And Strategy',
      description: 'Once we have all the information, our experts get started with developing a sitemap that offers a clear idea of the website’s architecture. With our SEO strategy and proper planning, we make sure the results turn out to be stunning.'
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'UI/UX Design And Development',
      description: 'We create multiple design concepts and directions. We work on wireframe, layout, colour scheme, translate the design into the live site and more. This is one of the important stages where all the production work is done.'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Testing',
      description: 'Once the website has all the visuals and content, we get started for the testing phase. Our designer & web developers thoroughly tests each page, every link, content and validates all the codes to meet development standards and to ensure that the website is bug-free.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch',
      description: 'After the testing, we upload the files to the server. An FTP (File Transfer Protocol) software is used for that purpose. Run a final diagnostic check to ensure the website runs smoothly. We also offer a website maintenance service plan.',
      isHighlighted: true
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071B52] tracking-tight">
            Highly Effective Web Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[2rem] border transition-all duration-500 flex flex-col items-center text-center group ${
                step.isHighlighted 
                  ? 'bg-[#5B5566] border-none text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-100'
              }`}
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${
                step.isHighlighted ? 'bg-white/10 text-white' : 'bg-primary/5 text-primary'
              }`}>
                {step.icon}
              </div>
              
              <h3 className={`text-xl font-bold mb-8 ${step.isHighlighted ? 'text-white' : 'text-[#071B52]'}`}>
                {step.title}
              </h3>
              
              <p className={`text-sm leading-relaxed ${step.isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
