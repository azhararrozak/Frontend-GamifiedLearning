import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { storage } from "../../utils/firebaseInit";

const CreateQuiz = () => {
  const initialQuestion = {
    question: "",
    image: "",
    options: [
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
    ],
  };

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    questions: [initialQuestion],
  });

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
      isCorrect: false,
    });
    setQuiz(updatedQuiz);
  };

  const handleImageChange = async (e, questionIndex) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      const updatedQuiz = { ...quiz };
      updatedQuiz.questions[questionIndex].image = imageURL; // Simpan previewURL di sini
      setQuiz(updatedQuiz);

      try {
        const imageRef = storage
          .ref()
          .child(`question_image/${selectedImage.name}`);
        await imageRef.put(selectedImage);
        const downloadURL = await imageRef.getDownloadURL();

        const updatedQuiz = { ...quiz };
        updatedQuiz.questions[questionIndex].image = downloadURL;
        setQuiz(updatedQuiz);
      } catch (error) {
        console.error("Error uploading image to Firebase:", error);
      }
    }
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
        if (index === correctIndex) {
          option.isCorrect = true;
        } else {
          option.isCorrect = false;
        }
      });
    });

    try {
      const response = await QuizService.createQuiz(updatedQuiz);
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border rounded-md p-4 text-primary">
      <h2 className="text-xl text-center mb-4 uppercase font-bold">
        Create a Quiz
      </h2>

      <div className="mb-3">
        <label htmlFor="title" className="block font-bold mb-2">
          Title:
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
          Description:
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
            Question {questionIndex + 1}:
          </label>
          <input
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

          {question.image && ( // Tampilkan previewURL jika ada
            <div className="mb-4">
              <img
                src={question.image}
                alt="Preview"
                style={{ maxWidth: "100%", maxHeight: "200px" }}
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="urlImage" className="block text-gray-700">
              Choose Question Image
            </label>
            <input
              type="file"
              name="urlImage"
              id="urlImage"
              onChange={(e) => handleImageChange(e, questionIndex)}
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
              <div className="flex">
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
                <input
                  type="checkbox"
                  className="form-check-input ms-2"
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
            className="border px-4 py-2 rounded-md mr-2"
            onClick={() => handleAddOption(questionIndex)}
          >
            Add Option
          </button>
          <button
            className="border px-4 py-2 rounded-md"
            onClick={() => handleRemoveQuestion(questionIndex)}
          >
            Remove Question
          </button>
        </div>
      ))}

      <div className="border-t-2 pt-2">
        <button className="border px-4 py-2 mr-2" onClick={handleAddQuestion}>
          Add Question
        </button>
        <button className="border px-4 py-2" onClick={handleSaveQuiz}>
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default CreateQuiz;
