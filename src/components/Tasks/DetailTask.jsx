import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import TaskService from "../../services/task.service"

const DetailTask = () => {
    const {taskId} = useParams()
    const [task, setTask] = useState([])

    useEffect(() => {
        TaskService.getTaskById(taskId).then((response) => {
            setTask(response.data)
        })
    }
    , [taskId, task])



  return (
    <div>
        <h1>{task.title}</h1>
        <p>{task.content}</p>
        <button className="py-2 bg-blue-500">Submit Tugas</button>
    </div>
  )
}

export default DetailTask