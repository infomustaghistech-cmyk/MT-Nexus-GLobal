import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Youtube, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <footer className="relative bg-[#162c54] text-white flex flex-col border-t border-[#2a457a] overflow-hidden pt-16 md:pt-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col h-full">
        
        <div className="flex-1 flex items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 w-full">

          {/* ─── Left Section: Brand & Newsletter (Takes up 5 cols) ─── */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-6 group">
                <h2 className="text-4xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 group-hover:to-cyan-400 transition-all duration-500">
                  MT Nexus <span className="text-cyan-400">Global</span>
                </h2>
              </Link>
              <p className="text-white text-base font-light leading-relaxed max-w-sm mb-10">
                Turning ideas into complete digital solutions. We craft premium digital experiences that drive results, scale businesses, and dominate the modern web.
              </p>
            </div>

            {/* Premium Newsletter Box */}
            <div className="bg-white/[0.02] border border-white/[0.08] p-6 rounded-2xl backdrop-blur-md max-w-sm relative group overflow-hidden">
              {/* Subtle hover glow on the box */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 text-base font-bold mb-2 font-mono tracking-widest uppercase">Stay Updated</h3>
              <p className="text-sm text-white mb-4">Get the latest insights and digital trends.</p>

              <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <button type="submit" className="absolute right-2 p-1.5 bg-white/10 hover:bg-cyan-500 rounded-lg text-white hover:text-black transition-all duration-300">
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* ─── Right Section: Links (Takes up 7 cols) ─── */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* Products Column */}
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">Our Services</h3>
              <ul className="space-y-4">
                {footerData.Products.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="group flex items-center text-base text-white hover:text-cyan-400 transition-colors duration-300">
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out inline-block text-cyan-400">▹</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8">Company</h3>
              <ul className="space-y-4">
                {footerData.Company.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} className="group flex items-center text-base text-white hover:text-cyan-400 transition-colors duration-300">
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out inline-block text-cyan-400">▹</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social Column */}
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 mb-8">Get In Touch</h3>
              <ul className="space-y-4 text-base text-white">
                <li>
                  <a href="mailto:hello@mtnexus.com" className="hover:text-cyan-400 transition-colors">hello@mtnexus.com</a>
                </li>
                <li>
                  <a href="tel:+923262927567" className="hover:text-cyan-400 transition-colors">+92 326 2927567</a>
                </li>
                <li className="pt-2">
                  <span className="block text-sm uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">Follow Us</span>
                  <div className="flex items-center gap-4">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300">
                      <Instagram size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300">
                      <Linkedin size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-300">
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
        <div className="pb-10 w-full">
          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-mono">
            &copy; {new Date().getFullYear()} MT Nexus Global. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-sm text-white hover:text-cyan-400 transition-colors cursor-pointer">Designed & Developed with Passion</p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;