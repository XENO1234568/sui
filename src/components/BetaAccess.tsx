import React, { useState } from 'react';

export default function BetaAccess() {
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { email, wallet });
  };

  return (
    <section id="beta" className="relative bg-gray-900 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-pixel text-green-400 mb-8 text-center">
          Be the first to experience the biggest rock in crypto!
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-black/50 backdrop-blur-sm p-8 rounded-lg 
                                               border border-green-500/20">
          <div>
            <label htmlFor="email" className="block text-gray-300 font-pixel mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-black border border-green-500/20 text-gray-300 
                       focus:border-green-400 focus:ring-1 focus:ring-green-400 rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="wallet" className="block text-gray-300 font-pixel mb-2">Wallet Address (Optional)</label>
            <input
              type="text"
              id="wallet"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="w-full px-4 py-2 bg-black border border-green-500/20 text-gray-300 
                       focus:border-green-400 focus:ring-1 focus:ring-green-400 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-pixel 
                     transition-all duration-200 transform hover:scale-105 
                     border-2 border-green-400 hover:border-green-300"
          >
            Join Beta Access
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 font-pixel text-sm">
          No official token is live yet. Public Beta coming soon.
        </p>
      </div>
    </section>
  );
}