// MobileMenu.tsx
import React from "react";
import Logo from "../../assets/logo.png";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<Props> = ({
  isOpen,
  toggleMenu,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 z-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-end pt-4 pr-4">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center h-20">
        {" "}
        {/* Changed here */}
        {/* Logo */}
        <img
          className="h-10"
          src={Logo}
          alt="Logo"
        />
      </div>
      <div className="flex justify-center py-4">
        {/* Menu Items */}
        <nav className="text-center">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white font-semibold hover:bg-gray-700"
              >
                Page 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white font-semibold hover:bg-gray-700"
              >
                Page 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-white font-semibold hover:bg-gray-700"
              >
                Page 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center pb-4">
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
