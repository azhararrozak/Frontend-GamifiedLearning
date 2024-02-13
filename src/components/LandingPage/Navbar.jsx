/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";

const Navbar = ({home, contact, about, programs}) => {
  const [user, setUser] = useState(undefined);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleSetActiveSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  
  return (
    <div className="fixed w-full text-secondary bg-primary dark:text-primary dark:bg-secondary z-10">
      <nav className="p-6">
        <div className="flex items-center justify-center md:justify-center lg:justify-between">
          <div className="lg:flex hidden items-center">
            <img className="w-[2rem] mr-2" src="./Logo.png" alt="logo"/>
            <p className="font-bold text-lg">Gamified Learn</p>
          </div>
          <div className="lg:space-x-8 md:space-x-4 space-x-2 text-normal font-medium">
          <Link
              to="/"
              onClick={() => {
                home();
                handleSetActiveSection("home");
              }}
              className={`${
                activeSection === "home" ? "border-b-2 pb-1 border-secondary dark:border-primary" : ""
              } hover:text-accent dark:hover:text-accent`}
            >
              Home
            </Link>
            <Link
              onClick={() => {
                programs();
                handleSetActiveSection("programs");
              }}
              className={`${
                activeSection === "programs" ? "border-b-2 pb-1 border-secondary dark:border-primary" : ""
              } hover:text-accent dark:hover:text-accent`}
            >
              Programs
            </Link>
            <Link
              onClick={() => {
                about();
                handleSetActiveSection("about");
              }}
              className={`${
                activeSection === "about" ? "border-b-2 pb-1 border-secondary dark:border-primary" : ""
              } hover:text-accent dark:hover:text-accent`}
            >About</Link>
            {/* <Link
              onClick={() => {
                contact();
                handleSetActiveSection("contact");
              }}
              className={`${
                activeSection === "contact" ? "border-b-2" : ""
              } hover:text-secondary`}
            >Contact</Link> */}
            {user ? (
              <Link to="/dashboard/overview" className="border-2 px-4 py-2 border-secondary">
                {user.username}
              </Link>
            ) : (
              <Link to="/login" className="rounded-md px-6 py-2 text-primary bg-accent">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
