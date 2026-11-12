import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Handshake,
  Layers3,
  ShieldCheck,
  Target,
  Workflow,
} from 'lucide-react';

import founderImg from '../assets/WhatsApp_Image_2026-03-11_at_3.33.52_AM-removebg-preview.webp';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
};

const principles = [
  {
    title: 'Clarity first',
    description:
      'We reduce noise, define the real problem and make decisions easier before adding more technology.',
    icon: Target,
  },
  {
    title: 'Built together',
    description:
      'Strategy, design and engineering stay connected so the product keeps one clear direction.',
    icon: Handshake,
  },
  {
    title: 'Own the outcome',
    description:
      'We take responsibility for the quality, usefulness and reliability of the work we ship.',
    icon: ShieldCheck,
  },
  {
    title: 'Designed to evolve',
    description:
      'We create systems that can grow without becoming harder to understand or maintain.',
    icon: Workflow,
  },
];

const leadership = [
  {
    name: 'Sadiq',
    role: 'Founder & CEO',
    image: founderImg,
    description:
      'Focused on company direction, client partnerships and the delivery standard behind MT Nexus Global.',
  },
  {
    name: 'Afzal',
    role: 'Co-Founder',
    image: '/afzal1.webp',
    description:
      'Focused on operations, execution and building systems that help projects move from idea to production.',
  },
];

