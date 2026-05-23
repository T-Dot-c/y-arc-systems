import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowUpRight, ArrowRight, Heart, Building2, Landmark, ShoppingCart, Globe, Shield, Users, Truck, Cpu, Monitor, Database, Smartphone, Settings, FileText } from 'lucide-react';

const industries = [
  { id: 'healthcare', name: 'Healthcare Industry', icon: <Heart className="w-5 h-5" /> },
  { id: 'real-estate', name: 'Real Estate Industry', icon: <Building2 className="w-5 h-5" /> },
  { id: 'enterprise-corporate', name: 'Enterprise & Corporate', icon: <Landmark className="w-5 h-5" /> },
  { id: 'retail-distribution', name: 'Retail & Distribution', icon: <ShoppingCart className="w-5 h-5" /> },
  { id: 'digital-commerce', name: 'Digital Commerce', icon: <Globe className="w-5 h-5" /> },
  { id: 'security-infra-solutions', name: 'Security & Infrastructure', icon: <Shield className="w-5 h-5" /> },
  { id: 'smb-solutions', name: 'Small & Medium Business', icon: <Users className="w-5 h-5" /> },
  { id: 'import-export', name: 'Import and Export', icon: <Truck className="w-5 h-5" /> },
];

const industryContent: Record<string, { title: string; desc: string; icon: React.ReactNode }[]> = {
  healthcare: [
    { title: 'Healthcare Management Systems', desc: 'Integrated systems for clinics, pharmacies, and hospitals that streamline medical and administrative operations.', icon: <Building2 className="w-5 h-5" /> },
    { title: 'Clinic Management Solutions', desc: 'Patient registration, appointment scheduling, treatment management, billing, and reporting systems.', icon: <Users className="w-5 h-5" /> },
    { title: 'Pharmacy Management Systems', desc: 'Inventory tracking, medication dispensing, batch monitoring, expiry management, and regulatory reporting.', icon: <Heart className="w-5 h-5" /> },
    { title: 'Laboratory Management Systems', desc: 'Test ordering, sample handling, result processing, and laboratory reporting workflows.', icon: <Cpu className="w-5 h-5" /> },
    { title: 'Healthcare ERP & Billing', desc: 'Integrated healthcare finance, pharmacy, laboratory, and service billing management systems.', icon: <Landmark className="w-5 h-5" /> },
    { title: 'Healthcare Compliance & Reporting', desc: 'Audit trails, governmental reports, and secure healthcare data management.', icon: <Shield className="w-5 h-5" /> },
  ],
  'real-estate': [
    { title: 'Real Estate CRM Systems', desc: 'Lead management, customer tracking, and communication management platforms optimized for growth.', icon: <Users className="w-5 h-5" /> },
    { title: 'Property & Unit Management', desc: 'Property listing systems with unit availability tracking and sales monitoring for developers.', icon: <Building2 className="w-5 h-5" /> },
    { title: 'Sales Pipeline & Commission', desc: 'Track deals, sales activities, commissions, and team performance in real time for sales efficiency.', icon: <Monitor className="w-5 h-5" /> },
    { title: 'Real Estate ERP Solutions', desc: 'Integrated systems for finance, procurement, inventory, and customer management in the property sector.', icon: <Database className="w-5 h-5" /> },
  ],
  'enterprise-corporate': [
    { title: 'Enterprise Resource Planning (ERP)', desc: 'Integrated platforms for finance, HR, inventory, procurement, payroll, and operations management.', icon: <Database className="w-5 h-5" /> },
    { title: 'Financial & Accounting Systems', desc: 'Automated accounting workflows, expense management, reporting, and financial analysis.', icon: <Landmark className="w-5 h-5" /> },
    { title: 'Human Resource & Payroll Systems', desc: 'Employee management, payroll processing, attendance, and HR operations for large organizations.', icon: <Users className="w-5 h-5" /> },
    { title: 'Procurement & Asset Management', desc: 'Procurement workflows, supplier management, asset tracking, and operational control.', icon: <ShoppingCart className="w-5 h-5" /> },
    { title: 'Workflow Automation', desc: 'Business process automation designed to improve efficiency and reduce manual operations.', icon: <Settings className="w-5 h-5" /> },
  ],
  'retail-distribution': [
    { title: 'Inventory Management Systems', desc: 'Stock control, warehouse monitoring, and supply chain visibility solutions for retail networks.', icon: <Truck className="w-5 h-5" /> },
    { title: 'Sales & POS Systems', desc: 'Retail sales tracking, customer management, and transaction processing platforms.', icon: <ShoppingCart className="w-5 h-5" /> },
    { title: 'Distribution Management', desc: 'Order tracking, inventory movement, and centralized operational reporting for distributors.', icon: <Globe className="w-5 h-5" /> },
    { title: 'Multi-Branch Management', desc: 'Centralized systems for businesses operating across multiple locations with real-time sync.', icon: <Building2 className="w-5 h-5" /> },
  ],
  'digital-commerce': [
    { title: 'Website Development', desc: 'Professional corporate websites tailored to brand identity and high-conversion business goals.', icon: <Globe className="w-5 h-5" /> },
    { title: 'E-Commerce Solutions', desc: 'Online stores and digital commerce platforms with secure payment integration and order management.', icon: <ShoppingCart className="w-5 h-5" /> },
    { title: 'Customer Engagement Platforms', desc: 'Systems designed to improve customer communication, service delivery, and brand loyalty.', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Digital Marketing Solutions', desc: 'Advanced SEO, social media marketing, and online visibility optimization services.', icon: <Layout className="w-5 h-5" /> },
  ],
  'security-infra-solutions': [
    { title: 'CCTV Installation', desc: 'Professional security camera installation and centralized monitoring systems for modern organizations.', icon: <Shield className="w-5 h-5" /> },
    { title: 'Biometric Integration Systems', desc: 'Precise attendance tracking and access control integration for high-security environments.', icon: <Users className="w-5 h-5" /> },
    { title: 'Business Security Solutions', desc: 'Integrated security protocols designed to support safety and organizational control.', icon: <Monitor className="w-5 h-5" /> },
  ],
  'smb-solutions': [
    { title: 'Business Process Digitization', desc: 'Replacing manual workflows with centralized digital systems for growing enterprises.', icon: <Smartphone className="w-5 h-5" /> },
    { title: 'Operational Automation', desc: 'Automating repetitive tasks to improve efficiency, productivity, and scalability.', icon: <Settings className="w-5 h-5" /> },
    { title: 'Scalable ERP Platforms', desc: 'Flexible systems that grow alongside business expansion with modular components.', icon: <Database className="w-5 h-5" /> },
    { title: 'Long-Term Technical Support', desc: 'Training, maintenance, upgrades, and continuous expert technical support.', icon: <Handshake className="w-5 h-5" /> },
  ],
  'import-export': [
    { title: 'Logistics & Tracking', desc: 'Real-time monitoring of goods movement across borders and international borders.', icon: <Truck className="w-5 h-5" /> },
    { title: 'Customs & Documentation', desc: 'Digital management of import/export paperwork, compliance, and regulatory audits.', icon: <FileText className="w-5 h-5" /> },
    { title: 'Global Supply Chain', desc: 'Connecting international suppliers and buyers with a unified digital platform.', icon: <Globe className="w-5 h-5" /> },
  ],
};

import { MessageSquare, Layout, Handshake } from 'lucide-react'; // Imports missing from top

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
