import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set initial volume to 30%
      audioRef.current.loop = true; // Enable looping
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleSound}
        className="p-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full hover:bg-black/50 transition-colors"
        title={isPlaying ? "Mute" : "Unmute"}
      >
        {isPlaying ? <Volume2 size={20} className="text-[#D1D1D1]" /> : <VolumeX size={20} className="text-[#D1D1D1]" />}
      </button>
      <audio ref={audioRef} src="/ssstwitter.com_1736044054831.mp3" />
    </div>
  );
}