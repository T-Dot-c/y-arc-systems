import { Link } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, ChevronUp, ChevronRight, User } from 'lucide-react';

// --- SVG Icons ---
const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const SavingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
  </svg>
);

const stats = [
  { icon: <BriefcaseIcon />, number: '2000+', label: 'Talents Vetted' },
  { icon: <BuildingIcon />, number: '3+', label: 'International Offices' },
  { icon: <CheckCircleIcon />, number: '100+', label: 'Projects Delivered' },
  { icon: <SavingsIcon />, number: '50–70%', label: 'Average Cost Saving' },
];

const services = [
  'Healthcare Solutions',
  'Real Estate Systems',
  'ERP Modules',
  'Custom Software Development',
  'Cloud Infrastructure',
  'AI & Data Engineering',
];

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ flag: '🇪🇹', name: 'Ethiopia', code: '+251' });

  const countries = [
    { flag: '🇪🇹', name: 'Ethiopia', code: '+251' },
    { flag: '🇰🇪', name: 'Kenya', code: '+254' },
    { flag: '🇹🇿', name: 'Tanzania', code: '+255' },
    { flag: '🇺🇬', name: 'Uganda', code: '+256' },
    { flag: '🇳🇬', name: 'Nigeria', code: '+234' },
    { flag: '🇺🇸', name: 'United States', code: '+1' },
    { flag: '🇬🇧', name: 'United Kingdom', code: '+44' },
    { flag: '🇮🇩', name: 'Indonesia', code: '+62' },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-50 px-6 py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: copy + stats ── */}
        <div className="space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-8xl font-bold font-display leading-tight text-[#0051d5]">
              Let's build <br />
              together
            </h1>
            <p className="mt-5 text-sm text-black/60 leading-relaxed max-w-md">
              Once you fill out this form, our sales representatives will contact you within 24 hours. We're ready to transform your engineering vision into reality.
            </p>
          </div>

          {/* Stats 2×2 grid */}
          {/* <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6 flex flex-col gap-3 hover:bg-blue-50 hover:shadow-[0_0_20px_rgba(239,246,255,1)] transition-all duration-300 group">
                <span className="text-black/40 group-hover:text-secondary transition-colors">{s.icon}</span>
                <span className="text-2xl font-bold font-display text-black/60 group-hover:text-black transition-colors">{s.number}</span>
                <span className="text-xs text-black/60 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div> */}
        </div>

        {/* ── Right: contact form card ── */}
        <div className="bg-white rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,81,213,0.15)] p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                <CheckCircleIcon />
              </div>
              <h3 className="text-2xl font-bold font-display text-on-background">Message Sent!</h3>
              <p className="text-sm text-outline max-w-xs">
                Thank you for reaching out. A representative will contact you within one business day.
              </p>
              <button
                type="button"
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' }); }}
                className="mt-4 text-sm text-secondary font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-7">
                <h3 className="text-xl font-bold font-display text-on-background">Got a project in mind?</h3>
                <p className="text-sm text-outline mt-1">We guarantee to get back to you within a business day.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-on-background uppercase tracking-wide">
                      Your Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-lg border border-surface-container bg-surface px-4 py-2.5 text-sm text-on-background placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold text-on-background uppercase tracking-wide">
                      Your Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full rounded-lg border border-surface-container bg-surface px-4 py-2.5 text-sm text-on-background placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary transition"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-company" className="text-xs font-semibold text-on-background uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className="w-full rounded-lg border border-surface-container bg-surface px-4 py-2.5 text-sm text-on-background placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-semibold text-on-background uppercase tracking-wide">
                      Your Phone
                    </label>
                    <div className="flex rounded-lg border border-surface-container bg-surface overflow-hidden focus-within:ring-2 focus-within:ring-secondary transition relative">
                      {/* Custom Country Code Dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                          className="flex items-center gap-1.5 px-3 py-2.5 text-sm text-outline-variant border-r border-surface-container select-none whitespace-nowrap hover:bg-surface-container/50 transition"
                        >
                          <span className="text-lg leading-none">{selectedCountry.flag}</span>
                          <span className="font-medium">{selectedCountry.code}</span>
                        </button>

                        {/* Dropdown Menu */}
                        {countryDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-72 bg-surface border border-surface-container rounded-lg shadow-xl z-50 max-h-64 overflow-y-auto">
                            {countries.map((country) => (
                              <button
                                key={`${country.code}-${country.name}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setCountryDropdownOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-on-background hover:bg-secondary/10 transition text-left border-b border-surface-container last:border-b-0 active:bg-secondary/20"
                              >
                                <span className="text-lg leading-none">{country.flag}</span>
                                <div className="flex-1 flex flex-col">
                                  <div className="font-medium text-on-background">{country.name}</div>
                                  <div className="text-xs text-outline-variant">{country.code}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Phone Input */}
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="9X XXX XXXX"
                        className="flex-1 bg-transparent px-3 py-2.5 text-sm text-on-background placeholder:text-outline-variant focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Services dropdown */}
                {/* <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-service" className="text-xs font-semibold text-on-background uppercase tracking-wide">
                    Services <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-lg border border-surface-container bg-surface px-4 py-2.5 text-sm text-on-background focus:outline-none focus:ring-2 focus:ring-secondary transition pr-10"
                    >
                      <option value="" disabled>Select your service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div> */}

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-on-background uppercase tracking-wide">
                    How can we help? <span className="text-secondary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full rounded-lg border border-surface-container bg-surface px-4 py-2.5 text-sm text-on-background placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary transition resize-y"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-1">
                  <button
                    id="contact-submit"
                    type="submit"
                    className="bg-secondary hover:bg-secondary-container text-on-secondary font-semibold text-sm px-7 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30 active:scale-95"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ContactSection />

      {/* Redesigned Dark Royal Blue Footer */}
      <footer className="relative bg-[#ffff] pt-20 pb-10 px-6 overflow-hidden">
        {/* Background Wave Graphic */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0">
          <svg className="absolute bottom-0 w-full h-auto min-h-[50%]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path fill="#F0F4F8" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,213.3C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Column 1: About & Badges */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-lg font-black text-xl">Y</div>
                <div className="text-2xl font-bold  text-blue-500 text-[#0051d5] tracking-tight">YARC SYSTEMS</div>
              </div>
              <p className="text-sm text-slate-400 leading-[1.8] font-medium">
                YARC Systems is a technology solution provider company situated in Addis Ababa, Ethiopia. We are a reliable Software Development, ERP Implementation Solution, Networking solutions and SEO service provider in Ethiopia. We provide custom web, software, multi-platform solutions for Enterprise and Startup companies.
              </p>

              {/* Badges Placeholder */}

              {/* <div className="flex flex-wrap gap-3 pt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-black text-white/50 text-center leading-none">
                      AWARD {i}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6 lg:pl-8">
              <h4 className="text-lg font-bold text-blue-500 font-display">Quick Links</h4>
              <ul className="space-y-3.5 text-sm font-medium text-slate-400">
                <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Software Development</Link></li>
                <li><Link className="hover:text-[#0051d5] transition-colors" to="/">ERP Solutions</Link></li>
                <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Website Development</Link></li>
                <li><Link className="hover:text-[#0051d5] transition-colors" to="/">SEO Service</Link></li>
                <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Website Hosting</Link></li>
              </ul>
            </div>

            {/* Column 3: Modules & About */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-blue-500 font-display">Popular Software Modules</h4>
                <ul className="space-y-3.5 text-sm font-medium text-slate-400">
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Accounting and Finance</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">HR, Payroll, Leave & Attendance</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Inventory or Warehouse</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Sales Management</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Purchase Management</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-blue-500 font-display">About Us</h4>
                <ul className="space-y-3.5 text-sm font-medium text-slate-400 ">
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Who We Are</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Contact Us</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Privacy Policy</Link></li>
                  <li><Link className="hover:text-[#0051d5] transition-colors" to="/">Disclaimer</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 4: Contact & CTA */}
            <div className="space-y-8">
              <h4 className="text-lg font-bold text-blue-500 font-display ">Contact Us</h4>

              <ul className="space-y-5 text-sm font-medium text-slate-400">
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-[#64748b]" />
                  <div className="flex flex-col gap-1 ">
                    <span className="hover:text-[#0051d5] transition-colors">+251-931-523460</span>
                    <span className="hover:text-[#0051d5] transition-colors">+251-931-523464</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#64748b]" />
                  <span className="hover:text-[#0051d5] transition-colors">get@yarcsystems.com</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#64748b]" />
                  <div className="flex flex-col gap-1">
                    <span className="hover:text-[#0051d5] transition-colors">Addis Ababa | Ethiopia</span>
                  </div>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a href="#" aria-label="Visit our Facebook page" className="w-10 h-10 rounded-full bg-[#F0F4F8]/5 text-[#64748b] flex items-center justify-center hover:bg-secondary transition-colors shadow-md border border-white/10 hover:text-white">
                  <Facebook className="w-5 h-5" fill="currentColor" stroke="none" />
                </a>
                <a href="#" aria-label="Visit our LinkedIn page" className="w-10 h-10 rounded-full bg-[#F0F4F8]/5 text-[#64748b] flex items-center justify-center hover:bg-secondary transition-colors shadow-md border border-white/10 hover:text-white">
                  <Linkedin className="w-5 h-5" fill="currentColor" stroke="none" />
                </a>
                <a href="#" aria-label="Visit our YouTube channel" className="w-10 h-10 rounded-full bg-[#F0F4F8]/5 text-[#64748b] flex items-center justify-center hover:bg-secondary transition-colors shadow-md border border-white/10 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>

              {/* CTA Box */}
              <div className="bg-[#F0F4F8] border border-white/10 p-8 rounded-xl shadow-xl relative overflow-hidden group cursor-pointer hover:bg-secondary transition-colors duration-500">
                <div className="absolute inset-0 hero-grid-bg opacity-5 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2">
                  <h3 className="text-xl font-bold text-[#64748b] font-display group-hover:text-white">Visit Demo</h3>
                  <div className="flex items-center gap-2 text-[#64748b] text-sm font-semibold group-hover:text-white transition-colors">
                    Check it out <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-slate-300 shadow-sm hover:bg-secondary hover:text-white hover:border-secondary transition-all mb-4 md:mb-0"
            >
              <ChevronUp className="w-5 h-5" />
            </button>

            <p className="text-sm font-medium text-slate-400">
              YARC Systems PLC &copy; All rights reserved contents
            </p>

            <div className="hidden md:block w-10 h-10" /> {/* Spacer for balance */}
          </div>
        </div>
      </footer>
    </>
  );
}
