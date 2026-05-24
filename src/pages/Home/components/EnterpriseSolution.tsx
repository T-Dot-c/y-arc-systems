import { motion } from 'motion/react';
import { BarChart3, Users, Warehouse, Briefcase, ShoppingCart, LineChart, Truck, HeartHandshake, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './EnterpriseSolution.css';

const modules = [
  { title: 'Accounting and Finance', desc: "Primarily formed of accounting modules that keep tabs on your company's total cash flow and profit and loss.", icon: <BarChart3 className="w-8 h-8" /> },
  { title: 'HR, Payroll & Attendance', desc: 'While automating operations involving the employees in your firm, such payroll, recruitment, leave, attendance, etc...', icon: <Users className="w-8 h-8" /> },
  { title: 'Warehouse - Inventory Management', desc: 'Keeping track of stock levels and pricing for all products that your organization manufactures, purchases, stores, and sells.', icon: <Warehouse className="w-8 h-8" /> },
  { title: 'Project Management', desc: 'Management includes managing raw material, accounting for requirements, and tracking project status.', icon: <Briefcase className="w-8 h-8" /> },
  { title: 'Purchase Order Management', desc: 'Record track of all essential order information such as purchase quantities, items purchased, and payment expenses.', icon: <ShoppingCart className="w-8 h-8" /> },
  { title: 'Sales And Marketing', desc: 'Sales Management, integration with CRM processes let user easily manage your products, customers, quotations and invoices.', icon: <LineChart className="w-8 h-8" /> },
  { title: 'Vehicle Fleet Management', desc: 'Manages the registration, repair, maintenance, driver and fuel consumption, and every other aspect of the vehicles.', icon: <Truck className="w-8 h-8" /> },
  { title: 'Customer Centric CRM', desc: 'Manages contact management, communication tracking, opportunity/lead tracking, quote creation, and sales agent productivity.', icon: <HeartHandshake className="w-8 h-8" /> },
];

export default function EnterpriseSolution() {
  return (
    <section id="enterprise-solutions" className="enterprise-section">
      <div className="enterprise-container">
        <div className="enterprise-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="enterprise-heading"
          >
            ERP System Software Developed <span className="enterprise-heading-white">Exclusively for Ethiopian Companies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="enterprise-subtext"
          >
            Each and every module has specific purpose in ERP software. These modules look over and manage different divisions and departments of the industry.
          </motion.p>
        </div>

        <div className="enterprise-grid">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="enterprise-card"
            >
              <div className="enterprise-icon-wrap">
                {mod.icon}
              </div>
              <div className="enterprise-card-body">
                <h3 className="enterprise-card-title">{mod.title}</h3>
                <p className="enterprise-card-desc">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="enterprise-footer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/erp-system" className="enterprise-cta">
              <span className="enterprise-cta-text">Read More About ERP</span>
              <div className="enterprise-cta-bg" />
              <ChevronRight className="enterprise-cta-icon" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
