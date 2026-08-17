import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: '10 Proven UI/UX Strategies to Skyrocket Conversions in 2026',
    excerpt: 'Discover the micro-interactions, layout principles, and color psychologies that top-tier brands use to drive massive revenue growth.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    category: 'Design',
    author: 'Elena Rodriguez',
    readTime: '6 min read',
    date: 'Aug 05, 2026',
  },
  {
    id: 2,
    title: 'The Ultimate Technical SEO Checklist for React Applications',
    excerpt: 'Single page applications often suffer in search. Learn how to implement SSR, dynamic rendering, and meta tags to dominate Google rankings.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'SEO',
    author: 'Marcus Chen',
    readTime: '8 min read',
    date: 'Aug 02, 2026',
  },
  {
    id: 3,
    title: 'Why Headless Commerce is the Future of Enterprise Retail',
    excerpt: 'Decoupling your frontend from the backend can give you unparalleled flexibility. Here is everything you need to know about scaling with Headless.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    category: 'E-Commerce',
    author: 'Sarah Jenkins',
    readTime: '5 min read',
    date: 'Jul 28, 2026',
  },
];

const BlogSection = () => {
  return (
    <section id="blogs" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-300 mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Latest Insights
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">
              Thoughts on <span className="text-cyan-400">digital growth</span> and technology
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore our latest articles, guides, and expert advice on how to build, scale, and optimize your digital presence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 transition hover:gap-3 hover:text-cyan-300">
              View All Articles
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-row overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 no-scrollbar snap-x-mandatory">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileTap={{ scale: 0.98 }}
              className="w-[85vw] md:w-auto shrink-0 snap-align-center group flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0f1d] backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(34,211,238,0.12)] hover:border-cyan-400/30 touch-target cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4 rounded-full border border-cyan-400/30 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
                  {post.category}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6 sm:p-8 pt-4">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <User size={14} className="text-cyan-400/70" />
                    {post.author}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-cyan-400/70" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-gray-400 mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
                  <span className="text-xs font-medium text-gray-500">{post.date}</span>
                  <Link to={`/blog/${post.id}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-400 transition-all group-hover:bg-cyan-400 group-hover:text-[#050816]">
                    <ArrowRight size={16} className="-rotate-45 transition-transform group-hover:rotate-0" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
