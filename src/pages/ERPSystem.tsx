import { 
  BarChart3, 
  Users, 
  Warehouse, 
  Briefcase, 
  ShoppingCart, 
  LineChart, 
  Truck, 
  HeartHandshake,
  ShieldCheck,
  Database,
  Maximize,
  Code2,
  RefreshCw,
  Network,
  Combine,
  ChevronRight,
  Stethoscope,
  Building2,
  Plane,
  GraduationCap,
  Banknote,
  Container,
  Tv,
  Car,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';


const coreBenefits = [
  {
    title: 'Future Reliability',
    desc: 'Work with an ERP provider that offers a vision - and the technological expertise - for how it will continue upgrading the software to the state of the art for many years to come.',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />
  },
  {
    title: 'Centered Data',
    desc: 'ERP software that incorporates all business areas and locations, provides data centrally, and automates processes is much more efficient than siloed information systems.',
    icon: <Database className="w-8 h-8 text-primary" />
  },
  {
    title: 'Scalability',
    desc: 'ERP software should be able to grow with the company - whether establishing several domestic sites or expanding internationally. A local presence makes implementation efficient.',
    icon: <Maximize className="w-8 h-8 text-primary" />
  }
];

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

const industryCoverage = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: <Stethoscope className="w-5 h-5" />,
    content: "At Y ARC Systems, we offer Healthcare Software Development solutions based on in-depth research & deep industry knowledge. Our talented team of experts has years of experience in developing solutions for the betterment of mankind. Serving this sector with top-notch solutions is the main objective of our company. Our solutions not only use cutting-edge technology but also provide excellent returns on investments. We partner with our clients to deliver 'future-ready' solutions which address healthcare needs and eliminate redundancy. Our team uses a technical approach to create reliable and stable web applications that are compliant with global health regulations."
  },
  {
    id: 'retail',
    name: 'Retail & eCommerce',
    icon: <Building2 className="w-5 h-5" />,
    content: "At Y ARC Systems, we deliver cutting-edge technology solutions for eCommerce & retail businesses. Our eCommerce solutions are built on the latest technology platforms like Magento, SpreeCommerce, and PrestaShop. Our quality services are spread across web development, responsive web development customization, cart development, payment gateway integration, order tracking, content management, & relationship management. We at Y ARC Systems ensure best practices in user experience design to deliver responsive web design with high on-page performance optimization, faster page load time, page fluidity, and regular maintenance. Proper incorporation of needed features, simple navigation, and precise tailoring in view of our client’s specific business objectives assure that our online stores deliver value to customer’s businesses. We firmly believe in timely delivery & cost-efficient solutions along with consistency and premium quality."
  },
  {
    id: 'travel',
    name: 'Travel and Tourism',
    icon: <Plane className="w-5 h-5" />,
    content: "At Y ARC Systems, we build cutting-edge technology to help travel and tourism businesses automate the management of customer communication, guest management, online booking, and logistics management. We have a dedicated team specializing in the design and develop end-to-end travel tech solutions by integrating OTAs’ & tour operators’ websites. We keep ourselves updated on the latest trends and developments in travel and hospitality to not only develop solutions but also consult our clients and help them be future-ready. This adds immense value to our as well as our client’s businesses. We focus on developing easy-to-use interfaces that boost user engagement and maximize Return on Investment. Our goal is to minimize on costs of operations while uplifting return on investment for your business."
  },
  {
    id: 'education',
    name: 'Education and eLearning',
    icon: <GraduationCap className="w-5 h-5" />,
    content: "Our highly talented eLearning development team applies both traditional as well as innovative e-learning approaches to enhance the learning process with new technologies which will help educators to understand their learners & deliver solutions that cover diverse e-learning techniques using emerging modern technology like AR/VR enabled learning. Moreover, we offer customized e-learning solutions to improve corporate learning portals, online courses, learning management systems, online training applications, among many more. We partner with our customers to understand their needs and deliver real outcomes which make a business impact. Our solutions ensure that our customer’s investment in their employees is justified by challenging them to take risks and experience consequences within a safe, online learning and training environment. From small simulations to scenario-based software training—our web-based, easy-to-implement solutions span across all varieties depending on our client’s needs and budgets."
  },
  {
    id: 'banking',
    name: 'Banking and Finance Solutions',
    icon: <Banknote className="w-5 h-5" />,
    content: "Our team of experts is highly qualified and certified with in-depth expertise and years of experience in this industry. This helps us in understanding client requirements better. We not only build products, but we also work with our clients to provide them expert consulting services and tell them what they need in the future! At the same time, we are completely driven by the objective of helping financial institutions in achieving cost-efficiency and scalability. Our custom-built tech solutions for banking and finance businesses are mainly conceptualized to fill the bridge between the banking service and the common person. Our purpose is to produce personalized banking and financial solutions to improve agility, operation, and leadership."
  },
  {
    id: 'logistics',
    name: 'Logistics and Transportation',
    icon: <Container className="w-5 h-5" />,
    content: "Whether you’re a transportation company or offer other services, logistics software development is an important means of managing inventory and keeping the supply chain running smoothly, from warehouse management to shipping. Every enterprise has logistics needs, after all. And they operate better when you have the right tech by their side. We have a highly talented smart logistics software development team who are at the same time keen learners as well. Moreover, the team specializing in logistics and transportation concentrates on maximizing return on investment and improving the overall workflow daily. We at Y ARC Systems offer you the top logistics software development service and help you increase your development with our cross-functional expertise."
  },
  {
    id: 'media',
    name: 'Media and Entertainment',
    icon: <Tv className="w-5 h-5" />,
    content: "We provide online promotion solutions, social networking, and media content distribution channels using the latest tech trends and social networking development tools. We at Y ARC Systems develop fully-fledged software for video streaming, offer your end-users top-notch features they need, and give access to the content on desktops as well as mobile devices. Implementing cutting-edge technology, we assist the Media and Entertainment industry to build eye-catching & intuitive experiences for fans and visitors. Our versatile and advanced software development services incorporate features such as live video feeds, ticket booking, loyalty programs, social media, and fan transit. Since we hold many years of experience in the IT industry, we have benefited many prominent names in the sector to boost their profits."
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: <Car className="w-5 h-5" />,
    content: "The automotive sector requires effective software solutions to enhance sustainability and efficiency. Being a top software development company, we at Y ARC Systems provide innovative, customized, and technology-driven solutions to its clients across the globe. We deliver top-notch automotive software development services according to your business requirements. Embracing the complexity of the automotive software architecture, our automotive software services are built around top approaches for prototyping, developing, testing, and deploying new features. All our automotive software development efforts focus on improving software performance and elevating user satisfaction."
  }
];

