import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Briefcase, Globe, MessageSquare, History, Hexagon } from 'lucide-react';

const resourceCategories = [
  {
    title: 'Resources',
    items: [
      { name: 'Blog', desc: 'Notes on craft, delivery, and lessons from our projects.', icon: <FileText className="w-5 h-5" />, to: '/blog' },
      { name: 'Case Studies', desc: 'Client journeys from kickoff through launch and support.', icon: <Briefcase className="w-5 h-5" />, to: '/case-studies' },
    ]
  },
  {
    title: 'Learn',
    items: [
      { name: 'Our Clients', desc: 'Brands trusting systems we design, build, and operate.', icon: <Globe className="w-5 h-5" />, to: '/our-clients' },
      { name: 'Testimonials', desc: 'Partners on speed, quality, collaboration, reliability.', icon: <MessageSquare className="w-5 h-5" />, to: '/testimonials' },
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'Our Story', desc: 'How we began, what we believe, and the vision ahead.', icon: <History className="w-5 h-5" />, to: '/our-story' },
    ]
  }
];

interface ResourcesMegaMenuProps {
  closeMenu: () => void;
}

export default function ResourcesMegaMenu({ closeMenu }: ResourcesMegaMenuProps) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* content area */}
        <div className="flex-1 p-12 pr-6">
          <div className="grid grid-cols-3 gap-10">
            {resourceCategories.map((cat) => (
              <div key={cat.title}>
                <h3 className="text-[10px] font-black text-[#545454] uppercase tracking-[0.2em] mb-8 pr-4 border-b border-outline-variant/30 pb-2 inline-block">
                  {cat.title}
                </h3>
                <div className="space-y-8">
                  {cat.items.map((item) => (
                    <Link 
                      key={item.name} 
                      to={item.to} 
                      className="group cursor-pointer block"
                      onClick={() => closeMenu()}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-surface text-[#4b8aff] rounded-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-black/80 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-outline leading-relaxed line-clamp-2 pr-4">{item.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Info Panel */}
        <div className="w-[300px] bg-slate-50 border-l border-outline-variant/30 p-12 relative overflow-hidden flex flex-col items-center text-center justify-center">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-secondary flex items-center justify-center rounded-2xl rotate-12 shadow-xl shadow-secondary/20 mx-auto mb-8 group-hover:rotate-0 transition-transform duration-500">
              <Hexagon className="text-white w-10 h-10 -rotate-12" />
            </div>
            <h2 className="text-xl font-bold text-primary tracking-tighter uppercase mb-3">
              Y ARC <span className="font-normal text-black/60">Systems PLC</span>
            </h2>
            <p className="text-[11px] text-[#2457FF]/80 font-medium max-w-[200px] leading-relaxed">
              Engineering clarity from complexity with human-centered design.
            </p>
            
            <div className="mt-8 pt-8 border-t border-outline-variant/30 flex flex-col gap-3">
              <Link to="/" className="text-[10px] font-black text-secondary hover:text-primary uppercase tracking-widest transition-colors">Join the Team</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
