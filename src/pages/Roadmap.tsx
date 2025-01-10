import React from 'react';
import { Lock, Rocket, BarChart3, Shield } from 'lucide-react';

export default function Roadmap() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Token Road Map
      </h1>

      {/* Token Distribution */}
      <section className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20 mb-8">
        <h2 className="text-xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
          <BarChart3 size={24} />
          Token Distribution
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Distribution Chart */}
          <div className="relative aspect-square max-w-[300px] mx-auto">
            <div className="absolute inset-0 rounded-full border-8 border-indigo-500/30"></div>
            <div 
              className="absolute inset-0 rounded-full border-8 border-transparent border-t-indigo-500"
              style={{ 
                transform: 'rotate(324deg)',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            ></div>
            <div 
              className="absolute inset-0 rounded-full border-8 border-transparent border-t-pink-500"
              style={{ 
                transform: 'rotate(27deg)',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            ></div>
            <div 
              className="absolute inset-0 rounded-full border-8 border-transparent border-t-orange-500"
              style={{ 
                transform: 'rotate(9deg)',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
              }}
            ></div>
          </div>

          {/* Distribution Details */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                <h3 className="text-lg font-medium text-white">Circulating Supply (90%)</h3>
              </div>
              <p className="text-gray-300 text-sm pl-6">
                90% of our tokens are already out there, actively fueling the hands-on energy of the community. This ensures a vibrant and dynamic ecosystem where the token is used, traded, and driving innovation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <h3 className="text-lg font-medium text-white">Token Lock (7.5%)</h3>
              </div>
              <p className="text-gray-300 text-sm pl-6">
                We've set aside 7.5% of the tokens in a secure reserve. This helps us plan for the future—whether it's funding new developments, forming partnerships, or tackling unforeseen opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <h3 className="text-lg font-medium text-white">Team (2.5%)</h3>
              </div>
              <p className="text-gray-300 text-sm pl-6">
                Our team holds a small 2.5% of the tokens. This keeps us motivated and aligned with the project's success while ensuring most of the value remains with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-indigo-500/20">
        <h2 className="text-xl font-semibold text-indigo-400 mb-6 flex items-center gap-2">
          <Rocket size={24} />
          Development Roadmap
        </h2>

        <div className="space-y-6">
          {/* Q1 2024 */}
          <div className="relative pl-8 pb-8 border-l-2 border-indigo-500/20">
            <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-lg font-semibold text-white mb-2">Q1 2024</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Token Launch and Initial Distribution</li>
              <li>• Smart Contract Audit</li>
              <li>• Community Building Phase</li>
            </ul>
          </div>

          {/* Q2 2024 */}
          <div className="relative pl-8 pb-8 border-l-2 border-indigo-500/20">
            <div className="absolute w-4 h-4 bg-indigo-500/50 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-lg font-semibold text-white mb-2">Q2 2024</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Platform Beta Release</li>
              <li>• Partnership Announcements</li>
              <li>• Marketing Campaign Launch</li>
            </ul>
          </div>

          {/* Q3 2024 */}
          <div className="relative pl-8 pb-8 border-l-2 border-indigo-500/20">
            <div className="absolute w-4 h-4 bg-indigo-500/30 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-lg font-semibold text-white mb-2">Q3 2024</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Advanced Features Implementation</li>
              <li>• Community Governance Launch</li>
              <li>• Ecosystem Expansion</li>
            </ul>
          </div>

          {/* Q4 2024 */}
          <div className="relative pl-8">
            <div className="absolute w-4 h-4 bg-indigo-500/20 rounded-full -left-[9px] top-0"></div>
            <h3 className="text-lg font-semibold text-white mb-2">Q4 2024</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Mobile App Launch</li>
              <li>• Cross-chain Integration</li>
              <li>• Global Expansion Initiatives</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}