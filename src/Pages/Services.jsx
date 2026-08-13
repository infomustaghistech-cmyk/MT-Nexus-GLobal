import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4';
import { ArrowUpRight, Zap, ShoppingBag, Palette, Globe, Film, Layout, ArrowRight } from 'lucide-react';
import LazyVideo from '../Componenet/LazyVideo';

/* ─────────────────────────────────────────────────
   GLOBAL VIDEO BACKGROUND (Aligned with Hero Theme)
───────────────────────────────────────────────── */
export const VideoBackground = ({ brightness = 0.25 }) => (
  <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-[#0a0a0a]">
    <video
      src={videoBg}
      playsInline autoPlay muted loop
      className="w-full h-full object-cover transition-opacity duration-1000 opacity-60"
      style={{ filter: `brightness(${brightness})` }}
    />
    <div className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.3,
        mixBlendMode: 'overlay'
      }}
    />
    <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent" />
  </div>
);

/* ─────────────────────────────────────────────────
   SERVICE DATA
───────────────────────────────────────────────── */
const services = [
  {
    icon: Globe,
    index: '01',
    title: 'Web & Mobile Eng.',
    short: 'Native & cross-platform',
    desc: 'We engineer high-performance web platforms and mobile applications for iOS and Android — built to scale, designed to convert.',
    tags: ['React', 'Flutter', 'Node.js'],
    route: '/services/web_customization',
  },
  {
    icon: ShoppingBag,
    index: '02',
    title: 'E-Commerce Solutions',
    short: 'Shopify & WooCommerce',
    desc: 'Conversion-optimised storefronts with seamless checkout flows, custom themes, and analytics-driven UX that turns visitors into buyers.',
    tags: ['Shopify', 'Custom Themes', 'Analytics'],
    route: '/services/shopify',
  },
  {
    icon: Palette,
    index: '03',
    title: 'Graphic Design',
    short: 'Brand identity & visuals',
    desc: 'Timeless visual identities — logos, brand guidelines, marketing collateral, and social assets that make your brand unforgettable.',
    tags: ['Branding', 'Print', 'Social Assets'],
    route: '/services/graphic-design',
  },
  {
    icon: Zap,
    index: '04',
    title: 'WordPress Solutions',
    short: 'Blazing fast WP sites',
    desc: 'Performance-hardened WordPress builds with custom themes, plugin integrations, and Core Web Vitals scores that dominate search.',
    tags: ['Custom WP', 'Optimization', 'SEO'],
    route: '/services/wordpress',
  },
  {
    icon: Film,
    index: '05',
    title: 'Video Editing',
    short: 'Cinematic post-production',
    desc: 'Cinematic colour grading, motion graphics, and precise cuts for YouTube channels, ad campaigns, and corporate productions.',
    tags: ['Premiere', 'After Effects', 'Color Grade'],
    route: '/services/video-editing',
  },
  {
    icon: Layout,
    index: '06',
    title: 'UI / UX Design',
    short: 'Research-driven UI',
    desc: 'User-journey mapping, wireframing, and pixel-perfect prototypes that reduce friction and lift conversion rates measurably.',
    tags: ['Figma', 'Prototyping', 'UX Research'],
    route: '/services/ui-ux-designs',
  },
];

/* ─────────────────────────────────────────────────
   SERVICE CARD (Premium Glassmorphism)
───────────────────────────────────────────────── */
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => navigate(service.route)}
      className="relative cursor-pointer group h-full"
    >
      <div
        className={`relative h-full overflow-hidden transition-all duration-500 rounded-2xl flex flex-col justify-between ${
          hovered 
            ? 'bg-white/[0.04] border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]' 
            : 'bg-white/[0.02] border-white/10 shadow-xl'
        } border backdrop-blur-xl`}
      >
        {/* Top Glow Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="p-8 flex flex-col h-full gap-6">
          {/* Top Row */}
          <div className="flex items-start justify-between">
            <span className={`text-[11px] tracking-[0.3em] font-mono font-bold transition-colors duration-300 ${hovered ? 'text-cyan-400' : 'text-white/30'}`}>
              {service.index}
            </span>

            <motion.div
              animate={{ rotate: hovered ? -10 : 0, scale: hovered ? 1.1 : 1 }}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                hovered ? 'bg-cyan-500/10 border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]' : 'bg-white/5 border-white/10'
              }`}
            >
              <Icon size={20} className={hovered ? 'text-cyan-400' : 'text-white/50'} strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Title Area */}
          <div className="flex-1">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-2 font-mono text-cyan-500/70 font-semibold">
              {service.short}
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif-accent font-medium leading-tight text-white mb-4">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/50 font-sans-main font-light line-clamp-3">
              {service.desc}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {service.tags.map(tag => (
              <span key={tag} className="text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/40 font-mono">
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-auto">
            <span className={`text-[10px] tracking-[0.2em] uppercase font-mono font-bold transition-colors duration-300 ${hovered ? 'text-cyan-400' : 'text-white/30'}`}>
              Explore Service
            </span>
            <motion.div
              animate={{ x: hovered ? 4 : 0, y: hovered ? -4 : 0 }}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${hovered ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white/50'}`}
            >
              <ArrowUpRight size={14} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────────
   PROCESS STEPS
