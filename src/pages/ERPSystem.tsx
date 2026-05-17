import { useEffect } from 'react';
import ERPSystemHero from '../components/ERPSystem-Hero';
import ERPSystemModules from '../components/ERPSystem-Modules';
import ERPSystemIndustryCoverage from '../components/ERPSystem-IndustryCoverage';
import ERPSystemSolutions from '../components/ERPSystem-Solutions';

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
