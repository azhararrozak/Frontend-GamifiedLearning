/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = ({username, logout}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-end items-center">
      <div className="relative group">
        <button
          onClick={toggleDropdown}
          className="text-white bg-black p-2 flex border-2 rounded-lg"
        >
          <FaUserCircle className="h-6 w-6" />
          <p className="px-2">{username}</p>
          <RiArrowDownSLine className="h-6 w-6" />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul>
              <li className="hover:bg-gray-100">
                <Link to="/dashboard/settings" className="block px-4 py-2">
                  Profil
                </Link>
              </li>
              <li className="hover:bg-gray-100">
                <Link  to="/login" className="block px-4 py-2" onClick={logout}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
