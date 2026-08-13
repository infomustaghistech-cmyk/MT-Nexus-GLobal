import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4';
import { supabase } from '../supabaseClient';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projact_graphic = () => {
  const navigate = useNavigate();
  const [graphicProjects, setGraphicProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

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
    const fetchGraphicProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .ilike('category', '%Graphic%')
        .order('created_at', { ascending: false });

      if (!error) setGraphicProjects(data || []);
      setIsLoading(false);
    };

    fetchGraphicProjects();
  }, []);

  const handleCategoryClick = (cat) => {
    if (cat.path) navigate(cat.path);
  };

  return (
    // FIX: Removed solid bg color
    <div className="relative text-white min-h-screen font-sans px-4 py-16 overflow-hidden">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span> GO BACK
        </button>
      </div>
      
      {/* Background Video with Cinematic Overlay */}
      <div className="fixed inset-0 -z-10 w-full h-full bg-[#0a0a0a]">
        <video src={videoBg} playsInline autoPlay muted loop className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#0a0a0a]" />
      </div>

      <div className="text-center mb-12 relative z-10 pt-10">
        <motion.h4 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-purple-400 text-sm font-bold tracking-[0.3em] uppercase mb-4">
          Creative Designs
        </motion.h4>
        <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase">
          Graphic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500">Artistry</span>
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryClick(cat)}
            className={`px-8 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border backdrop-blur-md ${
              cat.name === 'GRAPHIC' 
                ? 'bg-purple-500 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]' 
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
           <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          <AnimatePresence mode='popLayout'>
            {graphicProjects.length > 0 ? (
              graphicProjects.map((project, index) => (
                <motion.div
                  layout key={project.id || index}
                  initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.img} alt={project.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="h-[2px] w-8 bg-purple-500"></span>
                      <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.desc}
                    </p>
                    <div className="mt-4 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      View Design ⟶
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-24 border-2 border-dashed border-white/5 rounded-3xl backdrop-blur-md">
                <p className="text-gray-500 text-lg">Your Graphic Canvas is empty. Add projects from Admin panel.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* MODAL SECTION */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0a0a0a] w-full max-w-6xl rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-white/10"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-purple-500 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all">✕</button>
              
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
                  <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
                  <span className="text-purple-400 font-bold text-xs uppercase tracking-widest mb-2">{selectedProject.category}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{selectedProject.name}</h3>
                  <div className="h-[2px] w-16 bg-gradient-to-r from-purple-400 to-blue-600 mb-8" />
                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base whitespace-pre-wrap">{selectedProject.desc}</p>
                  </div>
                  <a href="/contact" className="mt-8 text-center block w-full py-4 rounded-xl bg-white/5 hover:bg-purple-500 text-white hover:text-white font-bold uppercase tracking-widest text-xs transition-all border border-white/10 hover:border-purple-400">
                    Request Graphic Design
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projact_graphic;