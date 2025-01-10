import React from 'react';
import { X } from 'lucide-react';
import { useEarlyAccessForm } from '../hooks/useEarlyAccessForm';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const { formData, updateField, handleSubmit } = useEarlyAccessForm();

  if (!isOpen) return null;

  const onSubmit = (e: React.FormEvent) => {
    handleSubmit(e);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://video.twimg.com/tweet_video/GJNuHkpWwAA6_4q.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative bg-black/90 p-8 rounded-lg w-full max-w-md border border-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6">Get Early Access</h2>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Telegram Username</label>
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-[#D1D1D1] focus:outline-none"
              value={formData.telegramUsername}
              onChange={(e) => updateField('telegramUsername', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Twitter Username</label>
            <input
              type="text"
              placeholder="@username"
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-[#D1D1D1] focus:outline-none"
              value={formData.twitterUsername}
              onChange={(e) => updateField('twitterUsername', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Do you hold $ROCKY?</label>
            <select
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-[#D1D1D1] focus:outline-none"
              value={formData.holdsRocky}
              onChange={(e) => updateField('holdsRocky', e.target.value)}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Tell us about yourself</label>
            <textarea
              placeholder="Share your experience with DeFi, trading, etc..."
              className="w-full bg-black border border-gray-800 rounded p-3 text-white focus:border-[#D1D1D1] focus:outline-none h-32"
              value={formData.about}
              onChange={(e) => updateField('about', e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D1D1D1] text-black py-3 rounded hover:bg-[#E8E8E8] transition-colors font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}