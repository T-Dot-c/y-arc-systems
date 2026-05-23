const smallCaseStudies = [
  {
    category: 'ENGINEERING',
    title: 'Precision Robotics: The New Workforce',
    excerpt: 'The shift toward micro-precise autonomous assembly lines is accelerating.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'SECURITY',
    title: 'Defending the Perimeter in a Post-VPN World',
    excerpt: 'Zero-trust architecture is no longer optional for modern enterprises.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'AI',
    title: 'The Unsupervised Learning Breakthrough',
    excerpt: 'Why self-correcting algorithms are the next frontier of artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    category: 'GLOBAL',
    title: 'Scaling Infrastructures Across Seven Continents',
    excerpt: 'How Y Arc Tech is building the backbone for the emerging global markets.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  }
];

export default function CaseStudiesGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-16 py-24 border-b border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {smallCaseStudies.map((study, idx) => (
          <div key={idx} className="space-y-4 group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm aspect-video mb-6">
              <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-3 left-3 bg-white text-black text-[8px] font-bold px-2 py-1 uppercase tracking-widest shadow-sm">
                {study.category}
              </div>
            </div>
            <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{study.title}</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
              {study.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
