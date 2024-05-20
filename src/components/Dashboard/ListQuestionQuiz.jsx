import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuizService from "../../services/quiz.service";

const ListQuestionQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    QuizService.getAllQuiz().then((response) => {
      setQuiz(response.data);
    });
  }, []);

  return (
    <div className="border rounded-md p-4">
      <Link
        className="bg-secondary text-primary font-bold p-2"
        to="/dashboard/create_quiz"
      >
        Buat Quiz
      </Link>
      <h1 className="text-2xl font-bold my-4">Daftar Pertanyaan</h1>
      <div className="my-4 grid grid-cols-1 gap-4">
        {quiz.map((q) => (
          <div key={q._id} className="border-2 rounded-md p-4">
            <Link to={`/dashboard/edit_quiz/${q._id}`}>{q.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListQuestionQuiz;
