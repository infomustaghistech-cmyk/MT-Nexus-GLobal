import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, MessageSquare, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { publicReviews } from './reviewData';
import './TestimonialSection.css';

export default function TestimonialSection() {
  const [reviews, setReviews] = useState([]);
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState('loading');
  const [attempt, setAttempt] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    let disposed = false;
    setStatus('loading');
    async function load() {
      try {
        const { data, error } = await supabase.from('feedbacks')
          .select('id, clientName, designation, message, clientImg, video_url, is_approved')
          .eq('is_approved', true).order('created_at', { ascending: false })
          .limit(50).abortSignal(controller.signal);
        if (error) throw error;
        if (!disposed) {
          setReviews(publicReviews(data));
          setActive(0);
          setFailedImages({});
          setStatus('ready');
        }
      } catch {
        if (!disposed) setStatus('error');
      } finally {
        window.clearTimeout(timeout);
      }
    }
    load();
    return () => { disposed = true; window.clearTimeout(timeout); controller.abort(); };
  }, [attempt]);

  const current = reviews[active];
  const total = reviews.length;
  const move = (step) => setActive((index) => (index + step + total) % total);

  return (
    <section id="testimonials" className="premium-testimonials real-reviews" aria-labelledby="premium-testimonials-title">
      <div className="premium-testimonials__container">
        <div className="premium-testimonials__topline">
          <span className="premium-testimonials__eyebrow"><span className="premium-testimonials__eyebrow-line" /> CLIENT FEEDBACK</span>
          <span className="premium-testimonials__edition">NEXUS GLOBAL</span>
        </div>
        <div className="premium-testimonials__layout">
          <div className="premium-testimonials__intro">
            <div>
              <h2 id="premium-testimonials-title">Real projects.<br />Client perspectives.</h2>
              <p className="premium-testimonials__description">Explore feedback shared by clients about their experience working with Nexus Global.</p>
              <Link to="/contact" className="premium-testimonials__text-link">Discuss your project <ArrowUpRight size={18} /></Link>
            </div>
            <div className="premium-testimonials__side-detail"><span className="premium-testimonials__side-line" /><span>DESIGN. ENGINEERING.<br />COLLABORATION.</span></div>
          </div>
          <div className="premium-testimonials__slider" role="region" aria-roledescription="carousel" aria-label="Client reviews" aria-busy={status === 'loading'}>
            {status === 'loading' && <div className="reviews-state" role="status"><span className="reviews-loader" />Loading client feedback...</div>}
            {status === 'error' && <div className="reviews-state" role="status"><MessageSquare size={28} /><h3>Reviews are temporarily unavailable</h3><p>Please try again in a moment.</p><button type="button" className="reviews-retry" onClick={() => setAttempt((value) => value + 1)}><RefreshCw size={15} /> Try again</button></div>}
            {status === 'ready' && !total && <div className="reviews-state"><MessageSquare size={28} /><h3>Client stories are on their way</h3><p>Published client feedback will appear here. Have a project to discuss?</p><Link to="/contact" className="reviews-retry">Get in touch <ArrowUpRight size={15} /></Link></div>}
            {status === 'ready' && current && <>
              <article className="premium-testimonials__card" aria-roledescription="slide" aria-label={`${active + 1} of ${total}`}>
                <div className="premium-testimonials__card-header"><span className="premium-testimonials__card-label">CLIENT REVIEW</span><span className="premium-testimonials__counter">{String(active + 1).padStart(2, '0')} <span>/ {String(total).padStart(2, '0')}</span></span></div>
                <div className="reviews-content" aria-live="polite" aria-atomic="true">
                  {current.image && !failedImages[current.id] ? <a className="reviews-screenshot" href={current.image} target="_blank" rel="noopener noreferrer" aria-label={`Open review screenshot from ${current.name} in a new tab`}><img src={current.image} alt={`Review shared by ${current.name}`} loading="lazy" decoding="async" onError={() => setFailedImages((images) => ({ ...images, [current.id]: true }))} /><span>View full screenshot <ArrowUpRight size={14} /></span></a> : current.image && !current.quote ? <p className="reviews-image-unavailable">This screenshot could not load. {current.source ? 'You can read the original review below.' : 'Please try another review.'}</p> : null}
                  {current.quote && <blockquote className="premium-testimonials__quote">{current.quote}</blockquote>}
                  <div className="reviews-author"><strong>{current.name}</strong>{current.role && <span>{current.role}</span>}</div>
                </div>
                <div className="premium-testimonials__card-bottom">
                  {current.source ? <a className="reviews-source" href={current.source} target="_blank" rel="noopener noreferrer">Read original review <ArrowUpRight size={15} /></a> : <span className="reviews-source-note">Shared client feedback</span>}
                  {total > 1 && <div className="premium-testimonials__controls"><button type="button" onClick={() => move(-1)} aria-label="Previous client review"><ArrowLeft size={20} /></button><button type="button" onClick={() => move(1)} aria-label="Next client review"><ArrowRight size={20} /></button></div>}
                </div>
              </article>
            </>}
          </div>
        </div>
      </div>
    </section>
  );
}
