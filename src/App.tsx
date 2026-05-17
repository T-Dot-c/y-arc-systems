/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ERPSystem from './pages/ERPSystem';
import ERPFinance from './pages/ERPFinance';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import OurClients from './pages/OurClients';
import Testimonials from './pages/Testimonials';
import OurStory from './pages/OurStory';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import WebSolutions from './pages/WebSolutions';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <CursorGlow />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/erp-system" element={<ERPSystem />} />
            <Route path="/erp-finance" element={<ERPFinance />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/our-clients" element={<OurClients />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/software-development" element={<SoftwareDevelopment />} />
            <Route path="/web-solutions" element={<WebSolutions />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
