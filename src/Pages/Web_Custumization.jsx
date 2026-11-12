import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import videoBg from '@/assets/15254965_1920_1080_24fps-optimized-v2.mp4';
import videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';
import LazyVideo from '../Componenet/LazyVideo';

const WebsiteCustomization = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 font-sans relative text-white">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#030712]">
        <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/90 via-[#030712]/75 to-[#030712]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="relative z-50 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#070b14]/80 px-3.5 py-2 text-xs font-medium tracking-wide text-slate-300 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
            aria-label="Go Back"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </div>

        {/* Main Content Card */}
        <div className="p-8 md:p-12 lg:p-16 rounded-2xl border border-white/[0.08] bg-[#070b14]/90 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 block mb-3">
              Engineering Services
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Website Customization
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Requirements */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                To transform your existing website into a modern, high-performance platform, we require specific details. Please follow the instructions below to ensure a seamless and efficient start to your project:
              </p>

              <ul className="space-y-4 pt-2">
                {[
                  "Website Access: Admin credentials (WordPress/Shopify) or Hosting/CPanel access.",
                  "Design Inspiration: Links or references to websites that match your vision.",
                  "Feature Specification: A detailed list of new functionalities or changes required.",
                  "Brand Assets: Your logo, preferred color palette, and high-quality images.",
                  "Project Timeline: Your expected deadline or launch date."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-slate-200 text-sm md:text-base leading-relaxed">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Advisory Callout */}
            <div className="md:col-span-5 p-8 lg:p-10 rounded-xl border border-white/10 bg-[#091020] border-l-4 border-l-blue-500 shadow-xl flex flex-col justify-center">
              <h3 className="font-semibold text-white text-xl md:text-2xl mb-4 tracking-tight">
                Important Instructions
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "We strongly recommend taking a complete backup of your current website before we begin the customization process. Clear communication and detailed instructions help us deliver your project faster and with maximum precision."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCustomization;
