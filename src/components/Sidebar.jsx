/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
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

const Sidebar = ({ isSidebarOpen }) => {
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
        isSidebarOpen ? "block" : "hidden"
      } lg:block lg:w-64 bg-black text-white py-4`}
    >
      <div className="text-center text-2xl text-[#AFF096] font-semibold">
        <Link to="/">Gamified</Link>
      </div>
      <nav className="mt-8">
        <ul className="pr-4">
          <li className="mb-4">
            <NavLink
              to="/dashboard/overview"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
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
              className="p-4 flex rounded-sm cursor-pointer text-white"
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
                      `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                        isActive ? "bg-[#FBF7EF] text-black" : ""
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
                      `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                        isActive ? "bg-[#FBF7EF] text-black" : ""
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
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
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
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
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
              className="p-4 flex rounded-sm cursor-pointer text-white"
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
                      `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                        isActive ? "bg-[#FBF7EF] text-black" : ""
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
                      `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                        isActive ? "bg-[#FBF7EF] text-black" : ""
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
                      `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                        isActive ? "bg-[#FBF7EF] text-black" : ""
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
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
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
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
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
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <RiSettings2Line className="w-6 h-6 mr-2" />
              Pengaturan
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
