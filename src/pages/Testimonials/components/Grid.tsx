import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kim Thurnherr',
    role: 'CEO, tabside GmbH',
    content: 'We engaged Y Arc Systems to design, develop, and maintain a multi-tenant SaaS platform for automated recurring billing with integration into an existing system. Y Arc Systems demonstrated strong technical expertise and a structured, solution-oriented approach throughout the engagement. They communicated clearly, adapted well to evolving requirements, and delivered reliably within agreed timelines.',
    rating: 5
  },
  {
    name: 'Sarah Meier',
    role: 'Co-Founder & CEO, Pixel Tech',
    content: 'Y Arc Systems helped us build and launch our SaaS product from concept to live in record time. Their team brought fresh ideas, adapted instantly to our changing priorities, and delivered a clean, scalable solution that grew with us. Communication was excellent and they truly felt like an extension of our own team. We couldn\'t recommend them more highly for any startup looking for a reliable development partner.',
    rating: 5
  },
  {
    name: 'Michael Berger',
    role: 'Chief Technology Officer, TechniData Solutions',
    content: 'We selected Y Arc Systems for a complex enterprise-grade platform requiring secure integrations, role-based controls, and high-reliability automation. Their backend architecture and attention to detail exceeded our expectations. The project was delivered on schedule with zero surprises, and their structured approach gave our internal team complete confidence. They are now our go-to partner for mission-critical software development.',
    rating: 5
  },
  {
    name: 'Brogan Wells',
    role: 'Electronic Arts QA Director of FIFA Games',
    content: 'Working with Y Arc Tech was straightforward and productive from the first week. They communicated clearly, surfaced risks early, and contributed practical suggestions that strengthened both product quality and delivery confidence. I would gladly collaborate with them again because they combine technical depth with a genuinely collaborative mindset.',
    rating: 5
  },
  {
    name: 'Eric Jackson',
    role: 'CocaCola Event Coordinator',
    content: 'Y Arc Tech delivered a professional solution under a tight timeline when execution speed mattered most for our event schedule. Their planning was structured, communication stayed transparent, and the implementation quality held up even under last-minute changes. The team brought full-stack expertise with the calm, reliable execution we needed.',
    rating: 5
  },
  {
    name: 'David Christensen',
    role: 'CTO of TechniData Solutions',
    content: 'Y Arc Tech stands out as a disciplined engineering partner with strong architectural thinking and excellent execution habits. They were proactive in technical discussions, practical in delivery planning, and consistent in maintaining quality across the build cycle. This was one of the most dependable development partnerships we have had.',
    rating: 5
  }
];

export default function TestimonialsGrid() {
  return (
    <section className="pb-24 px-4 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-primary p-8 rounded-[2rem] flex flex-col h-full text-white shadow-xl relative group hover:-translate-y-2 transition-transform duration-300"
          >
            <Quote className="w-10 h-10 text-white/20 mb-6" />
            <p className="text-sm md:text-base leading-relaxed mb-12 italic opacity-90">
              "{t.content}"
            </p>
            
            <div className="mt-auto pt-8 border-t border-white/20">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="font-black text-lg tracking-tight mb-1">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/60">{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
