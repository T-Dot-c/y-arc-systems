import OurClientsLogoGrid from './components/LogoGrid';
import OurClientsTestimonials from './components/Testimonials';
import OurClientsTrustIndicators from './components/TrustIndicators';
import OurClientsScaleCTA from './components/ScaleCTA';

export default function OurClients() {
  return (
    <div className="bg-white min-h-screen text-[#071B52]">
      {/* 1. Hero Logo Grid */}
      <OurClientsLogoGrid />
      
      {/* 2. Client Testimonials */}
      <OurClientsTestimonials />
      
      {/* 3. Our Track Record */}
      <OurClientsTrustIndicators />
      
      {/* 4. Bottom Scale CTA */}
      <OurClientsScaleCTA />
    </div>
  );
}

