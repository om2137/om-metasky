import React, { useEffect, useState } from 'react';
import Logout from './Logout';
import useUserData from '@/hooks/useApi';
import User from '@/types/userTypes';
import Navbar from './Navbar';

const UserTable: React.FC = () => {

  const { userData, loading } = useUserData();
  const [filteredUsers, setFilteredUsers] = useState<User[]>(userData);
  useEffect(()=>{
    setFilteredUsers(userData)
  },[userData])
  
  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;
  const handleSearch: changeHandler = (e) => {
    const {target} = e;
    if (!target.value.trim()){
      return(
        setFilteredUsers(userData)
      )
    };
    const filteredData = userData.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(target.value.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className=' flex flex-col juistify-center text-center items-center bg-gray-200'>
      <div className='w-full'>
        <Navbar onChange={handleSearch}/>
      </div>
      <div className=' '>
        <table>
          <thead className="text-xl font-semibold">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>gender</th>
              
            </tr>
          </thead>
          <tbody className="text-lg">
            {filteredUsers.map((user:User) => (
              <tr key={user.email}>
                <td className="px-10 py-1.5">{`${user.name.first} ${user.name.last}`}</td>
                <td className="px-10 py-1.5">{user.email}</td>
                <td className="px-10 py-1.5">{user.dob.age}</td>
                <td className="px-16 py-1.5">{user.gender}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
