import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const trustItems = [
  { icon: BadgeCheck, label: 'Clear project scoping' },
  { icon: MessageSquare, label: 'Direct communication' },
  { icon: ShieldCheck, label: 'No commitment required' },
];

const ease = [0.22, 1, 0.36, 1];

const CTABanner = () => {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 border-t border-slate-100">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease }}
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[28px] border border-slate-800 bg-[#111827] shadow-[0_24px_70px_rgba(17,24,39,0.18)]"
      >
        {/* Background treatment */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(37,99,235,.15),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:76px_76px]" />

        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16 lg:p-14">
          {/* Copy */}
          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.2 }}
              className="inline-flex items-center gap-3 text-[11px] font-semibold tracking-[0.08em] text-[#2dd4bf]"
            >
              <span className="h-px w-8 bg-[#0d9488]" />
              Start a project
            </motion.div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="mt-6 max-w-[860px] text-[34px] font-medium leading-[1.06] tracking-[-0.045em] text-white sm:text-[46px] lg:text-[56px]"
            >
              Have a digital product or business challenge worth solving?
            </motion.h2>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease, delay: 0.4 }}
              className="mt-5 max-w-[720px] text-[15px] leading-8 text-slate-300 sm:text-[16px]"
            >
              Tell us what you're building. We'll help define the right strategy,
              design direction and technical approach to move it forward.
            </motion.p>
          </div>

          {/* CTA actions */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.35 }}
            className="flex flex-col items-stretch gap-3 sm:flex-row lg:min-w-[230px] lg:flex-col"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition duration-300 hover:bg-[#1d4ed8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
              >
                Start a conversation
                <ArrowRight size={16} strokeWidth={1.8} />
              </Link>
            </motion.div>

            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              Contact us directly
            </Link>
          </motion.div>
        </div>

        {/* Trust strip — staggered */}
        <div className="relative border-t border-white/[0.08]">
          <div className="grid sm:grid-cols-3">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease, delay: 0.1 + index * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  className={`flex items-center gap-3 px-7 py-5 sm:px-8 ${
                    index !== trustItems.length - 1
                      ? 'border-b border-white/[0.08] sm:border-b-0 sm:border-r'
                      : ''
                  }`}
                >
                  <motion.span
                    whileHover={{ scale: 1.25, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <Icon size={16} strokeWidth={1.7} className="shrink-0 text-[#2dd4bf]" />
                  </motion.span>
                  <span className="text-[12px] font-medium text-slate-300">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
