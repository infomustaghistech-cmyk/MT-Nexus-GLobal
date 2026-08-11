import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Alexander Wright',
    role: 'CTO & Co-Founder',
    company: 'Vanguard Systems',
    quote: 'Working with MT Global transformed our digital presence completely. The attention to detail, modern UI execution, and seamless performance exceeded all expectations.',
    rating: 5,
    initial: 'A',
    avatarBg: '#0066ff',
  },
  {
    id: 2,
    name: 'Sophia Martinez',
    role: 'Head of Product',
    company: 'Elevate Health Tech',
    quote: 'The responsive design, micro-animations, and lightning fast delivery made a huge impact on our customer conversion rates. Truly world-class frontend expertise!',
    rating: 5,
    initial: 'S',
    avatarBg: '#0066ff',
  },
  {
    id: 3,
    name: 'Marcus Chen',
    role: 'Design Director',
    company: 'Nexus Creative Studio',
    quote: 'Pixel-perfect precision and clean modular architecture. They took our complex wireframes and turned them into a living, interactive digital masterwork.',
    rating: 5,
    initial: 'M',
    avatarBg: '#0066ff',
  },
  {
    id: 4,
    name: 'Elena Rostova',
    role: 'VP of Marketing',
    company: 'Apex Global Commerce',
    quote: 'Outstanding communication and relentless passion for quality. The automated workflows and custom design system were delivered ahead of schedule.',
    rating: 5,
    initial: 'E',
    avatarBg: '#0066ff',
  },
  {
    id: 5,
    name: 'David K. Vance',
    role: 'Chief Executive Officer',
    company: 'Hyperion Labs',
    quote: 'From responsive layouts to subtle micro-interactions, every single detail was carefully crafted. I highly recommend them to any ambitious team.',
    rating: 5,
    initial: 'D',
    avatarBg: '#0066ff',
  },
  {
    id: 6,
    name: 'Rachel Adams',
    role: 'Product Manager',
    company: 'Starlight Digital',
    quote: 'Fast execution, clean code, and exceptional aesthetic sense. The entire project was handled with top-tier professionalism from start to finish.',
    rating: 5,
    initial: 'R',
    avatarBg: '#0066ff',
  },
  {
    id: 7,
    name: 'Liam O’Connor',
    role: 'Founder',
    company: 'Velox Software',
    quote: 'They delivered beyond what we envisioned. The continuous animation effects and dark modern UX completely wowed our stakeholders.',
    rating: 5,
    initial: 'L',
    avatarBg: '#0066ff',
  },
  {
    id: 8,
    name: 'Amara Okafor',
    role: 'Managing Director',
    company: 'Kush Tech Innovations',
    quote: 'Reliable, innovative, and highly skilled developers. Our web performance and speed scores jumped dramatically after their overhaul.',
    rating: 5,
    initial: 'A',
    avatarBg: '#0066ff',
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[320px] sm:w-[380px] shrink-0 bg-[#1f1f22] rounded-[20px] p-6 border border-[#2e2e33] hover:border-[#0066ff]/50 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300 group overflow-hidden flex flex-col justify-between select-none">
      {/* Decorative Subtle Glowing Corner */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#0066ff]/10 rounded-full blur-xl group-hover:bg-[#0066ff]/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-[#ffc107]">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} fill="#ffc107" stroke="#ffc107" />
            ))}
          </div>
          <Quote size={24} className="text-white/10 group-hover:text-[#0066ff]/40 transition-colors duration-300" />
        </div>

        {/* Quote Text */}
        <p className="text-[#d1d5db] text-sm leading-relaxed font-normal mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Card Footer: Author Left, Company Right */}
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        {/* Author Avatar + Name */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md shrink-0"
            style={{ backgroundColor: testimonial.avatarBg || '#0066ff' }}
          >
            {testimonial.initial || testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm leading-snug">
              {testimonial.name}
            </h4>
            <p className="text-[11px] text-[#888888] font-medium">{testimonial.role}</p>
          </div>
        </div>

        {/* Company Name (Subtle Grey at Bottom Right) */}
        <div className="text-right">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#888888]">
            {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Split testimonials into 2 rows for multi-line marquee effect
  const row1 = testimonialsData.slice(0, 4);
  const row2 = testimonialsData.slice(4, 8);

  // Double arrays to ensure continuous 100% infinite scroll
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="relative w-full bg-[#121212] py-20 overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[35rem] h-[25rem] bg-[#0066ff]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[25rem] h-[20rem] bg-[#ffc107]/5 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* Fade Gradients on Edges for Smooth Overflow Mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#121212] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#121212] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066ff]/10 border border-[#0066ff]/20 text-[#0066ff] text-xs font-semibold tracking-wider uppercase mb-4">
          <Sparkles size={14} />
          <span>Client Reviews & Feedback</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          What Our Clients Say About Us
        </h2>
        <p className="text-[#888888] text-base md:text-lg mt-3 max-w-xl mx-auto">
          Explore real reviews from brands and leaders we've worked with around the globe.
        </p>
      </div>

      {/* Infinite Horizontal Lines (Marquee Rows) */}
      <div
        className="flex flex-col gap-6 relative z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ROW 1: Scrolling Left */}
        <div className="overflow-hidden flex w-full">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: isPaused ? '0%' : ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {marqueeRow1.map((testimonial, idx) => (
              <TestimonialCard key={`r1-${idx}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className="overflow-hidden flex w-full">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: isPaused ? '0%' : ['-50%', '0%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {marqueeRow2.map((testimonial, idx) => (
              <TestimonialCard key={`r2-${idx}`} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
