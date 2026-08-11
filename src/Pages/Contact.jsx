import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const { error } = await supabase.from('messages').insert([formData]);
      
      if (error) throw error;
      
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', company: '', message: '' }); // Clear form
      
      // 3 second baad success message hata dein
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-16 px-6 lg:px-20 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 space-y-8"
        >
          <div>
            <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
              Get In Touch
            </span>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Together.
              </span>
            </h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Ready to take your digital presence to the next level? Fill out the form or reach us directly. We'd love to discuss your project and set up a meeting.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Call Us</p>
              <a href="tel:03262927567" className="text-xl font-semibold hover:text-cyan-400 transition-colors">
                +92 326 2927567
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-[550px] w-full bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Flex row for Name and Contact (Stacks on mobile) */}
            <div className="flex flex-col md:flex-row gap-5">
              
              {/* Name */}
              <input 
                type="text" name="name" value={formData.name} onChange={handleChange} required
                placeholder="Your Name" 
                className="w-full md:w-1/2 p-4 bg-black/50 border border-gray-800 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600 text-white"
              />
              
              {/* Global Contact Input */}
              <div className="w-full md:w-1/2 flex items-center bg-black/50 border border-gray-800 rounded-xl focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500 transition-all px-4">
                <svg className="w-5 h-5 text-gray-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <input 
                  type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  placeholder="Phone No. (Global)" 
                  className="w-full bg-transparent py-4 outline-none placeholder:text-gray-500 text-white"
                />
              </div>
              
            </div>

            {/* Email */}
            <input 
              type="email" name="email" value={formData.email} onChange={handleChange} required
              placeholder="Email Address" 
              className="w-full p-4 bg-black/50 border border-gray-800 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600 text-white"
            />

            {/* Company */}
            <input 
              type="text" name="company" value={formData.company} onChange={handleChange}
              placeholder="Company Name (Optional)" 
              className="w-full p-4 bg-black/50 border border-gray-800 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600 text-white"
            />

            {/* Message Textarea */}
            <textarea 
              name="message" value={formData.message} onChange={handleChange} required
              placeholder="Tell us about your project..." 
              rows="4"
              className="w-full p-4 bg-black/50 border border-gray-800 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600 text-white resize-none"
            ></textarea>

            {/* Feedback Messages */}
            {status === 'success' && (
              <p className="text-green-400 text-sm font-bold text-center">Message sent successfully! We'll contact you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm font-bold text-center">Failed to send message. Please try again.</p>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-cyan-500/25 disabled:opacity-50 tracking-widest uppercase text-sm"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 cursor-pointer transform hover:scale-110 hover:-translate-y-2 transition-all duration-300">
        <a href="https://wa.me/message/7KI5VLR44GFUL1" target='_blank' rel="noopener noreferrer">
          {/* Ensure correct path for your image */}
          <img src="/WhatsApp_Image_2026-03-10_at_2.06.44_AM-removebg-preview.png" alt="WhatsApp" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(37,211,102,0.5)]" />
        </a>
      </div>

    </div>
  );
};

export default Contact;