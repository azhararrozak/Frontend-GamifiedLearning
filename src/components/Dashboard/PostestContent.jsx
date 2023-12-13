import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import { Link, useParams } from "react-router-dom";
import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";

const PostestContent = () => {
  const [user, setUser] = useState(undefined);
  const { name } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await QuizService.getQuizByTitle(name);
        setQuiz(res.data.quiz);
        setSelectedAnswers(
          new Array(res.data.quiz.questions.length).fill(null)
        );
        setCorrectAnswers(
          res.data.quiz.questions.map((question) => question.correctAnswer)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getQuiz();
  }, [name]);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleGoBack = () => {
    setCurrentQuestion(0);
  };

  const handleSubmitQuiz = async () => {
    console.log(selectedAnswers);
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const currentQuestionData = quiz.questions[currentQuestion];

  return (
    <div>
      <h1 className="text-2xl font-bold">Postest</h1>
      <div className="flex flex-col md:flex-row justify-end items-center">
        {user && user.roles.includes("ROLE_ADMIN") && (
          <>
            <button className="border rounded-lg bg-blue-500 px-4 py-2">
              <Link to="/dashboard/create_quiz">Create Quiz</Link>
            </button>
          </>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3>Question {currentQuestion + 1} </h3>
          <p>{currentQuestionData.question}</p>
          <ul className="list-disc list-inside">
            {currentQuestionData.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={`p-2 m-2 border rounded-lg ${
                  selectedAnswers[currentQuestion] === optionIndex
                    ? "bg-green-200"
                    : ""
                }`}
                onClick={() => handleOptionSelect(currentQuestion, optionIndex)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <button
              className="border rounded-lg bg-blue-500 px-4 py-2"
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
            <button
              className="border rounded-lg bg-blue-500 px-4 py-2"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostestContent;
