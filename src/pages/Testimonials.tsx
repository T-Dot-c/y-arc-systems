import TestimonialsHero from '../components/Testimonials-Hero';
import TestimonialsGrid from '../components/Testimonials-Grid';
import TestimonialsConsultationCTA from '../components/Testimonials-ConsultationCTA';

export default function Testimonials() {
  return (
    <div className="bg-white min-h-screen text-[#071B52]">
      <TestimonialsHero />
      <TestimonialsGrid />
      <TestimonialsConsultationCTA />
    </div>
  );
}
