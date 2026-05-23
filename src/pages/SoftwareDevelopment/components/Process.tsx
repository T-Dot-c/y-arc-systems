import { motion } from 'motion/react';
import { PenTool, LayoutGrid, Award, MessageSquare } from 'lucide-react';

export default function SoftwareDevProcess() {
  const steps = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Planning And Strategy',
      description: 'In this phase, all the integrals are discussed and estimated; timelines are decided, roles are allotted, milestones and modules etc are also decided in this phase. So, this is one of those phases where the developer chalks out the plan for developing the project as per the SRS (Software Requirement Specification) documentation signed by the client.'
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: 'Development & Customization',
      description: 'The programming, testing, debugging, prototype delivery and development, project functionalities and UI – all these are developed and things start taking shape. The first working model is shown to the client and reviews or feedbacks are taken for everything. Once the client approves, we take things ahead and the project enters the next phase.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'In this phase, the quality of the software is checked so that it satisfies the major requirements of complete and successful project development. The project must be robust, reliable, scalable, available and feature downward compatibility.',
      isHighlighted: true
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Support And Maintenance',
      description: 'The rules for future service in terms of Support and Maintenance are established and contracts are signed. We proudly say YARC Systems is the best software development company in Ethiopia, as we caters the best software development services with high agility and perfection.'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(36,87,255,0.03)_0,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-16 relative">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071B52] tracking-tight">
            YARC Systems Custom Software Development Process
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
