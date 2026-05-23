import { Cloud, Settings, BarChart3 } from 'lucide-react';

export default function OurClientsTrustIndicators() {
  const tracks = [
    {
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      bg: 'bg-orange-50',
      title: 'Partners with leaders',
      desc: 'We maintain strategic alliances with global technology vendors, ensuring our clients receive the most advanced and reliable solutions.'
    },
    {
      icon: <Settings className="w-6 h-6 text-emerald-500" />,
      bg: 'bg-emerald-50',
      title: 'Experienced Professionals',
      desc: 'Our team consists of certified network architects and engineers with deep expertise in enterprise-scale digital transformation.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-sky-500" />,
      bg: 'bg-sky-50',
      title: '12+ Years of Experience',
      desc: 'Over a decade of successful deployments across finance, government, and commercial sectors, proving our long-term reliability.'
    }
  ];

  return (
    <section className="mt-32 pb-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#071B52] mb-3">Our Track Record</h2>
          <p className="text-gray-500 font-medium">Scaling technology infrastructure for industry leaders across Africa and beyond.</p>
          <div className="w-full h-px bg-gray-200 mt-12"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 rounded-2xl ${track.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {track.icon}
              </div>
              <h3 className="text-xl font-bold text-[#071B52] mb-4">{track.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {track.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
