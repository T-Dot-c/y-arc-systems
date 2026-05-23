import TestimonialsHero from './components/Hero';
import TestimonialsGrid from './components/Grid';
import TestimonialsConsultationCTA from './components/ConsultationCTA';

export default function Testimonials() {
  return (
    <div className="bg-white min-h-screen text-[#071B52]">
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsConsultationCTA />
    </div>
  );
}
