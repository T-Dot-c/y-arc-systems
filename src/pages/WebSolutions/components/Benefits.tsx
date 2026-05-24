import { motion } from 'motion/react';

export default function WebSolutionsBenefits() {
  const benefits = [
    {
      title: 'Creative Solutions',
      description: 'Your custom website system will be attractive, multi-functional and deliver strong branding and a great user experience for your customers or employees.'
    },
    {
      title: 'Continuous improvement',
      description: 'We always combine our previous wins, learning curves, industry knowledge and passion for innovation with tailored strategy – for proven results.'
    },
    {
      title: 'Flexible and Powerful',
      description: 'YARC Systems has always believes in giving control of the website to our client. We built web systems to be flexible and to easily accept custom programmed modules.'
    },
    {
      title: 'Quality-Driven Process',
      description: 'We employ quality-control checklists throughout the process and will communicate with you on a regular basis about the on-going status of your project.'
    }
  ];

  return (
    <section className="py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                 <h2 className="text-4xl md:text-6xl font-black text-[#071B52] mb-12 leading-tight tracking-tight">
                    Get a Head Start on the <span className="text-primary">Ethiopian Digital</span> Web Competitors.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                    We’re experts at creating websites that feature as your brand's hub — the critical piece of your marketing that works tirelessly to capture engagement and convert traffic into leads and sales.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                    >
                        <h3 className="text-xl font-bold text-primary mb-4">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {benefit.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
