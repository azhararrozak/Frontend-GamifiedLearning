import { useState } from "react";
import ProblemService from "../../services/problem.service";
import { toast } from "react-hot-toast";

const CreateProblem = () => {
  const [problemData, setProblemData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProblemData({ ...problemData, [name]: value });
  };

  const handleSubmitProblem = async (e) => {
    e.preventDefault();

    try {
      const { title, description } = problemData;
      await ProblemService.createProblem(title, description);
      toast.success("Permasalahan berhasil di buat");
      setProblemData({
        title: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold">Buat Permasalahan</h1>
      <form onSubmit={handleSubmitProblem}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Judul
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={problemData.title}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            value={problemData.description}
            onChange={handleInputChange}
            className="w-full border-2 border-gray-300 p-2 rounded-md"
            required
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Buat Permasalahan
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProblem;
