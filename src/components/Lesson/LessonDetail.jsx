import { useState, useEffect } from "react";
import LessonService from "../../services/lesson.service";
import { useParams } from "react-router-dom";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { toast } from "react-hot-toast";
import AuthService from "../../services/auth.service";

const LessonDetail = () => {
  let { lessonId } = useParams();
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    LessonService.getLessonById(lessonId).then((response) => {
      setDetail(response.data);
    });
  }, [lessonId]);

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

  return (
    <div>
      <h1>{detail.title}</h1>
      <p>{detail.content}</p>
      <button className="border px-4 py-2" onClick={onFinishRead}>
        Selesai
      </button>
    </div>
  );
};

export default LessonDetail;
