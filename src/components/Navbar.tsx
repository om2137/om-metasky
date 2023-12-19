import React from 'react';
import Logout from './Logout';

interface Props<T> {
    results?: T[];
    onChange?: React.ChangeEventHandler;
}
const Navbar = <T extends object>({onChange}: Props<T>): JSX.Element => {
  return (
    <div className="flex-between ">
      <div className="bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2 px-40">
            <span className="text-white text-xl font-bold hidden sm:block pl-20">
              Dashboard
            </span>
            <div className="relative flex" >
              <input
                className="block w-full pl-10 pr-4 py-2 border rounded-md bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                onChange={onChange}
                placeholder="Search..."
                aria-label="search"
              />
              <div className="px-4">
                < Logout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;