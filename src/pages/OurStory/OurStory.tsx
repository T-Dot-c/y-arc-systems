import OurStoryHero from './components/Hero';
import OurStoryTimeline from './components/Timeline';
import OurStoryValues from './components/Values';
import OurStoryPrinciples from './components/Principles';
import OurStoryLeadership from './components/Leadership';

export default function OurStory() {
  return (
    <div className="bg-white min-h-screen">
      <OurStoryHero />
      <OurStoryTimeline />
      <OurStoryValues />
      <OurStoryPrinciples />
      <OurStoryLeadership />
    </div>
  );
}
