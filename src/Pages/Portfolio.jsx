import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

import { supabase } from '../supabaseClient';
import SoftwareShowcaseSection from '../Componenet/SoftwareShowcaseSection';
import './PortfolioCards.css';
import ProjectDialog from '../Componenet/ProjectDialog';
import ProjectCard from '../Componenet/ProjectCard';

const heroImage =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=82';

const categories = [
  {
    name: 'ALL',
    path: null,
    eyebrow: 'All work',
    title: 'All projects',
    image: '/premium-home/commerce-photo.webp',
  },
  {
    name: 'SOFTWARE',
    path: '/projects/software',
    eyebrow: 'Systems & APIs',
    title: 'Software & APIs',
    image: '/premium-home/technology-cloud.webp',
  },
  {
    name: 'WEBSITES',
    path: '/projects/website',
    eyebrow: 'Web experiences',
    title: 'Websites',
    image: '/premium-home/web-development-photo.webp',
  },
  {
    name: 'APPS',
    path: '/projects/app',
    eyebrow: 'Product experiences',
    title: 'Apps',
    image: '/premium-home/mobile-product-photo.webp',
  },
  {
    name: 'WORDPRESS',
    path: '/projects/wordpress',
    eyebrow: 'CMS experiences',
    title: 'WordPress',
    image: '/premium-home/web-development-photo.webp',
  },
  {
    name: 'SHOPIFY',
    path: '/projects/shopify',
    eyebrow: 'Commerce',
    title: 'Shopify',
    image: '/premium-home/commerce-photo.webp',
  },
  {
    name: 'VIDEOS',
    path: '/projects/video',
    eyebrow: 'Motion',
    title: 'Videos',
    image: '/premium-home/video-production-photo.webp',
  },
  {
    name: 'GRAPHIC',
    path: '/projects/graphic',
    eyebrow: 'Visual design',
    title: 'Graphic design',
    image: '/premium-home/product-design-photo.webp',
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function CategoryCard({ category, index, onClick }) {
  const reduce = useReducedMotion();
  return (
    <motion.button type="button" onClick={onClick} className="portfolio-category" initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: reduce ? 0 : .45, delay: reduce ? 0 : (index % 4) * .06 }}>
      <div className="portfolio-category__image"><img src={category.image} alt="" loading="lazy" decoding="async" /></div>
      <div className="portfolio-category__body"><div><span>{category.eyebrow}</span><strong>{category.title}</strong></div><ArrowUpRight size={18} aria-hidden="true" /></div>
    </motion.button>
  );
}

const Portfolio = () => {
  const navigate = useNavigate();

  const [allProjects, setAllProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (mounted) {
          setAllProjects(data || []);
        }
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const handleCategoryClick = (category) => {
    if (category.path) {
      navigate(category.path);
      return;
    }

    window.scrollTo({
      top: document.getElementById('project-grid')?.offsetTop - 100 || 0,
      behavior: 'smooth',
    });
  };

  return (
    <main
      className="min-h-screen overflow-x-clip bg-[#050b14] text-white"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* HERO */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#050b14]">
        <img
          src={heroImage}
          alt="Digital systems and software technology"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* video-theme color treatment */}
        <div className="absolute inset-0 bg-[#050b14]/52" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,20,.96)_0%,rgba(5,11,20,.80)_42%,rgba(5,11,20,.34)_72%,rgba(5,11,20,.66)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,.54)_0%,rgba(5,11,20,.14)_35%,rgba(5,11,20,.90)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(37,99,235,.20),transparent_30%),radial-gradient(circle_at_10%_65%,rgba(6,182,212,.10),transparent_28%)]" />

        <div className="relative mx-auto flex min-h-[650px] max-w-[1320px] items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68 }}
            className="max-w-[980px]"
          >
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mb-8 inline-flex items-center gap-2 text-[12px] font-medium text-white/60 transition hover:text-white"
            >
              <ArrowLeft size={15} />
              Back
            </button>

            <div className="text-[12px] font-semibold text-blue-200">
              Selected work
            </div>

            <h1 className="mt-5 max-w-[940px] text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[66px] lg:text-[82px]">
              Work built to look strong and perform in the real world.
            </h1>

            <p className="mt-7 max-w-[720px] text-[16px] leading-8 text-slate-300 sm:text-[18px]">
              Explore websites, applications, commerce experiences, visual design
              and digital products delivered across different business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY ROUTES */}
      <section className="relative border-b border-slate-200 bg-white px-5 py-12 sm:px-8 lg:px-12 text-[#111827]">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...sectionMotion} className="mb-7 flex items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-semibold text-[#0d9488]">
                Browse by category
              </div>

              <h2 className="mt-3 text-[28px] font-semibold tracking-[-0.035em] text-[#111827] sm:text-[34px]">
                Explore work by discipline.
              </h2>
            </div>

            <p className="hidden max-w-sm text-right text-sm leading-7 text-slate-500 lg:block">
              Each category opens its own project page, keeping the portfolio organized as it grows.
            </p>
          </motion.div>

          <div className="portfolio-category-list -mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                index={index}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED SOFTWARE ENGINEERING SHOWCASE */}
      <SoftwareShowcaseSection />

      {/* PROJECT GRID */}
      <section
        id="project-grid"
        className="relative bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 text-[#111827]"
      >
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            {...sectionMotion}
            className="mb-10 grid gap-7 lg:grid-cols-[1fr_.55fr] lg:items-end"
          >
            <div>
              <div className="text-[11px] font-semibold text-[#0d9488]">
                All projects
              </div>

              <h2 className="mt-4 max-w-[780px] text-[34px] font-semibold leading-[1.06] tracking-[-0.045em] text-[#111827] sm:text-[46px]">
                Selected work. Real business challenges.
              </h2>
            </div>

            <p className="max-w-md text-[14px] leading-7 text-slate-500 lg:justify-self-end">
              Explore the details behind each project, from the initial idea to the finished experience.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                >
                  <div className="aspect-[16/10] animate-pulse bg-slate-200" />
                  <div className="space-y-3 p-5">
                    <div className="h-3 w-16 rounded bg-slate-200" />
                    <div className="h-5 w-3/4 rounded bg-slate-200" />
                    <div className="h-3 w-full rounded bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>
          ) : allProjects.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
              <div className="text-base font-medium text-[#111827]">
                No projects are available yet.
              </div>

              <div className="mt-2 text-xs text-slate-500">
                New work will appear here automatically once it is added.
              </div>
            </div>
          ) : (
            <div className="portfolio-project-grid">
              {allProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <motion.div
          {...sectionMotion}
          className="mx-auto grid max-w-[1320px] gap-8 rounded-2xl border border-slate-800 bg-[#111827] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12 text-white shadow-xl"
        >
          <div>
            <div className="text-[11px] font-mono tracking-wider uppercase text-[#2dd4bf]">
              Start a project
            </div>

            <h2 className="mt-4 max-w-[760px] text-2xl font-medium tracking-tight text-white sm:text-3xl lg:text-4xl">
              Want to create something similar for your business?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-6 text-xs font-semibold tracking-wide text-white transition hover:bg-[#1d4ed8] shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
          >
            Start a conversation
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>

      {selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  );
};

export default Portfolio;
