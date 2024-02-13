import React from "react";

const StartsQuiz = ({ quizData, handleStartQuiz }) => {
  return (
    <div className="max-w-screen-sm mx-auto shadow-lg bg-white py-6 rounded-lg">
      <img
        src="../../start-quiz.png"
        alt="start-quiz"
        className="lg:w-2/6 w-1/2 m-auto"
      />
      <div className="w-[400px] m-auto">
        <h1 className="text-xl font-bold mt-6 capitalize">
          Siap Untuk Memulai {quizData.title}
        </h1>
        <p className="my-2">{quizData.description}</p>
        <p className="my-2 font-bold opacity-75">
          {quizData.questions.length} Pertanyaan - 30 Menit
        </p>
      </div>
      <button
        className="rounded-md hover:bg-secondary hover:text-primary bg-accent text-primary font-medium px-4 py-2"
        onClick={handleStartQuiz}
      >
        Kerjakan Sekarang!
      </button>
    </div>
  );
};

export default StartsQuiz;
