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
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
