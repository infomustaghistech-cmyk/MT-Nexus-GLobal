import React, { useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Componenet/Navbar'
import Footer from './Pages/Footer'
import Home from './Pages/HomePage'
import CTABanner from './Componenet/CTABanner'

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
  <div className="flex h-screen w-full items-center justify-center bg-[#050a15]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
      <p className="text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase animate-pulse">Loading...</p>
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




const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

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
      </Suspense>
      <CTABanner />
      <Footer />

    </BrowserRouter>
  )
}

export default App