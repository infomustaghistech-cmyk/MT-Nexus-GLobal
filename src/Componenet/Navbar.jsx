import React, { useEffect, useState } from 'react';
import BrandLogo from './BrandLogo';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';



/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const serviceLinks = [
  { title: 'Web & Platform Engineering', subtitle: 'Web apps, portals and digital platforms', route: '/services/web_customization', image: '/gradient-ui-ux-landing-page_52683-69729.webp' },
  { title: 'Mobile Product Development', subtitle: 'Native and cross-platform experiences', route: '/services/app_customization', image: '/user-interface-design-web-template_23-2149182790.webp' },
  { title: 'UI/UX & Product Design', subtitle: 'Interfaces, flows and design systems', route: '/services/ui-ux', image: '/4567620.webp' },
  { title: 'Commerce Engineering', subtitle: 'Shopify and custom storefronts', route: '/services/shopify', image: '/6033265.webp' },
  { title: 'Brand & Graphic Design', subtitle: 'Visual systems and communication', route: '/services/graphic-design', image: '/jualcmljlawmppfnginu.webp' },
  { title: 'Video & Motion', subtitle: 'Product, campaign and brand content', route: '/services/video-editing', image: '/video-production-landing-page_52683-76086.webp' },
];

const projectLinks = [
  { title: 'Software & APIs', subtitle: 'Custom software & enterprise integrations', route: '/projects/software', image: '/globe-network.png' },
  { title: 'Websites', subtitle: 'Corporate and digital platforms', route: '/projects/website', image: '/4517399.webp' },
  { title: 'Apps', subtitle: 'Mobile and product interfaces', route: '/projects/app', image: '/4567620.webp' },
  { title: 'WordPress', subtitle: 'CMS and content experiences', route: '/projects/wordpress', image: '/gradient-ui-ux-landing-page_52683-69729.webp' },
  { title: 'Shopify', subtitle: 'Commerce and storefront work', route: '/projects/shopify', image: '/6033265.webp' },
  { title: 'Videos', subtitle: 'Motion and visual storytelling', route: '/projects/video', image: '/video-production-landing-page_52683-76086.webp' },
  { title: 'Graphic', subtitle: 'Branding and visual design', route: '/projects/graphic', image: '/jualcmljlawmppfnginu.webp' },
];

const plainLinks = [
  { label: 'Feedback', route: '/feedback' },
  { label: 'About', route: '/about' },
];

const FONT =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
const ease = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 ring-4 ring-emerald-600/10" />
    </span>
  );
}

