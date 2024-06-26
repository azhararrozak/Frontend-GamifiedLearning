import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskService from "../../services/task.service";
import AuthService from "../../services/auth.service";
import { toast } from "react-hot-toast";
import ListTaskSubmit from "./ListTaskSubmit";
import EditTask from "../Modal/EditTask";

const DetailTask = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [task, setTask] = useState([]);
  const [user, setUser] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskSubmit, setTaskSubmit] = useState({
    urlFile: "",
  });
  

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    TaskService.getTaskById(taskId).then((response) => {
      setTask(response.data);
    });
  }, [taskId, task]);

  useEffect(() => {
    TaskService.getListSubmit(taskId).then((response) => {
      setTaskSubmit(response.data);
    });
  }, [taskId]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskSubmit({ ...taskSubmit, [name]: value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { urlFile } = taskSubmit;
      const response = await TaskService.submitTask(taskId, user.id, urlFile);
      console.log(response);
      toast.success(response.data.message);
      setTaskSubmit({
        urlFile: "",
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  

  const deleteTask = async (e) => {
    e.preventDefault();
    try {
      const response = await TaskService.deleteTask(taskId);
      navigate("/dashboard/tasks");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 p-4">
        <h1 className="font-bold text-xl capitalize">{task.title}</h1>
        <p>{task.content}</p>
        <iframe src={task.urlTask} className="w-full h-[700px] mb-4"/>
        
        {user && user.roles.includes("ROLE_ADMIN") && (
          <>
            <EditTask id={taskId} isOpen={isModalOpen} onClose={closeModal} />
            <button className="border rounded-lg bg-red-600 px-4 py-2 text-primary" onClick={deleteTask}>
              Delete Lesson
            </button>
            <button className="border rounded-lg bg-green-500 px-4 py-2 text-primary" onClick={openModal}>
              Edit Lesson
            </button>
          </>
        )}
      </div>
      <div className="lg:w-1/2 p-4">
        {user && user.roles.includes("ROLE_ADMIN") ? (
          <div>
            <h1 className="font-bold text-xl">Daftar Submit Peserta Didik</h1>
            <ListTaskSubmit id={taskId} />
          </div> ) : (
            <div>
              <div>
              <h1 className="font-bold text-xl">Submit LKPD</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="title" className="block text-gray-700">
                    Masukkan Link URL
                  </label>
                  <div className="flex gap-2">
                  <input
                    type="text"
                    name="urlFile"
                    id="urlFile"
                    value={taskSubmit.urlFile}
                    onChange={handleInputChange}
                    className="border rounded-xl p-2 w-full"
                  />
                  <button className="border rounded-lg bg-blue-500 px-4 py-2">
                  Submit
                </button>
                  </div>
                </div>
              </form>
              </div>
              <div>
                <h1 className="font-bold text-xl">Daftar Submit Peserta Didik</h1>
                <ListTaskSubmit id={taskId} />
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default DetailTask;
