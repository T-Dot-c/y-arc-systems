import { CheckCircle2 } from 'lucide-react';

export default function OurClientsPartnershipBenefits() {
  return (
    <section className="py-24 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black mb-8 tracking-tight">Partnership Benefits</h2>
          <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
            We strive to be the nation’s leading IT company and through the years we have worked as the main enterprise solutions provider. Our partnership with world renowned companies around the globe ensures excellence.
          </p>
          <div className="space-y-6">
            {[
              'Get access to our sales and marketing resources',
              'Grow with our pre-sales support',
              'We have a reputation in the market'
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-bold opacity-80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1200" 
            alt="Partnership" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
