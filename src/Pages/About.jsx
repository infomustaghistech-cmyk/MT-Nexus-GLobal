import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Users, ShieldCheck, Scale, Handshake } from 'lucide-react';
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4'; // Ensure path is correct
// Import your images
import founderImg from "../assets/WhatsApp_Image_2026-03-11_at_3.33.52_AM-removebg-preview.png";
import topImg from "../assets/istockphoto-1961324209-1024x1024.jpg";

/* ─────────────────────────────────────────────────
   GLOBAL VIDEO BACKGROUND
───────────────────────────────────────────────── */
export const VideoBackground = ({ brightness = 0.25 }) => (
  <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-[#0a0a0a]">
    <video
      src={videoBg}
      playsInline autoPlay muted loop
      className="w-full h-full object-cover transition-opacity duration-1000 opacity-60"
      style={{ filter: `brightness(${brightness})` }}
    />
    <div className="absolute inset-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.3,
        mixBlendMode: 'overlay'
      }}
    />
    <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0a]/80 to-transparent" />
  </div>
);

const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Team Data (Added fallback logic for missing images)
  const team = [
    { name: "Sadiq", role: "Founder & CEO", image: founderImg },
    { name: "Afzal", role: "Co-Founder", image:"/afzal1.jpeg" }, // Using topImg as a placeholder for now
    { name: "Muslim", role: "Manager", image: null }, // Null image will show a premium placeholder
  ];

  const values = [
    { title: "Client Value", desc: "We strive to exceed our clients expectations by delivering top-tier solutions.", icon: UserCheck },
    { title: "People Driven", desc: "As a people-driven company, we prioritize our team and clients above all.", icon: Users },
    { title: "Integrity", desc: "We place a high value on honesty, transparency, and ethical practices.", icon: ShieldCheck },
    { title: "Accountability", desc: "We value taking responsibility for our work and delivering on promises.", icon: Scale },
    { title: "Collaboration", desc: "Collaboration fuels innovation. We work closely with clients to succeed.", icon: Handshake },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');

        .font-sans-main { font-family: 'Inter', sans-serif; }
        .font-serif-accent { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #22d3ee;
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
        }
        .section-label::before {
          content: '';
          display: inline-block;
          width: 30px;
          height: 1px;
          background: #22d3ee;
          opacity: 0.6;
        }
      `}</style>

      <VideoBackground />

      <div className="w-full relative text-white overflow-x-hidden font-sans-main bg-[#0a0a0a]/40 selection:bg-cyan-500 selection:text-black">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        {/* 1. Hero Section */}
        <section className="relative min-h-[70vh] w-full flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center"
          >
            <div className="section-label justify-center mb-6">Who We Are</div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 font-serif-accent drop-shadow-2xl">
              About MT Nexus <br />
              <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pr-2">Global</em>
            </h1>
            
            <motion.div 
              initial={{ width: 0 }} animate={{ width: 80 }} transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 mb-8 rounded-full"
            />
            
            <p className="text-sm md:text-lg text-white/60 max-w-2xl leading-relaxed font-light">
              We use the power of modern technology and AI to transform the way businesses operate, scale, and make data-driven decisions in the digital era.
            </p>
          </motion.div>
        </section>

        {/* 2. Discover Our Story */}
        <section className="py-24 px-6 relative border-t border-white/5 bg-white/[0.01]">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}
            className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="section-label mb-6">Our Journey</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif-accent leading-tight">
                Discover Our <br />
                <span className="text-cyan-400">Story</span>
              </h2>
            </div>

            <div className="space-y-6 text-white/50 leading-relaxed text-sm md:text-base font-light border-l border-cyan-500/20 pl-6 md:pl-10">
              <p>
                MT Nexus Global is an emerging digital and AI service provider dedicated to pushing the boundaries of what's possible on the web.
              </p>
              <p>
                Our story began with a group of tech enthusiasts developing innovative solutions. What started as a small vision has now grown into a global nexus of creativity and engineering.
              </p>
              <p>
                Today, we assist businesses of all sizes—from ambitious startups to established enterprises—in navigating the complex digital landscape with premium, custom-tailored solutions.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 3. Core Values */}
        <section className="py-28 px-6 max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center flex flex-col items-center">
            <div className="section-label justify-center mb-6">Our Principles</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-accent">Core Values</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={index} variants={fadeInUp}
                  className="p-8 border border-white/10 rounded-[2rem] bg-white/[0.02] backdrop-blur-md group hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-500"
                >
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                    <IconComp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* 4. Team Section (FIXED IMAGE STYLING) */}
        <section className="py-28 px-6 max-w-7xl mx-auto border-t border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 text-center flex flex-col items-center">
            <div className="section-label justify-center mb-6">The Minds Behind</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-accent">Meet Our Team</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp} className="group cursor-pointer">
                {/* Premium Image Card */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md mb-6 aspect-[4/5]">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    // Fallback for missing image
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black group-hover:scale-105 transition-transform duration-700">
                      <span className="text-6xl font-serif-accent text-white/10">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  {/* Overlay Info (Optional style, moves info inside the card at bottom) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-cyan-400 font-mono text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
                      {member.role}
                    </p>
                    <h3 className="text-2xl font-bold text-white font-serif-accent">{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Footer Message */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
          className="py-32 px-6 max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-serif leading-none select-none text-white/[0.02] pointer-events-none">
            "
          </div>
          <h1 className="text-white/80 text-2xl md:text-4xl font-serif-accent leading-relaxed relative z-10">
            <em className="italic">"Thank you for exploring our digital space. <br className="hidden md:block" /> Let's build the future together."</em>
          </h1>
        </motion.div>

      </div>
    </>
  );
};

export default AboutPage;