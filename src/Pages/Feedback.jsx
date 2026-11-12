import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSection from '../Componenet/TestimonialSection';
import './FeedbackPremium.css';

export default function FeedbackPage() {
  return (
    <main id="Feedback" className="fp-page">
      <section className="fp-hero" aria-labelledby="fp-page-title">
        <div className="fp-container fp-hero-grid">
          <div className="fp-hero-copy">
            <span className="fp-eyebrow">NEXUS GLOBAL / CLIENT STORIES</span>
            <h1 id="fp-page-title">Good work starts with<br /><span>good partnerships.</span></h1>
            <p>Explore client feedback and shared project experiences. A closer look at the collaboration behind the work.</p>
            <div className="fp-hero-actions">
              <a href="#testimonials" className="fp-primary-link">Read client reviews <ArrowDown size={17} /></a>
              <Link to="/contact" className="fp-secondary-link">Share your experience <ArrowUpRight size={17} /></Link>
            </div>
          </div>
          <div className="fp-hero-photo">
            <img src="/premium-home/commerce-photo.webp" alt="A customer and business owner completing a purchase together" width="1440" height="960" fetchPriority="high" />
            <div className="fp-photo-caption"><span>CLIENT STORIES</span><strong>Digital experiences built for people.</strong></div>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </main>
  );
}
