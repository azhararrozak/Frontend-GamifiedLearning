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
    <div className="border-b-2 fixed w-full text-fontPrimary bg-primary z-10">
      <nav className="p-6">
        <div className="flex items-center justify-center text-xs md:justify-center md:text-xl lg:justify-between lg:text-xl">
          <div className="lg:flex hidden items-center">
            <img className="w-[2rem] mr-2" src="./Logo.png" alt="logo"/>
            <p className="font-bold uppercase">Gamified Learn</p>
          </div>
          <div className="lg:space-x-8 md:space-x-4  space-x-2 uppercasez ">
          <Link
              to="/"
              onClick={() => {
                home();
                handleSetActiveSection("home");
              }}
              className={`${
                activeSection === "home" ? "border-b-2" : ""
              } hover:text-secondary`}
            >
              Home
            </Link>
            <Link
              onClick={() => {
                programs();
                handleSetActiveSection("programs");
              }}
              className={`${
                activeSection === "programs" ? "border-b-2" : ""
              } hover:text-secondary`}
            >
              Programs
            </Link>
            <Link
              onClick={() => {
                about();
                handleSetActiveSection("about");
              }}
              className={`${
                activeSection === "about" ? "border-b-2" : ""
              } hover:text-secondary`}
            >About Us</Link>
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
              <Link to="/dashboard/overview" className="border-2 px-4 py-2">
                {user.username}
              </Link>
            ) : (
              <Link to="/login" className="rounded-md px-4 py-2 text-primary bg-secondary">
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
