import React, { useState, useRef, useEffect } from 'react';
import { X, Search, Mail, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStart = () => {
  const [step, setStep] = useState(1); // 1: Topic, 2: Goals, 3: Account Creation
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);

  const topics = [
    "Photography", "Design", "Education", "Consulting", 
    "Art", "Health", "Marketing", "Technology", "Apparel"
  ];

  const goals = [
    "Sell services", "Build community", "Sell on-demand videos", 
    "Sell access to group events", "Sell memberships", "Offer a contact form",
    "Get appointments", "Publish a blog or other media", "Collect donations",
    "Showcase work/expertise", "Sell online courses", "Send invoices",
    "Promote a physical business", "Sell products"
  ];

  // Search filter logic
  const filteredTopics = topics.filter(t => 
    t.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // --- STEP 3: CREATE ACCOUNT PAGE ---
  if (step === 3) {
    return (
      <div className="h-screen w-full bg-white flex flex-col font-sans animate-in fade-in duration-500">
        <header className="p-6 flex justify-between items-center border-b border-transparent">
          <button 
            onClick={() => setStep(2)} 
            className="flex items-center gap-1 text-[11px] font-bold tracking-[0.15em] uppercase hover:opacity-70 transition-opacity"
          >
            <ChevronLeft size={16} strokeWidth={3} /> BACK
          </button>
          <button className="text-[11px] font-bold tracking-[0.15em] uppercase hover:opacity-70 transition-opacity">
            LOG IN
          </button>
        </header>

        <main className="flex-grow flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-[440px] text-center">
            <h1 className="text-[28px] font-medium tracking-tight mb-6">Create Your Account</h1>
            
            <p className="text-[11px] leading-relaxed text-gray-500 mb-10">
              By creating an account, you agree to our <span className="underline underline-offset-2 cursor-pointer">Terms of Service</span><br />
              and have read and understood the <span className="underline underline-offset-2 cursor-pointer">Privacy Policy</span>
            </p>

            <div className="space-y-3">
              <button className="w-full h-[54px] border border-black flex items-center justify-center gap-3 hover:bg-gray-50 transition-all group">
                <img src="https://www.google.com/favicon.ico" alt="G" className="w-4 h-4" loading="lazy" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Continue with Google</span>
              </button>
              
              <button className="w-full h-[54px] border border-black flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
                <Mail size={18} strokeWidth={1.5} />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Continue with Email</span>
              </button>
            </div>

            <button className="mt-10 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-900 border-b border-transparent hover:border-black transition-all">
              MORE OPTIONS
            </button>
            
            <div className="mt-16 text-[10px] text-gray-400 leading-loose">
              Secure Login with reCAPTCHA subject to Google <br />
              <span className="underline underline-offset-2">Terms</span> & <span className="underline underline-offset-2">Privacy</span>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- STEP 1 & 2: ONBOARDING ---
  return (
    <div className="flex h-screen w-full bg-white font-sans overflow-hidden animate-in fade-in duration-500">
      
      {/* Left Content */}
      <div className="w-full lg:w-[75%] flex flex-col relative">
       <Link to="/"><header className="p-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 448 512" className="fill-current"><path d="M0 180L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-236L0 180zM352 352c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64z"/></svg>
            <span className="font-bold tracking-[0.3em] text-[13px] uppercase">MT globel</span>
          </div>
        </header></Link>

        <main className="flex-grow flex items-center justify-center px-4 md:px-10 lg:px-24">
          <div className="w-full max-w-[900px] flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Info Column */}
            <div className="w-full lg:w-[35%]">
              <h2 className="text-[32px] font-normal leading-[1.15] mb-4 text-zinc-900">
                {step === 1 ? "What's your site about?" : "What do you want to do with your website?"}
              </h2>
              {step === 1 && (
                <p className="text-zinc-500 text-[14px] mb-8">
                  We'll tailor content and advice to your site needs.
                </p>
              )}
              
              {/* Progress Line */}
              <div className="w-16 h-[2.5px] bg-zinc-100 relative mt-10">
                <div 
                  className="absolute h-full bg-black transition-all duration-700 ease-in-out" 
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            </div>

            {/* Input/Selection Column */}
            <div className="w-full lg:w-[65%]">
              {step === 1 ? (
                <div ref={dropdownRef} className="relative">
                  <div className={`flex items-center p-4 bg-[#f6f6f6] border-b border-zinc-200 transition-all duration-300 ${isFocused ? 'bg-white shadow-2xl -translate-y-1 border-transparent' : ''}`}>
                    <Search className="w-5 h-5 text-zinc-400 mr-4" />
                    <input 
                      type="text" 
                      placeholder="Search for your site topic"
                      className="bg-transparent border-none outline-none text-base w-full placeholder-zinc-400"
                      value={search}
                      onFocus={() => setIsFocused(true)}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  
                  {isFocused && (
                    <div className="absolute top-full left-0 w-full bg-white z-50 max-h-[320px] overflow-y-auto shadow-2xl border-t border-zinc-50 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase p-5 tracking-[0.15em]">
                        {search ? "Results" : "Popular Topics"}
                      </p>
                      {filteredTopics.map(topic => (
                        <div 
                          key={topic} 
                          onClick={() => {setSearch(topic); setIsFocused(false)}}
                          className="px-6 py-4 text-[15px] text-zinc-800 hover:bg-zinc-50 cursor-pointer border-b border-zinc-50 last:border-none transition-colors"
                        >
                          {topic}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {goals.map((goal) => (
                    <label key={goal} className="flex items-center gap-4 p-4 bg-[#f8f8f8] rounded-[4px] cursor-pointer hover:bg-zinc-100 transition-all group">
                      <input type="checkbox" className="w-4 h-4 accent-black border-zinc-300 rounded-sm" />
                      <span className="text-[13px] text-zinc-700 font-medium">{goal}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        <footer className="h-24 border-t border-zinc-100 flex justify-between items-center px-12">
          {step === 2 ? (
            <button 
              onClick={() => setStep(1)}
              className="px-4 md:px-10 py-[14px] border border-zinc-200 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-50 transition-colors"
            >
              Back
            </button>
          ) : <div />}
          
          <button 
            onClick={() => setStep(step + 1)}
            className="px-12 py-[14px] bg-black text-white text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-zinc-800 transition-all active:scale-95"
          >
            {step === 1 ? "Next" : "Finish"}
          </button>
        </footer>
      </div>

      {/* Right Visual Image */}
      <div className="hidden lg:block lg:w-[25%] relative bg-zinc-100">
        <div className="absolute top-10 right-10 z-10">
          <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-white drop-shadow-md hover:underline">
            I'm just browsing
          </button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop" 
          className="w-full h-full object-cover brightness-95" 
          alt="onboarding context" 
        loading="lazy" />
        {/* Sidebar Tools Overlay */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/10 backdrop-blur-sm p-2 flex flex-col gap-5 text-white/90 rounded-l-lg border-l border-y border-white/20">
            <Search size={18} strokeWidth={2.5} className="cursor-pointer hover:scale-110 transition-transform" />
            <Mail size={18} strokeWidth={2.5} className="cursor-pointer hover:scale-110 transition-transform" />
            <div className="w-5 h-5 border-2 border-white/90 rounded-sm cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default GetStart;