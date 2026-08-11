import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Search, BarChart3, Settings, Link as LinkIcon, MapPin, FileEdit } from 'lucide-react';
import { useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const seoServices = [
  {
    title: 'Keyword Research',
    description: 'We identify high-intent, low-competition keywords that drive targeted traffic to your site.',
    icon: Search,
  },
  {
    title: 'On-Page SEO',
    description: 'Optimizing titles, meta tags, and internal linking to align with search engine best practices.',
    icon: BarChart3,
  },
  {
    title: 'Technical SEO Audit',
    description: 'Deep diving into site speed, mobile-friendliness, and crawlability for peak performance.',
    icon: Settings,
  },
  {
    title: 'Link Building',
    description: 'Acquiring high-quality backlinks from authoritative domains to boost your domain rating.',
    icon: LinkIcon,
  },
  {
    title: 'Local SEO',
    description: 'Dominate your local market with optimized Google Business Profiles and local citations.',
    icon: MapPin,
  },
  {
    title: 'Content Optimization',
    description: 'Crafting comprehensive, engaging content that satisfies user intent and ranks highly.',
    icon: FileEdit,
  },
];

const stats = [
  { label: 'Organic Traffic', value: 150, suffix: '%+' },
  { label: 'PageSpeed Score', value: 95, suffix: '+' },
  { label: 'Keywords Ranked #1', value: 500, suffix: '+' },
  { label: 'Happy Clients', value: 40, suffix: '+' },
];

const SeoSection = () => {
  return (
    <section id="seo" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-cyan-400/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%),linear-gradient(135deg,#0a0f1d_0%,#050816_100%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            SEO Performance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Boost Your Rankings, <span className="text-emerald-400">Not Just Your Traffic</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            A beautiful website is only half the battle. Our data-driven SEO strategies ensure your brand gets discovered by the right audience at the right time.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs uppercase tracking-[0.1em] text-cyan-400/80 text-center font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seoServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col p-6 sm:p-8 rounded-[24px] border border-white/10 bg-[#0a0f1d]/50 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-[#0f172a]/80 hover:border-cyan-400/30 hover:shadow-[0_20px_40px_rgba(34,211,238,0.1)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-cyan-300 transition-colors group-hover:bg-cyan-400/20 group-hover:border-cyan-400/40 mb-6">
                  <Icon size={22} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95">
            Get a Free SEO Audit
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SeoSection;
