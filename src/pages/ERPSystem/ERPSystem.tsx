import { useEffect } from 'react';
import ERPSystemHero from './components/Hero';
import ERPSystemModules from './components/Modules';
import ERPSystemIndustryCoverage from './components/IndustryCoverage';
import ERPSystemSolutions from './components/Solutions';

export default function ERPSystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <ERPSystemHero />
      <ERPSystemModules />
      <ERPSystemIndustryCoverage />
      <ERPSystemSolutions />
    </div>
  );
}