───────────────────────────────────────────────── */
const steps = [
  { num: '01', label: 'Discovery Call', desc: 'We understand your goals, audience, and vision in depth.' },
  { num: '02', label: 'Strategy & Plan', desc: 'A custom roadmap tailored to your specific budget and timeline.' },
  { num: '03', label: 'Design & Build', desc: 'Agile development with transparent weekly progress updates.' },
  { num: '04', label: 'Launch & Grow', desc: 'Seamless delivery, handoff, and ongoing support post-launch.' },
];

const ProcessStep = ({ step, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.6 }}
    className="flex flex-col gap-4 relative group"
  >
    {/* Connector line (Desktop only, fixed overflow bug) */}
    {i < steps.length - 1 && (
      <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-cyan-500/30 to-transparent pointer-events-none" />
    )}
    <span className="text-[12px] tracking-[0.2em] font-mono font-bold text-cyan-400 bg-cyan-500/10 w-max px-3 py-1 rounded-md">
      Step {step.num}
    </span>
    <h4 className="text-xl sm:text-2xl font-serif-accent font-medium text-white group-hover:text-cyan-300 transition-colors">
      {step.label}
    </h4>
    <p className="text-sm font-light leading-relaxed text-white/50 font-sans-main pr-4">
      {step.desc}
    </p>
  </motion.div>
);

/* ─────────────────────────────────────────────────
   STATS BAR
───────────────────────────────────────────────── */
const stats = [
  { value: '120+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '5 Days', label: 'Avg. Turnaround' },
  { value: '24/7', label: 'Support Available' },
];

/* ─────────────────────────────────────────────────
   MAIN PAGE EXPORT
───────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

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
          font-weight: 700;
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

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #22d3ee;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 30px;
          height: 1px;
          background: #22d3ee;
          opacity: 0.6;
        }
      `}</style>

      <VideoBackground />

      <div className="relative text-white min-h-screen overflow-x-hidden font-sans-main bg-[#0a0a0a]/50 selection:bg-cyan-500 selection:text-black">

        {/* ════════════════════════════════
            HERO HEADER
        ════════════════════════════════ */}
        <section className="pt-40 pb-20 px-4 sm:px-6 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="section-label justify-center mb-6">
            What We Offer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] mb-6 font-serif-accent tracking-tight drop-shadow-xl"
          >
            Premium Services,<br />
            <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pr-2">Delivered Fast</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed text-white/60"
          >
            From concept to launch — we execute with precision, speed, and an obsession for quality that shows in every pixel.
          </motion.p>
        </section>

        {/* ════════════════════════════════
            STATS BAR
        ════════════════════════════════ */}
        <section className="px-4 sm:px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.05] border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <div key={i} className="py-8 sm:py-10 px-4 text-center group hover:bg-white/[0.02] transition-colors">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-serif-accent font-semibold mb-2 text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </p>
                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-mono text-white/40 font-semibold">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ════════════════════════════════
            SERVICES GRID
        ════════════════════════════════ */}
        <section className="px-4 sm:px-6 pb-24 max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} service={s} index={i} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            HOW WE WORK
        ════════════════════════════════ */}
        <section className="px-4 sm:px-6 py-24 max-w-7xl mx-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="section-label mb-4">Our Process</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-accent font-bold tracking-tight">
                How We Work
              </h2>
            </div>
            <p className="text-sm md:text-base font-light max-w-sm leading-relaxed text-white/50">
              A proven 4-step framework that keeps every project on time, on budget, and above expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {steps.map((step, i) => (
              <ProcessStep key={i} step={step} i={i} />
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            BOTTOM CTA
        ════════════════════════════════ */}
        <section className="px-4 sm:px-6 py-24 mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center p-10 sm:p-20 relative overflow-hidden border border-white/10 rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl shadow-2xl"
          >
            {/* Soft Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <div className="section-label justify-center mb-6">Ready to Start?</div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-accent font-bold mb-6 leading-tight">
                Let's Build Your Next<br />
                <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pr-2">Big Thing Together</em>
              </h2>
              <p className="text-sm sm:text-base font-light mb-10 leading-relaxed text-white/50 max-w-md mx-auto">
                Book a free strategy call. Zero commitment, maximum clarity.
              </p>

              <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                <span>Get Free Consultation</span>
                <ArrowRight size={14} className="relative z-10" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Nested routes Outlet */}
        <div className="mt-10">
          <Outlet />
        </div>

      </div>
    </>
  );
}