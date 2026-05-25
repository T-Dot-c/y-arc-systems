import { BarChart3, Code, Globe, Cloud, Shield, Handshake, Database, Heart, Building2, ShoppingCart, ShieldCheck, Package, Star as StarIcon, RefreshCcw, ThumbsUp, Users, Warehouse, Briefcase, LineChart, Truck, HeartHandshake } from 'lucide-react';

import heroBg from '../../../../Assets/images/Background/Hero2.jpg';
import abedDermatology from '../../../../Assets/images/Partners/Abed-Dermatology-Venerology-Clinic.png';
import amentiPharmacy from '../../../../Assets/images/Partners/Amenti-Pharmacy.png';
import arifDiscount from '../../../../Assets/images/Partners/Arif-Discount.png';
import bluPharmacy from '../../../../Assets/images/Partners/Blu-Pharmacy.png';
import carefirst from '../../../../Assets/images/Partners/Carefirst.png';
import daePharmacy from '../../../../Assets/images/Partners/DAE-Pharmacy.png';
import deluxeProperties from '../../../../Assets/images/Partners/Deluxe-Properties.png';
import ethioBestRealEstate from '../../../../Assets/images/Partners/Ethio-Best-Real-Estate.png';
import homeElementsLuxury from '../../../../Assets/images/Partners/Home-Elements-Luxury-Apartment.png';
import kelelaDerma from '../../../../Assets/images/Partners/Kelela-Dermatovenereology-Clinic.png';
import keyHousing from '../../../../Assets/images/Partners/Key-Housing-Finance-Solution-PLC.png';
import meydanHappy from '../../../../Assets/images/Partners/Meydan-Happy-Import.png';
import nestleProperties from '../../../../Assets/images/Partners/Nestle-Properties.png';
import oftanaBusiness from '../../../../Assets/images/Partners/Oftana-Business-Trading.png';
import sprinttech from '../../../../Assets/images/Partners/Sprinttech.png';
import vistaBanquet from '../../../../Assets/images/Partners/Vista-Banquet-Hall.png';
import zerihunLaw from '../../../../Assets/images/Partners/Zerihun-Law-Office.png';

export const heroData = {
  heroBg,
  subtitle: 'Technology-Driven Digital Transformation',
  headline: 'Transforming Businesses Through',
  headlineHighlight: 'Smart ERP & Digital Solutions',
  ctaText: 'Request a Demo',
  ctaLink: '/contact',
  partnerTitle: 'IN PARTNERSHIP WITH',
  partners: [
    { name: 'Meydan Happy Import', logo: meydanHappy },
    { name: 'Deluxe Properties', logo: deluxeProperties },
    { name: 'Sprinttech', logo: sprinttech },
    { name: 'Arif Discount', logo: arifDiscount },
    { name: 'Key Housing', logo: keyHousing },
    { name: 'Oftana Business Trading', logo: oftanaBusiness },
    { name: 'Abed Dermatology', logo: abedDermatology },
    { name: 'Amenti Pharmacy', logo: amentiPharmacy },
    { name: 'Blu Pharmacy', logo: bluPharmacy },
    { name: 'Carefirst', logo: carefirst },
    { name: 'DAE Pharmacy', logo: daePharmacy },
    { name: 'Ethio Best Real Estate', logo: ethioBestRealEstate },
    { name: 'Home Elements', logo: homeElementsLuxury },
    { name: 'Kelela Clinic', logo: kelelaDerma },
    { name: 'Nestle Properties', logo: nestleProperties },
    { name: 'Vista Banquet Hall', logo: vistaBanquet },
    { name: 'Zerihun Law Office', logo: zerihunLaw },
  ],
};

export const introductionData = {
  headingLine1: "Ethiopia's Go-To",
  headingLine2: 'for ERP, and Web Solutions',
  body: 'Y Arc System transforms your operations with cutting-edge digital solutions. From comprehensive ERP systems and user-friendly websites to custom software tailored to your unique needs, we provide the scalable technology required to thrive in Ethiopia\'s growing tech landscape.',
};

