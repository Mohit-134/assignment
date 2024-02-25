import React from 'react';
import { FaChevronDown } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-52 flex justify-around items-center py-28 m-2">
      <div> 
        <h1 className='py-5 mt-[-20px]'> CATEGORIES</h1>
        <ul className=''>
            <li className='p-2'>Web Builder</li>
            <li className='p-2'>Hosting</li>
            <li className='p-2'>Data Center</li>
            <li className='p-2'>Robotic-Automation</li>
            
        </ul>
      </div>
      <div> 
      <h1 className='py-5'> CONTACT</h1>
        <ul className=''>
            <li className='p-2'>Contact</li>
            <li className='p-2'>Privacy Policy</li>
            <li className='p-2'>Terms of service</li>
            <li className='p-2'>Categories</li>
            <li className='p-2'>About</li>
            
        </ul>
      </div>
      <span className='flex gap-4 items-center' >United States <FaChevronDown/></span>
      <div> 
      </div>
    </footer>
  );
};

export default Footer;
