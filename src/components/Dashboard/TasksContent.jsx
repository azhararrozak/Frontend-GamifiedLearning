import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import CreateTask from "../Modal/CreateTask";
import { Outlet } from "react-router-dom";


const TasksContent = () => {
  const [user, setUser] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Task List</h1>
      {user && user.roles.includes("ROLE_ADMIN") && (
          <>
            <CreateTask isOpen={isModalOpen} onClose={closeModal} />  
            <button className="border rounded-lg bg-blue-500 px-4 py-2" onClick={openModal}>
              Create Task
            </button>
          </>
        )}
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default TasksContent