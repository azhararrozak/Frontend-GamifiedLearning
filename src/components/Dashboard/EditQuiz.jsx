import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const EditQuiz = () => {
  const { questionId } = useParams();
  const redirect = useNavigate();
  const initialQuestion = {
    indicator: "",
    atp: "",
    subQuestion: "",
    question: "",
    image: "",
    options: [
      { text: "", image: "", isCorrect: false },
      { text: "", image: "", isCorrect: false },
      { text: "", image: "", isCorrect: false },
      { text: "", image: "", isCorrect: false },
      { text: "", image: "", isCorrect: false },
    ],
  };

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [initialQuestion],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await QuizService.getQuizById(questionId);
        setQuiz(response.data.quiz);
      } catch (error) {
        console.error(error);
        setError("Failed to load quiz data");
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [questionId]);

  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions.splice(questionIndex, 1);
    setQuiz(updatedQuiz);
  };

  const handleAddQuestion = () => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions.push({ ...initialQuestion });
    setQuiz(updatedQuiz);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions[questionIndex].options.push({
      text: "",
      image: "",
      isCorrect: false,
    });
    setQuiz(updatedQuiz);
  };

  const handleSaveQuiz = async (e) => {
    e.preventDefault();
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions.forEach((question) => {
      const correctIndex = question.options.findIndex(
        (option) => option.isCorrect
      );
      if (correctIndex !== -1) {
        question.correctAnswer = correctIndex;
      }
      question.options.forEach((option, index) => {
        option.isCorrect = index === correctIndex;
      });
    });

    try {
      const response = await QuizService.updateQuiz(questionId, updatedQuiz);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save quiz");
    }
  };

  const DeleteQuiz = async () => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      QuizService.deleteQuiz(questionId).then(() => {
        toast.success("Quiz deleted successfully");
        redirect("/dashboard/list_quiz");
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="border rounded-md p-4">
      <div className="flex justify-between border-b-2 mb-4">
        <h2 className="text-xl text-center mb-4 uppercase font-bold">
          Form Edit Pertanyaan
        </h2>
        <FaTrash className="text-red-600 cursor-pointer" onClick={DeleteQuiz} />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="block font-bold mb-2">
          Judul:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="block font-bold mb-2">
          Deskripsi:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          value={quiz.description}
          onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
        />
      </div>

      {quiz.questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4 border-t-2 pt-2">
          <label
            htmlFor={`question${questionIndex + 1}`}
            className="block font-bold mb-2"
          >
            Pertanyaan ke-{questionIndex + 1}:
          </label>
          <textarea
            type="text"
            className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id={`question${questionIndex + 1}`}
            value={question.question}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].question = e.target.value;
              setQuiz(updatedQuiz);
            }}
          />
          <label
            htmlFor={`atp${questionIndex + 1}`}
            className="block font-bold mb-2"
          >
            ATP:
          </label>
          <input
            type="text"
            className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id={`atp${questionIndex + 1}`}
            value={question.atp}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].atp = e.target.value;
              setQuiz(updatedQuiz);
            }}
          />
          <label
            htmlFor={`indicator${questionIndex + 1}`}
            className="block font-bold mb-2"
          >
            Indikator Berpikir Logis:
          </label>
          <select
            id={`indicator${questionIndex + 1}`}
            value={question.indicator}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].indicator = e.target.value;
              setQuiz(updatedQuiz);
            }}
          >
            <option value="">Pilih Indikator</option>
            <option value="Keruntutan Berpikir">Keruntutan Berpikir</option>
            <option value="Kemampuan Berargumen">Kemampuan Berargumen</option>
            <option value="Penarikan Kesimpulan">Penarikan Kesimpulan</option>
          </select>
          <label
            htmlFor={`subQuestion${questionIndex + 1}`}
            className="block font-bold mb-2"
          >
            Sub Pertanyaan:
          </label>
          <select
            id={`subQuestion${questionIndex + 1}`}
            value={question.subQuestion}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].subQuestion = e.target.value;
              setQuiz(updatedQuiz);
            }}
          >
            <option value="">Pilih Sub Pertanyaan</option>
            <option value="Perhatikan Kode Berikut!">
              Perhatikan Kode Berikut!
            </option>
            <option value="Perhatikan Pernyataan Berikut!">
              Perhatikan Pernyataan Berikut!
            </option>
          </select>

          <div className="mb-4">
            <label htmlFor="urlImage" className="block font-bold">
              Tambahkan Gambar Pertanyaan
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full my-2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id={`imageUrl${questionIndex + 1}`}
              value={question.image}
              onChange={(e) => {
                const updatedQuiz = { ...quiz };
                updatedQuiz.questions[questionIndex].image = e.target.value;
                setQuiz(updatedQuiz);
              }}
            />
          </div>

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mb-2">
              <label
                htmlFor={`option${optionIndex + 1}`}
                className="block font-bold mb-2"
              >
                Option {optionIndex + 1}:
              </label>
              <div className="">
                <div className="flex flex-col">
                  <label htmlFor="urlImage" className="block text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full my-2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id={`imageUrl${optionIndex + 1}`}
                    value={option.image}
                    onChange={(e) => {
                      const updatedQuiz = { ...quiz };
                      updatedQuiz.questions[questionIndex].options[
                        optionIndex
                      ].image = e.target.value;
                      setQuiz(updatedQuiz);
                    }}
                  />
                  <label htmlFor="urlImage" className="block text-gray-700">
                    Jawaban {`${optionIndex + 1}`}
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full my-2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id={`option${optionIndex + 1}`}
                    value={option.text}
                    onChange={(e) => {
                      const updatedQuiz = { ...quiz };
                      updatedQuiz.questions[questionIndex].options[
                        optionIndex
                      ].text = e.target.value;
                      setQuiz(updatedQuiz);
                    }}
                  />
                </div>
                <label htmlFor="urlImage" className="block text-gray-700">
                  Jawaban Benar
                </label>
                <input
                  type="checkbox"
                  className="form-check-input ms-2 text-left"
                  checked={option.isCorrect}
                  onChange={(e) => {
                    const updatedQuiz = { ...quiz };
                    updatedQuiz.questions[questionIndex].options[
                      optionIndex
                    ].isCorrect = e.target.checked;
                    setQuiz(updatedQuiz);
                  }}
                />
              </div>
            </div>
          ))}

          <button
            className="border px-4 py-2 rounded-md mr-2 bg-green-500 text-primary font-bold"
            onClick={() => handleAddOption(questionIndex)}
          >
            Add Option
          </button>
          <button
            className="border px-4 py-2 rounded-md bg-red-600 text-primary font-bold"
            onClick={() => handleRemoveQuestion(questionIndex)}
          >
            Hapus Pertanyaan
          </button>
        </div>
      ))}

      <div className="border-t-2 pt-2">
        <button
          className="border px-4 py-2 mr-2 rounded-md bg-green-500 text-primary font-bold"
          onClick={handleAddQuestion}
        >
          Tambah Pertanyaan
        </button>
        <button
          className="border px-4 py-2 rounded-md text-primary bg-secondary font-bold"
          onClick={handleSaveQuiz}
        >
          Simpan Pertanyaan
        </button>
      </div>
    </div>
  );
};

export default EditQuiz;
