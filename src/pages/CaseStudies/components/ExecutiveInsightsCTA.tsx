import { Lock } from 'lucide-react';

export default function CaseStudiesExecutiveInsightsCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-16 py-24">
      <div className="bg-[#F7F8FC] border border-outline rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        <div className="flex-1 relative z-10">
          <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 mb-8 inline-block tracking-widest uppercase rounded-sm">
            SUBSCRIBER EXCLUSIVES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
            Insight Engineering: <br />
            The Executive Deep Dive
          </h2>
          <p className="text-lg text-on-surface-variant mb-12 max-w-xl leading-relaxed">
            Access our weekly technical audits and strategic outlooks designed for C-suite decision makers. Real data, zero fluff.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:translate-y-[-2px] transition-all shadow-lg shadow-primary/20">
              Subscribe Now
            </button>
            <button className="bg-white border border-outline text-[#071B52] px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-80 relative">
          <div className="bg-white shadow-3xl rounded-2xl p-8 border border-outline relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary mb-1">MARKET INTELLIGENCE</p>
                <p className="text-sm font-bold">Q4 Infrastructure Outlook</p>
              </div>
            </div>
            <div className="space-y-4 opacity-10">
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
            <div className="absolute inset-x-0 bottom-16 flex justify-center">
              <Lock className="w-10 h-10 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
