import React from 'react';
import { useParams } from 'react-router-dom';
import GroupService from '../../services/group.service';
import { toast } from "react-hot-toast";

const Problem = () => {
  const { groupId } = useParams();
  const [selectedProblem, setSelectedProblem] = React.useState({});
  const [problems, setProblems] = React.useState([
    {
      id: 1,
      title: 'Problem 1',
      description: 'Description for Problem 1',
    },
    {
      id: 2,
      title: 'Problem 2',
      description: 'Description for Problem 2',
    },
  ]);

  const handleSaveProblem = async (selectedProblem) => {
    // Update the state with the selected problem
    setSelectedProblem(selectedProblem);
    //Send to server
    try {
      const { title, description } = selectedProblem;
      const response = await GroupService.updateProblem(groupId, title, description);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {problems.map((problem) => (
        <div key={problem.id} className="max-w-md mx-4 bg-white p-6 rounded-md shadow-md">
          <img src='./home.png' />
          <h1 className="text-xl font-semibold mb-4">{problem.title}</h1>
          <p className="text-gray-600">{problem.description}</p>
          <button
            onClick={() => handleSaveProblem(problem)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
          >
            Pilih Problem Ini
          </button>
        </div>
      ))}
      
    </div>
  );
};

export default Problem;
