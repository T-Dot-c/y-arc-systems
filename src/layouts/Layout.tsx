import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import CursorGlow from '../components/shared/CursorGlow';
import ScrollToTop from '../components/shared/ScrollToTop';
import FloatingActions from '../components/shared/FloatingActions';

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      <ScrollToTop />
      <CursorGlow />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