const capabilities = [
  { label: 'Product strategy', icon: Target },
  { label: 'Experience design', icon: Layers3 },
  { label: 'Software engineering', icon: Code2 },
  { label: 'Delivery systems', icon: Workflow },
];

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] ${
        light ? 'text-[#77adf4]' : 'text-[#316da8]'
      }`}
    >
      <span className={`h-px w-8 ${light ? 'bg-[#316da8]' : 'bg-[#316da8]/45'}`} />
      {children}
    </div>
  );
}

function FloatingVisual({ reduceMotion }) {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#111827] shadow-[0_28px_90px_rgba(0,0,0,0.35)]"
      >
        <img
          src="/premium-home/process-discovery.webp"
          alt="A team collaborating on a digital product"
          loading="eager"
          fetchPriority="high"
          className="aspect-[4/3] h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,.02)_0%,rgba(17,24,39,.12)_55%,rgba(17,24,39,.45)_100%)]" />

        <div className="absolute left-5 top-5 border-l-2 border-blue-400 bg-[#102237]/85 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
          Product experience
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-md border border-white/15 bg-[#111827]/80 px-4 py-3 text-white backdrop-blur-xl">
          <div>
            <div className="text-[10px] text-white/55">MT Nexus approach</div>
            <div className="mt-1 text-sm font-semibold">Strategy · Design · Engineering</div>
          </div>
          <BadgeCheck size={18} className="text-[#3b82f6]" />
        </div>
      </motion.div>

    </div>
  );
}

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main
      className="min-h-screen overflow-x-clip bg-white text-[#111827]"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111827] text-white">
        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,.32),transparent_42%)]" />

        <motion.div
          className="relative mx-auto grid min-h-[620px] max-w-[1320px] items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.06fr_.94fr] lg:px-12 lg:pt-36"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72 }}
          >
            <Eyebrow light>About MT Nexus Global</Eyebrow>

            <h1 className="mt-7 max-w-[760px] text-[46px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[60px] lg:text-[76px]">
              We turn complex ideas into
              <span className="block text-[#77adf4]">clear digital products.</span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[16px] leading-8 text-slate-300 sm:text-[17px]">
              MT Nexus Global brings strategy, design and engineering together to help businesses
              build digital products that feel focused, useful and ready to scale.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#2563eb] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
              >
                Start a conversation
                <ArrowRight size={16} />
              </Link>

              <a
                href="#story"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Our story
              </a>
            </div>

            <div className="mt-14 grid gap-3 sm:grid-cols-2">
              {capabilities.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border-t border-white/[0.10] pt-4 text-sm text-white/70"
                >
                  <Icon size={16} className="text-[#3b82f6]" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <FloatingVisual reduceMotion={reduceMotion} />
        </motion.div>
      </section>

      {/* STORY */}
      <section id="story" className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1320px]">
          <motion.div
            {...fadeUp}
            className="grid gap-12 border-b border-slate-200 pb-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:pb-20"
          >
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="mt-7 max-w-xl text-[38px] font-medium leading-[1.06] tracking-[-0.045em] text-[#111827] sm:text-[52px] lg:text-[60px]">
                Built around better decisions, not more noise.
              </h2>
            </div>

            <div className="lg:pt-2">
              <p className="text-[21px] leading-9 tracking-[-0.015em] text-[#111827]">
                MT Nexus Global started with a shared interest in technology, product thinking and
                the systems behind good digital experiences.
              </p>

              <div className="mt-8 grid gap-7 border-t border-slate-200 pt-8 sm:grid-cols-2">
                <p className="text-[15px] leading-8 text-[#4b5563]">
                  As the work evolved, our focus became clearer: make digital projects easier to
                  understand, easier to manage and more useful to the businesses behind them.
                </p>
                <p className="text-[15px] leading-8 text-[#4b5563]">
                  Today, we keep strategy, design and engineering close together so the product
                  stays aligned from the first conversation through launch.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY / VISUAL */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 border-y border-slate-200">
        <div className="mx-auto grid max-w-[1320px] items-center gap-14 lg:grid-cols-[.96fr_1.04fr] lg:gap-20">
          <motion.div {...fadeUp}>
            <Eyebrow>How we think</Eyebrow>

            <h2 className="mt-7 max-w-[670px] text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[52px]">
              Design should make the product feel simpler, not louder.
            </h2>

            <p className="mt-7 max-w-[620px] text-[16px] leading-8 text-[#4b5563]">
              We focus on hierarchy, usability, system thinking and maintainable implementation.
              The visual layer matters, but it has to support the product rather than compete with it.
            </p>

            <div className="mt-10 space-y-5">
              {[
                'Clarity before complexity',
                'Systems before one-off screens',
                'Useful motion, not decorative motion',
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-4 border-t border-slate-200 pt-5">
                  <span className="text-[11px] font-semibold text-[#316da8]">0{index + 1}</span>
                  <span className="text-sm font-semibold text-[#111827]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="overflow-hidden rounded-lg bg-[#111827] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.15)]">
              <img
                src="/premium-home/technology-cloud.webp"
                alt="Technology infrastructure used in digital products"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-md object-cover"
              />
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 hidden w-[220px] rounded-md border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.08)] sm:block"
              whileHover={reduceMotion ? undefined : { y: -3 }}
            >
              <div className="text-[10px] font-semibold text-[#316da8]">PRODUCT PRINCIPLE</div>
              <div className="mt-2 text-sm font-semibold text-[#111827]">Useful beats flashy.</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#111827] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <Eyebrow light>What guides us</Eyebrow>
              <h2 className="mt-7 max-w-[780px] text-[38px] font-medium leading-[1.08] tracking-[-0.045em] sm:text-[52px]">
                A few principles that shape how we work.
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-8 text-slate-400 lg:justify-self-end">
              Good work depends on clear thinking, strong collaboration and ownership from start to finish.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/[0.10] bg-white/[0.10] md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  className="group bg-[#111827] p-7 transition-colors hover:bg-[#14243a] sm:p-8"
                >
                  <div className="relative -mx-7 -mt-7 mb-7 h-32 overflow-hidden border-b border-white/10 sm:-mx-8 sm:-mt-8 sm:mb-8">
                    <img
                      src={[
                        '/premium-home/product-design-photo.webp',
                        '/premium-home/process-discovery.webp',
                        '/premium-home/technology-data.webp',
                        '/premium-home/technology-cloud.webp',
                      ][index]}
                      alt={[
                        'Designers reviewing a product interface',
                        'Colleagues working together on a project',
                        'A real-world data and technology workspace',
                        'Cloud infrastructure equipment',
                      ][index]}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex w-[calc(100%-2rem)] items-center justify-between">
                      <Icon size={17} className="text-white" />
                      <span className="text-[10px] text-white/75">0{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="mt-0 text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1320px]">
          <motion.div {...fadeUp} className="grid gap-8 lg:grid-cols-[1fr_.55fr] lg:items-end">
            <div>
              <Eyebrow>Leadership</Eyebrow>
              <h2 className="mt-7 max-w-[720px] text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[52px]">
                Close to the work. Close to the client.
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-8 text-[#4b5563] lg:justify-self-end">
              Leadership stays involved in direction and delivery so important decisions remain visible.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {leadership.map((member) => (
              <motion.article
                key={member.name}
                {...fadeUp}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                className="group overflow-hidden rounded-lg border border-slate-200 border-t-2 border-t-[#3b82f6] bg-white shadow-[0_18px_48px_-34px_rgba(16,34,55,.48)] transition-all hover:border-blue-200 hover:border-t-[#3b82f6] hover:shadow-[0_24px_54px_-34px_rgba(16,34,55,.55)]"
              >
                <div className="grid sm:grid-cols-[.82fr_1.18fr]">
                  <div className="relative min-h-[330px] overflow-hidden bg-[#102237]">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full ${member.name === 'Sadiq' ? 'origin-bottom scale-[1.3] object-contain object-bottom px-5 pt-0 pb-0' : 'object-cover object-[center_28%]'}`}
                    />
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-8">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#316da8]">{member.role}</div>
                      <h3 className="mt-3 text-[32px] font-semibold tracking-[-0.045em] text-[#102237]">{member.name}</h3>
                      <p className="mt-5 text-sm leading-7 text-[#4b5563]">{member.description}</p>
                    </div>

                    <div className="mt-9 flex items-center gap-2 border-t border-slate-100 pt-5 text-[11px] text-[#64748b]">
                      <BadgeCheck size={14} className="text-[#2563eb]" />
                      MT Nexus Global
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 border-t border-slate-200">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:gap-20">
          <motion.div {...fadeUp}>
            <Eyebrow>Our presence</Eyebrow>
            <h2 className="mt-7 max-w-[620px] text-[38px] font-medium leading-[1.08] tracking-[-0.045em] text-[#111827] sm:text-[52px]">
              Built for collaboration across markets.
            </h2>
            <p className="mt-6 max-w-[580px] text-[15px] leading-8 text-[#4b5563]">
              MT Nexus Global is structured to work with clients across locations while keeping communication direct and delivery organized.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-3"
          >
            {[
              ['Global', 'Client reach', '/premium-home/global-reach-thumb.webp', 'City lights viewed from orbit'],
              ['Integrated', 'Delivery model', '/premium-home/partnership-thumb.webp', 'People collaborating at a table'],
              ['Focused', 'Product approach', '/premium-home/innovation-thumb.webp', 'A technology workspace'],
            ].map(([value, label, image, alt]) => (
              <div key={value} className="group bg-white">
                <div className="h-28 overflow-hidden border-b border-slate-200">
                  <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="text-xl font-semibold tracking-[-0.03em] text-[#111827]">{value}</div>
                  <div className="mt-2 text-sm text-[#4b5563]">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-20 pt-10 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-[1320px] gap-8 rounded-lg bg-[#111827] p-8 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12 shadow-xl border border-slate-800"
        >
          <div>
            <Eyebrow light>Start a conversation</Eyebrow>
            <h2 className="mt-5 max-w-[760px] text-3xl font-medium leading-[1.10] tracking-[-0.035em] sm:text-4xl lg:text-[48px]">
              Have a digital product or business challenge worth solving?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-[#2563eb] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
