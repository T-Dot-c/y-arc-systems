import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home/Home';
import ERPSystem from '../pages/ERPSystem/ERPSystem';
import ERPFinance from '../pages/ERPFinance/ERPFinance';
import Blog from '../pages/Blog/Blog';
import CaseStudies from '../pages/CaseStudies/CaseStudies';
import OurClients from '../pages/OurClients/OurClients';
import Testimonials from '../pages/Testimonials/Testimonials';
import OurStory from '../pages/OurStory/OurStory';
import SoftwareDevelopment from '../pages/SoftwareDevelopment/SoftwareDevelopment';
import WebSolutions from '../pages/WebSolutions/WebSolutions';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from '../../shared/constants/routes';

// Placeholder components for new routes
const Dashboard = () => <div className="pt-32 px-10 text-white">Dashboard (Protected)</div>;
const Login = () => <div className="pt-32 px-10 text-white">Login Page</div>;

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ERP_SYSTEM} element={<ERPSystem />} />
        <Route path={ROUTES.ERP_FINANCE} element={<ERPFinance />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CASE_STUDIES} element={<CaseStudies />} />
        <Route path={ROUTES.SOFTWARE_DEV} element={<SoftwareDevelopment />} />
        <Route path={ROUTES.WEB_SOLUTIONS} element={<WebSolutions />} />
        
        {/* Public Utility Routes */}
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/our-story" element={<OurStory />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isAuthenticated={false} />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
