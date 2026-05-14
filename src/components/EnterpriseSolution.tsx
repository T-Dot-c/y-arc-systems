import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Users, 
  Warehouse, 
  Briefcase, 
  ShoppingCart, 
  LineChart, 
  Truck, 
  HeartHandshake,
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  { 
    title: 'Accounting and Finance', 
    desc: 'Primarily formed of accounting modules that keep tabs on your company\'s total cash flow and profit and loss.',
    icon: <BarChart3 className="w-8 h-8" /> 
  },
  { 
    title: 'HR, Payroll & Attendance', 
    desc: 'While automating operations involving the employees in your firm, such payroll, recruitment, leave, attendance, etc...',
    icon: <Users className="w-8 h-8" /> 
  },
  { 
    title: 'Warehouse - Inventory Management', 
    desc: 'Keeping track of stock levels and pricing for all products that your organization manufactures, purchases, stores, and sells.',
    icon: <Warehouse className="w-8 h-8" /> 
  },
  { 
    title: 'Project Management', 
    desc: 'Management includes managing raw material, accounting for requirements, and tracking project status.',
    icon: <Briefcase className="w-8 h-8" /> 
  },
  { 
    title: 'Purchase Order Management', 
    desc: 'Record track of all essential order information such as purchase quantities, items purchased, and payment expenses.',
    icon: <ShoppingCart className="w-8 h-8" /> 
  },
  { 
    title: 'Sales And Marketing', 
    desc: 'Sales Management, integration with CRM processes let user easily manage your products, customers, quotations and invoices.',
    icon: <LineChart className="w-8 h-8" /> 
  },
  { 
    title: 'Vehicle Fleet Management', 
    desc: 'Manages the registration, repair, maintenance, driver and fuel consumption, and every other aspect of the vehicles.',
    icon: <Truck className="w-8 h-8" /> 
  },
  { 
    title: 'Customer Centric CRM', 
    desc: 'Manages contact management, communication tracking, opportunity/lead tracking, quote creation, and sales agent productivity.',
    icon: <HeartHandshake className="w-8 h-8" /> 
  }
];

export default function EnterpriseSolution() {
  return (
    <section id="enterprise-solutions" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-primary mb-6 font-display tracking-tight"
          >
            ERP System Software Developed <span className="text-secondary">Exclusively for Ethiopian Companies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-outline max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Each and every module has specific purpose in ERP software. These modules look over and manage different divisions and departments of the industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 flex flex-col items-start gap-6 group hover:-translate-y-1 transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {module.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-black text-primary font-display leading-tight">{module.title}</h3>
                <p className="text-outline text-xs leading-relaxed font-medium">
                  {module.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/erp-system"
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-primary font-black uppercase tracking-widest text-xs overflow-hidden rounded-sm transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(30,64,175,0.15)] ring-1 ring-primary/5"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Read More About ERP</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
