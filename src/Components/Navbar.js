import React from 'react';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-black h-16 flex   items-center text-white  md:gap-20 md:pl-96  '>
      <div className='flex items-center bg-white rounded-lg'>
        <div className=' w-10 h-10 flex justify-center items-center'>
          <FaSearch className='h-6 text-gray-600' />
        </div>
        <input className=' bg-white w-60 h-full bg-transparent border-none focus:outline-none text-white placeholder-white' type='text' placeholder='Search...' />
      </div>
      <ul className='md:flex flex-row  md:gap-20'>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's Deals</li>
      </ul>
    </div>
  );
};

export default Navbar;
