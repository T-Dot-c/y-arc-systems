import { motion } from 'motion/react';
import { Keyboard, Users2, LayoutTemplate } from 'lucide-react';

export default function SoftwareDevStrategic() {
  const approaches = [
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: 'Full Fledged Software Development',
      description: 'YARC Systems is a custom software development firm providing bespoke software development services beyond Ethiopia from startups, small to large companies that help you to align your business Processes & Workflows so you focus on business matters. We develop best-in-class software products that bring multi-fold growth to your businesses. Our software development services in Ethiopia comprise Web, Mobile, Desktop, and all other major technology offerings that help you ensure return on investment.'
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: 'Offshore Development Center',
      description: 'We are the best in providing offshore software development in Ethiopia. Offshore Development Center offers the benefits of extending legs and arms for your organization without hiring talent, businesses effectively get ownership of a full-time, fully dedicated team sitting at the YARC Systems\'s office. Hire expert resources at reasonable prices, at less than 60% of on-site costs.'
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: 'SaaS Product Implementation',
      description: 'YARC Systems has a proven track history for delivering scalable and robust SaaS platforms, We got a team of expert SaaS Consultants capable of guiding you from the conceptual phase to delivery & also assist in the Growth of the products. Get in touch with us for all your SaaS Application Development requirements.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#071B52] mb-10 leading-tight tracking-tight max-w-4xl mx-auto">
            Using A Strategic Approach We Develop Software's that Help Ethiopian Businesses Grow.
          </h2>
          <p className="max-w-4xl mx-auto text-gray-500 text-lg">
            We Design & Develop Custom Software Solutions that empower businesses to stay ahead of their competition. YARC Systems partners with you from an idea to execution, and importantly delivering top-notch Software Products within time, budget, and impeccable quality. As a top-rated Custom Software Outsourcing company in Ethiopia, we offer a team of highly experienced & Professional Developers available to work with you on fixed projects or dedicated resource hire models. YARC Systems has the right expertise for your next project. We are the best software development company in Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {approaches.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-100 transition-all group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary/40 mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#071B52] mb-6">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
