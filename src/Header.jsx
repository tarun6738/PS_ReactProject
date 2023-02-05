import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './Header.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mt-2">
      <div className="flex items-center px-4 py-3">
        
        
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <Link
              to="/"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:bg-orange-500 mr-4 text-xl ml-1`}
            >
              Home
            </Link>
            <Link
              to="/Researchareas"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-orange mr-4 text-xl ml-5`}
            >
              Research Areas
            </Link>
            <Link
              to="/University"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 text-xl ml-5`}
            >
              Universities
            </Link>
            <Link
              to="/ContactUs"
              className={`block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 text-xl ml-5`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div>
        <Link to="/LoginSignupPage"><button className="bg-gray-600 text-white py-2 px-4 rounded-lg mr-5">Login</button></Link>
        <Link to="/LoginSignupPage"><button className="bg-orange-600 text-black-600 text-white py-2 px-4 rounded-lg">Sign Up</button></Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
