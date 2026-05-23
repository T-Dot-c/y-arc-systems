export default function OurClientsLogoGrid() {
  const logos = [
    { name: 'Mastercard', symbol: 'M' },
    { name: 'Unilever', symbol: 'U' },
    { name: 'RSA', symbol: 'RSA' },
    { name: 'Client 4', symbol: '-' },
    { name: 'H&M', symbol: 'H&M' },
    { name: 'Africa', symbol: '🌍' },
    { name: 'Client 7', symbol: '=' },
    { name: 'Client 8', symbol: '...' },
  ];

  return (
    <section className="mt-32 pb-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-[#071B52]">
            Trusted by <br />
            <span className="text-[#0D6399]">Top Enterprises</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed font-medium">
            We have been in the market for 15+ years and worked with the top companies and brands across various industries, delivering robust network solutions that power global commerce.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#48ACE4] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3999cd] transition-all shadow-lg shadow-[#48ACE4]/20 text-sm">
              More Customers
            </button>
            <button className="border-2 border-[#071B52] text-[#071B52] px-8 py-4 rounded-full font-bold hover:bg-[#071B52] hover:text-white transition-all text-sm">
              Success Stories
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="aspect-square bg-white border border-gray-100 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
            >
              <div className="text-gray-400 font-bold tracking-tighter text-sm uppercase">{logo.symbol}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
