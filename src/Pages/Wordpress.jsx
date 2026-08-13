import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
// Video background import
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4'; 

const WordPressSolutions = () => {
  const navigate = useNavigate();
  // 1. WordPress Specific Requirements Array
  const requirements = [
    {
      title: "Domain & Hosting Access",
      desc: "Provide CPanel or Hosting login details along with your Domain Name to set up the WordPress environment.",
    },
    {
      title: "Theme & Design Preference",
      desc: "Specify if you want a custom-coded theme or a premium theme (like Astra/Elementor) with a specific layout style.",
    },
    {
      title: "Core Plugin Requirements",
      desc: "List necessary functionalities such as E-commerce (WooCommerce), SEO (Yoast), or Security setups.",
    },
    {
      title: "Content & Site Structure",
      desc: "Provide the sitemap (Home, About, Services, etc.) along with the text, images, and videos for each page.",
    },
    {
      title: "Performance & Security Goals",
      desc: "Outline your requirements for page load speed, SSL certificates, and automated backup solutions.",
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
        <video 
          src={videoBg} 
          playsInline autoPlay muted loop 
          className="w-full h-full object-cover brightness-[0.3]" 
        />
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
                  WordPress Expert Solutions
                </span>
              </motion.h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To build a high-converting and performance-optimized WordPress website, we need a clear roadmap. 
                Please provide the following technical details to help us launch your site efficiently:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 font-medium">
                    {/* Green Dot */}
                    <span className="h-2.5 w-2.5 bg-green-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> 
                    
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
            
            {/* Right Side: Development Notes Box */}
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-[#358acc] flex flex-col justify-center bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl mb-4">
                Development Notes
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend having a clear list of all 'Must-Have' plugins and third-party integrations 
                before we begin the development phase. Performance optimization and robust security configurations 
                are part of our standard delivery to ensure your site stays fast and secure."
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WordPressSolutions;