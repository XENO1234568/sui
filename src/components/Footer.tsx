import React from 'react';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-4 text-center text-white/60 text-sm">
      <p className="flex items-center justify-center gap-4">
        © SwarmUI 2025. All Rights Reserved
        <span className="flex items-center gap-4">
          •
          <a 
            href="https://x.com/SwarmUI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#E3B341] inline-flex items-center gap-1"
          >
            <Twitter size={16} />
            Twitter
          </a>
          •
          <a 
            href="https://github.com/mcmonkeyprojects/SwarmUI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#E3B341] inline-flex items-center gap-1"
          >
            <Github size={16} />
            GitHub
          </a>
        </span>
      </p>
    </footer>
  );
}