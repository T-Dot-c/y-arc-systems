import { motion } from 'motion/react';
import { CloudUpload, Ruler, Smartphone, Database, Palette, Star } from 'lucide-react';

export default function SoftwareDevServices() {
  const services = [
    {
      icon: <CloudUpload className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'We at YARC Systems have transformed a lot of companies digitally from big to startups. Our unique and creative thinking practice enables Ethiopian companies to understand digital wealth from business results.'
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'We at YARC Systems have facilitated a number of businesses and startups in developing excellent B2B and B2C custom web and software applications for a variety of Ethiopian industries. Our dedicated team has successfully completed thousands of projects to date.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'From initial requirements to the final launch of the app in the app store, Our mobile application development team focuses on everything. We at YARC Systems develop both native & cross-platform mobile apps with rich-feature integration based on the latest technology.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'SaaS Development',
      description: 'Our highly talented team of developers at YARC Systems information system provides high-quality SaaS or cloud-based product development solutions across Ethiopia and the globe.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Our highly creative designers offer your web application a highly interactive design, motion graphics, and user-friendly interface that suits your brand.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Testing & Quality Assurance',
      description: 'From the beginning of the project development, our highly experienced software testing and QA team continuously monitor and test the projects in order to run them smoothly across all devices as browsers.'
    }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071B52] mb-6 tracking-tight">
            Enhance Software Development Services
          </h2>
          <p className="max-w-3xl mx-auto text-gray-500 text-lg">
            We incorporate the full cycle of offshore software development services. We focus on providing managed dedicated teams and developing sophisticated enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-gray-200 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary/40 mb-10 group-hover:scale-110 group-hover:text-primary transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#071B52] mb-6">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[13px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
