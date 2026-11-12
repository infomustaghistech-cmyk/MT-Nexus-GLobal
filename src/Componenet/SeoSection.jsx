import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Search, ScanSearch, Gauge, Link2, MapPin, FileText, ArrowUpRight, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SignatureSections.css';

const capabilities = [
  { title: 'Search intent & keyword strategy', label: 'DISCOVER', icon: Search, description: 'Find the search queries that match your audience, commercial goals and the questions customers actually ask.', deliverables: ['Intent mapping', 'Opportunity prioritization', 'Content roadmap'], artwork: '/premium-home/seo-research.svg' },
  { title: 'Technical SEO & site health', label: 'OPTIMIZE', icon: Gauge, description: 'Identify crawling, indexing, speed and structure issues that make great content harder to discover.', deliverables: ['Technical audit', 'Core Web Vitals review', 'Indexation checks'], artwork: '/premium-home/seo-technical.svg' },
  { title: 'Content & on-page quality', label: 'CREATE', icon: FileText, description: 'Connect useful content, accessible page structure and clear internal linking into one coherent experience.', deliverables: ['On-page improvements', 'Content briefs', 'Internal links'], artwork: '/premium-home/seo-content.svg' },
  { title: 'Local search visibility', label: 'CONNECT', icon: MapPin, description: 'Support regional discovery through accurate business information, location pages and consistent signals.', deliverables: ['Business profile review', 'Location pages', 'Citation consistency'], artwork: '/premium-home/seo-local.svg' },
];

const focusItems = [
  { icon: ScanSearch, title: 'Find the opportunities', text: 'Research search demand and pinpoint gaps.' },
  { icon: Link2, title: 'Fix the foundations', text: 'Improve technical health and findability.' },
  { icon: Gauge, title: 'Measure what matters', text: 'Track qualified discovery and useful outcomes.' },
];

const ease = [0.22, 1, 0.36, 1];

export default function SeoSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const item = capabilities[active];
  const Icon = item.icon;
  const go = direction => setActive(index => (index + direction + capabilities.length) % capabilities.length);

  return (
    <section id="seo" className="nx-section nx-seo" aria-labelledby="nx-seo-heading">
      <div className="nx-container">

        {/* Section heading — slide up on scroll */}
        <motion.div
          className="nx-section-head nx-section-head--split"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease }}
        >
          <div>
            <span className="nx-eyebrow"><span /> SEARCH EXPERIENCE</span>
            <h2 id="nx-seo-heading">Be easier to find.<br /><em>Worth staying for.</em></h2>
          </div>
          <p>Search is more than rankings. We align technical foundations, useful content and measurable discovery into a connected growth strategy.</p>
        </motion.div>

        <div className="nx-seo-layout">
          {/* Feature carousel */}
          <motion.div
            className="nx-seo-feature"
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease, delay: 0.1 }}
            aria-roledescription="carousel"
            aria-label="SEO capabilities"
          >
            <div className="nx-seo-visual">
              <AnimatePresence mode="wait">
                <motion.img
                  key={item.artwork}
                  src={item.artwork}
                  alt=""
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? {} : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.38, ease }}
                />
              </AnimatePresence>
              <div className="nx-visual-label">
                <span>MT NEXUS / SEARCH</span>
                <span>0{active + 1} — 04</span>
              </div>
            </div>

            <div className="nx-seo-copy" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <span className="nx-mini-title"><Icon size={17} />{item.label} / 0{active + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="nx-deliverables">
                    {item.deliverables.map((d, i) => (
                      <motion.span
                        key={d}
                        initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.08, ease }}
                      >
                        <Check size={13} />{d}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="nx-feature-bottom">
                <Link to="/contact" className="nx-inline-link">Discuss an SEO review <ArrowUpRight size={18} /></Link>
                <div className="nx-nav-buttons">
                  <motion.button type="button" aria-label="Previous SEO capability" onClick={() => go(-1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}>
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button type="button" aria-label="Next SEO capability" onClick={() => go(1)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}>
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aside — slide from right */}
          <motion.div
            className="nx-seo-aside"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease, delay: 0.2 }}
          >
            <span className="nx-aside-caption">OUR APPROACH</span>
            <h3>Visibility built on substance.</h3>
            <p>Practical recommendations, organized priorities and clear next steps—not inflated promises.</p>
            <div className="nx-focus-list">
              {focusItems.map((x, i) => {
                const I = x.icon;
                return (
                  <motion.div
                    className="nx-focus-item"
                    key={x.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease, delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.span
                      className="nx-focus-icon"
                      whileHover={{ rotate: 10, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 12 }}
                    >
                      <I size={20} />
                    </motion.span>
                    <div>
                      <h4>{x.title}</h4>
                      <p>{x.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="nx-aside-footer">Strategy &nbsp; / &nbsp; Experience &nbsp; / &nbsp; Engineering</div>
          </motion.div>
        </div>

        {/* Selector buttons */}
        <motion.div
          className="nx-seo-selectors"
          aria-label="Choose SEO capability"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
        >
          {capabilities.map((cap, index) => (
            <motion.button
              type="button"
              key={cap.title}
              className={active === index ? 'is-active' : ''}
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>0{index + 1}</span>{cap.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
