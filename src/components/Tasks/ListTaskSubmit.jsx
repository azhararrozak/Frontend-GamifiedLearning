/* eslint-disable react/prop-types */
import TaskService from "../../services/task.service";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AuthService from "../../services/auth.service";

const ListTaskSubmit = ({ id }) => {
  const [listSubmit, setListSubmit] = useState([]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);


  useEffect(() => {
    TaskService.getListSubmit(id).then((response) => {
      setListSubmit(response.data.map(submission => ({ ...submission })));
    });
  }, [id]);

  const handleSetComplete = async (userId, index) => {
    try {
      const submission = listSubmit[index];
      const response = await TaskService.setcompletedTask(id, userId, submission.score);
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleScoreChange = (index, value) => {
    const updatedList = [...listSubmit];
    updatedList[index].score = value;
    setListSubmit(updatedList);
  };

  return (
    <div>
      <table className="table-auto border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary">Username</th>
            <th className="border border-secondary">Url File</th>
            <th className="border border-secondary">Status</th>
            <th className="border border-secondary">Score</th>
            {user && user.roles.includes("ROLE_ADMIN") && (
            <th className="border border-secondary">Action</th>
            )}
          </tr>
        </thead>
        <tbody>
          {listSubmit.map((item, index) => (
            <tr key={item._id}>
              <td className="border border-secondary text-center">{index + 1}</td>
              <td className="border border-secondary pl-2">{item.userId && item.userId.username}</td>
              <td className="border border-secondary">
                <a
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.urlFile}
                >
                  {item.urlFile}
                </a>
              </td>
              <td className="border border-secondary">
                {item.completed ? <p>Selesai</p> : <p>Belum</p>}
              </td>
              <td className="border border-secondary text-center">{item.score ? item.score : 0}</td>
              {user && user.roles.includes("ROLE_ADMIN") && (
              <td className="border border-secondary px-3">
                
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="border border-secondary w-10 text-center"
                    type="number"
                    value={item.score}
                    onChange={(e) => handleScoreChange(index, e.target.value)}
                  />
                  <button
                    className="bg-blue-500 px-3 py-2"
                    onClick={() => handleSetComplete(item.userId && item.userId.username, index)}
                  >
                    Selesai
                  </button>
                </form>
              </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTaskSubmit;
