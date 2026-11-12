import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroAnimation from './HeroAnimation';

/* ------------------------------------------------------------------ */
/* Featured projects — Exact content preserved                         */
/* ------------------------------------------------------------------ */
const projects = [
  { id: '01', category: 'WEB PLATFORM', title: 'Commerce experience', description: 'A seamless shopping journey, designed to make every interaction count.', image: '/6033265.webp' },
  { id: '02', category: 'BRAND & EXPERIENCE', title: 'Digital identity system', description: 'A distinct brand language built to thrive across every digital touchpoint.', image: '/jualcmljlawmppfnginu.webp' },
  { id: '03', category: 'PRODUCT DESIGN', title: 'Customer platform', description: 'A connected product experience balancing clarity, utility, and scale.', image: '/4517399.webp' },
  { id: '04', category: 'UI / UX', title: 'Mobile product', description: 'An intuitive mobile-first journey with care in every detail.', image: '/4567620.webp' },
];

const heroSlides = [
  { look: 'blue', title: 'Connecting Ideas.', accent: 'Creating Opportunities.', description: 'MT Nexus Global is a forward-thinking company dedicated to building a smarter, more connected world through innovation, technology and global partnerships.', action: 'Explore Our Solutions', route: '/services' },
  { look: 'particles', title: 'Ideas in Motion.', accent: 'Experiences That Connect.', description: 'Shape your digital identity with thoughtful UI/UX, compelling visual design and motion that brings your brand to life.', action: 'Discover Our Design', route: '/services/ui-ux' },
  { look: 'globe', title: 'Beyond Boundaries.', accent: 'Built to Connect.', description: 'Connect your business with customers around the world through powerful websites, mobile applications and digital platforms built for growth.', action: 'Explore Development', route: '/services/web_customization' },
  { look: 'portfolio', title: 'From Vision to Launch.', accent: 'Make Your Next Move.', description: 'Explore how Nexus Global brings design and engineering together to turn ambitious ideas into practical digital experiences.', action: 'Explore Our Work', route: '/projects' },
];

