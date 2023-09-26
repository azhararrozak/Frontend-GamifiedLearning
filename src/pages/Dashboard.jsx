import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Unauthorized from "./Unauthorized";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div>
      {user ? (
        <div className="h-screen flex bg-[#FBF7EF]">
          <Sidebar />
          <div className="flex-1 p-6">
            <Header username={user.username} logout={handleLogout} />
            <main className="mt-6 p-4">
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
