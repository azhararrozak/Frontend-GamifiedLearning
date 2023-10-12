import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Unauthorized from "./Unauthorized";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        <div className="h-screen flex bg-[#FBF7EF]">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div className="flex-1 p-6 overflow-auto">
            <Header username={user.username} logout={handleLogout} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
            <main className="mt-6">
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
