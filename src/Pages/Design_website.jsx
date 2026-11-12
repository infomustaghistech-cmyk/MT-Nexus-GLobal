import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../Componenet/Navbar';

const Design_website = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navebar />

    <div className="relative min-h-[150vh] bg-[#0a0a0a] overflow-x-hidden font-serif">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span>
        </button>
      </div>
      
      {/* 1. Static Background (Pots/Ceramics) */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=2000" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>
      </div>

      {/* 2. Top Hero Text (Scrolls away) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-32 pb-60 text-center"
      >
        <span className="text-white/60 text-xs tracking-[0.4em] uppercase mb-4 block">Websites</span>
        <h1 className="text-white text-4xl md:text-7xl md:text-8xl font-light leading-tight tracking-tighter">
          The leader in <br /> website design
        </h1>
      <Link to="/get-started">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-white text-black px-12 py-4 font-sans font-bold text-[10px] uppercase tracking-[0.2em]"
        >
          Get Started
        </motion.button>
      </Link>
      </motion.div>

      {/* 3. The "Terha" Screen Section (Video Style UX) */}
      <div className="relative z-20 flex justify-center pb-40 px-4">
        <motion.div 
          initial={{ rotateX: 20, y: 100, opacity: 0 }}
          whileInView={{ rotateX: 10, y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl"
        >
          {/* Main Card */}
          <div className="bg-[#43362d] rounded-[2rem] shadow-[0_60px_100px_rgba(0,0,0,0.9)] overflow-hidden border border-white/5">
            
            {/* Nav inside the card */}
            <div className="flex justify-between items-center px-4 md:px-10 py-8 border-b border-white/10">
              <span className="text-white text-2xl italic tracking-tighter">Ceramix</span>
              <div className="flex gap-8 text-[10px] text-white/60 uppercase tracking-widest">
                <span className="hover:text-white cursor-pointer transition">Work</span>
                <span className="hover:text-white cursor-pointer transition">About</span>
                <button className="border border-white/30 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
                  Contact
                </button>
              </div>
            </div>

            {/* Services Content */}
            <div className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white text-4xl md:text-6xl italic"
              >
                Services
              </motion.h2>

              <div className="space-y-2">
                {['Commissions', 'Workshops', 'Studio Share'].map((text, i) => (
                  <motion.div 
                    key={text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="group flex justify-between items-center py-8 border-b border-white/10 cursor-pointer"
                  >
                    <span className="text-white/80 text-sm tracking-[0.3em] uppercase group-hover:text-white group-hover:pl-4 transition-all duration-300">
                      {text}
                    </span>
                    <span className="text-white text-3xl font-light">+</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Video-style play icon */}
            <div className="px-4 md:px-10 py-6 bg-black/10 flex justify-end">
               <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Floating Navigation (Video Style) */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 md:px-10 py-5 flex gap-4 md:gap-10 shadow-2xl"
      >
        {['Templates', 'Design Intelligence', 'Creative Tools', 'SEO & Analytics'].map((item) => (
          <span key={item} className="text-[9px] text-white/50 uppercase tracking-[0.2em] font-sans font-bold cursor-pointer hover:text-white transition">
            {item}
          </span>
        ))}
      </motion.div>

    </div>
                    </div>
  );
};

export default Design_website;