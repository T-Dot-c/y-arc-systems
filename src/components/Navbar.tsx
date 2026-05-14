import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, ArrowUpRight, Menu, X, ArrowRight, Code, Cpu, Cloud, Users, Database, Globe, Heart, GraduationCap, Gamepad2, ShoppingCart, Landmark, Truck, CloudIcon, Building2, Leaf, Mail, Phone, Search, FileText, Layout, Play, Briefcase, MessageSquare, History, Coffee, Handshake, Shield, Monitor, Smartphone, Settings, Hexagon } from 'lucide-react';

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

const services = [
  { id: 'enterprise-solutions', name: 'Enterprise Solutions', icon: <Database className="w-5 h-5" /> },
  { id: 'custom-dev', name: 'Custom Software', icon: <Code className="w-5 h-5" /> },
  { id: 'web-digital', name: 'Web & Digital Solutions', icon: <Globe className="w-5 h-5" /> },
  { id: 'system-integration', name: 'System Integration', icon: <Cloud className="w-5 h-5" /> },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: <Layout className="w-5 h-5" /> },
  { id: 'security-infra', name: 'Security & Infrastructure', icon: <Shield className="w-5 h-5" /> },
  { id: 'support-maintenance', name: 'Support & Maintenance', icon: <Handshake className="w-5 h-5" /> },
];

