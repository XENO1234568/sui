import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConstellationBackground from './components/ConstellationBackground';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import EarlyAccessModal from './components/EarlyAccessModal';
import Home from './pages/Home';
import InstallGuide from './pages/InstallGuide';
import Roadmap from './pages/Roadmap';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex">
        <ConstellationBackground />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 ml-0 md:ml-64 min-h-screen flex items-center justify-center p-4">
          <Routes>
            <Route path="/" element={<Home setIsModalOpen={setIsModalOpen} />} />
            <Route path="/install-guide" element={<InstallGuide />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </main>

        <Footer />
        
        <EarlyAccessModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Router>
  );
}