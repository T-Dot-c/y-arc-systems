export default function BlogCTA() {
  return (
    <div className="bg-primary rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center text-white shadow-2xl">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Stay Ahead of the Curve</h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Subscribe to our newsletter for the latest engineering insights, product updates, and industry case studies delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/50 outline-none focus:border-white focus:bg-white/20 transition-all"
          />
          <button type="submit" className="px-8 py-4 bg-secondary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-primary transition-all active:scale-95 shadow-lg shadow-secondary/30">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-white/40 mt-4 uppercase tracking-widest">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
