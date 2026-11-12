import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const slides = [
  { id: 'services', label: 'Services', title: 'Offer services', desc: 'Promote your experiences and offerings, collect attendee information, and get paid for your work.', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', color: 'bg-[#f6f6f6]', textColor: 'text-black' },
  { id: 'store', label: 'Online Store', title: 'Sell products', desc: 'Merchandize your products, accept payments, manage orders and shipping, and more.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', color: 'bg-[#faf7f2]', textColor: 'text-black' },
  { id: 'invoicing', label: 'Invoicing', title: 'Invoice clients', desc: 'Legitimize your business and get paid with professional proposals, contracts, and invoices.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800', color: 'bg-[#ececeb]', textColor: 'text-black' },
  { id: 'scheduling', label: 'Scheduling', title: 'Book appointments', desc: 'Let clients schedule appointments, classes, and more with ease.', img: 'https://images.unsplash.com/photo-1506784919141-9350499103c1?w=800', color: 'bg-[#f4f1ea]', textColor: 'text-black' },
  { id: 'donations', label: 'Donations', title: 'Accept donations', desc: 'Create a seamless donation experience for your non-profit or cause.', img: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800', color: 'bg-[#f9f9f9]', textColor: 'text-black' },
  { id: 'memberships', label: 'Memberships', title: 'Sell memberships', desc: 'Build a community by offering exclusive access to premium content.', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800', color: 'bg-[#f0f0f0]', textColor: 'text-black' },
  { id: 'blog', label: 'Blog', title: 'Post your ideas', desc: 'Launch a blog, grow your readership, and add paywalls to monetize access.', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800', color: 'bg-[#1a1a1a]', textColor: 'text-white' },
];

export default function GrowBusiness() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-8 md:py-16 overflow-hidden select-none">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span>
        </button>
      </div>
      {/* 1. Header Section */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-[56px] font-normal text-white mb-2 tracking-tight">
          Grow your business
        </h1>
        <p className="text-lg text-gray-400">You deserve a website that can do it all.</p>
      </div>

      {/* 2. Navigation Tabs (UX: Active pill follows the click) */}
      <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-3 mb-14 px-4 md:px-10">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            className={`relative px-4 py-1.5 text-[15px] transition-colors duration-300 font-medium ${ index === i ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900' }`}
          >
            {index === i && (
              <motion.div 
                layoutId="pill" 
                className="absolute inset-0 bg-[#f0f0f0] rounded-full -z-10" 
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {slide.label}
          </button>
        ))}
      </div>

      {/* 3. Slider Section (Horizontal Scroll UX) */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <motion.div
          className="flex items-center gap-6 md:gap-12"
          animate={{ x: `calc(47.4% - ${(index * 600) + 300}px)` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {slides.map((slide, i) => (
            <motion.div
              key={slide.id}
              animate={{ 
                scale: index === i ? 1 : 0.85,
                opacity: index === i ? 1 : 0.4 
              }}
              className={`min-w-[600px] h-auto md:h-[550px] rounded-[40px] flex flex-col md:flex-row items-center p-4 md:p-10 md:p-20 transition-all duration-700 shadow-xl ${slide.color}`}
            >
              {/* Content Side */}
              <div className="w-full md:w-1/2 pr-4">
                <h2 className={`text-[42px] leading-tight font-serif mb-6 ${slide.textColor}`}>
                  {slide.title}
                </h2>
                <p className={`text-[19px] leading-relaxed max-w-[380px] ${ slide.id === 'blog' ? 'text-gray-400' : 'text-gray-600' }`}>
                  {slide.desc}
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-full flex items-center justify-center mt-10 md:mt-0">
                <img 
                  src={slide.img} 
                  loading="lazy"
                  className="w-full h-auto max-h-[400px] rounded-2xl shadow-2xl object-cover" 
                  alt="preview" 
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Progress Dots (Active dot expands) */}
        <div className="flex justify-center items-center gap-2.5 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${ index === i ? 'w-8 bg-black' : 'w-1.5 bg-[#ccc]' }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}