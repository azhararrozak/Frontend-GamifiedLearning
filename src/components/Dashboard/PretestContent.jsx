import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";

const PretestContent = () => {
  const { name } = useParams();
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await QuizService.getQuizByTitle(name);
        setQuizData(res.data.quiz);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        setError(error.message || "An error occurred while fetching the quiz.");
        setLoading(false);
      }
    };
    getQuiz();
  }, [name]);

  // Fungsi untuk menangani pemilihan opsi jawaban
  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedAnswer(prevOptions => ({
      ...prevOptions,
      [questionId]: optionIndex,
    }));
  };
  // Fungsi untuk pindah ke pertanyaan berikutnya
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  // Fungsi untuk pindah ke pertanyaan sebelumnya
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmitQuiz = async () => {
    console.log("Selected options:", selectedAnswer);
    //Add your quiz submission logic here
    try {
      const res = await QuizService.submitQuiz(quizData._id, selectedAnswer);
      setTotalScore(res.data.score)
      // if (res.data && res.data.score) {
      //   setScore(res.data.score);
      //   toast.success(`Your score is ${res.data.score}!`);
      // } else {
      //   toast.error("Error submitting quiz!");
      // }
    } catch (error) {
      console.log("Error submitting quiz:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quizData || quizData.questions.length === 0) {
    return <div>No quiz data available.</div>;
  }

  const currentQuestionData = quizData.questions[currentQuestion];

  return (
    <div>
      <h1 className="text-2xl font-bold">Pretest Pages</h1>
      <div>
        <h2>{currentQuestionData.question}</h2>
        <div>
          {currentQuestionData.options.map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="option"
                  checked={selectedAnswer[currentQuestion] === option._id}
                  onChange={() => handleOptionSelect(currentQuestion, option._id)}
                />
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div>
          {currentQuestion !== 0 && (
            <button onClick={prevQuestion}>Previous</button>
          )}
          {currentQuestion !== quizData.questions.length - 1 ? (
            <button onClick={nextQuestion}>Next</button>
          ) : (
            <button onClick={handleSubmitQuiz}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PretestContent;
