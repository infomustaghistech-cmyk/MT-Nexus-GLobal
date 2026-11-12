import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import '../Pages/PortfolioCards.css';

export default function ProjectCard({ project, index, onOpen }) {
  const [imageFailed, setImageFailed] = useState(false);
  const reduce = useReducedMotion();
  const title = project.name || 'Project overview';
  return (
    <motion.article className="portfolio-project" initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: reduce ? 0 : .55, delay: reduce ? 0 : (index % 3) * .07, ease: [.22, 1, .36, 1] }}>
      <button type="button" className="portfolio-project__button" onClick={() => onOpen(project)} aria-label={`Explore ${title}`}>
        <div className="portfolio-project__image">
          {project.img && !imageFailed ? <img src={project.img} alt={title} loading="lazy" decoding="async" onError={() => setImageFailed(true)} /> : <div className="portfolio-project__placeholder"><span>{title.slice(0, 1).toUpperCase()}</span><p>{title}</p></div>}
          <span className="portfolio-project__open" aria-hidden="true"><ArrowUpRight size={20} /></span>
        </div>
        <div className="portfolio-project__body">
          <div className="portfolio-project__meta"><span>{project.category || 'Selected work'}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
          <h3>{title}</h3>
          {project.desc && <p>{project.desc}</p>}
          <div className="portfolio-project__footer"><span>Explore project</span><ArrowRight size={17} aria-hidden="true" /></div>
        </div>
      </button>
    </motion.article>
  );
}
