import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from './Logout';
import useUserData from '@/hooks/useApi';

const UserTable: React.FC = () => {

  const { userData, loading } = useUserData();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>User Table</h2>
      < Logout />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>age</th>
            <th>gender</th>
            
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.email}>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.dob.age}</td>
              <td>{user.gender}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
