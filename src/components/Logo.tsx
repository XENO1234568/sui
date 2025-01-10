import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-float">
        <img 
          src="/9fd916.png" 
          alt="SwarmUI Logo" 
          className="w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 object-contain animate-scale-in"
        />
      </div>
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-medium animate-fade-in">
        SwarmUI
      </h1>
      <div className="text-center animate-slide-in">
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-medium">
          Empowering the Future of AI-Driven DeFi
        </p>
      </div>
    </div>
  );
}