import { useState, useEffect } from "react";
import QuizService from "../../services/quiz.service";
import { Link } from "react-router-dom";

const ListQuiz = () => {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const getAllQuiz = async () => {
      try {
        const res = await QuizService.getQuizzes();
        setQuiz(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllQuiz();
  }, []);

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl">Daftar Quiz</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {quiz &&
          quiz.map((quiz) => (
            <div
              className="bg-white rounded-md shadow-lg my-2 p-4"
              key={quiz._id}
            >
              <h2 className="font-bold text-lg">{quiz.title}</h2>
              <p className="my-2">{quiz.description}</p>
              <div className="mt-4 flex justify-end">
                <Link to={`${quiz._id}`} className="px-6 py-2 bg-accent text-primary font-medium rounded-md">
                  Detail Quiz
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListQuiz;
