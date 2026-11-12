import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';
import { supabase } from '../supabaseClient';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import SoftwareShowcaseSection from './SoftwareShowcaseSection';
import './ProjectCategoryPage.css';

export const projectCategories = {
  software: { label: 'Software & APIs', filter: null, title: 'Engineering real-world digital solutions.', description: 'Custom platforms and integrations built around the way businesses work. Explore the challenge, the approach and the engineering behind each project.', image: 'web-development-photo.webp', alt: 'Software code displayed on a monitor' },
  website: { label: 'Websites', filter: '%Website%', title: 'Websites built around real business.', description: 'Explore websites and digital platforms shaped by thoughtful design, clear user journeys and practical engineering.', image: 'web-development-photo.webp', alt: 'Software code displayed on a monitor' },
  app: { label: 'Apps', filter: '%App%', title: 'Mobile experiences, thoughtfully built.', description: 'A closer look at mobile products designed to make everyday interactions simpler, clearer and more useful.', image: 'mobile-product-photo.webp', alt: 'A real mobile application on a smartphone' },
  wordpress: { label: 'WordPress', filter: '%Wordpress%', title: 'Flexible websites. Clear experiences.', description: 'Explore WordPress projects that combine a considered visual identity with practical content management.', image: 'web-development-photo.webp', alt: 'Web development code on a computer' },
  shopify: { label: 'Shopify', filter: '%Shopify%', title: 'Commerce that works for your customers.', description: 'Storefronts and shopping experiences designed around discovery, usability and a straightforward path to purchase.', image: 'commerce-photo.webp', alt: 'A customer making a digital payment' },
  video: { label: 'Videos', filter: '%Video%', title: 'Stories made for the screen.', description: 'Explore video, editing and motion projects that bring ideas, products and brands into focus.', image: 'video-production-photo.webp', alt: 'A professional camera photographed outdoors' },
  graphic: { label: 'Graphic design', filter: '%Graphic%', title: 'Visual design with a clear purpose.', description: 'Identity, communication and design work that helps brands express themselves with clarity and consistency.', image: 'product-design-photo.webp', alt: 'A designer sketching visual layouts' },
};
const links = [{ label: 'All projects', path: '/projects' }, ...Object.entries(projectCategories).map(([key, item]) => ({ label: item.label, path: `/projects/${key}` }))];

export default function ProjectCategoryPage({ category }) {
  const config = projectCategories[category];
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');
  const [selected, setSelected] = useState(null);
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    const oldTitle = document.title;
    document.title = `${config.label} Projects | Nexus Global`;
    setProjects([]);
    setSelected(null);
    if (!config.filter) {
      setStatus('ready');
      return () => { disposed = true; controller.abort(); window.clearTimeout(timeout); document.title = oldTitle; };
    }
    setStatus('loading');
    async function load() {
      try {
        const { data, error } = await supabase.from('projects').select('*').ilike('category', config.filter).order('created_at', { ascending: false }).abortSignal(controller.signal);
        if (error) throw error;
        if (!disposed) { setProjects(data || []); setStatus('ready'); }
      } catch {
        if (!disposed) setStatus('error');
      } finally { window.clearTimeout(timeout); }
    }
    load();
    return () => { disposed = true; controller.abort(); window.clearTimeout(timeout); document.title = oldTitle; };
  }, [config, retry]);

  return (
    <main className="project-category-page">
      <header className="project-category-hero"><div className="project-category-container"><Link className="project-category-back" to="/projects"><ArrowLeft size={15} /> All projects</Link><div className="project-category-hero__layout"><div><span className="project-category-eyebrow">NEXUS GLOBAL / {config.label}</span><h1>{config.title}</h1><p>{config.description}</p></div><div className="project-category-hero__photo"><img src={`/premium-home/${config.image}`} alt={config.alt} width="1200" height="700" /></div></div></div></header>
      <nav className="project-category-nav" aria-label="Project categories"><div className="project-category-container">{links.map((item) => <Link key={item.path} to={item.path} aria-current={item.path === `/projects/${category}` ? 'page' : undefined}>{item.label}</Link>)}</div></nav>
      {category === 'software' ? <SoftwareShowcaseSection isStandalonePage /> : <section className="project-category-gallery" aria-labelledby="project-category-gallery-title"><div className="project-category-container"><div className="project-category-gallery__heading"><div><span className="project-category-eyebrow">SELECTED WORK</span><h2 id="project-category-gallery-title">{config.label} projects</h2></div>{status === 'ready' && <span>{projects.length} {projects.length === 1 ? 'project' : 'projects'}</span>}</div>
        {status === 'loading' && <div className="portfolio-project-grid" role="status" aria-label="Loading projects">{Array.from({ length: 6 }, (_, index) => <div key={index} className="project-category-skeleton"><div /><span /><span /></div>)}</div>}
        {status === 'error' && <div className="project-category-state" role="status"><h3>Projects could not be loaded</h3><p>Please try again in a moment.</p><button type="button" onClick={() => setRetry((value) => value + 1)}><RefreshCw size={15} /> Try again</button></div>}
        {status === 'ready' && (projects.length ? <div className="portfolio-project-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />)}</div> : <div className="project-category-state"><h3>New work is on its way</h3><p>No {config.label.toLowerCase()} projects are published here yet. Explore our other work in the meantime.</p><Link to="/projects">Browse all projects <ArrowRight size={16} /></Link></div>)}
      </div></section>}
      {category !== 'software' && <section className="project-category-contact"><div className="project-category-container"><div><span className="project-category-eyebrow">LET'S WORK TOGETHER</span><h2>Have a project in mind?</h2><p>Tell us what you need. We'll help you plan the next step.</p></div><Link to="/contact">Discuss your project <ArrowRight size={16} /></Link></div></section>}
      {selected && <ProjectDialog key={selected.id} project={selected} onClose={() => setSelected(null)} />}
    </main>
  );
}
