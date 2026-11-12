<div className="min-h-screen bg-[#1f242d] text-white font-sans flex flex-col">


      {/* Main Content */}
      <main className="flex-grow flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-10 lg:px-24 py-6 md:py-10 lg:py-0">
        
        {/* Left Section */}
        <div className="flex-1 space-y-4 text-center lg:text-left mt-10 lg:mt-0">
          <h3 className="text-2xl font-bold">Hello, It's Me</h3>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Rehna Ali</h1>
          <h3 className="text-2xl font-bold">
            And I'm a <span className="text-[#0ef]">Founder of MT Nexs Global</span>
          </h3>
          <p className="max-w-xl text-slate-300 leading-relaxed mx-auto lg:mx-0">
            MT Nexs Global ko lead karte huye mera maqsad digital innovation ko aam karna hai. 
            Hum modern technology aur creative strategies ke zariuye business solutions 
            ko scalable aur user-friendly banate hain.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-4 pt-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 border-2 border-[#0ef] rounded-full flex items-center justify-center text-[#0ef] hover:bg-[#0ef] hover:text-[#1f242d] hover:shadow-[0_0_20px_#0ef] transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Button */}
          <div className="pt-6">
            <button className="px-8 py-3 bg-[#0ef] text-[#1f242d] font-bold rounded-full shadow-[0_0_20px_#0ef] hover:shadow-none transition-all duration-300">
              See Project
            </button>
          </div>
        </div>

        {/* Right Section (Image with Hexagon Glow) */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative w-64 h-72 lg:w-80 lg:h-96">
            {/* Hexagon Glow Effect */}
            <div 
              className="absolute inset-0 bg-[#0ef] opacity-80 shadow-[0_0_50px_#0ef]"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            ></div>
            
            {/* Image Container */}
            <div 
              className="absolute inset-1 bg-[#1f242d] flex items-center justify-center overflow-hidden"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              <img 
                src="src/assets/WhatsApp Image 2026-03-11 at 3.33.52 AM.webp" 
                alt="Rehna Ali" 
                className="w-full h-full object-cover"
              loading="lazy" />
            </div>
          </div>
        </div>

      </main>
       </div>