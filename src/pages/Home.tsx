import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Expertise from '../components/Expertise';
import Clients from '../components/Clients';
import Industries from '../components/Industries';
import Benefits from '../components/Benefits';
import WhyUs from '../components/WhyUs';
import EnterpriseSolution from '../components/EnterpriseSolution';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Expertise />
      <Industries />
      <Benefits />
      <WhyUs />
      <EnterpriseSolution />
      <Clients />
    </>
  );
}
