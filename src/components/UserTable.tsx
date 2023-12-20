import React, { useEffect, useState } from 'react';
import Logout from './Logout';
import useUserData from '@/hooks/useApi';
import User from '@/types/userTypes';
import Navbar from './Navbar';

const UserTable: React.FC = () => {

  const { userData, loading } = useUserData();
  const [view, setView] = useState(true);
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
        <Navbar onChange={handleSearch} view={setView}/>
      </div>
      { view ?
      // Table View
      <div className='text-start py-8'>
        <h1 className='col-span-5 text-center mb-4 text-2xl font-bold'>User Data</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {filteredUsers.map((user:User) => (
              <tr key={user.email}>
                <td className="border border-gray-600 px-4 py-2">{`${user.name.first} ${user.name.last}`}</td>
                <td className="border border-gray-600 px-4 py-2">{user.email}</td>
                <td className="border border-gray-600 px-4 py-2">{user.dob.age}</td>
                <td className="border border-gray-600 px-4 py-2">{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      :
      // {/* cards view */}
      <div className='py-10 px-32 grid grid-cols-5 gap-4'>
        <h1 className='col-span-5 text-center mb-4 text-2xl font-bold'>User Data</h1>
        
        {filteredUsers.map((user:User) => (
          <div key={user.email} className='border border-gray-600 rounded p-4 text-start '>
            <div>Name: {`${user.name.first} ${user.name.last}`}</div>
            <div>Email: {user.email}</div>
            <div>Age: {user.dob.age}</div>
            <div>gender: {user.gender}</div>
          </div>
        ))}
      </div> 
    }
    </div>
  );
};

export default UserTable;
