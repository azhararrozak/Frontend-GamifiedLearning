/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineQuiz } from "react-icons/md";
import {
  RiDashboardFill,
  RiBookOpenLine,
  RiSettings2Line,
  RiDraftLine,
  RiGroupLine,
  RiCheckboxMultipleLine,
  RiDiscussFill,
} from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isTestDropdownOpen, setTestDropdownOpen] = useState(false);
  const [isKelasDropdownOpen, setKelasDropdownOpen] = useState(false);

  const toggleTestDropdown = () => {
    setTestDropdownOpen(!isTestDropdownOpen);
  };

  const toggleKelasDropdown = () => {
    setKelasDropdownOpen(!isKelasDropdownOpen);
  };

  return (
    <div
      className={`${
        isSidebarOpen
          ? "block lg:static absolute inset-0 lg:block w-64 bg-secondary text-primary py-4 overflow-y-auto lg:overflow-y-hidden z-10"
          : "hidden lg:block w-64 bg-secondary text-primary py-4 overflow-y-auto lg:overflow-y-hidden"
      }`}
    >
      <div className="w-full flex justify-end pr-4">
        <button onClick={toggleSidebar} className="lg:hidden">
          {isSidebarOpen && <FaTimes className="cursor-pointer w-6 h-6 mt-2" />}
        </button>
      </div>
      <div className="flex justify-center items-center mt-4">
        <img className="w-[2rem] mr-2" src="../Logo.png" alt="Logo" />
        <Link className="font-bold text-lg" to="/">
          Gamified Learn
        </Link>
      </div>
      <nav className="mt-8 font-medium">
        <ul className="pr-4">
          <li className="mb-4">
            <NavLink
              to="/dashboard/overview"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <RiDashboardFill className="w-6 h-6 mr-2" />
              Beranda
            </NavLink>
          </li>
          <li className="mb-4">
            <div
              onClick={toggleTestDropdown}
              className="py-4 pl-8 pr-4 flex rounded-sm cursor-pointer"
            >
              <RiDraftLine className="w-6 h-6 mr-2" />
              Test
              <span className="ml-auto">{isTestDropdownOpen ? "▲" : "▼"}</span>
            </div>
            {isTestDropdownOpen && (
              <ul className="ml-8 mt-2">
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/pretest"
                    className={({ isActive }) =>
                      `p-4 flex rounded-lg hover:bg-accent hover:text-primary ${
                        isActive ? "bg-accent text-primary" : ""
                      }`
                    }
                  >
                    Pretest
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/postest"
                    className={({ isActive }) =>
                      `p-4 flex rounded-lg hover:bg-accent hover:text-primary ${
                        isActive ? "bg-accent text-primary" : ""
                      }`
                    }
                  >
                    Postest
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/study_group"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <RiGroupLine className="w-6 h-6 mr-2" />
              Study Group
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/discus"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <RiDiscussFill className="w-6 h-6 mr-2" />
              Diskusi
            </NavLink>
          </li>
          <li className="mb-4">
            <div
              onClick={toggleKelasDropdown}
              className="py-4 pl-8 pr-4 flex rounded-sm cursor-pointer"
            >
              <RiBookOpenLine className="w-6 h-6 mr-2" />
              Learn
              {/* Tambahkan ikon dropdown */}
              <span className="ml-auto">{isKelasDropdownOpen ? "▲" : "▼"}</span>
            </div>
            {/* Tambahkan kondisi untuk menampilkan dropdown jika isDropdownOpen true */}
            {isKelasDropdownOpen && (
              <ul className="ml-8 mt-2">
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/course"
                    className={({ isActive }) =>
                      `p-4 flex rounded-lg hover:bg-accent hover:text-primary ${
                        isActive ? "bg-accent text-primary" : ""
                      }`
                    }
                  >
                    Material
                  </NavLink>
                </li>
                <li className="mb-4">
                  <NavLink
                    to="/dashboard/tasks"
                    className={({ isActive }) =>
                      `p-4 flex rounded-lg hover:bg-accent hover:text-primary ${
                        isActive ? "bg-accent text-primary" : ""
                      }`
                    }
                  >
                    LKPD
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/playground"
                    className={({ isActive }) =>
                      `p-4 flex rounded-lg hover:bg-accent hover:text-primary ${
                        isActive ? "bg-accent text-primary" : ""
                      }`
                    }
                  >
                    Playground
                  </NavLink>
                </li>

                {/* Tambahkan lebih banyak opsi dropdown sesuai kebutuhan */}
              </ul>
            )}
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/quiz"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <MdOutlineQuiz className="w-6 h-6 mr-2" />
              Quiz
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/evaluasi"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <RiCheckboxMultipleLine className="w-6 h-6 mr-2" />
              Evaluasi
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <RiSettings2Line className="w-6 h-6 mr-2" />
              Pengaturan
            </NavLink>
          </li>
          <li className="mb-4">
            <NavLink
              to="/dashboard/pengembang"
              className={({ isActive }) =>
                `py-4 px-8 flex rounded-r-lg hover:bg-accent ${
                  isActive ? "bg-accent text-primary" : ""
                }`
              }
            >
              <ImProfile className="w-6 h-6 mr-2" />
                Pengembang
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
