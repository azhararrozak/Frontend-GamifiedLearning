import { useState } from "react";
import LessonService from "../../services/lesson.service";
// import Plyr from "plyr-react";
// import "plyr-react/plyr.css"

const VideosPage = ({ urlVideo, lessonId, user, comments }) => {
  const [commentData, setCommentData] = useState({
    user: user,
    comment: "",
  });

  // const videoSrc = {
  //   type: "video",
  //   sources: [
  //     {
  //       src: "wDMTaLZ-XX0",
  //       provider: "youtube"
  //     }
  //   ]
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, comment } = commentData
      const res = await LessonService.postComment(lessonId, user, comment)
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <iframe
        className="w-full h-auto md:h-[600px]"
        src={`https://www.youtube.com/embed/${urlVideo}`}
      ></iframe>
      <div className="border w-full p-2">
        <h1 className="text-xl font-bold">Komentar</h1>
        <form className="mb-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <textarea
              type="text"
              id="comment"
              name="comment"
              value={commentData.comment}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Kirim Komentar
          </button>
        </form>
        {comments.map((comment) =>(
          <div className="border" key={comment._id}>
          <h3 className="font-bold text-sm">{comment.user}</h3>
          <p>{comment.comment}</p>
        </div>
        ))}
        
      </div>
    </>
  );
};

export default VideosPage;
