import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import GroupService from "../../services/group.service";
import ProblemService from "../../services/problem.service";
import { toast } from "react-hot-toast";

const Problem = () => {
  const { groupId } = useParams();
  const [selectedProblem, setSelectedProblem] = useState({});
  const [problems, setProblems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ProblemService.getProblem().then((response)=>{
      setProblems(response.data);
    });
  }, [])

  const handleSaveProblem = async (selectedProblem) => {
    // Update the state with the selected problem
    setSelectedProblem(selectedProblem);
    //Send to server
    try {
      const { title, description } = selectedProblem;
      const response = await GroupService.updateProblem(
        groupId,
        title,
        description
      );
      toast.success(response.data.message);
      navigate('/dashboard/study_group');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
      {problems.map((problem) => (
        <div
          key={problem.id}
          className="max-w-md mx-4 bg-white rounded-md shadow-md"
        >
          <img className="rounded" src="../../ProblemImage.jpg" />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{problem.title}</h1>
            <p className="text-gray-600 text-justify">{problem.description}</p>
            <button
              onClick={() => handleSaveProblem(problem)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
            >
              Pilih Permasalahan Ini
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Problem;
