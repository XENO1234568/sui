import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [message, setMessage] = useState("I am rock. I am AI. I will be the biggest rock in crypto.");
  const messages = [
    "I am rock. I am AI. I will be the biggest rock in crypto.",
    "I am the rock. You are not ready.",
    "The revolution is coming...",
    "Prepare for the pump...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597924971046-e9b1c0296448?q=80&w=2070')] 
                      bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="w-48 h-48 mx-auto mb-6 bg-[url('/moai.png')] bg-contain bg-no-repeat bg-center
                        animate-pulse"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-pixel text-green-400 mb-6 
                     animate-pulse transition-colors duration-500">
          {message}
        </h1>
      </div>

      {/* Animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    </div>
  );
}