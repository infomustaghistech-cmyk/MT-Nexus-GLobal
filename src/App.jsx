import React, { useEffect, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Componenet/Navbar'
import Home from './Pages/HomePage'

const CTABanner = React.lazy(() => import('./Componenet/CTABanner'))
const Footer = React.lazy(() => import('./Pages/Footer'))

const Grow_Business = React.lazy(() => import('./Pages/Grow_Business'))
const Platform = React.lazy(() => import('./Pages/Need_Platform'))
const Get_start = React.lazy(() => import('./Pages/GEt_start'))
const Design_website = React.lazy(() => import('./Pages/Design_website'))
const Template = React.lazy(() => import('./Pages/Web_template'))
const AboutPage = React.lazy(() => import('./Pages/About'))
const ServicesPage = React.lazy(() => import('./Pages/Services'))
const ContactPage = React.lazy(() => import('./Pages/Contact'))
const FeedbackPage = React.lazy(() => import('./Pages/Feedback'))
const WebsiteCustomization = React.lazy(() => import('./Pages/Web_Custumization'))
const App_Customization = React.lazy(() => import('./Pages/App_customization'))
const GraphicDesign = React.lazy(() => import('./Pages/Graphic_desig'))
const WordPressSolutions = React.lazy(() => import('./Pages/Wordpress'))
const VideoEditing = React.lazy(() => import('./Pages/Video_editing'))
const ShopifyStore = React.lazy(() => import('./Pages/Shopify_Store'))
const UIUXDesign = React.lazy(() => import('./Pages/ui_ux_designs'))
const Portfolio = React.lazy(() => import('./Pages/Portfolio'))
const Admin = React.lazy(() => import('./Pages/Admin'))
const Projact_web = React.lazy(() => import('./Pages/Project_website'))
const Projact_app = React.lazy(() => import('./Pages/Project_app'))
const Projact_wordpress = React.lazy(() => import('./Pages/Project_wordpress'))
const Projact_shopifly = React.lazy(() => import('./Pages/Project_shopify'))
const Projact_video = React.lazy(() => import('./Pages/Project_video'))
const Projact_graphic = React.lazy(() => import('./Pages/Project_graphic'))

const LoadingScreen = () => (
  <div className="flex h-screen w-full items-center justify-center bg-[#050a15] p-6">
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="w-full h-64 bg-[#0a0f1d] rounded-2xl p-6 flex flex-col gap-4 animate-pulse border border-white/5">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 mb-2"></div>
          <div className="w-3/4 h-6 bg-white/10 rounded-md"></div>
          <div className="w-full h-4 bg-white/5 rounded-md"></div>
          <div className="w-5/6 h-4 bg-white/5 rounded-md"></div>
          <div className="mt-auto w-32 h-10 bg-cyan-500/10 rounded-xl"></div>
        </div>
      ))}
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] z-[90] cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <BackToTopButton />

      <Navbar />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/design-website" element={<Design_website />} />
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Home />} />
          <Route path="/blogs" element={<Home />} />
          <Route path="/get-started" element={<Get_start />} />
          <Route path='/templates' element={<Template />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path="/admin" element={<Admin />} />

          <Route path='/services/web_customization' element={<WebsiteCustomization />} />
          <Route path='/services/app_customization' element={<App_Customization />} />
          <Route path='/services/graphic-design' element={<GraphicDesign />} />
          <Route path='/services/wordpress' element={<WordPressSolutions />} />
          <Route path='/services/video-editing' element={<VideoEditing />} />
          <Route path='/services/shopify' element={<ShopifyStore />} />
          <Route path='/services/ui-ux-designs' element={<UIUXDesign />} />

          <Route path='/projects' element={<Portfolio />} />
          <Route path='/projects/website' element={<Projact_web />} />
          <Route path='/projects/app' element={<Projact_app />} />
          <Route path='/projects/wordpress' element={<Projact_wordpress />} />
          <Route path='/projects/shopify' element={<Projact_shopifly />} />
          <Route path='/projects/video' element={<Projact_video />} />
          <Route path='/projects/graphic' element={<Projact_graphic />} />

          <Route path='/contact' element={<ContactPage />} />
          <Route path='/feedback' element={<FeedbackPage />} />
        </Routes>
        <CTABanner />
        <Footer />
      </Suspense>

    </BrowserRouter>
  )
}

export default App