import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Video background import
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4';
import LazyVideo from '../Componenet/LazyVideo'; 

const VideoEditing = () => {
  const navigate = useNavigate();
  // 1. Video Editing Requirements Array
  const requirements = [
    {
      title: "Raw Footage & Assets",
      desc: "Provide all raw video clips (4K/1080p), high-quality audio recordings, and any specific images or logos to be included.",
    },
    {
      title: "Editing Style & Reference",
      desc: "Share a link to a video you admire (vlog, cinematic, corporate) to help us understand the desired pacing and aesthetic.",
    },
    {
      title: "Storyline & Script",
      desc: "Provide a rough script or time-stamped notes indicating which parts of the footage are most important to the story.",
    },
    {
      title: "Sound Design & Music",
      desc: "Specify if you have licensed music or if you need us to source royalty-free tracks, sound effects, and voiceovers.",
    },
    {
      title: "Final Output & Format",
      desc: "Define the final resolution (e.g., 4K, 1080p) and aspect ratio (e.g., 16:9 for YouTube, 9:16 for Reels/TikTok).",
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
        <LazyVideo src={videoBg} className="w-full h-full object-cover brightness-[0.25]" />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN CONTENT SECTION --- */}
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
                  Professional Video Editing
                </span>
              </motion.h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To create a cinematic and engaging video that captures your audience's attention, we need clear creative input. 
                Please provide the following details to ensure a high-quality final cut:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 font-medium">
                    {/* Neon Green Dot */}
                    <span className="h-2.5 w-2.5 bg-green-400 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span> 
                    
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
            
            {/* Right Side: Important Instructions Box */}
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-cyan-500 flex flex-col justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl mb-4">
                Editing Guidelines
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend using cloud storage (Google Drive/WeTransfer) for sending high-resolution raw footage. 
                Detailed notes on color grading preferences and motion graphics help us deliver a polished video 
                that aligns perfectly with your content strategy."
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;