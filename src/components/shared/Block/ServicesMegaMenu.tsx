import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, ArrowRight, Database, Code, Globe, Cloud, Layout, Shield, Handshake, Landmark, Truck, Users, Building2, Smartphone, Settings, ShoppingCart, Monitor, Search, History, GraduationCap, Play } from 'lucide-react';

const services = [
  { id: 'enterprise-solutions', name: 'Enterprise Solutions', icon: <Database className="w-5 h-5" /> },
  { id: 'custom-dev', name: 'Software Development', icon: <Code className="w-5 h-5" /> },
  { id: 'web-digital', name: 'Web Based Solutions', icon: <Globe className="w-5 h-5" /> },
  { id: 'system-integration', name: 'System Integration', icon: <Cloud className="w-5 h-5" /> },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: <Layout className="w-5 h-5" /> },
  { id: 'security-infra', name: 'Security & Infrastructure', icon: <Shield className="w-5 h-5" /> },
  { id: 'support-maintenance', name: 'Support & Maintenance', icon: <Handshake className="w-5 h-5" /> },
];

const serviceContent: Record<string, { title: string; desc: string; icon: React.ReactNode }[]> = {
  'enterprise-solutions': [
    { title: 'Finance & Accounting Systems', desc: 'A comprehensive suite of integrated modules including General Ledger, Accounts Payable, Accounts Receivable, and Budgeting to ensure total financial transparency.', icon: <Landmark className="w-5 h-5" /> },
    { title: 'Inventory & Supply Chain', desc: 'Advanced real-time stock tracking with batch and expiry monitoring, multi-warehouse support, and automated procurement workflows.', icon: <Truck className="w-5 h-5" /> },
    { title: 'HR & Payroll Systems', desc: 'Efficient management of employee records and attendance with automated payroll processing compliant with local regulations.', icon: <Users className="w-5 h-5" /> },
    { title: 'Fixed Asset & Fleet Management', desc: 'Specialized tools for tracking and maintenance of company physical assets, depreciation, and vehicle usage.', icon: <Database className="w-5 h-5" /> },
    { title: 'Real Estate CRM & Automation', desc: 'Lead management, sales pipeline tracking, and business automation tools optimized for high-conversion industries.', icon: <Building2 className="w-5 h-5" /> },
  ],
  'custom-dev': [
    { title: 'Business Process Automation', desc: 'Tailored software designed to replace fragmented, manual processes with integrated digital workflows.', icon: <Code className="w-5 h-5" /> },
    { title: 'Enterprise App Development', desc: 'Design and development of scalable, high-performance applications based on specific industry challenges and workflows.', icon: <Smartphone className="w-5 h-5" /> },
    { title: 'Internal Platforms', desc: 'Creation of secure, modular, and role-based internal systems featuring comprehensive audit trails for organizational control.', icon: <Settings className="w-5 h-5" /> },
  ],
  'web-digital': [
    { title: 'Website Development', desc: 'Custom-designed, professional, and responsive corporate websites that align with brand identity and business goals.', icon: <Globe className="w-5 h-5" /> },
    { title: 'E-Commerce Solutions', desc: 'Full-scale online storefronts featuring product catalogs, shopping carts, secure checkout, and order management.', icon: <ShoppingCart className="w-5 h-5" /> },
    { title: 'Web App Development', desc: 'Functional, user-centric web-based tools designed to improve digital visibility and customer engagement.', icon: <Layout className="w-5 h-5" /> },
  ],
  'system-integration': [
    { title: 'API Integrations', desc: 'Connecting various third-party services and internal environments to ensure seamless data flow across different platforms.', icon: <Cloud className="w-5 h-5" /> },
    { title: 'SMS & Payment Gateways', desc: 'Integration of automated messaging systems for notifications and local/international digital payment processing.', icon: <Monitor className="w-5 h-5" /> },
    { title: 'Biometric Attendance', desc: 'Linking hardware (fingerprint or facial recognition) with HR and payroll systems for accurate time tracking and security.', icon: <Users className="w-5 h-5" /> },
  ],
  'digital-marketing': [
    { title: 'SEO Solutions', desc: 'Advanced Search Engine Optimization strategies to improve website ranking and organic search performance.', icon: <Search className="w-5 h-5" /> },
    { title: 'Digital Brand Promotion', desc: 'Comprehensive social media marketing and content strategies designed to drive brand awareness and support digital transformation.', icon: <Globe className="w-5 h-5" /> },
  ],
  'security-infra': [
    { title: 'Security System Config', desc: 'Professional installation and configuration of CCTV surveillance systems and digital security protocols.', icon: <Shield className="w-5 h-5" /> },
    { title: 'Technical Support', desc: 'Setting up the underlying network infrastructure and hardware-software synchronization to support core business systems.', icon: <Settings className="w-5 h-5" /> },
  ],
  'support-maintenance': [
    { title: 'Software Upgrades', desc: 'Regular maintenance and functional updates to ensure systems stay current with evolving technology and regulatory requirements.', icon: <History className="w-5 h-5" /> },
    { title: 'User Training & Support', desc: 'Personalized staff training and long-term technical assistance to ensure maximum value and system stability.', icon: <GraduationCap className="w-5 h-5" /> },
    { title: 'System Deployment', desc: 'End-to-end implementation services, including rigorous system testing, onsite rollout, and deployment guidance.', icon: <Play className="w-5 h-5" /> },
  ],
};

interface ServicesMegaMenuProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  closeMenu: () => void;
}

export default function ServicesMegaMenu({ activeTab, setActiveTab, closeMenu }: ServicesMegaMenuProps) {
  return (
    <div className="flex flex-col min-h-[400px]">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-[280px] bg-slate-50/80 p-6 space-y-2 border-r border-outline-variant/30">
          <p className="text-xs font-bold text-outline/50 uppercase tracking-[0.15em] pl-3.5 mb-6">
            Categories
          </p>
          {services.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Link
                key={tab.id}
                to={tab.id === 'enterprise-solutions' ? '/erp-system' : tab.id === 'custom-dev' ? '/software-development' : tab.id === 'web-digital' ? '/web-solutions' : `/#${tab.id}`}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => {
                  closeMenu();
                  if (tab.id === 'enterprise-solutions' || tab.id === 'custom-dev' || tab.id === 'web-digital') return;
                  setTimeout(() => {
                    const el = document.getElementById(tab.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all duration-300 group ${isActive
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
                {services.find(s => s.id === activeTab)?.icon}
              </div>
              <h3 className="text-xl font-bold text-[#545454] tracking-tight">
                {services.find(s => s.id === activeTab)?.name}
              </h3>
              <div className="h-px flex-1 bg-outline-variant/30 ml-4" />
            </div>

            <div className="grid grid-cols-4 gap-x-8 gap-y-6">
              {serviceContent[activeTab]?.map((item, idx) => (
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
          to={activeTab === 'enterprise-solutions' ? '/erp-system' : activeTab === 'custom-dev' ? '/software-development' : `/#${activeTab}`}
          onClick={() => {
            closeMenu();
            if (activeTab === 'enterprise-solutions' || activeTab === 'custom-dev') return;
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
