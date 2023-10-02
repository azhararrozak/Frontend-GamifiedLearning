/* eslint-disable react-hooks/exhaustive-deps */
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
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pemrograman Web</h1>
        {user && user.roles.includes("ROLE_ADMIN") && (
          <>
            <CreateLesson isOpen={isModalOpen} onClose={closeModal} />
            <button className="border rounded-lg bg-blue-500 px-4 py-2" onClick={openModal}>
              Create Lesson
            </button>
          </>
        )}
      </div>

      <div className="w-full flex">
        <div className="w-2/3">
          <Outlet />
          <h1>Hello</h1>
        </div>
        <div className="w-1/3">
          <ListLesson />
        </div>

      </div>
      


    </div>
  );
};

export default LessonContent;
