import React from 'react';

// Props mein 'path' ko receive karein
const CustomCard = ({ title, desc, path, children }) => {
  return (
    <div className="relative group overflow-hidden bg-[#111] border border-gray-800 p-8 rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
      
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Yahan Image/Icon call ho raha hai */}
      <div className="mb-6 w-14 h-14 rounded-xl bg-gray-800/50 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {path ? (
          <img 
            src={path} 
            alt={title} 
            className="w-full h-full object-contain"
            // Agar image load na ho to ye error handle karega
            onError={(e) = loading="lazy"> { e.target.style.display = 'none'; }} 
          />
        ) : (
          /* Fallback agar image path na mile */
          <div className="text-green-500 font-bold">Icon</div>
        )}
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {desc}
      </p>

      <div className="relative z-10">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-green-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default CustomCard;