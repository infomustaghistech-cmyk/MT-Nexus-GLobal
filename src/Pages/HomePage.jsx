import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Globe, ShoppingBag, Film, Layout, Zap, Smartphone, Monitor, Layers3, Gamepad2, Database, CloudCog, Apple, Server, Code2, Boxes, GitBranch } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import HeroSection from '../Componenet/Hero';
import TestimonialSection from '../Componenet/TestimonialSection';
import SeoSection from '../Componenet/SeoSection';
import BlogSection from '../Componenet/BlogSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const services = [
  {
    title: 'Web Customization',
    description: 'Fast, modern, conversion-focused websites tailored for your business goals.',
    image: '/gradient-ui-ux-landing-page_52683-69729.avif',
    route: '/services/web_customization',
    icon: Globe,
    tag: 'Web Development',
  },
  {
    title: 'App Development',
    description: 'High-performance mobile and web apps designed for growth and seamless UX.',
    image: '/user-interface-design-web-template_23-2149182790.avif',
    route: '/services/app_customization',
    icon: Layout,
    tag: 'Mobile Apps',
  },
  {
    title: 'Graphic Design',
    description: 'Creative branding, visuals, and digital assets that make your brand unforgettable.',
    image: '/video-production-landing-page_52683-76086.avif',
    route: '/services/graphic-design',
    icon: Palette,
    tag: 'Branding',
  },
  {
    title: 'Shopify Stores',
    description: 'Beautiful storefronts with strong product presentation and smooth checkout flow.',
    image: '/gradient-ui-ux-landing-page_52683-69729.avif',
    route: '/services/shopify',
    icon: ShoppingBag,
    tag: 'E-Commerce',
  },
  {
    title: 'Video Editing',
    description: 'Professional editing and motion visuals that elevate your content and campaigns.',
    image: '/video-production-landing-page_52683-76086.avif',
    route: '/services/video-editing',
    icon: Film,
    tag: 'Content Creation',
  },
  {
    title: 'UI/UX Design',
    description: 'Research-driven interfaces with polished experiences that guide users naturally.',
    image: '/user-interface-design-web-template_23-2149182790.avif',
    route: '/services/ui-ux-designs',
    icon: Zap,
    tag: 'User Experience',
  },
];

