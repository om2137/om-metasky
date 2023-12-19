import React, { useEffect } from 'react';
import LoginForm from '../components/Login';
import UserTable from '../components/UserTable';
import { isLoggedIn } from '@/hooks/auth';
import { useDispatch } from 'react-redux';
import { log } from 'console';
import useUserData from '@/hooks/useApi';
import { setUserData } from '@/slices/userData';

const Home: React.FC = () => {
  
  const isUserLoggedIn = isLoggedIn();

  const dispatch = useDispatch();
  const { userData } = useUserData();
  useEffect(() => {
    const checkAuthentication = () => {
      const isUserLoggedIn = isLoggedIn();

      if (isUserLoggedIn) {
        dispatch(setUserData(userData));
      } 
    };

    checkAuthentication();
  }, [userData, dispatch]);

  return (
    <div>
      {isUserLoggedIn  ? (
        <UserTable />
      ) : (
        <div>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default Home;
