import { Quote, CircleUser } from 'lucide-react';

const testimonials = [
  { id: '01.', active: false },
  { id: '02.', active: false },
  { id: '03.', active: false },
  { id: '04.', active: true },
  { id: '05.', active: false },
];

export default function OurClientsTestimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#071B52] mb-3">Client Testimonials</h2>
          <p className="text-gray-500 font-medium tracking-tight">Reviews from Our Most Valued Strategic Partners</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto relative">
          {/* Vertical Navigation Overlay */}
          <div className="flex lg:flex-col gap-8 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            {testimonials.map((t) => (
              <button 
                key={t.id} 
                className={`text-lg font-bold transition-all ${t.active ? 'text-[#071B52] border-b-2 border-[#0D6399]' : 'text-gray-300'}`}
              >
                {t.id}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
            <div className="w-full md:w-[400px] aspect-square relative">
              <img 
                src="https://images.unsplash.com/photo-1549462980-6a620041824c?auto=format&fit=crop&q=80&w=800" 
                alt="Client Branding" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/20 flex items-center justify-center">
                <h3 className="text-8xl font-black text-red-700/80 italic tracking-tighter mix-blend-multiply">H&M</h3>
              </div>
            </div>
            
            <div className="flex-1 p-12 lg:p-16 relative bg-white max-w-xl">
              <div className="absolute top-8 right-12">
                <div className="w-12 h-12 rounded-full bg-sky-50 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-sky-400 rotate-180" />
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-[#071B52]">H & M</h4>
                <p className="text-gray-600 leading-relaxed italic text-lg">
                  "IE Network Solutions have different brand global partnership, so it was a clear choice for us to source from a single provider. We found IE Networks to be one of the best in the region for delivering on time and exactly as we need it for our retail infrastructure."
                </p>
                <div className="flex items-center gap-4 pt-6">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                    <CircleUser className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#071B52]">Regional IT Director</p>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Global Retail Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
