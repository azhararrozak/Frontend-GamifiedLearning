import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthService from "../../services/auth.service";
import LessonService from "../../services/lesson.service";
import PointService from "../../services/point.service";
import EditLesson from "../Modal/EditLesson";
import "react-quill/dist/quill.core.css";
import VideosPage from "./VideosPage";

const LessonDetail = () => {
  const navigate = useNavigate();
  let { lessonId } = useParams();
  const [detail, setDetail] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readView, setReadView] = useState(true);

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

  const onFinishRead = async () => {
    try {
      if (user && user.id) {
        const postData = {
          lessonId: lessonId,
        };

        const response = await PointService.addPoint(user.id, postData);
        toast.success(response.data.message);
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
      navigate("/dashboard/course");
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeVideoView = () => {
    setReadView(false);
  };

  const handleChangeReadView = () => {
    setReadView(true);
  };

  return (
    <div>
      {/* Render the content using dangerouslySetInnerHTML */}
      <div>
        <h1 className="font-bold text-xl mb-3">{detail.title}</h1>
        <div className="border-b-2 flex ">
          <div
            onClick={handleChangeReadView}
            className="w-1/2 text-center cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-md"
          >
            Baca Materi
          </div>
          <div
            onClick={handleChangeVideoView}
            className="w-1/2 text-center cursor-pointer hover:bg-secondary hover:text-primary hover:rounded-md"
          >
            Video Materi
          </div>
        </div>
        {readView ? (
          <div className="ql-snow">
            <div
            className="view ql-editor"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></div>
          </div>
          
        ) : (
          <div className="w-full p-4 flex flex-col justify-center items-center">
            {detail.video.urlVideo ? (
              <VideosPage
                urlVideo={detail.video.urlVideo}
                lessonId={lessonId}
                user={user.username}
                comments={detail.video.commentars}
              />
            ) : (
              <h1 className="text-center">Tidak Ada Video</h1>
            )}
          </div>
        )}
      </div>
      <button className="bg-secondary text-primary font-bold rounded-md px-4 py-2 mr-2" onClick={onFinishRead}>
        Selesai Membaca Materi
      </button>
      {user && user.roles.includes("ROLE_ADMIN") && (
        <>
          <EditLesson isOpen={isModalOpen} onClose={closeModal} id={lessonId} />
          <button
            className="border rounded-lg bg-green-500 text-primary font-bold px-4 py-2"
            onClick={openModal}
          >
            Edit Lesson
          </button>
          <button
            className="border rounded-lg bg-red-600 text-primary font-bold px-4 py-2"
            onClick={deleteLesson}
          >
            Delete Lesson
          </button>
          
        </>
      )}
    </div>
  );
};

export default LessonDetail;
