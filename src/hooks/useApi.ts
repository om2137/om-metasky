import { useState, useEffect } from 'react';
import axios from 'axios';
import User from '@/types/userTypes';

const useUserData = () => {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://randomuser.me/api/?results=30`);
        setUserData(response.data.results);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading };
};

export default useUserData;
