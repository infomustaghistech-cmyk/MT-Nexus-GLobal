import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoBg from '@/assets/15254965_1920_1080_24fps-optimized-v2.mp4';
import videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';

import { motion } from 'framer-motion';
import LazyVideo from '../Componenet/LazyVideo';

const WebsiteCustomization = () => {
  const navigate = useNavigate();

  // Project Data (Screenshot style cards)
  const projects = [
    {
      name: "Siraj.s",
      level: "Level 2 ◆◆◇",
      languages: "English",
      desc: "Hi, I'm a versatile developer from a business background with a knack for turning ideas into...",
      tags: ["JavaScript", "Software development", "Front-end web development"],
      plusTags: "+ 3",
      reviews: "32 Reviews",
      rating: "4.7",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGa70BgePn1Rsf41oiG6ac0_TAzpKXj4d9qg&s" // Replace with real expert image
    },
    {
      name: "Rayyaan Nauman",
      level: "Top Rated ◆◆◆",
      languages: "English, Spanish, German",
      desc: "Hey! I'm Muhammad Rayyaan, a full-stack developer who turns ideas into profitable digita...",
      tags: ["React", "Next.js", "JavaScript", "Node.js", "Firebase", "Web development"],
      plusTags: "+ 5",
      reviews: "276 Reviews",
      rating: "4.8",
      img: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.webp"
    },
    {
      name: "Rexsoft Inc",
      level: "Top Rated ◆◆◆",
      languages: "Ukrainian, English",
      desc: "RexSoft is a trusted Web and Mobile App development company with 13+ years of...",
      tags: ["Node.js", "React", "HTML", "QA & review", "UI & UX design", "Mobile development"],
      plusTags: "+ 24",
      reviews: "49 Reviews",
      rating: "5.0",
      img: "https://object.pixocial.com/pixocial/dmxffni837f1xrj8pki9xgrl.webp"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-6">

 <div className="fixed inset-0 -z-10 w-full h-full">
              <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover brightness-[0.3]" />
            </div>

      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors"
        >
          <span className="text-xl">←</span>
        </button>

        {/* Main Heading & Client Instructions */}
        <div className="p-8 lg:p-12 rounded-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold mb-6"
          >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>

            Website Customization
            </span>
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-10">
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                To transform your existing website into a modern, high-performance platform, we require specific details. Please follow the instructions below to ensure a seamless and efficient start to your project:
              </p>
              <ul className="space-y-3">
                {["Website Access: Admin credentials (WordPress/Shopify) or Hosting/CPanel access.", "Design Inspiration: Links or references to websites that match your vision.", "Feature Specification: A detailed list of new functionalities or changes required.","Brand Assets: Your logo, preferred color palette, and high-quality images.","Project Timeline: Your expected deadline or launch date."].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                    <span className="h-2 w-2 bg-green-500 rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-[#358acc] flex flex-col justify-center">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl md:text-4xl mb-4">Important Instructions</h3>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend taking a complete backup of your current website before we begin the customization process. Clear communication and detailed instructions help us deliver your project faster and with maximum precision."
              </p>
            </div>
          </div>
        </div>

        {/* Second Heading: Completed Projects */}
        {/* <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-50">Our Experts & Completed Projects</h2>
          <div className="h-1 flex-1 bg-gray-200 mx-6 hidden md:block"></div>
        </div> */}

        {/* Project Cards Grid */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                Header: Profile & Name

                <div className="flex gap-4 mb-4">
                  <img src={p.img} alt={p.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" loading="lazy" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{p.name}</h4>
                    <p className="text-sm font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md inline-block">
                      {p.level}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{p.languages}</p>
                  </div>
                </div>

                Description

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {p.desc}
                </p>

                Tags

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-medium text-gray-500 border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50">
                      {tag}
                    </span>
                  ))}
                  <span className="text-[11px] font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-full">
                    {p.plusTags}
                  </span>
                </div>
              </div>

              Footer: Rating & Action
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">{p.reviews}</span>
                  <span className="flex items-center gap-1 font-bold text-gray-900">
                    ★ {p.rating}
                  </span>
                </div>
                <button className="bg-[#222325] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-black transition-colors">
                  See project   
                </button>
              </div>
            </motion.div>
          ))}
        </div> */}

      </div>
    </div>
  );
};

export default WebsiteCustomization;