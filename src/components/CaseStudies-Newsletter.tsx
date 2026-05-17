export default function CaseStudiesNewsletter() {
  return (
    <section className="py-24 border-t border-gray-100 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">The Weekly Insight.</h3>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Curated executive summaries of AI research delivered every Monday morning.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="email@address.com" 
            className="bg-white border border-outline px-6 py-5 rounded-lg w-full sm:w-96 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
          <button className="bg-primary text-white font-bold px-10 py-5 rounded-lg hover:opacity-90 transition-all shadow-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
