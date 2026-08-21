import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/LOGO_MT.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // 'services' or 'portfolio'

  const location = useLocation();
  const navigate = useNavigate();

  // Handle Scroll to change Navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  const serviceLinks = [
    { title: "Web Customization", route: "/services/web_customization", icon: "🌐" },
    { title: "App Development", route: "/services/app_customization", icon: "📱" },
    { title: "Graphic Design", route: "/services/graphic-design", icon: "🎨" },
    { title: "WordPress Solutions", route: "/services/wordpress", icon: "📝" },
    { title: "Video Editing", route: "/services/video-editing", icon: "🎬" },
    { title: "Shopify Stores", route: "/services/shopify", icon: "🛍️" },
  ];

  const portfolioCategories = [
    { title: 'Websites', route: '/projects/website', icon: "💻" },
    { title: 'Apps', route: '/projects/app', icon: "📲" },
    { title: 'Wordpress', route: '/projects/wordpress', icon: "✒️" },
    { title: 'Shopify', route: '/projects/shopify', icon: "🛒" },
    { title: 'Videos', route: '/projects/video', icon: "🎥" },
    { title: 'Graphic', route: '/projects/graphic', icon: "🖼️" }
  ];

  const navLinkClass = "text-[12px] font-extrabold tracking-[0.2em] text-white uppercase hover:text-cyan-400 transition-all duration-300 relative cursor-pointer drop-shadow-sm";

  const handleScrollToSection = (e, path, sectionId) => {
    setIsMobileMenuOpen(false);
    setMobileDropdown(null);

    if (location.pathname === '/' || location.pathname === path) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    navigate(path);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-0 h-16' : 'bg-transparent py-2 h-24'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="z-[60] flex items-center h-full">
            <img src={logo} alt="MT Nexus" className={`object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-500 cursor-pointer ${isScrolled ? 'h-12' : 'h-28 md:h-32'}`} fetchPriority="high" />
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden lg:flex text-[14px] items-center font-bold space-x-10">
            <Link to="/" className={navLinkClass}>HOME</Link>

            {/* Services Dropdown */}
            <div
              className="relative py-7"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className={`${navLinkClass} flex items-center gap-1`}>
                SERVICES
                <span className={`text-[8px] transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-cyan-400' : ''}`}>▼</span>
              </Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full -left-10 w-full md:w-[550px] bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {/* Decorative Top Arrow */}
                    <div className="absolute -top-2 left-24 w-4 h-4 bg-[#0a0a0a] border-t border-l border-white/10 transform rotate-45"></div>
                    
                    {serviceLinks.map((item, idx) => (
                      <Link key={idx} to={item.route} className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-cyan-400/30 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#111] border border-white/10 group-hover:border-cyan-400/50 shadow-inner group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                          <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        </div>
                        <div className="relative z-10 flex flex-col justify-center">
                          <div className="text-white text-[12px] font-bold group-hover:text-cyan-400 uppercase tracking-widest transition-colors duration-300">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-gray-400 group-hover:text-gray-200 mt-1 uppercase tracking-wider transition-colors duration-300 flex items-center gap-1">
                            Explore <span className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Portfolio Dropdown */}
            <div
              className="relative py-7"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <Link to="/projects" className={`${navLinkClass} flex items-center gap-1`}>
                PROJECTS
                <span className={`text-[8px] transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180 text-cyan-400' : ''}`}>▼</span>
              </Link>

              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-full md:w-[750px] bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                  >
                     {/* Decorative Top Arrow */}
                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0a0a] border-t border-l border-white/10 transform rotate-45"></div>
                    
                    {portfolioCategories.map((item, idx) => (
                      <Link key={idx} to={item.route} className="group relative flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-cyan-400/30 transition-all duration-300 overflow-hidden hover:-translate-y-1">
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        
                        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#111] border border-white/10 group-hover:border-cyan-400/50 shadow-inner group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                          <span className="text-2xl drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        </div>
                        <div className="relative z-10 flex flex-col justify-center">
                          <div className="text-white text-[12px] font-bold group-hover:text-cyan-400 uppercase tracking-widest transition-colors duration-300">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-gray-400 group-hover:text-gray-200 mt-1 uppercase tracking-wider transition-colors duration-300 flex items-center gap-1">
                            Explore <span className="text-cyan-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/technologies" onClick={(e) => handleScrollToSection(e, '/technologies', 'technologies')} className={`${navLinkClass} ${location.pathname === '/technologies' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`}>TECHNOLOGIES</Link>

            <Link to="/blogs" onClick={(e) => handleScrollToSection(e, '/blogs', 'blogs')} className={`${navLinkClass} ${location.pathname === '/blogs' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`}>BLOGS</Link>
            <Link to="/feedback" className={`${navLinkClass} ${location.pathname === '/feedback' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`}>FEEDBACK</Link>
            <Link to="/about" className={`${navLinkClass} ${location.pathname === '/about' ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : ''}`}>ABOUT</Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-3 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden z-[60] flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-8 h-0.5 bg-cyan-400 transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-8 h-0.5 bg-white transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[45] bg-[#0a0a0a]/95 backdrop-blur-xl pt-28 px-6 pb-6 overflow-y-auto no-scrollbar"
          >
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-col space-y-6"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/" className={`block w-full text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname === '/' ? 'text-cyan-400' : 'text-white'}`}>Home</Link>
              </motion.div>

              {/* Mobile Services Accordion */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                  className={`w-full flex justify-between items-center text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname.startsWith('/services') ? 'text-cyan-400' : 'text-white'}`}
                >
                  Services
                  <span className={`text-cyan-400 transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'services' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-4 pl-4">
                      {serviceLinks.map((item, idx) => (
                        <Link key={idx} to={item.route} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 py-2 touch-target">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-bold uppercase tracking-widest">{item.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Mobile Portfolio Accordion */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === 'portfolio' ? null : 'portfolio')}
                  className={`w-full flex justify-between items-center text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname.startsWith('/projects') ? 'text-cyan-400' : 'text-white'}`}
                >
                  Projects
                  <span className={`text-cyan-400 transition-transform ${mobileDropdown === 'portfolio' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'portfolio' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-4 pl-4">
                      {portfolioCategories.map((item, idx) => (
                        <Link key={idx} to={item.route} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 py-2 touch-target">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-bold uppercase tracking-widest">{item.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/technologies" onClick={(e) => handleScrollToSection(e, '/technologies', 'technologies')} className={`block w-full text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname === '/technologies' ? 'text-cyan-400' : 'text-white'}`}>Technologies</Link>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/blogs" onClick={(e) => handleScrollToSection(e, '/blogs', 'blogs')} className={`block w-full text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname === '/blogs' ? 'text-cyan-400' : 'text-white'}`}>Blogs</Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/feedback" className={`block w-full text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname === '/feedback' ? 'text-cyan-400' : 'text-white'}`}>Feedback</Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link to="/about" className={`block w-full text-2xl font-bold uppercase tracking-widest border-b border-white/10 py-4 ${location.pathname === '/about' ? 'text-cyan-400' : 'text-white'}`}>About</Link>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pt-4">
                <Link to="/contact" className="block">
                  <motion.button whileTap={{ scale: 0.95 }} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase touch-target">
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;