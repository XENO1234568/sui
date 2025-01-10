import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Book, Map, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-black/20">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo and Brand */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity animate-fade-in"
          >
            <img src="/9fd916.png" alt="Logo" className="h-14 md:h-16" />
            <span className="text-white font-medium text-xl md:text-2xl ml-3">SwarmUI</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 animate-slide-in">
            <Link 
              to="/install-guide"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 
                       text-white rounded-lg transition-all duration-200 flex items-center gap-2 
                       hover:shadow-lg hover:shadow-purple-500/20"
            >
              <Book size={18} />
              <span className="text-sm font-medium">Install Guide</span>
            </Link>

            <Link 
              to="/roadmap"
              className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 
                       text-white rounded-lg transition-all duration-200 flex items-center gap-2 
                       hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <Map size={18} />
              <span className="text-sm font-medium">Token Road Map</span>
            </Link>

            <a 
              href="https://x.com/SwarmUI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#D1D1D1] hover:bg-[#E8E8E8] text-black rounded-lg 
                       transition-all duration-200 flex items-center gap-2
                       hover:shadow-lg hover:shadow-white/10"
            >
              <Twitter size={18} />
              <span className="text-sm font-medium">Follow Us</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <Link 
              to="/install-guide"
              className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 
                       text-white rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Book size={18} />
              <span className="text-sm font-medium">Install Guide</span>
            </Link>

            <Link 
              to="/roadmap"
              className="block px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-800 
                       text-white rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Map size={18} />
              <span className="text-sm font-medium">Token Road Map</span>
            </Link>

            <a 
              href="https://x.com/SwarmUI"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-[#D1D1D1] text-black rounded-lg 
                       transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Twitter size={18} />
              <span className="text-sm font-medium">Follow Us</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}