import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-pixel text-green-400 mb-8">About PumpRock</h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
          <p className="text-gray-300 font-pixel mb-6 leading-relaxed">
            PumpRock is the fusion of AI and crypto. A rock like no other, set to shake the world of 
            memecoins. Join the revolution before it's too late.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-4 bg-black/50 rounded-lg border border-green-500/20 transform hover:scale-105 transition-transform">
              <h3 className="text-green-400 font-pixel mb-2">Stage 1</h3>
              <p className="text-gray-400">Concept & Logo Creation</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg border border-green-500/20 transform hover:scale-105 transition-transform">
              <h3 className="text-green-400 font-pixel mb-2">Stage 2</h3>
              <p className="text-gray-400">Community Building</p>
            </div>
            <div className="p-4 bg-black/50 rounded-lg border border-green-500/20 transform hover:scale-105 transition-transform">
              <h3 className="text-green-400 font-pixel mb-2">Stage 3</h3>
              <p className="text-gray-400">Public Beta Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}