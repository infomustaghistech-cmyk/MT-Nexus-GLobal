import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Componenet/Navbar'
import HeroSection from './Componenet/Hero'
import Grow_Business from './Pages/Grow_Business'
import Footer from './Pages/Footer'
import Platform from './Pages/Need_Platform'
import Get_start from './Pages/GEt_start'
import Design_website from './Pages/Design_website'
import Template from './Pages/Web_template'
import AboutPage from './Pages/About'
import ServicesPage from './Pages/Services'
import ContactPage from './Pages/Contact'
import FeedbackPage from './Pages/Feedback'
import WebsiteCustomization from './Pages/Web_Custumization'
import App_Customization from './Pages/App_customization'
import GraphicDesign from './Pages/Graphic_desig'
import WordPressSolutions from './Pages/Wordpress'
import VideoEditing from './Pages/Video_editing'
import ShopifyStore from './Pages/Shopify_Store'
import UIUXDesign from './Pages/ui_ux_designs'
import Portfolio from './Pages/Portfolio'
import Admin from './Pages/Admin'
import Home from './Pages/HomePage'
import Projact_web from './Pages/Project_website'
import Projact_app from './Pages/Project_app'
import Projact_wordpress from './Pages/Project_wordpress'
import Projact_shopifly from './Pages/Project_shopify'
import Projact_video from './Pages/Project_video'
import Projact_graphic from './Pages/Project_graphic'


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
    <ScrollToTop/>

<Navbar />
      <Routes>
        <Route path="/design-website" element={<Design_website />} />
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Home />} />
        <Route path="/get-started" element={<Get_start />} />
        <Route path='/templates' element={<Template/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path="/admin" element={<Admin />} />
        
        <Route path='/services/web_customization' element={<WebsiteCustomization/>}/>
        <Route path='/services/app_customization' element={<App_Customization/>}/>
        <Route path='/services/graphic-design' element={<GraphicDesign/>}/>
        <Route path='/services/wordpress' element={<WordPressSolutions/>}/>
        <Route path='/services/video-editing' element={<VideoEditing/>}/>
        <Route path='/services/shopify' element={<ShopifyStore/>}/>
        <Route path='/services/ui-ux-designs' element={<UIUXDesign/>}/>
        
        <Route path='/projects' element={<Portfolio/>}/>
        <Route path='/projects/website' element={<Projact_web/>}/>
        <Route path='/projects/app' element={<Projact_app/>}/>
        <Route path='/projects/wordpress' element={<Projact_wordpress/>}/>
        <Route path='/projects/shopify' element={<Projact_shopifly/>}/>
        <Route path='/projects/video' element={<Projact_video/>}/>
        <Route path='/projects/graphic' element={<Projact_graphic/>}/>


        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/feedback' element={<FeedbackPage/>}/>


      </Routes>
          <Footer/>

    </BrowserRouter>
  )
}

export default App