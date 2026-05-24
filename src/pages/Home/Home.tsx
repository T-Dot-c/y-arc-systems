import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Expertise from './components/Expertise';
import Clients from './components/Clients';
import Industries from './components/Industries';
import Benefits from './components/Benefits';
import WhyUs from './components/WhyUs';
import EnterpriseSolution from './components/EnterpriseSolution';

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="relative z-10">
          <Hero />
          <Expertise />
          <Introduction />
          <Industries />
          <WhyUs />
          <EnterpriseSolution />
          <Clients />
        </div>
      </div>


    </>
  );
}
