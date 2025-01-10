import React from 'react';
import { Terminal, Package, GitBranch, PlayCircle } from 'lucide-react';

export default function InstallGuide() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Installation Guide
      </h1>

      <div className="space-y-8">
        {/* Prerequisites */}
        <section className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
            <Terminal size={24} />
            Prerequisites
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Node.js 16 or higher</li>
            <li>npm or yarn package manager</li>
            <li>Git (optional, for cloning)</li>
          </ul>
        </section>

        {/* Installation Steps */}
        <section className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
            <Package size={24} />
            Installation Steps
          </h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">1. Clone the Repository</h3>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">git clone https://github.com/mcmonkeyprojects/SwarmUI.git</code>
              </pre>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">2. Install Dependencies</h3>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">cd SwarmUI
npm install</code>
              </pre>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white">3. Start Development Server</h3>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
                <code className="text-gray-300">npm run dev</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
            <GitBranch size={24} />
            Configuration
          </h2>
          <p className="text-gray-300 mb-4">
            Create a <code className="bg-black/50 px-2 py-1 rounded">.env</code> file in the root directory with the following variables:
          </p>
          <pre className="bg-black/50 p-4 rounded-md overflow-x-auto">
            <code className="text-gray-300">VITE_API_URL=your_api_url_here
VITE_CONTRACT_ADDRESS=your_contract_address_here</code>
          </pre>
        </section>

        {/* Usage */}
        <section className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
          <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
            <PlayCircle size={24} />
            Usage
          </h2>
          <p className="text-gray-300">
            Once the development server is running, open <code className="bg-black/50 px-2 py-1 rounded">http://localhost:5173</code> in your browser to start using SwarmUI. For production deployment, use <code className="bg-black/50 px-2 py-1 rounded">npm run build</code> to create an optimized build.
          </p>
        </section>
      </div>
    </div>
  );
}