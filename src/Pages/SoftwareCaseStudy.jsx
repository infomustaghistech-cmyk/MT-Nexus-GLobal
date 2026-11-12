import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { softwareProjects, getSoftwareProjectBySlug } from '../data/softwareProjects';
import ProjectIdentity, { technologyLogo } from '../Componenet/software/ProjectIdentity';
import './SoftwareCaseStudy.css';

function SectionHeading({ number, title, children }) {
  return <header className="case-section-heading"><span>{number} / {title}</span><h2>{children}</h2></header>;
}

export default function SoftwareCaseStudy() {
  const { slug } = useParams();
  const project = getSoftwareProjectBySlug(slug || '');
  useEffect(() => {
    const oldTitle = document.title;
    document.title = project ? `${project.name} | Nexus Global Case Study` : 'Case Study | Nexus Global';
    return () => { document.title = oldTitle; };
  }, [project]);

  if (!project) return <main className="case-study case-study--missing"><h1>Case study not found</h1><p>The requested project could not be located.</p><Link to="/projects/software" className="case-button">Browse software projects <ArrowRight size={16} /></Link></main>;

  const related = softwareProjects.filter((item) => item.id !== project.id);
  return (
    <main className={`case-study case-study--${project.id}`}>
      <section className="case-hero">
        <div className="case-container">
          <Link to="/projects/software" className="case-back"><ArrowLeft size={15} /> All software projects</Link>
          <div className="case-hero__layout">
            <div><span className="case-eyebrow">{project.category}</span><h1>{project.name}</h1><p className="case-hero__description">{project.subtitle}</p><span className="case-status">{project.status}</span></div>
            <div className="case-hero__brand"><ProjectIdentity id={project.id} /><p>{project.tagline}</p></div>
          </div>
          <div className="case-hero__facts"><div><span>PROJECT TYPE</span><strong>{project.categoryShort}</strong></div><div><span>PLATFORM</span><strong>{project.heroSecondaryMetric?.value}</strong></div><div><span>STATUS</span><strong>{project.isUpcoming ? 'In development' : 'Completed project'}</strong></div></div>
        </div>
      </section>

      <section className="case-section"><div className="case-container case-overview"><SectionHeading number="01" title="OVERVIEW">The project at a glance.</SectionHeading><div><p className="case-lead">{project.summary}</p><p className="case-scope-note">{project.clientNotice}</p></div></div></section>
      <section className="case-section case-section--muted"><div className="case-container case-two-columns"><article className="case-panel"><SectionHeading number="02" title="THE CHALLENGE">The problem to solve.</SectionHeading><p>{project.businessChallenge}</p></article><article className="case-panel"><SectionHeading number="03" title="THE APPROACH">How it was engineered.</SectionHeading><p>{project.technicalSolution}</p></article></div></section>

      <section className="case-section"><div className="case-container"><SectionHeading number="04" title="TECHNOLOGY">The stack behind the solution.</SectionHeading><div className="case-tech-grid">{project.techStack.map((tech) => {
        const logo = technologyLogo(tech.name);
        return <article className="case-tech" key={tech.name}>{logo && <div className="case-tech__logo"><img src={logo} alt={tech.name} loading="lazy" /></div>}<span className="case-tech__category">{tech.category}</span><h3>{tech.name}</h3><p>{tech.role}</p></article>;
      })}</div>{project.architectureHighlights && <div className="case-architecture">{project.architectureHighlights.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>}</div></section>

      <section className="case-section case-section--muted"><div className="case-container"><SectionHeading number="05" title="PRODUCT & WORKFLOWS">Built around the day-to-day.</SectionHeading><div className="case-workflows"><div className="case-workflows__brand"><ProjectIdentity id={project.id} /><p>{project.tagline}</p></div><ul>{project.keyFunctionalities.map((item) => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}</ul></div></div></section>

      <section className="case-section"><div className="case-container"><SectionHeading number="06" title="CONTRIBUTIONS">Our engineering scope.</SectionHeading><div className="case-contributions">{project.contributions.map((item, index) => <article className="case-panel" key={item.title}><span className="case-item-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>

      <section className="case-section case-section--muted"><div className="case-container"><SectionHeading number="07" title={project.isUpcoming ? 'ROADMAP' : 'PROJECT OUTCOMES'}>{project.isUpcoming ? 'The path to release.' : 'What the work delivered.'}</SectionHeading>{project.isUpcoming ? <div className="case-roadmap">{project.roadmap?.map((item) => <article className="case-panel" key={item.phase}><span className="case-tech__category">{item.phase}</span><span className="case-roadmap__status">{item.status}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div> : <div className="case-results">{project.results?.map((item, index) => <article key={index}><strong>{item.metric}</strong><p>{item.description}</p></article>)}</div>}</div></section>

      <section className="case-section"><div className="case-container"><SectionHeading number="08" title="MORE PROJECTS">Explore more of our work.</SectionHeading><div className="case-related">{related.map((item) => <Link key={item.id} to={`/case-study/${item.slug}`} className="case-related__card"><ProjectIdentity id={item.id} compact /><span className="case-tech__category">{item.categoryShort}</span><h3>{item.name}</h3><p>{item.summary}</p><span className="case-related__action">Explore project <ArrowRight size={16} /></span></Link>)}</div></div></section>
      <section className="case-contact"><div className="case-container"><div><span className="case-eyebrow">YOUR NEXT PROJECT</span><h2>Have a similar challenge?</h2><p>Let's discuss what your business needs and how we can help.</p></div><Link className="case-button" to="/contact">Discuss your project <ArrowRight size={17} /></Link></div></section>
    </main>
  );
}
