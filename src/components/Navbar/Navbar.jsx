// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Left Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/programs" className="nav-link">Programs</Link>
          <Link to="/instructors" className="nav-link">Instructors</Link>
        </div>

       {/* Center Logo and Name */}
<div className="flex-1 flex items-center justify-center">
  <span className="font-bold text-2xl bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
    ONE
  </span>
  <img src={logo} alt="One Tribe Logo" className="h-12 mx-2" /> {/* Logo Image */}
  <span className="font-bold text-2xl bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
    TRIBE
  </span>
</div>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="button-link">About</Link>
          <Link to="/contact" className="button-link">Contact</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="text-black">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="mobile-link">Home</Link>
          <Link to="/programs" onClick={() => setIsOpen(false)} className="mobile-link">Programs</Link>
          <Link to="/instructors" onClick={() => setIsOpen(false)} className="mobile-link">Instructors</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="mobile-link">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mobile-link">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
