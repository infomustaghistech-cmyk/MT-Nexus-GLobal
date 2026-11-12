import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Image as ImageIcon, X } from 'lucide-react';
import './ProjectDialog.css';

export function safeProjectLink(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
}

export function projectGallery(project) {
  return [...new Set([project.img, ...(Array.isArray(project.workImages) ? project.workImages : [])].filter((image) => typeof image === 'string' && image.trim() && (image.startsWith('/') || safeProjectLink(image))))];
}

export default function ProjectDialog({ project, onClose }) {
  const dialogRef = useRef(null);
  const [active, setActive] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const images = projectGallery(project);
  const title = project.name || 'Project overview';
  const liveUrl = safeProjectLink(project.project_url);
  const current = images[active];
  const move = (step) => setActive((index) => (index + step + images.length) % images.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = oldOverflow;
      if (previouslyFocused?.isConnected) previouslyFocused.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    }}>
      <header className="project-dialog__header"><div><span>NEXUS GLOBAL / SELECTED WORK</span><strong>Project overview</strong></div><button className="project-dialog__close" type="button" aria-label="Close project" onClick={onClose} autoFocus><X size={20} /></button></header>
      <div className="project-dialog__body">
        <div className="project-dialog__gallery">
          <div className="project-dialog__image">
            {current && !failedImages[current] ? <img src={current} alt={`${title} - image ${active + 1} of ${images.length}`} decoding="async" onError={() => setFailedImages((previous) => ({ ...previous, [current]: true }))} /> : <div className="project-dialog__missing"><ImageIcon size={32} /><span>{current ? 'This preview could not load.' : 'No preview images available.'}</span></div>}
          </div>
          <div className="project-dialog__gallery-bar"><span aria-live="polite">{images.length ? `${String(active + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}` : 'PROJECT PREVIEW'}</span>{images.length > 1 && <div className="project-dialog__gallery-arrows"><button type="button" onClick={() => move(-1)} aria-label="Previous project image"><ArrowLeft size={17} /></button><button type="button" onClick={() => move(1)} aria-label="Next project image"><ArrowRight size={17} /></button></div>}{current && <a href={current} target="_blank" rel="noopener noreferrer">Full-size image <ArrowUpRight size={14} /></a>}</div>
          {images.length > 1 && <div className="project-dialog__thumbnails" role="group" aria-label="Project images">{images.map((image, index) => <button key={image} type="button" className={active === index ? 'is-active' : ''} aria-label={`Show project image ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)}><img src={image} alt="" loading="lazy" decoding="async" /></button>)}</div>}
        </div>
        <aside className="project-dialog__details"><div className="project-dialog__category">{project.category || 'Selected project'}</div><h2 id="project-dialog-title">{title}</h2><span className="project-dialog__label">ABOUT THE PROJECT</span><p className="project-dialog__description">{project.desc || 'Explore the project images, or get in touch to discuss a similar project.'}</p><div className="project-dialog__actions">{liveUrl && <a className="project-dialog__primary" href={liveUrl} target="_blank" rel="noopener noreferrer">Visit live project <ExternalLink size={15} /></a>}<Link className="project-dialog__secondary" to="/contact" onClick={onClose}>Discuss a similar project <ArrowRight size={16} /></Link></div><p className="project-dialog__note">Design and development by Nexus Global.</p></aside>
      </div>
    </dialog>
  );
}
