import { ChevronLeft, ChevronRight, Clock, Heart, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogFeatured() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="flex justify-between items-end mb-12">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-bold text-on-surface">Featured Articles</h2>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary/5 transition-colors">
              <ChevronLeft className="w-5 h-5 text-on-surface" />
            </button>
            <button className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary/5 transition-colors">
              <ChevronRight className="w-5 h-5 text-on-surface" />
            </button>
          </div>
        </div>

        <div className="group relative bg-surface rounded-[32px] overflow-hidden border border-outline flex flex-col lg:flex-row min-h-[480px] shadow-sm">
          <div className="lg:w-1/2 relative bg-primary p-12 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="absolute top-8 left-8 flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Editor's Pick</span>
            </div>
            <div className="absolute top-8 right-8 text-[12px] font-mono text-white/60">04 / 04</div>
            
            <BookOpen className="w-48 h-48 text-white/20" />
            
            <div className="absolute bottom-8 left-8 flex gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-bold border border-white/20 text-white">AI Regulation</span>
              <span className="px-3 py-1 bg-white/20 rounded-lg text-[10px] font-bold border border-white/20 text-white">Compliance</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-primary mb-6">
              <Clock className="w-4 h-4" />
              <span className="font-mono text-[12px] uppercase tracking-wider font-medium">11 MIN READ</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-6 leading-tight">
              Navigating the EU AI Act: What Every Software Company Needs to Know...
            </h3>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Ensure your AI products meet the latest standards with an EU-compliant software development partner. We explain the EU AI Act.
            </p>
            
            <div className="flex items-center justify-between mt-auto gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">ES</div>
                <div>
                  <p className="font-bold text-on-surface">Eyasu Sintayehu</p>
                  <p className="text-sm text-on-surface-variant">Software Engineer | AI Engineer</p>
                </div>
              </div>
              <a className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all" href="#">
                Read Article
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <div className="w-2 h-2 rounded-full bg-outline"></div>
          <div className="w-2 h-2 rounded-full bg-outline"></div>
          <div className="w-8 h-2 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
}
