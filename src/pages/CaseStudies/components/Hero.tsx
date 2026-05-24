import { motion } from 'motion/react';

const trendingInsights = [
  { id: '01', title: 'The 2024 Quantum Encryption Paradox: Are We Ready?', author: 'BY MARKUS VOGT' },
  { id: '02', title: 'Hyper-Scalable Cloud Architectures: Lessons from the Edge', author: 'BY ELENA RODRIGUEZ' },
  { id: '03', title: 'Biometric Surveillance and the Future of Digital Privacy', author: 'BY LIAM O\'SULLIVAN' },
  { id: '04', title: 'Rust vs. Go: The Technical Debt of Choice in 2024', author: 'BY JORDAN SMYTHE' },
];

export default function CaseStudiesHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-16 mt-32 pb-24 border-b border-gray-100">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Story */}
        <div className="lg:w-2/3">
          <div className="inline-block bg-[#071B52] text-white text-[10px] font-bold px-3 py-1 mb-6 tracking-widest uppercase rounded-sm">
            THE BIG STORY
          </div>
          <div className="mb-8 relative group overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200" 
              alt="Circuit Board" 
              className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <div className="text-primary font-mono text-[10px] font-bold tracking-widest uppercase">AI ENGINEERING</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              How Neural Networks are Rewriting the Playbook for Industrial Automation
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Across the global manufacturing sector, a silent revolution is taking place. Y Arc's latest deep-learning models are moving beyond simple predictive maintenance into autonomous executive decision-making.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-[#071B52] uppercase">
              <span>BY SARAH CHEN</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-gray-400 font-medium">12 MIN READ</span>
            </div>
          </div>
        </div>

        {/* Trending Insights Sidebar */}
        <div className="lg:w-1/3">
          <div className="border-t-2 border-primary pt-4 mb-10">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">TRENDING INSIGHTS</h2>
          </div>
          <div className="space-y-12">
            {trendingInsights.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <span className="text-primary font-mono text-sm font-bold mb-3 block tracking-tighter">{item.id}</span>
                <h3 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 mt-3 uppercase">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
