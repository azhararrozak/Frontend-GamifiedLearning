const ScoreModal = ({ totalScore, onClose, title }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/2 p-8 rounded shadow-lg">
        <div className="text-center">
          {title === "Quiz" ? (
            <div>
              {totalScore >= 70 ? (
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      className="w-[15rem]"
                      src="../../pass-score.png"
                      alt="score_modal_image"
                    />
                  </div>
                  <h1 className="mt-2 font-bold text-lg">
                    Score {title} Anda Sudah Memenuhi
                  </h1>
                  <p className="my-2">
                    Apapun Hasilnya Tetap Semangat dan Terus Belajar 😊
                  </p>
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      className="w-[15rem]"
                      src="../../lose-score.png"
                      alt="score_modal_image"
                    />
                  </div>
                  <h1 className="mt-2 font-bold text-lg">
                    Score {title} Anda Masih Kurang
                  </h1>
                  <p className="my-2">
                    Apapun Hasilnya Tetap Semangat dan Terus Belajar 😊
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full">
              <div className="flex justify-center">
                <img
                  className="w-[15rem]"
                  src="../pre-post-score.png"
                  alt="score_modal_image"
                />
              </div>
              <h1 className="mt-2 font-bold text-lg">
                Selamat Anda Telah Menyelesaikan {title}
              </h1>
              <p className="my-2">
                Apapun Hasilnya Tetap Semangat dan Terus Belajar 😊
              </p>
            </div>
          )}
          <p className="text-4xl font-bold">{totalScore}</p>
          <button
            className="block mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScoreModal;
