import { useState, useEffect } from 'react';

const useUserData = (numberOfUsers = 5) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=15`);
        const data = await response.json();
        setUserData(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [numberOfUsers]);

  return { userData, loading };
};

export default useUserData;
