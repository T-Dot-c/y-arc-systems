import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Expertise from './components/Expertise';
import Clients from './components/Clients';
import Industries from './components/Industries';
import Benefits from './components/Benefits';
import WhyUs from './components/WhyUs';
import EnterpriseSolution from './components/EnterpriseSolution';
import heroBg from '../../Assets/images/Background/Hero2.jpg';

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="fixed inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

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
