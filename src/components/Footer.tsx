import { Link } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-primary px-6 py-24 border-b border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ── Left: copy + stats ── */}
        <div className="space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-container mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight text-white">
              Contact Us
              <span className="block text-secondary-container text-2xl md:text-3xl font-semibold mt-1">
                for project discussion
              </span>
            </h2>
            <p className="mt-5 text-sm text-outline-variant/60 leading-relaxed max-w-md">
              Once you fill out this form, our sales representatives will contact you within 24 hours. We're ready to transform your engineering vision into reality.
            </p>
          </div>

          {/* Stats 2×2 grid */}
          <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            {stats.map((s) => (
              <div key={s.label} className="bg-primary-container/60 backdrop-blur-sm p-6 flex flex-col gap-3 hover:bg-secondary/10 transition-colors">
                <span className="text-secondary-container">{s.icon}</span>
                <span className="text-2xl font-bold font-display text-white">{s.number}</span>
                <span className="text-xs text-outline-variant/60 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: contact form card ── */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
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
                    <div className="flex rounded-lg border border-surface-container bg-surface overflow-hidden focus-within:ring-2 focus-within:ring-secondary transition">
                      <span className="flex items-center gap-1.5 px-3 text-sm text-outline-variant border-r border-surface-container select-none whitespace-nowrap">
                        🇪🇹 +251
                      </span>
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
                <div className="flex flex-col gap-1.5">
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
                </div>

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
  return (
    <>
      <ContactSection />
      <footer className="bg-primary text-white py-20 px-6 border-t border-white/5">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="space-y-6 md:col-span-1">
            <div className="text-xl font-bold font-display">Y ARC Systems PLC</div>
            <p className="text-sm text-outline-variant/60 leading-relaxed">
              Expert-led engineering for the digital-first enterprise. Engineering clarity from complexity.
            </p>
          </div>

          <div className="space-y-6">
            <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-container">Solutions</h6>
            <ul className="space-y-4 text-sm text-outline-variant/60">
              <li><Link className="hover:text-white transition-colors" to="/">Healthcare Solutions</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Real Estate Systems</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">ERP Modules</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Custom Development</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-container">Company</h6>
            <ul className="space-y-4 text-sm text-outline-variant/60">
              <li><Link className="hover:text-white transition-colors" to="/">Our Story</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Core Values</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Team</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/">Careers</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary-container">Headquarters</h6>
            <ul className="space-y-4 text-sm text-outline-variant/60">
              <li>Addis Ababa, Ethiopia</li>
              <li>Bole Sub-city, Woreda 03</li>
              <li>IT Park, R&D Center</li>
              <li className="pt-4 border-t border-white/5">© {new Date().getFullYear()} YARC Systems PLC.</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
