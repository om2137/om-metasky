import React from 'react';
import Logout from './Logout';
import Switch from '@mui/material/Switch';

interface Props<T> {
    results?: T[];
    onChange?: React.ChangeEventHandler;
}
const Navbar = <T extends object>({onChange, view}: Props<T>): JSX.Element => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      view(checked)
    };
  return (
    <div className="flex-between ">
      <div className="bg-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2 px-40">
            <span className="text-white text-xl font-bold hidden sm:block pl-20">
              Dashboard
            </span>
            <div className="relative flex" >
                <div className="flex px-4 text-white">
                    <span className='py-2'>Table</span>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                    />
                    <span className='py-2'>Cards</span>
                </div>
                
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