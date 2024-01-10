import QuizService from "../../services/quiz.service";
import { toast } from "react-hot-toast";
import { useState } from "react";

const CreateQuiz = () => {
  const initialQuestion = {
    question: "",
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

  const handleSaveQuiz = async (e) => {
    e.preventDefault();
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions.forEach((question) => {
      const correctIndex = question.options.findIndex((option) => option.isCorrect);
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
    <div className="container margin-top">
      <h2>Create a Quiz</h2>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={quiz.title}
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={quiz.description}
          onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
        />
      </div>

      {quiz.questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <label
            htmlFor={`question${questionIndex + 1}`}
            className="form-label"
          >
            Question {questionIndex + 1}:
          </label>
          <input
            type="text"
            className="form-control"
            id={`question${questionIndex + 1}`}
            value={question.question}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].question = e.target.value;
              setQuiz(updatedQuiz);
            }}
          />

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mb-2">
              <label
                htmlFor={`option${optionIndex + 1}`}
                className="form-label"
              >
                Option {optionIndex + 1}:
              </label>
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
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
            className="btn btn-primary mt-2 space"
            onClick={() => handleAddOption(questionIndex)}
          >
            Add Option
          </button>
          <button
            className="btn btn-danger mt-2"
            onClick={() => handleRemoveQuestion(questionIndex)}
          >
            Remove Question
          </button>
        </div>
      ))}

      <button className="btn btn-primary" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button className="btn btn-success ms-2" onClick={handleSaveQuiz}>
        Save Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