const resourceCategories = [
  {
    title: 'Resources',
    items: [
      { name: 'Blog', desc: 'Notes on craft, delivery, and lessons from our projects.', icon: <FileText className="w-5 h-5" />, to: '/' },
      { name: 'Case Studies', desc: 'Client journeys from kickoff through launch and support.', icon: <Briefcase className="w-5 h-5" />, to: '/' },
    ]
  },
  {
    title: 'Learn',
    items: [
      { name: 'Our Clients', desc: 'Brands trusting systems we design, build, and operate.', icon: <Globe className="w-5 h-5" />, to: '/' },
      { name: 'Testimonials', desc: 'Partners on speed, quality, collaboration, reliability.', icon: <MessageSquare className="w-5 h-5" />, to: '/' },
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'Our Story', desc: 'How we began, what we believe, and the vision ahead.', icon: <History className="w-5 h-5" />, to: '/' },
      { name: 'Life @Y ARC', desc: 'Culture, benefits, teamwork across our offices daily.', icon: <Users className="w-5 h-5" />, to: '/' },
    ]
  }
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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeIndustryTab, setActiveIndustryTab] = useState('healthcare');
  const [activeServiceTab, setActiveServiceTab] = useState('enterprise-solutions');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    'Digital Transformation Services',
    'Cloud-Native Development',
    'Enterprise ERP Solutions',
    'AI & Machine Learning',
    'Healthcare Tech Integration',
    'FinTech Security Systems',
    'Cybersecurity Audits',
    'Legacy System Modernization'
  ].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-outline-variant z-50 transition-all duration-300">
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[100] flex items-start justify-center pt-32 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-2 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 p-4 border-b border-outline-variant">
                <Search className="w-5 h-5 text-outline" />
                <input 
                  autoFocus
                  placeholder="Search solutions, industries, or resources..."
                  className="flex-1 bg-transparent border-none outline-none text-lg text-primary placeholder:text-outline/50 font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-surface rounded-lg transition-colors text-outline"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 max-h-[400px] overflow-y-auto">
                <p className="text-xs font-bold text-outline uppercase tracking-widest mb-4">
                  {searchQuery ? 'Search Results' : 'Recommended Searches'}
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {(searchQuery ? searchResults : searchResults.slice(0, 4)).map(link => (
                    <div key={link} className="p-3.5 hover:bg-surface rounded-xl text-sm font-semibold text-primary cursor-pointer group flex items-center justify-between transition-colors">
                      {link}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 text-secondary" />
                    </div>
                  ))}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-10 text-center text-outline">
                      <p className="text-sm">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Utility Top Bar (Contact & Search) */}
      <div className="hidden lg:block border-b border-outline-variant/30 py-2 bg-surface/30">
        <div className="max-w-[1440px] mx-auto px-8 flex justify-end items-center gap-8">
          <a 
            href="mailto:info@zalatechs.com" 
            className="flex items-center gap-2 text-xs font-medium text-outline hover:text-secondary transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@zalatechs.com</span>
          </a>
          <div className="w-px h-3 bg-outline-variant/50" />
          <div className="flex items-center gap-2 text-xs font-medium text-outline">
            <Phone className="w-3.5 h-3.5" />
            <div className="flex gap-2">
              <a href="tel:+251911645867" className="hover:text-secondary transition-colors">+251-911-645867</a>
              <span className="opacity-30">|</span>
              <a href="tel:+251912974411" className="hover:text-secondary transition-colors">+251-912-974411</a>
            </div>
          </div>
          <div className="w-px h-3 bg-outline-variant/50" />
          <motion.div 
            whileHover="hover"
            initial="initial"
            className="relative flex items-center"
            onClick={() => setIsSearchOpen(true)}
          >
            <motion.div
              variants={{
                initial: { width: 32, backgroundColor: 'rgba(var(--color-primary), 0)' },
                hover: { width: 160, backgroundColor: 'rgba(var(--color-primary), 0.05)' }
              }}
              className="h-8 rounded-full flex items-center px-2 gap-3 cursor-pointer overflow-hidden transition-colors border border-transparent hover:border-outline-variant/30"
            >
              <Search className="w-4 h-4 text-outline shrink-0" />
              <motion.span
                variants={{
                  initial: { opacity: 0, x: -10 },
                  hover: { opacity: 1, x: 0 }
                }}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap"
              >
                Search Systems
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 2. Primary Header */}
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex justify-between items-center relative">
        {/* Global Branding */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Hexagon className="text-white w-6 h-6 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
          </div>
          <span className="text-xl font-bold tracking-tight font-display text-primary uppercase">
            Y ARC <span className="font-normal text-outline">Systems PLC</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-12 h-full">
          {[
            { name: 'Services' },
            { name: 'Industries' },
            { name: 'Resources' }
          ].map((link) => (
            <div 
              key={link.name} 
              className="h-full flex items-center"
              onMouseEnter={() => setActiveMegaMenu(link.name)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <a 
                href="#" 
                className={`text-sm font-semibold tracking-wide transition-colors flex items-center gap-1.5 py-8 ${
                  activeMegaMenu === link.name ? 'text-secondary' : 'text-outline hover:text-secondary'
                }`}
              >
                {link.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 opacity-50 ${
                  activeMegaMenu === link.name ? 'rotate-180 opacity-100' : ''
                }`} />
              </a>

              <AnimatePresence>
                {activeMegaMenu === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className={`absolute top-[72px] left-1/2 -translate-x-1/2 bg-white border border-outline-variant shadow-2xl rounded-2xl overflow-hidden z-50 font-sans ${link.name === 'Resources' ? 'w-[1000px]' : 'w-[1200px]'}`}
                  >
                    {/* Arrow Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-outline-variant -mt-2 rotate-45 z-10" />
                    
                    {link.name === 'Resources' ? (
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
                                        onClick={() => setActiveMegaMenu(null)}
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
                                Y ARC <span className="font-normal text-outline">Systems PLC</span>
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

                        {/* Mega Menu Footer */}
                        <div className="bg-slate-100/80 border-t border-outline-variant/30 px-10 py-5 flex items-center justify-between">

                          <div className="flex items-center gap-6">
                            <a href="tel:+251" className="text-[11px] font-bold text-secondary hover:text-primary transition-colors">+251 911 645867</a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col min-h-[400px]">
                        <div className="flex flex-1">
                          {/* Sidebar */}
                          <div className="w-[280px] bg-slate-50/80 p-6 space-y-2 border-r border-outline-variant/30">
                            <p className="text-xs font-bold text-outline/50 uppercase tracking-[0.15em] pl-3.5 mb-6">
                              {link.name === 'Industries' ? 'Sectors' : 'Categories'}
                            </p>
                            {(link.name === 'Industries' ? industries : services).map((tab) => {
                              const isActive = (link.name === 'Industries' ? activeIndustryTab : activeServiceTab) === tab.id;
                              return (
                                <Link
                                  key={tab.id}
                                  to={`/#${tab.id}`}
                                  onMouseEnter={() => link.name === 'Industries' ? setActiveIndustryTab(tab.id) : setActiveServiceTab(tab.id)}
                                  onClick={() => {
                                    setActiveMegaMenu(null);
                                    // Small timeout to allow potential navigation if on different page
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
                              key={link.name === 'Industries' ? activeIndustryTab : activeServiceTab}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="h-full"
                            >
                              <div className="flex items-center gap-3 mb-8">
                                 <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-[#545454]">
                                   {(link.name === 'Industries' ? industries : services).find(s => s.id === (link.name === 'Industries' ? activeIndustryTab : activeServiceTab))?.icon}
                                 </div>
                                 <h3 className="text-xl font-bold text-[#545454] tracking-tight">
                                   {(link.name === 'Industries' ? industries : services).find(s => s.id === (link.name === 'Industries' ? activeIndustryTab : activeServiceTab))?.name}
                                 </h3>
                                 <div className="h-px flex-1 bg-outline-variant/30 ml-4" />
                              </div>

                              <div className="grid grid-cols-4 gap-x-8 gap-y-6">
                                {(link.name === 'Industries' ? industryContent[activeIndustryTab] : serviceContent[activeServiceTab])?.map((item, idx) => (
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
                            to={activeServiceTab === 'enterprise-solutions' && link.name === 'Services' ? '/erp-system' : `/#${link.name === 'Industries' ? activeIndustryTab : activeServiceTab}`}
                            onClick={() => {
                              setActiveMegaMenu(null);
                              if (activeServiceTab === 'enterprise-solutions' && link.name === 'Services') return;
                              // Small timeout to allow potential navigation if on different page
                              setTimeout(() => {
                                const el = document.getElementById(link.name === 'Industries' ? activeIndustryTab : activeServiceTab);
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
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search Trigger */}
          <motion.button 
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSearchOpen(true)}
            className="p-2.5 text-outline hover:text-secondary transition-colors"
            aria-label="Open search"
            title="Open Search"
          >
            <Search className="w-5 h-5" />
          </motion.button>

          <div className="w-px h-6 bg-outline-variant/30" />

          {/* Language Switcher */}
          <div 
            className="flex items-center gap-2 cursor-pointer group select-none"
            onClick={() => setLanguage(l => l === 'EN' ? 'AM' : 'EN')}
            title="Switch Language"
          >
            <div className="w-8 h-5 rounded shadow-sm relative overflow-hidden transition-all duration-500 ring-1 ring-outline-variant/30 flex items-center justify-center bg-surface">
               <AnimatePresence mode="wait">
                  {language === 'EN' ? (
                    <motion.img 
                      key="flag-en"
                      src="https://flagcdn.com/w80/gb.png"
                      alt="English"
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <motion.img 
                      key="flag-am"
                      src="https://flagcdn.com/w80/et.png"
                      alt="Amharic"
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="w-full h-full object-cover"
                    />
                  )}
               </AnimatePresence>
            </div>
            <span className="text-xs font-black text-primary tracking-tighter transition-transform group-hover:scale-110">{language}</span>
          </div>

          <div className="w-px h-6 bg-outline-variant/30" />

          {/* Request Demo Button */}
          <Link
            to="/erp-system"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_10px_30px_rgba(30,64,175,0.3)] shadow-md shadow-primary/10 active:scale-95"
          >
            <span className="relative z-10">Request Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-500 to-primary translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            {/* Animated Shine Effect */}
            <motion.div 
              animate={{ 
                left: ['-100%', '200%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear",
                delay: 1
              }}
              className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-20 pointer-events-none"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-outline-variant overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-1">
              {/* Mobile Search */}
              <div className="pb-6">
                <div 
                  className="flex items-center gap-3 p-4 bg-surface rounded-2xl border border-outline-variant/30 text-outline cursor-pointer"
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Search className="w-5 h-5" />
                  <span className="text-sm font-medium">Search solutions and resources...</span>
                </div>
              </div>

              {['Services', 'Industries', 'Resources'].map(link => (
                <div key={link} className="py-4 border-b border-outline-variant/30 last:border-0 group cursor-pointer flex justify-between items-center">
                  <span className="font-bold text-primary group-hover:text-secondary transition-colors">{link}</span>
                  <ArrowRight className="w-4 h-4 text-outline group-hover:text-secondary" />
                </div>
              ))}
              <div 
                className="flex items-center justify-between py-6 cursor-pointer group"
                onClick={() => setLanguage(l => l === 'EN' ? 'AM' : 'EN')}
              >
                <div className="flex items-center gap-3">
                   <div className="w-8 h-5 rounded shadow-sm relative overflow-hidden ring-1 ring-outline-variant/30 flex items-center justify-center bg-surface">
                      <img 
                        src={language === 'EN' ? "https://flagcdn.com/w80/gb.png" : "https://flagcdn.com/w80/et.png"} 
                        alt={language === 'EN' ? "English" : "Amharic"}
                        className="w-full h-full object-cover"
                      />
                   </div>
                   <span className="font-bold text-primary">Language</span>
                </div>
                <span className="font-black text-secondary">{language === 'EN' ? 'English' : 'Amharic'}</span>
              </div>
              <div className="pt-4 pb-8 space-y-6">
                <Link
                  to="/erp-system"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full relative group overflow-hidden px-8 py-4 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center shadow-lg shadow-primary/10 transition-all duration-300 active:scale-95"
                >
                  <span className="relative z-10">Request Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <div className="flex flex-col gap-4 text-xs text-outline font-medium">
                  <a href="mailto:info@zalatechs.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Mail className="w-4 h-4" /> 
                    <span>info@zalatechs.com</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <div className="flex gap-2">
                      <a href="tel:+251911645867" className="hover:text-secondary transition-colors">+251-911-645867</a>
                      <span className="opacity-30">|</span>
                      <a href="tel:+251912974411" className="hover:text-secondary transition-colors">+251-912-974411</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
