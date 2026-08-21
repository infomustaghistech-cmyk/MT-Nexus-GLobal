import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import frontImg from '../assets/Front.webp';
import heroVideo from '../assets/3141208-uhd_3840_2160_25fps-optimized-v2.mp4';
import heroVideoPoster from '../assets/3141208-uhd_3840_2160_25fps-poster.webp';
import LazyVideo from './LazyVideo';

/* ─────────────────────────────────────────────────
   GLOBAL HERO BACKGROUND
───────────────────────────────────────────────── */
export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden bg-[#050a15]">
      <LazyVideo poster={heroVideoPoster} src={heroVideo} eager={true} className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a15]/60 via-transparent to-[#04070f]/80"></div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   TICKER STRIP
───────────────────────────────────────────────── */
const TickerItem = ({ text }) => (
  <>
    <span className="mx-6 sm:mx-10 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold text-white">{text}</span>
    <span className="text-white mx-2 text-xs">✦</span>
  </>
);

const Ticker = () => {
  const items = ['Web Design', 'Brand Identity', 'Digital Strategy', 'UI/UX Design', 'Motion Design', 'SEO & Growth'];
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-white/[0.1] py-3 sm:py-4 bg-black z-20">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap items-center"
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <TickerItem key={i} text={t} />
        ))}
      </motion.div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────────────── */
const StatCard = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.7 }}
    className="flex flex-col items-center"
  >
    <span className="text-2xl md:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white">
      {number}
    </span>
    <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/50 mt-2 font-medium font-mono">
      {label}
    </span>
  </motion.div>
);

/* ─────────────────────────────────────────────────
   PORTFOLIO CAROUSEL (Mobile Fixed & Swipeable)
───────────────────────────────────────────────── */
const cards = [
  { id: 1, img: '/6033265.webp', label: 'E-Commerce', title: 'Bloom Store' },
  { id: 2, img: '/jualcmljlawmppfnginu.webp', label: 'Branding', title: 'Terra Hues' },
  { id: 3, img: '/4517399.webp', label: 'Web Design', title: 'Plants & Co' },
  { id: 4, img: '/4567620.webp', label: 'UI/UX', title: 'Verdure App' },
  { id: 5, img: '/designer-vector-website-template-web-page-landing-design-mobile-site-development-professional-graphic-agency-services-141932344.webp', label: 'Agency', title: 'Creative Studio' },
  { id: 6, img: '/video-production-landing-page_52683-76086.webp', label: 'Production', title: 'Portfolio Pro' },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % cards.length), 5000);
    return () => clearInterval(t);
  }, [current]);

  const next = () => setCurrent(p => (p + 1) % cards.length);
  const prev = () => setCurrent(p => (p - 1 + cards.length) % cards.length);

  const getPos = (index) => {
    let pos = index - current;
    if (pos < -Math.floor(cards.length / 2)) pos += cards.length;
    if (pos > Math.floor(cards.length / 2)) pos -= cards.length;
    return pos;
  };

  const handleDragEnd = (e, { offset }) => {
    if (offset.x < -50) next();
    if (offset.x > 50) prev();
  };

  return (
    <div className="w-full relative h-[250px] sm:h-[320px] md:h-[400px]" style={{ position: 'relative' }}>
      <div 
        className="relative flex items-center justify-center w-full h-full overflow-hidden sm:overflow-visible"
        style={{ position: 'relative' }}
      >
        {cards.map((card, index) => {
          const pos = getPos(index);
          const isActive = pos === 0;
          const isVisible = Math.abs(pos) <= 2; // Show more cards slightly on wide screens

          if (!isVisible) return null; // Performance optimization

          return (
            <motion.div
              key={card.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={{
                x: `${pos * 105}%`, // Responsive positioning instead of fixed pixels
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.3,
                zIndex: isActive ? 10 : 5 - Math.abs(pos),
                rotateY: pos * -5,
              }}
              transition={{ type: 'spring', stiffness: 250, damping: 25 }}
              className="absolute cursor-grab active:cursor-grabbing w-[80vw] max-w-[550px] aspect-[16/10] sm:aspect-[16/11]"
              style={{ perspective: 1200, position: 'absolute' }}
              onClick={() => !isActive && (pos > 0 ? next() : prev())}
            >
              <div className={`relative w-full h-full overflow-hidden rounded-2xl transition-all duration-500 ${isActive ? 'border-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.6)]' : 'border-black/70'}`}>
                <img
                  src={card.img}
                  alt={card.title}
                  draggable="false"
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ filter: isActive ? 'none' : 'brightness(0.4) grayscale(0.5)' }}
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex items-end justify-between"
                    >
                      <div>
                        <p className="text-[9px] sm:text-[11px] tracking-[0.3em] text-white uppercase mb-2 font-mono font-semibold drop-shadow-md">
                          {card.label}
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-lg">
                          {card.title}
                        </h3>
                      </div>
                      <Link to="/projects" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all group cursor-pointer shrink-0">
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Nav & Dots */}
      <div className="absolute inset-x-0 -bottom-10 sm:-bottom-12 flex items-center justify-center gap-6 z-20">
        <button onClick={prev} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2.5">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                background: i === current ? '#22d3ee' : 'rgba(255,255,255,0.2)', // Cyan active dot
                boxShadow: i === current ? '0 0 10px rgba(34,211,238,0.5)' : 'none'
              }}
            />
          ))}
        </div>

        <button onClick={next} className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   SERVICE PILLS
