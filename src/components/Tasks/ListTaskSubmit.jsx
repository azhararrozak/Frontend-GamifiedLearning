/* eslint-disable react/prop-types */
import TaskService from "../../services/task.service";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ListTaskSubmit = ({ id }) => {
  const [listSubmit, setListSubmit] = useState([{}]);

  useEffect(() => {
    TaskService.getListSubmit(id).then((response) => {
      setListSubmit(response.data);
    });
  }, [id, listSubmit]);

  const handleSetComplete = async (name) => {
    try {
      const response = await TaskService.setcompletedTask(id, name)
      console.log(response);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }


  return (
    <div>
      <table className="table-auto border-2 border-secondary">
        <thead>
          <tr>
            <th className="border border-secondary">No</th>
            <th className="border border-secondary">Username</th>
            <th className="border border-secondary">Url File</th>
            <th className="border border-secondary">status</th>
            <th className="border border-secondary">Action</th>
          </tr>
        </thead>
        <tbody>
          {listSubmit.map((item, index) => (
            <tr key={item._id}>
              <td className="border border-secondary text-center">{index + 1}</td>
              <td className="border border-secondary pl-2">{item.userId && item.userId.username}</td>
              <td className="border border-secondary"><a className="text-blue-600 underline" target="_blank" rel="noopener noreferrer" href={item.urlFile}>{item.urlFile}</a></td>
              <td className="border border-secondary">{item.completed ? <p>Selesai</p>: <p>Belum</p>}</td>
              <td className="border border-secondary">
                <button className="bg-blue-500 px-3 py-2" onClick={() => {handleSetComplete(item.userId && item.userId.username)}}>Selesai</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTaskSubmit;
