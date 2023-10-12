import { useState, useEffect } from "react";
import LessonService from "../../services/lesson.service";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { toast } from "react-hot-toast";
import AuthService from "../../services/auth.service";
import EditLesson from "../Modal/EditLesson";
import "react-quill/dist/quill.core.css";

const LessonDetail = () => {
  const navigate = useNavigate();
  let { lessonId } = useParams();
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    LessonService.getLessonById(lessonId).then((response) => {
      setDetail(response.data);
    });
  }, [lessonId, detail]);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const onFinishRead = () => {
    try {
      if (user && user.id) {
        const postData = {
          lessonId: lessonId,
        };
        // Lakukan pengecekan di sini apakah pengguna sudah menambahkan poin atau tidak
        axios
          .post(`http://localhost:5000/api/${user.id}/point/add`, postData, { headers: authHeader() })
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
  };

  const deleteLesson = () => {
    try {
      const response = LessonService.deleteLesson(lessonId);
      navigate("/dashboard/course/lesson");
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
    <div>
      <h1>{detail.title}</h1>
      {/* Render the content using dangerouslySetInnerHTML */}
      <div className="view ql-editor" dangerouslySetInnerHTML={{ __html: detail.content }}></div>
      <button className="border px-4 py-2" onClick={onFinishRead}>
        Selesai
      </button>
      {user && user.roles.includes("ROLE_ADMIN") && (
          <>
            <EditLesson isOpen={isModalOpen} onClose={closeModal} id={lessonId} />
            <button className="border rounded-lg bg-blue-500 px-4 py-2" onClick={deleteLesson}>
              Delete Lesson
            </button>
            <button className="border rounded-lg bg-blue-500 px-4 py-2" onClick={openModal}>
              Edit Lesson
            </button>
          </>
        )}
    </div>
  );
};

export default LessonDetail;
