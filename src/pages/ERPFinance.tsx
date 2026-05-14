import {
  ShieldCheck,
  Database,
  Maximize,
  X,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ERPFinance() {
  const [activeTab, setActiveTab] = useState('legal');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefitsList = [
    'Accounting and Financial Management module gives real-time financial and account information at any instance.',
    'Finance and accounts module integrates with other modules of ERP software for sharing various insights into the business.',
    'Organization and proper management made easy with the help of finance and accounts module as invoices and bills are automatically calculated.',
    'Finance and accounts modules help the business in estimating potential profits, hence enables making strategic business decisions.',
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* ── Hero / Section 1: ERP Finance — SVG left + text right ── */}
      <section className="bg-gradient-to-br from-white to-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left — SVG infographic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 flex justify-center"
          >
            <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[420px]">
              {/* Drop-shadow filters */}
              <defs>
                <filter id="cs" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#93c5fd" floodOpacity="0.3" />
                </filter>
                <filter id="cf" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1e3a5f" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* Concentric background circles */}
              <circle cx="180" cy="180" r="155" fill="none" stroke="#dbeafe" strokeWidth="1.5" />
              <circle cx="180" cy="180" r="120" fill="none" stroke="#bfdbfe" strokeWidth="1.5" />
              <circle cx="180" cy="180" r="85" fill="none" stroke="#93c5fd" strokeWidth="1" />
              <circle cx="180" cy="180" r="50" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.5" />

              {/* Central Calendar */}
              <rect x="148" y="150" width="64" height="60" rx="6" fill="white" filter="url(#cs)" />
              <rect x="148" y="150" width="64" height="18" rx="6" fill="#ef4444" />
              <rect x="148" y="162" width="64" height="6" rx="0" fill="#ef4444" />
              <text x="180" y="163" textAnchor="middle" fontSize="7" fontWeight="700" fill="white" fontFamily="sans-serif">JUNE 2025</text>
              <rect x="161" y="146" width="5" height="9" rx="2.5" fill="#94a3b8" />
              <rect x="194" y="146" width="5" height="9" rx="2.5" fill="#94a3b8" />
              {[
                { x: 156, y: 178, d: '2', hi: false }, { x: 168, y: 178, d: '3', hi: false }, { x: 180, y: 178, d: '4', hi: true }, { x: 192, y: 178, d: '5', hi: false }, { x: 204, y: 178, d: '6', hi: false },
                { x: 156, y: 190, d: '9', hi: false }, { x: 168, y: 190, d: '10', hi: false }, { x: 180, y: 190, d: '11', hi: false }, { x: 192, y: 190, d: '12', hi: true }, { x: 204, y: 190, d: '13', hi: false },
                { x: 156, y: 202, d: '16', hi: false }, { x: 168, y: 202, d: '17', hi: true }, { x: 180, y: 202, d: '18', hi: false }, { x: 192, y: 202, d: '19', hi: false }, { x: 204, y: 202, d: '20', hi: false },
              ].map((cell) => (
                <g key={cell.d + cell.y}>
                  {cell.hi && <circle cx={cell.x} cy={cell.y - 3} r="6" fill="#3b82f6" />}
                  <text x={cell.x} y={cell.y} textAnchor="middle" fontSize="6" fill={cell.hi ? 'white' : '#475569'} fontFamily="sans-serif">{cell.d}</text>
                </g>
              ))}

              {/* Floating Cards */}
              {/* TOP card — Bar Chart */}
              <g transform="translate(130, 32)" filter="url(#cf)">
                <rect width="100" height="70" rx="10" fill="white" />
                <rect x="14" y="42" width="10" height="16" rx="2" fill="#93c5fd" />
                <rect x="28" y="32" width="10" height="26" rx="2" fill="#3b82f6" />
                <rect x="42" y="38" width="10" height="20" rx="2" fill="#93c5fd" />
                <rect x="56" y="26" width="10" height="32" rx="2" fill="#2563eb" />
                <rect x="14" y="20" width="52" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="14" y="26" width="36" height="3" rx="1.5" fill="#e2e8f0" />
                <circle cx="86" cy="12" r="10" fill="#22c55e" />
                <path d="M81 12 l3.5 3.5 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              {/* RIGHT card — Pie Chart */}
              <g transform="translate(252, 130)" filter="url(#cf)">
                <rect width="96" height="70" rx="10" fill="white" />
                <circle cx="30" cy="38" r="20" fill="#dbeafe" />
                <path d="M30 38 L30 18 A20 20 0 0 1 47.3 48 Z" fill="#3b82f6" />
                <path d="M30 38 L47.3 48 A20 20 0 0 1 12.7 48 Z" fill="#93c5fd" />
                <rect x="56" y="26" width="28" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="56" y="33" width="22" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="56" y="40" width="26" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="56" y="47" width="18" height="3" rx="1.5" fill="#e2e8f0" />
                <circle cx="84" cy="12" r="10" fill="#22c55e" />
                <path d="M79 12 l3.5 3.5 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              {/* BOTTOM card — Document lines */}
              <g transform="translate(130, 268)" filter="url(#cf)">
                <rect width="100" height="65" rx="10" fill="white" />
                <rect x="14" y="14" width="32" height="40" rx="4" fill="#dbeafe" />
                <rect x="14" y="14" width="32" height="10" rx="4" fill="#3b82f6" />
                <rect x="20" y="30" width="20" height="3" rx="1.5" fill="#93c5fd" />
                <rect x="20" y="37" width="14" height="3" rx="1.5" fill="#93c5fd" />
                <rect x="20" y="44" width="18" height="3" rx="1.5" fill="#93c5fd" />
                <rect x="54" y="22" width="34" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="54" y="30" width="26" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="54" y="38" width="30" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="54" y="46" width="22" height="3" rx="1.5" fill="#e2e8f0" />
                <circle cx="88" cy="12" r="10" fill="#22c55e" />
                <path d="M83 12 l3.5 3.5 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              {/* LEFT card — Bar + lines */}
              <g transform="translate(12, 130)" filter="url(#cf)">
                <rect width="96" height="70" rx="10" fill="white" />
                <rect x="12" y="44" width="8" height="14" rx="2" fill="#93c5fd" />
                <rect x="23" y="36" width="8" height="22" rx="2" fill="#3b82f6" />
                <rect x="34" y="40" width="8" height="18" rx="2" fill="#93c5fd" />
                <rect x="48" y="22" width="36" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="48" y="30" width="28" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="48" y="38" width="32" height="3" rx="1.5" fill="#e2e8f0" />
                <rect x="48" y="46" width="20" height="3" rx="1.5" fill="#e2e8f0" />
                <circle cx="84" cy="12" r="10" fill="#22c55e" />
                <path d="M79 12 l3.5 3.5 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
            </svg>
          </motion.div>

          {/* Right — text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <Link to="/erp-system" className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all mb-6">
                <ChevronRight className="w-4 h-4 rotate-180" /> Back to ERP System
              </Link>
              <h1 className="text-4xl md:text-5xl font-black text-primary font-display leading-tight">
                ERP for Finance &amp; Account
              </h1>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                The finance and account in ERP module offers statistics and reports of the industry's financial status. Every business or industry needs a robust solution to tackle all the financial errors and difficulties. The finance and accounts module perfectly delivers excellent solutions for finance and accounts related challenges. Understanding finance and account procedures are extremely difficult, as the steps and calculations are intricate.
              </p>
              <p>
                Enterprise Resource Planning is a powerful tool for any industry that resolves various difficulties that occurs during its operations. Finance and accounts module manages and crafts report of general ledger, assets, receivables, cash flows, etc. The finance and accounts module in ERP software empowers the industry to track the data and information related to the financial status of the industry or business. The finance and accounts module enables the industry to have absolute control over the finances of the industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Benefits ── */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          {/* Left — text */}
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary font-display leading-tight mb-6">
                Benefits of Finance and Accounts Module in ERP System
              </h2>
              <p className="text-lg text-outline leading-relaxed max-w-2xl">
                The finance and accounts module is one of the important parts of Enterprise Resource Planning software. To put it laconically, the finance and accounts module gives a complete overview of the business's financial status, enabling the business to make various decisions based on the insights provided by the module.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefitsList.map((b, idx) => (
                <li key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-secondary transition-colors">
                  <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-medium text-primary leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — inline SVG illustration (Businessmen) */}
          <div className="lg:w-[45%] flex-shrink-0">
            <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
              <ellipse cx="240" cy="305" rx="180" ry="12" fill="#e2e8f0" />
              {/* Giant Clock */}
              <circle cx="155" cy="185" r="88" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="6" />
              <circle cx="155" cy="185" r="80" fill="white" stroke="#94a3b8" strokeWidth="3" />
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                const r = deg * Math.PI / 180;
                const x1 = 155 + 68 * Math.sin(r);
                const y1 = 185 - 68 * Math.cos(r);
                const x2 = 155 + (i % 3 === 0 ? 58 : 63) * Math.sin(r);
                const y2 = 185 - (i % 3 === 0 ? 58 : 63) * Math.cos(r);
                return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i % 3 === 0 ? '#334155' : '#94a3b8'} strokeWidth={i % 3 === 0 ? 3 : 1.5} strokeLinecap="round" />;
              })}
              <line x1="155" y1="185" x2="155" y2="130" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
              <line x1="155" y1="185" x2="200" y2="175" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="155" cy="185" r="5" fill="#1e293b" />

              {/* Gold Coin */}
              <ellipse cx="340" cy="195" rx="72" ry="72" fill="#F5C842" />
              <ellipse cx="340" cy="195" rx="62" ry="62" fill="#F9D94E" />
              <text x="340" y="208" textAnchor="middle" fontSize="52" fontWeight="900" fill="#B8922B" fontFamily="Georgia, serif">$</text>

              {/* Businessman Left */}
              <rect x="62" y="215" width="28" height="52" rx="6" fill="#1e293b" />
              <circle cx="76" cy="205" r="16" fill="#fed7aa" />
              <line x1="90" y1="228" x2="117" y2="222" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
              <line x1="72" y1="267" x2="65" y2="300" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
              <line x1="83" y1="267" x2="88" y2="300" stroke="#334155" strokeWidth="10" strokeLinecap="round" />

              {/* Businessman Right */}
              <rect x="394" y="215" width="28" height="52" rx="6" fill="#1e293b" />
              <circle cx="408" cy="205" r="16" fill="#fed7aa" />
              <line x1="394" y1="228" x2="366" y2="222" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
              <line x1="415" y1="267" x2="420" y2="300" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why do we need it? ── */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Left — Icon & Title */}
          <div className="lg:w-1/3 space-y-8">
            <div className="w-24 h-24 rounded-3xl bg-white shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
              <span className="text-5xl font-black text-secondary">?</span>
            </div>
            <h2 className="text-4xl font-black text-primary font-display leading-tight">
              Why do we need a accounting - finance software?
            </h2>
          </div>

          {/* Right — Text & Features */}
          <div className="flex-1 space-y-12">
            <p className="text-xl text-outline leading-relaxed font-medium">
              Accounting is extremely important for recording the financial transactions of business for management and decision-making in any organization. The main object of Accounting is to record financial transactions systematically in the books of accounts and to find out the profit-loss and financial position of a business. Accounting module helps you manage your invoicing, sales, purchases, inventory, petty cash, taxation and more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <ChevronRight className="w-5 h-5 font-bold" />
                    <h4 className="text-xl font-bold text-primary font-display">Multi-Company</h4>
                  </div>
                  <p className="text-sm text-outline leading-relaxed pl-8">
                    You can see the total business done and outstanding amount of any customer / vendor, for all business entities or any specific entity. Profit & Loss statement, Balance sheet or any other statement can be generated without worrying about ledger mismatch and without merging data.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <ChevronRight className="w-5 h-5 font-bold" />
                    <h4 className="text-xl font-bold text-primary font-display">Manage Bills & Expenses</h4>
                  </div>
                  <p className="text-sm text-outline leading-relaxed pl-8">
                    Control supplier invoices and get a clear forecast of your future bills to pay.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <ChevronRight className="w-5 h-5 font-bold" />
                    <h4 className="text-xl font-bold text-primary font-display">Bank Synchronization</h4>
                  </div>
                  <p className="text-sm text-outline leading-relaxed pl-8">
                    Get your bank statements synced with your bank automatically, or import files.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <ChevronRight className="w-5 h-5 font-bold" />
                    <h4 className="text-xl font-bold text-primary font-display">Invoicing</h4>
                  </div>
                  <p className="text-sm text-outline leading-relaxed pl-8">
                    Create sharp and professional invoices, manage recurring billings, and easily track payments.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-secondary">
                    <ChevronRight className="w-5 h-5 font-bold" />
                    <h4 className="text-xl font-bold text-primary font-display">Easy Reconciliation</h4>
                  </div>
                  <p className="text-sm text-outline leading-relaxed pl-8">
                    Save time and automate 95% of reconciliation with our smart reconciliation tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Capabilities (Dark Theme) ── */}
      <section className="bg-[#0a0f1c] relative overflow-hidden px-6 py-24">
        {/* Subtle glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white font-display mb-8"
            >
              Capable of Accounting - <span className="text-secondary">Finance Management Software</span>
            </motion.h2>

            {/* Interactive Tabs (Dark Mode) */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 bg-white/5 p-2 rounded-full w-fit mx-auto backdrop-blur-md border border-white/10">
              {[
                { id: 'legal', label: 'Accounts Legal Statements' },
                { id: 'receivable', label: 'Accounts Receivable' },
                { id: 'payable', label: 'Accounts Payable' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 md:px-12 py-4 rounded-full text-sm font-bold transition-all duration-500 relative ${activeTab === tab.id
                    ? 'text-primary'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-secondary rounded-full shadow-xl shadow-secondary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Animated Content Area */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-[3rem] p-8 md:p-10 border border-white/10 shadow-2xl"
              >
                {activeTab === 'legal' && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                      <div className="w-3 h-10 bg-secondary rounded-full" />
                      <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">Accounts Legal Statements</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      {[
                        { title: 'Profit & Loss', desc: 'Navigate easily through the flow of information from the Profit & Loss report.' },
                        { title: 'General ledger', desc: 'Search and filter in the general ledger easily and zoom into documents in just a click.' },
                        { title: 'Consolidated Journal Report', desc: 'Get your tax reports in accrual or cash based, formatted according to the right country. The tax audit report allows you to check how the tax report is computed for audit purposes...' }
                      ].map((item) => (
                        <div key={item.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-secondary/40 hover:bg-white/[0.05] transition-all duration-500">
                          <h4 className="text-xl font-bold text-white flex items-center gap-3 mb-4 group-hover:text-secondary transition-colors">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            {item.title}
                          </h4>
                          <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'receivable' && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                      <div className="w-3 h-10 bg-secondary rounded-full" />
                      <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">Accounts Receivable</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {[
                        { title: 'Clean customer invoices', desc: 'Invoices are easy to create, beautiful and full featured (payment terms, multiple taxes, discounts, price lists).' },
                        { title: 'Draft invoice propositions', desc: 'Draft invoices are created automatically by software based on sales order, timesheets or delivery orders.' },
                        { title: 'Advanced Payment terms', desc: 'Support multiple payments for one invoice, cash discounts, advance invoice and partial reconciliations.' },
                        { title: 'On-the-fly payment reconciliation', desc: 'When creating an invoice, we suggests outstanding payments automatically...' }
                      ].map((item) => (
                        <div key={item.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-secondary/40 hover:bg-white/[0.05] transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                              <BarChart3 className="w-5 h-5" />
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-xl font-bold text-white">{item.title}</h4>
                              <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'payable' && (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                      <div className="w-3 h-10 bg-secondary rounded-full" />
                      <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight">Accounts Payable</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                      {[
                        { title: 'Control supplier bills', desc: 'Compare the information appearing on the Purchase Order, the Vendor Bill, and the Receipt to make sure you pay the correct bill.' },
                        { title: 'Forecast expenses', desc: 'Get a clear forecast of your future bills to pay.' },
                        { title: 'Employee expenses', desc: 'Track employee expenses, from the recording to the validation and reimbursement.' },
                        { title: 'Annotate any report', desc: 'All reports are full dynamic allowing you to navigate easily. Create multiple annotations...' }
                      ].map((item) => (
                        <div key={item.title} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-secondary/40 hover:bg-white/[0.05] transition-all duration-500">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-colors">
                              <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div className="space-y-3">
                              <h4 className="text-xl font-bold text-white">{item.title}</h4>
                              <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-5xl font-black text-white font-display">
            Ready to streamline your <span className="text-secondary">Financial Operations?</span>
          </h2>
          <p className="text-white/80 text-xl leading-relaxed">
            Get in touch with our experts for a free consultation on how our Accounting & Finance module can transform your Ethiopian business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs hover:bg-secondary hover:text-white transition-all rounded-full shadow-2xl">
              Contact Us Today
            </Link>
            <Link to="/erp-system" className="px-12 py-5 bg-primary border-2 border-white/30 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all rounded-full">
              Explore All Modules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
