import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Youtube, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from '../Componenet/BrandLogo';

const Footer = () => {
  const footerData = {
    Products: [
      { name: "Web Customization", path: "/services/web_customization" },
      { name: "App Development", path: "/services/app_customization" },
      { name: "Shopify Stores", path: "/services/shopify" },
      { name: "WordPress Solutions", path: "/services/wordpress" },
      { name: "Graphic Design", path: "/services/graphic-design" },
      { name: "Video Editing", path: "/services/video-editing" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Portfolio", path: "/projects" },
      { name: "Client Feedback", path: "/feedback" },
      { name: "Contact Support", path: "/contact" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
    ],
  };

  return (
    <footer className="relative bg-[#030712] text-white flex flex-col border-t border-white/[0.08] overflow-hidden pt-16 md:pt-20">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full">
        <div className="flex-1 flex items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-8 w-full">

            {/* ─── Left Section: Brand & Newsletter ─── */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <Link to="/" aria-label="Nexus Global home" className="inline-block mb-6 group">
                  <BrandLogo variant="footer" />
                </Link>
                <p className="text-slate-400 text-sm md:text-base font-normal leading-relaxed max-w-sm mb-10">
                  Turning ideas into complete digital solutions. We craft premium digital experiences that drive results, scale businesses, and dominate the modern web.
                </p>
              </div>

              {/* Newsletter Box */}
              <div className="bg-[#070b14] border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md max-w-sm relative group overflow-hidden">
                <h3 className="text-blue-400 text-xs font-semibold mb-2 font-mono tracking-widest uppercase">
                  Stay Updated
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Get the latest insights and digital trends.
                </p>

                <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-[#030712] border border-white/10 rounded-xl py-2.5 px-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 p-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-all duration-200"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={15} />
                  </button>
                </form>
              </div>
            </div>

            {/* ─── Right Section: Links ─── */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

              {/* Products Column */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                  Our Services
                </h3>
                <ul className="space-y-3.5">
                  {footerData.Products.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 ease-out inline-block text-blue-400">▹</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                  Company
                </h3>
                <ul className="space-y-3.5">
                  {footerData.Company.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200 ease-out inline-block text-blue-400">▹</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Social Column */}
              <div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-6">
                  Get In Touch
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-400">
                  <li>
                    <a href="mailto:mtnexusglobal@gmail.com" className="hover:text-white transition-colors">mtnexusglobal@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://wa.me/923262927567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+92 326 2927567</a>
                  </li>
                  <li className="pt-2">
                    <span className="block text-xs uppercase font-mono tracking-widest text-slate-400 mb-3">Follow Us</span>
                    <div className="flex items-center gap-3">
                      <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-200" aria-label="Instagram">
                        <Instagram size={14} />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-200" aria-label="LinkedIn">
                        <Linkedin size={14} />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-200" aria-label="Twitter">
                        <Twitter size={14} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="pb-10 pt-12 w-full">
          <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} MT Nexus Global. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-xs text-slate-500 hover:text-slate-400 transition-colors cursor-pointer">Designed & Developed with Passion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
