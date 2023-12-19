// pages/index.tsx
import React, { useEffect } from 'react';
import LoginForm from '../components/Login';
import UserTable from '../components/UserTable';
import { isLoggedIn } from '@/hooks/auth';
import { useDispatch } from 'react-redux';
import { log } from 'console';

const Home: React.FC = () => {
  
  // const isUserLoggedIn = isLoggedIn();
  // console.log(isUserLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthentication = () => {
      const isUserLoggedIn = isLoggedIn();

      if (isUserLoggedIn) {
        
      } else {
        // If the user is not logged in, dispatch the logout action
        // dispatch(logout());
      }
    };

    checkAuthentication();
  }, [dispatch]);
  
  // You can use Redux state or local state to manage the login state
  const isUserLoggedIn = isLoggedIn();
  console.log(isUserLoggedIn)
  return (
    <div>
      {isUserLoggedIn  ? (
        <UserTable />
      ) : (
        <div>
          <h1>Welcome to the Dashboard App</h1>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default Home;
