import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CONTRACT } from '../config/contract';

export default function ContractAddress() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-gray-800">
      <code className="text-[#D1D1D1] font-mono">{CONTRACT.address}</code>
      <button
        onClick={handleCopy}
        className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
        title="Copy contract address"
      >
        {copied ? (
          <Check size={18} className="text-green-400" />
        ) : (
          <Copy size={18} className="text-[#D1D1D1]" />
        )}
      </button>
    </div>
  );
}