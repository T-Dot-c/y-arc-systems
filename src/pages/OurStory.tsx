import OurStoryHero from '../components/OurStory-Hero';
import OurStoryTimeline from '../components/OurStory-Timeline';
import OurStoryValues from '../components/OurStory-Values';
import OurStoryPrinciples from '../components/OurStory-Principles';
import OurStoryLeadership from '../components/OurStory-Leadership';

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
