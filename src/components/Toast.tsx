import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-10 z-50 animate-fade-in">
      <div className="bg-black/90 text-white px-6 py-3 rounded-lg border border-[#D1D1D1]/20 shadow-lg">
        {message}
      </div>
    </div>
  );
}