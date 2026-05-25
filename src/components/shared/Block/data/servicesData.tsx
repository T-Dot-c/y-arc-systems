import React from 'react';
import { Database, Code, Globe, Cloud, Layout, Shield, Handshake, Landmark, Truck, Users, Building2, Smartphone, Settings, ShoppingCart, History, GraduationCap, Play } from 'lucide-react';

export const services = [
  { id: 'enterprise-solutions', name: 'Enterprise Solutions', icon: <Database className="w-5 h-5" /> },
  { id: 'custom-dev', name: 'Software Development', icon: <Code className="w-5 h-5" /> },
  { id: 'web-digital', name: 'Web Based Solutions', icon: <Globe className="w-5 h-5" /> },
  { id: 'system-integration', name: 'System Integration', icon: <Cloud className="w-5 h-5" /> },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: <Layout className="w-5 h-5" /> },
  { id: 'security-infra', name: 'Security & Infrastructure', icon: <Shield className="w-5 h-5" /> },
  { id: 'support-maintenance', name: 'Support & Maintenance', icon: <Handshake className="w-5 h-5" /> },
];

export const serviceContent: Record<string, { title: string; desc: string; icon: React.ReactNode }[]> = {
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
    { title: 'SMS & Payment Gateways', desc: 'Integration of automated messaging systems for notifications and local/international digital payment processing.', icon: <Play className="w-5 h-5" /> },
    { title: 'Biometric Attendance', desc: 'Linking hardware (fingerprint or facial recognition) with HR and payroll systems for accurate time tracking and security.', icon: <Users className="w-5 h-5" /> },
  ],
  'digital-marketing': [
    { title: 'SEO Solutions', desc: 'Advanced Search Engine Optimization strategies to improve website ranking and organic search performance.', icon: <History className="w-5 h-5" /> },
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
