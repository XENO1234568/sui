import { useState } from 'react';

interface FormData {
  telegramUsername: string;
  twitterUsername: string;
  holdsRocky: string;
  about: string;
}

export function useEarlyAccessForm() {
  const [formData, setFormData] = useState<FormData>({
    telegramUsername: '',
    twitterUsername: '',
    holdsRocky: 'No',
    about: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    return formData;
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    updateField,
    handleSubmit
  };
}