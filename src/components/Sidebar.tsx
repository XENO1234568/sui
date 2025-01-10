import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Map, Twitter, Menu, X, Users } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black/40 backdrop-blur-md border-r border-white/10 transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
                      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center p-6 hover:opacity-80 transition-opacity"
          >
            <img src="/9fd916.png" alt="Logo" className="h-12" />
            <span className="text-white font-medium text-xl ml-3">SwarmUI</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <Link 
                  to="/install-guide"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Book size={20} />
                  <span>Install Guide</span>
                </Link>

                <Link 
                  to="/roadmap"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Map size={20} />
                  <span>Token Road Map</span>
                </Link>

                <a 
                  href="https://x.com/SwarmUI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                  <span>Follow Us</span>
                </a>
              </div>

              {/* Contributors Section */}
              <div className="space-y-4">
                <h3 className="px-4 text-sm font-semibold text-white/40 uppercase tracking-wider flex items-center gap-2">
                  <Users size={14} />
                  Contributors
                </h3>
                
                <a 
                  href="https://github.com/mcmonkeyprojects/SwarmUI/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <img 
                      src="/4000772.png" 
                      alt="Contributor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium group-hover:text-white">mcmonkey</span>
                    <span className="block text-xs text-white/40 group-hover:text-white/60">Lead Developer</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/HellerCommaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <img 
                      src="/2174310.png" 
                      alt="Contributor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium group-hover:text-white">HellerCommaA</span>
                    <span className="block text-xs text-white/40 group-hover:text-white/60">Core Contributor</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/olivierlacan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/10">
                    <img 
                      src="/65950.jpeg" 
                      alt="Contributor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium group-hover:text-white">olivierlacan</span>
                    <span className="block text-xs text-white/40 group-hover:text-white/60">Core Contributor</span>
                  </div>
                </a>
              </div>

              {/* Projects Section */}
              <div className="space-y-4">
                <h3 className="px-4 text-sm font-semibold text-white/40 uppercase tracking-wider">
                  Projects Using SwarmUI
                </h3>
                
                <a 
                  href="https://github.com/Urabewe/OllamaVision"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/384774626-a39b87b2-e396-4cca-bae8-29041826d7e3.png" 
                      alt="OllamaVision" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium group-hover:text-white">OllamaVision</span>
                    <span className="block text-xs text-white/40 group-hover:text-white/60">Vision AI Interface</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/maedtb/taggui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/icon (1).png" 
                      alt="TagGUI" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium group-hover:text-white">TagGUI</span>
                    <span className="block text-xs text-white/40 group-hover:text-white/60">Tag Management Interface</span>
                  </div>
                </a>

                <a 
                  href="https://github.com/maedtb/OneTrainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/b775fa90-cd8f-4f97-8eb2-b4f559e31b9c.png" 
                      alt="OneTrainer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium group-hover:text-white">OneTrainer</span>
                    <span className="block text-xs text-white/40 group-hover:text-white/60">AI Training Platform</span>
                  </div>
                </a>
              </div>
            </div>
          </nav>

          {/* Footer Info */}
          <div className="p-4 text-white/40 text-sm border-t border-white/10">
            © SwarmUI 2025
          </div>
        </div>
      </div>
    </>
  );
}