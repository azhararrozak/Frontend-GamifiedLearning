/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import LessonService from "../../services/lesson.service";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill's styles

const CreateLesson = ({ isOpen, onClose }) => {
  const { unitId } = useParams();
  const [lessonData, setLessonData] = useState({
    unitId,
    title: "",
    content: "",
    images: "",
    urlVideo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLessonData({ ...lessonData, [name]: value });
  };

  const handleContentChange = (content) => {
    setLessonData({ ...lessonData, content });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { unitId, title, content, images, urlVideo } = lessonData;
      const response = await LessonService.createLesson(unitId, title, content, images, urlVideo);
      toast.success(response.data.message);
      setLessonData({
        title: "",
        content: "",
        images: "",
        urlVideo: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 bg-white p-6 rounded-lg w-1/2 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold mb-4">Create Lesson</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <IoClose className="text-2xl" /> {/* Ikon cross */}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={lessonData.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4 max-h-[60vh]">
              <label htmlFor="content" className="block text-gray-700">
                Content
              </label>
              <ReactQuill
                id="content"
                value={lessonData.content}
                onChange={handleContentChange}
                modules={quillModules} // Define Quill modules (e.g., toolbar options)
                className="rounded"
                style={{ maxHeight: '40vh', overflowY: 'auto' }}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700">
                Images URL
              </label>
              <input
                type="text"
                id="images"
                name="images"
                value={lessonData.images}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700">
                Video URL
              </label>
              <input
                type="text"
                id="urlVideo"
                name="urlVideo"
                value={lessonData.urlVideo}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

// Define Quill modules (customize this as needed)
const quillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    [{ color: [] }, { background: [] }],
    ["link"],
    ['code-block']
  ],
};

export default CreateLesson;
