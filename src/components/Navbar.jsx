/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";

const Navbar = ({contact, about, programs}) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  
  return (
    <div className="border-b-2">
      <nav className="text-cyan-800 p-6">
        <div className="flex  items-center justify-center text-sm md:justify-center md:text-xl lg:justify-end lg:text-xl">
          <div className="lg:space-x-8 md:space-x-4  space-x-2 uppercase ">
            <Link to="/">Home</Link>
            <Link onClick={programs}>Programs</Link>
            <Link onClick={about}>About Us</Link>
            <Link onClick={contact}>Contact</Link>
            {user ? (
              <Link to="/dashboard" className="border-2 px-4 py-2">
                {user.username}
              </Link>
            ) : (
              <Link to="/login" className="border-2 px-4 py-2">
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
