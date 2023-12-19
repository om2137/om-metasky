import { useState, useEffect } from 'react';
import User from '@/types/userTypes';

const useUserData = () => {
  const [userData, setUserData] = useState<User[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=30`);
        const data = await response.json();
        setUserData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading, error };
};

export default useUserData;
