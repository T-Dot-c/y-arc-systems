import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';
import { industries, industryContent } from './data/industriesData';

interface IndustriesMegaMenuProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  closeMenu: () => void;
}

export default function IndustriesMegaMenu({ activeTab, setActiveTab, closeMenu }: IndustriesMegaMenuProps) {
  return (
    <div className="flex flex-col min-h-[400px]">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-[280px] bg-slate-50/80 p-6 space-y-2 border-r border-outline-variant/30">
          <p className="text-xs font-bold text-outline/50 uppercase tracking-[0.15em] pl-3.5 mb-6">
            Sectors
          </p>
          {industries.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                to={`/#${tab.id}`}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => {
                  closeMenu();
                  setTimeout(() => {
                    const el = document.getElementById(tab.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all duration-300 group ${
                  isActive 
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20 scale-[1.02]' 
                    : 'text-[#545454] hover:bg-white hover:text-secondary hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`transition-colors ${isActive ? 'text-white' : 'text-[#4b8aff] group-hover:text-[#4b8aff]'}`}>
                    {tab.icon}
                  </div>
                  <span className="text-[13px] font-bold tracking-tight">{tab.name}</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </Link>
            );
          })}
        </div>
        
        {/* Content Area */}
        <div className="flex-1 bg-white p-8 font-sans relative">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-full"
          >
            <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-[#545454]">
                  {industries.find(s => s.id === activeTab)?.icon}
                </div>
                <h3 className="text-xl font-bold text-[#545454] tracking-tight">
                  {industries.find(s => s.id === activeTab)?.name}
                </h3>
                <div className="h-px flex-1 bg-outline-variant/30 ml-4" />
            </div>

            <div className="grid grid-cols-4 gap-x-8 gap-y-6">
              {industryContent[activeTab]?.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-surface text-[#4b8aff] group-hover:bg-secondary transition-colors group-hover:text-white">
                      {item.icon}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className="text-sm font-bold text-[#545454] flex items-center gap-2 transition-colors">
                        {item.title}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                      </h4>
                      <p className="text-[12px] leading-relaxed text-[#545454]/80">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-slate-100/80 border-t border-outline-variant/30 px-8 py-4 flex items-center justify-between">
        <Link 
          to={`/#${activeTab}`}
          onClick={() => {
            closeMenu();
            setTimeout(() => {
              const el = document.getElementById(activeTab);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="flex items-center gap-2 text-[11px] font-bold text-secondary hover:text-primary transition-colors group"
        >
          READ MORE 
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
