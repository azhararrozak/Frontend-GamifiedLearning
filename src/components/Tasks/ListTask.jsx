import { useEffect, useState } from "react";
import TaskService from "../../services/task.service";
import { Link } from "react-router-dom";

const ListTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskService.getTasks().then((response) => {
      setTasks(response.data);
    });
  }, [tasks]);

  const changeDate = (date) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formattedDate;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
      {tasks.map((task) => (
        <div className="border rounded-lg p-4 m-4 flex flex-col h-full" key={task._id}>
        <h1 className="text-xl font-semibold">{task.title}</h1>
        <p>{changeDate(task.date)}</p>
        <div className="flex-1">
          <p className="text-gray-500">{task.content}</p>
        </div>
        <div className="mt-auto">
          <Link to={`${task._id}`}>
            <button className="w-full py-2 bg-blue-500 rounded-md">Detail</button>
          </Link>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ListTask;
