import CaseStudiesHero from './components/Hero';
import CaseStudiesGrid from './components/Grid';
import CaseStudiesExecutiveInsightsCTA from './components/ExecutiveInsightsCTA';
import CaseStudiesCareersCTA from './components/CareersCTA';
import CaseStudiesNewsletter from './components/Newsletter';

export default function CaseStudies() {
  return (
    <div className="bg-white min-h-screen text-[#071B52]">
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesExecutiveInsightsCTA />
      <CaseStudiesCareersCTA />
      <CaseStudiesNewsletter />
    </div>
  );
}

