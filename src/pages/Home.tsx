import React from 'react';
import Logo from '../components/Logo';
import ContractAddress from '../components/ContractAddress';

interface HomeProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

export default function Home({ setIsModalOpen }: HomeProps) {
  return (
    <div className="text-center space-y-8">
      <Logo />
      <ContractAddress />
    </div>
  );
}