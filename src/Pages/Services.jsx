import React from 'react';
import { motion } from 'framer-motion';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Film,
  Globe,
  Layout,
  Palette,
  ShoppingBag,
  Zap,
} from 'lucide-react';

const heroImage = '/premium-home/technology-data.webp';

const services = [
  {
    icon: Globe,
    index: '01',
    title: 'Web & mobile engineering',
    eyebrow: 'Digital products',
    description:
      'High-performance websites, portals, web applications and mobile products built around usability, reliability and long-term scale.',
    capabilities: ['Web applications', 'Mobile products', 'Platform engineering'],
    image: '/premium-home/web-development-photo.webp',
    imageAlt: 'Code displayed on a developer monitor',
    route: '/services/web_customization',
  },
  {
    icon: ShoppingBag,
    index: '02',
    title: 'E-commerce systems',
    eyebrow: 'Commerce',
    description:
      'Conversion-focused storefronts and custom commerce experiences designed to make discovery, checkout and ongoing growth easier.',
    capabilities: ['Shopify', 'Custom storefronts', 'Conversion UX'],
    image: '/premium-home/commerce-photo.webp',
    imageAlt: 'A customer and business owner completing a purchase',
    route: '/services/shopify',
  },
  {
    icon: Palette,
    index: '03',
    title: 'Brand & graphic design',
    eyebrow: 'Brand systems',
    description:
      'Visual identities and communication systems that make brands feel clearer, more consistent and more credible across channels.',
    capabilities: ['Identity systems', 'Campaign design', 'Marketing assets'],
    image: '/premium-home/product-design-photo.webp',
    imageAlt: 'A designer sketching a product interface',
    route: '/services/graphic-design',
  },
  {
    icon: Zap,
    index: '04',
    title: 'WordPress solutions',
    eyebrow: 'Content platforms',
    description:
      'Fast, stable WordPress experiences with custom themes, integrations and performance work for modern content teams.',
    capabilities: ['Custom WordPress', 'Performance', 'SEO foundations'],
    image: '/premium-home/technology-cloud.webp',
    imageAlt: 'Network servers in a data center',
    route: '/services/wordpress',
  },
  {
    icon: Film,
    index: '05',
    title: 'Video & motion',
    eyebrow: 'Motion content',
    description:
      'Editing, motion graphics and post-production for product launches, campaigns and professional brand storytelling.',
    capabilities: ['Video editing', 'Motion graphics', 'Color finishing'],
    image: '/premium-home/video-production-photo.webp',
    imageAlt: 'A professional video camera set up for filming',
    route: '/services/video-editing',
  },
  {
    icon: Layout,
    index: '06',
    title: 'UI / UX design',
    eyebrow: 'Product experience',
    description:
      'Research-led interface design, user flows and scalable design systems that make complex products easier to use.',
    capabilities: ['UX strategy', 'Interface design', 'Design systems'],
    image: '/premium-home/mobile-product-photo.webp',
    imageAlt: 'A smartphone displaying a mobile website',
    route: '/services/ui-ux-designs',
  },
];

const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'We define the business problem, users, scope and success criteria before design or development begins.',
  },
  {
    number: '02',
    title: 'Shape',
    text: 'Strategy, architecture and product direction are translated into a practical delivery plan.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Design and engineering move together with clear reviews, visible progress and focused feedback.',
  },
  {
    number: '04',
    title: 'Launch & improve',
    text: 'We validate, release and continue improving around real product usage and business needs.',
  },
];

const sectionMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
};

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.08em] text-blue-700">
      <span className="h-px w-8 bg-blue-600/45" />
      {children}
    </div>
  );
}

