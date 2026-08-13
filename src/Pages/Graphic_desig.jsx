import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Assuming the same video path as your App_Customization component
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4';
import LazyVideo from '../Componenet/LazyVideo'; 

const GraphicDesign = () => {
  const navigate = useNavigate();
  // 1. Graphic Design Requirements Array
  const requirements = [
    {
      title: "Visual Identity & Style",
      desc: "Specify your brand's personality—whether it's minimalist, bold, vintage, or corporate—along with any preferred color palettes.",
    },
    {
      title: "Design Assets & Resources",
      desc: "Provide existing logos (vector format), high-resolution images, or specific fonts that must be used in the design.",
    },
    {
      title: "Mood Boards & Inspiration",
      desc: "Share links to designs, websites, or artists you admire to help us align with your creative vision.",
    },
    {
      title: "Platform & Dimensions",
      desc: "Define where the designs will be used (e.g., Social Media, Print, Web, or Outdoor) and the specific sizes required.",
    },
    {
      title: "Final Deliverables",
      desc: "List the file formats you need (AI, PSD, PDF, PNG, or SVG) and any specific hierarchy for project handoff.",
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 font-sans relative">
      <div className="relative z-50 w-full max-w-7xl mx-auto mb-6 mt-8 md:mt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold tracking-wider transition-colors bg-black/60 p-2 md:px-4 rounded-lg backdrop-blur-md border border-white/10">
          <span className="text-xl">←</span> GO BACK
        </button>
      </div>
      {/* --- VIDEO BACKGROUND --- */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <LazyVideo src={videoBg} className="w-full h-full object-cover brightness-[0.3]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN SECTION --- */}
        <div className="min-h-screen p-10 lg:p-14 rounded-3xl mb-16 relative overflow-hidden">
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            
            {/* Left Side: Title & Requirements */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Graphic Design Services
                </span>
              </motion.h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To create high-impact visuals that tell your brand's story, we need a clear creative direction. 
                Please provide the following details to ensure the final artwork perfectly captures your vision:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 font-medium">
                    {/* Green Dot */}
                    <span className="h-2.5 w-2.5 bg-green-500 rounded-full mt-1 shrink-0"></span> 
                    
                    <div className="space-y-1">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">
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
            
            {/* Right Side: Design Guidelines Box */}
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-[#358acc] flex flex-col justify-center bg-white/5 backdrop-blur-sm">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl mb-4">
                Design Guidelines
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend providing a detailed 'Creative Brief' before we start the brainstorming phase. 
                Clear feedback on initial concepts and a defined target audience help us deliver professional designs 
                that stand out and resonate with your customers."
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;