import React from 'react';
import { Link } from 'react-router-dom'; // for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
        <li><Link to="/shop" className="hover:text-gray-400">Shop</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
