import React from 'react';
import './ProjectIdentity.css';

export function technologyLogo(name) {
  if (/geotab/i.test(name)) return '/project-brands/geotab.svg';
  if (/samsara/i.test(name)) return '/project-brands/samsara.svg';
  if (/talabat/i.test(name)) return '/project-brands/talabat.svg';
  return null;
}

export default function ProjectIdentity({ id, compact = false }) {
  return (
    <div className={`project-identity${compact ? ' project-identity--compact' : ''}`}>
      {id === 'curevirtual' && <img className="project-identity__cure" src="/project-brands/curevirtual.webp" alt="CureVirtual" width="800" height="394" />}
      {id === 'fleet-telematics-api' && <div className="project-identity__pair"><img src="/project-brands/geotab.svg" alt="Geotab" /><span aria-hidden="true">+</span><img src="/project-brands/samsara.svg" alt="Samsara" /></div>}
      {id === 'pos-talabat-integration' && <img className="project-identity__talabat" src="/project-brands/talabat.svg" alt="Talabat" />}
      {id === 'transpopilot' && <span className="project-identity__transpo">TranspoPilot</span>}
    </div>
  );
}
