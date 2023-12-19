import React from 'react';
import { useRouter } from 'next/router';
import { setLoggedOut } from '@/hooks/auth';

const Logout: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    setLoggedOut();
    router.push('/');
  };

  return (
    <button className="text-white p-2 border border-white rounded hover:bg-gray-600" onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
