/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = ({ user, logout, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between px-6 py-4 lg:justify-end items-center bg-[#fff] text-secondary">
      {" "}
      <button
        onClick={toggleSidebar} // Memanggil fungsi toggleSidebar saat tombol diklik
        className="p-2 flex lg:hidden" // Menambahkan kelas lg:hidden agar tombol ini hanya muncul di layar kecil
      >
        <FaBars className="h-6 w-6" />
      </button>
      <div className="relative group">
        <button onClick={toggleDropdown} className=" p-2 flex">
          {user ? (
            <img
              src={user.profile || "/profile.png"}
              alt="profile"
              width={25}
              className="rounded-full bg-white"
            />
          ) : (
            <FaUserCircle className="h-6 w-6" />
          )}
          <p className="px-2 capitalize">{user.username}</p>
          <RiArrowDownSLine className="h-6 w-6" />
        </button>
        {isOpen && (
          <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul>
              <li className="hover:bg-gray-100">
                <Link to="/dashboard/settings" className="block px-4 py-2">
                  Profil
                </Link>
              </li>
              {user.roles[0] === "ROLE_ADMIN" && (
                <>
                  <li className="hover:bg-gray-100">
                    <Link
                      to="/dashboard/hasilnilai"
                      className="block px-4 py-2"
                    >
                      Hasil Nilai
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link to="/dashboard/create_quiz" className="block px-4 py-2">
                      Pertanyaan
                    </Link>
                  </li>
                </>
              )}
              <li className="hover:bg-gray-100">
                <Link to="/login" className="block px-4 py-2" onClick={logout}>
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
