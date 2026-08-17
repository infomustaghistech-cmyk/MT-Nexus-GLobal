import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import videoBg from '../assets/15254965_1920_1080_24fps-optimized-v2.mp4';
import videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';
import LazyVideo from '../Componenet/LazyVideo'; 

const Portfolio = () => {
  const navigate = useNavigate();
  const [allProjects, setAllProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (!error) setAllProjects(data || []);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const categories = [
    { name: 'ALL', path: null }, 
    { name: 'WEBSITES', path: '/projects/website' },
    { name: 'APPS', path: '/projects/app' },
    { name: 'WORDPRESS', path: '/projects/wordpress' },
    { name: 'SHOPIFY', path: '/projects/shopify' },
    { name: 'VIDEOS', path: '/projects/video' },
    { name: 'GRAPHIC', path: '/projects/graphic' }
  ];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.name);
    if (cat.path) navigate(cat.path);
  };

  const projectList = activeCategory === 'ALL' 
    ? allProjects 
    : allProjects.filter(p => p.category.toUpperCase() === activeCategory);

  return (
    // FIX: Removed solid bg-[#050505] from the main wrapper
    <div className="relative text-white min-h-screen font-sans px-4 py-8 md:py-16 overflow-hidden">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span>
        </button>
      </div>
      
      {/* ─── FIXED VIDEO BACKGROUND (FIXED LAYER STACKING) ─── */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-black">
        <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
      </div>

      {/* ─── HEADER ─── */}
      <div className="text-center mb-12 relative z-10 pt-10">
        <motion.h4 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-cyan-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">
          Our Portfolio
        </motion.h4>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-3xl md:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WORKS</span>
        </motion.h1>
      </div>

      {/* ─── TABS ─── */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryClick(cat)}
            className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border backdrop-blur-md ${activeCategory === cat.name ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(79,209,197,0.4)]' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* ─── PROJECTS GRID ─── */}
      {isLoading ? (
        <div className="flex justify-center items-center h-40">
           <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode='popLayout'>
            {projectList.map((project) => (
              <motion.div
                layout key={project.id}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
                className="group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0f1d] backdrop-blur-xl shadow-2xl cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(34,211,238,0.15)]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full aspect-square bg-[#0a0a0a] overflow-hidden">
                  {/* Using aspect-square and object-cover to make the square images fit perfectly and fill the card */}
                  <img src={project.img} alt={project.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                
                <div className="flex flex-1 flex-col p-6 pt-5 bg-gradient-to-t from-[#050816] to-[#0a0f1d]">
                  <span className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">{project.name}</h3>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 transition group-hover:gap-3 group-hover:text-cyan-300">
                    View Case Study
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* ─── PREMIUM MODAL WITH LIVE URL BUTTON ─── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0a0a0a] w-full max-w-6xl rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center z-[110] bg-white/10 hover:bg-white/20 text-white rounded-full transition-all">✕</button>
              
              <div className="flex flex-col md:flex-row h-[80vh] md:h-[75vh]">
                
                {/* Left: Swiper Image Gallery */}
                <div className="w-full md:w-2/3 bg-[#050505] relative flex items-center justify-center">
                  <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop={true} className="h-full w-full">
                    <SwiperSlide>
                      <img src={selectedProject.img} loading="lazy" className="w-full h-full object-contain p-4" alt="Main" />
                    </SwiperSlide>
                    {selectedProject.workImages?.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={img} loading="lazy" className="w-full h-full object-contain p-4" alt={`Gallery ${idx}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                
                {/* Right: Project Details & Buttons */}
                <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col border-l border-white/10 bg-[#0f0f0f] relative overflow-hidden">
                  
                  <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-widest mb-2">{selectedProject.category}</span>
                  <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{selectedProject.name}</h3>
                  <div className="h-[2px] w-12 bg-blue-500 mb-6" />
                  
                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-wrap">{selectedProject.desc}</p>
                  </div>
                  
                  {/* ─── ACTION BUTTONS ─── */}
                  <div className="mt-8 flex flex-col gap-3">
                    
                    {/* Live URL Button */}
                    {selectedProject.project_url && selectedProject.project_url.trim() !== '' && (
                      <a href={selectedProject.project_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold tracking-wide text-sm transition-all shadow-lg shadow-blue-500/20">
                        VISIT LIVE SITE
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    )}
                    
                    {/* Request Project Button */}
                    <a href="/contact" className="text-center block w-full py-4 rounded-xl bg-[#1a1a1a] hover:bg-[#222] text-white font-bold tracking-wide text-sm transition-all border border-white/5">
                      REQUEST SIMILAR PROJECT
                    </a>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;