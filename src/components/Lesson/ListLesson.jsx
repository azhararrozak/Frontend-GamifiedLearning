import { useState, useEffect } from "react";
import LessonService from "../../services/lesson.service";
import { Link } from "react-router-dom";

const ListLesson = () => {
  const [Lesson, setLesson] = useState([]);

  useEffect(() => {
    LessonService.getLessons().then((response) => {
      setLesson(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col ">
      {Lesson.map((lesson) => {
        return (
          <div key={lesson._id} className="flex py-2 my-2 border">
            <Link to={`/dashboard/course/lesson/${lesson._id}`}>
            <img src={lesson.images} className="rounded-full w-10" alt="lesson" />
            <h1>{lesson.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListLesson;
