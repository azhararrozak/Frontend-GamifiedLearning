import { useState, useEffect } from "react";
import LessonService from "../../services/lesson.service";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import authHeader from "../../services/auth-header";
import {toast} from "react-hot-toast";
import axios from "axios";

const ListLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [userActive, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    LessonService.getLessons().then((response) => {
      setLessons(response.data);
    });
  }, [lessons]);

  const canAccessLesson = (lessonIndex) => {
    if (lessonIndex === 0) {
      return true;
    }

    const previousLesson = lessons[lessonIndex - 1];

    const userCompletion = previousLesson.completedByUsers.find(
      (user) => user.userId === userActive.id
    );

    return userCompletion && userCompletion.completed;
  };

  // Fungsi untuk memeriksa apakah semua pelajaran telah selesai
  const allLessonsCompleted = () => {
    return lessons.every((lesson) => {
      const userCompletion = lesson.completedByUsers.find(
        (user) => user.userId === userActive.id
      );
      return userCompletion && userCompletion.completed;
    });
  };

  const allFinished = async () => {
    // fetch badge
    try {
      if (userActive && userActive.id) {
        axios
          .post(`http://localhost:5000/api/${userActive.id}/badge/add`, {badgeName: "Kursus Selesai"}, { headers: authHeader() })
          .then((response) => {
            toast.success(response.data.message);
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
      } else {
        toast.error("Anda sudah menambahkan poin sebelumnya.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col">
      {lessons.map((lesson, index) => {
        const lessonUrl = `/dashboard/course/lesson/${lesson._id}`;
        const canAccess = canAccessLesson(index);

        return (
          <div
            key={lesson._id}
            className={`flex py-2 my-2 border ${
              canAccess ? "" : "opacity-50"
            }`}
          >
            {canAccess ? (
              <Link to={lessonUrl}>
                <img
                  src={lesson.images}
                  className="rounded-full w-10"
                  alt="lesson"
                />
                <h1>{lesson.title}</h1>
              </Link>
            ) : (
              <p>Anda harus menyelesaikan pelajaran sebelumnya terlebih dahulu</p>
            )}
          </div>
        );
      })}
      {allLessonsCompleted() && (
        <div>
          <button className="w-full bg-blue-500 py-2" onClick={allFinished}>Selesaikan Course</button>
        </div>
      )}
    </div>
  );
};

export default ListLesson;
