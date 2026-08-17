import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Video background import
import videoBg from '@/assets/15254965_1920_1080_24fps-optimized-v2.mp4';
import videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';
import LazyVideo from '../Componenet/LazyVideo'; 

const UIUXDesign = () => {
  const navigate = useNavigate();
  // 1. UI/UX Specific Requirements Array
  const requirements = [
    {
      title: "Project Goals & User Personas",
      desc: "Define the primary purpose of the app/web and provide details about your target audience's behaviors and needs.",
    },
    {
      title: "Wireframes & User Flow",
      desc: "A rough sketch or list of steps a user takes to complete a task (e.g., Sign up to Checkout) within your product.",
    },
    {
      title: "Visual Style & Moodboard",
      desc: "Preferred typography, color schemes, and references to existing designs that reflect your brand’s aesthetic.",
    },
    {
      title: "Specific Component Needs",
      desc: "List of essential UI elements like complex forms, dashboards, interactive maps, or custom animations.",
    },
    {
      title: "Prototyping & Feedback",
      desc: "Details on whether you require a clickable high-fidelity prototype (Figma/Adobe XD) for user testing.",
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 font-sans relative">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span>
        </button>
      </div>
      {/* --- VIDEO BACKGROUND --- */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover brightness-[0.3]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN CONTENT SECTION --- */}
        <div className="min-h-screen p-4 md:p-10 lg:p-14 rounded-3xl mb-16 relative overflow-hidden">
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            
            {/* Left Side: Title & Requirements */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  UI / UX Design
                </span>
              </motion.h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To design an intuitive and user-centric experience that resonates with your users, we need a deep understanding of your vision. 
                Please provide the following details to begin the design process:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 font-medium">
                    {/* Neon Cyan Dot */}
                    <span className="h-2.5 w-2.5 bg-cyan-400 rounded-full mt-1.5 shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span> 
                    
                    <div className="space-y-1">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-lg">
                        {req.title}: 
                      </span>
                      <span className="text-gray-300 text-sm font-normal block lg:inline lg:ml-2">
                        {req.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Side: Design Strategy Box */}
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-blue-500 flex flex-col justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl mb-4">
                Design Strategy
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend conducting a brief discovery session to align on user goals before we move to high-fidelity designs. 
                A solid UX foundation through wireframing ensures that the final UI is not just beautiful, but also highly functional 
                and easy to navigate."
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;