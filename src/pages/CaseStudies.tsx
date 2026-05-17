import CaseStudiesHero from '../components/CaseStudies-Hero';
import CaseStudiesGrid from '../components/CaseStudies-Grid';
import CaseStudiesExecutiveInsightsCTA from '../components/CaseStudies-ExecutiveInsightsCTA';
import CaseStudiesCareersCTA from '../components/CaseStudies-CareersCTA';
import CaseStudiesNewsletter from '../components/CaseStudies-Newsletter';

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

