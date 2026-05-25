import React from 'react';
import { FileText, Briefcase, Globe, MessageSquare, History } from 'lucide-react';

export const resourceCategories = [
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

export default resourceCategories;