export const expertiseData = {
  heading: 'Software engineered for operational excellence.',
  paragraph: 'We deliver industry-specific platforms that solve complex organizational challenges with simple, intuitive experiences.',
  services: [
    {
      id: 'enterprise-solutions',
      icon: <Database className="w-8 h-8" />,
      title: 'Enterprise Solutions (ERP)',
      desc: 'Integrated ERP and CRM modules including Finance, HR/Payroll, Inventory, and Real Estate sales automation designed for total financial transparency.',
    },
    {
      id: 'custom-dev',
      icon: <Code className="w-8 h-8" />,
      title: 'Software Development',
      desc: 'Tailored software designed to replace fragmented, manual processes with integrated digital workflows and scalable internal platforms.',
    },
    {
      id: 'web-digital',
      icon: <Globe className="w-8 h-8" />,
      title: 'Web & Digital Solutions',
      desc: 'Custom-designed, professional, and responsive corporate websites and full-scale E-Commerce platforms optimized for engagement.',
    },
    {
      id: 'system-integration',
      icon: <Cloud className="w-8 h-8" />,
      title: 'System Integration',
      desc: 'Connecting third-party services, SMS/payment gateways, and biometric hardware to ensure seamless data flow across platforms.',
    },
    {
      id: 'security-infra',
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Infrastructure',
      desc: 'Professional installation of CCTV surveillance, network infrastructure, and hardware-software synchronization for secure operations.',
    },
    {
      id: 'support-maintenance',
      icon: <Handshake className="w-8 h-8" />,
      title: 'Support & Maintenance',
      desc: 'Regular updates, personalized staff training, and end-to-end implementation services to ensure long-term system stability.',
    },
  ],
};

export const clientsData = {
  heading: 'Trusted by Global Innovation Leaders',
  subtext: 'We take pride in our long-term partnerships with diverse organizations across industries. We deliver the precision and expertise needed to scale for the world\'s most recognized brands.',
  clients: [
    { name: 'Abed Dermatology & Venerology Clinic', logoPath: abedDermatology },
    { name: 'Amenti Pharmacy', logoPath: amentiPharmacy },
    { name: 'Arif Discount', logoPath: arifDiscount },
    { name: 'Blu Pharmacy', logoPath: bluPharmacy },
    { name: 'Carefirst', logoPath: carefirst },
    { name: 'DAE Pharmacy', logoPath: daePharmacy },
    { name: 'Deluxe Properties', logoPath: deluxeProperties },
    { name: 'Ethio Best Real Estate', logoPath: ethioBestRealEstate },
    { name: 'Home Elements Luxury Apartment', logoPath: homeElementsLuxury },
    { name: 'Kelela Dermatovenereology Clinic', logoPath: kelelaDerma },
    { name: 'Key Housing Finance Solution PLC', logoPath: keyHousing },
    { name: 'Meydan Happy Import', logoPath: meydanHappy },
    { name: 'Nestle Properties', logoPath: nestleProperties },
    { name: 'Oftana Business Trading', logoPath: oftanaBusiness },
    { name: 'Sprinttech', logoPath: sprinttech },
    { name: 'Vista Banquet Hall', logoPath: vistaBanquet },
    { name: 'Zerihun Law Office', logoPath: zerihunLaw },
  ],
};

export const industriesData = {
  heading: 'Industries We Serve',
  subtext: 'Deep domain expertise across diverse sectors, delivering technology that powers transformation.',
  sectors: [
    {
      id: 'healthcare',
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthcare Industry',
      desc: 'Digital healthcare solutions designed to improve patient care, operational efficiency, and regulatory compliance through integrated systems.',
    },
    {
      id: 'real-estate',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Real Estate Industry',
      desc: 'Specialized solutions for developers to manage property listings, unit availability, and high-conversion sales pipelines.',
    },
    {
      id: 'enterprise-corporate',
      icon: <Package className="w-8 h-8" />,
      title: 'Enterprise & Corporate',
      desc: 'Comprehensive ERP systems built to centralize and automate organizational operations, finance, and human resources.',
    },
    {
      id: 'retail-distribution',
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Retail & Distribution',
      desc: 'Technology solutions for retail operations, inventory control, and multi-branch supply chain management.',
    },
    {
      id: 'digital-commerce',
      icon: <Globe className="w-8 h-8" />,
      title: 'Digital Commerce',
      desc: 'Modern digital platforms helping businesses establish and grow their online presence with high-performance web solutions.',
    },
    {
      id: 'security-infra-solutions',
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Infrastructure',
      desc: 'Professional security systems and digital infrastructure designed to support organizational safety and control.',
    },
    {
      id: 'smb-solutions',
      icon: <Users className="w-8 h-8" />,
      title: 'Small & Medium Business',
      desc: 'Affordable and scalable digital systems designed for growing businesses to digitize their manual operations.',
    },
    {
      id: 'import-export',
      icon: <Truck className="w-8 h-8" />,
      title: 'Import and Export',
      desc: 'Digital management of logistics, customs documentation, and global supply chain visibility for international trade.',
    },
  ],
};

