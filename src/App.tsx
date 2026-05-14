/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ERPSystem from './pages/ERPSystem';
import ERPFinance from './pages/ERPFinance';
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
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
