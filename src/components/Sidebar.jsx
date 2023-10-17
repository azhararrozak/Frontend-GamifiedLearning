/* eslint-disable react/prop-types */

import { FaTasks } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import {
  RiDashboardFill,
  RiBookOpenLine,
  RiSettings2Line,
} from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
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
            <NavLink
              to="/dashboard/course"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <RiBookOpenLine className="w-6 h-6 mr-2" />
              Kelas
            </NavLink>
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
              to="/dashboard/tasks"
              className={({ isActive }) =>
                `p-4 flex rounded-sm hover:bg-[#FBF7EF] hover:text-black ${
                  isActive ? "bg-[#FBF7EF] text-black" : ""
                }`
              }
            >
              <FaTasks className="w-6 h-6 mr-2" />
              Tugas
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
