import { motion } from 'motion/react';

const clients = [
  { name: 'ClickUp', logoPath: '/logos/clickup.png', color: 'text-[#7B68EE]' },
  { name: 'Google', logoPath: '/logos/google.png', color: 'text-[#4285F4]' },
  { name: 'Microsoft', logoPath: '/logos/microsoft.png', color: 'text-[#737373]' },
  { name: 'Amazon', logoPath: '/logos/amazon.png', color: 'text-[#FF9900]' },
  { name: 'Meta', logoPath: '/logos/meta.png', color: 'text-[#0668E1]' },
  { name: 'Stripe', logoPath: '/logos/stripe.png', color: 'text-[#635BFF]' },
  { name: 'Netflix', logoPath: '/logos/netflix.png', color: 'text-[#E50914]' },
  { name: 'Airbnb', logoPath: '/logos/airbnb.png', color: 'text-[#FF5A5F]' },
];

export default function Clients() {
  return (
    <section className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-white mb-6 font-display tracking-tight"
        >
          Trusted by Global <span className="text-secondary-fixed">Innovation Leaders</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed font-medium"
        >
          We take pride in our long-term partnerships with diverse organizations across industries. 
          We deliver the precision and expertise needed to scale for the world's most recognized brands.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] flex items-center justify-center min-h-[140px] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 border border-white/5"
            >
              {/* Image Container - Ready for PNG/Images */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={client.logoPath} 
                  alt={client.name}
                  className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500 brightness-0 invert"
                  onError={(e) => {
                    // Fallback to text if image is not found
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className={`hidden text-2xl font-black tracking-tighter text-center transition-all duration-300 ${client.color} brightness-200`}>
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