function ServiceRow({ service, index }) {
  const navigate = useNavigate();
  const Icon = service.icon;
  const reverse = index % 2 === 1;

  return (
    <motion.article
      {...sectionMotion}
      onClick={() => navigate(service.route)}
      className="group cursor-pointer border-t border-slate-200 py-12 first:border-t-0 first:pt-0 sm:py-16 lg:py-20"
    >
      <div
        className={`grid items-center gap-9 lg:grid-cols-2 lg:gap-16 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="relative overflow-hidden rounded-lg bg-slate-100">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
            />
          </div>

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md">
            <Icon size={14} strokeWidth={1.8} className="text-blue-700" />
            <span className="text-[10px] font-semibold text-slate-700">{service.index}</span>
          </div>
        </div>

        <div className="max-w-xl">
          <div className="text-[12px] font-semibold text-blue-700">{service.eyebrow}</div>

          <h3 className="mt-4 text-[32px] font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-[40px] lg:text-[46px]">
            {service.title}
          </h3>

          <p className="mt-5 text-[15px] leading-8 text-slate-600">
            {service.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {service.capabilities.map((item) => (
              <span key={item} className="text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-all group-hover:gap-3">
            Explore service
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServicesPage() {
  return (
    <main
      className="min-h-screen overflow-x-clip bg-white text-slate-950"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* HERO — image-led, enterprise style */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#07101d]">
        <img
          src={heroImage}
          alt="Web development code displayed on a monitor"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#06101d]/50" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,20,.26)_0%,rgba(5,11,20,.18)_35%,rgba(5,11,20,.88)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,20,.72)_0%,rgba(4,10,20,.30)_52%,rgba(4,10,20,.22)_100%)]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1320px] items-end px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[1120px]"
          >
            <div className="mb-7 text-[12px] font-semibold text-blue-200">Our services</div>

            <h1 className="max-w-[1050px] text-[48px] font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-[66px] lg:text-[86px]">
              Digital services built for
              <span className="block">modern business.</span>
            </h1>

            <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-[690px] text-[16px] leading-8 text-slate-200 sm:text-[18px]">
                Strategy, design and engineering brought together to create digital products that
                are clear, scalable and ready for production.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#07101d] transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Start a project
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="#services"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Explore services
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            {...sectionMotion}
            className="grid gap-10 border-b border-slate-200 pb-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:pb-20"
          >
            <div>
              <SectionLabel>What we do</SectionLabel>
            </div>

            <div>
              <h2 className="max-w-4xl text-[34px] font-semibold leading-[1.07] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[58px]">
                Focused expertise across the digital product lifecycle.
              </h2>

              <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-600">
                We help businesses move from an idea or operational problem to a clear digital
                experience. Product strategy, design and engineering stay connected throughout the
                engagement so decisions do not get lost between separate teams.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1320px]">
          {services.map((service, index) => (
            <ServiceRow key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-slate-200 bg-[#f7f8fa] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            {...sectionMotion}
            className="grid gap-10 lg:grid-cols-[.76fr_1.24fr] lg:gap-20"
          >
            <div>
              <SectionLabel>Why MT Nexus</SectionLabel>
              <h2 className="mt-6 max-w-xl text-[34px] font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Better product decisions before more development.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {[
                ['01', 'Engineering depth', 'Architecture and implementation quality are treated as product decisions.'],
                ['02', 'Experience first', 'Interfaces are designed around real user behavior and practical business needs.'],
                ['03', 'Production standard', 'Responsive behavior, performance and maintainability are reviewed as one system.'],
                ['04', 'Built to evolve', 'Products are structured so new capabilities can be added without unnecessary complexity.'],
              ].map(([num, title, text]) => (
                <div key={num} className="grid grid-cols-[32px_minmax(0,1fr)] gap-x-3 bg-white p-5 sm:block sm:p-8">
                  <div className="row-span-2 pt-1 text-[11px] font-semibold text-blue-700 sm:pt-0">{num}</div>
                  <div className="min-w-0">
                    <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.02em] text-slate-950 sm:mt-8 sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-6 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            {...sectionMotion}
            className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"
          >
            <div>
              <SectionLabel>Our process</SectionLabel>
              <h2 className="mt-6 max-w-lg text-[34px] font-semibold leading-[1.06] tracking-[-0.045em] text-slate-950 sm:text-5xl">
                A clear path from first conversation to launch.
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {process.map((step) => (
                <div key={step.number} className="grid gap-4 py-7 sm:grid-cols-[70px_180px_1fr] sm:items-start sm:gap-6">
                  <div className="text-[11px] font-semibold text-blue-700">{step.number}</div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <motion.div
          {...sectionMotion}
          className="mx-auto grid max-w-[1320px] gap-8 rounded-lg bg-[#111827] border border-slate-800 p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12 shadow-xl"
        >
          <div>
            <div className="text-[11px] font-semibold text-[#2dd4bf]">Start a project</div>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.07] tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
              Have a digital product or business challenge worth solving?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      <Outlet />
    </main>
  );
}
