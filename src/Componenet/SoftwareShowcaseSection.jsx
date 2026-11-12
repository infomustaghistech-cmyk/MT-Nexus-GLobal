import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { softwareProjects } from '../data/softwareProjects';
import ProjectIdentity from './software/ProjectIdentity';
import './SoftwareShowcaseSection.css';

const projectOrder = ['curevirtual', 'fleet-telematics-api', 'pos-talabat-integration', 'transpopilot'];
const captions = {
  curevirtual: 'Patient and provider experiences, connected.',
  'fleet-telematics-api': 'One connected layer for fleet data.',
  'pos-talabat-integration': 'Connecting delivery orders with restaurant operations.',
  transpopilot: 'A unified workspace for transport operations.',
};

export default function SoftwareShowcaseSection({ isStandalonePage = false }) {
  const reducedMotion = useReducedMotion();
  const trackRef = useRef(null);
  const activeRef = useRef(1);
  const pauseAutoRef = useRef(false);
  const [active, setActive] = useState(1);
  const projects = projectOrder.map((id) => softwareProjects.find((project) => project.id === id)).filter(Boolean);
  const goTo = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    const centerCard = (index, behavior = 'auto') => {
      const card = track.children[index];
      if (card) track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior });
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.getBoundingClientRect().left + track.clientWidth / 2;
        let closest = 0;
        let distance = Infinity;
        Array.from(track.children).forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const nextDistance = Math.abs(rect.left + rect.width / 2 - center);
          if (nextDistance < distance) { distance = nextDistance; closest = index; }
        });
        activeRef.current = closest;
        setActive(closest);
      });
    };
    centerCard(activeRef.current);
    const resizeObserver = new ResizeObserver(() => centerCard(activeRef.current));
    resizeObserver.observe(track);
    track.addEventListener('scroll', update, { passive: true });
    let autoTimer;
    if (!reducedMotion && projects.length > 1) {
      autoTimer = window.setInterval(() => {
        if (pauseAutoRef.current || document.hidden) return;
        const nextIndex = (activeRef.current + 1) % projects.length;
        activeRef.current = nextIndex;
        centerCard(nextIndex, 'smooth');
      }, 2000);
    }
    return () => {
      window.clearInterval(autoTimer);
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      track.removeEventListener('scroll', update);
    };
  }, [reducedMotion]);

  return (
    <section id="software-engineering" aria-labelledby="software-solutions-title" className={`software-showcase${isStandalonePage ? ' software-showcase--standalone' : ''}`}>
      <div className="software-showcase__container">
        <header className="software-showcase__header">
          <span className="software-showcase__eyebrow">SELECTED SOFTWARE PROJECTS</span>
          <h2 id="software-solutions-title">Engineering Real-World<br />Digital Solutions</h2>
          <p>Custom platforms and integrations built around the way businesses work. Explore the challenge, the approach and the engineering behind each project.</p>
        </header>
        <div className="software-showcase__toolbar"><span>Explore the projects</span><div className="software-showcase__arrows"><button type="button" aria-label="Previous software project" onClick={() => goTo(active === 0 ? projects.length - 1 : active - 1)}><ChevronLeft size={19} /></button><button type="button" aria-label="Next software project" onClick={() => goTo((active + 1) % projects.length)}><ChevronRight size={19} /></button></div></div>
        <div className="software-showcase__carousel">
          <div ref={trackRef} className="software-showcase__projects" role="region" aria-roledescription="carousel" aria-label="Software projects" tabIndex={0} onPointerEnter={() => { pauseAutoRef.current = true; }} onPointerLeave={() => { pauseAutoRef.current = false; }} onFocus={() => { pauseAutoRef.current = true; }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) pauseAutoRef.current = false; }} onTouchStart={() => { pauseAutoRef.current = true; }} onTouchEnd={() => { window.setTimeout(() => { pauseAutoRef.current = false; }, 5000); }} onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); goTo(Math.max(0, Math.min(projects.length - 1, active + (event.key === 'ArrowRight' ? 1 : -1)))); }
          }}>
            {projects.map((project, index) => (
              <article key={project.id} className={`software-project${active === index ? ' is-active' : ''}`} aria-roledescription="slide" aria-label={`${project.name}, ${index + 1} of ${projects.length}`} onPointerMove={(event) => {
                if (reducedMotion || event.pointerType !== 'mouse') return;
                const rect = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;
                event.currentTarget.style.setProperty('--pointer-x', `${(x - 0.5) * 8}deg`);
                event.currentTarget.style.setProperty('--pointer-y', `${(0.5 - y) * 8}deg`);
              }} onPointerLeave={(event) => {
                event.currentTarget.style.setProperty('--pointer-x', '0deg');
                event.currentTarget.style.setProperty('--pointer-y', '0deg');
              }} onClick={(event) => { if (!event.target.closest('a')) goTo(index); }} onFocusCapture={() => goTo(index)}>
                <div className="software-project__brand"><ProjectIdentity id={project.id} /></div>
                <div className="software-project__details">
                  <span className="software-project__category">{project.categoryShort}</span>
                  <h3>{project.name}</h3>
                  <p>{captions[project.id]}</p>
                  {project.isUpcoming && <span className="software-project__stage">In development</span>}
                  <Link to={`/case-study/${project.slug}`} className="software-project__link">View project <ArrowRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
