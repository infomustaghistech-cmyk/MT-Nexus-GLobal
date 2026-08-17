import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <>
      <style>{`
        .btn-primary-cta {
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
        .btn-primary-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #22d3ee, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(34,211,238, 0.4);
          color: white;
        }
        .btn-primary-cta:hover::before { opacity: 1; }
        .btn-primary-cta span, .btn-primary-cta svg { position: relative; z-index: 1; }

        .section-label-cta {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 700;
        }
        .section-label-cta::before {
          content: '';
          display: inline-block;
          width: 40px;
          height: 1px;
          opacity: 0.5;
        }
        .font-serif-accent { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
      <section className="py-10 md:py-20 sm:py-32 px-4 bg-[#050816]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center border border-white/[0.08] hover:border-cyan-400/40 rounded-3xl p-4 md:p-10 sm:p-20 relative overflow-hidden bg-white/[0.02] backdrop-blur-xl shadow-2xl hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500 group"
        >
          {/* Soft background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-all duration-500 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <div className="section-label-cta text-cyan-400 before:bg-cyan-400 justify-center mb-6 sm:mb-8">Ready to Begin?</div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              Let's Build Something<br />
              <em className="font-serif-accent font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">Extraordinary</em>
            </h2>
            <p className="text-white/50 text-sm sm:text-base font-medium mb-10 max-w-md mx-auto leading-relaxed">
              Share your vision with us. We'll handle the rest — from concept to launch.
            </p>
            <motion.div whileTap={{ scale: 0.95 }} className="inline-block w-full sm:w-auto">
              <Link to="/contact" className="btn-primary-cta w-full sm:w-auto justify-center touch-target">
                <span>Get Free Consultation</span>
                <ArrowRight size={14} className="relative z-10" />
              </Link>
            </motion.div>
            <p className="mt-6 text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 uppercase font-mono font-semibold">
              No commitment required
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default CTABanner;
