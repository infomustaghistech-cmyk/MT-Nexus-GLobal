import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/WhatsApp_Image_2026-03-10_at_2.06.44_AM-removebg-preview.png';

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

  const navLinkClass = "text-[11px] font-bold tracking-[0.2em] text-white uppercase hover:text-cyan-400 transition-all duration-300 relative cursor-pointer";

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg py-0' : 'bg-transparent py-2'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="z-[60]">
            <img src={logo} alt="MT Nexus" className="h-28 md:h-32 mt-2 object-contain" />
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
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.25 }}
                    className="absolute top-full -left-20 w-[450px] bg-[#111111]/95 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl grid grid-cols-2 gap-4"
                  >
                    {serviceLinks.map((item, idx) => (
                      <Link key={idx} to={item.route} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="text-white text-[10px] font-bold group-hover:text-cyan-400 uppercase tracking-wider transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[9px] text-gray-500 uppercase tracking-tighter">View Details</div>
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
                    initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.25 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl grid grid-cols-3 gap-4"
                  >
                    {portfolioCategories.map((item, idx) => (
                      <Link key={idx} to={item.route} className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="text-white text-[10px] font-bold group-hover:text-cyan-400 uppercase tracking-wider transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[9px] text-gray-500 uppercase tracking-tighter">View Details</div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/technologies" onClick={(e) => handleScrollToSection(e, '/technologies', 'technologies')} className={navLinkClass}>TECHNOLOGIES</Link>
            <Link to="/seo" onClick={(e) => handleScrollToSection(e, '/seo', 'seo')} className={navLinkClass}>SEO</Link>
            <Link to="/blogs" onClick={(e) => handleScrollToSection(e, '/blogs', 'blogs')} className={navLinkClass}>BLOGS</Link>
            <Link to="/feedback" className={navLinkClass}>FEEDBACK</Link>
            <Link to="/about" className={navLinkClass}>ABOUT</Link>
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
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[45] bg-[#0a0a0a] pt-28 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Home</Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                  className="w-full flex justify-between items-center text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4"
                >
                  Services
                  <span className={`text-cyan-400 transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'services' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-4 pl-4">
                      {serviceLinks.map((item, idx) => (
                        <Link key={idx} to={item.route} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-bold uppercase tracking-widest">{item.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Portfolio Accordion */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'portfolio' ? null : 'portfolio')}
                  className="w-full flex justify-between items-center text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4"
                >
                  Projects
                  <span className={`text-cyan-400 transition-transform ${mobileDropdown === 'portfolio' ? 'rotate-180' : ''}`}>▼</span>
                </button>
                <AnimatePresence>
                  {mobileDropdown === 'portfolio' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-4 pl-4">
                      {portfolioCategories.map((item, idx) => (
                        <Link key={idx} to={item.route} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                          <span className="text-xl">{item.icon}</span>
                          <span className="text-sm font-bold uppercase tracking-widest">{item.title}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/technologies" onClick={(e) => handleScrollToSection(e, '/technologies', 'technologies')} className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Technologies</Link>
              <Link to="/seo" onClick={(e) => handleScrollToSection(e, '/seo', 'seo')} className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">SEO</Link>
              <Link to="/blogs" onClick={(e) => handleScrollToSection(e, '/blogs', 'blogs')} className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Blogs</Link>
              <Link to="/feedback" className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">Feedback</Link>
              <Link to="/about" className="text-2xl font-bold text-white uppercase tracking-widest border-b border-white/10 pb-4">About</Link>
              
              <Link to="/contact" className="pt-4">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-7 py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;