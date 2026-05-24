import { Link } from 'react-router-dom';
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

const modules = [
  { 
    title: 'Accounting and Finance', 
    desc: 'Primarily formed of accounting modules that keep tabs on your company\'s total cash flow and profit and loss.',
    icon: <BarChart3 className="w-6 h-6" /> 
  },
  { 
    title: 'HR, Payroll & Attendance', 
    desc: 'Automating operations involving the employees in your firm, such as payroll, recruitment, leave, and attendance.',
    icon: <Users className="w-6 h-6" /> 
  },
  { 
    title: 'Warehouse - Inventory Management', 
    desc: 'Keeping track of stock levels and pricing for all products that your organization manufactures, purchases, and sells.',
    icon: <Warehouse className="w-6 h-6" /> 
  },
  { 
    title: 'Project Management', 
    desc: 'Management includes managing raw material, accounting for requirements, and tracking project status.',
    icon: <Briefcase className="w-6 h-6" /> 
  },
  { 
    title: 'Purchase Order Management', 
    desc: 'Record track of all essential order information such as purchase quantities, items purchased, and payment expenses.',
    icon: <ShoppingCart className="w-6 h-6" /> 
  },
  { 
    title: 'Sales And Marketing', 
    desc: 'Sales Management and CRM integration lets you easily manage your products, customers, and quotations.',
    icon: <LineChart className="w-6 h-6" /> 
  },
  { 
    title: 'Vehicle Fleet Management', 
    desc: 'Manages the registration, repair, maintenance, fuel consumption, and every other aspect of your vehicles.',
    icon: <Truck className="w-6 h-6" /> 
  },
  { 
    title: 'Customer Centric CRM', 
    desc: 'Manages contact management, communication, opportunity tracking, and sales agent productivity.',
    icon: <HeartHandshake className="w-6 h-6" /> 
  }
];

export default function ERPSystemModules() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 font-display tracking-tight">
            ERP System Software Developed <span className="text-secondary">Exclusively for Ethiopian Companies</span>
          </h2>
          <p className="text-outline max-w-2xl mx-auto">
            Each and every module has specific purpose in ERP software. These modules look over and manage different divisions and departments of the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, i) => {
            const isFinance = module.title === 'Accounting and Finance';
            return (
              <Link 
                to={isFinance ? "/erp-finance" : "/erp-system"}
                key={i}
                className={`bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 flex flex-col items-start gap-6 group hover:-translate-y-1 transition-all duration-300 border border-slate-100 ${
                  isFinance ? 'cursor-pointer ring-2 ring-transparent hover:ring-secondary/40' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {module.icon}
                </div>
                <div className="space-y-3 flex-1">
                  <h4 className="font-bold text-primary font-display leading-tight">{module.title}</h4>
                  <p className="text-outline text-xs leading-relaxed font-medium">{module.desc}</p>
                </div>
                {isFinance && (
                  <span className="text-xs font-bold text-secondary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ChevronRight className="w-3 h-3" />
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
