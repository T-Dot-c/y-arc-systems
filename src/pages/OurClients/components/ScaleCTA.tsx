import { Download } from 'lucide-react';

export default function OurClientsScaleCTA() {
  const stats = [
    { value: '500+', label: 'PROJECTS DELIVERED' },
    { value: '15+', label: 'YEARS INDUSTRY EXPERTISE' },
    { value: '98%', label: 'CLIENT RETENTION RATE' },
    { value: '24/7', label: 'PROACTIVE MONITORING' },
  ];

  return (
    <section className="bg-[#07132B] py-24 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content */}
        <div className="flex-1 text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] tracking-tight">
            Ready to scale your <br />
            <span className="text-[#48ACE4]">Enterprise?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
            Join the ranks of the world's leading brands. Let our team design a network infrastructure that grows with your vision.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-[#00668C] text-white px-10 py-5 rounded-lg font-black hover:bg-[#005575] transition-all shadow-xl shadow-black/20 text-sm">
              Schedule a Consultation
            </button>
            <button className="flex items-center gap-2 text-white font-bold text-sm group">
              Download Brochure 
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-[#102441] p-10 rounded-xl min-w-[240px] text-center border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="text-3xl font-black text-[#48ACE4] mb-2">{stat.value}</div>
              <div className="text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