───────────────────────────────────────────────── */
const services = ['Web Design', 'Branding', 'SEO', 'UI/UX', 'Motion', 'E-Commerce', 'Strategy'];

const ServicePills = () => (
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
    {services.map((s, i) => (
      <motion.span
        key={s}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="text-[10px] sm:text-xs tracking-[0.15em] uppercase px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/10 transition-all cursor-default font-mono"
      >
        {s}
      </motion.span>
    ))}
  </div>
);

/* ─────────────────────────────────────────────────
   MARQUEE CLIENTS
───────────────────────────────────────────────── */
const clients = ['Dribbble', 'Behance', 'Figma', 'Shopify', 'Webflow', 'Framer'];
const ClientMarquee = () => (
  <div className="w-full">
    <p className="text-center text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-cyan-400 mb-6 font-mono font-semibold">
      Trusted by modern teams
    </p>
    <div className="w-full overflow-hidden border-y border-white/[0.1] py-4 sm:py-5 bg-black z-20">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap items-center"
      >
        {[...clients, ...clients, ...clients, ...clients].map((c, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8 sm:mx-12 text-lg sm:text-xl font-bold text-white tracking-widest uppercase cursor-default">
              {c}
            </span>
            <span className="text-white/80 mx-2 text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────────
   MAIN HERO SECTION
───────────────────────────────────────────────── */
const HeroSection = () => {
  return (
    <>
      {/* PROFESSIONAL INDUSTRY STANDARD FONTS */}
      <style>{`
        :root {
          --gold: #c9a96e;
          --cyan-glow: #22d3ee;
        }

        .font-sans-main { font-family: 'Inter', sans-serif; }
        .font-serif-accent { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 42px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: black;
          background: white;
          border-radius: 9999px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #22d3ee, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(34,211,238, 0.4);
          color: white;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary span, .btn-primary svg { position: relative; z-index: 1; }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 9999px;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          border-color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.1);
          color: white;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 700;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 40px;
          height: 1px;
          opacity: 0.5;
        }

        .scroll-indicator { animation: scrollBounce 2s cubic-bezier(0.76, 0, 0.24, 1) infinite; }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(8px); opacity: 1; }
        }

        /* NEW HERO BACKGROUND CSS */
        .hero-bg {
          background:
            radial-gradient(circle at 20% 15%, rgba(34,211,238,0.18), transparent 40%),
            radial-gradient(circle at 80% 75%, rgba(59,130,246,0.16), transparent 45%),
            linear-gradient(180deg, #060c1a 0%, #050a15 60%, #04070f 100%);
        }
        .animated-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 90%);
          animation: gridMove 30s linear infinite;
        }
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 48px 96px, 96px 48px; }
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.55;
          animation: float 12s ease-in-out infinite;
        }
        .orb1 { width: 420px; height: 420px; top: -100px; left: -80px; background: radial-gradient(circle, #22d3ee 0%, transparent 70%); animation-duration: 14s; }
        .orb2 { width: 360px; height: 360px; bottom: -120px; right: -60px; background: radial-gradient(circle, #3b82f6 0%, transparent 70%); animation-duration: 18s; animation-delay: -4s; }
        .orb3 { width: 260px; height: 260px; top: 35%; left: 55%; background: radial-gradient(circle, #a855f7 0%, transparent 70%); opacity: 0.3; animation-duration: 20s; animation-delay: -8s; }
        @keyframes float {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-40px) scale(1.08); }
        }
        .particle {
          position: absolute;
          background: #67e8f9;
          border-radius: 50%;
          opacity: 0.7;
          box-shadow: 0 0 14px 4px rgba(103,232,249,0.85);
          animation: drift linear infinite;
        }
        @keyframes drift {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.8; }
          100% { transform: translateY(-120vh) translateX(40px); opacity: 0; }
        }
      `}</style>

      {/* ─── PAGE WRAPPER ─── */}
      <div className="relative text-white overflow-x-hidden font-sans-main selection:bg-cyan-500 selection:text-black">

        {/* ═══════════════════════════════════════════
            SECTION 1 — HERO FOLD
        ═══════════════════════════════════════════ */}
        <section className="relative w-full h-[100dvh] min-h-[620px] flex flex-col items-center justify-center text-center px-4 pb-16 sm:pb-20 pt-8 overflow-hidden">
          {/* ─── HERO BACKGROUND ─── */}
          <HeroBackground />

          <div className="relative z-10 flex flex-col items-center justify-center w-full mt-12 sm:mt-16">


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
              className="text-[36px] sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight leading-[1.05] mb-4 sm:mb-6 max-w-5xl drop-shadow-2xl text-white"
            >
              Turning <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Ideas</span> into<br />
              <em className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pr-2">
                Complete
              </em> Digital<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
              className="text-white text-sm sm:text-base md:text-lg font-medium max-w-lg mb-6 sm:mb-8 leading-relaxed"
            >
              We craft premium digital experiences that drive results — from brand identity to full-stack web solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                <span>Start a Project</span>
                <ArrowRight size={14} className="relative z-10" />
              </Link>
              <Link to="/projects" className="btn-outline w-full sm:w-auto justify-center">
                <Play size={14} fill="currentColor" />
                <span>View Our Work</span>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-8 sm:gap-16 md:gap-24 mt-6 pt-5 sm:mt-8 sm:pt-6 border-t border-white/[0.08] w-full max-w-3xl justify-center"
            >
              <StatCard number="120+" label="Projects Done" delay={1.0} />
              <StatCard number="98%" label="Satisfaction" delay={1.1} />
              <StatCard number="5★" label="Avg. Rating" delay={1.2} />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator hidden sm:flex z-10">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/40 to-white/80" />
            <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-mono font-bold">Scroll</span>
          </div>

          {/* ═══════════════════════════════════════════
              TICKER (Now positioned absolutely at bottom of Hero)
          ═══════════════════════════════════════════ */}
          <Ticker />
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 — PORTFOLIO CAROUSEL
        ═══════════════════════════════════════════ */}
        <section className="w-full flex flex-col items-center px-4 overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10 bg-[#162c54] border-y border-[#2a457a]">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8 w-full"
          >
            <div className="section-label text-cyan-400 before:bg-cyan-400 justify-center mb-3 sm:mb-4">Our Work</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Selected <em className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pr-2">Projects</em>
            </h2>
          </motion.div>

          <Carousel />

          <div className="text-center mt-12 sm:mt-14 w-full">
            <p className="text-[9px] sm:text-[11px] tracking-[0.3em] text-white uppercase font-mono font-semibold">
              Crafted for businesses that demand excellence
            </p>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            SECTION 4 — CLIENT MARQUEE
        ═══════════════════════════════════════════ */}
        <section className="w-full py-6 md:py-10 sm:py-16">
          <ClientMarquee />
        </section>



      </div>
    </>
  );
};

export default HeroSection;