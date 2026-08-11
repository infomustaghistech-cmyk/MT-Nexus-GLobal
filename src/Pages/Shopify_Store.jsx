import React from 'react';
import { motion } from 'framer-motion';
// Video background import
import videoBg from '@/assets/15254965_1920_1080_24fps.mp4'; 

const ShopifyStore = () => {
  // 1. Shopify Specific Requirements Array
  const requirements = [
    {
      title: "Store Access & Account",
      desc: "Provide collaborator access to your Shopify store or staff account login details to begin the setup.",
    },
    {
      title: "Product Inventory Data",
      desc: "A CSV file or list containing product titles, descriptions, pricing, and high-quality product images.",
    },
    {
      title: "Payment & Shipping Rules",
      desc: "Information regarding your preferred payment gateways (PayPal, Stripe) and shipping zones/rates.",
    },
    {
      title: "Theme & Brand Identity",
      desc: "Specific UI preferences, branding assets (Logo, Favicon), and any premium themes you've purchased.",
    },
    {
      title: "Legal & Policy Pages",
      desc: "Text for your Privacy Policy, Terms of Service, and Refund Policy pages to ensure store compliance.",
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 font-sans relative">
      {/* --- VIDEO BACKGROUND --- */}
      <div className="fixed inset-0 -z-10 w-full h-full">
        <video 
          src={videoBg} 
          playsInline autoPlay muted loop 
          className="w-full h-full object-cover brightness-[0.3]" 
        />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN CARD SECTION --- */}
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
                  Shopify Store Creation
                </span>
              </motion.h1>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To launch a conversion-optimized e-commerce store that drives sales, we require essential business data. 
                Please provide the following details to ensure a seamless Shopify setup:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-gray-300 font-medium">
                    {/* Green Dot */}
                    <span className="h-2.5 w-2.5 bg-green-500 rounded-full mt-1 shrink-0"></span> 
                    
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
            
            {/* Right Side: Important Instructions Box */}
            <div className="p-8 lg:p-10 rounded-2xl border-l-8 border-[#358acc] flex flex-col justify-center bg-white/5 backdrop-blur-sm shadow-2xl">
              <h3 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl mb-4">
                E-commerce Notes
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "We strongly recommend having your product high-resolution images and clear pricing strategy ready 
                before the import phase. A well-defined collection structure and seamless checkout flow are 
                key to reducing cart abandonment and maximizing your store's ROI."
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ShopifyStore;