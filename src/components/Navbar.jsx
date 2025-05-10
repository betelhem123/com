import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // For icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
        scrolled ? 'bg-transparent text-yellow-400' : 'bg-black text-white'
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="ml-4">
          <img
            src="../src/assets/images/1.PNG"
            alt="Logo"
            className="h-20 w-30 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 mr-10 font-mono font-bold">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#shop" className="hover:text-gray-400">Shop</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden mr-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <ul className="flex flex-col items-center mt-4 gap-4 md:hidden font-mono font-bold">
          <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">About</a></li>
          <li><a href="#shop" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">Shop</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
