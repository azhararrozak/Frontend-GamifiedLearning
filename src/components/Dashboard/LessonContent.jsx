/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import CreateLesson from "../Modal/CreateLesson";
import AuthService from "../../services/auth.service";

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
      <h1>LessonContent</h1>
      {user && user.roles.includes("ROLE_ADMIN") && (
        <>
          <CreateLesson isOpen={isModalOpen} onClose={closeModal} />
          <button className="border bg-blue-500 px-2 py-3" onClick={openModal}>
            Create Lesson
          </button>
        </>
      )}
    </div>
  );
};

export default LessonContent;
