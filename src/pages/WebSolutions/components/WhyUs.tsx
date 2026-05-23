import { motion } from 'motion/react';
import { MousePointer2, FileText, Search, UserCheck, Smartphone, Headphones, Accessibility, Gauge } from 'lucide-react';

export default function WebSolutionsWhyUs() {
  const points = [
    { icon: <MousePointer2 className="w-6 h-6" />, title: 'Web Design Options', text: 'We offers a wide variety of website design options for you to comfortably personalize your company website.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Well Documented', text: 'Our web systems comes with an extensive documentation, which is well-written and greatly detailed for users.' },
    { icon: <Search className="w-6 h-6" />, title: 'SEO Strategies', text: 'We apply Meta description integration, generic page title strategy and analytics script integration from the development stage itself.' },
    { icon: <UserCheck className="w-6 h-6" />, title: 'Skilled Experts', text: 'Our team of highly skilled experts in the field has worked so hard together to develop web systems in Ethiopia.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Friendly', text: 'Websites created by YARC Systems are completely friendly and adaptable on all mobile and tab devices.' },
    { icon: <Headphones className="w-6 h-6" />, title: 'Reliable team support', text: 'Knowing that you have a team on your side who care about the growth of your business makes it easier.' },
    { icon: <Accessibility className="w-6 h-6" />, title: 'Easy Accessible', text: 'Our web system is super easy to customize and set everything up.' },
    { icon: <Gauge className="w-6 h-6" />, title: 'Website Speed Tests', text: 'The result of the speed test for sites that we develop has been beyond our expectation.' }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#071B52] mb-12 tracking-tight">
                What Makes YARC Systems The Best Web Designing Company in Ethiopia?
            </h2>
            <p className="max-w-4xl mx-auto text-gray-500 text-lg">
                We are one of the leading web design companies being trusted by thousands of businesses across the Ethiopia. YARC Systems is a leading name when it comes to website design in Ethiopia. Here are some services you can opt for from us:
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {points.map((point, index) => (
                <motion.div
                    key={point.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-10 rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:shadow-gray-100 transition-all text-center group flex flex-col items-center"
                >
                    <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary/40 mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                        {point.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#071B52] mb-4 group-hover:text-primary transition-colors">
                        {point.title}
                    </h3>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                        {point.text}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
