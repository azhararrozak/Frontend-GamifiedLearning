import { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";
import { Link, useParams } from "react-router-dom";
import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";

const PretestContent = () => {
  const [user, setUser] = useState(undefined);
  const { name } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [score, setScore] = useState(null);
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
        if (res.data && res.data.quiz) {
          setQuiz(res.data.quiz);
          setSelectedAnswers(
            new Array(res.data.quiz.questions.length).fill(null)
          );
          setCorrectAnswers(
            res.data.quiz.questions.map((question) => question.correctAnswer)
          );
        } else {
          console.log("Quiz data not found in the response.");
        }
      } catch (error) {
        console.log("Error fetching quiz:", error);
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


  const handleSubmitQuiz = async () => {
    try {
      const res = await QuizService.submitQuiz(quiz._id, selectedAnswers);
      if (res.data && res.data.score) {
        setScore(res.data.score);
        toast.success(`Your score is ${res.data.score}!`);
      } else {
        toast.error("Error submitting quiz!");
      }
    } catch (error) {
      console.log("Error submitting quiz:", error);
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const currentQuestionData = quiz.questions[currentQuestion];

  return (
    <div>
      <h1 className="text-2xl font-bold">Pretest Pages</h1>
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
          <h2>{currentQuestionData.question}</h2>
          <ul className="list-disc list-inside">
            {currentQuestionData.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={`p-2 my-2 border rounded-md cursor-pointer ${
                  selectedAnswers[currentQuestion] === optionIndex
                    ? "bg-blue-500 text-white"
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
            <button
              className="border rounded-lg bg-blue-500 px-4 py-2"
              onClick={handleSubmitQuiz}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PretestContent;
