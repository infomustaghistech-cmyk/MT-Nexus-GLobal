import React from 'react';
import { motion } from 'framer-motion';
import videoBg from '@/assets/15254965_1920_1080_24fps-optimized-v2.mp4';
import videoPoster from '@/assets/15254965_1920_1080_24fps-poster.webp';
import TestimonialSection from '../Componenet/TestimonialSection';
import LazyVideo from '../Componenet/LazyVideo';

const FeedbackPage = () => {
  return (
    <div id="Feedback" className="relative min-h-screen px-4 sm:px-6 md:px-12 py-12 md:py-24 text-gray-200 overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <LazyVideo src={videoBg} poster={videoPoster} className="w-full h-full object-cover brightness-[0.20]" />
        <div className="absolute inset-0 bg-[#050505]/70" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="fixed top-1/3 left-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Testimonial Section */}
      <div className="max-w-7xl mx-auto pt-8">
        <TestimonialSection />
      </div>
    </div>
  );
};

export default FeedbackPage;