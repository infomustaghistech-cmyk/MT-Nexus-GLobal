import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navebar from '../Componenet/Navbar';

const Template = () => {
  const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState(['Online Store']);

  const templates = [
    { id: 1, name: 'Saville', tag: 'Easygoing Style, Everyday Comfort.', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800' },
    { id: 2, name: 'Banyan', tag: 'Effortless style for every laid-back moment', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800' },
    { id: 3, name: 'Mariner', tag: 'Wear Your Moment', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800' }
  ];

  return (
    <div>
      <Navebar />
    
    <div className="min-h-screen bg-[#FDFDFD] text-[#121212] font-sans relative">
      {/* Dark gradient overlay for white Navbar visibility */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-[45]" />

      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-20 md:mt-24 px-6 md:px-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-bold tracking-wider transition-colors bg-white/80 p-2 md:px-4 rounded-lg backdrop-blur-md border border-gray-200 shadow-md w-fit">
          <span className="text-xl">←</span>
        </button>
      </div>
      {/* 1. Header Section (Image 1 jaisa) */}
      <header className="px-6 md:px-12 pt-24 pb-16 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start gap-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight leading-[1.1] md:leading-[0.9] max-w-3xl">
          Make any website template yours with ease.
        </h1>
        <p className="max-w-full md:max-w-[320px] text-[15px] leading-relaxed text-gray-600 mt-2 md:mt-4">
          Whether you need a portfolio website, an online store, or a personal blog, you can use customizable templates.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row px-6 md:px-12 py-12 gap-10 md:gap-16">
        {/* 2. Sidebar Filters (Video aur Image 2 jaisa) */}
        <aside className="w-full lg:w-60 shrink-0 lg:sticky top-10 h-fit">
          {/* Type Accordion/List */}
          <div className="mb-6 lg:mb-12 border-b border-gray-100 lg:border-none pb-4 lg:pb-0">
            <button 
              className="w-full flex lg:block justify-between items-center text-xs font-bold uppercase tracking-widest mb-4 lg:mb-6"
              onClick={() => {
                const el = document.getElementById('type-list');
                if (window.innerWidth < 1024) el.classList.toggle('hidden');
              }}
            >
              <span>Type</span>
              <span className="lg:hidden">▼</span>
            </button>
            <div id="type-list" className="hidden lg:block space-y-4">
              {['Online Store', 'Portfolio', 'Memberships', 'Blog', 'Scheduling', 'One Page', 'Courses'].map((type) => (
                <div key={type} className="flex items-center gap-3 cursor-pointer group" onClick={() => {
                  setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
                }}>
                  <div className={`w-4 h-4 border rounded-sm transition-all flex items-center justify-center ${selectedTypes.includes(type) ? 'bg-black border-black' : 'border-gray-300 group-hover:border-black'}`}>
                    {selectedTypes.includes(type) && <Check size={12} className="text-white" />}
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-black">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Accordion/List */}
          <div className="border-b border-gray-100 lg:border-none pb-4 lg:pb-0">
            <button 
              className="w-full flex lg:block justify-between items-center text-xs font-bold uppercase tracking-widest mb-4 lg:mb-6"
              onClick={() => {
                const el = document.getElementById('topic-list');
                if (window.innerWidth < 1024) el.classList.toggle('hidden');
              }}
            >
              <span>Topic</span>
              <span className="lg:hidden">▼</span>
            </button>
            <ul id="topic-list" className="hidden lg:block space-y-4 text-sm">
              <li className="font-bold border-l-2 border-black pl-3">Popular Designs (29)</li>
              {['Art & Design', 'Community', 'Education', 'Fashion', 'Health & Beauty'].map(topic => (
                <li key={topic} className="pl-3 text-gray-500 hover:text-black cursor-pointer transition-colors">{topic}</li>
              ))}
            </ul>
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <main className="flex-1">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-medium tracking-tight">Templates made for you</h2>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold">
              <Sparkles size={12} fill="black" /> POWERED BY BLUEPRINT AI
            </div>
          </div>

          {/* Grid Layout (Video style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mb-24">
            {templates.map((item, index) => (
              <motion.div 
                key={item.id} 
                whileHover={{ y: -8 }}
                className={`group cursor-pointer ${index === 1 ? 'md:mt-16' : ''}`}
              >
                <div className="aspect-[4/3] bg-[#F2F2F2] overflow-hidden rounded-sm relative">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="mt-5 space-y-1">
                  <h4 className="text-sm font-bold">{item.name}</h4>
                  <p className="text-[13px] text-gray-500 leading-tight">{item.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4. Blueprint AI Dark Banner (Image 4 & 5 jaisa) */}
          <section className="bg-[#121212] rounded-2xl p-6 md:p-12 lg:p-24 text-white flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 overflow-hidden relative">
            <div className="max-w-md z-10">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-6 md:mb-8 leading-[1.1]">
                Start with the Blueprint AI Website Builder
              </h2>
              <p className="text-gray-400 text-sm mb-8 md:mb-10 leading-relaxed">
                Create a unique and professional website in minutes. Get expert design guidance, premium starter content, and curated styling options.
              </p>
              <button className="bg-white text-black font-bold text-[11px] tracking-[0.2em] px-4 md:px-10 py-5 uppercase hover:bg-gray-200 transition-all flex items-center gap-3">
                Build Site <ArrowRight size={14} />
              </button>
            </div>

            {/* Mockup Elements */}
            <div className="relative w-full lg:w-[450px] h-[300px]">
              <div className="absolute top-0 right-0 w-[90%] h-full bg-[#1e1e1e] border border-gray-800 rounded-lg shadow-2xl p-6">
                <div className="w-full h-32 bg-gray-800 rounded-sm mb-6" />
                <div className="space-y-3">
                  <div className="w-3/4 h-2 bg-gray-700 rounded-full" />
                  <div className="w-1/2 h-2 bg-gray-700 rounded-full" />
                </div>
              </div>
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-2xl">
                <div className="flex gap-2 mb-4">
                  {[1,2,3].map(i => <div key={i} className="w-8 h-8 bg-gray-700 rounded-md" />)}
                </div>
                <div className="w-24 h-2 bg-gray-600 rounded-full" />
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Floating Button (Image 1 corner) */}
      <button className="fixed bottom-4 right-4 md:bottom-10 md:right-10 bg-white border border-gray-200 shadow-2xl px-6 py-3 md:px-8 md:py-3.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase hover:scale-105 transition-transform z-50">
        Try Blueprint AI Builder
      </button>
    </div>
    </div>
  );
};

export default Template;