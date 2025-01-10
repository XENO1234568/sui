import React, { useEffect, useRef } from 'react';
import { drawConstellations } from '../utils/constellation';

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    drawConstellations(ctx);

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <>
      {/* Gradient background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-[#2E1437] to-black" style={{ zIndex: -2 }} />
      
      {/* Enhanced gradient overlays for depth */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {/* Radial gradient for added depth */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(46, 20, 55, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />
        
        {/* Subtle vignette effect */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 50%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        />
      </div>
      
      {/* Constellation canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0, opacity: 0.6 }}
      />
    </>
  );
}