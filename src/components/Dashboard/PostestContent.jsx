import { useState, useEffect } from "react";
import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";
import shuffleOptions from "../../utils/shuffleOptions";
import StartsQuiz from "../Quiz/StartsQuiz";
import ScoreModal from "../Modal/ScoreModal";

const PostestContent = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const res = await QuizService.getQuizByTitle("postest");
        const shuffleQuiz = {
          ...res.data.quiz,
          questions: res.data.quiz.questions.map((question) => ({
            ...question,
            options: shuffleOptions(question.options),
          })),
        };
        setQuizData(shuffleQuiz);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        setError(error.message || "An error occurred while fetching the quiz.");
        setLoading(false);
      }
    };
    getQuiz();
  }, []);

  const handleCloseScoreModal = () => {
    setShowScoreModal(false);
    window.location.reload();
  };

  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedAnswer((prevOptions) => ({
      ...prevOptions,
      [questionId]: optionIndex,
    }));
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmitQuiz = async () => {
    // Check if all questions have been answered
    const unansweredQuestions = quizData.questions.filter(
      (question, index) => selectedAnswer[index] === undefined
    );
    if (unansweredQuestions.length === 0) {
      try {
        const res = await QuizService.submitPostest(
          quizData._id,
          selectedAnswer
        );
        setTotalScore(res.data.finalScore);
        setShowScoreModal(true);
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        } else {
          toast.error("An error occurred while submitting the quiz.");
        }
      }
    } else {
      toast.error("Tolong, isikan semua jawaban terlebih dahulu!");
    }
  };

  const handleStartQuiz = async () => {
    try {
      const resPostest = await QuizService.checkPostestByIdUser();
      const res = await QuizService.checkPretestByIdUser();
      if (res.data.message === "Anda belum mengerjakan pretest") {
        toast.error("Kerjakan Pretest Terlebih Dahulu");
      } else if (resPostest.data.message === "Anda sudah mengerjakan postest") {
        toast.error("Anda sudah mengerjakan postest");
      } else {
        setQuizStarted(true);
      }
    } catch (error) {
      console.error(error);
    }

    // startTimer();
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
    <div className="h-fit">
      {!quizStarted ? (
        <div className="flex justify-center items-center text-center h-screen">
          <div>
            <StartsQuiz quizData={quizData} handleStartQuiz={handleStartQuiz} />
          </div>
        </div>
      ) : (
        <div className="border p-4  flex flex-col justify-between">
          {/* <div>
            <p className="w-fit border p-2">Time Left: {Math.floor(timer / 60)}:{timer % 60}</p>
          </div> */}
          <div>
            <div className="justify-center mb-4 p-2 border-2 border-secondary rounded-md">
              <h1 className="font-bold">Nomor Soal:</h1>
              <div className="border p-2 mb-2 w-fit">
                {quizData.questions.map((question, index) => (
                  <button
                    key={index}
                    className={`mx-1 px-2 py-1 rounded border ${
                      index === currentQuestion
                        ? "bg-blue-500 text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="p-2 ">
                <p>
                  <span className="font-bold">ATP:</span>{" "}
                  {currentQuestionData.atp}
                </p>
                <p>
                  <span className="font-bold">Indikator:</span>{" "}
                  {currentQuestionData.indicator}
                </p>
              </div>
            </div>

            <h1 className="text-xl font-bold">Pertanyaan</h1>

            {currentQuestionData.image && (
              <>
                <p>{currentQuestionData.subQuestion}</p>
                <img
                  src={currentQuestionData.image}
                  alt="image-quiz"
                  className="w-1/2 mx-auto my-4"
                />
              </>
            )}

            <h2 className="text-justify my-4 text-xl">
              {currentQuestionData.question}
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentQuestionData.options.map((option, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    index === currentQuestionData.options.length - 1
                      ? "sm:col-span-full"
                      : ""
                  }`}
                >
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
                      className={`border border-secondary rounded p-2 ${
                        selectedAnswer[currentQuestion] === option._id &&
                        "bg-blue-500"
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
              <button
                className="bg-secondary font-bold border rounded-md text-primary px-4 py-2"
                onClick={prevQuestion}
              >
                Previous
              </button>
            )}
            {currentQuestion !== quizData.questions.length - 1 ? (
              <button
                className="bg-secondary font-bold border rounded-md text-primary px-4 py-2"
                onClick={nextQuestion}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-green-500 font-bold text-primary rounded-md border px-4 py-2"
                onClick={handleSubmitQuiz}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}

      {showScoreModal && (
        <ScoreModal
          title={"Postest"}
          totalScore={totalScore}
          onClose={handleCloseScoreModal}
        />
      )}
    </div>
  );
};

export default PostestContent;