const techTabs = [
  {
    id: 'mobile',
    label: 'Mobile Apps',
    icon: Smartphone,
    accent: 'from-cyan-500 to-blue-600',
    groups: [
      {
        title: 'iOS',
        items: [
          { name: 'Swift', icon: Apple },
          { name: 'UIKit', icon: Smartphone },
          { name: 'RxSwift', icon: Code2 },
          { name: 'Combine', icon: Layers3 },
          { name: 'MVVM', icon: Boxes },
          { name: 'Alamofire', icon: Server },
          { name: 'Core Data', icon: Database },
        ],
      },
      {
        title: 'Android',
        items: [
          { name: 'Kotlin', icon: Smartphone },
          { name: 'MVVM', icon: Boxes },
          { name: 'RxJava', icon: Code2 },
          { name: 'Java', icon: Code2 },
          { name: 'Retrofit', icon: Server },
          { name: 'Jetpack', icon: Layers3 },
        ],
      },
    ],
  },
  {
    id: 'web',
    label: 'Web Platforms',
    icon: Monitor,
    accent: 'from-emerald-500 to-cyan-600',
    groups: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', icon: Monitor },
          { name: 'Next.js', icon: Globe },
          { name: 'Vue', icon: Monitor },
          { name: 'TypeScript', icon: Code2 },
          { name: 'Tailwind CSS', icon: Layers3 },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Node.js', icon: Server },
          { name: 'Django', icon: Boxes },
          { name: 'Laravel', icon: Code2 },
          { name: 'GraphQL', icon: Layers3 },
        ],
      },
    ],
  },
  {
    id: 'cross',
    label: 'Cross Platforms',
    icon: Layers3,
    accent: 'from-violet-500 to-fuchsia-600',
    groups: [
      {
        title: 'Frameworks',
        items: [
          { name: 'Flutter', icon: Layers3 },
          { name: 'React Native', icon: Monitor },
          { name: 'Xamarin', icon: Boxes },
          { name: 'Ionic', icon: Smartphone },
        ],
      },
    ],
  },
  {
    id: 'games',
    label: 'Games',
    icon: Gamepad2,
    accent: 'from-rose-500 to-orange-600',
    groups: [
      {
        title: 'Engines',
        items: [
          { name: 'Unity', icon: Gamepad2 },
          { name: 'Unreal Engine', icon: Boxes },
          { name: 'Cocos2d', icon: Layers3 },
          { name: 'Photon', icon: Server },
        ],
      },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    accent: 'from-amber-500 to-yellow-600',
    groups: [
      {
        title: 'SQL',
        items: [
          { name: 'PostgreSQL', icon: Database },
          { name: 'MySQL', icon: Database },
          { name: 'MSSQL', icon: Database },
        ],
      },
      {
        title: 'NoSQL',
        items: [
          { name: 'MongoDB', icon: Database },
          { name: 'Firebase', icon: CloudCog },
          { name: 'Redis', icon: Database },
        ],
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: CloudCog,
    accent: 'from-sky-500 to-indigo-600',
    groups: [
      {
        title: 'Cloud',
        items: [
          { name: 'AWS', icon: CloudCog },
          { name: 'Azure', icon: CloudCog },
          { name: 'Google Cloud', icon: CloudCog },
        ],
      },
      {
        title: 'DevOps',
        items: [
          { name: 'Docker', icon: Boxes },
          { name: 'Kubernetes', icon: Layers3 },
          { name: 'Jenkins', icon: GitBranch },
          { name: 'Terraform', icon: Server },
        ],
      },
    ],
  },
];

const processSteps = [
  {
    key: 'ideate',
    number: '01/06',
    title: 'Ideate',
    description: 'We analyze your vision to align the roadmap with your goals.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    key: 'design',
    number: '02/06',
    title: 'Design',
    description: 'Creating an MVP that balances design and core functionality.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-emerald-500 to-cyan-600',
  },
  {
    key: 'develop',
    number: '03/06',
    title: 'Develop',
    description: 'Building end-to-end solutions with focus on architecture and agile delivery.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    key: 'test',
    number: '04/06',
    title: 'Test',
    description: 'Ensuring high quality through comprehensive testing.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-amber-500 to-yellow-600',
  },
  {
    key: 'launch',
    number: '05/06',
    title: 'Launch',
    description: 'Executing a smooth product launch and post-launch support.',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-rose-500 to-orange-600',
  },
  {
    key: 'support',
    number: '06/06',
    title: 'Support',
    description: 'Providing ongoing support and enhancements.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-sky-500 to-indigo-600',
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const selectedTab = techTabs.find((tab) => tab.id === activeTab) || techTabs[0];
  const ActiveIcon = selectedTab.icon;
  const [activeProcess, setActiveProcess] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/technologies') {
      const timer = window.setTimeout(() => {
        const section = document.getElementById('technologies');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);

      return () => window.clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    const section = document.getElementById('process-section');
    if (!section) return;

    const cards = Array.from(section.querySelectorAll('[data-process-card]'));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.processIndex || 0);
            setActiveProcess(index);
          }
        });
      },
      { threshold: 0.4, rootMargin: '-10% 0px -40% 0px' }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050816] text-white">
      <HeroSection />

      <section className="px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <motion.p variants={fadeInUp} className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-cyan-400 mb-4 font-mono">
              Our Services
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Premium digital solutions for brands that want to stand out.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              From sleek websites to high-converting storefronts, we craft every experience with strategy, style, and performance in mind.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0f1d] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(34,211,238,0.15)]"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] to-transparent opacity-90" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8 pt-2">
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                        {service.tag}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-white/70 mb-6 flex-1">{service.description}</p>

                    <Link to={service.route} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 transition group-hover:gap-3 group-hover:text-cyan-300">
                      Explore More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technologies" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),linear-gradient(135deg,#0a0f1d_0%,#050816_100%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 lg:p-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-8"
          >
            <motion.div variants={slideInLeft} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Tech Stack
            </motion.div>
            <motion.h2 variants={slideInLeft} className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Technologies we use
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-3 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
              Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.
            </motion.p>
          </motion.div>

          <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/40 to-white/10" />

          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="w-full lg:w-72">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/25 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                {techTabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = tab.id === activeTab;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${active ? 'bg-gradient-to-r from-cyan-600/80 to-blue-700/80 text-white shadow-lg shadow-cyan-900/20' : 'bg-transparent text-gray-400 hover:bg-white/6 hover:text-white'}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`rounded-full p-2 ${active ? 'bg-white/15' : 'bg-white/5'}`}>
                          <Icon size={16} />
                        </span>
                        {tab.label}
                      </span>
                      <ArrowRight size={16} className={`${active ? 'translate-x-0 opacity-100' : 'opacity-0'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div
              key={selectedTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex-1 rounded-[24px] border border-white/10 bg-[#0f172a]/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-7"
            >
              <div className="flex items-center gap-3">
                <div className={`rounded-2xl bg-gradient-to-br ${selectedTab.accent} p-3 text-white`}>
                  <ActiveIcon size={20} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-400">Focused stack</p>
                  <h3 className="text-2xl font-semibold text-white">{selectedTab.label}</h3>
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {selectedTab.groups.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
                      {group.title}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div key={item.name} className="flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-2 text-sm text-gray-200 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-cyan-400">
                              <ItemIcon size={14} />
                            </span>
                            {item.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-cyan-400/10 bg-[linear-gradient(90deg,rgba(6,182,212,0.08),rgba(30,41,59,0.95))] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg text-white">
              Create a software development <span className="font-semibold text-emerald-400">Team</span> with us
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section id="process-section" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),linear-gradient(135deg,#0a0f1d_0%,#050816_100%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 lg:p-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          >
            <motion.div variants={slideInLeft}>
              <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-400">Our Product Development Process</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                <span className="block">Our product</span>
                <span className="block text-emerald-400">development process</span>
              </h2>
            </motion.div>
            <motion.a variants={slideInRight} href="#" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-cyan-300">
              View More
              <span className="text-cyan-300">→</span>
            </motion.a>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="space-y-4">
              {processSteps.map((step, index) => {
                const active = activeProcess === index;
                return (
                  <div
                    key={step.key}
                    data-process-card
                    data-process-index={index}
                    className={`rounded-[24px] border p-5 transition-all duration-300 ${active ? 'border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.12)]' : 'border-white/10 bg-white/[0.03]'}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 h-full w-[2px] rounded-full bg-gradient-to-b ${active ? 'from-cyan-400 to-emerald-400' : 'from-white/10 to-transparent'}`} />
                      <div className="flex-1">
                        <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">{step.number}</p>
                        <h3 className={`mt-2 text-3xl font-semibold tracking-tight ${active ? 'text-cyan-300' : 'text-white'}`}>
                          {step.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_55%),#10121b] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <motion.img
                  key={processSteps[activeProcess].key}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45 }}
                  src={processSteps[activeProcess].image}
                  alt={processSteps[activeProcess].title}
                  className="h-[420px] w-full rounded-[24px] object-cover"
                />
                <div className="mt-3 flex items-center justify-between rounded-full border border-cyan-400/10 bg-black/45 px-4 py-3 text-sm text-white/80 backdrop-blur-sm">
                  <span className="font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    {processSteps[activeProcess].number}
                  </span>
                  <span className="text-white">— {processSteps[activeProcess].title.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeoSection />

      <BlogSection />

      {/* Animated Testimonials Section */}
      <TestimonialSection />
    </div>
  );
};

export default Home;
