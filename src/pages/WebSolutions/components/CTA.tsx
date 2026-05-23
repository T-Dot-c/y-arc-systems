import { motion } from 'motion/react';

export default function WebSolutionsCTA() {
  return (
    <section className="py-16 bg-[#5B5566] text-white overflow-hidden relative">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-4xl text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight">
                    Ready to Get Started for Website Design and Development?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                    Generate more sales and revenues with our top-notch custom Website Design and Development development services. At YARC Systems we implement the latest technologies to develop an website platform that stands out from the rest. Looking for the best Website Design and Development company in Ethiopia? You’ve landed in the right place. Contact us and get a free consultation from our experts today!
                </p>
            </div>
            
            <button className="bg-white text-[#071B52] px-12 py-5 rounded font-bold text-sm hover:bg-primary hover:text-white transition-all shadow-xl whitespace-nowrap min-w-[200px]">
                Contact Us
            </button>
        </div>
    </section>
  );
}