/* ------------------------------------------------------------------ */
/* Hero landing section — Enterprise Grade Typography & Motion         */
/* ------------------------------------------------------------------ */
function HeroLanding() {
  const reduceMotion = useReducedMotion();
  const [heroSlide, setHeroSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStart = useRef(null);
  const heroLooks = heroSlides.map((slide) => slide.look);
  const currentSlide = heroSlides[heroSlide];
  const selectSlide = (next, step = next > heroSlide ? 1 : -1) => {
    setDirection(step);
    setHeroSlide((next + heroLooks.length) % heroLooks.length);
  };
  const ease = [0.22, 1, 0.36, 1];

  useEffect(() => {
    if (!isPlaying || reduceMotion) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setDirection(1);
      setHeroSlide((slide) => (slide + 1) % heroSlides.length);
    }, 1300);
    return () => window.clearInterval(timer);
  }, [isPlaying, reduceMotion, heroSlide]);

  return (
    <section
      className="hero-landing"
      aria-label="MT Nexus Global hero"
      onFocusCapture={() => setIsPlaying(false)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPlaying(true);
      }}
      onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;
        const dx = event.changedTouches[0].clientX - start.x;
        const dy = event.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          const step = dx < 0 ? 1 : -1;
          selectSlide(heroSlide + step, step);
        }
      }}
    >
      {/* Restrained Architectural Atmosphere */}
      <div className="hero-landing__bg" aria-hidden="true">
        <div className="hero-landing__gradient-orb hero-landing__gradient-orb--1" />
        <div className="hero-landing__gradient-orb hero-landing__gradient-orb--2" />
        <div className="hero-landing__grid-lines" />
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.look}
            className={`hero-landing__scene hero-landing__scene--${slide.look}`}
            initial={false}
            animate={{
              x: reduceMotion || index === heroSlide ? 0 : ((index - heroSlide + heroSlides.length) % heroSlides.length === heroSlides.length - 1 ? `${-direction * 100}%` : `${direction * 100}%`),
              opacity: index === heroSlide ? 1 : 0,
            }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease }}
          >
            <HeroAnimation variant={slide.look} />
          </motion.div>
        ))}
      </div>

      {/* Text and call-to-action move together with each slide. */}
      <div className="hero-landing__container">
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={heroSlide}
            custom={direction}
            className="hero-landing__slide-copy"
            variants={{
              enter: (step) => ({ x: reduceMotion ? 0 : step * 64, opacity: reduceMotion ? 1 : 0 }),
              center: { x: 0, opacity: 1, transition: { duration: reduceMotion ? 0 : 0.42, ease } },
              exit: (step) => ({ x: reduceMotion ? 0 : step * -32, opacity: reduceMotion ? 1 : 0, transition: { duration: reduceMotion ? 0 : 0.16, ease } }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <h1 className="hero-landing__tagline">
              <span className="hero-landing__tagline-white">{currentSlide.title}</span>{' '}
              <span className="hero-landing__tagline-accent">{currentSlide.accent}</span>
            </h1>
            <p className="hero-landing__description">{currentSlide.description}</p>
            <div className="hero-landing__cta-wrap">
              <Link to={currentSlide.route} className="hero-landing__cta">
                <span>{currentSlide.action}</span>
                <span className="hero-landing__cta-icon"><ArrowRight size={16} /></span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
        <div className="hero-landing__side-controls" role="group" aria-label="Hero animation slides">
          <button type="button" className="hero-landing__side-arrow hero-landing__side-arrow--previous" aria-label="Previous animation slide" onClick={() => selectSlide(heroSlide - 1, -1)}>
            <ChevronLeft size={48} strokeWidth={1.5} />
          </button>
          <button type="button" className="hero-landing__side-arrow hero-landing__side-arrow--next" aria-label="Next animation slide" onClick={() => selectSlide(heroSlide + 1, 1)}>
            <ChevronRight size={48} strokeWidth={1.5} />
          </button>
        </div>

    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Featured Work — Authentic Editorial Showcase                        */
/* ------------------------------------------------------------------ */
function FeaturedWork() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = projects.length;

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  const currentProject = projects[active];

  return (
    <section className="premium-work" aria-labelledby="premium-work-title">
      <div className="premium-shell">
        <motion.div
          className="premium-work__heading"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="premium-eyebrow premium-eyebrow--dark">
              <span className="premium-spark" /> THE WORK SPEAKS
            </p>
            <h2 id="premium-work-title">
              Selected work<span> with substance.</span>
            </h2>
          </div>
          <div className="premium-work__intro">
            <p>
              Thoughtful solutions. Distinctive execution. Explore a selection of digital
              experiences built around real-world ambition.
            </p>
            <div className="premium-work__controls">
              <button
                type="button"
                onClick={prev}
                className="premium-work__nav-btn"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="premium-work__counter">
                0{active + 1} / 0{total}
              </span>
              <button
                type="button"
                onClick={next}
                className="premium-work__nav-btn"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
              <Link to="/projects" className="premium-work__all">
                Explore all projects <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Featured Editorial Card Showcase */}
        <div className="featured-work-stage">
          <div className="featured-work-card">
            <div className="featured-work-card__media">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                loading="lazy"
                className="featured-work-card__img"
              />
              <div className="featured-work-card__scrim" />
              <div className="featured-work-card__badge">
                <span className="featured-work-card__index">{currentProject.id}</span>
                <span className="featured-work-card__category">{currentProject.category}</span>
              </div>
            </div>

            <div className="featured-work-card__content">
              <span className="featured-work-card__kicker">Featured Project {currentProject.id}</span>
              <h3 className="featured-work-card__title">{currentProject.title}</h3>
              <p className="featured-work-card__desc">{currentProject.description}</p>

              <Link to="/projects" className="featured-work-card__link">
                <span>Explore project</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Quick Selector Tabs */}
          <div className="featured-work-tabs">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(index)}
                className={`featured-work-tab ${index === active ? 'is-active' : ''}`}
              >
                <span className="featured-work-tab__num">0{index + 1}</span>
                <div className="featured-work-tab__info">
                  <strong>{project.title}</strong>
                  <span>{project.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bottom CTA — Exact content preserved                                */
/* ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */
/* Default export                                                      */
/* ------------------------------------------------------------------ */
export default function HeroSection() {
  return (
    <main className="premium-home">
      <HeroLanding />
      <FeaturedWork />
    </main>
  );
}