const developmentSolutions = [
  {
    title: 'Ready-made Software Development',
    desc: 'Support your business infrastructure with scalable software that improves key facets of your enterprise, from automation to employee collaboration.',
    icon: <Code2 className="w-6 h-6 text-primary" />
  },
  {
    title: 'Legacy Modernization',
    desc: 'Transform your aging systems into modern, high-performance applications. We upgrade your infrastructure while preserving business logic and critical data.',
    icon: <RefreshCw className="w-6 h-6 text-primary" />
  },
  {
    title: 'Software Integration',
    desc: 'Improve your software infrastructure with well-built microservices, reliable API, and data integration for well-coordinated SaaS and on-premise apps.',
    icon: <Network className="w-6 h-6 text-primary" />
  },
  {
    title: 'Consolidation',
    desc: 'Consolidate, integrate, and refactor your enterprise software as necessary, moving them to modern software stacks and cloud hosting to minimize costs.',
    icon: <Combine className="w-6 h-6 text-primary" />
  }
];

export default function ERPSystem() {
  const [activeIndustry, setActiveIndustry] = useState(industryCoverage[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-8 font-display tracking-tight"
          >
            ERP Software for <span className="text-secondary">Ethiopian Business Organizations</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-outline max-w-4xl mx-auto text-lg leading-relaxed mb-20"
          >
            ERP stands for Enterprise Resource Planning. ERP software provides a backbone to all the operations in industries. 
            Industries has myriad of intricate operations and processes that needs to be taken care of. 
            ERP software meticulously utilizes all the resources in the industry to ensure that these operations are executed successfully 
            and keeps the workflow smoother.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreBenefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-primary mb-4 font-display">{benefit.title}</h3>
                <p className="text-outline text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
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

      {/* Industry Coverage Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-primary mb-6 font-display tracking-tight"
            >
              Covering All <span className="text-secondary">Major Ethiopian Industries.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-outline max-w-3xl mx-auto text-lg leading-relaxed"
            >
              We have delivered highly scalable & secure ERP development solutions to clients in diverse industries including retail, healthcare to banking, travel and more. Following are the industries we cater to when it comes to ERP Software development services in Ethiopia.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Tabs Navigation */}
            <div className="lg:col-span-4 space-y-2">
              {industryCoverage.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`w-full flex items-center gap-4 px-8 py-5 rounded-sm text-left transition-all duration-300 group ${
                    activeIndustry === industry.id 
                      ? 'bg-primary text-white shadow-xl shadow-primary/20 translate-x-2' 
                      : 'bg-white text-outline hover:bg-slate-50 hover:text-primary hover:translate-x-1'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${
                    activeIndustry === industry.id ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-white'
                  }`}>
                    {industry.icon}
                  </div>
                  <span className="font-bold text-sm tracking-tight">{industry.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-8 bg-slate-50 p-10 md:p-16 rounded-sm border border-slate-100 min-h-[400px] flex items-center shadow-sm">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-secondary rounded-full" />
                  <h3 className="text-3xl font-black text-primary font-display">
                    {industryCoverage.find(i => i.id === activeIndustry)?.name}
                  </h3>
                </div>
                <p className="text-outline text-lg leading-relaxed font-normal">
                  {industryCoverage.find(i => i.id === activeIndustry)?.content}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 font-display tracking-tight">
              Enterprise Software Development <span className="text-secondary">Solutions In Ethiopia</span>
            </h2>
            <p className="text-outline max-w-3xl mx-auto leading-relaxed">
              Ethiopian business needs a reliable enterprise software solution to support your many operations. It needs to scale, coordinate other software and mobile apps, incorporate advance tech, and cover an extensive list of other objectives. Y ARC Systems has the experience, tools, and technologies to create such demanding custom software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {developmentSolutions.map((solution, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <div className="group-hover:text-white transition-colors duration-300">
                    {solution.icon}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-primary font-display">{solution.title}</h3>
                  <p className="text-outline text-sm leading-relaxed">{solution.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-secondary transition-all duration-300 rounded-full shadow-2xl shadow-primary/20"
            >
              Get a Free Consultation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
