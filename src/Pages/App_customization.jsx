import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoBg from '@/assets/15254965_1920_1080_24fps-optimized-v2.mp4';
import videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';

import { motion } from 'framer-motion';
import LazyVideo from '../Componenet/LazyVideo';

const App_Customization = () => {
  const navigate = useNavigate();

  // 1. App Development Requirements Array
  const requirements = [
    {
      title: "Target Platform",
      desc: "Specify whether the app is for iOS (Apple App Store), Android (Google Play Store), or Cross-Platform (both).",
    },
    {
      title: "UI / UX Design Specs",
      desc: "Detailed user journey maps, wireframes, or high-fidelity design mockups to visualize the user experience.",
    },
    {
      title: "Core Feature Set",
      desc: "A comprehensive list of essential functionalities required for the initial launch (MVP).",
    },
    {
      title: "API & Backend Specs",
      desc: "Information regarding existing backend services, APIs, or database integrations needed for the app.",
    },
    {
      title: "Launch Timeline & Budget",
      desc: "Your expected development timeframe, deployment dates, and estimated budget for the project.",
    }
  ];

  return (
    // Main Container with dark background like ServicesPage
    <div className="min-h-screen pt-28 pb-16 px-6 font-sans">
        <div className="fixed inset-0 -z-10 w-full h-full">
              <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover brightness-[0.3]" />
            </div>
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors relative z-10"
        >
          <span className="text-xl">←</span>
        </button>

        {/* --- MAIN WHITE CARD SECTION --- (Same as reference image) */}
        <div className="min-h-screen p-4 md:p-10 lg:p-14 rounded-3xl mb-16 relative overflow-hidden">
          
          {/* Main Content & Important Instructions Grid */}
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            
            {/* Left Side: Title & Requirements */}
            <div>
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#3B1E63] mb-8 tracking-tight"
              ><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Next-Gen App Development </span>
              </motion.h1>
              
              {/* Main Description */}
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To build a futuristic, high-performance mobile application, we need specific project details. 
                Please provide the information below to ensure a streamlined and efficient development cycle:
              </p>
              
              {/* Requirements List (Bulleted with green dots) */}
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 font-medium">
                    {/* Green Dot */}
                    <span className="h-2.5 w-2.5 bg-green-500 rounded-full mt-1 shrink-0"></span> 
                    {/* Title and Description */}
                    <div className="space-y-1">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{req.title}: </span>
                      <span className="text-gray-300 text-sm font-normal">{req.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Side: Important Instructions Box (Purple box design) */}
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-[#358acc] flex flex-col justify-center">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-2xl md:text-4xl mb-4">Important Instructions</h3>
              
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend having clear documentation of your app's core business logic and user scenarios 
                before we begin the development process. Consistent communication and detailed specifications 
                help us build your next-gen application faster and with maximum precision."
              </p>
            </div>
            
          </div>
          
        </div>

        {/* --- BOTTOM GRID FOR COMPLETED PROJECTS (If needed later) --- */}
        {/*
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-800">Completed Projects & Case Studies</h2>
        </div>
        */}

      </div>
    </div>
  );
};

export default App_Customization;