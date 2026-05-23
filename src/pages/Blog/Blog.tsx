import React, { useState } from 'react';
import BlogHero from './components/Hero';
import BlogFeatured from './components/Featured';
import BlogPageHeader from './components/PageHeader';
import BlogLegacyFeatured from './components/LegacyFeatured';
import BlogFilterBar from './components/FilterBar';
import BlogPostsGrid from './components/PostsGrid';
import BlogCTA from './components/CTA';

const CATEGORIES = ['All', 'Engineering', 'Case Studies', 'Company News', 'Design'];

const FEATURED_POST = {
  id: 'featured',
  title: 'Engineering Clarity: How We Modernized Legacy ERP Systems for Scale',
  excerpt: 'A deep dive into our architectural decisions, migrating monolithic financial systems into micro-services, and the impact on our enterprise clients.',
  category: 'Engineering',
  author: 'Y ARC Engineering Team',
  date: 'May 12, 2026',
  readTime: '8 min read',
  imageUrl: '/blog_featured_thumbnail.png',
};

const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'The Future of Real Estate CRM Automation',
    excerpt: 'Exploring how automated workflows are transforming property management and sales pipelines.',
    category: 'Case Studies',
    author: 'Sarah Chen',
    date: 'May 05, 2026',
    readTime: '5 min read',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 'post-2',
    title: 'Security First: Implementing Zero-Trust Networks',
    excerpt: 'Best practices for securing enterprise data across distributed branch networks.',
    category: 'Engineering',
    author: 'Michael Rodriguez',
    date: 'April 28, 2026',
    readTime: '6 min read',
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'post-3',
    title: 'Designing Human-Centered Digital Commerce',
    excerpt: 'Why user experience matters more than ever in B2B e-commerce platforms.',
    category: 'Design',
    author: 'Elena Rostova',
    date: 'April 15, 2026',
    readTime: '4 min read',
    gradient: 'from-orange-500/20 to-rose-500/20'
  },
  {
    id: 'post-4',
    title: 'Q2 Company Update: Expanding Our Tech Stack',
    excerpt: 'Announcing our new partnerships and capabilities in Cloud infrastructure deployment.',
    category: 'Company News',
    author: 'David Bekele',
    date: 'April 02, 2026',
    readTime: '3 min read',
    gradient: 'from-blue-400/20 to-cyan-400/20'
  },
  {
    id: 'post-5',
    title: 'Optimizing Database Queries for High-Traffic Applications',
    excerpt: 'Technical breakdown of performance tuning strategies for SQL databases under heavy load.',
    category: 'Engineering',
    author: 'Alex Wong',
    date: 'March 20, 2026',
    readTime: '7 min read',
    gradient: 'from-indigo-500/20 to-blue-600/20'
  },
  {
    id: 'post-6',
    title: 'Healthcare IT: Digitizing Patient Records Safely',
    excerpt: 'Navigating compliance, security, and efficiency in modern clinic management systems.',
    category: 'Case Studies',
    author: 'Dr. James Smith',
    date: 'March 10, 2026',
    readTime: '6 min read',
    gradient: 'from-rose-500/20 to-pink-500/20'
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-24 font-sans selection:bg-secondary/30">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10">
        <BlogHero />
        <BlogFeatured />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <BlogPageHeader />
        
        <BlogLegacyFeatured post={FEATURED_POST} />

        <BlogFilterBar 
          categories={CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <BlogPostsGrid 
          posts={filteredPosts}
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onClearFilters={() => {
            setSearchQuery('');
            setActiveCategory('All');
          }}
        />

        <BlogCTA />
      </div>
    </div>
  );
}
