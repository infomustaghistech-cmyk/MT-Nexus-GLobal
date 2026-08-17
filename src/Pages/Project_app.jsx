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

const Projact_app = () => {
  const navigate = useNavigate();
  const [appProjects, setAppProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null); // Modal State

  const categories = [
    { name: 'ALL', path: '/projects' },
    { name: 'WEBSITES', path: '/projects/website' },
    { name: 'APPS', path: '/projects/app' },
    { name: 'WORDPRESS', path: '/projects/wordpress' },
    { name: 'SHOPIFY', path: '/projects/shopify' },
    { name: 'VIDEOS', path: '/projects/video' },
    { name: 'GRAPHIC', path: '/projects/graphic' }
  ];

  useEffect(() => {
    const fetchAppProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .ilike('category', '%App%')
        .order('created_at', { ascending: false });

      if (!error) setAppProjects(data || []);
      setIsLoading(false);
    };

    fetchAppProjects();
  }, []);

  const handleCategoryClick = (cat) => {
    if (cat.path) navigate(cat.path);
  };

  return (
    <div className="relative text-white min-h-screen font-sans px-4 py-8 md:py-16 overflow-hidden">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span>
        </button>
      </div>
      
      {/* Background Video with Cinematic Overlay */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#0a0a0a]">
        <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#0a0a0a]" />
      </div>

      <div className="text-center mb-12 relative z-10 pt-10">
        <motion.h4 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-cyan-500 text-sm font-bold tracking-[0.3em] uppercase mb-4">
          Our Portfolio
        </motion.h4>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-3xl md:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          MOBILE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">APPS</span>
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryClick(cat)}
            className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border backdrop-blur-md ${ cat.name === 'APPS' ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : 'bg-white/5 text-white border-white/10 hover:bg-white/10' }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
           <div className="w-10 h-10 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode='popLayout'>
            {appProjects.length > 0 ? (
              appProjects.map((project, index) => (
                <motion.div
                  layout key={project.id || index}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
                  className="relative group h-auto md:h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl border border-white/10 bg-black"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="absolute inset-0 z-0">
                    <img src={project.img} alt={project.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-colors duration-500" />
                  </div>
                  
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mb-6">{project.desc}</p>
                    <div className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold text-black">VIEW DETAILS</div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 md:py-24 border-2 border-dashed border-white/5 rounded-3xl backdrop-blur-md">
                <p className="text-gray-400 italic text-xl">No App projects found in your portfolio yet.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ─── PROJECT DETAILS MODAL ─── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0a0a0a] w-full max-w-6xl rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] border border-white/10"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all">✕</button>
              
              <div className="flex flex-col md:flex-row h-[80vh] md:h-[75vh]">
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
                
                <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col border-l border-white/10 bg-[#0f0f0f] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
                  <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">{selectedProject.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.name}</h3>
                  <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-600 mb-8" />
                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base whitespace-pre-wrap">{selectedProject.desc}</p>
                  </div>
                  
                  {/* Buttons Section */}
                  <div className="mt-8 flex flex-col gap-3">
                    {/* Live URL Button - Only shows if URL exists */}
                    {selectedProject.project_url && (
                      <a href={selectedProject.project_url} target="_blank" rel="noopener noreferrer" className="text-center block w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold uppercase tracking-widest text-xs transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        Live Preview ↗
                      </a>
                    )}
                    {/* Default Contact Button */}
                    <a href="/contact" className="text-center block w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-xs transition-all border border-white/10">
                      Request Similar App
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

export default Projact_app;