function DesktopLink({ id, spot, to, active, onEnter, onClick, children }) {
  const lit = spot === id;
  return (
    <Link
      to={to}
      onMouseEnter={() => onEnter(id)}
      onFocus={() => onEnter(id)}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={`nexus-nav-link relative inline-flex h-10 items-center rounded-lg px-3.5 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${active || lit ? 'nexus-nav-link--active bg-blue-50 text-blue-800' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
        }`}
    >
      <span className="relative inline-flex items-center gap-1.5">{children}</span>
      {(active || lit) && (
        <motion.span
          className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-blue-600"
        />
      )}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop mega panel: text list on the left, live preview on the right */
/* ------------------------------------------------------------------ */

function MegaPanel({ intro, items, allRoute, allLabel }) {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();
  const current = items[idx];

  const leftItems = items.slice(0, Math.ceil(items.length / 2));
  const rightItems = items.slice(Math.ceil(items.length / 2));

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease } }}
      exit={{ opacity: 0, y: reduce ? 0 : 4, transition: { duration: 0.14 } }}
      className="absolute inset-x-0 top-full hidden lg:block"
    >
      <div className="border-t border-slate-200/80 bg-white shadow-[0_28px_80px_rgba(3,8,20,.14)]">
        <div className="mx-auto max-w-[1320px] px-8 lg:px-12">
          <div className="grid min-h-[470px] grid-cols-[360px_1fr]">
            <div className="border-r border-slate-200 bg-[#f4f5f7] px-8 py-8">
              <div className="text-[22px] font-semibold tracking-[-0.03em] text-[#07101d]">
                {allLabel.replace('View all ', '').replace('See all ', '')}
              </div>

              <div className="mt-5 overflow-hidden bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={`${idx}-${current.image}`}
                      src={current.image}
                      alt={current.title}
                      initial={{ opacity: 0, scale: reduce ? 1 : 1.025 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.34, ease }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,11,20,.28)_100%)]" />
                </div>

                <div className="px-1 pb-2 pt-4">
                  <div className="text-[18px] font-semibold leading-tight text-[#07101d]">
                    {current.title}
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-slate-600">
                    {current.subtitle}
                  </p>
                  <Link
                    to={current.route}
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#07101d] transition hover:text-blue-700"
                  >
                    Explore
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="px-10 py-10 xl:px-14">
              <div className="grid grid-cols-2 gap-x-16">
                {[leftItems, rightItems].map((group, groupIndex) => (
                  <div key={groupIndex}>
                    <div className="mb-5 text-[15px] font-semibold text-[#07101d]">
                      {items === serviceLinks
                        ? groupIndex === 0
                          ? 'Digital services'
                          : 'Specialized capabilities'
                        : groupIndex === 0
                          ? 'Project categories'
                          : 'More work'}
                    </div>

                    <div className="space-y-1">
                      {group.map((item, i) => {
                        const realIndex = groupIndex === 0 ? i : leftItems.length + i;
                        const active = realIndex === idx;

                        return (
                          <Link
                            key={item.title}
                            to={item.route}
                            onMouseEnter={() => setIdx(realIndex)}
                            onFocus={() => setIdx(realIndex)}
                            className="group flex items-start justify-between gap-4 border-b border-slate-100 py-3.5"
                          >
                            <span>
                              <span
                                className={`block text-[16px] font-medium transition-colors ${active
                                    ? 'text-blue-700'
                                    : 'text-[#1b2430] group-hover:text-blue-700'
                                  }`}
                              >
                                {item.title}
                              </span>
                              <span className="mt-1 block text-[12px] leading-5 text-slate-500">
                                {item.subtitle}
                              </span>
                            </span>

                            <ArrowRight
                              size={14}
                              className={`mt-1 shrink-0 transition-all ${active
                                  ? 'translate-x-0 text-blue-700 opacity-100'
                                  : '-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:text-blue-700 group-hover:opacity-100'
                                }`}
                            />
                          </Link>
                        );
                      })}
                    </div>

                    {groupIndex === 1 && (
                      <Link
                        to={allRoute}
                        className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-[#07101d] px-4 text-[13px] font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        {allLabel}
                        <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5">
                <p className="max-w-xl text-[12px] leading-6 text-slate-500">
                  {intro}
                </p>
                <span className="text-[11px] font-medium text-slate-400">
                  MT Nexus Global
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setDesktopMenu(null);
      }
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
    setDesktopMenu(null);
  }, [path]);

  const handleScrollToSection = (event, target, sectionId) => {
    setMobileOpen(false);
    setDesktopMenu(null);

    if (path === '/' || path === target) {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(target);
  };

  const isActive = (route) =>
    route === '/' ? path === '/' : path === route || path.startsWith(`${route}/`);

  const inServices = path.startsWith('/services');
  const inProjects = path.startsWith('/projects');
  const spot = hovered ?? desktopMenu;
  const solid = (isScrolled || desktopMenu) && !mobileOpen;

  const enter = (id) => {
    setHovered(id);
    setDesktopMenu(id === 'services' || id === 'projects' ? id : null);
  };

  /* Mobile navigation — intentionally lightweight for smooth performance */
  const mobileRowClass = (active) =>
    `flex min-h-[56px] w-full items-center justify-between border-b border-slate-200 px-0 text-left text-[15px] font-medium tracking-[-0.01em] transition-colors ${active ? 'text-[#07101d]' : 'text-slate-700'
    }`;

  const mobileGroup = (key, label, links, activeNow, allRoute, allLabel) => {
    const open = mobileSection === key;

    return (
      <div>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setMobileSection(open ? null : key)}
          className={mobileRowClass(activeNow || open)}
        >
          <span>{label}</span>

          <ChevronRight
            size={18}
            strokeWidth={1.7}
            className={`text-slate-400 transition-transform duration-200 ${open ? 'rotate-90 text-[#07101d]' : ''
              }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? { display: 'none' } : { height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.22, ease }}
              className="overflow-hidden bg-[#f7f8fa]"
            >
              <div className="border-b border-slate-200 px-4 py-2">
                {links.map((item) => (
                  <Link
                    key={item.title}
                    to={item.route}
                    className="flex min-h-[48px] items-center justify-between gap-4 border-b border-slate-200/80 text-[14px] text-slate-700 last:border-b-0 active:bg-slate-100"
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-[#111827]">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[11.5px] text-slate-500">
                        {item.subtitle}
                      </span>
                    </span>

                    <ChevronRight
                      size={15}
                      strokeWidth={1.7}
                      className="shrink-0 text-slate-400"
                    />
                  </Link>
                ))}

                <Link
                  to={allRoute}
                  className="flex min-h-[48px] items-center justify-between text-[13px] font-semibold text-blue-700"
                >
                  {allLabel}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <header
        onMouseLeave={() => {
          setDesktopMenu(null);
          setHovered(null);
        }}
        className="nexus-navbar fixed inset-x-0 top-0 z-50"
        style={{ fontFamily: FONT }}
      >
        <div
          className={`nexus-navbar__shell relative transition-shadow duration-300 ${solid ? 'nexus-navbar__shell--solid' : ''}`}
        >
          <div
            className="nexus-navbar__content mx-auto flex h-[96px] max-w-[1320px] items-center justify-between gap-5 px-5 sm:h-[104px] sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-12"
          >
            {/* Logo */}
            <Link
              to="/"
              aria-label="Nexus Global home"
              onClick={() => {
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative z-[60] flex w-fit shrink-0 items-center justify-start rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
            >
              <BrandLogo />
            </Link>

            {/* Desktop links */}
            <nav
              aria-label="Main"
              onMouseLeave={() => setHovered(null)}
              className="hidden items-center gap-1 lg:flex"
            >
              <DesktopLink id="home" spot={spot} to="/" active={isActive('/')} onEnter={enter}>
                Home
              </DesktopLink>

              <DesktopLink id="services" spot={spot} to="/services" active={inServices} onEnter={enter}>
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${desktopMenu === 'services' ? 'rotate-180 text-blue-700' : 'text-slate-500'
                    }`}
                />
              </DesktopLink>

              <DesktopLink id="projects" spot={spot} to="/projects" active={inProjects} onEnter={enter}>
                Projects
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${desktopMenu === 'projects' ? 'rotate-180 text-blue-700' : 'text-slate-500'
                    }`}
                />
              </DesktopLink>

              {plainLinks.map((item) => (
                <DesktopLink
                  key={item.label}
                  id={item.label}
                  spot={spot}
                  to={item.route}
                  active={isActive(item.route)}
                  onEnter={enter}
                  onClick={
                    item.sectionId
                      ? (e) => handleScrollToSection(e, item.route, item.sectionId)
                      : undefined
                  }
                >
                  {item.label}
                </DesktopLink>
              ))}
            </nav>

            {/* Desktop right side */}
            <div className="nexus-navbar__actions hidden items-center justify-end gap-6 lg:flex">
              <span className="nexus-navbar__status items-center gap-2.5 whitespace-nowrap text-[11px] font-medium text-slate-500">
                <StatusDot />
                Taking new projects
              </span>
              <Link
                to="/contact"
                className="nexus-navbar__cta group inline-flex h-11 shrink-0 items-center gap-4 whitespace-nowrap rounded-lg bg-[#0b1830] px-5 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
              >
                Let&apos;s talk
                <span className="grid place-items-center text-blue-200 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="nexus-navbar__toggle relative z-[60] grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 active:scale-95 lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <motion.span
                  animate={mobileOpen ? { y: 5.25, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: reduce ? 0 : 0.2, ease }}
                  className="absolute left-0 top-0 h-[1.5px] w-5 rounded bg-[#07101d]"
                />
                <motion.span
                  animate={mobileOpen ? { y: -5.25, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: reduce ? 0 : 0.2, ease }}
                  className="absolute bottom-0 left-0 h-[1.5px] w-5 rounded bg-[#07101d]"
                />
              </span>
            </button>
          </div>

          {/* Scroll progress */}
          <motion.div
            aria-hidden
            style={{ scaleX: progress }}
            className={`absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 transition-opacity duration-300 ${isScrolled && !mobileOpen ? 'opacity-100' : 'opacity-0'
              }`}
          />

          {/* Desktop mega menus */}
          <AnimatePresence mode="wait">
            {desktopMenu === 'services' && (
              <MegaPanel
                key="services"
                intro="Design, engineering and content, delivered by one team."
                items={serviceLinks}
                allRoute="/services"
                allLabel="View all services"
              />
            )}
            {desktopMenu === 'projects' && (
              <MegaPanel
                key="projects"
                intro="Products and experiences we have built for clients."
                items={projectLinks}
                allRoute="/projects"
                allLabel="See all projects"
              />
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ============ Mobile full-screen menu ============ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: 18 }}
            transition={{ duration: reduce ? 0 : 0.24, ease }}
            className="fixed inset-0 z-[48] flex flex-col bg-white text-[#07101d] lg:hidden"
            style={{ fontFamily: FONT }}
          >
            <nav
              aria-label="Mobile"
              className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-[96px] sm:px-7 sm:pt-[104px]"
            >
              <div className="mx-auto w-full max-w-xl">
                <Link
                  to="/"
                  className={mobileRowClass(isActive('/'))}
                >
                  <span>Home</span>
                  <ChevronRight
                    size={18}
                    strokeWidth={1.7}
                    className="text-slate-400"
                  />
                </Link>

                {mobileGroup(
                  'services',
                  'Services',
                  serviceLinks,
                  inServices,
                  '/services',
                  'View all services'
                )}

                {mobileGroup(
                  'projects',
                  'Projects',
                  projectLinks,
                  inProjects,
                  '/projects',
                  'See all projects'
                )}

                {plainLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.route}
                    onClick={
                      item.sectionId
                        ? (e) =>
                          handleScrollToSection(
                            e,
                            item.route,
                            item.sectionId
                          )
                        : undefined
                    }
                    className={mobileRowClass(isActive(item.route))}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      size={18}
                      strokeWidth={1.7}
                      className="text-slate-400"
                    />
                  </Link>
                ))}
              </div>
            </nav>

            <div className="border-t border-slate-200 bg-white px-5 pb-[max(18px,env(safe-area-inset-bottom))] pt-4 sm:px-7">
              <div className="mx-auto w-full max-w-xl">
                <div className="mb-3 flex items-center gap-2 text-[12px] text-slate-500">
                  <StatusDot />
                  Taking new projects
                </div>

                <Link
                  to="/contact"
                  className="group flex h-13 w-full items-center justify-between rounded-xl bg-[#07101d] pl-5 pr-2 text-[14px] font-semibold text-white transition active:scale-[0.99]"
                >
                  Get in touch

                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-[#07101d]">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

