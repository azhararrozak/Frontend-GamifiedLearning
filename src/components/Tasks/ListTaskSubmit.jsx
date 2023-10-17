/* eslint-disable react/prop-types */
import TaskService from "../../services/task.service";
import { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import { toast } from "react-hot-toast";

const ListTaskSubmit = ({ id }) => {
  const [listSubmit, setListSubmit] = useState([{}]);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  useEffect(() => {
    TaskService.getListSubmit(id).then((response) => {
      setListSubmit(response.data);
    });
  }, [id, listSubmit]);

  const handleSetComplete = async (e) => {
    e.preventDefault();
    try {
      const response = await TaskService.setcompletedTask(id, user.id);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }


  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Url File</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listSubmit.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.userId && item.userId.username}</td>
              <td><a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href={item.urlFile}>{item.urlFile}</a></td>
              <td>{item.completed ? <p>Selesai</p>: <p>Belum</p>}</td>
              <td>
                <button className="bg-blue-500 px-3 py-2" onClick={handleSetComplete}>Selesai</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTaskSubmit;
