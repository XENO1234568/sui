import { useState, useEffect } from 'react';

export function useContractAddress() {
  const [address, setAddress] = useState('Contract address coming soon');

  useEffect(() => {
    // Get address from localStorage if it exists
    const savedAddress = localStorage.getItem('contractAddress');
    if (savedAddress) {
      setAddress(savedAddress);
    }

    const handleUpdate = (event: CustomEvent<{ address: string }>) => {
      setAddress(event.detail.address);
      localStorage.setItem('contractAddress', event.detail.address);
    };

    window.addEventListener('contractAddressUpdated', handleUpdate as EventListener);
    return () => {
      window.removeEventListener('contractAddressUpdated', handleUpdate as EventListener);
    };
  }, []);

  return address;
}