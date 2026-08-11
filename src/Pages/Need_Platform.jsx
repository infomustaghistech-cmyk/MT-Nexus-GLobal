import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Card = ({ title, description, dark, children, bgImage, to = "#" }) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    variants={{
      hidden: { opacity: 0, y: 0 },
      visible: { opacity: 80, y: 80 }
    }}
    transition={{ duration: 0.5 }}
    className={`w-full h-[350px] rounded-[2.5rem] relative overflow-hidden shadow-xl hover:shadow-2xl group transition-all duration-500 ${dark ? ' text-white' : 'bg-white text-black'}`}
  >
    <Link to={to} className="flex flex-col justify-between h-full p-8 w-full">
      
        <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
        </div>
      
      
      <div className="z-10">
        <h3 className="text-2xl text-white font-bold mb-4 tracking-tight group-hover:text-gray-300 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-[14px] opacity-100 text-white leading-relaxed ">
          {description}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center z-10">
        {children}
      </div>

      <div className="flex justify-end z-10 pt-4">
        <motion.div 
          whileHover={{ x: 5 }}
          className={`p-3 rounded-full text-black border transition-all duration-300 group-hover:bg-gray-500 group-hover:text-white ${dark ? 'border-white/20' : 'border-black/10'}`}
        >
          <ArrowRight size={20}  />
        </motion.div>
      </div>
    </Link>
  </motion.div>
);

const Platform = () => {
  return (
    <div className=" mt-1 min-h-screen font-sans  selection:text-black relative overflow-hidden pb-20">
      
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" /> */}

      <div className="max-w-[1400px] mx-auto pt-24 pb-16 px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-end gap-8"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-blue-500" size={32} />
              <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-white">
              Everything you need <br /> <span className="text-gray-500 text-4xl md:text-6xl">on one platform.</span>
            </h1>
          </div>
          <p className="text-lg text-gray-300 max-w-md font-light leading-relaxed mb-2">
            Power your business with integrated tools and expert solutions designed to scale your brand.
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* 1. Website */}
          <Card title="Website Customization" to="/services/web_customization" description="Tailored web experiences built with modern frameworks." bgImage="src/assets/Gemini_Generated_Image_e3v7i1e3v7i1e3v7.png" dark={true}>
         
          </Card>

          {/* 2. App */}
          <Card title="App Development" to="/services/app_customization" description="High-performance iOS and Android applications." bgImage="src/assets/Gemini_Generated_Image_9u8h7z9u8h7z9u8h.png" dark={true}>
            
          </Card>

          {/* 3. Graphic Design - NEW */}
          <Card title="Graphic Design" to="/services/graphic-design" description="Creative logos and branding assets that stand out." bgImage={"src/assets/Gemini_Generated_Image_cx1um5cx1um5cx1u.png"} dark={true}>
           
          </Card>

          {/* 4. Video Editing - NEW */}
          <Card title="Video Editing" to="/services/video-editing" description="Professional post-production and cinematic storytelling." bgImage={"src/assets/Gemini_Generated_Image_o7yvubo7yvubo7yv.png"} dark={true}>
            
          </Card>

          {/* 5. WordPress */}
          <Card title="WordPress Solutions" to="/services/wordpress" description="Secure and scalable WordPress development." bgImage={"src/assets/Gemini_Generated_Image_6qmnr56qmnr56qmn.png"} dark={true}>
           
          </Card>

          {/* 6. Shopify */}
          <Card title="Shopify Stores" to="/services/shopify" description="Optimized e-commerce stores for maximum conversion." bgImage={"src/assets/Gemini_Generated_Image_ju3d1xju3d1xju3d.png"} dark={true}>
             
          </Card>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Platform;    