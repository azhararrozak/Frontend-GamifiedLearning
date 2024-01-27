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
    <div>
      <h1>Quiz</h1>

      {quiz &&
        quiz.map((quiz) => (
          <div className="border my-2" key={quiz._id}>
            <Link to={`${quiz._id}`}>
              <h2>{quiz.title}</h2>
              <p>{quiz.description}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ListQuiz;
