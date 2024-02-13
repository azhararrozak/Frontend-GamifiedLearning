import { useState, useEffect } from "react";
import CreateLesson from "../Modal/CreateLesson";
import AuthService from "../../services/auth.service";
import ListLesson from "../Lesson/ListLesson";
import { Outlet } from "react-router-dom";

const LessonContent = () => {
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
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-end items-center">
        {user && user.roles.includes("ROLE_ADMIN") && (
          <>
            <CreateLesson isOpen={isModalOpen} onClose={closeModal} />
            <button className="border rounded-lg bg-accent text-primary font-medium px-4 py-2" onClick={openModal}>
              Create Lesson
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mb-4 md:mb-0 pr-0 md:pr-4">
          <Outlet />
        </div>
        <div className="w-full md:w-1/3">
          <ListLesson />
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