export const benefitsData = {
  heading: 'What Are the Benefits of Software for Your Business?',
  subtext: 'Manage all business functions within a centralized, integrated system to drive operational excellence.',
  benefits: [
    {
      title: 'Improved Productivity',
      desc: 'Automate redundancy to focus your team on high-value activities.',
      icon: <RefreshCcw className="w-6 h-6" />,
    },
    {
      title: 'Better Analytics',
      desc: 'Centralized data for better intelligence and real-time decisions.',
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: 'Grow Business',
      desc: 'Optimize resources and eliminate inefficiencies to scale your business.',
      icon: <StarIcon className="w-6 h-6" />,
    },
    {
      title: 'Minimize Errors',
      desc: 'Reduce human error with seamless, accurate data flow across departments.',
      icon: <ThumbsUp className="w-6 h-6" />,
    },
  ],
};

export const whyUsData = {
  heading: 'Why Y ARC Systems',
  subtext: 'We draw on deep expertise and qualified resources to deliver leading IT services for Ethiopian enterprises, building enduring relationships based on trust.',
  reasons: [
    {
      title: 'All-In-One Approach',
      desc: 'End-to-end IT services, design, and development across industrial sectors.',
      icon: <Package className="w-6 h-6" />,
    },
    {
      title: 'Customer Service',
      desc: 'Tailored expert advice to help you achieve goals in demanding environments.',
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: 'Commitment',
      desc: 'Your trusted partner, aligning our technology with your business success.',
      icon: <StarIcon className="w-6 h-6" />,
    },
  ],
};

export const enterpriseSolutionData = {
  heading: 'ERP System Software Developed Exclusively for Ethiopian Companies',
  headingHighlight: 'Exclusively for Ethiopian Companies',
  subtext: 'Each and every module has specific purpose in ERP software. These modules look over and manage different divisions and departments of the industry.',
  modules: [
    {
      title: 'Accounting and Finance',
      desc: "Primarily formed of accounting modules that keep tabs on your company's total cash flow and profit and loss.",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: 'HR, Payroll & Attendance',
      desc: 'While automating operations involving the employees in your firm, such payroll, recruitment, leave, attendance, etc...',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Warehouse - Inventory Management',
      desc: 'Keeping track of stock levels and pricing for all products that your organization manufactures, purchases, stores, and sells.',
      icon: <Warehouse className="w-8 h-8" />,
    },
    {
      title: 'Project Management',
      desc: 'Management includes managing raw material, accounting for requirements, and tracking project status.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: 'Purchase Order Management',
      desc: 'Record track of all essential order information such as purchase quantities, items purchased, and payment expenses.',
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      title: 'Sales And Marketing',
      desc: 'Sales Management, integration with CRM processes let user easily manage your products, customers, quotations and invoices.',
      icon: <LineChart className="w-8 h-8" />,
    },
    {
      title: 'Vehicle Fleet Management',
      desc: 'Manages the registration, repair, maintenance, driver and fuel consumption, and every other aspect of the vehicles.',
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: 'Customer Centric CRM',
      desc: 'Manages contact management, communication tracking, opportunity/lead tracking, quote creation, and sales agent productivity.',
      icon: <HeartHandshake className="w-8 h-8" />,
    },
  ],
  ctaText: 'Read More About ERP',
  ctaLink: '/erp-system',
};
