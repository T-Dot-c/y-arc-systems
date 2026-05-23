export default function CaseStudiesCareersCTA() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-16 relative z-10 text-white">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-6">Engineering the Future?</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Join our research team and build the next generation of sovereign infrastructure. We're looking for architects of the impossible.
          </p>
        </div>
        <button className="bg-white text-primary px-12 py-5 rounded-full font-bold hover:scale-105 transition-all shadow-2xl whitespace-nowrap">
          View Careers
        </button>
      </div>
    </section>
  );
}
