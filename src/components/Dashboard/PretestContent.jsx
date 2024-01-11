import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";
import shuffleOptions from "../../utils/shuffleOptions";

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
        const shuffleQuiz = {
          ...res.data.quiz,
          questions: res.data.quiz.questions.map((question) => ({
            ...question,
            options: shuffleOptions(question.options)
          })),
        }
        setQuizData(shuffleQuiz);
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
    setSelectedAnswer((prevOptions) => ({
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
      setTotalScore(res.data.score);
      toast.success(`Your score is ${res.data.score}!`);
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
      <div className="border p-4 h-[500px] flex flex-col justify-between">
        <div>
        <h2 className="text-center text-xl">
            {currentQuestionData.question}
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentQuestionData.options.map((option, index) => (
              <div key={index} className="mb-2">
                <label className="block cursor-pointer">
                  <input
                    type="radio"
                    name="option"
                    className="hidden"
                    checked={selectedAnswer[currentQuestion] === option._id}
                    onChange={() =>
                      handleOptionSelect(currentQuestion, option._id)
                    }
                  />
                  <div
                    className={`border rounded p-2 ${
                      selectedAnswer[currentQuestion] === option._id
                        && "bg-blue-500" // Warna latar belakang ketika opsi dipilih
                    }`}
                  >
                    {option.text}
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between">
          {currentQuestion !== 0 && (
            <button className="bg-blue-500 border px-4 py-2" onClick={prevQuestion}>Previous</button>
          )}
          {currentQuestion !== quizData.questions.length - 1 ? (
            <button className="bg-blue-500 border px-4 py-2" onClick={nextQuestion}>Next</button>
          ) : (
            <button className="bg-green-500 border px-4 py-2" onClick={handleSubmitQuiz}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PretestContent;
