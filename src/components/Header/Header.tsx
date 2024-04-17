// Header.jsx
import { useState } from "react";
import Logo from "../../assets/logo.png";
import MobileMenu from "../MobileMenu/MobileMenu";
const Header = () => {
  const [isOpen, setIsOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-white relative">
      {" "}
      {/* Changed bg-gray-800 to bg-transparent */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          {/* Logo */}
          <img
            className="h-10"
            src={Logo}
            alt="Logo"
          />
        </div>
        <div className="hidden md:flex md:space-x-4">
          {/* Desktop Menu Items */}
          <a
            href="#"
            className="text-black font-semibold hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Page 1
          </a>
          <a
            href="#"
            className="text-black font-semibold hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Page 2
          </a>
          <a
            href="#"
            className="text-black font-semibold hover:bg-gray-700 px-4 py-2 rounded-md"
          >
            Page 3
          </a>
        </div>
        <div className="flex items-center md:hidden z-50">
          {" "}
          {/* Added z-50 here */}
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none relative"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Render the full-screen menu */}
      <MobileMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
