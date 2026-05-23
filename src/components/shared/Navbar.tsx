import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, ArrowUpRight, Menu, X, ArrowRight, Code, Cpu, Cloud, Users, Database, Globe, Heart, GraduationCap, Gamepad2, ShoppingCart, Landmark, Truck, CloudIcon, Building2, Leaf, Mail, Phone, Search, FileText, Layout, Play, Briefcase, MessageSquare, History, Coffee, Handshake, Shield, Monitor, Smartphone, Settings, Hexagon, Sun, Moon } from 'lucide-react';

import ResourcesMegaMenu from './Block/ResourcesMegaMenu';
import IndustriesMegaMenu from './Block/IndustriesMegaMenu';
import ServicesMegaMenu from './Block/ServicesMegaMenu';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [activeIndustryTab, setActiveIndustryTab] = useState('healthcare');
  const [activeServiceTab, setActiveServiceTab] = useState('enterprise-solutions');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-transparent backdrop-blur-xl border-b border-outline-variant/10 py-0'
      : 'bg-transparent'
      }`}>
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
      <motion.div
        animate={{ height: isScrolled ? 0 : 'auto', opacity: isScrolled ? 0 : 1 }}
        className="hidden lg:block border-b border-outline-variant/10 py-3 bg-white overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-8 flex justify-end items-center gap-8">
          <a
            href="mailto:get@yarcsystems.com"
            className="flex items-center gap-2 text-xs font-medium text-outline hover:text-secondary transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>get@yarcsystems.com</span>
          </a>
          <div className="w-px h-3 bg-outline-variant/50" />
          <div className="flex items-center gap-2 text-xs font-medium text-outline">
            <Phone className="w-3.5 h-3.5" />
            <div className="flex gap-2">
              <a href="tel:+251931523460" className="hover:text-secondary transition-colors">+251-931-523460</a>
              <span className="opacity-30">|</span>
              <a href="tel:++251931523464" className="hover:text-secondary transition-colors">+251-931-523464</a>
            </div>
          </div>
          <div className="w-px h-3 bg-outline-variant/50" />
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 hover:bg-surface rounded-lg transition-colors text-outline hover:text-secondary flex items-center justify-center"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

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
      </motion.div>

      {/* 2. Primary Header */}
      <div className="max-w-[1440px] mx-auto px-8 h-20 flex justify-between items-center relative">
        {/* Global Branding */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <Hexagon className="text-white w-6 h-6 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
          </div>
          <span className={`text-xl font-bold tracking-tight font-display uppercase transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Y ARC <span className={`font-normal transition-colors duration-500 ${isScrolled ? 'text-outline' : 'text-white/70'}`}>Systems PLC</span>
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
                className={`text-sm font-semibold tracking-wide transition-all duration-500 flex items-center gap-1.5 py-8 ${
                  activeMegaMenu === link.name 
                    ? 'text-secondary' 
                    : isScrolled ? 'text-outline hover:text-secondary' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 opacity-50 ${activeMegaMenu === link.name ? 'rotate-180 opacity-100' : ''
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
                      <ResourcesMegaMenu closeMenu={() => setActiveMegaMenu(null)} />
                    ) : link.name === 'Industries' ? (
                      <IndustriesMegaMenu
                        activeTab={activeIndustryTab}
                        setActiveTab={setActiveIndustryTab}
                        closeMenu={() => setActiveMegaMenu(null)}
                      />
                    ) : link.name === 'Services' ? (
                      <ServicesMegaMenu
                        activeTab={activeServiceTab}
                        setActiveTab={setActiveServiceTab}
                        closeMenu={() => setActiveMegaMenu(null)}
                      />
                    ) : null}
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
            className={`p-2.5 transition-colors duration-500 ${isScrolled ? 'text-outline hover:text-secondary' : 'text-white hover:text-white/80'}`}
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
          className={`lg:hidden p-2 transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}
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
