import { useState, useEffect } from "react";
import LessonService from "../../services/lesson.service";
import { Link, useParams } from "react-router-dom";
import AuthService from "../../services/auth.service";
import BadgeService from "../../services/badge.service";
import authHeader from "../../services/auth-header";
import { toast } from "react-hot-toast";
import axios from "axios";

const ListLesson = () => {
  const [titleUnit, setTitleUnit] = useState("");
  const [lessons, setLessons] = useState([]);
  const [userActive, setUser] = useState(undefined);
  const { unitId } = useParams();

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    LessonService.getLessons(unitId).then((response) => {
      setLessons(response.data.lessons);
      setTitleUnit(response.data.title);
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
    set
  };

  const allFinished = async () => {
    // fetch badge
    try {
      if (userActive && userActive.id) {
        const postData = { unitId: unitId, badgeName: titleUnit }
        
        const response = await BadgeService.addBadge(userActive.id, postData)
        toast.success(response.data.message);
        
      } else {
        toast.error("Anda sudah menambahkan badge sebelumnya.");
      }
    } catch (error) {
      toast.error("Gagal menambahkan badge, sudah pernah mendapatkan badge sebelumnya.");
    }
  };

  return (
    <div className="flex flex-col md:sticky top-2 w-full">
      <h1 className="text-xl font-bold">List Materi - {titleUnit}</h1>
      {lessons.map((lesson, index) => {
        const canAccess = canAccessLesson(index);

        return (
          <div
            key={lesson._id}
            className={`p-2 my-2 bg-white shadow-md font-medium rounded-md ${canAccess ? "" : "opacity-50"}`}
          >
            {canAccess ? (
              <Link className="flex justify-start items-center" to={lesson._id}>
                <img
                  src={lesson.images}
                  className="w-[3rem] rounded-full mr-2"
                  alt="lesson"
                />
                <h1 className="text-md">{lesson.title}</h1>
              </Link>
            ) : (
              <p>
                Anda harus menyelesaikan pelajaran sebelumnya terlebih dahulu
              </p>
            )}
          </div>
        );
      })}

      {lessons.length > 0 && (
        <button
          className={`bg-accent text-primary rounded-md font-medium px-4 py-2 mt-2 cursor-pointer ${!allLessonsCompleted() ? "opacity-50 bg-slate-500" : ""}`}
          onClick={allFinished}
          disabled={!allLessonsCompleted()}
        >
          Selesaikan Semua Materi
        </button>
      )}
    </div>
  );
};

export default ListLesson;
