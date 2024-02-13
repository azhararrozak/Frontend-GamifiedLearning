import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import UserServices from "../services/user.service";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Unauthorized from "./Unauthorized";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(undefined);
  //const [iduser, setIduser] = useState(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   const currentUser = AuthService.getCurrentUser();

  //   if (currentUser) {
  //     setIduser(currentUser.id);
  //   }

  //   UserServices.getUserById(iduser).then((res) => {
  //     setUser(res.data);
  //   });
  // }, [iduser]);
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout();
  };



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {user ? (
        <div className="flex bg-primary text-secondary h-full relative">
          <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <div className="flex-1 overflow-auto h-screen block">
            <Header user={user} logout={handleLogout} toggleSidebar={toggleSidebar}/>
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </div>
  );
};

export default Dashboard;
